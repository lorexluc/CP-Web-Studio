// =========================
// ANIMAÇÃO DAS SEÇÕES
// =========================

const elementos = document.querySelectorAll(
    ".card, .tech-card, .sobre, .galeria, .contato"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("animar");

                setTimeout(() => {
                    entrada.target.classList.add("aparecer");
                }, 100);

                observer.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observer.observe(elemento);

});


// =========================
// MENU MOBILE
// =========================

function abrirMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("ativo");
    }

}