const nav_icon = document.querySelector(".nav_icon");
const navigation_list = document.querySelector(".navigation_list");
const open = document.querySelector(".open");



nav_icon.addEventListener("click", () => {
    nav_icon.classList.toggle("open");

    if (nav_icon.classList.contains("open")) {
        navigation_list.style.display = "block";
    }
    else {
        navigation_list.style.display = "none";
    }
});

