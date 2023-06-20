<template>
   <li>
      <h2>{{ friend.name }} {{ friend.isFavorite ? '⭐' : '' }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <ul v-show="detailsAreVisible">
         <li><strong>Phone:</strong> {{ friend.phone }}</li>
         <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
   </li>
</template>

<script>
export default {
   // props: ['friend'],
   props: {
      friend: {
         type: Object,
         required: false,
         default: () => {
            return {
               id: 'default',
               name: 'Default Name',
               phone: '12345 678 901',
               email: 'default.name@localhost.com',
            };
         },
         validator: (value) => {
            if (!value.name || value.name === '') {
               return false;
            } else if (!value.phone || value.phone === '') {
               return false;
            } else if (!value.email || value.email === '') {
               return false;
            }
            return true;
         },
      },
   },
   emits: {
      'toggle-favorite': (friendId) => {
         if (friendId) {
            return true;
         }
         console.warn('FriendContact emits toggle-favorite event without friendId');
         return false;
      },
   },
   data() {
      return {
         detailsAreVisible: false,
         // isFavorite: this.friend.isFavorite ? this.friend.isFavorite : false,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.$emit('toggle-favorite', this.friend.id);
      },
   },
};
</script>
