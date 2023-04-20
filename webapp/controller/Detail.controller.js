sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/webc/fiori/library"
    ],
    function(BaseController,JSONModel,fiorilibrary,FlexibleColumnLayout) {
      "use strict";
  
      return BaseController.extend("com.sap.pollutiontracker.controller.Detail", {
        onInit() {

          var countriesModel = new JSONModel('https://4c45935f-f293-42b8-8e32-3cfc24b6ca46.mock.pstmn.io/countries/');
          countriesModel.setSizeLimit(1000);
          //setting the countriesModel to countries model
          this.getView().setModel(countriesModel,'countries');
            
        }
      });
    }
  );
  