"use strict";
(self["webpackChunkumanlink"] = self["webpackChunkumanlink"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/app.scss */ "./assets/style/app.scss");


__webpack_require__(/*! ./js/swiper */ "./assets/js/swiper.ts");

__webpack_require__(/*! ./js/navbar */ "./assets/js/navbar.ts");

__webpack_require__(/*! ./js/accordion */ "./assets/js/accordion.ts");

/***/ }),

/***/ "./assets/js/accordion.ts":
/*!********************************!*\
  !*** ./assets/js/accordion.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);




(function () {
  var toggle = function toggle(currentItem) {
    var accordion = currentItem.closest(".accordion");
    accordion.querySelectorAll(".item").forEach(function (item) {
      var icon = item.querySelector(".fa");
      var body = item.querySelector(".body");

      if (item !== currentItem) {
        item.classList.remove("active");
        body.style.opacity = "0";
        icon.classList.add("fa-plus");
        icon.classList.remove("fa-minus");
        body.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        icon.classList.add("fa-minus");
        icon.classList.remove("fa-plus");
        body.style.opacity = "1";
        body.setAttribute("aria-expanded", "true");
      }
    });
  };

  var handleClick = function handleClick(e) {
    var btn = e.target;
    var currentItem = btn.closest(".item");
    toggle(currentItem);
  };

  document.querySelectorAll(".accordion").forEach(function (accordion) {
    var items = accordion.querySelectorAll(".item");
    items.forEach(function (item, i) {
      var header = item.querySelector(".header");
      header.addEventListener("click", handleClick);

      if (i === 0) {
        toggle(item);
      }
    });
  });
})();



/***/ }),

/***/ "./assets/js/navbar.ts":
/*!*****************************!*\
  !*** ./assets/js/navbar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var lastScroll = 0;
  var headerEl = document.querySelector("header");
  document.addEventListener("scroll", function () {
    var currentScroll = window.scrollY;

    if (currentScroll < 200) {
      headerEl.classList.remove("-translate-y-full");
      return;
    }

    if (lastScroll > currentScroll) {
      headerEl.classList.remove("-translate-y-full");
    } else {
      headerEl.classList.add("-translate-y-full");
    }

    lastScroll = currentScroll;
  });
})();



/***/ }),

/***/ "./assets/js/swiper.ts":
/*!*****************************!*\
  !*** ./assets/js/swiper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");





document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".swiper").forEach(function (el) {
    var _a = el.dataset,
        xs = _a.xs,
        lg = _a.lg,
        md = _a.md;
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_4__["default"](el, {
      loop: true,
      autoplay: true,
      slidesPerView: Number(lg) || 3,
      spaceBetween: 30,
      modules: [swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation],
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
      },
      breakpoints: {
        320: {
          slidesPerView: Number(xs) || 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: Number(xs) || 2,
          spaceBetween: 30
        },
        720: {
          slidesPerView: Number(md) || 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: Number(lg) || 2,
          spaceBetween: 20
        }
      }
    });
  });
});

/***/ }),

/***/ "./assets/style/app.scss":
/*!*******************************!*\
  !*** ./assets/style/app.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_num-55de08"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLENBRDVCO1VBRURRLFlBQVksRUFBRTtRQUZiLENBREk7UUFLVCxLQUFLO1VBQ0RGLGFBQWEsRUFBRUMsTUFBTSxDQUFDUCxFQUFELENBQU4sSUFBYyxDQUQ1QjtVQUVEUSxZQUFZLEVBQUU7UUFGYixDQUxJO1FBU1QsS0FBSztVQUNERixhQUFhLEVBQUVDLE1BQU0sQ0FBQ0wsRUFBRCxDQUFOLElBQWMsQ0FENUI7VUFFRE0sWUFBWSxFQUFFO1FBRmIsQ0FUSTtRQWFULE1BQU07VUFDRkYsYUFBYSxFQUFFQyxNQUFNLENBQUNOLEVBQUQsQ0FBTixJQUFjLENBRDNCO1VBRUZPLFlBQVksRUFBRTtRQUZaO01BYkc7SUFWVyxDQUFmLENBQWI7RUE2QkgsQ0EvQkQ7QUFnQ0gsQ0FqQ0Q7Ozs7Ozs7Ozs7O0FDREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvYWNjb3JkaW9uLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL25hdmJhci50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9zd2lwZXIudHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvc3R5bGUvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS9hcHAuc2Nzc1wiO1xyXG5cclxucmVxdWlyZShcIi4vanMvc3dpcGVyXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvbmF2YmFyXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvYWNjb3JkaW9uXCIpO1xyXG5cclxuXHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG4gICAgICAgIHZhciBhY2NvcmRpb24gPSBjdXJyZW50SXRlbS5jbG9zZXN0KFwiLmFjY29yZGlvblwiKTtcclxuICAgICAgICBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmFcIik7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtbWludXNcIik7XHJcbiAgICAgICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLW1pbnVzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGJ0biA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGJ0bi5jbG9zZXN0KFwiLml0ZW1cIik7XHJcbiAgICAgICAgdG9nZ2xlKGN1cnJlbnRJdGVtKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvblwiKS5mb3JFYWNoKGZ1bmN0aW9uIChhY2NvcmRpb24pIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuZXhwb3J0IHt9O1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxhc3RTY3JvbGwgPSAwO1xyXG4gICAgdmFyIGhlYWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPCAyMDApIHtcclxuICAgICAgICAgICAgaGVhZGVyRWwuY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXN0U2Nyb2xsID4gY3VycmVudFNjcm9sbCkge1xyXG4gICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbmV4cG9ydCB7fTtcclxuIiwiaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN3aXBlclwiKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHZhciBfYSA9IGVsLmRhdGFzZXQsIHhzID0gX2EueHMsIGxnID0gX2EubGcsIG1kID0gX2EubWQ7XHJcbiAgICAgICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcihsZykgfHwgMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1uZXh0LWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItcHJldi1idXR0b25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcih4cykgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcih4cykgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDcyMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcihtZCkgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBOdW1iZXIobGcpIHx8IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidG9nZ2xlIiwiY3VycmVudEl0ZW0iLCJhY2NvcmRpb24iLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJvcGFjaXR5IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaGFuZGxlQ2xpY2siLCJlIiwiYnRuIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJpdGVtcyIsImkiLCJoZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibGFzdFNjcm9sbCIsImhlYWRlckVsIiwiY3VycmVudFNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiZWwiLCJfYSIsImRhdGFzZXQiLCJ4cyIsImxnIiwibWQiLCJzd2lwZXIiLCJsb29wIiwiYXV0b3BsYXkiLCJzbGlkZXNQZXJWaWV3IiwiTnVtYmVyIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=