const input = document.querySelector(".form-input");
const addBtn = document.querySelector(".form-btn");
const removeBtn = document.querySelector(".container-btn");
const listTasks = document.querySelector(".list-tasks");

let arrayTasks = [];

function deleteTask() {
    listTasks.addEventListener('click', (e)=>{
        if (e.target.classList.contains("deleteButton")) {
            const elementId = e.target.getAttribute('task-id');
            arrayTasks = arrayTasks.filter(task => task.id != elementId);
            e.target.parentElement.remove();
            localStorage.removeItem('tasks');
            localStorage.setItem('tasks', JSON.stringify(arrayTasks));
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    arrayTasks = JSON.parse(localStorage.getItem("tasks")) || []
    if (arrayTasks.length > 0) {
        arrayTasks.forEach(task => {
            const li = document.createElement('li');
            listTasks.appendChild(li);
            li.innerHTML = `${task.task} <span task-id= "${task.id}" class="deleteButton">X</span>`;
        });
    }
    deleteTask();
    localStorage.setItem('tasks', JSON.stringify(arrayTasks));
})

addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (input.value.trim() !== '' && input.value.trim() !== null) {
        const taskObj = {
            task: input.value,
            id: Date.now()
        };
        arrayTasks = [...arrayTasks,taskObj];
        if (arrayTasks.length > 0) {
            const li = document.createElement('li');
            listTasks.appendChild(li);
            li.innerHTML = `${taskObj.task} <span task-id="${taskObj.id}" class="deleteButton">X</span>`;
        }
        deleteTask();
        localStorage.setItem('tasks', JSON.stringify(arrayTasks));
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'Do you want try again?',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    input.value = '';
})
removeBtn.addEventListener('click', ()=>{
    listTasks.innerHTML = '';
    localStorage.setItem('tasks', '');
})