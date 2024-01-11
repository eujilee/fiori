sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1903.controller.Main", {
            onInit: function () {

            },
            onClick: function () {
                
                let oInput = this.getView().byId("idInput") ; // getView 생략가능
                let oText = this.getView().byId("ttt");
                let sValue = oInput.getValue();
            
                oText.setText(sValue); //sValue 값으로 넣기

                
            },

            onClick2: function (){
                let oInput = this.getView().byId("idInput") ;
                let sValue = oInput.getValue();
                let oText = this.getView().byId("ttt");

                oInput.setValue("");
                oText.setText("")
            
            }

        });
    });
