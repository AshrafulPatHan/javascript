//  by ai

const readline = require("readline");

// ------------------- DATABASE -----------------------
let database = [
    {
        id: 1,
        title: "creative writing",
        paragraph:
            "Generating random paragraphs can be an excellent way for writers to get their creative flow going..."
    },
    {
        id: 2,
        title: "tackle writers' block",
        paragraph:
            "A random paragraph can also be an excellent way for a writer to tackle writers' block..."
    },
    {
        id: 3,
        title: "beginning writing routine",
        paragraph:
            "Another productive way to use this tool to begin a daily writing routine..."
    },
    {
        id: 4,
        title: "writing challenge",
        paragraph:
            "Another writing challenge can be to take the individual sentences in the random paragraph..."
    },
    {
        id: 5,
        title: "Can I use these random paragraphs for my project?",
        paragraph:
            "Yes! All of the random paragraphs in our generator are free to use for your projects."
    },
    {
        id: 6,
        title: "Does a computer generate these paragraphs?",
        paragraph:
            "No! All of the paragraphs in the generator are written by humans, not computers..."
    }
];

// ------------------- READLINE SETUP -----------------------
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask() {
    rl.question("\n🔍 Search paragraph: ", (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("⚠️ App closed");
            rl.close();
            return;
        }

        let result = searchParagraph(input);

        if (!result) {
            console.log("\n❌ Sorry! I don't know about this.");
        } else {
            console.log("\n✅ Best Match (" + result.match + "% similarity):");
            console.log("📌 Title:", result.title);
            console.log("📝 Paragraph:", result.paragraph);
        }

        ask();
    });
}

// ------------------- SEARCH FUNCTION -----------------------
function searchParagraph(query) {
    let queryWords = query.toLowerCase().split(" ").filter(w => w.trim() !== "");

    let bestMatch = null;

    for (let item of database) {
        let titleWords = item.title.toLowerCase().split(" ");

        let matchCount = 0;

        for (let qw of queryWords) {
            for (let tw of titleWords) {
                if (tw.includes(qw) || qw.includes(tw)) {
                    matchCount++;
                }
            }
        }

        let similarity = Math.floor((matchCount / queryWords.length) * 100);

        if (similarity >= 50) {
            if (!bestMatch || similarity > bestMatch.match) {
                bestMatch = {
                    ...item,
                    match: similarity
                };
            }
        }
    }

    return bestMatch;
}

// ------------------- START PROGRAM -----------------------
ask();
