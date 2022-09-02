/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  state: [],
  getLength() {
    return this.state.length;
  },
  addLink(value = ' ') {
    value = new String(value);
    this.state.push(`( ${(value.toString())} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) ||
      position < 1 ||
      position >= this.getLength()) {
      this.state = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.state.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.state.reverse();
    return this;
  },
  finishChain() {
    let res = this.state.join('~~');
    this.state = [];
    return res;
  },
  finishChain2() {
    let res = this.state.join('~~');
    return res;
  }
};

module.exports = {
  chainMaker
};
