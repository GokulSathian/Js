import { varStore, deleteTodo } from './todo.js';

export function renderTodo() {

    let listHtml = '';
    varStore.todoList.forEach((task, index) => {
        listHtml += `
            <div class="js-task${index} ${index === varStore.selectedTaskIndex ? 'selected' : ''}">
                <p>
                    <a href="todolist-secondpage.html?task=${encodeURIComponent(index)}">
                        ${index}. ${task.text}
                    </a>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </p>
            </div>`;
    });

    const displayListElement = document.querySelector('.js-displaylist');
    if (displayListElement) {
        displayListElement.innerHTML = listHtml;

        // Attach event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.dataset.index, 10);
                deleteTodo(index);
            });
        });
    }
}
