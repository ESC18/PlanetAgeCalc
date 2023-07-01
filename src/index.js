//This is the main JS file - Not recommended to delete imports.
import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
//import personsAge from './js/secondary'
//EX: import Blank from '/.js/secondary.js';

// function ageCalc(age,secondAge,futureAge) {

// }



function submitFunc (event) {
    event.preventDefault();
    const selection = document.querySelector("select").value;
    const ageForm = document.querySelector("form");
    
    console.log(selection, ageForm);

}



window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", submitFunc);
});