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


const reels = 5;
const rows = 4;


let credits = 1000;
let bet = 20;

let freeSpins = 0;
let freeMultiplier = 1;

let juiceMeter = 0;



document.getElementById("spin")
.onclick = spin;



function changeBet(amount){

    if(freeSpins>0) return;

    bet += amount;

    if(bet < 10)
        bet = 10;


    document.getElementById("bet").innerHTML = bet;

}




function randomSymbol(){

    let chance=Math.random();


    // More rare scatters
    if(chance < .04)
        return "SCATTER";


    if(chance < .10)
        return "WILD";


    return symbols[
        Math.floor(
        Math.random()*7)
    ];

}




function createGrid(){

let grid=[];


for(let r=0;r<rows;r++){

grid[r]=[];

for(let c=0;c<reels;c++){

grid[r][c]=randomSymbol();

}

}


return grid;

}




function display(grid){

let slot=document.getElementById("slot");

slot.innerHTML="";


for(let r=0;r<rows;r++){

for(let c=0;c<reels;c++){


let div=document.createElement("div");

div.className="symbol";

div.innerHTML=grid[r][c];


slot.appendChild(div);


}

}

}




function countScatter(grid){

let count=0;


grid.flat().forEach(s=>{

if(s==="SCATTER")
count++;

});


return count;

}





function calculateWin(grid){


let win=0;


for(let r=0;r<rows;r++){


let row=grid[r];


let symbol=row[0];

let count=1;


for(let i=1;i<reels;i++){


if(row[i]===symbol ||
row[i]==="WILD")
count++;


}



if(count>=3){


win += count*5;


}

}



let juiceRoll=Math.random();



if(juiceRoll<0.10){

let juiceMultiplier=2;


if(juiceRoll<0.03)
juiceMultiplier=5;


win*=juiceMultiplier;


document.getElementById("message")
.innerHTML +=
"<br>🍊 JUICE x"+juiceMultiplier;

}



return win;

}





function activateBonus(grid){


let scatters=countScatter(grid);



if(scatters>=3){


freeSpins=10;


freeMultiplier=1;


document.getElementById("message")
.innerHTML =
"🎁 FREE SPINS ACTIVATED!";

}



}





function updateUI(){


document.getElementById("credits")
.innerHTML=credits;



}




function spin(){



if(freeSpins<=0){


if(credits<bet){

alert("Not enough credits");

return;

}


credits-=bet;


}



let grid=createGrid();


display(grid);



let win=calculateWin(grid);



activateBonus(grid);





if(freeSpins>0){


freeSpins--;


freeMultiplier++;


win*=freeMultiplier;



document.getElementById("message")
.innerHTML +=
"<br>🔥 FREE SPIN x"
+freeMultiplier;


}




credits+=win;



updateUI();




if(win>0){

document.getElementById("message")
.innerHTML =
"💰 WIN +"+win;

}

else{


juiceMeter++;


document.getElementById("message")
.innerHTML =
"💧 Juice Charge "
+juiceMeter+"/10";


}





if(juiceMeter>=10){


freeMultiplier+=2;


juiceMeter=0;


document.getElementById("message")
.innerHTML +=
"<br>⚡ JUICE BOOST READY x2";


}



}
