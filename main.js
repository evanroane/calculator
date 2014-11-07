function displayOutput(){
  return $('#displayoutput').val();
}

var prior = 0;
var mem = []
var ops = []

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      prior += $('#displayoutput').val() * 1;
      $('#displayoutput').val('');
      break;

    case '-':
      prior += $('#displayoutput').val() * 1;
      $('#displayoutput').val('');
      break;

    case '*':
      // handle *
      break;

    case '/':
      // handle /
      break;

    case 'C':
      // handle C
      break;

    case '=':
      prior += $('#displayoutput').val() * 1;
      var shortNum = prior.toPrecision(8);
      prior = shortNum * 1;
      //math.roaund.index(8) in case shit gets fucked up
      $('#displayoutput').val(prior);
      prior = 0;
      break;

    case '+/-':
      // handle +/-
      break;

    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current += buttonValue);


  }
}
