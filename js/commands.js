let func = require("./functions");
let $ = require("jquery");
let TypeIt = require("typeit");


// loading data with Promise
var dStore = require("./dataStore.js");
dStore['files'] = Object.keys(dStore['Info']).map(x => x.replace("_","."));
console.log(dStore)

let commands = {
        "ls":(x)=>{
        if(x.replace(/  */,"")==="ls"){
            //func.displayOutput(dStore.files.join(" "));
            let mainP = document.createElement("P");
            let files = Object.keys(func.getContext(dStore['Info'])).map( x => x.replace("_","."));
            for(var k=0; k<files.length; k++){
                var elem = document.createElement("SPAN");
                if(files[k].slice(-4)!=".txt"){
                    elem.setAttribute("class","dir");
                }
                
                // append nodes / set attr
                elem.innerHTML = " " + files[k] + " ";
                mainP.appendChild(elem);
            }
            
            // remove old bash
            func.removeOldBash();
            
            // create new bash
            let bash = func.createNewBash();
            
            let term = document.getElementById("terminal");
            term.appendChild(mainP);
            term.appendChild(bash);
            
        }else{
            func.errorMessage(x);
        }

    },
    "clear":(x)=>{
        if(x.replace(/  */,"")==="clear"){
            let terminal = document.getElementById("terminal");
            let bash = document.getElementById("bash");
            terminal.innerHTML = "";
            terminal.appendChild(bash);
            document.getElementById("input").innerHTML = "";
        }else{
            func.errorMessage(x);
        }
    },
    "cat":(x)=>{
        console.log(dStore);
        let info = x.replace("cat ","")
                    .replace(".","_")
                    .replace("--gif","")
                    .replace(/  */,"");
        //let files = Object.keys(func.getContext(dStore["Info"])).map(x => x.replace("_","."));
        if(info){
            let files = func.getContext(dStore["Info"]);
            console.log(files);
            if(x.slice(-4) !== ".txt"){
                func.displayOutput("cat: "+ x.replace("cat ","") +": Is a directory");
                return ;
            }
            if(files.hasOwnProperty(info)){
                func.displayOutput(files[info]);
            }
            else{
                console.log(info);
                func.displayOutput("cat: No such file or directory");
            }
        }
    },
    "cd":(x)=>{
        if(x.slice(-4) === ".txt"){
            func.displayOutput("cd: not a directory");
        }else{
            if (x !== 'cd'){
                let dir = x.replace("cd ","");
                // update path variable
                if(dir===".."){
                    path = path.replace(`/${current_dir}`,"");
                    current_dir = path.split("/").pop();
                }
                else if (dStore['files'].indexOf(dir) < 0) {
                    func.displayOutput("cd: no such file or directory: "+ dir);
                    return ;
                }
                else{
                    path = (path != "/" ? path : "") + `/${dir}`;
                    current_dir = dir;
                }
            }
            if (x === 'cd'){
                path = "/";
            }
            func.displayOutput(" ");
        }
    },
    "pwd":(x) => {
            func.displayOutput(func.printPath());  
    },
    "echo":(x)=>{
        let data = x.replace("echo ","");
        func.displayOutput(data);
    },
    "help":(x)=>{
        if(x.replace(/  */,"")==="help"){
        let commandList = Object.keys(commands);
        let data = "Try these commands to find out more about me: ";
        for(let i=0;i<commandList.length;i++){
            data += commandList[i] + ", "
        }
        data = data.slice(0,data.length-2);
        data += "<br> If you don't know how to use a terminal type: \"cat contacts.txt\" "
        func.displayOutput(data);
        }else{
            func.errorMessage(x);
        }
    },
    "autopilot":(phone=false)=>{
        func.displayOutput();
        speed = 70;
        document.getElementById('blinker').style ='display:none;';
        if (phone === true){
            new TypeIt('#input', {
                strings: ['Hi the website is intend for desktop use...', 'So the \"autopilot\" mode will start, enjoy the jurney :)'],
                cursorChar: '_',
                speed: speed,
                breakLines: false,
                autoStart: false,
                afterComplete: function (instance) {
                    func.displayOutput('');
                }
            }).destroy();
        }
        else{
            new TypeIt('#input', {
                strings: ['Hi you selected the \"autopilot\" mode ', 'My resume will be printed out, enjoy the journey :)'],
                cursorChar: '_',
                speed: speed,
                breakLines: false,
                autoStart: false,
                afterComplete: function (instance) {
                    func.displayOutput('');
                    new TypeIt('#input', {
                        strings: ['First some informations about me', 'cat about.txt'],
                        cursorChar: '_',
                        speed: speed,
                        breakLines: false,
                        autoStart: false,
                        afterComplete: function (instance) {
                            commands.cat('cat about.txt');
                            new TypeIt('#input', {
                                strings: ['cat contacts.txt'],
                                cursorChar: '_',
                                speed: speed,
                                breakLines: false,
                                autoStart: false,
                                afterComplete: function (instance) {
                                    commands.cat('cat contacts.txt');
                                    new TypeIt('#input', {
                                        strings: ['Now I\'ll show you my education', 'cat education.txt'],
                                        cursorChar: '_',
                                        speed: speed,
                                        breakLines: false,
                                        autoStart: false,
                                        afterComplete: function (instance) {
                                            commands.cat('cat education.txt');
                                        }
                                    }).destroy();
                                }
                            }).destroy();
                        }
                    }).destroy();
                }
            }).destroy();
        }
    }

}



module.exports = {
    commands: commands
}
