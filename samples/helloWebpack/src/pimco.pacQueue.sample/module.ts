import {PageDirective} from "./PageDirective/PageDirective.ts";

angular.module("pimco.pacQueue.sample", [])
 .directive("page", () => new PageDirective());