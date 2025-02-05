(function(){"use strict";var e={4704:function(e,s,t){var r=t(5130),n=t(6768);const o={class:"app-container"};function a(e,s,t,r,a,d){const l=(0,n.g2)("Leaderboard");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(l)])}const d={class:"leaderboard"},l={class:"leaderboard__controls"};function i(e,s,t,r,o,a){const i=(0,n.g2)("SearchBar"),c=(0,n.g2)("UserTable"),u=(0,n.g2)("UserModal");return(0,n.uX)(),(0,n.CE)("div",d,[s[1]||(s[1]=(0,n.Lk)("h1",{class:"leaderboard__title"},"Leaderboard",-1)),(0,n.Lk)("div",l,[(0,n.bF)(i),(0,n.Lk)("button",{class:"btn-primary",onClick:s[0]||(s[0]=(...e)=>r.openAddModal&&r.openAddModal(...e))},"Add User")]),(0,n.bF)(c),(0,n.bF)(u,{show:r.showModal,user:r.selectedUser,onClose:r.closeModal},null,8,["show","user","onClose"])])}var c=t(144),u=t(782);const p={class:"search-container"};function m(e,s,t,o,a,d){return(0,n.uX)(),(0,n.CE)("div",p,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"search-input",placeholder:"Search users...","onUpdate:modelValue":s[0]||(s[0]=e=>o.searchTerm=e),onInput:s[1]||(s[1]=(...e)=>o.onSearch&&o.onSearch(...e))},null,544),[[r.Jo,o.searchTerm]])])}var b={name:"SearchBar",setup(){const e=(0,u.Pj)(),s=(0,c.KR)(""),t=()=>{e.dispatch("users/setSearchTerm",s.value)};return{searchTerm:s,onSearch:t}}},f=t(1241);const v=(0,f.A)(b,[["render",m],["__scopeId","data-v-bfea7212"]]);var h=v,k=t(4232);const E={class:"table-container"},L={class:"user-table"},S={class:"sort-icon"},U={class:"sort-icon"},g=["onClick"],C=["onClick"],_={class:"actions"},y=["onClick"],T=["onClick"];function D(e,s,t,r,o,a){return(0,n.uX)(),(0,n.CE)("div",E,[(0,n.Lk)("table",L,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[s[4]||(s[4]=(0,n.Lk)("th",null,null,-1)),(0,n.Lk)("th",{onClick:s[0]||(s[0]=e=>r.handleSort("name"))},[s[2]||(s[2]=(0,n.eW)("Name")),(0,n.Lk)("span",S,(0,k.v_)("asc"===e.sortDirection?"↑":"↓"),1)]),(0,n.Lk)("th",{onClick:s[1]||(s[1]=e=>r.handleSort("points"))},[s[3]||(s[3]=(0,n.eW)("Points")),(0,n.Lk)("span",U,(0,k.v_)("asc"===e.sortDirection?"↑":"↓"),1)]),s[5]||(s[5]=(0,n.Lk)("th",null,"Actions",-1))])]),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.users,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.id},[(0,n.Lk)("td",null,[(0,n.Lk)("button",{class:"btn-icon danger",onClick:s=>r.deleteUser(e)},s[6]||(s[6]=[(0,n.Lk)("span",null,"×",-1)]),8,g)]),(0,n.Lk)("td",{onClick:s=>r.viewUser(e),class:"user-name",role:"button"},(0,k.v_)(e.name),9,C),(0,n.Lk)("td",null,(0,k.v_)(e.points),1),(0,n.Lk)("td",_,[(0,n.Lk)("button",{class:"btn-icon success",onClick:s=>r.incrementPoints(e)},s[7]||(s[7]=[(0,n.Lk)("span",null,"+",-1)]),8,y),(0,n.Lk)("button",{class:"btn-icon warning",onClick:s=>r.decrementPoints(e)},s[8]||(s[8]=[(0,n.Lk)("span",null,"-",-1)]),8,T)])])))),128))])])])}var M={name:"UserTable",setup(){const e=(0,u.Pj)(),s=(0,n.EW)((()=>e.getters["users/filteredAndSortedUsers"])),t=s=>{e.dispatch("users/setSortBy",s)},r=s=>{e.dispatch("users/setSelectedUser",{...s})},o=s=>{e.dispatch("users/updatePoints",{userId:s.id,points:s.points+1})},a=s=>{e.dispatch("users/updatePoints",{userId:s.id,points:s.points-1})},d=s=>{e.dispatch("users/deleteUser",s.id)};return{users:s,viewUser:r,incrementPoints:o,decrementPoints:a,deleteUser:d,handleSort:t}}};const w=(0,f.A)(M,[["render",D],["__scopeId","data-v-5d1b2cd4"]]);var A=w;const P={class:"modal-header"},B={class:"form-group"},O=["disabled"],R={class:"form-group"},j=["disabled"],I={class:"form-group"},x=["disabled"],W={class:"modal-footer"},X={key:0,type:"submit",class:"btn-primary"};function F(e,s,t,o,a,d){return t.show?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:s[7]||(s[7]=(...e)=>o.closeModal&&o.closeModal(...e))},[(0,n.Lk)("div",{class:"modal-content",onClick:s[6]||(s[6]=(0,r.D$)((()=>{}),["stop"]))},[(0,n.Lk)("div",P,[(0,n.Lk)("h3",null,(0,k.v_)(o.isEditing?"View User details":"Add New User"),1),(0,n.Lk)("button",{class:"close-button",onClick:s[0]||(s[0]=(...e)=>o.closeModal&&o.closeModal(...e))},"×")]),(0,n.Lk)("form",{onSubmit:s[5]||(s[5]=(0,r.D$)(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"])),class:"modal-form"},[(0,n.Lk)("div",B,[s[8]||(s[8]=(0,n.Lk)("label",{for:"name"},"Name",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":s[1]||(s[1]=e=>o.formData.name=e),required:"",class:"form-input",disabled:o.isEditing},null,8,O),[[r.Jo,o.formData.name]])]),(0,n.Lk)("div",R,[s[9]||(s[9]=(0,n.Lk)("label",{for:"age"},"Age",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",id:"age","onUpdate:modelValue":s[2]||(s[2]=e=>o.formData.age=e),required:"",class:"form-input",disabled:o.isEditing},null,8,j),[[r.Jo,o.formData.age,void 0,{number:!0}]])]),(0,n.Lk)("div",I,[s[10]||(s[10]=(0,n.Lk)("label",{for:"address"},"Address",-1)),(0,n.bo)((0,n.Lk)("textarea",{id:"address","onUpdate:modelValue":s[3]||(s[3]=e=>o.formData.address=e),required:"",class:"form-input",disabled:o.isEditing},null,8,x),[[r.Jo,o.formData.address]])]),(0,n.Lk)("div",W,[(0,n.Lk)("button",{type:"button",class:"btn-secondary",onClick:s[4]||(s[4]=(...e)=>o.closeModal&&o.closeModal(...e))}," Cancel "),o.isEditing?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("button",X," Add User "))])],32)])])):(0,n.Q3)("",!0)}var J={name:"UserModal",props:{show:{type:Boolean,required:!0},user:{type:Object,default:null}},setup(e,{emit:s}){const t=(0,u.Pj)(),r=(0,c.KR)({name:"",age:"",address:"",points:0}),o=(0,n.EW)((()=>!!e.user));(0,n.wB)((()=>e.user),(e=>{e?r.value={...e}:a()}));const a=()=>{r.value={name:"",age:"",address:"",points:0}},d=()=>{o.value?t.dispatch("users/updateUser",r.value):t.dispatch("users/addUser",r.value),l()},l=()=>{s("close"),a()};return{formData:r,isEditing:o,handleSubmit:d,closeModal:l}}};const N=(0,f.A)(J,[["render",F],["__scopeId","data-v-6569646b"]]);var V=N,q={name:"LeaderBoard",components:{SearchBar:h,UserTable:A,UserModal:V},setup(){const e=(0,u.Pj)(),s=(0,c.KR)(!1),t=(0,n.EW)((()=>e.state.users.selectedUser)),r=(0,n.EW)((()=>s.value||!!t.value)),o=()=>{s.value=!0},a=()=>{s.value=!1,e.dispatch("users/setSelectedUser",null)};return{showModal:r,selectedUser:t,openAddModal:o,closeModal:a}}};const K=(0,f.A)(q,[["render",i],["__scopeId","data-v-11b54b5a"]]);var Q=K,$={name:"App",components:{Leaderboard:Q}};const H=(0,f.A)($,[["render",a]]);var z=H;t(4114),t(8992),t(4520),t(2577);const G={users:[{id:1,name:"John",age:28,points:0,address:"18, Wellington St."},{id:2,name:"Summit",age:21,points:0,address:"19, Wellington St."},{id:3,name:"Elvis",age:23,points:0,address:"18, Carl Towers"},{id:4,name:"Donanld",age:22,points:0,address:"141, Lane 8, Queen St."},{id:5,name:"Marie",age:29,points:0,address:"1, 2nd floor, Marriott Suites"},{id:6,name:"Jacob",age:18,points:0,address:"306, Sunset Street, Manchester"}],selectedUser:null,searchTerm:"",sortBy:"points",sortDirection:"desc"},Y={ADD_USER(e,s){e.users.push({...s,id:10*Math.random()})},DELETE_USER(e,s){e.users=e.users.filter((e=>e.id!==s))},UPDATE_POINTS(e,{userId:s,points:t}){const r=e.users.find((e=>e.id===s));r&&(r.points=t)},SET_SELECTED_USER(e,s){e.selectedUser=s},SET_SEARCH_TERM(e,s){e.searchTerm=s},SET_SORT(e,{sortBy:s,direction:t}){e.sortBy=s,e.sortDirection=t}},Z={addUser({commit:e},s){e("ADD_USER",s)},deleteUser({commit:e},s){e("DELETE_USER",s)},updatePoints({commit:e},s){e("UPDATE_POINTS",s)},setSelectedUser({commit:e},s){e("SET_SELECTED_USER",s)},setSearchTerm({commit:e},s){e("SET_SEARCH_TERM",s)},setSortBy({commit:e,state:s},t){const r=s.sortBy===t&&"asc"===s.sortDirection?"desc":"asc";e("SET_SORT",{sortBy:t,direction:r})}},ee={filteredAndSortedUsers:e=>[...e.users].filter((s=>s.name.toLowerCase().includes(e.searchTerm.toLowerCase()))).sort(((s,t)=>{const r="asc"===e.sortDirection?1:-1;return"name"===e.sortBy?r*s.name.localeCompare(t.name):r*(s[e.sortBy]-t[e.sortBy])}))};var se={namespaced:!0,state:G,mutations:Y,actions:Z,getters:ee},te=(0,u.y$)({modules:{users:se}});const re=(0,r.Ef)(z);re.use(te),re.mount("#app")}},s={};function t(r){var n=s[r];if(void 0!==n)return n.exports;var o=s[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(s,r,n,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],o=e[c][2];for(var d=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(d=!1,o<a&&(a=o));if(d){e.splice(c--,1);var i=n();void 0!==i&&(s=i)}}return s}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,r){var n,o,a=r[0],d=r[1],l=r[2],i=0;if(a.some((function(s){return 0!==e[s]}))){for(n in d)t.o(d,n)&&(t.m[n]=d[n]);if(l)var c=l(t)}for(s&&s(r);i<a.length;i++)o=a[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},r=self["webpackChunkleaderboard"]=self["webpackChunkleaderboard"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4704)}));r=t.O(r)})();
//# sourceMappingURL=app.91bceb61.js.map