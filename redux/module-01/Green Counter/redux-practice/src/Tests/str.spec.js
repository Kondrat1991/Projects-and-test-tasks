import {expect} from 'chai';
import counter from '../reducers/counterReducer';

describe('counter reducer', () => {
 it('reset', () => {
     const result = counter(5,{type: 'RESET'});
     expect(result).to.be.a('number');
     expect(result).equal(0);
 });
  it('decrement', () => {
  const result = counter(6, {type: 'DECREMENT'});
      expect(result).to.be.a('number');
      expect(result).equal(5);
  });
    it('increment', () => {
        const result = counter(6, {type: 'INCREMENT'});
        expect(result).to.be.a('number');
        expect(result).equal(7);
    })

});


