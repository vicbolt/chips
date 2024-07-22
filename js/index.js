
window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
    var balls = document.getElementById('balls');

    if(y > 1){
        balls.style.width = y*20 + 'px';

    }

    if(y > 104){
        document.getElementById('violette_flavour').style.position = "unset";
        balls.style.display = "none"   
    } else {
        document.getElementById('violette_flavour').style.position = "sticky";
        balls.style.display = "flex"   

    }
}