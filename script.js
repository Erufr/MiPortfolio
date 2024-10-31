document.addEventListener('DOMContentLoaded', function () {
    
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) { 
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'assets/CVErikaFrias.pdf';  
            link.download = 'CVErikaFrias.pdf';    
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        console.error("Botón de descarga no encontrado.");
    }

    const certificadosLista = document.querySelector('.certificados__lista');
    const certificadosElementos = document.querySelectorAll('.certificados__elemento');
    let currentIndex = 0;

    const updateCarrusel = () => {
        const totalElementos = certificadosElementos.length;
        const translateX = -currentIndex * 600; 
        certificadosLista.style.transform = `translateX(${translateX}px)`; 
    };

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % certificadosElementos.length; 
            updateCarrusel();
        });
    } else {
        console.error("Botón de siguiente no encontrado.");
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + certificadosElementos.length) % certificadosElementos.length; 
            updateCarrusel();
        });
    } else {
        console.error("Botón de anterior no encontrado.");
    }

});
