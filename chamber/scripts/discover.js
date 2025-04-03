async function fetchData() {
    const response = await fetch("./data/interests.json");
    const data = await response.json();
    displayInterests(data.interests);
}

const displayInterests = (interests) => {
    interests.forEach(interest => {
        let card = document.createElement("section");
        let interest_name = document.createElement("h2");
        let figure = document.createElement("figure");
        let image = document.createElement("img")
        let interest_address = document.createElement("address");
        let interest_desc = document.createElement("p");
        let btn = document.createElement("button")

        interest_name.textContent = `${interest.name}`;
        image.setAttribute("src", interest.image);
        image.setAttribute("alt", `${interest.name}`);
        image.width = 300;
        image.height = 200;
        interest_address.textContent = `${interest.address}`;
        interest_desc.textContent = `${interest.description}`;
        btn.textContent = "learn more";

        figure.appendChild(image);
        card.appendChild(interest_name);
        card.appendChild(figure);
        card.appendChild(interest_address);
        card.appendChild(interest_desc);
        card.appendChild(btn )

        cards.appendChild(card);

    });
}

fetchData();