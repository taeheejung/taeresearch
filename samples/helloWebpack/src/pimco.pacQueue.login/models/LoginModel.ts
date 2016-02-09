import "angular-formly";
import {UserInfo} from "../entities/UserInfo";
import {LoginInfo} from "../entities/LoginInfo";
import {IUserService} from "../services/UserService";

export interface ILoginModel {
    loginInfo: LoginInfo;
    formModel: AngularFormly.IFieldGroup;
    login(): ng.IPromise<UserInfo>;
}

export class LoginModel implements ILoginModel{
   public loginInfo: LoginInfo;
   public formModel: AngularFormly.IFieldGroup;

    public static $inject: Array<string> = ["IUserService"]; 
    constructor(private userService: IUserService){
        this.loginInfo = new LoginInfo("", "");
        this.formModel = <AngularFormly.IFieldGroup> {
            model: this.loginInfo,
            fields: this.loginFields
        };
    }

    public loginFields : Array<AngularFormly.IFieldConfigurationObject> 
        = new Array<AngularFormly.IFieldConfigurationObject>(
        <AngularFormly.IFieldConfigurationObject>{
            key: "emailAddress",
            type: "input"
        },
        <AngularFormly.IFieldConfigurationObject>{
            key: "password",
            type: "input"
        }
    );
    
    public login(): ng.IPromise<UserInfo> {
        return this.userService.login(this.loginInfo);
    }    
}
