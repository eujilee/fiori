sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,JSONModel,Fragment) {
        "use strict";

        return Controller.extend("odata.project1909.controller.Main", {
            onInit: function () {
                var oData = {
                    OrderID : '',
                    CustomerID : '',
                    OrderDate_start : null,
                    OrderDate_end : null
                
                
                }
                this.getView().setModel(new JSONModel(oData), 'search');
                //한 단계 뒤에 있는 컴포넌트에 접근해서, 라우터를 가져 온다.
                this.oRouter = this.getOwnerComponent().getRouter(); //컨트롤러에 oRouter를 붙임, 전역변수처럼 쓰기 위해
                this.oRouter.getRoute('RouteMain').attachPatternMatched(this._onPatternMatched, this);
            },

            _onPatternMatched: function (oEvent) {
                //var oArgu = oEvent.getParameters().arguments; //arguments 조회하는 두 가지 방법, 아래와 동일
                var oArgu = oEvent.getParameter('arguments');
                console.log(oArgu);

            },
    

            


            onClosing: function (oEvent) {

                oEvent.getSource().getParent().close();
                
            },

            fnDateToString: function (sValue) {
                if(sValue) {
                    
                    var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
                        pattern : 'yyyy-MM-dd'
                    });

                    var result = oFormat.format(sValue);

                    return result;


                }


            },
            onSearch: function () {
                // var sOrderID = this.byId("idOrderID").getValue();
                // var sCustomerID = this.byId("idCustomerID").getValue();
                // var sOrderDateID = this.byId("idOrderDate").getDateValue();
                // var sOrderSecondDateID = this.byId("idOrderDate").getSecondDateValue();
                var oSearchData  = this.getView().getModel('search').getData();
                //oSearchData {OrderID : '', CustomerID : '', OrderDate_start : '', OrderDate_end : ''}

                var aFilter = [];  
                
                if(oSearchData.OrderID) {
                    var oFilter = new Filter({
                        path: 'OrderID', //필터 적용 할 대상 필드명
                        operator: 'EQ', //연산자
                        value1: oSearchData.OrderID, //값 
                    })

                    aFilter.push(oFilter);
                }
                if(oSearchData.CustomerID) {
                    var oFilter2 = new Filter({
                        path: 'CustomerID', //필터 적용 할 대상 필드명
                        operator: 'Contains', //연산자
                        value1: oSearchData.CustomerID, //값 
                    })

                    aFilter.push(oFilter2);
                }
                if(oSearchData.OrderDate_start && oSearchData.OrderDate_end) {
                    var oFilter3 = new Filter({
                        path : 'OrderDate',
                        operator : 'BT',
                        value1 : oSearchData.OrderDate_start,
                        value2 : oSearchData.OrderDate_end

                    })

                    aFilter.push(oFilter3);


                }


                this.byId("idTable").getBinding("items").filter(aFilter);
                ////********************filters사용시 **************/
                // var sOrderID = this.byId("idOrderID").getValue();
                // var sCustomerID = this.byId("idCustomerID").getValue();
                

                // var oFilter = new Filter({
                //         filters : [
                //             new Filter('OrderID', 'EQ', sOrderID),
                //             new Filter('CustomerID', 'Contains', sCustomerID)

                //         ],
                //         and : false
                // });

                // this.byId("idTable").getBinding("items").filter(oFilter)


            },

            onSelectionChange: function (oEvent) {
                

                var sPath = oEvent.getParameters().listItem.getBindingContextPath();
                

                var oSelectData = this.getView().getModel().getProperty(sPath);

                // alert(oSelectData.OrderID);
                this.oRouter.navTo('RouteDetail', {
                    OrderID : oSelectData.OrderID
                }, true); 
                //.navTo('라우트객체이름', {파라미터 정보}, 라우터히스터리초기화)
            },
            




                //Dialog호출
                //local 이름의 JSONModel이 전역으로 사용할 수 있도록 생성되어있음
                //local모델에 데이터를 담아 놓으면
                //Dialog에서도 사용이 가능함

                //주의) Fragment.load()를 통해서, 팝업 호출 시
                // 해당 팝업에 모델 데이터를 띄우기 위해서는
                // 호출된 Dialog에 .setModel(모델객체) 해줘야 함
            OnValueHelpRequest: function () {
                this.byId("CustomerID").open();
            },


        });
    });
