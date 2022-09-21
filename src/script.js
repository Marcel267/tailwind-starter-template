/**
 * Darkmode toggle
 */

//icons
// const sunIcon = document.querySelector('.sun');
// const moonIcon = document.querySelector('.moon');
const button = document.querySelector('.theme-button');

//Icon/Text Toggling
// const iconToggle = () => {
//     moonIcon.classList.toggle('display-none');
//     sunIcon.classList.toggle('display-none');
// }

//Initial Theme Check
const themeCheck = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        // moonIcon.classList.add('.display-none');
        return;
    }
    // sunIcon.classList.add('.display-none');
}

//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        // iconToggle();
        return;
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark');
    // iconToggle();
}

//call theme switch on clicking buttons
button.addEventListener('click', () => {
    themeSwitch();
});

//invoke theme check on initial load
themeCheck();