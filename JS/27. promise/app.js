


let promise = new Promise((resolve, reject)=>{

    setTimeout(() => { /// delay 2s
        resolve(" data from promise") /// return
    }, 2000);
});


// promise.then((result)=>{
//     console.log(result)

// })



let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => { /// delay 2s
        reject(new Error("error in promise, rejected!")) /// return
    }, 2000);
});


// promise2.then((res)=>{
//     console.log(true);
// }).catch((error)=>{
//     console.log(error);
// })




let fetchUsers = new Promise((resolve,reject)=>{

    let response = fetch('https://dummyjson.com/users');

    if(response){
        resolve(response);  /// return
    }

    reject(new Error("error in fetching user"))
})

fetchUsers
.finally(()=> console.log('promise is ready'))
.then(async(res)=> console.log(await res.json() ))
.catch((error)=> console.error(error))


new Promise((res,rej)=>{

    setTimeout(() => res(1), 1000);
})
.then((data)=>{
    console.log(data)  
    
    return data * 2
})
.then((data)=>{
    
    console.log(data)  
    return data * 2
})
.then((data)=>{
    
    console.log(data)  
})


/// users, products, company


Promise.all([
    new Promise((res,rej)=> setTimeout(() => res(1), 1000)),
    new Promise((res,rej)=> setTimeout(() => res(2), 1000)),
    new Promise((res,rej)=> setTimeout(() => res(3), 1000)),
])
.then(()=>{
    console.log('all promises done')
})


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url)); //// [fetching..., fetching..., fetching...]

Promise.all(requests)
.then((responses)=>{
    console.log(responses);
    responses.map(async(response)=> console.log(await response.json()))
})
.then(()=>{
    console.log("all data fetched..")
})


