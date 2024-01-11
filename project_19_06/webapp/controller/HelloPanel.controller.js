sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1906.controller.HelloPanel", {
            onInit: function () {

            },
            onShowHello: function () {
                sap.m.MessageToast.show('버튼 클릭');


            }
        });
    });
