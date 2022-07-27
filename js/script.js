let btn = document.getElementById("new-quote-btn");

let output = document.getElementById("paragraph");

let quote = [
  '"The way to get started is to quit talking and begin doing." - Walt Disney',
  '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
  '"Life is what happens when you\'re busy making other plans." -John Lennon',
  "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\" - James Cameron",
  '"If life were predictable it would cease to be life, and be without flavor." - Eleanor Roosevelt',
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin',
  '"It is during our darkest moments that we must focus to see the light." - Aristotle',
  '"Whoever is happy will make others happy too." - Anne Frank',
  '"Do not go where the path may lead, go instead where there is no path and leave a trail." - Ralph Waldo Emerson',
  '"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." - Henry Ford',
  '"Whether you think you can or you think you can’t, you’re right."- Henry Ford',
];

btn.addEventListener("click", function () {
  let randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
});
