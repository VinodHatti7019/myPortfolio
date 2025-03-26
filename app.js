document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const closeIcon = document.querySelector(".close-icon");

    function checkScreenSize() {
        if (window.innerWidth >= 1024) {
            menuIcon.style.display = "none"; // Hide on desktop
            sidebar.classList.remove("close-sidebar"); // Keep sidebar open on desktop
        } else {
            menuIcon.style.display = "block"; // Show on mobile
            sidebar.classList.add("close-sidebar"); // Ensure sidebar starts closed in mobile
        }
    }

    // Run check on page load and resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Open Sidebar (Mobile Mode)
    menuIcon.addEventListener("click", function () {
        sidebar.classList.add("open-sidebar");
        sidebar.classList.remove("close-sidebar");
    });

    // Close Sidebar
    closeIcon.addEventListener("click", function () {
        sidebar.classList.remove("open-sidebar");
        sidebar.classList.add("close-sidebar");
    });
});



// scroll down

document.addEventListener("DOMContentLoaded", function () {
    const scrollDownIcon = document.querySelector(".scroll-down");
    
    scrollDownIcon.addEventListener("click", function () {
        const nextSection = document.querySelector(".info-section"); // Change this to your next section

        if (nextSection) {
            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});