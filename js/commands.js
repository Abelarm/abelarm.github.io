let func = require("./functions.js");
let $ = require("jquery");
let TypeIt = require("typeit");

var dStore = require("./data.js").data;
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
        //let files = Object.keys(func.getContext(dStore["Info"])).map(x => x.replace("_","."))
        if(info){
            let files = func.getContext(dStore["Info"]);
            console.log(files);
            if(x.slice(-4) !== ".txt"){
                func.displayOutput("cat: "+ x.replace("cat ","") +": Is a directory");
                return ;
            }
            if(files.hasOwnProperty(info)){
                if(files[info].hasOwnProperty("pre_template")){
                    var pre_template = files[info]["pre_template"];
                    var template = files[info]["template"];
                    var filled_template = ""
                    var arrayLength = files[info]["values"].length;
                    for (var i = 0; i < arrayLength; i++){
                        console.log(files[info]["values"][i])
                        var exp = files[info]["values"][i];
                        var filled_exp = eval(template)
                        filled_template += filled_exp;
                        if(files[info].hasOwnProperty("divider") && i != arrayLength - 1){
                            filled_template += files[info]["divider"];
                        }
                    }
                    var full = eval(pre_template);
                    func.displayOutput(full);
                }else{
                    func.displayOutput(files[info]);
                }
                
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
            data += "<span class=\"dir\">" + commandList[i] + "</span>" + ", "
        }
        data = data.slice(0,data.length-2);
        data += "<br> If you don't know how to use a terminal type: \" <span class=\"dir\"> autopilot </span> \" "
        func.displayOutput(data);
        }else{
            func.errorMessage(x);
        }
    },
    "autopilot":(phone=false)=>{  
        speed = 75;
        document.getElementById('blinker').style ='display:none;';
        if (phone === true){
            new TypeIt('#input', {
                strings: ['Hi the website is intend for desktop use...', 'So the \"autopilot\" mode will start'],
                cursorChar: '_',
                speed: speed,
                breakLines: false,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    func.displayOutput('');
                    startAutopilot();
                }
            }).go().destroy(removeCursor = true);
        }
        else{
            startAutopilot();
        }
        
    }

}

function startAutopilot(){ 
    if (current_dir != "/"){
        commands.cd("cd");
    } 
    commands.clear("clear");
    speed = 75;
    new TypeIt('#input', {
        strings: ['Hi you selected the \"autopilot\" mode ', 'My resume will be printed out, enjoy the journey :)'],
        cursorChar: '_',
        // afterStep: ()=>{func.scroll()},
        speed: speed,
        breakLines: false,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            func.displayOutput('');
            new TypeIt('#input', {
                strings: ['First some information about me'],
                cursorChar: '_',
                // afterStep: ()=>{func.scroll()},
                speed: speed,
                breakLines: false,
                waitUntilVisible: true,
                afterComplete: function (instance) {
                    commands.cat('cat about.txt');
                    // func.scroll();
                    new TypeIt('#input', {
                        strings: ['My contacts:'],
                        cursorChar: '_',
                        // afterStep: ()=>{func.scroll()},
                        speed: speed,
                        breakLines: false,
                        waitUntilVisible: true,
                        afterComplete: function (instance) {
                            commands.cat('cat contacts.txt');
                            // func.scroll();
                            console.log($('#input'));
                            new TypeIt('#input', {
                                strings: ['Now I\'ll show you my education: '],
                                cursorChar: '_',
                                // afterStep: ()=>{func.scroll()},
                                speed: speed,
                                breakLines: false,
                                waitUntilVisible: true,
                                afterComplete: function (instance) {
                                    commands.cat('cat education.txt');
                                    // func.scroll();
                                    new TypeIt('#input', {
                                        strings: ['Let\'s move to the experiences directory'],
                                        cursorChar: '_',
                                        // afterStep: ()=>{func.scroll()},
                                        speed: speed,
                                        breakLines: false,
                                        waitUntilVisible: true,
                                        afterComplete: function (instance) {
                                            commands.cd('cd experiences');
                                            // func.scroll();
                                            new TypeIt('#input', {
                                                strings: ['Work experiences:'],
                                                cursorChar: '_',
                                                // afterStep: ()=>{func.scroll()},
                                                speed: speed,
                                                breakLines: false,
                                                waitUntilVisible: true,
                                                afterComplete: function (instance) {
                                                    commands.cat('cat vocational.txt');
                                                    // func.scroll();
                                                    new TypeIt('#input', {
                                                        strings: ['Other experiences:'],
                                                        cursorChar: '_',
                                                        // afterStep: ()=>{func.scroll()},
                                                        speed: speed,
                                                        breakLines: false,
                                                        waitUntilVisible: true,
                                                        afterComplete: function (instance) {
                                                            commands.cat('cat other.txt');
                                                            // func.scroll();
                                                            new TypeIt('#input', {
                                                                strings: ['Back to the main directory'],
                                                                cursorChar: '_',
                                                                // afterStep: ()=>{func.scroll()},
                                                                speed: speed,
                                                                breakLines: false,
                                                                waitUntilVisible: true,
                                                                afterComplete: function (instance) {
                                                                    commands.cd('cd ..');
                                                                    // func.scroll();
                                                                    new TypeIt('#input', {
                                                                        strings: ['Let\'s see what I know'],
                                                                        cursorChar: '_',
                                                                        // afterStep: ()=>{func.scroll()},
                                                                        speed: speed,
                                                                        breakLines: false,
                                                                        waitUntilVisible: true,
                                                                        afterComplete: function (instance) {
                                                                            commands.cd('cd skills');
                                                                            // func.scroll();
                                                                            new TypeIt('#input', {
                                                                                strings: ['First with languages:'],
                                                                                cursorChar: '_',
                                                                                // afterStep: ()=>{func.scroll()},
                                                                                speed: speed,
                                                                                breakLines: false,
                                                                                waitUntilVisible: true,
                                                                                afterComplete: function (instance) {
                                                                                    commands.cat('cat languages.txt');
                                                                                    // func.scroll();
                                                                                    new TypeIt('#input', {
                                                                                        strings: ['Then frameworks: '],
                                                                                        cursorChar: '_',
                                                                                        // afterStep: ()=>{func.scroll()},
                                                                                        speed: speed,
                                                                                        breakLines: false,
                                                                                        waitUntilVisible: true,
                                                                                        afterComplete: function (instance) {
                                                                                            commands.cat('cat frameworks.txt');
                                                                                            // func.scroll();
                                                                                            new TypeIt('#input', {
                                                                                                strings: ['Some misc that can be useful'],
                                                                                                cursorChar: '_',
                                                                                                // afterStep: ()=>{func.scroll()},
                                                                                                speed: speed,
                                                                                                breakLines: false,
                                                                                                waitUntilVisible: true,
                                                                                                afterComplete: function (instance) {
                                                                                                    commands.cat('cat other.txt');
                                                                                                    // func.scroll();
                                                                                                    new TypeIt('#input', {
                                                                                                        strings: ['What about the "human" languages:'],
                                                                                                        cursorChar: '_',
                                                                                                        // afterStep: ()=>{func.scroll()},
                                                                                                        speed: speed,
                                                                                                        breakLines: false,
                                                                                                        waitUntilVisible: true,
                                                                                                        afterComplete: function (instance) {
                                                                                                            commands.cat('cat humanLanguages.txt');
                                                                                                            // func.scroll();
                                                                                                            new TypeIt('#input', {
                                                                                                                strings: ['And FINALLY my softskills: '],
                                                                                                                cursorChar: '_',
                                                                                                                // afterStep: ()=>{func.scroll()},
                                                                                                                speed: speed,
                                                                                                                breakLines: false,
                                                                                                                waitUntilVisible: true,
                                                                                                                afterComplete: function (instance) {
                                                                                                                    commands.cat('cat softSkills.txt');
                                                                                                                    // func.scroll();
                                                                                                                    new TypeIt('#input', {
                                                                                                                        strings: ['Last but not least my passions: '],
                                                                                                                        cursorChar: '_',
                                                                                                                        // afterStep: ()=>{func.scroll()},
                                                                                                                        speed: speed,
                                                                                                                        breakLines: false,
                                                                                                                        waitUntilVisible: true,
                                                                                                                        afterComplete: function (instance) {
                                                                                                                            commands.cd('cd ..');
                                                                                                                            new TypeIt('#input', {
                                                                                                                                strings: ['cat passion-interest.txt'],
                                                                                                                                cursorChar: '_',
                                                                                                                                // afterStep: ()=>{func.scroll()},
                                                                                                                                speed: speed,
                                                                                                                                breakLines: false,
                                                                                                                                waitUntilVisible: true,
                                                                                                                                afterComplete: function (instance) {
                                                                                                                                    commands.cat('cat passion-interest.txt');
                                                                                                                                    new TypeIt('#input', {
                                                                                                                                        strings: ['That\'s it I hope you liked it please scroll through my entire CV'],
                                                                                                                                        cursorChar: '_',
                                                                                                                                        // afterStep: ()=>{func.scroll()},
                                                                                                                                        speed: speed,
                                                                                                                                        breakLines: false,
                                                                                                                                        waitUntilVisible: true,
                                                                                                                                        afterComplete: function (instance) {
                                                                                                                                            func.displayOutput('');
                                                                                                                                            // func.scroll();
                                                                                                                                        }
                                                                                                                                    }).go().destroy(removeCursor = true);
                                                                                                                                    // func.scroll();
                                                                                                                                }
                                                                                                                            }).go().destroy(removeCursor = true);
                                                                                                                        
                                                                                                                        }
                                                                                                                    }).go().destroy(removeCursor = true);
                                                                                                                }
                                                                                                            }).go().destroy(removeCursor = true);
                                                                                                        }
                                                                                                    }).go().destroy(removeCursor = true);
                                                                                                }
                                                                                            }).go().destroy(removeCursor = true);
                                                                                        }
                                                                                    }).go().destroy(removeCursor = true);
                                                                                }
                                                                            }).go().destroy(removeCursor = true);
                                                                        }
                                                                    }).go().destroy(removeCursor = true);
                                                                }
                                                            }).go().destroy(removeCursor = true);
                                                        }
                                                    }).go().destroy(removeCursor = true);
                                                }
                                            }).go().destroy(removeCursor = true);
                                        }
                                    }).go().destroy(removeCursor = true);
                                }
                            }).go().destroy(removeCursor = true);
                        }
                    }).go().destroy(removeCursor = true);
                }
            }).go().destroy(removeCursor = true);
        }
    }).go().destroy(removeCursor = true);
}



module.exports = {
    commands: commands
}
