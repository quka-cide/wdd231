const current_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

const today = new Date();

current_year.innerHTML = `<span>${today.getFullYear()}</span>`;
last_modified.innerHTML = `<span class="highlight">Last Modification: ${document.lastModified}</span>`;

const hamburger = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("open");
    navigation.classList.toggle("open");
});

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const cards = document.querySelector(".cards");

grid.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
})

list.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
})

async function fetchData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let company_name = document.createElement("h3");
        let company_logo = document.createElement("img");
        let company_address = document.createElement("p");
        let company_phone = document.createElement("p");
        let company_website = document.createElement("a");

        company_name.textContent = `${company.name}`;
        company_logo.setAttribute("src", company.image);
        company_logo.setAttribute("alt", `Logo of ${company.name}`);
        company_logo.setAttribute("loading", "lazy");
        company_logo.setAttribute("width", "200");
        company_address.textContent = `${company.address}`;
        company_phone.textContent = `${company.phone}`;
        company_website.setAttribute("href", company.website)
        company_website.textContent = `${company.website}`;


        card.appendChild(company_logo);
        card.appendChild(company_name);
        card.appendChild(company_address);
        card.appendChild(company_phone);
        card.appendChild(company_website);

        cards.appendChild(card);

    });
}

fetchData()