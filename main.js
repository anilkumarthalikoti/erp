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
        'mainService': 'services/mainServices',
        'ajaxService': 'services/ajaxServices',
        'alertsService': 'services/alertsServices',
        'accountsService': 'services/accountsServices',
        'dashboardService': '/services/dashboardService',
        'userServices':'services/userServices',
        'customersService': 'services/customersServices',
        'ordersService': 'services/ordersServices',
        'productsService': 'services/productsServices',
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
