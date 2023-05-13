/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/sap/pollutiontracker/model/models",
	"sap/ui/model/json/JSONModel",
    "sap/f/LayoutType"
    ],
    function (UIComponent,
	Device,
	models,
	JSONModel,LayoutType) {
        "use strict";

        return UIComponent.extend("com.sap.pollutiontracker.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");


                //call the base component's init function 
                UIComponent.prototype.init.apply(this,arguments);
                var oModel = new JSONModel();
                this.setModel(oModel);


                // enable routing 

                var oRouter = this.getRouter();
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();






            },
            // end of init function 
            _onBeforeRouteMatched:function(oEvent){
                var oModel = this.getModel();
                sLayout = oEvent.getParameters().arguments.layout;

                // if there is no layout parameter, set default layout (normal oneColumn)

                if(!sLayout){
                    sLayout = LayoutType.OneColumn;

                }
                oModel.setProperty("/layout",sLayout);




            }



        });
    }
);