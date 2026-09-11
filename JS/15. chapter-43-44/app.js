//declare user variable

var myName = "Arham"

function changeImage() {
    var firstImage = document.getElementById("wallpaper-img")
    firstImage.src = "https://img.magnific.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?semt=ais_hybrid&w=740&q=80"
}

function revertToOriginal() {
    var firstImage = document.getElementById("wallpaper-img")
    firstImage.src = "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
}


function changeToImage(parameter){
      var firstImage = document.getElementById("wallpaper-img")
    firstImage.src = parameter
}


function checkEmailAddress(email){
    var inputElement = document.getElementById(email);
    console.log(inputElement)
    if(inputElement.value === ""){
        inputElement.style.border = '1px solid red'
        alert("please Enter your email address")
    }
}