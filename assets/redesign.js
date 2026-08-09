(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var body=document.body, toggle=document.querySelector('.nav-toggle'), backdrop=document.querySelector('.nav-backdrop');
    function close(){body.classList.remove('nav-open'); if(toggle) toggle.setAttribute('aria-expanded','false');}
    if(toggle) toggle.addEventListener('click',function(){var open=body.classList.toggle('nav-open'); toggle.setAttribute('aria-expanded',open?'true':'false');});
    if(backdrop) backdrop.addEventListener('click',close);
    document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  });
})();