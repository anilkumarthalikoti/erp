define(['application-configuration', 'ajaxService'], function (app) {

    app.register.service('schoolService', ['ajaxService', function (ajaxService) {

        this.registerSchool= function (schoolDetails, successFunction, errorFunction) {
            ajaxService.AjaxPost(schoolDetails, "/api/setup/school.php", successFunction, errorFunction);
        };

        this.updateSchool = function (schoolDetails, successFunction, errorFunction) {
             
            ajaxService.AjaxPost(schoolDetails, "api/user/user.php", successFunction, errorFunction);
        };

        

    }]);
});

