sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/library",
    "sap/f/LayoutType",
    "sap/ui/webc/fiori/library",
    "sap/suite/ui/commons/networkgraph/layout/TwoColumnsLayout"
], function(Controller, JSONModel, library, LayoutType, fioriLibrary, TwoColumnsLayout) {
    "use strict";

    return Controller.extend("com.sap.pollutiontracker.controller.Master", {
        /**
         * @override
         */
        onInit: function() {

            console.log("the Pollution tracker App oninit function is running ");
            // fetching the data from the API link 
            var countriesModel = new JSONModel('https://4c45935f-f293-42b8-8e32-3cfc24b6ca46.mock.pstmn.io/countries/');
            countriesModel.setSizeLimit(1000);
            //setting the countriesModel to countries model
            this.getView().setModel(countriesModel, 'countries');

            var countriesModelData = this.getView().getModel('countries')
            console.log(countriesModelData);
        },

        OnCountryPress: function(oEvent) {

            console.log("On country Press  event is triggered ");

            var getFCLRef = this.getView().getParent().getParent();

            getFCLRef.setLayout(LayoutType.TwoColumnsMidExpanded);

        },


    });
});
