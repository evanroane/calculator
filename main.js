function displayOutput(){
  $('#displayoutput').text(($('#displayoutput').val()));
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function Decimal(initialValue){
  this.value = initialValue * 1;
  this.mantissa = initialValue.toString().match(/[^.]*\.?(\d*)/)[1].length;

  this.minus = function(subtrahend){
    var difference = this.value - subtrahend.value;
    return new Decimal(difference);
  }

  this.plus = function(addend){
    var sum = this.value + addend.value;
    var digits = Math.max(this.mantissa, addend.mantissa);
    return new Decimal(sum.toFixed(digits));
  }

  this.times = function(multiplicand){
    var product = this.value * multiplicand.value;
    return new Decimal(product);
  }

  this.dividedBy = function(divisor){
    var quotient = this.value / divisor.value;
    var fixedQuotient = quotient.toFixed(9);
    return new Decimal(fixedQuotient);
  }

  // Option a
  this.toString = function(){
    return this.value.toString();
  }
}

function add(a, b){
  return a.plus(b); 
}

function subtract(a, b){
  return a.minus(b);
}

function multiply(a, b){
  return a.times(b);
}

function divide(a, b){
  return a.dividedBy(b);
}

function equal(){
return currentValue();
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

$('button').click(function(){
  press($('this').context.activeElement.value);
  console.log($('this').context.activeElement.value);
});

function press(buttonValue){
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');
      break;
    case '-':
      calculate();
      nextOperation = subtract;
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
      nextOperation = equal;
      $('#displayoutput').val(previousResult);
      break;
    case '+/-':
      if (($('#displayoutput').val()*1) < 0){
        $('#displayoutput').val($('#displayoutput').val() * -1);
      } else if ($('#displayoutput').val() === 0){ 
        $('#displayoutput').val(0);
      }else {
        $('#displayoutput').val('-' + $('#displayoutput').val());
      }
      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
  displayOutput();
}
