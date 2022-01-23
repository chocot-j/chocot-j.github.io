const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        author: "Marilyn Monroe",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
    },
    {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
        author: "Maurice Switzer, Mrs. Goose, Her Book",
    },
];

const chosenquote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteSpan = document.querySelector("#quote");
const authorSpan = document.querySelector("#author");

quoteSpan.innerText = chosenquote.quote;
authorSpan.innerText = `- ${chosenquote.author} -`;