sap.ui.define([
    "sap/ui/core/mvc/Controller", //배열값으로 추가해서 사용가능
    "sap/m/Button",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Button,JSONModel) {
        "use strict";

        return Controller.extend("project1901.controller.Main", {
            onInit: function () {
                // 초기화 함수
                // 초기값 설정, 화면에서 사용할 모델 생성
                //아래 함수들이 사용할 공통 변수 등등 세팅 

                this.byId("idInput1").setValue("20");
                this.byId("idInput2").setValue("20");

                // this.getView().byId("idInput")
                // idInput객체가 없다고 오류가 날 수 있음(빈도수 낮음)
                // 왜냐면 화면이 아직 그려지기 전에 init 함수가 실행해서
                // 타이밍이 맞지 않을 수 있기 때문
                // -> onAfterRendering 등 화면이 그려진 후에 로직을 실행할 수 있도록 설정

                // this.getOwnerComponent().getModel()
                // -> Component 단으로 올라가기 위해서
                // getOwnerComponent()를 사용
                var oData2 = {
                    title : {
                        subTitle : 'Calculator Program'
                    },
                    cal : [
                        {key : 'plus', text : '+'},
                        {key : 'minus', text : '-'},
                        {key : 'multiply', text : '*'},
                        {key : 'divide', text : '/'}
                ]
                };
                var oModel2 = new JSONModel(oData2);
                this.getView().setModel(oModel2, "test2");

                this.byId("test").bindElement('test2>/');

                // this.byId("idTitle").bindElement({
                //     path : '/title',
                //     model : 'test2'
                // });
                

                var oData3 = {history : [
                    {num1 : 1, oper : '+', num2 : 1, result : 2}
                    
                ]};
                var oModel3 = new JSONModel(oData3);
                this.getView().setModel(oModel3, "local");




            },

            fnColorFormat : function (sValue) {
                if(sValue) {
                    if(sValue > 100) {
                        return '#1DDB16';
                    } else { 
                        
                        return '#FF0000';

                    }
                }


            },
            
            
            

            onBeforeRendering : function () {}, //화면 그려지기 전 실행
            onAfterRendering : function () {}, //화면 그려진 후 실행
            onExit : function () {},
            onClick: function () {
                //view에 있는 Input 객체를 가져온다.
                var oInput = this.getView().byId("idInput") ;

                // this -> controller
                // .getView() -> Controller에 있는 메서도
                // .byId() -> View에 있는 메서드
                // .getValue() : Input에 있는 메서드

                
                var sValue = oInput.getValue();
                
                // 어떻게 해야 Input의 value값을 가져와서 출력할 수 있을까?
                alert(sValue)
                ;
            },

            onCalc: function () {
                
                var Input3 = this.byId("idInput1").getValue();
                var Input4 = this.byId("idInput2").getValue();
                var Select2 = this.byId("idSelect");
                var Select3 = Select2.getSelectedItem().getText();

                
                
                

                var op = 0;
            
                    switch (Select3) {
                        case "+":
                        op = Number(Input3) + Number(Input4);
                            break;

                        case "-":
                        op = Number(Input3) - Number(Input4);
                            break;

                        case "*":
                        op = Number(Input3) * Number(Input4);
                            break;

                        case "/":   
                        op = Number(Input3) / Number(Input4);
                            break;

                        default:
                            break;

                    };

              
                                      
                            

                sap.m.MessageToast.show(op);

                var newResult = {
                    num1 : Input3,
                    oper : Select3,
                    num2 : Input4,
                    result : op

                };

                    
                    var oModel = this.getView().getModel("local");
                    var ahistory = oModel.getData().history;

                    ahistory.push(newResult);
                    oModel.setProperty("/history", ahistory);



                                      



                    
                    
                    
                    

                    


            },

            
        
                              


            
            
        });
    });
