(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [7015],
  {
    /***/ 686040: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var MX;
        var IX, S8a;
        __c.GX = function (a) {
          const b = { ...a.props },
            c = void 0 !== a.za ? a.za : a.$P;
          (void 0 !== a.Mo ? a.Mo : a.span).aK(({ fu: d, GC: e }) => {
            d = a.gdb ? {} : { uj: d() };
            c.track(a.event, { ...d, Im: e(), ...b });
          });
        };
        __c.HX = function (a, b, c) {
          return 0 > c ? a : 1 < c ? b : a + (b - a) * c;
        };
        __c.UW.prototype.xL = __c.fa(23, function () {});
        __c.dP.prototype.xL = __c.fa(22, function () {
          this.ended ||
            this.bF ||
            ((this.bF = !0),
            setTimeout(() => {
              try {
                (this.ended = !0), __c.RDa(this), void 0;
              } catch (a) {
                this.H.Fb(a, {
                  uf: "Error ending span in next cycle",
                  extra: new Map(__c.YO(this)),
                });
              }
            }));
        });
        IX = __webpack_require__(667294);
        S8a = IX.createContext;
        __c.T8a = IX.useId;
        __c.U8a = IX.useRef;
        __c.V8a = IX.useEffect;
        var JX;
        JX = __webpack_require__(785893);
        __c.W8a = JX.jsxs;
        __c.X8a = JX.Fragment;
        __c.KX = JX.jsx;
        __c.Y8a = __webpack_require__(168949).EH;
        __c.LX = { cIa: 1, dJa: 2, dIa: 3, iIa: 4, pHa: 5, lJa: 6 };
        MX = __c.MX = class {
          static NM(a, b, c) {
            return 0 >= c
              ? a
              : 1 <= c
              ? b
              : MX.isEqual(a, b)
              ? a
              : new MX(
                  __c.HX(a.r, b.r, c),
                  __c.HX(a.g, b.g, c),
                  __c.HX(a.b, b.b, c),
                  __c.HX(a.a, b.a, c)
                );
          }
          static multiply(a, b) {
            return MX.isEqual(a, __c.NX)
              ? b
              : MX.isEqual(b, __c.NX)
              ? a
              : new MX(a.r * b.r, a.g * b.g, a.b * b.b, a.a * b.a);
          }
          static isEqual(a, b) {
            return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
          }
          static fromHex(a) {
            a = a.startsWith("#") ? a.substr(1) : a;
            a = parseInt(a, 16);
            return new MX(
              (Math.floor(a / 65536) % 256) / 255,
              (Math.floor(a / 256) % 256) / 255,
              (a % 256) / 255,
              1
            );
          }
          constructor(a = 0, b = 0, c = 0, d = 0) {
            this.r = a;
            this.g = b;
            this.b = c;
            this.a = d;
          }
        };
        __c.OX = new MX(1, 1, 1, 0);
        __c.NX = new MX(1, 1, 1, 1);
        __c.PX = S8a(window);
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b7f33008d159c536.js.map
