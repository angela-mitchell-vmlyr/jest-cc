// TIP: It is best to mock HTTP requests/API calls instead of making an actual request for testing
// ensure you are getting an object back and can test the function's implementation

const customForEach = (items, callback) => {
    for(let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const mock = (x) => 42 + x;

describe('mocks', () => {
    it('mock callback', () => {
        const mockedCallback = jest.fn((x) => {
            return 42 + x;
        });

        customForEach([0,1], mockedCallback);
        // [call1, call2] => [[0], [1]]

        expect(mockedCallback.mock.calls.length).toBe(2);

        // grabs first value of first call
        expect(mockedCallback.mock.calls[0][0]).toBe(0);

        // grabs first value of second call
        expect(mockedCallback.mock.calls[1][0]).toBe(1);

        expect(mockedCallback.mock.results[0].value).toBe(42);

        expect(mockedCallback.mock.results[1].value).toBe(43);
    });

    it('mock return', () => {
        const mock = jest.fn();

        mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('Hello');

        const results1 = mock();
        const results2 = mock();
        const results3 = mock();

        expect(results1).toBe(true);
        expect(results2).toBe(false);
        expect(results3).toBe('Hello');
    });
});
