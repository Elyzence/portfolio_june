(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [3189],
  {
    /***/ 897583: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(785265);
      __web_req__(708257);
      __web_req__(30897);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var N = __c.N;
        var E = __c.E;
        var htb = function (a, b = "medium") {
            if (null !== a && void 0 !== a && a.length) {
              var c =
                ("number" === typeof b ? b : __c.D8a[b]) *
                (window.devicePixelRatio || 1);
              return [...a].sort((d, e) => {
                d = d.width;
                e = e.width;
                return d > c && e < c
                  ? -1
                  : d < c && e > c
                  ? 1
                  : Math.abs(d - c) - Math.abs(e - c);
              })[0].url;
            }
          },
          itb = function (a) {
            var b = a.split("T");
            a = b[0].split("-").map(Number);
            b = (b[1] || "").split(":", 2).map((c) => Number(c.slice(0, 2)));
            return __c.iZ(a[0], a[1] - 1, a[2], b[0] || 0, b[1] || 0);
          },
          jtb = function ({ year: a, month: b, day: c, Uua: d, Sxa: e }) {
            return __c.iZ(a, b - 1, c || 1, d, e);
          },
          ktb = function (a) {
            return a instanceof Date || "number" === typeof a
              ? new Date(a)
              : "string" === typeof a
              ? itb(a)
              : jtb(a);
          },
          ptb = function (a) {
            switch (a.type) {
              case "mention":
                return new ltb(a);
              case "embed":
                return new mtb(a);
              case "date":
                return new ntb(a);
              case "select":
                return new otb(a);
              default:
                throw new E(a);
            }
          },
          rtb = function () {
            const a = L5(() => new Map(), []);
            return {
              bSa: (b) => {
                if (a.has(b)) return __c.B(a.get(b));
                const c = qtb();
                a.set(b, c);
                return c;
              },
            };
          },
          stb = function (a, b) {
            return L5(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.B(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          Dtb = function ({
            children: a,
            keyFrame: b,
            CDa: c,
            ariaLive: d,
            uwa: e = !1,
            cKa: f,
            DZ: g,
            $Oa: h,
            Edb: k,
            xqa: l,
            isa: m,
            Cdb: n,
            w3a: p,
          }) {
            const { bSa: q } = rtb(),
              { kRa: r, G_a: t } = ttb(b, a),
              u = stb(
                (w) => () => {
                  (!1 === e || ("function" === typeof e && !e(w))) && t(w);
                },
                [t, e]
              );
            return M5("div", {
              className: N5(g, "epgNPA", {
                NvaaRg: "hidden" === l,
                DiwaPA: "fill-height" === c,
                _3pVd7A: "flex-grow" === c,
              }),
              children: M5("div", {
                className: N5("KhPLRA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: w, element: x }) =>
                    M5(
                      utb,
                      {
                        in: w === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(w),
                        onExited: u(w),
                        children: (z) =>
                          M5(vtb.Provider, {
                            value: z,
                            children: M5("div", {
                              className: N5("T3uz5Q", n, {
                                NvaaRg: "hidden" === m,
                              }),
                              ref: q(w),
                              "aria-hidden":
                                z === wtb || z === xtb || z === Ctb,
                              children: w === b ? a : x,
                            }),
                          }),
                      },
                      w
                    )
                  ),
                  r.every((w) => w.key !== b) &&
                    M5(
                      utb,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : u(b),
                        children: (w) =>
                          M5(vtb.Provider, {
                            value: w,
                            children: M5("div", {
                              className: N5("T3uz5Q", n),
                              ref: q(b),
                              "aria-hidden":
                                w === wtb || w === xtb || w === Ctb,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          ttb = function (a, b) {
            const [c, d] = Etb(() => [{ key: a, element: b }]);
            Ftb(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = Gtb((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { kRa: c, G_a: e };
          },
          Htb = function (a, b, c) {
            if (c) {
              var d = htb(c.images, "medium"),
                e = htb(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = O5(() => a.VW.set(b, e));
                f.onerror = O5(() => a.VW.set(b, void 0));
                !f.complete && c.complete ? a.VW.set(b, d) : (c.src = "");
              }
            } else a.VW.set(b, void 0);
          },
          Itb = __c.J(() => ({
            Xgb: __c.PP(11),
            mode: __c.F("A?", 1, "BY_USER_IDS"),
            Z3a: __c.OP(1),
          })),
          Jtb = __webpack_require__(785893),
          M5 = Jtb.jsx,
          Ktb = Jtb.jsxs;
        var P5 = __webpack_require__(433581).Pi;
        var Q5 = __webpack_require__(667294),
          L5 = Q5.useMemo,
          R5 = Q5.memo,
          Ltb = Q5.useEffect,
          Mtb = Q5.createContext,
          Etb = Q5.useState,
          Ftb = Q5.useLayoutEffect,
          Gtb = Q5.useCallback,
          qtb = Q5.createRef;
        var S5 = __webpack_require__(168949),
          T5 = S5.Fl,
          Ntb = S5.LO,
          O5 = S5.aD,
          U5 = S5.z,
          Otb = S5.vP;
        var Ptb = __webpack_require__,
          Qtb = Ptb(693967),
          N5 = Ptb.n_x(Qtb)();
        var utb = __webpack_require__(429697).Z;
        var V5 = __webpack_require__(696630),
          wtb = V5.Ix,
          xtb = V5.$r,
          Ctb = V5.Wj;
        var ltb = class {
            static A(a) {
              N(a, { text: T5, user: T5, brand: T5 });
            }
            get text() {
              return this.Gk.text;
            }
            get user() {
              return this.Gk.user;
            }
            get brand() {
              return this.Gk.brand;
            }
            constructor(a) {
              ltb.A(this);
              this.Gk = a;
              this.type = "mention";
            }
          },
          mtb = class {
            static A(a) {
              N(a, { text: T5, url: T5 });
            }
            get text() {
              return this.Gk.text;
            }
            get url() {
              return this.Gk.url;
            }
            constructor(a) {
              mtb.A(this);
              this.Gk = a;
              this.type = "embed";
            }
          },
          ntb = class {
            static A(a) {
              N(a, { text: T5, language: T5, style: T5, date: T5 });
            }
            get text() {
              return this.Gk.text;
            }
            get language() {
              return this.Gk.language;
            }
            get style() {
              return this.Gk.style;
            }
            get date() {
              return this.Gk.date;
            }
            constructor(a) {
              ntb.A(this);
              this.Gk = a;
              this.type = "date";
            }
          },
          otb = class {
            static A(a) {
              N(a, { text: T5, options: T5, qh: T5, JK: T5 });
            }
            get text() {
              return this.Gk.text;
            }
            get options() {
              return this.Gk.options.map((a) => a);
            }
            get qh() {
              return this.Gk.qh;
            }
            get JK() {
              var a;
              return null ===
                (a = this.Gk.options.first((b) => b.id === this.Gk.qh)) ||
                void 0 === a
                ? void 0
                : a.fill.color;
            }
            get QBa() {
              return !1;
            }
            constructor(a) {
              otb.A(this);
              this.Gk = a;
              this.type = "select";
            }
          };
        var W5 = class {
            static A(a) {
              N(a, { style: T5, date: T5 });
            }
            get style() {
              return 2;
            }
            get date() {
              if (this.pra) {
                var a = this.pra;
                a = ktb(a);
                a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  Uua: a.getHours(),
                  Sxa: a.getMinutes(),
                };
                a = ktb(a);
                return {
                  year: a.getUTCFullYear(),
                  month: a.getUTCMonth() + 1,
                  day: a.getUTCDate(),
                  Uua: a.getUTCHours(),
                  Sxa: a.getUTCMinutes(),
                };
              }
              a = new Date();
              return {
                year: a.getFullYear(),
                month: a.getMonth() + 1,
                day: a.getDate(),
              };
            }
            constructor(a, b, c) {
              W5.A(this);
              this.text = a;
              this.language = b;
              this.pra = c;
              this.type = "date";
            }
          },
          Rtb = class {
            get id() {
              return this.yJa;
            }
            get label() {
              return this.Ana.label;
            }
            get fill() {
              return this.Ana.fill;
            }
            constructor(a, b) {
              this.Ana = a;
              this.yJa = b;
            }
          },
          X5 = class {
            static A(a) {
              N(a, { options: T5, qh: T5, JK: T5 });
            }
            get options() {
              return this._options.map((a, b) => new Rtb(a, b));
            }
            get qh() {
              var a;
              return null ===
                (a = this.options.find((b) => b.label === this.text)) ||
                void 0 === a
                ? void 0
                : a.id;
            }
            get JK() {
              var a;
              return null ===
                (a = this.options.find((b) => b.id === this.qh)) || void 0 === a
                ? void 0
                : a.fill.color;
            }
            get QBa() {
              return !1;
            }
            constructor(a, b) {
              X5.A(this);
              this.text = a;
              this._options = b;
              this.type = "select";
            }
          };
        var Stb = class {
          rca(a) {
            this.U9.rca(a);
          }
          DV(a, b) {
            this.U9.DV(a, b);
          }
          kS(a) {
            return this.U9.kS(a);
          }
          oca(a) {
            this.lsa.oca(a);
          }
          constructor(a, b) {
            this.U9 = a;
            this.lsa = b;
            this.qla = new __c.a2a();
            this.ARa = (c) => __c.qG(this.qla, c);
          }
        };
        var vtb = Mtb(void 0);
        var Ttb = Number.parseInt("300ms", 10),
          Utb = {
            enter: "gWeP3g",
            enterActive: "YL_ApQ",
            enterDone: void 0,
            exitActive: "qqCHKg",
            exitDone: "gum40Q",
          },
          Vtb = R5(function ({
            Jz: a = !1,
            children: b,
            keyFrame: c,
            CDa: d,
            xqa: e = "hidden",
            isa: f = "hidden",
            ariaLive: g,
            uwa: h,
            ygb: k = "none",
          }) {
            a = __c.pb() && !a;
            return Dtb({
              children: b,
              keyFrame: c,
              CDa: d,
              ariaLive: g,
              xqa: e,
              isa: f,
              uwa: h,
              cKa: a ? Ttb : 0,
              $Oa: N5({
                _4C1vIA: a,
                pOll6Q: "none" === k,
                g1T5pQ: "layout" === k,
              }),
              w3a: Utb,
            });
          });
        var Wtb =
          '<svg height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var Xtb =
          '<svg height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var Ytb =
          '<svg height="auto" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var Ztb = R5((a) => {
            const b = a.JK,
              c = a.FIa,
              d = a.cJa,
              e = a.measureRef,
              f = N5({ EdewNw: !!c, _6ZpPrw: !!d, pzXyUA: 0 < a.text.length });
            a = 0 < a.text.length ? a.text : "\ufeff";
            return Ktb("span", {
              className: "FedJ0Q",
              "aria-label": a,
              children: [
                M5("span", {
                  className: N5("_2Lr6pQ", f),
                  children: M5("span", { className: "Z_WvzQ", children: a }),
                }),
                Ktb("span", {
                  className: N5("XemTdQ", f),
                  ref: e,
                  style: b ? { color: b } : void 0,
                  children: [
                    c,
                    M5("span", { className: "U_QH_A", children: a }),
                    d,
                  ],
                }),
              ],
            });
          }),
          $tb = R5((a) => {
            const b = a.backgroundColor,
              c = a.po;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return M5(Vtb, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? M5(__c.H8a, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    po: c,
                    borderColor: c ? void 0 : b,
                  })
                : M5("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: Ytb },
                  }),
            });
          }),
          aub = R5((a) => {
            a = a.icon;
            return M5(Vtb, {
              keyFrame: a ? "favicon" : "placeholder",
              children: a
                ? M5("span", {
                    className: "_tFJqA",
                    children: M5("img", { src: a, className: "qpbYdw" }),
                  })
                : M5("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: Xtb },
                  }),
            });
          }),
          bub = R5(() =>
            M5("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: Wtb },
            })
          ),
          cub = R5(({ selected: a }) =>
            M5("div", {
              className: N5("whph4A", { zgzjww: a }),
              children: M5(__c.NO, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          dub = P5((a) => {
            const b = a.Os,
              c = a.Fha;
            a = a.measureRef;
            Ltb(() => {
              U5(() => {
                switch (b.type) {
                  case "mention":
                    b.user && c.rca(b.user);
                    break;
                  case "embed":
                    c.oca(b.url);
                }
              });
            }, [b, c]);
            var d = b.text || "\u00a0".repeat(16),
              e = b.JK;
            a: {
              switch (b.type) {
                case "mention":
                  var f = M5($tb, {
                    po: c.kS(b.user),
                    text: b.text,
                    backgroundColor: c.ARa(b.user).background,
                  });
                  break a;
                case "embed":
                  f = M5(aub, { icon: c.lsa.zR.get(b.url) });
                  break a;
                case "date":
                  f = b.text ? void 0 : M5(bub, {});
                  break a;
                case "select":
                  break;
                default:
                  throw new E(b);
              }
              f = void 0;
            }
            a: {
              switch (b.type) {
                case "mention":
                case "embed":
                case "date":
                  break;
                case "select":
                  var g = M5(cub, { selected: !!b.QBa });
                  break a;
                default:
                  throw new E(b);
              }
              g = void 0;
            }
            return M5(Ztb, { text: d, JK: e, FIa: f, cJa: g, measureRef: a });
          });
        var eub = class {
            static A(a) {
              N(a, { uJ: Ntb.shallow, Wsa: O5 });
            }
            kS(a) {
              return this.Ioa.kS(a);
            }
            rca(a) {
              this.pla.has(a) || this.uJ.has(a) || (this.uJ.add(a), this.XNa());
            }
            DV(a, b) {
              this.pla.has(a) ||
                (this.pla.set(a, b), this.uJ.delete(a), Htb(this.Ioa, a, b));
            }
            async Wsa() {
              if (0 !== this.uJ.size) {
                var a = [...this.uJ.values()];
                this.uJ.clear();
                if (this.Joa) {
                  var b = await this.Joa,
                    c = new Itb({ Z3a: a }),
                    { fbb: d } = await b.Bfb(c);
                  U5(() => {
                    a.forEach((e) => this.DV(e, d.get(e)));
                  });
                } else a.forEach((e) => this.DV(e));
              }
            }
            constructor(a, b) {
              eub.A(this);
              this.Joa = a;
              this.pla = new Otb();
              this.uJ = new Set();
              this.Ioa = new fub();
              this.XNa = __c.Pc(() => this.Wsa(), 200);
              U5(() => {
                null === b || void 0 === b
                  ? void 0
                  : b.forEach((c, d) => this.DV(d, c));
              });
            }
          },
          fub = class {
            kS(a) {
              return this.VW.get(a);
            }
            constructor() {
              this.VW = new Otb();
            }
          };
        var gub = class {
          static A(a) {
            N(a, { zR: Ntb.shallow });
          }
          oca(a) {
            const b = new Image();
            let c;
            try {
              var d;
              c =
                null === (d = this.Yo) || void 0 === d
                  ? void 0
                  : __c.B(d.yG.get(a)).wQa;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = O5(() => this.zR.set(a, c))),
                (b.onerror = O5(() => this.zR.set(a, void 0))))
              : this.zR.set(a, void 0);
          }
          constructor(a) {
            gub.A(this);
            this.Yo = a;
            this.zR = new Map();
          }
        };
        __c.nna = {
          CTa: function (a) {
            const b = a.Xc,
              c = a.document;
            var d = a.Yo,
              e = a.T9;
            const f = a.ht,
              g = a.Hy,
              h = a.$da;
            e = new eub(null === h || void 0 === h ? void 0 : h(), e);
            d = new gub(d);
            const k = new Stb(e, d);
            switch (b) {
              case "fixed":
                break;
              case "responsive":
                a.Td.Xl.v8 = P5(({ item: l, measureRef: m }) => {
                  const n = L5(() => ptb(l.Os), [l.Os]);
                  return M5(dub, { Os: n, Fha: k, measureRef: m });
                });
                break;
              default:
                throw new E(b);
            }
            g.then((l) => {
              const m = P5(({ context: n }) => {
                var p;
                a: {
                  var q;
                  const t = c.language || "en-AU";
                  n = __c.B(l.kD(n.sheet, n.Ia, n.col));
                  if (
                    null ==
                      (null === n || void 0 === n
                        ? void 0
                        : null === (p = n.Ji) || void 0 === p
                        ? void 0
                        : p.type) ||
                    0 === n.yF.length
                  )
                    b: {
                      var r;
                      switch (
                        null === (r = n.Ea) || void 0 === r ? void 0 : r.type
                      ) {
                        case "date":
                          p = new W5("", t, void 0);
                          break b;
                        case "select":
                          p = new X5("\u00a0".repeat(16), n.Ea.options);
                          break b;
                        case "plain_number":
                        case "currency":
                        case "percentage":
                        case void 0:
                          throw Error(
                            "Sheets only supports Date and Select pills."
                          );
                        default:
                          throw new E(n.Ea);
                      }
                    }
                  else
                    switch (
                      null === (q = n.Ea) || void 0 === q ? void 0 : q.type
                    ) {
                      case "select":
                        p = new X5(n.yF, n.Ea.options);
                        break a;
                      case "date":
                        p = new W5(
                          n.yF,
                          t,
                          2 === n.LR.type ? n.LR.date : void 0
                        );
                        break a;
                      case "plain_number":
                      case "currency":
                      case "percentage":
                      case void 0:
                        throw Error(
                          "Sheets only supports Date and Select pills."
                        );
                      default:
                        throw new E(n.Ea);
                    }
                }
                return M5(dub, { Os: p, Fha: k });
              });
              f.kna = ({ context: n }) => ({
                type: "react",
                node: M5(m, { context: n }),
              });
            });
            return { Fha: k };
          },
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/e072e860751dae5a.js.map
