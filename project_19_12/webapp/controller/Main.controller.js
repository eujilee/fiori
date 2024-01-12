sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1912.controller.Main", {
            onInit: function () {
                //한 단계 뒤에 있는 컴포넌트에 접근해서, 라우터를 가져 온다.
                this.oRouter = this.getOwnerComponent().getRouter(); //컨트롤러에 oRouter를 붙임, 전역변수처럼 쓰기 위해
                this.oRouter.getRoute('RouteMain').attachPatternMatched(this._onPatternMatched, this);
            },

            _onPatternMatched: function (oEvent) {
                //var oArgu = oEvent.getParameters().arguments; //arguments 조회하는 두 가지 방법, 아래와 동일
                var oArgu = oEvent.getParameter('arguments');


            },

            onGoDetail: function () {
                this.oRouter.navTo('RouteDetail', {
                    key1 : 'okok',
                    key2 : '123'
                }, true); 
                //.navTo('라우트객체이름', {파라미터 정보}, 라우터히스터리초기화)
            },

            onGoNotFound: function () {
                this.oRouter.getTargets().display("NotFound", {
                    fromTarget : 'TargetMain'
                })
            },

            onGoEmployee: function () {
                this.oRouter.navTo('RouteEmployee', {
                    key1 : 'kkk',
                }, true); 
                //.navTo('라우트객체이름', {파라미터 정보}, 라우터히스터리초기화)
            },
        });
    });
