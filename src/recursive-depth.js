module.exports = class DepthCalculator {
    calculateDepth(arr, acc = 1) {
      const filtered = arr.filter (arr => Array.isArray(arr)); // we need arrays
      if (filtered.length === 0) return acc; // no arrays => return accumulator that we already have
      else {
          const flats = filtered.map( xs => this.calculateDepth(xs) ) // we replace arrays with the flats of arrays
          const maxFlats = Math.max(...flats); // ... spreads the array and chooses max element
          return acc + maxFlats; // return the accumulator that we had + max flats
      }
    }
};