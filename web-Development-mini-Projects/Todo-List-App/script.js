const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // ✅ Check button
  const checkBtn = document.createElement("button");
  checkBtn.textContent = "✔";
  checkBtn.style.background = "#0f9b8e";
  checkBtn.style.marginLeft = "10px";
  checkBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // ✏️ Edit button (inline editing)
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.background = "#ff6f00";
  editBtn.style.marginLeft = "10px";
  editBtn.addEventListener("click", () => {
    // Replace span with input
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskSpan.textContent;
    li.replaceChild(editInput, taskSpan);

    // Change Edit button to Save
    editBtn.textContent = "Save";
    editBtn.style.background = "#008000"; // green for save

    editBtn.onclick = () => {
      taskSpan.textContent = editInput.value.trim() || taskSpan.textContent;
      li.replaceChild(taskSpan, editInput);
      editBtn.textContent = "Edit";
      editBtn.style.background = "#ff6f00";
      // Restore original event
      editBtn.onclick = () => {
        editBtn.click();
      };
    };
  });

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.background = "#6a0dad";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append everything
  li.appendChild(taskSpan);
  li.appendChild(checkBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear input
  input.value = "";
}
