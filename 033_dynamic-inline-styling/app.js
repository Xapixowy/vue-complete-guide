const app = Vue.createApp({
   data() {
      return {
         boxSelected: null,
      };
   },
   computed: {
      boxAClasses() {
         return { active: this.boxSelected === 1 };
      },
      boxBClasses() {
         return { active: this.boxSelected === 2 };
      },
      boxCClasses() {
         return { active: this.boxSelected === 3 };
      },
   },
   methods: {
      selectBox(num) {
         this.boxSelected = num;
      },
   },
});

app.mount('#styling');
