const field = document.getElementById('testdate');
const themeButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

// Date to display
const myDate = new Date().toDateString();

field.innerHTML = myDate;

//theme toggling
function darkMode() {
    document.documentElement.setAttribute('toggle-state', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
}

function lightMode() {
    document.documentElement.setAttribute('toggle-state', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
}

function toggleTheme() {
    const state = document.documentElement.getAttribute('toggle-state');
    if (!state || state === 'light') {
        darkMode();
    } else {
        lightMode();
    }
}

themeButton.addEventListener('click', toggleTheme);

const themeFromLocalStorage = localStorage.getItem('theme');

if (themeFromLocalStorage) {
    document.documentElement.setAttribute('toggle-state', themeFromLocalStorage);
    if (themeFromLocalStorage === 'dark') {
        darkMode();
    } else {
        lightMode();
    }
}