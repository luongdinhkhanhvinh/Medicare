(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./src/services/user/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProfile\", function() { return getProfile; });\n/* harmony import */ var src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/commons/apiEndpoint.ts\");\n/* harmony import */ var src_providers_authProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/providers/authProvider.ts\");\n\n\nfunction getProfile() {\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_1__[\"axiosClient\"].get(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_0__[\"ApiEndpoint\"].USER_PROFILE);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci9wcm9maWxlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIvcHJvZmlsZS50cz9hNjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaUVuZHBvaW50IH0gZnJvbSAnc3JjL2NvbW1vbnMvYXBpRW5kcG9pbnQnO1xuaW1wb3J0IHsgYXhpb3NDbGllbnQgfSBmcm9tICdzcmMvcHJvdmlkZXJzL2F1dGhQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZmlsZSgpIHtcbiAgICByZXR1cm4gYXhpb3NDbGllbnQuZ2V0KEFwaUVuZHBvaW50LlVTRVJfUFJPRklMRSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/user/profile.ts\n");

/***/ })

}]);