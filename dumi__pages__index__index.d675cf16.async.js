"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8863],{60198:function(M,x,i){i.d(x,{Z:function(){return a}});var C=i(1413),y=i(67294),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},k=p,e=i(13401),b=function(D,v){return y.createElement(e.Z,(0,C.Z)((0,C.Z)({},D),{},{ref:v,icon:k}))};b.displayName="BellOutlined";var a=y.forwardRef(b)},42365:function(M,x,i){i.d(x,{Z:function(){return a}});var C=i(1413),y=i(67294),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"}}]},name:"customer-service",theme:"outlined"},k=p,e=i(13401),b=function(D,v){return y.createElement(e.Z,(0,C.Z)((0,C.Z)({},D),{},{ref:v,icon:k}))};b.displayName="CustomerServiceOutlined";var a=y.forwardRef(b)},32319:function(M,x,i){i.d(x,{Z:function(){return a}});var C=i(1413),y=i(67294),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},k=p,e=i(13401),b=function(D,v){return y.createElement(e.Z,(0,C.Z)((0,C.Z)({},D),{},{ref:v,icon:k}))};b.displayName="FolderOutlined";var a=y.forwardRef(b)},97847:function(M,x,i){i.d(x,{Z:function(){return y}});var C=i(28257);function y(p){var k=(0,C.bU)(),e=k.id,b=e==="zh-CN"?"cn":"en";return[p==null?void 0:p[b],b]}},58480:function(M,x,i){i.d(x,{W:function(){return e}});var C=i(5574),y=i.n(C),p=i(67294);function k(b){if(typeof window!="undefined"){var a=document.createElement("div");a.style.display="none",document.body.appendChild(a),b.forEach(function(f){var D=new Image;D.src=f,a.appendChild(D)})}}function e(){var b=p.useState({}),a=y()(b,2),f=a[0],D=a[1],v=p.useState(!1),O=y()(v,2),I=O[0],T=O[1];return p.useEffect(function(){Object.keys(f!=null?f:{}).length===0&&typeof fetch!="undefined"&&(T(!0),fetch("https://render.alipay.com/p/h5data/antd4-config_website-h5data.json").then(function(z){return z.json()}).then(function(z){D(z),T(!1)}))},[]),[f,I]}},94796:function(M,x,i){i.r(x),i.d(x,{default:function(){return rt}});var C=i(5574),y=i.n(C),p=i(67294),k=i(28257),e=i(13946),b=i(97847),a=i(13669),f=i(52180),D=i(97857),v=i.n(D);function O(o){var r=o.children,t=o.style,d=o.disabled,s=d?{}:{position:"relative",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(25px)",zIndex:1};return(0,e.tZ)("div",{className:"site-mask",style:v()(v()({position:"relative"},t),s)},r)}function I(o){var r=o.id,t=o.title,d=o.titleColor,s=o.description,n=o.children,u=o.decoration,g=o.background,l=o.collapse,m=(0,f.Z)(),c=m.token,h=l?{}:{maxWidth:1208,marginInline:"auto",boxSizing:"border-box",paddingInline:c.marginXXL},Z=(0,e.tZ)(p.Fragment,null,(0,e.tZ)("div",{style:{textAlign:"center"}},(0,e.tZ)(a.Typography.Title,{id:r,level:1,style:{fontWeight:900,color:d,fontFamily:"AliPuHui, ".concat(c.fontFamily)}},t),(0,e.tZ)(a.Typography.Paragraph,{style:{marginBottom:c.marginFarXS,color:d}},s)),(0,e.tZ)("div",{style:h},n?(0,e.tZ)("div",null,n):(0,e.tZ)("div",{style:{borderRadius:c.borderRadiusLG,minHeight:300,background:"#e9e9e9"}})));return(0,e.tZ)("div",{style:{position:"relative",background:g,transition:"all ".concat(c.motionDurationSlow)}},(0,e.tZ)("div",{style:{position:"absolute",inset:0}},u),(0,e.tZ)(O,{disabled:!!g,style:{paddingBlock:c.marginFarSM}},Z))}var T=i(63881),z={cn:{slogan:"\u52A9\u529B\u8BBE\u8BA1\u5F00\u53D1\u8005\u300C\u66F4\u7075\u6D3B\u300D\u5730\u642D\u5EFA\u51FA\u300C\u66F4\u7F8E\u300D\u7684\u4EA7\u54C1\uFF0C\u8BA9\u7528\u6237\u300C\u5FEB\u4E50\u5DE5\u4F5C\u300D\uFF5E",start:"\u5F00\u59CB\u4F7F\u7528",designLanguage:"\u8BBE\u8BA1\u8BED\u8A00"},en:{slogan:"Help designers/developers building beautiful products more flexible and working with happiness",start:"Getting Started",designLanguage:"Design Language"}};function ee(o){var r=o.children,t=(0,b.Z)(z),d=y()(t,2),s=d[0],n=d[1],u=(0,k.TH)(),g=u.pathname,l=u.search,m=(0,f.Z)(),c=m.token,h=T.KE(g);return(0,e.tZ)(p.Fragment,null,(0,e.tZ)("div",{style:{height:320,background:"#77C6FF",display:"flex",flexWrap:"nowrap",justifyContent:"center"}},(0,e.tZ)("div",{style:{backgroundImage:"url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*6d50SboraPIAAAAAAAAAAAAAARQnAQ)",flex:"auto",backgroundRepeat:"repeat-x",backgroundPosition:"100% 0",backgroundSize:"auto 100%"}}),(0,e.tZ)("video",{style:{height:"100%",objectFit:"contain"},autoPlay:!0,muted:!0,loop:!0},(0,e.tZ)("source",{src:"https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ",type:"video/webm"}),(0,e.tZ)("source",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/file/A*XYYNQJ3NbmMAAAAAAAAAAAAAARQnAQ",type:"video/mp4"})),(0,e.tZ)("div",{style:{backgroundImage:"url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*8ILtRrQlVDMAAAAAAAAAAAAAARQnAQ)",flex:"auto",backgroundRepeat:"repeat-x",backgroundPosition:"0 0",backgroundSize:"auto 100%",marginLeft:-1}})),(0,e.tZ)("div",{style:{position:"relative",background:"#fff"}},(0,e.tZ)("img",{style:{position:"absolute",right:0,top:240,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/b3b8dc41-dce8-471f-9d81-9a0204f27d03.svg"}),(0,e.tZ)(O,{style:{textAlign:"center",paddingTop:c.marginFar-16,paddingBottom:c.marginFarSM}},(0,e.tZ)("img",{style:{position:"absolute",left:0,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"}),(0,e.tZ)("img",{style:{position:"absolute",right:120,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"}),(0,e.tZ)(a.Typography.Title,{level:1,style:{fontFamily:"AliPuHui, ".concat(c.fontFamily),fontSize:c.fontSizes[9],lineHeight:c.lineHeights[9],fontWeight:900,marginBottom:c.marginMD}},"Ant Design 5.0"),(0,e.tZ)(a.Typography.Paragraph,{style:{fontSize:c.fontSizeHeading5,lineHeight:c.lineHeightHeading5,marginBottom:c.marginMD*2}},(0,e.tZ)("div",null,s.slogan)),(0,e.tZ)(a.Space,{size:"middle",style:{marginBottom:c.marginFar}},(0,e.tZ)(k.rU,{to:T.J1("/components/overview/",h,l)},(0,e.tZ)(a.Button,{size:"large",type:"primary"},s.start)),(0,e.tZ)(k.rU,{to:T.J1("/docs/spec/introduce/",h,l)},(0,e.tZ)(a.Button,{size:"large"},s.designLanguage))),r)))}var te=i(58480),ae=i(13769),oe=i.n(ae),F=i(10274),Y=i(32319),re=i(60198),Q=i(25035),ne=i(73403),K={default:"https://gw.alipayobjects.com/zos/bmw-prod/ae669a89-0c65-46db-b14b-72d1c7dd46d6.svg",dark:"https://gw.alipayobjects.com/zos/bmw-prod/0f93c777-5320-446b-9bb7-4d4b499f346d.svg",lark:"https://gw.alipayobjects.com/zos/bmw-prod/3e899b2b-4eb4-4771-a7fc-14c7ff078aed.svg",comic:"https://gw.alipayobjects.com/zos/bmw-prod/ed9b04e8-9b8d-4945-8f8a-c8fc025e846f.svg"},ie={cn:{default:"\u9ED8\u8BA4",dark:"\u6697\u9ED1",lark:"\u77E5\u8BC6\u534F\u4F5C",comic:"\u6843\u82B1\u7F18"},en:{default:"Default",dark:"Dark",lark:"Document",comic:"Blossom"}},le=function(){var r=(0,f.Z)(),t=r.token;return{themeCard:(0,e.iv)("border-radius:",t.borderRadius,"px;cursor:pointer;transition:all ",t.motionDurationSlow,";overflow:hidden;img{vertical-align:top;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12),0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05);}&:hover{transform:scale(1.04);}",""),themeCardActive:(0,e.iv)("box-shadow:0 0 0 1px ",t.colorBgContainer,",0 0 0 ",t.controlOutlineWidth*2+1,"px ",t.colorPrimary,";&,&:hover{transform:scale(1);}","")}};function se(o){var r=o.value,t=o.onChange,d=(0,f.Z)(),s=d.token,n=le(),u=(0,b.Z)(ie),g=y()(u,1),l=g[0];return(0,e.tZ)(a.Space,{size:s.paddingLG},Object.keys(K).map(function(m){var c=K[m];return(0,e.tZ)(a.Space,{key:m,direction:"vertical",align:"center"},(0,e.tZ)("div",{css:[n.themeCard,r===m&&n.themeCardActive,"",""]},(0,e.tZ)("img",{src:c,onClick:function(){t==null||t(m)}})),(0,e.tZ)("span",null,l[m]))}))}var ce=i(19632),de=i.n(ce),L="#1677FF",U="#ED4192",N=[{color:L,url:null},{color:"#5A54F9",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ"},{color:"#9E339F",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ"},{color:U,url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ"},{color:"#E0282E",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ"},{color:"#F4801A",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ"},{color:"#F2BD27",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ"},{color:"#00B96B",url:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ"}],ue=N.map(function(o){var r=o.color;return r}),me=33;function H(o){if(!o)return null;var r=new F.C(o).toRgb(),t=N.map(function(s){var n=s.color,u=new F.C(n).toRgb(),g=Math.sqrt(Math.pow(u.r-r.r,2)+Math.pow(u.g-r.g,2)+Math.pow(u.b-r.b,2));return{color:n,dist:g}}),d=t.sort(function(s,n){return s.dist-n.dist})[0];return d.dist<=me?d.color:null}function ge(o){var r,t=H(o);return t?((r=N.find(function(d){return d.color===t}))===null||r===void 0?void 0:r.url)||"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*CLp0Qqc11AkAAAAAAAAAAAAAARQnAQ":null}var pe=i(41564),ve=function(){var r=(0,f.Z)(),t=r.token;return{color:(0,e.iv)("width:",t.controlHeightLG/2,"px;height:",t.controlHeightLG/2,"px;border-radius:100%;cursor:pointer;transition:all ",t.motionDurationFast,";",""),colorActive:(0,e.iv)("box-shadow:0 0 0 1px ",t.colorBgContainer,",0 0 0 ",t.controlOutlineWidth*2+1,"px ",t.colorPrimary,";","")}},he=function(r){var t=r.color,d=r.onChange,s=(0,p.useState)(t),n=y()(s,2),u=n[0],g=n[1];return(0,p.useEffect)(function(){var l=setTimeout(function(){d==null||d(u)},200);return function(){return clearTimeout(l)}},[u]),(0,p.useEffect)(function(){g(t)},[t]),(0,e.tZ)(pe.Z,{color:u,onChange:g})};function ye(o){var r=o.value,t=o.onChange,d=ve(),s=p.useMemo(function(){var n=new F.C(r).toRgbString(),u=!1,g=ue.map(function(l){var m=new F.C(l).toRgbString(),c=m===n;return u=u||c,{color:l,active:c,picker:!1}});return[].concat(de()(g),[{color:"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",picker:!0,active:!u}])},[r]);return(0,e.tZ)(a.Space,{size:"large"},(0,e.tZ)(a.Input,{value:r,onChange:function(u){t==null||t(u.target.value)},style:{width:120}}),(0,e.tZ)(a.Space,{size:"middle"},s.map(function(n){var u=n.color,g=n.active,l=n.picker,m=(0,e.tZ)("div",{key:u,css:[d.color,g&&d.colorActive,"",""],style:{background:u},onClick:function(){l||t==null||t(u)}});return l&&(m=(0,e.tZ)(a.Popover,{key:u,overlayInnerStyle:{padding:0},content:(0,e.tZ)(he,{color:r||"",onChange:function(h){return t==null?void 0:t(h)}}),trigger:"click",showArrow:!1},m)),m})))}function fe(o){var r=o.value,t=o.onChange;return(0,e.tZ)(a.Space,{size:"large"},(0,e.tZ)(a.InputNumber,{value:r,onChange:t,style:{width:120},min:0,formatter:function(s){return"".concat(s,"px")},parser:function(s){return s&&parseFloat(s)}}),(0,e.tZ)(a.Slider,{tooltip:{open:!1},style:{width:128},min:0,value:r,max:20,onChange:t}))}function be(o){var r=o.colorPrimary,t=o.isLight,d=(0,f.Z)(),s=d.token,n=p.useMemo(function(){return H(r)},[r]),u={transition:"all ".concat(s.motionDurationSlow),position:"absolute",left:0,top:0,height:"100%",width:"100%"};return(0,e.tZ)(p.Fragment,null,N.map(function(g){var l=g.color,m=g.url;return m?(0,e.tZ)("img",{key:l,style:v()(v()({},u),{},{opacity:t&&n===l?1:0,objectFit:"cover",objectPosition:"right top"}),src:m}):null}))}var Ae=["compact","themeType"];function ut(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var Ze=a.Layout.Header,ke=a.Layout.Content,Se=a.Layout.Sider,Ce=function(){return null},xe={cn:{themeTitle:"\u5B9A\u5236\u4E3B\u9898\uFF0C\u968F\u5FC3\u6240\u6B32",themeDesc:"Ant Design 5.0 \u5F00\u653E\u66F4\u591A\u6837\u5F0F\u7B97\u6CD5\uFF0C\u8BA9\u4F60\u5B9A\u5236\u4E3B\u9898\u66F4\u7B80\u5355",customizeTheme:"\u5B9A\u5236\u4E3B\u9898",myTheme:"\u6211\u7684\u4E3B\u9898",titlePrimaryColor:"\u4E3B\u8272",titleBorderRadius:"\u5706\u89D2",titleCompact:"\u5BBD\u677E\u5EA6",default:"\u9ED8\u8BA4",compact:"\u7D27\u51D1",titleTheme:"\u4E3B\u9898",light:"\u4EAE\u8272",dark:"\u6697\u9ED1",toDef:"\u6DF1\u5EA6\u5B9A\u5236",toUse:"\u53BB\u4F7F\u7528"},en:{themeTitle:"Flexible theme customization",themeDesc:"Ant Design 5.0 enable extendable algorithm, make custom theme easier",customizeTheme:"Customize Theme",myTheme:"My Theme",titlePrimaryColor:"Primary Color",titleBorderRadius:"Border Radius",titleCompact:"Compact",titleTheme:"Theme",default:"Default",compact:"Compact",light:"Light",dark:"Dark",toDef:"More",toUse:"Apply"}},De={name:"8bavv5",styles:"width:800px;margin:0 auto"},Te={name:"1gw69wa",styles:"background:transparent!important"},we={name:"1vw22wg",styles:"img{transform:translate3d(-30px, 0, 0);}"},Fe={name:"11ntjqy",styles:"width:30px;height:30px;overflow:hidden;img{width:30px;height:30px;vertical-align:top;}"},Le={name:"18kdqk9",styles:"background:rgba(200, 200, 200, 0.3)"},Re={name:"a8v32p",styles:"border-bottom-color:rgba(255, 255, 255, 0.1)"},Pe={name:"1o3nkn",styles:"margin-left:auto"},Be={name:"1bnueyz",styles:"background:rgba(240, 242, 245, 0.65)"},Me={name:"1bnueyz",styles:"background:rgba(240, 242, 245, 0.65)"},Oe={name:"12y3p7q",styles:"background:#000"},Ie={name:"640wew",styles:"backdrop-filter:blur(10px);background:rgba(247, 247, 247, 0.5)"},ze=function(){var r=(0,f.Z)(),t=r.token;return{demo:(0,e.iv)("overflow:hidden;background:rgba(240, 242, 245, 0.25);backdrop-filter:blur(50px);box-shadow:0 2px 10px 2px rgba(0, 0, 0, 0.1);transition:all ",t.motionDurationSlow,";",""),otherDemo:Ie,darkDemo:Oe,larkDemo:Me,comicDemo:Be,menu:Pe,darkSideMenu:(0,e.iv)("",""),header:(0,e.iv)("display:flex;align-items:center;border-bottom:1px solid ",t.colorSplit,";padding-inline:",t.paddingLG,"px!important;height:",t.controlHeightLG*1.2,"px;line-height:",t.controlHeightLG*1.2,"px;",""),headerDark:Re,avatar:(0,e.iv)("width:",t.controlHeight,"px;height:",t.controlHeight,"px;border-radius:100%;background:rgba(240, 240, 240, 0.75);",""),avatarDark:Le,logo:(0,e.iv)("display:flex;align-items:center;column-gap:",t.padding,"px;h1{font-weight:400;font-size:16px;line-height:1.5;}",""),logoImg:Fe,logoImgPureColor:we,transBg:Te,form:De}},$=[{key:"Design Values",label:"Design Values"},{key:"Global Styles",label:"Global Styles"},{key:"Themes",label:"Themes"},{key:"DesignPatterns",label:"Design Patterns"}],je=[{key:"Design",label:"Design",icon:(0,e.tZ)(Y.Z,null),children:$},{key:"Development",label:"Development",icon:(0,e.tZ)(Y.Z,null)}];function Ee(o,r){if(!r)return"#FFF";var t=new F.C(o),d=H(o);switch(d){case L:case U:case"#F2BD27":return;default:return t.toHsl().l<.7?"#FFF":void 0}}var X={themeType:"default",colorPrimary:"#1677FF",borderRadius:6,compact:"default"},Ne={default:{},dark:{borderRadius:2},lark:{colorPrimary:"#00B96B",borderRadius:4},comic:{colorPrimary:U,borderRadius:16}};function He(){var o=ze(),r=(0,f.Z)(),t=r.token,d=(0,b.Z)(xe),s=y()(d,1),n=s[0],u=p.useState(X),g=y()(u,2),l=g[0],m=g[1],c=function(V,dt){m(dt)},h=l.compact,Z=l.themeType,R=oe()(l,Ae),A=Z!=="dark",E=a.Form.useForm(),P=y()(E,1),B=P[0],G=p.useMemo(function(){var S=[A?a.theme.defaultAlgorithm:a.theme.darkAlgorithm];return h==="compact"&&S.push(a.theme.compactAlgorithm),S},[A,h]);p.useEffect(function(){var S=v()(v()({},X),{},{themeType:Z},Ne[Z]);m(S),B.setFieldsValue(S)},[Z]);var w=H(l.colorPrimary),nt=p.useMemo(function(){var S="transparent",V=a.theme.defaultAlgorithm(v()(v()({},a.theme.defaultConfig.token),{},{colorPrimary:l.colorPrimary}));return Z==="dark"?S="#393F4A":w===L?S="#F5F8FF":S=V.colorPrimaryHover,[S,V.colorPrimaryBgHover]},[Z,w,l.colorPrimary]),q=y()(nt,2),it=q[0],lt=q[1],st=p.useMemo(function(){var S=new F.C(l.colorPrimary).toHsl();return S.l=Math.min(S.l,.7),new F.C(S).toHexString()},[l.colorPrimary]),ct=(0,e.tZ)(a.ConfigProvider,{theme:{token:v()(v()({},R),A?{}:{}),hashed:!0,algorithm:G,components:{Slider:{},Card:A?{}:{},Layout:A?{colorBgHeader:"transparent",colorBgBody:"transparent"}:{},Menu:A?{colorItemBg:"transparent",colorSubItemBg:"transparent",colorActiveBarWidth:0}:{}}}},(0,e.tZ)(Ce,null),(0,e.tZ)("div",{css:[o.demo,A&&w!==L&&o.otherDemo,!A&&o.darkDemo,"",""],style:{borderRadius:l.borderRadius}},(0,e.tZ)(a.Layout,{css:o.transBg},(0,e.tZ)(Ze,{css:[o.header,o.transBg,!A&&o.headerDark,"",""]},(0,e.tZ)("div",{css:o.logo},(0,e.tZ)("div",{css:[o.logoImg,w!==L&&o.logoImgPureColor,"",""]},(0,e.tZ)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",style:{filter:w===L?void 0:"drop-shadow(30px 0 0 ".concat(st,")")}})),(0,e.tZ)("h1",null,"Ant Design 5.0")),(0,e.tZ)(a.Space,{css:o.menu,size:"middle"},(0,e.tZ)(re.Z,null),(0,e.tZ)(Q.Z,null),(0,e.tZ)("div",{css:[o.avatar,Z==="dark"&&o.avatarDark,"",""],style:{backgroundColor:lt,backgroundImage:"url(".concat(ge(w),")"),backgroundSize:"cover",boxShadow:"0 0 2px rgba(0, 0, 0, 0.2)"}}))),(0,e.tZ)(a.Layout,{css:o.transBg},(0,e.tZ)(Se,{css:o.transBg,width:200,className:"site-layout-background"},(0,e.tZ)(a.Menu,{mode:"inline",css:[o.transBg,!A&&o.darkSideMenu,"",""],selectedKeys:["Themes"],openKeys:["Design"],style:{height:"100%",borderRight:0},items:je})),(0,e.tZ)(a.Layout,{css:o.transBg,style:{padding:"0 24px 24px"}},(0,e.tZ)(a.Breadcrumb,{style:{margin:"16px 0"}},(0,e.tZ)(a.Breadcrumb.Item,null,(0,e.tZ)(ne.Z,null)),(0,e.tZ)(a.Breadcrumb.Item,{overlay:(0,e.tZ)(a.Menu,{items:$})},"Design"),(0,e.tZ)(a.Breadcrumb.Item,null,"Themes")),(0,e.tZ)(ke,null,(0,e.tZ)(a.Typography.Title,{level:2},n.customizeTheme),(0,e.tZ)(a.Card,{title:n.myTheme,extra:(0,e.tZ)(a.Space,null,(0,e.tZ)(a.Button,{type:"default"},n.toDef),(0,e.tZ)(a.Button,{type:"primary"},n.toUse))},(0,e.tZ)(a.Form,{form:B,initialValues:l,onValuesChange:c,labelCol:{span:4},wrapperCol:{span:20},css:o.form},(0,e.tZ)(a.Form.Item,{label:n.titleTheme,name:"themeType"},(0,e.tZ)(se,null)),(0,e.tZ)(a.Form.Item,{label:n.titlePrimaryColor,name:"colorPrimary"},(0,e.tZ)(ye,null)),(0,e.tZ)(a.Form.Item,{label:n.titleBorderRadius,name:"borderRadius"},(0,e.tZ)(fe,null)),(0,e.tZ)(a.Form.Item,{label:n.titleCompact,name:"compact"},(0,e.tZ)(a.Radio.Group,null,(0,e.tZ)(a.Radio,{value:"default"},n.default),(0,e.tZ)(a.Radio,{value:"compact"},n.compact))))))))))),W={position:"absolute"};return(0,e.tZ)(I,{title:n.themeTitle,titleColor:Ee(l.colorPrimary,A),description:n.themeDesc,id:"flexible",background:it,decoration:(0,e.tZ)(p.Fragment,null,(0,e.tZ)("div",{style:{transition:"all ".concat(t.motionDurationSlow),opacity:A&&w===L?1:0}},(0,e.tZ)("img",{style:v()(v()({},W),{},{left:"50%",transform:"translate3d(-900px, 0, 0)",top:-100,height:500}),src:"https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg"}),(0,e.tZ)("img",{style:v()(v()({},W),{},{right:"50%",transform:"translate3d(750px, 0, 0)",bottom:-100,height:287}),src:"https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg"})),(0,e.tZ)("div",{style:{transition:"all ".concat(t.motionDurationSlow),opacity:!A||!w?1:0}},(0,e.tZ)("img",{style:v()(v()({},W),{},{left:0,top:-100,height:500}),src:"https://gw.alipayobjects.com/zos/bmw-prod/a213184a-f212-4afb-beec-1e8b36bb4b8a.svg"}),(0,e.tZ)("img",{style:v()(v()({},W),{},{right:0,bottom:-100,height:287}),src:"https://gw.alipayobjects.com/zos/bmw-prod/bb74a2fb-bff1-4d0d-8c2d-2ade0cd9bb0d.svg"})),(0,e.tZ)(be,{isLight:A,colorPrimary:l.colorPrimary}))},ct)}var Ge=function(){var r=(0,f.Z)(),t=r.token;return{card:(0,e.iv)("border:",t.lineWidth,"px solid ",t.colorBorderSecondary,";border-radius:",t.borderRadiusLG,"px;padding-block:",t.paddingMD,"px;padding-inline:",t.paddingLG,"px;flex:1 1 0;width:33%;display:flex;flex-direction:column;align-items:stretch;text-decoration:none;transition:all ",t.motionDurationSlow,";background:",t.colorBgContainer,";&:hover{box-shadow:",t.boxShadowCard,";}","")}};function We(o){var r=o.extras,t=r===void 0?[]:r,d=o.icons,s=d===void 0?[]:d,n=Ge(),u=t.length===0?Array(3).fill(null):t.slice(0,3),g=(0,f.Z)(),l=g.token;return(0,e.tZ)("div",{style:{maxWidth:1208,marginInline:"auto",boxSizing:"border-box",paddingInline:l.marginXXL,display:"flex",columnGap:l.paddingMD*2,alignItems:"stretch",textAlign:"start"}},u.map(function(m,c){if(!m)return(0,e.tZ)(a.Skeleton,{key:c});var h=s.find(function(Z){return Z.name===m.source});return(0,e.tZ)("a",{key:c,href:m.href,target:"_blank",css:n.card},(0,e.tZ)(a.Typography.Title,{level:5},m.title),(0,e.tZ)(a.Typography.Paragraph,{type:"secondary",style:{flex:"auto"}},m.description),(0,e.tZ)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,e.tZ)(a.Typography.Text,null,m.date),h&&(0,e.tZ)("img",{src:h.href,style:{height:l.fontSize}})))}))}var Qe=i(27484),j=i.n(Qe),J=i(42365),_=i(98165);function mt(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var Ue="Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",Ve="Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",Ye={cn:{yesterday:"\u6628\u5929",lastWeek:"\u4E0A\u5468",lastMonth:"\u4E0A\u6708",lastYear:"\u53BB\u5E74",new:"\u65B0\u589E",update:"\u66F4\u65B0",sampleContent:Ve,inProgress:"\u8FDB\u884C\u4E2D",success:"\u6210\u529F",taskFailed:"\u4EFB\u52A1\u5931\u8D25",tour:"\u6F2B\u6E38\u5BFC\u89C8\u5E2E\u52A9\u7528\u6237\u5BF9\u65B0\u52A0\u7684\u529F\u80FD\u8FDB\u884C\u5FEB\u901F\u4E86\u89E3"},en:{yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:Ue,inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."}},Ke={name:"zo0vrf",styles:"position:absolute;width:120px;height:120px;background:#1677ff;border-radius:50%;filter:blur(40px);opacity:0.1"},$e=function(){var r=(0,f.Z)(),t=r.token;return{card:(0,e.iv)("border-radius:",t.borderRadius,"px;background:#f5f8ff;padding:",t.paddingXL,"px;flex:none;overflow:hidden;position:relative;display:flex;flex-direction:column;align-items:stretch;>*{flex:none;}",""),cardCircle:Ke}};function Xe(){var o=(0,f.Z)(),r=o.token,t=$e(),d=(0,b.Z)(Ye),s=y()(d,1),n=s[0],u=p.useMemo(function(){return[{title:"Modal",type:"update",node:(0,e.tZ)(a.Modal._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",width:300},n.sampleContent)},{title:"DatePicker",type:"update",node:(0,e.tZ)(a.DatePicker._InternalPanelDoNotUseOrYouWillBeFired,{showToday:!1,presets:[{label:n.yesterday,value:j()().add(-1,"d")},{label:n.lastWeek,value:j()().add(-7,"d")},{label:n.lastMonth,value:j()().add(-1,"month")},{label:n.lastYear,value:j()().add(-1,"year")}],value:j()("2022-11-18 14:00:00")})},{title:"Progress",type:"update",node:(0,e.tZ)(a.Space,{direction:"vertical"},(0,e.tZ)(a.Space,null,(0,e.tZ)(a.Progress,{type:"circle",trailColor:"#e6f4ff",percent:60,width:14}),n.inProgress),(0,e.tZ)(a.Space,null,(0,e.tZ)(a.Progress,{type:"circle",percent:100,width:14}),n.success),(0,e.tZ)(a.Space,null,(0,e.tZ)(a.Progress,{type:"circle",status:"exception",percent:88,width:14}),n.taskFailed))},{title:"Tour",type:"new",node:(0,e.tZ)(a.Tour._InternalPanelDoNotUseOrYouWillBeFired,{title:"Ant Design 5.0",description:n.tour,style:{width:350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,e.tZ)(a.Space,{size:"large"},(0,e.tZ)(a.FloatButton._InternalPanelDoNotUseOrYouWillBeFired,{shape:"square",items:[{icon:(0,e.tZ)(Q.Z,null)},{icon:(0,e.tZ)(J.Z,null)},{icon:(0,e.tZ)(_.Z,null)}]}),(0,e.tZ)(a.FloatButton._InternalPanelDoNotUseOrYouWillBeFired,{backTop:!0}),(0,e.tZ)(a.FloatButton._InternalPanelDoNotUseOrYouWillBeFired,{items:[{icon:(0,e.tZ)(Q.Z,null)},{icon:(0,e.tZ)(J.Z,null)},{icon:(0,e.tZ)(_.Z,null)}]}))},{title:"Alert",type:"update",node:(0,e.tZ)(a.Alert,{style:{width:400},message:"Ant Design 5.0",description:n.sampleContent,closable:!0})}]},[]);return(0,e.tZ)("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center"}},(0,e.tZ)("div",{style:{display:"flex",alignItems:"stretch",columnGap:r.paddingLG}},u.map(function(g,l){var m=g.title,c=g.node,h=g.type,Z=h==="new"?"processing":"warning",R=h==="new"?n.new:n.update;return(0,e.tZ)("div",{key:l,css:t.card},(0,e.tZ)("div",{css:t.cardCircle,style:{right:l%2*-20-20,bottom:l%3*-40-20}}),(0,e.tZ)(a.Space,null,(0,e.tZ)(a.Typography.Title,{level:4,style:{fontWeight:"normal",margin:0}},m),(0,e.tZ)(a.Tag,{color:Z},R)),(0,e.tZ)("div",{style:{marginTop:r.paddingLG,flex:"auto",display:"flex",alignItems:"center",justifyContent:"center"}},c))})))}var Je=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",key:"mobile",url:"https://mobile.ant.design/",imgScale:1.5},{img:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",key:"antv",url:"https://antv.vision/"},{img:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",key:"kitchen",url:"https://kitchen.alipay.com/"}],_e={cn:{values:"\u8BBE\u8BA1\u4EF7\u503C\u89C2",valuesDesc:"\u786E\u5B9A\u6027\u3001\u610F\u4E49\u611F\u3001\u751F\u957F\u6027\u3001\u81EA\u7136",guide:"\u8BBE\u8BA1\u6307\u5F15",guideDesc:"\u5168\u5C40\u6837\u5F0F\u3001\u8BBE\u8BA1\u6A21\u5F0F",lib:"\u7EC4\u4EF6\u5E93",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Ant Design \u79FB\u52A8\u7AEF UI \u7EC4\u4EF6\u5E93",antv:"AntV",antvDesc:"\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",kitchen:"Kitchen",kitchenDesc:"\u4E00\u6B3E\u4E3A\u8BBE\u8BA1\u8005\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u7684 Sketch \u5DE5\u5177\u96C6"},en:{values:"Design values",valuesDesc:"Certainty, Meaningfulness, Growth, Naturalness",guide:"Design guide",guideDesc:"Global style and design pattern",lib:"Components Libraries",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Mobile UI component library",antv:"AntV",antvDesc:"New generation of data visualization solutions",kitchen:"Kitchen",kitchenDesc:"Sketch Tool set for designers"}},qe=function(){var r=(0,f.Z)(),t=r.token;return{card:(0,e.iv)("padding:",t.paddingSM,"px;border-radius:",t.borderRadius*2,"px;background:#fff;box-shadow:0 1px 2px rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px rgba(0, 0, 0, 0.02);img{width:100%;vertical-align:top;border-radius:",t.borderRadius,"px;}",""),cardMini:(0,e.iv)("display:block;border-radius:",t.borderRadius*2,"px;padding:",t.paddingMD,"px ",t.paddingLG,"px;background:rgba(0, 0, 0, 0.02);border:1px solid rgba(0, 0, 0, 0.06);img{height:48px;}","")}};function et(){var o=(0,b.Z)(_e),r=y()(o,1),t=r[0],d=(0,f.Z)(),s=d.token,n=qe(),u=(0,k.TH)(),g=u.pathname,l=u.search,m=T.KE(g),c=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg",key:"values",path:T.J1("/docs/spec/values/",m,l)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg",key:"guide",path:T.J1("/docs/spec/colors/",m,l)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg",key:"lib",path:T.J1("/docs/react/introduce/",m,l)}];return(0,e.tZ)(a.Row,{gutter:[s.marginXL,s.marginXL]},c.map(function(h,Z){var R=h.img,A=h.key,E=h.path,P=t[A],B=t["".concat(A,"Desc")];return(0,e.tZ)(a.Col,{key:Z,span:8},(0,e.tZ)(k.rU,{to:E},(0,e.tZ)("div",{css:n.card},(0,e.tZ)("img",{alt:P,src:R}),(0,e.tZ)(a.Typography.Title,{level:4,style:{marginTop:s.margin,marginBottom:s.marginXS}},P),(0,e.tZ)(a.Typography.Paragraph,{type:"secondary",style:{margin:0}},B))))}),Je.map(function(h,Z){var R=h.img,A=h.key,E=h.url,P=h.imgScale,B=P===void 0?1:P,G=t[A],w=t["".concat(A,"Desc")];return(0,e.tZ)(a.Col,{key:Z,span:8},(0,e.tZ)("a",{css:n.cardMini,target:"_blank",href:E},(0,e.tZ)("img",{alt:G,src:R,style:{transform:"scale(".concat(B,")")}}),(0,e.tZ)(a.Typography.Title,{level:4,style:{marginTop:s.margin,marginBottom:s.marginXS}},G),(0,e.tZ)(a.Typography.Paragraph,{type:"secondary",style:{margin:0}},w)))}))}var tt=function(){var r=(0,f.Z)(),t=r.token;return{container:(0,e.iv)("","")}},at={cn:{assetsTitle:"\u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982",assetsDesc:"\u5927\u91CF\u5B9E\u7528\u7EC4\u4EF6\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u7075\u6D3B\u5B9A\u5236\u4E0E\u62D3\u5C55",designTitle:"\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B6",designDesc:"\u914D\u5957\u751F\u6001\uFF0C\u8BA9\u4F60\u5FEB\u901F\u642D\u5EFA\u7F51\u7AD9\u5E94\u7528"},en:{assetsTitle:"Rich components",assetsDesc:"Practical components to meet your needs, flexible customization and expansion",designTitle:"Design and framework",designDesc:"Supporting ecology, allowing you to quickly build website applications"}},ot=function(){var r,t=(0,b.Z)(at),d=y()(t,1),s=d[0],n=(0,k.bU)(),u=n.id,g=u==="zh-CN"?"cn":"en",l=(0,te.W)(),m=y()(l,2),c=m[0],h=m[1],Z=tt();return(0,e.tZ)(a.ConfigProvider,{theme:{algorithm:void 0}},(0,e.tZ)("section",null,(0,e.tZ)(ee,null,(0,e.tZ)(We,{extras:c==null||(r=c.extras)===null||r===void 0?void 0:r[g],icons:c==null?void 0:c.icons})),(0,e.tZ)("div",{css:Z.container},(0,e.tZ)(He,null),(0,e.tZ)(I,{background:"#fff",collapse:!0,title:s.assetsTitle,description:s.assetsDesc,id:"design"},(0,e.tZ)(Xe,null)),(0,e.tZ)(I,{title:s.designTitle,description:s.designDesc,background:"#F5F8FF",decoration:(0,e.tZ)(p.Fragment,null,(0,e.tZ)("img",{style:{position:"absolute",left:0,top:-50,height:160},src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg"}))},(0,e.tZ)(et,null)))))},rt=ot}}]);
