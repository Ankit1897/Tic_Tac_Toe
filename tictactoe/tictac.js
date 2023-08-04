let cancel=document.getElementById('cancel');
let form=document.getElementById('edit-player');
let confirm=document.getElementById('confirm');
let containor=document.getElementById('containor');
const gamefield=[
    [0 , 0 , 0],
    [0 , 0 , 0],
    [0 , 0 , 0],
]
const player=[
{
    name:"",
    Symbol:'X'
},
{
    name:"",
    Symbol:'O'
}
];
let selectedplayer="";
let input=document.getElementById('playername');
let inputerror=document.getElementById('input-error');


let playername1=document.getElementById('player-1 name');
let playername2=document.getElementById('player-2 name');

let change1=document.getElementById('overlays-containor');
let change2=document.getElementById('backdrop');

let Editplayer1=document.getElementById('player-1');
let Editplayer2=document.getElementById('player-2');

let startnewgame=document.getElementById('start');
startnewgame.addEventListener('click',start);

let gamefields=document.querySelectorAll('#game-fields li');
let active=document.getElementById('active-game');
let activeplayername=document.getElementById('active-player-name');

let activeplayer=0;
let winnername=document.getElementById('winner-name');
let result=document.getElementById('result');
let ending=document.getElementById('end');
let winner=0;

Editplayer1.addEventListener('click',editname);
Editplayer2.addEventListener('click',editname);

cancel.addEventListener('click',edited);
form.addEventListener('submit',submited);

for(let i=0;i<gamefields.length;i++)
{
    gamefields[i].addEventListener('click',selectedfield);
}