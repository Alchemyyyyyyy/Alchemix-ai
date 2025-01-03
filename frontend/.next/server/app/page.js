(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3229:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>g,tree:()=>c});var a=r(7096),n=r(6132),s=r(7284),i=r.n(s),l=r(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8203)),"/Users/ananya/Documents/Alchemix-ai/frontend/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9113)),"/Users/ananya/Documents/Alchemix-ai/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ananya/Documents/Alchemix-ai/frontend/src/app/page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3345:(e,t,r)=>{Promise.resolve().then(r.bind(r,6870))},6870:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>TextPage});var a=r(784),n=r(9885),s=r(7114),i=r(8536),l=r(6797),o=r(1063),c=r(5574);let generateTemplateFromDrawing=e=>{let t=e.getContext("2d");if(!t)throw Error("Failed to get canvas context");return t.getImageData(0,0,e.width,e.height),e.toDataURL("image/png")};function DrawingPad({onTemplateGenerate:e}){let t=(0,n.useRef)(null),[r,s]=(0,n.useState)(!1),[d,u]=(0,n.useState)({name:"brush",size:2,color:"#000000"}),[p,g]=(0,n.useState)([]),[h,x]=(0,n.useState)(-1);(0,n.useEffect)(()=>{let e=t.current;if(!e)return;let r=e.getContext("2d");if(!r)return;r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height);g([a]),x(0)},[]);let startDrawing=e=>{s(!0);let r=t.current;if(!r)return;let a=r.getContext("2d");if(!a)return;let n=r.getBoundingClientRect(),i="touches"in e?e.touches[0].clientX-n.left:e.clientX-n.left,l="touches"in e?e.touches[0].clientY-n.top:e.clientY-n.top;a.beginPath(),a.moveTo(i,l)},draw=e=>{if(!r)return;let a=t.current;if(!a)return;let n=a.getContext("2d");if(!n)return;let s=a.getBoundingClientRect(),i="touches"in e?e.touches[0].clientX-s.left:e.clientX-s.left,l="touches"in e?e.touches[0].clientY-s.top:e.clientY-s.top;n.lineTo(i,l),n.strokeStyle="eraser"===d.name?"#ffffff":d.color,n.lineWidth=d.size,n.lineCap="round",n.lineJoin="round",n.stroke()},stopDrawing=()=>{if(!r)return;let e=t.current;if(!e)return;let a=e.getContext("2d");if(!a)return;a.closePath(),s(!1);let n=a.getImageData(0,0,e.width,e.height),i=p.slice(0,h+1);g([...i,n]),x(h+1)};return(0,n.useCallback)(()=>{let r=t.current;if(!r)return;let a=generateTemplateFromDrawing(r);e(a)},[e]),(0,a.jsxs)("div",{className:"flex flex-col bg-white rounded-lg shadow-lg p-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4 p-2 bg-gray-50 rounded-lg",children:[(0,a.jsxs)("div",{className:"flex space-x-4",children:[a.jsx("button",{onClick:()=>u({...d,name:"brush"}),className:`p-2 rounded ${"brush"===d.name?"bg-purple-100 text-purple-600":"text-gray-600"}`,children:a.jsx(i.Z,{className:"w-5 h-5"})}),a.jsx("button",{onClick:()=>u({...d,name:"eraser"}),className:`p-2 rounded ${"eraser"===d.name?"bg-purple-100 text-purple-600":"text-gray-600"}`,children:a.jsx(l.Z,{className:"w-5 h-5"})}),a.jsx("input",{type:"color",value:d.color,onChange:e=>u({...d,color:e.target.value}),className:"w-8 h-8 rounded cursor-pointer"}),(0,a.jsxs)("select",{value:d.size,onChange:e=>u({...d,size:Number(e.target.value)}),className:"p-1 border rounded",children:[a.jsx("option",{value:"2",children:"Small"}),a.jsx("option",{value:"5",children:"Medium"}),a.jsx("option",{value:"10",children:"Large"})]})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>{if(h<=0)return;let e=t.current;if(!e)return;let r=e.getContext("2d");if(!r)return;let a=h-1;r.putImageData(p[a],0,0),x(a)},className:"p-2 text-gray-600 hover:bg-gray-100 rounded",children:a.jsx(o.Z,{className:"w-5 h-5"})}),a.jsx("button",{onClick:()=>{let e=t.current;if(!e)return;let r=e.getContext("2d");if(!r)return;r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height);g([...p,a]),x(h+1)},className:"px-3 py-1 text-gray-600 hover:bg-gray-100 rounded",children:"Clear"}),a.jsx("button",{onClick:()=>{let e=t.current;if(!e)return;let r=e.toDataURL("image/png"),a=document.createElement("a");a.download="website-sketch.png",a.href=r,a.click()},className:"p-2 text-gray-600 hover:bg-gray-100 rounded",children:a.jsx(c.Z,{className:"w-5 h-5"})})]})]}),a.jsx("canvas",{ref:t,width:800,height:600,className:"border border-gray-200 rounded-lg touch-none",onMouseDown:startDrawing,onMouseMove:draw,onMouseUp:stopDrawing,onMouseLeave:stopDrawing,onTouchStart:startDrawing,onTouchMove:draw,onTouchEnd:stopDrawing}),(0,a.jsxs)("div",{className:"mt-4 text-sm text-gray-500",children:[a.jsx("p",{children:"Draw your website layout here. Use the toolbar to:"}),(0,a.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[a.jsx("li",{children:"Switch between pen and eraser"}),a.jsx("li",{children:"Change colors and brush size"}),a.jsx("li",{children:"Undo actions or clear the canvas"}),a.jsx("li",{children:"Download your sketch"})]})]})]})}function TextPage(){let[e,t]=(0,n.useState)("text"),[r,i]=(0,n.useState)(""),[l,o]=(0,n.useState)(!1),[c,d]=(0,n.useState)(null),u=(0,s.useRouter)(),handleSubmit=async e=>{e.preventDefault(),o(!0),d(null);try{let e=await fetch("/api/generate-template",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:r})});if(!e.ok)throw Error("Failed to generate template");let t=await e.json();localStorage.setItem("generatedTemplate",JSON.stringify(t)),u.push("/preview")}catch(e){d(e instanceof Error?e.message:"Failed to generate template")}finally{o(!1)}};return a.jsx("div",{className:"min-h-screen bg-gray-50 p-8",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Create Your Website Template"}),a.jsx("div",{className:"flex justify-center mb-8",children:(0,a.jsxs)("div",{className:"inline-flex bg-white rounded-lg shadow p-1",children:[a.jsx("button",{onClick:()=>t("text"),className:`px-6 py-2 rounded-md transition-colors ${"text"===e?"bg-purple-100 text-purple-700":"text-gray-600 hover:text-gray-900"}`,children:"Describe in Text"}),a.jsx("button",{onClick:()=>t("draw"),className:`px-6 py-2 rounded-md transition-colors ${"draw"===e?"bg-purple-100 text-purple-700":"text-gray-600 hover:text-gray-900"}`,children:"Draw Layout"})]})}),a.jsx("div",{className:"mt-6",children:"text"===e?(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[(0,a.jsxs)("form",{onSubmit:handleSubmit,children:[(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 mb-2",children:"Template Description"}),a.jsx("textarea",{id:"description",rows:8,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"Describe your website template here... (e.g., 'I want a modern landing page with a hero section, feature grid, and contact form')",value:r,onChange:e=>i(e.target.value)})]}),a.jsx("div",{className:"space-y-4",children:a.jsx("button",{type:"submit",disabled:l,className:`w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors ${l?"opacity-50 cursor-not-allowed":""}`,children:l?"Generating...":"Generate Template"})})]}),c&&a.jsx("div",{className:"mt-4 p-4 bg-red-50 text-red-600 rounded-lg",children:c})]}):a.jsx(DrawingPad,{onTemplateGenerate:e=>{localStorage.setItem("generatedTemplate",JSON.stringify({html:"",css:"",preview:e})),u.push("/preview")}})})]})})}},8203:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var a=r(5153);let n=(0,a.createProxy)(String.raw`/Users/ananya/Documents/Alchemix-ai/frontend/src/app/page.tsx`),{__esModule:s,$$typeof:i}=n,l=n.default,o=l},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[485,120,323,437,212,749],()=>__webpack_exec__(3229));module.exports=r})();