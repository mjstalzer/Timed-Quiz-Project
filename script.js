var questions = [
    {
        question : "What is the capital of Georgia?",
        choiceA : "Atlanta",
        choiceB : "Macon",
        choiceC : "Buckhead",
        choiceD : "Savannah",
        correct : "A"
    },{
        question : "Where was pizza invented",
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


var startButton = document.querySelector("button")
var quiz = document.getElementById("quiz");
var score = document.getElementById("score")
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var submitForm = document.getElementById("submitForm")
var correct = document.getElementById("correct")
var timeleft = 30;

var lastQuestion = questions.length - 1;
var currentQuestion = 0;

// render a question
function newQuestion(){
    var q = questions[currentQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

startButton.addEventListener("click" , startQuiz);

// start quiz
function startQuiz(){
    
    start.style.display = "none";
      
    quiz.style.display = "block";
    
setInterval(function(timer){
      if(timeleft < 0){
        clearInterval(timer);
      }
      else if (timeleft === 0) {
            quiz.style.display = "none";

            submitForm.style.display = "block";

      }
      score.textContent = "Time: " + timeleft;
      timeleft --;
    }, 1000);

    newQuestion();

    checkAnswer();

}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
            correct.innerHTML = "correct!"
            currentQuestion++;
            newQuestion();
            setTimeout();
    }
    else if (!answer){
            correct.innerHTML = ""
    } 
    else {
        correct.innerHTML = "wrong!"
        timeleft - 3 ;
        currentQuestion++;
        newQuestion();
        setTimeout();
    }
}



setTimeout(function(){
    correct.remove();
  }, 5000);