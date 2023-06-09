const app = Vue.createApp({
   data() {
      return {
         alertText: 'Text of my choice!',
         firstText: '',
         secondText: '',
      };
   },
   methods: {
      showAlert() {
         alert(this.alertText);
      },
      onKeyPress(e) {
         this.firstText = e.target.value;
      },
      onEnterPress(e) {
         this.secondText = e.target.value;
      },
   },
});

app.mount('#assignment');
