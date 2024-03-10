import{S as h,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function m(i){a.innerHTML="";const t=c.map(r=>`<li class="img-blok">
        <a href="${r.largeImageURL}">     
    <img  src="${r.webformatURL}"
    data-source="${r.largeImageURL}"
    alt="${r.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${r.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${r.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${r.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${r.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");a.insertAdjacentHTML("beforeend",t),new h(".gallery a",{captionsData:"alt"}).refresh()}function p(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:d,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const a=document.querySelector("ul.gallery");let c,d;const y=document.querySelector("input");document.querySelector("button");const g=document.querySelector("form"),u=document.querySelector(".preloader"),L=()=>{u.style.display="flex"},w=()=>{u.style.display="none"},f=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=f;g.addEventListener("submit",async i=>{i.preventDefault(),d=y.value.trim(),d.length||(n.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),a.innerHTML=""),L();try{const t=await p();c=t.hits,c.length||n.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(t)}catch{n.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{w(),f()}});
//# sourceMappingURL=commonHelpers.js.map
