import MEERA from './meera.png'
import EVENT_NOTIFIER from './eventnotifier.png'
import PROJECT_X from './projectx.jpg'
import FSM from './fsm.jpg'
import RURAL_IVRS from './ruralict.jpg'
import LETS_SANKALP from './letssankalp.png'

const projects = [
    {
        name: "MEERA",
        oneLiner: "An ML Powered Virtual Assistant",
        tags: ["python", "ml", "lightsail", "terraform"],
        organisation: "Personal",
        image: MEERA,
        links: [
            {
                type: "github",
                url: "https://github.com/AmeyKamat/MEERA",
                tooltip: "MEERA on GitHub"
            },
            {
                type: "youtube",
                url: "https://www.youtube.com/watch?v=dlDJMxemm3M",
                tooltip: "Demo Video on MEERA"
            },
            {
                type: "article",
                url: "https://www.csestack.org/meera-machine-learning-assistant-bot-nlp/",
                tooltip: "Article on MEERA on CSEStack"
            },
            {
                type: "website",
                url: "https://www.ameykamat.in/MEERA/",
                tooltip: "Documentation"
            }
        ]
    },
    {
        name: "Event Notifier",
        oneLiner: "Automated Notifications For Events",
        tags: ["nodejs", "mailgun", "handlebars"],
        organisation: "Personal",
        image: EVENT_NOTIFIER,
        links: [
            {
                type: "github",
                url: "https://github.com/AmeyKamat/EventNotifier",
                tooltip: "Event Notifier on GitHub"
            }
        ]
    },
    {
        name: "Project X",
        oneLiner: "3D Toolpath Generator for 3-Axis CNC",
        tags: ["c++", "ai"],
        organisation: "NIT Goa",
        image: PROJECT_X,
        links: [
            {
                type: "github",
                url: "https://github.com/TanayGahlot/ToolpathGenerator",
                tooltip: "Toolpath Generator on GitHub"
            },
            {
                type: "article",
                url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7474860&isnumber=7474713",
                tooltip: "IEEE Conference Paper on Project X"
            }
        ]
    },
    {
        name: "FSM",
        oneLiner: "Office Space Management Solution",
        tags: ["java", "mysql", "angular"],
        organisation: "Barclays",
        image: FSM,
        links: [
            {
                type: "github",
                url: "https://github.com/AmeyKamat/FSM",
                tooltip: "Floor Space Management on GitHub"
            }
        ]
    },
    {
        name: "RuralIVRS",
        oneLiner: "IVRS System for Farm Products Trade",
        tags: ["java", "mysql"],
        organisation: "IIT Bombay",
        image: RURAL_IVRS,
        links: [
            {
                type: "repository",
                url: "https://bitbucket.org/iitb-gr/ruralict/src/master/",
                tooltip: "RuralIVRS on BitBucket"
            }
        ]
    },
    {
        name: "LetsSankalp",
        oneLiner: "NGO - Donator Crowd Sourcing Platform",
        tags: ["python", "gae"],
        organisation: "ConnecTree",
        image: LETS_SANKALP,
        links: [
            {
                type: "github",
                url: "https://github.com/CrowdSourcingReport/CrowdSourcingReport",
                tooltip: "LetsSankalp on GitHub"
            }
        ]
    }
]

export default projects