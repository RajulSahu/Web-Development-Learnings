const todoList = [];

let instruction = prompt("What would you like to do?").toLowerCase();

while (instruction != "new" && instruction != "list" && instruction != "delete" && instruction != "quit") {
  instruction = prompt("What would you like to do?").toLowerCase();
}

while (true) {
  if (instruction == "new") {
    let newToDo = prompt("Enter a new ToDo");
    while (!newToDo) {
      newToDo = prompt("Enter a new ToDo");
    }
    todoList.push(newToDo);
  } else if (instruction == "list") {
    console.log("********************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("********************");
  } else if (instruction == "delete") {
    let index = parseInt(prompt("Enter todo index to remove:"));
    todoList.splice(index, 1);
  } else if (instruction == "quit") {
    console.log("Quitting the App!");
    break;
  }
  instruction = prompt("What would you like to do?").toLowerCase();
}
