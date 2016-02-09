import "angular";
import "angular-route";

import {config as routeConfig} from "./routes";

import {PageLogin} from "./pageLogin";

angular.module("pimco.pacQueue.login", ["ngRoute"])
    .directive("pageLogin", () => new PageLogin())
    .config(routeConfig);

console.log("test");