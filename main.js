const input = document.querySelector(".form-input");
const addBtn = document.querySelector(".form-btn");
const removeBtn = document.querySelector(".container-btn");
const listTasks = document.querySelector(".list-tasks");

let arrayTasks = [];

addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (input.value === '' || input.value === null) {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want try again?',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    const taskObj = {
        task: input.value,
        id: Date.now()
    };
    arrayTasks = [...arrayTasks,taskObj];

    if (arrayTasks.length > 0) {
        const li = document.createElement('li');
        listTasks.appendChild(li);
        li.innerHTML = `${taskObj.task}`;
    }
})