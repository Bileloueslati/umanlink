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
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");




__webpack_require__(/*! ./js/swiper */ "./assets/js/swiper.ts");

__webpack_require__(/*! ./js/navbar */ "./assets/js/navbar.ts");

__webpack_require__(/*! ./js/accordion */ "./assets/js/accordion.ts");

__webpack_require__(/*! ./js/form */ "./assets/js/form.ts");

__webpack_require__(/*! ./js/modal */ "./assets/js/modal.ts");

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

/***/ "./assets/js/form.ts":
/*!***************************!*\
  !*** ./assets/js/form.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");

var Rules;

(function (Rules) {
  Rules["Required"] = "required";
  Rules["Email"] = "email";
  Rules["MinLength"] = "minLength";
  Rules["MaxLength"] = "maxLength";
  Rules["Password"] = "password";
  Rules["Number"] = "number";
  Rules["MaxNumber"] = "maxNumber";
  Rules["MinNumber"] = "minNumber";
  Rules["StrongPassword"] = "strongPassword";
  Rules["CustomRegexp"] = "customRegexp";
  Rules["MinFilesCount"] = "minFilesCount";
  Rules["MaxFilesCount"] = "maxFilesCount";
  Rules["Files"] = "files";
})(Rules || (Rules = {}));

document.addEventListener("turbo:load", function () {
  var validate = new just_validate__WEBPACK_IMPORTED_MODULE_0__["default"]("#form", {
    errorFieldCssClass: "is-invalid",
    errorLabelStyle: {
      fontSize: "13px",
      color: "#dc3545"
    },
    focusInvalidField: true
  });
  validate.addField("#fullname", [{
    rule: Rules.Required
  }]).addField("#email", [{
    rule: Rules.Required
  }, {
    rule: Rules.Email
  }]).onSuccess(function (e) {
    validate.destroy(); // e?.preventDefault();

    var form = e === null || e === void 0 ? void 0 : e.target;
    var btn = form.querySelector("#submit-btn");

    if (btn) {
      form.requestSubmit(btn);
    }
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_core-js_modules_es_-064916"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUFFLG1CQUFPLENBQUMsMENBQUQsQ0FBUDs7QUFFQUEsbUJBQU8sQ0FBQywwQ0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLGdEQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsc0NBQUQsQ0FBUDs7QUFFQUEsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLDhDQUFELENBQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQSxDQUFDLFlBQVk7RUFDVEMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxZQUFZO0lBQ2hELElBQUlDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVVDLFdBQVYsRUFBdUI7TUFDaEMsSUFBSUMsU0FBUyxHQUFHRCxXQUFXLENBQUNFLE9BQVosQ0FBb0IsWUFBcEIsQ0FBaEI7TUFDQUQsU0FBUyxDQUFDRSxnQkFBVixDQUEyQixPQUEzQixFQUFvQ0MsT0FBcEMsQ0FBNEMsVUFBVUMsSUFBVixFQUFnQjtRQUN4RCxJQUFJQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsYUFBTCxDQUFtQixLQUFuQixDQUFYO1FBQ0EsSUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBWDs7UUFDQSxJQUFJRixJQUFJLEtBQUtMLFdBQWIsRUFBMEI7VUFDdEJLLElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO1VBQ0FGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEdBQXJCO1VBQ0FOLElBQUksQ0FBQ0csU0FBTCxDQUFlSSxHQUFmLENBQW1CLFNBQW5CO1VBQ0FQLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLFVBQXRCO1VBQ0FGLElBQUksQ0FBQ00sWUFBTCxDQUFrQixlQUFsQixFQUFtQyxPQUFuQztRQUNILENBTkQsTUFPSztVQUNEVCxJQUFJLENBQUNJLFNBQUwsQ0FBZUksR0FBZixDQUFtQixRQUFuQjtVQUNBUCxJQUFJLENBQUNHLFNBQUwsQ0FBZUksR0FBZixDQUFtQixVQUFuQjtVQUNBUCxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtVQUNBRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixHQUFyQjtVQUNBSixJQUFJLENBQUNNLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUMsTUFBbkM7UUFDSDtNQUNKLENBakJEO0lBa0JILENBcEJEOztJQXFCQSxJQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVQyxDQUFWLEVBQWE7TUFDM0IsSUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQVo7TUFDQSxJQUFJbEIsV0FBVyxHQUFHaUIsR0FBRyxDQUFDZixPQUFKLENBQVksT0FBWixDQUFsQjtNQUNBSCxNQUFNLENBQUNDLFdBQUQsQ0FBTjtJQUNILENBSkQ7O0lBS0FILFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NDLE9BQXhDLENBQWdELFVBQVVILFNBQVYsRUFBcUI7TUFDakUsSUFBSWtCLEtBQUssR0FBR2xCLFNBQVMsQ0FBQ0UsZ0JBQVYsQ0FBMkIsT0FBM0IsQ0FBWjtNQUNBZ0IsS0FBSyxDQUFDZixPQUFOLENBQWMsVUFBVUMsSUFBVixFQUFnQmUsQ0FBaEIsRUFBbUI7UUFDN0IsSUFBSUMsTUFBTSxHQUFHaEIsSUFBSSxDQUFDRSxhQUFMLENBQW1CLFNBQW5CLENBQWI7UUFDQWMsTUFBTSxDQUFDdkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNpQixXQUFqQzs7UUFDQSxJQUFJSyxDQUFDLEtBQUssQ0FBVixFQUFhO1VBQ1RyQixNQUFNLENBQUNNLElBQUQsQ0FBTjtRQUNIO01BQ0osQ0FORDtJQU9ILENBVEQ7RUFVSCxDQXJDRDtBQXNDSCxDQXZDRDs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUlpQixLQUFKOztBQUNBLENBQUMsVUFBVUEsS0FBVixFQUFpQjtFQUNkQSxLQUFLLENBQUMsVUFBRCxDQUFMLEdBQW9CLFVBQXBCO0VBQ0FBLEtBQUssQ0FBQyxPQUFELENBQUwsR0FBaUIsT0FBakI7RUFDQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxHQUFxQixXQUFyQjtFQUNBQSxLQUFLLENBQUMsV0FBRCxDQUFMLEdBQXFCLFdBQXJCO0VBQ0FBLEtBQUssQ0FBQyxVQUFELENBQUwsR0FBb0IsVUFBcEI7RUFDQUEsS0FBSyxDQUFDLFFBQUQsQ0FBTCxHQUFrQixRQUFsQjtFQUNBQSxLQUFLLENBQUMsV0FBRCxDQUFMLEdBQXFCLFdBQXJCO0VBQ0FBLEtBQUssQ0FBQyxXQUFELENBQUwsR0FBcUIsV0FBckI7RUFDQUEsS0FBSyxDQUFDLGdCQUFELENBQUwsR0FBMEIsZ0JBQTFCO0VBQ0FBLEtBQUssQ0FBQyxjQUFELENBQUwsR0FBd0IsY0FBeEI7RUFDQUEsS0FBSyxDQUFDLGVBQUQsQ0FBTCxHQUF5QixlQUF6QjtFQUNBQSxLQUFLLENBQUMsZUFBRCxDQUFMLEdBQXlCLGVBQXpCO0VBQ0FBLEtBQUssQ0FBQyxPQUFELENBQUwsR0FBaUIsT0FBakI7QUFDSCxDQWRELEVBY0dBLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0FkUjs7QUFlQXpCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsWUFBWTtFQUNoRCxJQUFJeUIsUUFBUSxHQUFHLElBQUk1QixxREFBSixDQUFpQixPQUFqQixFQUEwQjtJQUNyQzZCLGtCQUFrQixFQUFFLFlBRGlCO0lBRXJDQyxlQUFlLEVBQUU7TUFDYkMsUUFBUSxFQUFFLE1BREc7TUFFYkMsS0FBSyxFQUFFO0lBRk0sQ0FGb0I7SUFNckNDLGlCQUFpQixFQUFFO0VBTmtCLENBQTFCLENBQWY7RUFRQUwsUUFBUSxDQUNITSxRQURMLENBQ2MsV0FEZCxFQUMyQixDQUN2QjtJQUNJQyxJQUFJLEVBQUVSLEtBQUssQ0FBQ1M7RUFEaEIsQ0FEdUIsQ0FEM0IsRUFNS0YsUUFOTCxDQU1jLFFBTmQsRUFNd0IsQ0FDcEI7SUFDSUMsSUFBSSxFQUFFUixLQUFLLENBQUNTO0VBRGhCLENBRG9CLEVBSXBCO0lBQ0lELElBQUksRUFBRVIsS0FBSyxDQUFDVTtFQURoQixDQUpvQixDQU54QixFQWNLQyxTQWRMLENBY2UsVUFBVWpCLENBQVYsRUFBYTtJQUN4Qk8sUUFBUSxDQUFDVyxPQUFULEdBRHdCLENBRXhCOztJQUNBLElBQUlDLElBQUksR0FBR25CLENBQUMsS0FBSyxJQUFOLElBQWNBLENBQUMsS0FBSyxLQUFLLENBQXpCLEdBQTZCLEtBQUssQ0FBbEMsR0FBc0NBLENBQUMsQ0FBQ0UsTUFBbkQ7SUFDQSxJQUFJRCxHQUFHLEdBQUdrQixJQUFJLENBQUM1QixhQUFMLENBQW1CLGFBQW5CLENBQVY7O0lBQ0EsSUFBSVUsR0FBSixFQUFTO01BQ0xrQixJQUFJLENBQUNDLGFBQUwsQ0FBbUJuQixHQUFuQjtJQUNIO0VBQ0osQ0F0QkQ7QUF1QkgsQ0FoQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBcEIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxZQUFZO0VBQ2hELElBQUl1QyxPQUFPLEdBQUd4QyxRQUFRLENBQUN5QyxjQUFULENBQXdCLFVBQXhCLENBQWQ7O0VBQ0EsSUFBSUQsT0FBSixFQUFhO0lBQ1RBLE9BQU8sQ0FBQ2xDLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DQyxPQUFuQyxDQUEyQyxVQUFVYSxHQUFWLEVBQWU7TUFDdERBLEdBQUcsQ0FBQ25CLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7UUFDdEMsSUFBSXlDLEdBQUcsR0FBR3RCLEdBQUcsQ0FBQ2YsT0FBSixDQUFZLE1BQVosQ0FBVjtRQUNBLElBQUlzQyxLQUFLLEdBQUczQyxRQUFRLENBQUN5QyxjQUFULENBQXdCLE9BQXhCLENBQVo7O1FBQ0EsSUFBSUMsR0FBRyxJQUFJQyxLQUFYLEVBQWtCO1VBQ2QsSUFBSUMsVUFBVSxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsVUFBeEIsRUFBb0MsTUFBcEMsQ0FBakI7VUFDQUEsVUFBVSxDQUFDckMsT0FBWCxDQUFtQixVQUFVQyxJQUFWLEVBQWdCO1lBQy9CLElBQUlxQyxFQUFKOztZQUNBLElBQUlDLE1BQU0sR0FBRyxDQUFDRCxFQUFFLEdBQUdILEdBQUcsQ0FBQ2hDLGFBQUosQ0FBa0IsSUFBSXFDLE1BQUosQ0FBV3ZDLElBQVgsQ0FBbEIsQ0FBTixNQUErQyxJQUEvQyxJQUF1RHFDLEVBQUUsS0FBSyxLQUFLLENBQW5FLEdBQXVFLEtBQUssQ0FBNUUsR0FBZ0ZBLEVBQUUsQ0FBQ0csV0FBaEc7WUFDQSxJQUFJQyxXQUFXLEdBQUdOLEtBQUssQ0FBQ2pDLGFBQU4sQ0FBb0IsSUFBSXFDLE1BQUosQ0FBV3ZDLElBQVgsQ0FBcEIsQ0FBbEI7WUFDQXlDLFdBQVcsQ0FBQ0MsU0FBWixHQUF3QkosTUFBeEI7VUFDSCxDQUxEO1FBTUg7TUFDSixDQVpEO0lBYUgsQ0FkRDtFQWVIO0FBQ0osQ0FuQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxZQUFZO0VBQ2hELElBQUlrRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVVDLE1BQVYsRUFBa0JULEtBQWxCLEVBQXlCO0lBQzNDLElBQUlTLE1BQU0sS0FBSyxNQUFmLEVBQXVCO01BQ25CcEQsUUFBUSxDQUFDVyxJQUFULENBQWNHLEtBQWQsQ0FBb0J1QyxRQUFwQixHQUErQixRQUEvQjtNQUNBVixLQUFLLENBQUMvQixTQUFOLENBQWdCSSxHQUFoQixDQUFvQixNQUFwQjtJQUNILENBSEQsTUFJSztNQUNEaEIsUUFBUSxDQUFDVyxJQUFULENBQWNHLEtBQWQsQ0FBb0J3QyxjQUFwQixDQUFtQyxVQUFuQztNQUNBWCxLQUFLLENBQUMvQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QixNQUF2QjtJQUNIO0VBQ0osQ0FURDs7RUFVQWIsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0MsT0FBcEMsQ0FBNEMsVUFBVWEsR0FBVixFQUFlO0lBQ3ZELElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDbUMsT0FBSixDQUFZbEMsTUFBekI7O0lBQ0EsSUFBSUEsTUFBTSxLQUFLLE9BQWYsRUFBd0I7TUFDcEIsSUFBSW1DLE9BQU8sR0FBR3hELFFBQVEsQ0FBQ3lDLGNBQVQsQ0FBd0JwQixNQUF4QixDQUFkOztNQUNBLElBQUltQyxPQUFKLEVBQWE7UUFDVHBDLEdBQUcsQ0FBQ25CLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7VUFDdENrRCxlQUFlLENBQUMsTUFBRCxFQUFTSyxPQUFULENBQWY7UUFDSCxDQUZEO01BR0g7SUFDSjtFQUNKLENBVkQ7RUFXQXhELFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLFVBQVVvQyxLQUFWLEVBQWlCO0lBQ3pEM0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFVa0IsQ0FBVixFQUFhO01BQzlDLElBQUlBLENBQUMsQ0FBQ3NDLEdBQUYsS0FBVSxRQUFWLElBQXNCZCxLQUFLLENBQUMvQixTQUFOLENBQWdCOEMsUUFBaEIsQ0FBeUIsTUFBekIsQ0FBMUIsRUFBNEQ7UUFDeERQLGVBQWUsQ0FBQyxNQUFELEVBQVNSLEtBQVQsQ0FBZjtNQUNIO0lBQ0osQ0FKRDtJQUtBLElBQUlnQixRQUFRLEdBQUdoQixLQUFLLENBQUNqQyxhQUFOLENBQW9CLFFBQXBCLENBQWY7O0lBQ0EsSUFBSWlELFFBQUosRUFBYztNQUNWQSxRQUFRLENBQUMxRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFZO1FBQzNDa0QsZUFBZSxDQUFDLE1BQUQsRUFBU1IsS0FBVCxDQUFmO01BQ0gsQ0FGRDtJQUdIO0VBQ0osQ0FaRDtBQWFILENBbkNEOzs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFlBQVk7RUFDVDNDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsWUFBWTtJQUNoRCxJQUFJMkQsVUFBVSxHQUFHLENBQWpCO0lBQ0EsSUFBSUMsUUFBUSxHQUFHN0QsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWY7SUFDQVYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFZO01BQzVDLElBQUk2RCxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBM0I7O01BQ0EsSUFBSUYsYUFBYSxHQUFHLEdBQXBCLEVBQXlCO1FBQ3JCRCxRQUFRLENBQUNqRCxTQUFULENBQW1CQyxNQUFuQixDQUEwQixtQkFBMUI7UUFDQTtNQUNIOztNQUNELElBQUkrQyxVQUFVLEdBQUdFLGFBQWpCLEVBQWdDO1FBQzVCRCxRQUFRLENBQUNqRCxTQUFULENBQW1CQyxNQUFuQixDQUEwQixtQkFBMUI7TUFDSCxDQUZELE1BR0s7UUFDRGdELFFBQVEsQ0FBQ2pELFNBQVQsQ0FBbUJJLEdBQW5CLENBQXVCLG1CQUF2QjtNQUNIOztNQUNENEMsVUFBVSxHQUFHRSxhQUFiO0lBQ0gsQ0FiRDtFQWNILENBakJEO0FBa0JILENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E5RCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLFlBQVk7RUFDaERELFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLE9BQXJDLENBQTZDLFVBQVU0RCxFQUFWLEVBQWM7SUFDdkQsSUFBSXRCLEVBQUUsR0FBR3NCLEVBQUUsQ0FBQ1osT0FBWjtJQUFBLElBQXFCYSxFQUFFLEdBQUd2QixFQUFFLENBQUN1QixFQUE3QjtJQUFBLElBQWlDQyxFQUFFLEdBQUd4QixFQUFFLENBQUN3QixFQUF6QztJQUFBLElBQTZDQyxFQUFFLEdBQUd6QixFQUFFLENBQUN5QixFQUFyRDtJQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJTiw4Q0FBSixDQUFXRSxFQUFYLEVBQWU7TUFDeEJLLElBQUksRUFBRSxJQURrQjtNQUV4QkMsUUFBUSxFQUFFLElBRmM7TUFHeEJDLGFBQWEsRUFBRUMsTUFBTSxDQUFDTixFQUFELENBQU4sSUFBYyxDQUhMO01BSXhCTyxZQUFZLEVBQUUsRUFKVTtNQUt4QkMsT0FBTyxFQUFFLENBQUNYLDhDQUFELENBTGU7TUFNeEJZLFVBQVUsRUFBRTtRQUNSQyxNQUFNLEVBQUUscUJBREE7UUFFUkMsTUFBTSxFQUFFO01BRkEsQ0FOWTtNQVV4QkMsV0FBVyxFQUFFO1FBQ1QsS0FBSztVQUNEUCxhQUFhLEVBQUVDLE1BQU0sQ0FBQ1AsRUFBRCxDQUFOLElBQWMsQ0FENUI7VUFFRFEsWUFBWSxFQUFFO1FBRmIsQ0FESTtRQUtULEtBQUs7VUFDREYsYUFBYSxFQUFFQyxNQUFNLENBQUNQLEVBQUQsQ0FBTixJQUFjLENBRDVCO1VBRURRLFlBQVksRUFBRTtRQUZiLENBTEk7UUFTVCxLQUFLO1VBQ0RGLGFBQWEsRUFBRUMsTUFBTSxDQUFDTCxFQUFELENBQU4sSUFBYyxDQUQ1QjtVQUVETSxZQUFZLEVBQUU7UUFGYixDQVRJO1FBYVQsTUFBTTtVQUNGRixhQUFhLEVBQUVDLE1BQU0sQ0FBQ04sRUFBRCxDQUFOLElBQWMsQ0FEM0I7VUFFRk8sWUFBWSxFQUFFO1FBRlo7TUFiRztJQVZXLENBQWYsQ0FBYjtFQTZCSCxDQS9CRDtBQWdDSCxDQWpDRDs7Ozs7Ozs7Ozs7QUNEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvZm9ybS50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9qb2JfZm9ybS50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9tb2RhbC50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvc3dpcGVyLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL3N0eWxlL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUvYXBwLnNjc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIFR1cmJvIGZyb20gXCJAaG90d2lyZWQvdHVyYm9cIjtcclxuXHJcbmltcG9ydCBKdXN0VmFsaWRhdGUgZnJvbSAnanVzdC12YWxpZGF0ZSc7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9zd2lwZXJcIik7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9uYXZiYXJcIik7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9hY2NvcmRpb25cIik7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9mb3JtXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvbW9kYWxcIik7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9qb2JfZm9ybVwiKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGFjY29yZGlvbiA9IGN1cnJlbnRJdGVtLmNsb3Nlc3QoXCIuYWNjb3JkaW9uXCIpO1xyXG4gICAgICAgICAgICBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpY29uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZhXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYm9keVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImZhLW1pbnVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLW1pbnVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgYnRuID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGJ0bi5jbG9zZXN0KFwiLml0ZW1cIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZShjdXJyZW50SXRlbSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvblwiKS5mb3JFYWNoKGZ1bmN0aW9uIChhY2NvcmRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5leHBvcnQge307XHJcbiIsImltcG9ydCBKdXN0VmFsaWRhdGUgZnJvbSBcImp1c3QtdmFsaWRhdGVcIjtcclxudmFyIFJ1bGVzO1xyXG4oZnVuY3Rpb24gKFJ1bGVzKSB7XHJcbiAgICBSdWxlc1tcIlJlcXVpcmVkXCJdID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgUnVsZXNbXCJFbWFpbFwiXSA9IFwiZW1haWxcIjtcclxuICAgIFJ1bGVzW1wiTWluTGVuZ3RoXCJdID0gXCJtaW5MZW5ndGhcIjtcclxuICAgIFJ1bGVzW1wiTWF4TGVuZ3RoXCJdID0gXCJtYXhMZW5ndGhcIjtcclxuICAgIFJ1bGVzW1wiUGFzc3dvcmRcIl0gPSBcInBhc3N3b3JkXCI7XHJcbiAgICBSdWxlc1tcIk51bWJlclwiXSA9IFwibnVtYmVyXCI7XHJcbiAgICBSdWxlc1tcIk1heE51bWJlclwiXSA9IFwibWF4TnVtYmVyXCI7XHJcbiAgICBSdWxlc1tcIk1pbk51bWJlclwiXSA9IFwibWluTnVtYmVyXCI7XHJcbiAgICBSdWxlc1tcIlN0cm9uZ1Bhc3N3b3JkXCJdID0gXCJzdHJvbmdQYXNzd29yZFwiO1xyXG4gICAgUnVsZXNbXCJDdXN0b21SZWdleHBcIl0gPSBcImN1c3RvbVJlZ2V4cFwiO1xyXG4gICAgUnVsZXNbXCJNaW5GaWxlc0NvdW50XCJdID0gXCJtaW5GaWxlc0NvdW50XCI7XHJcbiAgICBSdWxlc1tcIk1heEZpbGVzQ291bnRcIl0gPSBcIm1heEZpbGVzQ291bnRcIjtcclxuICAgIFJ1bGVzW1wiRmlsZXNcIl0gPSBcImZpbGVzXCI7XHJcbn0pKFJ1bGVzIHx8IChSdWxlcyA9IHt9KSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YWxpZGF0ZSA9IG5ldyBKdXN0VmFsaWRhdGUoXCIjZm9ybVwiLCB7XHJcbiAgICAgICAgZXJyb3JGaWVsZENzc0NsYXNzOiBcImlzLWludmFsaWRcIixcclxuICAgICAgICBlcnJvckxhYmVsU3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZGMzNTQ1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c0ludmFsaWRGaWVsZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgdmFsaWRhdGVcclxuICAgICAgICAuYWRkRmllbGQoXCIjZnVsbG5hbWVcIiwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcnVsZTogUnVsZXMuUmVxdWlyZWQsXHJcbiAgICAgICAgfSxcclxuICAgIF0pXHJcbiAgICAgICAgLmFkZEZpZWxkKFwiI2VtYWlsXCIsIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJ1bGU6IFJ1bGVzLlJlcXVpcmVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBydWxlOiBSdWxlcy5FbWFpbCxcclxuICAgICAgICB9LFxyXG4gICAgXSlcclxuICAgICAgICAub25TdWNjZXNzKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFsaWRhdGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIGU/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm0gPSBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LWJ0blwiKTtcclxuICAgICAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVxdWVzdFN1Ym1pdChidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGpvYkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYl9saXN0XCIpO1xyXG4gICAgaWYgKGpvYkxpc3QpIHtcclxuICAgICAgICBqb2JMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpvYiA9IGJ0bi5jbG9zZXN0KFwiLmpvYlwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoam9iICYmIG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpvYkRldGFpbHMgPSBbXCJqb2JfdGl0bGVcIiwgXCJlbnRpdHlcIiwgXCJsb2NhdGlvblwiLCBcInRpbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgam9iRGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IChfYSA9IGpvYi5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChpdGVtKSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsVGFyZ2V0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFRhcmdldC5pbm5lckhUTUwgPSBkZXRhaWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IHt9O1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaGFuZGxlVmlzaWJsaXR5ID0gZnVuY3Rpb24gKGFjdGlvbiwgbW9kYWwpIHtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBidG4uZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gXCJtb2RhbFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKG1vZGFsXzEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZpc2libGl0eShcInNob3dcIiwgbW9kYWxfMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5leHBvcnQge307XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGwgPSAwO1xyXG4gICAgICAgIHZhciBoZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhc3RTY3JvbGwgPiBjdXJyZW50U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuZXhwb3J0IHt9O1xyXG4iLCJpbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpcGVyXCIpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdmFyIF9hID0gZWwuZGF0YXNldCwgeHMgPSBfYS54cywgbGcgPSBfYS5sZywgbWQgPSBfYS5tZDtcclxuICAgICAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKGxnKSB8fCAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLW5leHQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1wcmV2LWJ1dHRvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKG1kKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcihsZykgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlR1cmJvIiwiSnVzdFZhbGlkYXRlIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImN1cnJlbnRJdGVtIiwiYWNjb3JkaW9uIiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwib3BhY2l0eSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUNsaWNrIiwiZSIsImJ0biIsInRhcmdldCIsIml0ZW1zIiwiaSIsImhlYWRlciIsIlJ1bGVzIiwidmFsaWRhdGUiLCJlcnJvckZpZWxkQ3NzQ2xhc3MiLCJlcnJvckxhYmVsU3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9jdXNJbnZhbGlkRmllbGQiLCJhZGRGaWVsZCIsInJ1bGUiLCJSZXF1aXJlZCIsIkVtYWlsIiwib25TdWNjZXNzIiwiZGVzdHJveSIsImZvcm0iLCJyZXF1ZXN0U3VibWl0Iiwiam9iTGlzdCIsImdldEVsZW1lbnRCeUlkIiwiam9iIiwibW9kYWwiLCJqb2JEZXRhaWxzIiwiX2EiLCJkZXRhaWwiLCJjb25jYXQiLCJ0ZXh0Q29udGVudCIsIm1vZGFsVGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGFuZGxlVmlzaWJsaXR5IiwiYWN0aW9uIiwib3ZlcmZsb3ciLCJyZW1vdmVQcm9wZXJ0eSIsImRhdGFzZXQiLCJtb2RhbF8xIiwia2V5IiwiY29udGFpbnMiLCJjbG9zZUJ0biIsImxhc3RTY3JvbGwiLCJoZWFkZXJFbCIsImN1cnJlbnRTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiU3dpcGVyIiwiTmF2aWdhdGlvbiIsImVsIiwieHMiLCJsZyIsIm1kIiwic3dpcGVyIiwibG9vcCIsImF1dG9wbGF5Iiwic2xpZGVzUGVyVmlldyIsIk51bWJlciIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9