var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question(" What's your name? ");

console.log("welcome " + userName + "!" + "" + " You have to answer the questions about famous of Tamilnadu.");

function quiz(question , answer){
  var userAnswer = readlineSync.question(question)

  if(userAnswer === answer){
    console.log("right")
    score = score + 1;
  }
  else{
    console.log("wrong")
    score = score - 1;
  }
  console.log("Now,your score is: " , score)
  
  console.log("----------------------")
}


var questions = [{

  question: "What is the famous of Madurai? ",
  answer: "Jasmine",
  }, {
  
  question: "The famous of Tirunelveli is? ",
  answer: "Halwa"
  }, {
  
  question: "What is the famous of Kanchipuram? ",
  answer: "Silk"
  }, {
  
  question: "The famous of Selam is? ",
  answer: "Mango"
  }, {
  
  question: "What is the famous of Cuddalore? ", 
  answer: "Cashew"
  }, {
  
  question: "Hosur is famous for? ",
  answer: "Rose"
  }, {
  
  question: "What is the famous of Tanjavur? ",
  answer: "Thailaiyatti bommai"
  }, {
  
  question: "What are the famous snacks in Tamilnadu? ",
  answer: "Murukku & Adirasam"
  }, {
  
  question: "Ooty is famous for? ",
  answer: "Tea"
  }, {
  
  question: "Kanyakumari is famous for? ",
  answer: "Sunrise"
}];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question , currentQuestion.answer);
}

console.log("Yay!! Your score is: ",score);

console.log("Thankyou for Playing!!")