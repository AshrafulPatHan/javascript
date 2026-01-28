/*
    theme :
        - there are a arrary object and there are index section have some pragraf
        - user serch for a paragraf using title
        - ai think which pragraf user serch and one pragraf he sugist
    algrodim:
        - database varivle have [{title:"",pragraf:""}]
        - user serch a title
        - js splite the text that user input and make array fo this text
        - ai serch how many work is simeler to title text
        - if there are tow reselt ai give user only one result
*/

let database = [
    {
        id: 1,
        title: "creative writing",
        paragraph:
            "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.",
    },
    {
        id: 2,
        title: "tackle writers' block",
        paragraph:
            "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
    },
    {
        id: 3,
        title: "beginning writing routine",
        paragraph:
            "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
    },
    {
        id: 4,
        title: "writing challenge",
        paragraph:
            "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
    },
    {
        id: 5,
        title: "Can I use these random paragraphs for my project?",
        paragraph:
            "Yes! All of the random paragraphs in our generator are free to use for your projects.",
    },
    {
        id: 6,
        title: "Does a computer generate these paragraphs?",
        paragraph:
            "No! All of the paragraphs in the generator are written by humans, not computers. When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could.",
    },
];

const readline = require("readline"); // start project

let Question;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function inputQ() {
    rl.question("\x1b[33m-- Ask your question: \x1b[0m", function (x) {

        // check input
        if (x.toLowerCase() === "exit") {
            console.log("⚠️ App closed");
            rl.close();
            return;
        }

        Question = x;
        // rl.close(); // for close rl function
        processQ(); // coll the process function
    });
}
inputQ();

function processQ() {
    console.log(`\x1b[44mQuestion is: ${Question} \x1b[0m`) // output what i write

    let _question = Question.toLowerCase();// convart the quistion letter to Lower Case
    let _letter = _question.split(" "); // convart the text into array

    /*
        i need to make user input and all title as array
        then chech how much mach the tow array
        if any tow array (user input and title) is mach some point paragraf is show
        if any title is not mach with user input ai print: "Sorry I don't know about this!"
    */

    console.log("\x1b[47m\x1b[34mAnswer :\x1b[0m",`\x1b[42m${database[0].paragraph} \x1b[0m`,); // answer output

    inputQ(); // call the read function again
}
