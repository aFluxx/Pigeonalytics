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
        text: "Name",
        sortable: true,
        value: "name"
      }, {
        text: "Distance (in meter)",
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["races"],
  data: function data() {
    return {
      racesData: this.races,
      search: "",
      authed: typeof authed !== "undefined",
      headers: [{
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
      }, {
        text: "",
        sortable: false,
        value: "actions"
      }]
    };
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      authedVue: authed == 1,
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["results"],
  data: function data() {
    return {
      expanded: [],
      search: "",
      resultsData: this.results
    };
  },
  computed: {
    headers: function headers() {
      var headers = [{
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table th + th {\n  border-left: 1px solid #ddd;\n}\ntable td + td {\n  border-left: 1px solid #ddd;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsHfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&");

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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          pagination: _vm.pagination,
          "multi-sort": ""
        },
        on: {
          "update:pagination": function($event) {
            _vm.pagination = $event
          }
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
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d& ***!
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
          _c("span", {
            domProps: {
              textContent: _vm._s(
                _vm.pigeon.ringnumber + " - Kleine Fond / Fond / Grote Fond"
              )
            }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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
                item.place_overkoepeling && item.place_overkoepeling != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_overkoepeling))]),
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
                                            target: "_blank",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce& ***!
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
          _c("span", {
            domProps: {
              textContent: _vm._s(
                _vm.pigeon.ringnumber + " - Vitesse / Halve Fond"
              )
            }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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
                item.place_overkoepeling && item.place_overkoepeling != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_overkoepeling))]),
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
                                            target: "_blank",
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
            domProps: {
              textContent: _vm._s(_vm.pigeon.ringnumber + " - All Results")
            }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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
                item.place_overkoepeling && item.place_overkoepeling != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_overkoepeling))]),
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
                                            target: "_blank",
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
                _vm.authed
                  ? _c(
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba& ***!
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f& ***!
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                item.place_overkoepeling && item.place_overkoepeling != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_overkoepeling))]),
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
                    attrs: {
                      target: "_blank",
                      href: "/pigeon/" + item.pigeon_id
                    }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            domProps: {
              textContent: _vm._s("All results (Kleine Fond, Fond, Grote Fond)")
            }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            domProps: {
              textContent: _vm._s("All results (Vitesse, Halve Fond)")
            }
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
          "footer-props": { "items-per-page-options": [10, 30, 50, 100, -1] },
          "item-key": "id",
          "multi-sort": ""
        },
        on: {
          "update:expanded": function($event) {
            _vm.expanded = $event
          }
        },
        scopedSlots: _vm._u([
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
                        _vm.moment(item.race.unloading_time).format("HH:mm:ss")
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
                item.place_overkoepeling && item.place_overkoepeling != 1000000
                  ? _c("span", { staticClass: "tw-whitespace-no-wrap" }, [
                      _c("strong", [_vm._v(_vm._s(item.place_overkoepeling))]),
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");




vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a; // Dropzone

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('dropzone-list', __webpack_require__(/*! ./components/Dropzone/DropzoneList.vue */ "./resources/js/components/Dropzone/DropzoneList.vue")["default"]); // Race

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('race-list', __webpack_require__(/*! ./components/Race/RaceList.vue */ "./resources/js/components/Race/RaceList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('race-results-hfo', __webpack_require__(/*! ./components/Race/RaceResultsHfo.vue */ "./resources/js/components/Race/RaceResultsHfo.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('race-results-fon', __webpack_require__(/*! ./components/Race/RaceResultsFon.vue */ "./resources/js/components/Race/RaceResultsFon.vue")["default"]); // Result

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('all-results-data-table', __webpack_require__(/*! ./components/Result/AllResultsDataTable.vue */ "./resources/js/components/Result/AllResultsDataTable.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('all-results-hfo', __webpack_require__(/*! ./components/Result/AllResultsHfo.vue */ "./resources/js/components/Result/AllResultsHfo.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('all-results-fon', __webpack_require__(/*! ./components/Result/AllResultsFOn.vue */ "./resources/js/components/Result/AllResultsFOn.vue")["default"]); // Pigeon

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('pigeon-list', __webpack_require__(/*! ./components/Pigeon/PigeonList.vue */ "./resources/js/components/Pigeon/PigeonList.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('single-pigeon-results-table', __webpack_require__(/*! ./components/Pigeon/SinglePigeonResultsTable.vue */ "./resources/js/components/Pigeon/SinglePigeonResultsTable.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('results-hfo', __webpack_require__(/*! ./components/Pigeon/ResultsHfo.vue */ "./resources/js/components/Pigeon/ResultsHfo.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('results-fon', __webpack_require__(/*! ./components/Pigeon/ResultsFon.vue */ "./resources/js/components/Pigeon/ResultsFon.vue")["default"]); // Varia

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

/***/ "./resources/js/components/Pigeon/ResultsFon.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsFon.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsFon.vue?vue&type=template&id=3152512d& */ "./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d&");
/* harmony import */ var _ResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsFon.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/ResultsFon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsFon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsFon.vue?vue&type=template&id=3152512d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsFon.vue?vue&type=template&id=3152512d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsFon_vue_vue_type_template_id_3152512d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pigeon/ResultsHfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsHfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsHfo.vue?vue&type=template&id=e85d7cce& */ "./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce&");
/* harmony import */ var _ResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsHfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pigeon/ResultsHfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsHfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsHfo.vue?vue&type=template&id=e85d7cce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pigeon/ResultsHfo.vue?vue&type=template&id=e85d7cce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsHfo_vue_vue_type_template_id_e85d7cce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Race/RaceResultsFon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsFon.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaceResultsFon.vue?vue&type=template&id=ab66ceba& */ "./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba&");
/* harmony import */ var _RaceResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaceResultsFon.vue?vue&type=script&lang=js& */ "./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RaceResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Race/RaceResultsFon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsFon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsFon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsFon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsFon.vue?vue&type=template&id=ab66ceba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsFon.vue?vue&type=template&id=ab66ceba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsFon_vue_vue_type_template_id_ab66ceba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Race/RaceResultsHfo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsHfo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RaceResultsHfo.vue?vue&type=template&id=04cb890f& */ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f&");
/* harmony import */ var _RaceResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RaceResultsHfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RaceResultsHfo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RaceResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Race/RaceResultsHfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsHfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsHfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RaceResultsHfo.vue?vue&type=template&id=04cb890f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Race/RaceResultsHfo.vue?vue&type=template&id=04cb890f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RaceResultsHfo_vue_vue_type_template_id_04cb890f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Result/AllResultsFOn.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Result/AllResultsFOn.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllResultsFOn.vue?vue&type=template&id=d6d5de2e& */ "./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e&");
/* harmony import */ var _AllResultsFOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllResultsFOn.vue?vue&type=script&lang=js& */ "./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllResultsFOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Result/AllResultsFOn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsFOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsFOn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsFOn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsFOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsFOn.vue?vue&type=template&id=d6d5de2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsFOn.vue?vue&type=template&id=d6d5de2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsFOn_vue_vue_type_template_id_d6d5de2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Result/AllResultsHfo.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Result/AllResultsHfo.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllResultsHfo.vue?vue&type=template&id=25af1535& */ "./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535&");
/* harmony import */ var _AllResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllResultsHfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Result/AllResultsHfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsHfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsHfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsHfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllResultsHfo.vue?vue&type=template&id=25af1535& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Result/AllResultsHfo.vue?vue&type=template&id=25af1535&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllResultsHfo_vue_vue_type_template_id_25af1535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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