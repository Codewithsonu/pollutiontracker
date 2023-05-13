sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.pollutiontracker.controller.View1", {
            onInit: function () {

                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.attachRoutrMatched(this.oRouteMatched, this);





            },
            // end of on init function
            oRouteMatched: function (oEvent) {
                var oRouteName  oEvent.getParameter("name");
                oArguments = oEvent.getParameter("arguments");

            

            }


		    onStateChanged: function (oEvent) {



            }

        });
    });
