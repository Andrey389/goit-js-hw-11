import{S as n,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function m(i){const r="https://pixabay.com/api/",l=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${l}`;return fetch(s).then(e=>e.json())}const d=document.querySelector(".gallery"),p=new n(".gallery a",{captionsData:"tags",captionsDelay:250});function f(i){const r=i.map(({webformatURL:l,largeImageURL:s,tags:e,likes:t,views:c,comments:o,downloads:a})=>`<li class="gallery-item">
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
              <li class="descrip-item">${t}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Views</li>
              <li class="descrip-item">${c}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Comments</li>
              <li class="descrip-item">${o}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${a}</li>
            </ul>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",r),p.refresh()}const g={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};g.formEl.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.input.value;r===""&&u.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"}),m(r).then(l=>{const s=f(l.hits);console.log(s)})});
//# sourceMappingURL=commonHelpers.js.map
