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

    newListTemplate = `<li class="listItem rounded" id="${newTaskId}" data-task-id=${newTaskId}>
                            <div class="row align-items-center">
                                  <div class="col-auto" ><input type="checkbox" class="form-check-input box"></div>
                                  <div class="col taskName">${userInputTask}</div>
                                  <div class="col-auto"><input type="button" value="" class="btn deleteButton" data-delete></div>
                            </div>
                        </li>`;

    taskList.insertAdjacentHTML("afterbegin", newListTemplate);

    pendingTasks++;

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
        const moveItem = event.target.parentElement.closest("li");
        document.querySelector("ul").append(moveItem);
      });
    });
}

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", addTask);

function deleteTask() {
    const taskContainer = event.currentTarget.closest(".listItem");
    // console.log(taskContainer.dataset);
    // console.log(taskContainer.dataset.taskId);
    taskContainer.remove();
}

// Progress ring

let pendingTasks = 100;
let completedTasks = 18;

function drawRingProgress(pendingTasks, completedTasks) {

    var el = document.getElementById('graph'); // get canvas

    let progress_percentage = Math.floor((completedTasks / (completedTasks + pendingTasks)) * 100);

    var options = {
      // percent:  el.getAttribute('data-percent') || 25,
      percent: progress_percentage,
      // size: 110,
      size: el.getAttribute('data-size') || 220,
      lineWidth: el.getAttribute('data-line') || 15,
      rotate: el.getAttribute('data-rotate') || 0
    }

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.percent + '%';

    if (typeof (G_vmlCanvasManager) !== 'undefined') {
      G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 3.2;

    var drawCircle = function (color, lineWidth, percent) {
      percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      ctx.strokeStyle = color;
      ctx.lineCap = 'round'; // butt, round or square
      ctx.lineWidth = lineWidth
      ctx.stroke();
    };

    drawCircle('#efefef', options.lineWidth, 100 / 100);
    drawCircle('#046582', options.lineWidth, options.percent / 100)
}

drawRingProgress(pendingTasks, completedTasks);