const current_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

const today = new Date();

current_year.innerHTML = `<span>${today.getFullYear()}</span>`;
last_modified.innerHTML = `<span class="highlight">Last Modification: ${document.lastModified}</span>`

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});