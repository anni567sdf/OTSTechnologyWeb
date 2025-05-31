// Validación del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    if (!nombre || !email || !mensaje) {
        event.preventDefault(); // Evita que se envíe el formulario
        alert("Por favor, completa todos los campos antes de enviar.");
    } else {
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    }
});

// Menú hamburguesa
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

if (mobileMenu && navbar) {
    mobileMenu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}