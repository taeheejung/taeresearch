import {LoginInfo} from "../entities/LoginInfo";
import {UserInfo} from "../entities/UserInfo";
import {RegisterInfo} from "../entities/RegisterInfo";

export interface IUserService {
    login(loginInfo: LoginInfo): ng.IPromise<UserInfo>;
    logout(): void;
    register(registerInfo: RegisterInfo): ng.IPromise<UserInfo>;
    isAuthenticated(): boolean;
    getUserInfo(): UserInfo;
}

export class UserService implements IUserService {
    
    private KEY_UserInfo: string = "KEY_UserInfo";
    
    public static $inject: Array<string> = ["$q", "$timeout", "$window"];
    constructor(private $q: ng.IQService, 
        private $timeout: ng.ITimeoutService, 
        private $window: ng.IWindowService) {}
    
    public login(loginInfo: LoginInfo): ng.IPromise<UserInfo> {
        var deferred = this.$q.defer<UserInfo>();
        this.$timeout(() => {
            deferred.resolve(new UserInfo("12345", "testFirstName", "testLastName"));
        }, 1000);
        deferred.promise.then((userInfo: UserInfo) => this.saveUserInfo(userInfo));
        return deferred.promise;
    }
    public logout(): void {
        this.removeUserInfo();
    }
    public register(registerInfo: RegisterInfo): ng.IPromise<UserInfo> {
        var deferred = this.$q.defer<UserInfo>();
        this.$timeout(() => {
            deferred.resolve(new UserInfo("", "", ""));
        }, 1000);
        deferred.promise.then((userInfo: UserInfo) => this.saveUserInfo(userInfo));
        return deferred.promise;
    }
    public isAuthenticated(): boolean {
        return this.existUserInfo();
    }
    public getUserInfo(): UserInfo {
        return this.getUserInfo();
    }

    //region: private 
    private removeUserInfo () : void {
        this.$window.localStorage.removeItem(this.KEY_UserInfo);
    }
    
    private saveUserInfo (userInfo: UserInfo){
        this.$window.localStorage.setItem (this.KEY_UserInfo, JSON.stringify(userInfo));
    }
    
    private existUserInfo(): boolean {
        return this.$window.localStorage.getItem(this.KEY_UserInfo) != null;
    }
    //endregion
}