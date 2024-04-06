import{S as n,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function m(i){const t="https://pixabay.com/api/",l=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${t}?${l}`;return fetch(s).then(e=>e.json())}const d=document.querySelector(".gallery"),p=new n(".gallery a",{captionsData:"tags",captionsDelay:250});function f(i){const t=i.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:o,comments:c,downloads:a})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img 
              class="gallery-image" 
              src="${l}" 
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
      `).join("");d.insertAdjacentHTML("beforeend",t),p.refresh()}const g=document.querySelector(".gallery");document.querySelector(".loader");const y={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};y.formEl.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.input.value;m(t).then(l=>{g.innerHTML="";const s=f(l.hits);if(t===""||!s)u.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return})});
//# sourceMappingURL=commonHelpers.js.map
