(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    279: function(t, a, s) {
      "use strict";
      s.r(a);
      var e = s(0),
        r = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h2", { attrs: { id: "使用说明" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#使用说明", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 使用说明")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-jsx extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" ClMessage "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"mp-colorui"')
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "注意" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#注意", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 注意")
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v(
                      "若引用该组件后 duration 发生变化，请自己手动设置 duration，由于单一实例问题，会默认使用前一个状态的 duration。"
                    )
                  ]),
                  t._v(" "),
                  s("p", [t._v("onClose 方法中请手动设置 show 为 false。")])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "一般用法" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#一般用法", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 一般用法")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "类型" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#类型", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 类型")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-jsx extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClMessage")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("type")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("success"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("message")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("我是消息"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "持续时间" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#持续时间", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 持续时间")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-jsx extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClMessage")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("duration")]
                        ),
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token script language-javascript" }
                          },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: {
                                  class: "token script-punctuation punctuation"
                                }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("{")]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token number" } },
                              [t._v("2")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("}")]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("message")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("我是消息"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h2", { attrs: { id: "参数说明" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#参数说明", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 参数说明")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "message-参数" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#message-参数", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Message 参数")
                ]),
                t._v(" "),
                s("table", [
                  s("thead", [
                    s("tr", [
                      s("th", [t._v("参数")]),
                      t._v(" "),
                      s("th", [t._v("说明")]),
                      t._v(" "),
                      s("th", [t._v("类型")]),
                      t._v(" "),
                      s("th", [t._v("可选值")]),
                      t._v(" "),
                      s("th", [t._v("默认值")])
                    ])
                  ]),
                  t._v(" "),
                  s("tbody", [
                    s("tr", [
                      s("td", [t._v("type")]),
                      t._v(" "),
                      s("td", [
                        s("em", [t._v("类型，在 custom 下可自定义颜色")])
                      ]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("success")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("error")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("warn")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("info")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("custom")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("info")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("bgColor")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("背景色")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        t._v("参考文档 "),
                        s("a", { attrs: { href: "/home/color" } }, [
                          t._v("默认色")
                        ])
                      ]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("message")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("消息文本")])]),
                      t._v(" "),
                      s("td", [t._v("number")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("0")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("duration")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("持续时间")])]),
                      t._v(" "),
                      s("td", [t._v("number")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("3")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("show")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("是否显示")])]),
                      t._v(" "),
                      s("td", [t._v("boolean")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("false")])])])
                    ])
                  ])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "message-事件" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#message-事件", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Message 事件")
                ]),
                t._v(" "),
                s("table", [
                  s("thead", [
                    s("tr", [
                      s("th", [t._v("事件名称")]),
                      t._v(" "),
                      s("th", [t._v("说明")]),
                      t._v(" "),
                      s("th", [t._v("参数")])
                    ])
                  ]),
                  t._v(" "),
                  s("tbody", [
                    s("tr", [
                      s("td", [s("strong", [t._v("onClose")])]),
                      t._v(" "),
                      s("td", [t._v("关闭时触发")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("FloatPhone", {
                  attrs: {
                    url:
                      "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/message/index"
                  }
                })
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = r.exports;
    }
  }
]);
