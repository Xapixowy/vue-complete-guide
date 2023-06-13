const app = Vue.createApp({
   data() {
      return {
         isTaskListShown: false,
         enteredTaskValue: '',
         tasks: [],
      };
   },
   methods: {
      addTask() {
         this.tasks.push(this.enteredTaskValue);
      },
      removeTask(index) {
         this.tasks.splice(index, 1);
      },
      toggleTaskList() {
         this.isTaskListShown = !this.isTaskListShown;
      },
   },
});

app.mount('#assignment');
