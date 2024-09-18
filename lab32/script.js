const questions = [
    {
        question: "Qual é o atual campeão do Campeonato Brasileiro?",
        answers: ["Atlético-MG", "Botafogo", "Palmeiras", "Flamengo"],
        correctAnswer: 2
    },
    {
        question: "Qual o maior campeão da Copa do Brasil?",
        answers: ["Cruzeiro", "Santos", "Grêmio", "São Paulo"],
        correctAnswer: 0
    },
    {
        question: "Qual o atual campeão da Copa do Mundo?",
        answers: ["Alemanha", "Brasil", "França", "Argentina"],
        correctAnswer: 3
    },
    {
        question: "Qual o jogador que mais ganhou Bolas de Ouro na história?",
        answers: ["CR7", "Messi", "Pelé", "Neymar"],
        correctAnswer: 1
    },
    {
        question: "Quantas Copas do Mundo tem o Brasil?",
        answers: ["1", "3", "5", "4"],
        correctAnswer: 2
    },
];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        } 
        //else if (selectedAnswer) {
          //  incorrectAnswers.push({
            //    question: q.question,
              //  correctAnswer: q.answers[q.correct.Answer]
            //});
        //}
    //});

    //let resultMessage = `Você tirou ${score} de ${questions.length}`;

    //if (incorrectAnswers.length > 0) {
      //  resultMessage += "<h3>Respostas incorretas:</h3><ul>";
        //incorrectAnswers.forEach(incorrect => {
          //  resultMessage += `<li>${incorrect.question} - Resposta correta: ${incorrect.correctAnswer}</li>`;
       // });
        //resultMessage += "</ul>";
    });

    document.getElementById('result').innerHTML = `Você tirou ${score} de ${questions.length}`;
}

window.onload = loadQuestions;