const addListenerAndAdjust = (textarea) => {
  textarea.addEventListener('input', (e) => adjustTextarea(e.target));
  adjustTextarea(textarea);
}

const adjustTextarea = (el) => {
  el.style.height = 0;
  el.style.height = el.scrollHeight + 'px';
}

module.exports = () => {
  const textareas = [...document.querySelectorAll('[data-js="textarea"]')];
  textareas.forEach(addListenerAndAdjust)
}
