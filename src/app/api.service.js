"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
exports.URLAPI = 'https://lms.infnet.edu.br/moodle/login/token.php:';
var urlApiService = (function () {
    function urlApiService(api) {
        this.api = api;
        this.cabecalho = {
            wstoken: ''
        };
        this.urlAPIAuth = 'https://lms.infnet.edu.br/moodle/login/token.php';
        this.urlAPIDados = 'https://lms.infnet.edu.br/moodle/webservice/rest/server.php';
    }
    urlApiService.prototype.pegaDados = function () {
        return this.api.get(this.urlAPIAuth, {
            headers: this.cabecalho
        });
    };
    urlApiService.prototype.getUsuarios = function () {
        return this.api.get(this.urlAPIAuth);
    };
    urlApiService.prototype.autenticaUser = function (email, senha) {
        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', senha);
        formData.append('service', 'moodle_mobile_app');
        return this.api.post(this.urlAPIDados, formData);
    };
    urlApiService.prototype.pegaMaterias = function (token, id) {
        var formData = new FormData();
        formData.append('wstoken', token);
        formData.append('moodlewsrestformat', JSON);
        formData.append('wsfunction', 'core_enrol_get_users_courses');
        formData.append('userid', 'id');
        return this.api.post(this.urlAPIDados, formData);
    };
    urlApiService.prototype.pegaCompetencias = function (idcurso, id) {
        var formData = new FormData();
        formData.append('courseid', idcurso);
        formData.append('moodlewssettingfilter', true);
        formData.append('wsfunction', 'tool_lp_data_for_course_competencies_page e wstoken');
        formData.append('userid', 'id');
        return this.api.post(this.urlAPIDados, formData);
    };
    urlApiService.prototype.pegaNotaCompetencias = function () {
        var formData = new FormData();
        formData.append('courseid', idcurso);
        formData.append('moodlewssettingfilter', true);
        formData.append('moodlewssettingfileurl', true);
        formData.append('wsfunction', 'tool_lp_data_for_course_competencies_page e wstoken');
        formData.append('userid', id);
        formData.append('wstoken', token);
        formData.append('competencyid', idcompetencia);
        return this.api.post(this.urlAPIDados, formData);
    };
    urlApiService = __decorate([
        core_1.Injectable()
    ], urlApiService);
    return urlApiService;
}());
exports.urlApiService = urlApiService;
