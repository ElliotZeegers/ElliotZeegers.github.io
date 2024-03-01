const body = document.getElementById("kleur");
const nav = document.getElementById("navigatie");
const navText = document.getElementById("navlinktext");
const balk = document.getElementById("balk");
const iconColor = document.getElementById("iconColor");
const extra = document.getElementsByClassName("card");;
let checker = false;
console.log("no more da");

function colorChanger(){
    if(checker == false) {
        body.style.backgroundColor = "#262626";
        body.style.color = "white";
        nav.style.backgroundColor = "#F8F9FA";
        navText.style.color = "black";
        balk.style.backgroundColor = "#1a1a1a";
        balk.style.color = "white";
        iconColor.style.color = "black";
        checker = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        nav.style.backgroundColor = "#262626";
        navText.style.color = "white";
        balk.style.backgroundColor = "#F8F9FA";
        balk.style.color = "black";
        iconColor.style.color = "white";
        checker = false;
    }
    transitionDuration();
}

function colorChangerExtra(){
    if(checker == false) {
        body.style.backgroundColor = "#262626";
        body.style.color = "white";
        nav.style.backgroundColor = "#F8F9FA";
        navText.style.color = "black";
        balk.style.backgroundColor = "#1a1a1a";
        balk.style.color = "white";
        iconColor.style.color = "black";
        for (let i = 0; i < extra.length; i++) {
            extra[i].style.backgroundColor = "#595959";
        }
        checker = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        nav.style.backgroundColor = "#262626";
        navText.style.color = "white";
        balk.style.backgroundColor = "#F8F9FA";
        balk.style.color = "black";
        iconColor.style.color = "white";
        for (let i = 0; i < extra.length; i++) {
            extra[i].style.backgroundColor = "white";
        }
        checker = false;
    }
    transitionDuration();
}

function colorChangerIndex(){
    if(checker == false) {
        body.style.backgroundColor = "#262626";
        body.style.color = "white";
        nav.style.backgroundColor = "#F8F9FA";
        navText.style.color = "black";
        iconColor.style.color = "black";
        checker = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        nav.style.backgroundColor = "#262626";
        navText.style.color = "white";
        iconColor.style.color = "white";
        checker = false;
    }
    transitionDuration();
}

function transitionDuration(){
    document.getElementById("kleur").style.transitionDuration = "0.6s";
    document.getElementById("navigatie").style.transitionDuration = "0.6s";
    document.getElementById("navlinktext").style.transitionDuration = "0.6s";
    document.getElementById("balk").style.transitionDuration = "0.6s";
    document.getElementById("iconColor").style.transitionDuration = "0.6s";
    document.getElementById("card").style.transitionDuration = "0.6s";
}