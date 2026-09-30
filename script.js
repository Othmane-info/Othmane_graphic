const lang=document.getElementById('lang');
let ar=false;
function setLanguage(toAr){
  ar=toAr; document.body.classList.toggle('arabic',ar); document.documentElement.lang=ar?'ar':'fr';
  document.querySelectorAll('[data-fr][data-ar]').forEach(el=>{el.innerHTML=ar?el.dataset.ar:el.dataset.fr});
  lang.textContent=ar?'FR':'AR';
}
lang.addEventListener('click',()=>setLanguage(!ar));
