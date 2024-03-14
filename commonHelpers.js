import{S as w,a as v,i as y}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function h(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=h(e);fetch(e.href,r)}})();let d={};async function m(i){a.innerHTML="";const o=s.map(t=>`<li class="img-blok">
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
  </a></li>`).join("");n>1?d+=o:d=o,a.insertAdjacentHTML("beforeend",d),new w(".gallery a",{captionsData:"alt"}).refresh()}const g=async()=>(await v.get("https://pixabay.com/api/",{params:{key:"22926721-5d20aa08498ffd1ff2f906542",q:u,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:n}})).data.hits,a=document.querySelector("ul.gallery");let s,u,n=1;const S=document.querySelector("input"),q=document.querySelector("form"),l=document.querySelector("#addImg"),L=document.querySelector(".preloader");let p;const f=()=>{a.innerHTML="",y.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},x=()=>{L.style.display="flex"},I=()=>{L.style.display="none"},b=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=b;q.addEventListener("submit",async i=>{if(i.preventDefault(),n=1,s={},u=S.value.trim(),!u.length){y.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),a.innerHTML="";return}x();try{if(s=await g(),!s.length){f(),l.style.display="none";return}p=Math.ceil(s.length),p>1&&(l.style.display="flex"),m(s)}catch{f()}finally{I(),b()}});l.addEventListener("click",async i=>{i.preventDefault(),n===p&&(l.style.display="none",y.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n+=1;try{if(s=await g(),!s.length){f(),l.style.display="none";return}m(s)}catch{}});
//# sourceMappingURL=commonHelpers.js.map
