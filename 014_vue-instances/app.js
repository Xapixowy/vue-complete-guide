const tasks = {
   1: 'Learn Vue',
   2: 'Learn Tailwind',
   3: 'Learn Firebase',
   4: 'Learn React',
   5: 'Learn Angular',
};

const app = Vue.createApp({
   data() {
      return {
         courseGoal: 'ewaiter with vue and tailwind 🔥',
         vueLink: 'https://vuejs.org/',
         htmlElement: '<h1>Vue is awesome</h1>',
      };
   },
   methods: {
      changeText() {
         const randomTask = Math.floor(Math.random() * 5) + 1;
         return tasks[randomTask];
      },
   },
});

app.mount('#user-goal');
