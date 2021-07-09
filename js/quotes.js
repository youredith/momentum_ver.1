const quotes = [
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "-Oscar Wilde",
    },
    {
        quote: "In order to be irreplaceable, one must always be different",
        author: "-Coco Chanel",
    },
    {
        quote: "Fix the cause, not the symptom.",
        author: "-Steve Maguire",
    },
    {
        quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
        author: "-Kent Beck",
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "-Austin Freeman",
    },
    {
        quote: "Before software can be reusable it first has to be usable.",
        author: "-Ralph Johnson",
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "-Kent Beck",
    },
    {
        quote: "Before software can be reusable it first has to be usable.",
        author: "-Ralph Johnson",
    },    
    {
        quote: "One of my most productive days was throwing away 1000 lines of code.",
        author: "-Ken Thompson",
    },
    {
        quote: "The computer was born to solve problems that did not exist before.",
        author: "-Bill Gates ",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;