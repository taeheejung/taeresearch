import "angular";
import {PageLoginController} from "./PageLoginController";

export interface IPageLoginScope extends ng.IScope {
    pageLoginVm : PageLoginController;
}

export class PageLogin implements ng.IDirective {
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controllerAs: string = "pageLoginVm";
    public controller: Function = PageLoginController;
}

export * from "./PageLoginController";
