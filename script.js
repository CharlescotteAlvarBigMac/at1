// Define questions array with data dictionary structure
const questions = [
    {
        question: "What is a computer program?",
        correct_answer: "A1",
        incorrect_answers: ["B1"],
        answered: false
    },
    {
        question: "What does a programmer do?",
        correct_answer: "A2",
        incorrect_answers: ["B2"],
        answered: false
    },
    {
        question: "What is the symbol used to end a line of code in many programming languages?",
        correct_answer: "A3",
        incorrect_answers: ["B3"],
        answered: false
    },
    {
        question: "Which of these is NOT a programming language?",
        correct_answer: "A4",
        incorrect_answers: ["B4"],
        answered: false
    },
    {
        question: "What is a loop in programming?",
        correct_answer: "A5",
        incorrect_answers: ["B5"],
        answered: false
    },
    {
        question: "What does HTML stand for?",
        correct_answer: "A6",
        incorrect_answers: ["B6"],
        answered: false
    },
    {
        question: "What does CSS do in web development?",
        correct_answer: "A7",
        incorrect_answers: ["B7"],
        answered: false
    },
    {
        question: "What is the name of the programming language used in the game 'Scratch'?",
        correct_answer: "A8",
        incorrect_answers: ["B8"],
        answered: false
    },
    {
        question: "Which of the following is used to store information in a computer program?",
        correct_answer: "A9",
        incorrect_answers: ["B9"],
        answered: false
    },
    {
        question: "What does a 'bug' mean in programming?",
        correct_answer: "A10",
        incorrect_answers: ["B10"],
        answered: false
    }
];

// Define correct answers
const correctAnswers = {
    A1: "A) A set of instructions that tells the computer what to do",
    A2: "A) Writes code to make software and apps",
    A3: "C) ;",
    A4: "B) French",
    A5: "B) A way to repeat a set of instructions",
    A6: "A) Hyper Text Markup Language",
    A7: "A) Styles the appearance of web pages",
    A8: "C) Scratch",
    A9: "A) Variables",
    A10: "B) An error in the code"
};

// Define incorrect answers
const incorrectAnswers = {
    B1: [
        "B) A type of video game",
        "C) A special kind of food",
        "D) A book about computers"
    ],
    B2: [
        "B) Fixes broken computers",
        "C) Cooks delicious meals",
        "D) Drives cars"
    ],
    B3: [
        "A) $",
        "B) %",
        "D) :"
    ],
    B4: [
        "A) Python",
        "C) Scratch",
        "D) JavaScript"
    ],
    B5: [
        "A) A circle-shaped tool",
        "C) A type of dance",
        "D) A kind of knot"
    ],
    B6: [
        "B) How to Make Lunch",
        "C) Hello To My Land",
        "D) High Tech Movie List"
    ],
    B7: [
        "B) Creates cookies for websites",
        "C) Calculates math problems",
        "D) Stores passwords securely"
    ],
    B8: [
        "A) Scratchy",
        "B) Scratchy Code",
        "D) Scratch and Sniff"
    ],
    B9: [
        "B) Bananas",
        "C) Clouds",
        "D) Rockets"
    ],
    B10: [
        "A) An insect",
        "C) A feature of the program",
        "D) A type of food"
    ]
};

// Function to display a question
function displayQuestion() {
    // Get question container element
    const questionContainer = document.getElementById("questionContainer");
    // Clear previous content
    questionContainer.innerHTML = "";
    // Get unanswered questions
    const unansweredQuestions = questions.filter(question => !question.answered);
    // Get random question
    const randomQuestion = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];
    // Display question
    questionContainer.innerHTML = `<h2>${randomQuestion.question}</h2>`;
    // Combine correct and incorrect answers
    const allAnswers = randomQuestion.incorrect_answers.concat(randomQuestion.correct_answer);
    // Shuffle answers
    const shuffledAnswers = shuffleArray(allAnswers);
    // Display shuffled answers
    shuffledAnswers.forEach(answer => {
        if (answer.startsWith("A")) {
            questionContainer.innerHTML += `<button class="option">${correctAnswers[answer]}</button>`;
        } else if (answer.startsWith("B")) {
            questionContainer.innerHTML += `<button class="option">${incorrectAnswers[answer]}</button>`;
        }
    });
}

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listener for start test button
document.getElementById("startTestBtn").addEventListener("click", () => {
    // Start the test
    startTest();
});

// Function to start the test
function startTest() {
    // Hide start test button
    document.getElementById("startTestBtn").style.display = "none";
    // Display question
    displayQuestion();
}

// Event delegation for options
document.getElementById("questionContainer").addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
        // Handle answer submission
        handleAnswerSubmission(event.target.textContent);
    }
});

// Function to handle user's answer submission
function handleAnswerSubmission(selectedOption) {
    // Get the current unanswered question object
    const currentQuestion = questions.find(question => !question.answered);
    
    // Find the selected answer object
    const selectedAnswer = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).find(answer => {
        if (answer.startsWith("A")) {
            return correctAnswers[answer] === selectedOption;
        } else if (answer.startsWith("B")) {
            return incorrectAnswers[answer].includes(selectedOption);
        }
    });
    
    // Check if the selected answer is correct
    if (selectedAnswer && selectedAnswer.startsWith("A")) {
        // Display correct message
        displayMessage(correctAnswers[selectedAnswer], "green");
    } else {
        // Display incorrect message
        displayMessage(selectedOption, "red");
    }
    
    // Mark question as answered
    currentQuestion.answered = true;
    
    // Display next question
    displayQuestion();
}

// Function to display message
function displayMessage(message, color) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = message;
    messageContainer.style.color = color;
}
