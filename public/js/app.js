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
      authedVue: authed == 1
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
        text: "Naam",
        sortable: true,
        value: "name"
      }, {
        text: "Afstand (in meter)",
        sortable: true,
        value: "distance"
      }];

      if (this.authedVue) {
        headers.unshift({
          text: "",
          sortable: false,
          value: "actions"
        });
      }

      return headers;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_menuItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/menuItems.js */ "./resources/js/config/menuItems.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["authed"],
  data: function data() {
    return {
      active: "",
      items: this.authed ? _config_menuItems_js__WEBPACK_IMPORTED_MODULE_0__["isAdmin"] : _config_menuItems_js__WEBPACK_IMPORTED_MODULE_0__["isNotAdmin"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["items", "data"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      headers: [{
        text: "Ringnumber",
        sortable: true,
        value: "ringnumber"
      }, {
        text: "Coefficient",
        sortable: true,
        value: "coefficient"
      }, {
        text: "Aantal races geteld",
        sortable: true,
        value: "amountOfRacesWithValidCoefficient"
      }]
    };
  },
  computed: {
    arrayItems: function arrayItems() {
      var _this = this;

      return Object.keys(this.items).map(function (key) {
        return _this.items[key];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pigeons"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["items", "data"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      headers: [{
        text: "Ringnumber",
        sortable: true,
        value: "pigeon.ringnumber"
      }, {
        text: "Gewicht",
        sortable: true,
        value: "weigth"
      }]
    };
  },
  computed: {
    arrayItems: function arrayItems() {
      var _this = this;

      return Object.keys(this.items).map(function (key) {
        return _this.items[key];
      });
    },
    keyword: function keyword() {
      return this.data.coeff.split("_")[1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trevoreyre_autocomplete_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trevoreyre/autocomplete-vue */ "./node_modules/@trevoreyre/autocomplete-vue/dist/autocomplete.esm.js");
/* harmony import */ var _trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trevoreyre/autocomplete-vue/dist/style.css */ "./node_modules/@trevoreyre/autocomplete-vue/dist/style.css");
/* harmony import */ var _trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trevoreyre_autocomplete_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["pigeonId", "pigeons"],
  data: function data() {
    return {};
  },
  components: {
    Autocomplete: _trevoreyre_autocomplete_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    search: function search(input) {
      if (input.length < 1) {
        return [];
      }

      return this.pigeons.filter(function (pigeon) {
        return pigeon.ringnumber.toLowerCase().includes(input.toLowerCase());
      });
    },
    getResultValue: function getResultValue(result) {
      return result.ringnumber;
    },
    submit: function submit() {
      axios.post(route("add-parents.store", this.pigeonId), {
        father: this.$refs.vader.value,
        mother: this.$refs.moeder.value
      }).then(function (res) {
        alert("Pigeon updated");
      });
    }
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
      pigeonsData: this.pigeons,
      search: "",
      headers: [{
        text: "Ringnumber",
        sortable: true,
        value: "ringnumber"
      }, {
        text: "Amount Result Logged",
        sortable: true,
        value: "results_count"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_ResultsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Result/ResultsTable */ "./resources/js/components/Result/ResultsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["pigeon", "resultsVitesse", "resultsHalveFond", "resultsKleineFond", "resultsFond", "resultsGroteFond", "resultsTraining", "allResults", "childrenFather", "childrenMother"],
  components: {
    ResultsTable: _Result_ResultsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tab: null
    };
  },
  computed: {
    children: function children() {
      return this.childrenFather.concat(this.childrenMother);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pigeons"],
  data: function data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    };
  },
  watch: {
    search: function search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections: function querySelections(v) {
      var _this = this;

      this.loading = true; // Simulated ajax query

      setTimeout(function () {
        _this.items = _this.pigeons.filter(function (e) {
          return (e.ringnumber || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        _this.loading = false;
      }, 500);
    },
    text: function text(item) {
      return item.ringnumber;
    },
    clickEvent: function clickEvent(e) {
      window.location.href = route("pigeon.show", this.select.id);
    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
        text: "Dropzone",
        sortable: true,
        value: "dropzone.name"
      }, {
        text: "Released",
        sortable: true,
        value: "unloading_time"
      }, {
        text: "Category",
        sortable: true,
        value: "category_formatted"
      }, {
        text: "# Pigeons",
        sortable: true,
        value: "amount_of_pigeons_personal"
      }, {
        text: "Wind Strength",
        sortable: true,
        value: "wind_strength_formatted"
      }, {
        text: "Wind",
        sortable: true,
        value: "wind_formatted"
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
      }];

      if (this.authedVue) {
        headers.unshift({
          text: "",
          sortable: false,
          value: "actions"
        });
      }

      return headers;
    }
  },
  methods: {
    getColorCategory: function getColorCategory(category) {
      if (category == "Old birds") return "lime lighten-4";else if (category == "Yearlings") return "teal lighten-4";else if (category == "Youngsters") return "green lighten-3";else if (category == "Mix Yearling / Old") return "purple lighten-4";else if (category == "Mix Varia") return "indigo lighten-3";
    },
    getColorType: function getColorType(type) {
      if (type == "Competition") return "green lighten-3";else if (type == "Training") return "pink lighten-4";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      resultsData: this.data,
      search: "",
      headers: [{
        text: "Pigeon",
        sortable: true,
        value: "ringnumber"
      }, {
        text: "Average MPM",
        sortable: true,
        value: "average"
      }, {
        text: "Amount of races",
        sortable: true,
        value: "count"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_ResultsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Result/ResultsTable */ "./resources/js/components/Result/ResultsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["resultsVitesse", "resultsHalveFond", "resultsKleineFond", "resultsFond", "resultsGroteFond", "allResults"],
  components: {
    ResultsTable: _Result_ResultsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tab: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/headers.js */ "./resources/js/config/headers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["type", "category", "discipline", "pigeon", "results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      authedVue: authed == 1,
      resultsData: this.results,
      filteredOnWindDirection: false,
      windDirections: [{
        text: "North"
      }, {
        text: "East"
      }, {
        text: "South"
      }, {
        text: "West"
      }],
      years: [{
        text: "2020"
      }, {
        text: "2019"
      }, {
        text: "2018"
      }, {
        text: "2017"
      }, {
        text: "2016"
      }]
    };
  },
  computed: {
    headers: function headers() {
      var headers = this.figureOutHeaders();

      if (this.authedVue) {
        if (!headers.find(function (header) {
          return header["value"] === "actions";
        })) {
          headers.unshift({
            text: "",
            sortable: false,
            value: "actions"
          });
        }
      }

      return headers;
    }
  },
  methods: {
    enteringWindDirection: function enteringWindDirection(e) {
      if (e) {
        this.filteredOnWindDirection = true;
      } else {
        this.filteredOnWindDirection = false;
      }
    },
    enteringYear: function enteringYear(e) {
      if (e) {
        this.filteredOnWindDirection = true;
      } else {
        this.filteredOnWindDirection = false;
      }
    },
    figureOutHeaders: function figureOutHeaders() {
      switch (this.type) {
        case "pigeon":
          // Handle special headers for training table
          if (this.category == "training") {
            return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersPigeon4"];
          }

          switch (this.discipline) {
            case "vit":
            case "hfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersPigeon1"];

            case "kle":
            case "fon":
            case "gfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersPigeon2"];

            case "all":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersPigeon3"];
          }

        case "result":
          switch (this.discipline) {
            case "vit":
            case "hfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersResult1"];

            case "kle":
            case "fon":
            case "gfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersResult2"];

            case "all":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersResult3"];
          }

        case "race":
          switch (this.discipline) {
            case "vit":
            case "hfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersRace1"];

            case "kle":
            case "fon":
            case "gfo":
              return _config_headers_js__WEBPACK_IMPORTED_MODULE_0__["headersRace2"];
          }

      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout {\n  display: inline-block;\n  width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
            domProps: { textContent: _vm._s("Alle lossingsplaatsen") }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "multi-sort": ""
        },
        scopedSlots: _vm._u(
          [
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
                                                "/dropzone/" +
                                                item.id +
                                                "/edit",
                                              fab: "",
                                              "x-small": "",
                                              link: "",
                                              color: "green lighten-2"
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
                        [
                          _vm._v(" "),
                          _c("span", [_vm._v("Bewerk lossingsplaats")])
                        ]
                      )
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
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076& ***!
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
    { staticClass: "mx-auto" },
    [
      _c(
        "v-navigation-drawer",
        { attrs: { permanent: "" } },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  !_vm.authed
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "primary",
                          attrs: { depressed: "", href: "/login" },
                          domProps: { textContent: _vm._s("Inloggen") }
                        },
                        [
                          _c("v-icon", { attrs: { right: "", dark: "" } }, [
                            _vm._v("mdi-login")
                          ])
                        ],
                        1
                      )
                    : _c("span", [_vm._v("Ingelogd")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    { staticClass: "title", attrs: { align: "center" } },
                    [
                      _vm._v("\n                    De Belser "),
                      _c("br"),
                      _vm._v(
                        "\n                    Racing Pigeons\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "red lighten-2 white--text",
                          attrs: { href: "javascript:history.back()" }
                        },
                        [
                          _c("v-icon", { attrs: { dark: "", small: "" } }, [
                            _vm._v("mdi-arrow-left")
                          ]),
                          _vm._v(
                            "\n                        Terug\n                    "
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.items, function(item) {
                return _c(
                  "v-list-group",
                  {
                    key: item.title,
                    attrs: { "prepend-icon": item.action, "no-action": "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function() {
                            return [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    domProps: {
                                      textContent: _vm._s(item.title)
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: item.active,
                      callback: function($$v) {
                        _vm.$set(item, "active", $$v)
                      },
                      expression: "item.active"
                    }
                  },
                  [
                    _vm._v(" "),
                    _vm._l(item.items, function(child) {
                      return _c(
                        "v-list-item",
                        { key: child.title, attrs: { value: child.title } },
                        [
                          _c("v-list-item-content", [
                            _c("a", {
                              attrs: { href: child.href },
                              domProps: { textContent: _vm._s(child.title) }
                            })
                          ])
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              })
            ],
            2
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190& ***!
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
          _c("span", { domProps: { textContent: _vm._s("Beste kwekers") } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Zoeken" },
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
      _c("v-card-text", [
        _vm._v(
          "\n        Van: " +
            _vm._s(_vm.data.van_jaar) +
            " - Tot: " +
            _vm._s(_vm.data.tot_jaar) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _vm._v(
          "\n        Categorie: " +
            _vm._s(_vm.data.coeff) +
            " | Threshold: " +
            _vm._s(_vm.data.threshold) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.arrayItems,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "show-expand": true,
          "sort-desc": true,
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "sort-by": "weigth",
          "item-key": "pigeon.ringnumber",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u(
          [
            {
              key: "expanded-item",
              fn: function(ref) {
                var headers = ref.headers
                var item = ref.item
                return [
                  _c(
                    "td",
                    { attrs: { colspan: headers.length } },
                    [
                      _c("tr", [
                        _c("td", [_vm._v("Duif")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Plaats")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Aantal duiven")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Coefficient")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Race ID")])
                      ]),
                      _vm._v(" "),
                      _vm._l(item.results, function(result, i) {
                        return _c("tr", { key: i }, [
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "/pigeon/" + result.pigeon.id }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(result.pigeon.ringnumber) +
                                    "\n                        "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(result["place_" + _vm.keyword]) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  result.race[
                                    "amount_of_pigeons_" + _vm.keyword
                                  ]
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  Math.round(
                                    (result["coefficient_" + _vm.keyword] +
                                      Number.EPSILON) *
                                      100
                                  ) / 100
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(result.race.id) +
                                "\n                    "
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ]
              }
            },
            {
              key: "item.pigeon.ringnumber",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("a", { attrs: { href: "/pigeon/" + item.pigeon.id } }, [
                    _vm._v(_vm._s(item.pigeon.ringnumber))
                  ])
                ]
              }
            },
            {
              key: "item.weigth",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", { domProps: { textContent: _vm._s(item.weigth) } })
                ]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6& ***!
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
  return _c("div", [
    _c(
      "ul",
      _vm._l(_vm.pigeons, function(pigeon, i) {
        return _c("li", { key: i }, [
          _vm._v("\n            " + _vm._s(i) + " /\n            "),
          _c("a", { attrs: { href: "/add-parents/pigeon/" + pigeon.id } }, [
            _vm._v(
              "\n                " +
                _vm._s(pigeon.ringnumber) +
                "\n            "
            )
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          _c("span", { domProps: { textContent: _vm._s("Beste kwekers") } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: { "append-icon": "mdi-magnify", label: "Zoeken" },
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
      _c("v-card-text", [
        _vm._v(
          "\n        Van: " +
            _vm._s(_vm.data.van_jaar) +
            " - Tot: " +
            _vm._s(_vm.data.tot_jaar) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _vm._v(
          "\n        Categorie: " +
            _vm._s(_vm.data.coeff) +
            " | Threshold: " +
            _vm._s(_vm.data.threshold) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.arrayItems,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "show-expand": true,
          "sort-desc": true,
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "sort-by": "weigth",
          "item-key": "pigeon.ringnumber",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u(
          [
            {
              key: "expanded-item",
              fn: function(ref) {
                var headers = ref.headers
                var item = ref.item
                return [
                  _c(
                    "td",
                    { attrs: { colspan: headers.length } },
                    [
                      _c("tr", [
                        _c("td", [_vm._v("Duif")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Plaats")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Aantal duiven")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Coefficient")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Race ID")])
                      ]),
                      _vm._v(" "),
                      _vm._l(item.results, function(result, i) {
                        return _c("tr", { key: i }, [
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "/pigeon/" + result.pigeon.id }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(result.pigeon.ringnumber) +
                                    "\n                        "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(result["place_" + _vm.keyword]) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  result.race[
                                    "amount_of_pigeons_" + _vm.keyword
                                  ]
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  Math.round(
                                    (result["coefficient_" + _vm.keyword] +
                                      Number.EPSILON) *
                                      100
                                  ) / 100
                                ) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(result.race.id) +
                                "\n                    "
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ]
              }
            },
            {
              key: "item.pigeon.ringnumber",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("a", { attrs: { href: "/pigeon/" + item.pigeon.id } }, [
                    _vm._v(_vm._s(item.pigeon.ringnumber))
                  ])
                ]
              }
            },
            {
              key: "item.weigth",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", { domProps: { textContent: _vm._s(item.weigth) } })
                ]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "tw-flex" },
    [
      _c("autocomplete", {
        ref: "vader",
        attrs: {
          search: _vm.search,
          placeholder: "Ringnummer vader",
          "aria-label": "Ringnummer vader",
          "get-result-value": _vm.getResultValue
        }
      }),
      _vm._v(" "),
      _c("autocomplete", {
        ref: "moeder",
        attrs: {
          search: _vm.search,
          placeholder: "Ringnummer moeder",
          "aria-label": "Ringnummer moeder",
          "get-result-value": _vm.getResultValue
        }
      }),
      _vm._v(" "),
      _c("button", { on: { click: _vm.submit } }, [_vm._v("Submit")])
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
          _c("span", { domProps: { textContent: _vm._s("Mijn duiven") } }),
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "multi-sort": ""
        },
        scopedSlots: _vm._u(
          [
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
              key: "item.results_count",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", {
                    domProps: { textContent: _vm._s(item.results_count) }
                  })
                ]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d& ***!
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
        "v-tabs",
        {
          attrs: { "background-color": "primary", dark: "" },
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c("v-tab", [_vm._v("Vitesse")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Halve Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Kleine Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Grote Fond")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Kinderen")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Training")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  discipline: "vit",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsVitesse
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  discipline: "hfo",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsHalveFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  discipline: "kle",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsKleineFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  discipline: "fon",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  discipline: "gfo",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsGroteFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            _vm._l(_vm.children, function(child, i) {
              return _c(
                "v-list-item",
                { key: i },
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _c("a", { attrs: { href: "/pigeon/" + child.id } }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(child.ringnumber) +
                              "\n                        "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "pigeon",
                  category: "training",
                  pigeon: _vm.pigeon,
                  results: _vm.resultsTraining
                }
              })
            ],
            1
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-toolbar",
    { attrs: { dark: "", color: "primary" } },
    [
      _c("v-toolbar-title", [_vm._v("Duif opzoeken")]),
      _vm._v(" "),
      _c("v-autocomplete", {
        staticClass: "mx-4",
        attrs: {
          loading: _vm.loading,
          items: _vm.items,
          "item-text": _vm.text,
          "search-input": _vm.search,
          "cache-items": "",
          flat: "",
          "hide-details": "",
          "hide-no-data": "",
          "return-object": "",
          label: "Voer een ringnummer in"
        },
        on: {
          "update:searchInput": function($event) {
            _vm.search = $event
          },
          "update:search-input": function($event) {
            _vm.search = $event
          }
        },
        model: {
          value: _vm.select,
          callback: function($$v) {
            _vm.select = $$v
          },
          expression: "select"
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "blue lighten-1",
          attrs: { depressed: "" },
          on: { click: _vm.clickEvent }
        },
        [_vm._v("Ga naar duif")]
      )
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
          _vm.search
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: {
                    tile: "",
                    outlined: "",
                    color: "failure",
                    small: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.search = ""
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-close-circle")
                  ]),
                  _vm._v("Cancel search\n        ")
                ],
                1
              )
            : _vm._e(),
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
          "sort-by": ["unloading_time"],
          "sort-desc": true,
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "multi-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.dropzone.name",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: { label: "" },
                    on: {
                      click: function($event) {
                        _vm.search = item.dropzone.name
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.dropzone.name))]
                )
              ]
            }
          },
          {
            key: "item.unloading_time",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", [
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.moment(item.unloading_time).format("DD MMM YYYY")
                      ) +
                      "\n                "
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v(
                      _vm._s(_vm.moment(item.unloading_time).format("HH:mm:ss"))
                    )
                  ])
                ])
              ]
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
                      color: _vm.getColorCategory(item.category_formatted)
                    },
                    on: {
                      click: function($event) {
                        _vm.search = item.category_formatted
                      }
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
                    attrs: { color: _vm.getColorType(item.type_formatted) },
                    on: {
                      click: function($event) {
                        _vm.search = item.type_formatted
                      }
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
                _c(
                  "div",
                  { staticClass: "my-2" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          small: "",
                          href: "/race/" + item.id,
                          color: "primary"
                        }
                      },
                      [_vm._v("Race details")]
                    )
                  ],
                  1
                )
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
                                        fab: "",
                                        "x-small": "",
                                        link: "",
                                        color: "green lighten-2"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _c("span", { domProps: { textContent: _vm._s("Average MPM") } }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.search
            ? _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: {
                    tile: "",
                    outlined: "",
                    color: "failure",
                    small: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.search = ""
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-close-circle")
                  ]),
                  _vm._v("Cancel search\n        ")
                ],
                1
              )
            : _vm._e(),
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
          "sort-desc": true,
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "multi-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.ringnumber",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  {
                    staticClass: "tw-whitespace-no-wrap",
                    attrs: { href: "/pigeon/" + item.pigeon_id }
                  },
                  [_vm._v(_vm._s(item.ringnumber))]
                )
              ]
            }
          },
          {
            key: "item.average",
            fn: function(ref) {
              var item = ref.item
              return [
                item.average
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _vm._v(
                        _vm._s(
                          (Math.round(item.average * 100) / 100).toFixed(3)
                        )
                      )
                    ])
                  : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6& ***!
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
        "v-tabs",
        {
          attrs: { "background-color": "primary", dark: "" },
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c("v-tab", [_vm._v("Vitesse")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Halve Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Kleine Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Fond")]),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Grote Fond")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "vit",
                  results: _vm.resultsVitesse
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "hfo",
                  results: _vm.resultsHalveFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "kle",
                  results: _vm.resultsKleineFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "fon",
                  results: _vm.resultsFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "gfo",
                  results: _vm.resultsGroteFond
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("results-table", {
                attrs: {
                  type: "result",
                  discipline: "all",
                  results: _vm.allResults
                }
              })
            ],
            1
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "tw-mr-6 xxl:tw-mr-0" },
    [
      _vm.pigeon
        ? _c("v-card-title", [
            _c("span", {
              domProps: { textContent: _vm._s(_vm.pigeon.ringnumber) }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-title",
        [
          _c(
            "v-row",
            { attrs: { align: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "3" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.windDirections,
                      clearable: true,
                      "menu-props": "auto",
                      "hide-details": "",
                      label: "Filter by wind",
                      "single-line": ""
                    },
                    on: { input: _vm.enteringWindDirection },
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
              _c(
                "v-col",
                { attrs: { cols: "3" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.years,
                      clearable: true,
                      "menu-props": "auto",
                      "hide-details": "",
                      label: "Filter by year",
                      "single-line": ""
                    },
                    on: { input: _vm.enteringYear },
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
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.resultsData,
          search: _vm.search,
          "single-expand": false,
          expanded: _vm.expanded,
          "show-expand": true,
          "item-key": "id",
          "multi-sort": "",
          "footer-props": {
            "items-per-page-options": [10, 30, 50, 100, -1]
          }
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u(
          [
            {
              key: "expanded-item",
              fn: function(ref) {
                var headers = ref.headers
                var item = ref.item
                return [
                  _c("tr", [
                    _c("td", { attrs: { colspan: headers.length } }, [
                      _c("p", { staticClass: "tw-mt-2" }, [
                        _c("strong", [_vm._v("Dropzone:")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(item.race.dropzone.name) +
                            " (" +
                            _vm._s(item.race.dropzone.distance) +
                            ")\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("strong", [_vm._v("Type:")]),
                        _vm._v(
                          "\n                        " +
                            _vm._s(item.race.type_formatted) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "tw-whitespace-no-wrap text-md" },
                        [
                          _c("strong", [_vm._v("Released:")]),
                          _vm._v(
                            "\n                        " +
                              _vm._s(item.race.unloading_time) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "tw-whitespace-no-wrap text-md" },
                        [
                          _c("strong", [_vm._v("Arrived:")]),
                          _vm._v(
                            "\n                        " +
                              _vm._s(item.arrival_time) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "tw-whitespace-no-wrap text-md" },
                        [
                          _c("strong", [_vm._v("Wind:")]),
                          _vm._v(
                            "\n                        " +
                              _vm._s(item.race.wind_formatted) +
                              "\n                    "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              }
            },
            {
              key: "item.race.dropzone.name",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", {
                    domProps: { textContent: _vm._s(item.race.dropzone.name) }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [
                    _vm.filteredOnWindDirection
                      ? _c("span", {
                          domProps: {
                            textContent: _vm._s(item.race.wind_formatted)
                          }
                        })
                      : _vm._e()
                  ])
                ]
              }
            },
            {
              key: "item.race.unloading_time",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("span", [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm
                            .moment(item.race.unloading_time)
                            .format("DD MMM YYYY")
                        ) +
                        "\n                "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm
                            .moment(item.race.unloading_time)
                            .format("HH:mm:ss")
                        )
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
                            _vm._s(item.race.amount_of_pigeons_personal) +
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
                  _vm._v(
                    _vm._s(data.item.name) + ", " + _vm._s(data.item.group)
                  )
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
                  _c("span", [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.moment(item.arrival_time).format("DD MMM YYYY")
                        ) +
                        "\n                "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.moment(item.arrival_time).format("HH:mm:ss"))
                      )
                    ])
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
                            _vm._s(item.race.amount_of_pigeons_club) +
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
                            _vm._s(item.race.amount_of_pigeons_provincial) +
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
                              Math.round(item.coefficient_provincial * 100) /
                              100
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
                            _vm._s(item.race.amount_of_pigeons_zone) +
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
                            _vm._s(item.race.amount_of_pigeons_national) +
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
              key: "item.place_regio",
              fn: function(ref) {
                var item = ref.item
                return [
                  item.place_regio && item.place_regio != 1000000
                    ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                        _c("strong", [_vm._v(_vm._s(item.place_regio))]),
                        _vm._v(
                          "\n                / " +
                            _vm._s(item.race.amount_of_pigeons_regio) +
                            "\n            "
                        )
                      ])
                    : _vm._e()
                ]
              }
            },
            {
              key: "item.coefficient_regio",
              fn: function(ref) {
                var item = ref.item
                return [
                  item.coefficient_regio && item.coefficient_regio != 1000000
                    ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                        _vm._v(
                          _vm._s(
                            (
                              Math.round(item.coefficient_regio * 100) / 100
                            ).toFixed(2)
                          ) + "%"
                        )
                      ])
                    : _vm._e()
                ]
              }
            },
            {
              key: "item.place_overkoepeling",
              fn: function(ref) {
                var item = ref.item
                return [
                  item.place_overkoepeling &&
                  item.place_overkoepeling != 1000000
                    ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                        _c("strong", [
                          _vm._v(_vm._s(item.place_overkoepeling))
                        ]),
                        _vm._v(
                          "\n                / " +
                            _vm._s(item.race.amount_of_pigeons_overkoepeling) +
                            "\n            "
                        )
                      ])
                    : _vm._e()
                ]
              }
            },
            {
              key: "item.coefficient_overkoepeling",
              fn: function(ref) {
                var item = ref.item
                return [
                  item.coefficient_overkoepeling &&
                  item.coefficient_overkoepeling != 1000000
                    ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                        _vm._v(
                          _vm._s(
                            (
                              Math.round(item.coefficient_overkoepeling * 100) /
                              100
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
                                                "/result/" + item.id + "/edit",
                                              fab: "",
                                              "x-small": "",
                                              link: "",
                                              color: "green lighten-2"
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
          ],
          null,
          true
        )
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");




vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a; // Navigation

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('navigation-drawer', __webpack_require__(/*! ./components/Navigation/NavigationDrawer.vue */ "./resources/js/components/Navigation/NavigationDrawer.vue")["default"]); // Dropzone

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('dropzone-list', __webpack_require__(/*! ./components/Dropzone/DropzoneList.vue */ "./resources/js/components/Dropzone/DropzoneList.vue")["default"]); // Race

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('race-list', __webpack_require__(/*! ./components/Race/RaceList.vue */ "./resources/js/components/Race/RaceList.vue")["default"]); // Result

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('result-overview', __webpack_require__(/*! ./components/Result/ResultOverview.vue */ "./resources/js/components/Result/ResultOverview.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('results-table', __webpack_require__(/*! ./components/Result/ResultsTable.vue */ "./resources/js/components/Result/ResultsTable.vue")["default"]); // Pigeon

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('pigeon-list', __webpack_require__(/*! ./components/Pigeon/PigeonList.vue */ "./resources/js/components/Pigeon/PigeonList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('pigeon-overview', __webpack_require__(/*! ./components/Pigeon/PigeonOverview.vue */ "./resources/js/components/Pigeon/PigeonOverview.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('pigeon-search', __webpack_require__(/*! ./components/Pigeon/PigeonSearch.vue */ "./resources/js/components/Pigeon/PigeonSearch.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('best-breeders', __webpack_require__(/*! ./components/Pigeon/BestBreeders.vue */ "./resources/js/components/Pigeon/BestBreeders.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('ace-pigeons', __webpack_require__(/*! ./components/Pigeon/AcePigeons.vue */ "./resources/js/components/Pigeon/AcePigeons.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('add-parents', __webpack_require__(/*! ./components/Pigeon/AddParents.vue */ "./resources/js/components/Pigeon/AddParents.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('parent-select', __webpack_require__(/*! ./components/Pigeon/ParentSelect.vue */ "./resources/js/components/Pigeon/ParentSelect.vue")["default"]); // Varia

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('average-year-mpm', __webpack_require__(/*! ./components/Rapport/AverageYearMpm.vue */ "./resources/js/components/Rapport/AverageYearMpm.vue")["default"]);
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

/***/ "./resources/js/components/Navigation/NavigationDrawer.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Navigation/NavigationDrawer.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationDrawer.vue?vue&type=template&id=f6237076& */ "./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076&");
/* harmony import */ var _NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationDrawer.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation/NavigationDrawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationDrawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationDrawer.vue?vue&type=template&id=f6237076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/NavigationDrawer.vue?vue&type=template&id=f6237076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_f6237076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/AcePigeons.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pigeon/AcePigeons.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcePigeons.vue?vue&type=template&id=6ed0a190& */ "./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190&");
/* harmony import */ var _AcePigeons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcePigeons.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AcePigeons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/AcePigeons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcePigeons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AcePigeons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcePigeons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AcePigeons.vue?vue&type=template&id=6ed0a190& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AcePigeons.vue?vue&type=template&id=6ed0a190&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AcePigeons_vue_vue_type_template_id_6ed0a190___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/AddParents.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pigeon/AddParents.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddParents.vue?vue&type=template&id=416524e6& */ "./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6&");
/* harmony import */ var _AddParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddParents.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/AddParents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddParents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AddParents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddParents.vue?vue&type=template&id=416524e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/AddParents.vue?vue&type=template&id=416524e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParents_vue_vue_type_template_id_416524e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/BestBreeders.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pigeon/BestBreeders.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BestBreeders.vue?vue&type=template&id=6ab2d8b4& */ "./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4&");
/* harmony import */ var _BestBreeders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestBreeders.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BestBreeders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/BestBreeders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestBreeders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BestBreeders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BestBreeders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BestBreeders.vue?vue&type=template&id=6ab2d8b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/BestBreeders.vue?vue&type=template&id=6ab2d8b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BestBreeders_vue_vue_type_template_id_6ab2d8b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/ParentSelect.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pigeon/ParentSelect.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParentSelect.vue?vue&type=template&id=1b4a5cf8& */ "./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8&");
/* harmony import */ var _ParentSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ParentSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/ParentSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ParentSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ParentSelect.vue?vue&type=template&id=1b4a5cf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ParentSelect.vue?vue&type=template&id=1b4a5cf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParentSelect_vue_vue_type_template_id_1b4a5cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Pigeon/PigeonOverview.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonOverview.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PigeonOverview.vue?vue&type=template&id=513dd18d& */ "./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d&");
/* harmony import */ var _PigeonOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PigeonOverview.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PigeonOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/PigeonOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonOverview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonOverview.vue?vue&type=template&id=513dd18d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonOverview.vue?vue&type=template&id=513dd18d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonOverview_vue_vue_type_template_id_513dd18d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonSearch.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonSearch.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PigeonSearch.vue?vue&type=template&id=61422d88& */ "./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88&");
/* harmony import */ var _PigeonSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PigeonSearch.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PigeonSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/PigeonSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PigeonSearch.vue?vue&type=template&id=61422d88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/PigeonSearch.vue?vue&type=template&id=61422d88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PigeonSearch_vue_vue_type_template_id_61422d88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Rapport/AverageYearMpm.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Rapport/AverageYearMpm.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AverageYearMpm.vue?vue&type=template&id=71868028& */ "./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028&");
/* harmony import */ var _AverageYearMpm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AverageYearMpm.vue?vue&type=script&lang=js& */ "./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AverageYearMpm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Rapport/AverageYearMpm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AverageYearMpm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AverageYearMpm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AverageYearMpm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AverageYearMpm.vue?vue&type=template&id=71868028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Rapport/AverageYearMpm.vue?vue&type=template&id=71868028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AverageYearMpm_vue_vue_type_template_id_71868028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Result/ResultOverview.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Result/ResultOverview.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultOverview.vue?vue&type=template&id=066d60a6& */ "./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6&");
/* harmony import */ var _ResultOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultOverview.vue?vue&type=script&lang=js& */ "./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Result/ResultOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultOverview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultOverview.vue?vue&type=template&id=066d60a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultOverview.vue?vue&type=template&id=066d60a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultOverview_vue_vue_type_template_id_066d60a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Result/ResultsTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Result/ResultsTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsTable.vue?vue&type=template&id=3f63d72f& */ "./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f&");
/* harmony import */ var _ResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultsTable.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Result/ResultsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsTable.vue?vue&type=template&id=3f63d72f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/ResultsTable.vue?vue&type=template&id=3f63d72f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsTable_vue_vue_type_template_id_3f63d72f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/config/headers.js":
/*!****************************************!*\
  !*** ./resources/js/config/headers.js ***!
  \****************************************/
/*! exports provided: headersPigeon1, headersPigeon2, headersPigeon3, headersPigeon4, headersResult1, headersResult2, headersResult3, headersRace1, headersRace2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersPigeon1", function() { return headersPigeon1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersPigeon2", function() { return headersPigeon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersPigeon3", function() { return headersPigeon3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersPigeon4", function() { return headersPigeon4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersResult1", function() { return headersResult1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersResult2", function() { return headersResult2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersResult3", function() { return headersResult3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersRace1", function() { return headersRace1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersRace2", function() { return headersRace2; });
var headersPigeon1 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
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
}, {
  text: "mpm",
  value: "mpm",
  align: "end"
}, {
  text: "Place (Regio)",
  value: "place_regio"
}, {
  text: "Coeff (Regio)",
  value: "coefficient_regio"
}, {
  text: "Place (Overkoepeling)",
  value: "place_overkoepeling"
}, {
  text: "Coeff (Overkoepeling)",
  value: "coefficient_overkoepeling"
}, {
  text: "Wind",
  value: "race.wind_formatted",
  align: " d-none"
}];
var headersPigeon2 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
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
  text: "Place (Prov)",
  value: "place_provincial",
  align: "end"
}, {
  text: "Coeff (Prov)",
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
  text: "Place (Nat)",
  value: "place_national",
  align: "end"
}, {
  text: "Coeff (Nat)",
  value: "coefficient_national",
  align: "end"
}, {
  text: "Wind",
  value: "race.wind_formatted",
  align: " d-none"
}];
var headersPigeon3 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
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
  text: "Place (Prov)",
  value: "place_provincial",
  align: "end"
}, {
  text: "Coeff (Prov)",
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
  text: "Place (Nat)",
  value: "place_national",
  align: "end"
}, {
  text: "Coeff (Nat)",
  value: "coefficient_national",
  align: "end"
}, {
  text: "Place (Regio)",
  value: "place_regio"
}, {
  text: "Coeff (Regio)",
  value: "coefficient_regio"
}, {
  text: "Place (OK)",
  value: "place_overkoepeling"
}, {
  text: "Coeff (OK)",
  value: "coefficient_overkoepeling"
}, {
  text: "Wind",
  value: "race.wind_formatted",
  align: " d-none"
}];
var headersPigeon4 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
}, {
  text: "Arrival",
  sortable: true,
  value: "arrival_time"
}, {
  text: "Place (Personal)",
  sortable: true,
  value: "place_personal",
  align: "end"
}, {
  text: "mpm",
  value: "mpm",
  align: "end"
}, {
  text: "Wind",
  value: "race.wind_formatted",
  align: " d-none"
}];
var headersResult1 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
}, {
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
  text: "mpm",
  value: "mpm",
  align: "end"
}, {
  text: "Place (Regio)",
  value: "place_regio"
}, {
  text: "Coeff (Regio)",
  value: "coefficient_regio"
}, {
  text: "Place (Overkoepeling)",
  value: "place_overkoepeling"
}, {
  text: "Coeff (Overkoepeling)",
  value: "coefficient_overkoepeling"
}, {
  text: "Type",
  value: "race.type",
  align: " d-none"
}];
var headersResult2 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
}, {
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
  text: "Place (Prov)",
  value: "place_provincial",
  align: "end"
}, {
  text: "Coeff (Prov)",
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
  text: "Place (Nat)",
  value: "place_national",
  align: "end"
}, {
  text: "Coeff (Nat)",
  value: "coefficient_national",
  align: "end"
}, {
  text: "Type",
  value: "race.type",
  align: " d-none"
}];
var headersResult3 = [{
  text: "Dropzone",
  sortable: true,
  value: "race.dropzone.name"
}, {
  text: "Released",
  sortable: true,
  value: "race.unloading_time"
}, {
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
  text: "Place (Prov)",
  value: "place_provincial",
  align: "end"
}, {
  text: "Coeff (Prov)",
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
  text: "Place (Nat)",
  value: "place_national",
  align: "end"
}, {
  text: "Coeff (Nat)",
  value: "coefficient_national",
  align: "end"
}, {
  text: "Place (Regio)",
  value: "place_regio"
}, {
  text: "Coeff (Regio)",
  value: "coefficient_regio"
}, {
  text: "Place (OK)",
  value: "place_overkoepeling"
}, {
  text: "Coeff (OK)",
  value: "coefficient_overkoepeling"
}, {
  text: "Type",
  value: "race.type",
  align: " d-none"
}];
var headersRace1 = [{
  text: "Place",
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
  text: "Place (Regio)",
  value: "place_regio"
}, {
  text: "Coeff (Regio)",
  value: "coefficient_regio"
}, {
  text: "Place (OK)",
  value: "place_overkoepeling"
}, {
  text: "Coeff (OK)",
  value: "coefficient_overkoepeling"
}];
var headersRace2 = [{
  text: "Place",
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
  text: "Place (Prov)",
  value: "place_provincial"
}, {
  text: "Coeff (Prov)",
  value: "coefficient_provincial"
}, {
  text: "Place (Zone)",
  value: "place_zone"
}, {
  text: "Coeff (Zone)",
  value: "coefficient_zone"
}, {
  text: "Place (Nat)",
  value: "place_national"
}, {
  text: "Coeff (Nat)",
  value: "coefficient_national"
}];

/***/ }),

/***/ "./resources/js/config/menuItems.js":
/*!******************************************!*\
  !*** ./resources/js/config/menuItems.js ***!
  \******************************************/
/*! exports provided: isAdmin, isNotAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotAdmin", function() { return isNotAdmin; });
var isAdmin = [{
  title: "Losplaats",
  action: "mdi-upload-multiple",
  items: [{
    title: "Alle losplaatsen",
    href: route("dropzone.list")
  }, {
    title: "Losplaats aanmaken",
    href: route("dropzone.create")
  }]
}, {
  title: "Race",
  action: "mdi-clock",
  items: [{
    title: "Alle races",
    href: route("race.list")
  }, {
    title: "Race aanmaken",
    href: route("race.create")
  }]
}, {
  title: "Resultaten",
  action: "mdi-format-list-numbered",
  items: [{
    title: "Alle resultaten",
    href: route("result.list")
  }, {
    title: "Resultaat aanmaken (manueel)",
    href: route("result.create.manual")
  }, {
    title: "Resultaat aanmaken (upload)",
    href: route("result.create.upload")
  }, {
    title: "Resultaat aanmaken (KBDB)",
    href: route("result.create.kbdb")
  }]
}, {
  title: "Duif",
  action: "mdi-bird",
  items: [{
    title: "Alle duiven",
    href: route("pigeon.list")
  }, {
    title: "Gemiddelde jaarlijkse snelheid",
    href: route("rapport.average-year-mpm")
  }, {
    title: "Beste kwekers",
    href: route("best-breeders.index")
  }, {
    title: "Asduiven",
    href: route("ace-pigeons.index")
  }, {
    title: "Ouders toevoegen",
    href: route("add-parents.index")
  }]
}];
var isNotAdmin = [{
  title: "Losplaats",
  action: "mdi-upload-multiple",
  items: [{
    title: "Alle lostplaatsen",
    href: route("dropzone.list")
  }]
}, {
  title: "Race",
  action: "mdi-clock",
  items: [{
    title: "Alle races",
    href: route("race.list")
  }]
}, {
  title: "Resultaten",
  action: "mdi-format-list-numbered",
  items: [{
    title: "Alle resultaten",
    href: route("result.list")
  }]
}, {
  title: "Duif",
  action: "mdi-bird",
  items: [{
    title: "Alle duiven",
    href: route("pigeon.list")
  }, {
    title: "Gemiddelde jaarlijkse snelheid",
    href: route("rapport.average-year-mpm")
  }, {
    title: "Beste kwekers",
    href: route("best-breeders.index")
  }, {
    title: "Asduiven",
    href: route("ace-pigeons.index")
  }]
}];

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

__webpack_require__(/*! C:\Users\De Belser Arne\Desktop\Pigeonalytics\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\De Belser Arne\Desktop\Pigeonalytics\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);