const loginForm = document.querySelector("#login");
const inputForm = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function displayGreeting(userName) {
    greeting.querySelector("#userName").innerText = userName;
    greeting.classList.remove(CLASS_HIDDEN);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = inputForm.value;
    loginForm.classList.add(CLASS_HIDDEN);
    localStorage.setItem(USERNAME_KEY, userName);
    displayGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener('submit', onLoginSubmit);    
} else {
    displayGreeting(savedUserName);
}