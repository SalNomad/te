const nav = document.querySelector('.nav');
const toggle = document.querySelector('.mobile-toggle');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.querySelector('#inquiry-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Inquiry from EU Tender Match website');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
      `Company: ${data.get('company')}\n` +
      `Email: ${data.get('email')}\n` +
      `Service interest: ${data.get('service')}\n\n` +
      `Message:\n${data.get('message')}`
    );
    window.location.href = `mailto:hello@eutendermatch.com?subject=${subject}&body=${body}`;
  });
}