(self.webpackChunkumanlink=self.webpackChunkumanlink||[]).push([[143],{8144:(e,t,n)=>{"use strict";n(6184);var r=n(2711),o=n.n(r),a=n(1153),l=n(9843),c=n(1997),i=n(2869);n(7352),n(1153),n(8166),n(286),n(4656),n(1191),n(2782),n(5659),n(1253),n(7700),document.addEventListener("turbo:load",(function(e){(0,a.default)();var t=document.getElementById("gallery");t&&(0,l.Z)(t,{plugins:[i.Z,c.Z],thumbnail:!0,download:!1})})),o().init({easing:"ease-out-back",duration:1e3,startEvent:"turbo:load",once:!0})},286:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747);document.addEventListener("turbo:load",(function(){var e=function(e){e.closest(".accordion").querySelectorAll(".item").forEach((function(t){var n=t.querySelector(".fa"),r=t.querySelector(".body");t!==e?(t.classList.remove("active"),r.style.opacity="0",n.classList.add("fa-plus"),n.classList.remove("fa-minus"),r.setAttribute("aria-expanded","false")):(t.classList.add("active"),n.classList.add("fa-minus"),n.classList.remove("fa-plus"),r.style.opacity="1",r.setAttribute("aria-expanded","true"))}))},t=function(t){var n=t.target.closest(".item");e(n)};document.querySelectorAll(".accordion").forEach((function(n){n.querySelectorAll(".item").forEach((function(n,r){n.querySelector(".header").addEventListener("click",t),0===r&&e(n)}))}))}))},4656:(e,t,n)=>{"use strict";n.r(t),document.addEventListener("turbo:load",(function(e){}))},1153:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});n(1038),n(8783),n(9554),n(1539),n(4747);function r(){var e=Array.from(document.querySelectorAll(".lazy-image"));if("IntersectionObserver"in window){var t=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var n=e.target,r=n.dataset.src;r&&(n.src=r,t.unobserve(n))}}))}));e.forEach((function(e){return t.observe(e)}))}}},2782:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747);document.addEventListener("turbo:load",(function(){var e=document.getElementById("job_filter"),t=document.querySelectorAll(".job");e&&e.addEventListener("change",(function(e){var n=e.target.value;t.forEach((function(e){e.dataset.entity===n||"all"===n?(e.style.display="flex",e.style.opacity="1"):(e.style.display="none",e.style.opacity="0")}))}))}))},5659:(e,t,n)=>{"use strict";n.r(t);n(1539),n(8674),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(9554),n(4747),n(2564),n(9720);var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function c(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}i((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return l};document.addEventListener("turbo:load",(function(){var e=document.getElementById("job_list"),t=document.getElementById("job_modal"),n=function(){null==t||t.querySelectorAll(".error").forEach((function(e){return e.remove()})),null==t||t.querySelectorAll(".form-control").forEach((function(e){return e.classList.remove("is-invalid")}))},l=document.querySelector("#job_application");e&&e.querySelectorAll("button").forEach((function(e){e.addEventListener("click",(function(){var r=e.closest(".job");if(r&&t){t.addEventListener("modal-hidden",(function(){l&&(l.reset(),n())})),["job_title","entity","location","time"].forEach((function(e){var n=r.querySelector('[data-target="'.concat(e,'"]')).dataset.value;n&&t.querySelectorAll(".".concat(e)).forEach((function(e){e instanceof HTMLInputElement?e.value=n:e.innerHTML=n}))}))}}))})),l&&l.addEventListener("submit",(function(e){return r(void 0,void 0,void 0,(function(){var r,c,i,s,u,d,f,v,y,m,p,b;return o(this,(function(o){switch(o.label){case 0:if(e.preventDefault(),n(),(r=l.querySelector('button[type="submit"]')).removeAttribute("disabled"),r.querySelector(".spinner").style.removeProperty("display"),c=new FormData(l),(i=null===(b=null===(p=l.querySelector("#file"))||void 0===p?void 0:p.files)||void 0===b?void 0:b[0])&&c.append("file",i),!(s=l.dataset.action))return[3,5];o.label=1;case 1:return o.trys.push([1,4,,5]),[4,fetch(s,{method:"POST",body:c})];case 2:return[4,(u=o.sent()).json()];case 3:if(d=o.sent(),!u.ok)throw new Error(JSON.stringify(d));return t&&(f=t.querySelector(".modal-body"),(v=f.querySelector("#success_message")).style.removeProperty("display"),f.innerHTML=v.innerHTML,setTimeout((function(){r.removeAttribute("disabled"),t.classList.remove("show"),document.body.style.removeProperty("overflow")}),4e3)),[3,5];case 4:return y=o.sent(),r.removeAttribute("disabled"),r.querySelector(".spinner").style.setProperty("display","none"),y instanceof Error&&(m=JSON.parse(y.message),Object.entries(m).forEach((function(e){var n,r=a(e,2),o=r[0],l=r[1],c=document.createElement("span");if(c.textContent=l,c.classList.add("error","text-red-600"),c.style.fontSize="13px",t){var i=t.querySelector("#".concat(o));null==i||i.classList.add("is-invalid"),null===(n=null==i?void 0:i.closest("div"))||void 0===n||n.appendChild(c)}}))),[3,5];case 5:return[2]}}))}))}))}))},1191:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747);document.addEventListener("turbo:load",(function(){var e=new Event("modal-hidden"),t=new Event("modal-show"),n=function(n,r){"show"===n?(document.body.style.overflow="hidden",r.classList.add("show"),r.dispatchEvent(t)):(document.body.style.removeProperty("overflow"),r.classList.remove("show"),r.dispatchEvent(e))};document.querySelectorAll("[data-toggle=modal]").forEach((function(e){var t=e.dataset.target;if(t){var r=document.getElementById(t);r&&e.addEventListener("click",(function(){n("show",r)}))}})),document.querySelectorAll(".modal").forEach((function(e){document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.classList.contains("show")&&n("hide",e)}));var t=e.querySelector(".close");t&&t.addEventListener("click",(function(){n("hide",e)}))}))}))},8166:(e,t,n)=>{"use strict";n.r(t),document.addEventListener("turbo:load",(function(){var e=0,t=document.querySelector("header");document.addEventListener("scroll",(function(){var n=window.scrollY;n<200?t.classList.remove("-translate-y-full"):(e>n?t.classList.remove("-translate-y-full"):t.classList.add("-translate-y-full"),e=n)}))}))},7700:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747);document.addEventListener("turbo:load",(function(){document.querySelectorAll('[data-canvas-toggle="offcanvas"]').forEach((function(e){var t=e.dataset.canvasTarget;if(t){var n=document.querySelector("#".concat(t));if(n)e.addEventListener("click",(function(){n.classList.add("show"),document.body.style.overflow="hidden"})),n.querySelector(".btn-close").addEventListener("click",(function(){n.classList.remove("show"),document.body.style.removeProperty("overflow")}))}}))}))},7352:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747),n(9653);var r=n(3178);document.addEventListener("turbo:load",(function(){document.querySelectorAll(".swiper").forEach((function(e){var t=e.dataset,n=t.xs,o=t.lg,a=t.md,l=t.rows,c=t.autoplay,i=t.speed,s={loop:!0,slidesPerView:Number(o)||3,spaceBetween:Number(i)||3e3,modules:[r.W_,r.rj,r.pt],speed:2e3,navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"},breakpoints:{320:{slidesPerView:Number(n)||2,spaceBetween:20},480:{slidesPerView:Number(n)||2,spaceBetween:30},720:{slidesPerView:Number(a)||2,spaceBetween:40},1024:{slidesPerView:Number(o)||2,spaceBetween:20}}};l&&s.breakpoints&&(s.breakpoints[1024].grid={rows:Number(l)}),c&&(s.autoplay=JSON.parse(c));new r.ZP(e,s)}))}))},1253:(e,t,n)=>{"use strict";n.r(t);n(9554),n(1539),n(4747);var r=n(3649);document.addEventListener("turbo:load",(function(){document.querySelectorAll(".video_player").forEach((function(e){var t=(0,r.Z)(e,{controls:!1,preload:"auto",language:"fr",muted:!0,fill:!0}),n=document.querySelector(".video_play");n&&n.addEventListener("click",(function(){var r=e.closest(".inner");r&&(r.style.display="block",n.style.display="none"),t.play()}))}))}))},5893:()=>{}},e=>{e.O(0,[650],(()=>{return t=8144,e(e.s=t);var t}));e.O()}]);