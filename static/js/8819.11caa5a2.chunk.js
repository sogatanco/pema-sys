"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[8819],{82959:(e,a,n)=>{n.d(a,{x:()=>l,y:()=>i});n(65043);var t=n(23768),s=n(70579);const i=()=>(0,s.jsx)(t.l$,{toastOptions:{className:"",style:{}}}),l=(e,a)=>{((e,a)=>{"success"===e?t.Ay.success(a):"create"===e?(0,t.Ay)(a,{icon:"\ud83e\udd17"}):"start"===e?(0,t.Ay)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,t.Ay)("Horeee, task done!",{icon:"\ud83d\udc4f"}):t.Ay.error(a)})(e,a)}},8819:(e,a,n)=>{n.r(a),n.d(a,{default:()=>K});var t=n(65043),s=n(203),i=n(49157),l=n(18353),d=n(26259),r=n(55918),c=n.n(r),o=n(93397),h=n(89379),u=n(22345),x=n(52640),p=n(12327),j=n(89804),m=n(7493),_=n(72679),g=n(23222),v=n(10591),k=n(20782),b=n(97877),f=n(87426),A=n(6221),y=n(97550),S=n(91014),w=n(35475),N=n(18707),C=n(80519),P=n(82959),D=n(86873),F=n(3655),z=n(70579);const B=[{id:0,title:"Surat Penyampaian Penawaran",name:"dok_surat_penyampaian_penawaran"},{id:1,title:"Formulir Isian Kualifikasi",name:"dok_formulir_isian_kualifikasi"},{id:2,title:"Fakta Integritas",name:"dok_fakta_integritas"},{id:3,title:"HSE Plan",name:"dok_hse_plan"},{id:4,title:"Jaminan Penawaran",name:"dok_jaminan_penawaran"},{id:5,title:"Kelengkapan Izin Usaha",name:"dok_kelengkapan_izin_usaha"},{id:6,title:"List Peralatan",name:"dok_list_peralatan"},{id:7,title:"List Man Power + CV",name:"dok_listmanpower_plus_cv"},{id:8,title:"Metode Pelaksanaan (Jasa)",name:"dok_metode_pelaksanaan"},{id:9,title:"Surat Penawaran Komersial",name:"dok_penawaran_komersial"},{id:10,title:"Perhitungan TKDN",name:"dok_perhitungan_tkdn"},{id:11,title:"QA/QC Plan",name:"dok_qaqc_plan"},{id:12,title:"Schedule Pekerjaan",name:"dok_schedule_pekerjaan"},{id:13,title:"Struktur Organisasi Pekerjaan",name:"dok_struktur_organisasi_pekerjaan"},{id:14,title:"*Dokumen Wajib Lainnya",name:"dok_wajib_lainnya"}],T=[{id:0,title:"Jaminan Penawaran",name:"dok_jaminan_penawaran"},{id:2,title:"Surat Penawaran Komersial",name:"dok_penawaran_komersial"}],I=e=>{let{modal6:a,toggle6:n,selectedCompanyName:s,tender:i,selectedCompanyData:l,selectedStage:r}=e;const[c,o]=(0,t.useState)({}),[h,u]=(0,t.useState)(B);return(0,t.useEffect)((()=>{o((null===i||void 0===i?void 0:i.centang_dok_wajib)&&JSON.parse(null===i||void 0===i?void 0:i.centang_dok_wajib))}),[i]),(0,t.useEffect)((()=>{u("Tahap II"===r?T:B)}),[r]),(0,z.jsxs)(g.A,{isOpen:a,toggle:n.bind(null),centered:!0,size:"lg",children:[(0,z.jsx)(v.A,{toggle:n.bind(null),children:(0,z.jsxs)("div",{className:"d-flex flex-column",children:[(0,z.jsx)("span",{className:"fw-bold",children:s}),(0,z.jsxs)("small",{children:["Cek Dokumen ",r]})]})}),(0,z.jsx)(k.A,{children:(0,z.jsx)(F.A,{bordered:!0,hover:!0,children:(0,z.jsx)("tbody",{children:h.map((e=>Object.keys(c).map((a=>e.name===a&&!0===c[a]&&(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),(0,z.jsx)("td",{style:{textAlign:"center"},children:void 0!==l&&(0,z.jsx)(w.N_,{to:"".concat("https://api.ptpema.co.id/","vendor_file/").concat(l[a]),target:"blank",children:(0,z.jsx)(d.A,{color:"secondary",outline:!0,size:"sm",children:"Download"})})})]},e.id)))))})})})]})},O="https://api.ptpema.co.id/",U=e=>{let{tender:a,action:n}=e;const[s,r]=(0,t.useState)(!1),[F,B]=(0,t.useState)(!1),[T,U]=(0,t.useState)(!1),[K,M]=(0,t.useState)([]),[L,J]=(0,t.useState)([]),[R,E]=(0,t.useState)(!1),[q,H]=(0,t.useState)(!1),[Y,Q]=(0,t.useState)(),[V,W]=(0,t.useState)([]),[$,G]=(0,t.useState)([]),[X,Z]=(0,t.useState)(),[ee,ae]=(0,t.useState)(!1),[ne,te]=(0,t.useState)([]),[se,ie]=(0,t.useState)(),[le,de]=(0,t.useState)(!1),[re,ce]=(0,t.useState)(),[oe,he]=(0,t.useState)(!1),[ue,xe]=(0,t.useState)(),[pe,je]=(0,t.useState)(!1),[me,_e]=(0,t.useState)(!1),[ge,ve]=(0,t.useState)(!1),[ke,be]=(0,t.useState)(!1),[fe,Ae]=(0,t.useState)(),[ye,Se]=(0,t.useState)(),[we,Ne]=(0,t.useState)(!1),[Ce,Pe]=(0,t.useState)(""),[De,Fe]=(0,t.useState)(void 0),[ze,Be]=(0,t.useState)(""),[Te,Ie]=(0,t.useState)(""),Oe=(0,o.A)(),Ue=()=>{r(!s)},Ke=()=>{B(!F)},Me=async()=>{U(!0),await Oe.get("dapi/vendor/tender/".concat(a.id_tender)).then((e=>{M(e.data.data.perusahaan_yang_ikut)})).catch((e=>console.log(e))),U(!1)};(0,t.useEffect)((()=>{const e=null===K||void 0===K?void 0:K.filter((e=>"register"!==e.status)),n=null===K||void 0===K?void 0:K.filter((e=>"lulus_tahap_1"===e.status||"pemenang"===e.status)),t=null===K||void 0===K?void 0:K.filter((e=>"pemenang"===e.status));J(e),W(n),Z(e),te("pra kualifikasi"===a.sistem_kualifikasi?n:e),ce(t)}),[K]);const Le=async(e,t)=>{xe(t),he(!0);const s=await(0,D.A)(e).then((e=>e.split(",")[1])).catch((e=>console.log(e)));await Oe.post("dapi/vendor/tender/ba/".concat(a.id_tender),{file:s,key:t}).then((()=>{(0,P.x)("success","Berita Acara Penetapan Berhasil didupload"),n(),Me()})).catch((()=>(0,P.x)("error","Something went wrong"))),xe(),he(!1)},Je=()=>{be(!0)};return(0,z.jsxs)(u.A,{title:"Collapse",children:[R?(0,z.jsx)(d.A,{type:"button",color:"primary",outline:!0,size:"sm",onClick:(()=>E(!R)).bind(null),style:{marginBottom:"1rem"},children:"Close"}):(0,z.jsx)(d.A,{type:"button",color:"primary",outline:!0,size:"sm",onClick:async()=>{E(!0),Me()},style:{marginBottom:"1rem"},children:"Details"}),(0,z.jsx)(x.A,{isOpen:R,children:(0,z.jsx)(i.A,{className:"border rounded-3",style:{fontSize:"14px"},children:T?(0,z.jsx)("div",{className:"d-flex justify-content-center py-4",children:"Loading.."}):(0,z.jsxs)(l.A,{children:[(0,z.jsxs)(p.A,{children:[(0,z.jsxs)(u.A,{md:"6",children:[(0,z.jsx)("table",{width:"100%",children:(0,z.jsxs)("tbody",{children:[(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Lokasi Pengerjaan"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{className:"fw-bold",children:a.lokasi})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Waktu Pendaftaran"}),(0,z.jsx)("td",{children:":"}),(0,z.jsxs)("td",{className:"fw-bold",children:[a.tgl_pendaftaran," s/d ",a.batas_pendaftaran]})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Jenis Pengadaan"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{className:"fw-bold",style:{textTransform:"capitalize"},children:a.jenis_pengadaan})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"HPS"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{className:"fw-bold",children:(0,C.A)(a.hps)})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Nomor KBLI"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{className:"fw-bold",children:(0,z.jsx)("div",{className:"d-flex gap 1",children:Array.isArray(JSON.parse(a.kbli))?JSON.parse(a.kbli).map(((e,n)=>(0,z.jsxs)("span",{children:["all_kbli"===e?"Semua KBLI":e," ",n+1===JSON.parse(a.kbli).length?"":"|"," \xa0"]},e))):"null"})})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Sistem Kualifikasi"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{className:"fw-bold",style:{textTransform:"capitalize"},children:a.sistem_kualifikasi})]})]})}),(0,z.jsx)(u.A,{className:"mt-3",children:(0,z.jsxs)("table",{className:"w-100",children:[(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Perusahaan Yang Mendaftar"}),(0,z.jsx)("th",{children:"Tanggal Mendaftar"})]})}),(0,z.jsxs)("tbody",{children:[(null===K||void 0===K?void 0:K.length)>0?null===K||void 0===K?void 0:K.map(((e,n)=>(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:(0,z.jsxs)("div",{className:"d-flex gap-2",children:[(0,z.jsxs)("span",{children:[n+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan,("umum"===a.owner&&"terverifikasi"!==e.detail.status_verifikasi_umum||"scm"===a.owner&&"terverifikasi"!==e.detail.status_verifikasi_scm)&&(0,z.jsx)(w.N_,{to:"/vendor/requests/check/".concat(e.perusahaan_id),target:"blank",children:(0,z.jsx)(j.A,{className:"bg-light-danger text-danger",outline:!0,children:"Need Approval"})})]})}),(0,z.jsx)("td",{children:(0,N.A)(e.detail.created_at)})]},e.id_peserta))):(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"No data."})}),(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(null===a.sistem_kualifikasi||"pasca kualifikasi"===a.sistem_kualifikasi)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Perusahaan Yang Input Dokumen"}),(0,z.jsx)("th",{children:"Aksi"})]})}),(0,z.jsx)("tbody",{children:(null===L||void 0===L?void 0:L.length)>0?null===L||void 0===L?void 0:L.map(((e,a)=>(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:(0,z.jsxs)("div",{className:"d-flex gap-2",children:[(0,z.jsxs)("span",{children:[a+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,z.jsx)("td",{children:(0,z.jsx)(w.N_,{onClick:()=>{ve(!0),Pe("".concat(e.detail.bentuk_usaha," ").concat(e.detail.nama_perusahaan)),Fe(e),Ie("")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta))):(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"No data."})})})]})]})})]}),(0,z.jsx)(u.A,{md:"6",children:(0,z.jsxs)("table",{className:"w-100",children:["pra kualifikasi"===a.sistem_kualifikasi&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Tahap I"}),(0,z.jsx)("th",{children:"Dokumen Penawaran"})]})}),(0,z.jsxs)("tbody",{children:[(null===L||void 0===L?void 0:L.length)>0?null===L||void 0===L?void 0:L.map(((e,a)=>(0,z.jsx)(t.Fragment,{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:(0,z.jsxs)("div",{className:"d-flex gap-2",children:[(0,z.jsxs)("span",{children:[a+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,z.jsx)("td",{children:(0,z.jsx)(w.N_,{onClick:()=>{ve(!0),Pe("".concat(e.detail.bentuk_usaha," ").concat(e.detail.nama_perusahaan)),Fe(e),Ie("Tahap I")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta)},e.id_peserta))):(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"No data."})}),(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Tahap II"}),(0,z.jsx)("th",{children:"Dokumen Penawaran"})]})}),(0,z.jsxs)("tbody",{children:[(null===V||void 0===V?void 0:V.length)>0?null===V||void 0===V?void 0:V.map(((e,n)=>(0,z.jsxs)(t.Fragment,{children:[(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:(0,z.jsxs)("div",{className:"d-flex gap-2",children:[(0,z.jsxs)("span",{children:[n+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,z.jsx)("td",{children:(0,z.jsx)(w.N_,{onClick:()=>{ve(!0),Pe("".concat(e.detail.bentuk_usaha," ").concat(e.detail.nama_perusahaan)),Fe(e),Ie("Tahap II")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta),n+1===(null===L||void 0===L?void 0:L.length)&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Status"}),(0,z.jsx)("th",{className:"fw-bold",children:"Berita Acara"})]}),null!==(null===a||void 0===a?void 0:a.upload_ba_seleksi)?(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(j.A,{color:"warning",children:"Under Review"}):"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(j.A,{color:"danger",children:(0,z.jsx)("button",{type:"button",style:{background:"none",border:"none",color:"white"},onClick:()=>{Je(),Be(a.catatan)},children:"Revisi"})}):(0,z.jsx)(j.A,{color:"success",children:"Approved"})}),(0,z.jsx)("td",{children:null!==(null===a||void 0===a?void 0:a.upload_ba_seleksi)?(0,z.jsx)(z.Fragment,{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(w.N_,{to:"".concat(O,"vendor_file/").concat(a.upload_ba_seleksi),target:"blank",children:"Download"}):"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?oe&&"upload_ba_seleksi"===ue?"Uploding..":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.A,{htmlFor:"uploadBa".concat(a.id_tender),className:"btn btn-outline-info btn-sm outline",children:"Upload"}),(0,z.jsx)(_.A,{hidden:!0,id:"uploadBa".concat(a.id_tender),type:"file",onChange:e=>{Le(e.target.files[0],"upload_ba_seleksi")}})]}):(0,z.jsx)(w.N_,{to:"".concat(O,"vendor_file/").concat(a.upload_ba_seleksi),target:"blank",children:"Download"})}):(0,z.jsx)("td",{children:oe&&"upload_ba_seleksi"===ue?"Uploding..":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.A,{htmlFor:"uploadBa".concat(a.id_tender),className:"btn btn-outline-info btn-sm outline",children:"Upload Penetapan"}),(0,z.jsx)(_.A,{hidden:!0,id:"uploadBa".concat(a.id_tender),type:"file",onChange:e=>{Le(e.target.files[0],"upload_ba_seleksi")}})]})})})]}):(0,z.jsx)(z.Fragment,{children:(0,z.jsx)("td",{children:oe&&"upload_ba_seleksi"===ue?"Uploding..":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.A,{htmlFor:"uploadBaSeleksi".concat(a.id_tender),className:"btn btn-outline-info btn-sm outline",children:"Upload Berita Acara"}),(0,z.jsx)(_.A,{hidden:!0,id:"uploadBaSeleksi".concat(a.id_tender),type:"file",onChange:e=>{Le(e.target.files[0],"upload_ba_seleksi")}})]})})})]})]},e.id_peserta))):(0,z.jsx)("tr",{children:(0,z.jsx)("td",{children:(0,z.jsx)(d.A,{type:"button",size:"sm",color:"info",onClick:Ue.bind(null),children:"Pilih Peserta"})})}),(0,z.jsx)("tr",{children:(0,z.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(0,z.jsxs)(g.A,{isOpen:s,toggle:Ue.bind(null),centered:!0,size:"lg",children:[(0,z.jsx)(v.A,{toggle:Ue.bind(null),children:"Pilih Peserta Tahap II"}),(0,z.jsx)(k.A,{children:0===(null===X||void 0===X?void 0:X.length)?(0,z.jsx)("div",{className:"text-center",children:"Belum ada perusahaan yang submit dokumen."}):(0,z.jsx)(S.Ay,{closeMenuOnSelect:!0,options:X,onChange:e=>G(e),isMulti:!0})}),(0,z.jsx)(b.A,{children:0===(null===X||void 0===X?void 0:X.length)?(0,z.jsx)(d.A,{color:"secondary",size:"sm",outline:!0,onClick:Ue.bind(null),children:"Tutup"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.A,{color:"primary",onClick:async()=>{ae(!0);const e=[];$.map((a=>e.push(a.value))),await Oe.post("dapi/vendor/tender/tahapdua/".concat(a.id_tender),{list_peserta:e}).then((()=>{Me(),(0,P.x)("success","Peserta Tahap II berhasil dipilih")})).catch((()=>{(0,P.x)("error","Something went wrong")})),r(!1),ae(!1)},disabled:ee,children:ee?"Menyimpan..":"Simpan"}),(0,z.jsx)(d.A,{color:"secondary",onClick:Ue.bind(null),children:"Cancel"})]})})]})]}),(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Penetapan Pemenang"}),(0,z.jsx)("th",{children:"Status"}),(0,z.jsx)("th",{children:"Berita Acara"})]})}),(0,z.jsx)("tbody",{children:(null===re||void 0===re?void 0:re.length)>0?(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("tr",{children:[(0,z.jsxs)("td",{children:[re[0].detail.bentuk_usaha," ",re[0].detail.nama_perusahaan]}),(0,z.jsx)("td",{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(j.A,{color:"warning",children:"Under Review"}):"revisi_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(j.A,{color:"danger",children:(0,z.jsx)("button",{type:"button",style:{background:"none",border:"none",color:"white"},onClick:()=>{Je(),Be(a.catatan)},children:"Revisi"})}):"approved_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(j.A,{color:"success",children:"Approved"}):"-"}),null!==(null===a||void 0===a?void 0:a.upload_ba_pemenang)?(0,z.jsx)("td",{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,z.jsx)(w.N_,{to:"".concat(O,"vendor_file/").concat(a.upload_ba_pemenang),target:"blank",children:"Download"}):"revisi_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?oe&&"upload_ba_pemenang"===ue?"Uploding..":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.A,{htmlFor:"uploadBa".concat(a.id_tender),className:"btn btn-outline-info btn-sm outline",children:"Upload"}),(0,z.jsx)(_.A,{hidden:!0,id:"uploadBa".concat(a.id_tender),type:"file",onChange:e=>{Le(e.target.files[0],"upload_ba_pemenang")}})]}):(0,z.jsx)(w.N_,{to:"".concat(O,"vendor_file/").concat(a.upload_ba_pemenang),target:"blank",children:"Download"})}):(0,z.jsx)("td",{children:oe&&"upload_ba_pemenang"===ue?"Uploding..":(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m.A,{htmlFor:"uploadBa".concat(a.id_tender),className:"btn btn-outline-info btn-sm outline",children:"Upload Penetapan"}),(0,z.jsx)(_.A,{hidden:!0,id:"uploadBa".concat(a.id_tender),type:"file",onChange:e=>{Le(e.target.files[0],"upload_ba_pemenang")}})]})})]})}):(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:(0,z.jsx)(d.A,{type:"button",size:"sm",color:"info",onClick:Ke.bind(null),children:"Pilih Pemenang"})}),(0,z.jsx)("td",{children:" - "}),(0,z.jsx)("td",{children:(0,z.jsx)("div",{children:(0,z.jsx)(d.A,{type:"button",size:"sm",color:"info",outline:!0,disabled:!0,children:"Upload Penetapan"})})})]})})}),(0,z.jsxs)(g.A,{isOpen:F,toggle:Ke.bind(null),centered:!0,size:"lg",children:[(0,z.jsx)(v.A,{toggle:Ke.bind(null),children:"Pilih Pemenang"}),(0,z.jsx)(k.A,{children:0===(null===ne||void 0===ne?void 0:ne.length)?(0,z.jsx)("div",{className:"text-center",children:"Belum ada list kandidat pemenang."}):(0,z.jsx)(S.Ay,{closeMenuOnSelect:!0,options:ne,onChange:e=>ie(e)})}),(0,z.jsx)(b.A,{children:0===(null===L||void 0===L?void 0:L.length)?(0,z.jsx)(d.A,{color:"secondary",size:"sm",outline:!0,onClick:Ke.bind(null),children:"Tutup"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.A,{color:"primary",onClick:async()=>{de(!0),await Oe.post("dapi/vendor/tender/pemenang/".concat(a.id_tender),{list_peserta:se.value}).then((()=>{(0,P.x)("success","Pemenang Tender telah ditetapkan"),Me()})).catch((()=>(0,P.x)("error","Something went wrong"))),B(!1),de(!1)},disabled:le,children:le?"Menyimpan..":"Simpan"}),(0,z.jsx)(d.A,{color:"secondary",onClick:Ke.bind(null),children:"Cancel"})]})})]})]})})]}),(0,z.jsx)("div",{className:"d-flex justify-content-end bg-light-secondary rounded-3 p-2 mt-4",children:(0,z.jsxs)("div",{className:"d-flex gap-3 ",children:[(0,z.jsx)("abbr",{title:"Edit Status",children:(0,z.jsx)(d.A,{type:"button",size:"sm",color:"primary",outline:!0,onClick:()=>_e(!0),children:"Edit Status"})}),(0,z.jsx)("abbr",{title:"Hapus Tender",children:(0,z.jsx)(d.A,{type:"button",size:"sm",color:"danger",outline:!0,onClick:()=>{var e;e=a.id_tender,je(!pe),Q(e)},children:q&&Y===a.id_tender?"Deleting..":(0,z.jsx)(c(),{icon:"delete",style:{fontSize:"14px"}})})})]})}),(0,z.jsxs)(g.A,{isOpen:pe,centered:!0,children:[(0,z.jsx)(v.A,{children:"Konfirmasi"}),(0,z.jsx)(k.A,{children:(0,z.jsx)("div",{className:"d-flex flex-row gap-2",children:"Apakah Anda yakin akan menghapus data pengadaan ini?"})}),(0,z.jsxs)(b.A,{children:[q?(0,z.jsx)(d.A,{type:"button",color:"success",disabled:!0,children:(0,z.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,z.jsx)(f.A,{size:"sm"}),"Deleting.."]})}):(0,z.jsx)(d.A,{type:"button",color:"danger",onClick:()=>(async e=>{H(!0),await Oe.post("dapi/vendor/tender/delete/".concat(e)).then((()=>{(0,P.x)("success","Tender berhasil dihapus"),n()})).catch((()=>(0,P.x)("error","Something went wrong"))),H(!1)})(a.id_tender),disabled:q,size:"sm",children:"Ya"}),(0,z.jsx)(d.A,{color:"secondary",size:"sm",outline:!0,onClick:()=>je(!1),children:"Batal"})]})]}),(0,z.jsxs)(g.A,{isOpen:ke,centered:!0,fade:!1,children:[(0,z.jsx)(v.A,{children:"Catatan Revisi"}),(0,z.jsx)(k.A,{children:(0,z.jsx)("p",{children:ze})}),(0,z.jsx)(b.A,{children:(0,z.jsx)(d.A,{color:"secondary",size:"sm",outline:!0,onClick:()=>be(!1),children:"Tutup"})})]}),(0,z.jsxs)(g.A,{isOpen:me,centered:!0,children:[(0,z.jsx)(v.A,{children:"Status Tender"}),(0,z.jsxs)(A.A,{onSubmit:async e=>{e.preventDefault(),Ne(!0);const t={status_tender:null===fe||void 0===fe?void 0:fe.status_tender,file_document:null===ye||void 0===ye?void 0:ye.status_dokumen};await Oe.post("dapi/vendor/tender/status-update/".concat(a.id_tender),t,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{n(),_e(!1),Ne(!1),(0,P.x)("success","Tender status updated successfully")})).catch((()=>{_e(!1),Ne(!1),(0,P.x)("error","Action failed.")}))},children:[(0,z.jsxs)(k.A,{children:[(0,z.jsxs)(y.A,{children:[(0,z.jsx)(m.A,{for:"status_tender",children:"Status"}),(0,z.jsxs)(_.A,{type:"select",id:"status_tender",name:"status_tender",onChange:e=>(e=>{Ae((a=>(0,h.A)((0,h.A)({},a),{},{[e.target.id]:e.target.value})))})(e),defaultValue:null===a||void 0===a?void 0:a.status_tender,children:[(0,z.jsx)("option",{value:"buka",children:"Buka"}),(0,z.jsx)("option",{value:"tutup",children:"Tutup"}),(0,z.jsx)("option",{value:"batal",children:"Batal"})]})]}),(0,z.jsxs)(y.A,{children:[(0,z.jsx)(m.A,{for:"status_dokumen",children:"Upload Dokumen"}),(0,z.jsx)(_.A,{type:"file",id:"status_dokumen",name:"status_dokumen",accept:"application/pdf",onChange:e=>(e=>{Se((a=>(0,h.A)((0,h.A)({},a),{},{[e.target.id]:e.target.files[0]})))})(e)}),(0,z.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,z.jsx)("small",{className:"text-muted",children:"File format .pdf (max. 10mb)"}),(0,z.jsx)("small",{className:"text-muted",children:(0,z.jsx)("i",{children:"Opsional"})})]})]})]}),(0,z.jsxs)(b.A,{children:[(0,z.jsx)(d.A,{type:"submit",color:"primary",size:"sm",disabled:we,children:we?"Menyimpan..":"Submit"}),(0,z.jsx)(d.A,{color:"secondary",size:"sm",outline:!0,onClick:()=>_e(!1),children:"Batal"})]})]})]}),(0,z.jsx)(I,{modal6:ge,toggle6:()=>{ve(!ge)},tender:a,selectedCompanyName:Ce,selectedCompanyData:De,selectedStage:Te})]})})})]})},K=()=>{const e=(0,o.A)(),{data:a,refetch:n}=(0,s.I)({queryKey:["cat"],queryFn:()=>e.get("dapi/vendor/tender").then((e=>e.data.data))});return(0,z.jsx)(z.Fragment,{children:0===(null===a||void 0===a?void 0:a.length)?(0,z.jsx)(i.A,{className:"mb-2 rounded-3",children:(0,z.jsx)(l.A,{children:(0,z.jsxs)("div",{className:"d-flex align-items-center gap-1 w-50",children:[(0,z.jsx)("div",{className:"d-flex align-items-center",style:{width:"30px",color:"#21C1D6"},children:(0,z.jsx)(c(),{icon:"information"})}),(0,z.jsx)("span",{children:"Belum ada data tender"})]})})}):null===a||void 0===a?void 0:a.map((e=>(0,z.jsx)(i.A,{className:"mb-2 rounded-3",children:(0,z.jsxs)(l.A,{children:[(0,z.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[(0,z.jsxs)("div",{className:"d-flex flex-column",children:[(0,z.jsx)("strong",{children:e.nama_tender}),(0,z.jsxs)("div",{className:"d-flex gap-2",children:[(0,z.jsxs)("small",{children:[" ","Sistem Kualifikasi: ",(0,z.jsx)("span",{className:"fw-bold",children:e.sistem_kualifikasi})]})," ","|",(0,z.jsxs)("small",{children:[" ","Metode: ",(0,z.jsx)("span",{className:"fw-bold",children:e.metode_pengadaan})]})," ","|",(0,z.jsxs)("small",{children:[" ","Status: ",(0,z.jsx)("span",{className:"fw-bold",children:e.status_tender})]})]})]}),(0,z.jsx)("div",{children:(0,z.jsx)(d.A,{href:"vendor/update-tender/".concat(e.id_tender),color:"primary",size:"sm",disabled:!0,children:"Edit Tender"})})]}),(0,z.jsx)(U,{tender:e,action:n})]})},null===e||void 0===e?void 0:e.id_tender)))})}},18707:(e,a,n)=>{n.d(a,{A:()=>t});const t=e=>{if(e){const a=new Date,n=new Date(e),t=n.toDateString()===a.toDateString()?"Today":n.toDateString(),s=n.toLocaleString().split(",")[1];return"".concat(t,", ").concat(s.split(":")[0],":").concat(s.split(":")[1]," ").concat(s.split(" ")[2]||"")}return e}},86873:(e,a,n)=>{n.d(a,{A:()=>t});const t=e=>new Promise((a=>{let n="";const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{n=t.result,a(n)}}))},80519:(e,a,n)=>{n.d(a,{A:()=>t});const t=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)}}]);
//# sourceMappingURL=8819.11caa5a2.chunk.js.map