import trabajos from './proyectos.js';
var proyectCard = '';
const  projectContainer = document.getElementsByClassName('project_container')[0]
window.addEventListener('load',iniciar)

function iniciar(){
    for (let i = 0; i < trabajos.length; i++) {
        const trabajo = trabajos[i];
        proyectCard += `<div class='project-card'>
        <img src="img/${trabajo.imagen}" alt="Portada de ${trabajo.titulo}" class="card-img">
        <div class='text-card'>
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.descripcion}</p>
            <div class='btn-container'>
                     <a href="${trabajo.enlace}" target="_blank" class="card_link" id='enlace'>Enlace</a>
                     <a href="${trabajo.github}" target="_blank" class="card_link" id='repo'>Repositorio</a>
            </div>
        </div>
        </div>`;
        // Aquí puedes crear las cartas con la información de cada trabajo
        console.log(trabajo.titulo, trabajo.imagen, trabajo.descripcion, trabajo.enlace);
    }
    projectContainer.innerHTML = proyectCard;  // Utiliza innerHTML para agregar el contenido HTML

    // projectContainer.appendChild(proyectCard)
    // <h3>${trabajo.titulo}</h3>
    //         <img src="img/${trabajo.imagen}" alt="${trabajo.titulo}" class="card-img">
    //         <p>${trabajo.descripcion}</p>
    //         <a href="${trabajo.enlace}" target="_blank" class="card_link">Enlace</a>
            
}
