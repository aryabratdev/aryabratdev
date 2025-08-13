(function(){
  const page = document.body.getAttribute('data-page');
  const links = document.querySelectorAll('[data-page-link]');
  links.forEach(link=>{ if(link.getAttribute('data-page-link')===page){ link.classList.add('active'); }});

  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('primary-navigation');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(){
       const notice = document.getElementById('form-notice');
       if(notice){
         notice.style.display = 'inline';
         notice.textContent = 'Opening your email client…';
       }
    });
  }
})();