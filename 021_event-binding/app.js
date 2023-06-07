const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: '',
         confirmedName: '',
      };
   },
   methods: {
      increaseCounter(num) {
         this.counter += num;
      },
      decreaseCounter(num) {
         this.counter -= num;
      },
      changeYourName(e, lastName) {
         this.name = `${e.target.value} ${lastName}`;
      },
      changeConfirmedName() {
         this.confirmedName = this.name;
      },
      submitForm() {
         alert('Submitted!');
      },
   },
});

app.mount('#events');
