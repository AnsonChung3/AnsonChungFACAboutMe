const techTools = [
	'LLM-augmented development',
	'JavaScript (ES6+)',
	'Typescript',
	'Python 3',
	'Vue.js + state management tool',
	'React',
	'HTTP request tools (Axios, aiohttp, fetch api)',
	'HTML',
	'CSS',
	'Git',
	'Docker',
];
const toolsList = document.getElementById('tech-list');

techTools.forEach((tool) => {
	const li = document.createElement('li');
	li.textContent = tool;
	toolsList.appendChild(li);
});

// content.js is loaded via the `script` tag in indexe.html line 133
// hence any variable declared at top level in content.js becomes a property of `window`
// and is accessible to all subsequent scripts, i.e. this file
Object.entries(sectionContent).forEach(([id, html]) => {
	const container = document.querySelector(`#${id} .section-text`);
	if (container) container.innerHTML = html;
});

document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('[data-target]');
	const sections = document.querySelectorAll('.content section');

	function showSection(id) {
		sections.forEach((section) => {
			section.hidden = true;
		});
		document.getElementById(id).hidden = false;
		buttons.forEach((btn) => btn.classList.remove('active'));
		buttons.forEach((btn) => {
			if (btn.dataset.target === id) btn.classList.add('active');
		});
	}

	// on DOM loaded, set all sections other than 'about'
	// section hidden=true and removes 'active' from buttons
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

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			showSection(button.dataset.target);
		});
	});

	document.querySelector('.nav-label').addEventListener('click', () => {
		const firstSubItem = document
			.querySelector('.nav-label')
			.closest('.nav-group')
			.querySelector('.sub-nav [data-target]');
		showSection(firstSubItem.dataset.target);
	});

	document.querySelectorAll('a').forEach((a) => {
		a.target = '_blank';
		a.rel = 'noopener noreferrer';
	});
});
