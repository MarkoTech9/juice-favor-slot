let bonusState={

    freeSpins:0,

    multiplier:1

};



function checkBonus(board){


    let scatters=countScatters(board);


    if(scatters>=3){

        bonusState.freeSpins =
        GAME_CONFIG.freeSpinCount;


        bonusState.multiplier=1;


        return true;

    }


    return false;

}




function applyBonusMultiplier(win){


    if(bonusState.freeSpins>0){

        win *= bonusState.multiplier;


        bonusState.multiplier++;


        bonusState.freeSpins--;

    }


    return win;

}
