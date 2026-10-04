

// try{
//     var a = 10;
    
//     alert(a)

// }
// catch(error){
//     console.log(error)
// }

// console.log('hello')


var users = []
var usersContainer = document.getElementById('users-container');

function User(name,age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

function renderUsers() {
    usersContainer.innerHTML = '' /// empty the container
    for(var i in users){
        // console.log(users[i])

        var userDiv = document.createElement('div');
        userDiv.className = 'user-box'
        userDiv.innerHTML = `<div>
            <h2>${users[i].name}</h2>
        </div>`;

    usersContainer.appendChild(userDiv);
    }
}


function formSubmitHandle(e) {
    try {
        e.preventDefault()
        var nodeArray = e.target.childNodes;
        var inputsArr = [];
    
        for (var i = 0; i < nodeArray.length; i++) {
            // console.log(nodeArray[i].nodeType);
            if(nodeArray[i].nodeType == 1){  /// to check if it is element node or not
                inputsArr.push(nodeArray[i])
            }
        }
        console.log(inputsArr[0].value);
        
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
        if(inputsArr[0].value.length < 3){  //error for name
            throw 'name must be atleast 3 chars';
        }
        if(inputsArr[1].value < 15  || inputsArr[1].value > 60 ){  //error for age
            throw 'age must be in range 15-60';
        }
        if( emailRegex.test(inputsArr[2].value) == false){  //error for email
            throw 'email must be valid';
        }
        /// user obj
        var user = new User(inputsArr[0].value, inputsArr[1].value, inputsArr[2].value ); /// name, age, email
        users.push(user)
        
        console.log(users);
        renderUsers()

    } catch (error) {
        console.error(new Error(error));
    }
}































