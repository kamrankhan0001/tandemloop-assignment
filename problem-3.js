
  function generateCustomOddSeries(a) {
    // reduce by 1 if even
    const count = a % 2 === 0 ? a - 1 : a;
    const result = [];
  
    for (let i = 0; i < count; i++) {
      // odd number formula
        result.push(2 * i + 1); 
    }
  
    return result.join(', ');
  }
  

  console.log(generateCustomOddSeries(1)); 
  console.log(generateCustomOddSeries(2)); 
  console.log(generateCustomOddSeries(3)); 
  console.log(generateCustomOddSeries(4)); 
  console.log(generateCustomOddSeries(5)); 
  console.log(generateCustomOddSeries(6)); 
  