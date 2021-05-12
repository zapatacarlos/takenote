let idCounter = 0
function addTask() {
    
    const str = document.getElementById("addTask").value
    console.log(str)
    const taskList = document.getElementById('taskList')
    const newLi = document.createElement('li')
    taskList.lastChild.id = idCounter
    idCounter++
    // if(Number.isInteger(taskList.lastChild.id) === true)
    // {
    //     newId = taskList.lastChild.id + 1
    // }else{
    //     newId = 1
    //     console.log(newId)
    // }
    //newLi.addEventListener('click',editItem(idCounter))
   
 
    newLi.className='listItem'
    newLi.textContent = `${str}`;
    taskList.innerHTML += `<li class="listItem" id="${idCounter}">
                                <div class="row align-items-center">
                                <div class="col-auto m-3"><input type="checkbox"></div>
                                <div class="col taskName">${str}</div>
                                <div class="col-auto"><input type="button" value="" class="btn deleteButton" id="btn${idCounter}"></div>
                                </div>
                            </li>`

const btnDelete = document.getElementById(`btn${idCounter}`)
btnDelete.addEventListener('click', deleteTask)
};

const btnAdd = document.getElementById('btnAdd') 
btnAdd.addEventListener("click", addTask)

function deleteTask() {
 
const taskList = document.getElementById('taskList')
taskList.removeChild(taskList.childNodes[idCounter])
}

// // create task, display list, edit task, saveUpdate task, delete task, mark as complete


