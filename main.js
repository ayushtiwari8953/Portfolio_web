javascript
//  Theme toggle (light / dark) using data-theme attribute + localStorage

const toggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

 const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        alert('Please fill the required fields.');
        return;
      }
      // Visual feedback
      const btn = form.querySelector('button');
      btn.disabled = true; btn.textContent = 'Sending...';
      setTimeout(()=>{
        btn.disabled = false; btn.textContent = 'Send message';
        form.reset();
        alert('Thanks — your message was received (demo).');
      }, 900);
    });


document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.querySelector('.page');
  const toggle = document.getElementById('themeToggle');
  const YEAR = document.getElementById('year');
  YEAR.textContent = new Date().getFullYear();

  const saved = localStorage.getItem('theme');
  if(saved) page.setAttribute('data-theme', saved);

  // toggle.addEventListener('click', ()=>{
  //   const current = page.getAttribute('data-theme') || 'dark';
  //   const next = current === 'dark' ? 'light' : 'dark';
  //   page.setAttribute('data-theme', next);
  //   localStorage.setItem('theme', next);
  // });

  // Basic contact form demo (replace with API integration for production)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = {
        name: form.name?.value||'',
        email: form.email?.value||'',
        message: form.message?.value||''
      };
      if(!data.name || !data.email || !data.message){
        alert('Please fill all fields.');
        return;
      }
      // Demo feedback
      alert('Thanks! Your message was received (demo).');
      form.reset();
    });
  }
});


