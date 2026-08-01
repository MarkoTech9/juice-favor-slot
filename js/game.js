let credits =
GAME_CONFIG.startingCredits;


let bet =
GAME_CONFIG.defaultBet;



const spinButton =
document.getElementById("spin");



spinButton.onclick = spin;




function spin(){


    if(credits < bet){

        showMessage("Not enough credits");

        return;

    }



    let free =
    bonusState.freeSpins>0;



    if(!free){

        credits -= bet;

    }



    let board =
    spinReels();



    renderBoard(board);



    let result =
    evaluateBoard(board,bet);



    let win =
    result.amount;



    win =
    applyBonusMultiplier(win);



    credits += win;



    updateCredits(credits);



    if(result.multiplier>1){

        showMessage(
        "🍊 JUICE x"
        +result.multiplier
        +" WIN "
        +win
        );

    }

    else if(win>0){

        showMessage(
        "WIN "
        +win
        );

    }

    else{

        showMessage(
        "No win"
        );

    }



    if(checkBonus(board)){

        showMessage(
        "🎁 FREE SPINS ACTIVATED!"
        );

    }


}
