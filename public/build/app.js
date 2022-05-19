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
          job.style.opacity = "1";
        } else {
          job.style.display = "none";
          job.style.opacity = "0";
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_11__);













var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

document.addEventListener("turbo:load", function () {
  var jobList = document.getElementById("job_list");
  var modal = document.getElementById("job_modal");

  var clearErrors = function clearErrors() {
    modal === null || modal === void 0 ? void 0 : modal.querySelectorAll(".error").forEach(function (el) {
      return el.remove();
    });
    modal === null || modal === void 0 ? void 0 : modal.querySelectorAll(".form-control").forEach(function (el) {
      return el.classList.remove("is-invalid");
    });
  };

  var jobForm = document.querySelector("#job_application"); // fill modal body content

  if (jobList) {
    jobList.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var job = btn.closest(".job");

        if (job && modal) {
          var targets = ["job_title", "entity", "location", "time"];
          modal.addEventListener("modal-hidden", function () {
            if (jobForm) {
              jobForm.reset();
              clearErrors();
            }
          });
          targets.forEach(function (item) {
            var value = job.querySelector("[data-target=\"".concat(item, "\"]")).dataset.value;

            if (value) {
              modal.querySelectorAll(".".concat(item)).forEach(function (el) {
                if (el instanceof HTMLInputElement) {
                  el.value = value;
                } else {
                  el.innerHTML = value;
                }
              });
            }
          });
        }
      });
    });
  }

  if (jobForm) {
    jobForm.addEventListener("submit", function (e) {
      return __awaiter(void 0, void 0, void 0, function () {
        var submitBtn, formData, file, url, res, data, modalBody, successMessage, e_1, eObj;

        var _a, _b;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              e.preventDefault();
              clearErrors();
              submitBtn = jobForm.querySelector('button[type="submit"]');
              submitBtn.setAttribute("disabled", "");
              submitBtn.querySelector(".spinner").style.removeProperty("display");
              formData = new FormData(jobForm);
              file = (_b = (_a = jobForm.querySelector("#file")) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];

              if (file) {
                formData.append("file", file);
              }

              url = jobForm.dataset.action;
              if (!url) return [3
              /*break*/
              , 5];
              _c.label = 1;

            case 1:
              _c.trys.push([1, 4,, 5]);

              return [4
              /*yield*/
              , fetch(url, {
                method: "POST",
                body: formData
              })];

            case 2:
              res = _c.sent();
              return [4
              /*yield*/
              , res.json()];

            case 3:
              data = _c.sent();

              if (!res.ok) {
                throw new Error(JSON.stringify(data));
              }

              if (modal) {
                modalBody = modal.querySelector(".modal-body");
                successMessage = modalBody.querySelector("#success_message");
                successMessage.style.removeProperty("display");
                modalBody.innerHTML = successMessage.innerHTML;
                setTimeout(function () {
                  submitBtn.removeAttribute("disabled");
                  modal.classList.remove("show");
                  document.body.style.removeProperty("overflow");
                }, 4000);
              }

              return [3
              /*break*/
              , 5];

            case 4:
              e_1 = _c.sent();
              submitBtn.removeAttribute("disabled");
              submitBtn.querySelector(".spinner").style.setProperty("display", "none");
              console.log("error", e_1.message);

              if (e_1.message && typeof e_1.message === "string") {
                eObj = JSON.parse(e_1.message);
                Object.entries(eObj).forEach(function (_a) {
                  var _b;

                  var _c = __read(_a, 2),
                      k = _c[0],
                      v = _c[1];

                  var error = document.createElement("span");
                  error.textContent = v;
                  error.classList.add("error", "text-red-600");
                  error.style.fontSize = "13px";

                  if (modal) {
                    var input = modal.querySelector("#".concat(k));
                    input === null || input === void 0 ? void 0 : input.classList.add("is-invalid");
                    (_b = input === null || input === void 0 ? void 0 : input.closest("div")) === null || _b === void 0 ? void 0 : _b.appendChild(error);
                  }
                });
              }

              return [3
              /*break*/
              , 5];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
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
  var modalHiddenEvent = new Event("modal-hidden");
  var modalShowEvent = new Event("modal-show");

  var handleVisiblity = function handleVisiblity(action, modal) {
    if (action === "show") {
      document.body.style.overflow = "hidden";
      modal.classList.add("show");
      modal.dispatchEvent(modalShowEvent);
    } else {
      document.body.style.removeProperty("overflow");
      modal.classList.remove("show");
      modal.dispatchEvent(modalHiddenEvent);
    }
  };

  document.querySelectorAll("[data-toggle=modal]").forEach(function (btn) {
    var target = btn.dataset.target;

    if (target) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_core-js_modules_es_-e199ab"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxJQUZjO01BR3hCQyxhQUFhLEVBQUVDLE1BQU0sQ0FBQ04sRUFBRCxDQUFOLElBQWMsQ0FITDtNQUl4Qk8sWUFBWSxFQUFFLEVBSlU7TUFLeEJDLE9BQU8sRUFBRSxDQUFDViw4Q0FBRCxDQUxlO01BTXhCVyxVQUFVLEVBQUU7UUFDUkMsTUFBTSxFQUFFLHFCQURBO1FBRVJDLE1BQU0sRUFBRTtNQUZBLENBTlk7TUFVeEJDLFdBQVcsRUFBRTtRQUNULEtBQUs7VUFDRFAsYUFBYSxFQUFFQyxNQUFNLENBQUNQLEVBQUQsQ0FBTixJQUFjLENBRDVCO1VBRURRLFlBQVksRUFBRTtRQUZiLENBREk7UUFLVCxLQUFLO1VBQ0RGLGFBQWEsRUFBRUMsTUFBTSxDQUFDUCxFQUFELENBQU4sSUFBYyxDQUQ1QjtVQUVEUSxZQUFZLEVBQUU7UUFGYixDQUxJO1FBU1QsS0FBSztVQUNERixhQUFhLEVBQUVDLE1BQU0sQ0FBQ0wsRUFBRCxDQUFOLElBQWMsQ0FENUI7VUFFRE0sWUFBWSxFQUFFO1FBRmIsQ0FUSTtRQWFULE1BQU07VUFDRkYsYUFBYSxFQUFFQyxNQUFNLENBQUNOLEVBQUQsQ0FBTixJQUFjLENBRDNCO1VBRUZPLFlBQVksRUFBRTtRQUZaO01BYkc7SUFWVyxDQUFmLENBQWI7RUE2QkgsQ0EvQkQ7QUFnQ0gsQ0FqQ0Q7Ozs7Ozs7Ozs7O0FDREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvanMvYWNjb3JkaW9uLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL2Zvcm1fdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9qb2JfZmlsdGVyLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL2pvYl9mb3JtLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL21vZGFsLnRzIiwid2VicGFjazovL3VtYW5saW5rLy4vYXNzZXRzL2pzL25hdmJhci50cyIsIndlYnBhY2s6Ly91bWFubGluay8uL2Fzc2V0cy9qcy9zd2lwZXIudHMiLCJ3ZWJwYWNrOi8vdW1hbmxpbmsvLi9hc3NldHMvc3R5bGUvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS9hcHAuc2Nzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgVHVyYm8gZnJvbSBcIkBob3R3aXJlZC90dXJib1wiO1xyXG5cclxucmVxdWlyZShcIi4vanMvc3dpcGVyXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvbmF2YmFyXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvYWNjb3JkaW9uXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvZm9ybV92YWxpZGF0aW9uXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvbW9kYWxcIik7XHJcblxyXG5yZXF1aXJlKFwiLi9qcy9qb2JfZmlsdGVyXCIpO1xyXG5cclxucmVxdWlyZShcIi4vanMvam9iX2Zvcm1cIik7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBhY2NvcmRpb24gPSBjdXJyZW50SXRlbS5jbG9zZXN0KFwiLmFjY29yZGlvblwiKTtcclxuICAgICAgICAgICAgYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5mYVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJvZHlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1taW51c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1taW51c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGJ0biA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSBidG4uY2xvc2VzdChcIi5pdGVtXCIpO1xyXG4gICAgICAgICAgICB0b2dnbGUoY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25cIikuZm9yRWFjaChmdW5jdGlvbiAoYWNjb3JkaW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoZWFkZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuZXhwb3J0IHt9O1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG5leHBvcnQge307XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYl9maWx0ZXJcIik7XHJcbiAgICB2YXIgam9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuam9iXCIpO1xyXG4gICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgam9icy5mb3JFYWNoKGZ1bmN0aW9uIChqb2IpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBqb2IuZGF0YXNldC5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBlbnRpdHkgfHwgZW50aXR5ID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBqb2Iuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCB7fTtcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInR1cmJvOmxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGpvYkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYl9saXN0XCIpO1xyXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb2JfbW9kYWxcIik7XHJcbiAgICB2YXIgY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJyb3JcIikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnJlbW92ZSgpOyB9KTtcclxuICAgICAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWNvbnRyb2xcIikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpOyB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgam9iRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam9iX2FwcGxpY2F0aW9uXCIpO1xyXG4gICAgLy8gZmlsbCBtb2RhbCBib2R5IGNvbnRlbnRcclxuICAgIGlmIChqb2JMaXN0KSB7XHJcbiAgICAgICAgam9iTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBqb2IgPSBidG4uY2xvc2VzdChcIi5qb2JcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoam9iICYmIG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldHMgPSBbXCJqb2JfdGl0bGVcIiwgXCJlbnRpdHlcIiwgXCJsb2NhdGlvblwiLCBcInRpbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vZGFsLWhpZGRlblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2JGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGpvYi5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFyZ2V0PVxcXCJcIi5jb25jYXQoaXRlbSwgXCJcXFwiXVwiKSkuZGF0YXNldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdChpdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChqb2JGb3JtKSB7XHJcbiAgICAgICAgam9iRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VibWl0QnRuLCBmb3JtRGF0YSwgZmlsZSwgdXJsLCByZXMsIGRhdGEsIG1vZGFsQm9keSwgc3VjY2Vzc01lc3NhZ2UsIGVfMSwgZU9iajtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckVycm9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdG4gPSBqb2JGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShqb2JGb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9IChfYiA9IChfYSA9IGpvYkZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaWxlXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlsZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gam9iRm9ybS5kYXRhc2V0LmFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxCb2R5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2UgPSBtb2RhbEJvZHkucXVlcnlTZWxlY3RvcihcIiNzdWNjZXNzX21lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEJvZHkuaW5uZXJIVE1MID0gc3VjY2Vzc01lc3NhZ2UuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJvdmVyZmxvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZV8xLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8xLm1lc3NhZ2UgJiYgdHlwZW9mIGVfMS5tZXNzYWdlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlT2JqID0gSlNPTi5wYXJzZShlXzEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhlT2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBfX3JlYWQoX2EsIDIpLCBrID0gX2NbMF0sIHYgPSBfY1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwidGV4dC1yZWQtNjAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLmZvbnRTaXplID0gXCIxM3B4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjXCIuY29uY2F0KGspKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuY2xvc2VzdChcImRpdlwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFwcGVuZENoaWxkKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IHt9O1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbW9kYWxIaWRkZW5FdmVudCA9IG5ldyBFdmVudChcIm1vZGFsLWhpZGRlblwiKTtcclxuICAgIHZhciBtb2RhbFNob3dFdmVudCA9IG5ldyBFdmVudChcIm1vZGFsLXNob3dcIik7XHJcbiAgICB2YXIgaGFuZGxlVmlzaWJsaXR5ID0gZnVuY3Rpb24gKGFjdGlvbiwgbW9kYWwpIHtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcInNob3dcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgIG1vZGFsLmRpc3BhdGNoRXZlbnQobW9kYWxTaG93RXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgbW9kYWwuZGlzcGF0Y2hFdmVudChtb2RhbEhpZGRlbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZT1tb2RhbF1cIilcclxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGJ0bi5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKG1vZGFsXzEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZpc2libGl0eShcInNob3dcIiwgbW9kYWxfMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICAgICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxpdHkoXCJoaWRlXCIsIG1vZGFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5leHBvcnQge307XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidHVyYm86bG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGwgPSAwO1xyXG4gICAgICAgIHZhciBoZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhc3RTY3JvbGwgPiBjdXJyZW50U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuZXhwb3J0IHt9O1xyXG4iLCJpbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJibzpsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3dpcGVyXCIpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdmFyIF9hID0gZWwuZGF0YXNldCwgeHMgPSBfYS54cywgbGcgPSBfYS5sZywgbWQgPSBfYS5tZDtcclxuICAgICAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKGxnKSB8fCAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLW5leHQtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1wcmV2LWJ1dHRvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKHhzKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogTnVtYmVyKG1kKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IE51bWJlcihsZykgfHwgMixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlR1cmJvIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImN1cnJlbnRJdGVtIiwiYWNjb3JkaW9uIiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwib3BhY2l0eSIsImFkZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZUNsaWNrIiwiZSIsImJ0biIsInRhcmdldCIsIml0ZW1zIiwiaSIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsImpvYnMiLCJlbnRpdHkiLCJ2YWx1ZSIsImpvYiIsImRhdGFzZXQiLCJkaXNwbGF5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJfX3JlYWQiLCJvIiwibSIsInIiLCJhciIsImVycm9yIiwiam9iTGlzdCIsIm1vZGFsIiwiY2xlYXJFcnJvcnMiLCJlbCIsImpvYkZvcm0iLCJ0YXJnZXRzIiwicmVzZXQiLCJjb25jYXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5uZXJIVE1MIiwic3VibWl0QnRuIiwiZm9ybURhdGEiLCJmaWxlIiwidXJsIiwicmVzIiwiZGF0YSIsIm1vZGFsQm9keSIsInN1Y2Nlc3NNZXNzYWdlIiwiZV8xIiwiZU9iaiIsIl9hIiwiX2IiLCJfYyIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvcGVydHkiLCJGb3JtRGF0YSIsImZpbGVzIiwiYXBwZW5kIiwiYWN0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwib2siLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0UHJvcGVydHkiLCJtZXNzYWdlIiwicGFyc2UiLCJPYmplY3QiLCJlbnRyaWVzIiwiayIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImZvbnRTaXplIiwiaW5wdXQiLCJhcHBlbmRDaGlsZCIsIm1vZGFsSGlkZGVuRXZlbnQiLCJFdmVudCIsIm1vZGFsU2hvd0V2ZW50IiwiaGFuZGxlVmlzaWJsaXR5Iiwib3ZlcmZsb3ciLCJkaXNwYXRjaEV2ZW50IiwibW9kYWxfMSIsImtleSIsImNvbnRhaW5zIiwiY2xvc2VCdG4iLCJsYXN0U2Nyb2xsIiwiaGVhZGVyRWwiLCJjdXJyZW50U2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsIlN3aXBlciIsIk5hdmlnYXRpb24iLCJ4cyIsImxnIiwibWQiLCJzd2lwZXIiLCJsb29wIiwiYXV0b3BsYXkiLCJzbGlkZXNQZXJWaWV3IiwiTnVtYmVyIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=