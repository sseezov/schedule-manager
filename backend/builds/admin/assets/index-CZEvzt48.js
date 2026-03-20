(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function l(){return"<h1>Звонки</h1>"}function f(){return`<div class="main">
    ${l()}
  </div>`}const i={id:0,getId:function(){return++this.id}},h=()=>{document.querySelector("#app").addEventListener("click",e=>{const{id:n}=e.target.dataset;n&&i[n]()})};function p(){return"<h1>Аудитории</h1>"}function m(){return"<h1>Группы</h1>"}function y(){return"<h1>Предметы</h1>"}function $(e){return`
    <div class="modal-overlay hidden ${e}">
      <div class="modal">
        Содержимое модалки
      </div>
    </div>
  `}const b="_title_qfw9n_1",g="_table_qfw9n_7",d={title:b,table:g};async function v(){async function e(){try{const t=await fetch("/apiv1/teachers");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){console.error("Fetch error:",t)}}const n=await e(),s=()=>{document.querySelector(".modal-teachers").classList.remove("hidden")},o=i.getId();return i[o]=s,`
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
  ${$("modal-teachers")}
    `}const _={routes:{Звонки:l,Группы:m,Предметы:y,Преподаватели:v,Аудитории:p},async getRoute(e){return this.routes[e]?await this.routes[e]():null}};function u(e,n){e.innerHTML=n}function c(e){const n=_.getRoute(e);console.log("content",n);const s=async()=>{u(document.querySelector(".main"),await n)},o=i.getId();return i[o]=s,`<li data-id=${o} class='sidebar-category'>${e}</li>`}const w="_sidebar_1b9c6_1",L={sidebar:w};function S(){return`<ol class="${L.sidebar}">
      ${c("Звонки")}
      ${c("Группы")}
      ${c("Предметы")}
      ${c("Преподаватели")}
      ${c("Аудитории")}
    </ol>`}const q="_container_1iz5t_1",O={container:q};function C(){return`<div class="${O.container}">
      ${S()}
      ${f()}
  </div>`}const P=document.querySelector("#app");u(P,C());h();
