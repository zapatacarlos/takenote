const inputField = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

let idCounter = 0

const inputFocus = () => {
    const input = document.getElementById('addTask');
    input.focus()
}

inputFocus();



inputField.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        addTask()
        
    }
})
function addTask() {
    const str = inputField.value

    idCounter++
   
    taskList.innerHTML += `<li class="listItem" id="${idCounter}" data-task-id=${idCounter}>
                                <div class="row align-items-center">
                                <div class="col-auto m-3"><input type="checkbox"></div>
                                <div class="col taskName">${str}</div>
                                <div class="col-auto"><input type="button" value="" class="btn deleteButton" data-delete></div>
                                </div>
                            </li>`


    const deleteButtons = document.querySelectorAll('[data-delete]')

    for (let button of deleteButtons) {
        button.addEventListener('click', deleteTask)
    }


    inputField.value = ""
};
const btnAdd = document.getElementById('btnAdd') 

btnAdd.addEventListener("click", addTask)

function deleteTask() {
    const taskContainer = event.currentTarget.closest('.listItem')
    console.log(taskContainer.dataset)
    console.log(taskContainer.dataset.taskId)
    taskContainer.remove()


