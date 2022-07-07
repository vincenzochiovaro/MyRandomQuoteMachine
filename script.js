// this var will access our button when we click on it
let btn = document.getElementById('new-quote-btn');
// also we need an output 
let output = document.getElementById('paragraph');
// now we need to create an array of quotes
let quote = [

    '"The way to get started is to quit talking and begin doing." - Walt Disney',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
    '"Life is what happens when you\'re busy making other plans." -John Lennon',
    '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." - James Cameron',
    '"If life were predictable it would cease to be life, and be without flavor." - Eleanor Roosevelt',
];

// now we need to add the actual "event" to our button once pressed 
btn.addEventListener('click', function() {

    let randomQuote = quote[Math.floor(Math.random() *quote.length)]  // we assigning var randomquote the value of quote
    output.innerHTML = randomQuote;  // this is the output where the random quote from our array will be shown
});
