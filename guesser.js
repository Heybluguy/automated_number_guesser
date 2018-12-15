function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

var upTo = 1000;
var secretNumber = getRandomNumber(upTo);
var guess;
var attempts = 0;

while (secretNumber !== guess) {
  if (isNaN(guess)) {
    guess = getRandomNumber(upTo);
  } else {
    attempts += 1;
    guess = getRandomNumber(upTo);
  }
}

document.write("<p>" + "it took " + attempts + " attempts," + "<p>");
document.write("<p>" + "but the secret number is " + guess + "<p>");