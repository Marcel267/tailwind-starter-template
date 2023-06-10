/**
 * Darkmode toggle
 */

//icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const button = document.querySelector('.theme-button');

//Icon/Text Toggling
const iconToggle = () => {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
}

//Initial Theme Check
const themeCheck = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        return;
    }
    sunIcon.classList.add('hidden');
}

//Manual Theme Switch
const themeSwitch = () => {
    iconToggle();
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        return;
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark');
}

//call theme switch on clicking buttons
button.addEventListener('click', () => {
    themeSwitch();
});

//invoke theme check on initial load
themeCheck();