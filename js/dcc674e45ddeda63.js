(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [7724],
  {
    /***/ 602856: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(92348);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var zY = __c.zY;
        var y = __c.y;
        var gY = __c.gY;
        var bY = __c.bY;
        var v = __c.v;
        var RX = __c.RX;
        var E = __c.E;
        var C5 = function (a, b) {
            return a.size
              ? __c.LY(
                  a.value.map((c) => c.map(b)),
                  a.size
                )
              : { type: 4, value: 3 };
          },
          rsb = function (a, b) {
            if (4 === b.type) return b;
            b = __c.TX(b, 1);
            if (4 === b.type) return b;
            switch (a) {
              case "+":
                return b;
              case "-":
                return __c.VX(-b.value);
              case "%":
                return __c.VX(b.value / 100);
              default:
                throw new E(a);
            }
          },
          ssb = function (a, b) {
            const c = (d) => rsb(a, d);
            return 5 === b.type ? C5(b, c) : rsb(a, b);
          },
          tsb = function (a, b, c) {
            if (5 !== b.type && 5 !== c.type) return __c.$X(a, b, c);
            if (5 === b.type && 5 !== c.type)
              return C5(b, (f) => __c.$X(a, f, c));
            if (5 !== b.type && 5 === c.type)
              return C5(c, (f) => __c.$X(a, b, f));
            RX(5 === b.type && 5 === c.type);
            if (!b.size || !c.size) return { type: 4, value: 3 };
            const d = {
                rows: Math.max(b.size.rows, c.size.rows),
                cols: Math.max(b.size.cols, c.size.cols),
              },
              e = Array.from({ length: d.rows }, (f, g) => {
                const h = b.value[1 === b.value.length ? 0 : g],
                  k = c.value[1 === c.value.length ? 0 : g];
                return Array.from({ length: d.cols }, (l, m) =>
                  __c.$X(
                    a,
                    (h && h[1 === h.length ? 0 : m]) || { type: 4, value: 7 },
                    (k && k[1 === k.length ? 0 : m]) || { type: 4, value: 7 }
                  )
                );
              });
            return __c.LY(e, d);
          },
          D5 = function () {
            return (a) => {
              if ((0, __c.b$a)(a))
                return { s: a, value: a, length: 0, children: __c.cY };
            };
          },
          usb = function (a, b) {
            switch (a.type) {
              case 14:
                return b.Nia(a.value);
              case 7:
                return {
                  type: 7,
                  value: a.value.map((c) => c.map((d) => usb(d, b))),
                };
              case 0:
              case 6:
              case 9:
              case 10:
              case 11:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return a;
              default:
                throw new E(a);
            }
          },
          vsb = function (a, b) {
            for (const c of a)
              switch (c.type) {
                case 14:
                  b(c);
                  break;
                case 7:
                  c.value.forEach((d) => vsb(d, b));
                  break;
                case 0:
                case 6:
                case 9:
                case 10:
                case 11:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  b(c);
                  break;
                default:
                  throw new E(c);
              }
          },
          E5 = function (a) {
            return { offset: a.offset, length: a.length, text: a.text };
          },
          wsb = function (a) {
            v("functionCall" === a.name);
            v(!a.error);
            RX(4 === a.children.length);
            const [b, c, d, e] = a.children,
              f = [],
              g = [];
            if (0 !== d.children.length) {
              const [h, k] = d.children;
              f.push(F5(h));
              if (k) {
                const l = k.children.flatMap((n) => n.children),
                  m = l.filter((n, p) => 1 === p % 2).map(F5);
                g.push(...l.filter((n, p) => 0 === p % 2).map(E5));
                f.push(...m);
              }
            }
            return {
              ...E5(a),
              Lbb: { name: E5(b), Ihb: E5(c), Dkb: E5(e), Sab: g },
              name: b.text,
              arguments: f,
            };
          },
          xsb = function (a) {
            v("operand" === a.name);
            if (a.error) return { ...E5(a), error: !0, type: 3 };
            RX(1 === a.children.length);
            const b = a.children[0];
            return 3 === b.children.length &&
              "openParenthesis" === b.children[0].name &&
              "expression" === b.children[1].name &&
              "closeParenthesis" === b.children[2].name
              ? { ...E5(a), type: 0, $C: F5(b.children[1]) }
              : "functionCall" === b.name
              ? { ...E5(a), type: 1, tRa: wsb(b) }
              : "reference" === b.name
              ? { ...E5(a), type: 2 }
              : { ...E5(a), type: 3 };
          },
          G5 = function (a) {
            v("term" === a.name);
            v(!a.error);
            RX(1 <= a.children.length && 3 >= a.children.length);
            const b = [];
            let c;
            const d = [];
            for (const e of a.children)
              if ("operand" === e.name) c = xsb(e);
              else {
                const f = e.children.flatMap((g) => g.children);
                f.every((g) => "prefixOperator" === g.name)
                  ? b.push(...f.map((g) => g.text))
                  : f.every((g) => "postfixOperator" === g.name)
                  ? d.push(...f.map((g) => g.text))
                  : RX(!1);
              }
            RX(null != c);
            return { ...E5(a), wAa: b, fha: c, Qha: d };
          },
          F5 = function (a) {
            v("expression" === a.name);
            v(!a.error);
            v(1 === a.children.length || 2 === a.children.length);
            const [b, c] = a.children,
              d = G5(b),
              e = c
                ? c.children.map(({ children: f }) => {
                    const [g, h] = f;
                    v("infixOperator" === g.name);
                    return [g.text, G5(h)];
                  })
                : [];
            return { ...E5(a), ffa: d, Dv: e, text: a.text };
          },
          zsb = function (a, b) {
            switch (b.type) {
              case 0:
                a.sP(b.$C);
                break;
              case 1:
                ysb(a, b.tRa);
                break;
              case 2:
              case 3:
                break;
              default:
                throw new E(b);
            }
          },
          ysb = function (a, b) {
            b.arguments.forEach((c) => a.sP(c));
          },
          Asb = function (a) {
            return a.toUpperCase().replace(/\$/g, "");
          },
          Bsb = function (a) {
            v(bY(__c.sY, a));
            const [b, c] = (0, __c.sY)(a).value;
            return [b, c].map(Asb);
          },
          H5 = function (a) {
            v(bY(__c.tY, a) || bY(__c.uY, a));
            return Asb(a);
          },
          Csb = function (a) {
            ({ lya: a } = __c.q9a(a));
            const b = __c.hY(
                gY((d, e) => __c.VX(e), __c.oY, a, __c.oY, D5()),
                gY((d) => __c.WX(d), __c.rY, D5()),
                gY((d) => ({ type: 4, value: d.type }), __c.x9a, D5()),
                gY((d) => __c.UX(d), __c.w9a)
              ),
              c = gY((d, e) => [d, e], __c.e$a, b);
            return (d) => {
              let e;
              bY(c, d)
                ? ([e, d] = c(d).value)
                : (RX(bY(b, d)), (e = "="), (d = b(d).value));
              return 3 !== d.type || ("=" !== e && "<>" !== e)
                ? { Tr: e, value: d, valueType: d.type }
                : {
                    Tr: e,
                    valueType: 3,
                    value: d,
                    NN: new RegExp(
                      `^${d.value
                        .replace(/[+^${}()|[\]\\]/g, "\\$&")
                        .replace(/((?!~).|^.{0})\?/g, "$1.")
                        .replace(/((?!~).|^.{0})\*/g, "$1.*")
                        .replace(/~([?*])/g, "\\$1")}$`,
                      "i"
                    ),
                  };
            };
          },
          Dsb = function (a, b, c) {
            y(
              !a.OG.has(b.functionName),
              `Function ${b.functionName} is already registered`
            );
            a.OG.set(b.functionName, new b(c));
          },
          Esb = function (a) {
            const b = (0, __c.KY)(() => Csb(a.fxa.Pd));
            for (const c of Object.values(__c.pab)) Dsb(a, c, b);
          },
          Gsb = function (a, b, c) {
            a = a.toLocaleUpperCase();
            if (!c.OG.has(a)) return { type: 4, value: 5 };
            a = c.getFunction(a);
            b = b.value.map((d) => Fsb(d, c));
            return a.execute(b);
          },
          Fsb = function (a, b) {
            v(0 < a.length);
            const c = new __c.l9a(a.length);
            for (const d of a)
              switch (d.type) {
                case 0:
                case 1:
                case 3:
                case 2:
                case 4:
                case 5:
                case 7:
                  c.push(d);
                  break;
                case 6:
                  a = c.pop();
                  if (7 !== a.type) throw Error();
                  c.push(Gsb(d.value, a, b));
                  break;
                case 11:
                  a = c.pop();
                  const e = c.pop();
                  if (7 === e.type || 7 === a.type) throw Error();
                  if (":" === d.value) throw Error();
                  c.push(tsb(d.value, e, a));
                  break;
                case 9:
                case 10:
                  a = c.pop();
                  if (7 === a.type) throw Error();
                  c.push(ssb(d.value, a));
                  break;
                default:
                  throw new E(d);
              }
            b = c.pop();
            if (!c.isEmpty()) throw Error("missing operators");
            if (7 === b.type) throw Error("missing function call");
            return 5 !== b.type || b.size ? b : { type: 4, value: 3 };
          },
          Isb = function (a) {
            const b = new WeakMap();
            return (c, d) => {
              let e = b.get(c);
              null == e && ((e = new WeakMap()), b.set(c, e));
              let f = e.get(d);
              null == f && ((f = Hsb(() => a(c, d))), e.set(d, f));
              return f;
            };
          },
          I5 = function (a) {
            y(Object.keys({ dependenciesState_: 0 })[0] in a);
            return a.dependenciesState_ === Jsb;
          },
          Ksb = function () {
            const a = [this];
            for (; a.length; ) {
              const b = a.pop();
              b.lowestObserverState_ !== J5 &&
                ((b.lowestObserverState_ = J5),
                b.observers_.forEach((c) => {
                  if (c.dependenciesState_ === Jsb)
                    if (c[K5] === K5) a.push(c);
                    else c.onBecomeStale_();
                  c.dependenciesState_ = J5;
                }));
            }
          },
          Hsb = function (a) {
            a = Lsb(a, { keepAlive: !0, name: void 0 });
            Object.defineProperty(a, K5, {
              enumerable: !1,
              writable: !1,
              value: K5,
            });
            a.onBecomeStale_ = Ksb;
            return a;
          },
          Nsb = function (a) {
            a = new Msb(a);
            Esb(a);
            return a;
          },
          Osb = function (a, b, c) {
            a.na = [];
            a.OYa = b.text;
            a.lR = c.lR;
            a.visit(b);
            return a.na.sort((d, e) => d.offset - e.offset);
          },
          Psb = function ({ offset: a, length: b, text: c }) {
            return { offset: a, length: b, text: c };
          },
          Tsb = function (a, b = Nsb(a)) {
            return new Qsb(
              a,
              b,
              Rsb((c) => __c.d$a(c)),
              Rsb((c) => {
                if ((c = __c.c$a.$C(c))) {
                  var d;
                  (d = c.s.length) ||
                    ((d = new Ssb()), d.visit(c), (d = !!d.f0));
                  c = d
                    ? { result: "syntax-error", suffix: c.s }
                    : { result: "success", tokens: __c.BY(c.value) };
                } else c = { result: "error" };
                return c;
              })
            );
          },
          Xsb = function (a, b, c) {
            c = c.HF.slice(1).trim();
            a = a.zha(c);
            y("success" === a.result);
            const d = {
              jBa: new Map(Usb(a.bR, b).map((e) => [e.MN, e])),
              sheet: b,
            };
            return Vsb(a.bR, (e) => Wsb(e, d));
          },
          Zsb = function (a, b, c) {
            const d = [];
            a = __c.kY(a.parse(b, c));
            vsb(a, (e) => {
              14 === e.type &&
                ((e = Ysb(b, e.value)),
                null != e &&
                  e.forEach((f) =>
                    f.forEach(({ col: g, Ia: h }) => {
                      g = __c.QX(b.cells, g, h);
                      null != g &&
                        (g = g.content) &&
                        "formula" === g.type &&
                        d.push([b, g.value]);
                    })
                  ));
            });
            return d;
          },
          Usb = function (a, b) {
            const c = new Map();
            var d = Osb(new $sb(), a, { lR: !1 });
            for (const k of d) {
              d = a.text.substring(k.offset, k.offset + k.length);
              var e = zY(d);
              switch (e.type) {
                case 0:
                  var f = b.base.Jf.cols.ls(e.kg);
                  e = b.base.Jf.rows.ls(e.Ag);
                  if (null != f && null != e) {
                    const [l, m] = Bsb(d);
                    c.set(l, {
                      type: 2,
                      id: f.id,
                      MN: l,
                      wB: void 0,
                      Se: void 0,
                    });
                    c.set(m, {
                      type: 1,
                      id: e.id,
                      MN: m,
                      wB: void 0,
                      Se: void 0,
                    });
                  }
                  break;
                case 1:
                  var g;
                  f =
                    null === (g = b.base.Jf.cols.ls(e.kg)) || void 0 === g
                      ? void 0
                      : g.id;
                  null != f &&
                    ((d = H5(d)),
                    c.set(d, {
                      type: 2,
                      id: f,
                      MN: d,
                      wB: void 0,
                      Se: void 0,
                    }));
                  break;
                case 2:
                  var h;
                  f =
                    null === (h = b.base.Jf.rows.ls(e.Ag)) || void 0 === h
                      ? void 0
                      : h.id;
                  null != f &&
                    ((d = H5(d)),
                    c.set(d, {
                      type: 1,
                      id: f,
                      MN: d,
                      wB: void 0,
                      Se: void 0,
                    }));
                  break;
                case 3:
                  break;
                default:
                  throw new E(e);
              }
            }
            return [...c.values()].sort((k, l) =>
              k.type === l.type
                ? k.id.localeCompare(l.id)
                : 2 === k.type
                ? -1
                : 1
            );
          },
          Vsb = function (a, b) {
            var c = 0;
            const d = a.text;
            let e = "";
            var f = Osb(new $sb(), a, { lR: !0 });
            for (const g of f) {
              e += d.substring(c, g.offset);
              if (0 === g.type)
                (c = a.text.substring(g.offset, g.offset + g.length)),
                  (e += b(c));
              else if (1 === g.type) {
                const [h, k] = g.text.split(":");
                c = b(h);
                f = b(k);
                c = "#REF!" === c || "#REF!" === f ? "#REF!" : [c, f].join(":");
                e += c;
              } else throw new E(g);
              c = g.offset + g.length;
            }
            return (e += d.substring(c));
          },
          Wsb = function (a, b) {
            const c = zY(a);
            var d = b.jBa;
            b = b.sheet;
            switch (c.type) {
              case 0:
                var e, f;
                const [k, l] = Bsb(a);
                var g = null === (e = d.get(k)) || void 0 === e ? void 0 : e.id;
                d = null === (f = d.get(l)) || void 0 === f ? void 0 : f.id;
                if (null == g || null == d) return "#REF!";
                f = b.laa.get(g);
                d = b.Uia.get(d);
                if (null == f || null == d) return "#REF!";
                f = b.jq(f);
                b = b.Uq(d);
                return [
                  c.EK ? "$" : "",
                  __c.yY(f),
                  c.$N ? "$" : "",
                  String(b + 1),
                ].join("");
              case 1:
                f = null === (g = d.get(H5(a))) || void 0 === g ? void 0 : g.id;
                if (!f) return "#REF!";
                f = b.laa.get(f);
                if (null == f) return "#REF!";
                b = b.jq(f);
                return `${c.EK ? "$" : ""}${__c.yY(b)}`;
              case 2:
                var h;
                f = null === (h = d.get(H5(a))) || void 0 === h ? void 0 : h.id;
                if (!f) return "#REF!";
                f = b.Uia.get(f);
                if (null == f) return "#REF!";
                b = b.Uq(f);
                return `${c.$N ? "$" : ""}${String(b + 1)}`;
              case 3:
                return c.name;
              default:
                throw new E(c);
            }
          },
          Ysb = function (a, b) {
            let c, d, e;
            switch (b.type) {
              case 0:
                c = b.Ag;
                d = b.kg;
                b = e = 1;
                break;
              case 1:
                c = b.Ag;
                d = b.kg;
                e = b.height;
                b = b.width;
                break;
              case 2:
                c = b.Ag;
                d = 0;
                e = b.height;
                b = a.cols.count();
                break;
              case 3:
                c = 0;
                d = b.kg;
                e = a.rows.count();
                b = b.width;
                break;
              default:
                throw new E(b);
            }
            const f = [];
            for (let g = c; g < c + e; g++) {
              const h = a.base.Jf.rows.ls(g);
              if (!h) return;
              const k = [];
              f.push(k);
              for (let l = d; l < d + b; l++) {
                const m = a.base.Jf.cols.ls(l);
                if (!m) return;
                k.push({ Ia: h, col: m });
              }
            }
            return f;
          },
          atb = class {
            sP(a) {
              const b = a.Dv;
              this.yJ(a.ffa);
              b.forEach(([, c]) => this.yJ(c));
            }
            yJ(a) {
              zsb(this, a.fha);
            }
            visit(a) {
              switch (a.name) {
                case "parenExpression":
                  a.children.forEach((b) => this.visit(b));
                  break;
                case "expression":
                  this.sP(F5(a));
                  break;
                case "term":
                  this.yJ(G5(a));
                  break;
                case "operand":
                  zsb(this, xsb(a));
                  break;
                case "functionCall":
                  ysb(this, wsb(a));
                  break;
                case "functionArgs":
                case "reference":
                case "arrayLiteral":
                case "arrayRow":
                  break;
                case "functionName":
                case "errorLiteral":
                case "booleanLiteral":
                case "numberLiteral":
                case "stringLiteral":
                case "infixOperator":
                case "prefixOperator":
                case "postfixOperator":
                case "openParenthesis":
                case "closeParenthesis":
                case "comma":
                case "arrayLeftBrace":
                case "arrayRightBrace":
                case "arrayColumnSeparator":
                case "arrayRowSeparator":
                case void 0:
                  a.children.forEach((b) => this.visit(b));
                  break;
                default:
                  throw new E(a.name);
              }
            }
          },
          btb = class extends atb {},
          ctb = (a) => {
            if (0 === a.Dv.length) return !1;
            if (":" === a.Dv[0][0] && 0 !== a.ffa.Qha.length) return !0;
            for (let b = 1; b < a.Dv.length; b++)
              if (":" === a.Dv[b][0] && 0 !== a.Dv[b - 1][1].Qha.length)
                return !0;
            return !1;
          },
          dtb = (a) => {
            if (0 === a.Dv.length) return !1;
            for (let b = 0; b < a.Dv.length; b++)
              if (":" === a.Dv[b][0] && 0 !== a.Dv[b][1].wAa.length) return !0;
            return !1;
          },
          Ssb = class extends btb {
            sP(a) {
              this.f0 || (this.f0 = this.lQa.some((b) => b(a)));
              this.f0 || super.sP(a);
            }
            constructor() {
              super();
              this.f0 = !1;
              this.lQa = [ctb, dtb];
            }
          },
          etb = class {
            get Pd() {
              var a;
              const b =
                null !== (a = this.kOa.get()) && void 0 !== a ? a : "en";
              var c;
              return null !== (c = __c.f$a[b]) && void 0 !== c ? c : ".";
            }
            constructor(a) {
              this.kOa = a;
            }
          },
          Msb = class {
            static A(a) {
              __c.N(a, { OG: __c.W9a.shallow, uRa: __c.KY, functions: __c.KY });
            }
            getFunction(a) {
              return __c.B(this.OG.get(a));
            }
            get uRa() {
              return [...this.OG.keys()];
            }
            get functions() {
              return [...this.OG.values()];
            }
            constructor(a) {
              Msb.A(this);
              this.fxa = a;
              this.OG = new Map();
            }
          },
          Lsb = __webpack_require__(168949).Fl;
        var Rsb = __webpack_require__(127661).kq;
        var K5 = Symbol("$iterativeComputed"),
          Jsb = 0,
          J5 = 2;
        var ftb = class {
          evaluate(a, b) {
            return this.$2a(a, b).get();
          }
          constructor(a, b) {
            this.cQa = a;
            this.XSa = b;
            this.OLa = { type: 4, value: 4 };
            this.YC = new Set();
            this.$2a = Isb((c, d) => {
              y(0 === this.YC.size);
              const e = [];
              e.push([c, d]);
              const f = new Set();
              for (; e.length; ) {
                const [h, k] = e[e.length - 1];
                if (this.YC.has(k)) {
                  e.pop();
                  this.YC.delete(k);
                  var g = this.AL(h, k);
                  g.get();
                  y(I5(g));
                  f.add(k);
                } else if (f.has(k)) e.pop();
                else if ((this.YC.add(k), (g = this.AL(h, k)), !I5(g))) {
                  g = this.XSa(h, k);
                  for (const l of g) e.push(l);
                }
              }
              return this.AL(c, d).get();
            });
            this.AL = Isb((c, d) => {
              if (this.YC.has(d)) return this.OLa;
              this.YC.add(d);
              c = this.cQa(c, d, { qZa: this.YC, children: this.r_a });
              this.YC.delete(d);
              return c;
            });
            this.r_a = (c, d) => {
              c = this.AL(c, d);
              y(I5(c));
              return c.get();
            };
          }
        };
        var $sb = class extends btb {
            sP(a) {
              const b = new gtb();
              this.kia.push(b);
              this.yJ(a.ffa);
              for (const [c, d] of a.Dv)
                1 === b.state && ":" === c ? b.advance() : b.reset(),
                  this.yJ(d);
              this.kia.pop();
            }
            yJ(a) {
              if (2 !== a.fha.type) super.yJ(a);
              else {
                var b = __c.B(this.OYa),
                  c = __c.B(this.kia.at(-1));
                var d = a.fha;
                if (d.text.includes(":")) {
                  const f = d.text.split(":");
                  var e = {
                    offset: d.offset,
                    length: f[0].length,
                    text: f[0],
                    type: 0,
                    reference: zY(f[0]),
                  };
                  d = {
                    offset: d.offset + f[0].length + 1,
                    length: f[1].length,
                    text: f[1],
                    type: 0,
                    reference: zY(f[1]),
                  };
                  e = [e, d];
                } else
                  e = [
                    { ...Psb(d), text: d.text, type: 0, reference: zY(d.text) },
                  ];
                this.na.push(...e);
                2 === e.length
                  ? (c.reset(), c.advance(), c.advance(), c.advance())
                  : (RX(1 === e.length),
                    (e = c.state),
                    (d = 0 !== a.Qha.length),
                    (a = 0 !== a.wAa.length),
                    (0 === e && !d) || (2 === e && !a)
                      ? c.advance()
                      : c.reset());
                this.lR
                  ? 3 === c.state &&
                    (RX(2 <= this.na.length),
                    (a = this.na.pop()),
                    (e = this.na.pop()),
                    RX(1 !== e.type),
                    RX(1 !== a.type),
                    e.reference.type === a.reference.type
                      ? ((b = b.slice(e.offset, a.offset + a.length)),
                        this.na.push({
                          type: 1,
                          start: e,
                          end: a,
                          offset: e.offset,
                          length: b.length,
                          text: b,
                        }))
                      : (0 === e.reference.type && this.na.push(e),
                        0 === a.reference.type && this.na.push(a)),
                    c.reset())
                  : c.reset();
              }
            }
            constructor() {
              super();
              this.na = [];
              this.lR = !1;
              this.kia = [];
            }
          },
          gtb = class {
            get state() {
              return this.KE;
            }
            advance() {
              y(3 !== this.KE);
              switch (this.KE) {
                case 0:
                  this.KE = 1;
                  break;
                case 1:
                  this.KE = 2;
                  break;
                case 2:
                  this.KE = 3;
                  break;
                default:
                  throw new E(this.KE);
              }
            }
            reset() {
              this.KE = 0;
            }
            constructor() {
              this.KE = 0;
            }
          };
        var Qsb = class {
          cY(a) {
            switch ((void 0).type) {
              case "invalid":
                return;
              case "canonical":
                var b = (void 0).HF.slice(1).trim();
                break;
              default:
                throw new E();
            }
            b = this.zha(b);
            y("success" === b.result);
            const c = {
                jBa: new Map(Usb(b.bR, a).map((e) => [e.MN, e])),
                sheet: a,
              },
              d = Vsb(b.bR, (e) => {
                e = Wsb(e, c);
                if ("#REF!" !== e)
                  a: switch (((e = zY(e)), e.type)) {
                    case 0:
                      var f = e.Ag + (e.$N ? 0 : (void 0).PD);
                      const g = e.kg + (e.EK ? 0 : (void 0).ZT);
                      e =
                        0 > f ||
                        0 > g ||
                        f >= a.rows.count() ||
                        g >= a.cols.count()
                          ? "#REF!"
                          : [
                              e.EK ? "$" : "",
                              __c.yY(g),
                              e.$N ? "$" : "",
                              String(f + 1),
                            ].join("");
                      break a;
                    case 1:
                      f = e.kg + (e.EK ? 0 : (void 0).ZT);
                      e =
                        0 <= f && f < a.cols.count()
                          ? `${e.EK ? "$" : ""}${__c.yY(f)}`
                          : "#REF!";
                      break a;
                    case 2:
                      f = e.Ag + (e.$N ? 0 : (void 0).PD);
                      e =
                        0 <= f && f < a.rows.count()
                          ? `${e.$N ? "$" : ""}${String(f + 1)}`
                          : "#REF!";
                      break a;
                    case 3:
                      e = e.name;
                      break a;
                    default:
                      throw new E(e);
                  }
                return e;
              });
            b = this.zha(d);
            if ("success" !== b.result) throw Error();
            return { type: "canonical", HF: "=" + d };
          }
          evaluate(a, b) {
            return this.YPa.evaluate(a, b);
          }
          AL(a, b, c) {
            b = __c
              .kY(this.parse(a, b))
              .map((d) => usb(d, { Nia: (e) => this.Nia(a, e, c) }));
            b = Fsb(b, this.h0);
            return 5 === b.type ? b.value[0][0] : b;
          }
          parse(a, b) {
            switch (b.type) {
              case "invalid":
                return [{ type: 4, value: 7 }];
              case "canonical":
                break;
              default:
                throw new E(b);
            }
            a = Xsb(this, a, b);
            a = this.rZa(a);
            switch (a.result) {
              case "success":
                return a.tokens;
              case "syntax-error":
                return [{ type: 4, value: 7 }];
              case "error":
                return [{ type: 4, value: 7 }];
              default:
                throw new E(a);
            }
          }
          Nia(a, b, c) {
            b = Ysb(a, b);
            if (null == b) return { type: 4, value: 4 };
            const d = b.map((e) =>
              e.map(({ col: f, Ia: g }) => {
                g = __c.QX(a.cells, f, g);
                if (null == g) return { type: 0, Ea: void 0 };
                f = g.content;
                g = g.Ea;
                if (null == f) return { type: 0, Ea: g };
                switch (f.type) {
                  case "formula":
                    return c.qZa.has(f.value)
                      ? { type: 4, value: 4 }
                      : c.children(a, f.value);
                  case "boolean":
                    return __c.WX(f.value, g);
                  case "number":
                    return __c.VX(f.value, g);
                  case "plaintext":
                    return __c.UX(f.value, g);
                  case "text2":
                    return __c.UX(f.value.ba, g);
                  case "text3":
                    let h = "";
                    f.value.forEach({ ba: (k) => (h += k), item: () => {} });
                    return __c.UX(h, g);
                  default:
                    throw new E(f);
                }
              })
            );
            return __c.LY(d, { rows: b.length, cols: b[0].length });
          }
          constructor(a, b, c, d) {
            this.fxa = a;
            this.h0 = b;
            this.zha = c;
            this.rZa = d;
            this.YPa = new ftb(
              (e, f, g) => this.AL(e, f, g),
              (e, f) => Zsb(this, e, f)
            );
          }
        };
        __c.Hka = {
          yTa: function (a) {
            const b = new etb(Lsb(() => a.document.language)),
              c = Nsb(b);
            return { Xj: Tsb(b, c), h0: c };
          },
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/dcc674e45ddeda63.js.map
