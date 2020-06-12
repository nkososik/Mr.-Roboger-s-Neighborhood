// Business Logic
function rangeConverter(numberInput) {
  let range = []; 
  for (let i = 0; i <= numberInput; i++) {
    range.push([i].toString()); 
  };

  let result = range.map(function(element) {
    if (element.includes('3')) {
      return element = '"Won\'t you be my neighbor?"';
    } else if (element.includes('2')) {
      return element = '"Boop"';
    } else if (element.includes('1')) {
      return element = '"Beep!"';
    } else {
      return element;
    }
  });
  return result.join(', '); 
};
// User Interface Logic
$(document).ready(function() {
  $('form#userNumber').submit(function(event) {
    event.preventDefault();

    const numberInput = parseInt($('input[name=number]').val());
    if (!numberInput || numberInput < 0 || numberInput > 10000) {
      alert("Enter a friendly positive number wouldn't ya neighbor? (please keep it no greater than 10,000 to keep my memory in tip-top shape!)");
      return;
    }

    let results = rangeConverter(numberInput);
    $('#rangeResult').show();
    $('#userInput').text(numberInput);
    $('#rangeOutput').text(results);
  })
});