// Example of test below complete with import statement.

import personsAge from './../src/js/secondary';

describe("Blank", () => {
    let age; 
    
    beforeEach(() => {
        age = new personsAge(10,20,30);
    });

    test("Should take the persons age and give us the appropiate", () => {
        expect(age.earthAge()).toEqual(10 + " Years Old");
        expect(age.mercuryAge()).toEqual(41.66666666666667 + " Years Old");
        expect(age.venusAge()).toEqual(16.129032258064516 + " Years Old");
        expect(age.marsAge()).toEqual(5.319148936170213 + " Years Old");
        expect(age.jupiterAge()).toEqual(0.8431703204047218  + " Years Old");
    });
    test("Should take the persons current and past age and produce the difference in planetary years", () => {
        expect(age.earthPassedYears()).toEqual(10 + " Years have passed");
        expect(age.mercuryPassedYears()).toEqual(42.33333333333334 + " Years have passed");
        expect(age.venusPassedYears()).toEqual(16.258064516129032 + " Years have passed");
        expect(age.marsPassedYears()).toEqual(5.638297872340425 + " Years have passed");
        expect(age.jupiterPassedYears()).toEqual(1.6863406408094437 + " Years have passed");
    });
    test("should take the persons current and future age and produce the difference in planetary years", () => {
        expect(age.earthFutureYears()).toEqual(20 + " Years to go");
        expect(age.mercuryFutureYears()).toEqual(84 + " Years to go");
        expect(age.venusFutureYears()).toEqual(32.38709677419355 + " Years to go");
        expect(age.marsFutureYears()).toEqual(10.957446808510639 + " Years to go");
        expect(age.jupiterFutureYears()).toEqual(2.5295109612141653 + " Years to go");
    })
});
