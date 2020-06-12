// Business Logic
const beep = 'Beep!'
const boop = 'Boop'
const welcome = "Won't you be my neighbor?"
//function to create and push into range array from 0 to user input
const rangeConverter = function(numberInput) {
  let range = []; //establish blank array
  for (let i = 0; i <= numberInput; i++) {
    range.push(i.toString()); // pushes into range array and converts elements to string
  };
//function to replace numbers in spec sheet with specified variables above
  const stringInputs = range.map(function(element) {
    if (element.includes('3')) {
      return element = welcome;
    } else if (element.includes('2')) {
      return element = boop;
    } else if (element.includes('1')) {
      return element = beep;
    }

  });

console.log(stringInputs)
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