import{S as n,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(s){const t="https://pixabay.com/api/",i=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${t}?${i}`;return fetch(l).then(e=>e.json())}const d=document.querySelector(".gallery"),p=new n(".gallery a",{captionsData:"tags",captionsDelay:250});function f(s){const t=s.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:o,comments:c,downloads:a})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img 
              class="gallery-image" 
              src="${i}" 
              alt="Image ${e}" 
              />
          </a>
          <div class="descrip-gallery">
            <ul class="descrip-img">
              <li class="descrip-item">Likes</li>
              <li class="descrip-item">${r}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Views</li>
              <li class="descrip-item">${o}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Comments</li>
              <li class="descrip-item">${c}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${a}</li>
            </ul>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",t),p.refresh()}const g=document.querySelector(".gallery");document.querySelector(".loader");const y={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};y.formEl.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.input.value;m(t).then(i=>{g.innerHTML="",f(i.hits)||u.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
