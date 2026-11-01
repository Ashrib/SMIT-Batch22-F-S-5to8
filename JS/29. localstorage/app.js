//// local storage


let num = 30;

let obj = {
    a: 30,
    b: 40,
    c: 'abc'
}

/// store in localstorage
let dataConvert = JSON.stringify(obj);
window.localStorage.setItem("data", dataConvert);
window.localStorage.setItem("number", 300);

// console.log( dataConvert)

let dataFromLS = window.localStorage.getItem("data");
dataFromLS = JSON.parse(dataFromLS)
console.log(dataFromLS)

// window.localStorage.removeItem("number");

// window.localStorage.clear();

/// JSON
// window.sessionStorage.setItem("data", 400)



