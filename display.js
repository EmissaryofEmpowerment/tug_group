
function main() {
    let content = document.getElementById("render");
    const hd_sh = document.createElement("p");
    let placeHolder = null; //TODO: retrieve and evaluate appropriate value
    switch (placeHolder) {
        case "Oval":    
        hd_sh.innerHTML = "<img src='Images/oval_head.png'/";           
            break;

        case "Triangle":    
        hd_sh.innerHTML = "<img src='Images/triangle_head.png'/>";            
            break;
    
        case "Star":    
        hd_sh.innerHTML = "<img src='Images/star_head.png'/>";           
        break;
        
        case "Circle":    
        hd_sh.innerHTML = "<img src='Images/circeler_head.png'/>";          
            break;
        
        default:
            hd_sh.innerHTML = "<p>TODO: retrieve and evaluate appropriate value for the head shape</p>";
            break;
    }
    placeHolder = null; //TODO: retrieve and evaluate appropriate value
    switch (placeHolder){
        case "Purple":
            ''//Add functionality here
            break;

        case "Green":
            ''//Add functionality here
            break;

        case "Blue":
            ''//Add functionality here
            break;

        case "Red":
        ''//Add functionality here
        break;

        default:
            hd_sh.innerHTML += "<span>TODO: write functionality based on color of head</span>";
            break;
    }


    const bd_sh = document.createElement("p");
    placeHolder = null; //TODO: retrieve and evaluate appropriate value
    switch (placeHolder) {
        case "Oval":    
        bd_sh.innerHTML = "<img src='Images/oval_body.png'/";           
            break;

        case "Triangle":    
        bd_sh.innerHTML = "<img src='Images/triangle_body.png'/>";            
            break;
    
        case "Star":    
        bd_sh.innerHTML = "<img src='Images/star_body.png'/>";           
        break;
        
        case "Circle":    
        bd_sh.innerHTML = "<img src='Images/circeler_body.png'/>";          
            break;
        
        default:
            bd_sh.innerHTML = "<p>TODO: retrieve and evaluate appropriate value for the body shape</p>";
            break;
    }
    placeHolder = null; //TODO: retrieve and evaluate appropriate value
    switch (placeHolder){
        case "Red":
            ''//Add functionality here
            break;

        case "Green":
            ''//Add functionality here
            break;

        case "Blue":
            ''//Add functionality here
            break;

        case "Orange":
        ''//Add functionality here
        break;

        default:
            bd_sh.innerHTML += "<span> TODO: add functionality based on body color</span>";
            break;
    }
    

    const extra = document.createElement("p");
    placeHolder = null; //TODO: retrieve and evaluate appropriate value
    switch (placeHolder) {
        case "Arm":
            extra.innerHTML = "<img src='Images/arm.png'/>"; 
            break;
        case "Horn1":
            extra.innerHTML = "<img src='Images/horn.png'/>"; 
            break;
        case "Horn2":
            extra.innerHTML = "<img src='Images/horn1.png'/>"; 
            break;
        case "Tail":
            extra.innerHTML = "<img src='Images/tail.png'/>"; 
            break;
    
        default:
            bd_sh.innerHTML += "<span> TODO: retrieve and evaluate appropriate value for extra items</span>";
            break;
    }

    let user_choices = ["TODO: local session variable","TODO: local session variable","TODO: local session variable"];

    const desc = document.createElement("p");
    desc.innerHTML = "Now displaying: " + user_choices[0] +" Head " + user_choices[1] + " Body " + " Plus " + user_choices[2];
    const node = document.createElement("button");
    node.innerHTML += "<a href='index.html'>Draw New Monster</a>";
    let node_list = [hd_sh, bd_sh, extra, desc,node];
    for (let index = 0; index < node_list.length; index++) {
        content.appendChild(node_list[index]);
                }
}

window.document.addEventListener("DOMContentLoaded", main);