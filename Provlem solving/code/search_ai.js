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
        id:1,
        title: "Creative Writing",
        paragraph:"Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing."
    },
    {
        id:2,
        title: "Tackle Writers' Block",
        paragraph:"A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place."
    },
    {
        id:3,
        title: "Beginning Writing Routine",
        paragraph:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
    },
    {
        id:4,
        title: "Writing Challenge",
        paragraph:"Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph."
    },
    {
        id:5,
        title: "Can I use these random paragraphs for my project?",
        paragraph:"Yes! All of the random paragraphs in our generator are free to use for your projects."
    },
    {
        id:6,
        title: "Does a computer generate these paragraphs?",
        paragraph:"No! All of the paragraphs in the generator are written by humans, not computers. When first building this generator we thought about using computers to generate the paragraphs, but they weren't very good and many times didn't make any sense at all. We therefore took the time to create paragraphs specifically for this generator to make it the best that we could."
    },
]
