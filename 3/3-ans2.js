const quizDB=[
    {Ques:" What is the full form of HTML ?",
      a:"Hello to  my land",
      b:"Hey Text MarkUp Language",
      c:"HyperText Markup Language",
      d:"HpyerText Makeup Language",
      ans:"ans1"},

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
let score=0;
var chosen,ans,checkedStatus;
    chosen=localStorage.getItem("tick")
    ans=localStorage.getItem("correct")
    checkedStatus=localStorage.getItem("check")
    var choseArr=chosen.split(",")
    var ansArr=ans.split(",")
    // var checkStatusArr=checkedStatus.split(",")
    // var choseId= document.getElementById(choseArr[questionCount])
    var prevchoseId= document.getElementById(choseArr[questionCount-1])
function getQA(){
    // alert(11002)
 
    
    // alert(y)
    // alert(z)
   
//    alert(z)
    // alert(y)
    // console.log(z)
    // alert(typeof x)
   
    // alert(typeof a)
    // console.log((a[0]))
    // console.log((a[1]))
    // console.log((a[2]))
    // console.log((a[3]))
    // console.log((a[4]))
    console.log("ticked"+chosen)
    console.log("ticked array"+choseArr)
    console.log(ans)
console.log(console.log(chosen[0]))
console.log(console.log(chosen[1]))
console.log(console.log(chosen[2]))
console.log(console.log(chosen[3]))
console.log(console.log(chosen[4]))
console.log(console.log(chosen[5]))
console.log("checked")

    // alert(x)

    }

const loadQuestion=()=>{
    console.log(choseId)
    if(questionCount>3){
      document.getElementById("submit").disabled=true
    }
    if(questionCount<4){
      document.getElementById("submit").disabled=false
    }
    if(choseId){
        console.log(choseId)
if(choseArr[questionCount]==ansArr[questionCount]){
    // alert(choseArr[questionCount])
  
    document.getElementById(choseArr[questionCount]).parentElement.style.background="green"
    document.getElementById(choseArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i class="fas fa-check"></i> ')
}
else{
    document.getElementById(choseArr[questionCount]).parentElement.style.background="red"
    document.getElementById(choseArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i class="fas fa-times"></i> ')

    document.getElementById(ansArr[questionCount]).parentElement.style.background="green"
    document.getElementById(ansArr[questionCount]).parentElement.insertAdjacentHTML("afterbegin",'<i class="fas fa-check"></i> ')


}}
if(choseId==undefined){
    document.getElementById(ansArr[questionCount]).parentElement.style.background="green"
    
}
   question.innerText= quizDB[questionCount].Ques;
   option1.innerText=quizDB[questionCount].a;
   option2.innerText=quizDB[questionCount].b;
   option3.innerText=quizDB[questionCount].c;
   option4.innerText=quizDB[questionCount].d;
   
//   alert(x[questionCount])
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

document.getElementById("prev").addEventListener('click',()=>{
    if(questionCount>0){
    questionCount--

    var id=questionCount+1;
  document.querySelectorAll("i").forEach(x=>x.remove())
  if(choseId){
    //   alert(choseArr[id])
    //   alert(prevchoseId)
  document.getElementById(choseArr[id]).parentElement.style.backgroundColor="white"
  document.getElementById(ansArr[id]).parentElement.style.backgroundColor="white"}
  if(choseId==undefined){

  }
  loadQuestion()}
  if(questionCount==0){
      document.getElementById("prev").disabled=true
      document.getElementById("prev").style.cursor="not-allowed"
  }

})
submit.addEventListener('click',()=>{
    // questionCount++
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
//   deselectAll();
  


})

