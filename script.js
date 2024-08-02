window.addEventListener('scroll', function() {
    const bebidas = document.querySelector('.bebidas');
    const marmitas = document.querySelector(".marmitas")
    const scrollPosition = window.scrollY;
    const triggerPoint = 750; 

    bebidas.classList.remove('cor');
    marmitas.classList.remove('cor');

    if (scrollPosition > triggerPoint) {
        bebidas.classList.add('cor');
    } else {
        marmitas.classList.add('cor');
    }
});