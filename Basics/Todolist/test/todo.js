import { renderTodo } from './render.js';

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
let selectedTaskIndex = JSON.parse(localStorage.getItem('selectedTaskIndex')) || -1;

export const varStore = {
    todoList,
    selectedTaskIndex,
}

export function addTodo() {
    const value = document.querySelector('.js-texbox').value;
    if (value && todoList.length < 7) {
        const task = { text: value, time: 0 };
        todoList.push(task);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodo();
    }
}


export function deleteTodo(index) {
    todoList.splice(index, 1);
    if (selectedTaskIndex >= todoList.length) {
        selectedTaskIndex = todoList.length - 1;
    }
    localStorage.setItem('todoList', JSON.stringify(todoList));
    renderTodo();
}

export function resetTodoList() {
    localStorage.removeItem('todoList');
    localStorage.removeItem('selectedTaskIndex');
    todoList.length = 0;
    selectedTaskIndex = -1;
    renderTodo();
}
