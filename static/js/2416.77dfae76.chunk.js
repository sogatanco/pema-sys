"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[2416],{31043:(e,a,n)=>{n.d(a,{F:()=>i,Z:()=>l});n(72791);var s=n(65218),t=n(80184);const i=()=>(0,t.jsx)(s.x7,{toastOptions:{className:"",style:{}}}),l=(e,a)=>{((e,a)=>{"success"===e?s.ZP.success(a):"create"===e?(0,s.ZP)(a,{icon:"\ud83e\udd17"}):"start"===e?(0,s.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,s.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):s.ZP.error(a)})(e,a)}},62416:(e,a,n)=>{n.r(a),n.d(a,{default:()=>I});var s=n(72791),t=n(76807),i=n(43464),l=n(49037),d=n(19127),r=n(30690),o=n.n(r),c=n(48089),h=n(39773),u=n(25853),p=n(63009),x=n(16354),j=n(42976),m=n(8118),_=n(46724),g=n(55211),v=n(94938),k=n(73830),b=n(4828),f=n(69399),Z=n(76167),y=n(55472),S=n(11087),w=n(90838),N=n(23606),C=n(31043),P=n(37493),$=n(28755),D=n(80184);const F=[{id:0,title:"Surat Penyampaian Penawaran",name:"dok_surat_penyampaian_penawaran"},{id:1,title:"Formulir Isian Kualifikasi",name:"dok_formulir_isian_kualifikasi"},{id:2,title:"Fakta Integritas",name:"dok_fakta_integritas"},{id:3,title:"HSE Plan",name:"dok_hse_plan"},{id:4,title:"Jaminan Penawaran",name:"dok_jaminan_penawaran"},{id:5,title:"Kelengkapan Izin Usaha",name:"dok_kelengkapan_izin_usaha"},{id:6,title:"List Peralatan",name:"dok_list_peralatan"},{id:7,title:"List Man Power + CV",name:"dok_listmanpower_plus_cv"},{id:8,title:"Metode Pelaksanaan (Jasa)",name:"dok_metode_pelaksanaan"},{id:9,title:"Surat Penawaran Komersial",name:"dok_penawaran_komersial"},{id:10,title:"Perhitungan TKDN",name:"dok_perhitungan_tkdn"},{id:11,title:"QA/QC Plan",name:"dok_qaqc_plan"},{id:12,title:"Schedule Pekerjaan",name:"dok_schedule_pekerjaan"},{id:13,title:"Struktur Organisasi Pekerjaan",name:"dok_struktur_organisasi_pekerjaan"},{id:14,title:"*Dokumen Wajib Lainnya",name:"dok_wajib_lainnya"}],z=[{id:0,title:"Jaminan Penawaran",name:"dok_jaminan_penawaran"},{id:2,title:"Surat Penawaran Komersial",name:"dok_penawaran_komersial"}],B=e=>{let{modal6:a,toggle6:n,selectedCompanyName:t,tender:i,selectedCompanyData:l,selectedStage:r}=e;const[o,c]=(0,s.useState)({}),[h,u]=(0,s.useState)(F);return(0,s.useEffect)((()=>{c((null===i||void 0===i?void 0:i.centang_dok_wajib)&&JSON.parse(null===i||void 0===i?void 0:i.centang_dok_wajib))}),[i]),(0,s.useEffect)((()=>{u("Tahap II"===r?z:F)}),[r]),(0,D.jsxs)(_.Z,{isOpen:a,toggle:n.bind(null),centered:!0,size:"lg",children:[(0,D.jsx)(g.Z,{toggle:n.bind(null),children:(0,D.jsxs)("div",{className:"d-flex flex-column",children:[(0,D.jsx)("span",{className:"fw-bold",children:t}),(0,D.jsxs)("small",{children:["Cek Dokumen ",r]})]})}),(0,D.jsx)(v.Z,{children:(0,D.jsx)($.Z,{bordered:!0,hover:!0,children:(0,D.jsx)("tbody",{children:h.map((e=>Object.keys(o).map((a=>e.name===a&&!0===o[a]&&(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),(0,D.jsx)("td",{style:{textAlign:"center"},children:void 0!==l&&(0,D.jsx)(S.rU,{to:`https://apidev.ptpema.co.id/vendor_file/${l[a]}`,target:"blank",children:(0,D.jsx)(d.Z,{color:"secondary",outline:!0,size:"sm",children:"Download"})})})]},e.id)))))})})})]})},U="https://apidev.ptpema.co.id/",T=e=>{let{tender:a,action:n}=e;const[t,r]=(0,s.useState)(!1),[$,F]=(0,s.useState)(!1),[z,T]=(0,s.useState)(!1),[I,O]=(0,s.useState)([]),[A,K]=(0,s.useState)([]),[M,L]=(0,s.useState)(!1),[J,R]=(0,s.useState)(!1),[E,q]=(0,s.useState)(),[H,Y]=(0,s.useState)([]),[Q,V]=(0,s.useState)([]),[W,G]=(0,s.useState)(),[X,ee]=(0,s.useState)(!1),[ae,ne]=(0,s.useState)([]),[se,te]=(0,s.useState)(),[ie,le]=(0,s.useState)(!1),[de,re]=(0,s.useState)(),[oe,ce]=(0,s.useState)(!1),[he,ue]=(0,s.useState)(),[pe,xe]=(0,s.useState)(!1),[je,me]=(0,s.useState)(!1),[_e,ge]=(0,s.useState)(!1),[ve,ke]=(0,s.useState)(!1),[be,fe]=(0,s.useState)(),[Ze,ye]=(0,s.useState)(),[Se,we]=(0,s.useState)(!1),[Ne,Ce]=(0,s.useState)(""),[Pe,$e]=(0,s.useState)(void 0),[De,Fe]=(0,s.useState)(""),[ze,Be]=(0,s.useState)(""),Ue=(0,c.Z)(),Te=()=>{r(!t)},Ie=()=>{F(!$)},Oe=async()=>{T(!0),await Ue.get(`dapi/vendor/tender/${a.id_tender}`).then((e=>{O(e.data.data.perusahaan_yang_ikut)})).catch((e=>console.log(e))),T(!1)};(0,s.useEffect)((()=>{const e=null===I||void 0===I?void 0:I.filter((e=>"register"!==e.status)),n=null===I||void 0===I?void 0:I.filter((e=>"lulus_tahap_1"===e.status||"pemenang"===e.status)),s=null===I||void 0===I?void 0:I.filter((e=>"pemenang"===e.status));K(e),Y(n),G(e),ne("pra kualifikasi"===a.sistem_kualifikasi?n:e),re(s)}),[I]);const Ae=async(e,s)=>{ue(s),ce(!0);const t=await(0,P.Z)(e).then((e=>e.split(",")[1])).catch((e=>console.log(e)));await Ue.post(`dapi/vendor/tender/ba/${a.id_tender}`,{file:t,key:s}).then((()=>{(0,C.Z)("success","Berita Acara Penetapan Berhasil didupload"),n(),Oe()})).catch((()=>(0,C.Z)("error","Something went wrong"))),ue(),ce(!1)},Ke=()=>{ke(!0)};return(0,D.jsxs)(h.Z,{title:"Collapse",children:[M?(0,D.jsx)(d.Z,{type:"button",color:"primary",outline:!0,size:"sm",onClick:(()=>L(!M)).bind(null),style:{marginBottom:"1rem"},children:"Close"}):(0,D.jsx)(d.Z,{type:"button",color:"primary",outline:!0,size:"sm",onClick:async()=>{L(!0),Oe()},style:{marginBottom:"1rem"},children:"Details"}),(0,D.jsx)(u.Z,{isOpen:M,children:(0,D.jsx)(i.Z,{className:"border rounded-3",style:{fontSize:"14px"},children:z?(0,D.jsx)("div",{className:"d-flex justify-content-center py-4",children:"Loading.."}):(0,D.jsxs)(l.Z,{children:[(0,D.jsxs)(p.Z,{children:[(0,D.jsxs)(h.Z,{md:"6",children:[(0,D.jsx)("table",{width:"100%",children:(0,D.jsxs)("tbody",{children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"Lokasi Pengerjaan"}),(0,D.jsx)("td",{children:":"}),(0,D.jsx)("td",{className:"fw-bold",children:a.lokasi})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"Waktu Pendaftaran"}),(0,D.jsx)("td",{children:":"}),(0,D.jsxs)("td",{className:"fw-bold",children:[a.tgl_pendaftaran," s/d ",a.batas_pendaftaran]})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"Jenis Pengadaan"}),(0,D.jsx)("td",{children:":"}),(0,D.jsx)("td",{className:"fw-bold",style:{textTransform:"capitalize"},children:a.jenis_pengadaan})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"HPS"}),(0,D.jsx)("td",{children:":"}),(0,D.jsx)("td",{className:"fw-bold",children:(0,N.Z)(a.hps)})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"Nomor KBLI"}),(0,D.jsx)("td",{children:":"}),(0,D.jsx)("td",{className:"fw-bold",children:(0,D.jsx)("div",{className:"d-flex gap 1",children:Array.isArray(JSON.parse(a.kbli))?JSON.parse(a.kbli).map(((e,n)=>(0,D.jsxs)("span",{children:["all_kbli"===e?"Semua KBLI":e," ",n+1===JSON.parse(a.kbli).length?"":"|"," \xa0"]},e))):"null"})})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"Sistem Kualifikasi"}),(0,D.jsx)("td",{children:":"}),(0,D.jsx)("td",{className:"fw-bold",style:{textTransform:"capitalize"},children:a.sistem_kualifikasi})]})]})}),(0,D.jsx)(h.Z,{className:"mt-3",children:(0,D.jsxs)("table",{className:"w-100",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Perusahaan Yang Mendaftar"}),(0,D.jsx)("th",{children:"Tanggal Mendaftar"})]})}),(0,D.jsxs)("tbody",{children:[(null===I||void 0===I?void 0:I.length)>0?null===I||void 0===I?void 0:I.map(((e,n)=>(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"d-flex gap-2",children:[(0,D.jsxs)("span",{children:[n+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan,("umum"===a.owner&&"terverifikasi"!==e.detail.status_verifikasi_umum||"scm"===a.owner&&"terverifikasi"!==e.detail.status_verifikasi_scm)&&(0,D.jsx)(S.rU,{to:`/vendor/requests/check/${e.perusahaan_id}`,target:"blank",children:(0,D.jsx)(x.Z,{className:"bg-light-danger text-danger",outline:!0,children:"Need Approval"})})]})}),(0,D.jsx)("td",{children:(0,w.Z)(e.detail.created_at)})]},e.id_peserta))):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"No data."})}),(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(null===a.sistem_kualifikasi||"pasca kualifikasi"===a.sistem_kualifikasi)&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Perusahaan Yang Input Dokumen"}),(0,D.jsx)("th",{children:"Aksi"})]})}),(0,D.jsx)("tbody",{children:(null===A||void 0===A?void 0:A.length)>0?null===A||void 0===A?void 0:A.map(((e,a)=>(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"d-flex gap-2",children:[(0,D.jsxs)("span",{children:[a+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,D.jsx)("td",{children:(0,D.jsx)(S.rU,{onClick:()=>{ge(!0),Ce(`${e.detail.bentuk_usaha} ${e.detail.nama_perusahaan}`),$e(e),Be("")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta))):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"No data."})})})]})]})})]}),(0,D.jsx)(h.Z,{md:"6",children:(0,D.jsxs)("table",{className:"w-100",children:["pra kualifikasi"===a.sistem_kualifikasi&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Tahap I"}),(0,D.jsx)("th",{children:"Dokumen Penawaran"})]})}),(0,D.jsxs)("tbody",{children:[(null===A||void 0===A?void 0:A.length)>0?null===A||void 0===A?void 0:A.map(((e,a)=>(0,D.jsx)(s.Fragment,{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"d-flex gap-2",children:[(0,D.jsxs)("span",{children:[a+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,D.jsx)("td",{children:(0,D.jsx)(S.rU,{onClick:()=>{ge(!0),Ce(`${e.detail.bentuk_usaha} ${e.detail.nama_perusahaan}`),$e(e),Be("Tahap I")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta)},e.id_peserta))):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"No data."})}),(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Tahap II"}),(0,D.jsx)("th",{children:"Dokumen Penawaran"})]})}),(0,D.jsxs)("tbody",{children:[(null===H||void 0===H?void 0:H.length)>0?null===H||void 0===H?void 0:H.map(((e,n)=>(0,D.jsxs)(s.Fragment,{children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"d-flex gap-2",children:[(0,D.jsxs)("span",{children:[n+1,"."]}),e.detail.bentuk_usaha," ",e.detail.nama_perusahaan]})}),(0,D.jsx)("td",{children:(0,D.jsx)(S.rU,{onClick:()=>{ge(!0),Ce(`${e.detail.bentuk_usaha} ${e.detail.nama_perusahaan}`),$e(e),Be("Tahap II")},style:{textDecoration:"none"},children:"Cek Dokumen"})})]},e.id_peserta),n+1===(null===A||void 0===A?void 0:A.length)&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Status"}),(0,D.jsx)("th",{className:"fw-bold",children:"Berita Acara"})]}),null!==(null===a||void 0===a?void 0:a.upload_ba_seleksi)?(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(x.Z,{color:"warning",children:"Under Review"}):"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(x.Z,{color:"danger",children:(0,D.jsx)("button",{type:"button",style:{background:"none",border:"none",color:"white"},onClick:()=>{Ke(),Fe(a.catatan)},children:"Revisi"})}):(0,D.jsx)(x.Z,{color:"success",children:"Approved"})}),(0,D.jsx)("td",{children:null!==(null===a||void 0===a?void 0:a.upload_ba_seleksi)?(0,D.jsx)(D.Fragment,{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(S.rU,{to:`${U}vendor_file/${a.upload_ba_seleksi}`,target:"blank",children:"Download"}):"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?oe&&"upload_ba_seleksi"===he?"Uploding..":(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{htmlFor:`uploadBa${a.id_tender}`,className:"btn btn-outline-info btn-sm outline",children:"Upload"}),(0,D.jsx)(m.Z,{hidden:!0,id:`uploadBa${a.id_tender}`,type:"file",onChange:e=>{Ae(e.target.files[0],"upload_ba_seleksi")}})]}):(0,D.jsx)(S.rU,{to:`${U}vendor_file/${a.upload_ba_seleksi}`,target:"blank",children:"Download"})}):(0,D.jsx)("td",{children:oe&&"upload_ba_seleksi"===he?"Uploding..":(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{htmlFor:`uploadBa${a.id_tender}`,className:"btn btn-outline-info btn-sm outline",children:"Upload Penetapan"}),(0,D.jsx)(m.Z,{hidden:!0,id:`uploadBa${a.id_tender}`,type:"file",onChange:e=>{Ae(e.target.files[0],"upload_ba_seleksi")}})]})})})]}):(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("td",{children:oe&&"upload_ba_seleksi"===he?"Uploding..":(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{htmlFor:`uploadBaSeleksi${a.id_tender}`,className:"btn btn-outline-info btn-sm outline",children:"Upload Berita Acara"}),(0,D.jsx)(m.Z,{hidden:!0,id:`uploadBaSeleksi${a.id_tender}`,type:"file",onChange:e=>{Ae(e.target.files[0],"upload_ba_seleksi")}})]})})})]})]},e.id_peserta))):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{children:(0,D.jsx)(d.Z,{type:"button",size:"sm",color:"info",onClick:Te.bind(null),children:"Pilih Peserta"})})}),(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:"2",children:"\xa0"})})]}),(0,D.jsxs)(_.Z,{isOpen:t,toggle:Te.bind(null),centered:!0,size:"lg",children:[(0,D.jsx)(g.Z,{toggle:Te.bind(null),children:"Pilih Peserta Tahap II"}),(0,D.jsx)(v.Z,{children:0===(null===W||void 0===W?void 0:W.length)?(0,D.jsx)("div",{className:"text-center",children:"Belum ada perusahaan yang submit dokumen."}):(0,D.jsx)(y.ZP,{closeMenuOnSelect:!0,options:W,onChange:e=>V(e),isMulti:!0})}),(0,D.jsx)(k.Z,{children:0===(null===W||void 0===W?void 0:W.length)?(0,D.jsx)(d.Z,{color:"secondary",size:"sm",outline:!0,onClick:Te.bind(null),children:"Tutup"}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d.Z,{color:"primary",onClick:async()=>{ee(!0);const e=[];Q.map((a=>e.push(a.value))),await Ue.post(`dapi/vendor/tender/tahapdua/${a.id_tender}`,{list_peserta:e}).then((()=>{Oe(),(0,C.Z)("success","Peserta Tahap II berhasil dipilih")})).catch((()=>{(0,C.Z)("error","Something went wrong")})),r(!1),ee(!1)},disabled:X,children:X?"Menyimpan..":"Simpan"}),(0,D.jsx)(d.Z,{color:"secondary",onClick:Te.bind(null),children:"Cancel"})]})})]})]}),(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Penetapan Pemenang"}),(0,D.jsx)("th",{children:"Status"}),(0,D.jsx)("th",{children:"Berita Acara"})]})}),(0,D.jsx)("tbody",{children:(null===de||void 0===de?void 0:de.length)>0?(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("tr",{children:[(0,D.jsxs)("td",{children:[de[0].detail.bentuk_usaha," ",de[0].detail.nama_perusahaan]}),(0,D.jsx)("td",{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(x.Z,{color:"warning",children:"Under Review"}):"revisi_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(x.Z,{color:"danger",children:(0,D.jsx)("button",{type:"button",style:{background:"none",border:"none",color:"white"},onClick:()=>{Ke(),Fe(a.catatan)},children:"Revisi"})}):"approved_pemenang"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(x.Z,{color:"success",children:"Approved"}):"-"}),null!==(null===a||void 0===a?void 0:a.upload_ba_pemenang)?(0,D.jsx)("td",{children:"submit_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"submit_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?(0,D.jsx)(S.rU,{to:`${U}vendor_file/${a.upload_ba_pemenang}`,target:"blank",children:"Download"}):"revisi_pemenang"===(null===a||void 0===a?void 0:a.status_approval)||"revisi_tahap_2"===(null===a||void 0===a?void 0:a.status_approval)?oe&&"upload_ba_pemenang"===he?"Uploding..":(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{htmlFor:`uploadBa${a.id_tender}`,className:"btn btn-outline-info btn-sm outline",children:"Upload"}),(0,D.jsx)(m.Z,{hidden:!0,id:`uploadBa${a.id_tender}`,type:"file",onChange:e=>{Ae(e.target.files[0],"upload_ba_pemenang")}})]}):(0,D.jsx)(S.rU,{to:`${U}vendor_file/${a.upload_ba_pemenang}`,target:"blank",children:"Download"})}):(0,D.jsx)("td",{children:oe&&"upload_ba_pemenang"===he?"Uploding..":(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{htmlFor:`uploadBa${a.id_tender}`,className:"btn btn-outline-info btn-sm outline",children:"Upload Penetapan"}),(0,D.jsx)(m.Z,{hidden:!0,id:`uploadBa${a.id_tender}`,type:"file",onChange:e=>{Ae(e.target.files[0],"upload_ba_pemenang")}})]})})]})}):(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsx)(d.Z,{type:"button",size:"sm",color:"info",onClick:Ie.bind(null),children:"Pilih Pemenang"})}),(0,D.jsx)("td",{children:" - "}),(0,D.jsx)("td",{children:(0,D.jsx)("div",{children:(0,D.jsx)(d.Z,{type:"button",size:"sm",color:"info",outline:!0,disabled:!0,children:"Upload Penetapan"})})})]})})}),(0,D.jsxs)(_.Z,{isOpen:$,toggle:Ie.bind(null),centered:!0,size:"lg",children:[(0,D.jsx)(g.Z,{toggle:Ie.bind(null),children:"Pilih Pemenang"}),(0,D.jsx)(v.Z,{children:0===(null===ae||void 0===ae?void 0:ae.length)?(0,D.jsx)("div",{className:"text-center",children:"Belum ada list kandidat pemenang."}):(0,D.jsx)(y.ZP,{closeMenuOnSelect:!0,options:ae,onChange:e=>te(e)})}),(0,D.jsx)(k.Z,{children:0===(null===A||void 0===A?void 0:A.length)?(0,D.jsx)(d.Z,{color:"secondary",size:"sm",outline:!0,onClick:Ie.bind(null),children:"Tutup"}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d.Z,{color:"primary",onClick:async()=>{le(!0),await Ue.post(`dapi/vendor/tender/pemenang/${a.id_tender}`,{list_peserta:se.value}).then((()=>{(0,C.Z)("success","Pemenang Tender telah ditetapkan"),Oe()})).catch((()=>(0,C.Z)("error","Something went wrong"))),F(!1),le(!1)},disabled:ie,children:ie?"Menyimpan..":"Simpan"}),(0,D.jsx)(d.Z,{color:"secondary",onClick:Ie.bind(null),children:"Cancel"})]})})]})]})})]}),(0,D.jsx)("div",{className:"d-flex justify-content-end bg-light-secondary rounded-3 p-2 mt-4",children:(0,D.jsxs)("div",{className:"d-flex gap-3 ",children:[(0,D.jsx)("abbr",{title:"Edit Status",children:(0,D.jsx)(d.Z,{type:"button",size:"sm",color:"primary",outline:!0,onClick:()=>me(!0),children:"Edit Status"})}),(0,D.jsx)("abbr",{title:"Hapus Tender",children:(0,D.jsx)(d.Z,{type:"button",size:"sm",color:"danger",outline:!0,onClick:()=>{var e;e=a.id_tender,xe(!pe),q(e)},children:J&&E===a.id_tender?"Deleting..":(0,D.jsx)(o(),{icon:"delete",style:{fontSize:"14px"}})})})]})}),(0,D.jsxs)(_.Z,{isOpen:pe,centered:!0,children:[(0,D.jsx)(g.Z,{children:"Konfirmasi"}),(0,D.jsx)(v.Z,{children:(0,D.jsx)("div",{className:"d-flex flex-row gap-2",children:"Apakah Anda yakin akan menghapus data pengadaan ini?"})}),(0,D.jsxs)(k.Z,{children:[J?(0,D.jsx)(d.Z,{type:"button",color:"success",disabled:!0,children:(0,D.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,D.jsx)(b.Z,{size:"sm"}),"Deleting.."]})}):(0,D.jsx)(d.Z,{type:"button",color:"danger",onClick:()=>(async e=>{R(!0),await Ue.post(`dapi/vendor/tender/delete/${e}`).then((()=>{(0,C.Z)("success","Tender berhasil dihapus"),n()})).catch((()=>(0,C.Z)("error","Something went wrong"))),R(!1)})(a.id_tender),disabled:J,size:"sm",children:"Ya"}),(0,D.jsx)(d.Z,{color:"secondary",size:"sm",outline:!0,onClick:()=>xe(!1),children:"Batal"})]})]}),(0,D.jsxs)(_.Z,{isOpen:ve,centered:!0,fade:!1,children:[(0,D.jsx)(g.Z,{children:"Catatan Revisi"}),(0,D.jsx)(v.Z,{children:(0,D.jsx)("p",{children:De})}),(0,D.jsx)(k.Z,{children:(0,D.jsx)(d.Z,{color:"secondary",size:"sm",outline:!0,onClick:()=>ke(!1),children:"Tutup"})})]}),(0,D.jsxs)(_.Z,{isOpen:je,centered:!0,children:[(0,D.jsx)(g.Z,{children:"Status Tender"}),(0,D.jsxs)(f.Z,{onSubmit:async e=>{e.preventDefault(),we(!0);const s={status_tender:null===be||void 0===be?void 0:be.status_tender,file_document:null===Ze||void 0===Ze?void 0:Ze.status_dokumen};await Ue.post(`dapi/vendor/tender/status-update/${a.id_tender}`,s,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{n(),me(!1),we(!1),(0,C.Z)("success","Tender status updated successfully")})).catch((()=>{me(!1),we(!1),(0,C.Z)("error","Action failed.")}))},children:[(0,D.jsxs)(v.Z,{children:[(0,D.jsxs)(Z.Z,{children:[(0,D.jsx)(j.Z,{for:"status_tender",children:"Status"}),(0,D.jsxs)(m.Z,{type:"select",id:"status_tender",name:"status_tender",onChange:e=>(e=>{fe((a=>({...a,[e.target.id]:e.target.value})))})(e),defaultValue:null===a||void 0===a?void 0:a.status_tender,children:[(0,D.jsx)("option",{value:"buka",children:"Buka"}),(0,D.jsx)("option",{value:"tutup",children:"Tutup"}),(0,D.jsx)("option",{value:"batal",children:"Batal"})]})]}),(0,D.jsxs)(Z.Z,{children:[(0,D.jsx)(j.Z,{for:"status_dokumen",children:"Upload Dokumen"}),(0,D.jsx)(m.Z,{type:"file",id:"status_dokumen",name:"status_dokumen",accept:"application/pdf",onChange:e=>(e=>{ye((a=>({...a,[e.target.id]:e.target.files[0]})))})(e)}),(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("small",{className:"text-muted",children:"File format .pdf (max. 10mb)"}),(0,D.jsx)("small",{className:"text-muted",children:(0,D.jsx)("i",{children:"Opsional"})})]})]})]}),(0,D.jsxs)(k.Z,{children:[(0,D.jsx)(d.Z,{type:"submit",color:"primary",size:"sm",disabled:Se,children:Se?"Menyimpan..":"Submit"}),(0,D.jsx)(d.Z,{color:"secondary",size:"sm",outline:!0,onClick:()=>me(!1),children:"Batal"})]})]})]}),(0,D.jsx)(B,{modal6:_e,toggle6:()=>{ge(!_e)},tender:a,selectedCompanyName:Ne,selectedCompanyData:Pe,selectedStage:ze})]})})})]})},I=()=>{const e=(0,c.Z)(),{data:a,refetch:n}=(0,t.a)({queryKey:["cat"],queryFn:()=>e.get("dapi/vendor/tender").then((e=>e.data.data))});return(0,D.jsx)(D.Fragment,{children:0===(null===a||void 0===a?void 0:a.length)?(0,D.jsx)(i.Z,{className:"mb-2 rounded-3",children:(0,D.jsx)(l.Z,{children:(0,D.jsxs)("div",{className:"d-flex align-items-center gap-1 w-50",children:[(0,D.jsx)("div",{className:"d-flex align-items-center",style:{width:"30px",color:"#21C1D6"},children:(0,D.jsx)(o(),{icon:"information"})}),(0,D.jsx)("span",{children:"Belum ada data tender"})]})})}):null===a||void 0===a?void 0:a.map((e=>(0,D.jsx)(i.Z,{className:"mb-2 rounded-3",children:(0,D.jsxs)(l.Z,{children:[(0,D.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[(0,D.jsxs)("div",{className:"d-flex flex-column",children:[(0,D.jsx)("strong",{children:e.nama_tender}),(0,D.jsxs)("div",{className:"d-flex gap-2",children:[(0,D.jsxs)("small",{children:[" ","Sistem Kualifikasi: ",(0,D.jsx)("span",{className:"fw-bold",children:e.sistem_kualifikasi})]})," ","|",(0,D.jsxs)("small",{children:[" ","Metode: ",(0,D.jsx)("span",{className:"fw-bold",children:e.metode_pengadaan})]})," ","|",(0,D.jsxs)("small",{children:[" ","Status: ",(0,D.jsx)("span",{className:"fw-bold",children:e.status_tender})]})]})]}),(0,D.jsx)("div",{children:(0,D.jsx)(d.Z,{href:`vendor/update-tender/${e.id_tender}`,color:"primary",size:"sm",disabled:!0,children:"Edit Tender"})})]}),(0,D.jsx)(T,{tender:e,action:n})]})},null===e||void 0===e?void 0:e.id_tender)))})}},90838:(e,a,n)=>{n.d(a,{Z:()=>s});const s=e=>{if(e){const a=new Date,n=new Date(e),s=n.toDateString()===a.toDateString()?"Today":n.toDateString(),t=n.toLocaleString().split(",")[1];return`${s}, ${t.split(":")[0]}:${t.split(":")[1]} ${t.split(" ")[2]||""}`}return e}},37493:(e,a,n)=>{n.d(a,{Z:()=>s});const s=e=>new Promise((a=>{let n="";const s=new FileReader;s.readAsDataURL(e),s.onload=()=>{n=s.result,a(n)}}))},23606:(e,a,n)=>{n.d(a,{Z:()=>s});const s=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e)}}]);
//# sourceMappingURL=2416.77dfae76.chunk.js.map