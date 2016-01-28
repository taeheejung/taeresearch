import {PageController} from "./PageController";

export interface IPageScope extends ng.IScope {
    pageVm: PageController;
}

export class PageDirective implements ng.IDirective {
    public restrict: string = "E";
    public template: string = require("./PageTemplate.html");
    public controllerAs: string = "pageVm";
    public controller: Function = PageController;
}