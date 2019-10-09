(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    242: function(s, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        e = Object(n.a)(
          {},
          function() {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": s.$parent.slotKey } },
              [
                a("h2", { attrs: { id: "使用前准备" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#使用前准备", "aria-hidden": "true" }
                    },
                    [s._v("#")]
                  ),
                  s._v(" 使用前准备")
                ]),
                s._v(" "),
                a("p", [
                  s._v("在使用之前，推荐学习 "),
                  a("code", [s._v("Taro")]),
                  s._v(" 和 "),
                  a("code", [s._v("ES2015")]),
                  s._v("，并正确配置 "),
                  a("code", [s._v("Node.js")]),
                  s._v(" v8.x 或以上版本")
                ]),
                s._v(" "),
                a("h2", { attrs: { id: "如何使用" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#如何使用", "aria-hidden": "true" }
                    },
                    [s._v("#")]
                  ),
                  s._v(" 如何使用")
                ]),
                s._v(" "),
                a("h4", { attrs: { id: "引入所需组件" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#引入所需组件", "aria-hidden": "true" }
                    },
                    [s._v("#")]
                  ),
                  s._v(" 引入所需组件")
                ]),
                s._v(" "),
                a("p", [
                  s._v("在代码中 "),
                  a("code", [s._v("import")]),
                  s._v(" 需要的组件并按照文档说明使用")
                ]),
                s._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// page.js")]
                      ),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("import")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v(" ClButton "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("from")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v('"mp-colorui"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(";")]
                      ),
                      s._v("\n")
                    ])
                  ])
                ]),
                a("p", [a("strong", [s._v("引入组件样式")])]),
                s._v(" "),
                a("p", [
                  a("strong", [s._v("全局引入（CSS 中）：")]),
                  s._v(" 在 "),
                  a("code", [s._v("app.scss")]),
                  s._v(" 样式文件中 "),
                  a("code", [s._v("import")]),
                  s._v(" 组件样式并按照文档说明使用")
                ]),
                s._v(" "),
                a("div", { staticClass: "language-scss extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-scss" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("@import")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v('"~mp-colorui/dist/style/index.scss"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(";")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// 引入组件样式")]
                      ),
                      s._v("\n")
                    ])
                  ])
                ]),
                a("h2", { attrs: { id: "示例" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#示例", "aria-hidden": "true" }
                    },
                    [s._v("#")]
                  ),
                  s._v(" 示例")
                ]),
                s._v(" "),
                a("p", [
                  s._v("在 "),
                  a("code", [s._v("/myApp/src/pages/index/index.tsx")]),
                  s._v(" 文件添加以下代码")
                ]),
                s._v(" "),
                a("div", { staticClass: "language-tsx extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-tsx" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("import")]
                      ),
                      s._v(" Taro"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(",")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v(" Component"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(",")]
                      ),
                      s._v(" Config "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("from")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'@tarojs/taro'")
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("import")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v(" View "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("from")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'@tarojs/components'")
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("import")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v(" ClButton "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("from")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'mp-colorui'")
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("import")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'./index.scss'")
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("export")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("default")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("class")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [s._v("Index")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("extends")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [s._v("Component")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n  config"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(":")]
                      ),
                      s._v(" Config "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v("=")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n    navigationBarTitleText"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(":")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'首页'")
                      ]),
                      s._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      s._v("\n\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [s._v("render")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(")")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("return")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("(")]
                      ),
                      s._v("\n      "),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [s._v("<")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [s._v("View")]
                          )
                        ]),
                        s._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [s._v("className")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("'")]
                            ),
                            s._v("index"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("'")]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [s._v(">")]
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [s._v("\n         ")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [s._v("<")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [s._v("ClButton")]
                          )
                        ]),
                        s._v(" "),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [s._v("shape")]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("=")]
                            ),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("'")]
                            ),
                            s._v("round"),
                            a(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [s._v("'")]
                            )
                          ]
                        ),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [s._v(">")]
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [s._v("按钮文案")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [s._v("</")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [s._v("AtButton")]
                          )
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [s._v(">")]
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [s._v("\n      ")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token tag" } }, [
                        a("span", { pre: !0, attrs: { class: "token tag" } }, [
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [s._v("</")]
                          ),
                          a(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [s._v("View")]
                          )
                        ]),
                        a(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [s._v(">")]
                        )
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [s._v("\n    )\n  }\n}\n")]
                      )
                    ])
                  ])
                ]),
                a("p", [
                  s._v("在 "),
                  a("code", [s._v("/myApp/src/app.scss")]),
                  s._v(" 文件中添加如下代码")
                ]),
                s._v(" "),
                a("div", { staticClass: "language-scss extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-scss" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("@import")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v('"~mp-colorui/dist/style/index.scss"')
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(";")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// 引入组件样式，仅需引入一次即可")]
                      ),
                      s._v("\n")
                    ])
                  ])
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = e.exports;
    }
  }
]);
