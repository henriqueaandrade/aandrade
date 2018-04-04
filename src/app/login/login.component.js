"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var api_service_1 = require('../api.service');
var LoginComponent = (function () {
    function LoginComponent(api) {
        this.api = api;
        this.usuario = {
            username: "email",
            password: "senha"
        };
        this.mensagens = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.verificaLogin = function () {
        var _this = this;
        this.api.autenticaUser(this.usuario.username, this.usuario.password).subscribe(function (retorno) {
            if (retorno['token']) {
                _this.logar();
            }
            else {
                _this.mensagens = 'Deu ruim';
            }
        });
    };
    LoginComponent.prototype.logar = function () {
        localStorage.setItem("assessment", JSON.stringify(this.usuario));
    };
    LoginComponent.prototype.deslogar = function () {
        localStorage.removeItem("assessment");
    };
    LoginComponent.prototype.verificaLogado = function () {
        var temporaria = localStorage.getItem("assessment");
        if (temporaria.length > 0) {
            document.getElementById("status")
                .innerHTML = "Logado como " +
                JSON.parse(temporaria).nome;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [api_service_1.ApiService]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
