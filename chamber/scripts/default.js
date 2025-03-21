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