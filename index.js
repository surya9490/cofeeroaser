let menuElement = document.getElementById('menu');
let closeElement= document.getElementById('close');
let navElement= document.getElementById('nav-links');

menuElement.onclick = function() {
   console.log('yes')
    menuElement.classList.add('hide');
    closeElement.classList.remove('hide');
    navElement.classList.remove('hide')
}

closeElement.onclick = function() {
    menuElement.classList.remove('hide');
    closeElement.classList.add('hide');
    navElement.classList.add('hide')
}

