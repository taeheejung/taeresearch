import "angular";
import "angular-mocks";
import "angular-route";
import * as toastr from "toastr";

import "../../index";
import {IPageLoginScope} from "../index";
import {PageLoginController} from "../PageLoginController";
import {MockLoginModel} from "./MockLoginModel";

var $compile: ng.ICompileService;
var $rootScope : ng.IRootScopeService;
var $scope: IPageLoginScope;
var $location: ng.ILocationService;
var mockLoginModel: MockLoginModel;

beforeEach(angular.mock.module("pimco.pacQueue.login", ($provide: any) => {
    $provide.service("ILoginModel", ($q: ng.IQService) => {
        mockLoginModel = new MockLoginModel($q);
        return mockLoginModel;
    });
}));

var vm : PageLoginController;
beforeEach(angular.mock.inject((
    _$compile_: ng.ICompileService,
    _$rootScope_: ng.IRootScopeService,
    _$location_: ng.ILocationService) => {
        $location = _$location_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = <IPageLoginScope>_$rootScope_.$new();
        var template = $compile("<page-login></page-login>")($scope);
        vm = $scope.pageLoginVm;
    })
);

describe("PageLogin", () => {
    describe("on construction", () => {
       it ("should expose the loginModel", () => {
          expect(vm.loginModel).toBe(mockLoginModel);
       });
    });

    describe("on login", () => {
       it ("should call login on loginModel", () => {
           spyOn(mockLoginModel, "login").and.callThrough();
           vm.login();
           $rootScope.$digest();

           expect(mockLoginModel.login).toHaveBeenCalled();
       });

       describe("given a successful login ", () => {
          it ("should show a success toast.", () => {
             spyOn(toastr, "success").and.callThrough();
             vm.login();
             mockLoginModel.loginDeferred.resolve();
             $rootScope.$digest();
             expect(toastr.success).toHaveBeenCalled();
          });

          it ("should redirect to the basepath", () => {
             spyOn($location, "path").and.callThrough();
             vm.login();
             mockLoginModel.loginDeferred.resolve();
             $rootScope.$digest();
             expect($location.path).toHaveBeenCalledWith("/");
          });
       });

       describe("given a login failure", () => {
           spyOn(toastr, "error").and.callThrough();
           vm.login();
           mockLoginModel.loginDeferred.reject();
           $rootScope.$digest();
           expect(toastr.error).toHaveBeenCalled();
       });
    });
});