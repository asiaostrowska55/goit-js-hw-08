!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o);var a=o("1WSnx"),l=document.querySelector(".feedback-form"),n=document.querySelector("input"),u=document.querySelector("textarea"),i="feedback-form-state";l.addEventListener("input",(0,a.throttle)((function(){var e={email:n.value,message:u.value};localStorage.setItem(i,JSON.stringify(e))}),500));var c=JSON.parse(localStorage.getItem(i));null===localStorage.getItem(i)?(n.value="",u.value=""):(n.value=c.email,u.value=c.message),l.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(i),n.value="",u.value="",console}))}();
//# sourceMappingURL=03-feedback.8e3f02d4.js.map
