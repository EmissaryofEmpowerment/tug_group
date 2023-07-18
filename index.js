function SetLocalVariable(body_part) { //No argument needed! That's a perk of local variables.
    //window.document.body.appendChild("<p>You clicked a radio button!</p>");
    let block = document.getElementById(body_part);
    let elementCount = block.childElementCount;
    for (let index = 0; index < elementCount; index++) {
        //block.appendChild(block.children[index]);
        let slctn = block.children[index];
        // let elem_message = "slctn["+index+"] nodeName: " + slctn.nodeName + "\n nodeType: " + slctn.nodeType + "\nnodeValue: " + slctn.nodeValue + "\nText of child node is: " + slctn.innerHTML + " ";
        // const node = document.createElement("p");
        // const node_text = document.createTextNode(elem_message);
        // node.appendChild(node_text);
        // block.appendChild(node);
        slctn.nodeName == "INPUT" ? slctn.checked == true ? localStorage.setItem("body_part", block.children[index + 1].nodeValue) : '' :'';
        if (slctn.nodeName == "INPUT"){
            if (slctn.checked == true){
                let next_value = block.children[index + 1].textContent;
                localStorage.setItem(body_part, next_value);
            }
        }
    }
}



document.addEventListener("DOMContentLoaded", main);

function main() {    
    let head_shape_btns = document.getElementById("head_shape");
    head_shape_btns.addEventListener("click", () => {SetLocalVariable("head_shape")});

    let head_clr_btns = document.getElementById("head_color");
    head_clr_btns.addEventListener("click", () => {SetLocalVariable("head_color")});

    let body_shape_btns = document.getElementById("body_shape");
    body_shape_btns.addEventListener("click", () => {SetLocalVariable("body_shape")});

    let body_clr_btns = document.getElementById("body_color");
    body_clr_btns.addEventListener("click", () => {SetLocalVariable("body_color")});

    let xtra_btns = document.getElementById("xtra");
    xtra_btns.addEventListener("click", () => {SetLocalVariable("xtra")});

}
