/* =========================================
   FERANMI DANIEL — PORTFOLIO INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            // Update the menu button's accessible label.
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        // Close the menu after a navigation link is selected.
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });

        // Close the menu when the user taps outside it.
        document.addEventListener("click", function (event) {
            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            }
        });

        // Close the menu when Escape is pressed.
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.focus();
            }
        });
    }

    // Automatically update the copyright year.
    const yearElement =
        document.querySelector("#current-year") ||
        document.querySelector(".current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
