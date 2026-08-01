const REEL_STRIPS=[


[
"🍋",
"🍒",
"🍊",
"🍉",
"🍍",
"⭐",
"WILDx2",
"🍋",
"SCATTER"
],


[
"🍊",
"🍋",
"💎",
"🍒",
"🍉",
"WILDx3",
"🍍"
],


[
"🍒",
"🍊",
"⭐",
"SCATTER",
"🍋",
"WILDx2"
],


[
"🍍",
"🍉",
"🍊",
"💎",
"WILDx3"
],


[
"🍋",
"🍒",
"⭐",
"SCATTER",
"🍉"

]


];



function spinReels(){


let result=[];


for(let row=0;row<GAME_CONFIG.rows;row++){


result[row]=[];


for(let reel=0;reel<GAME_CONFIG.reels;reel++){


let strip=REEL_STRIPS[reel];


let symbol=
strip[
Math.floor(
Math.random()*strip.length
)
];


result[row][reel]=symbol;


}


}



return result;

}
