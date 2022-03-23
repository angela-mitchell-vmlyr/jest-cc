const { sum, compileAndroidCode } = require('./sum');

describe('sum', () => {
    it('should add 1 + 2 to equal 3', () => {
        // arrange
        const expectedSum = 3;
    
        // act
        const actualSum = sum(1,2);
    
        // assertions

        // TIP: toBe compares primitive values (string, number, bigint, boolean, undefined, symbol, null)
        // TIP: don't use toBe for floating-point numbers (i.e. decimal numbers), due to rounding; use .toBeCloseTo instead
        expect(actualSum).toBe(expectedSum);
    });
    
    it('should assign an object', () => {
        // arrange
        const object = {};

        // assertions

        // TIP: use toEqual to perform deep equality (esp. arrays and objects)
        expect(object).toEqual({});
    });
});

describe('truthy or falsy', () => {
    it('should be null', () => {
        // arrange
        const n = null;

        // TIP: it is best practice to NOT have more than one expect; helps debug what exactly is breaking in your code
        // assertions
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
    });
});

describe('numbers', () => {
    it('should add 2 + 2', () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    });

    it('should add floating-point numbers', () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3);
    });
});

describe('strings', () => {
    it('there is no "I" in "team"', () => {
        expect("team").not.toMatch(/I/);
    });
});

describe('arrays', () => {
    it('should contain milk', () => {
        const shoppingLists = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk'
        ];

        expect(shoppingLists).toContain('milk');
    });
});

describe('exceptions', () => {
    it('should compile android', () => {
        // expect(() => compileAndroidCode()).toThrow();
        // expect(() => compileAndroidCode()).toThrow(Error);
        expect(() => compileAndroidCode()).toThrow(
            "you are using the wrong JDK"
        );
    });
});