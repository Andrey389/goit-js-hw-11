import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(i){const s="https://pixabay.com/api/",t=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${s}?${t}`;return fetch(l).then(e=>e.json())}const p=document.querySelector(".gallery"),f=new m(".gallery a",{captionsData:"tags",captionsDelay:250});function g(i){const s=i.map(({webformatURL:t,largeImageURL:l,tags:e,likes:r,views:o,comments:n,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img 
              class="gallery-image" 
              src="${t}" 
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
              <li class="descrip-item">${n}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${u}</li>
            </ul>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",s),f.refresh()}const y=document.querySelector(".gallery"),a=document.querySelector(".loader"),h={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};h.formEl.addEventListener("submit",i=>{i.preventDefault();const s=i.target.elements.input.value.trim();d(s).then(t=>{y.innerHTML="",L(t.hits),t.hits.length===0?c.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(S(t.hits),g(t.hits))}).catch(t=>{c.error({title:"Error",message:"❌ Sorry, an error occurred while fetching images. Please try again later!",position:"topRight"}),console.error("Error fetching images:",t)})});function L(){a.classList.remove("visually-hidden")}function S(){a.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
