


//// asynchronous js

//// data fetch

////// https --- JSON {}


//// promise ---> fullfil, reject(error)
let mainDiv = document.getElementById('main');
let usersData = [];

let renderUsers = ()=>{
    usersData.map((user)=>{
        console.log(user);
        let userBox = document.createElement('div');
        userBox.className = 'user-box'
        userBox.innerHTML = `
        <div>
        <img src='${user.image}'/>
        <h4>${user.firstName} ${user.lastName}</h4>
        <div>
        `
        mainDiv.appendChild(userBox)
    })

}

let fetchUsers = async ()=>{
    try {
        let response  = await fetch('https://dummyjson.com/users');
        response = await response.json();  //// api
        console.log(response);
        let { users } = response;
        usersData = users;
        // users.map((user)=> console.log(user));
        
    } catch (error) {
        console.error(error)
    }
}

fetchUsers().then(()=>{
    renderUsers();
    
})

console.log(true)

