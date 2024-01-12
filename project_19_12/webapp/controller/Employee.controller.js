sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"

],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,JSONModel) {
      "use strict";

      return Controller.extend("project1912.controller.Employee", {
          onInit: function () {
            var oData = {
              employees : [
                { employeeID : '1', employeeName : '홍길동', year : '1995', salary : '1000' },
                { employeeID : '2', employeeName : '이은지', year : '1995', salary : '10000'},
                { employeeID : '3', employeeName : '홍현기', year : '1995', salary : '5000' },
                { employeeID : '4', employeeName : '딸기씨', year : '2010', salary : '6000' },
                { employeeID : '5', employeeName : '메롱이', year : '2023', salary : '7000' },
                { employeeID : '6', employeeName : '누렁이', year : '2022', salary : '9000' },
                { employeeID : '7', employeeName : '철수씨', year : '1998', salary : '5000' },
                { employeeID : '8', employeeName : '영희씨', year : '1996', salary : '3000' }
              ]
            };

            this.getView().setModel(new JSONModel(oData), 'employee');



            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteEmployee").attachPatternMatched(this._onPatternMatched, this); //패턴이 매치가 될 때마다 실행을 함, 어떤걸 실행하냐 함수명
          },

          _onPatternMatched: function (oEvent) {
            // RouteDetail객체의 Pattern이 일치할 때 마다 해당 이벤트가 실행됨.
            var oArgu = oEvent.getParameters().arguments;

            console.log(oArgu);
          },

          onNavBack: function () {
            this.oRouter.navTo('RouteMain', {
              'query' : {
                tab : 'okok',
                test : 10
              }
            });
          }
      });
  });
