const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: '',
         lastName: '',
         // fullname: '',
      };
   },
   watch: {
      counter(value) {
         if (value > 50) {
            setTimeout(() => {
               this.counter = 0;
            }, 2000);
         }
      },
      // name(value) {
      //    this.fullname = `${value} ${this.lastName}`;
      // },
      // lastName(value) {
      //    this.fullname = `${this.name} ${value}`;
      // },
   },
   computed: {
      fullname() {
         return `${this.name} ${this.lastName}`;
      },
   },
   methods: {
      add(num) {
         this.counter += num;
      },
      reduce(num) {
         this.counter -= num;
      },
      resetInput() {
         this.name = '';
         this.lastName = '';
      },
   },
});

app.mount('#events');
