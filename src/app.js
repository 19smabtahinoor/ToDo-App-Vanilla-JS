const darkLightMode = document.querySelector('.lightmode')
const todoInputBox = document.querySelector('.todo-input-box')
const todoAddButton = document.querySelector('.form')
const todoAddButtonDivision = document.querySelector('.todo-add-button')
const todowrapper = document.querySelector('.todo-app-wrapper')
const body = document.querySelector('body')
const todotexts = document.querySelector('.todotext')
const allTodos = document.querySelector('.todo-list-container ul')



//add to do button 
const addTodo = (text) => {
    if (text) {
        let newTODos = `
        <li class="to-do-lists">
            <p class="todotext">${text}</p>
            <span class="material-icons editBtn">&#xe3c9;</span>
            <span class="material-icons delbtn">&#xe15d;</span>
        </li>
        `
        allTodos.innerHTML += newTODos
        todoInputBox.value = ''
        todoInputBox.focus()

    } else {
        todoInputBox.style.border = '2px solid red'
        todoInputBox.placeholder = 'You must be write anything!!!!'
    }
}

todoAddButton.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(todoInputBox.value)

})

//editdo 
const editTodo = (text) => {
    let editnewtoDo = prompt('Edit todo', text.trim())
    if (!editnewtoDo) {
        editnewtoDo = prompt('Edit todo', text.trim())
    } else {
        return editnewtoDo
    }
}
//completed task //delete to do // edit to do
allTodos.addEventListener('click', (e) => {

    if (e.target.nodeName === 'P') {
        e.target.classList.toggle('completedtask')
    }
    if (e.target.classList.contains('delbtn')) {
        e.target.parentElement.remove()
    }
    if (e.target.classList.contains('editBtn')) {
        const editedtodo = editTodo(e.target.parentElement.innerText)
        e.target.parentElement.innerHTML = `
        <li class="to-do-lists">
            <p class="todotext">${editedtodo}</p>
            <span class="material-icons editBtn">&#xe3c9;</span>
            <span class="material-icons delbtn">&#xe15d;</span>
        </li>
        `
    }

})



//make light and dark mode
darkLightMode.addEventListener('click', () => {
    todowrapper.classList.toggle('lightModeBackground')
    body.classList.toggle('lightModeText')
    todoInputBox.classList.toggle('lightModeinput')
    todoAddButtonDivision.classList.toggle('lightmodeaddbutton')
})