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
    constructor(age, secondAge) {
        this.age = age;
        this.secondAge = secondAge;
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
}