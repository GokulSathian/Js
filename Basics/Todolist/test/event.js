import {renderTodo} from './render.js'
import { addTodo,varStore, deleteTodo } from './todo.js';



export function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

export function handleKeyDown(event) {
    if (document.activeElement.classList.contains('js-texbox')) {
        return; // Ignore keydown events when the input box is focused
    }
    if (event.key === 'ArrowDown') {
        varStore.selectedTaskIndex= (varStore.selectedTaskIndex+1) % varStore.todoList.length;
        renderTodo();
    } else if (event.key === 'ArrowUp') {
        varStore.selectedTaskIndex = (varStore.selectedTaskIndex - 1 + varStore.todoList.length) % varStore.todoList.length;
        console.log(varStore.selectedTaskIndex)
        renderTodo();
    } else if (event.key === 'Enter') {
        if (varStore.selectedTaskIndex >= 0 && varStore.selectedTaskIndex < varStore.todoList.length) {
            localStorage.setItem('varStore.selectedTaskIndex', JSON.stringify(varStore.selectedTaskIndex));
            window.location.href = `varStore.todolist-secondpage.html?index=${varStore.selectedTaskIndex}`;
        }
    } else if (event.key === 'Delete') {
        if (varStore.selectedTaskIndex >= 0 && varStore.selectedTaskIndex < varStore.todoList.length) {
            varStore.todoList.splice(varStore.selectedTaskIndex, 1);
            if (varStore.selectedTaskIndex >= varStore.todoList.length) {
                varStore.selectedTaskIndex = varStore.todoList.length - 1;
            }
            renderTodo();
            localStorage.setItem('varStore.todoList', JSON.stringify(varStore.todoList));
        }
    }
}
