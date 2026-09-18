var mainDiv = document.getElementById('main');
var matchDiv = document.getElementById('match');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
        console.log('click')
})




var colors = ['red','yellow','blue','purple','orange'];
var countScore = 0;

matchDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

for (var i = 1; i <= 50; i++) {
    var newBox = document.createElement('div');
    newBox.innerText = 'div' + i;
    newBox.className = 'box';
    var rndmIndex = Math.floor(Math.random() * colors.length);  /// random index for colors
    newBox.style.backgroundColor = colors[rndmIndex];


    mainDiv.appendChild(newBox);
}






