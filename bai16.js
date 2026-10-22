const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [
    { text: 'Đọc chương HTML5 cơ bản', completed: true },
    { text: 'Làm bài tập CSS Grid', completed: false },
    { text: 'Làm việc nhà ', completed: false }
];

function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-left" onclick="toggleTask(${index})">
                <div class="task-checkbox">
                    ${task.completed ? '✓' : ''}
                </div>
                <span class="task-text">${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${index})">Xoá</button>
        `;
        
        taskList.appendChild(li);
    });

    updateCount();
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;
    
    tasks.push({ text: text, completed: false });
    taskInput.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateCount() {
    const activeTasks = tasks.filter(task => !task.completed).length;
    taskCount.innerText = `Còn ${activeTasks} việc chưa hoàn thành`;
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

renderTasks();