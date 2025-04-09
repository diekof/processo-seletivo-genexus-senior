gx.evt.autoSkip = false;
gx.define('general.foto_pessoa', false, function () {
   this.ServerClass =  "general.foto_pessoa" ;
   this.PackageName =  "com" ;
   this.ServerFullClass =  "com.general.foto_pessoa" ;
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
   this.Valid_Fp_id=function()
   {
      return this.validSrvEvt("valid_Fp_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Pes_id=function()
   {
      return this.validSrvEvt("valid_Pes_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e11077_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12077_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
   this.GXLastCtrlId =57;
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13077_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14077_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15077_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16077_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17077_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fp_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FP_ID",fmt:0,gxz:"Z18fp_id",gxold:"O18fp_id",gxvar:"A18fp_id",ucs:[],op:[33,48,43,38],ip:[33,48,43,38,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18fp_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z18fp_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FP_ID",gx.O.A18fp_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A18fp_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FP_ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pes_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_ID",fmt:0,gxz:"Z1pes_id",gxold:"O1pes_id",gxvar:"A1pes_id",ucs:[],op:[],ip:[33],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1pes_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1pes_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PES_ID",gx.O.A1pes_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A1pes_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PES_ID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FP_DATA",fmt:0,gxz:"Z19fp_data",gxold:"O19fp_data",gxvar:"A19fp_data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A19fp_data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z19fp_data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FP_DATA",gx.O.A19fp_data,0)},c2v:function(){if(this.val()!==undefined)gx.O.A19fp_data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FP_DATA")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FP_BUCKET",fmt:0,gxz:"Z20fp_bucket",gxold:"O20fp_bucket",gxvar:"A20fp_bucket",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A20fp_bucket=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z20fp_bucket=Value},v2c:function(){gx.fn.setControlValue("FP_BUCKET",gx.O.A20fp_bucket,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20fp_bucket=this.val()},val:function(){return gx.fn.getControlValue("FP_BUCKET")},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FP_HASH",fmt:0,gxz:"Z21fp_hash",gxold:"O21fp_hash",gxvar:"A21fp_hash",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A21fp_hash=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z21fp_hash=Value},v2c:function(){gx.fn.setControlValue("FP_HASH",gx.O.A21fp_hash,0)},c2v:function(){if(this.val()!==undefined)gx.O.A21fp_hash=this.val()},val:function(){return gx.fn.getControlValue("FP_HASH")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"BTN_ENTER",grid:0,evt:"e11077_client",std:"ENTER"};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"BTN_CANCEL",grid:0,evt:"e12077_client"};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"BTN_DELETE",grid:0,evt:"e18077_client",std:"DELETE"};
   this.A18fp_id = 0 ;
   this.Z18fp_id = 0 ;
   this.O18fp_id = 0 ;
   this.A1pes_id = 0 ;
   this.Z1pes_id = 0 ;
   this.O1pes_id = 0 ;
   this.A19fp_data = gx.date.nullDate() ;
   this.Z19fp_data = gx.date.nullDate() ;
   this.O19fp_data = gx.date.nullDate() ;
   this.A20fp_bucket = "" ;
   this.Z20fp_bucket = "" ;
   this.O20fp_bucket = "" ;
   this.A21fp_hash = "" ;
   this.Z21fp_hash = "" ;
   this.O21fp_hash = "" ;
   this.A18fp_id = 0 ;
   this.A1pes_id = 0 ;
   this.A19fp_data = gx.date.nullDate() ;
   this.A20fp_bucket = "" ;
   this.A21fp_hash = "" ;
   this.Events = {"e11077_client": ["ENTER", true] ,"e12077_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_FP_ID"] = [[{av:'A18fp_id',fld:'FP_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A1pes_id',fld:'PES_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A19fp_data',fld:'FP_DATA',pic:''},{av:'A20fp_bucket',fld:'FP_BUCKET',pic:''},{av:'A21fp_hash',fld:'FP_HASH',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z18fp_id'},{av:'Z1pes_id'},{av:'Z19fp_data'},{av:'Z20fp_bucket'},{av:'Z21fp_hash'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EvtParms["VALID_PES_ID"] = [[{av:'A1pes_id',fld:'PES_ID',pic:'ZZZZZZZZZZZZZZ9'}],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.general.foto_pessoa);});
