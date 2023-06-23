// Example of test below complete with import statement.

import Blank from './../src/js/secondary';

describe("Blank", () => {
    let blank; 
    
    beforeEach(() => {
        blank = new Blank();
    })

    test("blah blah blah blah blah", () => {
        expect(blank.x).toEqual();
        expect(blank.y).toEqual();
    });
})
