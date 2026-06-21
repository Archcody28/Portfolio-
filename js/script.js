const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
`Hello, my name is ${name}.

Email: ${email}

Message:
${message}`;

    const phoneNumber = "2349030868849"; 
    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    form.reset();
});