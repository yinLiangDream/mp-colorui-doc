(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    237: function(o, t, l) {
      "use strict";
      l.r(t);
      var e = {
          name: "lightColor",
          data: function() {
            return {
              lightColor: [
                { title: "redLight", color: "#fadbd9", fontColor: "#e54d42" },
                {
                  title: "orangeLight",
                  color: "#fde6d2",
                  fontColor: "#f37b1d"
                },
                {
                  title: "yellowLight",
                  color: "#fef2ce",
                  fontColor: "#fbbd08"
                },
                { title: "oliveLight", color: "#e8f4d9", fontColor: "#8dc63f" },
                { title: "greenLight", color: "#d7f0db", fontColor: "#39b54a" },
                { title: "cyanLight", color: "#d2f1f0", fontColor: "#1cbbb4" },
                { title: "blueLight", color: "#cce6ff", fontColor: "#0081ff" },
                {
                  title: "purpleLight",
                  color: "#e1d7f0",
                  fontColor: "#6739b6"
                },
                { title: "mauveLight", color: "#ebd4ef", fontColor: "#9c26b0" },
                { title: "pinkLight", color: "#f9d7ea", fontColor: "#e03997" },
                { title: "brownLight", color: "#ede1d9", fontColor: "#a5673f" },
                { title: "greyLight", color: "#e7ebed", fontColor: "#8799a3" }
              ]
            };
          }
        },
        r = l(0),
        i = Object(r.a)(
          e,
          function() {
            var o = this,
              t = o.$createElement,
              l = o._self._c || t;
            return l(
              "div",
              {
                staticStyle: {
                  display: "flex",
                  "flex-wrap": "wrap",
                  "justify-content": "flex-start"
                }
              },
              o._l(o.lightColor, function(t) {
                return l(
                  "div",
                  {
                    style:
                      "border-radius: 8px; width: 120px; height: 60px; background-color: " +
                      t.color +
                      "; color: " +
                      t.fontColor +
                      "; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px"
                  },
                  [
                    l("div", [o._v(o._s(t.title))]),
                    o._v(" "),
                    l("div", [o._v(o._s(t.color))])
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "d64bb21c",
          null
        );
      t.default = i.exports;
    }
  }
]);
