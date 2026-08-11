// =====================================
// CP WEB STUDIO
// =====================================


// ANIMAÇÕES AO ROLAR

const elementos = document.querySelectorAll(
    ".card, .processo-card, .portfolio-card, .plano, .section-title"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observer.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observer.observe(elemento);

});


// HEADER AO ROLAR

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});


// LINK DO NX MOTORS

function abrirProjeto(event) {
    event.preventDefault();

    window.open(
        "https://lorexluc.github.io/NX-Motors/",
        "_blank"
    );
}


// ANO AUTOMÁTICO

const footerTexto = document.querySelector("footer p");

if (footerTexto) {

    footerTexto.innerHTML =
        `© ${new Date().getFullYear()} CP Web Studio — Todos os direitos reservados.`;

}