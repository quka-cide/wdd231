const weather_section = document.querySelector('#weather');
const forecast_section = document.querySelector('#forecast');
const spotlights_section = document.querySelector('#spotlights');

const apiKey = "bd47d0f2e908bac912dc664001d426ee";
const city = "Vinnytsia";
const units = "metric";

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            displayWeatherResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayWeatherResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weather_section.innerHTML  = `
        <h2>Current Weather</h2>
        <img src=${iconsrc} alt=${desc} width='100' />
        <p>${Math.round(data.main.temp)}&deg;C<p/>
        <p>${desc}</p>
        <p>High: ${Math.round(data.main.temp_max)}&deg;C</p>
        <p>Low: ${Math.round(data.main.temp_min)}&deg;C</p>
        <p>Humidity: ${data.main.humidity}%</p>`;
}

async function getForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&appid=${apiKey}`);
        if(response.ok) {
            const data = await response.json();
            displayForecastResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function displayForecastResults(data) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    
    let forecastHTML = "<h2>Weather Forecast</h2>";
    
    for (let i = 0; i < 3; i++) {
        const forecastDate = new Date(today);
        forecastDate.setDate(today.getDate() + i);
        const dayName = daysOfWeek[forecastDate.getDay()];

        forecastHTML += `<p>${dayName}: ${Math.round(data.list[i].main.temp)}&deg;C</p>`;
    }
    
    forecast_section.innerHTML = forecastHTML;
}

async function getChamberMembers() {
    try {
        const response = await fetch("./data/members.json");
        const data = await response.json();
        
        const eligibleMembers = data.companies.filter(member => member.membership_level >= 2);

        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffled.slice(0, 3);
        
        selectedMembers.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.membership_level === 3 ? "Gold" : "Silver"}</p>
            `;
            spotlights_section.appendChild(memberCard);
        });
    } catch (error) {
        console.error("Error fetching chamber members:", error);
    }
}

getWeather();
getForecast();
getChamberMembers();