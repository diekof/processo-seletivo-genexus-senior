gx.evt.autoSkip = false;
gx.define('general.unidade', false, function () {
   this.ServerClass =  "general.unidade" ;
   this.PackageName =  "com" ;
   this.ServerFullClass =  "com.general.unidade" ;
   this.setObjectType("trn");
   this.anyGridBaseTable = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.DSO =  "seletivo" ;
   this.SetStandaloneVars=function()
   {
   };
   this.Valid_Unid_id=function()
   {
      return this.validSrvEvt("valid_Unid_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_End_id=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(44);
      if(  gx.fn.currentGridRowImpl(44) ===0) {
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("END_ID", gx.fn.currentGridRowImpl(44));
      if ( gx.fn.gridDuplicateKey(45) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "endereco", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         return gxballoon.show();
      }
      return this.validSrvEvt("valid_End_id", 44).then((function (ret) {
      try {
         var  sMode6 ;
         sMode6 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(6,44)  ;
         this.standaloneModal036( );
         this.standaloneNotModal036( );
      } finally {
         this.Gx_mode =  sMode6  ;
      }
      return ret;
      }).closure(this));
   }
   this.standaloneModal036=function()
   {
      try {
         if ( gx.text.compare( this.Gx_mode , "INS" ) != 0 )
         {
            gx.fn.setCtrlProperty("END_ID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("END_ID","Enabled", 1 );
         }
      }
      catch(e){}
   }
   this.standaloneNotModal036=function()
   {
   }
   this.e11032_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12032_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58];
   this.GXLastCtrlId =58;
   this.Gridunidade_enderecoContainer = new gx.grid.grid(this, 6,"endereco",44,"Gridunidade_endereco","Gridunidade_endereco","Gridunidade_enderecoContainer",this.CmpContext,this.IsMasterPage,"general.unidade",[13],false,1,false,true,5,false,false,false,"",0,"px",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var Gridunidade_enderecoContainer = this.Gridunidade_enderecoContainer;
   Gridunidade_enderecoContainer.addSingleLineEdit(13,45,"END_ID","Id do Endereço","","end_id","int",0,"px",15,15,"end",null,[],13,"end_id",true,0,false,false,"Attribute",0,"");
   Gridunidade_enderecoContainer.addSingleLineEdit(14,46,"END_TIPO_LOGRADOURO","Tipo Logradouro","","end_tipo_logradouro","svchar",0,"px",50,50,"start",null,[],14,"end_tipo_logradouro",true,0,false,false,"Attribute",0,"");
   Gridunidade_enderecoContainer.addSingleLineEdit(15,47,"END_LOGRADOURO","Logradouro","","end_logradouro","svchar",0,"px",200,80,"start",null,[],15,"end_logradouro",true,0,false,false,"Attribute",0,"");
   Gridunidade_enderecoContainer.addSingleLineEdit(16,48,"END_NUMERO","Numero","","end_numero","int",0,"px",10,10,"end",null,[],16,"end_numero",true,0,false,false,"Attribute",0,"");
   Gridunidade_enderecoContainer.addSingleLineEdit(17,49,"END_BAIRRO","Bairro","","end_bairro","svchar",0,"px",100,80,"start",null,[],17,"end_bairro",true,0,false,false,"Attribute",0,"");
   this.Gridunidade_enderecoContainer.emptyText = "";
   this.setGrid(Gridunidade_enderecoContainer);
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13032_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14032_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15032_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16032_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17032_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Unid_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridunidade_enderecoContainer],fld:"UNID_ID",fmt:0,gxz:"Z7unid_id",gxold:"O7unid_id",gxvar:"A7unid_id",ucs:[],op:[38,33],ip:[38,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A7unid_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z7unid_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("UNID_ID",gx.O.A7unid_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A7unid_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("UNID_ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UNID_NOME",fmt:0,gxz:"Z8unid_nome",gxold:"O8unid_nome",gxvar:"A8unid_nome",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A8unid_nome=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z8unid_nome=Value},v2c:function(){gx.fn.setControlValue("UNID_NOME",gx.O.A8unid_nome,0)},c2v:function(){if(this.val()!==undefined)gx.O.A8unid_nome=this.val()},val:function(){return gx.fn.getControlValue("UNID_NOME")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UNID_SIGLA",fmt:0,gxz:"Z9unid_sigla",gxold:"O9unid_sigla",gxvar:"A9unid_sigla",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A9unid_sigla=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z9unid_sigla=Value},v2c:function(){gx.fn.setControlValue("UNID_SIGLA",gx.O.A9unid_sigla,0)},c2v:function(){if(this.val()!==undefined)gx.O.A9unid_sigla=this.val()},val:function(){return gx.fn.getControlValue("UNID_SIGLA")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"TITLEENDERECO", format:0,grid:0, ctrltype: "textblock"};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:6,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:1,grid:44,gxgrid:this.Gridunidade_enderecoContainer,fnc:this.Valid_End_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_ID",fmt:0,gxz:"Z13end_id",gxold:"O13end_id",gxvar:"A13end_id",ucs:[],op:[49,48,47,46],ip:[49,48,47,46,45],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A13end_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13end_id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("END_ID",row || gx.fn.currentGridRowImpl(44),gx.O.A13end_id,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A13end_id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("END_ID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:6,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:1,grid:44,gxgrid:this.Gridunidade_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_TIPO_LOGRADOURO",fmt:0,gxz:"Z14end_tipo_logradouro",gxold:"O14end_tipo_logradouro",gxvar:"A14end_tipo_logradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A14end_tipo_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14end_tipo_logradouro=Value},v2c:function(row){gx.fn.setGridControlValue("END_TIPO_LOGRADOURO",row || gx.fn.currentGridRowImpl(44),gx.O.A14end_tipo_logradouro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A14end_tipo_logradouro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_TIPO_LOGRADOURO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:6,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:1,grid:44,gxgrid:this.Gridunidade_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_LOGRADOURO",fmt:0,gxz:"Z15end_logradouro",gxold:"O15end_logradouro",gxvar:"A15end_logradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A15end_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z15end_logradouro=Value},v2c:function(row){gx.fn.setGridControlValue("END_LOGRADOURO",row || gx.fn.currentGridRowImpl(44),gx.O.A15end_logradouro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A15end_logradouro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_LOGRADOURO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:6,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:1,grid:44,gxgrid:this.Gridunidade_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_NUMERO",fmt:0,gxz:"Z16end_numero",gxold:"O16end_numero",gxvar:"A16end_numero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A16end_numero=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z16end_numero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("END_NUMERO",row || gx.fn.currentGridRowImpl(44),gx.O.A16end_numero,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A16end_numero=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("END_NUMERO",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:6,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:1,grid:44,gxgrid:this.Gridunidade_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_BAIRRO",fmt:0,gxz:"Z17end_bairro",gxold:"O17end_bairro",gxvar:"A17end_bairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A17end_bairro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z17end_bairro=Value},v2c:function(row){gx.fn.setGridControlValue("END_BAIRRO",row || gx.fn.currentGridRowImpl(44),gx.O.A17end_bairro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A17end_bairro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_BAIRRO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"BTN_ENTER",grid:0,evt:"e11032_client",std:"ENTER"};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"BTN_CANCEL",grid:0,evt:"e12032_client"};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"BTN_DELETE",grid:0,evt:"e18032_client",std:"DELETE"};
   this.A7unid_id = 0 ;
   this.Z7unid_id = 0 ;
   this.O7unid_id = 0 ;
   this.A8unid_nome = "" ;
   this.Z8unid_nome = "" ;
   this.O8unid_nome = "" ;
   this.A9unid_sigla = "" ;
   this.Z9unid_sigla = "" ;
   this.O9unid_sigla = "" ;
   this.Z13end_id = 0 ;
   this.O13end_id = 0 ;
   this.Z14end_tipo_logradouro = "" ;
   this.O14end_tipo_logradouro = "" ;
   this.Z15end_logradouro = "" ;
   this.O15end_logradouro = "" ;
   this.Z16end_numero = 0 ;
   this.O16end_numero = 0 ;
   this.Z17end_bairro = "" ;
   this.O17end_bairro = "" ;
   this.A13end_id = 0 ;
   this.A14end_tipo_logradouro = "" ;
   this.A15end_logradouro = "" ;
   this.A16end_numero = 0 ;
   this.A17end_bairro = "" ;
   this.A7unid_id = 0 ;
   this.A8unid_nome = "" ;
   this.A9unid_sigla = "" ;
   this.Events = {"e11032_client": ["ENTER", true] ,"e12032_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_UNID_ID"] = [[{av:'A7unid_id',fld:'UNID_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A8unid_nome',fld:'UNID_NOME',pic:''},{av:'A9unid_sigla',fld:'UNID_SIGLA',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z7unid_id'},{av:'Z8unid_nome'},{av:'Z9unid_sigla'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EvtParms["VALID_END_ID"] = [[{av:'A13end_id',fld:'END_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A14end_tipo_logradouro',fld:'END_TIPO_LOGRADOURO',pic:''},{av:'A15end_logradouro',fld:'END_LOGRADOURO',pic:''},{av:'A16end_numero',fld:'END_NUMERO',pic:'ZZZZZZZZZ9'},{av:'A17end_bairro',fld:'END_BAIRRO',pic:''}],[{av:'A14end_tipo_logradouro',fld:'END_TIPO_LOGRADOURO',pic:''},{av:'A15end_logradouro',fld:'END_LOGRADOURO',pic:''},{av:'A16end_numero',fld:'END_NUMERO',pic:'ZZZZZZZZZ9'},{av:'A17end_bairro',fld:'END_BAIRRO',pic:''}]];
   this.EnterCtrl = ["BTN_ENTER"];
   Gridunidade_enderecoContainer.addPostingVar({rfrVar:"Gx_mode"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.general.unidade);});
