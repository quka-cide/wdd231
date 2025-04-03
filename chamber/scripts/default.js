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

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById('sidebar-message');

    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if(!lastVisit) {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit, 10);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert ms to days

        if(daysDifference < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            sidebar.textContent = `You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate);
});
