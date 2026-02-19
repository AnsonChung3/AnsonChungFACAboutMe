const techTools = ["JavaScript (ES6+)", "Python 3", "Vue.js + state management tool", "React", "HTTP request tools (Axios, aiohttp, fetch api)", "HTML", "CSS", "Git", "Docker"];
const toolsList = document.getElementById("tech-list");

techTools.forEach(tool => {
  const li = document.createElement("li");
  li.textContent = tool;
  toolsList.appendChild(li);
});

Object.entries(sectionContent).forEach(([id, html]) => {
  const container = document.querySelector(`#${id} .section-text`);
  if (container) container.innerHTML = html;
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-target]');
  const sections = document.querySelectorAll('.content section');

  function showSection(id) {
    sections.forEach(section => { section.hidden = true; });
    document.getElementById(id).hidden = false;
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons.forEach(btn => {
      if (btn.dataset.target === id) btn.classList.add('active');
    });
  }

  showSection('about');

  function setupScrollFade(el) {
    let timeout;
    el.addEventListener('scroll', () => {
      el.classList.add('is-scrolling');
      clearTimeout(timeout);
      timeout = setTimeout(() => el.classList.remove('is-scrolling'), 1000);
    });
  }

  setupScrollFade(document.querySelector('.sidebar'));
  setupScrollFade(document.querySelector('.content'));

  buttons.forEach(button => {
    if (button.classList.contains('nav-parent')) {
      button.addEventListener('click', () => {
        const subNav = button.nextElementSibling;
        subNav.classList.toggle('hidden');
        const indicator = button.querySelector('.indicator');
        indicator.textContent = subNav.classList.contains('hidden') ? '▸' : '▾';
        showSection('portfolio');
      });
    } else {
      button.addEventListener('click', () => {
        showSection(button.dataset.target);
      });
    }
  });

  document.querySelectorAll('a').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
});
