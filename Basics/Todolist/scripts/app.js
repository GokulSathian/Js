const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
let selectedTaskIndex = JSON.parse(localStorage.getItem('selectedTaskIndex')) || -1;
document.addEventListener('keydown', handleKeyDown)
function addTodo(){
    const value=document.querySelector('.js-texbox').value
    if (value && todoList.length < 7){
        const task ={
            text:value,
            time: 0
        };
        todoList.push(task)
        renderTodo()
        localStorage.setItem('todoList', JSON.stringify(todoList))
        document.querySelector('input').value=''
    } else if (todoList.length >= 7) {
        alert('Task limit reached. Please delete a task before adding a new one.');
    };
}
function renderTodo() {
    let listHtml='';
    todoList.forEach((task,index)=>{
        listHtml+=`<div class= "js-task${index} ${index === selectedTaskIndex ? 'selected' : ''}" "><p> <a href="todolist-secondpage.html?task=${encodeURIComponent(index)}">${index}. ${task.text}</a>
            <button onclick ="
            console.log(todoList)
            todoList.splice(${index},1);
            renderTodo();
            localStorage.setItem('todoList', JSON.stringify(todoList));
            ">Delete</button></p></div>`
    })
    document.querySelector('.js-displaylist').innerHTML= listHtml
}
function resetTodoList() {
    localStorage.removeItem('todoList');
    localStorage.removeItem('selectedTaskIndex');
    selectedTaskIndex=-1
    todoList.length = 0; // Clear the array
    renderTodo();
}
function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
function handleKeyDown(event) {
    if (document.activeElement.classList.contains('js-texbox')) {
        return; // Ignore keydown events when the input box is focused
    }
    if (event.key === 'ArrowDown') {
        selectedTaskIndex= (selectedTaskIndex+1) % todoList.length;
        renderTodo();
    } else if (event.key === 'ArrowUp') {
        selectedTaskIndex = (selectedTaskIndex - 1 + todoList.length) % todoList.length;
        console.log(selectedTaskIndex)
        renderTodo();
    } else if (event.key === 'Enter') {
        if (selectedTaskIndex >= 0 && selectedTaskIndex < todoList.length) {
            localStorage.setItem('selectedTaskIndex', JSON.stringify(selectedTaskIndex));
            window.location.href = `todolist-secondpage.html?index=${selectedTaskIndex}`;
        }
    } else if (event.key === 'Delete') {
        if (selectedTaskIndex >= 0 && selectedTaskIndex < todoList.length) {
            todoList.splice(selectedTaskIndex, 1);
            if (selectedTaskIndex >= todoList.length) {
                selectedTaskIndex = todoList.length - 1;
            }
            renderTodo();
            localStorage.setItem('todoList', JSON.stringify(todoList));
        }
    }
}

renderTodo();