const body = document.body;

const todo = {
    id: new Date().getTime(),
    task: userInputValue,
    done: false,
        };
function addTask() {
 const str = document.getElementById("newTask").value
 const div = document.createElement("div")
 div.textContent = `${todo{1}}`;
 body.append(div)
}
