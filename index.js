let quizData = [
    {
        question:"Which framework is related to JS",
        a:".net",
        b:"flask",
        c:"React",
        d:"Django",
        correct:"c"
    }
    ,{
        question:"Which is not a programming language",
        a:"HTML",
        b:"python",
        c:"java",
        d:"JS",
        correct:"a"
    },{
        question:"Which is not a framework",
        a:"react",
        b:"javascript",
        c:"angular",
        d:"Django",
        correct:"b"
    },{
        question:"CSS stands for",
        a:"Cascading style state",
        b:"cascading style sheet",
        c:"Cascading sheet of style",
        d:"None",
        correct:"b"
    }
];
let quiz= document.getElementById('quiz');
let answer = document.querySelectorAll('.answer');

let question = document.getElementById('question');
let optionA = document.getElementById('a_value');
let optionB = document.getElementById('b_value');
let optionC = document.getElementById('c_value');
let optionD = document.getElementById('d_value');
let submitBtn = document.getElementById('submit');

let currentQuiz = 0,quizScore=0;

loadQuiz();
function loadQuiz()
{
    deselect();
  
        
        question.innerHTML= quizData[currentQuiz].question;
        optionA.innerHTML= quizData[currentQuiz].a;
        optionB.innerHTML = quizData[currentQuiz].b;
        optionC.innerHTML = quizData[currentQuiz].c;
        optionD.innerHTML = quizData[currentQuiz].d;
      
    
  

}

function deselect(){

    answer.forEach((radio)=>{

        radio.checked = false;
    })
}

submitBtn.addEventListener('click',()=>{
    let chosenOption ;
    answer.forEach((answer)=>{
        if(answer.checked){

            chosenOption = answer; 
        }
    })
    
    if(chosenOption.id== quizData[currentQuiz].correct)
    {
        quizScore++;
    }
    currentQuiz++;
    if(currentQuiz>=quizData.length)
    {
       let Score= document.getElementById('quizDiv');
       
       Score.innerHTML=`<h1>Your Score: ${quizScore}</h1>` ;
       Score.style.textAlign='center';
    }
    else{
        loadQuiz();
    }
   
})