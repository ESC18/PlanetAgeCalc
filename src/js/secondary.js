//This is a secondary JS file - you can rename it as you wish - just make sure to correctly import it into
//Index.JS file. Here is an example of exporting:
/*
//CLASS/CONSTRUCTOR:
export default class Blank {
    constructor(here,there) {
        this.here = here;
        this.there = there;
    }
}
//OBJECT PROTOTYPE FUNCTION:
    hereBlank() {
        return this.here * this.there;
    }
*/

export default class personsAge {
    constructor(age, secondAge, futureAge) {
        this.age = age;
        this.secondAge = secondAge;
        this.futureAge = futureAge;
    }
    earthAge() {
        return parseInt(this.age / 1)  + " Years Old";
    }
    mercuryAge() {
        return parseFloat(this.age / 0.24) + " Years Old";
    }
    venusAge() {
        return parseFloat(this.age / 0.62) + " Years Old";
    }
    marsAge() {
        return parseFloat(this.age / 1.88) + " Years Old";
    }
    jupiterAge() {
        return parseFloat(this.age / 11.86) + " Years Old"; 
    }
    //Methods used to determine difference in years
    earthPassedYears() {
        return parseInt(this.secondAge / 1)  - parseInt(this.age / 1) + " Years have passed";
    }
    mercuryPassedYears() {
        return parseFloat(this.secondAge / 0.24) - parseInt(this.age / 0.24) + " Years have passed";
    }
    venusPassedYears() {
        return parseFloat(this.secondAge / 0.62) - parseInt(this.age / 0.62) + " Years have passed";
    }
    marsPassedYears() {
        return parseFloat(this.secondAge / 1.88) - parseInt(this.age / 1.88) + " Years have passed";
    }
    jupiterPassedYears() {
        return parseFloat(this.secondAge / 11.86) - parseInt(this.age / 11.86) + " Years have passed"; 
    }
    //Methods used to determine difference in years for present and future years
    earthFutureYears() {
        return parseInt(this.futureAge / 1)  - parseInt(this.age / 1) + " Years to go";
    }
    mercuryFutureYears() {
        return parseFloat(this.futureAge / 0.24) - parseInt(this.age / 0.24) + " Years to go";
    }
    venusFutureYears() {
        return parseFloat(this.futureAge / 0.62) - parseInt(this.age / 0.62) + " Years to go";
    }
    marsFutureYears() {
        return parseFloat(this.futureAge / 1.88) - parseInt(this.age / 1.88) + " Years to go";
    }
    jupiterFutureYears() {
        return parseFloat(this.futureAge / 11.86) - parseInt(this.age / 11.86) + " Years to go"; 
    }
}