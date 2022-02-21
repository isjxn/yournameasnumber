const nameSum = require('../index.js');

const assert = require('assert');

describe('Tests with only alphabet characters', () => {
    describe('nameSum("bbb")', () => {
        it('should return 8', () => {
            assert.equal(nameSum("bbb"), 6);
        });
    });

    describe('nameSum("bababaacd")', () => {
        it('should return 17', () => {
            assert.equal(nameSum("bababaacd"), 17);
        });
    });

    describe('nameSum("aAbAaB")', () => {
        it('should return 7', () => {
            assert.equal(nameSum("aAbAaB"), 8);
        });
    });
});

describe('Tests with non alphabet characters', () => {
    describe('nameSum("a? b,a")', () => {
        it('should return 4', () => {
            assert.equal(nameSum("a? b,a"), 4);
        });
    });

    describe('nameSum(".öäz,ü,  ,,__-,A,,b,,Dd,)(&")', () => {
        it('should return 37', () => {
            assert.equal(nameSum(".öäz,ü,,,,A,,b,,Dd,)(&"), 37);
        });
    });
});