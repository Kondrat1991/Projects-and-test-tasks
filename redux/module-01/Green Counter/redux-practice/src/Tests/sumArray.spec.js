import {expect} from 'chai';
import sumArray from '../Functions/sumArray';

describe('sumArray', () => {
    it('should sum arr of one element', () => {
        const result = sumArray([5]);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('should return sum of many el', () => {
        const result = sumArray([1,2,3,4,5]);
        expect(result).to.be.a('number');
        expect(result).equal(15);
    });
    it('should return an empty array', () => {
        const result = sumArray([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    })
    
});


