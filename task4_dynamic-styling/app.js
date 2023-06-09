const app = Vue.createApp({
   data() {
      return {
         inputValue: '',
         inputValue2: '',
         isParagraphHidden: false,
      };
   },
   computed: {
      paragraphClasses() {
         const classes = [];
         classes.push(this.inputValue);
         classes.push({ hidden: this.isParagraphHidden, active: !this.isParagraphHidden });
         return classes;
      },
   },
   methods: {
      changeParagraphVisibility() {
         this.isParagraphHidden = !this.isParagraphHidden;
      },
   },
});

app.mount('#assignment');
