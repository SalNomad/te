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
    const subject = encodeURIComponent('New EU Tender Match inquiry');
    const body = encodeURIComponent(
      `CONTACT DETAILS\n` +
      `Name: ${data.get('name')}\n` +
      `Email: ${data.get('email')}\n` +
      `Phone: ${data.get('phone')}\n\n` +
      `COMPANY PROFILE\n` +
      `Company name: ${data.get('company')}\n` +
      `Company website: ${data.get('website')}\n` +
      `City: ${data.get('city')}\n` +
      `Country: ${data.get('country')}\n` +
      `Company size: ${data.get('company_size')}\n\n` +
      `TENDER INTEREST\n` +
      `Requested service: ${data.get('service')}\n` +
      `Interested sectors / services: ${data.get('sectors')}\n` +
      `Target countries / markets: ${data.get('markets')}\n` +
      `Known CPV codes: ${data.get('cpv')}\n` +
      `Preferred report frequency: ${data.get('frequency')}\n` +
      `Minimum / target contract value: ${data.get('contract_value')}\n\n` +
      `EXTRA DETAILS\n` +
      `${data.get('message')}\n`
    );
    window.location.href = `mailto:hello@eutendermatch.com?subject=${subject}&body=${body}`;
  });
}