(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    254: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(0),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h3", { attrs: { id: "使用说明" } }, [
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
                      t._v(" ClTabs "),
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
                s("h3", { attrs: { id: "一般用法" } }, [
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
                s("blockquote", [
                  s("p", [
                    t._v(
                      "注：ClTabs 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。"
                    )
                  ])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "常用用法" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#常用用法", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 常用用法")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-jsx extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-jsx" } }, [
                    s("code", [
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" verbTabs "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("[")]
                      ),
                      t._v("\n  "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    text"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'标签 1'")
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'verb-1'")
                      ]),
                      t._v("\n  "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    text"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'标签 2'")
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'verb-2'")
                      ]),
                      t._v("\n  "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    text"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'标签 3'")
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n    id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'verb-3'")
                      ]),
                      t._v("\n  "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("]")]
                      ),
                      t._v("\n\n"),
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
                            [t._v("ClTabs")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("tabs")]
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
                            t._v("verbTabs"),
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
                              [t._v("'")]
                            ),
                            t._v("verb"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("'")]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("\n  ")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n    verbTabs"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("map")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("item")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=>")]
                      ),
                      t._v(" "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("\n    \t"),
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
                            [t._v("View")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("key")]
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
                            t._v("item"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("id"),
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
                          [t._v("id")]
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
                            t._v("item"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v(".")]
                            ),
                            t._v("id"),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("item"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("text"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("View")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n\t"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("\n")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClTabs")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "tab-排列类型" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tab-排列类型", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" tab 排列类型")
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
                            [t._v("ClTabs")]
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
                            t._v("center"),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("...")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClTabs")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "背景色" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#背景色", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 背景色")
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
                            [t._v("ClTabs")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("bgColor")]
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
                            t._v("black"),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("...")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClTabs")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "激活的颜色" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#激活的颜色", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 激活的颜色")
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
                            [t._v("ClTabs")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("activeColor")]
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
                            t._v("white"),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("...")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClTabs")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "默认激活的索引" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#默认激活的索引", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 默认激活的索引")
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
                            [t._v("ClTabs")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("active")]
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
                              [t._v("0")]
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("...")]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token class-name" } },
                            [t._v("ClTabs")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
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
                s("h3", { attrs: { id: "tabs-参数" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tabs-参数", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Tabs 参数")
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
                      s("td", [s("em", [t._v("tabs 类型选择")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("default")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("center")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("verb")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("default")])])])
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
                      s("td", [t._v("activeColor")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("激活的颜色")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        t._v("参考文档 "),
                        s(
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
                      s("td", [s("em", [s("code", [t._v("black")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("active")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("激活的下标")])]),
                      t._v(" "),
                      s("td", [t._v("number")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("0")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("tabs")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("tab 数组")])]),
                      t._v(" "),
                      s("td", [t._v("tabs[]")]),
                      t._v(" "),
                      s("td", [
                        s("a", { attrs: { href: "/navigate/tabs?id=tabs" } }, [
                          t._v("详情")
                        ])
                      ]),
                      t._v(" "),
                      s("td", [t._v("[]")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("touchMove")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("是否可拖动")])]),
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
                s("h3", { attrs: { id: "tabs" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tabs", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" tabs")
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
                      s("td", [t._v("text")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("标题")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("icon")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("图标")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        t._v("参考文档 "),
                        s("a", { attrs: { href: "/base/icon?id=iconname" } }, [
                          t._v("Icon-"),
                          s("em", [t._v("iconName")])
                        ])
                      ]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("id")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("唯一标识符")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "tabs-事件" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tabs-事件", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Tabs 事件")
                ]),
                t._v(" "),
                s("table", [
                  s("thead", [
                    s("tr", [
                      s("th", [t._v("事件名称")]),
                      t._v(" "),
                      s("th", [t._v("说明")]),
                      t._v(" "),
                      s("th", [t._v("参数返回")])
                    ])
                  ]),
                  t._v(" "),
                  s("tbody", [
                    s("tr", [
                      s("td", [t._v("onClick")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("点击事件")])]),
                      t._v(" "),
                      s("td", [t._v("index")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("FloatPhone", {
                  attrs: {
                    url:
                      "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/tabs/index"
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
      a.default = e.exports;
    }
  }
]);
