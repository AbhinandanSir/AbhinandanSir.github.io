const questions = [

    {
        question: "Which of the following is an irrational number?",

        options: [
            "√2",
            "3/4",
            "0.25",
            "5"
        ],

        answer: 0
    },


    {
        question: "What is the HCF of 36 and 48?",

        options: [
            "6",
            "12",
            "18",
            "24"
        ],

        answer: 1
    },


    {
        question: "Euclid's division algorithm is based on which principle?",

        options: [
            "Division algorithm",
            "Factorisation",
            "Prime factorisation",
            "Linear equations"
        ],

        answer: 0
    },


    {
        question: "The decimal expansion of a rational number is either terminating or:",

        options: [
            "Non-repeating",
            "Repeating",
            "Always terminating",
            "Irrational"
        ],

        answer: 1
    },


    {
        question: "Which of the following numbers is prime?",

        options: [
            "21",
            "29",
            "39",
            "51"
        ],

        answer: 1
    },


    {
        question: "If HCF(a,b) = 6 and LCM(a,b) = 72, then a × b is:",

        options: [
            "78",
            "432",
            "4320",
            "12"
        ],

        answer: 1
    },


    {
        question: "The fundamental theorem of arithmetic is related to:",

        options: [
            "Unique prime factorisation",
            "Linear equations",
            "Polynomials",
            "Probability"
        ],

        answer: 0
    },


    {
        question: "Which of the following has a terminating decimal expansion?",

        options: [
            "1/3",
            "2/7",
            "7/20",
            "5/6"
        ],

        answer: 2
    },


    {
        question: "The HCF of two consecutive positive integers is always:",

        options: [
            "0",
            "1",
            "2",
            "10"
        ],

        answer: 1
    },


    {
        question: "Which number is irrational?",

        options: [
            "√3",
            "4/5",
            "0.5",
            "2"
        ],

        answer: 0
    }

];


let currentQuestion = 0;

let score = 0;


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumberElement =
    document.getElementById("question-number");

const nextButton =
    document.getElementById("next-button");

const quizContainer =
    document.getElementById("quiz-container");

const resultContainer =
    document.getElementById("result-container");

const scoreElement =
    document.getElementById("score");

const percentageElement =
    document.getElementById("percentage");

const resultMessageElement =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");


function loadQuestion() {

    const current = questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    optionsElement.innerHTML = "";


    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.classList.add(
                "quiz-option"
            );


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );


            optionsElement.appendChild(
                button
            );

        }
    );


    nextButton.disabled = true;

}


function selectAnswer(selectedIndex) {

    const current =
        questions[currentQuestion];


    const optionButtons =
        document.querySelectorAll(
            ".quiz-option"
        );


    optionButtons.forEach(
        button => {
            button.disabled = true;
        }
    );


    if (
        selectedIndex === current.answer
    ) {

        optionButtons[selectedIndex]
            .classList.add("correct");

        score++;

    } else {

        optionButtons[selectedIndex]
            .classList.add("wrong");


        optionButtons[current.answer]
            .classList.add("correct");

    }


    nextButton.disabled = false;

}


function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    } else {

        showResult();

    }

}


function showResult() {

    quizContainer.style.display =
        "none";


    resultContainer.style.display =
        "block";


    scoreElement.textContent =
        `${score} / ${questions.length}`;


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    percentageElement.textContent =
        `${percentage}%`;


    if (percentage >= 80) {

        resultMessageElement.textContent =
            "Excellent work! Keep it up.";

    } else if (percentage >= 60) {

        resultMessageElement.textContent =
            "Good effort! A little more practice will help.";

    } else {

        resultMessageElement.textContent =
            "Keep practising. You can improve with more revision.";

    }

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;


    quizContainer.style.display =
        "block";


    resultContainer.style.display =
        "none";


    loadQuestion();

}


nextButton.addEventListener(
    "click",
    nextQuestion
);


restartButton.addEventListener(
    "click",
    restartQuiz
);


loadQuestion();