const inputField = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const inputFocus = () => {
  const input = document.getElementById("addTask");
  input.focus();
};
inputFocus();

inputField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const userInputTask = inputField.value;

  // Validate for empty input
  if (
    userInputTask === "" ||
    userInputTask === null ||
    userInputTask.split(" ").join("") === ""
  ) {
    alert("Please enter a valid task.");
    return false;
  }
  checkedItemFn();

  // Create the id for the new task
  newDate = new Date();
  newTime = newDate.getTime();
  newTaskId = newTime;

  newListTemplate = `<li class="listItem" id="${newTaskId}" data-task-id=${newTaskId}>
                          <div class="row align-items-center">
                                <div class="col-auto m-3" ><input type="checkbox" class="box"></div>
                                <div class="col taskName">${userInputTask}</div>
                                <div class="col-auto"><input type="button" value="" class="btn deleteButton" data-delete></div>
                           </div>
                        </li>`;

  taskList.insertAdjacentHTML("beforeend", newListTemplate);

  const deleteButtons = document.querySelectorAll("[data-delete]");

  for (let button of deleteButtons) {
    button.addEventListener("click", deleteTask);
  }
  checkedItemFn();
  inputField.value = "";
}
function checkedItemFn() {
  const checkedboxes = document.querySelectorAll(".box");

  checkedboxes.forEach((box) => {
    box.addEventListener("click", function (event) {
      event.target.parentElement
        .closest("li")
        .children[0].children[1].classList.toggle("checkedbox");
    });
  });
}

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", addTask);

function deleteTask() {
  const taskContainer = event.currentTarget.closest(".listItem");
  console.log(taskContainer.dataset);
  console.log(taskContainer.dataset.taskId);
  taskContainer.remove();
}
