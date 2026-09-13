function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "0";
        nav.style.background = "#080808";
        nav.style.padding = "25px";
        nav.style.width = "220px";
    }
}