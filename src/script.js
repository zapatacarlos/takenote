let idCounter = 0
const inputFocus = () => {
    const input = document.getElementById('addTask');
    input.focus()
}
inputFocus();

const inputField = document.getElementById('addTask')
console.log(inputField)
inputField.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        btnAdd.click();
        console.log(event.key)
    }
})
function addTask() {
    
    const str = document.getElementById("addTask").value
    //console.log(str)
    const taskList = document.getElementById('taskList')
    const newLi = document.createElement('li')
    idCounter++
    newLi.className='listItem'
    newLi.textContent = `${str}`;
    taskList.innerHTML += `<li class="listItem" id="${idCounter}">
                                <div class="row align-items-center">
                                <div class="col-auto m-3"><input type="checkbox"></div>
                                <div class="col taskName">${str}</div>
                                <div class="col-auto"><input type="button" value="" class="btn deleteButton" id="btn${idCounter}"></div>
                                </div>
                            </li>`
    btnDelete();
    const inputField = document.getElementById('addTask')
    inputField.value = ""
};
const btnAdd = document.getElementById('btnAdd') 
btnAdd.addEventListener("click", addTask)

function deleteTask(id) {
 console.log(id)
const taskList = document.getElementById('taskList')
console.log(taskList.childNodes[id])
taskList.removeChild(taskList.childNodes[id])
if(idCounter>=1){
    idCounter--
}
}

const btnDelete = function () {
    
        const lastChildNode = document.getElementById('taskList').lastChild.id
        console.log(lastChildNode)
        for(let i=1;i<=lastChildNode;i++){
        document.getElementById(`btn${i}`).addEventListener('click', function () {
        deleteTask(i)
        })
    }
}






