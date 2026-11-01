
let todos = [];
let todoListElm = document.querySelector(".todo-lists");

let getTodosFromLocalStorage = () => {
    let todosData = JSON.parse(window.localStorage.getItem("todos"));
    todos = todosData || [];
}
getTodosFromLocalStorage();


let setTodosInLocalStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
}

let deleteAllTodos = () => {
    window.localStorage.removeItem("todos");
    todos = [];
    renderTodos();
}


let addTodo = () => {
    let todoInput = document.querySelector("#todo-inp");
    todos.push({
        text: todoInput.value,
        id: new Date().getTime(),
        isCompleted: false,
    });
    setTodosInLocalStorage()
    console.log(todos);
    todoInput.value = ''

    renderTodos();
}


let deleteTodo = (todo_id) => {

    console.log(todo_id);
    let filteredTodos = todos.filter((todo) => todo.id != todo_id)
    todos = filteredTodos;

    /// also delete from localstorage
    setTodosInLocalStorage()

    renderTodos();
}


let updateTodo = (todo_id) => {
    console.log('update', todo_id);

    ////// obj, obj, update obj, obj ,obj
    todos.forEach((todoObj) => {
        if (todoObj.id == todo_id) {
            todoObj.text = document.querySelector("#todo-inp").value
        }
    });

    /// also update the localstorage
    setTodosInLocalStorage()
    console.log(todos);

    let delBtns = document.querySelectorAll('.del-btn'); /// []
    let editBtns = document.querySelectorAll('.edit-btn'); /// []
    document.querySelector('#delAllBtn').disabled = false; /// []
    delBtns.forEach((btn) => btn.disabled = false);
    editBtns.forEach((btn) => btn.disabled = false);

    let addBtn = document.querySelector("#addBtn")
    addBtn.innerText = 'add';

    addBtn.removeAttribute('onClick')
    addBtn.setAttribute('onClick', `addTodo()`);
    renderTodos();
}

let doneTodo = (id) => {
    ///////

}


let editTodo = (todo_id) => {
    console.log(todo_id);

    let delBtns = document.querySelectorAll('.del-btn'); /// []
    let editBtns = document.querySelectorAll('.edit-btn'); /// []
    document.querySelector('#delAllBtn').disabled = true; /// []
    delBtns.forEach((btn) => btn.disabled = true)
    editBtns.forEach((btn) => btn.disabled = true)

    let findTodo = todos.find((todo) => todo.id == todo_id)
    document.querySelector("#todo-inp").value = findTodo.text;

    let addBtn = document.querySelector("#addBtn");
    addBtn.innerText = 'update';

    addBtn.removeAttribute('onClick');
    addBtn.setAttribute('onClick', `updateTodo('${todo_id}')`);
    // addBtn.addEventListener('click', () => updateTodo(todo_id))
}


let renderTodos = () => {
    console.log(todos);

    todoListElm.innerHTML = ''
    todos.map((item) => {
        let todoList = document.createElement('div');
        todoList.className = 'todo'

        if (item.isCompleted) {
            todoList.className += ' done'
            todoList.innerHTML = `
        <div>
        <span>${item.text}</span>
        <button class='del-btn' onClick="deleteTodo('${item.id}')">del</button>
        </div>
        `
        }
        else {
            todoList.innerHTML = `
        <div>
        <span>${item.text}</span>
        <button class='del-btn' onClick="deleteTodo('${item.id}')">del</button>
        <button class='edit-btn' onClick="editTodo('${item.id}')">edit</button>
        <button class='done-btn' onClick="doneTodo('${item.id}')">done</button>
        </div>
        `}
        todoListElm.appendChild(todoList)

    });

}

renderTodos()


//// CRUD
//  Create - Read - Update - Delete
///


/// JSON



/// immediate envoke

// {
//     (()=>{
//         var a = 30;
//         var b = 40;
//         console.log(a)
//     })()
// }

// console.log(a);
// console.log(b);


