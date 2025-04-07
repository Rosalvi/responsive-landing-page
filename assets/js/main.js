function loadComponent(containerId, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
            if (callback) {
                callback();
            }
        })
        .catch(error => console.error(`Error cargando ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "components/header.html", initializeMenu);
    loadComponent("hero-container", "components/hero-section.html");
    loadComponent("features-container", "components/features.html");

    function initializeMenu() {
        const menuBtn = document.querySelector(".hamburger-menu");
        const navContainer = document.querySelector(".nav-container");

        if (menuBtn && navContainer) {
            menuBtn.addEventListener("click", function () {
                navContainer.classList.toggle("active");
            });
        } else {
            console.error("Menu button or nav container not found.");
        }
    }
});
