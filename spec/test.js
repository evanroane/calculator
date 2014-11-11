/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    previousResult = undefined;
    nextOperation = undefined;
    $('#displayoutput').val('');
  });

  function type(){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg){
      press(arg);
    });
  }

  describe('Entering numbers', function(){

    describe('displayoutput', function(){
      it('should return the value of the display', function(){
        $('#displayoutput').val(1.23);
        assert.equal(displayOutput(), 1.23);

        $('#displayoutput').val(2.34);
        assert.equal(displayOutput(), 2.34);
      })
    })

    describe('type', function(){
      it('should display the number typeed', function(){
        assert.equal(displayOutput(), '');
        type(1);
        assert.equal(displayOutput(), 1);
      })
    })

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        type(7);
        type('.');
        type(8);
        type(9);
        assert.equal(displayOutput(), 7.89);
      });
    });
  });

describe('Multiple Equals', function(){
  describe('8 + 2 = =', function(){
    it('should be 12', function(){
      type('8', '+', '2', '=', '=')
      assert.equal(displayOutput(), '12');
    });
  });
  describe('8 + 2 =', function(){
    it('should be 10', function(){
      type('8', '+', '2', '=')
      assert.equal(displayOutput(), '10');
    });
  });
});

describe('Clearing Numbers', function(){
  describe('10 * 2 / 4 = =', function(){
    it('should be nothing', function(){
      type('10', '*', '2', '/', '4', '=', '=')
      assert.equal(displayOutput(), '1.25');
    });
  });
  describe('10 * 2 = = c', function(){
    it('should be nothing', function(){
      type('10', '*', '2', '=', '=', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('10 * 2 = c', function(){
    it('should be nothing', function(){
      type('10', '*', '2', '=', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('10 + 1 = c', function(){
    it('should be nothing', function(){
      type('10', '+', '1', '=', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('0 5 c', function(){
    it('should be nothing', function(){
      type('0', '5', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('0 . 5 c', function(){
    it('should be nothing', function(){
      type('0', '.', '5', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('0 5 c', function(){
    it('should be nothing', function(){
      type('0', '5', 'c')
      assert.equal(displayOutput(), '');
    });
  });
  describe('. 5  c', function(){
    it('should be nothing', function(){
      type('.', '5', 'c')
      assert.equal(displayOutput(), '');
    });
  });
});

describe('Changing Sign', function(){
  describe('0 +/-', function(){
    it('should be -0', function(){
      type('0', '+/-')
      assert.equal(displayOutput(), '-0');
    });
  });
  describe('+/- 0', function(){
    it('should be -0', function(){
      type('+/-', '0')
      assert.equal(displayOutput(), '-0');
    });
  });

  describe('+/- 3.14 + 4 =', function(){
    it('should be 0.86', function(){
      type('+/-', '3.14', '+', 4, '=')
      assert.equal(displayOutput(), '0.86');
    });
  });
  describe('3.14 + 4 +/- =', function(){
    it('should be -0.86', function(){
      type('3.14', '+', 4, '+/-', '=')
      assert.equal(displayOutput(), '-0.86');
    });
  });
  describe('3.14 +/- + 4 =', function(){
    it('should be 0.86', function(){
      type('3.14', '+/-', '+', 4, '=')
      assert.equal(displayOutput(), '0.86');
    });
  });
  describe('3.14 +/- is.....', function(){
    it('should be -3.14', function(){
      type('3.14', '+/-')
      assert.equal(displayOutput(), '-3.14');
    });
  });
  describe('-3.14 +/- is.....', function(){
    it('should be 3.14', function(){
      type('-3.14', '+/-')
      assert.equal(displayOutput(), '3.14');
    });
  });
});


describe('Division', function(){
  describe('3.14 / 0 =', function(){
    it('should be Infinity', function(){
      type('3.14', '/', '0', '=')
      assert.equal(displayOutput(), 'Infinity');
    });
  });
  describe('3 / 10 =', function(){
    it('should be 0.3', function(){
      type('3', '/', '10', '=')
      assert.equal(displayOutput(), '0.3');
    });
  });
  describe('6 / 5 =', function(){
    it('should be 1.2', function(){
      type('6', '/', '5', '=')
      assert.equal(displayOutput(), '1.2');
    });
  });
  describe('6 / 2 =', function(){
    it('should be 3', function(){
      type('6', '/', '2', '=')
      assert.equal(displayOutput(), '3');
    });
  });
});

describe('Subtracting', function(){
  describe('0.4 - 0.1 =', function(){
    it('should be 0.3', function(){
      type('.', 4, '-', '.', 1, '=')
      assert.equal(displayOutput(), '0.3');
    });
  });
  describe('-5 - 3 =', function(){
    it('should be -8', function(){
      type('-', 5, '-', 3, '=')
      assert.equal(displayOutput(), '-8');
    });
  });
  // describe('-5 - -3 =', function(){
  //   it('should be -2', function(){
  //     type('-', 5, '-', 3, 'flipShit', '=')
  //     assert.equal(displayOutput(), '-2');
  //   });
  // });
  describe('5 - 3 =', function(){
    it('should be 2', function(){
      type(5, '-', 3, '=')
      assert.equal(displayOutput(), '2');
    });
  });
  describe('3 - 5 =', function(){
    it('should be -2', function(){
      type(3, '-', 5, '=')
      assert.equal(displayOutput(), '-2');
    });
  });
  describe('1 - 1 =', function(){
    it('should be 0', function(){
      type(1, '-', 1, '=')
      assert.equal(displayOutput(), '0');
    });
  });
});

  describe('Multiplying', function(){
    describe('2 * 3 =', function(){
      it('should be 6', function(){
        type(2, '*', 3, '=')
        assert.equal(displayOutput(), '6');
      });
    });

    describe('1 * . 2 = .2', function(){
      it('should be .2', function(){
        type(1, '*', '.', 2, '=')
        assert.equal(displayOutput(), '0.2');
      });
    });

    describe('. 1 2 5 * . 5 =', function(){
      it('should be .0625', function(){
        type('.', 1, 2, 5, '*', '.', 5, '=')
        assert.equal(displayOutput(), '0.0625');
      });
    });

    describe('0 * 3 =', function(){
      it('should be .0', function(){
        type(0, '*', 3, '=');
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * 0 =', function(){
      it('should be .0', function(){
        type(3, '.', 1, 4, '*', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * . 0 =', function(){
      it('should be 0', function(){
        type(3, '.', 1, 4, '*', '.', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 * 4 * 2 =', function(){
      it('should be 24', function(){
        type(3, '*', 4, '*', 2, '=')
        assert.equal(displayOutput(), '24');
      });
    });

    describe('3 * 4 + 2 =', function(){
      it('should be 14', function(){
        type(3, '*', 4, '+', 2, '=')
        assert.equal(displayOutput(), '14');
      });
    });

    describe('7 + 6 * 5 =', function(){
      it('should be 65', function(){
        type(7, '+', 6, '*', 5, '=')
        assert.equal(displayOutput(), '65');
      });
    });

    describe('3 * 0 * 2 =', function(){
      it('should be 0', function(){
        type(3, '*', 0, '*', 2, '=')
        assert.equal(displayOutput(), '0');
      });
    });
  });

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '+', 2, '=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    xdescribe('7 . 8 9 + 1 = + 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '=', '+', 2, '=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('7 . 8 9 + 4 + 2 =', function(){
      it('should be 13.89', function () {
        type(7, '.', 8, 9, '+', 4, '+', 2, '=');
        assert.equal(displayOutput(), '13.89');
      });
    });
    describe('7 . 8 9 + 1 . 0 5 + 2 =', function(){
      it('should be 10.94', function () {
        type(7, '.', 8, 9, '+', 1, '.', 0, 5, '+', 2, '=');
        assert.equal(displayOutput(), '10.94');
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        type(7);
        type('.');
        type(8);
        type('9');
        type('+');
        type(1);
        type('.');
        type(0);
        type(0);
        type('+');
        type(2);
        type('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        type(1);
        type('+');
        type(1);
        type('=');
        assert.equal(displayOutput(), '2');
      });
    });
    describe('. 1 + . 2 =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type('+');
        type('.');
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.3');
      });
    });
    describe('. 1 1 1 1 1 1 1 1 + . 2 2 2 2 2 2 2 2 =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type('+');
        type('.');
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.33333333');
      });
    });
  });
})();
