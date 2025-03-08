const hamburger = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("open");
    navigation.classList.toggle("open");
});