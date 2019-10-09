(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    252: function(t, v, e) {
      "use strict";
      e.r(v);
      var _ = e(0),
        s = Object(_.a)(
          {},
          function() {
            var t = this,
              v = t.$createElement,
              e = t._self._c || v;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                e("h2", { attrs: { id: "使用指南" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#使用指南", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 使用指南")
                ]),
                t._v(" "),
                e("div", { staticClass: "language-js extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    e("code", [
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v(" ClUtils "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v(" "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("from")]
                      ),
                      t._v(" "),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"mp-colorui"')
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// 使用")]
                      ),
                      t._v("\n\nClUtils"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("rule"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("phone")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v('"1888888888"')
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(";")]
                      ),
                      t._v("\n")
                    ])
                  ])
                ]),
                e("h2", { attrs: { id: "内置函数" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#内置函数", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" 内置函数")
                ]),
                t._v(" "),
                e("table", [
                  e("thead", [
                    e("tr", [
                      e("th", [t._v("函数名")]),
                      t._v(" "),
                      e("th", [t._v("说明")]),
                      t._v(" "),
                      e("th", [t._v("传入参数")])
                    ])
                  ]),
                  t._v(" "),
                  e("tbody", [
                    e("tr", [
                      e("td", [e("strong", [t._v("phone")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("手机号码正则校验")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.phone("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("email")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("email 地址校验")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.email("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("range")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("数值范围校验")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.range("),
                        e("code", [t._v("min")]),
                        t._v(","),
                        e("code", [t._v("max")]),
                        t._v(","),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("required")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为空")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.required("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("en")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为纯英文")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.en("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("cn")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为纯中文")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.zn("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("money")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为金钱数字")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.money("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("code")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否字母数字组合")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.code("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("number")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为纯数字")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.number("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("ip")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为 ip 地址")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.ip("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("url")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为合法 url")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.url("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
                    ]),
                    t._v(" "),
                    e("tr", [
                      e("td", [e("strong", [t._v("idCard")])]),
                      t._v(" "),
                      e("td", [e("em", [t._v("是否为合法身份证")])]),
                      t._v(" "),
                      e("td", [
                        t._v("ClUtils.rule.idCard("),
                        e("code", [t._v("value")]),
                        t._v(")")
                      ])
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
      v.default = s.exports;
    }
  }
]);
