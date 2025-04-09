gx.evt.autoSkip = false;
gx.define('general.endereco', false, function () {
   this.ServerClass =  "general.endereco" ;
   this.PackageName =  "com" ;
   this.ServerFullClass =  "com.general.endereco" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.DSO =  "seletivo" ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_End_id=function()
   {
      return this.validSrvEvt("valid_End_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Cid_id=function()
   {
      return this.validSrvEvt("valid_Cid_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e11054_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12054_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
   this.GXLastCtrlId =62;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"TABLEMAIN",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TITLE", format:0,grid:0, ctrltype: "textblock"};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13054_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14054_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15054_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16054_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17054_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_End_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_ID",fmt:0,gxz:"Z13end_id",gxold:"O13end_id",gxvar:"A13end_id",ucs:[],op:[53,48,43,38,33],ip:[53,48,43,38,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A13end_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13end_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("END_ID",gx.O.A13end_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A13end_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("END_ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_TIPO_LOGRADOURO",fmt:0,gxz:"Z14end_tipo_logradouro",gxold:"O14end_tipo_logradouro",gxvar:"A14end_tipo_logradouro",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A14end_tipo_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14end_tipo_logradouro=Value},v2c:function(){gx.fn.setControlValue("END_TIPO_LOGRADOURO",gx.O.A14end_tipo_logradouro,0)},c2v:function(){if(this.val()!==undefined)gx.O.A14end_tipo_logradouro=this.val()},val:function(){return gx.fn.getControlValue("END_TIPO_LOGRADOURO")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_LOGRADOURO",fmt:0,gxz:"Z15end_logradouro",gxold:"O15end_logradouro",gxvar:"A15end_logradouro",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A15end_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z15end_logradouro=Value},v2c:function(){gx.fn.setControlValue("END_LOGRADOURO",gx.O.A15end_logradouro,0)},c2v:function(){if(this.val()!==undefined)gx.O.A15end_logradouro=this.val()},val:function(){return gx.fn.getControlValue("END_LOGRADOURO")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_NUMERO",fmt:0,gxz:"Z16end_numero",gxold:"O16end_numero",gxvar:"A16end_numero",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A16end_numero=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z16end_numero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("END_NUMERO",gx.O.A16end_numero,0)},c2v:function(){if(this.val()!==undefined)gx.O.A16end_numero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("END_NUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_BAIRRO",fmt:0,gxz:"Z17end_bairro",gxold:"O17end_bairro",gxvar:"A17end_bairro",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A17end_bairro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z17end_bairro=Value},v2c:function(){gx.fn.setControlValue("END_BAIRRO",gx.O.A17end_bairro,0)},c2v:function(){if(this.val()!==undefined)gx.O.A17end_bairro=this.val()},val:function(){return gx.fn.getControlValue("END_BAIRRO")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cid_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_ID",fmt:0,gxz:"Z10cid_id",gxold:"O10cid_id",gxvar:"A10cid_id",ucs:[],op:[],ip:[53],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10cid_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10cid_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CID_ID",gx.O.A10cid_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A10cid_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CID_ID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"BTN_ENTER",grid:0,evt:"e11054_client",std:"ENTER"};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"BTN_CANCEL",grid:0,evt:"e12054_client"};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"BTN_DELETE",grid:0,evt:"e18054_client",std:"DELETE"};
   this.A13end_id = 0 ;
   this.Z13end_id = 0 ;
   this.O13end_id = 0 ;
   this.A14end_tipo_logradouro = "" ;
   this.Z14end_tipo_logradouro = "" ;
   this.O14end_tipo_logradouro = "" ;
   this.A15end_logradouro = "" ;
   this.Z15end_logradouro = "" ;
   this.O15end_logradouro = "" ;
   this.A16end_numero = 0 ;
   this.Z16end_numero = 0 ;
   this.O16end_numero = 0 ;
   this.A17end_bairro = "" ;
   this.Z17end_bairro = "" ;
   this.O17end_bairro = "" ;
   this.A10cid_id = 0 ;
   this.Z10cid_id = 0 ;
   this.O10cid_id = 0 ;
   this.A13end_id = 0 ;
   this.A14end_tipo_logradouro = "" ;
   this.A15end_logradouro = "" ;
   this.A16end_numero = 0 ;
   this.A17end_bairro = "" ;
   this.A10cid_id = 0 ;
   this.Events = {"e11054_client": ["ENTER", true] ,"e12054_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_END_ID"] = [[{av:'A13end_id',fld:'END_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A14end_tipo_logradouro',fld:'END_TIPO_LOGRADOURO',pic:''},{av:'A15end_logradouro',fld:'END_LOGRADOURO',pic:''},{av:'A16end_numero',fld:'END_NUMERO',pic:'ZZZZZZZZZ9'},{av:'A17end_bairro',fld:'END_BAIRRO',pic:''},{av:'A10cid_id',fld:'CID_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z13end_id'},{av:'Z14end_tipo_logradouro'},{av:'Z15end_logradouro'},{av:'Z16end_numero'},{av:'Z17end_bairro'},{av:'Z10cid_id'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EvtParms["VALID_CID_ID"] = [[{av:'A10cid_id',fld:'CID_ID',pic:'ZZZZZZZZZZZZZZ9'}],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.general.endereco);});
