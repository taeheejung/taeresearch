config.$inject = ["$routeProvider"];
export function config ($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/login", {template: "<page-login></page-login>"})
        .when("/register", {template: "<page-register></page-register>"});
}