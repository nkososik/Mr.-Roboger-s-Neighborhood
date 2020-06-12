// Business Logic
const beep = 'Beep!'
const boop = 'Boop'
const welcome = "Won't you be my neighbor?"

const rangeConverter = function(numberInput) {
  let range = [];
  for (let i = 0; i <= numberInput; i++) {
    range.push(i.toString()); // pushes range 
  };

console.log(range);
console.log(numberInput);
};

// User Interface Logic
$(document).ready(function() {
  $('form#userNumber').submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($('input[name=number]').val());

    if (!numberInput || numberInput < 0) {
      alert("Enter a friendly positive number wouldn't ya neighbor?");
      return;
    }

    const convertedRange = rangeConverter(numberInput);

    $('#rangeResult').show();
    $('#userInput').text(numberInput);
    $('#rangeOutput').text(convertedRange);
  })
});