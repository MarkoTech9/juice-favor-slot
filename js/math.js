function evaluateBoard(board, bet){

    let totalWin = 0;

    let multiplier = 1;


    board.forEach(row => {

        let first = row[0];

        let count = 1;


        for(let i = 1; i < row.length; i++){

            if(row[i] === first || row[i].includes("WILD")){
                count++;
            }

        }


        if(count >= 3){

            totalWin += bet * count;

        }


    });



    // Juice Favor random multiplier
    let juiceRoll = Math.random();


    if(juiceRoll < 0.01){

        multiplier = 10;

    }
    else if(juiceRoll < 0.04){

        multiplier = 5;

    }
    else if(juiceRoll < 0.12){

        multiplier = 3;

    }
    else if(juiceRoll < 0.25){

        multiplier = 2;

    }



    return {

        amount:
        totalWin * multiplier,

        multiplier

    };

}




function countScatters(board){

    let count = 0;


    board.flat().forEach(symbol=>{

        if(symbol==="SCATTER")
            count++;

    });


    return count;

}
