!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("dCfNN"),a=document.querySelector("form"),u=(document.querySelector("input"),document.querySelector("textarea"),"feedback-form-state"),i={};a.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;if(""===r.value||""===n.value)return alert("Please fill out the form!");console.log(i),localStorage.removeItem(u),a.reset()})),a.addEventListener("input",e(l)((function(e){i[e.target.name]=e.target.value,localStorage.setItem(u,JSON.stringify(i))}),500))}();
//# sourceMappingURL=03-feedback.fb52e8d4.js.map