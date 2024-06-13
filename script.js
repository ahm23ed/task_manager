(() => {
    'use strict'

    const validationForms = document.querySelectorAll('.custom-validation');

    Array.from(validationForms).forEach(validationForm => {
        validationForm.addEventListener('submit', event => {
            if (!validationForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                const titleInput = document.getElementById('taskTitle').value;
                const descriptionInput = document.getElementById('taskDescription').value;

                const tasksContainer = document.getElementById('taskList');
                const taskElement = document.createElement('div');
                taskElement.className = 'custom-task-item';
                taskElement.innerHTML = `
                    <h5 class="custom-task-title">Title: ${titleInput}</h5>
                    <p class="custom-task-text">Description: ${descriptionInput}</p>
                    <button type="button" class="btn btn-success custom-complete-btn">Complete</button>
                    <button type="button" class="btn btn-danger custom-delete-btn">Delete</button>
                    <button type="button" class="btn btn-warning custom-update-btn">Update</button>
                `;
                tasksContainer.appendChild(taskElement);

                taskElement.querySelector('.custom-delete-btn').addEventListener('click', () => {
                    taskElement.remove();
                });

                taskElement.querySelector('.custom-complete-btn').addEventListener('click', () => {
                    taskElement.classList.add('custom-completed');
                });

                taskElement.querySelector('.custom-update-btn').addEventListener('click', () => {
                    document.getElementById('taskTitle').value = titleInput;
                    document.getElementById('taskDescription').value = descriptionInput;
                    taskElement.remove();
                });

                validationForm.reset();
                validationForm.classList.remove('custom-was-validated');
            }
        }, false);
    });
})();
