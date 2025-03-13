const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birth_date = document.createElement("p");
        let birth_place = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        birth_date.textContent = `Date of Birth: ${prophet.birthdate}`;
        birth_place.textContent = `Place of Birth: ${prophet.dirthplace}`;

        card.appendChild(fullName);
        card.appendChild(birth_date);
        card.appendChild(birth_place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();