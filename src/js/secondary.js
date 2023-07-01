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
    constructor(age) {
        this.age = age;
    }
    earthAge() {
        return parseInt(this.age / 1) + ' Years Old';
    }
    mercuryAge() {
        return parseFloat(this.age / 0.24) + ' Years Old';
    }
    venusAge() {
        return parseFloat(this.age / 0.62) + ' Years Old';
    }
    marsAge() {
        return parseFloat(this.age / 1.88) + ' Years Old';
    }
    jupiterAge() {
        return parseFloat(this.age / 11.86) + ' Years Old';
    }
    // Methods used to determine difference in years
    earthPassedYears(secondAge) {
        return parseInt(this.age / 1) - parseInt(secondAge / 1) + ' Years have passed';
    }
    mercuryPassedYears(secondAge) {
        return parseFloat(this.age / 0.24) - parseFloat(secondAge / 0.24) + ' Years have passed';
    }
    venusPassedYears(secondAge) {
        return parseFloat(this.age / 0.62) - parseFloat(secondAge / 0.62) + ' Years have passed';
    }
    marsPassedYears(secondAge) {
        return parseFloat(this.age / 1.88) - parseFloat(secondAge / 1.88) + ' Years have passed';
    }
    jupiterPassedYears(secondAge) {
        return parseFloat(this.age / 11.86) - parseFloat(secondAge / 11.86) + ' Years have passed';
    }
    // Methods used to determine difference in years for present and future years
    earthFutureYears(futureAge) {
        return parseInt(futureAge / 1) - parseInt(this.age / 1) + ' Years to go';
    }
    mercuryFutureYears(futureAge) {
        return parseFloat(futureAge / 0.24) - parseFloat(this.age / 0.24) + ' Years to go';
    }
    venusFutureYears(futureAge) {
        return parseFloat(futureAge / 0.62) - parseFloat(this.age / 0.62) + ' Years to go';
    }
    marsFutureYears(futureAge) {
        return parseFloat(futureAge / 1.88) - parseFloat(this.age / 1.88) + ' Years to go';
    }
    jupiterFutureYears(futureAge) {
        return parseFloat(futureAge / 11.86) - parseFloat(this.age / 11.86) + ' Years to go';
    }
}