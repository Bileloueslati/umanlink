"use strict";
(self["webpackChunkumanlink"] = self["webpackChunkumanlink"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/app.scss */ "./assets/style/app.scss");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");



__webpack_require__(/*! ./js/swiper */ "./assets/js/swiper.ts");

__webpack_require__(/*! ./js/navbar */ "./assets/js/navbar.ts");

__webpack_require__(/*! ./js/accordion */ "./assets/js/accordion.ts");

__webpack_require__(/*! ./js/form_validation */ "./assets/js/form_validation.ts");

__webpack_require__(/*! ./js/modal */ "./assets/js/modal.ts");

__webpack_require__(/*! ./js/job_filter */ "./assets/js/job_filter.ts");

__webpack_require__(/*! ./js/job_form */ "./assets/js/job_form.ts");

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
  document.addEventListener("turbo:load", function () {
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
  });
})();



/***/ }),

/***/ "./assets/js/form_validation.ts":
/*!**************************************!*\
  !*** ./assets/js/form_validation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener("turbo:load", function (e) {
  console.log(e);
});


/***/ }),

/***/ "./assets/js/job_filter.ts":
/*!*********************************!*\
  !*** ./assets/js/job_filter.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener("turbo:load", function () {
  var select = document.getElementById("job_filter");
  var jobs = document.querySelectorAll(".job");

  if (select) {
    select.addEventListener("change", function (e) {
      var entity = e.target.value;
      jobs.forEach(function (job) {
        var target = job.dataset.entity;

        if (target === entity || entity === "all") {
          job.style.display = "flex";
        } else {
          job.style.display = "none";
        }
      });
    });
  }
});


/***/ }),

/***/ "./assets/js/job_form.ts":
/*!*******************************!*\
  !*** ./assets/js/job_form.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener("turbo:load", function () {
  var jobList = document.getElementById("job_list");

  if (jobList) {
    jobList.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var job = btn.closest(".job");
        var modal = document.getElementById("modal");

        if (job && modal) {
          var jobDetails = ["job_title", "entity", "location", "time"];
          jobDetails.forEach(function (item) {
            var _a;

            var detail = (_a = job.querySelector(".".concat(item))) === null || _a === void 0 ? void 0 : _a.textContent;
            var modalTarget = modal.querySelector("#".concat(item));
            modalTarget.innerHTML = detail;
          });
        }
      });
    });
  }
});


/***/ }),

/***/ "./assets/js/modal.ts":
/*!****************************!*\
  !*** ./assets/js/modal.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener("turbo:load", function () {
  var handleVisiblity = function handleVisiblity(action, modal) {
    if (action === "show") {
      document.body.style.overflow = "hidden";
      modal.classList.add("show");
    } else {
      document.body.style.removeProperty("overflow");
      modal.classList.remove("show");
    }
  };

  document.querySelectorAll("button").forEach(function (btn) {
    var target = btn.dataset.target;

    if (target === "modal") {
      var modal_1 = document.getElementById(target);

      if (modal_1) {
        btn.addEventListener("click", function () {
          handleVisiblity("show", modal_1);
        });
      }
    }
  });
  document.querySelectorAll(".modal").forEach(function (modal) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("show")) {
        handleVisiblity("hide", modal);
      }
    });
    var closeBtn = modal.querySelector(".close");

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        handleVisiblity("hide", modal);
      });
    }
  });
});


/***/ }),

/***/ "./assets/js/navbar.ts":
/*!*****************************!*\
  !*** ./assets/js/navbar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  document.addEventListener("turbo:load", function () {
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





document.addEventListener("turbo:load", function () {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_core-js_modules_es_-f175cc"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR3RCLEVBQUUsQ0FBQ3NCLEVBQTdCO0lBQUEsSUFBaUNDLEVBQUUsR0FBR3ZCLEVBQUUsQ0FBQ3VCLEVBQXpDO0lBQUEsSUFBNkNDLEVBQUUsR0FBR3hCLEVBQUUsQ0FBQ3dCLEVBQXJEO0lBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQUlOLDhDQUFKLENBQVdFLEVBQVgsRUFBZTtNQUN4QkssSUFBSSxFQUFFLElBRGtCO01BRXhCQyxRQUFRLEVBQUUsSUFGYztNQUd4QkMsYUFBYSxFQUFFQyxNQUFNLENBQUNOLEVBQUQsQ0FBTixJQUFjLENBSEw7TUFJeEJPLFlBQVksRUFBRSxFQUpVO01BS3hCQyxPQUFPLEVBQUUsQ0FBQ1gsOENBQUQsQ0FMZTtNQU14QlksVUFBVSxFQUFFO1FBQ1JDLE1BQU0sRUFBRSxxQkFEQTtRQUVSQyxNQUFNLEVBQUU7TUFGQSxDQU5ZO01BVXhCQyxXQUFXLEVBQUU7UUFDVCxLQUFLO1VBQ0RQLGFBQWEsRUFBRUMsTUFBTSxDQUFDUCxFQUFELENBQU4sSUFBYyxDQUQ1QjtVQUVEUSxZQUFZLEVBQUU7UUFGYixDQURJO1FBS1QsS0FBSztVQUNERixhQUFhLEVBQUVDLE1BQU0sQ0FBQ1AsRUFBRCxDQUFOLElBQWMsQ0FENUI7VUFFRFEsWUFBWSxFQUFFO1FBRmIsQ0FMSTtRQVNULEtBQUs7VUFDREYsYUFBYSxFQUFFQyxNQUFNLENBQUNMLEVBQUQsQ0FBTixJQUFjLENBRDVCO1VBRURNLFlBQVksRUFBRTtRQUZiLENBVEk7UUFhVCxNQUFNO1VBQ0ZGLGFBQWEsRUFBRUMsTUFBTSxDQUFDTixFQUFELENBQU4sSUFBYyxDQUQzQjtVQUVGTyxZQUFZLEVBQUU7UUFGWjtNQWJHO0lBVlcsQ0FBZixDQUFiO0VBNkJILENBL0JEO0FBZ0NILENBakNEOzs7Ozs7Ozs7OztBQ0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9mb3JtX3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvam9iX2ZpbHRlci50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9qb2JfZm9ybS50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9tb2RhbC50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvc3dpcGVyLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL3N0eWxlL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUvYXBwLnNjc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIFR1cmJvIGZyb20gXCJAaG90d2lyZWQvdHVyYm9cIjtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL3N3aXBlclwiKTtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL25hdmJhclwiKTtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL2FjY29yZGlvblwiKTtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL2Zvcm1fdmFsaWRhdGlvblwiKTtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL21vZGFsXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvam9iX2ZpbHRlclwiKTtcclxuXHJcbnJlcXVpcmUoXCIuL2pzL2pvYl9mb3JtXCIpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgYWNjb3JkaW9uID0gY3VycmVudEl0ZW0uY2xvc2VzdChcIi5hY2NvcmRpb25cIik7XHJcbiAgICAgICAgICAgIGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmFcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5ib2R5XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtbWludXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtbWludXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gYnRuLmNsb3Nlc3QoXCIuaXRlbVwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uXCIpLmZvckVhY2goZnVuY3Rpb24gKGFjY29yZGlvbikge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbmV4cG9ydCB7fTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG59KTtcclxuZXhwb3J0IHt9O1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb2JfZmlsdGVyXCIpO1xyXG4gICAgdmFyIGpvYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvYlwiKTtcclxuICAgIGlmIChzZWxlY3QpIHtcclxuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGpvYnMuZm9yRWFjaChmdW5jdGlvbiAoam9iKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gam9iLmRhdGFzZXQuZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gZW50aXR5IHx8IGVudGl0eSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCB7fTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGpvYkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYl9saXN0XCIpO1xyXG4gICAgaWYgKGpvYkxpc3QpIHtcclxuICAgICAgICBqb2JMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpvYiA9IGJ0bi5jbG9zZXN0KFwiLmpvYlwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoam9iICYmIG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpvYkRldGFpbHMgPSBbXCJqb2JfdGl0bGVcIiwgXCJlbnRpdHlcIiwgXCJsb2NhdGlvblwiLCBcInRpbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgam9iRGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IChfYSA9IGpvYi5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChpdGVtKSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsVGFyZ2V0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFRhcmdldC5pbm5lckhUTUwgPSBkZXRhaWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IHt9O1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaGFuZGxlVmlzaWJsaXR5ID0gZnVuY3Rpb24gKGFjdGlvbiwgbW9kYWwpIHtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBidG4uZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gXCJtb2RhbFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKG1vZGFsXzEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZpc2libGl0eShcInNob3dcIiwgbW9kYWxfMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5leHBvcnQge307XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGwgPSAwO1xyXG4gICAgICAgIHZhciBoZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhc3RTY3JvbGwgPiBjdXJyZW50U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuZXhwb3J0IHt9O1xyXG4iLCJpbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpcGVyXCIpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdmFyIF9hID0gZWwuZGF0YXNldCwgeHMgPSBfYS54cywgbGcgPSBfYS5sZywgbWQgPSBfYS5tZDtcclxuICAgICAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKGxnKSB8fCAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLW5leHQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1wcmV2LWJ1dHRvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKG1kKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcihsZykgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlR1cmJvIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImN1cnJlbnRJdGVtIiwiYWNjb3JkaW9uIiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwib3BhY2l0eSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUNsaWNrIiwiZSIsImJ0biIsInRhcmdldCIsIml0ZW1zIiwiaSIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsImpvYnMiLCJlbnRpdHkiLCJ2YWx1ZSIsImpvYiIsImRhdGFzZXQiLCJkaXNwbGF5Iiwiam9iTGlzdCIsIm1vZGFsIiwiam9iRGV0YWlscyIsIl9hIiwiZGV0YWlsIiwiY29uY2F0IiwidGV4dENvbnRlbnQiLCJtb2RhbFRhcmdldCIsImlubmVySFRNTCIsImhhbmRsZVZpc2libGl0eSIsImFjdGlvbiIsIm92ZXJmbG93IiwicmVtb3ZlUHJvcGVydHkiLCJtb2RhbF8xIiwia2V5IiwiY29udGFpbnMiLCJjbG9zZUJ0biIsImxhc3RTY3JvbGwiLCJoZWFkZXJFbCIsImN1cnJlbnRTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsImVsIiwieHMiLCJsZyIsIm1kIiwic3dpcGVyIiwibG9vcCIsImF1dG9wbGF5Iiwic2xpZGVzUGVyVmlldyIsIk51bWJlciIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9