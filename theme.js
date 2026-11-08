(function(){var b=document.getElementById('themeBtn');if(!b)return;b.addEventListener('click',function(){var r=document.documentElement,t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}})})();
(function(){var r=document.documentElement,b=document.getElementById('burger');if(!b)return;
function set(o){r.classList.toggle('nav-open',o);b.setAttribute('aria-expanded',o?'true':'false')}
b.addEventListener('click',function(){set(true)});
document.getElementById('closeMenu').addEventListener('click',function(){set(false)});
document.getElementById('scrim').addEventListener('click',function(){set(false)});
document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
window.addEventListener('resize',function(){if(innerWidth>860)set(false)});
})();
