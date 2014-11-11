function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000;
}

function subtraction(a, b){
  return ((a * 100000000000000) - (b * 100000000000000))/100000000000000;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function changeSign(){
  return ($('#displayoutput').val() * -1);
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(!!nextOperation){
    previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}

function press(buttonValue){
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');
      break;
    case '-':
      calculate();
      nextOperation = subtraction;
      $('#displayoutput').val('');
      break;
    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;
    case '/':
      calculate();
      nextOperation = divide;
      $('#displayoutput').val('');
      break;
    case 'c':
      $('#displayoutput').val('');
      break;
    case '=':
      calculate();
      $('#displayoutput').val(previousResult);
      break;
    case '+/-':
      if ($('#displayoutput').val() < 0){
        $('#displayoutput').val($('#displayoutput').val() * -1);
      } else if ($('#displayoutput').val() === 0) {
        return '-' + $('#displayoutput').val();
      } else {
        $('#displayoutput').val('-' + $('#displayoutput').val());
      }

      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
