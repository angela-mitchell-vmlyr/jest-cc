describe('animals array', () => {
    // TIP: if you want beforeEach (or other setup and teardown configurations) to apply for ALL your test groups, move it outside your describe blocks

    // happens once before all tests
    // beforeAll(() => {
    //     console.log("BEFORE ALL");
    // });

    // happens before each test
    beforeEach(() => {
        console.log("BEFORE EACH")
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    });

    it("should add an animal to the end of the array", () => {
        animals.push('aligator');
        expect(animals[animals.length - 1]).toBe('aligator');
    });

    it("should add an animal to the beginning of the array", () => {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
    });

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    });

    // happens after each test
    // afterEach(() => {
    //     console.log('AFTER EACH');
    // });
});

describe('testing something else', () => {
    // it.only => ensure only the specified test runs
    it('true should be truthy', () => {
        expect(true).toBeTruthy();
    })
})