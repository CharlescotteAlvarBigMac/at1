// Define questions array with modified incorrect answers keys
const questions = [
    {
        question: "What is a computer program?",
        correct_answer: "A1",
        incorrect_answers: ["B1_1", "B1_2", "B1_3"],
        answered: false,
        options: {
            A1: "A set of instructions that tells the computer what to do",
            B1_1: "A type of video game",
            B1_2: "A special kind of food",
            B1_3: "A book about computers"
        },
        custom_feedback: {
            A1: "You got it right! A computer program is indeed a set of instructions that tells the computer what to do.",
            B1_1: "Oops! That's not quite right. A computer program is a set of instructions that tells the computer what to do.",
            B1_2: "Oops! That's not quite right. A computer program is a set of instructions that tells the computer what to do.",
            B1_3: "Oops! That's not quite right. A computer program is a set of instructions that tells the computer what to do."
        }
    },
    {
        question: "What does a programmer do?",
        correct_answer: "A2",
        incorrect_answers: ["B2_1", "B2_2", "B2_3"],
        answered: false,
        options: {
            A2: "Writes code to make software and apps",
            B2_1: "Fixes broken computers",
            B2_2: "Cooks delicious meals",
            B2_3: "Drives cars"
        },
        custom_feedback: {
            A2: "Correct! Programmers write code to make software and apps.",
            B2_1: "Incorrect. A programmer writes code to make software and apps.",
            B2_2: "Incorrect. A programmer writes code to make software and apps.",
            B2_3: "Incorrect. A programmer writes code to make software and apps."
        }
    },
    {
        question: "What is the symbol used to end a line of code in many programming languages?",
        correct_answer: "A3",
        incorrect_answers: ["B3_1", "B3_2", "B3_3"],
        answered: false,
        options: {
            A3: ";",
            B3_1: "$",
            B3_2: "%",
            B3_3: ":"
        },
        custom_feedback: {
            A3: "Right! The symbol used to end a line of code in many programming languages is ; (semicolon).",
            B3_1: "Incorrect. The correct symbol used to end a line of code in many programming languages is ; (semicolon).",
            B3_2: "Incorrect. The correct symbol used to end a line of code in many programming languages is ; (semicolon).",
            B3_3: "Incorrect. The correct symbol used to end a line of code in many programming languages is ; (semicolon)."
        }
    },
    {
        question: "Which of these is NOT a programming language?",
        correct_answer: "A4",
        incorrect_answers: ["B4_1", "B4_2", "B4_3"],
        answered: false,
        options: {
            A4: "French",
            B4_1: "Python",
            B4_2: "Scratch",
            B4_3: "JavaScript"
        },
        custom_feedback: {
            A4: "Correct! French is not a programming language.",
            B4_1: "That's incorrect. French is not a programming language.",
            B4_2: "That's incorrect. French is not a programming language.",
            B4_3: "That's incorrect. French is not a programming language."
        }
    },
    {
        question: "What is a loop in programming?",
        correct_answer: "A5",
        incorrect_answers: ["B5_1", "B5_2", "B5_3"],
        answered: false,
        options: {
            A5: "A way to repeat a set of instructions",
            B5_1: "A circle-shaped tool",
            B5_2: "A type of dance",
            B5_3: "A kind of knot"
        },
        custom_feedback: {
            A5: "You're right! A loop in programming is a way to repeat a set of instructions.",
            B5_1: "Incorrect. A loop in programming is a way to repeat a set of instructions.",
            B5_2: "Incorrect. A loop in programming is a way to repeat a set of instructions.",
            B5_3: "Incorrect. A loop in programming is a way to repeat a set of instructions."
        }
    },
    {
        question: "What does HTML stand for?",
        correct_answer: "A6",
        incorrect_answers: ["B6_1", "B6_2", "B6_3"],
        answered: false,
        options: {
            A6: "Hyper Text Markup Language",
            B6_1: "How to Make Lunch",
            B6_2: "Hello To My Land",
            B6_3: "High Tech Movie List"
        },
        custom_feedback: {
            A6: "Correct! HTML stands for Hyper Text Markup Language.",
            B6_1: "That's incorrect. HTML stands for Hyper Text Markup Language.",
            B6_2: "That's incorrect. HTML stands for Hyper Text Markup Language.",
            B6_3: "That's incorrect. HTML stands for Hyper Text Markup Language."
        }
    },
    {
        question: "What does CSS do in web development?",
        correct_answer: "A7",
        incorrect_answers: ["B7_1", "B7_2", "B7_3"],
        answered: false,
        options: {
            A7: "Styles the appearance of web pages",
            B7_1: "Creates cookies for websites",
            B7_2: "Calculates math problems",
            B7_3: "Stores passwords securely"
        },
        custom_feedback: {
            A7: "Right! CSS styles the appearance of web pages.",
            B7_1: "That's incorrect. CSS styles the appearance of web pages.",
            B7_2: "That's incorrect. CSS styles the appearance of web pages.",
            B7_3: "That's incorrect. CSS styles the appearance of web pages."
        }
    },
    {
        question: "What is the name of the programming language used in the game 'Scratch'?",
        correct_answer: "A8",
        incorrect_answers: ["B8_1", "B8_2", "B8_3"],
        answered: false,
        options: {
            A8: "Scratch",
            B8_1: "Scratchy",
            B8_2: "Scratchy Code",
            B8_3: "Scratch and Sniff"
        },
        custom_feedback: {
            A8: "Correct! The programming language used in the game 'Scratch' is Scratch.",
            B8_1: "Incorrect. The programming language used in the game 'Scratch' is Scratch.",
            B8_2: "Incorrect. The programming language used in the game 'Scratch' is Scratch.",
            B8_3: "Incorrect. The programming language used in the game 'Scratch' is Scratch."
        }
    },
    {
        question: "Which of the following is used to store information in a computer program?",
        correct_answer: "A9",
        incorrect_answers: ["B9_1", "B9_2", "B9_3"],
        answered: false,
        options: {
            A9: "Variables",
            B9_1: "Bananas",
            B9_2: "Clouds",
            B9_3: "Rockets"
        },
        custom_feedback: {
            A9: "You got it! Variables are used to store information in a computer program.",
            B9_1: "That's not correct. Variables are used to store information in a computer program.",
            B9_2: "That's not correct. Variables are used to store information in a computer program.",
            B9_3: "That's not correct. Variables are used to store information in a computer program."
        }
    },
    {
        question: "What does a 'bug' mean in programming?",
        correct_answer: "A10",
        incorrect_answers: ["B10_1", "B10_2", "B10_3"],
        answered: false,
        options: {
            A10: "An error in the code",
            B10_1: "An insect",
            B10_2: "A feature of the program",
            B10_3: "A type of food"
        },
        custom_feedback: {
            A10: "You're correct! A 'bug' in programming refers to an error in the code.",
            B10_1: "Incorrect. A 'bug' in programming refers to an error in the code.",
            B10_2: "Incorrect. A 'bug' in programming refers to an error in the code.",
            B10_3: "Incorrect. A 'bug' in programming refers to an error in the code."
        }
    }
];


// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display a question
function displayQuestion() {
    // Get question container element
    const questionContainer = document.getElementById("questionContainer");
    // Clear previous content
    questionContainer.innerHTML = "";
    // Shuffle questions
    shuffleArray(questions);
    // Get the first unanswered question
    const currentQuestion = questions.find(question => !question.answered);
    // Check if there are unanswered questions
    if (!currentQuestion) {
        // If no unanswered questions, display a message indicating the end of the test
        questionContainer.innerHTML = "<p>End of the test.</p>";
        return;
    }
    // Display question
    questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    // Shuffle answer options
    const optionsArray = Object.entries(currentQuestion.options);
    shuffleArray(optionsArray);
    // Display answer options
    optionsArray.forEach(([key, value]) => {
        questionContainer.innerHTML += `<button class="option" data-answer="${key}">${value}</button>`;
    });
}

// Event listener for start test button
document.getElementById("startTestBtn").addEventListener("click", () => {
    // Start the test
    document.getElementById("mainScreen").style.display = "none";
    startTest();
});

// Function to start the test
function startTest() {
    // Display question
    displayQuestion();
}

// Event delegation for options
document.getElementById("questionContainer").addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
        // Handle answer submission
        handleAnswerSubmission(event.target.dataset.answer);
    }
});

// Function to handle user's answer submission
function handleAnswerSubmission(selectedOption) {
    // Get the current unanswered question object
    const currentQuestion = questions.find(question => !question.answered);
    // Display custom feedback
    const feedback = currentQuestion.custom_feedback[selectedOption];
    displayMessage(feedback, selectedOption === currentQuestion.correct_answer ? "green" : "red");
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

// Initial display of main screen
document.getElementById("mainScreen").style.display = "block";