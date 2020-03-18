  module.exports = function countCats(matrix) {
    let flattened = matrix.flat(Infinity);
    let total = flattened.reduce((a, b) => a+(b === '^^' ? 1 : 0), 0)
    return total;
  };
    
    
   

