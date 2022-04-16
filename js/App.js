let search = document.querySelector('#search');
let barSearch = document.querySelector('.search-header');
let login = document.querySelector('#login');
let loginContainer = document.querySelector('.login')
let closeLogin = document.querySelector("#close-login");
let pesquisa = document.querySelector('#pesquisa')
let btn = document.querySelector('#search-pesquisa');
let menu = document.querySelector('#menu');
let containerMenu = document.querySelector('.navigation-menu');
let closeMenu = document.querySelector ('#close-menu');

window.onscroll = () => {
    barSearch.classList.remove('active');
    loginContainer.classList.remove('active');
    containerMenu.classList.remove('active')
}

search.addEventListener('click', () => {
    barSearch.classList.toggle('active');
    loginContainer.classList.remove('active');
    containerMenu.classList.remove('active')
});

login.addEventListener('click', () => {
    loginContainer.classList.toggle('active');
    barSearch.classList.remove('active');
    containerMenu.classList.remove('active')
});

closeLogin.addEventListener('click', () => {
    loginContainer.classList.remove('active');

});

menu.addEventListener('click', () => {
    containerMenu.classList.toggle('active');
    barSearch.classList.remove('active');
    loginContainer.classList.remove('active');
});

closeMenu.addEventListener('click', () => {
    containerMenu.classList.remove('active');
});

btn.onclick = function() {
    pesquisa = pesquisa.value
    alert('Não encontramos ');
}

