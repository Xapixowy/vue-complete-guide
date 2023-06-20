<template>
   <form @submit.prevent="submitForm">
      <h2>New Friend</h2>
      <div>
         <label for="name">Name: </label>
         <input id="name" name="name" type="text" v-model="name" />
      </div>
      <div>
         <label for="phone">Phone: </label>
         <input id="phone" name="phone" type="text" v-model="phone" />
      </div>
      <div>
         <label for="email">Email: </label>
         <input id="email" name="email" type="email" v-model="email" />
      </div>
      <button>Submit</button>
   </form>
</template>

<script>
export default {
   data() {
      return {
         name: '',
         phone: '',
         email: '',
      };
   },
   emits: {
      'form-submit': (friend) => {
         if (friend) {
            return true;
         }
         console.warn('NewFriend emits form-submit event without friend object!');
      },
   },
   methods: {
      submitForm() {
         if (this.name === '' || this.phone === '' || this.email === '') {
            alert('Please fill out all fields');
            return;
         }
         const friend = {
            id: Date.now(),
            name: this.name,
            phone: this.phone,
            email: this.email,
         };
         this.$emit('form-submit', friend);
      },
   },
};
</script>

<style></style>
