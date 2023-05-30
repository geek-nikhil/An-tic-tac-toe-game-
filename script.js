console.log("welcome to tic tac toe")
let turn ="X"

const changeturn=()=>{
    return turn==="X"?"0":"X" 
}

const checkwin=()=>{

}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=document.querryselector('.boxtext');
    boxtext.addEventlistener('click',(e)=>){
        if(element.innerText===''){
            e.innerText=turn;
            changeturn();
            audioTurn.play();
            checkwin();
          document.getElementsByClassName
        }
    }
})