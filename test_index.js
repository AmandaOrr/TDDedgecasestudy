var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
      it('returns correct value of 5!', () => {
        //setup
        const inputNumber = 5;
        const expectedResult = 120;
        //exercise
        Calculate.factorial(inputNumber)
        //verify
        assert.equal(Calculate.factorial(inputNumber), expectedResult);

      });
    it('returns correct value of 3!', () => {
        //setup
        const inputNumber = 3;
        const expectedResult = 6;
        //exercise
        Calculate.factorial(inputNumber)
        //verify
        assert.equal(Calculate.factorial(inputNumber), expectedResult);
  });
  it('return correct value 0!', () =>{
      //setup
      const inputNumber = 0;
      const expectedResult = 1;
      //exercise
      Calculate.factorial(inputNumber);
      //verify
      assert.equal(Calculate.factorial(0), 1);
  });
});
});
