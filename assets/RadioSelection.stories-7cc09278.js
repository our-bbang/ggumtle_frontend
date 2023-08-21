import{s as a,n as u,j as g,a as n}from"./styled-components.browser.esm-54edbece.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";import"./tslib.es6-17d83084.js";const i=({selectedOption:e,setOption:r,...t})=>{const d=m=>{r(m)};return g(h,{...t,children:[n(s,{onClick:()=>d(1),className:`left ${e===1?"selected":""}`,borderRadius:t.borderRadius,children:t.option1}),n(f,{}),n(s,{onClick:()=>d(2),className:`right ${e===2?"selected":""}`,borderRadius:t.borderRadius,children:t.option2})]})},h=a.div`
  ${({width:e="300px",height:r="30px",borderRadius:t="8px"})=>u`
    width: ${e};
    height: ${r};
    border-radius: ${t};
  `}

  display: flex;

  background-color: ${({theme:e})=>e.colors.gray_100};
`,f=a.div`
  width: 1px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.gray_400};
`,s=a.button`
  width: 50%;
  height: 100%;

  background-color: transparent;
  border: none;
  ${({borderRadius:e="8px"})=>u`
    &.left {
      border-radius: ${e} 0 0 ${e};
    }
    &.right {
      border-radius: 0 ${e} ${e} 0;
    }
  `};

  font-family: 'PretendardMedium';
  color: ${({theme:e})=>e.colors.gray_800};

  &:hover {
    cursor: pointer;
  }
  transition: background-color 0.1s ease;
  &.selected {
    background-color: ${({theme:e})=>e.colors.green};
    color: white;
  }
`;try{i.displayName="RadioSelection",i.__docgenInfo={description:"",displayName:"RadioSelection",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},option1:{defaultValue:null,description:"",name:"option1",required:!1,type:{name:"string"}},option2:{defaultValue:null,description:"",name:"option2",required:!1,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"number"}},setOption:{defaultValue:null,description:"",name:"setOption",required:!0,type:{name:"SetterOrUpdater<number>"}}}}}catch{}const _={title:"Inputs/RadioSelection",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedOption:{control:"radio",options:[1,2]},setOption:{control:!1}}},o={args:{width:"300px",height:"36px",borderRadius:"8px",option1:"옵션 1",option2:"옵션 2",selectedOption:1}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: '300px',
    height: '36px',
    borderRadius: '8px',
    option1: '옵션 1',
    option2: '옵션 2',
    selectedOption: 1
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=RadioSelection.stories-7cc09278.js.map
