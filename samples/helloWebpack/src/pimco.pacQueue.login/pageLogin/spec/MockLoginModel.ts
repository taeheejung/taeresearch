
import {UserInfo} from "../../entities/UserInfo";
import {LoginInfo} from "../../entities/LoginInfo";

import {ILoginModel} from "../../models/LoginModel";

export class MockLoginModel implements ILoginModel {
    public loginInfo: LoginInfo = null;
    public formModel: AngularFormly.IFieldGroup = null;
    public loginDeferred : ng.IDeferred<UserInfo>;

    constructor (private $q: ng.IQService){
    }

    public login(): ng.IPromise<UserInfo> {
        this.loginDeferred = this.$q.defer<UserInfo>(); 
        return this.loginDeferred.promise;
    }
};