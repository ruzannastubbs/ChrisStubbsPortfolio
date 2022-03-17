let menuOpenIcon = document.getElementById('burgerMenu-icon');
let menuCloseIcon = document.getElementById('close-icon');
// let menu = document.getElementById('menu');
let navbar = document.getElementById('navbar');
let mainSection = document.getElementById('mainSection');

const openMenu = () => {
    menuOpenIcon.style.display = 'none';
    // menu.style.display = 'block'; 
    navbar.style.display = 'block';
    menuCloseIcon.style.display = 'block';

}
const closeMenu = () => {
    // menu.style.display = 'none';
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
    navbar.style.display = 'none';
}
menuOpenIcon.addEventListener('click', openMenu);
menuCloseIcon.addEventListener('click', closeMenu);
mainSection.addEventListener('click', closeMenu);

menuOpenIcon.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        openMenu();
    }
});

menuCloseIcon.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        closeMenu();
    }
});

mainSection.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        closeMenu();
    }
});


window.addEventListener('resize', myFunction);
function myFunction(){
    if(window.innerWidth == '853'){
        navbar.style.display = 'block';
        menuOpenIcon.style.display = 'block';
    }
    else{
        navbar.style.display = 'none';
        menuOpenIcon.style.display = 'block';
    }
}

/* jquery toggle */

$(document).ready(function(){
    $('#aboutMeDiv').click(function() {
      $('#aboutMe').toggle("slideDown");  
    });
});

$(document).ready(function(){
    $('#regulatingDiv').click(function() {
        $('#regulating').toggle("slideDown");
    });
});

$(document).ready(function(){
    $('#voicingDiv').click(function() {
        $('#voicing').toggle("slideDown");
    });
});

$(document).ready(function(){
    $('#contactDiv').click(function() {
        $('#contact').toggle("slideDown");
    });
});