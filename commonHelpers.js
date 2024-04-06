import{S as n,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function m(i){const r="https://pixabay.com/api/",l=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${l}`;return fetch(s).then(e=>e.json())}function p(i){return i.map(({webformatURL:r,largeImageURL:l,tags:s,likes:e,views:t,comments:c,downloads:o})=>`<ul class="gallery">
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img 
              class="gallery-image" 
              src="${r}" 
              alt="Image ${s}" 
              />
          </a>
          <div class="descrip-gallery">
            <ul class="descrip-img">
              <li class="descrip-item">Likes</li>
              <li class="descrip-item">${e}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Views</li>
              <li class="descrip-item">${t}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Comments</li>
              <li class="descrip-item">${c}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${o}</li>
            </ul>
          </div>
        </li>
      </ul>
      `).join("")}new n(".gallery a",{captionsData:"tags",captionsDelay:250});const a={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-tex")};a.formEl.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.inptext.value;r===""&&u.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"}),m(r).then(l=>{const s=p(l);a.inputEl.insertAdjacentElement("beforeend",s)})});
//# sourceMappingURL=commonHelpers.js.map
