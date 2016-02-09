import * as toastr from "toastr";
import {LoginModel, ILoginModel} from "../models/LoginModel";

export class PageLoginController {
    static $inject = ["ILoginModel"];
    constructor(public loginModel: ILoginModel, private $location: ng.ILocationService) {
        console.log(loginModel);
    }
    public login () : void {
        this.loginModel.login().then(() => this.login_success, () => this.login_error());
    }
    public login_success(): void {
        toastr.success("Succesfully logged in");
        this.$location.path("/");
    }
    public login_error(): void {
        toastr.error("Failed to log in");
    }
}
