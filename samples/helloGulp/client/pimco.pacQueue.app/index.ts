/// <reference path="module.d.ts" />

// import all modules
// import "../pimco.pacQueue.sample";
// import "../pimco.pacQueue.login";

// import css, font..
require("./styles/module");

// angular.module("pimco.pacQueue.app", ["pimco.pacQueue.sample", "pimco.pacQueue.login"]);
angular.module("pimco.pacQueue.app", []);

angular.bootstrap(document, ["pimco.pacQueue.app"], {
    strictDi: true
});

console.log("pacQueue.app");