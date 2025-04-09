gx.evt.autoSkip = false;
gx.define('general.cidade', false, function () {
   this.ServerClass =  "general.cidade" ;
   this.PackageName =  "com" ;
   this.ServerFullClass =  "com.general.cidade" ;
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
   this.Valid_Cid_id=function()
   {
      return this.validSrvEvt("valid_Cid_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e11043_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12043_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13043_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14043_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15043_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16043_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17043_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cid_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_ID",fmt:0,gxz:"Z10cid_id",gxold:"O10cid_id",gxvar:"A10cid_id",ucs:[],op:[38,33],ip:[38,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10cid_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10cid_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CID_ID",gx.O.A10cid_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A10cid_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CID_ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_NOME",fmt:0,gxz:"Z11cid_nome",gxold:"O11cid_nome",gxvar:"A11cid_nome",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11cid_nome=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11cid_nome=Value},v2c:function(){gx.fn.setControlValue("CID_NOME",gx.O.A11cid_nome,0)},c2v:function(){if(this.val()!==undefined)gx.O.A11cid_nome=this.val()},val:function(){return gx.fn.getControlValue("CID_NOME")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CID_UF",fmt:0,gxz:"Z12cid_uf",gxold:"O12cid_uf",gxvar:"A12cid_uf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A12cid_uf=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z12cid_uf=Value},v2c:function(){gx.fn.setControlValue("CID_UF",gx.O.A12cid_uf,0)},c2v:function(){if(this.val()!==undefined)gx.O.A12cid_uf=this.val()},val:function(){return gx.fn.getControlValue("CID_UF")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTN_ENTER",grid:0,evt:"e11043_client",std:"ENTER"};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTN_CANCEL",grid:0,evt:"e12043_client"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTN_DELETE",grid:0,evt:"e18043_client",std:"DELETE"};
   this.A10cid_id = 0 ;
   this.Z10cid_id = 0 ;
   this.O10cid_id = 0 ;
   this.A11cid_nome = "" ;
   this.Z11cid_nome = "" ;
   this.O11cid_nome = "" ;
   this.A12cid_uf = "" ;
   this.Z12cid_uf = "" ;
   this.O12cid_uf = "" ;
   this.A10cid_id = 0 ;
   this.A11cid_nome = "" ;
   this.A12cid_uf = "" ;
   this.Events = {"e11043_client": ["ENTER", true] ,"e12043_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_CID_ID"] = [[{av:'A10cid_id',fld:'CID_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A11cid_nome',fld:'CID_NOME',pic:''},{av:'A12cid_uf',fld:'CID_UF',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z10cid_id'},{av:'Z11cid_nome'},{av:'Z12cid_uf'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.general.cidade);});
