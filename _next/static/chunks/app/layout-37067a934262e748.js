(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    45: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_f367f3",
        variable: "__variable_f367f3",
      };
    },
    120: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Noto Serif JP', 'Noto Serif JP Fallback'",
          fontStyle: "normal",
        },
        className: "__className_c28f5d",
        variable: "__variable_c28f5d",
      };
    },
    1371: (e, r, s) => {
      Promise.resolve().then(s.bind(s, 1673)),
        Promise.resolve().then(s.t.bind(s, 45, 23)),
        Promise.resolve().then(s.t.bind(s, 120, 23)),
        Promise.resolve().then(s.t.bind(s, 7363, 23)),
        Promise.resolve().then(s.t.bind(s, 9324, 23));
    },
    1586: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("CreditCard", [
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
        ],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ]);
    },
    1673: (e, r, s) => {
      "use strict";
      s.d(r, { default: () => f });
      var t = s(5155),
        a = s(3127),
        l = s(4416);
      let o = (0, s(9946).A)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
      var n = s(6766),
        i = s(6874),
        c = s.n(i),
        d = s(2115),
        h = s(7168),
        x = s(7895),
        m = s(7802),
        u = s(7354);
      function f() {
        let [e, r] = (0, d.useState)(!1);
        return (0, t.jsx)("nav", {
          className:
            "fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800",
          children: (0, t.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center justify-between h-16",
                children: [
                  (0, t.jsxs)(c(), {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                      (0, t.jsx)(n.default, {
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-circle-min-0a4nTptsQsYrDxKl2BsiJNKWbYKPz4.png",
                        alt: "Naka Go",
                        width: 40,
                        height: 40,
                        className: "drop-shadow-lg",
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-white",
                        children: [
                          (0, t.jsx)("div", {
                            className: "font-title font-bold text-lg",
                            children: "NAKA GO",
                          }),
                          (0, t.jsx)("div", {
                            className: "text-xs text-gray-400 font-serif",
                            children: "中号",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "hidden lg:flex items-center gap-4",
                    children: [
                      (0, t.jsx)(h.$, {
                        asChild: !0,
                        size: "sm",
                        className:
                          "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all duration-300",
                        children: (0, t.jsxs)(c(), {
                          href: "/pfp-creator",
                          className: "flex items-center gap-2",
                          children: [
                            (0, t.jsx)(a.A, { className: "h-4 w-4" }),
                            (0, t.jsx)("span", {
                              className: "font-semibold text-sm",
                              children: "PFP Creator",
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(u.default, {
                        size: "sm",
                        className: "rounded-full px-4 py-2",
                      }),
                      (0, t.jsx)("div", {
                        className: "hidden xl:block",
                        children: (0, t.jsx)(m.default, {
                          variant: "header",
                          className: "scale-90",
                        }),
                      }),
                      (0, t.jsx)(x.A, {
                        size: 20,
                        className: "flex items-center gap-3",
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    className: "lg:hidden text-white",
                    onClick: () => r(!e),
                    children: e
                      ? (0, t.jsx)(l.A, { className: "h-6 w-6" })
                      : (0, t.jsx)(o, { className: "h-6 w-6" }),
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className: "lg:hidden bg-black/95 border-t border-gray-800",
                  children: (0, t.jsxs)("div", {
                    className: "px-2 pt-4 pb-6 space-y-4",
                    children: [
                      (0, t.jsx)("div", {
                        className: "px-3",
                        children: (0, t.jsx)(h.$, {
                          asChild: !0,
                          className:
                            "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3",
                          children: (0, t.jsxs)(c(), {
                            href: "/pfp-creator",
                            className: "flex items-center justify-center gap-2",
                            children: [
                              (0, t.jsx)(a.A, { className: "h-5 w-5" }),
                              (0, t.jsx)("span", {
                                className: "font-semibold",
                                children: "Create Your PFP",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "px-3",
                        children: (0, t.jsx)(u.default, {
                          size: "default",
                          className: "rounded-full w-full",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "px-3 py-4 border-t border-gray-700",
                        children: (0, t.jsx)(m.default, { variant: "header" }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "px-3 py-4 border-t border-gray-700",
                        children: [
                          (0, t.jsx)("p", {
                            className:
                              "text-gray-400 text-sm mb-3 font-semibold",
                            children: "Follow Us",
                          }),
                          (0, t.jsx)(x.A, {
                            size: 28,
                            className: "flex items-center gap-4",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
    },
    3127: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("Palette", [
        [
          "circle",
          {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w",
          },
        ],
        [
          "circle",
          {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
          },
        ],
        [
          "circle",
          {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx",
          },
        ],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
          },
        ],
      ]);
    },
    3311: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("Sparkles", [
        [
          "path",
          {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx",
          },
        ],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        ["path", { d: "M22 5h-4", key: "1gvqau" }],
        ["path", { d: "M4 17v2", key: "vumght" }],
        ["path", { d: "M5 18H3", key: "zchphs" }],
      ]);
    },
    3999: (e, r, s) => {
      "use strict";
      s.d(r, { cn: () => l });
      var t = s(2596),
        a = s(9688);
      function l() {
        for (var e = arguments.length, r = Array(e), s = 0; s < e; s++)
          r[s] = arguments[s];
        return (0, a.QP)((0, t.$)(r));
      }
    },
    4357: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    4416: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    5196: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => t });
      let t = (0, s(9946).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    7168: (e, r, s) => {
      "use strict";
      s.d(r, { $: () => c });
      var t = s(5155),
        a = s(2115),
        l = s(9708),
        o = s(2085),
        n = s(3999);
      let i = (0, o.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = a.forwardRef((e, r) => {
          let { className: s, variant: a, size: o, asChild: c = !1, ...d } = e,
            h = c ? l.DX : "button";
          return (0, t.jsx)(h, {
            className: (0, n.cn)(i({ variant: a, size: o, className: s })),
            ref: r,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    7354: (e, r, s) => {
      "use strict";
      s.d(r, { default: () => o });
      var t = s(5155),
        a = s(7168),
        l = s(1586);
      function o(e) {
        let { className: r = "", size: s = "lg" } = e;
        return (0, t.jsx)(a.$, {
          asChild: !0,
          size: s,
          className:
            "\n        relative overflow-hidden\n        bg-gradient-to-r from-red-600 via-orange-500 to-red-600 \n        hover:from-red-700 hover:via-orange-600 hover:to-red-700\n        text-white font-bold\n        border-2 border-orange-400/30\n        shadow-lg hover:shadow-xl\n        transform hover:scale-105 \n        transition-all duration-300\n        group\n        ".concat(
              r,
              "\n      "
            ),
          style: {
            boxShadow:
              "\n          0 0 20px rgba(234, 88, 12, 0.3),\n          0 0 40px rgba(220, 38, 38, 0.2),\n          0 4px 15px rgba(0, 0, 0, 0.3)\n        ",
          },
          children: (0, t.jsxs)("a", {
            href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xfB046750a46F07C6B7d1ef3C211439b8cac8E892",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-3 px-6 py-3 relative z-10",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
              }),
              (0, t.jsx)(l.A, {
                className:
                  "h-6 w-6 group-hover:rotate-12 transition-transform duration-200",
              }),
              (0, t.jsx)("span", {
                className: "font-sans text-xl font-bold",
                children: "Buy $NAKA",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out",
              }),
            ],
          }),
        });
      }
    },
    7363: (e) => {
      e.exports = {
        style: { fontFamily: "'akihabored', 'akihabored Fallback'" },
        className: "__className_66bab3",
        variable: "__variable_66bab3",
      };
    },
    7802: (e, r, s) => {
      "use strict";
      s.d(r, { default: () => c });
      var t = s(5155),
        a = s(2115),
        l = s(7168),
        o = s(5196),
        n = s(4357),
        i = s(3311);
      function c(e) {
        let { variant: r = "header", className: s = "" } = e,
          [c, d] = (0, a.useState)(!1),
          h = "0xfB046750a46F07C6B7d1ef3C211439b8cac8E892",
          x = async () => {
            try {
              await navigator.clipboard.writeText(h),
                d(!0),
                setTimeout(() => d(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          };
        return "header" === r
          ? (0, t.jsxs)("div", {
              className: "flex flex-col sm:flex-row items-center gap-3 ".concat(
                s
              ),
              children: [
                (0, t.jsxs)("div", {
                  className: "text-center sm:text-left",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-sm text-gray-400 font-medium",
                      children: "Contract Address",
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-xs text-gray-500 font-mono",
                      children: [h.slice(0, 6), "...", h.slice(-4)],
                    }),
                  ],
                }),
                (0, t.jsx)(l.$, {
                  onClick: x,
                  size: "sm",
                  className:
                    "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group",
                  children: c
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.A, { className: "h-4 w-4 mr-2" }),
                          (0, t.jsx)("span", {
                            className: "font-semibold",
                            children: "Copied!",
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(n.A, {
                            className:
                              "h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-200",
                          }),
                          (0, t.jsx)("span", {
                            className: "font-semibold",
                            children: "Copy CA",
                          }),
                        ],
                      }),
                }),
              ],
            })
          : "footer" === r
          ? (0, t.jsxs)("div", {
              className: "text-center ".concat(s),
              children: [
                (0, t.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex items-center justify-center gap-2 text-red-400 mb-2",
                      children: [
                        (0, t.jsx)(i.A, { className: "h-4 w-4 animate-pulse" }),
                        (0, t.jsx)("span", {
                          className: "text-sm font-semibold",
                          children: "$NAKA Contract",
                        }),
                        (0, t.jsx)(i.A, { className: "h-4 w-4 animate-pulse" }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "text-xs text-gray-400 font-mono bg-gray-800 px-3 py-1 rounded-lg inline-block",
                      children: [h.slice(0, 8), "...", h.slice(-6)],
                    }),
                  ],
                }),
                (0, t.jsx)(l.$, {
                  onClick: x,
                  size: "sm",
                  variant: "outline",
                  className:
                    "border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group",
                  children: c
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.A, {
                            className: "h-4 w-4 mr-2 animate-bounce",
                          }),
                          (0, t.jsx)("span", {
                            className: "font-semibold",
                            children: "Copied to Clipboard!",
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(n.A, {
                            className:
                              "h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-200",
                          }),
                          (0, t.jsx)("span", {
                            className: "font-semibold",
                            children: "Copy Contract Address",
                          }),
                        ],
                      }),
                }),
              ],
            })
          : null;
      }
    },
    7895: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => i });
      var t = s(5155),
        a = s(6874),
        l = s.n(a),
        o = s(6766);
      let n = [
        {
          name: "X (Twitter)",
          url: "https://X.com/nakagoInucoin",
          icon: "/icons/x-white.svg",
          hoverColor: "hover:text-blue-400",
          size: 24,
        },
        {
          name: "Telegram",
          url: "https://t.me/Nakago_Portal",
          icon: "/icons/telegram.svg",
          hoverColor: "hover:text-blue-500",
          size: 24,
        },
        {
          name: "Medium",
          url: "https://medium.com/@NakaGo/c363e26bb988",
          icon: "/icons/medium.svg",
          hoverColor: "hover:text-green-500",
          size: 28,
        },
        {
          name: "DexScreener",
          url: "https://dexscreener.com/ethereum/0xbf936d68b9b20427936265418ffd78458861ab1e",
          icon: "/icons/dexscreener-white.svg",
          hoverColor: "hover:text-green-400",
          size: 24,
        },
        {
          name: "DexTools",
          url: "https://www.dextools.io/app/en/ether/pair-explorer/0xbf936d68b9b20427936265418ffd78458861ab1e",
          icon: "/icons/dextools-white.svg",
          hoverColor: "hover:text-purple-400",
          size: 24,
        },
      ];
      function i(e) {
        let {
          size: r = 24,
          className: s = "flex items-center gap-4",
          iconClassName: a = "transition-all duration-200 hover:scale-110",
        } = e;
        return (0, t.jsx)("div", {
          className: s,
          children: n.map((e) =>
            (0, t.jsx)(
              l(),
              {
                href: e.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "".concat(a, " ").concat(e.hoverColor),
                title: e.name,
                children: (0, t.jsx)(o.default, {
                  src: e.icon || "/placeholder.svg",
                  alt: e.name,
                  width: e.size || r,
                  height: e.size || r,
                  className:
                    "filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-200",
                }),
              },
              e.name
            )
          ),
        });
      }
    },
    9324: () => {},
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [928, 541, 205, 533, 505, 441, 684, 358], () => r(1371)),
      (_N_E = e.O());
  },
]);
