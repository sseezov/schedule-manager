(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const y="_teacherName_12m8n_1",b={teacherName:y};function g(e){return`<a href="${`${e.id}/lessons`}"><h5 class=${b.teacherName}>${e.name}</h5></a>`}async function w(){async function e(){try{const n=await fetch("/apiv1/teachers");if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(n){console.error("Fetch error:",n)}}const s=await e();return console.log(2,s),`<div>${s.map(n=>g(n)).join(`
`)}</div>`}function v(e=0){const s=new Date,t=s.getDay(),n=t===0?6:t-1;s.setDate(s.getDate()-n+e*7);const r=s.getFullYear(),o=String(s.getMonth()+1).padStart(2,"0"),a=String(s.getDate()).padStart(2,"0");return`${r}-${o}-${a}`}function D(e,s){const t=new Date(e);t.setDate(t.getDate()+(s-1));const n=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return`${n}.${r}.${o}`}function S(e,s){function t(f){const[m,_]=f.split(":").map(Number);return m*60+_}const n=t(e),o=t(s)-n,a=Math.floor(o/60),c=o%60;return`${a} ч ${c} мин`}const T="_card_rb9eq_2",L="_header_rb9eq_10",M="_subheader_rb9eq_19",j="_date_rb9eq_24",q="_table_rb9eq_29",i={card:T,header:L,subheader:M,date:j,table:q},x="_time_oxnqd_1",E="_info_oxnqd_10",N="_subject_oxnqd_14",k="_groups_oxnqd_21",d={time:x,info:E,subject:N,groups:k};function O(e){return`
  <tr>
    <td>
      <td class="${d.time}">
        <div>${e.startTime}</div>
        <div>${e.endTime}</div>
      </td>  
      <td class="${d.info}">
        <div class="${d.subject}">${e.subject.name}</div>
        <div class="${d.groups}">${e.unionGroups.map(({group:s})=>s.name).join(", ")}</div>
      </td>
    </td>
  </tr>`}function H(e){const s={1:"Понедельник",2:"Вторник",3:"Среда",4:"Четверг",5:"Пятница",6:"Суббота",7:"Воскресенье"},{lessons:t,startDate:n}=e,r=t[0].weekday;return`
  <div class="${i.card}">
    <div class="${i.header}">
      <h3 class="${i.subheader}">${s[r]}</h3>
      <span class="${i.date}">${D(n,r)}</span>
    </div>
    <table class="${i.table}">
      <tbody>
        ${t.map(o=>O(o)).join(`
`)}
      </tbody>
    </table>
  </div>
  `}const C=e=>{const s=[e[0]];for(let t=0;t<e.length-1;t+=1){const n=e[t],r=e[t+1],o=r.lesson-n.lesson;s.push(e[t]),o>1&&s.push({type:"window",totalTime:S(n.endTime,r.startTime)})}return s},P=e=>(console.log("lessons: ",e),Array.from(new Set(e.map(t=>t.weekday))).sort().reduce((t,n)=>{const r=e.filter(o=>o.weekday===n).sort((o,a)=>o.lesson>a.lesson?1:-1);return{...t,[n]:r}},{})),F="_scheduleDashboard_55lss_1",G="_scheduleGrid_55lss_8",A="_scheduleHeader_55lss_18",l={scheduleDashboard:F,scheduleGrid:G,scheduleHeader:A};async function R(){const e=new URL(window.location.href).pathname.split("/")[2],s=v();async function t(){try{const c=await fetch(`/apiv1/teachers/lessons?teacher=${e}&date=${s}`);if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);return await c.json()}catch(c){console.error("Fetch error:",c)}}const{startDate:n,lessons:r}=await t(),o=P(r),a=Object.keys(o);return console.log("sortedLessons",o),console.log("addWindows",C(o[1])),`
    <div class=${l.scheduleDashboard}>
      <h1 class=${l.scheduleHeader}>Страница с расписанием</h1>
      <div class=${l.scheduleGrid}>
        ${a.map(c=>H({lessons:o[c],startDate:n})).join(`
`)}
      </div>
    </div>
  `}const I="_card_1tun1_1",U="_header_1tun1_18",W="_description_1tun1_24",h={card:I,header:U,description:W};function $({name:e,description:s,href:t}){return`
    <a class="${h.card}" href=${t}
      <h1 class="${h.header}">${e}</h1>
      <h2 class="${h.description}">${s}</h2>  
    </a>
  `}const B="_main_19ba6_1",Y="_header_19ba6_7",K="_subheader_19ba6_14",z="_cardsContainer_19ba6_22",u={main:B,header:Y,subheader:K,cardsContainer:z};function J(){return`
    <div class="${u.main}">
      <h1 class="${u.header}">Расписание занятий</h1>
      <h2 class="${u.subheader}">Выберите категорию для просмотра</h2>
      <div class="${u.cardsContainer}">
        ${$({name:"Преподаватели",description:"Расписание по преподавателям",href:"teachers"})}
        ${$({name:"Группы",description:"Расписание по группам",href:"groups"})}
      </div>
    </div>
  `}function Q(){return"error"}console.log("load");const V=[{path:"/publications",component:J},{path:"/publications/teachers",component:w},{path:"/publications/teachers/:id/lessons",component:R}],X=e=>{for(const s of V){const t=s.path.replace(/:[^/]+/g,"([^/]+)")+"/?$";if(new RegExp("^"+t).test(e))return s.component}return Q},p=async()=>{const e=window.location.href.replace(/\/+$/,"");window.location.href.at(-1)==="/"&&history.replaceState({},"",e);const{pathname:s}=new URL(e),t=X(s),n=document.querySelector("#app");n.innerHTML=await t()};document.addEventListener("click",async e=>{const s=window.location.href,t=e.target.closest("a");if(t){const n=t.getAttribute("href");e.preventDefault(),history.pushState({},"",`${s}/${n}`),p()}});window.addEventListener("popstate",()=>p());p();
