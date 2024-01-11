sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1908.controller.Main", {
            onInit: function () {
                var oData = {
                        list : []
                            
                        
                        };
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel);

            },
            onAdd: function() {
                var oModel = this.getView().getModel();
                
                var aList = oModel.getProperty("/list");

                aList.push({});

                oModel.setProperty("/list", aList);
                // oModel.setData({ list : aList }, true);
            },
            // rowActionCount 관련 item 클릭 시 이벤트 발생
            onRowDelete: function(oEvent) {
                var index = oEvent.getParameters().row.getIndex();
                var aList = this.getView().getModel().getProperty("/list");

                //index에 해당하는 모델 데이터 삭제
                aList.splice(index, 1);

                this.getView().getModel().setProperty("/list", aList);

            },
            //테이블이랑 버튼이랑 객체가 다르기 때문에 테이블에 아이디 부여해서 먼저 가져와야 함
            onDelete: function() {
                var oTable = this.byId("idTable"),
                    aList = this.getView().getModel().getProperty("/list"),
                //선택된 로우의 인덱스값
                    aIndices = oTable.getSelectedIndices(); // [2,5,7...]


                var len = aIndices.length-1;  //-1을 안하면 for문이 4번 돌게 됨

                for(var i = len; i >= 0; i--) {
                    aList.splice(aIndices[i], 1);

                }
                //배열이 거꾸로 돌게끔

                this.getView().getModel().setProperty("/list", aList);
              
          


            }

        });
    });
