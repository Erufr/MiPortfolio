const certificadosLista = document.querySelector('.certificados__lista');
const certificadosElementos = document.querySelectorAll('.certificados__elemento');
let currentIndex = 0;

const updateCarrusel = () => {
    const totalElementos = certificadosElementos.length;
    const translateX = -currentIndex * 600; 
    certificadosLista.style.transform = `translateX(${translateX}px)`; 
};

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % certificadosElementos.length; 
    updateCarrusel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + certificadosElementos.length) % certificadosElementos.length; 
        updateCarrusel();
});
