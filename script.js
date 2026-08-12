// =====================================
// CP WEB STUDIO
// =====================================


// =====================================
// ANIMAÇÕES AO ROLAR
// =====================================

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


// =====================================
// HEADER AO ROLAR
// =====================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});


// =====================================
// LINK DO NX MOTORS
// =====================================

function abrirProjeto(event) {

    event.preventDefault();

    window.open(
        "https://lorexluc.github.io/NX-Motors/",
        "_blank"
    );

}


// =====================================
// ANO AUTOMÁTICO
// =====================================

const footerTexto = document.querySelector("footer p");

if (footerTexto) {

    footerTexto.innerHTML =
        `© ${new Date().getFullYear()} CP Web Studio — Todos os direitos reservados.`;

}


// =====================================
// CRIAR PRÉVIA
// =====================================

function criarPrevia() {

    const nome =
        document.getElementById("nomeEmpresa").value.trim();

    const tipo =
        document.getElementById("tipoNegocio").value.trim();

    const estilo =
        document.getElementById("estiloSite").value;


    const resultado =
        document.getElementById("resultadoPrevia");

    const titulo =
        document.getElementById("resultadoTitulo");

    const texto =
        document.getElementById("resultadoTexto");

    const logo =
        document.getElementById("previaLogo");

    const categoria =
        document.getElementById("previaCategoria");

    const imagem =
        document.getElementById("previaImagem");

    const servico1 =
        document.getElementById("servico1");

    const servico2 =
        document.getElementById("servico2");

    const servico3 =
        document.getElementById("servico3");

    const descricaoServico1 =
        document.getElementById("descricaoServico1");

    const descricaoServico2 =
        document.getElementById("descricaoServico2");

    const descricaoServico3 =
        document.getElementById("descricaoServico3");


    // =====================================
    // VALIDAÇÃO
    // =====================================

    if (!nome || !tipo || !estilo) {

        alert(
            "Preencha todos os campos para criar sua prévia."
        );

        return;

    }


    // =====================================
    // NORMALIZAÇÃO DO TIPO
    // =====================================

    const tipoNormalizado = tipo
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    // =====================================
    // ESTILOS
    // =====================================

    const estilos = {

        moderno: {
            classe: "estilo-moderno",
            descricao:
                "um visual moderno, elegante e profissional"
        },

        luxuoso: {
            classe: "estilo-luxuoso",
            descricao:
                "um visual sofisticado, premium e elegante"
        },

        minimalista: {
            classe: "estilo-minimalista",
            descricao:
                "um visual limpo, minimalista e objetivo"
        },

        tecnologico: {
            classe: "estilo-tecnologico",
            descricao:
                "um visual tecnológico, moderno e inovador"
        }

    };


    // =====================================
    // NEGÓCIOS
    // =====================================

    const negocios = {

        restaurante: {

            titulo:
                "Sabores que conquistam.",

            descricao:
                "Uma experiência gastronômica pensada para apresentar seu restaurante e encantar seus clientes.",

            servicos: [
                "Nosso cardápio",
                "Delivery",
                "Reservas"
            ]

        },


        confeitaria: {

            titulo:
                "Momentos especiais começam com sabor.",

            descricao:
                "Uma presença digital criada para apresentar seus doces, bolos e encomendas de forma irresistível.",

            servicos: [
                "Bolos personalizados",
                "Doces artesanais",
                "Encomendas"
            ]

        },


        barbearia: {

            titulo:
                "Seu estilo começa aqui.",

            descricao:
                "Um site moderno para apresentar seus serviços, mostrar seu trabalho e facilitar seus agendamentos.",

            servicos: [
                "Cortes",
                "Barba",
                "Agendamento"
            ]

        },


        loja: {

            titulo:
                "Tudo o que você procura.",

            descricao:
                "Uma experiência digital criada para apresentar seus produtos e facilitar o contato com seus clientes.",

            servicos: [
                "Produtos",
                "Ofertas",
                "Atendimento"
            ]

        },


        academia: {

            titulo:
                "Supere seus limites.",

            descricao:
                "Uma presença digital moderna para apresentar sua academia, seus serviços e sua estrutura.",

            servicos: [
                "Treinos",
                "Planos",
                "Estrutura"
            ]

        },


        fazenda: {

            titulo:
                "Tradição que atravessa gerações.",

            descricao:
                "Uma experiência digital para apresentar sua propriedade, sua produção e a história do seu negócio.",

            servicos: [
                "Produção",
                "Nossa história",
                "Contato"
            ]

        }

    };


    // =====================================
    // IDENTIFICAR NEGÓCIO
    // =====================================

    let categoriaEncontrada = null;


    if (tipoNormalizado.includes("restaurante")) {

        categoriaEncontrada = "restaurante";

    }

    else if (
        tipoNormalizado.includes("confeitaria") ||
        tipoNormalizado.includes("doceria") ||
        tipoNormalizado.includes("bolo") ||
        tipoNormalizado.includes("doce")
    ) {

        categoriaEncontrada = "confeitaria";

    }

    else if (
        tipoNormalizado.includes("barbearia") ||
        tipoNormalizado.includes("barbeiro")
    ) {

        categoriaEncontrada = "barbearia";

    }

    else if (
        tipoNormalizado.includes("loja") ||
        tipoNormalizado.includes("roupa") ||
        tipoNormalizado.includes("moda")
    ) {

        categoriaEncontrada = "loja";

    }

    else if (
        tipoNormalizado.includes("academia") ||
        tipoNormalizado.includes("fitness")
    ) {

        categoriaEncontrada = "academia";

    }

    else if (
        tipoNormalizado.includes("fazenda") ||
        tipoNormalizado.includes("agricultura") ||
        tipoNormalizado.includes("rural")
    ) {

        categoriaEncontrada = "fazenda";

    }


    // =====================================
    // DADOS DO NEGÓCIO
    // =====================================

    const dadosNegocio =
        negocios[categoriaEncontrada] || {

            titulo:
                "Uma nova experiência para seu negócio.",

            descricao:
                "Um site profissional pensado para apresentar sua empresa, seus serviços e conquistar novos clientes.",

            servicos: [
                "Nossos serviços",
                "Sobre nós",
                "Contato"
            ]

        };


    // =====================================
    // TEXTOS
    // =====================================

    logo.textContent =
        nome.toUpperCase();

    categoria.textContent =
        tipo.toUpperCase();

    titulo.textContent =
        dadosNegocio.titulo;

    texto.textContent =
        dadosNegocio.descricao;


    // =====================================
    // SERVIÇOS
    // =====================================

    if (servico1) {

        servico1.textContent =
            dadosNegocio.servicos[0];

    }

    if (servico2) {

        servico2.textContent =
            dadosNegocio.servicos[1];

    }

    if (servico3) {

        servico3.textContent =
            dadosNegocio.servicos[2];

    }


    if (descricaoServico1) {

        descricaoServico1.textContent =
            `Soluções profissionais em ${dadosNegocio.servicos[0].toLowerCase()}.`;

    }

    if (descricaoServico2) {

        descricaoServico2.textContent =
            `Qualidade e atenção em ${dadosNegocio.servicos[1].toLowerCase()}.`;

    }

    if (descricaoServico3) {

        descricaoServico3.textContent =
            "Uma experiência pensada para nossos clientes.";

    }


    // =====================================
    // ESTILO VISUAL
    // =====================================

    resultado.classList.remove(
        "estilo-moderno",
        "estilo-luxuoso",
        "estilo-minimalista",
        "estilo-tecnologico"
    );

    resultado.classList.add(
        estilos[estilo].classe
    );


    // =====================================
    // IMAGENS
    // =====================================

    const imagens = {

        restaurante: [

            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",

            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"

        ],


        confeitaria: [

            "https://images.unsplash.com/photo-1551024506-0bccd828d307",

            "https://images.unsplash.com/photo-1578985545062-69928b1d9587",

            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d"

        ],


        barbearia: [

            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",

            "https://images.unsplash.com/photo-1621605815971-fbc98d665033",

            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a"

        ],


        loja: [

            "https://images.unsplash.com/photo-1441986300917-64674bd600d8",

            "https://images.unsplash.com/photo-1472851294608-062f824d29cc"

        ],


        academia: [

            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",

            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"

        ],


        fazenda: [

            "https://images.unsplash.com/photo-1500595046743-cd271d694d30",

            "https://images.unsplash.com/photo-1500076656116-558758c991c1"

        ]

    };


    // =====================================
    // ESCOLHER IMAGEM
    // =====================================

    let imagensDisponiveis =
        imagens[categoriaEncontrada];


    if (!imagensDisponiveis) {

        imagensDisponiveis =
            imagens.loja;

    }


    const imagemEscolhida =
        imagensDisponiveis[
            Math.floor(
                Math.random() *
                imagensDisponiveis.length
            )
        ];


    if (imagem) {

        imagem.src =
            imagemEscolhida +
            "?auto=format&fit=crop&w=1200&q=80&random=" +
            Math.random();

    }


    // =====================================
    // MOSTRAR RESULTADO
    // =====================================

    resultado.style.display =
        "block";


    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// =====================================
// CP AI
// =====================================

function abrirCPAI() {

    const chat = document.getElementById("cpAIChat");

    if (chat) {
        chat.style.display = "flex";
    }

}


function fecharCPAI() {

    const chat = document.getElementById("cpAIChat");

    if (chat) {
        chat.style.display = "none";
    }

}


function adicionarMensagemCPAI(texto, tipo) {

    const mensagens =
        document.getElementById("cpAIMensagens");

    const mensagem =
        document.createElement("div");

    mensagem.className =
        "cp-ai-msg " + tipo;

    mensagem.innerHTML =
        texto;

    mensagens.appendChild(mensagem);

    mensagens.scrollTop =
        mensagens.scrollHeight;

}


function gerarRespostaCPAI(pergunta) {

    const texto =
        pergunta
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    // =====================================
    // PLANOS
    // =====================================

    if (
        texto.includes("199") ||
        texto.includes("landing") ||
        texto.includes("landing page")
    ) {

        return `
            O plano <strong>Landing Page</strong> começa em
            <strong>R$ 199</strong>. 🚀

            <br><br>

            É indicado para quem quer uma página profissional
            para apresentar um produto, serviço ou negócio.

            <br><br>

            Inclui página responsiva, design personalizado,
            WhatsApp, formulário de contato e publicação.
        `;

    }


    if (
        texto.includes("399") ||
        texto.includes("site completo") ||
        texto.includes("profissional")
    ) {

        return `
            O plano <strong>Site Completo</strong> começa em
            <strong>R$ 399</strong>. 🔥

            <br><br>

            É uma ótima opção para empresas que precisam
            de uma presença digital mais completa.

            <br><br>

            Inclui até 5 seções, design personalizado,
            responsividade, WhatsApp, animações e publicação.
        `;

    }


    if (
        texto.includes("699") ||
        texto.includes("premium") ||
        texto.includes("personalizado")
    ) {

        return `
            O <strong>Projeto Premium</strong> começa em
            <strong>R$ 699</strong>. 💎

            <br><br>

            É indicado para projetos maiores que precisam
            de funcionalidades e soluções personalizadas.

            <br><br>

            O projeto pode incluir design avançado,
            animações, funcionalidades extras e publicação.
        `;

    }


    // =====================================
    // NEGÓCIOS
    // =====================================

    if (
        texto.includes("barbearia") ||
        texto.includes("barbeiro")
    ) {

        return `
            Para uma <strong>barbearia</strong>, eu recomendaria
            um site com:

            <br><br>

            ✂️ Serviços<br>
            📸 Galeria de cortes<br>
            📅 Agendamento<br>
            📍 Localização<br>
            💬 WhatsApp

            <br><br>

            Para esse tipo de projeto,
            o <strong>Site Completo — R$ 399</strong>
            pode ser uma ótima opção.
        `;

    }


    if (
        texto.includes("restaurante") ||
        texto.includes("pizzaria") ||
        texto.includes("lanchonete")
    ) {

        return `
            Para um negócio de alimentação,
            podemos criar um site com:

            <br><br>

            🍕 Cardápio<br>
            📱 Pedidos pelo WhatsApp<br>
            📍 Localização<br>
            ⭐ Avaliações<br>
            📸 Fotos dos produtos

            <br><br>

            Eu recomendaria começar pelo
            <strong>Site Completo — R$ 399</strong>.
        `;

    }


    if (
        texto.includes("confeitaria") ||
        texto.includes("doceria") ||
        texto.includes("bolo") ||
        texto.includes("doce")
    ) {

        return `
            Para uma <strong>confeitaria</strong>,
            podemos destacar:

            <br><br>

            🎂 Bolos personalizados<br>
            🍰 Catálogo de produtos<br>
            📸 Galeria<br>
            📦 Encomendas<br>
            💬 WhatsApp

            <br><br>

            O <strong>Site Completo — R$ 399</strong>
            seria uma excelente escolha.
        `;

    }


    if (
        texto.includes("loja") ||
        texto.includes("roupa") ||
        texto.includes("moda")
    ) {

        return `
            Para uma <strong>loja</strong>, podemos criar
            uma apresentação moderna dos produtos,
            categorias, ofertas e formas de contato.

            <br><br>

            Se a ideia for algo mais simples,
            a <strong>Landing Page — R$ 199</strong>
            pode funcionar.

            <br><br>

            Para uma estrutura maior,
            recomendo o <strong>Site Completo — R$ 399</strong>.
        `;

    }


    if (
        texto.includes("academia") ||
        texto.includes("fitness")
    ) {

        return `
            Para uma <strong>academia</strong>,
            o site pode apresentar:

            <br><br>

            🏋️ Estrutura<br>
            💪 Treinos<br>
            📋 Planos<br>
            📍 Localização<br>
            💬 WhatsApp

            <br><br>

            O <strong>Site Completo — R$ 399</strong>
            seria uma boa escolha.
        `;

    }


    if (
        texto.includes("fazenda") ||
        texto.includes("rural") ||
        texto.includes("agricultura")
    ) {

        return `
            Para uma <strong>fazenda ou negócio rural</strong>,
            podemos criar uma apresentação mais sofisticada
            da propriedade e da atividade.

            <br><br>

            🌱 Produção<br>
            🚜 Estrutura<br>
            📖 História<br>
            📸 Galeria<br>
            📞 Contato

            <br><br>

            Dependendo do tamanho do projeto,
            eu recomendaria o
            <strong>Site Completo — R$ 399</strong>
            ou o <strong>Projeto Premium — R$ 699</strong>.
        `;

    }


    // =====================================
    // SITE
    // =====================================

    if (
        texto.includes("site") ||
        texto.includes("criar") ||
        texto.includes("website")
    ) {

        return `
            Claro! 🚀

            A CP Web Studio cria sites
            <strong>modernos, responsivos e personalizados</strong>.

            <br><br>

            Temos três opções principais:

            <br><br>

            🔹 <strong>Landing Page — R$ 199</strong><br>
            Para projetos mais simples.

            <br><br>

            🔹 <strong>Site Completo — R$ 399</strong><br>
            Para empresas que precisam de uma presença digital completa.

            <br><br>

            🔹 <strong>Projeto Premium — R$ 699</strong><br>
            Para projetos maiores e personalizados.
        `;

    }


    // =====================================
    // PREÇO
    // =====================================

    if (
        texto.includes("preco") ||
        texto.includes("preço") ||
        texto.includes("valor") ||
        texto.includes("quanto custa")
    ) {

        return `
            Hoje trabalhamos com três opções principais:

            <br><br>

            💻 <strong>Landing Page:</strong> a partir de R$ 199

            <br><br>

            🚀 <strong>Site Completo:</strong> a partir de R$ 399

            <br><br>

            💎 <strong>Projeto Premium:</strong> a partir de R$ 699

            <br><br>

            O valor final pode variar de acordo
            com as funcionalidades do projeto.
        `;

    }


    // =====================================
    // SAUDAÇÕES
    // =====================================

    if (
        texto.includes("oi") ||
        texto.includes("ola") ||
        texto.includes("olá") ||
        texto.includes("bom dia") ||
        texto.includes("boa tarde") ||
        texto.includes("boa noite")
    ) {

        return `
            Olá! 👋🤖

            Eu sou a <strong>CP AI</strong>,
            assistente da CP Web Studio.

            <br><br>

            Posso ajudar você a escolher
            o melhor tipo de site para o seu negócio.

            <br><br>

            Experimente perguntar:

            <br><br>

            "Tenho uma barbearia. Qual plano devo escolher?"
        `;

    }


    // =====================================
    // RESPOSTA PADRÃO
    // =====================================

    return `
        Entendi! 🤖

        <br><br>

        Posso ajudar com dúvidas sobre
        <strong>sites, planos e projetos da CP Web Studio</strong>.

        <br><br>

        Você pode perguntar, por exemplo:

        <br><br>

        💻 "Quero criar um site"

        <br>

        💰 "Quanto custa um site?"

        <br>

        ✂️ "Tenho uma barbearia"

        <br>

        🍕 "Tenho uma pizzaria"

        <br>

        💎 "O que é o plano Premium?"
    `;

}


function enviarCPAI() {

    const input = document.getElementById("cpAIInput");

    if (!input) return;

    const pergunta = input.value.trim();

    if (!pergunta) return;

    adicionarMensagemCPAI(
        pergunta,
        "user"
    );

    input.value = "";

    const mensagens =
        document.getElementById("cpAIMensagens");

    const pensando =
        document.createElement("div");

    pensando.className = "cp-ai-msg bot";
    pensando.id = "cpAIPensando";
    pensando.innerHTML = "🤖 CP AI está pensando...";

    mensagens.appendChild(pensando);

    mensagens.scrollTop =
        mensagens.scrollHeight;

    fetch(
        "https://cp-msb1pjv5q-cp-web-studio.vercel.app/api/chat",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: pergunta
            })
        }
    )

    .then(response => {

        if (!response.ok) {
            throw new Error("Erro no servidor");
        }

        return response.json();

    })

    .then(data => {

        const elemento =
            document.getElementById("cpAIPensando");

        if (elemento) {
            elemento.remove();
        }

        adicionarMensagemCPAI(
            data.reply || "Não consegui responder.",
            "bot"
        );

    })

    .catch(error => {

        console.error(error);

        const elemento =
            document.getElementById("cpAIPensando");

        if (elemento) {
            elemento.remove();
        }

        adicionarMensagemCPAI(
            "⚠️ Não consegui conectar com a CP AI. Tente novamente.",
            "bot"
        );

    });
}
