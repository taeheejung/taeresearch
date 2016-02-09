import {IUserService} from "../../services/UserService";
import {LoginInfo} from "../../entities/LoginInfo";
import {UserInfo} from "../../entities/UserInfo";
import {RegisterInfo} from "../../entities/RegisterInfo";

export class MockUserService implements IUserService {
    
    constructor(private $q: ng.IQService, 
        private $timeout: ng.ITimeoutService, 
        private $window: ng.IWindowService) {}
    
    public login(loginInfo: LoginInfo): ng.IPromise<UserInfo>{
        return this.$q.defer().promise;
    }
    public logout(): void{
        throw Error();
    }
    public register(registerInfo: RegisterInfo): ng.IPromise<UserInfo>{
        return this.$q.defer().promise;
    }
    public isAuthenticated(): boolean{
        throw Error();
    }
    public getUserInfo(): UserInfo{
        throw Error();
    }
}