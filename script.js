const techTools = ["JavaScript (ES6+)", "Python 3", "Vue.js + state management tool", "React", "HTTP request tools (Axios, aiohttp, fetch api)", "HTML", "CSS", "Git", "Docker"];
const toolsList = document.getElementById("tech-profile");

techTools.forEach(tool => {
  const li = document.createElement("li");
  li.textContent = tool;
  toolsList.appendChild(li);
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
});
