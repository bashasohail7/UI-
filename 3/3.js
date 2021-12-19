const quizDB=[
    {Ques:" What is the full form of HTML ?",
      a:"Hello to  my land",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans1",
      choose:"",
      status:""},

      {Ques:"What is the full form of CSS ?",
      a:"Hello to  my land",
      b:"Cascading Style Sheet",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans2",
      choose:"",
      status:""},

      {Ques:" What is the full form of HTTP ?",
      a:"HyperText Transfer Protocol",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans1",
      choose:"",
      status:""},

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
var tickStatus=[];
var checkedStatus=[];
var correctStatus=[];
var count=0
const question=document.querySelector(".question");
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const answers=document.querySelectorAll('.answer');
const submit=document.querySelector("#submit");
const showscore=document.querySelector("#showscore");
let questionCount=0;
var styledEle="";
var id=""
var index=0;
let score=0;
const loadQuestion=()=>{
    
   question.innerText= quizDB[questionCount].Ques;
   option1.innerText=quizDB[questionCount].a;
   option2.innerText=quizDB[questionCount].b;
   option3.innerText=quizDB[questionCount].c;
   option4.innerText=quizDB[questionCount].d;
}
function getQA(){
// alert(ansStatus)
}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id//!vhbvhbk
   }
    })
    return answer
}

//==============================================================================================================


const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){curAnsElem.checked=false}
    })
}
function removePrevEffect(){
    document.getElementById(`icon0`).parentElement.style.backgroundColor="white"  
    document.getElementById(`icon0`).remove()
}
submit.addEventListener('click',()=>{

    correctStatus.push(quizDB[questionCount].ans)
    localStorage.correct=correctStatus

    const checkedAnswer=getCheckAnswer();
    tickStatus.push(checkedAnswer)
    localStorage.tick=tickStatus
  if(checkedAnswer===quizDB[questionCount].ans){
      score+=4;
    checkedStatus.push(true)

    // alert(checkedStatus)
      

    //   ansStatus.push(true);
  }
  else if(checkedAnswer==undefined) {score+=0
    checkedStatus.push("sohail")
} 
  else {score-=1
    checkedStatus.push(false)

}
  questionCount++;
  deselectAll();
  localStorage.check=checkedStatus

  if(questionCount<quizDB.length){

    //   alert(oldData[0][0])
      if(questionCount+1<quizDB.length){
          submit.innerText='Next'
      }else{
// window.location.href="http://127.0.0.1:5500/3/3-ans.html"
          submit.innerHTML='<a href="3-ans.html">Submit<a/>'
      }
 
      loadQuestion();
     
  }
    
  else{
    //   document.getElementById("submit").innerHTML=`<button><a href="2.html">hkk</a></button>`
    //   window.location.href("file:///D:/Web%20Development/wissen/js/Ui2/2.html")
    //   showscore.innerHTML=`<h1> You Scored ${score}</h1>
    //                        <button class="btn" onclick="location.reload()">Play Again</button>`;
    //                showscore.classList.remove("scorearea")        
  }
})


