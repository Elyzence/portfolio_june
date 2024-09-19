(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4158],
  {
    /***/ 92348: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var Q = __c.Q;
        var $X;
        var bY;
        var uY;
        var tY;
        var sY;
        var oY;
        var hY;
        var gY;
        var RX;
        var WX;
        var VX;
        var UX;
        var v = __c.v;
        var TX;
        var E = __c.E;
        var SX,
          Z8a,
          c9a,
          $8a,
          a9a,
          b9a,
          XX,
          e9a,
          YX,
          ZX,
          dY,
          i9a,
          eY,
          fY,
          iY,
          j9a,
          k9a,
          m9a,
          jY,
          lY,
          mY,
          nY,
          n9a,
          o9a,
          vY,
          wY,
          xY,
          E9a,
          F9a,
          G9a,
          AY,
          H9a,
          I9a,
          CY,
          DY,
          FY,
          EY,
          L9a,
          M9a,
          N9a,
          O9a,
          GY,
          P9a,
          HY,
          IY,
          Q9a,
          R9a,
          S9a,
          T9a,
          U9a,
          V9a;
        __c.QX = function (a, b, c) {
          a = a.Q$(b, c);
          if (a.span.ed === b && a.span.od === c) return a;
        };
        RX = __c.RX = function (a, b) {
          if (!a) throw Error(b);
        };
        SX = function (a) {
          return 1 === a.type || 4 === a.type;
        };
        Z8a = function (a, b) {
          if (a.type !== b.type) throw Error("Token types do not match");
        };
        TX = __c.TX = function (a, b) {
          switch (b) {
            case 3:
              return $8a(a);
            case 1:
              return a9a(a);
            case 2:
              return b9a(a);
            default:
              throw new E(b);
          }
        };
        c9a = function (a, b) {
          a = TX(a, b);
          v(4 !== a.type);
          return a;
        };
        $8a = function (a) {
          switch (a.type) {
            case 0:
              return UX("", a.Ea);
            case 1:
              return UX(a.value.toString(), a.Ea);
            case 2:
              return UX(a.value ? "TRUE" : "FALSE", a.Ea);
            case 3:
              return a;
            default:
              throw new E(a);
          }
        };
        a9a = function (a) {
          switch (a.type) {
            case 0:
              return VX(0, a.Ea);
            case 1:
              return a;
            case 2:
              return VX(a.value ? 1 : 0, a.Ea);
            case 3:
              return d9a.test(a.value)
                ? VX(parseFloat(a.value), a.Ea)
                : { type: 4, value: 3 };
            default:
              throw new E(a);
          }
        };
        b9a = function (a) {
          switch (a.type) {
            case 0:
              return WX(!1, a.Ea);
            case 1:
              return WX(0 !== a.value, a.Ea);
            case 2:
              return a;
            case 3:
              return /^(?:TRUE|FALSE)$/i.test(a.value)
                ? WX("TRUE" === a.value.toUpperCase(), a.Ea)
                : { type: 4, value: 3 };
            default:
              throw new E(a);
          }
        };
        XX = function (a, b, c, d) {
          for (const e of a) {
            if (5 === e.type) {
              a = e9a(e, b, c, { filter: d.Au });
              if (!a.Ob) return a;
              c = a.result;
            } else c = b(c, e);
            if ((a = d.Hu(c))) return { Ob: !1, result: a };
          }
          return { Ob: !0, result: c };
        };
        e9a = function (a, b, c, d = {}) {
          if (!a.size) return { Ob: !1, result: { type: 4, value: 3 } };
          a = a.value.flat();
          for (const e of a) if (!d.filter || d.filter(e)) c = b(c, e);
          return { Ob: !0, result: c };
        };
        YX = function (a, b, c) {
          b = TX(b, 1);
          c = TX(c, 1);
          return 4 === b.type
            ? b
            : 4 === c.type
            ? c
            : "/" === a && 0 === c.value
            ? { type: 4, value: 2 }
            : VX(f9a[a](b.value, c.value), g9a[a](b.Ea, c.Ea));
        };
        $X = __c.$X = function (a, b, c) {
          if (4 === b.type) return b;
          if (4 === c.type) return c;
          switch (a) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "^":
              return YX(a, b, c);
            case ">":
            case "<":
            case ">=":
            case "<=":
            case "=":
            case "<>":
              return ZX(a, b, c);
            case "&":
              return (a = TX(b, 3)), (c = TX(c, 3)), UX(a.value + c.value);
            default:
              throw new E(a);
          }
        };
        ZX = function (a, b, c) {
          if (b.type === c.type)
            switch (b.type) {
              case 0:
                return WX(!0);
              case 1:
                return RX(b.type === c.type), WX(aY[a](b.value, c.value));
              case 3:
                return (
                  RX(b.type === c.type),
                  WX(
                    aY[a](
                      b.value.localeCompare(c.value, void 0, {
                        sensitivity: "accent",
                      }),
                      0
                    )
                  )
                );
              case 2:
                RX(b.type === c.type);
                var d = TX(b, 1);
                c = TX(c, 1);
                return WX(aY[a](d.value, c.value));
              default:
                throw new E(b);
            }
          else
            return 0 === b.type || 0 === c.type
              ? (0 === b.type
                  ? (RX(0 !== c.type), (d = TX(b, c.type)))
                  : (RX(0 === c.type), (d = b), (c = TX(c, b.type))),
                ZX(a, d, c))
              : WX(aY[a](h9a[b.type], h9a[c.type]));
        };
        bY = __c.bY = function (a, b) {
          a = a(b);
          return !!a && !a.s;
        };
        dY = function (a) {
          return (b) => {
            const c = a.exec(b);
            if (c) {
              var d = c[0].length;
              return {
                s: b.substring(d),
                value: c[0],
                length: d,
                children: __c.cY,
              };
            }
          };
        };
        i9a = function (a) {
          return (b) => {
            const c = a(b);
            return c ? c : { s: b, value: void 0, length: 0, children: __c.cY };
          };
        };
        eY = function (a) {
          return (b) => {
            if (!a(b)) return { s: b, value: b, length: 0, children: __c.cY };
          };
        };
        fY = function (a) {
          return (b) => {
            const c = [],
              d = [];
            let e = 0;
            if ("" === b) return { s: b, value: c, length: e, children: d };
            for (;;) {
              const f = a(b);
              if (!f || f.s === b)
                return { s: b, value: c, length: e, children: d };
              c.push(f.value);
              b = f.s;
              e += f.length;
              d.push({
                length: f.length,
                children: f.children,
                name: f.name,
                error: f.error,
              });
            }
          };
        };
        gY = __c.gY = function (a, ...b) {
          return (c) => {
            const d = [],
              e = [];
            let f = 0;
            for (const g of b) {
              const h = g(c);
              if (!h) return;
              c = h.s;
              f += h.length;
              d.push(h.value);
              e.push({
                length: h.length,
                children: h.children,
                name: h.name,
                error: h.error,
              });
            }
            return { s: c, value: a(...d), length: f, children: e };
          };
        };
        hY = __c.hY = function (...a) {
          return (b) => {
            for (const c of a) {
              const d = c(b);
              if (d) return d;
            }
          };
        };
        iY = function (a, b) {
          const c = (d) => ((d = b(d)) ? { ...d, name: a } : d);
          c.m0a = a;
          return c;
        };
        j9a = function (a) {
          const b = (c, d, e) => {
            const f = [];
            for (const g of c)
              f.push({
                ...g,
                offset: d,
                children: b(g.children, d, e),
                text: e.substring(d, d + g.length),
              }),
                (d += g.length);
            return f;
          };
          return (c) => {
            const d = a(c);
            return d
              ? {
                  ...d,
                  offset: 0,
                  children: b(d.children, 0, c),
                  text: d.s.length ? c.slice(0, -d.s.length) : c,
                }
              : d;
          };
        };
        k9a = function (a, b) {
          const c = (d) => {
            const e = [];
            for (const f of d)
              b(f) && e.push({ ...f, children: c(f.children) });
            return e;
          };
          return (d) => ((d = a(d)) ? { ...d, children: c(d.children) } : d);
        };
        __c.kY = function (a) {
          v(0 < a.length);
          const b = new __c.l9a(a.length);
          for (const d of a)
            switch (d.type) {
              case 8:
                0 === d.value.type
                  ? b.push(jY(d))
                  : 3 === d.value.type
                  ? b.push({ type: 4, value: 5 })
                  : b.push(d);
                break;
              case 11:
                switch (d.value) {
                  case ":":
                    a = b.pop();
                    var c = b.pop();
                    b.push(m9a(c, a));
                    break;
                  case "+":
                  case "-":
                  case "*":
                  case "/":
                  case "^":
                  case "=":
                  case ">":
                  case "<":
                  case ">=":
                  case "<=":
                  case "<>":
                  case "&":
                    a = b.pop();
                    c = b.pop();
                    8 === c.type && RX(0 !== c.value.type);
                    8 === a.type && RX(0 !== a.value.type);
                    b.push(c);
                    b.push(a);
                    b.push(d);
                    break;
                  default:
                    throw new E(d);
                }
                break;
              case 7:
                b.push({ type: 7, value: d.value.map(__c.kY) });
                break;
              case 0:
              case 6:
              case 9:
              case 10:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                b.push(d);
                break;
              default:
                throw new E(d);
            }
          return b.map((d) =>
            8 === d.type ? (RX(1 === d.value.type), { type: 4, value: 5 }) : d
          );
        };
        m9a = function (a, b) {
          if (
            (8 !== a.type && 14 !== a.type) ||
            (8 !== b.type && 14 !== b.type)
          )
            return 4 === a.type
              ? a
              : 4 === b.type
              ? 8 === a.type && 1 === a.value.type
                ? { type: 4, value: 5 }
                : b
              : { type: 4, value: 7 };
          if (a.type === b.type)
            switch (a.type) {
              case 8:
                RX(a.type === b.type);
                if (a.value.type !== b.value.type) throw Error();
                return lY(jY(a), jY(b));
              case 14:
                return RX(a.type === b.type), lY(a, b);
              default:
                throw new E(a);
            }
          const c = 8 === a.type ? a : b;
          a = 14 === a.type ? a : b;
          RX(8 === c.type);
          RX(14 === a.type);
          if (0 !== c.value.type) throw Error();
          return lY(a, jY(c));
        };
        jY = function (a) {
          switch (a.value.type) {
            case 1:
              return { type: 14, value: { type: 3, kg: a.value.kg, width: 1 } };
            case 2:
              return {
                type: 14,
                value: { type: 2, Ag: a.value.Ag, height: 1 },
              };
            case 0:
              return {
                type: 14,
                value: { type: 0, kg: a.value.kg, Ag: a.value.Ag },
              };
            case 3:
              throw Error();
            default:
              throw new E(a.value);
          }
        };
        lY = function (a, b) {
          a = a.value;
          b = b.value;
          if ((2 === a.type && 3 === b.type) || (3 === a.type && 2 === b.type))
            throw Error();
          const c = Math.min(mY(a), mY(b)),
            d = Math.max(mY(a) + n9a(a), mY(b) + n9a(b)),
            e = Math.min(nY(a), nY(b)),
            f = Math.max(nY(a) + o9a(a), nY(b) + o9a(b));
          if (2 === a.type || 2 === b.type)
            return (
              RX(Number.isFinite(c) && Number.isFinite(d)),
              { type: 14, value: { type: 2, Ag: c, height: d - c } }
            );
          if (3 === a.type || 3 === b.type)
            return (
              RX(Number.isFinite(e) && Number.isFinite(f)),
              { type: 14, value: { type: 3, kg: e, width: f - e } }
            );
          if (1 === a.type || 0 === a.type || 1 === b.type || 0 === b.type)
            return (
              RX(Number.isFinite(c) && Number.isFinite(d)),
              RX(Number.isFinite(e) && Number.isFinite(f)),
              {
                type: 14,
                value: { type: 1, kg: e, Ag: c, width: f - e, height: d - c },
              }
            );
          throw new E(a);
        };
        mY = function (a) {
          switch (a.type) {
            case 0:
            case 1:
            case 2:
              return a.Ag;
            case 3:
              return -Infinity;
            default:
              throw new E(a);
          }
        };
        nY = function (a) {
          switch (a.type) {
            case 0:
            case 1:
            case 3:
              return a.kg;
            case 2:
              return -Infinity;
            default:
              throw new E(a);
          }
        };
        n9a = function (a) {
          switch (a.type) {
            case 0:
              return 1;
            case 1:
            case 2:
              return a.height;
            case 3:
              return Infinity;
            default:
              throw new E(a);
          }
        };
        o9a = function (a) {
          switch (a.type) {
            case 0:
              return 1;
            case 1:
            case 3:
              return a.width;
            case 2:
              return Infinity;
            default:
              throw new E(a);
          }
        };
        __c.q9a = function (a) {
          const b = dY(
            new RegExp(`^(?:\\${a}\\d+|\\d+(?:\\${a}\\d*)?)(?:[eE][-+]?\\d+)?`)
          );
          return {
            Q3a: b,
            lya: gY(
              "." === a ? parseFloat : (c) => parseFloat(c.replace(",", ".")),
              gY(
                (c, d) => `${null !== c && void 0 !== c ? c : ""}${d}`,
                i9a(p9a),
                b
              )
            ),
          };
        };
        vY = function (a, b) {
          const c = a.Ema,
            d = a.Yma,
            e = a.Nma,
            f = a.fna,
            g = a.Bma;
          let h, k;
          b.Sba
            ? ((h = (C, H) => (I) => {
                const M = C(I);
                return M ? M : H(I);
              }),
              (k = (C) =>
                h(C, (H) => ({
                  s: H,
                  value: void 0,
                  length: 0,
                  children: [],
                  name: C.m0a,
                  error: !0,
                }))))
            : ((h = (C) => C), (k = (C) => C));
          var l = b.tfa.Pd;
          const { lya: m, Q3a: n } = __c.q9a(l);
          a = hY(
            dY(/^[+]/),
            gY((C) => C, p9a, eY(n))
          );
          const p = iY("comma", "." === l ? r9a : s9a),
            q = (C, H) => fY(gY((I, M, K) => K, C, oY, H, oY)),
            r = [];
          var t = (C, H) => {
            const I = iY(C, H);
            return (M) => {
              try {
                return r.push(C), I(M);
              } finally {
                r.pop();
              }
            };
          };
          b = t("parenExpression", (C) =>
            gY(
              (H, I, M) => M,
              iY("openParenthesis", t9a),
              oY,
              D,
              oY,
              iY("closeParenthesis", k(pY))
            )(C)
          );
          const u = t(
              "functionCall",
              gY(
                (C, H, I, M, K) => c(C, null !== K && void 0 !== K ? K : []),
                iY("functionName", qY),
                oY,
                iY("openParenthesis", t9a),
                oY,
                iY(
                  "functionArgs",
                  i9a((C) =>
                    gY((H, I, M, K) => [I, ...K], eY(pY), D, oY, q(p, D))(C)
                  )
                ),
                oY,
                iY("closeParenthesis", k(pY))
              )
            ),
            w = iY(
              "reference",
              gY(
                (C, H) => H,
                eY(__c.rY),
                hY(
                  gY(([C, H]) => d([`${C}${H}`]), sY),
                  gY((C) => d([C]), qY),
                  gY((C) => d([C]), tY),
                  gY((C, H, I) => d([C, I]), uY, u9a, uY)
                )
              )
            );
          var x = gY((C, H) => H, v9a, __c.w9a, k(v9a));
          x = hY(
            iY("errorLiteral", __c.x9a),
            iY("booleanLiteral", __c.rY),
            iY("numberLiteral", m),
            iY("stringLiteral", x)
          );
          const z = iY("arrayColumnSeparator", "." === l ? r9a : y9a);
          l = iY("arrayRowSeparator", s9a);
          const A = h(x, (C) => {
            var H = r.at(-1);
            RX("arrayRow" === H);
            var I;
            H =
              null === (I = C.match(/^[^ "\\,;}]*/)) || void 0 === I
                ? void 0
                : I[0];
            RX(null != H);
            return {
              s: C.slice(H.length),
              value: void 0,
              length: H.length,
              children: [],
              error: !0,
            };
          });
          t = t(
            "arrayRow",
            gY((C, H, I) => [C, ...I], A, oY, q(k(z), A))
          );
          t = iY(
            "arrayLiteral",
            gY(
              (C, H, I, M, K) => [I, ...K],
              iY("arrayLeftBrace", z9a),
              oY,
              t,
              oY,
              q(l, t),
              iY("arrayRightBrace", k(A9a))
            )
          );
          b = iY(
            "operand",
            h(
              hY(
                gY((C) => e({ type: 0, value: C }), b),
                gY((C) => e({ type: 1, value: C }), u),
                gY((C) => e({ type: 2, value: C }), w),
                gY((C) => e({ type: 3, value: C }), hY(x, t))
              ),
              (C) => {
                var H = r.at(-1);
                RX("arrayRow" !== H);
                var I;
                switch (H) {
                  case void 0:
                    H =
                      null ===
                        (I = C.match(/^[^ \-+*/:%^<>=&"(),;{}]*[}),;]*/)) ||
                      void 0 === I
                        ? void 0
                        : I[0];
                    break;
                  case "parenExpression":
                    var M;
                    H =
                      null ===
                        (M = C.match(/^[^ \-+*/:%^<>=&"(),;{}]*[},;]*/)) ||
                      void 0 === M
                        ? void 0
                        : M[0];
                    break;
                  case "functionCall":
                    var K;
                    H =
                      null === (K = C.match(/^[^ \-+*/:%^<>=&"(),;{}]*[}]*/)) ||
                      void 0 === K
                        ? void 0
                        : K[0];
                    break;
                  default:
                    throw new E(H);
                }
                RX(null != H);
                I = H;
                return {
                  s: C.slice(I.length),
                  value: void 0,
                  length: I.length,
                  children: [
                    {
                      length: I.length,
                      children: [],
                      name: "errorLiteral",
                      error: !0,
                    },
                  ],
                  name: "operand",
                  error: !0,
                };
              }
            )
          );
          a = iY(
            "term",
            gY(
              (C, H, I, M) => f(C, H, M),
              fY(gY((C) => C, iY("prefixOperator", a), oY)),
              b,
              oY,
              fY(gY((C) => C, iY("postfixOperator", B9a), oY))
            )
          );
          const D = iY(
            "expression",
            gY(
              (C, H, I) => g(C, I),
              a,
              oY,
              fY(
                gY((C, H, I) => [C, I], k(iY("infixOperator", C9a)), oY, a, oY)
              )
            )
          );
          return { $C: D9a(D) };
        };
        wY = function (a) {
          v(bY(uY, a));
          const b = a.replace("$", "");
          return { Ag: parseInt(b, 10) - 1, $N: a.startsWith("$") };
        };
        xY = function (a) {
          return { kg: E9a(a), EK: a.startsWith("$") };
        };
        E9a = function (a) {
          v(bY(tY, a), a);
          return (
            a
              .replace("$", "")
              .split("")
              .reduce((b, c) => 26 * b + parseInt(c, 36) - 9, 0) - 1
          );
        };
        __c.yY = function (a) {
          a += 1;
          let b = "";
          do
            (b = String.fromCharCode(((a - 1) % 26) + 65) + b),
              (a = Math.floor((a - 1) / 26));
          while (0 < a);
          return b;
        };
        F9a = function (a) {
          v(bY(sY, a));
          const [b, c] = sY(a).value;
          return { ...wY(c), ...xY(b) };
        };
        __c.zY = function (a) {
          if (bY(sY, a)) return { type: 0, ...F9a(a) };
          if (bY(tY, a)) return { type: 1, ...xY(a) };
          if (bY(uY, a)) return { type: 2, ...wY(a) };
          if (bY(qY, a)) return { type: 3, name: a };
          v(!1);
        };
        G9a = function (a) {
          switch (typeof a) {
            case "boolean":
              return WX(a);
            case "number":
              return VX(a);
            case "string":
              return UX(a);
            case "object":
              return { type: 4, value: a.type };
            default:
              throw Error();
          }
        };
        AY = function (a) {
          const b = {
            ":": 6,
            "u-": 5,
            "u+": 5,
            "u%": 5,
            "^": 4,
            "*": 3,
            "/": 3,
            "+": 2,
            "-": 2,
            "&": 1,
            "=": 0,
            "<": 0,
            ">": 0,
            "<=": 0,
            ">=": 0,
            "<>": 0,
          };
          switch (a.type) {
            case 9:
            case 10:
              return b[`u${a.value}`];
            case 11:
              return b[a.value];
            default:
              throw new E(a);
          }
        };
        __c.BY = function (a) {
          const b = [],
            c = [];
          for (const d of a)
            switch (d.type) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 8:
              case 6:
                b.push(d);
                break;
              case 7:
                b.push({ type: 7, value: d.value.map(__c.BY) });
                break;
              case 9:
              case 10:
              case 11:
                for (
                  ;
                  c.length &&
                  12 !== c.at(-1).type &&
                  (AY(c.at(-1)) > AY(d) ||
                    (AY(c.at(-1)) === AY(d) &&
                      "left" === (9 === d.type ? "right" : "left")));

                )
                  (a = c.pop()), RX(12 !== a.type), b.push(a);
                c.push(d);
                break;
              case 12:
                c.push(d);
                break;
              case 13:
                for (; c.length && 12 !== c.at(-1).type; )
                  (a = c.pop()), RX(12 !== a.type), b.push(a);
                RX(0 < c.length);
                a = c.pop();
                RX(12 === a.type);
                break;
              default:
                throw new E(d);
            }
          RX(c.every((d) => 12 !== d.type));
          b.push(...c.reverse());
          return b;
        };
        H9a = function (a) {
          const b = a[0].length;
          if (!a.some((c) => c.length !== b))
            return { rows: a.length, cols: b };
        };
        I9a = function (a, b) {
          b = a.MZa(b);
          return b.Ob ? { Ob: a.Xu(b.value), value: b.value } : b;
        };
        CY = function (a, b, c) {
          return new J9a(a, b, c);
        };
        DY = function (a, b) {
          return new K9a(a, b);
        };
        FY = function (a, b) {
          var c = !1,
            d = !1,
            e = !1;
          for (var f of b)
            switch (f.type) {
              case 0:
                v(!d && !c && !e);
                break;
              case 1:
                v(!c && !e);
                d = !0;
                break;
              case 3:
                v(!d && !c && !e);
                c = !0;
                break;
              case 2:
                v(!d && !c && !e);
                e = !0;
                break;
              default:
                throw new E(f.type);
            }
          c = a.length;
          e = d = 0;
          f = !1;
          for (var g of b)
            (d += g.arity.min), (e += g.arity.max), f || (f = g.arity.B1);
          if (c < d || c > e || (c !== d && c !== e && f && 0 !== (c - d) % 2))
            return EY(7);
          a = a.slice();
          g = [];
          for (var h of b) {
            if (!h.GF(a)) return EY(7);
            b = h.consume(a);
            if (!b.Ob) return (h = b.value), 4 === h.type ? EY(h.value) : EY(3);
            g.push(b.value);
          }
          return { Ob: !0, value: g };
        };
        EY = function (a) {
          return { Ob: !1, value: { type: 4, value: a } };
        };
        L9a = function (a) {
          return (b, c) => {
            if (null == b) return c;
            switch (a) {
              case "AND":
                return WX(b.value && c.value);
              case "OR":
                return WX(b.value || c.value);
              default:
                throw new E(a);
            }
          };
        };
        M9a = function (a, b, c) {
          return GY(
            c,
            a,
            {
              fn: (d, e) => (3 === e.type ? d : $X("+", d, e)),
              initialValue: VX(0),
            },
            b
          );
        };
        N9a = function (a, b) {
          a = GY(b, a, { fn: (c) => ++c, initialValue: 0 });
          return "number" === typeof a ? VX(a) : a;
        };
        O9a = function (a, b, c) {
          a = GY(
            c,
            a,
            {
              fn: (f, g) => {
                if (3 === g.type) return f;
                const [h, k] = f;
                f = $X("+", h, VX(1));
                g = $X("+", k, g);
                return [f, g];
              },
              initialValue: [VX(0), VX(0)],
            },
            b
          );
          if (!Array.isArray(a)) return { type: 4, value: 2 };
          const [d, e] = a;
          return $X("/", e, d);
        };
        GY = function (a, b, c, d = b[0][0]) {
          const e = new Map();
          for (const [g, h] of b) {
            if (
              null == d.size ||
              null == g.size ||
              d.size.rows !== g.size.rows ||
              d.size.cols !== g.size.cols
            )
              return { type: 4, value: 3 };
            a: switch (h.type) {
              case 3:
                var f = a(h.value);
                break a;
              case 1:
              case 2:
              case 4:
                f = { Tr: "=", valueType: h.type, value: h };
                break a;
              case 0:
                f = { Tr: "=", valueType: 0, value: VX(0) };
                break a;
              default:
                throw new E(h);
            }
            const k = f;
            g.value.flat().forEach((l, m) => {
              var n;
              P9a(k, l) &&
                e.set(m, (null !== (n = e.get(m)) && void 0 !== n ? n : 0) + 1);
            });
          }
          return d.value
            .flat()
            .filter((g, h) => e.get(h) === b.length)
            .reduce(c.fn, c.initialValue);
        };
        P9a = function (a, b) {
          const c = a.value;
          if (0 === a.valueType && 3 === b.type)
            return (b = TX(b, 1)), 1 === b.type && P9a(a, b);
          if (b.type !== c.type) return "<>" === a.Tr;
          if (1 === b.type) return Z8a(c, b), ZX(a.Tr, b, c).value;
          if (4 === b.type)
            return Z8a(c, b), WX(aY[a.Tr](b.value, c.value)).value;
          if (4 === c.type) throw Error("Unexpected error token");
          return 3 === b.type && HY(a) && IY(a, b.value)
            ? !0
            : ZX(a.Tr, b, c).value;
        };
        HY = function (a) {
          return (
            3 === a.valueType &&
            ("=" === a.Tr || "<>" === a.Tr) &&
            void 0 !== (null === a || void 0 === a ? void 0 : a.NN)
          );
        };
        IY = function (a, b) {
          return (
            ("=" === a.Tr && a.NN.test(b)) || ("<>" === a.Tr && !a.NN.test(b))
          );
        };
        Q9a = function (a, b, c, d, e) {
          a = JY(a);
          if (0 === a.type) return { type: 4, value: 7 };
          if (null == b.size || c > b.size.cols) return { type: 4, value: 4 };
          let f;
          for (let h = 0; h !== b.value.length; h++) {
            const k = b.value[h];
            var g = k[0];
            if (0 !== g.type && 4 !== g.type && g.type === a.type)
              if (d ? d.value : 1)
                if (((g = $X("<=", g, a)), 2 === g.type && g.value))
                  f = k[c - 1];
                else {
                  if (f) break;
                }
              else {
                if (3 === a.type && 3 === g.type) {
                  const l = e(`=${a.value}`);
                  if (HY(l) && IY(l, g.value)) return k[c - 1];
                }
                g = $X("=", g, a);
                if (2 === g.type && g.value) return k[c - 1];
              }
          }
          return void 0 !== f ? f : { type: 4, value: 7 };
        };
        R9a = function (a) {
          var b;
          return (
            Math.floor(
              null !== (b = null === a || void 0 === a ? void 0 : a.value) &&
                void 0 !== b
                ? b
                : 0
            ) - 1
          );
        };
        S9a = function (a, b) {
          return HY(a) && "=" === a.Tr
            ? b.findIndex((c) => 3 === c.type && IY(a, c.value))
            : -1;
        };
        T9a = function (a, b, c, d) {
          let e = -1,
            f;
          for (let g = 0; g < b.length; g++) {
            const h = b[g];
            h.type === a.type &&
              ZX(c, h, a).value &&
              (null == f || ZX(d, f, h).value) &&
              ((f = h), (e = g));
          }
          return e;
        };
        U9a = function (a) {
          const b = 5 === a[0].type ? a[0].size : null;
          return b
            ? a.every((c) => {
                var d, e;
                return (
                  5 === c.type &&
                  (null === (d = c.size) || void 0 === d ? void 0 : d.cols) ===
                    b.cols &&
                  (null === (e = c.size) || void 0 === e ? void 0 : e.rows) ===
                    b.rows
                );
              })
            : !1;
        };
        __c.kR.prototype.ls = __c.fa(8, function (a) {
          return (a = this.im[a]) && a.value;
        });
        V9a = __webpack_require__(168949);
        __c.W9a = V9a.LO;
        __c.KY = V9a.Fl;
        var X9a;
        X9a = {
          "#REF!": 4,
          "#DIV/0!": 2,
          "#N/A": 7,
          "#NAME?": 5,
          "#NULL!": 1,
          "#NUM!": 6,
          "#VALUE!": 3,
        };
        __c.Y9a = Object.fromEntries(
          Object.entries(X9a).map(([a, b]) => [b, a])
        );
        var Z9a, $9a;
        Z9a = (a) => ({ type: 9, value: a });
        $9a = (a) => ({ type: 10, value: a });
        VX = __c.VX = (a, b) => ({
          type: 1,
          value: Object.is(a, -0) ? 0 : a,
          Ea: b,
        });
        WX = __c.WX = (a, b) => ({ type: 2, value: a, Ea: b });
        UX = __c.UX = (a, b) => ({ type: 3, value: a, Ea: b });
        __c.LY = (a, b) => ({ type: 5, value: a, size: b });
        var d9a = /^[-+]?(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][-+]?\d+)?$/;
        var f9a = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
            "^": (a, b) => Math.pow(a, b),
          },
          g9a = {
            "+": (a, b) => (null !== a && void 0 !== a ? a : b),
            "-": (a, b) => (null !== a && void 0 !== a ? a : b),
            "*": (a, b) => MY(a, b),
            "/": (a, b) => MY(a, b),
            "^": (a, b) => MY(a, b),
          },
          MY = (a, b) => {
            var c, d;
            const e =
              null === a || void 0 === a
                ? void 0
                : null === (c = a.ac) || void 0 === c
                ? void 0
                : c.type;
            c =
              null === b || void 0 === b
                ? void 0
                : null === (d = b.ac) || void 0 === d
                ? void 0
                : d.type;
            if ("currency" === e) return a;
            if ("currency" === c) return b;
            a = "percentage" !== e ? a : void 0;
            return null !== a && void 0 !== a
              ? a
              : "percentage" !== c
              ? b
              : void 0;
          },
          aY = {
            ">": (a, b) => a > b,
            "<": (a, b) => a < b,
            ">=": (a, b) => a >= b,
            "<=": (a, b) => a <= b,
            "=": (a, b) => a === b,
            "<>": (a, b) => a !== b,
          },
          h9a = { [2]: 1, [3]: 0, [1]: -1 };
        __c.cY = Object.freeze([]);
        var a$a,
          t9a,
          pY,
          z9a,
          A9a,
          r9a,
          y9a,
          u9a,
          s9a,
          v9a,
          p9a,
          B9a,
          C9a,
          qY,
          D9a,
          NY;
        a$a = { Pd: "." };
        oY = __c.oY = dY(/^\s*/);
        __c.b$a = dY(/^$/);
        t9a = dY(/^\(/);
        pY = dY(/^\)/);
        z9a = dY(/^{/);
        A9a = dY(/^}/);
        r9a = dY(/^,/);
        y9a = dY(/^\\/);
        u9a = dY(/^:/);
        s9a = dY(/^;/);
        v9a = dY(/^"/);
        p9a = dY(/^[-]/);
        B9a = dY(/^%/);
        C9a = dY(/^(?:<=|>=|<>|[-+*/^=<>&:])/);
        tY = __c.tY = dY(/^\$?[a-z]{1,3}/i);
        uY = __c.uY = dY(/^\$?[1-9]\d*/);
        sY = __c.sY = gY((a, b) => [a, b], tY, uY);
        qY = dY(RegExp("^[\\p{L}_\\\\][\\p{L}\\p{M}\\p{N}_\\\\.?]*", "u"));
        __c.rY = gY(
          (a) => "true" === a.toLowerCase(),
          dY(/^(?:TRUE|FALSE)/i),
          eY(dY(RegExp("^[\\p{L}\\p{M}\\p{N}_\\\\.?]", "u")))
        );
        __c.w9a = gY((a) => a.replace(/""/g, '"'), dY(/^(?:""|[^"])*/));
        __c.x9a = gY(
          (a) => ({ type: __c.B(X9a[a]) }),
          dY(/^#(?:REF!|DIV\/0!|N\/A|NAME\?|NULL!|NUM!|VALUE!)/i)
        );
        D9a = (a) =>
          k9a(
            j9a(a),
            (b) =>
              !(
                null == b.name &&
                0 === b.children.length &&
                "" === b.text.trim()
              ) || null != b.error
          );
        __c.c$a = vY(
          {
            Ema: function (a, b) {
              return [
                { type: 7, value: b },
                { type: 6, value: a },
              ];
            },
            Yma: function (a) {
              v(1 === a.length || 2 === a.length);
              if (1 === a.length)
                return bY(sY, a[0])
                  ? [{ type: 8, value: { type: 0, ...F9a(a[0]) } }]
                  : bY(tY, a[0])
                  ? [{ type: 8, value: { type: 1, ...xY(a[0]) } }]
                  : [{ type: 8, value: { type: 3, name: a[0] } }];
              const [b, c] = a.map(wY);
              return [
                { type: 8, value: { type: 2, ...b } },
                { type: 11, value: ":" },
                { type: 8, value: { type: 2, ...c } },
              ];
            },
            Nma: function (a) {
              switch (a.type) {
                case 0:
                  return [{ type: 12 }, ...a.value, { type: 13 }];
                case 1:
                case 2:
                  return a.value;
                case 3:
                  switch (typeof a.value) {
                    case "boolean":
                    case "number":
                    case "string":
                      return [G9a(a.value)];
                    case "object":
                      if (Array.isArray(a.value)) {
                        a = a.value.map((c) => c.map((d) => G9a(d)));
                        const b = H9a(a);
                        return [__c.LY(a, b)];
                      }
                      return [{ type: 4, value: a.value.type }];
                    default:
                      throw Error();
                  }
                default:
                  throw new E(a);
              }
            },
            fna: function (a, b, c) {
              return [...a.map(Z9a), ...b, ...c.map($9a)];
            },
            Bma: function (a, b = []) {
              if (!b.length) return a;
              a = [...a];
              for (const [c, d] of b) a.push({ type: 11, value: c }, ...d);
              return a;
            },
          },
          { Sba: !1, tfa: a$a }
        );
        NY = () => {};
        __c.d$a = (function (a) {
          const b = { Ema: NY, Yma: NY, Nma: NY, fna: NY, Bma: NY },
            c = vY(b, { Sba: !0, tfa: a }),
            d = vY(b, { Sba: !1, tfa: a });
          return (e, f = { HJa: !1 }) => {
            const g = c.$C(e);
            e = bY(d.$C, e);
            return g && (f.HJa || e)
              ? e
                ? { result: "success", bR: g }
                : (RX(0 === g.s.length, `could not parse: ${g.s}`),
                  { result: "syntax-error", bR: g })
              : { result: "error" };
          };
        })(a$a);
        __c.e$a = dY(/^(?:<=|>=|<>|[=<>])/);
        __c.f$a = Object.freeze({
          "af-ZA": ",",
          ar: ".",
          "ar-AE": ".",
          "ar-EG": ".",
          "ar-SA": ".",
          "as-IN": ".",
          "az-AZ": ",",
          "bg-BG": ",",
          "bn-BD": ".",
          "ca-ES": ",",
          "ceb-PH": ".",
          "cs-CZ": ",",
          "cy-GB": ".",
          "da-DK": ",",
          "de-DE": ",",
          "el-GR": ",",
          en: ".",
          "en-AU": ".",
          "en-GB": ".",
          "en-IN": ".",
          "en-PH": ".",
          "en-psaccent": ".",
          "es-419": ".",
          "es-AR": ",",
          "es-CO": ",",
          "es-ES": ",",
          "es-MX": ".",
          "es-US": ".",
          "et-EE": ",",
          "eu-ES": ",",
          "fa-IR": ".",
          "ff-SN": ",",
          "fi-FI": ",",
          "fr-BE": ",",
          "fr-CA": ",",
          "fr-FR": ",",
          "gl-ES": ",",
          "gu-IN": ".",
          "ha-NG": ".",
          "he-IL": ".",
          "hi-IN": ".",
          "hr-HR": ",",
          "hu-HU": ",",
          "hy-AM": ",",
          "id-ID": ",",
          "ig-NG": ".",
          "it-IT": ",",
          "ja-Hira": ".",
          "ja-JP": ".",
          "jv-ID": ",",
          "ka-GE": ",",
          "kk-KZ": ",",
          "km-KH": ",",
          "kn-IN": ".",
          "ko-KR": ".",
          "ku-TR": ",",
          "ky-KG": ",",
          "lt-LT": ",",
          "lv-LV": ",",
          "ma-IN": ".",
          "mg-MG": ".",
          "mk-MK": ",",
          "ml-IN": ".",
          "mn-MN": ".",
          "mr-IN": ".",
          "ms-MY": ".",
          "my-MM": ".",
          "nb-NO": ",",
          "ne-NP": ".",
          "nl-BE": ",",
          "nl-NL": ",",
          "om-ET": ".",
          "pa-IN": ".",
          "pa-PK": ".",
          "pl-PL": ",",
          "pt-BR": ",",
          "pt-PT": ",",
          "ro-RO": ",",
          "ru-RU": ",",
          "sd-IN": ".",
          "si-LK": ".",
          "sk-SK": ",",
          "sl-SI": ",",
          "sn-ZW": ".",
          "so-SO": ".",
          "sq-AL": ",",
          "sr-RS": ",",
          "su-ID": ",",
          "sv-SE": ",",
          "sw-KE": ".",
          "ta-IN": ".",
          "te-IN": ".",
          "th-TH": ".",
          "tl-PH": ".",
          "tr-TR": ",",
          "uk-UA": ",",
          "ur-PK": ".",
          "uz-UZ": ",",
          "vi-VN": ",",
          "wo-SN": ",",
          "xh-ZA": ".",
          "yo-NG": ".",
          "zh-CN": ".",
          "zh-HK": ".",
          "zh-TW": ".",
          "zu-ZA": ".",
        });
        var OY = class {
            get arity() {
              return { min: 1, max: 1, B1: !1 };
            }
            GF(a) {
              return 0 < a.length;
            }
            consume(a) {
              v(this.GF(a));
              a = __c.B(a.shift());
              return I9a(this, a);
            }
            constructor(a, b = (c) => ({ Ob: !0, value: c })) {
              this.Xu = a;
              this.MZa = b;
              this.type = 0;
            }
          },
          J9a = class extends OY {
            consume(a) {
              a = super.consume(a);
              return a.Ob ? { Ob: !0, value: this.bMa(a.value) } : a;
            }
            constructor(a, b, c) {
              v(0 === a.type);
              super(
                (d) => a.Xu(d) && b(d),
                (d) => a.consume([d])
              );
              this.bMa = c;
            }
          },
          PY = class extends OY {
            get arity() {
              return { min: 0, max: 1, B1: !1 };
            }
            GF() {
              return !0;
            }
            consume(a) {
              a = a.shift();
              return I9a(this, a);
            }
            constructor(a) {
              v(0 === a.type);
              super(
                (b) => null == b || a.Xu(b),
                (b) => (null == b ? { Ob: !0, value: void 0 } : a.consume([b]))
              );
              this.type = 1;
            }
          },
          QY = class extends OY {
            get arity() {
              return { min: 2, max: 2, B1: !0 };
            }
            GF(a) {
              return 2 <= a.length;
            }
            consume(a) {
              v(this.GF(a));
              const b = this.aP.consume(a);
              a = this.D3a.consume(a);
              return b.Ob && a.Ob
                ? { Ob: !0, value: [b.value, a.value] }
                : b.Ob
                ? a
                : b;
            }
            constructor(a, b) {
              v(0 === a.type);
              v(0 === b.type);
              super(() => {
                v(!1);
              });
              this.aP = a;
              this.D3a = b;
              this.type = 2;
            }
          },
          K9a = class extends OY {
            get arity() {
              const a = 2 === this.aP.type;
              return { min: 0, max: this.max * (a ? 2 : 1), B1: a };
            }
            GF(a) {
              return 2 === this.aP.type
                ? 0 === a.length % 2 && a.length <= 2 * this.max
                : a.length <= this.max;
            }
            consume(a) {
              v(this.GF(a));
              const b = [];
              for (; a.length; ) {
                const c = this.aP.consume(a);
                if (!c.Ob) return c;
                b.push(c.value);
              }
              return { Ob: !0, value: b };
            }
            constructor(a, b) {
              v(0 === a.type || 2 === a.type);
              super((c) => this.aP.Xu(c));
              this.aP = a;
              this.max = b;
              this.type = 3;
            }
          },
          RY = new OY(() => !0),
          SY = new OY((a) => 4 !== a.type),
          TY = new OY((a) => 5 === a.type && null != a.size),
          UY = CY(
            RY,
            (a) => 5 !== a.type || null != a.size,
            (a) => (5 === a.type ? a.value[0][0] : a)
          ),
          g$a = CY(
            UY,
            (a) => 4 !== a.type,
            (a) => a
          ),
          VY = CY(
            g$a,
            (a) => 4 !== TX(a, 2).type,
            (a) => c9a(a, 2)
          ),
          WY = CY(
            g$a,
            (a) => 4 !== TX(a, 1).type,
            (a) => c9a(a, 1)
          ),
          h$a = CY(
            WY,
            (a) => 1 <= a.value,
            (a) => Math.floor(a.value)
          ),
          i$a = (function (a, b) {
            v(0 === a.type);
            v(0 === b.type);
            return new OY((c) => a.Xu(c) || b.Xu(c));
          })(TY, WY);
        new QY(UY, TY);
        var XY = [i$a, DY(i$a, 254)],
          YY = [RY, DY(RY, 254)],
          j$a = [SY, DY(SY, 254)];
        var k$a = () => Q("AytKEQ"),
          l$a = () => Q("ov07pg"),
          m$a = () => Q("0OZlXw"),
          n$a = () => Q("UNcBHQ"),
          o$a = () => Q("KyOXKw"),
          p$a = () => Q("oIv25Q"),
          q$a = () => Q("8MC7NQ"),
          r$a = () => Q("hMw7aQ"),
          s$a = () => Q("GhP5GA"),
          t$a = () => Q("kgOhOg"),
          u$a = () => Q("rOG4RQ"),
          v$a = () => Q("SRLplQ"),
          w$a = () => Q("F7KAQw"),
          x$a = () => Q("JZNFRA"),
          y$a = () => Q("z6237A"),
          z$a = () => Q("H0sxOw"),
          A$a = () => Q("9Gg1Mg"),
          B$a = () => Q("MvkKiw"),
          C$a = () => Q("HSWMvg"),
          D$a = () => Q("2/8ILQ"),
          E$a = () => Q("moRadA"),
          F$a = () => Q("YAYu0Q"),
          G$a = () => Q("SUASIw"),
          H$a = () => Q("VdIrCw"),
          I$a = () => Q("kUEOwQ"),
          J$a = () => Q("h3Jymg"),
          K$a = () => Q("qpF0/Q"),
          L$a = () => Q("toEMSQ"),
          M$a = () => Q("SLojAw"),
          N$a = () => Q("XILGzw");
        var ZY = class {
          constructor(a) {
            this.eB = a;
          }
        };
        var $Y = class extends ZY {
          execute(a) {
            var b = FY(a, this.args);
            if (!b.Ob) return b.value;
            a = L9a($Y.functionName);
            b = [b.value[0], ...b.value[1]];
            return this.process(a, b);
          }
          process(a, b) {
            b = XX(
              b,
              (c, d) => {
                if (null != c && 4 === c.type) return c;
                if (4 === d.type) return d;
                if (0 === d.type) return c;
                d = TX(d, 2);
                return 4 === d.type ? c : a(c, d);
              },
              void 0,
              {
                Au: () => !0,
                Hu: (c) =>
                  4 === (null === c || void 0 === c ? void 0 : c.type)
                    ? c
                    : void 0,
              }
            );
            return null == b.result ? { type: 4, value: 3 } : b.result;
          }
          constructor(...a) {
            super(...a);
            this.args = j$a;
            this.metadata = {
              category: 8,
              description: k$a,
              gf: [
                { type: "CONDITION", optional: !1 },
                { type: "CONDITIONS", optional: !0 },
              ],
              cf: ["=AND(A1>0, B1<5)", "=AND(3>0, 2<5)", "=AND(TRUE, 1=1)"],
            };
          }
        };
        $Y.functionName = "AND";
        var O$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            a = XX(
              a,
              (b, c) => ({
                sum: $X("+", b.sum, c),
                count: b.count + (0 !== c.type ? 1 : 0),
              }),
              { sum: VX(0), count: 0 },
              { Au: SX, Hu: (b) => (4 === b.sum.type ? b.sum : void 0) }
            );
            return a.Ob ? $X("/", a.result.sum, VX(a.result.count)) : a.result;
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 11,
              description: l$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: [
                "=AVERAGE(A1:A10)",
                "=AVERAGE(1, 2, 3)",
                "=AVERAGE(A1, 5, 10)",
              ],
            };
          }
        };
        O$a.functionName = "AVERAGE";
        var JY = (a) => (5 === a.type ? a.value[0][0] : a);
        var P$a = (a, b, c, d = a) => M9a([[a, b]], d, c),
          Q$a = (a, b, c, d = a) => O9a([[a, b]], d, c);
        var R$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d = b] = a.value;
            return Q$a(b, c, this.eB.get(), d);
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, UY, new PY(TY)];
            this.metadata = {
              category: 11,
              description: m$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
                { type: "ARRAY", optional: !0 },
              ],
              cf: [
                '=AVERAGEIF(A1:A10, ">5")',
                '=AVERAGEIF(B1:B10, "Apple", C1:C10)',
                '=AVERAGEIF(D1:D10, "<100", E1:E10)',
              ],
            };
          }
        };
        R$a.functionName = "AVERAGEIF";
        var S$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, ...c] = a.value;
            a = [[c[0], c[1]], ...c[2]];
            return O9a(a, b, this.eB.get());
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, TY, UY, DY(new QY(TY, UY), 126)];
            this.metadata = {
              category: 11,
              description: n$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
                { type: "ARRAY", optional: !0 },
                { type: "CONDITION", optional: !0 },
              ],
              cf: [
                '=AVERAGEIFS(C1:C15, A1:A15, ">=100", B1:B15, ">=50")',
                '=AVERAGEIFS(D1:D15, C1:C15, "Blue", B1:B15, ">=10")',
                '=AVERAGEIFS(E1:E10, A1:A10, ">=20", B1:B1, "<30")',
              ],
            };
          }
        };
        S$a.functionName = "AVERAGEIFS";
        var T$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            return XX(a, (b, c) => $X("&", b, c), UX(""), {
              Au: () => !0,
              Hu: (b) => (4 === b.type ? b : void 0),
            }).result;
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 12,
              description: o$a,
              gf: [
                { type: "TEXT", optional: !1 },
                { type: "TEXTS", optional: !0 },
              ],
              cf: [
                '=CONCAT(A1, " ", B1)',
                '=CONCAT("Hello", " ", "World")',
                "=CONCAT(A1, B1, C1)",
              ],
            };
          }
        };
        T$a.functionName = "CONCAT";
        var U$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            a = XX(a, (b, c) => b + (1 === c.type ? 1 : 0), 0, {
              Au: (b) => 1 === b.type,
              Hu: () => {},
            });
            RX(a.Ob);
            return VX(a.result);
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 11,
              description: p$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: [
                "=COUNT(A1:A10)",
                '=COUNT(1, 2, "text", 3)',
                "=COUNT(A1, B1, C1)",
              ],
            };
          }
        };
        U$a.functionName = "COUNT";
        var V$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            a = XX(a, (b, c) => b + (0 === c.type ? 0 : 1), 0, {
              Au: () => !0,
              Hu: () => {},
            });
            RX(a.Ob);
            return VX(a.result);
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 11,
              description: q$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: [
                "=COUNTA(A1:A10)",
                '=COUNTA(1, 2, "text", 3)',
                "=COUNTA(A1, B1, C1)",
              ],
            };
          }
        };
        V$a.functionName = "COUNTA";
        var W$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            a = XX(
              a,
              (b, c) =>
                b + (0 === c.type || (3 === c.type && "" === c.value) ? 1 : 0),
              0,
              { Au: () => !0, Hu: () => {} }
            );
            RX(a.Ob);
            return VX(a.result);
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 11,
              description: r$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: ["=COUNTBLANK(A1:A10)", "=COUNTBLANK(B1:B5)"],
            };
          }
        };
        W$a.functionName = "COUNTBLANK";
        var X$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c] = a.value;
            a = this.eB.get();
            return N9a([[b, c]], a);
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, UY];
            this.metadata = {
              category: 11,
              description: s$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
              ],
              cf: [
                '=COUNTIF(A1:A10, ">5")',
                '=COUNTIF(B1:B10, "Apple")',
                '=COUNTIF(C1:C10, "<=10")',
              ],
            };
          }
        };
        X$a.functionName = "COUNTIF";
        var Y$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = a.value;
            a = [[a[0], a[1]], ...a[2]];
            return N9a(a, this.eB.get());
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, UY, DY(new QY(TY, UY), 126)];
            this.metadata = {
              category: 11,
              description: t$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
                { type: "ARRAY", optional: !0 },
                { type: "CONDITION", optional: !0 },
              ],
              cf: [
                '=COUNTIFS(A1:A10, ">5", B1:B10, "<10")',
                '=COUNTIFS(A1:A5, "A", B1:B5, "B")',
                '=COUNTIFS(A1:A10, ">=20", B1:B10, "<=30")',
              ],
            };
          }
        };
        Y$a.functionName = "COUNTIFS";
        var Z$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            const b = new Set();
            a = XX(
              a,
              (c, d) => {
                if (0 === d.type) throw Error("Unexpected null token");
                if ((3 === d.type && "" === d.value) || b.has(d.value))
                  return c;
                b.add(d.value);
                return c + 1;
              },
              0,
              { Au: (c) => 0 !== c.type, Hu: () => {} }
            );
            RX(a.Ob);
            return VX(a.result);
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 11,
              description: u$a,
              gf: [{ type: "ARRAY", optional: !1 }],
              cf: [
                "=COUNTUNIQUE(A1:A10)",
                '=COUNTUNIQUE(B1:B5, "Apple", "Banana")',
                "=COUNTUNIQUE(C1, C2, C3, C4)",
              ],
            };
          }
        };
        Z$a.functionName = "COUNTUNIQUE";
        var $$a = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d, e] = a.value;
            return Q9a(b, c, d, e, this.eB.get());
          }
          constructor(...a) {
            super(...a);
            this.args = [SY, TY, h$a, new PY(VY)];
            this.metadata = {
              category: 9,
              description: N$a,
              gf: [
                { type: "LOOKUP_VALUE", optional: !1 },
                { type: "ARRAYS", optional: !1 },
                { type: "COL_INDEX_NUM", optional: !1 },
                { type: "RANGE_LOOKUP", optional: !0 },
              ],
              cf: [
                '=VLOOKUP("Apple", A1:B10, 2, FALSE)',
                "=VLOOKUP(A1, B1:C10, 2, TRUE)",
                "=VLOOKUP(5, A1:B10, 2, FALSE)",
              ],
            };
          }
        };
        $$a.functionName = "VLOOKUP";
        var aab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d, e] = a.value;
            a = this.eB.get();
            {
              const k = c.value;
              var f = c.size;
              if (f) {
                var g = f.rows;
                f = f.cols;
                var h = [];
                for (let l = 0; l < f; l++) {
                  const m = [];
                  for (let n = 0; n < g; n++) m.push(k[n][l]);
                  h.push(m);
                }
                g = { type: 5, value: h, size: { rows: f, cols: g } };
              } else g = { type: 5, value: [], size: void 0 };
            }
            return Q9a(b, g, d, e, a);
          }
          constructor(...a) {
            super(...a);
            this.args = [SY, TY, h$a, new PY(VY)];
            this.metadata = {
              category: 9,
              description: v$a,
              gf: [
                { type: "LOOKUP_VALUE", optional: !1 },
                { type: "ARRAYS", optional: !1 },
                { type: "ROW_INDEX_NUM", optional: !1 },
                { type: "RANGE_LOOKUP", optional: !0 },
              ],
              cf: [
                '=HLOOKUP("Apple", A1:F10, 2, FALSE)',
                "=HLOOKUP(A1, B1:H10, 3, TRUE)",
                "=HLOOKUP(5, A1:E4, 2, FALSE)",
              ],
            };
          }
        };
        aab.functionName = "HLOOKUP";
        var bab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d] = a.value;
            return b.value ? c : d;
          }
          constructor(...a) {
            super(...a);
            this.args = [VY, RY, RY];
            this.metadata = {
              category: 8,
              description: w$a,
              gf: [
                { type: "CONDITION", optional: !1 },
                { type: "VALUE_IF_TRUE", optional: !1 },
                { type: "VALUE_IF_FALSE", optional: !1 },
              ],
              cf: [
                '=IF(A1>10, "Over 10", "10 or less")',
                '=IF(A1="", "Empty", "Not empty")',
                '=IF(A1>5, "Greater than 5", "5 or less")',
                '=IF(3>2, "True", "False")',
                '=IF(TRUE, "This is true", "This is false")',
              ],
            };
          }
        };
        bab.functionName = "IF";
        var cab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c] = a.value;
            a = 4 === b.type ? c : b;
            return 0 === a.type ? VX(0) : a;
          }
          constructor(...a) {
            super(...a);
            this.args = [UY, UY];
            this.metadata = {
              category: 8,
              description: x$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUE_IF_ERROR", optional: !1 },
              ],
              cf: [
                '=IFERROR(A1/B1, "Error in calculation")',
                '=IFERROR(VLOOKUP("Apple", A1:B10, 2, FALSE), "Not Found")',
                '=IFERROR(TEXT(A1, "0.00"), "Invalid number")',
                '=IFERROR(10/0, "Division by zero")',
              ],
            };
          }
        };
        cab.functionName = "IFERROR";
        var dab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [[a.value[0], a.value[1]], ...a.value[2]];
            for (const [b, c] of a) {
              a = JY(b);
              if (4 === a.type) return a;
              a = TX(a, 2);
              if (4 === a.type) return a;
              if (a.value) return c;
            }
            return { type: 4, value: 7 };
          }
          constructor(...a) {
            super(...a);
            this.args = [VY, RY, DY(new QY(UY, RY), 126)];
            this.metadata = {
              category: 8,
              description: y$a,
              gf: [
                { type: "CONDITIONS", optional: !1 },
                { type: "VALUES", optional: !1 },
              ],
              cf: [
                '=IFS(A1=1, "One", A1=2, "Two", A1=3, "Three")',
                '=IFS(B1>10, "Above 10", B1>5, "Above 5", TRUE, "5 or less")',
                '=IFS(C1="Apple", "Fruit", C1="Carrot", "Vegetable", TRUE, "Other")',
              ],
            };
          }
        };
        dab.functionName = "IFS";
        var eab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d] = a.value;
            a = R9a(c);
            const e = R9a(d);
            var f = 5 === b.type ? b : __c.LY([[b]], { rows: 1, cols: 1 });
            if (-1 > a || (d && -1 > e) || null == f.size)
              return { type: 4, value: 3 };
            if (null == d && (1 === f.size.rows || 1 === f.size.cols)) {
              if (-1 === a) return b;
              f = f.value.flat(1);
              if (a >= f.length) return { type: 4, value: 4 };
              a = f[a];
              return 0 === a.type ? VX(0) : a;
            }
            if (a >= f.size.rows || e >= f.size.cols)
              return { type: 4, value: 4 };
            if (-1 === e && -1 === a) return b;
            if (-1 === a)
              return (
                (a = f.value.map((g) => [g[e]])),
                __c.LY(a, { rows: a.length, cols: 1 })
              );
            if (-1 === e)
              return (a = f.value[a]), __c.LY([a], { rows: 1, cols: a.length });
            a = f.value[a][e];
            return 0 === a.type ? VX(0) : a;
          }
          constructor(...a) {
            super(...a);
            this.args = [RY, WY, new PY(WY)];
            this.metadata = {
              category: 9,
              description: z$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "ROW_INDEX_NUM", optional: !1 },
                { type: "COL_INDEX_NUM", optional: !0 },
              ],
              cf: ["=INDEX(A1:A4, 1)", "=INDEX({1, 2; 3, 4}, 1, 1)"],
            };
          }
        };
        eab.functionName = "INDEX";
        var fab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d] = a.value;
            a = JY(b);
            a = 0 === a.type ? VX(0) : a;
            __c.y(4 !== a.type);
            var e = null === d || void 0 === d ? void 0 : d.value;
            var f = null == e || 0 < e ? 1 : 0 > e ? -1 : 0;
            if (null == c.size || 1 !== Math.min(c.size.cols, c.size.rows))
              return { type: 4, value: 7 };
            e = c.value.flat(1);
            switch (f) {
              case 0:
                if (
                  3 === a.type &&
                  ((f = this.eB.get()(`=${a.value}`)),
                  (f = S9a(f, e)),
                  -1 !== f)
                )
                  return VX(f + 1);
                a: {
                  for (f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (g.type === a.type && ZX("=", a, g).value) {
                      a = f;
                      break a;
                    }
                  }
                  a = -1;
                }
                if (-1 !== a) return VX(a + 1);
                break;
              case 1:
                a = T9a(a, e, "<=", "<=");
                if (-1 !== a) return VX(a + 1);
                break;
              case -1:
                a = T9a(a, e, ">=", ">");
                if (-1 !== a) return VX(a + 1);
                break;
              default:
                throw new E(f);
            }
            return { type: 4, value: 7 };
          }
          constructor(...a) {
            super(...a);
            this.args = [SY, TY, new PY(WY)];
            this.metadata = {
              category: 9,
              description: A$a,
              gf: [
                { type: "LOOKUP_VALUE", optional: !1 },
                { type: "SEARCH_RANGE", optional: !1 },
                { type: "MATCH_TYPE", optional: !0 },
              ],
              cf: ["=MATCH(4, {2,4,6})", '=MATCH("Apple", A1:B10, 0)'],
            };
          }
        };
        fab.functionName = "MATCH";
        var aZ = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            return this.process("<", VX(Infinity), a);
          }
          process(a, b, c) {
            return XX(
              c,
              (d, e) => {
                if (4 === d.type) return d;
                if (4 === e.type) return e;
                e = TX(e, 1);
                return 4 === e.type ? e : ZX(a, d, e).value ? d : e;
              },
              b,
              { Au: SX, Hu: (d) => (4 === d.type ? d : void 0) }
            ).result;
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 11,
              description: D$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: ["=MIN(A1:A10)", "=MIN(1, 2, 3)", "=MIN(A1, 5, 10)"],
            };
          }
        };
        aZ.functionName = "MIN";
        var gab = class extends aZ {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            return this.process(">", VX(-Infinity), a);
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 11,
              description: B$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: ["=MAX(A1:A10)", "=MAX(1, 2, 3)", "=MAX(A1, 5, 10)"],
            };
          }
        };
        gab.functionName = "MAX";
        var hab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]].map((c) => {
              switch (c.type) {
                case 3:
                case 2:
                  return TX(c, 1);
                case 4:
                case 1:
                case 0:
                case 5:
                  return c;
                default:
                  throw new E(c);
              }
            });
            a = XX(
              a,
              (c, d) => {
                if (!Array.isArray(c)) return c;
                switch (d.type) {
                  case 4:
                    return d;
                  case 1:
                    c.push(d.value);
                    break;
                  case 3:
                  case 2:
                  case 0:
                    break;
                  default:
                    throw new E(d);
                }
                return c;
              },
              [],
              { Au: SX, Hu: (c) => (Array.isArray(c) ? void 0 : c) }
            );
            if (!a.Ob || !Array.isArray(a.result)) return a.result;
            if (0 === a.result.length) return { type: 4, value: 6 };
            a = a.result.sort((c, d) => c - d);
            const b = Math.floor(a.length / 2);
            return VX(0 === a.length % 2 ? (a[b - 1] + a[b]) / 2 : a[b]);
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 11,
              description: C$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: [
                "=MEDIAN(A1:A10)",
                "=MEDIAN(1, 2, 3, 4, 5)",
                "=MEDIAN(A1, 5, 10)",
              ],
            };
          }
        };
        hab.functionName = "MEDIAN";
        var iab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = JY(a.value[0]);
            if (4 === a.type) return a;
            a = TX(a, 2);
            return 4 === a.type ? a : WX(!a.value);
          }
          constructor(...a) {
            super(...a);
            this.args = [VY];
            this.metadata = {
              category: 8,
              description: E$a,
              gf: [{ type: "CONDITION", optional: !1 }],
              cf: ["=NOT(A1>10)", "=NOT(3>5)", "=NOT(FALSE)"],
            };
          }
        };
        iab.functionName = "NOT";
        var bZ = class extends $Y {
          execute(a) {
            var b = FY(a, this.args);
            if (!b.Ob) return b.value;
            a = L9a(bZ.functionName);
            b = [b.value[0], ...b.value[1]];
            return this.process(a, b);
          }
          constructor(...a) {
            super(...a);
            this.args = j$a;
            this.metadata = {
              category: 8,
              description: F$a,
              gf: [
                { type: "CONDITION", optional: !1 },
                { type: "CONDITIONS", optional: !0 },
              ],
              cf: ["=OR(A1>0, B1<5)", "=OR(3>0, 5<2)", "=OR(FALSE, 1=1)"],
            };
          }
        };
        bZ.functionName = "OR";
        var jab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            return XX(a, (b, c) => $X("*", b, c), VX(1), {
              Au: SX,
              Hu: (b) => (4 === b.type ? b : void 0),
            }).result;
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 10,
              description: G$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: [
                "=PRODUCT(A1:A3)",
                "=PRODUCT(2, 3, 4)",
                "=PRODUCT(A1, 5, 10)",
              ],
            };
          }
        };
        jab.functionName = "PRODUCT";
        var cZ = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c] = a.value;
            return this.process(b, c, cZ.functionName);
          }
          process(a, b, c) {
            const d = 0 > a.value;
            a = Math.abs(a.value);
            const e = Math.max(a.toFixed(0).length + b.value, 15);
            b = Math.pow(10, b.value);
            a = parseFloat((a * b).toFixed(11));
            switch (c) {
              case "ROUNDDOWN":
                a = Number((Math.floor(a) / b).toPrecision(e));
                break;
              case "ROUNDUP":
                a = Number((Math.ceil(a) / b).toPrecision(e));
                break;
              case "ROUND":
                a = Number((Math.round(a) / b).toPrecision(e));
                break;
              default:
                throw new E(c);
            }
            return isFinite(a)
              ? VX(Number(d ? (-1 * a).toPrecision(e) : a))
              : { type: 4, value: 6 };
          }
          constructor(...a) {
            super(...a);
            this.args = [WY, WY];
            this.metadata = {
              category: 10,
              description: H$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUE", optional: !1 },
              ],
              cf: ["=ROUND(123.456, 2)", "=ROUND(A1, 0)", "=ROUND(15.7, -1)"],
            };
          }
        };
        cZ.functionName = "ROUND";
        var dZ = class extends cZ {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c] = a.value;
            return this.process(b, c, dZ.functionName);
          }
          constructor(...a) {
            super(...a);
            this.args = [WY, WY];
            this.metadata = {
              category: 10,
              description: I$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUE", optional: !1 },
              ],
              cf: [
                "=ROUNDDOWN(123.456, 2)",
                "=ROUNDDOWN(A1, 0)",
                "=ROUNDDOWN(15.7, -1)",
              ],
            };
          }
        };
        dZ.functionName = "ROUNDDOWN";
        var eZ = class extends cZ {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c] = a.value;
            return this.process(b, c, eZ.functionName);
          }
          constructor(...a) {
            super(...a);
            this.args = [WY, WY];
            this.metadata = {
              category: 10,
              description: J$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUE", optional: !1 },
              ],
              cf: [
                "=ROUNDDUP(123.456, 2)",
                "=ROUNDDUP(A1, 0)",
                "=ROUNDDUP(15.7, -1)",
              ],
            };
          }
        };
        eZ.functionName = "ROUNDUP";
        var kab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            return XX(a, (b, c) => $X("+", b, c), VX(0), {
              Au: SX,
              Hu: (b) => (4 === b.type ? b : void 0),
            }).result;
          }
          constructor(...a) {
            super(...a);
            this.args = XY;
            this.metadata = {
              category: 10,
              description: K$a,
              gf: [
                { type: "VALUE", optional: !1 },
                { type: "VALUES", optional: !0 },
              ],
              cf: ["=SUM(A1:A10)", "=SUM(1, 2, 3)", "=SUM(A1, 5, 10)"],
            };
          }
        };
        kab.functionName = "SUM";
        var lab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, c, d = b] = a.value;
            return P$a(b, c, this.eB.get(), d);
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, UY, new PY(TY)];
            this.metadata = {
              category: 10,
              description: L$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
                { type: "ARRAY", optional: !0 },
              ],
              cf: [
                '=SUMIF(A1:A10, ">5")',
                '=SUMIF(B1:B10, "Apple", C1:C10)',
                '=SUMIF(D1:D10, "<=10", E1:E10)',
              ],
            };
          }
        };
        lab.functionName = "SUMIF";
        var mab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            const [b, ...c] = a.value;
            a = [[c[0], c[1]], ...c[2]];
            return M9a(a, b, this.eB.get());
          }
          constructor(...a) {
            super(...a);
            this.args = [TY, TY, UY, DY(new QY(TY, UY), 126)];
            this.metadata = {
              category: 10,
              description: k$a,
              gf: [
                { type: "ARRAY", optional: !1 },
                { type: "ARRAY", optional: !1 },
                { type: "CONDITION", optional: !1 },
                { type: "ARRAY", optional: !0 },
                { type: "CONDITION", optional: !0 },
              ],
              cf: [
                '=SUMIFS(A1:A10, B1:B10, ">5")',
                '=SUMIFS(C1:C10, D1:D10, "Red", E1:E10, "<10")',
                '=SUMIFS(F1:F15, G1:G15, ">=20", H1:H15, "Completed")',
              ],
            };
          }
        };
        mab.functionName = "SUMIFS";
        var nab = class extends ZY {
          execute(a) {
            a = FY(a, this.args);
            if (!a.Ob) return a.value;
            a = [a.value[0], ...a.value[1]];
            const b = [];
            let c;
            const d = (e, f) => {
              const g = b[f] || VX(1);
              switch (e.type) {
                case 4:
                  c = c || e;
                  break;
                case 1:
                  b[f] = YX("*", g, e);
                  break;
                case 2:
                case 3:
                case 0:
                  b[f] = VX(0);
                  break;
                default:
                  throw new E(e);
              }
            };
            U9a(a)
              ? a.forEach((e) => e.value.flat().forEach(d))
              : a.every((e) => 5 !== e.type)
              ? a.forEach((e) => d(e, 0))
              : (c = { type: 4, value: 3 });
            return c ? c : b.reduce((e, f) => YX("+", e, f), VX(0));
          }
          constructor(...a) {
            super(...a);
            this.args = YY;
            this.metadata = {
              category: 10,
              description: M$a,
              gf: [
                { type: "LOOKUP_VALUE", optional: !1 },
                { type: "ARRAYS", optional: !1 },
                { type: "COL_INDEX_NUM", optional: !1 },
                { type: "RANGE_LOOKUP", optional: !0 },
              ],
              cf: ["=SUMPRODUCT(A1:A3, B1:B3)"],
            };
          }
        };
        nab.functionName = "SUMPRODUCT";
        var oab = {
          c5a: $Y,
          f5a: O$a,
          g5a: R$a,
          h5a: S$a,
          j6a: T$a,
          m6a: U$a,
          n6a: V$a,
          o6a: W$a,
          p6a: X$a,
          q6a: Y$a,
          r6a: Z$a,
          Z7a: aab,
          e8a: bab,
          f8a: cab,
          g8a: dab,
          h8a: eab,
          K8a: fab,
          L8a: gab,
          M8a: hab,
          N8a: aZ,
          R8a: iab,
          Y8a: bZ,
          Q9a: jab,
          j$a: cZ,
          k$a: dZ,
          l$a: eZ,
          H$a: kab,
          I$a: lab,
          J$a: mab,
          K$a: nab,
          gab: $$a,
        };
        Object.freeze(
          Object.fromEntries(
            Object.values(oab).map((a) => [a.functionName, a.functionName])
          )
        );
        __c.pab = Object.freeze(
          Object.fromEntries(Object.values(oab).map((a) => [a.functionName, a]))
        );
        __c.l9a = class {
          push(a) {
            this.array[++this.Hf] = a;
          }
          pop() {
            __c.y(!this.isEmpty());
            return this.array[this.Hf--];
          }
          isEmpty() {
            return 0 > this.Hf;
          }
          map(a) {
            return this.array.slice(0, this.Hf + 1).map(a);
          }
          constructor(a) {
            this.Hf = -1;
            this.array = Array(a);
          }
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/644d51e23e20ed21.js.map
