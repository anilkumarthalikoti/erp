define(['application-configuration', 'ajaxService'], function (app) {

    app.register.service('languageService', ['ajaxService', function (ajaxService) {

        this.saveUpdateSchool= function (schoolDetails, successFunction, errorFunction) {
            ajaxService.AjaxPost(schoolDetails, "api/setup/school.php", successFunction, errorFunction);
        };

       

         this.getSchoolDetails= function ( successFunction, errorFunction) {
            ajaxService.AjaxGet("api/setup/school.php?action=getSchoolDetails", successFunction, errorFunction);
        };
        

    }]);
});

