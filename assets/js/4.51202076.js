(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    232: function(t, e, i) {
      "use strict";
      var o = i(99);
      i.n(o).a;
    },
    240: function(t, e, i) {
      "use strict";
      i.r(e);
      var o = {
          name: "floatPhone",
          data: function() {
            return { show: !0 };
          },
          props: { url: { default: "" } },
          methods: {
            toggleButton: function() {
              this.show = !this.show;
            }
          },
          mounted: function() {
            var t = this,
              e = i(211);
            setTimeout(function() {
              var i = document.getElementById("qrcode");
              e.toCanvas(i, t.url);
            }, 100);
          }
        },
        n = (i(232), i(0)),
        s = Object(n.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "div",
              {
                staticStyle: {
                  position: "fixed",
                  right: "10px",
                  top: "6%",
                  "z-index": "10",
                  display: "flex",
                  "flex-direction": "column",
                  "justify-content": "center",
                  "align-items": "center"
                }
              },
              [
                i(
                  "div",
                  {
                    staticStyle: {
                      width: "364px",
                      display: "flex",
                      "flex-wrap": "wrap",
                      "justify-content": "center",
                      "align-items": "center",
                      "font-size": "12px",
                      color: "lightcoral"
                    }
                  },
                  [
                    i("p", [t._v("部分功能需扫码预览才能正常显示。")]),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "button",
                        attrs: { id: "showDemo" },
                        on: { click: t.toggleButton }
                      },
                      [t._v("\n      隐藏/显示\n    ")]
                    )
                  ]
                ),
                t._v(" "),
                i("iframe", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.show,
                      expression: "show"
                    }
                  ],
                  staticStyle: {
                    border: "1px solid antiquewhite",
                    "border-radius": "20px"
                  },
                  attrs: {
                    id: "iframe",
                    src: t.url,
                    height: "568",
                    width: "316"
                  }
                }),
                t._v(" "),
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                      }
                    ],
                    staticStyle: {
                      "background-color": "white",
                      "border-radius": "20px",
                      overflow: "hidden",
                      "margin-top": "10px"
                    }
                  },
                  [
                    i("div", { staticStyle: { "text-align": "center" } }, [
                      t._v("H5及小程序二维码")
                    ]),
                    t._v(" "),
                    i("canvas", { attrs: { id: "qrcode" } }),
                    t._v(" "),
                    i("img", {
                      staticStyle: { width: "180px", height: "180px" },
                      attrs: {
                        src:
                          "https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/coloruiqrcode.png"
                      }
                    })
                  ]
                )
              ]
            );
          },
          [],
          !1,
          null,
          "7ec2d7a9",
          null
        );
      e.default = s.exports;
    },
    99: function(t, e, i) {}
  }
]);
