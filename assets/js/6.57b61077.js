(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    241: function(f, o, t) {
      "use strict";
      t.r(o);
      var l = {
          name: "BaseColor",
          data: function() {
            return {
              baseColor: [
                { title: "red", color: "#e54d42", fontColor: "#ffffff" },
                { title: "orange", color: "#f37b1d", fontColor: "#ffffff" },
                { title: "yellow", color: "#fbbd08", fontColor: "#ffffff" },
                { title: "olive", color: "#8dc63f", fontColor: "#ffffff" },
                { title: "green", color: "#39b54a", fontColor: "#ffffff" },
                { title: "cyan", color: "#1cbbb4", fontColor: "#ffffff" },
                { title: "blue", color: "#0081ff", fontColor: "#ffffff" },
                { title: "purple", color: "#6739b6", fontColor: "#ffffff" },
                { title: "mauve", color: "#9c26b0", fontColor: "#ffffff" },
                { title: "pink", color: "#e03997", fontColor: "#ffffff" },
                { title: "brown", color: "#a5673f", fontColor: "#ffffff" },
                { title: "grey", color: "#8799a3", fontColor: "#ffffff" },
                { title: "black", color: "#333333", fontColor: "#ffffff" },
                { title: "gray", color: "#aaaaaa", fontColor: "#ffffff" },
                { title: "white", color: "#ffffff", fontColor: "#000000" }
              ]
            };
          }
        },
        r = t(0),
        e = Object(r.a)(
          l,
          function() {
            var f = this,
              o = f.$createElement,
              t = f._self._c || o;
            return t(
              "div",
              {
                staticStyle: {
                  display: "flex",
                  "flex-wrap": "wrap",
                  "justify-content": "flex-start"
                }
              },
              f._l(f.baseColor, function(o) {
                return t(
                  "div",
                  {
                    style:
                      "border-radius: 8px; width: 120px; height: 60px; background-color: " +
                      o.color +
                      "; color: " +
                      o.fontColor +
                      "; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px"
                  },
                  [
                    t("div", [f._v(f._s(o.title))]),
                    f._v(" "),
                    t("div", [f._v(f._s(o.color))])
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "88b3a584",
          null
        );
      o.default = e.exports;
    }
  }
]);
