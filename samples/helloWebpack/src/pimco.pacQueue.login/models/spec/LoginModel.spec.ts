import "angular";
import "angular-mocks";
import {LoginInfo} from "../../entities/LoginInfo";
import {UserInfo} from "../../entities/UserInfo";
import {RegisterInfo} from "../../entities/RegisterInfo";
import {IUserService} from "../../services/UserService";
import {LoginModel} from "../LoginModel";
import {MockUserService} from "./MockUserService";

describe("LoginModel: ", () => {
    var mockUserService: IUserService;
    beforeEach(angular.mock.inject( 
        ($q: ng.IQService, 
        $timeout: ng.ITimeoutService,
        $window: ng.IWindowService ) => {
            mockUserService = new MockUserService($q, $timeout, $window);
        }));
        
   it ("on constructor", () => {
       var loginModel = new LoginModel(mockUserService);
       expect(loginModel.loginInfo.email).toBe("");
       expect(loginModel.loginInfo.password).toBe("");
   }); 
   
   describe ("When login() ", () => {
       it ("should do login service", () => {
           var loginModel = new LoginModel(mockUserService);
           spyOn(mockUserService, "login").and.callThrough();
           loginModel.login();
           expect(mockUserService.login).toHaveBeenCalledWith(loginModel.loginInfo);
       });
   } );
});