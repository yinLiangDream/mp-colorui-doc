(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    239: function(e, l, r) {
      "use strict";
      r.r(l);
      var t = {
          name: "GradualColor",
          data: function() {
            return {
              gradualColor: [
                { title: "gradualRed", color: ["#f43f3b", "#ec008c"] },
                { title: "gradualOrange", color: ["#ff9700", "#ed1c24"] },
                { title: "gradualGreen", color: ["#39b54a", "#8dc63f"] },
                { title: "gradualPurple", color: ["#9000ff", "#5e00ff"] },
                { title: "gradualPink", color: ["#ec008c", "#6739b6"] },
                { title: "gradualBlue", color: ["#0081ff", "#1cbbb4"] }
              ]
            };
          }
        },
        a = r(0),
        o = Object(a.a)(
          t,
          function() {
            var e = this,
              l = e.$createElement,
              r = e._self._c || l;
            return r(
              "div",
              {
                staticStyle: {
                  display: "flex",
                  "flex-wrap": "wrap",
                  "justify-content": "flex-start"
                }
              },
              e._l(e.gradualColor, function(l) {
                return r(
                  "div",
                  {
                    style:
                      "border-radius: 8px; width: 200px; height: 60px; background: linear-gradient(45deg, " +
                      l.color[0] +
                      ", " +
                      l.color[1] +
                      "); color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px"
                  },
                  [
                    r("div", [e._v(e._s(l.title))]),
                    e._v(" "),
                    r("div", [
                      e._v(e._s(l.color[0]) + " ~ " + e._s(l.color[1]))
                    ])
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "a66fc92e",
          null
        );
      l.default = o.exports;
    }
  }
]);
