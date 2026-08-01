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

let freeSpins = 0;
let freeMultiplier = 1;


const slot = document.getElementById("slot");
const message = document.getElementById("message");
const creditsDisplay = document.getElementById("credits");
const betDisplay = document.getElementById("bet");
const spinButton = document.getElementById("spin");


window.changeBet = function(amount){

    bet += amount;

    if(bet < 10)
        bet = 10;

    if(bet > 500)
        bet = 500;

    betDisplay.innerHTML = bet;

};



spinButton.onclick = function(){

    spin();

};



function randomSymbol(){

    let r = Math.random();

    if(r < 0.05)
        return "SCATTER";

    if(r < 0.12)
        return "WILD";

    return symbols[
        Math.floor(Math.random()*7)
    ];

}



function spin(){

    if(credits < bet){

        message.innerHTML="Not enough credits";
        return;

    }


    credits -= bet;


    let grid=[];


    for(let row=0; row<4; row++){

        grid[row]=[];

        for(let col=0; col<5; col++){

            grid[row][col]=randomSymbol();

        }

    }


    display(grid);


    let win = calculateWin(grid);


    credits += win;


    creditsDisplay.innerHTML=credits;


    if(win){

        message.innerHTML=
        "🍊 JUICE WIN +"+win;

    }else{

        message.innerHTML=
        "No win";

    }



}



function display(grid){

    slot.innerHTML="";


    grid.forEach(row=>{

        row.forEach(symbol=>{


            let box=document.createElement("div");

            box.className="symbol";

            box.innerHTML=symbol;

            slot.appendChild(box);


        });

    });


}



function calculateWin(grid){

    let win=0;


    grid.forEach(row=>{


        let first=row[0];

        let count=1;


        for(let i=1;i<5;i++){


            if(row[i]===first ||
               row[i]==="WILD"){

                count++;

            }


        }


        if(count>=3){

            win += count * bet;

        }


    });



    let multiplier=1;


    let roll=Math.random();


    if(roll < .10)
        multiplier=2;


    if(roll < .03)
        multiplier=5;



    if(multiplier>1){

        message.innerHTML=
        "🍊 JUICE x"+multiplier;

    }


    return win*multiplier;

}
