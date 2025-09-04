const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        anunciado: A IA subistituirá completamente alguns trabalhos humanos.
        alternativas: [
            "sim"
            "não"
        ]

    },
     {
        anunciado: A IA será acessivel a todas as pessoas no futuro?

        alternativas: [
            "sim"
            "não"
        ]

    },
    {
        anunciado: A IA terá consciencia própria?
        alternativas: [
            "sim"
            "não"
        ]

    },
    {
        anunciado: A iA pode representar um risco á privacidade das pessoas?
        alternativas: [
            "sim"
            "não"
        ]

    },
    {
        anunciado: A IA vai substituir a maioria dos empregos humanos ?
        alternativas: [
            "sim"
            "não"
        ]

    },
]
       let atual =0;
       let perguntaAtual;

       function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();

       }
        fuction mostraAlternativas() {
            for (const alternativas of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativas
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }

        mostraPergunta