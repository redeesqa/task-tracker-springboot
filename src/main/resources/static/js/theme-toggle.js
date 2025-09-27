const toggleInput = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function applyTheme(theme) {
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme + '-theme');
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    toggleInput.checked = theme === 'light';
    localStorage.setItem('theme', theme);
}

toggleInput.addEventListener('change', () => {
    const nextTheme = toggleInput.checked ? 'light' : 'dark';
    applyTheme(nextTheme);
});

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);