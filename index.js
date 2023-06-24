
const shufflebtn = document.querySelector('.shuffle')
const dice = document.querySelector('.dice-img')

function shuffle(){
    const num = Math.floor(Math.random() * 6 + 1);
    dice.src = `assets/${num}.png`
}
 
function Animate(){
    dice.src = `assets/dice-rol.gif`
}
 
shufflebtn.addEventListener('click', ()=>{
    setTimeout(shuffle, 500);
    Animate();
})