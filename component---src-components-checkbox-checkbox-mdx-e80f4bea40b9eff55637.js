(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{QlKE:function(e,c,l){"use strict";l.r(c),l.d(c,"_frontmatter",(function(){return s})),l.d(c,"default",(function(){return h}));l("5hJT"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("PJhk"),l("mXGw");var a=l("/FXl"),n=l("TjRS"),d=l("ZFoC"),b=l("riXv"),i=l("hPri");l("aD51");function o(){return(o=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/checkbox/checkbox.mdx"}});var m={_frontmatter:s},t=n.a;function h(e){var c,l,h=e.components,k=function(e,c){if(null==e)return{};var l,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)l=d[a],c.indexOf(l)>=0||(n[l]=e[l]);return n}(e,["components"]);return Object(a.b)(t,o({},m,k,{components:h,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"checkbox"},"Checkbox"),Object(a.b)("h2",{id:"simple-checkbox"},"Simple checkbox"),Object(a.b)("h3",{id:"react-snippet"},"React snippet"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames';\nimport { useColorMode } from 'theme-ui';\n\nconst Checkbox = ({\n  valid = false,\n  invalid = false,\n  disabled = false,\n  className,\n  checked,\n  id,\n}) => {\n  const [colorMode] = useColorMode();\n  return (\n    <input\n      id={id}\n      type=\"checkbox\"\n      checked={checked}\n      disabled={disabled}\n      className={classNames({\n        checkbox: true,\n        [className]: !!className,\n        [`${colorMode}:checkbox-normal`]: !valid && !invalid,\n        [`${colorMode}:checkbox-valid`]: valid,\n        [`${colorMode}:checkbox-invalid`]: invalid,\n      })}\n    />\n  );\n};\n")),Object(a.b)(d.c,{__position:0,__code:'<label htmlFor="simple-checkbox-unchecked" className="flex mb-4">\n  <Checkbox id="simple-checkbox-unchecked" className="mr-2" />\n  Unchecked\n</label>\n<label htmlFor="simple-checkbox-checked" className="flex mb-4">\n  <Checkbox id="simple-checkbox-checked" checked className="mr-2" />\n  Checked\n</label>\n<label htmlFor="simple-checkbox-disabled" className="flex mb-4">\n  <Checkbox id="simple-checkbox-disabled" disabled className="mr-2" />\n  Disabled\n</label>\n<label htmlFor="simple-checkbox-disabled-checked" className="flex mb-4">\n  <Checkbox\n    id="simple-checkbox-disabled-checked"\n    disabled\n    checked\n    className="mr-2"\n  />\n  Disabled and checked\n</label>\n<label htmlFor="simple-checkbox-invalid" className="flex mb-4">\n  <Checkbox id="simple-checkbox-invalid" invalid className="mr-2" />\n  Invalid\n</label>\n<label htmlFor="simple-checkbox-valid" className="flex mb-4">\n  <Checkbox id="simple-checkbox-valid" valid className="mr-2" />\n  Valid\n</label>\n<label htmlFor="simple-checkbox-valid-checked" className="flex mb-4">\n  <Checkbox\n    id="simple-checkbox-valid-checked"\n    valid\n    checked\n    className="mr-2"\n  />\n  Valid and checked\n</label>',__scope:(c={props:k,DefaultLayout:n.a,Playground:d.c,Checkbox:b.a,OutlinedCheckbox:i.a},c.DefaultLayout=n.a,c._frontmatter=s,c),mdxType:"Playground"},Object(a.b)("label",{htmlFor:"simple-checkbox-unchecked",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-unchecked",className:"mr-2",mdxType:"Checkbox"}),"Unchecked"),Object(a.b)("label",{htmlFor:"simple-checkbox-checked",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-checked",checked:!0,className:"mr-2",mdxType:"Checkbox"}),"Checked"),Object(a.b)("label",{htmlFor:"simple-checkbox-disabled",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-disabled",disabled:!0,className:"mr-2",mdxType:"Checkbox"}),"Disabled"),Object(a.b)("label",{htmlFor:"simple-checkbox-disabled-checked",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-disabled-checked",disabled:!0,checked:!0,className:"mr-2",mdxType:"Checkbox"}),"Disabled and checked"),Object(a.b)("label",{htmlFor:"simple-checkbox-invalid",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-invalid",invalid:!0,className:"mr-2",mdxType:"Checkbox"}),"Invalid"),Object(a.b)("label",{htmlFor:"simple-checkbox-valid",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-valid",valid:!0,className:"mr-2",mdxType:"Checkbox"}),"Valid"),Object(a.b)("label",{htmlFor:"simple-checkbox-valid-checked",className:"flex mb-4"},Object(a.b)(b.a,{id:"simple-checkbox-valid-checked",valid:!0,checked:!0,className:"mr-2",mdxType:"Checkbox"}),"Valid and checked")),Object(a.b)("h2",{id:"outlined-checkbox"},"Outlined checkbox"),Object(a.b)("h3",{id:"react-snippet-1"},"React snippet"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport OutlinedLabel from '../outlined-label/ReactOutlinedLabel';\nimport Checkbox from './ReactCheckbox';\n\nconst OutlinedCheckbox = ({\n  invalid = false,\n  valid = false,\n  disabled = false,\n  checked,\n  name,\n  label,\n  className,\n}) => (\n  <OutlinedLabel\n    htmlFor={name}\n    invalid={invalid}\n    valid={valid}\n    label={label}\n    className={className}\n    disabled={disabled}\n  >\n    <Checkbox\n      checked={checked}\n      valid={valid}\n      invalid={invalid}\n      disabled={disabled}\n      id={name}\n    />\n  </OutlinedLabel>\n);\n")),Object(a.b)(d.c,{__position:1,__code:'<OutlinedCheckbox\n  label="Unchecked"\n  name="outlined-checkbox-unchecked"\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Checked"\n  name="outlined-checkbox-checked"\n  checked\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Disabled"\n  name="outlined-checkbox-disabled"\n  disabled\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Disabled and checked"\n  name="outlined-checkbox-disabled-checked"\n  disabled\n  checked\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Invalid"\n  name="outlined-checkbox-invalid"\n  invalid\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Valid"\n  name="outlined-checkbox-valid"\n  valid\n  className="mb-4"\n/>\n<OutlinedCheckbox\n  label="Valid and checked"\n  name="outlined-checkbox-valid-checked"\n  valid\n  checked\n  className="mb-4"\n/>',__scope:(l={props:k,DefaultLayout:n.a,Playground:d.c,Checkbox:b.a,OutlinedCheckbox:i.a},l.DefaultLayout=n.a,l._frontmatter=s,l),mdxType:"Playground"},Object(a.b)(i.a,{label:"Unchecked",name:"outlined-checkbox-unchecked",className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Checked",name:"outlined-checkbox-checked",checked:!0,className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Disabled",name:"outlined-checkbox-disabled",disabled:!0,className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Disabled and checked",name:"outlined-checkbox-disabled-checked",disabled:!0,checked:!0,className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Invalid",name:"outlined-checkbox-invalid",invalid:!0,className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Valid",name:"outlined-checkbox-valid",valid:!0,className:"mb-4",mdxType:"OutlinedCheckbox"}),Object(a.b)(i.a,{label:"Valid and checked",name:"outlined-checkbox-valid-checked",valid:!0,checked:!0,className:"mb-4",mdxType:"OutlinedCheckbox"})))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/checkbox/checkbox.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-checkbox-checkbox-mdx-e80f4bea40b9eff55637.js.map