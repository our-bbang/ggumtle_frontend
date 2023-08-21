import{s,c as f,j as g,F as y,a as t,n as i}from"./styled-components.browser.esm-54edbece.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";import"./tslib.es6-17d83084.js";const p=({percent:e})=>g(y,{children:[t(_,{}),t(P,{progress:e})]}),_=s.div`
  width: 100%;
  height: 3px;

  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  background-color: ${({theme:e})=>e.colors.gray_300};
`,b=f`
  from {
    width: 0;
  }
  to {
    width: ${e=>(e||0)+"%"};
  }
`,P=s.div`
  width: ${e=>e.progress||0}%;
  height: 3px;

  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  background: ${({theme:e})=>e.colors.green};
  animation: ${b} ${({progress:e})=>.2*(e/10)}s linear
    forwards;
`;try{p.displayName="ProgressLine",p.__docgenInfo={description:"",displayName:"ProgressLine",props:{percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"number"}}}}}catch{}const c=({size:e,step:r,status:n})=>t(h,{size:e,status:n,children:`${r}`}),h=s.div`
  ${({size:e="20px"})=>i`
    width: ${e};
    height: ${e};
    line-height: ${e};
  `}

  ${({status:e="incomplete",theme:r})=>{if(e==="incomplete")return i`
        background-color: ${r.colors.gray_300};
        color: ${r.colors.gray_500};
      `;if(e==="complete")return i`
        background-color: ${r.colors.green};
        color: white;
      `}}

  font-family: "PretendardMedium";
  text-align: center;

  border-radius: 50%;

  z-index: 100;

  transition: background-color 0.1s ease;
`;try{c.displayName="ProgressCircle",c.__docgenInfo={description:"",displayName:"ProgressCircle",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}}}}}catch{}const l=({totalProgressStep:e,completedProgressStep:r,percent:n})=>g($,{children:[t(p,{percent:n}),Array.from({length:e},(x,a)=>t(c,{size:"28px",step:a+1,status:a+1<=r?"complete":"incomplete"},a))]}),$=s.div`
  width: 220px;
  height: 40px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;try{l.displayName="Progressbar",l.__docgenInfo={description:"",displayName:"Progressbar",props:{totalProgressStep:{defaultValue:null,description:"Total number of progress steps",name:"totalProgressStep",required:!0,type:{name:"number"}},completedProgressStep:{defaultValue:null,description:"Number of completed progress steps",name:"completedProgressStep",required:!0,type:{name:"number"}},percent:{defaultValue:null,description:"Percentage of completed progress",name:"percent",required:!0,type:{name:"number"}}}}}catch{}const V={title:"Progressbar",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{totalProgressStep:{control:{type:"number",min:0}},completedProgressStep:{control:{type:"number",min:0}},percent:{control:{type:"number",min:0}}}},o={args:{totalProgressStep:3,completedProgressStep:1,percent:50}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    totalProgressStep: 3,
    completedProgressStep: 1,
    percent: 50
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,V as default};
//# sourceMappingURL=Progressbar.stories-590f72b3.js.map
