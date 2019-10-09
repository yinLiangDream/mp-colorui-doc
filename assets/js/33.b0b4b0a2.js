(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    271: function(s, t, e) {
      "use strict";
      e.r(t);
      var a = e(0),
        r = Object(a.a)(
          {},
          function() {
            var s = this,
              t = s.$createElement,
              e = s._self._c || t;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": s.$parent.slotKey } },
              [
                e("p", [
                  e("code", [s._v("MP-ColorUI")]),
                  s._v(
                    "目前只有一套默认的配色，为满足业务和品牌上多样化的视觉需求，UI 库支持一定程度的样式定制（请确保微信基础库版本在 v2.2.3 以上）。"
                  )
                ]),
                s._v(" "),
                e("h2", { attrs: { id: "scss-主题变量覆盖" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#scss-主题变量覆盖",
                        "aria-hidden": "true"
                      }
                    },
                    [s._v("#")]
                  ),
                  s._v(" SCSS 主题变量覆盖")
                ]),
                s._v(" "),
                e("p", [
                  e("code", [s._v("MP-ColorUI")]),
                  s._v(
                    " 的组件样式是使用 SCSS 编写的，如果你的项目中也使用了 SCSS，那么可以直接在项目中改变 "
                  ),
                  e("code", [s._v("MP-ColorUI")]),
                  s._v(" 的样式变量。")
                ]),
                s._v(" "),
                e("p", [
                  s._v("新建一个主题样式文件，例如 "),
                  e("code", [s._v("custom-variables.scss")]),
                  s._v("，并写入以下内容：")
                ]),
                s._v(" "),
                e("div", { staticClass: "language-scss extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-scss" } }, [
                    e("code", [
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [
                          s._v(
                            "/* 改变主题变量，具体变量名可查看 默认色 页面 */"
                          )
                        ]
                      ),
                      s._v("\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token property" } },
                        [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token variable" } },
                            [s._v("$grey")]
                          )
                        ]
                      ),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(":")]
                      ),
                      s._v(" #eeeeee"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(";")]
                      ),
                      s._v("\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("/* 引入 Taro UI 默认样式 */")]
                      ),
                      s._v("\n"),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("@import")]
                      ),
                      s._v(" "),
                      e("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v('"~mp-colorui/dist/style/index.scss"')
                      ]),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(";")]
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
      t.default = r.exports;
    }
  }
]);
