// Example of test below complete with import statement.

import personsAge from './../src/js/secondary';

describe("Blank", () => {
    let age; 
    
    beforeEach(() => {
        age = new personsAge(10,20);
    });

    test("Should take the persons age and give us the appropiate", () => {
        expect(age.earthAge()).toEqual(10 + " Years Old");
        expect(age.mercuryAge()).toEqual(41.66666666666667 + " Years Old");
        expect(age.venusAge()).toEqual(16.129032258064516 + " Years Old");
        expect(age.marsAge()).toEqual(5.319148936170213 + " Years Old");
        expect(age.jupiterAge()).toEqual(0.8431703204047218  + " Years Old");
    });
});
