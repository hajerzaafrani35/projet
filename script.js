document.addEventListener("DOMContentLoaded", function() {
    // Object associating each link with the corresponding section
    const menuLinks = {
        "menu": "#coffee-section",          // Link Menu -> Section Coffee
        "about-us": "#testimonial-section", // Link About Us -> Section Testimonial
        "contact-us": "#footer",            // Link Contact Us -> Section Footer
        "opening-hours": "#opening-hours"   // Link Opening Hours -> Section Opening Hours
    };

    // Loop through each link and add a click event
    for (const [linkId, targetId] of Object.entries(menuLinks)) {
        const link = document.querySelector(`#${linkId}`);  // Select the link by ID
        
        if (link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();  // Prevent the default anchor behavior

                const targetSection = document.querySelector(targetId); // Select the section by ID
                if (targetSection) {
                    // Scroll to the target section with smooth behavior
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    }
});
