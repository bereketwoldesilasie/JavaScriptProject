let count=0;

let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
function increment(){
count=count+1;
countEl.innerText=count;
}

function save(){
    let holder=count+" - "
    saveEl.textContent+=holder;
    countEl.innerText=0;
    count=0;
}

 

 