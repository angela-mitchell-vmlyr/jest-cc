const axios = require('axios');
const fetchData = require('./async');

// TIP: It is best to mock HTTP requests/API calls instead of making an actual request for testing
// ensure you are getting an object back and can test the function's implementation

describe('fetchData', () => {
    // it('should return correct todo', async () => {
    //     const todo = await fetchData(1);
    //     expect(todo.id).toBe(1);
    // })

    it('should mock axios', async () => {
        // spyOn => creates a mock function similar to jest.fn, but also tracks calls to object[methodName]; returns a Jest mock function
        // also calls the spied method by default (refer to docs on custom implementation)

        // spyOn(object, methodName, accessType?)
        // parameter 1 => an object = axios
        // parameter 2 => methodName
        // parameter 3? => accessType = 'get'

        jest.spyOn(axios, 'get').mockReturnValueOnce({
            data: {
                id: 1,
                todo: 'Get 1M Subs'
            }
        });

        const results = await fetchData(1);

        expect(results.todo).toBe('Get 1M Subs');
    });
});