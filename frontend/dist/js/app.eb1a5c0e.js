(function(){"use strict";var o={414:function(o,t,e){var n=e(5130),r=e(6768);const a={id:"app"};function l(o,t){const e=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(e)])}var u=e(1241);const i={},s=(0,u.A)(i,[["render",l]]);var c=s,p=e(4373),d=e(973),h=(e(4114),e(144));const v={class:"map-container"},m={ref:"map",class:"map"};function f(o,t,e,n,a,l){return(0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("div",m,null,512)])}var g=e(6886),k=e.n(g),b=e.p+"img/volcan.63713fbe.png",L=e.p+"img/volcan_eruption.b8beb67e.png",y={name:"MapComponent",data(){return{map:null,volcanoes:[]}},async mounted(){this.initMap()},methods:{initMap(){this.map=k().map(this.$refs.map).setView([0,0],4),k().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.map.whenReady((()=>{this.loadVolcanoes()}))},async loadVolcanoes(){try{const o=await p.A.get("/api/volcanoes/");this.volcanoes=o.data,this.volcanoes.forEach((o=>{const t=this.getMarkerIcon(o.eruption_time),e=k().marker([o.latitude,o.longitude],{icon:t});e.bindTooltip(this.createPopupContent(o,o.id),{direction:"top",offset:[0,-20]}),e.on("click",(()=>this.onMarkerClick(o.id))),e.addTo(this.map)}))}catch(o){console.error("Error loading volcanoes:",o)}},onMarkerClick(o){this.$router.push(`/volcano/${o}`)},createPopupContent(o){let t=`\n        <b>${o.name}</b><br>\n        Location: ${o.location}<br>\n        Country: ${o.country}<br>\n        Height: ${o.height} meters<br>\n        Next Eruption: ${this.formatTimeToEruption(o.eruption_time)}\n      `;return t},formatTimeToEruption(o){const t=60,e=60*t,n=24*e,r=30*n,a=12*r;let l=o;const u=Math.floor(l/a);l%=a;const i=Math.floor(l/r);l%=r;const s=Math.floor(l/n);l%=n;const c=Math.floor(l/e);l%=e;const p=Math.floor(l/t),d=l%t;return`${u} years, ${i} months, ${s} days, ${c} hours, ${p} minutes, ${d} seconds`},getMarkerIcon(o){const t=2592e3;return o<t?k().icon({iconUrl:L,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]}):k().icon({iconUrl:b,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]})}},beforeUnmount(){this.map&&(this.map.remove(),this.map=null)}};const _=(0,u.A)(y,[["render",f],["__scopeId","data-v-02bbdb22"]]);var C=_;const E=o=>((0,r.Qi)("data-v-16a06ec4"),o=o(),(0,r.jt)(),o),w=E((()=>(0,r.Lk)("h1",null,"Welcome to Map View",-1)));var M={__name:"MapView",setup(o){const t=(0,d.rd)(),e=(0,h.KR)(!1),n=()=>{t.push("/register")},a=()=>{t.push("/login")},l=()=>{t.push("/profile")},u=()=>{localStorage.removeItem("auth_token"),window.location.reload()};return(0,r.sV)((()=>{const o=localStorage.getItem("auth_token");e.value=!!o})),(o,t)=>((0,r.uX)(),(0,r.CE)("div",null,[e.value?((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:l},"Profile")):(0,r.Q3)("",!0),e.value?((0,r.uX)(),(0,r.CE)("button",{key:1,onClick:u},"Logout")):(0,r.Q3)("",!0),e.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:n},"Register")),e.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:3,onClick:a},"Go to Login")),w,(0,r.bF)(C)]))}};const $=(0,u.A)(M,[["__scopeId","data-v-16a06ec4"]]);var V=$;const A=(0,r.Lk)("h2",null,"Login",-1),U=(0,r.Lk)("button",{type:"submit"},"Login",-1);var R={__name:"LoginComponent",setup(o){const t=(0,d.rd)(),e=(0,h.KR)(""),a=(0,h.KR)(""),l=async()=>{try{const o=await p.A.post("api/auth/token/login/",{username:e.value,password:a.value}),n=o.data.auth_token;localStorage.setItem("auth_token",n),console.log("User logged in:",n),alert("Login successful!"),t.push("/")}catch(o){console.error("Login error:",o),alert("Login failed. Please check your credentials.")}};return(o,t)=>((0,r.uX)(),(0,r.CE)("div",null,[A,(0,r.Lk)("form",{onSubmit:(0,n.D$)(l,["prevent"])},[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),placeholder:"Username",required:""},null,512),[[n.Jo,e.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),placeholder:"Password",type:"password",required:""},null,512),[[n.Jo,a.value]]),U],32)]))}};const P=R;var S=P,T={__name:"LoginView",setup(o){const t=(0,d.rd)(),e=()=>{t.push("/register")};return(o,t)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(S),(0,r.Lk)("button",{onClick:e},"Register Here")]))}};const X=T;var O=X;const I=(0,r.Lk)("h2",null,"Register",-1),F=(0,r.Lk)("button",{type:"submit"},"Register",-1);var j={__name:"RegisterComponent",setup(o){const t=(0,d.rd)(),e=(0,h.KR)(""),a=(0,h.KR)(""),l=(0,h.KR)(""),u=async()=>{try{await p.A.post("api/auth/users/",{username:e.value,email:a.value,password:l.value}),alert("User registered successfully!"),t.push("/login")}catch(o){console.error("Registration error:",o),alert("Failed to register user.")}};return(o,t)=>((0,r.uX)(),(0,r.CE)("div",null,[I,(0,r.Lk)("form",{onSubmit:(0,n.D$)(u,["prevent"])},[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),placeholder:"Username",required:""},null,512),[[n.Jo,e.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),placeholder:"Email",type:"email",required:""},null,512),[[n.Jo,a.value]]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l.value=o),placeholder:"Password",type:"password",required:""},null,512),[[n.Jo,l.value]]),F],32)]))}};const D=j;var x=D;const K=(0,r.Lk)("h1",null,"Registration Page",-1);var Q={__name:"RegisterView",setup(o){const t=(0,d.rd)(),e=()=>{t.push("/")},n=()=>{t.push("/login")};return(o,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",null,[K,(0,r.bF)(x)]),(0,r.Lk)("div",null,[(0,r.Lk)("button",{onClick:e},"Go to Map"),(0,r.Lk)("button",{onClick:n},"Go to Login")])],64))}};const W=Q;var q=W,z=e(4232);const J=(0,r.Lk)("h2",null,"User Profile",-1),N={key:0};function G(o,t,e,n,a,l){return(0,r.uX)(),(0,r.CE)("div",null,[J,a.user?((0,r.uX)(),(0,r.CE)("div",N,[(0,r.Lk)("p",null,"Username: "+(0,z.v_)(a.user.username),1),(0,r.Lk)("p",null,"Email: "+(0,z.v_)(a.user.email),1)])):(0,r.Q3)("",!0)])}var H={data(){return{user:null}},async mounted(){const o=localStorage.getItem("auth_token");if(o)try{const t=await p.A.get("api/auth/users/me/",{headers:{Authorization:`Token ${o}`}});this.user=t.data}catch(t){console.error("Error fetching user data:",t)}}};const B=(0,u.A)(H,[["render",G]]);var Y=B;const Z=(0,r.Lk)("h1",null,"Profile Details",-1);var oo={__name:"UserProfileView",setup(o){const t=(0,d.rd)(),e=()=>{t.push("/")},n=()=>{localStorage.removeItem("auth_token"),t.push("/")};return(o,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",null,[Z,(0,r.bF)(Y)]),(0,r.Lk)("div",null,[(0,r.Lk)("button",{onClick:e},"Go to Map"),(0,r.Lk)("button",{onClick:n},"Logout")])],64))}};const to=oo;var eo=to;const no=o=>((0,r.Qi)("data-v-72079d2b"),o=o(),(0,r.jt)(),o),ro={class:"volcano-details"},ao=no((()=>(0,r.Lk)("h2",null,"Volcano Details",-1))),lo={key:0},uo=no((()=>(0,r.Lk)("strong",null,"Name:",-1))),io=no((()=>(0,r.Lk)("strong",null,"Location:",-1))),so=no((()=>(0,r.Lk)("strong",null,"Country:",-1))),co=no((()=>(0,r.Lk)("strong",null,"Height:",-1))),po=no((()=>(0,r.Lk)("strong",null,"Next Eruption:",-1)));function ho(o,t,e,n,a,l){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",ro,[ao,a.volcano?((0,r.uX)(),(0,r.CE)("div",lo,[(0,r.Lk)("p",null,[uo,(0,r.eW)(" "+(0,z.v_)(a.volcano.name),1)]),(0,r.Lk)("p",null,[io,(0,r.eW)(" "+(0,z.v_)(a.volcano.location),1)]),(0,r.Lk)("p",null,[so,(0,r.eW)(" "+(0,z.v_)(a.volcano.country),1)]),(0,r.Lk)("p",null,[co,(0,r.eW)(" "+(0,z.v_)(a.volcano.height)+" meters",1)]),(0,r.Lk)("p",null,[po,(0,r.eW)(" "+(0,z.v_)(l.formatTimeToEruption(a.volcano.eruption_time)),1)])])):(0,r.Q3)("",!0),(0,r.bF)(u,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Back to Map")])),_:1})])}var vo={name:"VolcanoDetails",data(){return{volcano:null}},async mounted(){await this.loadVolcanoDetails()},methods:{async loadVolcanoDetails(){try{const o=this.$route.params.id,t=await p.A.get(`/api/volcanoes/${o}/`);this.volcano=t.data}catch(o){console.error("Error loading volcano details:",o)}},formatTimeToEruption(o){const t=60,e=60*t,n=24*e,r=30*n,a=12*r;let l=o;const u=Math.floor(l/a);l%=a;const i=Math.floor(l/r);l%=r;const s=Math.floor(l/n);l%=n;const c=Math.floor(l/e);l%=e;const p=Math.floor(l/t),d=l%t;return`${u} years, ${i} months, ${s} days, ${c} hours, ${p} minutes, ${d} seconds`}}};const mo=(0,u.A)(vo,[["render",ho],["__scopeId","data-v-72079d2b"]]);var fo=mo;const go=(0,r.Lk)("h1",null,"Volcano Details",-1);var ko={__name:"VolcanoDetailsView",setup(o){return(o,t)=>((0,r.uX)(),(0,r.CE)("div",null,[go,(0,r.bF)(fo)]))}};const bo=ko;var Lo=bo;const yo=[{path:"/",component:V},{path:"/login",component:O},{path:"/register",component:q},{path:"/profile",component:eo},{path:"/volcano/:id",component:Lo}],_o=(0,d.LA)(),Co=(0,d.aE)({history:_o,routes:yo});var Eo=Co;p.A.defaults.baseURL={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL||"http://localhost:8000";const wo=localStorage.getItem("auth_token");wo&&(p.A.defaults.headers.common["Authorization"]=`Token ${wo}`);const Mo=(0,n.Ef)(c);Mo.use(Eo),Mo.mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return o[n].call(a.exports,a,a.exports,e),a.exports}e.m=o,function(){var o=[];e.O=function(t,n,r,a){if(!n){var l=1/0;for(c=0;c<o.length;c++){n=o[c][0],r=o[c][1],a=o[c][2];for(var u=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(e.O).every((function(o){return e.O[o](n[i])}))?n.splice(i--,1):(u=!1,a<l&&(l=a));if(u){o.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=o.length;c>0&&o[c-1][2]>a;c--)o[c]=o[c-1];o[c]=[n,r,a]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var r,a,l=n[0],u=n[1],i=n[2],s=0;if(l.some((function(t){return 0!==o[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(i)var c=i(e)}for(t&&t(n);s<l.length;s++)a=l[s],e.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return e.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(414)}));n=e.O(n)})();
//# sourceMappingURL=app.eb1a5c0e.js.map