function CompileMonster() { //No argument needed! That's a perk of local variables.
    //window.document.body.appendChild("<p>You clicked a radio button!</p>");
    let block = document.getElementById("head_shape");
    let elementCount = block.childElementCount;
    for (let index = 0; index < elementCount; index++) {
        //block.appendChild(block[index]);
        let slctn = block.children[index];
        // let elem_message = "slctn["+index+"] nodeName: " + slctn.nodeName + "\n nodeType: " + slctn.nodeType + "\nnodeValue: " + slctn.nodeValue + "\nText of child node is: " + slctn.innerHTML + " ";
        // const node = document.createElement("p");
        // const node_text = document.createTextNode(elem_message);
        // node.appendChild(node_text);
        // block.appendChild(node);
        slctn.nodeName == "INPUT" ? alert("This radio button is: " + slctn.checked):'';
    }
}



document.addEventListener("DOMContentLoaded", main);

function main() {    
    let rspnd_radio_btns = document.getElementById("head_shape");
    // .getElementsByTagName("head_shape");
    rspnd_radio_btns.addEventListener("click", CompileMonster);
    
}
