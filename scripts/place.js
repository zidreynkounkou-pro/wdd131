const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;

const temperature = document.querySelector('#temperature');
const conditions = document.querySelector('#conditions');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#windchill');
const weatherIcon = document.querySelector('#weather');

const fixtTemperature = 30;
const fixedWind = 10;
temperature.textContent = fixtTemperature + '°F';
wind.textContent = fixedWind + 'mph';
conditions.textContent = 'Broken clouds';


function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

        return windChill.toFixed(1);
    }
    return 'N/A';
}

windChill.textContent = calculateWindChill(fixtTemperature, fixedWind) + "°F";