// loading data with Promise

var dStore = require("./data.js").data;
dStore['files'] = Object.keys(dStore['Info']).map(x => x.replace("_","."));
console.log(dStore);

let func = require("./functions.js");
let cmds = require("./commands.js");
let $ = require("jquery");


// global path variable
path = "/"; /*global path*/
current_dir = "/" /*global current_dir*/


// Command caching
let commandStack = [];
let commandIndex = 0;

// Auto completetion
let autoCompleteCache = [];
let autoCompleteCount = 0;

document.addEventListener('keydown', function(event) {
     let x = document.getElementById("input");
     let key = event.which;
     // Enter key
     if(key === 13){
         if (cmds.commands[x.innerHTML.split(" ")[0]]!=undefined){
             cmds.commands[x.innerHTML.split(" ")[0]](x.innerHTML);
             if(x.innerHTML!=""){
                 commandStack.push(x.innerHTML);
             }else{
                 commandStack.push("clear");
             }
             commandIndex = commandStack.length;
         }else if(x.innerHTML.split(" ")[0]===""){
             func.displayOutput("");
         }
         else{
             func.errorMessage(x);
         }
         autoCompleteCache = [];
         autoCompleteCount = 0;

         // scrolling
         func.scroll();
     }

     // Up arrow key
     if(key === 38){
         event.preventDefault();
         if(commandIndex-1>=0){
             commandIndex -=1;
             x.innerHTML = commandStack[commandIndex];
         }
     }
     // Down arrow key
     if(key === 40){
         if(commandIndex+1<commandStack.length){
             commandIndex +=1;
             x.innerHTML = commandStack[commandIndex];
         }else if(commandIndex===commandStack.length-1){
             x.innerHTML = "";
             commandIndex +=1;
         }
     }
     // Backspace key
     if(key === 8){
         event.preventDefault();
         x.innerHTML = x.innerHTML.slice(0,x.innerHTML.length-1);
         autoCompleteCache = [];
         autoCompleteCount = 0;
     }else if(dStore.KeyCodes[key]!= undefined){
         x.innerHTML = x.innerHTML + dStore.KeyCodes[key];
     }
     // Tab key
     if(key === 9){
         event.preventDefault();
         let inputArray = x.innerHTML.split(" ");
         console.log(inputArray);
         console.log(func.checkIfArgs(inputArray));
         if(func.checkIfArgs(inputArray)){
             var [command, arg, file] = inputArray;
         }else{
             var [command, file] = inputArray;
             var arg = "";
         }
         console.log(file);
         //let command = x.innerHTML.split(" ")[0];
         //let file = x.innerHTML.split(" ").slice(-1)[0];
         let files = Object.keys(func.getContext(dStore["Info"])).map(x => x.replace("_","."));
         if (autoCompleteCache.length===0){
            for(let i=0;i<files.length;i++){
                if(func.IfPrefix(file,files[i])){
                 autoCompleteCache.push(files[i]);
                }
            }
         }
         if(autoCompleteCache[autoCompleteCount]){
             x.innerHTML = arg ? command+" "+arg+" "+autoCompleteCache[autoCompleteCount] : command+" "+autoCompleteCache[autoCompleteCount];
            autoCompleteCount = (autoCompleteCount + 1)%autoCompleteCache.length;   
         }
     }
});

document.getElementById("bulb").addEventListener("click",func.changeColor);

if (func.isMobile() === true){
    console.log('Preseting in mobile mode');
    document.getElementById('help').style = 'display:none;';
    document.querySelectorAll(`[data-termynal]`)[0].style='height: 100vh; width: 100%; padding: 50px 15px 20px;'
    cmds.commands.autopilot(true);
}else{
    console.log('Presenting desktop mode');
}
