(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    253: function(t, a, s) {
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
                      t._v(" ClVerticalTab"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" ClVerticalTabCell "),
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
                s("h3", { attrs: { id: "用法" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#用法", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 用法")
                ]),
                t._v(" "),
                s("blockquote", [
                  s("p", [
                    t._v(
                      "注：ClVerticalTab 内部元素必须由一层 View 包裹，且 id 必须和 tabs 一一对应。"
                    )
                  ])
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
                      t._v(" tabs "),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  name"),
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
                      t._v("\n  id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'id-1'")
                      ]),
                      t._v("\n"),
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
                      t._v("\n  name"),
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
                      t._v("\n  id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'id-2'")
                      ]),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
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
                            [t._v("ClVerticalTab")]
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
                            t._v("tabs"),
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
                          [t._v("height")]
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
                              [t._v("600")]
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
                        [t._v("\n  ")]
                      ),
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
                          [t._v("id")]
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
                            t._v("id-1"),
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
                        [t._v("\n    ")]
                      ),
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("我是内容")]
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("\n  ")]
                      ),
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
                          [t._v("id")]
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
                            t._v("id-2"),
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
                        [t._v("\n    ")]
                      ),
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("我是内容")]
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
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
                            [t._v("ClVerticalTab")]
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("const")]
                      ),
                      t._v(" tabs "),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  name"),
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
                      t._v("\n  id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'id-1'")
                      ]),
                      t._v("\n"),
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
                      t._v("\n  name"),
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
                      t._v("\n  id"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'id-2'")
                      ]),
                      t._v("\n"),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
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
                            [t._v("ClVerticalTab")]
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
                            t._v("tabs"),
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
                          [t._v("current")]
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
                            t._v("tabs"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("[")]
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
                              [t._v("]")]
                            ),
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
                          [t._v("height")]
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
                              [t._v("600")]
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
                        [t._v("\n  ")]
                      ),
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
                          [t._v("id")]
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
                            t._v("id-1"),
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
                        [t._v("\n    ")]
                      ),
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("我是内容")]
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
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
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("\n  ")]
                      ),
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
                          [t._v("id")]
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
                            t._v("id-2"),
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
                        [t._v("\n    ")]
                      ),
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("我是内容")]
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
                            [t._v("ClVerticalTabCell")]
                          )
                        ]),
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
                            [t._v("ClVerticalTab")]
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
                s("h3", { attrs: { id: "verticaltab-参数" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#verticaltab-参数",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" VerticalTab 参数")
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
                      s("td", [t._v("height")]),
                      t._v(" "),
                      s("td", [t._v("高度")]),
                      t._v(" "),
                      s("td", [t._v("number")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("tabs")]),
                      t._v(" "),
                      s("td", [t._v("标签页数组")]),
                      t._v(" "),
                      s("td", [t._v("tabs[]")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("[]")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("current")]),
                      t._v(" "),
                      s("td", [t._v("默认激活的标签页")]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("backTop")]),
                      t._v(" "),
                      s("td", [t._v("点击标题回到最上方")]),
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
                      s("td", [t._v("id")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("Tab id")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("name")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("Tab 名称")])]),
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
                s("FloatPhone", {
                  attrs: {
                    url:
                      "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/verticalTab/index"
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
