import{S,a as q,i as y}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function m(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=m(e);fetch(e.href,r)}})();let u={};async function g(l){a.innerHTML="";const o=s.map(t=>`<li class="img-blok">
        <a href="${t.largeImageURL}">     
    <img  src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${t.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${t.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${t.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${t.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");n>1?u+=o:u=o,a.insertAdjacentHTML("beforeend",u),new S(".gallery a",{captionsData:"alt"}).refresh()}const L=async()=>(await q.get("https://pixabay.com/api/",{params:{key:"22926721-5d20aa08498ffd1ff2f906542",q:p,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:n}})).data.hits,a=document.querySelector("ul.gallery");let s,p,n=1;const x=document.querySelector("input"),I=document.querySelector("form"),i=document.querySelector("#addImg"),b=document.querySelector(".preloader");let f;const c=()=>{a.innerHTML="",y.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},w=()=>{b.style.display="flex"},v=()=>{b.style.display="none"},h=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=h;I.addEventListener("submit",async l=>{if(l.preventDefault(),n=1,s={},p=x.value.trim(),!p.length){y.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),a.innerHTML="";return}w();try{if(s=await L(),!s.length){c(),i.style.display="none";return}f=Math.ceil(s.length),f>1&&(i.style.display="flex"),g(s)}catch{c()}finally{v(),h()}});i.addEventListener("click",async l=>{l.preventDefault(),n===f&&(i.style.display="none",y.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n+=1,w();try{if(s=await L(),!s.length){c(),i.style.display="none";return}g(s)}catch{c()}finally{v(),h()}});
//# sourceMappingURL=commonHelpers.js.map
