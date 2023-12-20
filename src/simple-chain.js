const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * Your task is to create the object `chainMaker` that creates chains. 
 * The finished chain is a `string` and looks like this: `'( value1 )~~( value2 )~~( value3 )'`.
The `chainMaker` has several **methods** for creating chains and modifying them:
* `getLength` returns the current chain length as a number;
* `addLink(value)` adds a link containing a `string` representation of the `value` 
to the chain;
* `removeLink(position)` removes a chain link in the specified position;
* `reverseChain` reverses the chain;
* `finishChain` ends the chain and `returns` it.

`addLink`, `reverseChain` and `removeLink` methods are **chainable**, 
while the another ones are not. 
If `addLink` is called with no arguments, it adds an empty link (`'(  )'`) to the chain. 
If `removeLink` accepts **invalid** `position` (e.g. not a number, 
  or a fractional number, or corresponding to a nonexistent link), 
  it must throw an `Error` with message `You can't remove incorrect link!`. 
  After calling the `finishChain` method, the existing chain must be deleted, 
    as if an `Error` was thrown.

For example:

`chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`
 */

  /*
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }*/
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length
  },
  addLink(value) {
    let safeValue = value === null ? 'null' : value
    safeValue = safeValue !== undefined ? safeValue  : ' '
    this.links.push(`( ${safeValue} )`)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)
        || position < 1
        || position > this.links.length) {
          this.links = []
          throw new Error("You can't remove incorrect link!")
       }
    this.links = this.links.filter((e, i) => i !== position - 1)
    return this
  },
  reverseChain() {
    if (this.links.length) {
      const temp = []
      for (let i = this.links.length -1; i > -1; i--) {
        temp.push(this.links[i])
      }
      this.links = temp
    }
    return this
  },
  finishChain() {
    const res = this.links.join('~~')
    this.links = []
    return res
  }
};

module.exports = {
  chainMaker
};
