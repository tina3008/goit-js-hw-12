import{S as q,a as x,i as m}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function h(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=h(e);fetch(e.href,r)}})();let u={};async function g(i){a.innerHTML="";const t=s.map(o=>`<li class="img-blok">
        <a href="${o.largeImageURL}">     
    <img  src="${o.webformatURL}"
    data-source="${o.largeImageURL}"
    alt="${o.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${o.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${o.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${o.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${o.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");n>1?u+=t:u=t,a.insertAdjacentHTML("beforeend",u),new q(".gallery a",{captionsData:"alt"}).refresh()}const L=async()=>(await x.get("https://pixabay.com/api/",{params:{key:"22926721-5d20aa08498ffd1ff2f906542",q:p,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:n}})).data.hits,a=document.querySelector("ul.gallery");let s,p,n=1;const I=document.querySelector("input"),P=document.querySelector("form"),l=document.querySelector("#addImg"),b=document.querySelector(".preloader");let f;const c=()=>{a.innerHTML="",m.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},w=()=>{b.style.display="flex"},S=()=>{b.style.display="none"},y=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};P.addEventListener("submit",async i=>{if(i.preventDefault(),n=1,s={},p=I.value.trim(),!p.length){m.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),a.innerHTML="";return}w();try{if(s=await L(),!s.length){c(),l.style.display="none";return}f=Math.ceil(s.length),f>1&&(l.style.display="flex"),g(s),v()}catch{c()}finally{S(),y()}});l.addEventListener("click",async i=>{i.preventDefault(),n===f&&(l.style.display="none",m.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n+=1,w();try{if(s=await L(),!s.length){c(),l.style.display="none";return}g(s),v()}catch{c()}finally{S(),y()}});window.onload=y;async function v(){const t=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
