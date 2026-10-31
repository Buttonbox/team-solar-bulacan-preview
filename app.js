const form = document.querySelector('#quote-form');
const result = document.querySelector('#quote-result');
const menu = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-navigation');
menu.hidden = false;
navigation.dataset.open = 'false';
function closeMenu() {
  navigation.dataset.open = 'false';
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = 'Menu +';
}
menu.addEventListener('click', () => {
  const open = navigation.dataset.open !== 'true';
  navigation.dataset.open = String(open);
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close −' : 'Menu +';
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.dataset.open === 'true') {
    closeMenu(); menu.focus();
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  result.className = 'success';
  result.textContent = 'Preview complete. No inquiry was saved or sent. Use the Contact us section to reach Team Solar Bulacan directly.';
  form.reset();
});
