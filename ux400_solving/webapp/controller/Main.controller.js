sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sap.btp.ux400solving.controller.Main", {
            onInit: function () {
                    var oData = {value : []
                    }
                    
                        this.getView().setModel(new JSONModel(oData), 'list');
    
            },

            onValueChange: function () {
                var oInput = this.byId("idInput").getValue();
                if(oInput <= 100){
                oInput.setValueState(sap.ui.core.ValueState.None);
                
            } else {
                oInput.setValueState(sap.ui.core.ValueState.Error);
        
        };
            },
            onRandomPress: function () {
                var sValue = Math.floor(Math.random() * 100) + 1;
                this.getView().byId("idInput").setValue(sValue);

                var oModel = this.getView().getModel('list');
                var alist = oModel.getData().value;

                alist.push({num : sValue});
                oModel.setProperty("/value", alist);
            },

            onClick: function () {
                this.byId("ProductsID").open();
            },

            onClose: function (oEvent) {

                oEvent.getSource().getParent().close();
                
            },

            transformDiscontinued: function (oValue) {
                if (oValue) {
                    return 'Yes';
                } else {
                    return 'No';

                };





            },



        });
    });
