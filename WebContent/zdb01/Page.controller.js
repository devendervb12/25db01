sap.ui.controller("zdb01.Page", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb01.Page
*/
	onInit: function() {
           // instantiate the json model	
		var oModel = new sap.ui.model.json.JSONModel();
		
		//loading the json data
		oModel.loadData("modeldata/data.json");
		
		//setting the visiblity of the model to the view - page.view.xml
		this.getView().setModel(oModel);

		// refening to input control of page.view.xml
		var oip = this.getView().byId("idInput");
		
		//databinding 
		oip.bindProperty("value", "/company/address");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zdb01.Page
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zdb01.Page
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zdb01.Page
*/
//	onExit: function() {
//
//	}

});