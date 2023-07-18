
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

    const hd_clr = document.createElement("p");
    hd_clr.innerText = "You selected: " + localStorage.getItem("head_color");

    const bd_shp = document.createElement("p");
    switch (localStorage.getItem("body_shape")) {
        case "Oval":    
        hd_sh.innerHTML = "<img src='Images/oval_body.png'/";           
            break;

        case "Triangle":    
        hd_sh.innerHTML = "<img src='Images/triangle_body.png'/>";            
            break;
    
        case "Star":    
        hd_sh.innerHTML = "<img src='Images/star_body.png'/>";           
        break;
        
        case "Circle":    
        hd_sh.innerHTML = "<img src='Images/circeler_body.png'/>";          
            break;
        
        default:
            break;
    }

    const bd_clr = document.createElement("p");
    bd_clr.innerText = "You selected: " + localStorage.getItem("body_color");

    const extra = document.createElement("p");
    extra.innerText = "You selected: " + localStorage.getItem("xtra");

    const node = document.createElement("button");
    node.innerHTML += "<a href='index.html'>Draw New Monster</a>";
    //content.appendChild(hd_sh);
    let node_list = [hd_sh, hd_clr, bd_shp, bd_clr, extra,node];
    for (let index = 0; index < node_list.length; index++) {
        content.appendChild(node_list[index]);
                }
}

window.document.addEventListener("DOMContentLoaded", main);