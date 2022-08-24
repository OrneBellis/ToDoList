const input = document.querySelector(".form-input");
const addBtn = document.querySelector(".form-btn");
const removeBtn = document.querySelector(".container-btn");
const listTasks = document.querySelector(".list-tasks");

let arrayTasks = [];


document.addEventListener('DOMContentLoaded', ()=>{
    arrayTasks = JSON.parse(localStorage.getItem("tasks")) || []
    if (arrayTasks.length > 0) {
        arrayTasks.forEach(task => {
            const li = document.createElement('li');
            listTasks.appendChild(li);
            li.innerHTML = `${task.task} <span class="deleteButton">X</span>`;
        });
    }
})
    // listTasks.addEventListener("click", deleteTask)


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
            li.innerHTML = `${taskObj.task} <span class="deleteButton">X</span>`;
        }
        listTasks.addEventListener('click', (e)=>{
            if (e.target.classList.contains("deleteButton")) {
                e.target.parentElement.remove();
            }
        })
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
})