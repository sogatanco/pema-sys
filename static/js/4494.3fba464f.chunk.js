"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[4494],{82959:(e,n,a)=>{a.d(n,{x:()=>i,y:()=>r});a(65043);var t=a(23768),s=a(70579);const r=()=>(0,s.jsx)(t.l$,{toastOptions:{className:"",style:{}}}),i=(e,n)=>{((e,n)=>{"success"===e?t.Ay.success(n):"create"===e?(0,t.Ay)(n,{icon:"\ud83e\udd17"}):"start"===e?(0,t.Ay)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,t.Ay)("Horeee, task done!",{icon:"\ud83d\udc4f"}):t.Ay.error(n)})(e,n)}},35255:(e,n,a)=>{a.r(n),a.d(n,{default:()=>O});var t=a(89379),s=a(65043),r=a(203),i=a(22345),o=a(49157),l=a(18353),c=a(35299),d=a(6221),u=a(12327),h=a(97550),p=a(7493),k=a(72679),m=a(26259),j=a(87426),_=a(91014),f=a(55918),x=a.n(f),g=a(73216),v=a(35475),b=a(93397),y=a(82959),A=a(86873),w=a(70579);const O=()=>{const{id:e}=(0,g.g)(),[n,a]=(0,s.useState)(!1),[f,O]=(0,s.useState)(),[C,N]=(0,s.useState)(!1),[P,S]=(0,s.useState)(!1),[F,T]=(0,s.useState)(!0),[R,E]=(0,s.useState)(!0),[D,K]=(0,s.useState)(),[L,M]=(0,s.useState)(),[q,I]=(0,s.useState)([]),[J,z]=(0,s.useState)([]),[B,U]=(0,s.useState)({dok_fakta_integritas:!1,dok_formulir_isian_kualifikasi:!1,dok_hse_plan:!1,dok_jaminan_penawaran:!1,dok_kelengkapan_izin_usaha:!1,dok_list_peralatan:!1,dok_listmanpower_plus_cv:!1,dok_metode_pelaksanaan:!1,dok_penawaran_komersial:!1,dok_perhitungan_tkdn:!1,dok_qaqc_plan:!1,dok_schedule_pekerjaan:!1,dok_struktur_organisasi_pekerjaan:!1,dok_surat_penyampaian_penawaran:!1,dok_wajib_lainnya:!1}),H="https://api.ptpema.co.id/",Q=(0,b.A)(),{isLoading:W,data:V,refetch:$}=(0,r.I)({queryKey:["tenderbyid"],queryFn:()=>Q.get("dapi/vendor/tender/".concat(e)).then((e=>e.data.data))});(0,s.useEffect)((()=>{!async function(){await Q.get("dapi/vendor/masterkbli").then((e=>I(e.data.data))).catch((e=>console.log(e)))}()}),[]),(0,s.useEffect)((()=>{O(V),"seleksi_umum"===(null===V||void 0===V?void 0:V.metode_pengadaan)||"tender_umum"===(null===V||void 0===V?void 0:V.metode_pengadaan)?(N(!0),"pasca kualifikasi"===(null===V||void 0===V?void 0:V.sistem_kualifikasi)?S(!0):S(!1)):N(!1),U((null===V||void 0===V?void 0:V.centang_dok_wajib)&&JSON.parse(null===V||void 0===V?void 0:V.centang_dok_wajib))}),[V]);const Y=e=>{O((n=>(0,t.A)((0,t.A)({},n),{},{[e.target.id]:e.target.value})))},G=e=>{U((n=>(0,t.A)((0,t.A)({},n),{},{[e.target.id]:e.target.checked})))};return(0,w.jsx)(i.A,{lg:"12",children:(0,w.jsx)(o.A,{children:(0,w.jsxs)(l.A,{className:"d-flex flex-column gap-2",children:[(0,w.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,w.jsxs)(c.A,{tag:"h4",className:"fw-bold",children:[(null===V||void 0===V?void 0:V.nama_tender)||"..",(0,w.jsx)("br",{}),(0,w.jsx)("small",{style:{fontWeight:"lighter"},children:"Update Tender"})]}),(0,w.jsx)(v.N_,{to:"projects",style:{textDecoration:"none"}})]}),W?"Loading..":(0,w.jsxs)(d.A,{onSubmit:async e=>{e.preventDefault(),a(!0);const n=[];J.length>0?J.map((e=>n.push(e.value))):V.kbli_list.map((e=>n.push(e.value))),f.id=null===f||void 0===f?void 0:f.id_tender,f.centang_dok_wajib=B,f.dok_tender=D,f.dok_deskripsi_tender=L,f.kbli=n,console.log("selet",f),await Q.put("dapi/vendor/tender/update",f,{headers:{"Access-Control-Allow-Origin":!0,"Content-Type":"multipart/form-data",Accept:"application/json","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}).then((()=>{(0,y.x)("success","Tender updated successfully."),$()})).catch((()=>{(0,y.x)("error","Something went wrong.")})),T(!0),E(!0),a(!1)},encType:"multipart/form-data",children:[(0,w.jsxs)(u.A,{lg:"12",children:[(0,w.jsxs)(i.A,{md:"6",children:[(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"metode_pengadaan",children:"Metode Pengadaan"}),(0,w.jsxs)(k.A,{type:"select",name:"metode_pengadaan",id:"metode_pengadaan",onChange:e=>{(e=>{Y(e),"seleksi_umum"===e.target.value||"tender_umum"===e.target.value?N(!0):N(!1)})(e)},value:(null===f||void 0===f?void 0:f.metode_pengadaan)||"",children:[(0,w.jsx)("option",{value:"seleksi_umum",children:"Seleksi Umum"}),(0,w.jsx)("option",{value:"seleksi_terbatas",children:"Seleksi Terbatas"}),(0,w.jsx)("option",{value:"tender_umum",children:"Tender Umum"}),(0,w.jsx)("option",{value:"tender_terbatas",children:"Tender Terbatas"}),(0,w.jsx)("option",{value:"pengadaan_langsung",children:"Pengadaan Langsung"}),(0,w.jsx)("option",{value:"penunjukkan_langsung",children:"Penunjukkan Langsung"})]})]}),C&&(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"sistem_kualifikasi",children:"Sistem Kualifikasi"}),(0,w.jsxs)(k.A,{type:"select",name:"sistem_kualifikasi",id:"sistem_kualifikasi",onChange:e=>(e=>{Y(e),"pasca kualifikasi"===e.target.value?S(!0):S(!1)})(e),value:(null===f||void 0===f?void 0:f.sistem_kualifikasi)||"",children:[(0,w.jsx)("option",{value:"pasca kualifikasi",children:"Pasca Kualifikasi"}),(0,w.jsx)("option",{value:"pra kualifikasi",children:"Pra Kualifikasi"})]})]}),(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"nama_tender",children:"Nama Tender"}),(0,w.jsx)(k.A,{type:"text",name:"nama_tender",id:"nama_tender",value:(null===f||void 0===f?void 0:f.nama_tender)||"",onChange:Y})]}),(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"lokasi",children:"Lokasi Pekerjaan"}),(0,w.jsx)(k.A,{type:"text",name:"lokasi",id:"lokasi",value:(null===f||void 0===f?void 0:f.lokasi)||"",onChange:Y})]}),(0,w.jsxs)(u.A,{children:[(0,w.jsx)(i.A,{md:"6",children:(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"tgl_pendaftaran",children:"Tanggal Pendaftaran"}),(0,w.jsx)(k.A,{type:"date",name:"tgl_pendaftaran",id:"tgl_pendaftaran",value:(null===f||void 0===f?void 0:f.tgl_pendaftaran)||"",onChange:Y})]})}),(0,w.jsx)(i.A,{md:"6",children:(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"batas_pendaftaran",children:"Batas Pendaftaran"}),(0,w.jsx)(k.A,{type:"date",name:"batas_pendaftaran",id:"batas_pendaftaran",value:(null===f||void 0===f?void 0:f.batas_pendaftaran)||"",onChange:Y})]})})]}),C?"":(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,w.jsxs)(k.A,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:Y,value:(null===f||void 0===f?void 0:f.jenis_pengadaan)||"",children:[(0,w.jsx)("option",{value:"barang",children:"Barang"}),(0,w.jsx)("option",{value:"jasa",children:"Jasa"}),(0,w.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,w.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,w.jsx)(_.Ay,{closeMenuOnSelect:!0,defaultValue:null===V||void 0===V?void 0:V.kbli_list,options:q,onChange:e=>z(e),isMulti:!0})]})]})]}),(0,w.jsxs)(i.A,{md:"6",children:[C&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"jenis_pengadaan",children:"Jenis Pengadaan"}),(0,w.jsxs)(k.A,{type:"select",name:"jenis_pengadaan",id:"jenis_pengadaan",onChange:Y,value:(null===f||void 0===f?void 0:f.jenis_pengadaan)||"",children:[(0,w.jsx)("option",{value:"barang",children:"Barang"}),(0,w.jsx)("option",{value:"jasa",children:"Jasa"}),(0,w.jsx)("option",{value:"jasa konstruksi",children:"Jasa Konstruksi"}),(0,w.jsx)("option",{value:"jasa konsultasi",children:"Jasa Konsultasi"})]})]}),(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"kbli",children:"Nomor KBLI"}),(0,w.jsx)(_.Ay,{closeMenuOnSelect:!0,defaultValue:null===V||void 0===V?void 0:V.kbli_list,options:q,onChange:e=>z(e),isMulti:!0})]})]}),(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"hps",children:"HPS"}),(0,w.jsx)(k.A,{type:"text",name:"hps",id:"hps",value:(null===f||void 0===f?void 0:f.hps)||"",onChange:Y})]}),(0,w.jsxs)(u.A,{children:[(0,w.jsx)(i.A,{md:"10",children:(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"dok_tender",children:"Dokumen Tender"}),F?(0,w.jsx)(i.A,{className:"py-2",children:(0,w.jsx)(v.N_,{to:"".concat(H,"vendor_file/tender/").concat(null===f||void 0===f?void 0:f.id_tender,"/").concat(null===f||void 0===f?void 0:f.dok_tender),target:"_blank",children:"File Dokumen Tender"})}):(0,w.jsx)(k.A,{type:"file",name:"dok_tender",id:"dok_tender",onChange:e=>{return n=e.target.files[0],void(0,A.A)(n).then((e=>K(e.split(",")[1]))).catch((e=>console.log(e)));var n},accept:"application/pdf"})]})}),(0,w.jsx)(i.A,{md:"2",className:"d-flex justify-content-end align-items-center pt-4",children:(0,w.jsx)("button",{type:"button",style:{border:"none",background:"none"},children:(0,w.jsx)(x(),{icon:"".concat(F?"edit":"close"),onClick:()=>{T(!F),K()},className:"text-muted",style:{fontSize:"20px"}})})})]}),(0,w.jsxs)(u.A,{children:[(0,w.jsx)(i.A,{md:"10",children:(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"dok_deskripsi_tender",children:"Dokumen Deskripsi Tender"}),R?(0,w.jsx)(i.A,{className:"py-2",children:(0,w.jsx)(v.N_,{to:"".concat(H,"vendor_file/tender/").concat(null===f||void 0===f?void 0:f.id_tender,"/").concat(null===f||void 0===f?void 0:f.dok_deskripsi_tender),target:"_blank",children:"File Dokumen Deskripsi Tender"})}):(0,w.jsx)(k.A,{type:"file",name:"dok_deskripsi_tender",id:"dok_deskripsi_tender",onChange:e=>{return n=e.target.files[0],void(0,A.A)(n).then((e=>M(e.split(",")[1]))).catch((e=>console.log(e)));var n},accept:"application/pdf"})]})}),(0,w.jsx)(i.A,{md:"2",className:"d-flex justify-content-end align-items-center pt-4",children:(0,w.jsx)("button",{type:"button",style:{border:"none",background:"none"},children:(0,w.jsx)(x(),{icon:"".concat(R?"edit":"close"),onClick:()=>{E(!R),M()},className:"text-muted",style:{fontSize:"20px"}})})})]}),!C&&(0,w.jsxs)(h.A,{children:[(0,w.jsx)(p.A,{htmlFor:"perusahaan",children:"Perusahaan Yang Ditunjuk"}),(0,w.jsx)(k.A,{type:"select",name:"perusahaan",id:"perusahaan",onChange:Y,children:(0,w.jsx)("option",{value:"",children:"ambil dari db"})})]})]})]}),(0,w.jsxs)(u.A,{lg:"12",className:"mt-3",children:[(0,w.jsxs)(i.A,{lg:"6",children:[(0,w.jsx)("h4",{className:"fw-bold",children:C&&!P?"Tahap I":"Dokumen Yang Diwajibkan"}),(0,w.jsxs)(u.A,{children:[(0,w.jsxs)(i.A,{md:"6",children:[(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_surat_penyampaian_penawaran",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_surat_penyampaian_penawaran)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_surat_penyampaian_penawaran",className:"form-label",children:"Surat Penyampaian Penawaran"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_formulir_isian_kualifikasi",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_formulir_isian_kualifikasi)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_formulir_isian_kualifikasi",className:"form-label",children:"Formulir Isian Kualifikasi"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_fakta_integritas",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_fakta_integritas)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_fakta_integritas",className:"form-label",children:"Pakta Integritas"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_hse_plan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_hse_plan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_hse_plan",className:"form-label",children:"HSE Plan"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_listmanpower_plus_cv",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_listmanpower_plus_cv)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_listmanpower_plus_cv",className:"form-label",children:"List Man Power + CV"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_metode_pelaksanaan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_metode_pelaksanaan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_metode_pelaksanaan",className:"form-label",children:"Metode Pelaksanaan (Jasa)"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_struktur_organisasi_pekerjaan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_struktur_organisasi_pekerjaan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_struktur_organisasi_pekerjaan",className:"form-label",children:"Struktur Organisasi Pekerjaan"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_wajib_lainnya",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_wajib_lainnya)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_wajib_lainnya",className:"form-label",children:"*Dokumen Wajib Lainnya"})]})]}),(0,w.jsxs)(i.A,{md:"6",children:[(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_qaqc_plan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_qaqc_plan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_qaqc_plan",className:"form-label",children:"QA/QC Plan"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_perhitungan_tkdn",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_perhitungan_tkdn)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_perhitungan_tkdn",className:"form-label",children:"Perhitungan TKDN"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_schedule_pekerjaan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_schedule_pekerjaan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_schedule_pekerjaan",className:"form-label",children:"Schedule Pekerjaan"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_list_peralatan",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_list_peralatan)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_list_peralatan",className:"form-label",children:"List Peralatan"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_kelengkapan_izin_usaha",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_kelengkapan_izin_usaha)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_kelengkapan_izin_usaha",className:"form-label",children:"Kelengkapan Izin Usaha"})]}),P&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_penawaran_komersial",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_penawaran_komersial)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_jaminan_penawaran",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_jaminan_penawaran)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_jaminan_penawaran",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]})]}),!P&&C&&(0,w.jsxs)(i.A,{lg:"6",children:[(0,w.jsx)("h4",{className:"fw-bold",children:"Tahap II"}),(0,w.jsxs)(i.A,{md:"6",children:[(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_penawaran_komersial",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_penawaran_komersial)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_penawaran_komersial",className:"form-label",children:"Surat Penawaran Komersial"})]}),(0,w.jsxs)(h.A,{check:!0,children:[(0,w.jsx)(k.A,{type:"checkbox",id:"dok_jaminan_penawaran",onChange:G,checked:(null===B||void 0===B?void 0:B.dok_jaminan_penawaran)||""}),(0,w.jsx)(p.A,{check:!0,htmlFor:"dok_jaminan_penawaran",className:"form-label",children:"Jaminan Penawaran"})]})]})]})]}),(0,w.jsx)("div",{className:"d-flex justify-content-end",children:(0,w.jsxs)("div",{className:"d-flex gap-3",children:[(0,w.jsx)(v.N_,{to:"/vendor",children:(0,w.jsx)(m.A,{type:"button",color:"secondary",outline:!0,children:"Cancel"})}),n?(0,w.jsx)(m.A,{type:"button",color:"success",disabled:!0,children:(0,w.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,w.jsx)(j.A,{size:"sm"}),"Menyimpan.."]})}):(0,w.jsx)(m.A,{type:"submit",color:"success",children:"Update"})]})})]})]})})})}},86873:(e,n,a)=>{a.d(n,{A:()=>t});const t=e=>new Promise((n=>{let a="";const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{a=t.result,n(a)}}))},35299:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(65043),s=a(65173),r=a.n(s),i=a(98139),o=a.n(i),l=a(96794),c=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function u(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var h={className:r().string,cssModule:r().object,tag:l.Wx};function p(e){var n=e.className,a=e.cssModule,s=e.tag,r=void 0===s?"div":s,i=u(e,c),h=(0,l.qO)(o()(n,"card-title"),a);return t.createElement(r,d({},i,{className:h}))}p.propTypes=h;const k=p},6221:(e,n,a)=>{a.d(n,{A:()=>f});var t=a(65043),s=a(65173),r=a.n(s),i=a(96794);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l=["className","cssModule","tag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},c.apply(this,arguments)}function d(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function u(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,n){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},h(e,n)}function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=m(e);if(n){var s=m(this).constructor;a=Reflect.construct(t,arguments,s)}else a=t.apply(this,arguments);return function(e,n){if(n&&("object"===o(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,a)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var j={children:r().node,tag:i.Wx,innerRef:r().oneOfType([r().object,r().func,r().string]),className:r().string,cssModule:r().object},_=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&h(e,n)}(o,e);var n,a,s,r=p(o);function o(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(n=r.call(this,e)).getRef=n.getRef.bind(k(n)),n.submit=n.submit.bind(k(n)),n}return n=o,(a=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,n=e.className,a=e.cssModule,s=e.tag,r=void 0===s?"form":s,o=e.innerRef,u=d(e,l),h=(0,i.qO)(n,a);return t.createElement(r,c({},u,{ref:o,className:h}))}}])&&u(n.prototype,a),s&&u(n,s),Object.defineProperty(n,"prototype",{writable:!1}),o}(t.Component);_.propTypes=j;const f=_},57528:(e,n,a)=>{function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}a.d(n,{A:()=>t})},203:(e,n,a)=>{a.d(n,{I:()=>p});var t=a(68664),s=a(10765),r=a(65043),i=a(49939),o=a(28873),l=a(82670),c=a(59781),d=a(1968),u=a(54483),h=a(33729);function p(e,n,a){return function(e,n){const a=(0,c.jE)({context:e.context}),t=(0,d.w)(),s=(0,l.h)(),p=a.defaultQueryOptions(e);p._optimisticResults=t?"isRestoring":"optimistic",p.onError&&(p.onError=i.j.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=i.j.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=i.j.batchCalls(p.onSettled)),(0,h.tu)(p),(0,u.LJ)(p,s),(0,u.wZ)(s);const[k]=r.useState((()=>new n(a,p))),m=k.getOptimisticResult(p);if((0,o.r)(r.useCallback((e=>{const n=t?()=>{}:k.subscribe(i.j.batchCalls(e));return k.updateResult(),n}),[k,t]),(()=>k.getCurrentResult()),(()=>k.getCurrentResult())),r.useEffect((()=>{k.setOptions(p,{listeners:!1})}),[p,k]),(0,h.EU)(p,m,t))throw(0,h.iL)(p,k,s);if((0,u.$1)({result:m,errorResetBoundary:s,useErrorBoundary:p.useErrorBoundary,query:k.getCurrentQuery()}))throw m.error;return p.notifyOnChangeProps?m:k.trackResult(m)}((0,t.vh)(e,n,a),s.$)}}}]);
//# sourceMappingURL=4494.3fba464f.chunk.js.map