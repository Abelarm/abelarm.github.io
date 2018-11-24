let $ = require("jquery");

let name = 'luigi'
let loc = 'resume'
let marker_val = '$'

// Check if args present in command
function checkIfArgs(a){
    return a.filter(x => x.indexOf("--")>-1).length>0 ? true : false;
    
}


// Check if string a is a prefix of string b
function IfPrefix(a,b){
    let isPrefix=true;
    for(let i=0;i<a.length;i++){
        if(a[i]!=b[i]){
            isPrefix=false;
            break;
        }
        
    }
     return isPrefix;
};

// return path
function printPath(){
    return path ? path : "~"; /*global path*/
}


// return context
function getContext(files){
    var keys = path.split("/").slice(1);
    var current_key;
    for(var k=0;k<keys.length;k++){
        if(current_key){
            current_key = current_key[keys[k]];
        }else{
            current_key = files[keys[k]];
        }
        
    }
    
    return current_key ? current_key : files;
    
}


// Create new bash node
function createNewBash(){
    // create DOM elements
    let newBash = document.createElement("DIV");
    let mainP = document.createElement("P");
    let name_term = document.createElement("SPAN");
    let path_term = document.createElement("SPAN");
    let marker = document.createElement("SPAN")
    let input = document.createElement("SPAN");
    let blinker = document.createElement("SPAN");

    name_term.innerHTML = name+'@'+loc+':';
    if (path !== '/'){
        path_term.innerHTML = ' ~'+ path + ' ';
    }else{
        path_term.innerHTML = ' ~ ';
    }
    marker.innerHTML = marker_val + ' ';

    name_term.setAttribute("id", "name_term")
    path_term.setAttribute("id", "path_term")
    newBash.setAttribute("id","bash")
    input.setAttribute("id","input");
    blinker.setAttribute("id","blinker");
    blinker.innerHTML="_";
    
    // Append nodes
    mainP.appendChild(name_term);
    mainP.appendChild(path_term);
    mainP.appendChild(marker);
    mainP.appendChild(input);
    mainP.appendChild(blinker);
    newBash.appendChild(mainP);
    
    return newBash;
    
}

// Remove attributes from old bash node WARNING: potentially dangerous
function removeOldBash(){
    document.getElementById("blinker").innerHTML = "";
    document.getElementById("blinker").setAttribute("id","");
    document.getElementById("input").setAttribute("id","");
    document.getElementById("bash").setAttribute("id","oldbash");
}


// Print data to the DOM
function displayOutput(output){
    let elem = document.createElement("div");
    let p = document.createElement("p")
    let terminal = document.getElementById("terminal");
    
    // Using jQuery. Finally gave up
    $( p ).html(output);
    
    
    // new bash node
    let NewTerminal = createNewBash();
    
    // remove old bash
    removeOldBash();
    
    // Append nodes
    elem.appendChild(p);
    terminal.appendChild(elem);
    terminal.appendChild(NewTerminal);
    
    return elem;

};
    
// Print error message in DOM
function errorMessage(x){
    displayOutput("bash: "+x.innerHTML+": command not found");
};

// Switch modes (light and dark)
function changeColor(){
    let colors = {"rgb(255, 255, 255)":"rgb(51, 51, 51)","rgb(51, 51, 51)":"rgb(255, 255, 255)"};
    let bulb = {"brightness(1) invert(0)":"brightness(0) invert(1)","brightness(0) invert(1)":"brightness(1) invert(0)"};
    if(document.body.style.backgroundColor!="" && document.body.style.color!="" && document.getElementById("bulb").style.filter!=""){
        document.body.style.backgroundColor = colors[document.body.style.backgroundColor];
        document.body.style.color = colors[document.body.style.color];
        document.getElementById("bulb").style.filter = bulb[document.getElementById("bulb").style.filter];
        
}else{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#333";
    document.getElementById("bulb").style.filter = "brightness(1) invert(0)";
    }
};

module.exports = {
    errorMessage: errorMessage,
    removeOldBash: removeOldBash,
    createNewBash: createNewBash,
    displayOutput: displayOutput,
    IfPrefix: IfPrefix,
    changeColor: changeColor,
    printPath: printPath,
    getContext: getContext,
    checkIfArgs: checkIfArgs
}