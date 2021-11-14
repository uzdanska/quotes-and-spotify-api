const quotesList = [
    {
        id: 1,
        q: "There is nothing noble in being superior to you fellow man; true nobility is being superior to your former self.",
        name: "Ernest Hemingway",
    },
    {
        id: 2,
        q: "Positive anything is better than negative nothing",
        name: "Elbert Hubbard",
    },
    {
        id: 3,
        q: "One small positive thought can change your whole day.",
        name: "Zig Ziglar",
    },
    {
        id: 4, 
        q: "Write it on your heart that every day is the best day in the year.",
        name: "Ralph Waldo Emerson",
    },
];

const quotes = document.getElementById("quates");
const author = document.getElementById("author");


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load intinal item
window.addEventListener('DOMContentLoaded', function(){
    showQuotes();
});

function showQuotes(){
    const item = quotesList[currentItem];
    quotes.textContent = item.q;
    author.textContent = item.name;
}
// show next 

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem >= quotesList.length ){
        currentItem = 0;
    }
    showQuotes();
})

// show prev quotes
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = quotesList.length - 1;
    }
    showQuotes();
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*quotesList.length);
    console.log(currentItem);
    showQuotes();
})
