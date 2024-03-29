const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "variável myVar;"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "console.print()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof([])); ?",
        respostas: [
            "array",
            "object",
            "undefined"
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara valores",
            "Compara valores e tipos",
            "Atribuição"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão: '5' + 3?",
        respostas: [
            "53",
            "8",
            "5 + 3"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes métodos remove o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "slice()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'charAt()' faz em JavaScript?",
        respostas: [
            "Retorna o primeiro caractere de uma string",
            "Remove o primeiro caractere de uma string",
            "Adiciona um caractere no início de uma string"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão: 3 + '3'?",
        respostas: [
            "33",
            "6",
            "String"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "String.toInt()",
            "toInteger()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição 
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas)  {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta) 
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}