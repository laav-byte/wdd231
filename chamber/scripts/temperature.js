// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const day1Temp = document.querySelector('#day1-temp');
const day2Temp = document.querySelector('#day2-temp');
const day3Temp = document.querySelector('#day3-temp');

const day1Date = document.querySelector('#day1-date');
const day2Date = document.querySelector('#day2-date');
const day3Date = document.querySelector('#day3-date');

const myKeys = "7df89c5ffda3f3adec897900eab46c51"
const myLat = "16.616049952627012"
const myLong = "120.32327680991591"


const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKeys}&units=imperial`
const myForcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKeys}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing onlys
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = desc;
}

async function forecastFetch() {
    try {
        const response = await fetch(myForcastUrl);

        if (response.ok) {
            const data = await response.json();

            console.log(data);

            displayForecast(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {

    // Tomorrow
    const day1 = data.list[8];

    // Day after tomorrow
    const day2 = data.list[16];

    // Third day
    const day3 = data.list[24];

    // Convert dates
    const options = {
        month: 'short',
        day: 'numeric'
    };

    day1Date.textContent =
        new Date(day1.dt_txt).toLocaleDateString('en-US', options);

    day2Date.textContent =
        new Date(day2.dt_txt).toLocaleDateString('en-US', options);

    day3Date.textContent =
        new Date(day3.dt_txt).toLocaleDateString('en-US', options);

    // Temperatures
    day1Temp.innerHTML =
        `${Math.round(day1.main.temp)}&deg;F`;

    day2Temp.innerHTML =
        `${Math.round(day2.main.temp)}&deg;F`;

    day3Temp.innerHTML =
        `${Math.round(day3.main.temp)}&deg;F`;
}

apiFetch();
forecastFetch();