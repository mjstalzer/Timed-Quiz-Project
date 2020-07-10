// questions that the user will loop through \\
var questions = [
    {
        question : "What is the capital of Georgia?",
        choiceA : "Atlanta",
        choiceB : "Macon",
        choiceC : "Buckhead",
        choiceD : "Savannah",
        correct : "A"
    },{
        question : "Where was pizza invented?",
        choiceA : "Rome",
        choiceB : "Vennice",
        choiceC : "Naples",
        choiceD : "Pompei",
        correct : "C"
    },{
        question : "Who is the GOAT?",
        choiceA : "Jebron Lames",
        choiceB : "Magic Johnson",
        choiceC : "Kareem",
        choiceD : "MJ",
        correct : "D"
    },{
        question : "Who is the best sports commentator?",
        choiceA : "Mike Breene",
        choiceB : "Mark Jackson",
        choiceC : "Jeff Van Gundy",
        choiceD : "All of the above",
        correct : "D"
    },{
        question : "What is the best ride at Disney World?",
        choiceA : "Rock n' Roll",
        choiceB : "Avatar",
        choiceC : "Mt. Everest",
        choiceD : "Space Mountain",
        correct : "B"
    },{
        question : "Who was the first president of the US?",
        choiceA : "GW",
        choiceB : "TJ",
        choiceC : "LBJ",
        choiceD : "JFK",
        correct : "A"
    },{
        question : "Which is the best movie?",
        choiceA : "Joker",
        choiceB : "Infiniy War",
        choiceC : "End Game",
        choiceD : "The Dark Knight",
        correct : "D"
    },{
        question : "What is the best Star Wars movie (not an opinion)?",
        choiceA : "A New Hope",
        choiceB : "The Empire Strikes Back",
        choiceC : "Revenge of the Sith",
        choiceD : "Solo",
        correct : "B"
    },
];

// some global variables from html page \\
var startButton = document.querySelector("button");
var quiz = document.getElementById("quiz");
var score = document.getElementById("score")
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var submitForm = document.getElementById("submitForm");
var correct = document.getElementById("correct");
// variable for the time and score \\ 
var timeleft = 15;

// these two variables are used to allow the transition from one question to the next \\
var lastQuestion = questions.length - 1;
var currentQuestion = 0;

// this presents all the elements of the questions to the user \\ 
function newQuestion(){
    var q = questions[currentQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    }

// the event listener here starts the interactive quiz \\
startButton.addEventListener("click" , startQuiz);

// starts quiz \\
function startQuiz(){
    
    start.style.display = "none";
      
    quiz.style.display = "block";
    
    setInterval(function(timer){
        if(timeleft < 0){
            console.log(setInterval)
          clearInterval(timer);
        }
        else if (timeleft === 0) {
              quiz.style.display = "none";
    
              location.replace("form.html")
              finalScore.innerHTML = "Your final score is: " + timeLeft
    
        }
        score.textContent = "Time: " + timeleft;
        timeleft --;
      }, 1000);
    
    checkAnswer();

    nextQuestion();
}

// this function compares the user click to the correct answer \\ 
function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
            // correct.innerHTML = "correct!"
            nextQuestion();
            // setTimeout();
    }
    if (!answer){
            correct.innerHTML = ""
    } 
    else{
        // correct.innerHTML = "wrong!"
        timeleft - 5 ;
        nextQuestion();
        // setTimeout();
    }
}

// this function allows the transition from one question to the next, until completion \\
function nextQuestion(){
    if (currentQuestion < lastQuestion){
        currentQuestion++;
        newQuestion();
    }
    else {
        location.replace("form.html")
    }
}

// this function removes the correct or wrong response after one second \\
// setTimeout(function(){
//     correct.remove();
//   }, 1000);

var finalScore = document.getElementById("finalScore");
var submitButton = document.getElementById("submitButton");
var finalScore = document.getElementById("finalScore");

var nameInput = document.getElementById("inlineFormInput");
var nameForm = document.getElementById("submitForm");
var nameList = document.getElementById("nameList");

var initials = []
var highscores = []


init();

function renderScores() {
    nameList.innerHTML = ""

    for (var i = 0; i < initials.length; i++) {
    var name = initials[i]   
    var li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("data-index", i);
    nameList.appendChild(li);

    }
}

function init() {
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
  
    if (storedInitials !== null) {
      initials = storedInitials;
    }

    renderScores();
  }
 
function storeInitials() {
    localStorage.setItem("initals" , JSON.stringify(initials))
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initialsText = nameInput.value.trim();
  
    if (initialsText === "") {
      return;
    }
      initials.push(initialsText);
      nameInput.value = "";

      storeInitials();
      renderScores();
    });
