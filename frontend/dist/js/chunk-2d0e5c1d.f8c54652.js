(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5c1d"],{"969c":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AdminLayout",["mahasiswabaru"==t.dashboard?e("v-container",[e("DashboardMB")],1):e("v-container",{attrs:{fluid:""}},[e("v-row",[t.$store.getters["auth/can"]("DMASTER-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/dmaster")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" DATA MASTER ")]),e("v-card-text",[t._v(" Pengaturan berbagai parameter sebagai referensi dari modul-modul lain dalam sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SPMB-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/spmb")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" SPMB ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengelola Seleksi Penerimaan Mahasiswa Baru (SPMB) tahun "+t._s(t.tahun_pendaftaran)+". ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("KEUANGAN-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/keuangan")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" KEUANGAN ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengelola Keuangan Perguruan Tinggi. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("AKADEMIK-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/akademik")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" AKADEMIK ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengelola Akademik Perguruan Tinggi. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("ELEARNING-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/elearning")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" E-LEARNING ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengelola E-Learning. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-USERS-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/system-users")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" USER SISTEM ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengelola user sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-SETTING-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/system-setting")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" KONFIGURASI SISTEM ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk mengatur berbagai macam konfigurasi sistem. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),t.$store.getters["auth/can"]("SYSTEM-USERS-GROUP")?e("v-col",{attrs:{xs:"12",sm:"4",md:"3"}},[e("v-card",{staticClass:"clickable green darken-1",attrs:{"min-height":"140",color:"#385F73",dark:""},nativeOn:{click:function(a){return t.$router.push("/system-migration")}}},[e("v-card-title",{staticClass:"headline"},[t._v(" MIGRASI SISTEM ")]),e("v-card-text",[t._v(" Modul ini digunakan untuk melakukan migrasi data atau sistem lama. ")])],1)],1):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)},n=[],r=(e("96cf"),e("1da1")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[e("v-timeline-item",{attrs:{color:"purple darken-1",icon:"mdi-book-variant","fill-dot":""}},[e("v-card",{attrs:{color:"purple darken-1",dark:""}},[e("v-card-title",{staticClass:"title"},[t._v("Formulir Pendaftaran")]),e("v-card-text",{staticClass:"white text--primary"},[e("p",[t._v(" Isi formulir pendaftaran dan lengkapi persyaratannya yaitu: "),e("ul",[e("li",[t._v("Scan Pas Foto")]),e("li",[t._v("Scan Ijazah Terakhir")]),e("li",[t._v("Scan KTP")]),e("li",[t._v("Scan Kartu Keluarga")])])]),e("v-btn",{staticClass:"mx-0 mr-2",attrs:{color:"purple darken-1",outlined:"",to:"/spmb/formulirpendaftaran"}},[t._v(" Isi Formulir ")]),e("v-btn",{staticClass:"mx-0",attrs:{color:"purple darken-1",outlined:"",to:"/spmb/persyaratan"}},[t._v(" Upload Persyaratan ")])],1)],1)],1),e("v-timeline-item",{attrs:{color:"red lighten-2",icon:"mdi-account-cash","fill-dot":""}},[e("v-card",{attrs:{color:"red lighten-2",dark:""}},[e("v-card-title",{staticClass:"title"},[t._v("Konfirmasi Pembayaran")]),e("v-card-text",{staticClass:"white text--primary"},[e("p",[t._v("Konfirmasi Pembayaran Biaya Pendaftaran.")]),e("v-btn",{staticClass:"mx-0",attrs:{color:"red lighten-2",outlined:"",to:"/keuangan/konfirmasipembayaran"}},[t._v(" Konfirmasi ")])],1)],1)],1),t.status_ujian?e("v-timeline-item",{attrs:{color:"indigo",icon:"mdi-head-question-outline","fill-dot":""}},[e("v-card",{attrs:{color:"indigo"}},[e("v-card-title",{staticClass:"title text--white"},[t._v("Ujian Online")]),e("v-card-text",{staticClass:"white text--primary"},[e("table",{attrs:{width:"100%"}},[e("tbody",[e("tr",[e("td",{attrs:{width:"25%"}},[t._v("No. Peserta")]),e("td",[t._v(": "+t._s(t.peserta.no_peserta))])]),e("tr",[e("td",{attrs:{width:"25%"}},[t._v("Tanggal Daftar")]),e("td",[t._v(": "+t._s(t.$date(t.peserta.created_at).format("DD/MM/YYYY HH:mm")))])]),e("tr",[e("td",{attrs:{width:"25%"}},[t._v("Tanggal Ujian")]),e("td",[t._v(": "+t._s(t.$date(t.jadwal_ujian.tanggal_ujian).format("DD/MM/YYYY")))])]),e("tr",[e("td",{attrs:{width:"25%"}},[t._v("Waktu Ujian")]),e("td",[t._v(": "+t._s(t.jadwal_ujian.jam_mulai_ujian)+" - "+t._s(t.jadwal_ujian.jam_selesai_ujian)+" ("+t._s(t.durasiUjian(t.jadwal_ujian))+")")])]),e("tr",[e("td",{attrs:{width:"25%"}},[t._v("Keterangan")]),e("td",[t._v(": "+t._s(t.keterangan_ujian))])])])]),e("v-btn",{staticClass:"mx-0",attrs:{color:"indigo",disabled:t.ismulai,outlined:""},on:{click:function(a){return a.stopPropagation(),t.mulaiUjian(a)}}},[t._v(" Mulai ")])],1)],1)],1):e("v-timeline-item",{attrs:{color:"indigo",icon:"mdi-head-question-outline","fill-dot":""}},[e("v-card",{attrs:{color:"indigo"}},[e("v-card-title",{staticClass:"title text--white"},[t._v("Ujian Online")]),e("v-card-text",{staticClass:"white text--primary"},[e("p",[t._v("Untuk mengikuti ujian online, silahkan pilih jadwal terlebih dahulu")]),e("v-btn",{staticClass:"mx-0 mr-2",attrs:{color:"indigo",outlined:""},on:{click:function(a){return a.stopPropagation(),t.showPilihJadwal(a)}}},[t._v(" Pilih Jadwal Ujian ")])],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:""},model:{value:t.dialogpilihjadwal,callback:function(a){t.dialogpilihjadwal=a},expression:"dialogpilihjadwal"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Pilih Jadwal Ujian PMB")])]),e("v-card-text",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"name",loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.tanggal_ujian",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$date(e.tanggal_ujian).format("DD/MM/YYYY"))+" ")]}},{key:"item.tanggal_akhir_daftar",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$date(e.tanggal_akhir_daftar).format("DD/MM/YYYY"))+" ")]}},{key:"item.durasi_ujian",fn:function(a){var i=a.item;return[t._v(" "+t._s(i.jam_mulai_ujian)+" - "+t._s(i.jam_selesai_ujian)+" "),e("br"),t._v("("+t._s(t.durasiUjian(i))+") ")]}},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{attrs:{loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.pilihJadwal(i)}}},[t._v(" mdi-select-drag ")])]}}])})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")])],1)],1)],1)],1)},o=[],l={name:"DashboardMahasiswaBaru",created:function(){this.initialize(),this.$store.dispatch("uiadmin/deletePage","ujianonline")},data:function(){return{btnLoading:!1,datatableLoading:!1,datatable:[],headers:[{text:"NAMA UJIAN",value:"nama_kegiatan",sortable:!0,width:300},{text:"TGL. UJIAN",value:"tanggal_ujian",sortable:!0,width:100},{text:"TGL. AKHIR PENDAFTARAN",value:"tanggal_akhir_daftar",sortable:!0,width:100},{text:"DURASI UJIAN",value:"durasi_ujian",sortable:!0,width:100},{text:"RUANGAN",value:"namaruang",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:100}],dialogpilihjadwal:!1,ismulai:!0,status_ujian:!1,jadwal_ujian:null,peserta:null,keterangan_ujian:""}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/spmb/ujianonline/peserta/"+this.$store.getters["auth/AttributeUser"]("id"),{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;1==e.status&&(a.status_ujian=!0,a.peserta=e.peserta,a.jadwal_ujian=e.jadwal_ujian,a.ismulai=0==a.jadwal_ujian.status_ujian,1==a.peserta.isfinish?(a.ismulai=!0,a.keterangan_ujian="SELESAI UJIAN"):a.keterangan_ujian="BELUM UJIAN")}));case 2:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),showPilihJadwal:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialogpilihjadwal=!0,a=this.$store.getters["auth/AttributeUser"]("ta"),e=this.$store.getters["auth/AttributeUser"]("idsmt"),this.datatableLoading=!0,t.next=6,this.$ajax.post("/spmb/ujianonline/jadwal",{tahun_pendaftaran:a,semester_pendaftaran:e},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;i.datatable=a.jadwal_ujian,i.datatableLoading=!1})).catch((function(){i.datatableLoading=!1}));case 6:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),pilihJadwal:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/ujianonline/daftar",{user_id:this.$store.getters["auth/AttributeUser"]("id"),jadwal_ujian_id:a.id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.initialize(),e.closedialogfrm(),e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),durasiUjian:function(t){var a=this.$date(t.tanggal_ujian+" "+t.jam_mulai_ujian),e=this.$date(t.tanggal_ujian+" "+t.jam_selesai_ujian);return e.diff(a,"minute")+" menit"},mulaiUjian:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!1,t.next=3,this.$ajax.post("/spmb/ujianonline/mulaiujian",{_method:"put",user_id:this.$store.getters["auth/AttributeUser"]("id")},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.btnLoading=!1,a.$store.dispatch("uiadmin/addToPages",{name:"ujianonline",data_ujian:a.jadwal_ujian,data_peserta:e.peserta}),a.$router.push("/spmb/ujianonline")})).catch((function(){a.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),closedialogfrm:function(){this.dialogpilihjadwal=!1}}},u=l,d=e("2877"),c=e("6544"),h=e.n(c),v=e("8336"),m=e("b0af"),g=e("99d9"),p=e("62ad"),_=e("8fea"),f=e("169a"),b=e("132d"),k=e("0fd9"),j=e("2fa4"),w=e("8414"),x=e("1e06"),A=Object(d["a"])(u,s,o,!1,null,null,null),$=A.exports;h()(A,{VBtn:v["a"],VCard:m["a"],VCardActions:g["b"],VCardText:g["d"],VCardTitle:g["e"],VCol:p["a"],VDataTable:_["a"],VDialog:f["a"],VIcon:b["a"],VRow:k["a"],VSpacer:j["a"],VTimeline:w["a"],VTimelineItem:x["a"]});var T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},C=[],y=(e("ac1f"),e("5319"),e("5530")),E=e("2f62"),U={name:"AdminLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(y["a"])({},Object(E["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"Campus50 v1"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},O=U,S=e("40dc"),P=e("8212"),R=e("ce7e"),M=e("adda"),I=e("8860"),V=e("da13"),L=e("8270"),N=e("5d23"),D=e("34c3"),K=e("f6c4"),B=e("e449"),Y=e("afd9"),G=e("2a7f"),z=Object(d["a"])(O,T,C,!1,null,null,null),F=z.exports;h()(z,{VAppBar:S["a"],VAvatar:P["a"],VDivider:R["a"],VIcon:b["a"],VImg:M["a"],VList:I["a"],VListItem:V["a"],VListItemAvatar:L["a"],VListItemContent:N["g"],VListItemIcon:D["a"],VListItemSubtitle:N["j"],VListItemTitle:N["k"],VMain:K["a"],VMenu:B["a"],VSpacer:j["a"],VSystemBar:Y["a"],VToolbarTitle:G["c"]});var J={name:"Dashboard",created:function(){this.TOKEN=this.$route.params.token,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.TOKEN},{text:"DASHBOARD",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],TOKEN:null,dashboard:null,tahun_pendaftaran:""}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/auth/me",{headers:{Authorization:"Bearer "+this.TOKEN}}).then((function(t){var e=t.data;a.dashboard=e.role[0],a.$store.dispatch("uiadmin/changeDashboard",a.dashboard)}));case 2:this.$store.dispatch("uiadmin/init",this.$ajax),this.tahun_pendaftaran=this.$store.getters["uifront/getTahunPendaftaran"];case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},computed:{},components:{AdminLayout:F,DashboardMB:$}},H=J,q=e("a523"),W=e("6b53"),Q=Object(d["a"])(H,i,n,!1,null,null,null);a["default"]=Q.exports;h()(Q,{VCard:m["a"],VCardText:g["d"],VCardTitle:g["e"],VCol:p["a"],VContainer:q["a"],VResponsive:W["a"],VRow:k["a"]})}}]);