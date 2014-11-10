function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000
}

function multiply(a, b){
  return a * b;
}

function toNum(string){
  return string * 1;
}

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      previousResult += toNum($('#displayoutput').val());
      nextOperation = add;
      $('#displayoutput').val('');
      break;

    case '-':
      // handle -
      break;

    case '*':
      if(!!previousResult){
        previousResult *= toNum($('#displayoutput').val());
      } else {
      previousResult = toNum($('#displayoutput').val());
      }
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;

    case '/':
      // handle /
      break;

    case 'C':
      // handle C
      break;

    case '=':
      previousResult = nextOperation(previousResult, toNum($('#displayoutput').val()));
      $('#displayoutput').val(previousResult);
      previousResult = 0;
      break;

    case '+/-':
      // handle +/-
      break;

    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
