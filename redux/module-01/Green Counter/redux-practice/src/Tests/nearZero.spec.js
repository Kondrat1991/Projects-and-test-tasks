import {expect} from 'chai';
import minTemp from '../Functions/Temp';

describe('get closest to zero', () => {
    it('should be near to zero', ()=> {
        const result = minTemp(1,-2,-8, 4, 5);
        expect(result).to.be.a('number');
        expect(result).equal(1);
    });
    it('should be near to zero', ()=> {
        const result = minTemp(-12,-5,-137);
        expect(result).to.be.a('number');
        expect(result).equal(-5);
    });
    it('should be near to zero', ()=> {
        const result = minTemp(42,-5, 12, 21, 5, 24);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('should be near to zero', ()=> {
        const result = minTemp(42,5, 12, 21, -5, 24);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('should be near to zero', ()=> {
        const result = minTemp(-5, -4, -2, 12, -40, 4, 2, 18, 11, 5);
        expect(result).to.be.a('number');
        expect(result).equal(2);
    });
    it('should be near to zero', ()=> {
        const result = minTemp(0);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    });
});

