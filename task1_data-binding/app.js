const app = Vue.createApp({
   data() {
      return {
         name: 'Jacob',
         age: 22,
         imageUrl: 'https://media.tenor.com/AynPukd-dXkAAAAd/dwayne-the-rock.gif',
      };
   },
   methods: {
      randomNumber() {
         const randomNumber = Math.random().toFixed(5);
         return randomNumber;
      },
   },
});

app.mount('#assignment');
