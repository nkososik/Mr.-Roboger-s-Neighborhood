// Business Logic

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