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
    loadComponent("download-extension", "components/download-extension.html");
    loadComponent("faq-container", "components/faq.html");
    loadComponent("contact-info", "components/contact-info.html");
    loadComponent("footer-container", "components/footer.html");

    function initializeMenu() {
        const menuBtn = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const bars = menuBtn.querySelectorAll("span");
      
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            bars[0].classList.toggle("rotate-45");
            bars[1].classList.toggle("opacity-0");
            bars[2].classList.toggle("-rotate-45");
          });    
        }
      }
      
});

function initializeFeaturesTabs() {
    const tabs = document.querySelectorAll('.feature-tab');
    const features = document.querySelectorAll('.feature');
  
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach(btn => {
          btn.classList.remove('border-[#fb575b]', 'border-b-4', 'text-black');
          btn.classList.add('border-transparent', 'text-[#94959a]');
        });
        features.forEach(f => {
          f.classList.add('hidden');
          f.classList.remove('flex');
        });
  

        tab.classList.remove('text-[#94959a]', 'border-transparent');
        tab.classList.add('border-[#fb575b]', 'border-b-4', 'text-black');
        
        features[idx].classList.remove('hidden');
        features[idx].classList.add('flex');
      });
    });
  }
  