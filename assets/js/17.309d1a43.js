(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    281: function(t, a, s) {
      "use strict";
      s.r(a);
      var e = s(0),
        n = Object(e.a)(
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
                      t._v(" ClModal "),
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
                    s("code", [t._v("onClose")]),
                    t._v(", "),
                    s("code", [t._v("onCancel")]),
                    t._v(" 方法触发时，请再手动设置 "),
                    s("code", [t._v("show")]),
                    t._v(" 的参数为 "),
                    s("code", [t._v("false")]),
                    t._v("，否则该 "),
                    s("code", [t._v("props")]),
                    t._v(" 参数会一直为 "),
                    s("code", [t._v("true")]),
                    t._v("，并会随其他 "),
                    s("code", [t._v("modal")]),
                    t._v(" 一起再次出现。")
                  ])
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
                s("h3", { attrs: { id: "显示模态框" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#显示模态框", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 显示模态框")
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
                            [t._v("ClModal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("show")]
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
                            [t._v("ClModal")]
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
                s("h3", { attrs: { id: "设置标题" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#设置标题", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 设置标题")
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
                            [t._v("ClModal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("title")]
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
                            t._v("我是标题"),
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
                            [t._v("ClModal")]
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
                s("h3", { attrs: { id: "设置右上角关闭按钮" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#设置右上角关闭按钮",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 设置右上角关闭按钮")
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
                            [t._v("ClModal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("close")]
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
                            [t._v("ClModal")]
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
                s("h3", { attrs: { id: "设置点击遮罩层关闭" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#设置点击遮罩层关闭",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 设置点击遮罩层关闭")
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
                            [t._v("ClModal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("closeWithShadow")]
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
                            [t._v("ClModal")]
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
                s("h3", { attrs: { id: "自定义操作栏" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#自定义操作栏", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 自定义操作栏")
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
                      t._v(" action "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
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
                            [t._v("ClButton")]
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
                        [t._v("点我")]
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
                            [t._v("ClButton")]
                          )
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
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
                            [t._v("ClModal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("renderAction")]
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
                            t._v("action"),
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
                            [t._v("ClModal")]
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
                s("h3", { attrs: { id: "自定义标题栏" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#自定义标题栏", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 自定义标题栏")
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
                      t._v(" title "),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("=")]
                      ),
                      t._v(" "),
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
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        { pre: !0, attrs: { class: "token plain-text" } },
                        [t._v("我是标题")]
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
                            [t._v("Clmodal")]
                          )
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("renderTitle")]
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
                            t._v("title"),
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
                            [t._v("Clmodal")]
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
                s("h3", { attrs: { id: "modal-参数" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#modal-参数", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Modal 参数")
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
                      s("td", [t._v("show")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("是否显示")])]),
                      t._v(" "),
                      s("td", [t._v("boolean")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("true")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("false")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("false")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("title")]),
                      t._v(" "),
                      s("td", [t._v("标题")]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("close")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("是否显示关闭按钮")])]),
                      t._v(" "),
                      s("td", [t._v("boolean")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("true")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("false")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("true")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("custom")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("是否自定义整个 modal")])]),
                      t._v(" "),
                      s("td", [t._v("boolean")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("true")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("false")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("false")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("closeWithShadow")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("点击阴影关闭")])]),
                      t._v(" "),
                      s("td", [t._v("boolean")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("true")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("false")])])
                      ]),
                      t._v(" "),
                      s("td", [s("em", [s("code", [t._v("false")])])])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("titleBgColor")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("标题栏背景色")])]),
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
                      s("td", [t._v("actionColor")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("操作栏颜色")])]),
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
                      s("td", [t._v("padding")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("padding 距离")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [
                        s("em", [s("code", [t._v("xsmall")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("small")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("normal")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("large")])]),
                        t._v(","),
                        s("em", [s("code", [t._v("xlarge")])])
                      ]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("actions")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("操作栏操作组")])]),
                      t._v(" "),
                      s("td", [t._v("actions[]")]),
                      t._v(" "),
                      s("td", [
                        s(
                          "a",
                          { attrs: { href: "/action/modal?id=actions" } },
                          [t._v("详情")]
                        )
                      ]),
                      t._v(" "),
                      s("td", [t._v("[]")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("renderAction")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("自定义操作栏")])]),
                      t._v(" "),
                      s("td", [t._v("Element")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("renderTitle")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("自定义标题栏")])]),
                      t._v(" "),
                      s("td", [t._v("Element")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "actions" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#actions", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" actions")
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
                      s("td", [s("em", [t._v("action 文字")])]),
                      t._v(" "),
                      s("td", [t._v("string")]),
                      t._v(" "),
                      s("td", [t._v("-")]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("color")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("action 颜色")])]),
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
                      s("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "modal-事件" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#modal-事件", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Modal 事件")
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
                      s("td", [s("em", [t._v("操作栏点击事件")])]),
                      t._v(" "),
                      s("td", [t._v("index，index 为操作栏第几个")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("onCancel")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("点击 阴影 关闭事件")])]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ]),
                    t._v(" "),
                    s("tr", [
                      s("td", [t._v("onClose")]),
                      t._v(" "),
                      s("td", [s("em", [t._v("点击 关闭 关闭事件")])]),
                      t._v(" "),
                      s("td", [t._v("-")])
                    ])
                  ])
                ]),
                t._v(" "),
                s("FloatPhone", {
                  attrs: {
                    url:
                      "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/modal/index"
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
      a.default = n.exports;
    }
  }
]);
