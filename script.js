import trabajos from './proyectos.js';
import experiencia from './experiencia.js';

const projectContainer = document.querySelector('.project_container');
const experienciaContainer = document.querySelector('.experiencia_container');

function renderProyectos() {
  projectContainer.innerHTML = trabajos
    .map(
      (trabajo) => `
      <div class="project-card">
        <img src="img/${trabajo.imagen}" alt="Portada de ${trabajo.titulo}" class="card-img">
        <div class="text-card">
          <h3>${trabajo.titulo}</h3>
          <p>${trabajo.descripcion}</p>
          <div class="btn-container">
            <a href="${trabajo.enlace}" target="_blank" class="card_link" id="enlace">Enlace</a>
            <a href="${trabajo.github}" target="_blank" class="card_link" id="repo">Repositorio</a>
          </div>
        </div>
      </div>`
    )
    .join('');
}

function renderExperiencia() {
  experienciaContainer.innerHTML = experiencia
    .map(
      (puesto) => `
      <li>
        <div>
          <h3>${puesto.empresa}</h3>
          <legend>${puesto.periodo}</legend>
        </div>
        <p>${puesto.descripcion}</p>
      </li>`
    )
    .join('');
}

window.addEventListener('load', () => {
  renderProyectos();
  renderExperiencia();
});

const header = document.querySelector('.header');
const toggle = document.querySelector('.nav__toggle');
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelectorAll('.nav__ul a');

function updateHeaderScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
}

function closeMenu() {
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
}

function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
}

themeToggle.addEventListener('click', () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

setTheme(getTheme());

toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', updateHeaderScroll, { passive: true });
updateHeaderScroll();
