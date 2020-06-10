(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
  props: ["dropzones"],
  data: function data() {
    return {
      search: "",
      dropzonesData: this.dropzones,
      headers: [{
        text: "Name",
        sortable: true,
        value: "name"
      }, {
        text: "Distance (in meter)",
        sortable: true,
        value: "distance"
      }, {
        text: "Actions",
        sortable: false,
        value: "actions"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pigeons"],
  data: function data() {
    return {
      headers: [{
        text: "Ringnumber",
        sortable: true,
        value: "ringnumber"
      }],
      pigeonsData: this.pigeons,
      search: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pigeon", "results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      headers: [{
        text: "Drop",
        sortable: true,
        value: "race.dropzone.name"
      }, {
        text: "Place (Personal)",
        sortable: true,
        value: "place_personal",
        align: "end"
      }, {
        text: "GT",
        sortable: true,
        value: "nominated",
        align: "end"
      }, // {
      //     text: "Unloading",
      //     sortable: true,
      //     value: "race.unloading_time"
      // },
      // { text: "Arrival Time", value: "arrival_time" },
      {
        text: "mpm",
        value: "mpm",
        align: "end"
      }, {
        text: "Place (Club)",
        value: "place_club",
        align: "end"
      }, {
        text: "Coeff (Club)",
        value: "coefficient_club",
        align: "end"
      }, {
        text: "Place (Provincial)",
        value: "place_provincial",
        align: "end"
      }, {
        text: "Coeff (Provincial)",
        value: "coefficient_provincial",
        align: "end"
      }, {
        text: "Place (Zone)",
        value: "place_zone",
        align: "end"
      }, {
        text: "Coeff (Zone)",
        value: "coefficient_zone",
        align: "end"
      }, {
        text: "Place (National)",
        value: "place_national",
        align: "end"
      }, {
        text: "Coeff (National)",
        value: "coefficient_national",
        align: "end"
      }, {
        text: "Actions",
        sortable: false,
        value: "actions"
      }],
      resultsData: this.results
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["races"],
  data: function data() {
    return {
      racesData: this.races,
      search: "",
      headers: [{
        text: "Dropzone",
        sortable: true,
        value: "dropzone.name"
      }, {
        text: "Category",
        sortable: true,
        value: "category_formatted"
      }, {
        text: "# Pigeons",
        sortable: true,
        value: "amount_of_pigeons"
      }, {
        text: "Unloading Time",
        sortable: true,
        value: "unloading_time"
      }, {
        text: "Year",
        sortable: true,
        value: "year"
      }, {
        text: "Type",
        sortable: true,
        value: "type_formatted"
      }, {
        text: "Wind",
        sortable: true,
        value: "wind_formatted"
      }, {
        text: "Wind Strength",
        sortable: true,
        value: "wind_strength_formatted"
      }, {
        text: "Overcast",
        sortable: true,
        value: "overcast_formatted"
      }, {
        text: "Rainfall",
        sortable: true,
        value: "rainfall_formatted"
      }, {
        text: "Details",
        sortable: true,
        value: "race_details"
      }, {
        text: "Actions",
        sortable: false,
        value: "actions"
      }]
    };
  },
  methods: {
    getColorCategory: function getColorCategory(category) {
      if (category == "Old birds") return "red lighten-1";else if (category == "Yearlings") return "blue darken-1";else return "teal darken-1";
    },
    getColorType: function getColorType(type) {
      if (type == "Competition") return "deep-purple lighten-1";else if (type == "Training") return "light-green darken-3";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
  props: ["results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      headers: [{
        text: "Place (Personal)",
        sortable: true,
        value: "place_personal"
      }, {
        text: "GT",
        sortable: true,
        value: "nominated"
      }, {
        text: "Pigeon",
        sortable: true,
        value: "pigeon.ringnumber"
      }, {
        text: "Arrival Time",
        value: "arrival_time"
      }, {
        text: "mpm",
        value: "mpm"
      }, {
        text: "Place (Club)",
        value: "place_club"
      }, {
        text: "Coeff (Club)",
        value: "coefficient_club"
      }, {
        text: "Place (Provincial)",
        value: "place_provincial"
      }, {
        text: "Coeff (Provincial)",
        value: "coefficient_provincial"
      }, {
        text: "Place (Zone)",
        value: "place_zone"
      }, {
        text: "Coeff (Zone)",
        value: "coefficient_zone"
      }, {
        text: "Place (National)",
        value: "place_national"
      }, {
        text: "Coeff (National)",
        value: "coefficient_national"
      }, {
        text: "Actions",
        sortable: false,
        value: "actions"
      }],
      resultsData: this.results
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      headers: [{
        text: "Place (Personal)",
        sortable: true,
        value: "place_personal",
        align: "end"
      }, {
        text: "GT",
        sortable: true,
        value: "nominated"
      }, {
        text: "Pigeon",
        sortable: true,
        value: "pigeon.ringnumber"
      }, {
        text: "Arrival Time",
        value: "arrival_time"
      }, {
        text: "mpm",
        value: "mpm",
        align: "end"
      }, {
        text: "Place (Club)",
        value: "place_club",
        align: "end"
      }, {
        text: "Coeff (Club)",
        value: "coefficient_club",
        align: "end"
      }, {
        text: "Place (Provincial)",
        value: "place_provincial",
        align: "end"
      }, {
        text: "Coeff (Provincial)",
        value: "coefficient_provincial",
        align: "end"
      }, {
        text: "Place (Zone)",
        value: "place_zone",
        align: "end"
      }, {
        text: "Coeff (Zone)",
        value: "coefficient_zone",
        align: "end"
      }, {
        text: "Place (National)",
        value: "place_national",
        align: "end"
      }, {
        text: "Coeff (National)",
        value: "coefficient_national",
        align: "end"
      }, {
        text: "Actions",
        sortable: false,
        value: "actions"
      }, {
        text: "Dropzone",
        value: "race.dropzone.name",
        align: " d-none"
      }, {
        text: "Type",
        value: "race.type",
        align: " d-none"
      }],
      resultsData: this.results
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", {
            domProps: { textContent: _vm._s("List of all dropzones") }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.dropzonesData,
          search: _vm.search,
          "multi-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.ringnumber",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("a", { attrs: { href: "/pigeon/" + item.id } }, [
                  _vm._v(_vm._s(item.ringnumber))
                ])
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "div",
                  { staticClass: "tw-flex tw-my-2" },
                  [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "mx-2",
                                          attrs: {
                                            href:
                                              "/dropzone/" + item.id + "/edit",
                                            target: "_blank",
                                            fab: "",
                                            "x-small": "",
                                            link: "",
                                            color: "green"
                                          }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v("mdi-table-large")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Edit dropzone")])]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", { domProps: { textContent: _vm._s("My pigeons") } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.pigeonsData,
          search: _vm.search,
          "multi-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.ringnumber",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("a", { attrs: { href: "/pigeon/" + item.id } }, [
                  _vm._v(_vm._s(item.ringnumber))
                ])
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", {
            domProps: { textContent: _vm._s(_vm.pigeon.ringnumber) }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.resultsData,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "item-key": "id",
          "show-expand": "",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c("td", { attrs: { colspan: headers.length } }, [
                  _c("p", { staticClass: "tw-mt-2" }, [
                    _c("strong", [_vm._v("Dropzone:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.dropzone.name) +
                        " (" +
                        _vm._s(item.race.dropzone.distance) +
                        ")\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [_vm._v("Type:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.type_formatted) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "tw-whitespace-no-wrap text-md" }, [
                    _c("strong", [_vm._v("Released:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.unloading_time) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "tw-whitespace-no-wrap text-md" }, [
                    _c("strong", [_vm._v("Arrived:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.arrival_time) +
                        "\n                "
                    )
                  ])
                ])
              ]
            }
          },
          {
            key: "item.place_personal",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_personal != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_personal))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.race.amount_of_pigeons) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "selection",
            fn: function(data) {
              return [
                _vm._v(_vm._s(data.item.name) + ", " + _vm._s(data.item.group))
              ]
            }
          },
          {
            key: "item.interval",
            fn: function(ref) {
              var item = ref.item
              return [
                item.interval
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (Math.round(item.interval * 100) / 100).toFixed(2)
                        )
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.mpm",
            fn: function(ref) {
              var item = ref.item
              return [
                item.mpm
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s((Math.round(item.mpm * 100) / 100).toFixed(3))
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_club && item.place_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_club))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_club) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_club && item.coefficient_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_club * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_provincial && item.place_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_provincial))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_provincial) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_provincial &&
                item.coefficient_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_provincial * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_zone && item.place_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_zone))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_zone) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_zone && item.coefficient_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_zone * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_national && item.place_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_national))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_national) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_national &&
                item.coefficient_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_national * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "div",
                  { staticClass: "tw-flex tw-my-2" },
                  [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "mx-2",
                                          attrs: {
                                            href:
                                              "/result/" +
                                              item.pigeon_id +
                                              "/edit",
                                            target: "_blank",
                                            fab: "",
                                            "x-small": "",
                                            link: "",
                                            color: "green"
                                          }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v("mdi-pencil")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Edit result")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "mx-2",
                                          attrs: {
                                            href: "/race/" + item.race.id,
                                            target: "_blank",
                                            fab: "",
                                            "x-small": "",
                                            link: "",
                                            color: "red"
                                          }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v("mdi-table-large")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v("See race details")])]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", {
            domProps: { textContent: _vm._s("List of all races") }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.racesData,
          search: _vm.search,
          "multi-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.dropzone.name",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v(_vm._s(item.dropzone.name))]
            }
          },
          {
            key: "item.category_formatted",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip",
                  {
                    attrs: {
                      color: _vm.getColorCategory(item.category_formatted),
                      dark: ""
                    }
                  },
                  [_vm._v(_vm._s(item.category_formatted))]
                )
              ]
            }
          },
          {
            key: "item.type_formatted",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip",
                  {
                    attrs: {
                      color: _vm.getColorType(item.type_formatted),
                      dark: ""
                    }
                  },
                  [_vm._v(_vm._s(item.type_formatted))]
                )
              ]
            }
          },
          {
            key: "item.race_details",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("a", { attrs: { href: "/race/" + item.id } }, [
                  _vm._v("See race details")
                ])
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "mx-2",
                                      attrs: {
                                        href: "/race/" + item.id + "/edit",
                                        target: "_blank",
                                        fab: "",
                                        "x-small": "",
                                        link: "",
                                        color: "green"
                                      }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("mdi-pencil")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Edit race")])]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.resultsData,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "item-key": "id",
          "show-expand": "",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c("td", { attrs: { colspan: headers.length } }, [
                  _c("p", { staticClass: "tw-mt-2" }, [
                    _c("strong", [_vm._v("Dropzone:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.dropzone.name) +
                        " (" +
                        _vm._s(item.race.dropzone.distance) +
                        ")\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [_vm._v("Type:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.type) +
                        "\n                "
                    )
                  ])
                ])
              ]
            }
          },
          {
            key: "item.place_personal",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_personal != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_personal))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.race.amount_of_pigeons) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.pigeon.ringnumber",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  {
                    staticClass: "tw-whitespace-no-wrap",
                    attrs: { href: "/pigeon/" + item.pigeon.id }
                  },
                  [_vm._v(_vm._s(item.pigeon.ringnumber))]
                )
              ]
            }
          },
          {
            key: "item.arrival_time",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                  _vm._v(_vm._s(item.arrival_time))
                ])
              ]
            }
          },
          {
            key: "item.interval",
            fn: function(ref) {
              var item = ref.item
              return [
                item.interval
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (Math.round(item.interval * 100) / 100).toFixed(2)
                        )
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.mpm",
            fn: function(ref) {
              var item = ref.item
              return [
                item.mpm
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s((Math.round(item.mpm * 100) / 100).toFixed(3))
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_club && item.place_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_club))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_club) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_club && item.coefficient_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_club * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_provincial && item.place_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_provincial))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_provincial) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_provincial &&
                item.coefficient_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_provincial * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_zone && item.place_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_zone))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_zone) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_zone && item.coefficient_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_zone * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_national && item.place_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_national))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_national) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_national &&
                item.coefficient_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_national * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "mx-2",
                                      attrs: {
                                        href: "/result/" + item.id + "/edit",
                                        target: "_blank",
                                        fab: "",
                                        "x-small": "",
                                        link: "",
                                        color: "green"
                                      }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("mdi-pencil")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Edit result")])]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", { domProps: { textContent: _vm._s("All results") } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Search" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.resultsData,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "item-key": "id",
          "show-expand": "",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c("td", { attrs: { colspan: headers.length } }, [
                  _c("p", { staticClass: "tw-mt-2" }, [
                    _c("strong", [_vm._v("Dropzone:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.dropzone.name) +
                        " (" +
                        _vm._s(item.race.dropzone.distance) +
                        ")\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("strong", [_vm._v("Type:")]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.race.type) +
                        "\n                "
                    )
                  ])
                ])
              ]
            }
          },
          {
            key: "item.place_personal",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_personal != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_personal))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.race.amount_of_pigeons) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.pigeon.ringnumber",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  {
                    staticClass: "tw-whitespace-no-wrap",
                    attrs: { href: "/pigeon/" + item.pigeon.id }
                  },
                  [_vm._v(_vm._s(item.pigeon.ringnumber))]
                )
              ]
            }
          },
          {
            key: "item.arrival_time",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                  _vm._v(_vm._s(item.arrival_time))
                ])
              ]
            }
          },
          {
            key: "item.interval",
            fn: function(ref) {
              var item = ref.item
              return [
                item.interval
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (Math.round(item.interval * 100) / 100).toFixed(2)
                        )
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.mpm",
            fn: function(ref) {
              var item = ref.item
              return [
                item.mpm
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s((Math.round(item.mpm * 100) / 100).toFixed(3))
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_club && item.place_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_club))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_club) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_club",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_club && item.coefficient_club != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_club * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_provincial && item.place_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_provincial))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_provincial) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_provincial",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_provincial &&
                item.coefficient_provincial != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_provincial * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_zone && item.place_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_zone))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_zone) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_zone",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_zone && item.coefficient_zone != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_zone * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.place_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.place_national && item.place_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_national))]),
                      _vm._v(
                        "\n                / " +
                          _vm._s(item.amount_pigeons_national) +
                          "\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.coefficient_national",
            fn: function(ref) {
              var item = ref.item
              return [
                item.coefficient_national &&
                item.coefficient_national != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (
                            Math.round(item.coefficient_national * 100) / 100
                          ).toFixed(2)
                        ) + "%"
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      staticClass: "mx-2",
                                      attrs: {
                                        href: "/result/" + item.id + "/edit",
                                        target: "_blank",
                                        fab: "",
                                        "x-small": "",
                                        link: "",
                                        color: "green"
                                      }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { dark: "" } }, [
                                    _vm._v("mdi-pencil")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Edit result")])]
                )
              ]
            }
          }
        ])
      })
    ],
    1
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
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/vuetify */ "./resources/js/plugins/vuetify.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('dropzone-list', __webpack_require__(/*! ./components/Dropzone/DropzoneList.vue */ "./resources/js/components/Dropzone/DropzoneList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('race-list', __webpack_require__(/*! ./components/Race/RaceList.vue */ "./resources/js/components/Race/RaceList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('single-race-results-table', __webpack_require__(/*! ./components/Race/SingleRaceResultsTable.vue */ "./resources/js/components/Race/SingleRaceResultsTable.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('all-results-data-table', __webpack_require__(/*! ./components/Result/AllResultsDataTable.vue */ "./resources/js/components/Result/AllResultsDataTable.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('pigeon-list', __webpack_require__(/*! ./components/Pigeon/PigeonList.vue */ "./resources/js/components/Pigeon/PigeonList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('single-pigeon-results-table', __webpack_require__(/*! ./components/Pigeon/SinglePigeonResultsTable.vue */ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue")["default"]);
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Dropzone/DropzoneList.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Dropzone/DropzoneList.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropzoneList.vue?vue&type=template&id=30b76ddc& */ "./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc&");
/* harmony import */ var _DropzoneList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropzoneList.vue?vue&type=script&lang=js& */ "./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropzoneList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dropzone/DropzoneList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneList.vue?vue&type=template&id=30b76ddc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dropzone/DropzoneList.vue?vue&type=template&id=30b76ddc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneList_vue_vue_type_template_id_30b76ddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonList.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonList.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PigeonList.vue?vue&type=template&id=4f99d832& */ "./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832&");
/* harmony import */ var _PigeonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PigeonList.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PigeonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/PigeonList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonList.vue?vue&type=template&id=4f99d832& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonList.vue?vue&type=template&id=4f99d832&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonList_vue_vue_type_template_id_4f99d832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Pigeon/SinglePigeonResultsTable.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4& */ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4&");
/* harmony import */ var _SinglePigeonResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SinglePigeonResultsTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SinglePigeonResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/SinglePigeonResultsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePigeonResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePigeonResultsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePigeonResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/SinglePigeonResultsTable.vue?vue&type=template&id=419a5df4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SinglePigeonResultsTable_vue_vue_type_template_id_419a5df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Race/RaceList.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Race/RaceList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaceList.vue?vue&type=template&id=2801b1d2& */ "./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2&");
/* harmony import */ var _RaceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaceList.vue?vue&type=script&lang=js& */ "./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RaceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Race/RaceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceList.vue?vue&type=template&id=2801b1d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceList.vue?vue&type=template&id=2801b1d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceList_vue_vue_type_template_id_2801b1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Race/SingleRaceResultsTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Race/SingleRaceResultsTable.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleRaceResultsTable.vue?vue&type=template&id=744019d4& */ "./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4&");
/* harmony import */ var _SingleRaceResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleRaceResultsTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleRaceResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Race/SingleRaceResultsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleRaceResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleRaceResultsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleRaceResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleRaceResultsTable.vue?vue&type=template&id=744019d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/SingleRaceResultsTable.vue?vue&type=template&id=744019d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleRaceResultsTable_vue_vue_type_template_id_744019d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Result/AllResultsDataTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsDataTable.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllResultsDataTable.vue?vue&type=template&id=7fca9470& */ "./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470&");
/* harmony import */ var _AllResultsDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllResultsDataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllResultsDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Result/AllResultsDataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsDataTable.vue?vue&type=template&id=7fca9470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsDataTable.vue?vue&type=template&id=7fca9470&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsDataTable_vue_vue_type_template_id_7fca9470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/plugins/vuetify.js":
/*!*****************************************!*\
  !*** ./resources/js/plugins/vuetify.js ***!
  \*****************************************/
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



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);
var opts = {};
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

__webpack_require__(/*! C:\Users\aFluxx\Desktop\Pigeonalytics\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\aFluxx\Desktop\Pigeonalytics\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);