
let todos = [];
let todoListElm = document.querySelector(".todo-lists");

let addTodo = ()=>{
    let todoInput = document.querySelector("#todo-inp");
    todos.push({
        text: todoInput.value,
        id: new Date().getTime(),
        isCompleted: false,
    });
    console.log(todos);
    todoInput.value = ''

    renderTodos();
}


let deleteTodo = (todo_id)=>{
    
    console.log(todo_id);
    let filteredTodos = todos.filter((todo)=> todo.id != todo_id)
    todos = filteredTodos;
    
    renderTodos();
}

let updateTodo = (todo_id)=>{
    console.log('update',todo_id);
    
    ////// obj, obj, update obj, obj ,obj
    todos.forEach((todoObj) => {
        if(todoObj.id == todo_id){
            todoObj.text = document.querySelector("#todo-inp").value
        }
    });
    console.log(todos);

    let delBtns = document.querySelectorAll('.del-btn'); /// []
    let editBtns = document.querySelectorAll('.edit-btn'); /// []
    delBtns.forEach((btn)=> btn.disabled = false)
    editBtns.forEach((btn)=> btn.disabled = false)

    let addBtn = document.querySelector("#addBtn")
    addBtn.innerText = 'add';

    addBtn.removeAttribute('onClick')
    addBtn.setAttribute('onClick', `addTodo()`);
    renderTodos();
}

let editTodo = (todo_id)=>{
    console.log(todo_id);
    
    let delBtns = document.querySelectorAll('.del-btn'); /// []
    let editBtns = document.querySelectorAll('.edit-btn'); /// []
    delBtns.forEach((btn)=> btn.disabled = true)
    editBtns.forEach((btn)=> btn.disabled = true)
    
    let findTodo = todos.find((todo)=> todo.id == todo_id)
    document.querySelector("#todo-inp").value = findTodo.text;

    let addBtn = document.querySelector("#addBtn");
    addBtn.innerText = 'update';

    addBtn.removeAttribute('onClick');
    addBtn.setAttribute('onClick', `updateTodo('${todo_id}')`);
    // addBtn.addEventListener('click', () => updateTodo(todo_id))
}


let renderTodos = ()=>{
    console.log(todos);
    
    todoListElm.innerHTML = ''
    todos.map((item)=>{
        let todoList = document.createElement('div');
        todoList.innerHTML = `
        <div>
        <span>${item.text}</span>
        <button class='del-btn' onClick="deleteTodo('${item.id}')">del</button>
        <button class='edit-btn' onClick="editTodo('${item.id}')">edit</button>
        </div>
        `
        todoListElm.appendChild(todoList)

    });

}

renderTodos()




//// CRUD
//  Create - Read - Update - Delete
/// 


/// JSON

