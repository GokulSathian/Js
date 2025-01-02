import { addTodo, resetTodoList,varStore,deleteTodo } from './todo.js';
import { renderTodo } from './render.js';
import{handleInputKeyDown,handleKeyDown} from './event.js'

document.addEventListener('keydown', handleKeyDown)
document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('reset-btn').addEventListener('click', resetTodoList);



renderTodo();
