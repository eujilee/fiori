sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
      "use strict";

      return Controller.extend("odata.project1909.controller.Detail", {
          onInit: function () {

            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteDetail").attachPatternMatched(this._onPatternMatched, this); //패턴이 매치가 될 때마다 실행을 함, 어떤걸 실행하냐 함수명
          },

          _onPatternMatched: function (oEvent) {
            // RouteDetail객체의 Pattern이 일치할 때 마다 해당 이벤트가 실행됨.
            var oArgu = oEvent.getParameters().arguments;
            // this.byId('idText').setText(oArgu.OrderID);


            this.byId("idForm").bindElement(`/Orders(${oArgu.OrderID})`);

          },

          onNavBack: function () {
            this.oRouter.navTo('RouteMain', {
            });
          }



      });
  });
