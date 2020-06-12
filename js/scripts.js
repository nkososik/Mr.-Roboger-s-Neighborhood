// Business Logic

// User Interface Logic
$(document).ready(function() {
  $('form#userNumber').submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($('input[name=number]').val());
    console.log(numberInput);
  })
});