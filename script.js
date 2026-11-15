(() => {
  const button = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const year = document.querySelector('#year');
  const savedTheme = localStorage.getItem('abdulboriy-theme');

  if (savedTheme === 'dark') document.body.classList.add('dark');
  year.textContent = new Date().getFullYear();

  function syncThemeControl() {
    const isDark = document.body.classList.contains('dark');
    icon.textContent = isDark ? '☀' : '☾';
    label.textContent = isDark ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#101725' : '#f4f7fc';
  }

  syncThemeControl();
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('abdulboriy-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    syncThemeControl();
  });
})();
