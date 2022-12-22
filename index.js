const Calculate = {
  factorial(inputNumber){
    //edga case logic
    if(inputNumber === 0){
      return 1;
    }
    //factorial loop
    for(let i = inputNumber - 1; i >= 1; i--){
        inputNumber *= i;
    }
    return inputNumber;
  }
}

module.exports = Calculate;
