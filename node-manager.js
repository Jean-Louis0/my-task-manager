const readlineSync = require('readline-sync');

let tasks = [];

function displayEntries() {
  console.log("Welcome to your task manager. Press:");
  console.log("1. to see all your tasks");
  console.log("2. to add a task");
  console.log("3. to delete a task");
  console.log("4. to mark a task as done");
  console.log("5. to Exit the task manager");
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("You have no tasks.");
  } else {
    console.log("Your tasks are:");

    for (let i = 0; i < tasks.length; i++) {
      console.log(`Task ${i + 1}: ${tasks[i]}`);
    }
  }
  
  console.log();
  displayEntries();
}

function addTask() {
  let task = readlineSync.question("Enter a new task: ");
  tasks.push(task);
  console.log("Your task was successfully added.");
  console.log();
  displayEntries();
}

function deleteTask() {
  let taskNumber = readlineSync.question("Enter the number of the task you want to delete: ");
  
  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks.splice(taskNumber - 1, 1);
    console.log("Your task was successfully deleted.");
  } else {
    console.log("That task does not exist.");
  }
  
  console.log();
  displayEntries();
}

function markTaskAsDone() {
  let taskNumber = readlineSync.question("Enter the number of the task you want to mark as done: ");
  
  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    console.log(`Task "${tasks[taskNumber - 1]}" was marked as done.`);
  } else {
    console.log("The task you entered does not exist.");
  }
  
  console.log();
  displayEntries();
}

function exitTaskManager() {
  console.log("Exiting the task manager...");
  return;
}

displayEntries();
userInput();

function userInput() {
  let taskInput = readlineSync.question("Enter your choice: ");
  taskInput = parseInt(taskInput);
  
  switch (taskInput) {
    case 1:
      showTasks();
      break;
    case 2:
      addTask();
      break;
    case 3:
      deleteTask();
      break;
    case 4:
      markTaskAsDone();
      break;
    case 5:
      exitTaskManager();
      return;
    default:
      console.log("Invalid input.");
      break;
  }
  
  console.log();
  userInput();
}
