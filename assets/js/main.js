function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error(`Error cargando ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "components/header.html");
    loadComponent("hero-container", "components/hero-section.html");
});
