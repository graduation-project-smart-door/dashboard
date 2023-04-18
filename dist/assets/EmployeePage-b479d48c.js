import{x as A,y as w,z as T,A as W,B as $,u as L,C as N,j as Q,D as j,g as q,h as G,F as J,l as K}from"./vendor-066c2b0d.js";/* empty css                     *//* empty css                    *//* empty css                  */import"./AxiosService-2d728613.js";import{defineComponent as C,reactive as M,openBlock as v,createElementBlock as E,createVNode as a,withCtx as r,createTextVNode as f,pushScopeId as V,popScopeId as k,createElementVNode as o,createBlock as b,unref as g,mergeProps as P,ref as h,onMounted as X,Fragment as Z,renderList as ee,createCommentVNode as te,createStaticVNode as ae}from"vue";import{_ as x}from"./index-4aeae6ce.js";/* empty css               */import{C as D,r as O,b as oe,R as le,e as se,h as c,a as re,f as ne,L as de,_ as ce}from"./profile-222b7858.js";/* empty css                  */import{U as S}from"./UserService-d302fd08.js";import{u as ie}from"./useScreen-5a188402.js";import{d as me}from"./index-5a7a4d4a.js";const pe=e=>(V("data-v-3dfe4239"),e=e(),k(),e),_e={class:"employee-update"},ue=pe(()=>o("h6",{class:"color-default"},"Обновление профиля",-1)),fe=C({__name:"EmployeeUpdate",setup(e){const t=M({phone:"",avatar:{},email:""});return(n,i)=>{const p=A,m=w,_=T,l=W,d=$;return v(),E("div",_e,[ue,a(d,{class:"mt-24"},{default:r(()=>[a(m,{prop:"phone"},{default:r(()=>[a(p,{modelValue:t.phone,"onUpdate:modelValue":i[0]||(i[0]=s=>t.phone=s),placeholder:"Введите телефон"},null,8,["modelValue"])]),_:1}),a(m,{prop:"email"},{default:r(()=>[a(p,{modelValue:t.email,"onUpdate:modelValue":i[1]||(i[1]=s=>t.email=s),placeholder:"Введите почту"},null,8,["modelValue"])]),_:1}),a(m,{prop:"avatar"},{default:r(()=>[a(l,{modelValue:t.avatar,"onUpdate:modelValue":i[2]||(i[2]=s=>t.avatar=s)},{default:r(()=>[a(_,{type:"primary"},{default:r(()=>[f("Обновить фотографию профия")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(_,{type:"primary"},{default:r(()=>[f("Подтверить")]),_:1})]),_:1})]),_:1})])}}});const ve=x(fe,[["__scopeId","data-v-3dfe4239"]]);const ge=C({__name:"EmployeeChartEventsCount",props:{data:null},setup(e){D.register(...O);const t=Array.from({length:7},()=>Math.floor(Math.random()*100)),n=Array.from({length:7},()=>Math.floor(Math.random()*100)),i=M({labels:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],datasets:[{label:"Приходы",backgroundColor:"rgba(94, 114, 228, 0.3)",borderColor:"rgba(94, 114, 228, 0.5)",pointBackgroundColor:"rgba(94, 114, 228, 0.7)",borderWidth:2,data:t},{label:"Уходы",backgroundColor:"rgba(121,51,241,0.38)",borderColor:"rgba(143,94,228,0.5)",pointBackgroundColor:"rgba(143,94,228,0.7)",borderWidth:2,data:n}]}),m={plugins:{tooltip:{cornerRadius:2,yAlign:"top",xAlign:"center",yPadding:5,caretSize:3,caretPadding:6,displayColors:!1,bodyFontSize:10,callbacks:{title:()=>""}},legend:{display:!0}},scale:{min:0,max:(()=>{let d=Math.max.apply(null,t)+20;return d%10!==0&&(d=d+10-d%10),d})()},scales:{r:{pointLabels:{color:"#9fa9ba",font:{size:16}},ticks:{stepSize:20,color:"#c7ccd9",font:{size:10}}}}},{radarChartProps:_,radarChartRef:l}=oe({chartData:i,options:m});return(d,s)=>(v(),b(g(le),P(g(_),{class:"employee-chart-events-count"}),null,16))}});const ye=x(ge,[["__scopeId","data-v-f88c04bb"]]);/*!
  * chartjs-adapter-moment v1.0.1
  * https://www.chartjs.org
  * (c) 2022 chartjs-adapter-moment Contributors
  * Released under the MIT license
  */const he={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};se._date.override(typeof c=="function"?{_id:"moment",formats:function(){return he},parse:function(e,t){return typeof e=="string"&&typeof t=="string"?e=c(e,t):e instanceof c||(e=c(e)),e.isValid()?e.valueOf():null},format:function(e,t){return c(e).format(t)},add:function(e,t,n){return c(e).add(t,n).valueOf()},diff:function(e,t,n){return c(e).diff(c(t),n)},startOf:function(e,t,n){return e=c(e),t==="isoWeek"?(n=Math.trunc(Math.min(Math.max(0,n),6)),e.isoWeekday(n).startOf("day").valueOf()):e.startOf(t).valueOf()},endOf:function(e,t){return c(e).endOf(t).valueOf()}}:{});const be=C({__name:"EmployeeChartEvents",props:{arrival:{default:()=>[]},leaving:{default:()=>[]}},setup(e){D.register(...O);const t=[{date:"2021-10-11",time:"10:33:00",direction:"enter"},{date:"2021-10-12",time:"10:10:00",direction:"enter"},{date:"2021-10-13",time:"11:30:11",direction:"enter"},{date:"2021-10-14",time:"11:30:11",direction:"enter"}].map(l=>({x:c(l.date).format("YYYY.MM.DD"),y:c(l.time,["hh:mm:ss"]).format("HH:mm"),type:l.direction})),n=[{date:"2021-10-11",direction:"exit",time:"19:33:00"},{date:"2021-10-12",time:"22:10:00",direction:"exit"},{date:"2021-10-13",time:"18:30:11",direction:"exit"},{date:"2021-10-14",time:"19:30:11",direction:"enter"}].map(l=>({x:c(l.date).format("YYYY.MM.DD"),y:c(l.time,["hh:mm:ss"]).format("HH:mm"),type:l.direction})),i=M({datasets:[{label:"Приходы",borderColor:"#5e72e4",pointBackgroundColor:"#0f2495",borderWidth:2,fill:"+1",tension:.4,backgroundColor:"rgba(94, 114, 228, 0.3)",cubicInterpolationMode:"monotone",data:t},{label:"Уходы",backgroundColor:"#a73dff",borderColor:"#9315f8",borderWidth:2,data:n}]}),p={plugins:{customCanvasBackgroundColor:{color:"#ffffff"},tooltip:{cornerRadius:2,yAlign:"top",xAlign:"center",yPadding:5,caretSize:3,caretPadding:6,displayColors:!1,bodyFontSize:10,callbacks:{title:()=>"",label:l=>l.formattedValue}}},scales:{y:{reverse:!0,ticks:{stepSize:1,color:"#8392ab"},grid:{display:!1},type:"time",time:{parser:"HH.mm",unit:"hour",tooltipFormat:"HH:mm",displayFormats:{hour:"HH"}},min:"00:00",max:"24:00"},x:{ticks:{color:"#8392ab"},type:"time",time:{unit:"day",unitStepSize:1,displayFormats:{day:"DD"}}}}},{lineChartProps:m,lineChartRef:_}=re({chartData:i,options:p,plugins:[ne]});return(l,d)=>(v(),b(g(de),P(g(m),{class:"employee-chart-events"}),null,16))}});const Ce=x(be,[["__scopeId","data-v-99533b65"]]),xe=e=>(V("data-v-5c78383a"),e=e(),k(),e),Ee={class:"employee-page"},Me=ae('<div class="employee-card" data-v-5c78383a><div class="d-f ai-c" data-v-5c78383a><div class="employee-card__image-wrapper" data-v-5c78383a><img class="employee-card__image" src="'+ce+'" data-v-5c78383a></div><div data-v-5c78383a><h5 class="color-default" data-v-5c78383a>Вася Пупкин</h5><div class="text-lg color-primary-secondary mt-4" data-v-5c78383a>Программист</div></div></div></div>',1),Ye=xe(()=>o("div",{class:"employee-information"},[o("div",null,[o("h6",{class:"color-default"},"Информация о профиле"),o("div",{class:"text-lg mt-24"},[f(" Я крутой чел. Я работаю здесь на большие деньги. Мне их не хватает на пропитание. Купите хлеба. Я голодаю. Спасите. Меня держат в заложниках *подмигивает*. "),o("br"),f(" Прошло столько лет в заточении. Они заставляют меня чистить лук, стрелять по лягушкам из космоса. ")])]),o("div",{class:"divider mt-24"}),o("div",null,[o("div",{class:"mt-24"},[o("div",{class:"text-md"},[f("ФИО:   "),o("span",{class:"bold"},"Вася Пупкин Крутой")])]),o("div",{class:"mt-12"},[o("div",{class:"text-md"},[f("Телефон:   "),o("span",{class:"bold"},"8 800 555 3535")])]),o("div",{class:"mt-12"},[o("div",{class:"text-md"},[f("Почта:   "),o("span",{class:"bold"},"sample@gmail.com")])])])],-1)),Se={class:"d-f ai-c fd-c"},Ve=C({__name:"EmployeePage",setup(e){const{isMobileOrTablet:t}=ie(),n=L(),i=h({role:""});h({});const p=h("events"),m=h("week");X(()=>{_()});const _=async()=>{const[d,s]=await S.getById(n.params.id);!d&&s?console.log("123"):N({type:"error",message:"Что-то пошло не так"})},l=async d=>{const[s,y]=await S.getStatistic({period:d});!s&&y&&console.log("123")};return(d,s)=>{const y=Q,I=Ce,Y=j,F=q,U=G,z=ye,B=J,H=K,R=ve;return v(),E("div",Ee,[Me,a(H,{class:"mt-48",gutter:g(t)?0:12},{default:r(()=>[a(y,{md:8},{default:r(()=>[Ye]),_:1}),a(y,{md:16,class:"employee-page__chart"},{default:r(()=>[a(B,{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=u=>p.value=u),class:"employee-page__tabs"},{default:r(()=>[a(Y,{label:"Приходы и уходы",name:"events"},{default:r(()=>[a(I,{arrival:[],leaving:[]})]),_:1}),a(Y,{label:"Количество уходоов и приходов",name:"average"},{default:r(()=>[o("div",Se,[a(U,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=u=>m.value=u),class:"employee-page__chart-period",onChange:l},{default:r(()=>[(v(!0),E(Z,null,ee(g(me),u=>(v(),b(F,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),a(z,{class:"mt-10",data:[]})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["gutter"]),i.value.role==="admin"||i.value.role==="superadmin"?(v(),b(R,{key:0,class:"mt-12"})):te("",!0)])}}});const Te=x(Ve,[["__scopeId","data-v-5c78383a"]]);export{Te as default};