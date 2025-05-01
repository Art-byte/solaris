/**
 * Funcionalidad para llevar a cabo la animacion de 
 * mostrar la pagina seccion con seccion
 */
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".seccion");
    const showSections = () => {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showSections);
    showSections();
    showCardsContainer();
    showCardsMuseosContainer();
    showCardsPersonajesContainer();
});


function showCardsContainer(){
    document.getElementById('mostrarCardsBtn').addEventListener('click', function(){
        const cardContainer = document.getElementById('cardsContainer');
        if(cardContainer.style.display === 'none'){
            cardContainer.style.display = 'flex';
        } else {
            cardContainer.style.display = 'none';
        }
    });
}

function showCardsMuseosContainer(){
    document.getElementById('mostrarCardsMuseosBtn').addEventListener('click', function(){
        const cardContainer = document.getElementById('cardsContainerMuseos');
        if(cardContainer.style.display === 'none'){
            cardContainer.style.display = 'flex';
        } else {
            cardContainer.style.display = 'none';
        }
    });
}
function showCardsPersonajesContainer(){
    document.getElementById('mostrarCardsPersonajesBtn').addEventListener('click', function(){
        const cardContainer = document.getElementById('cardsContainerPersonajes');
        if(cardContainer.style.display === 'none'){
            cardContainer.style.display = 'flex';
        } else {
            cardContainer.style.display = 'none';
        }
    });
}