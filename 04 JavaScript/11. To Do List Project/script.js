const todoList = {};

let instruction = prompt("What would you like to do?").toLowerCase();

while (instruction != "new" && instruction != "list" && instruction != "delete" && instruction != "quit") {
  instruction = prompt("What would you like to do?").toLowerCase();
}

let current = 0;
while (true) {
  if (instruction == "new") {
    let newToDo = prompt("Enter a new ToDo");
    while (!newToDo) {
      newToDo = prompt("Enter a new ToDo");
    }
    todoList[current] = newToDo;
    current++;
  } else if (instruction == "list") {
    console.log(todoList);
  } else if (instruction == "delete") {
    let index = parseInt(prompt("Enter todo index to remove:"));
    delete todoList[index];
  } else if (instruction == "quit") {
    console.log("Quitting the App!");
    break;
  }
  instruction = prompt("What would you like to do?").toLowerCase();
}
