//This is the main JS file - Not recommended to delete imports.
import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import personsAge from './js/secondary';
// Business logic 
function calculateAge(selection, currentAge, pastAge, futureAge) {
    const age = new personsAge(currentAge);

    const result = {};

    switch (selection) {
    case 'present':
        result['Earth'] = age.earthAge();
        result['Mercury'] = age.mercuryAge();
        result['Venus'] = age.venusAge();
        result['Mars'] = age.marsAge();
        result['Jupiter'] = age.jupiterAge();
        break;
    case 'future':
        result['Earth'] = age.earthFutureYears(futureAge);
        result['Mercury'] = age.mercuryFutureYears(futureAge);
        result['Venus'] = age.venusFutureYears(futureAge);
        result['Mars'] = age.marsFutureYears(futureAge);
        result['Jupiter'] = age.jupiterFutureYears(futureAge);
        break;
    case 'past':
        result['Earth'] = age.earthPassedYears(pastAge);
        result['Mercury'] = age.mercuryPassedYears(pastAge);
        result['Venus'] = age.venusPassedYears(pastAge);
        result['Mars'] = age.marsPassedYears(pastAge);
        result['Jupiter'] = age.jupiterPassedYears(pastAge);
        break;
    default:
        result['Error'] = 'Invalid option selected';
    }

    return result;
}


// UI logic
function displayResult(result) {
    const resultElement = document.getElementById('result');
    let resultHTML = '';

    for (const planet in result) {
        resultHTML += `<p>${planet}: ${result[planet]}</p>`;
    }

    resultElement.innerHTML = resultHTML;
}

function submitFunc(event) {
    event.preventDefault();
    const selection = document.querySelector("select").value;
    const currentAge = document.getElementById("current").value;
    const pastAge = document.getElementById("past").value;
    const futureAge = document.getElementById("future").value;

    const result = calculateAge(selection, currentAge, pastAge, futureAge);
    displayResult(result);
}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", submitFunc);
});