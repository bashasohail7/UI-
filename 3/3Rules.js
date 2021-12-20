var i=0;
document.getElementById("check").addEventListener("click",()=>{
    i++
    if(i%2){
    document.getElementById("continue").disabled=false
    document.getElementById("continue").style.cursor="pointer"
    }
    else{
    document.getElementById("continue").disabled=true
    document.getElementById("continue").style.cursor="auto"

    }

})