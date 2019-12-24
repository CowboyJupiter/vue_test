var app = new Vue({
  el: "#app",
  data: {
    tasks: [
      {text: "Trash", completed: false},
      {text: "Bed", completed: false},
      {text: "Read", completed: false},
    ],
    newTask: "",
  methods: {
    addTask: function() {
      console.log('adding task');
      this.tasks.push({text: this.newTask, completed:false});
    }
  
  }
});