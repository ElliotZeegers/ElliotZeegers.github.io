const body = document.getElementById("kleur");
const nav = document.getElementById("navigatie");
const navText = document.getElementById("navlinktext");
const balk = document.getElementById("balk");
const iconColor = document.getElementById("iconColor");
const cards = document.querySelectorAll(".card");
const projectSections = document.querySelectorAll(".project-section");
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
        cards.forEach(card => {
            card.style.backgroundColor = "#2d2d2d";
            card.style.color = "white";
        });
        projectSections.forEach(section => {
            section.style.backgroundColor = "#1f1f1f";
            section.style.borderColor = "#444";
        });
        checker = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        nav.style.backgroundColor = "#262626";
        navText.style.color = "white";
        balk.style.backgroundColor = "#F8F9FA";
        balk.style.color = "black";
        iconColor.style.color = "white";
        cards.forEach(card => {
            card.style.backgroundColor = "white";
            card.style.color = "black";
        });
        projectSections.forEach(section => {
            section.style.backgroundColor = "";
            section.style.borderColor = "";
        });
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
    body.style.transitionDuration = "0.6s";
    nav.style.transitionDuration = "0.6s";
    navText.style.transitionDuration = "0.6s";
    balk.style.transitionDuration = "0.6s";
    iconColor.style.transitionDuration = "0.6s";
    cards.forEach(card => {
        card.style.transitionDuration = "0.6s";
    });
    projectSections.forEach(section => {
        section.style.transitionDuration = "0.6s";
    });
}