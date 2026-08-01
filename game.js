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


let credits = 1000;
let bet = 20;


const reels = 5;
const rows = 4;


document.getElementById("spin")
.onclick = spin;



function changeBet(amount){

    bet += amount;

    if(bet < 10)
        bet = 10;


    document.getElementById("bet")
    .innerHTML = bet;

}



function randomSymbol(){

    return symbols[
        Math.floor(
            Math.random()*symbols.length
        )
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




function checkWins(grid){


let win=0;

let multiplier=1;



for(let r=0;r<rows;r++){


let line=grid[r];


let first=line[0];


let count=1;


for(let i=1;i<reels;i++){

if(line[i]===first)
count++;

}



if(count>=3){

let value=count*5;


win+=value;

}



}



let juice=Math.random();


if(juice<0.15){

multiplier=2;

}

if(juice<0.05){

multiplier=5;

}



return win*multiplier;


}




function spin(){


if(credits<bet){

alert("Not enough credits");

return;

}



credits-=bet;


let grid=createGrid();


display(grid);


let win=checkWins(grid);



credits+=win;



document.getElementById("credits")
.innerHTML=credits;



if(win>0){


document.getElementById("message")
.innerHTML=
"🍊 JUICE WIN! +" 
+ win;


}

else{


document.getElementById("message")
.innerHTML=
"Try again!";


}



}
