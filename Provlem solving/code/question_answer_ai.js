/*
    tack stack :
        - javascript
        - node js
        - bash

    users :
        - user ask a question.
        - chatbot search the question on database.
        - answer the question.

    program:
        - user input his question.
        - ai search the question on database.
        - if ai found question on database it check which question is asked and answer the question.
        - if ai not fund question on database it check some keyword on question is if key word is mach ai answer the question base on keyword 
        - if ai not found any keyword that mach ai tell : sorry i not understand what you tell! 
        - function stop

*/


// start -

const readline = require("readline");

// question database
let database = [
    {
        id: 1,
        question: "hi",
        answer: "Hello! It's great to meet you. I'm firebox, your AI thought partner."
    }, {
        id: 2,
        question: "hello",
        answer: "Hi! It's great to meet you. I'm firebox, your AI thought partner."
    }, {
        id: 3,
        question: "ho are you",
        answer: "Hello! It's great to meet you. I'm firebox, your AI thought partner."
    }, {
        id: 4,
        question: "how are you",
        answer: "I'm doing great, thank you for asking! I'm feeling energized and ready to help."
    }, {
        id: 5,
        question: "what is your name",
        answer: "Hello! It's great to meet you. My name is firebox, your AI thought partner."
    }, {
        id: 6,
        question: "how old are you",
        answer: `That's a bit of a tricky question to answer in human years!
                Since I'm an AI, I don't have a birthday or an age in the traditional sense. However, I can tell you that I am the firebox javascript version, and I'm currently operating in my 2026 version.`
    }, {
        id: 7,
        question: "nice to meet you",
        answer: "Nice to meet you too! I'm really glad we've connected."
    }, {
        id: 8,
        question: "tell me about bangladesh",
        answer: `
        Bangladesh is a land of incredible resilience, vibrant culture, and rapid transformation. As of early 2026, the country is at a historic crossroads—politically, economically, and socially.

Here is an overview of Bangladesh today:

1. A Moment of Political Transition
Bangladesh is currently undergoing one of its most significant political shifts since its independence in 1971.

The Interim Government: Following the "July Revolution" in 2024, the country has been led by an interim government headed by Nobel Laureate Dr. Muhammad Yunus.

Upcoming Elections: National elections are scheduled for February 12, 2026. This is a highly anticipated event as the country moves toward a "Second Republic," with major reforms being discussed regarding the constitution and the electoral system.

New Political Landscape: With the long-dominant Awami League currently suspended from activities, the political scene is now a competition between the Bangladesh Nationalist Party (BNP) and a new wave of actors, including student-led groups like the National Citizen Party (NCP) and Jamaat-e-Islami.

2. Economy & "LDC Graduation"
Bangladesh has been one of the fastest-growing economies in South Asia, though it faces a challenging 2026.

The 2026 Milestone: This year marks Bangladesh’s official graduation from the Least Developed Country (LDC) category. While this is a badge of honor reflecting years of growth, it also means the country will lose certain "duty-free" trade preferences, putting pressure on its vital garment industry to innovate.

Current Outlook: GDP growth for 2026 is projected at around 5%. While the industrial sector (garments, textiles) remains the backbone, the country is pushing to diversify into technology and higher-value manufacturing.

Challenges: Like much of the world, Bangladesh is battling high inflation (around 8–9%) and working to stabilize its foreign exchange reserves.

3. Geography & Environment
Known as the "Land of Rivers," Bangladesh is defined by its unique geography.

The Delta: It sits on the world's largest river delta, formed by the Ganges (Padma), Brahmaputra (Jamuna), and Meghna rivers.

Natural Wonders: It is home to the Sundarbans, the world's largest mangrove forest (and home to the Royal Bengal Tiger), and Cox’s Bazar, the world’s longest natural sea beach.

Climate Resilience: Because it is low-lying, Bangladesh is on the front lines of climate change. However, it is also a global leader in disaster preparedness and adaptation.

4. Culture & Society
The Language: The national identity is deeply rooted in the Bengali language. International Mother Language Day (February 21st) originated from the 1952 Language Movement in Dhaka.

Vibrant Traditions: From the soulful Baul music to the colorful Pahela Baishakh (Bengali New Year), the culture is a mix of ancient traditions and modern energy.

Innovation: Bangladesh is a pioneer in "Social Business" and microfinance (Grameen Bank) and is currently a global leader in Mobile Financial Services (like bKash), which has revolutionized how people handle money in rural areas.
        `
    }, {
        id: 9,
        question: "what is ai",
        answer: `
        In simple terms, Artificial Intelligence (AI) is the ability of a computer or a robot to perform tasks that usually require human intelligence. This includes things like learning from experience, recognizing patterns, making decisions, and understanding language.

Think of it this way: Traditional software follows a strict set of rules (like a recipe), but AI is more like a student—it looks at a mountain of data, finds the "patterns," and teaches itself how to solve a problem.

How AI Works: The "Brain" Behind the Tech
AI doesn't "think" the way we do; it processes math and statistics at an incredible speed.

Data: AI needs information to learn (like thousands of pictures of cats).

Algorithms: These are the sets of rules or "math" the AI uses to process that data.

Machine Learning (ML): This is the most common form of AI today. Instead of a human programmer writing every rule, the machine "learns" by identifying patterns in the data on its own.

Types of AI You See Every Day
We are currently in the era of Narrow AI—systems designed for one specific job.

Generative AI: This is what I am! It creates new content, like text, images, or music (e.g., Gemini, ChatGPT, Midjourney).

Recommendation Engines: When Netflix suggests a movie or Spotify picks a song, AI is analyzing your past behavior to predict what you’ll like next.

Virtual Assistants: Siri, Alexa, and Google Assistant use Natural Language Processing (NLP) to understand your voice.

Computer Vision: This allows your phone to unlock with your face or a self-driving car to "see" a stop sign.

The Big Future: 2026 and Beyond
As of January 2026, the focus has shifted from just "chatting" with AI to Agentic AI.

AI Agents: Instead of just answering a question, AI can now perform multi-step tasks for you—like booking a flight, managing your calendar, or writing and testing code autonomously.

Physical Integration: AI is becoming much more integrated into robotics and smart homes, moving from behind the screen into the physical world.
        `
    }, {
        id: 10,
        question: "what is javascript",
        answer: `
        JavaScript (JS) is a versatile, high-level programming language that is primarily known as the "language of the web."

If you think of a website like a building:

HTML is the structure (the walls and beams).

CSS is the design (the paint and wallpaper).

JavaScript is the electricity and plumbing—it makes things interactive and functional.

What Makes JavaScript Special?
JavaScript allows you to turn a static, "flat" webpage into a dynamic experience. Without it, you wouldn't be able to use Google Maps, refresh your Twitter feed without reloading the page, or see pop-up notifications.

Key Features of JavaScript
Client-Side Execution: Most JS runs directly in your web browser (Chrome, Safari, Firefox). This means the browser does the work, making it fast and responsive for the user.

Versatility: While it started for websites, it is now used for almost everything:

Websites: Animations, forms, and interactive maps.

Servers: Using Node.js, JS can run on the backend of a website.

Mobile Apps: Frameworks like React Native allow developers to build iPhone and Android apps using JS.

AI and Games: It is even used to build browser-based games and simple machine learning models.

Asynchronous Power: It can handle multiple tasks at once. For example, it can load new data in the background while you continue reading a post.

How it Works (The Logic)
JavaScript uses simple logic to control behavior. Here is a very basic example of what the code looks like:

JavaScript
let time = 2026;

if (time === 2026) {
  console.log("Welcome to the future of the web!");
} else {
  console.log("Welcome anyway!");
}
Why Everyone Uses It
As of 2026, JavaScript remains the most popular programming language in the world because it has a massive community and thousands of "libraries" (pre-written code) that make building complex apps much faster.
        `
    },
]

// keyword database
let keyword = [
    {
        id:1,
        key:"how",
        answer:"Sorry I don't know about this! "
    },{
        id:2,
        key:"what",
        answer:"Sorry I don't know about this!"
    },{
        id:3,
        key:"when",
        answer:"Sorry I don't know about this!"
    },{
        id:4,
        key:"why",
        answer:"Sorry I don't know about this!"
    },{
        id:5,
        key:"tell",
        answer:"Why i tell you ?"
    },
]

let Question = "";

// color text for terminal
const colorize = (...args) => ({
    black: `\x1b[30m${args.join(' ')}`,
    red: `\x1b[31m${args.join(' ')}`,
    green: `\x1b[32m${args.join(' ')}`,
    yellow: `\x1b[33m${args.join(' ')}`,
    blue: `\x1b[34m${args.join(' ')}`,
    magenta: `\x1b[35m${args.join(' ')}`,
    cyan: `\x1b[36m${args.join(' ')}`,
    white: `\x1b[37m${args.join(' ')}`,
    bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
    bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
    bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
    bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
    bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
    bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
    bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputQ() {
    rl.question('\x1b[33m-- Ask your question: \x1b[0m', function (x) {
        Question = x;
        rl.close();
        processQ(); // coll the process function
    });

}
inputQ();

function processQ() {
    console.log(colorize('You question: ', Question).bgBlack); // print: question ask by user

    let _question = Question.toLowerCase(); // convert capital teller to small letter

    let textsA = _question.split(' '); // split the text and make a array 

    // run loop for find question
    let i = 0;
    let checkQ = false;

    while (i<=database.length) {
        if (_question === database[i]?.question) {
            checkQ = true
            break
        }
        i++
    }

    if (checkQ) {
        console.log(colorize(database[i].answer).bgBlue);
        
    }else{
        console.log("Sorry I don't know about this!");
        
    }

    
    

}
// processQ();




