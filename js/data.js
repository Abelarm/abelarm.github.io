let data = {"Info":{
                    "about_txt":"<div style=\"font-family: \'Ubuntu Mono\'; font-size: 18px; padding-left: 5%;\">  \
                                    Hi I'm Luigi Giugliano a 28 years old Researcher.<br>\
                                    I have all the passions to define myself a geek/nerd but I don't like labels (unless in datasets). <br>\
                                    I code, I read, I play and I travel, sometimes more than one at time. \
                                </div>",
                    "contacts_txt":"<div style=\"font-family: \'Ubuntu Mono\'; font-size: 18px; padding-left: 5%;\">  \
                                        <span class=\"fa fa-envelope\"></span> Email: <a href=\"mailto:luigi_giugliano@yahoo.it\" rel=\"noreferrer\" style=\"color: var(--color-text-path)\">luigi_giugliano at yahoo dot it</a><br> \
                                        <span class=\"fa fa-github\"></span> Github: <a target=\"_blank\" href=\"https://github.com/abelarm\" rel=\"noreferrer\" style=\"color: var(--color-text-path)\">@abelarm</a><br>\
                                        <span class=\"fa fa-linkedin\"></span> LinkedIn: <a target=\"_blank\" href=\"https://www.linkedin.com/in/luigigiugliano/\" rel=\"noreferrer\" style=\"color: var(--color-text-path)\">Luigi Giugliano</a> \
                                    <div>",
                    "education_txt": {
                        "pre_template": '`${filled_template}`',
                        "divider": "<hr> <br>",
                        "template": '`<div class="row" style="font-family: \'Ubuntu Mono\'; font-size: 16px; padding-left: 5%;">\
                                        <div class="col-sm-2"> \
                                            ${exp.date} \
                                        </div> \
                                        <div class="col-sm-6"> \
                                            <b>${exp.title}</b> ${exp.mark} \
                                            ${exp.desc_html} \
                                        </div> \
                                        <div class=\"col-sm-2 align-self-end\"> \
                                            ${exp.place} \
                                        </div> \
                                    </div>`',
                        "values": [{
                                    "date"        : "Sep-2014<br>Mar-2017",
                                    "title"       : "MSc., Computer Science", 
                                    "mark"        : "(110/110 Laude)",
                                    "desc_html"   : "<div><i>Computational Intelligence and Machine Learning</i></div> \
                                                        <div> \
                                                            <ul> \
                                                                <b>Erasmus Master Thesis</b> \
                                                                <li> Developed a Competitive Multiplayer serious game, at the <a href=\"https://www.his.se/en/\" target=\"_blank\" rel=\"noreferrer\">University of Skövde</a>, Sweden, during the Erasmus project.  \
                                                                    Team leader of an international group of 8 students, supervised by Prof. H. Engström, P. Backlund (HiS), \
                                                                    Prof. V. Scarano (UniSa) \
                                                            </ul> \
                                                        </div> ",
                                    "place"       : "<a href=\"https://www.unisa.it/\" target=\"_blank\" rel=\"noreferrer\">University of Salerno</a>, Italy"
                                    },
                                    {
                                    "date"        : "Sep-2010<br>Mar-2014",
                                    "title"       : "BSc., Computer Science", 
                                    "mark"        : "(110/110 Laude)",
                                    "desc_html"   : "<div> \
                                                            <ul> \
                                                                <b>Bachelor Thesis</b> \
                                                                <li> A java implementation of minimisation algorithm for local automata <br> \
                                                                Supervisor: Prof. R. Zizza \
                                                            </ul> \
                                                    </div> ",
                                    "place"       : "<a href=\"https://www.unisa.it/\" target=\"_blank\" rel=\"noreferrer\">University of Salerno</a>, Italy"
                                    }]
                    },                
                    "experiences":{
                                "vocational_txt": { 
                                    "pre_template": '`<div class="row">\
                                                        <div class="col-lg-9 col-md-11 col-sm-12 terminal-timeline">${filled_template}</div> \
                                                    </div>`',
                                    "template": '`<div class="terminal-card"> \
                                                    <header class="row"> \
                                                        <div class="col-md-2 colnopad">${exp.date}</div> \
                                                        <div class="col-md-7 colnopad">${exp.title}</div> \
                                                        <div class="col-md-3 colnopad"> \
                                                            <a href="${exp.work_link}" target="_blank" rel="noreferrer">${exp.work_name}</a>,<br> \
                                                            ${exp.work_place} \
                                                        </div> \
                                                    </header>\
                                                    <div>\
                                                    ${exp.desc_html}\
                                                    </div>\
                                                </div>`',
                                    "values": [
                                        {
                                            "date"        : "Jan 2020<br>Present",
                                            "title"       : "Research Technician in Deep Learning", 
                                            "work_link"   : "http://www.bcamath.org/en/",
                                            "work_name"   : "BCAM",
                                            "work_place"  : "Bilbao - ES",
                                            "desc_html"   : "<li>Applying Deep Learning solutions to Time Series classification problems,\
                                                            developing and testing innovative approaches.</li>"
                                        },
                                        {
                                            "date"        : "Aug 2018<br>Dic 2019",
                                            "title"       : "Machine Learning Researcher", 
                                            "work_link"   : "https://linksfoundation.com/en/",
                                            "work_name"   : "LINKS Foundation",
                                            "work_place"  : "Turin - IT",
                                            "desc_html"   : "<li> Worked on European(H2020) projects both as developer and WP-leader. Attended as company representative in several consortium meetings and conferences.  \
                                                                <br> - WP-leader in COMPOSITION project. For the same project developed (trained, tested and deployed) a Deep Learning solution for predictive maintenance of a machinery present in the shop floor of one of the partners. \
                                                                <br> - Python \
                                                                <br> - Tensorflow, Keras, scikit-learn \
                                                                <br> - Microservices, Docker, REST-API \
                                                                <br> - JIRA, Git"
                                        },
                                        {
                                            "date"        : "Sep 2017<br>Aug 2018",
                                            "title"       : "ICT Application Specialist", 
                                            "work_link"   : "https://www.fcagroup.com/en-US/Pages/home.aspx",
                                            "work_name"   : "Fiat Chrysler Automobiles",
                                            "work_place"  : "Turin - IT",
                                            "desc_html"   : "<li> \
                                                                Software developer for projects regarding Industry 4.0. Developing and managing applications that support the Maserati production plant in Turin.\
                                                                Including applications on: Machine Learning, Data Science, Data Visualisation, Industrial IoT, Web Development.\
                                                            </li>"
                                        },
                                        {
                                            "date"        : "Mar 2017<br>Sep 2017",
                                            "title"       : "Backoffice/Backend Developer", 
                                            "work_link"   : "http://www.deustechnology.com/",
                                            "work_name"   : "Deus Technology",
                                            "work_place"  : "Milan - IT",
                                            "desc_html"   : "<li> \
                                                                Worked with the core development team for adding and managing features of main system.\
                                                                Mainly focused on the backoffice system with Python, using: pandas, flask, AlchemySQL and RabbitMQ. \
                                                            </li>"
                                        }
                                    ]
                                },
                                "pubblication_txt": {
                                    "pre_template": '`<ul style="font-family: \'Ubuntu Mono\'; font-size: 16px; padding-left: 5%;">${filled_template}</ul>`',
                                    "divider": "<br>",
                                    "template": '`<li> \
                                                    <div class="row">\
                                                        <div class="col-sm-2"> \
                                                            ${exp.date} \
                                                        </div> \
                                                        <div class="col-sm-6"> \
                                                            <b>${exp.title}</b> <br>\
                                                            ${exp.desc} \
                                                        </div> \
                                                        <div class=\"col-sm-2 align-self-end\"> \
                                                            ${exp.book} \
                                                        </div> \
                                                    </div>  \
                                                  </li>`',
                                    "values": [{
                                            "date": "Jun 2019",
                                            "title": "Data Analytics towards Predictive Maintenance for Industrial Ovens",
                                            "desc": "1st International Workshop on Key Enabling Technologies for Digital Factories - In conjunction with CAiSE 2019", 
                                            "book": "<a href=\"https://link.springer.com/chapter/10.1007/978-3-030-20948-3_8\" target=\"_blank\" rel=\"noreferrer\">Springer LNBIP</a>"
                                        },
                                        {
                                            "date": "May 2019",
                                            "title": "Data Analytics Platform for the Optimization of Waste Management Procedures",
                                            "desc": "International Workshop on IoT Applications and Industry 4.0", 
                                            "book": "<a href=\"https://ieeexplore.ieee.org/document/8804839\" target=\"_blank\" rel=\"noreferrer\">IEEE DCOSS</a>"
                                        }]
                                },
                                "other_txt": {
                                    "pre_template": '`${filled_template}`',
                                    "divider": "<hr>",
                                    "template": '`<div class="row" style="font-family: \'Ubuntu Mono\'; font-size: 16px; padding-left: 5%">\
                                                    <div class="col-sm-2"> \
                                                        ${exp.date} \
                                                    </div> \
                                                    <div class="col-sm-6"> \
                                                        <b>${exp.title}</b>\
                                                        ${exp.desc_html} \
                                                    </div> \
                                                    <div class=\"col-sm-2 align-self-end\"> \
                                                        ${exp.place} \
                                                    </div> \
                                                </div>`',
                                    "values": [{
                                                "date"        : "Oct 2016",
                                                "title"       : "Sweden Game Arena Staff",
                                                "desc_html"   : "<div>Provided support to the speakers of the conference and contributed to solve occurred problems.\
                                                                </div> ",
                                                "place"       : "<a href=\"http://swedengamearena.com/\" target=\"_blank\" rel=\"noreferrer\">Sweden Game Arena</a>, Skövde - Sweden"
                                                },
                                                {
                                                "date"        : "Jun 2016",
                                                "title"       : "Data analysis Hackaton",
                                                "desc_html"   : "<div> Hackaton for predicting frauds using a dataset of credit cards records. \
                                                                </div> ",
                                                "place"       : "<a href=\"http://www.labeconomia.unisa.it/sus2/\" target=\"_blank\" rel=\"noreferrer\">Stats under the Stars 2</a>, Salerno - Italy"
                                                },
                                                {
                                                "date"        : "Mar 2016",
                                                "title"       : "Ideas Hackaton",
                                                "desc_html"   : "<div> Hackaton for defining the future of the food sector. \
                                                                </div> ",
                                                "place"       : "<a href=\"http://h-ack.com/food2016\" target=\"_blank\" rel=\"noreferrer\">H-Farm</a>, Treviso - Italy"
                                                },
                                                {
                                                "date"        : "Jan 2015",
                                                "title"       : "Global Game Jam",
                                                "desc_html"   : "<div>Developed an endless game in Unity3D in 48 hours, for the Global Game Jam.<br> \
                                                                      Game: Wasting Time <a href=\"https://globalgamejam.org/2015/games/wasting-time\" target=\"_blank\" rel=\"noreferrer\">link</a> \
                                                                </div> ",
                                                "place"       : "<a href=\"https://globalgamejam.org/2015\" target=\"_blank\" rel=\"noreferrer\">IUDAV</a>, Salerno - Italy"
                                                }] 
                                }
                            },
                    "skills":{  "languages_txt": {
                                        "pre_template": '`<div style=\"font-family: \'Ubuntu Mono\'; font-size: 18px\">${filled_template}</div>`',
                                        "divider": "",
                                        "template": '`<div class="row" style="font-family: \'Ubuntu Mono\'; padding-left: 5%">\
                                                        <div class=\"col-sm-8 nopadding\"> \
                                                            ${exp.imgs}\
                                                        </div> \
                                                        <div class=\"bar-wrap\">\
                                                            <span class=\"bar-fill\" style=\"width: ${exp.level}%;\"></span> \
                                                        </div> \
                                                    </div>`',
                                        "values": [{
                                                    "imgs": "<img src=\"img/py.png\"> python",
                                                    "level": "75",
                                                    },
                                                    {
                                                    "imgs": "<img src=\"img/c.png\"> C, \
                                                             <img src=\"img/cpp.png\"> C++, \
                                                             <img src=\"img/js.png\"> javascript ",
                                                    "level": "60",
                                                    },
                                                    {
                                                    "imgs": "<img src=\"img/sql.png\"> SQL, \
                                                             <img src=\"img/matlab.png\"> Matlab, \
                                                             <img src=\"img/csharp.png\">, C# \
                                                             <img src=\"img/java.png\"> Java",
                                                    "level": "40",
                                                    },
                                                  ]
                                },
                                "frameworks_txt": {
                                    "pre_template": '`<div style="font-family: \'Ubuntu Mono\'; font-size: 18px">${filled_template}</div>`',
                                    "divider": "",
                                    "template": '`<div class="row" style="font-family: \'Ubuntu Mono\'; padding-left: 5%">\
                                                    <div class=\"col-sm-8 nopadding\"> \
                                                        ${exp.imgs}\
                                                    </div> \
                                                    <div class="bar-wrap">\
                                                        <span class="bar-fill" style="width: ${exp.level}%;"></span> \
                                                    </div> \
                                                </div>`',
                                    "values": [{
                                                "imgs": "<img src=\"img/tf.png\"> Tensorflow, \
                                                         <img src=\"img/ks.jpg\"> Keras, \
                                                         <img src=\"img/sci.png\"> scikit-learn, \
                                                         <img src=\"img/flask.png\"> Flask ",
                                                "level": "65",
                                                },
                                                {
                                                "imgs": "<img src=\"img/node.svg\" style=\"width:6%\"> Node.js, \
                                                         <img src=\"img/unity.png\"> Unity\ ",
                                                "level": "55",
                                                },
                                                {
                                                "imgs": "<img src=\"img/cuda.png\"> CUDA, \
                                                         <img src=\"img/hdp.png\"> Hadoop ",
                                                "level": "40",
                                                },
                                              ]
                                },
                                "humanLanguages_txt": {
                                    "pre_template": '`<div style="font-family: \'Ubuntu Mono\'; font-size: 18px; padding-left: 5%;">${filled_template}</div>`',
                                    "divider": "",
                                    "template": '`<div class="col-sm-8 nopadding"> \
                                                        ${exp.imgs}\
                                                    </div> \
                                                    <div class="bar-wrap">\
                                                        <span class="bar-fill" style="width: ${exp.level}%;"></span> \
                                                    </div>`',
                                    "values": [{
                                                "imgs": "<img src=\"img/italy.png\"> Italian ",
                                                "level": "100",
                                                },
                                                {
                                                "imgs": "<img src=\"img/uk.png\"> English ",
                                                "level": "90",
                                                },
                                                {
                                                "imgs": "<img src=\"img/spain.png\"> Spanish ",
                                                "level": "60",
                                                },
                                              ]
                                },
                                "other_txt": "d3.js - bootstrap - vue.js - html - docker - latex - android - bash",
                                "softSkills_txt": "- Curious and interested in learning and trying new things <br> \
                                                   - Team leader of a international group of student during the Erasmus thesis <br> \
                                                   - Being part of waterpolo team for 6 years <br> \
                                                  "
                                },
                    "projects":{"ops_txt": "<span class=\"fa fa-exclamation-triangle\"></span> Ops this section is still under development :("
                               },
                    "passion-interest_txt": " - Traveling <br> \
                                              - Videogames <br> \
                                              - Books & Comics <br> \
                                              - Geek and Nerd stuff \
                                            "
                    },
            "KeyCodes": {32: " ", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 
                         72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 
                         80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 
                         88: "x", 89: "y", 90: "z", 186: ";", 188: ",", 189: "-", 190: ".", 
                         191: "/", 219: "[", 220: "\"", 221: "]", 222: "'"},               
}

module.exports = {data: data}