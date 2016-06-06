const marked = require('marked')

const selector = '[data-markdown]';

module.exports = () => {
  const textareas = [...document.querySelectorAll(selector)];
  textareas.forEach(setup);
}

const setup = (textarea) => {
  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Markdown View';
  toggle.className = 'mdToggle';
  toggle.addEventListener('click', toggleView);
  textarea.parentNode.insertBefore(toggle, textarea);

  const preview = document.createElement('section');
  preview.className = 'section is-hidden';
  preview.setAttribute('data-markdownPreview')
  preview.innerHTML = marked(textarea.value)
  textarea.parentNode.insertBefore(preview, textarea);

  textarea.addEventListener('change', handleChange);
}

const toggleView = (e) => {
  e.preventDefault();
  const textarea = e.target.parentNode.querySelector(selector)
  const preview = e.target.parentNode.querySelector('[data-markdownPreview]')
  preview.classList.toggle('is-hidden')
  textarea.classList.toggle('is-hidden')
}

const handleChange = (e) => {
  const preview = e.target.parentNode.querySelector('[data-markdownPreview]');
  preview.innerHTML = marked(e.target.value);
}
