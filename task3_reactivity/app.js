const app = Vue.createApp({
   data() {
      return {
         number: 0,
      };
   },
   computed: {
      result() {
         let message;
         if (this.number < 37) message = 'Not there yet';
         else if (this.number > 37) message = 'Too much!';
         else message = this.number;
         return message;
      },
   },
   watch: {
      number(value) {
         value >= 37 &&
            setTimeout(() => {
               this.number = 0;
            }, 5000);
      },
   },
   methods: {
      addNumber(num) {
         this.number += num;
      },
   },
});

app.mount('#assignment');
