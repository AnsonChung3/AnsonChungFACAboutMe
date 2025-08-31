const techTools = ["JavaScript (ES6+)", "Python 3", "Vue.js (JS framework) + state management tool", "React", "HTTP request tools (Axios, aiohttp)", "HTML", "CSS", "Git", "Docker"];
const toolsList = document.getElementById("tech-profile");

techTools.forEach(tool => {
  const li = document.createElement("li");
  li.textContent = tool;
  toolsList.appendChild(li);
});
