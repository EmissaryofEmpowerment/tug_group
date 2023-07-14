function CompileMonster() { //No argument needed! That's a perk of session variables.
    window.document.body.appendChild("<p>You clicked a radio button!</p>");
}



document.addEventListener("load", main);

function main() {
    let wha = document.getElementById("welcome");
    wha.addEventListener("click", function() {
        alert("huh?")});
    let rspnd_radio_btns = document.getElementById("oval");
    rspnd_radio_btns.addEventListener("click", CompileMonster);
    
}
