import{a as mt,g as xt,s as F,Z as Ot,b as Ht,e as h,r as u,d as vt,_ as nt,f as W,j as n,h as St,Y as Dt,M as ie,K as Xt,Q as _t,m as Ut,a9 as lt,ag as bt,a6 as ae,B as Q,x as kt,T as ce,v as de,ah as ue,n as Wt,z as Pt,G as pt,w as ht,C as be}from"./index-n1MpdPIS.js";import{i as pe}from"./isTitledView-yNuL63Ol.js";import{s as $t}from"./services-6KzLNamh.js";import{G as fe,C as he}from"./CallToActionSection-8uiWZS8y.js";import"./react-is.production.min-T_4AIkBo.js";import{C as Lt}from"./CustomDivider-mVtiUFoA.js";import{H as me}from"./GreenButton-5q3mv2b7.js";let U;function Vt(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function xe(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(Vt()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function ve(t){return xt("MuiTab",t)}const Se=mt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),A=Se,ge=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],Ce=t=>{const{classes:e,textColor:r,fullWidth:s,wrapped:i,icon:c,label:b,selected:p,disabled:f}=t,v={root:["root",c&&b&&"labelIcon",`textColor${Ht(r)}`,s&&"fullWidth",i&&"wrapped",p&&"selected",f&&"disabled"],iconWrapper:["iconWrapper"]};return St(v,ve,e)},ye=F(Ot,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Ht(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>h({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${A.iconWrapper}`]:h({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${A.selected}`]:{opacity:1},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Be=u.forwardRef(function(e,r){const s=vt({props:e,name:"MuiTab"}),{className:i,disabled:c=!1,disableFocusRipple:b=!1,fullWidth:p,icon:f,iconPosition:v="top",indicator:w,label:T,onChange:C,onClick:S,onFocus:O,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:y,wrapped:st=!1}=s,D=nt(s,ge),V=h({},s,{disabled:c,disableFocusRipple:b,selected:I,icon:!!f,iconPosition:v,label:!!T,fullWidth:p,textColor:H,wrapped:st}),X=Ce(V),P=f&&T&&u.isValidElement(f)?u.cloneElement(f,{className:W(X.iconWrapper,f.props.className)}):f,Z=j=>{!I&&C&&C(j,y),S&&S(j)},_=j=>{g&&!I&&C&&C(j,y),O&&O(j)};return n.jsxs(ye,h({focusRipple:!b,className:W(X.root,i),ref:r,role:"tab","aria-selected":I,disabled:c,onClick:Z,onFocus:_,ownerState:V,tabIndex:I?0:-1},D,{children:[v==="top"||v==="start"?n.jsxs(u.Fragment,{children:[P,T]}):n.jsxs(u.Fragment,{children:[T,P]}),w]}))}),we=Be,Te=Dt(n.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Ie=Dt(n.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Ee(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Me(t,e,r,s={},i=()=>{}){const{ease:c=Ee,duration:b=300}=s;let p=null;const f=e[t];let v=!1;const w=()=>{v=!0},T=C=>{if(v){i(new Error("Animation cancelled"));return}p===null&&(p=C);const S=Math.min(1,(C-p)/b);if(e[t]=c(S)*(r-f)+f,S>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(T)};return f===r?(i(new Error("Element already at target position")),w):(requestAnimationFrame(T),w)}const je=["onChange"],Re={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ze(t){const{onChange:e}=t,r=nt(t,je),s=u.useRef(),i=u.useRef(null),c=()=>{s.current=i.current.offsetHeight-i.current.clientHeight};return ie(()=>{const b=_t(()=>{const f=s.current;c(),f!==s.current&&e(s.current)}),p=Xt(i.current);return p.addEventListener("resize",b),()=>{b.clear(),p.removeEventListener("resize",b)}},[e]),u.useEffect(()=>{c(),e(s.current)},[e]),n.jsx("div",h({style:Re,ref:i},r))}function ke(t){return xt("MuiTabScrollButton",t)}const We=mt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Pe=We,$e=["className","slots","slotProps","direction","orientation","disabled"],Le=t=>{const{classes:e,orientation:r,disabled:s}=t;return St({root:["root",r,s&&"disabled"]},ke,e)},Ne=F(Ot,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>h({width:40,flexShrink:0,opacity:.8,[`&.${Pe.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Ae=u.forwardRef(function(e,r){var s,i;const c=vt({props:e,name:"MuiTabScrollButton"}),{className:b,slots:p={},slotProps:f={},direction:v}=c,w=nt(c,$e),C=Ut().direction==="rtl",S=h({isRtl:C},c),O=Le(S),I=(s=p.StartScrollButtonIcon)!=null?s:Te,g=(i=p.EndScrollButtonIcon)!=null?i:Ie,H=lt({elementType:I,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),y=lt({elementType:g,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return n.jsx(Ne,h({component:"div",className:W(O.root,b),ref:r,role:null,ownerState:S,tabIndex:null},w,{children:v==="left"?n.jsx(I,h({},H)):n.jsx(g,h({},y))}))}),Fe=Ae;function Oe(t){return xt("MuiTabs",t)}const He=mt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ft=He,De=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Nt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,At=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,rt=(t,e,r)=>{let s=!1,i=r(t,e);for(;i;){if(i===t.firstChild){if(s)return;s=!0}const c=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||c)i=r(t,i);else{i.focus();return}}},Xe=t=>{const{vertical:e,fixed:r,hideScrollbar:s,scrollableX:i,scrollableY:c,centered:b,scrollButtonsHideMobile:p,classes:f}=t;return St({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",s&&"hideScrollbar",i&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Oe,f)},_e=F("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ft.scrollButtons}`]:e.scrollButtons},{[`& .${ft.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>h({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ft.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Ue=F("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>h({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ve=F("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>h({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ye=F("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>h({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Ke=F(ze)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Ft={},Ge=u.forwardRef(function(e,r){const s=vt({props:e,name:"MuiTabs"}),i=Ut(),c=i.direction==="rtl",{"aria-label":b,"aria-labelledby":p,action:f,centered:v=!1,children:w,className:T,component:C="div",allowScrollButtonsMobile:S=!1,indicatorColor:O="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=Fe,scrollButtons:y="auto",selectionFollowsFocus:st,slots:D={},slotProps:V={},TabIndicatorProps:X={},TabScrollButtonProps:P={},textColor:Z="primary",value:_,variant:j="standard",visibleScrollbar:it=!1}=s,Yt=nt(s,De),E=j==="scrollable",B=g==="vertical",Y=B?"scrollTop":"scrollLeft",J=B?"top":"left",tt=B?"bottom":"right",at=B?"clientHeight":"clientWidth",K=B?"height":"width",$=h({},s,{component:C,allowScrollButtonsMobile:S,indicatorColor:O,orientation:g,vertical:B,scrollButtons:y,textColor:Z,variant:j,visibleScrollbar:it,fixed:!E,hideScrollbar:E&&!it,scrollableX:E&&!B,scrollableY:E&&B,centered:v&&!E,scrollButtonsHideMobile:!S}),z=Xe($),Kt=lt({elementType:D.StartScrollButtonIcon,externalSlotProps:V.startScrollButtonIcon,ownerState:$}),Gt=lt({elementType:D.EndScrollButtonIcon,externalSlotProps:V.endScrollButtonIcon,ownerState:$}),[gt,qt]=u.useState(!1),[L,Ct]=u.useState(Ft),[yt,Qt]=u.useState(!1),[Bt,Zt]=u.useState(!1),[wt,Jt]=u.useState(!1),[Tt,te]=u.useState({overflow:"hidden",scrollbarWidth:0}),It=new Map,R=u.useRef(null),N=u.useRef(null),Et=()=>{const o=R.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:xe(o,i.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let d;if(o&&_!==!1){const a=N.current.children;if(a.length>0){const m=a[It.get(_)];d=m?m.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:d}},G=bt(()=>{const{tabsMeta:o,tabMeta:l}=Et();let d=0,a;if(B)a="top",l&&o&&(d=l.top-o.top+o.scrollTop);else if(a=c?"right":"left",l&&o){const x=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;d=(c?-1:1)*(l[a]-o[a]+x)}const m={[a]:d,[K]:l?l[K]:0};if(isNaN(L[a])||isNaN(L[K]))Ct(m);else{const x=Math.abs(L[a]-m[a]),M=Math.abs(L[K]-m[K]);(x>=1||M>=1)&&Ct(m)}}),ct=(o,{animation:l=!0}={})=>{l?Me(Y,R.current,o,{duration:i.transitions.duration.standard}):R.current[Y]=o},Mt=o=>{let l=R.current[Y];B?l+=o:(l+=o*(c?-1:1),l*=c&&Vt()==="reverse"?-1:1),ct(l)},jt=()=>{const o=R.current[at];let l=0;const d=Array.from(N.current.children);for(let a=0;a<d.length;a+=1){const m=d[a];if(l+m[at]>o){a===0&&(l=o);break}l+=m[at]}return l},ee=()=>{Mt(-1*jt())},oe=()=>{Mt(jt())},re=u.useCallback(o=>{te({overflow:null,scrollbarWidth:o})},[]),le=()=>{const o={};o.scrollbarSizeListener=E?n.jsx(Ke,{onChange:re,className:W(z.scrollableX,z.hideScrollbar)}):null;const d=E&&(y==="auto"&&(yt||Bt)||y===!0);return o.scrollButtonStart=d?n.jsx(H,h({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Kt},orientation:g,direction:c?"right":"left",onClick:ee,disabled:!yt},P,{className:W(z.scrollButtons,P.className)})):null,o.scrollButtonEnd=d?n.jsx(H,h({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Gt},orientation:g,direction:c?"left":"right",onClick:oe,disabled:!Bt},P,{className:W(z.scrollButtons,P.className)})):null,o},Rt=bt(o=>{const{tabsMeta:l,tabMeta:d}=Et();if(!(!d||!l)){if(d[J]<l[J]){const a=l[Y]+(d[J]-l[J]);ct(a,{animation:o})}else if(d[tt]>l[tt]){const a=l[Y]+(d[tt]-l[tt]);ct(a,{animation:o})}}}),et=bt(()=>{E&&y!==!1&&Jt(!wt)});u.useEffect(()=>{const o=_t(()=>{R.current&&G()});let l;const d=x=>{x.forEach(M=>{M.removedNodes.forEach(q=>{var k;(k=l)==null||k.unobserve(q)}),M.addedNodes.forEach(q=>{var k;(k=l)==null||k.observe(q)})}),o(),et()},a=Xt(R.current);a.addEventListener("resize",o);let m;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(N.current.children).forEach(x=>{l.observe(x)})),typeof MutationObserver<"u"&&(m=new MutationObserver(d),m.observe(N.current,{childList:!0})),()=>{var x,M;o.clear(),a.removeEventListener("resize",o),(x=m)==null||x.disconnect(),(M=l)==null||M.disconnect()}},[G,et]),u.useEffect(()=>{const o=Array.from(N.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&E&&y!==!1){const d=o[0],a=o[l-1],m={root:R.current,threshold:.99},x=ut=>{Qt(!ut[0].isIntersecting)},M=new IntersectionObserver(x,m);M.observe(d);const q=ut=>{Zt(!ut[0].isIntersecting)},k=new IntersectionObserver(q,m);return k.observe(a),()=>{M.disconnect(),k.disconnect()}}},[E,y,wt,w==null?void 0:w.length]),u.useEffect(()=>{qt(!0)},[]),u.useEffect(()=>{G()}),u.useEffect(()=>{Rt(Ft!==L)},[Rt,L]),u.useImperativeHandle(f,()=>({updateIndicator:G,updateScrollButtons:et}),[G,et]);const zt=n.jsx(Ye,h({},X,{className:W(z.indicator,X.className),ownerState:$,style:h({},L,X.style)}));let ot=0;const ne=u.Children.map(w,o=>{if(!u.isValidElement(o))return null;const l=o.props.value===void 0?ot:o.props.value;It.set(l,ot);const d=l===_;return ot+=1,u.cloneElement(o,h({fullWidth:j==="fullWidth",indicator:d&&!gt&&zt,selected:d,selectionFollowsFocus:st,onChange:I,textColor:Z,value:l},ot===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),se=o=>{const l=N.current,d=ae(l).activeElement;if(d.getAttribute("role")!=="tab")return;let m=g==="horizontal"?"ArrowLeft":"ArrowUp",x=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&c&&(m="ArrowRight",x="ArrowLeft"),o.key){case m:o.preventDefault(),rt(l,d,At);break;case x:o.preventDefault(),rt(l,d,Nt);break;case"Home":o.preventDefault(),rt(l,null,Nt);break;case"End":o.preventDefault(),rt(l,null,At);break}},dt=le();return n.jsxs(_e,h({className:W(z.root,T),ownerState:$,ref:r,as:C},Yt,{children:[dt.scrollButtonStart,dt.scrollbarSizeListener,n.jsxs(Ue,{className:z.scroller,ownerState:$,style:{overflow:Tt.overflow,[B?`margin${c?"Left":"Right"}`:"marginBottom"]:it?void 0:-Tt.scrollbarWidth},ref:R,children:[n.jsx(Ve,{"aria-label":b,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:z.flexContainer,ownerState:$,onKeyDown:se,ref:N,role:"tablist",children:ne}),gt&&zt]}),dt.scrollButtonEnd]}))}),qe=Ge;function Qe(t){const{children:e,value:r,index:s,...i}=t;return n.jsx("div",{role:"tabpanel",hidden:r!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...i,children:r===s&&n.jsx(Q,{p:{xs:0,md:3},children:e})})}function Ze({description:t}){return n.jsx(n.Fragment,{children:n.jsxs(kt,{height:"100%",children:[n.jsx(kt,{pt:2,mb:2,children:n.jsx(ce,{variant:"body1",component:"p",textAlign:"justify",children:t})}),n.jsx(Q,{sx:{margin:"auto auto 20px auto"},children:n.jsx(fe,{variant:"contained",size:"large",boxShadow:!0,linkTo:"contact-us",children:"GET A QUOTE"})})]})})}const Je={".MuiTabs-flexContainer":{flexWrap:"wrap",justifyContent:"center"},"& button":{xs:{fontSize:"18px",backgroundColor:"#f1f1f1",margin:"5px 5px",borderRadius:"20px"},md:{fontSize:"20px",borderRadius:"20px 20px 0 0",margin:"0 5px","&:first-of-type":{margin:"0 5px 0 0"},"&:last-of-type":{margin:"0 0 0 5px"}},lg:{fontSize:"25px"}},"& button.Mui-selected":{xs:{border:"3px solid #35908d",borderRadius:"20px",backgroundColor:"#35908d",color:"#ffffff"},md:{borderRadius:"20px 20px 0 0"}},"& button.Mui-selected:hover":{backgroundColor:"#35908d"},"& button:hover":{xs:{borderRadius:"20px",backgroundColor:"#45b6b2",color:"#ffffff"},md:{borderRadius:"20px 20px 0 0"}}};function to(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}function eo(){const{activeTabIndex:t,changeActiveTab:e}=de(),r=ue(),s=Wt(r.breakpoints.down("sm")),i=Wt(r.breakpoints.up("md")),c=(b,p)=>{console.log("event:",b),e(p)};return n.jsxs(n.Fragment,{children:[n.jsx(Q,{id:"service-tabs",sx:{borderBottom:1,borderColor:"custom.theme.lightGreen"},children:n.jsx(qe,{TabIndicatorProps:{hidden:!0},scrollButtons:!0,allowScrollButtonsMobile:!0,value:t,onChange:c,"aria-label":"services tabs",visibleScrollbar:!0,variant:s?"standard":i?"fullWidth":"standard",sx:Je,children:$t.map((b,p)=>n.jsx(we,{disableRipple:!0,label:b.title,...to(p)},Pt()))})}),$t.map((b,p)=>n.jsx(Qe,{value:t,index:p,children:n.jsxs(pt,{container:!0,spacing:{xs:0,sm:2},mt:{xs:1,md:0},children:[n.jsx(pt,{item:!0,xs:12,sm:6,md:5,children:n.jsx(Ze,{description:b.content})}),n.jsx(pt,{item:!0,xs:12,sm:6,md:7,display:"flex",justifyContent:"center",children:n.jsx(Q,{sx:{height:{xs:"90%",md:"auto"},width:"auto"},component:"img",src:ht("card-backgrounds",b.imageSrc),alt:`${b.title} image `,loading:"lazy"})})]})},Pt()))]})}function oo(){return n.jsxs(n.Fragment,{children:[n.jsx(me,{title:"Services",description:"Explore Stitch Sense's comprehensive services for top-quality fashion design, sublimation, production, and clothing distribution solutions."}),n.jsx(Q,{py:{xs:5,md:6},component:"section",children:n.jsxs(be,{children:[n.jsx(Lt,{mb:{xs:3,md:4}}),n.jsx(eo,{}),n.jsx(Lt,{mt:{xs:3,md:5},mb:{xs:3,md:5}}),n.jsx(he,{})]})})]})}const uo=pe(oo,{viewTitle:"Services",imageSrcSmallScreen:ht("title-backgrounds","services-background-small-screen.jpg"),imageSrcLargeScreen:ht("title-backgrounds","services-background-large-screen.jpg")});export{uo as default};
