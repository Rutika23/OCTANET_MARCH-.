document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addTodo);
  });
  
  function addTodo() {
    var input = document.getElementById("todo-input");
    var text = input.value;
    if (text === "") {
      alert("Please enter a task!");
      return;
    }
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var dateTime = date.toLocaleDateString('en-US', options);
    var todoList = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.textContent = text + " - " + dateTime;
    todoList.appendChild(li);
    input.value = "";
  }
  