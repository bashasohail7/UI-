const quizDB=[
    {Ques:" What is the full form of HTML ?",
      a:"Hello to  my land",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans3"},

      {Ques:"What is the full form of CSS ?",
      a:"Hello to  my land",
      b:"Cascading Style Sheet",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans2"},

      {Ques:" What is the full form of HTTP ?",
      a:"HyperText Transfer Protocol",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans1"},

      {Ques:" What is the full form of JS ?",
      a:"Hello to  my land",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"Java Script",
      ans:"ans4"},

      {Ques:" What is the full form of AJAX ?",
      a:"Hello to  my land",
      b:"Hey Text MarkUp Language",
      c:"Asynchrnous Javascipt and XML",
      d:"HpyerText Makeup Language",
      ans:"ans3"},
]
var count=0
const question=document.querySelector(".question");
const option1=document.querySelector('#ans1');
const option2=document.querySelector('#ans2');
const option3=document.querySelector('#ans3');
const option4=document.querySelector('#ans4');
const answers=document.querySelectorAll('.answer');
const submit=document.querySelector("#submit");
const showscore=document.querySelector("#showscore");
var questionCount=0;
var styledEle="";
var id=""
var index=0;
var chosen;
var ans;
    chosen=localStorage.getItem("tick")
    ans=localStorage.getItem("correct")
    checkedStatus=localStorage.getItem("check")
    var choseArr=chosen.split(",")
    var ansArr=ans.split(",")
    var checkStatusArr=checkedStatus.split(",")
    var choseId;
     
    var prevchoseId= document.getElementById(choseArr[questionCount-1])
    
  

var score=0;
var rightQ=0;
var wrongQ=0;
var unattemptQ=0
function calcula(){
    for(let i=0;i<checkStatusArr.length;i++){
        if(checkStatusArr[i]==="true"){
           score+=4
           rightQ++
          }
        if(checkStatusArr[i]==="false"){
          score--
          wrongQ++
        }
        if(checkStatusArr[i]==="sohail"){
          score+=0
          unattemptQ++
        }
        document.getElementById("rightAttempt").innerText=rightQ
        document.getElementById("wrongAttempt").innerText=wrongQ
        document.getElementById("unAttempt").innerText=unattemptQ
    }
}
document.body.addEventListener("load",calcula())
const loadQuestion=()=>{ 
    document.getElementById("finalScore").innerText="You Scored : "+score
    if(questionCount<1){
        document.getElementById("prev").disabled=true
        document.getElementById("prev").style.cursor="auto"

    }
    if(questionCount>0){

        document.getElementById("prev").style.cursor="pointer"

        document.getElementById("prev").disabled=false
    }
     choseId= document.getElementById(choseArr[questionCount])

    if(questionCount>3){
      document.getElementById("submit").disabled=true
      document.getElementById("submit").style.cursor="auto"

    }
    if(questionCount<4){
      document.getElementById("submit").disabled=false
      document.getElementById("submit").style.cursor="pointer"

    }
    if(choseId){
if(choseArr[questionCount]==ansArr[questionCount]){
    document.getElementById(choseArr[questionCount]).parentElement.style.background="#4ceb28"
    document.getElementById(choseArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i  class="fas fa-check"></i> ')
}
else{
    document.getElementById(choseArr[questionCount]).parentElement.style.background="#ff2c33"
    document.getElementById(choseArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i class="fas fa-times"></i> ')

    document.getElementById(ansArr[questionCount]).parentElement.style.background="#4ceb28"
    document.getElementById(ansArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i class="fas fa-check"></i> ')


}}
if(choseId==undefined){
    document.getElementById(ansArr[questionCount]).parentElement.style.background="#3add14"
    
}
   option1.innerText=quizDB[questionCount].a;
   option2.innerText=quizDB[questionCount].b;
   option3.innerText=quizDB[questionCount].c;
   option4.innerText=quizDB[questionCount].d;
   
}
loadQuestion();


//==============================================================================================================




document.getElementById("prev").addEventListener('click',()=>{
    if(questionCount>0){
    questionCount--
    var id=questionCount+1;
    document.getElementById(ansArr[id]).parentElement.style.backgroundColor="white"

  document.querySelectorAll("i").forEach(x=>x.remove())
  if(choseId){
  document.getElementById(choseArr[id]).parentElement.style.backgroundColor="white"}
  if(choseId==undefined){
  }
  loadQuestion()}

})
submit.addEventListener('click',()=>{
  questionCount++
  var id=questionCount-1;
  document.querySelectorAll("i").forEach(x=>x.remove())
  if(choseId){
  document.getElementById(choseArr[id]).parentElement.style.backgroundColor="white"
  document.getElementById(ansArr[id]).parentElement.style.backgroundColor="white"
}
  if(choseId==undefined){
  document.getElementById(ansArr[id]).parentElement.style.backgroundColor="white"
      
}
  loadQuestion()
})

