// Small interactions for the starter site
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const mobile = document.getElementById('mobileMenu');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
  });
}

// "Submit" the form by opening a pre-filled mailto link (static-site friendly)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(form.name.value.trim());
    const email = encodeURIComponent(form.email.value.trim());
    const msg = encodeURIComponent(form.message.value.trim());
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>

${msg}`);
    const href = `mailto:bosboarding@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = href;
    if (formMsg) {
      formMsg.textContent = "Opening your email app… if nothing happens, email bosboarding@gmail.com";
    }
  });
}
