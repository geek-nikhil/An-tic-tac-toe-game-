    let c = "X"
    const a=["btns-a","btns-b","btns-c","btns-d","btns-e","btns-f","btns-g","btns-h","btns-i"]
  function on(t){
    if(document.getElementById(a[t]).innerHTML==""){  
    document.getElementById(a[t]).innerHTML=c;  
    if(c==="X"){
        c="O";
        }
    else{
    c="X";
    }
    }
    win()
    }
    function off(){
        for(let i=0;i<9;i++){
        document.getElementById(a[i]).innerHTML="";  
        toy.classList.toggle("new");
        toy1.innerHTML="";
            }
        }
     function win (){
        let count =0;
        for(let i=0;i<9;i++){
        if(i===1||i===4||i===7){
        if(document.getElementById(a[i-1]).innerHTML===document.getElementById(a[i+1]).innerHTML && document.getElementById(a[i-1]).innerHTML===document.getElementById(a[i]).innerHTML && document.getElementById(a[i]).innerHTML!==""){
        toy.classList.toggle("new");
        toy1.innerHTML = document.getElementById(a[i]).innerHTML + " is winner"
        }
         }
        if(i===3||i===4||i===5){
        if(document.getElementById(a[i-3]).innerHTML===document.getElementById(a[i+3]).innerHTML && document.getElementById(a[i-3]).innerHTML===document.getElementById(a[i]).innerHTML && document.getElementById(a[i]).innerHTML!=="" ){             toy.classList.toggle("new");
               toy1.innerHTML = document.getElementById(a[i]).innerHTML + " is winner"
            }
        }
        if(i===4){
        if(document.getElementById(a[i-4]).innerHTML===document.getElementById(a[i+4]).innerHTML && document.getElementById(a[i-4]).innerHTML===document.getElementById(a[i]).innerHTML && document.getElementById(a[i]).innerHTML!=="" || document.getElementById(a[i-2]).innerHTML===document.getElementById(a[i+2]).innerHTML && document.getElementById(a[i-2]).innerHTML===document.getElementById(a[i]).innerHTML && document.getElementById(a[i]).innerHTML!==""){
        toy.classList.toggle("new");
        toy1.innerHTML = document.getElementById(a[i]).innerHTML + " is winner"
           }
        }
       }
    }