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
                setTimeout(callback, 0);
            }
        })
        .catch(error => console.error(`Error cargando ${filePath}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "components/header.html", initializeMenu);
    loadComponent("hero-container", "components/hero-section.html");
    loadComponent("features-container", "components/features.html", initializeFeaturesTabs);

    function initializeMenu() {
        const menuBtn = document.querySelector(".hamburger-menu");
        const navLinks = document.querySelector(".nav-links");
      
        if (menuBtn && navLinks) {
          menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("hidden");
          });
        } else {
          console.error("Menu button or nav links not found.");
        }
      }
      
});

function initializeFeaturesTabs() {
    const navItems = document.querySelectorAll('.feature-tab');
    const features = document.querySelectorAll('.feature');

    if (navItems.length === 0 || features.length === 0) {
        console.warn("No se encontraron tabs o secciones de features.");
        return;
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            features.forEach(f => f.classList.remove('active'));
            features[index].classList.add('active');
        });
    });
}
