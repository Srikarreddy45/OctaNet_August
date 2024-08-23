    const taskList = document.getElementById('taskList');
    const addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', () => {
        let taskName = prompt("Enter new task:");
        if (taskName !== null && taskName.trim() !== "") {
            let newTask = document.createElement('li');
            newTask.innerHTML = `
                <div class="checkbox">
                    <input type="checkbox" id="task${taskList.children.length + 1}">
                    <label for="task${taskList.children.length + 1}">${taskName}</label>
                </div>
            `;
            taskList.appendChild(newTask);
        }
    });

    // Initial checkboxes state (replace with your desired checked items)
    document.getElementById('task1').checked = true;
    document.getElementById('task2').checked = true;
    document.getElementById('task4').checked = true;
