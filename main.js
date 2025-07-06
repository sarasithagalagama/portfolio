// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const darkToggleIcon = document.getElementById('dark-toggle-icon');
const html = document.documentElement;
function setDarkMode(on) {
  if (!darkToggleIcon) return;
  if (on) {
    html.classList.add('dark');
    darkToggleIcon.setAttribute('data-icon', 'mdi:weather-sunny');
  } else {
    html.classList.remove('dark');
    darkToggleIcon.setAttribute('data-icon', 'mdi:weather-night');
  }
  localStorage.setItem('theme', on ? 'dark' : 'light');
}
// Initial mode
if (darkToggleIcon) {
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
  darkToggle && darkToggle.addEventListener('click', () => {
    setDarkMode(!html.classList.contains('dark'));
  });
}
// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.remove('hidden');
    } else {
      scrollTopBtn.classList.add('hidden');
    }
  }
});
scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Collapse/expand for projects and achievements
function setupAccordion() {
  document.querySelectorAll('.toggle-collapse').forEach(btn => {
    btn.addEventListener('click', function() {
      const allContents = document.querySelectorAll('.collapse-content');
      const allIcons = document.querySelectorAll('.toggle-collapse .iconify');
      const targetId = this.getAttribute('data-target');
      const target = document.getElementById(targetId);
      const icon = this.querySelector('.iconify');
      // If this section is already open, close it
      if (target && !target.classList.contains('hidden')) {
        target.classList.add('hidden');
        if (icon) icon.style.transform = '';
        return;
      }
      // Otherwise, close all and open this one
      allContents.forEach(c => c.classList.add('hidden'));
      allIcons.forEach(i => i.style.transform = '');
      if (target) {
        target.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAccordion);
} else {
  setupAccordion();
} 