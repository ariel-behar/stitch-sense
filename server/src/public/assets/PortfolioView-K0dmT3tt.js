import{g as b,a as $,r as n,s as M,e as a,d as k,_ as E,j as o,f as P,h as R,A as U,w as x,t as H,m as T,n as w,B as y,C as V,z as _}from"./index-i9C3kKLj.js";import{i as q}from"./isTitledView-xjNtKUM-.js";import{C as L}from"./CustomDivider-xg-iZgVO.js";import{C as A}from"./CallToActionSection-oJM9U4rx.js";import{H as B}from"./GreenButton-JE-BJ_zF.js";import"./react-is.production.min-T_4AIkBo.js";import"./GreenButtonWithLink-5VhaFJ3_.js";function z(t){return b("MuiImageList",t)}$("MuiImageList",["root","masonry","quilted","standard","woven"]);const N=n.createContext({}),D=["children","className","cols","component","rowHeight","gap","style","variant"],F=t=>{const{classes:e,variant:i}=t;return R({root:["root",i]},z,e)},G=M("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,e[i.variant]]}})(({ownerState:t})=>a({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},t.variant==="masonry"&&{display:"block"})),O=n.forwardRef(function(e,i){const s=k({props:e,name:"MuiImageList"}),{children:h,className:v,cols:d=2,component:u="ul",rowHeight:m="auto",gap:g=4,style:S,variant:r="standard"}=s,f=E(s,D),l=n.useMemo(()=>({rowHeight:m,gap:g,variant:r}),[m,g,r]);n.useEffect(()=>{},[]);const I=r==="masonry"?a({columnCount:d,columnGap:g},S):a({gridTemplateColumns:`repeat(${d}, 1fr)`,gap:g},S),j=a({},s,{component:u,gap:g,rowHeight:m,variant:r}),c=F(j);return o.jsx(G,a({as:u,className:P(c.root,c[r],v),ref:i,style:I,ownerState:j},f,{children:o.jsx(N.Provider,{value:l,children:h})}))}),W=O;function X(t){return b("MuiImageListItem",t)}const Q=$("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),C=Q,Y=["children","className","cols","component","rows","style"],J=t=>{const{classes:e,variant:i}=t;return R({root:["root",i],img:["img"]},X,e)},K=M("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[{[`& .${C.img}`]:e.img},e.root,e[i.variant]]}})(({ownerState:t})=>a({display:"block",position:"relative"},t.variant==="standard"&&{display:"flex",flexDirection:"column"},t.variant==="woven"&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${C.img}`]:a({objectFit:"cover",width:"100%",height:"100%",display:"block"},t.variant==="standard"&&{height:"auto",flexGrow:1})})),Z=n.forwardRef(function(e,i){const s=k({props:e,name:"MuiImageListItem"}),{children:h,className:v,cols:d=1,component:u="li",rows:m=1,style:g}=s,S=E(s,Y),{rowHeight:r="auto",gap:f,variant:l}=n.useContext(N);let I="auto";l==="woven"?I=void 0:r!=="auto"&&(I=r*m+f*(m-1));const j=a({},s,{cols:d,component:u,gap:f,rowHeight:r,rows:m,variant:l}),c=J(j);return o.jsx(K,a({as:u,className:P(c.root,c[l],v),ref:i,style:a({height:I,gridColumnEnd:l!=="masonry"?`span ${d}`:void 0,gridRowEnd:l!=="masonry"?`span ${m}`:void 0,marginBottom:l==="masonry"?f:void 0,breakInside:l==="masonry"?"avoid":void 0},g),ownerState:j},S,{children:n.Children.map(h,p=>n.isValidElement(p)?p.type==="img"||U(p,["Image"])?n.cloneElement(p,{className:P(c.img,p.props.className)}):p:null)}))}),tt=Z,et=[{title:"Portfolio Image 1",imageSrc:"1.jpg"},{title:"Portfolio Image 2",imageSrc:"2.jpg"},{title:"Portfolio Image 3",imageSrc:"3.jpg"},{title:"Portfolio Image 4",imageSrc:"4.jpg"},{title:"Portfolio Image 5",imageSrc:"5.jpg"},{title:"Portfolio Image 6",imageSrc:"6.jpg"},{title:"Portfolio Image 7",imageSrc:"7.jpg"},{title:"Portfolio Image 8",imageSrc:"8.jpg"},{title:"Portfolio Image 9",imageSrc:"9.jpg"},{title:"Portfolio Image 10",imageSrc:"10.jpg"},{title:"Portfolio Image 11",imageSrc:"11.jpg"},{title:"Portfolio Image 12",imageSrc:"12.jpg"},{title:"Portfolio Image 13",imageSrc:"13.jpg"},{title:"Portfolio Image 14",imageSrc:"14.jpg"},{title:"Portfolio Image 15",imageSrc:"15.jpg"},{title:"Portfolio Image 16",imageSrc:"16.jpg"},{title:"Portfolio Image 17",imageSrc:"17.jpg"},{title:"Portfolio Image 18",imageSrc:"18.jpg"},{title:"Portfolio Image 19",imageSrc:"19.jpg"},{title:"Portfolio Image 20",imageSrc:"20.jpg"},{title:"Portfolio Image 21",imageSrc:"21.jpg"},{title:"Portfolio Image 22",imageSrc:"22.jpg"},{title:"Portfolio Image 23",imageSrc:"23.jpg"},{title:"Portfolio Image 24",imageSrc:"24.jpg"},{title:"Portfolio Image 25",imageSrc:"25.jpg"},{title:"Portfolio Image 26",imageSrc:"26.jpg"},{title:"Portfolio Image 27",imageSrc:"27.jpg"},{title:"Portfolio Image 28",imageSrc:"28.jpg"}],ot=H("img")`
	transition: all 0.3s ease-in-out;
	height: auto;
	width: 100%;
	object-fit: cover;
	&:hover {
		scale: 1.05;
	}
`;function it(){const t=T(),e=w(t.breakpoints.down("sm")),i=w(t.breakpoints.down("lg"));return o.jsxs(o.Fragment,{children:[o.jsx(B,{title:"Portfolio",description:"Explore Stitch Sense's captivating portfolio showcasing our exquisite designs, production prowess, and distribution excellence, curated for customers worldwide."}),o.jsx(y,{mt:{xs:5,md:6},mb:{xs:7,md:10},children:o.jsxs(V,{children:[o.jsx(L,{mb:{xs:3,md:4}}),o.jsx(W,{variant:"standard",cols:e?2:4,gap:5,component:"section",children:et.map(s=>o.jsx(tt,{children:o.jsx(y,{sx:{overflow:"hidden",textAlign:"center",maxHeight:"426px"},children:o.jsx(ot,{srcSet:`${x("portfolio",s.imageSrc)}`,src:`${x("portfolio",s.imageSrc)}`,alt:s.title,loading:"lazy",title:"Portfolio Image"})})},_()))}),o.jsx(L,{mt:{xs:4,md:5},mb:{xs:3,md:4}}),o.jsx(A,{})]})})]})}const ct=q(it,{viewTitle:"Portfolio",imageSrcSmallScreen:x("title-backgrounds","portfolio-background-small-screen.jpg"),imageSrcLargeScreen:x("title-backgrounds","portfolio-background-large-screen.jpg")});export{ct as default};