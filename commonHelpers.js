import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(l){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"43244961-2cc0a4f4473f9c50538fea30b",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${t}?${s}`;return fetch(i).then(e=>e.json())}const f=document.querySelector(".gallery"),g=new m(".gallery a",{captionsData:"tags",captionsDelay:250});function y(l){const t=l.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:o,comments:u,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img 
              class="gallery-image" 
              src="${s}" 
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
              <li class="descrip-item">${u}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${d}</li>
            </ul>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),g.refresh()}const c=document.querySelector(".gallery"),n=document.querySelector(".loader"),h={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};h.formEl.addEventListener("submit",l=>{l.preventDefault();const t=l.target.elements.input.value.trim();if(!t){a.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}p(t).then(s=>{if(c.innerHTML="",L(),s.hits.length===0)a.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{S();const i=y(s.hits);c.insertAdjacentHTML("beforeend",i)}}).catch(s=>{a.error({title:"Error",message:"❌ Sorry, an error occurred while fetching images. Please try again later!",position:"topRight"}),console.error("Error fetching images:",s)})});function L(){n.classList.remove("visually-hidden")}function S(){n.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
