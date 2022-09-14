

var myIndex = 0;
slide();

function slide() {

    var x = document.getElementsByClassName("sliderimage");
    for (let i = 0; i < x.length; i++) {
        x[i].animate({opacity: 0.3}, 5000);  
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slide, 5000);
}

