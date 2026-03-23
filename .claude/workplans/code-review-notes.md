# Code Review Notes — script.js / index.html

---

## 1. Hyphenated keys (`'why-switch'`, `'older-projects'`)

In `content.js`, the keys of `sectionContent` are strings like `'why-switch'` and `'older-projects'`. These are used in `script.js` line 13 to build a CSS selector:

```js
const container = document.querySelector(`#${id} .section-text`);
```

So the key `'why-switch'` maps directly to `<section id="why-switch">` in `index.html`. The same strings also appear as `data-target` values on nav buttons (e.g. `data-target="why-switch"`).

**The coupling risk:** these three places — the `sectionContent` key, the section `id`, and the button `data-target` — must all match exactly. If you rename one (say, you decide `'older-projects'` should become `'archive'`), you have to find and update all three manually. There is no type safety or single source of truth enforcing this. It works fine for a small project, but is worth knowing about.

**Suggestion (good to know):** define the IDs once as constants and reuse them:

```js
const SECTIONS = {
	about: 'about',
	whySwitch: 'why-switch',
	olderProjects: 'older-projects',
	// ...
};
```

Use `SECTIONS.whySwitch` as the key in `sectionContent` and anywhere else the string appears. One place to update if a name ever changes. Not worth doing now — just the pattern to reach for if the project grows.

---

## 5. Anchor patching — explanation

Lines 62–65:

```js
document.querySelectorAll('a').forEach((a) => {
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
});
```

Because the link HTML is written inside template literals in `content.js` (e.g. `<a href="...">`), it would be tedious to manually add `target="_blank" rel="noopener noreferrer"` to every single anchor. This code patches all anchors in bulk after the DOM has been populated — a pragmatic shortcut.

**The implicit risk:** this runs once at `DOMContentLoaded`. Any anchor that exists in the DOM at that moment gets patched. But if content were ever injected dynamically _after_ that point (e.g. an async fetch that adds new HTML), those new anchors would be missed and would open links in the same tab.

For this project, all content is injected synchronously before `DOMContentLoaded` fires, so it works correctly. But it is worth knowing the limitation if the project evolves to load content lazily.

`rel="noopener noreferrer"` is also a security best practice when using `target="_blank"` — it prevents the opened page from accessing `window.opener`, which could otherwise be exploited to redirect the original tab.

**No action needed.** The current structure is correct for this project. This note is purely informational.
