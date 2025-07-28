 //function to add the task
    function addTask() {
      //get the id taskInput
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">delete</button>
      `;

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
    //delete function to delete the tasks

    function deleteTask(button) {
      const li = button.parentElement;
      li.remove();
    }
 