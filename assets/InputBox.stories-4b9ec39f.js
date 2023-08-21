import{s as i,n as p,a as l}from"./styled-components.browser.esm-54edbece.js";import{r as h}from"./index-e03f90b5.js";import"./tslib.es6-17d83084.js";import"./_commonjsHelpers-725317a4.js";const g=()=>{const[e,t]=h.useState(!1);return{isFocusedOnce:e,handleFocus:()=>{t(!0)}}},o=({value:e,setValue:t,...r})=>{const{isFocusedOnce:c,handleFocus:m}=g();return l(f,{...r,children:l(y,{onFocus:m,value:e,onChange:n=>{r.type==="number"&&n.currentTarget.value?t(Number(n.currentTarget.value)):t(n.currentTarget.value)},type:r.type||"text",...r,className:c&&e?"filled":""})})},f=i.div`
  ${({width:e="300px",height:t="30px"})=>p`
    width: ${e};
    height: ${t};
  `}

  background-color: transparent;
`,y=i.input`
  width: 100%;
  height: 100%;
  padding: 0 12px;

  ${({borderRadius:e="8px"})=>p`
    border-radius: ${e};
  `}

  outline: none;
  border: 1px solid ${({theme:e})=>e.colors.gray_400};

  &:focus {
    border: 1px solid ${({theme:e})=>e.colors.green};
  }
  &.filled {
    border: 1px solid ${({theme:e})=>e.colors.green};
  }

  font-family: 'PretendardMedium';
  color: ${({theme:e})=>e.colors.gray_900};
  &::placeholder {
    color: ${({theme:e})=>e.colors.gray_500};
  }
`;try{o.displayName="InputBox",o.__docgenInfo={description:"",displayName:"InputBox",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!0,type:{name:"SetterOrUpdater<any>"}}}}}catch{}const $={title:"Inputs/InputBox",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"radio",options:["text","number","date","password"]},value:{control:!1},setValue:{control:!1}}},a={args:{width:"300px",height:"30px",borderRadius:"8px",placeholder:"입력해주세요.",type:"text"}};var s,u,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: '300px',
    height: '30px',
    borderRadius: '8px',
    placeholder: '입력해주세요.',
    type: 'text'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,$ as default};
//# sourceMappingURL=InputBox.stories-4b9ec39f.js.map
