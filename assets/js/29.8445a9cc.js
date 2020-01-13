(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{509:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需引入需要在 app.scss 中引入对应样式 form.scss")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ClForm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ClFormItem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mp-colorui"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"一般用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般用法"}},[t._v("#")]),t._v(" 一般用法")]),t._v(" "),s("blockquote",[s("p",[t._v("由于小程序的 view 没有失焦事件，目前组件库只能做到 model 里面的数据更新就会进行校验，如果想做到失焦校验请手动在 Input 组件下绑定 onBlur 事件，在此事件里面进行数据更新。")])]),t._v(" "),s("blockquote",[s("p",[t._v("Form 组件必须和 FormItem 配合使用。")])]),t._v(" "),s("CodeShow",{attrs:{componentName:"form"}}),t._v(" "),s("h3",{attrs:{id:"内置函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[t._v("#")]),t._v(" 内置函数")]),t._v(" "),s("blockquote",[s("p",[t._v("rules 里面的校验函数第一个参数 rule 是传入的内置函数，以简化部分校验规则的手动实现，具体函数请查看"),s("a",{attrs:{href:"/mp-colorui-doc/util/rule"}},[t._v("内置工具")])])]),t._v(" "),s("h3",{attrs:{id:"整体校验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整体校验"}},[t._v("#")]),t._v(" 整体校验")]),t._v(" "),s("blockquote",[s("p",[t._v("在 Form 组件上加入 ref，使用 ref 下的 validate 函数，此函数接受一个回调函数，回调函数会传入一个 boolean 值作为全局校验的最终结果，具体使用方法请查看上方示例。")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 校验成功")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 校验失败")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("h3",{attrs:{id:"form-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-参数"}},[t._v("#")]),t._v(" Form 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("model")]),t._v(" "),s("td",[s("em",[t._v("数据模型")])]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("{}")])]),t._v(" "),s("tr",[s("td",[t._v("rules")]),t._v(" "),s("td",[s("em",[t._v("校验规则(rules 里面的 key 必须和 model 对应，以校验对应 model 的值，且函数必须返回 boolean 值告诉组件库校验成功或者失败，具体看上方示例")])]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("{}")])])])]),t._v(" "),s("h3",{attrs:{id:"formitem-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formitem-参数"}},[t._v("#")]),t._v(" FormItem 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("prop")]),t._v(" "),s("td",[s("em",[t._v("prop 必须和 model 里的 key 值对应")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("required")]),t._v(" "),s("td",[s("em",[t._v("添加为必输项（此功能仅仅作为界面红点，具体校验请写在 rules 里面）")])]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("em",[s("code",[t._v("false")])])])])])]),t._v(" "),s("FloatPhone",{attrs:{url:"https://yinliangdream.github.io/mp-colorui-h5-demo/#/package/formPackage/form/index"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);