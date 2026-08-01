function renderBoard(board){


    const slot =
    document.getElementById("slot");


    slot.innerHTML="";


    board.forEach(row=>{


        row.forEach(symbol=>{


            let cell =
            document.createElement("div");


            cell.className="symbol";


            cell.innerHTML=symbol;


            slot.appendChild(cell);


        });


    });


}





function showMessage(text){


    document.getElementById("message")
    .innerHTML=text;


}





function updateCredits(value){


    document.getElementById("credits")
    .innerHTML=value;


}
