
function main() {
    let content = document.getElementById("render");
    const hd_sh = document.createElement("p");
    switch (localStorage.getItem("head_shape")) {
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
            break;
    }
    switch (localStorage.getItem("head_color")){
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
            break;
    }


    const bd_sh = document.createElement("p");
    switch (localStorage.getItem("body_shape")) {
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
            break;
    }
    switch (localStorage.getItem("body_color")){
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
            break;
    }
    

    const extra = document.createElement("p");
    switch (localStorage.getItem("xtra")) {
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
            break;
    }

    let user_choices = [localStorage.getItem("head_shape"), localStorage.getItem("body_shape"), localStorage.getItem("xtra")];

    const desc = document.createElement("p");
    desc.innerHTML = "Now displaying: " + user_choices[0] +" Head " + user_choices[1] + " Body " + " Plus " + user_choices[2];
    const node = document.createElement("button");
    node.innerHTML += "<a href='index.html'>Draw New Monster</a>";
    //content.appendChild(hd_sh);
    let node_list = [hd_sh, bd_sh, extra, desc,node];
    for (let index = 0; index < node_list.length; index++) {
        content.appendChild(node_list[index]);
                }
}

window.document.addEventListener("DOMContentLoaded", main);