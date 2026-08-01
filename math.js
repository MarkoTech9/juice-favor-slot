const reelStrips = [

[
"🍋","🍒","🍊","🍉",
"🍍","⭐","🍋","WILD",
"🍒","🍊"
],

[
"🍊","🍉","🍋",
"💎","🍒","⭐",
"WILDx2","🍍"
],

[
"🍒","🍋","🍊",
"🍉","⭐",
"WILD",
"SCATTER"
],

[
"🍍","🍊","🍋",
"💎","🍒",
"WILDx3"
],

[
"🍉","🍒","🍊",
"🍋","⭐",
"SCATTER"
]

];



function spinReels(){

let grid=[];


for(let row=0;row<4;row++){

grid[row]=[];

for(let col=0;col<5;col++){


let strip=reelStrips[col];


let index=Math.floor(
Math.random()*strip.length
);


grid[row][col]=strip[index];


}

}


return grid;

}
