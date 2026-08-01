const symbols = [
"🍊",
"🍋",
"🍉",
"🍒",
"🍍",
"⭐",
"💎",
"WILD",
"SCATTER"
];


const spin = document.getElementById("spin");
const message = document.getElementById("message");
let credits=1000;
let bet=20;

let freeSpins=0;
let multiplier=1;


const slot=document.getElementById("slot");


spin.onclick=function(){

playSpin();

};



function playSpin(){


if(freeSpins<=0){

if(credits<bet)
return;


credits-=bet;

}


animate();


setTimeout(()=>{


let grid=spinReels();


display(grid);


let result=evaluate(grid);


credits+=result;


document.getElementById("credits")
.innerHTML=credits;


if(result>0){

showWin(result);

}



},800);



}




function animate(){


slot.innerHTML="";


for(let i=0;i<20;i++){

let div=document.createElement("div");

div.className="symbol";

div.innerHTML=
symbols[
Math.floor(Math.random()*symbols.length)
];


slot.appendChild(div);

}


}





function display(grid){


slot.innerHTML="";


grid.forEach(row=>{


row.forEach(symbol=>{


let div=document.createElement("div");

div.className="symbol";

div.innerHTML=symbol;


slot.appendChild(div);


});


});


}




function evaluate(grid){


let total=0;


grid.forEach(row=>{


let first=row[0];

let count=1;


for(let i=1;i<5;i++){


if(row[i]==first ||
row[i].includes("WILD"))

count++;


}



if(count>=3){

total+=count*bet;

}


});



let wildMultiplier=1;



grid.flat().forEach(s=>{


if(s.includes("x2"))
wildMultiplier*=2;


if(s.includes("x3"))
wildMultiplier*=3;


});



total*=wildMultiplier;



if(total>500){

message.innerHTML=
"🔥 EPIC JUICE WIN 🔥";


}

else if(total>100){

message.innerHTML=
"💥 BIG JUICE WIN 💥";


}



return total;

}




function showWin(amount){


message.innerHTML=
"🍊 WIN +"+amount;


}
