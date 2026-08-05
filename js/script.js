console.log("Abhinandan Sir Learning Portal loaded successfully.");

/* =================================
   CONTACT FORM → WHATSAPP
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const studentClass =
            document.getElementById("studentClass").value;

        const subject =
            document.getElementById("subject").value;

        const requirement =
            document.getElementById("requirement").value;

        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
`Hello Abhinandan Sir,

I would like to enquire about your classes.

*Student / Parent:* ${studentName}
*Class:* ${studentClass}
*Subject:* ${subject}
*Requirement:* ${requirement}

*Message:*
${message || "No additional message."}

Thank you.`;

        
        const whatsappNumber = "918796044036";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}









/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("mobile-active");

        menuToggle.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("mobile-active");

            menuToggle.classList.remove("active");

        });

    });

}