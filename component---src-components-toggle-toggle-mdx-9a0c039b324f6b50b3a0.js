(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{M8md:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return p}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),o=t("TjRS"),s=t("ZFoC"),r=t("nnCz");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/toggle/toggle.mdx"}});var i={_frontmatter:c},m=o.a;function p(e){var n,t=e.components,p=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(m,l({},i,p,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"toggle"},"Toggle"),Object(a.b)("h3",{id:"react-snippet"},"React snippet"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames';\nimport { useColorMode } from 'theme-ui';\n\nconst Toggle = ({ children, className, ...rest }) => {\n  const [colorMode] = useColorMode();\n  return (\n    <label\n      className={classNames(\n        'flex',\n        'items-center',\n        'justify-between',\n        className\n      )}\n    >\n      <span className=\"pr-4\">{children}</span>\n      <input\n        type=\"checkbox\"\n        className={classNames('toggle-input', `${colorMode}:toggle-input`)}\n        {...rest}\n      />\n      <span className=\"toggle-slider\" />\n    </label>\n  );\n};\n")),Object(a.b)(s.c,{__position:0,__code:'<div className="w-48">\n  <Toggle className="mb-6">Regular</Toggle>\n  <Toggle disabled>Disabled</Toggle>\n</div>',__scope:(n={props:p,DefaultLayout:o.a,Playground:s.c,Toggle:r.a},n.DefaultLayout=o.a,n._frontmatter=c,n),mdxType:"Playground"},Object(a.b)("div",{className:"w-48"},Object(a.b)(r.a,{className:"mb-6",mdxType:"Toggle"},"Regular"),Object(a.b)(r.a,{disabled:!0,mdxType:"Toggle"},"Disabled"))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/toggle/toggle.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-toggle-toggle-mdx-9a0c039b324f6b50b3a0.js.map