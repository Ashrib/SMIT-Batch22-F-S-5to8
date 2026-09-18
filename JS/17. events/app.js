
document.getElementById('email-inp').style.backgroundColor='red';


function  imgVisib() {
    var bImg = document.getElementById('b-img');

    if(bImg.className == 'hidden-elm') {
        bImg.className = 'show-elm'
    }
    else{
        bImg.className = 'hidden-elm'
    }
}


function handleSubmit(e){
    //// resist to reload the page
    e.preventDefault();

    console.log(e);
    
}



function showText(){
    var text = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration
patterns that are species-dependent. The hands and feet of slow lorises have several adaptations
that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow
lorises have a toxic bite, a rare trait among mammals.`

document.getElementById('text').innerText = text;


}

var images = ['./images/BUILDING.jpg', './images/images (1).jpg', './images/images.jpg', './images/ORANGE.jpg']

var sliderImg = document.getElementById('slider-img');




var indexCount = 0;

setInterval(function (){
    if(indexCount == images.length){
        indexCount = 0
    }

    sliderImg.src = images[indexCount];
    indexCount++;
    
}, 1500);




var pElms = document.getElementsByTagName('p');

console.log(pElms)






