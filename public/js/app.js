(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Boot.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Boot.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/index */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_types_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/types/actions */ "./resources/js/store/types/actions.js");
/* harmony import */ var _pages_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Snackbar */ "./resources/js/components/pages/Snackbar.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Snackbar: _pages_Snackbar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['initialized'])),
  mounted: function mounted() {
    if (!this.initialized) {
      _store_index__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_types_actions__WEBPACK_IMPORTED_MODULE_2__["INITIALIZE"]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: {
    cols: function cols() {
      var _this$$vuetify$breakp = this.$vuetify.breakpoint,
          lg = _this$$vuetify$breakp.lg,
          sm = _this$$vuetify$breakp.sm;
      return lg ? [3, 9] : sm ? [9, 3] : [6, 6];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      show: false,
      message: 'success',
      color: '',
      timeout: 3000
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.subscribe(function (mutation, state) {
      if (mutation.type === 'PUSH_NOTIFICATION') {
        _this.message = state.ui.snackbar.message;
        _this.color = state.ui.snackbar.type;
        _this.show = true;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.initialized
    ? _c(
        "v-app",
        [
          _c("v-main", [_c("v-container", [_c("router-view")], 1)], 1),
          _vm._v(" "),
          _c("v-footer", { attrs: { app: "" } }, [_c("Snackbar")], 1)
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "fill-height", attrs: { "d-flex": "", "child-flex": "" } },
    [
      _c(
        "v-card",
        [
          _c("v-card-text", [
            _c(
              "div",
              {
                staticClass: "text-center font-weight-black title text--primary"
              },
              [_vm._v("\n            test\n        ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _vm._v("\n            data\n        ")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-text", [
            _c(
              "div",
              {
                staticClass: "text-center font-weight-black title text--primary"
              },
              [_vm._v("\n            test\n        ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _vm._v("\n            data\n        ")
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-snackbar",
    {
      attrs: {
        timeout: "3000",
        color: _vm.color || "success",
        absolute: "",
        right: "",
        bottom: ""
      },
      scopedSlots: _vm._u([
        {
          key: "action",
          fn: function(ref) {
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._b(
                  {
                    attrs: { color: "black", text: "" },
                    nativeOn: {
                      click: function($event) {
                        _vm.show = false
                      }
                    }
                  },
                  "v-btn",
                  attrs,
                  false
                ),
                [_vm._v("\n      Close\n    ")]
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.show,
        callback: function($$v) {
          _vm.show = $$v
        },
        expression: "show"
      }
    },
    [_vm._v("\n  " + _vm._s(_vm.message) + "\n  ")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ "./resources/js/store/index.js");
/* harmony import */ var _vuetify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vuetify */ "./resources/js/vuetify.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  vuetify: _vuetify__WEBPACK_IMPORTED_MODULE_3__["default"],
  el: '#app',
  store: _store_index__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: _routes__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Boot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Boot */ "./resources/js/components/Boot.vue");




window.Vue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('boot', _components_Boot__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.devtools = true;
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
window.Event = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // 120 seconds

window.axios.defaults.timeout = 120 * 1000;
axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};
window.WindowEvent = window.Event; // Global Event Service

window.EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(); // Global Flash Message Service

window.Flash = function (vm, message, seconds, type) {
  EventBus.$emit('flash', [vm, message, seconds, type]);
};

/***/ }),

/***/ "./resources/js/components/Boot.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Boot.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boot.vue?vue&type=template&id=1b9ae8dd& */ "./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd&");
/* harmony import */ var _Boot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Boot.vue?vue&type=script&lang=js& */ "./resources/js/components/Boot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Boot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Boot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Boot.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Boot.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Boot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Boot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Boot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Boot.vue?vue&type=template&id=1b9ae8dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Boot.vue?vue&type=template&id=1b9ae8dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Boot_vue_vue_type_template_id_1b9ae8dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/Snackbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Snackbar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=template&id=755ae21b& */ "./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b&");
/* harmony import */ var _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Snackbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=template&id=755ae21b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Snackbar.vue?vue&type=template&id=755ae21b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_755ae21b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_pages_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/Home.vue */ "./resources/js/components/pages/Home.vue");


var routes = [{
  path: '/',
  component: _components_pages_Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'Home'
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: "history",
  hash: false,
  linkActiveClass: 'is-active',
  routes: routes,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      var currentElement = document.querySelector(to.hash);

      if (currentElement !== null) {
        currentElement.classList.add("focus-text");
        setTimeout(function () {
          currentElement.classList.remove("focus-text");
        }, 4 * 1000);
      }
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
}); // router.beforeEach((to, from, next) => {
//     let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
//     if (to.name == 'Help' || token) {
//     } else {
//         window.location.href = '/login'
//     }
// })

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ "./resources/js/store/modules/ui/index.js");
/* harmony import */ var _types_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/mutations */ "./resources/js/store/types/mutations.js");
/* harmony import */ var _types_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/actions */ "./resources/js/store/types/actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_0__["default"]);
var debug = "development" !== 'production';
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
  state: {
    initialized: false,
    errors: {
      messages: [],
      type: null
    }
  },
  actions: _defineProperty({}, _types_actions__WEBPACK_IMPORTED_MODULE_4__["INITIALIZE"], function (state) {
    if (!state.initialized) {
      console.log('we good');
    }

    state.commit(_types_mutations__WEBPACK_IMPORTED_MODULE_3__["INITIALIZE"]);
  }),
  mutations: _defineProperty({}, _types_mutations__WEBPACK_IMPORTED_MODULE_3__["INITIALIZE"], function (state) {
    state.initialized = true;
  }),
  modules: {
    ui: _modules_ui__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  strict: true
}));

/***/ }),

/***/ "./resources/js/store/modules/ui/actions.js":
/*!**************************************************!*\
  !*** ./resources/js/store/modules/ui/actions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/mutations */ "./resources/js/store/types/mutations.js");
/* harmony import */ var _types_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/actions */ "./resources/js/store/types/actions.js");
var _actions$SET_THEME$ac;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_actions$SET_THEME$ac = {}, _defineProperty(_actions$SET_THEME$ac, _types_actions__WEBPACK_IMPORTED_MODULE_1__["SET_THEME"], function (context, theme) {
  return new Promise(function () {
    context.commit(_types_mutations__WEBPACK_IMPORTED_MODULE_0__["SET_THEME"], theme);
  });
}), _defineProperty(_actions$SET_THEME$ac, _types_actions__WEBPACK_IMPORTED_MODULE_1__["PUSH_NOTIFICATION"], function (context, data) {
  return new Promise(function () {
    context.commit(_types_mutations__WEBPACK_IMPORTED_MODULE_0__["PUSH_NOTIFICATION"], data);
  });
}), _actions$SET_THEME$ac);

/***/ }),

/***/ "./resources/js/store/modules/ui/getters.js":
/*!**************************************************!*\
  !*** ./resources/js/store/modules/ui/getters.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  theme: function theme(state) {
    return state.theme;
  },
  getSnackbar: function getSnackbar(state) {
    return state.snackbar;
  }
});

/***/ }),

/***/ "./resources/js/store/modules/ui/index.js":
/*!************************************************!*\
  !*** ./resources/js/store/modules/ui/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./resources/js/store/modules/ui/getters.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./resources/js/store/modules/ui/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/modules/ui/mutations.js");



var state = {
  theme: null,
  snackbar: {
    showing: true,
    message: "Test",
    timeout: 3000,
    type: 'success'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/js/store/modules/ui/mutations.js":
/*!****************************************************!*\
  !*** ./resources/js/store/modules/ui/mutations.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/mutations */ "./resources/js/store/types/mutations.js");
var _types$SET_THEME$type;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_types$SET_THEME$type = {}, _defineProperty(_types$SET_THEME$type, _types_mutations__WEBPACK_IMPORTED_MODULE_0__["SET_THEME"], function (state, theme) {
  state.theme = theme;
}), _defineProperty(_types$SET_THEME$type, _types_mutations__WEBPACK_IMPORTED_MODULE_0__["PUSH_NOTIFICATION"], function (state, snackbar) {
  state.snackbar = snackbar;
}), _types$SET_THEME$type);

/***/ }),

/***/ "./resources/js/store/types/actions.js":
/*!*********************************************!*\
  !*** ./resources/js/store/types/actions.js ***!
  \*********************************************/
/*! exports provided: INITIALIZE, PUSH_NOTIFICATION, SET_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE", function() { return INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_NOTIFICATION", function() { return PUSH_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME", function() { return SET_THEME; });
//Initial
var INITIALIZE = 'INITIALIZE';
var PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';
var SET_THEME = 'SET_THEME';

/***/ }),

/***/ "./resources/js/store/types/mutations.js":
/*!***********************************************!*\
  !*** ./resources/js/store/types/mutations.js ***!
  \***********************************************/
/*! exports provided: INITIALIZE, PUSH_NOTIFICATION, SET_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE", function() { return INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUSH_NOTIFICATION", function() { return PUSH_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_THEME", function() { return SET_THEME; });
//Initial
var INITIALIZE = 'INITIALIZE';
var PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';
var SET_THEME = 'SET_THEME';

/***/ }),

/***/ "./resources/js/vuetify.js":
/*!*********************************!*\
  !*** ./resources/js/vuetify.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_2__);

 // import '@mdi/font/css/materialdesignicons.css'


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);
var opts = {
  icons: {
    iconfont: 'mdi'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a(opts));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\server\htdocs\acrobat\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\server\htdocs\acrobat\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);