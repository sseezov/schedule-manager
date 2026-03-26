(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function l(){return"<h1>Звонки</h1>"}const f="_main_9b96o_1",h={main:f};function m(){return`<div class="${h.main}" id="main">
    ${l()}
  </div>`}const c={id:0,getId:function(){return++this.id}},$=()=>{document.querySelector("#app").addEventListener("click",e=>{const{id:n}=e.target.dataset;n&&c[n]()})};function p(){return"<h1>Аудитории</h1>"}function y(){return"<h1>Группы</h1>"}function b(){return"<h1>Предметы</h1>"}function g(e){return`
    <div class="modal-overlay hidden ${e}">
      <div class="modal">
        Содержимое модалки
      </div>
    </div>
  `}const _="_title_qfw9n_1",v="_table_qfw9n_7",d={title:_,table:v};async function w(){async function e(){try{const t=await fetch("/apiv1/teachers");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){console.error("Fetch error:",t)}}const n=await e(),i=()=>{document.querySelector(".modal-teachers").classList.remove("hidden")},o=c.getId();return c[o]=i,`
  <h1 class="${d.title}">Преподаватели</h1>
    <table class="${d.table}">
      <thead>
        <tr>
          <th>Преподаватель</th>
          <th>Сокращение</th>
          <th>Должность</th>
          <th>Цвет</th>
        </tr>  
      </thead>
      <tbody>
        ${n.map(t=>`<tr>
          <td>${t.name}</td>
          <td>${t.fio}</td>
          <td>${t.position}</td>
          <td>${t.color}</td>
        </tr>`).join("")} 
      </tbody>
    </table>
    <button data-id=${o}>Добавить преподавателя</button>
  ${g("modal-teachers")}
    `}const P={routes:{Звонки:l,Группы:y,Предметы:b,Преподаватели:w,Аудитории:p},async getRoute(e){return this.routes[e]?await this.routes[e]():null}};function u(e,n){e.innerHTML=n}function s(e){const n=P.getRoute(e),i=async()=>{u(document.querySelector("#main"),await n)},o=c.getId();return c[o]=i,`<li data-id=${o}>${e}</li>`}const L="_sidebar_1b9c6_1",q={sidebar:L};function S(){return`<ol class="${q.sidebar}">
      ${s("Звонки")}
      ${s("Группы")}
      ${s("Предметы")}
      ${s("Преподаватели")}
      ${s("Аудитории")}
    </ol>`}const O="_container_1iz5t_1",I={container:O};function M(){return`<div class="${I.container}">
      ${S()}
      ${m()}
  </div>`}const T=document.querySelector("#app");u(T,M());$();
