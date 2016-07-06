/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
/// <reference path="Scripts/ui-bootstrap-tpls-0.11.0.js" />
require.config({

    baseUrl: "",

    // alias libraries paths
    paths: {
        'application-configuration': 'js/application-configuration',       
        'angular': 'js/angular',
        'angular-route': 'js/angular-route',
        'angularAMD': 'js/angularAMD',
        'ui-bootstrap' : 'js/ui-bootstrap-tpls-0.11.0',
        'blockUI': 'js/angular-block-ui',
        'ngload': 'js/ngload',
        'charts':'js/charts',
        'mainService': 'services/mainService',
        'ajaxService': 'services/ajaxService',
        'alertsService': 'services/alertsService',
        'accountsService': 'services/accountsService',
        'dashboardService': 'services/dashboardService',
        'userService':'services/userService',
        'customersService': 'services/customersService',
        'ordersService': 'services/ordersService',
        'productsService': 'services/productsService',
        'dataGridService': 'services/dataGridService',
        'angular-sanitize': 'js/angular-sanitize',
        'customersController': 'Views/Shared/CustomersController',
        'productLookupModalController': 'Views/Shared/ProductLookupModalController'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap': ['angular']
         
    },

    // kick start application
    deps: ['application-configuration']
});
