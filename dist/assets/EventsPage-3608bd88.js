var C=Object.defineProperty;var y=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var g=(a,t,e)=>(y(a,typeof t!="symbol"?t+"":t,e),e);import{_ as P}from"./BasePagination-2db65ab8.js";import{p as S,q as T,s as k}from"./vendor-066c2b0d.js";/* empty css                  */import{defineComponent as v,computed as b,openBlock as f,createElementBlock as E,normalizeClass as A,unref as d,toDisplayString as r,createBlock as w,withCtx as c,createVNode as o,createTextVNode as i,ref as x,onMounted as B}from"vue";import{_ as h,R as $}from"./index-4aeae6ce.js";import{A as I,a as N}from"./AxiosService-2d728613.js";import"./useScreen-5a188402.js";const R=v({__name:"BaseStatus",props:{status:{default:"default"}},setup(a){const t=a,e={enter:"Вошел",exit:"Вышел",default:""},u=b(()=>["base-status",`base-status--${t.status}`]),l=b(()=>e[t.status]);return(_,s)=>(f(),E("div",{class:A(d(u))},r(d(l)),3))}});const O=h(R,[["__scopeId","data-v-5e8193b0"]]),D=v({__name:"EventsTable",props:{events:{default:()=>[]}},setup(a){const t=a,e=S(),u=({id:l})=>{e.push({name:$.EmployeePage,params:{id:l}})};return(l,_)=>{const s=T,p=O,m=k;return f(),w(m,{class:"events-table",data:t.events,onRowClick:u},{default:c(()=>[o(s,{label:"id"},{default:c(({row:n})=>[i(r(n.id),1)]),_:1}),o(s,{label:"Имя"},{default:c(({row:n})=>[i(r(n.first_name),1)]),_:1}),o(s,{label:"Фамилия"},{default:c(({row:n})=>[i(r(n.last_name),1)]),_:1}),o(s,{label:"Время"},{default:c(({row:n})=>[i(r(n.time),1)]),_:1}),o(s,{label:"Статус"},{default:c(({row:n})=>[o(p,{status:n.status},null,8,["status"])]),_:1})]),_:1},8,["data"])}}}),G=[{id:"1",status:"enter",first_name:"Alex",last_name:"Linkoln",time:"11:08"},{id:"2",status:"enter",first_name:"Linkin",last_name:"Park",time:"11:08"},{id:"3",status:"exit",first_name:"Three days",last_name:"Grace",time:"11:08"}];class L extends N{constructor(e){super(e);g(this,"getAll",()=>this.axiosCall({method:"get",url:"/actions"}))}}const M=new L(I),V={class:"events-page"},q=v({__name:"EventsPage",setup(a){const t=x([]),e=x({limit:10,page:1,total:100,pageCount:100});B(()=>{});const u=async()=>{const[_,s]=await M.getAll();!_&&s&&(t.value=s)},l=async _=>{e.value.page=_,await u()};return(_,s)=>{const p=D,m=P;return f(),E("div",V,[o(p,{events:d(G)},null,8,["events"]),o(m,{text:"Отображено 1 to 10 of 57 действий",limit:e.value.limit,page:e.value.page,"page-count":e.value.pageCount,total:e.value.total,onChangePage:l},null,8,["limit","page","page-count","total"])])}}});const W=h(q,[["__scopeId","data-v-fae3deb0"]]);export{W as default};
