/// <reference path="module.d.ts" />

// import all modules
import "../pimco.pacQueue.sample";
import "../pimco.pacQueue.login";

// import third party libs
import * as angular from "angular";

// import css, font..
require("bootstrap/dist/css/bootstrap.css");
require("./styles/module.scss");

angular.module("pimco.pacQueue.app", ["pimco.pacQueue.sample", "pimco.pacQueue.login"]);
angular.bootstrap(document, ["pimco.pacQueue.app"], {
    strictDi: true
});

console.log("pacQueue.app");