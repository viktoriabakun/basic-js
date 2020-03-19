const chainMaker = {
   arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position > this.arr.length-1) {
      this.arr.length = 0;
      throw Error;
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr.length = 0;
    return result;
    }
};

module.exports = chainMaker;
