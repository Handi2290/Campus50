(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ccb0282"],{6135:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),e("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?e("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),e("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?e("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-page-layout-header")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),e("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?e("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?e("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e()],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],s=(e("ac1f"),e("5319"),e("5530")),r=e("2f62"),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"Campus50 v1"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=e("2877"),u=e("6544"),d=e.n(u),m=e("40dc"),v=e("5bc1"),f=e("8212"),p=e("ce7e"),_=e("132d"),h=e("adda"),g=e("8860"),b=e("da13"),T=e("8270"),A=e("5d23"),E=e("34c3"),I=e("f6c4"),S=e("e449"),k=e("f774"),C=e("2fa4"),N=e("e0c7"),R=e("afd9"),y=e("2a7f"),V=Object(c["a"])(l,i,n,!1,null,null,null);a["a"]=V.exports;d()(V,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:f["a"],VDivider:p["a"],VIcon:_["a"],VImg:h["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:T["a"],VListItemContent:A["g"],VListItemIcon:E["a"],VListItemSubtitle:A["j"],VListItemTitle:A["k"],VMain:I["a"],VMenu:S["a"],VNavigationDrawer:k["a"],VSpacer:C["a"],VSubheader:N["a"],VSystemBar:R["a"],VToolbarTitle:y["c"]})},a899:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SystemConfigLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-face-profile ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" IDENTITAS DIRI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur halaman informasi dan bentuk perguruan tinggi. Perubahan berlaku pada Login selanjutnya. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[t._v(" PERGURUAN TINGGI ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"NAMA PERGURUAN TINGGI",outlined:"",rules:t.rule_nama_pt},model:{value:t.formdata.nama_pt,callback:function(a){t.$set(t.formdata,"nama_pt",a)},expression:"formdata.nama_pt"}}),e("v-text-field",{attrs:{label:"NAMA SINGKATAN PERGURUAN TINGGI",outlined:"",rules:t.rule_nama_singkatan_pt},model:{value:t.formdata.nama_alias_pt,callback:function(a){t.$set(t.formdata,"nama_alias_pt",a)},expression:"formdata.nama_alias_pt"}}),e("v-radio-group",{attrs:{row:""},model:{value:t.formdata.bentuk_pt,callback:function(a){t.$set(t.formdata,"bentuk_pt",a)},expression:"formdata.bentuk_pt"}},[t._v(" BENTUK PERGURUAN TINGGI : "),e("v-radio",{attrs:{label:"SEKOLAH TINGGI",value:"sekolahtinggi"}}),e("v-radio",{attrs:{label:"UNIVERSITAS",value:"universitas"}})],1),e("v-text-field",{attrs:{label:"KODE PERGURUAN TINGGI (SESUAI FORLAP)",outlined:"",rules:t.rule_kode_pt},model:{value:t.formdata.kode_pt,callback:function(a){t.$set(t.formdata,"kode_pt",a)},expression:"formdata.kode_pt"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},n=[],s=e("5530"),r=(e("96cf"),e("1da1")),o=e("2f62"),l=e("6135"),c=e("e477"),u={name:"IdentitasDiri",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PERGURUAN TINGGI",disabled:!1,href:"#"},{text:"IDENTITAS DIRI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{nama_pt:"",nama_alias_pt:"",bentuk_pt:"",kode_pt:0},rule_nama_pt:[function(t){return!!t||"Mohon untuk di isi Nama Perguruan Tinggi !!!"}],rule_nama_singkatan_pt:[function(t){return!!t||"Mohon untuk di isi Nama Alias Perguruan Tinggi !!!"}],rule_kode_pt:[function(t){return!!t||"Mohon untuk di isi Kode Perguruan Tinggi !!!"},function(t){return/^[0-9]+$/.test(t)||"Kode Perguruan Tinggi hanya boleh angka"}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data,i=e.setting;a.formdata.nama_pt=i.NAMA_PT,a.formdata.nama_alias_pt=i.NAMA_PT_ALIAS,a.formdata.bentuk_pt=i.BENTUK_PT,a.formdata.kode_pt=i.KODE_PT}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Identitas Perguruan Tinggi",setting:JSON.stringify({101:this.formdata.nama_pt,102:this.formdata.nama_alias_pt,103:this.formdata.bentuk_pt,104:this.formdata.kode_pt})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(s["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:c["a"]}},d=u,m=e("2877"),v=e("6544"),f=e.n(v),p=e("0798"),_=e("2bc5"),h=e("8336"),g=e("b0af"),b=e("99d9"),T=e("62ad"),A=e("a523"),E=e("4bd4"),I=e("132d"),S=e("67b6"),k=e("43a6"),C=e("0fd9"),N=e("2fa4"),R=e("8654"),y=Object(m["a"])(d,i,n,!1,null,null,null);a["default"]=y.exports;f()(y,{VAlert:p["a"],VBreadcrumbs:_["a"],VBtn:h["a"],VCard:g["a"],VCardActions:b["b"],VCardText:b["d"],VCardTitle:b["e"],VCol:T["a"],VContainer:A["a"],VForm:E["a"],VIcon:I["a"],VRadio:S["a"],VRadioGroup:k["a"],VRow:C["a"],VSpacer:N["a"],VTextField:R["a"]})},e477:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},n=[],s={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=s,o=e("2877"),l=e("6544"),c=e.n(l),u=e("62ad"),d=e("a523"),m=e("132d"),v=e("0fd9"),f=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=f.exports;c()(f,{VCol:u["a"],VContainer:d["a"],VIcon:m["a"],VRow:v["a"]})}}]);