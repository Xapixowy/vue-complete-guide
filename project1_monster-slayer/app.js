const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
   data() {
      return {
         monsterHealth: 100,
         playerHealth: 100,
         round: 0,
         specialAttackCooldown: 0,
         logs: [],
      };
   },
   computed: {
      monsterHealthBarStyle() {
         return {
            transform: `translateX(-${100 - this.monsterHealth}%)`,
         };
      },
      playerHealthBarStyle() {
         return {
            transform: `translateX(-${100 - this.playerHealth}%)`,
         };
      },
      winnerSpanStyle() {
         const style = { color: '#3f3f3f' };
         if (!this.isGameRunning) {
            if (this.monsterHealth === 0 && this.playerHealth === 0) style.color = '#3f3f3f';
            else style.color = this.monsterHealth === 0 ? 'green' : 'red';
         }
         return style;
      },
      isSpecialAttackButtonDisabled() {
         return this.specialAttackCooldown === 0 ? false : true;
      },
      isGameRunning() {
         return this.monsterHealth === 0 || this.playerHealth === 0 ? false : true;
      },
      winner() {
         let winner = null;
         if (!this.isGameRunning) {
            if (this.monsterHealth === 0 && this.playerHealth === 0) winner = 'Nobody';
            else winner = this.monsterHealth === 0 ? 'Player' : 'Monster';
         }
         return winner;
      },
   },
   methods: {
      attack() {
         if (this.isGameRunning) {
            this.monsterAttack();
            this.playerAttack();
            this.increaseRound();
         }
      },
      specialAttack() {
         if (this.isGameRunning && this.specialAttackCooldown === 0) {
            this.playerAttack(5, 20);
            this.monsterAttack();
            this.resetSpecialAttackCooldown();
            this.increaseRound();
         }
      },
      heal() {
         if (this.isGameRunning) {
            this.monsterAttack();
            this.playerHeal();
            this.increaseRound();
         }
      },
      surrender() {
         if (this.isGameRunning) {
            this.playerSurrender();
         }
      },
      monsterAttack(min = 1, max = 10) {
         const damage = getRandomValue(min, max);
         const health = this.playerHealth - damage;
         health < 0 ? (this.playerHealth = 0) : (this.playerHealth = health);
         this.addLog('Monster', 'attack', damage);
      },
      playerAttack(min = 1, max = 10) {
         const damage = getRandomValue(min, max);
         const health = this.monsterHealth - damage;
         health < 0 ? (this.monsterHealth = 0) : (this.monsterHealth = health);
         this.addLog('Player', 'attack', damage);
      },
      playerHeal(min = 1, max = 10) {
         const healthRegenerated = getRandomValue(min, max);
         const health = this.playerHealth + healthRegenerated;
         health > 100 ? (this.playerHealth = 100) : (this.playerHealth = health);
         this.addLog('Player', 'heal', healthRegenerated);
      },
      increaseRound() {
         this.round++;
         this.decreaseSpecialAttackCooldown();
      },
      decreaseSpecialAttackCooldown() {
         this.specialAttackCooldown > 0 && this.specialAttackCooldown--;
      },
      resetSpecialAttackCooldown() {
         this.specialAttackCooldown = 3;
      },
      playerSurrender() {
         this.playerHealth = 0;
      },
      addLog(attacker, action, value) {
         this.logs.push({ attacker, action, value });
      },
   },
});

app.mount('#game');
