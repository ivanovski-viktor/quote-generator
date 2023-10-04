let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatama Gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: `"At his best, a man is the noblest of all animals; seperated from law and justice he is the worst."`,
    person: ` Aristotle`,
  },
  {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"I do the very best i know how - the very best I can; and I mean to
    keep on doing so until the end."`,
    person: ` Abraham Lincoln`,
  },
];
btn.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[randomNum].quote;
  person.textContent = quotes[randomNum].person;
});
