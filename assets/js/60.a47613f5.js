(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    290: function(t, a, v) {
      "use strict";
      v.r(a);
      var _ = v(0),
        s = Object(_.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              v = t._self._c || a;
            return v(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                v("h2", { attrs: { id: "使用说明" } }, [
                  v(
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
                v("div", { staticClass: "language-jsx extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    v("code", [
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" ClTimeline "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      v("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"mp-colorui"')
                      ]),
                      v(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                v("h2", { attrs: { id: "一般用法" } }, [
                  v(
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
                v("h3", { attrs: { id: "时间轴数组" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#时间轴数组", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 时间轴数组")
                ]),
                t._v(" "),
                v("div", { staticClass: "language-html extra-class" }, [
                  v("pre", { pre: !0, attrs: { class: "language-html" } }, [
                    v("code", [
                      v("span", { pre: !0, attrs: { class: "token tag" } }, [
                        v("span", { pre: !0, attrs: { class: "token tag" } }, [
                          v(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("ClTimeline")
                        ]),
                        t._v(" "),
                        v(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("times")]
                        ),
                        v(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            v(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            v(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("{[]}"),
                            v(
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
                        v(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                v("h2", { attrs: { id: "参数说明" } }, [
                  v(
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
                v("h3", { attrs: { id: "timeline-参数" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#timeline-参数", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Timeline 参数")
                ]),
                t._v(" "),
                v("table", [
                  v("thead", [
                    v("tr", [
                      v("th", [t._v("参数")]),
                      t._v(" "),
                      v("th", [t._v("说明")]),
                      t._v(" "),
                      v("th", [t._v("类型")]),
                      t._v(" "),
                      v("th", [t._v("可选值")]),
                      t._v(" "),
                      v("th", [t._v("默认值")])
                    ])
                  ]),
                  t._v(" "),
                  v("tbody", [
                    v("tr", [
                      v("td", [t._v("times")]),
                      t._v(" "),
                      v("td", [v("em", [t._v("时间轴数组")])]),
                      t._v(" "),
                      v("td", [t._v("times[]")]),
                      t._v(" "),
                      v("td", [
                        v("a", { attrs: { href: "/view/timeline?id=times" } }, [
                          t._v("详情")
                        ])
                      ]),
                      t._v(" "),
                      v("td", [t._v("[]")])
                    ])
                  ])
                ]),
                t._v(" "),
                v("h3", { attrs: { id: "times" } }, [
                  v(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#times", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" times")
                ]),
                t._v(" "),
                v("table", [
                  v("thead", [
                    v("tr", [
                      v("th", [t._v("参数")]),
                      t._v(" "),
                      v("th", [t._v("说明")]),
                      t._v(" "),
                      v("th", [t._v("类型")]),
                      t._v(" "),
                      v("th", [t._v("可选值")]),
                      t._v(" "),
                      v("th", [t._v("默认值")])
                    ])
                  ]),
                  t._v(" "),
                  v("tbody", [
                    v("tr", [
                      v("td", [t._v("content")]),
                      t._v(" "),
                      v("td", [v("em", [t._v("包含的内容")])]),
                      t._v(" "),
                      v("td", [t._v("string[]")]),
                      t._v(" "),
                      v("td", [t._v("-")]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("bgColor")]),
                      t._v(" "),
                      v("td", [v("em", [t._v("背景色")])]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [
                        t._v("参考文档 "),
                        v("a", { attrs: { href: "/home/color" } }, [
                          t._v("默认色")
                        ])
                      ]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("iconColor")]),
                      t._v(" "),
                      v("td", [v("em", [t._v("图标颜色")])]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [
                        t._v("参考文档 "),
                        v(
                          "a",
                          {
                            attrs: {
                              href: "/home/color?id=%E6%A0%87%E5%87%86%E8%89%B2"
                            }
                          },
                          [t._v("默认色-标准色")]
                        )
                      ]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("icon")]),
                      t._v(" "),
                      v("td", [t._v("节点图标")]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [
                        t._v("参考文档 "),
                        v("a", { attrs: { href: "/base/icon?id=iconname" } }, [
                          t._v("Icon-"),
                          v("em", [t._v("iconName")])
                        ])
                      ]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("title")]),
                      t._v(" "),
                      v("td", [v("em", [t._v("标题")]), t._v("(左上角内容)")]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [t._v("-")]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("node")]),
                      t._v(" "),
                      v("td", [
                        v("em", [t._v("节点(若存在则会忽略其他属性)")])
                      ]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [t._v("-")]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    v("tr", [
                      v("td", [t._v("time")]),
                      t._v(" "),
                      v("td", [t._v("时间（右上角内容）")]),
                      t._v(" "),
                      v("td", [t._v("string")]),
                      t._v(" "),
                      v("td", [t._v("-")]),
                      t._v(" "),
                      v("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                v("FloatPhone", {
                  attrs: {
                    url:
                      "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/timeline/index"
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
      a.default = s.exports;
    }
  }
]);
