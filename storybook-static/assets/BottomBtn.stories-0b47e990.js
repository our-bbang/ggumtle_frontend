import{n as o,s as g,a as b}from"./styled-components.browser.esm-696e319f.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";import"./tslib.es6-17d83084.js";const h=o`
  ${({width:e="360px",height:n="52px",borderRadius:r="8px",fontSize:s="18px",fontFamily:f="OngothicRegular"})=>o`
    width: ${e};
    height: ${n};
    border-radius: ${r};
    font-size: ${s};
    font-family: ${f};
  `};
`,y=o`
  background-color: ${({theme:e})=>e.colors.green};
  color: white;
  &:hover {
    background-color: ${({theme:e})=>e.colors.green_dark};
    cursor: pointer;
  }
  &.disabled {
    background-color: #f6f6f7;
    color: #525463;
    cursor: default;
  }
`,x=g.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;

  ${h}
  ${y}
`,i=({className:e,handleClick:n,children:r,...s})=>b(x,{className:e,onClick:n,...s,children:r});try{i.displayName="BottomBtn",i.__docgenInfo={description:"",displayName:"BottomBtn",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},btnstatus:{defaultValue:null,description:"",name:"btnstatus",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"active"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const S={title:"Button/BottomBtn",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fontFamily:{control:"select",options:["OngothicRegular","Pretendard"]},btnstatus:{control:!1,description:"Button activation and deactivation status"},className:{control:!1}}},t={args:{children:"시작하기",width:"360px",height:"52px",borderRadius:"8px",fontSize:"18px",fontFamily:"OngothicRegular",btnstatus:"active"}},a={args:{...t.args,className:"disabled",btnstatus:"disabled"}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '시작하기',
    width: '360px',
    height: '52px',
    borderRadius: '8px',
    fontSize: '18px',
    fontFamily: 'OngothicRegular',
    btnstatus: 'active'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Active.args,
    className: 'disabled',
    btnstatus: 'disabled'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Active","Disabled"];export{t as Active,a as Disabled,k as __namedExportsOrder,S as default};
//# sourceMappingURL=BottomBtn.stories-0b47e990.js.map
