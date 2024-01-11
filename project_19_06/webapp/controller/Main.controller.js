sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("project1906.controller.Main", {
            onInit: function () {

            },
            HelloButtonPress: function () {
                sap.m.MessageToast.show('야호!!!!');
            },
            onOpenDialog: function () {
                this.byId("idDialog").open();
            },
            //버튼의 프레스 이벤트
            //이벤트 함수는 이벤트 객체 oEvent 받아옴

            onClosing: function (oEvent) {
                //oEvent 안에는 getSource().getParent() 등의 메서드가 있음
                //this.byId("idDialog").close();

                //sap.ui.getCore().byId("idDialog").close();
                //-> View안에서 호출한 팝업 닫기
                //sap.ui.getCore().byId("idDialog").close();
                //-> Controller 안에서 파일 로드한 팝업 닫기

                //두 버전의 "팝업 닫기"를 통일하여 사용하려먼? -> 바로 oEvent

                //oEvent.getSource()하면, 이벤트를 일으킨 객체가 리턴됨 -> 버튼
                //버튼에서 .getPrent()하면, 상위 객체 Dialog를 가져옴
                //따라서 Dialog에서 .close() 실행 시 팝업이 닫힘

                oEvent.getSource().getParent().close();
            },
            onOpenDialog_con: function() {
                var dialog = sap.ui.getCore().byId("idDialog");

                //만약에 다이알로그변수에 값이 있으면 다이얼로그 오픈하면 되고
                //다이럴로그 변수에 값이 없으면 로드 메서드

                if (dialog) {
                    dialog.open();
                }
                else {
                    Fragment.load({
                        name:"project1906.view.fragment.Dialog",
                        type:"XML",
                        controller:this
                    }).then(function(oDialog){
                        oDialog.open();
                    })

                };
            },
            onOpenDialog_name: function() {
                var namedialog = sap.ui.getCore().byId("idDialogName");
                if (namedialog) {
                    namedialog.open();
                }
                else {
                    Fragment.load({
                        name:"project1906.view.fragment.Name",
                        type:"XML",
                        controller:this
                    }).then(function(nDialog){
                        nDialog.open();
                    })

                };
            },
            

        });
    });
