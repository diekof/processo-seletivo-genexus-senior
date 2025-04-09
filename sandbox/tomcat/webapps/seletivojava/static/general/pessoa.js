gx.evt.autoSkip = false;
gx.define('general.pessoa', false, function () {
   this.ServerClass =  "general.pessoa" ;
   this.PackageName =  "com" ;
   this.ServerFullClass =  "com.general.pessoa" ;
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
   this.Valid_Pes_id=function()
   {
      return this.validSrvEvt("valid_Pes_id", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_End_id=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(59);
      if(  gx.fn.currentGridRowImpl(59) ===0) {
         return true;
      }
      var gxballoon = gx.util.balloon.getNew("END_ID", gx.fn.currentGridRowImpl(59));
      if ( gx.fn.gridDuplicateKey(60) )
      {
         gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "endereco", "", "", "", "", "", "", "", ""));
         this.AnyError = gx.num.trunc( 1 ,0) ;
         return gxballoon.show();
      }
      return this.validSrvEvt("valid_End_id", 59).then((function (ret) {
      try {
         var  sMode5 ;
         sMode5 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(5,59)  ;
         this.standaloneModal025( );
         this.standaloneNotModal025( );
      } finally {
         this.Gx_mode =  sMode5  ;
      }
      return ret;
      }).closure(this));
   }
   this.standaloneModal025=function()
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
   this.standaloneNotModal025=function()
   {
   }
   this.e11021_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12021_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73];
   this.GXLastCtrlId =73;
   this.Gridpessoa_enderecoContainer = new gx.grid.grid(this, 5,"endereco",59,"Gridpessoa_endereco","Gridpessoa_endereco","Gridpessoa_enderecoContainer",this.CmpContext,this.IsMasterPage,"general.pessoa",[13],false,1,false,true,5,false,false,false,"",0,"px",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var Gridpessoa_enderecoContainer = this.Gridpessoa_enderecoContainer;
   Gridpessoa_enderecoContainer.addSingleLineEdit(13,60,"END_ID","Id do Endereço","","end_id","int",0,"px",15,15,"end",null,[],13,"end_id",true,0,false,false,"Attribute",0,"");
   Gridpessoa_enderecoContainer.addSingleLineEdit(14,61,"END_TIPO_LOGRADOURO","Tipo Logradouro","","end_tipo_logradouro","svchar",0,"px",50,50,"start",null,[],14,"end_tipo_logradouro",true,0,false,false,"Attribute",0,"");
   Gridpessoa_enderecoContainer.addSingleLineEdit(15,62,"END_LOGRADOURO","Logradouro","","end_logradouro","svchar",0,"px",200,80,"start",null,[],15,"end_logradouro",true,0,false,false,"Attribute",0,"");
   Gridpessoa_enderecoContainer.addSingleLineEdit(16,63,"END_NUMERO","Numero","","end_numero","int",0,"px",10,10,"end",null,[],16,"end_numero",true,0,false,false,"Attribute",0,"");
   Gridpessoa_enderecoContainer.addSingleLineEdit(17,64,"END_BAIRRO","Bairro","","end_bairro","svchar",0,"px",100,80,"start",null,[],17,"end_bairro",true,0,false,false,"Attribute",0,"");
   this.Gridpessoa_enderecoContainer.emptyText = "";
   this.setGrid(Gridpessoa_enderecoContainer);
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
   GXValidFnc[12]={ id: 12, fld:"BTN_FIRST",grid:0,evt:"e13021_client",std:"FIRST"};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"BTN_PREVIOUS",grid:0,evt:"e14021_client",std:"PREVIOUS"};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"BTN_NEXT",grid:0,evt:"e15021_client",std:"NEXT"};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTN_LAST",grid:0,evt:"e16021_client",std:"LAST"};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTN_SELECT",grid:0,evt:"e17021_client",std:"SELECT"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pes_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridpessoa_enderecoContainer],fld:"PES_ID",fmt:0,gxz:"Z1pes_id",gxold:"O1pes_id",gxvar:"A1pes_id",ucs:[],op:[53,48,43,38,33],ip:[53,48,43,38,33,28],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1pes_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1pes_id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PES_ID",gx.O.A1pes_id,0)},c2v:function(){if(this.val()!==undefined)gx.O.A1pes_id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PES_ID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_NOME",fmt:0,gxz:"Z2pes_nome",gxold:"O2pes_nome",gxvar:"A2pes_nome",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2pes_nome=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2pes_nome=Value},v2c:function(){gx.fn.setControlValue("PES_NOME",gx.O.A2pes_nome,0)},c2v:function(){if(this.val()!==undefined)gx.O.A2pes_nome=this.val()},val:function(){return gx.fn.getControlValue("PES_NOME")},nac:gx.falseFn};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_DATA_NASCIMENTO",fmt:0,gxz:"Z3pes_data_nascimento",gxold:"O3pes_data_nascimento",gxvar:"A3pes_data_nascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A3pes_data_nascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z3pes_data_nascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PES_DATA_NASCIMENTO",gx.O.A3pes_data_nascimento,0)},c2v:function(){if(this.val()!==undefined)gx.O.A3pes_data_nascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PES_DATA_NASCIMENTO")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"svchar",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_SEXO",fmt:0,gxz:"Z4pes_sexo",gxold:"O4pes_sexo",gxvar:"A4pes_sexo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A4pes_sexo=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z4pes_sexo=Value},v2c:function(){gx.fn.setControlValue("PES_SEXO",gx.O.A4pes_sexo,0)},c2v:function(){if(this.val()!==undefined)gx.O.A4pes_sexo=this.val()},val:function(){return gx.fn.getControlValue("PES_SEXO")},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_MAE",fmt:0,gxz:"Z5pes_mae",gxold:"O5pes_mae",gxvar:"A5pes_mae",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A5pes_mae=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z5pes_mae=Value},v2c:function(){gx.fn.setControlValue("PES_MAE",gx.O.A5pes_mae,0)},c2v:function(){if(this.val()!==undefined)gx.O.A5pes_mae=this.val()},val:function(){return gx.fn.getControlValue("PES_MAE")},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PES_PAI",fmt:0,gxz:"Z6pes_pai",gxold:"O6pes_pai",gxvar:"A6pes_pai",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A6pes_pai=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z6pes_pai=Value},v2c:function(){gx.fn.setControlValue("PES_PAI",gx.O.A6pes_pai,0)},c2v:function(){if(this.val()!==undefined)gx.O.A6pes_pai=this.val()},val:function(){return gx.fn.getControlValue("PES_PAI")},nac:gx.falseFn};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"TITLEENDERECO", format:0,grid:0, ctrltype: "textblock"};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:5,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,isacc:1,grid:59,gxgrid:this.Gridpessoa_enderecoContainer,fnc:this.Valid_End_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_ID",fmt:0,gxz:"Z13end_id",gxold:"O13end_id",gxvar:"A13end_id",ucs:[],op:[64,63,62,61],ip:[64,63,62,61,60],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A13end_id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z13end_id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("END_ID",row || gx.fn.currentGridRowImpl(59),gx.O.A13end_id,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A13end_id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("END_ID",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[61]={ id:61 ,lvl:5,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:1,grid:59,gxgrid:this.Gridpessoa_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_TIPO_LOGRADOURO",fmt:0,gxz:"Z14end_tipo_logradouro",gxold:"O14end_tipo_logradouro",gxvar:"A14end_tipo_logradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A14end_tipo_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14end_tipo_logradouro=Value},v2c:function(row){gx.fn.setGridControlValue("END_TIPO_LOGRADOURO",row || gx.fn.currentGridRowImpl(59),gx.O.A14end_tipo_logradouro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A14end_tipo_logradouro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_TIPO_LOGRADOURO",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:5,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:1,grid:59,gxgrid:this.Gridpessoa_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_LOGRADOURO",fmt:0,gxz:"Z15end_logradouro",gxold:"O15end_logradouro",gxvar:"A15end_logradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A15end_logradouro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z15end_logradouro=Value},v2c:function(row){gx.fn.setGridControlValue("END_LOGRADOURO",row || gx.fn.currentGridRowImpl(59),gx.O.A15end_logradouro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A15end_logradouro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_LOGRADOURO",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:5,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:1,grid:59,gxgrid:this.Gridpessoa_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_NUMERO",fmt:0,gxz:"Z16end_numero",gxold:"O16end_numero",gxvar:"A16end_numero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A16end_numero=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z16end_numero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("END_NUMERO",row || gx.fn.currentGridRowImpl(59),gx.O.A16end_numero,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A16end_numero=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("END_NUMERO",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:5,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:1,grid:59,gxgrid:this.Gridpessoa_enderecoContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"END_BAIRRO",fmt:0,gxz:"Z17end_bairro",gxold:"O17end_bairro",gxvar:"A17end_bairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A17end_bairro=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z17end_bairro=Value},v2c:function(row){gx.fn.setGridControlValue("END_BAIRRO",row || gx.fn.currentGridRowImpl(59),gx.O.A17end_bairro,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A17end_bairro=this.val(row)},val:function(row){return gx.fn.getGridControlValue("END_BAIRRO",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"BTN_ENTER",grid:0,evt:"e11021_client",std:"ENTER"};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"BTN_CANCEL",grid:0,evt:"e12021_client"};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"BTN_DELETE",grid:0,evt:"e18021_client",std:"DELETE"};
   this.A1pes_id = 0 ;
   this.Z1pes_id = 0 ;
   this.O1pes_id = 0 ;
   this.A2pes_nome = "" ;
   this.Z2pes_nome = "" ;
   this.O2pes_nome = "" ;
   this.A3pes_data_nascimento = gx.date.nullDate() ;
   this.Z3pes_data_nascimento = gx.date.nullDate() ;
   this.O3pes_data_nascimento = gx.date.nullDate() ;
   this.A4pes_sexo = "" ;
   this.Z4pes_sexo = "" ;
   this.O4pes_sexo = "" ;
   this.A5pes_mae = "" ;
   this.Z5pes_mae = "" ;
   this.O5pes_mae = "" ;
   this.A6pes_pai = "" ;
   this.Z6pes_pai = "" ;
   this.O6pes_pai = "" ;
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
   this.A1pes_id = 0 ;
   this.A2pes_nome = "" ;
   this.A3pes_data_nascimento = gx.date.nullDate() ;
   this.A4pes_sexo = "" ;
   this.A5pes_mae = "" ;
   this.A6pes_pai = "" ;
   this.Events = {"e11021_client": ["ENTER", true] ,"e12021_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["VALID_PES_ID"] = [[{av:'A1pes_id',fld:'PES_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!'}],[{av:'A2pes_nome',fld:'PES_NOME',pic:''},{av:'A3pes_data_nascimento',fld:'PES_DATA_NASCIMENTO',pic:''},{av:'A4pes_sexo',fld:'PES_SEXO',pic:''},{av:'A5pes_mae',fld:'PES_MAE',pic:''},{av:'A6pes_pai',fld:'PES_PAI',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'Z1pes_id'},{av:'Z2pes_nome'},{av:'Z3pes_data_nascimento'},{av:'Z4pes_sexo'},{av:'Z5pes_mae'},{av:'Z6pes_pai'},{ctrl:'BTN_DELETE',prop:'Enabled'},{ctrl:'BTN_ENTER',prop:'Enabled'}]];
   this.EvtParms["VALID_END_ID"] = [[{av:'A13end_id',fld:'END_ID',pic:'ZZZZZZZZZZZZZZ9'},{av:'A14end_tipo_logradouro',fld:'END_TIPO_LOGRADOURO',pic:''},{av:'A15end_logradouro',fld:'END_LOGRADOURO',pic:''},{av:'A16end_numero',fld:'END_NUMERO',pic:'ZZZZZZZZZ9'},{av:'A17end_bairro',fld:'END_BAIRRO',pic:''}],[{av:'A14end_tipo_logradouro',fld:'END_TIPO_LOGRADOURO',pic:''},{av:'A15end_logradouro',fld:'END_LOGRADOURO',pic:''},{av:'A16end_numero',fld:'END_NUMERO',pic:'ZZZZZZZZZ9'},{av:'A17end_bairro',fld:'END_BAIRRO',pic:''}]];
   this.EnterCtrl = ["BTN_ENTER"];
   Gridpessoa_enderecoContainer.addPostingVar({rfrVar:"Gx_mode"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.general.pessoa);});
