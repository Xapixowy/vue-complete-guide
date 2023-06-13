const app = Vue.createApp({
   data() {
      return {
         friends: [
            {
               id: 'manuel',
               name: 'Manuel Lorenz',
               phone: '01234 5678 991',
               email: 'manuel@localhost.com',
            },
            {
               id: 'julie',
               name: 'Julie Jones',
               phone: '09876 543 221',
               email: 'julie@localhost.com',
            },
         ],
      };
   },
});

app.component('friend-contact', {
   template: `
   <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ areDetailsVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-show="areDetailsVisible">
         <li><strong>Phone:</strong> {{ friend.phone }}</li>
         <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
   </li>
   `,
   data() {
      return {
         friend: {
            id: 'julie',
            name: 'Julie Jones',
            phone: '09876 543 221',
            email: 'julie@localhost.com',
         },
         areDetailsVisible: false,
      };
   },
   methods: {
      toggleDetails() {
         this.areDetailsVisible = !this.areDetailsVisible;
      },
   },
});

app.mount('#app');
