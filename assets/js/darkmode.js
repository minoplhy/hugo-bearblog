function darkmode() {
    if (localStorage.getItem('dark-mode') === 'false') {
        darkmode_enable();
    } else if (localStorage.getItem('dark-mode') === null) {
        darkmode_enable();
    } else {
        darkmode_disable();
    }
}

function darkmode_enable()  {
    document.body.classList.add("dark-mode");
    localStorage.setItem('dark-mode', 'true');
}

function darkmode_disable() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem('dark-mode', 'false');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('dark-mode') === null) {
    localStorage.setItem('dark-mode', 'true');
}