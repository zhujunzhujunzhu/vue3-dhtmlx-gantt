/*
@license

dhtmlxGantt v.6.3.0 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(gantt){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("locale/locale_cn", [], factory);
	else if(typeof exports === 'object')
		exports["locale/locale_cn"] = factory();
	else
		root["locale/locale_cn"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/sources/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/locale/locale_cn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/locale/locale_cn.js":
/*!*************************************!*\
  !*** ./sources/locale/locale_cn.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Translation by FreezeSoul

Update 26/10/2015:
Translation of new labels by zwh8800
 https://github.com/DHTMLX/gantt/pull/7

*/
gantt.config.day_date = "%M %d??? %D";
gantt.config.default_date = "%Y??? %M %d???";
gantt.config.month_date = "%Y??? %M";

gantt.locale = {
	date: {
		month_full: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
		month_short: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
		day_full: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
		day_short: ["???", "???", "???", "???", "???", "???", "???"]
	},
	labels: {
		new_task: "?????????",
		dhx_cal_today_button: "??????",
		day_tab: "???",
		week_tab: "???",
		month_tab: "???",
		new_event: "????????????",
		icon_save: "??????",
		icon_cancel: "??????",
		icon_details: "??????",
		icon_edit: "??????",
		icon_delete: "??????",
		confirm_closing: "???????????????????????????!", //Your changes will be lost, are your sure?
		confirm_deleting: "???????????????????",
		section_description: "??????",
		section_time: "????????????",
		section_type: "??????",

		/* grid columns */

		column_wbs: "??????????????????",
		column_text: "?????????",
		column_start_date: "????????????",
		column_duration: "????????????",
		column_add: "",

		/* link confirmation */

		link: "??????",
		confirm_link_deleting: "????????????",
		link_start: " (??????)",
		link_end: " (??????)",

		type_task: "??????",
		type_project: "??????",
		type_milestone: "?????????",

		minutes: "??????",
		hours: "??????",
		days: "???",
		weeks: "???",
		months: "???",
		years: "???",

		/* message popup */
		message_ok: "OK",
		message_cancel: "??????",

		/* constraints */
		section_constraint: "Constraint",
		constraint_type: "Constraint type",
		constraint_date: "Constraint date",
		asap: "As Soon As Possible",
		alap: "As Late As Possible",
		snet: "Start No Earlier Than",
		snlt: "Start No Later Than",
		fnet: "Finish No Earlier Than",
		fnlt: "Finish No Later Than",
		mso: "Must Start On",
		mfo: "Must Finish On",

		/* resource control */
		resources_filter_placeholder: "type to filter",
		resources_filter_label: "hide empty"
	}
};



/***/ })

/******/ });
});
});