// Define questions array with data dictionary structure
// Define questions array with data dictionary structure
const questions = [
    {
        question: "What is a computer program?",
        correct_answer: "A1",
        incorrect_answers: ["B1.1", "B1.2", "B1.3"],
        answered: false,
        custom_feedback: {
            correct: "You got it right! A computer program is indeed a set of instructions that tells the computer what to do.",
            incorrect: "Oops! That's not quite right. A computer program is a set of instructions that tells the computer what to do."
        }
    },
    {
        question: "What does a programmer do?",
        correct_answer: "A2",
        incorrect_answers: ["B2.1", "B2.2", "B2.3"],
        answered: false,
        custom_feedback: {
            correct: "Correct! Programmers write code to make software and apps.",
            incorrect: "Incorrect. A programmer writes code to make software and apps."
        }
    },
    {
        question: "What is the symbol used to end a line of code in many programming languages?",
        correct_answer: "A3",
        incorrect_answers: ["B3.1", "B3.2", "B3.3"],
        answered: false,
        custom_feedback: {
            correct: "Right! The symbol used to end a line of code in many programming languages is ; (semicolon).",
            incorrect: "Incorrect. The correct symbol used to end a line of code in many programming languages is ; (semicolon)."
        }
    },
    {
        question: "Which of these is NOT a programming language?",
        correct_answer: "A4",
        incorrect_answers: ["B4.1", "B4.2", "B4.3"],
        answered: false,
        custom_feedback: {
            correct: "Correct! French is not a programming language.",
            incorrect: "That's incorrect. French is not a programming language."
        }
    },
    {
        question: "What is a loop in programming?",
        correct_answer: "A5",
        incorrect_answers: ["B5.1", "B5.2", "B5.3"],
        answered: false,
        custom_feedback: {
            correct: "You're right! A loop in programming is a way to repeat a set of instructions.",
            incorrect: "Incorrect. A loop in programming is a way to repeat a set of instructions."
        }
    },
    {
        question: "What does HTML stand for?",
        correct_answer: "A6",
        incorrect_answers: ["B6.1", "B6.2", "B6.3"],
        answered: false,
        custom_feedback: {
            correct: "Correct! HTML stands for Hyper Text Markup Language.",
            incorrect: "That's incorrect. HTML stands for Hyper Text Markup Language."
        }
    },
    {
        question: "What does CSS do in web development?",
        correct_answer: "A7",
        incorrect_answers: ["B7.1", "B7.2", "B7.3"],
        answered: false,
        custom_feedback: {
            correct: "Right! CSS styles the appearance of web pages.",
            incorrect: "Incorrect. CSS styles the appearance of web pages."
        }
    },
    {
        question: "What is the name of the programming language used in the game 'Scratch'?",
        correct_answer: "A8",
        incorrect_answers: ["B8.1", "B8.2", "B8.3"],
        answered: false,
        custom_feedback: {
            correct: "Correct! The programming language used in the game 'Scratch' is Scratch.",
            incorrect: "Incorrect. The programming language used in the game 'Scratch' is Scratch."
        }
    },
    {
        question: "Which of the following is used to store information in a computer program?",
        correct_answer: "A9",
        incorrect_answers: ["B9.1", "B9.2", "B9.3"],
        answered: false,
        custom_feedback: {
            correct: "You got it! Variables are used to store information in a computer program.",
            incorrect: "That's not correct. Variables are used to store information in a computer program."
        }
    },
    {
        question: "What does a 'bug' mean in programming?",
        correct_answer: "A10",
        incorrect_answers: ["B10.1", "B10.2", "B10.3"],
        answered: false,
        custom_feedback: {
            correct: "You're correct! A 'bug' in programming refers to an error in the code.",
            incorrect: "Incorrect. A 'bug' in programming refers to an error in the code."
        }
    }
];

// Define correct answers
const correct_answers = {
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
const incorrect_answers = {
    B1,1: "B) A type of video game",
    B1,2: "C) A special kind of food",
    B1,3: "D) A book about computers",
    B2,1: "B) Fixes broken computers",
    B2,2: "C) Cooks delicious meals",
    B2,3: "D) Drives cars",
    B3,1: "A) $",
    B3,2: "B) %",
    B3,3: "D) :",
    B4,1: "A) Python",
    B4,2: "C) Scratch",
    B4,3: "D) JavaScript",
    B5,1: "A) A circle-shaped tool",
    B5,2: "C) A type of dance",
    B5,3: "D) A kind of knot",
    B6,1: "B) How to Make Lunch",
    B6,2: "C) Hello To My Land",
    B6,3: "D) High Tech Movie List",
    B7,1: "B) Creates cookies for websites",
    B7,2: "C) Calculates math problems",
    B7,3: "D) Stores passwords securely",
    B8,1: "A) Scratchy",
    B8,2: "B) Scratchy Code",
    B8,3: "D) Scratch and Sniff",
    B9,1: "B) Bananas",
    B9,2: "C) Clouds",
    B9,3: "D) Rockets",
    B10,1: "A) An insect",
    B10,2: "C) A feature of the program",
    B10,3: "D) A type of food"
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
    // Display correct answer
    questionContainer.innerHTML += `<button class="option">${correctAnswers[randomQuestion.correct_answer]}</button>`;
    // Display incorrect answers
    randomQuestion.incorrect_answers.forEach(answer => {
        questionContainer.innerHTML += `<button class="option">${incorrectAnswers[answer]}</button>`;
    });
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
    
    // Check if the selected answer is correct
    if (selectedOption === correctAnswers[currentQuestion.correct_answer]) {
        // Display custom correct message
        displayMessage(currentQuestion.custom_feedback.correct, "green");
    } else {
        // Display custom incorrect message
        displayMessage(currentQuestion.custom_feedback.incorrect, "red");
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
