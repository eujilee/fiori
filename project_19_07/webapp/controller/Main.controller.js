sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1907.controller.Main", {
            onInit: function () {
            //     var oData = { 
            //         inpValue : 'World'
                            
            // };
            //     var oModel = new JSONModel(oData);
                
                var oModel = new JSONModel();
                oModel.loadData('../model/data.json', {}, false); //직접 경로 설정하는 방법

                // console.log(oModel.getData());

                this.getView().setModel(oModel); //뷰에 제이슨 모델(이름 없음=기본 모델=Default Model)을 세팅한다.

                //this.getView().setModel(oModel2, "car"); car라는 이름의 모델이 됨

                    var oData2 = {
                        name : {firstName : 'Hong', lastName : 'Gildong'},
                        datas : [ 
                            { name : 'Kim', age : 30, tel : '010-2222-6811' },
                            { name : 'Park', age : 10, tel : '010-3333-1321' },
                            { name : 'Moon', age: 20, tel : '010-5555-8621' }
                            ],
                        textValue : 'Hello'
                     
                    };
                    var oModel2 = new JSONModel(oData2);
                    this.getView().setModel(oModel2, "test");

            },
            onClick : function() {
                var oModel = this.getView().getModel("test")

                var data = oModel.getData();
                var data2 = oModel.getProperty("/name/firstName");

                

                // oModel.setData({ name : 'Hong Gildong' } , true ); //setData 사용할 때는 머지를 할지말건지는 두번째 파라미터에 적용

                
                oModel.setProperty("/name/firstName", "park");

                console.log(oModel.getData());
                


            // let oModel = this.getView().getModel('local');

            //     oModel.getData().history;
            //     oModel.getProperty('/history');

            //     oModel.setdata({ name : 'okok' },true);
            //     oModel.setproperty("/name","okok");
            },
            onSetData: function(oEvent) {
                var oModel = this.getView().getModel();
                var sInputData = oModel.getData().inpValue;
                //또는 var sInputData = oModel.getProperty("/inpValue");

                var oTestModel = this.getView().getModel('test');


                // var sInputData2 = oTestModel.getData().textValue;
                
                oTestModel.setProperty("/textValue", 'Hello ' + sInputData)
                //oTestModel.setData({textValue : sinputData}, true);

                var sInputData2 = oTestModel.getProperty("/textValue");
                
                console.log(sInputData2);
            

            }
        });
    });
