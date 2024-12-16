import{a as A,S as L,i}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",v="47588447-b6614111152463e9a843ad075";async function y(t,r=1){const o=new URLSearchParams({key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),l=`${w}?${o}`;return(await A.get(l)).data}const m=document.querySelector(".gallery");let g=new L(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8});function f(t){const r=t.map(o=>`<li class='image-card'>
        <a href="${o.largeImageURL}" class="gallery-link">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" class="gallery-image">
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${o.likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${o.views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${o.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${o.downloads}</b>
          </p>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",r)}function S(){m.innerHTML=""}const p=document.querySelector(".image-search-form"),h=document.querySelector(".loading-indicator"),n=document.querySelector(".load-more-btn");let a=1,c="",d=0;n.style.display="none";p.addEventListener("submit",async t=>{if(t.preventDefault(),S(),c=t.target.elements.inputSearch.value.trim(),a=1,!c){i.error({title:"Error",message:"The search field cannot be empty. Please enter your query.",position:"topRight"}),n.style.display="none";return}b();try{const r=await y(c,a);d=Math.ceil(r.totalHits/15),r.hits.length?(f(r.hits),g.refresh(),n.style.display=a<d?"block":"none"):i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"})}catch(r){i.error({message:`An error occurred: ${r.message}`,messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"})}F(),p.reset()});n.addEventListener("click",async()=>{a+=1,b();try{const t=await y(c,a);!t.hits.length||a>d?(n.style.display="none",i.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",color:"#17A2B8",position:"topRight"})):(f(t.hits),g.refresh(),a>=d&&(n.style.display="none",i.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",color:"#17A2B8",position:"topRight"})))}catch(t){i.error({message:`An error occurred: ${t.message}`,messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"})}finally{F()}B()});function b(){h.style.display="block"}function F(){h.style.display="none"}function B(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
