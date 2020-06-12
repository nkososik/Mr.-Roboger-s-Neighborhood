// Business Logic
const beep = 'Beep!'
const boop = 'Boop'
const welcome = "Won't you be my neighbor?"

function rangeConverter(numberInput) {
  let range = []; 
  for (let i = 0; i <= numberInput; i++) {
    range.push([i].toString()); 
  };

  let result = range.map(function(element) {
    if (element.includes('3')) {
      return element = welcome;
    } else if (element.includes('2')) {
      return element = boop;
    } else if (element.includes('1')) {
      return element = beep;
    } else {
      return element;
    }
  });
  return result.toString(); 
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

    let results = rangeConverter(numberInput);
    console.log(typeof results);

    $('#rangeResult').show();
    $('#userInput').text(numberInput);
    $('#rangeOutput').text(results);
  })
});