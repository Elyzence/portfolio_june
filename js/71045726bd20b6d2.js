(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [2708],
  {
    /***/ 327781: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(92348);
      __web_req__(708257);
      __web_req__(785265);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var Mc = __c.Mc;
        var qc = __c.qc;
        var Ie = __c.Ie;
        var ys = __c.ys;
        var N = __c.N;
        var v = __c.v;
        var qv = __c.qv;
        var ue = __c.ue;
        var y = __c.y;
        var B = __c.B;
        var E = __c.E;
        var Q = __c.Q;
        var QX = __c.QX;
        var Y5 = function (a, b, c) {
            b = a.Q$(b, c);
            return QX(a, b.span.ed, b.span.od);
          },
          hub = function (a) {
            switch (a) {
              case 4:
                return Q("9ND0kg");
              case 2:
                return Q("ibdecg");
              case 7:
                return Q("446quA");
              case 5:
                return Q("j1fbqg");
              case 1:
                return Q("O5i4AQ");
              case 6:
                return Q("C0VHsg");
              case 3:
                return Q("+IXmVg");
              default:
                throw new E(a);
            }
          },
          iub = function (a) {
            return (b) => ({ type: "react", node: (0, __c.L)(a, { ...b }) });
          },
          Z5 = function (a) {
            a = B(__c.Ocb(a.format));
            return {
              numberFormat: a,
              $K: null != a.decimal ? a.decimal.length : 0,
            };
          },
          jub = function (a) {
            ({ $K: a } = Z5(a));
            return { type: "plain", $K: a };
          },
          kub = function (a) {
            const {
              $K: b,
              numberFormat: { prefix: c },
            } = Z5(a);
            return { type: "currency", symbol: B(c), $K: b };
          },
          lub = function (a) {
            ({ $K: a } = Z5(a));
            return { type: "percentage", $K: a };
          },
          mub = function (a) {
            if (a)
              switch (a.type) {
                case "plain":
                  return jub(a);
                case "currency":
                  return kub(a);
                case "percentage":
                  return lub(a);
                case "date":
                  return { type: "date" };
                default:
                  throw new E(a);
              }
          },
          nub = function (a) {
            if (null != a.Ea)
              switch (a.Ea.type) {
                case "plain_number":
                  return { type: a.Ea.type, ac: jub(a.Ea.ac) };
                case "currency":
                  return { type: a.Ea.type, ac: kub(a.Ea.ac) };
                case "percentage":
                  return { type: a.Ea.type, ac: lub(a.Ea.ac) };
                case "date":
                  return { type: a.Ea.type, ac: { type: "date" } };
                case "select":
                  return {
                    type: a.Ea.type,
                    ac: mub(a.Ea.ac),
                    options: a.Ea.options,
                  };
                default:
                  throw new E(a.Ea);
              }
          },
          oub = function (a, b) {
            if (null == b)
              return (a = a.toString()), { type: "plain", value: a, p_: a };
            switch (b.type) {
              case "plain":
                return (
                  ({ numberFormat: b } = Z5(b)),
                  (a = __c.S_(a, b, $5)),
                  { type: "plain", value: a, p_: a }
                );
              case "percentage":
                return (
                  ({ numberFormat: b } = Z5(b)),
                  (a = __c.S_(100 * a, b, $5)),
                  { type: "percentage", value: a, p_: a }
                );
              case "currency":
                return (
                  ({ numberFormat: b } = Z5(b)),
                  {
                    type: "currency",
                    value: __c.S_(a, b, $5),
                    p_: a.toString(),
                  }
                );
              case "date":
                return (
                  (b = B(__c.Q_(b.format))),
                  (a = new Date(864e5 * a - __c.Bdb)),
                  (b = __c.T_(a, b)),
                  { type: "date", value: b, date: a, p_: b }
                );
              default:
                throw new E(b);
            }
          },
          pub = function (a, b) {
            var c, d;
            a =
              null === (d = a.Aa) || void 0 === d
                ? void 0
                : null === (c = d.Ea) || void 0 === c
                ? void 0
                : c.ac;
            c = oub(b, a);
            "date" === c.type
              ? ((c = {
                  year: c.date.getUTCFullYear(),
                  month: c.date.getUTCMonth() + 1,
                  day: c.date.getUTCDate(),
                }),
                (b = { type: 2, value: b, date: c }))
              : (b = { type: 1, value: b });
            return b;
          },
          a6 = function (a, b, c, d) {
            if (a && "auto" !== a) return a;
            if (!b || "date" === c || "select" === c) return "start";
            switch (b) {
              case "boolean":
                return "center";
              case "number":
                return "end";
              case "formula":
                if (d)
                  a: switch (d()) {
                    case 3:
                      a = "center";
                      break a;
                    case 1:
                      a = "end";
                      break a;
                    default:
                      a = "start";
                  }
                else a = "start";
                return a;
              default:
                return "start";
            }
          },
          qub = function (a, b) {
            b = "rtl" === b;
            return a && "center" !== a
              ? "end" === a
                ? b
                  ? "left"
                  : "right"
                : b
                ? "right"
                : "left"
              : "center";
          },
          rub = function (a) {
            return a && "center" !== a
              ? "end" === a
                ? "flex-end"
                : "flex-start"
              : a;
          },
          tub = function (a) {
            var b,
              c = a.ht,
              d = a.content;
            a = a.context;
            y(
              "formula" ===
                (null === d || void 0 === d
                  ? void 0
                  : null === (b = d.Ji) || void 0 === b
                  ? void 0
                  : b.type)
            );
            b = d.Ji.value;
            switch (b.type) {
              case "invalid":
                b = b.m4;
                break;
              case "canonical":
                b = b.HF;
                break;
              default:
                throw new E(b);
            }
            y(b.startsWith("="));
            const e = d.LR;
            b = { type: "dom", render: (h) => (h.innerText = "") };
            let f;
            switch (e.type) {
              case 5:
                f = b;
                break;
              case 1:
              case 3:
              case 4:
              case 2:
                f = sub(c, a, d.yF);
                break;
              case 0:
                f = {
                  type: "react",
                  node: b6(__c.wU, {
                    label: hub(e.error),
                    children: b6(__c.LO, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: b6(__c.q6a, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(e);
            }
            if (!f) return b;
            c = ue(__c.YS, a.attrs);
            d = a6(a.attrs.textAlign, "formula", void 0, () => e.type);
            const g = {
              textAlign: qub(d, c.direction),
              justifyContent: rub(d),
            };
            switch (f.type) {
              case "dom":
                return {
                  type: "dom",
                  render: (h) => {
                    Object.assign(h.style, g);
                    f.render(h);
                  },
                };
              case "react":
                return {
                  type: "react",
                  node: b6("div", { style: g, children: f.node }),
                };
              default:
                throw new E(f);
            }
          },
          sub = function (a, b, c) {
            var d;
            return null === (d = a.w8) || void 0 === d
              ? void 0
              : d.call(a, { context: b, value: c });
          },
          Aub = function (a, b) {
            const c = uub(a, b),
              d = vub(a, b),
              e = wub(a),
              f = xub(a, b),
              g = yub(a, b),
              h = zub(a, b);
            return function ({ context: k, Gi: l }) {
              var m;
              const n = b.kD(k.sheet, k.Ia, k.col);
              y(null != n);
              const p = null === (m = n.Ji) || void 0 === m ? void 0 : m.type;
              if (null == p || 0 === n.yF.length) return c(k);
              switch (p) {
                case "number":
                  var q;
                  switch (
                    null === (q = n.Ea) || void 0 === q ? void 0 : q.type
                  ) {
                    case "plain_number":
                    case "currency":
                    case "percentage":
                      return d(k);
                    case "date":
                    case "select":
                      return e(k);
                    default:
                      return d(k);
                  }
                case "boolean":
                case "plaintext":
                  var r;
                  switch (
                    null === (r = n.Ea) || void 0 === r ? void 0 : r.type
                  ) {
                    case "select":
                      return e(k);
                    default:
                      return d(k);
                  }
                case "formula":
                  var t;
                  switch (
                    null === (t = n.Ea) || void 0 === t ? void 0 : t.type
                  ) {
                    case "select":
                      return e(k);
                    default:
                      return f(k);
                  }
                case "text2":
                  var u;
                  switch (
                    null === (u = n.Ea) || void 0 === u ? void 0 : u.type
                  ) {
                    case "select":
                      return e(k);
                    default:
                      return g(k, l);
                  }
                case "text3":
                  var w;
                  switch (
                    null === (w = n.Ea) || void 0 === w ? void 0 : w.type
                  ) {
                    case "select":
                      return e(k);
                    default:
                      return h(k, l);
                  }
                default:
                  throw new E(p);
              }
            };
          },
          uub = function (a, b) {
            const c = wub(a);
            return function (d) {
              var e;
              const f = b.kD(d.sheet, d.Ia, d.col);
              y(null != f);
              switch (null === (e = f.Ea) || void 0 === e ? void 0 : e.type) {
                case "plain_number":
                case "currency":
                case "percentage":
                case void 0:
                  break;
                case "date":
                case "select":
                  return c(d);
                default:
                  throw new E(f.Ea);
              }
            };
          },
          vub = function (a, b) {
            return function (c) {
              var d;
              const e = b.kD(c.sheet, c.Ia, c.col);
              y(null != e);
              return null === (d = a.w8) || void 0 === d
                ? void 0
                : d.call(a, { context: c, value: e.yF });
            };
          },
          wub = function (a) {
            return function (b) {
              var c;
              return null === (c = a.kna) || void 0 === c
                ? void 0
                : c.call(a, { context: b });
            };
          },
          xub = function (a, b) {
            return function (c) {
              var d, e;
              const f = b.kD(c.sheet, c.Ia, c.col);
              y(
                "formula" ===
                  (null === f || void 0 === f
                    ? void 0
                    : null === (d = f.Ji) || void 0 === d
                    ? void 0
                    : d.type)
              );
              return null === (e = a.jna) || void 0 === e
                ? void 0
                : e.call(a, { context: c, content: f });
            };
          },
          yub = function (a, b) {
            return function (c, d) {
              var e, f;
              const g = b.kD(c.sheet, c.Ia, c.col);
              y(
                "text2" ===
                  (null === g || void 0 === g
                    ? void 0
                    : null === (e = g.Ji) || void 0 === e
                    ? void 0
                    : e.type)
              );
              return null === (f = a.lna) || void 0 === f
                ? void 0
                : f.call(a, { content: g.Ji, context: c, Gi: d });
            };
          },
          zub = function (a, b) {
            return function (c, d) {
              var e, f;
              const g = b.kD(c.sheet, c.Ia, c.col);
              y(
                "text3" ===
                  (null === g || void 0 === g
                    ? void 0
                    : null === (e = g.Ji) || void 0 === e
                    ? void 0
                    : e.type)
              );
              return null === (f = a.mna) || void 0 === f
                ? void 0
                : f.call(a, { content: g.Ji, context: c, Gi: d });
            };
          },
          Dub = function (a) {
            const b = a.ht;
            a = new Bub(a.Xj);
            b.w8 = Cub;
            b.jna = (c) => tub({ ...c, ht: b });
            b.lna = iub(c6);
            b.mna = iub(d6);
            return { SIa: Aub(b, a), Hy: a };
          },
          Eub = function ({
            label: a,
            width: b,
            height: c,
            scale: d,
            highlight: e,
            selected: f,
          }) {
            return b6("div", {
              style: { width: b, height: c, transform: `scale(${d})` },
              className: "bx74uQ",
              children: b6(__c.yu, {
                className: e6({ yiml1g: e, oYlhXA: f }),
                size: "medium",
                alignment: "center",
                children: a,
              }),
            });
          },
          Gub = function ({
            ld: a,
            highlight: b,
            scale: c,
            tm: d,
            ep: e,
            placement: f,
            PGa: g,
          }) {
            const h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return b6(__c.zu, {
              xn: "light",
              light: "light",
              iq: "light",
              dark: "light",
              children: (m) =>
                b6("div", {
                  className: e6("ze9QCQ", l, m.className, {
                    _rPu0g: "absolute" === f,
                  }),
                  style: {
                    width: k,
                    height: k,
                    transform:
                      "absolute" === f
                        ? `translate(${k * (a ? 1 : -1)}px, ${-k}px)`
                        : void 0,
                  },
                  children: b6("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: e6("N7J3UA", l),
                    ref: d,
                    children: b6(__c.MO, {
                      className: e6("m8CFdg", l, { G6wL4w: g, W_E0wA: b }),
                      ariaLabel: Q("ruWN9A"),
                      children: b6(Fub, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          Jub = function () {
            const a = new Iub(),
              b = new __c.PZ(),
              c = f6((f) => {
                const { scale: g = 1, size: h = "small", PGa: k = !0 } = f,
                  l = g6((n) => a.ep(n, h), [h]),
                  m = h6(() => {
                    const n = f.sheet,
                      p = f.selection;
                    return null != p && a.uUa(n, p.rows, p.columns);
                  }, [f]);
                return b6(Gub, {
                  ...f,
                  scale: g,
                  ld: "rtl" === f.sheet.direction,
                  highlight: m,
                  ep: l,
                  PGa: k,
                });
              }),
              d = f6((f) => {
                const { scale: g = 1, size: h = "small" } = f,
                  k = g6((p) => a.ep(p, h), [h]),
                  l = h6(() => {
                    var p;
                    return new Set(
                      (
                        (null === (p = f.selection) || void 0 === p
                          ? void 0
                          : p.columns) || []
                      ).map((q) => q)
                    );
                  }, [f.selection]),
                  m = g6((p) => l.has(p), [l]),
                  n = a.D0a({ sheet: f.sheet, F0a: l, selection: f.selection });
                return b6(i6, {
                  ...f,
                  scale: g,
                  ep: k,
                  Nva: m,
                  eDa: (p) => n.has(p),
                  eN: b,
                });
              }),
              e = f6((f) => {
                const { scale: g = 1, size: h = "small" } = f,
                  k = g6((p) => a.ep(p, h), [h]),
                  l = h6(() => {
                    var p;
                    return new Set(
                      (
                        (null === (p = f.selection) || void 0 === p
                          ? void 0
                          : p.rows) || []
                      ).map((q) => q)
                    );
                  }, [f.selection]),
                  m = g6((p) => l.has(p), [l]),
                  n = a.E0a({ sheet: f.sheet, I0a: l, selection: f.selection });
                return b6(j6, {
                  ...f,
                  scale: g,
                  ep: k,
                  fDa: (p) => n.has(p),
                  gwa: m,
                  eN: b,
                });
              });
            return { hHa: c, gHa: d, iHa: e };
          },
          Mub = function (a, b, c) {
            const d = Kub();
            Lub(() => {
              const e = d.current;
              (e && c(e, b)) || a();
              d.current = b;
            }, [b, c, a]);
          },
          Oub = function (a) {
            const b = a.Xp,
              c = a.Yc,
              d = f6((e) => b6(Nub, { ...e, Yc: c }));
            return __c.Rs((e) => b6(k6, { ...e, Xp: b, Gi: d }));
          },
          Rub = function ({ onScroll: a }) {
            const b = new Pub(a);
            return {
              tE: b,
              d8: f6((c) =>
                b6(Qub, { sheet: c.sheet, tE: b, children: c.children })
              ),
            };
          },
          Tub = function (a) {
            const b = a.Xp,
              c = a.Yc,
              d = a.XCa,
              e = ({ children: k }) => b6(l6, { children: k }),
              { tE: f, d8: g } = Rub({ onScroll: a.onScroll });
            class h extends Sub {
              get oF() {
                const k = this.props.Rb.hL;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentWillUnmount() {
                d.RLa(this.props.item, {
                  vc: this.props.vc,
                  Rb: this.props.Rb,
                  tg: this.props.tg,
                });
              }
              render() {
                d.h1a(this.props.item, {
                  vc: this.props.vc,
                  Rb: this.props.Rb,
                  tg: this.props.tg,
                });
                return b6(m6, {
                  ...this.props,
                  scaleFactor: this.scaleFactor,
                  Xp: b,
                  Yc: c,
                  oF: this.oF,
                  XCa: d,
                });
              }
              constructor(...k) {
                super(...k);
                this.scaleFactor = n6(() => {
                  const l = this.props.item;
                  var m = this.props.Rb,
                    n = m.hL;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return 1;
                    case "print":
                      n = d.gSa(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.Pv(l, n.vc, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
              }
            }
            return { VIa: h, tE: f };
          },
          Vub = function (a) {
            const b = a.Xp,
              c = a.Yc,
              d = f6((e) => b6(Nub, { ...e, Yc: c }));
            return (e) => b6(Uub, { ...e, Xp: b, Gi: d });
          },
          Zub = function (a, b, c, d, e) {
            if (0 === c.length || 0 === d.length) return [];
            const f = Wub(a, b, c, d, e);
            e = Xub(a, b, c, d, e);
            const g = Yub(a, b, c, d),
              h = a.dSa(b),
              k = a.ERa(b),
              l = "rtl" === b.direction;
            a = f
              .map((m) => {
                var n,
                  p,
                  q = m.Q1a,
                  r = m.bca,
                  t = m.SBa;
                const u = m.color,
                  w = m.weight;
                m = m.Eb;
                const x = l ? -1 : 1,
                  z =
                    null === (n = g.get(o6(q, t))) || void 0 === n
                      ? void 0
                      : n.Ha;
                n =
                  null === (p = g.get(o6(r, t))) || void 0 === p
                    ? void 0
                    : p.qa;
                if (null != z && null != n) {
                  p = B(h.get(t.Ia));
                  var A = B(k.get(q.column));
                  q = B(k.get(r.column));
                  t = "start" === t.boundary ? p.start : p.end;
                  p = A.start;
                  r = "start" === r.boundary ? q.start : q.end;
                  return {
                    color: u,
                    weight: w,
                    Eb: m,
                    p1: new __c.Gq(p + z * x, t),
                    p2: new __c.Gq(r + n * x, t),
                    ...__c.sv((r - p) * x, m * w, z),
                  };
                }
              })
              .filter(__c.rc);
            return [
              ...e
                .map((m) => {
                  var n,
                    p,
                    q = m.gqa,
                    r = m.W1a,
                    t = m.dca;
                  const u = m.color,
                    w = m.weight;
                  m = m.Eb;
                  const x =
                    null === (n = g.get(o6(q, r))) || void 0 === n
                      ? void 0
                      : n.Da;
                  n =
                    null === (p = g.get(o6(q, t))) || void 0 === p
                      ? void 0
                      : p.ua;
                  if (null != x && null != n) {
                    p = B(k.get(q.column));
                    var z = B(h.get(r.Ia));
                    r = B(h.get(t.Ia));
                    q = "start" === q.boundary ? p.start : p.end;
                    p = z.start;
                    t = "start" === t.boundary ? r.start : r.end;
                    return {
                      color: u,
                      weight: w,
                      Eb: m,
                      p1: new __c.Gq(q, p + x),
                      p2: new __c.Gq(q, t + n),
                      ...__c.sv(t - p, m * w, x),
                    };
                  }
                })
                .filter(__c.rc),
              ...a,
            ];
          },
          $ub = function (a) {
            const b = [];
            a = a.filter((c) => 0 !== c.weight && null != c.color);
            a = __c.ud(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.ud(d, (e) => `${e.ai}_${e.bi}`);
              for (const [, e] of a) {
                const { bi: f, ai: g } = e[0];
                a = __c.ud(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, ai: g, bi: f });
              }
            }
            return b;
          },
          bvb = function (a, b, c, d) {
            var e = avb;
            b = b.flatMap((f) =>
              a.rows.last() === f
                ? [
                    { Ia: f, boundary: "start" },
                    { Ia: f, boundary: "end" },
                  ]
                : [{ Ia: f, boundary: "start" }]
            );
            c = c.flatMap((f) =>
              a.cols.last() === f
                ? [
                    { column: f, boundary: "start" },
                    { column: f, boundary: "end" },
                  ]
                : [{ column: f, boundary: "start" }]
            );
            d = Zub(e, a, b, c, e.mMa(d));
            return $ub(d);
          },
          Wub = function (a, b, c, d, e) {
            const f = [];
            for (const l of c)
              for (const m of d) {
                c = l.Ia;
                var g = m.column,
                  h = Y5(b.cells, g, c);
                if (!h || h.span.od === c)
                  if (
                    ((c = p6(a.QI, b, g, c, e)),
                    (c =
                      "start" === l.boundary
                        ? null === c || void 0 === c
                          ? void 0
                          : c.ua
                        : null === c || void 0 === c
                        ? void 0
                        : c.Da))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.cols.next(g))
                      ? { column: g, boundary: "start" }
                      : { column: B(b.cols.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.bca),
                        (k =
                          k.column === m.column && k.boundary === m.boundary);
                    k &&
                      ((k = h.SBa),
                      (k = k.Ia === l.Ia && k.boundary === l.boundary));
                    k &&
                    h.color === c.color &&
                    h.weight === c.weight &&
                    h.Eb === c.Eb &&
                    0 === h.Eb
                      ? (h.bca = g)
                      : f.push({
                          SBa: l,
                          Q1a: m,
                          bca: g,
                          color: c.color,
                          weight: c.weight,
                          Eb: c.Eb,
                        });
                  }
              }
            return f;
          },
          Xub = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.Ia;
                d = l.column;
                var h = Y5(b.cells, d, g);
                if (!h || h.span.ed === d)
                  if (
                    ((d = p6(a.QI, b, d, g, e)),
                    (d =
                      "start" === l.boundary
                        ? null === d || void 0 === d
                          ? void 0
                          : d.qa
                        : null === d || void 0 === d
                        ? void 0
                        : d.Ha))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.rows.next(g))
                      ? { Ia: g, boundary: "start" }
                      : { Ia: B(b.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.gqa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.dca),
                      (k = k.Ia === m.Ia && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.Eb === d.Eb &&
                    0 === h.Eb
                      ? (h.dca = g)
                      : f.push({
                          gqa: l,
                          W1a: m,
                          dca: g,
                          color: d.color,
                          weight: d.weight,
                          Eb: d.Eb,
                        });
                  }
              }
            return f;
          },
          Yub = function (a, b, c, d) {
            const e = (p, q) => {
                var r = a.QI.WMa(b);
                const t = r.get(p) || 0;
                r = r.get(q) || 0;
                return t <= r ? p : q;
              },
              f = new Map();
            if (0 === c.length || 0 === d.length) return f;
            var g = [],
              h = b.cols.qc(d[0].column);
            h && g.push({ column: h, boundary: "start" });
            g.push(...d);
            (d = b.cols.next(d[d.length - 1].column)) &&
              g.push({ column: d, boundary: "start" });
            d = [];
            (h = b.rows.qc(c[0].Ia)) && d.push({ Ia: h, boundary: "start" });
            d.push(...c);
            (c = b.rows.next(c[c.length - 1].Ia)) &&
              d.push({ Ia: c, boundary: "start" });
            for (const p of g) {
              c = (g = "start" === p.boundary ? p.column : void 0)
                ? b.cols.qc(g)
                : b.cols.last();
              for (const q of d) {
                var k = "start" === q.boundary ? q.Ia : void 0;
                h = k ? b.rows.qc(k) : b.rows.last();
                var l = p6(a.QI, b, g, k),
                  m = p6(a.QI, b, g, h);
                k = p6(a.QI, b, c, k);
                var n = p6(a.QI, b, c, h);
                h =
                  "end" === p.boundary
                    ? null === k || void 0 === k
                      ? void 0
                      : k.Ha
                    : null === l || void 0 === l
                    ? void 0
                    : l.qa;
                l =
                  "end" === q.boundary
                    ? null === m || void 0 === m
                      ? void 0
                      : m.Da
                    : null === l || void 0 === l
                    ? void 0
                    : l.ua;
                m =
                  "end" === p.boundary
                    ? null === n || void 0 === n
                      ? void 0
                      : n.Ha
                    : null === m || void 0 === m
                    ? void 0
                    : m.qa;
                k =
                  "end" === q.boundary
                    ? null === n || void 0 === n
                      ? void 0
                      : n.Da
                    : null === k || void 0 === k
                    ? void 0
                    : k.ua;
                n = __c.pv({ ua: m, Da: h, qa: k, Ha: l }, e);
                let r;
                switch (n) {
                  case "blockStart":
                    r = m;
                    break;
                  case "blockEnd":
                    r = h;
                    break;
                  case "inlineStart":
                    r = k;
                    break;
                  case "inlineEnd":
                    r = l;
                    break;
                  default:
                    r = void 0;
                }
                const { height: t, width: u } =
                  1 === (null === r || void 0 === r ? void 0 : r.Eb)
                    ? { height: r.weight, width: r.weight }
                    : {
                        height: Math.max(
                          (null === k || void 0 === k ? void 0 : k.weight) || 0,
                          (null === l || void 0 === l ? void 0 : l.weight) || 0
                        ),
                        width: Math.max(
                          (null === m || void 0 === m ? void 0 : m.weight) || 0,
                          (null === h || void 0 === h ? void 0 : h.weight) || 0
                        ),
                      };
                f.set(o6(p, q), __c.mv(n, t / 2, u / 2));
              }
            }
            return f;
          },
          p6 = function (a, b, c, d, e) {
            if (c && d) return a.$_a(b, e).get(`${c.id}:${d.id}`);
          },
          cvb = function (a, b, c) {
            var d,
              e = b ? a.attrs.get(b.span.ed, b.span.od) : void 0;
            if (b && e) {
              b =
                (null === c || void 0 === c
                  ? void 0
                  : null === (d = c.get(`${b.span.ed.id}:${b.span.od.id}`)) ||
                    void 0 === d
                  ? void 0
                  : d.Da) || !1;
              d = { color: a.Ch.color, weight: a.Ch.weight, Eb: qv(a.Ch.kd) };
              c = q6(e.e$);
              var f = r6(e.o$);
              e = s6(e.i$);
              return null == c && null == f && null == e
                ? a.hp
                  ? void 0
                  : { borderStyle: d, lA: !0, hidden: b }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : d.color,
                      weight: null !== f && void 0 !== f ? f : d.weight,
                      Eb: e ? qv(e) : d.Eb,
                    },
                    lA: !1,
                    hidden: b,
                  };
            }
          },
          dvb = function (a, b, c) {
            var d,
              e = b ? a.attrs.get(b.span.ed, b.span.od) : void 0;
            if (b && e) {
              b =
                (null === c || void 0 === c
                  ? void 0
                  : null === (d = c.get(`${b.span.ed.id}:${b.span.od.id}`)) ||
                    void 0 === d
                  ? void 0
                  : d.ua) || !1;
              d = { color: a.Ch.color, weight: a.Ch.weight, Eb: qv(a.Ch.kd) };
              c = q6(e.f$);
              var f = r6(e.p$);
              e = s6(e.j$);
              return null == c && null == f && null == e
                ? a.hp
                  ? void 0
                  : { borderStyle: d, lA: !0, hidden: b }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : d.color,
                      weight: null !== f && void 0 !== f ? f : d.weight,
                      Eb: e ? qv(e) : d.Eb,
                    },
                    lA: !1,
                    hidden: b,
                  };
            }
          },
          t6 = function (a, b, c, d) {
            if (!a.hidden && !c.hidden) {
              var e = a.lA ? (c.lA ? void 0 : c) : a;
              return __c.ov(
                a.borderStyle,
                c.borderStyle,
                b,
                d,
                null === e || void 0 === e ? void 0 : e.borderStyle
              );
            }
          },
          evb = function (a, b, c) {
            var d,
              e = b ? a.attrs.get(b.span.ed, b.span.od) : void 0;
            if (b && e) {
              b =
                (null === c || void 0 === c
                  ? void 0
                  : null === (d = c.get(`${b.span.ed.id}:${b.span.od.id}`)) ||
                    void 0 === d
                  ? void 0
                  : d.Ha) || !1;
              d = { color: a.Ch.color, weight: a.Ch.weight, Eb: qv(a.Ch.kd) };
              c = q6(e.g$);
              var f = r6(e.q$);
              e = s6(e.k$);
              return null == c && null == f && null == e
                ? a.hp
                  ? void 0
                  : { borderStyle: d, lA: !0, hidden: b }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : d.color,
                      weight: null !== f && void 0 !== f ? f : d.weight,
                      Eb: e ? qv(e) : d.Eb,
                    },
                    lA: !1,
                    hidden: b,
                  };
            }
          },
          fvb = function (a, b, c) {
            var d,
              e = b ? a.attrs.get(b.span.ed, b.span.od) : void 0;
            if (b && e) {
              b =
                (null === c || void 0 === c
                  ? void 0
                  : null === (d = c.get(`${b.span.ed.id}:${b.span.od.id}`)) ||
                    void 0 === d
                  ? void 0
                  : d.qa) || !1;
              d = { color: a.Ch.color, weight: a.Ch.weight, Eb: qv(a.Ch.kd) };
              c = q6(e.h$);
              var f = r6(e.r$);
              e = s6(e.l$);
              return null == c && null == f && null == e
                ? a.hp
                  ? void 0
                  : { borderStyle: d, lA: !0, hidden: b }
                : {
                    borderStyle: {
                      color: null !== c && void 0 !== c ? c : d.color,
                      weight: null !== f && void 0 !== f ? f : d.weight,
                      Eb: e ? qv(e) : d.Eb,
                    },
                    lA: !1,
                    hidden: b,
                  };
            }
          },
          gvb = function (a, b, c) {
            var d = b.column,
              e = b.Ia;
            if ((b = Y5(a.cells, d, e))) {
              var f = d === b.span.ed,
                g = d === b.span.ji,
                h = e === b.span.od,
                k = e === b.span.ki;
              if (f || g || h || k) {
                var l = a.rows.qc(e),
                  m = l ? Y5(a.cells, d, l) : void 0,
                  n = (l = a.rows.next(e)) ? Y5(a.cells, d, l) : void 0,
                  p = (l = a.cols.qc(d)) ? Y5(a.cells, l, e) : void 0;
                l = (l = a.cols.next(d)) ? Y5(a.cells, l, e) : void 0;
                var q = a.rows.first(),
                  r = e === q;
                q = a.rows.last();
                q = e === q;
                e = a.cols.first();
                e = d === e;
                var t = a.cols.last();
                d = d === t;
                var u = cvb(a, m, c);
                t = dvb(a, b, c);
                var w;
                h = h
                  ? !r && u && t
                    ? t6(
                        u,
                        [
                          ...(null !==
                            (w =
                              null === m || void 0 === m
                                ? void 0
                                : m.span.columns) && void 0 !== w
                            ? w
                            : []),
                        ].map((D) => a.jq(D)),
                        t,
                        [...b.span.columns].map((D) => a.jq(D))
                      )
                    : null === t || void 0 === t
                    ? void 0
                    : t.borderStyle
                  : void 0;
                w = cvb(a, b, c);
                m = dvb(a, n, c);
                var x;
                k = k
                  ? !q && w && m
                    ? t6(
                        w,
                        [...b.span.columns].map((D) => a.jq(D)),
                        m,
                        [
                          ...(null !==
                            (x =
                              null === n || void 0 === n
                                ? void 0
                                : n.span.columns) && void 0 !== x
                            ? x
                            : []),
                        ].map((D) => a.jq(D))
                      )
                    : null === w || void 0 === w
                    ? void 0
                    : w.borderStyle
                  : void 0;
                w = evb(a, p, c);
                x = fvb(a, b, c);
                var z;
                f = f
                  ? !e && w && x
                    ? t6(
                        w,
                        [
                          ...(null !==
                            (z =
                              null === p || void 0 === p
                                ? void 0
                                : p.span.rows) && void 0 !== z
                            ? z
                            : []),
                        ].map((D) => a.Uq(D)),
                        x,
                        [...b.span.rows].map((D) => a.Uq(D))
                      )
                    : null === x || void 0 === x
                    ? void 0
                    : x.borderStyle
                  : void 0;
                z = evb(a, b, c);
                c = fvb(a, l, c);
                var A;
                c = g
                  ? !d && z && c
                    ? t6(
                        z,
                        [...b.span.rows].map((D) => a.Uq(D)),
                        c,
                        [
                          ...(null !==
                            (A =
                              null === l || void 0 === l
                                ? void 0
                                : l.span.rows) && void 0 !== A
                            ? A
                            : []),
                        ].map((D) => a.Uq(D))
                      )
                    : null === z || void 0 === z
                    ? void 0
                    : z.borderStyle
                  : void 0;
                return { ua: h, Da: k, qa: f, Ha: c };
              }
            }
          },
          q6 = function (a) {
            return null == a || "inherit" === a ? void 0 : a;
          },
          r6 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : Number(a.split("px")[0]);
          },
          s6 = function (a) {
            return null == a || "inherit" === a
              ? void 0
              : a
                  .split(" ")
                  .map((b) => {
                    b = Number(b);
                    return 0 < b ? b : void 0;
                  })
                  .filter(__c.rc);
          },
          hvb = function (a, b, c) {
            const d = a.width,
              e = a.height;
            var f = __c.nr(
              __c.fr({ top: a.ua, left: a.qa, width: d, height: e }).scale(b)
            );
            a = Math.floor(f.left);
            f = f.left - a;
            return {
              transform:
                1e-10 < Math.abs(f)
                  ? `translateX(${("ltr" === c ? 1 : -1) * f}px) scale(${b})`
                  : `scale(${b})`,
              insetInlineStart: a,
              width: d,
              height: e,
            };
          },
          jvb = function (a) {
            return 1 < a.span.columns.size || 1 < a.span.rows.size
              ? !1
              : ivb(a);
          },
          ivb = function (a) {
            if (!a.content) return !0;
            switch (a.content.type) {
              case "plaintext":
                return "" === a.content.value;
              case "number":
              case "boolean":
                return !1;
              case "text2":
                return a.content.value.isEmpty;
              case "text3":
                return a.content.value.isEmpty;
              case "formula":
                return !1;
              default:
                throw new E(a.content);
            }
          },
          kvb = function (a, b) {
            const c = {};
            c[b("BlockStart")] = `${a.ua}${"px"}`;
            c[b("InlineStart")] = `${a.qa}${"px"}`;
            c[b("BlockEnd")] = `${a.Da}${"px"}`;
            c[b("InlineEnd")] = `${a.Ha}${"px"}`;
            return c;
          },
          lvb = function (a, b, c, d, e, f) {
            var g;
            let h = "none";
            "strikethrough" === a.Lp && "underline" === a.Kf
              ? (h = "underline line-through")
              : "strikethrough" === a.Lp
              ? (h = "line-through")
              : "underline" === a.Kf && (h = "underline");
            b = a6(b, c, d);
            c = rub(b);
            f = f ? f.hV(a.fontFamily) : void 0;
            var k;
            return {
              Aa: {
                fontWeight:
                  null ===
                    (g = __c.Ez(
                      null !==
                        (k =
                          null === e || void 0 === e ? void 0 : e.fontWeight) &&
                        void 0 !== k
                        ? k
                        : a.fontWeight
                    )) || void 0 === g
                    ? void 0
                    : g.toString(),
                fontStyle: a.fontStyle,
                color: a.color,
                textDecoration: h,
                fontFamily: f,
                fontSize: `${a.fontSize}px`,
                textAlign: qub(b, a.direction),
                letterSpacing: `${a.letterSpacing}em`,
                lineHeight: `${a.lineHeight}`,
              },
              $Y: {
                justifyContent: c,
                direction: a.direction,
                overflow: null === e || void 0 === e ? void 0 : e.overflow,
              },
            };
          },
          mvb = function (a, b, c) {
            return a < c && c < b;
          },
          ovb = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { Dpa: b, IF: b, Aa: {}, $Y: {} },
              d = u6(
                () => ({ style: a.gEa.style || c, dT: a.dT }),
                ({ style: f, dT: g }) => {
                  Object.assign(a.O$.style, f.Dpa);
                  Object.assign(a.ZY.style, f.IF);
                  Object.assign(a.AQ.style, f.Aa);
                  Object.assign(a.UF.style, f.$Y);
                  a.AQ.style.display = g ? "none" : "unset";
                },
                { fireImmediately: !0, equals: v6.structural }
              ),
              e = u6(
                () => (a.dT ? void 0 : a.renderer),
                (f) => {
                  a.FZ &&
                  "react" !== (null === f || void 0 === f ? void 0 : f.type)
                    ? ((a.FZ = void 0), a.KU.remove())
                    : (a.UF.innerHTML = "");
                  switch (null === f || void 0 === f ? void 0 : f.type) {
                    case "react":
                      a.FZ = nvb(f.node, a.KU);
                      a.UF.appendChild(a.KU);
                      break;
                    case "dom":
                      f.render(a.UF);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(f);
                  }
                  a.S2();
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
            };
          },
          pvb = function (a) {
            const b = a.r1a,
              c = a.HV,
              d = a.jF;
            return (e) => b6(w6, { ...e, jF: d, jt: b.fRa(e.sheet), HV: c });
          };
        __c.iR.prototype.Xh = __c.fa(3, function (a, b) {
          const c = this.predicate;
          v(c(a));
          v(c(b));
          return this.base.Xh(a, b);
        });
        __c.jR.prototype.Xh = __c.fa(2, function (a, b) {
          return this.values.Xh(a, b);
        });
        __c.kR.prototype.Xh = __c.fa(1, function (a, b) {
          a = this.SS.get(a);
          b = this.SS.get(b);
          v(null != a);
          v(null != b);
          return a < b ? -1 : a > b ? 1 : 0;
        });
        __c.lR.prototype.Xh = __c.fa(0, function (a, b) {
          return this.list.Xh(a, b);
        });
        var qvb = class {
            equals(a) {
              return (
                this.type === a.type &&
                this.sheet === a.sheet &&
                this.container.equals(a.container)
              );
            }
            constructor(a, b) {
              this.container = a;
              this.sheet = b;
              this.type = "sheet-item";
            }
          },
          rvb = class {
            get sheet() {
              return this.container.sheet;
            }
            get items() {
              return this.text.items;
            }
            equals(a) {
              return (
                this.type === a.type &&
                this.Ia === a.Ia &&
                this.column === a.column &&
                this.container.equals(a.container)
              );
            }
            constructor(a, b, c) {
              N(this, { items: __c.R });
              var d;
              this.container = a;
              this.column = b;
              this.Ia = c;
              this.type = "sheet-item-cell";
              a = B(Y5(a.sheet.config.cells, b, c));
              v(
                "text3" ===
                  (null === (d = a.content) || void 0 === d ? void 0 : d.type)
              );
              this.text = a.content.value;
            }
          },
          $5 = { df: ",", Pd: "." },
          svb = class {},
          x6 = __webpack_require__(785893),
          b6 = x6.jsx,
          l6 = x6.Fragment,
          y6 = x6.jsxs;
        var f6 = __webpack_require__(433581).Pi;
        var tvb = __webpack_require__(127661),
          uvb = tvb.kq,
          z6 = tvb.Om;
        var A6 = __webpack_require__(168949),
          n6 = A6.Fl,
          v6 = A6.p6,
          B6 = A6.LO,
          C6 = A6.aD,
          D6 = A6.EH,
          u6 = A6.U5;
        var E6 = __webpack_require__(667294),
          g6 = E6.useCallback,
          h6 = E6.useMemo,
          F6 = E6.Component,
          Sub = E6.PureComponent,
          vvb = E6.useState,
          wvb = E6.createRef,
          Kub = E6.useRef,
          Lub = E6.useLayoutEffect;
        var G6 = __webpack_require__(197582).gn;
        var xvb = __webpack_require__,
          yvb = xvb(693967),
          e6 = xvb.n_x(yvb)();
        var zvb = __webpack_require__(699601).Z;
        var nvb = __webpack_require__(973935).createPortal;
        var Avb = f6((a) => {
            var b,
              c,
              d = "rtl" === a.sheet.direction;
            d = { H2wykw: !d, UweldA: d };
            const [e] = vvb(() => ys()),
              f = {
                get: g6(() => {
                  var g;
                  const h =
                    null === e || void 0 === e
                      ? void 0
                      : null === (g = e.current) || void 0 === g
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      null !==
                        (k = null === h || void 0 === h ? void 0 : h.width) &&
                      void 0 !== k
                        ? k
                        : 0,
                    height:
                      null !==
                        (l = null === h || void 0 === h ? void 0 : h.height) &&
                      void 0 !== l
                        ? l
                        : 0,
                  };
                  return __c.fr(g);
                }, [e]),
              };
            return y6("div", {
              className: e6("nMvVqA", d),
              children: [
                y6("div", {
                  ref: zvb(a.Kd, e),
                  className: "_0YOFPg",
                  children: [
                    b6(a.Xp, { ...a, viewport: f }),
                    b6("div", {
                      className: e6("Gdl7fQ", d),
                      children:
                        null === (c = a.Qma) || void 0 === c
                          ? void 0
                          : null === (b = c.get()) || void 0 === b
                          ? void 0
                          : b.map((g, h) => b6(g, {}, h)),
                    }),
                  ],
                }),
                "visible" === a.xgb &&
                  y6(l6, {
                    children: [
                      b6("div", {
                        className: e6("_32sKQw", d),
                        children: b6(a.TIa, { ...a }),
                      }),
                      b6("div", {
                        className: e6("xdIsTQ", d),
                        children: b6(a.WIa, { ...a }),
                      }),
                      b6("div", {
                        className: e6("rsTRSA", d),
                        children: b6(a.UIa, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          Bvb = f6((a) => {
            a = a.content;
            v("text2" === a.type || "text3" === a.type);
            switch (a.type) {
              case "text2":
                return b6(l6, { children: a.value.ba });
              case "text3":
                return b6(l6, { children: __c.fp.va(a.value).cells.ba() });
              default:
                throw new E(a);
            }
          });
        var Cvb = Object.freeze({ type: 5, value: void 0 }),
          Dvb = class {
            static A(a) {
              N(a, { LR: n6, yF: n6, Ea: n6 });
            }
            get Ji() {
              return this.Aa.content;
            }
            get LR() {
              var a;
              switch (
                null === (a = this.Ji) || void 0 === a ? void 0 : a.type
              ) {
                case void 0:
                  return Cvb;
                case "number":
                  return pub(this, this.Ji.value);
                case "boolean":
                  return { type: 3, value: this.Ji.value };
                case "plaintext":
                  return { type: 4, value: this.Ji.value };
                case "text2":
                  return { type: 4, value: this.Ji.value.ba };
                case "text3":
                  const b = [];
                  this.Ji.value.forEach({
                    ba: (c) => b.push(c),
                    item: () => {
                      throw Error();
                    },
                  });
                  return { type: 4, value: b.join("") };
                case "formula":
                  switch (
                    ((a = this.Xj.evaluate(this.sheet, this.Ji.value)), a.type)
                  ) {
                    case 0:
                      return Cvb;
                    case 1:
                      return pub(this, a.value);
                    case 2:
                      return { type: 3, value: a.value };
                    case 3:
                      return { type: 4, value: a.value };
                    case 4:
                      return { type: 0, error: a.value };
                    case 5:
                      throw Error();
                    default:
                      throw new E(a);
                  }
                default:
                  throw new E(this.Ji);
              }
            }
            get XPa() {
              var a;
              switch (
                null === (a = this.Ji) || void 0 === a ? void 0 : a.type
              ) {
                case void 0:
                case "number":
                case "boolean":
                case "plaintext":
                case "text2":
                case "text3":
                  var b;
                  return null === (b = this.Aa) || void 0 === b ? void 0 : b.Ea;
                case "formula":
                  switch (
                    ((a = this.Xj.evaluate(this.sheet, this.Ji.value)), a.type)
                  ) {
                    case 0:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      var c;
                      return null === (c = this.Aa) || void 0 === c
                        ? void 0
                        : c.Ea;
                    case 1:
                      var d, e;
                      return null !==
                        (e =
                          null === (d = this.Aa) || void 0 === d
                            ? void 0
                            : d.Ea) && void 0 !== e
                        ? e
                        : a.Ea;
                    default:
                      throw new E(a);
                  }
                default:
                  throw new E(this.Ji);
              }
            }
            get yF() {
              const a = this.LR,
                b = this.XPa;
              switch (a.type) {
                case 1:
                case 2:
                  return oub(
                    a.value,
                    null === b || void 0 === b ? void 0 : b.ac
                  ).value;
                case 3:
                  return a.value ? "TRUE" : "FALSE";
                case 4:
                  return a.value;
                case 5:
                  return "";
                case 0:
                  return __c.Y9a[a.error];
                default:
                  throw new E(a);
              }
            }
            get Ea() {
              return nub(this.Aa);
            }
            constructor(a, b, c, d) {
              Dvb.A(this);
              this.Xj = a;
              this.Ita = b;
              this.sheet = c;
              this.Aa = d;
            }
          },
          Bub = class {
            forEach(a, b, c) {
              if (
                a.rows.has(b.od) &&
                a.rows.has(b.ki) &&
                a.cols.has(b.ed) &&
                a.cols.has(b.ji) &&
                !(0 < a.rows.Xh(b.od, b.ki) || 0 < a.cols.Xh(b.ed, b.ji))
              ) {
                var d = b.ki && a.rows.next(b.ki),
                  e = b.ji && a.cols.next(b.ji);
                for (let g = b.od; null != g && g !== d; g = a.rows.next(g))
                  for (let h = b.ed; null != h && h !== e; h = a.cols.next(h)) {
                    var f = Y5(a.cells, h, g);
                    f &&
                      f.span.od === g &&
                      f.span.ed === h &&
                      (f = this.kD(a, g, h)) &&
                      c(f, g, h);
                  }
              }
            }
            constructor(a) {
              var b = new svb();
              this.Xj = a;
              this.Ita = b;
              this.kD = z6(
                (c, d, e) =>
                  (d = Y5(c.cells, e, d)) && new Dvb(this.Xj, this.Ita, c, d)
              );
            }
          };
        var Cub = (function (a) {
          return (b) => ({ type: "dom", render: (c) => a(b, c) });
        })((a, b) => {
          const c = a.value;
          ({ Zh: a } = ue(Ie, a.context.attrs));
          const d = document.createElement("div");
          "wrap" === a &&
            ((d.className = "dt4Dlg"), (d.style.overflowWrap = "break-word"));
          d.innerText = c;
          b.appendChild(d);
        });
        var c6 = class a extends F6 {
          static A(b) {
            N(b, { Zh: n6 });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
          }
          get Zh() {
            return ue(Ie, this.props.context.attrs).Zh;
          }
          render() {
            var b = this.props.content;
            const c = this.props.context;
            if (b.value.isEmpty) return null;
            b = b6(this.props.Gi, {
              content: b,
              Ia: c.Ia,
              col: c.col,
              Zh: this.Zh,
            });
            return "wrap" === this.Zh
              ? b6("div", { className: "dt4Dlg", children: b })
              : b6(l6, { children: b });
          }
        };
        c6 = G6([qc], c6);
        var d6 = class a extends F6 {
          static A(b) {
            N(b, { Zh: n6 });
          }
          get Zh() {
            return ue(Ie, this.props.context.attrs).Zh;
          }
          render() {
            var b = this.props.content;
            const c = this.props.context;
            if (b.value.isEmpty) return null;
            b = b6(
              this.props.Gi,
              { content: b, Ia: c.Ia, col: c.col, Zh: this.Zh },
              this.key++
            );
            return "wrap" === this.Zh
              ? b6("div", { className: "dt4Dlg", children: b })
              : b6(l6, { children: b });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.key = 0;
          }
        };
        d6 = G6([qc], d6);
        var Evb = 4 * __c.nu,
          Fvb = 3 * __c.nu;
        var Iub = class {
          ep(a, b) {
            return "large" === b ? Evb * a : Fvb * a;
          }
          constructor() {
            this.D0a = ({ sheet: a, F0a: b, selection: c }) => {
              if (null === c || void 0 === c || !c.cells || 0 === c.cells.size)
                return new Set();
              const d = new Set();
              for (const e of c.cells)
                if ((c = Y5(a.cells, e.column, e.Ia)))
                  for (const f of c.span.columns)
                    (0 === b.size || b.has(f)) && d.add(f);
              return d;
            };
            this.E0a = ({ sheet: a, I0a: b, selection: c }) => {
              if (null === c || void 0 === c || !c.cells || 0 === c.cells.size)
                return new Set();
              const d = new Set();
              for (const e of c.cells)
                if ((c = Y5(a.cells, e.column, e.Ia)))
                  for (const f of c.span.rows)
                    (0 === b.size || b.has(f)) && d.add(f);
              return d;
            };
            this.uUa = (a, b, c) =>
              a.layout.rows.count() ===
                ((null === b || void 0 === b ? void 0 : b.size) || 0) &&
              a.layout.cols.count() ===
                ((null === c || void 0 === c ? void 0 : c.size) || 0);
          }
        };
        var i6 = class a extends F6 {
          static A(b) {
            N(b, { ld: n6 });
          }
          get ld() {
            return "rtl" === this.props.sheet.direction;
          }
          render() {
            const {
                sheet: b,
                eDa: c,
                Nva: d,
                ep: e,
                placement: f,
                scale: g = 1,
                tm: h,
              } = this.props,
              k = e(g),
              l = "absolute" === f ? { transform: `translateY(${-k}px)` } : {},
              m = { jNbTIg: !this.ld, gtA7Dw: this.ld };
            return b6(__c.zu, {
              xn: "light",
              light: "light",
              iq: "light",
              dark: "light",
              children: (n) => {
                let p = 0;
                return b6("div", {
                  className: e6("Vt2_4w", m, n.className, {
                    iXSdpQ: "absolute" === f,
                  }),
                  style: l,
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  ref: h,
                  children: b.cols.map((q) =>
                    b6(
                      Gvb,
                      {
                        ...this.props,
                        col: q,
                        label: __c.sZ(p++),
                        highlight: c(q),
                        selected: d(q),
                      },
                      q.id
                    )
                  ),
                });
              },
            });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.onMouseMove = C6((c) => {
              const { onMouseMove: d, sheet: e, scale: f = 1 } = this.props;
              null === d || void 0 === d ? void 0 : d(c, e, "column", f);
            });
            this.onMouseLeave = C6((c) => {
              var d, e;
              null === (d = (e = this.props).onMouseLeave) || void 0 === d
                ? void 0
                : d.call(e, c);
            });
          }
        };
        i6 = G6([qc], i6);
        var j6 = class a extends F6 {
          static A(b) {
            N(b, { ld: n6 });
          }
          get ld() {
            return "rtl" === this.props.sheet.direction;
          }
          render() {
            const {
                sheet: b,
                fDa: c,
                gwa: d,
                ep: e,
                placement: f,
                scale: g = 1,
                tm: h,
              } = this.props,
              k = e(g),
              l =
                "absolute" === f
                  ? { transform: `translateX(${k * (this.ld ? 1 : -1)}px)` }
                  : {},
              m = { jNbTIg: !this.ld, gtA7Dw: this.ld };
            return b6(__c.zu, {
              xn: "light",
              light: "light",
              iq: "light",
              dark: "light",
              children: (n) => {
                let p = 0;
                return b6("div", {
                  className: e6("_93roJg", m, n.className, {
                    KUsGaw: "absolute" === f,
                  }),
                  style: l,
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  ref: h,
                  children: b.rows.map((q, r) => {
                    var t = { ...this.props };
                    var u = `${p++ + 1}`;
                    return b6(
                      Hvb,
                      {
                        ...t,
                        Ia: q,
                        label: u,
                        highlight: c(q),
                        selected: d(q),
                      },
                      r
                    );
                  }),
                });
              },
            });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.onMouseMove = C6((c) => {
              const { onMouseMove: d, sheet: e, scale: f = 1 } = this.props;
              null === d || void 0 === d ? void 0 : d(c, e, "row", f);
            });
            this.onMouseLeave = C6((c) => {
              var d, e;
              null === (d = (e = this.props).onMouseLeave) || void 0 === d
                ? void 0
                : d.call(e, c);
            });
          }
        };
        j6 = G6([qc], j6);
        var Gvb = f6((a) => {
            const {
              label: b,
              col: c,
              highlight: d,
              selected: e,
              ep: f,
              scale: g = 1,
            } = a;
            a = f(g);
            return b6("div", {
              className: e6("_83Rssw", "d2uLIA", { YbLr8g: d, sTqdww: e }),
              style: { width: c.width * g, height: a },
              children: b6(Eub, {
                label: b,
                width: c.width,
                height: f(1),
                scale: g,
                highlight: d,
                selected: e,
              }),
            });
          }),
          Hvb = f6((a) => {
            const {
              label: b,
              Ia: c,
              highlight: d,
              selected: e,
              ep: f,
              scale: g = 1,
            } = a;
            a = f(g);
            return b6("div", {
              className: e6("_83Rssw", "JhBzyw", { YbLr8g: d, sTqdww: e }),
              style: { width: a, height: c.height * g },
              children: b6(Eub, {
                label: b,
                width: f(1),
                height: c.height,
                scale: g,
                highlight: d,
                selected: e,
              }),
            });
          });
        var Ivb =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var Jvb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var Fub = __c.pU({ Ml: Ivb, medium: Jvb });
        var Nub = f6((a) => {
          const b = a.Yc,
            c = a.content,
            d = a.Zh;
          a = a.vya;
          v("text2" === c.type);
          Mub(a, __c.Zi.va(c.value), (e, f) => __c.Zi.domain.Ub(e, f));
          a = h6(() => {
            if ("wrap" === d) return [];
            const e = c.value.ba.split("\n").map((f) => f.length + 1);
            e.pop();
            return e;
          }, [c, d]);
          return b6(b, {
            text: c.value,
            bh: a,
            Fa: void 0,
            animation: void 0,
            writingMode: 1,
            wd: "start",
            Tc: void 0,
            Tn: !0,
            Ao: !1,
          });
        });
        var k6 = class a extends F6 {
          static A(b) {
            N(b, { Jc: n6.struct });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
          }
          render() {
            return b6(this.props.Xp, {
              sheet: this.props.element.config,
              tm: this.props.tm,
              YL: this.props.YL,
              scaleFactor: this.props.scaleFactor,
              Jc: this.Jc,
              Gi: this.props.Gi,
            });
          }
          get Jc() {
            const b = this.props.zd,
              c = this.props.element.altText;
            return c
              ? c.Cd && !b
                ? { "aria-hidden": !0 }
                : { "aria-label": c.text }
              : {};
          }
        };
        k6 = G6([qc], k6);
        var Kvb = class {
          hV(a) {
            if (null != this.Za) {
              var b = __c.mt(a);
              b && __c.qt(this.Za, [b], { Cs: !0 });
            }
            b = ["auto"];
            this.Ed && b.unshift(this.Ed);
            return [__c.nt(a), ...b.map((c) => `"${c}"`)].join();
          }
          constructor(a, b) {
            this.Za = a;
            this.Ed = b;
          }
        };
        var Mvb = class {
            constructor() {
              this.fRa = uvb((a) => new Lvb(a));
            }
          },
          Lvb = class {
            static A(a) {
              N(a, { height: n6, width: n6 });
            }
            get height() {
              const a = this.sheet.rows.last();
              return null == a ? 0 : this.sheet.ua(a) + a.height;
            }
            get width() {
              const a = this.sheet.cols.last();
              return null == a ? 0 : this.sheet.qa(a) + a.width;
            }
            constructor(a) {
              Lvb.A(this);
              this.sheet = a;
              this.St = uvb(
                (b) => {
                  var c = b.span.ed,
                    d = b.span.ji,
                    e = b.span.ki;
                  b = this.sheet.ua(b.span.od);
                  e = this.sheet.ua(e) + e.height;
                  c = this.sheet.qa(c);
                  d = this.sheet.qa(d) + d.width;
                  return { ua: b, qa: c, width: d - c, height: e - b };
                },
                { equals: v6.shallow }
              );
            }
          };
        var Nvb = class {
          constructor() {
            this.l5 = new WeakMap();
            this.gSa = (a) => this.l5.get(a);
            this.h1a = (a, b) => {
              this.l5.set(a, b);
            };
            this.RLa = (a, b) => {
              const c = this.l5.get(a);
              c &&
                c.Rb === b.Rb &&
                c.vc === b.vc &&
                c.tg === b.tg &&
                this.l5.delete(a);
            };
          }
        };
        var Pvb = f6((a) => {
            const b = a.Rb,
              c = a.item,
              d = a.tg,
              e = a.vc,
              f = a.Yc,
              g = a.col,
              h = a.Ia;
            var k = a.content;
            const l = a.Zh;
            a = a.vya;
            v("text3" === k.type);
            Mub(a, __c.fp.va(k.value), (n, p) => __c.fp.domain.Ub(n, p));
            [k] = vvb(
              () =>
                new Ovb(
                  c,
                  e,
                  n6(() => b.zoom)
                )
            );
            const m = h6(() => new qvb(d, c), [d, c]);
            a = h6(() => new rvb(m, g, h), [m, g, h]);
            return b6(f, {
              Rb: b,
              $i: a,
              text: a.text,
              vc: k,
              bh: "wrap" === l ? "pre-wrap" : "nowrap",
            });
          }),
          Ovb = class extends __c.ST {
            static A(a) {
              N(a, { width: B6.ref, gX: n6 });
            }
            get pC() {
              return this.k5.pC;
            }
            get gX() {
              const a = (this.Lea.width - this.k5.width) / 2;
              return { left: -a, right: this.k5.width + a };
            }
            constructor(a, b, c) {
              super();
              Ovb.A(this);
              this.sheet = a;
              this.k5 = b;
              this.zoom = c;
              this.width = 0;
              this.marginWidth = void 0;
              this.Lea = new __c.Pv(this.sheet, this.k5, {
                zoom: this.zoom.get(),
              });
            }
          };
        var Qub = f6(({ sheet: a, children: b, tE: c }) => {
            const d = g6(
                (f) => {
                  c.Aja(a, f);
                },
                [c, a]
              ),
              e = g6(
                (f) => {
                  null != f ? c.vE.set(a, f) : c.vE.delete(a);
                },
                [c, a]
              );
            return b6(__c.r2a, {
              direction: "rtl" === a.config.direction ? "rtl" : "ltr",
              onScroll: d,
              Ys: e,
              children: b,
            });
          }),
          Pub = class {
            Aja(a, b) {
              this.onScroll && this.onScroll(a);
              this.rV.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.vE = new WeakMap();
              this.rV = B6.map(new Map(), { deep: !1 });
              this.scrollTo = C6((b, c) => {
                b = this.vE.get(b);
                null === b || void 0 === b
                  ? void 0
                  : b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var m6 = class a extends F6 {
          static A(b) {
            N(b, { Jc: n6.struct });
          }
          render() {
            const b = this.props.item;
            return b6("div", {
              ref: this.props.measureRef,
              className: "E8r86A",
              style: { width: Math.min(this.props.vc.width, b.G) },
              children: b6(this.props.oF, {
                sheet: b,
                children: b6("div", {
                  ref: this.props.uTa,
                  className: "cXTiJA",
                  style: { width: b.G, height: b.P },
                  children: b6(this.props.Xp, {
                    sheet: b.config,
                    tm: this.props.tm,
                    scaleFactor: this.props.scaleFactor,
                    YL: this.props.YL,
                    Jc: this.Jc,
                    Gi: this.Gi,
                  }),
                }),
              }),
            });
          }
          get Jc() {
            const b = this.props.zd,
              c = this.props.item.altText;
            return c
              ? c.Cd && !b
                ? { "aria-hidden": !0 }
                : { "aria-label": c.text }
              : {};
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.Gi = f6((c) =>
              b6("div", {
                className: "wKvivQ",
                children: b6(Pvb, { ...this.props, ...c, Yc: this.props.Yc }),
              })
            );
          }
        };
        m6 = G6([qc], m6);
        var Qvb = new __c.PZ(),
          H6 = (a) => Evb * a,
          I6 = () => !1,
          Uub = f6(
            ({
              page: a,
              tm: b,
              YL: c,
              scaleFactor: d,
              viewport: e,
              C1a: f,
              Xp: g,
              Gi: h,
            }) => {
              const k = "rtl" === a.sheet.direction;
              var l;
              const m =
                null !== (l = null === d || void 0 === d ? void 0 : d.get()) &&
                void 0 !== l
                  ? l
                  : 1;
              b = b6(g, {
                sheet: a.sheet,
                tm: b,
                YL: c,
                scaleFactor: d,
                viewport: e,
                Gi: h,
              });
              a = y6("div", {
                className: "OsKKIQ",
                children: [
                  b6("div", { className: "VDFv_A", children: b }),
                  b6("div", {
                    className: "_688KWg",
                    children: b6(Gub, {
                      ld: k,
                      highlight: !1,
                      ep: H6,
                      scale: m,
                    }),
                  }),
                  b6("div", {
                    className: "m0cT1w",
                    children: b6(i6, {
                      sheet: a.sheet,
                      scale: m,
                      ep: H6,
                      Nva: I6,
                      eDa: I6,
                      eN: Qvb,
                    }),
                  }),
                  b6("div", {
                    className: "zm537g",
                    children: b6(j6, {
                      sheet: a.sheet,
                      scale: m,
                      ep: H6,
                      gwa: I6,
                      fDa: I6,
                      eN: Qvb,
                    }),
                  }),
                ],
              });
              return f ? a : b;
            }
          );
        var o6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.Ia.id}-${b.boundary}`,
          Svb = class {
            constructor() {
              this.QI = Rvb;
              this.mMa = z6((a) => {
                const b = new Map();
                for (const { column: c, Ia: d, edge: e } of a) {
                  switch (e) {
                    case "blockStart":
                      a = { ua: !0 };
                      break;
                    case "blockEnd":
                      a = { Da: !0 };
                      break;
                    case "inlineStart":
                      a = { qa: !0 };
                      break;
                    case "inlineEnd":
                      a = { Ha: !0 };
                      break;
                    default:
                      throw new E(e);
                  }
                  const f = `${c.id}:${d.id}`;
                  b.set(f, { ...b.get(f), ...a });
                }
                return b;
              });
              this.dSa = z6((a) => {
                const b = new Map();
                let c = 0;
                a.rows.forEach((d) => {
                  const e = c,
                    f = e + d.height;
                  b.set(d, { start: e, end: f });
                  c = f;
                });
                return b;
              });
              this.ERa = z6((a) => {
                const b = new Map();
                var c = "rtl" === a.direction;
                const d = c ? -1 : 1;
                let e = 0;
                c &&
                  ((c = a.cols.last()),
                  (e = null != c ? a.qa(c) + c.width : 0));
                a.cols.forEach((f) => {
                  const g = e,
                    h = g + f.width * d;
                  b.set(f, { start: g, end: h });
                  e = h;
                });
                return b;
              });
            }
          },
          Tvb = class {
            constructor() {
              this.$_a = z6(
                (a, b) => {
                  const c = new Map();
                  for (const d of a.rows)
                    for (const e of a.cols) {
                      const f = `${e.id}:${d.id}`,
                        g = gvb(a, { column: e, Ia: d }, b);
                      g && c.set(f, g);
                    }
                  return c;
                },
                { equals: v6.identity }
              );
              this.WMa = z6(
                (a) => {
                  const b = new Map();
                  for (const d of a.cols)
                    for (const e of a.rows) {
                      var c = p6(this, a, d, e);
                      if (!c) continue;
                      const f = c.qa,
                        g = c.Ha,
                        h = c.ua;
                      c = c.Da;
                      f && b.set(f.color, (b.get(f.color) || 0) + 1);
                      h && b.set(h.color, (b.get(h.color) || 0) + 1);
                      g &&
                        d === a.cols.last() &&
                        b.set(g.color, (b.get(g.color) || 0) + 1);
                      c &&
                        e === a.rows.last() &&
                        b.set(c.color, (b.get(c.color) || 0) + 1);
                    }
                  return b;
                },
                { equals: v6.identity }
              );
            }
          },
          Rvb = new Tvb(),
          avb = new Svb();
        var Uvb = parseInt("12px", 10),
          Vvb = class {
            static A(a) {
              N(a, {
                Ia: B6.ref,
                Aa: n6,
                style: n6,
                attrs: n6({ equals: v6.shallow }),
                zqa: n6({ equals: v6.shallow }),
                Hpa: n6({ equals: v6.shallow }),
                Fpa: n6({ equals: v6.shallow }),
                vaa: n6({ equals: v6.shallow }),
                padding: n6({ equals: v6.shallow }),
                yO: n6,
                lka: n6,
              });
            }
            get Aa() {
              if (this.sheet.rows.has(this.Ia) && this.sheet.cols.has(this.col))
                return QX(this.sheet.cells, this.col, this.Ia);
            }
            get style() {
              var a, b, c, d, e, f, g, h;
              const k = this.attrs;
              var l = this.zqa,
                m = this.Hpa;
              const n = this.Fpa,
                p = this.padding;
              if (k && l && m && n && p) {
                var q = {};
                __c.ne(__c.YS, k, "all", (t, u) => {
                  q[u] = t;
                });
                var r =
                  "text2" ===
                    (null === (b = this.Aa) || void 0 === b
                      ? void 0
                      : null === (a = b.content) || void 0 === a
                      ? void 0
                      : a.type) ||
                  "text3" ===
                    (null === (d = this.Aa) || void 0 === d
                      ? void 0
                      : null === (c = d.content) || void 0 === c
                      ? void 0
                      : c.type);
                a = lvb(
                  ue(__c.YS, r ? {} : q),
                  k.textAlign,
                  null === (f = this.Aa) || void 0 === f
                    ? void 0
                    : null === (e = f.content) || void 0 === e
                    ? void 0
                    : e.type,
                  null === (h = this.Aa) || void 0 === h
                    ? void 0
                    : null === (g = h.Ea) || void 0 === g
                    ? void 0
                    : g.type,
                  this.yO,
                  this.HV
                );
                e = {
                  insetInlineStart: `${n.insetInlineStart}px`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                  transform: n.transform,
                  backgroundColor: k.N$,
                };
                l = {
                  insetInlineStart: `${l.insetInlineStart}px`,
                  width: `${l.width}px`,
                  height: `${l.height}px`,
                  transform: l.transform,
                };
                m = {
                  ...kvb(p, (t) => `padding${t}`),
                  ...a.Aa,
                  insetInlineStart: `${m.insetInlineStart}px`,
                  width: `${m.width}px`,
                  overflow: "overflow" === k.Zh ? "visible" : "hidden",
                };
                return {
                  Dpa: e,
                  IF: l,
                  Aa: m,
                  $Y: {
                    whiteSpace: "wrap" === k.Zh ? "normal" : "pre",
                    ...a.$Y,
                  },
                };
              }
            }
            get attrs() {
              const a = this.Aa;
              if (a) return ue(Ie, this.sheet.attrs.get(a.span.ed, a.span.od));
            }
            get zqa() {
              const a = this.sheet;
              var b = this.Aa;
              if (b)
                return (
                  (b = { ...this.jt.St(b), ...this.vaa }),
                  hvb(b, this.Ena.get(), a.direction)
                );
            }
            get Hpa() {
              const a = this.Aa,
                b = this.vaa;
              if (a && b) {
                var { qa: c, width: d } = this.jt.St(a);
                return { insetInlineStart: c - b.qa, width: d };
              }
            }
            get Fpa() {
              const a = this.sheet,
                b = this.Aa;
              if (b) return hvb(this.jt.St(b), this.Ena.get(), a.direction);
            }
            get vaa() {
              var a = this.attrs,
                b = this.jt;
              const c = this.Aa;
              if (a && c) {
                if (
                  ivb(c) ||
                  1 < c.span.columns.size ||
                  1 < c.span.rows.size ||
                  "overflow" !== a.Zh
                ) {
                  const { qa: d, width: e } = b.St(c);
                  return { qa: d, width: e };
                }
                a = this.lka.next;
                b = (b = this.lka.qc) ? this.sheet.qa(b) + b.width : 0;
                a = a ? this.sheet.qa(a) : this.sheet.width;
                return { qa: b, width: a - b };
              }
            }
            get padding() {
              var a = this.Aa,
                b = this.yO;
              if (this.attrs && a) {
                var { width: c, height: d } = this.jt.St(a),
                  e = [Uvb];
                v(0 < e.length && 4 >= e.length);
                var f, g, h, k;
                a = {
                  ua: e[0],
                  qa: null !== (f = e[1]) && void 0 !== f ? f : e[0],
                  Da: null !== (g = e[2]) && void 0 !== g ? g : e[0],
                  Ha:
                    null !==
                      (k = null !== (h = e[3]) && void 0 !== h ? h : e[1]) &&
                    void 0 !== k
                      ? k
                      : e[0],
                };
                if (null === b || void 0 === b ? 0 : b.paddingInlineEnd)
                  a.Ha +=
                    null === b || void 0 === b ? void 0 : b.paddingInlineEnd;
                a.qa + a.Ha > c &&
                  ((b = c / (a.qa + a.Ha)), (a.qa *= b), (a.Ha *= b));
                a.ua + a.Da > d &&
                  ((b = d / (a.ua + a.Da)), (a.ua *= b), (a.Da *= b));
                return a;
              }
            }
            get yO() {
              var a, b;
              return null === (b = this.DLa) || void 0 === b
                ? void 0
                : null === (a = b.get()) || void 0 === a
                ? void 0
                : a.get(`${this.col.id}:${this.Ia.id}`);
            }
            get lka() {
              const a = (b) => {
                b = QX(this.sheet.cells, b, this.Ia);
                return b === this.Aa ? !0 : b && jvb(b);
              };
              return {
                next: this.sheet.cols.next(this.col, (b) => !a(b)),
                qc: this.sheet.cols.qc(this.col, (b) => !a(b)),
              };
            }
            constructor(a, b, c, d, e, f, g) {
              Vvb.A(this);
              this.HV = a;
              this.sheet = b;
              this.jt = c;
              this.col = d;
              this.Ena = f;
              this.DLa = g;
              this.Ia = e;
            }
          };
        var Wvb = class {
          constructor() {
            this.CLa = Uvb;
            this.ORa = z6(
              (a, b, c, d) => {
                const e = [];
                d = this.WRa(a, b, c, d);
                b = (k, l) => (k = QX(a.cells, l, k)) && jvb(k);
                for (const { Ia: k, column: l, textAlign: m, FMa: n } of d) {
                  var f = n.width + ("center" === m ? 0 : this.CLa),
                    g = void 0;
                  switch (m) {
                    case "start":
                    case "justify":
                      d = a.qa(l);
                      g = d + f;
                      break;
                    case "center":
                      g = a.qa(l) + l.width / 2;
                      d = g - f / 2;
                      g += f / 2;
                      break;
                    case "end":
                      g = a.qa(l) + l.width;
                      d = g - f;
                      break;
                    default:
                      throw new E(m);
                  }
                  for (f = c.indexOf(l) - 1; 0 <= f; f--) {
                    var h = c[f];
                    if ((h !== l && !b(k, h)) || !mvb(d, g, a.qa(h) + h.width))
                      break;
                    e.push({ Ia: k, column: h, edge: "inlineEnd" });
                  }
                  for (f = c.indexOf(l) + 1; f < c.length; f++) {
                    h = c[f];
                    if ((h !== l && !b(k, h)) || !mvb(d, g, a.qa(h))) break;
                    e.push({ Ia: k, column: h, edge: "inlineStart" });
                  }
                }
                return e;
              },
              { equals: v6.structural }
            );
            this.WRa = z6(
              (a, b, c, d) => {
                const e = [];
                for (const g of c)
                  for (const h of b) {
                    var f;
                    c = QX(a.cells, g, h);
                    if (!c || !c.content) continue;
                    const { Zh: k, textAlign: l } = ue(Ie, a.attrs.get(g, h));
                    c = a6(
                      l,
                      c.content.type,
                      null === (f = c.Ea) || void 0 === f ? void 0 : f.type
                    );
                    const m = d(h, g);
                    "overflow" === k &&
                      m &&
                      c &&
                      e.push({ Ia: h, column: g, textAlign: c, FMa: m });
                  }
                return e;
              },
              { equals: v6.structural }
            );
          }
        };
        var J6 = class a extends F6 {
          static A(b) {
            N(b, {
              Uja: n6({ equals: v6.shallow }),
              Vja: n6({ equals: v6.shallow }),
              Jva: n6({ equals: v6.structural }),
            });
          }
          componentDidMount() {
            const b = B(this.ref.current);
            Mc(
              this,
              D6(() => {
                var c = this.props.scaleFactor;
                const d = this.props.jt;
                var e;
                c =
                  null !==
                    (e = null === c || void 0 === c ? void 0 : c.get()) &&
                  void 0 !== e
                    ? e
                    : 1;
                e = d.height;
                b.style.width = `${d.width * c}px`;
                b.style.height = `${e * c}px`;
              })
            );
          }
          get Uja() {
            const b = this.props.sheet;
            return [...this.props.r4a].sort((c, d) => b.cols.Xh(c, d));
          }
          get Vja() {
            const b = this.props.sheet;
            return [...this.props.ew].sort((c, d) => b.rows.Xh(c, d));
          }
          get Jva() {
            return Xvb.ORa(this.props.sheet, this.Vja, this.Uja, this.props.lS);
          }
          render() {
            var b = this.props.sheet,
              c = this.props.jt;
            const d = bvb(b, this.Vja, this.Uja, this.Jva),
              e = c.width;
            c = c.height;
            b = "rtl" === b.direction;
            return b6("svg", {
              ref: this.ref,
              role: "presentation",
              className: e6("c6a1eQ", { H_CtIQ: !b, _8_56PQ: b }),
              viewBox: `0 0 ${e} ${c}`,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              children: d.map(
                ({ lines: f, color: g, weight: h, ai: k, bi: l }) =>
                  b6(
                    "path",
                    {
                      stroke: g,
                      strokeDasharray: k,
                      strokeDashoffset: l,
                      strokeWidth: h,
                      d: f
                        .map(
                          ({ p1: m, p2: n }) =>
                            `M ${m.x} ${m.y} L ${n.x} ${n.y}`
                        )
                        .join(" "),
                    },
                    `${g}-${h}-${k}-${l}`
                  )
              ),
            });
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.ref = wvb();
          }
        };
        J6 = G6([qc], J6);
        var Xvb = new Wvb();
        var L6 = class a extends F6 {
          static A(b) {
            N(b, { L_: n6, LFa: n6 });
          }
          render() {
            var b;
            const c = this.props.mRa;
            return y6("div", {
              ref: this.$Ca,
              className: e6(
                "ZTz_iA",
                "ltr" === this.props.sheet.direction ? "TA4X7w" : "WvuqMw"
              ),
              children: [
                (null === c || void 0 === c ? void 0 : c.Poa) &&
                  b6(K6, {
                    ...this.props,
                    range: c.Poa.range,
                    hD: c.Poa.hD,
                    className: "_0C8M3w",
                    bZ: this.L_,
                  }),
                (null === c || void 0 === c ? void 0 : c.xGa) &&
                  b6(K6, {
                    ...this.props,
                    range: c.xGa.range,
                    hD: c.xGa.hD,
                    className: "_7n44yg",
                    bZ: this.L_,
                  }),
                (null === c || void 0 === c ? void 0 : c.Rua) &&
                  b6(K6, {
                    ...this.props,
                    range: c.Rua.range,
                    hD: c.Rua.hD,
                    className: "fF5r6w",
                    bZ: this.L_,
                  }),
                b6(K6, {
                  ...this.props,
                  range:
                    null === c || void 0 === c
                      ? void 0
                      : null === (b = c.I3a) || void 0 === b
                      ? void 0
                      : b.range,
                  hD: void 0,
                  className: "llILYw",
                  bZ: this.LFa,
                }),
              ],
            });
          }
          componentDidMount() {
            const b = D6(() => {
              var c = this.props,
                d = c.scaleFactor;
              c = c.geometry;
              const e = this.$Ca.current;
              e &&
                ((d = d ? d.get() : 1),
                (e.style.width = `${c.width * d}px`),
                (e.style.height = `${c.height * d}px`));
            });
            Mc(this, [b]);
          }
          get L_() {
            return { type: "excluded" };
          }
          get LFa() {
            return { type: "hidden", rK: this.pLa };
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.$Ca = ys();
            this.pLa = (c, d) => {
              var e;
              const f = this.props.sheet;
              var g = this.props.mRa;
              g =
                null === g || void 0 === g
                  ? void 0
                  : null === (e = g.I3a) || void 0 === e
                  ? void 0
                  : e.range;
              return null == g
                ? !0
                : 0 <= f.cols.Xh(c, g.ed) &&
                    0 >= f.cols.Xh(c, g.ji) &&
                    0 <= f.rows.Xh(d, g.od) &&
                    0 >= f.rows.Xh(d, g.ki);
            };
          }
        };
        L6 = G6([qc], L6);
        var K6 = class a extends F6 {
          static A(b) {
            N(b, { YCa: n6 });
          }
          get YCa() {
            const b = this.props.viewport,
              c = this.props.hD;
            return null == b || null == c
              ? b
              : n6(() => {
                  const d = __c.nr(b.get());
                  return __c.fr({
                    top: null != c.y ? c.y : d.top,
                    left: null != c.x ? c.x : d.left,
                    width: d.width,
                    height: d.height,
                  });
                });
          }
          render() {
            const b = this.props.hD,
              c = this.props.range,
              d = this.props.className,
              e = this.props.bZ,
              f = "rtl" === this.props.sheet.direction;
            let g = {};
            null != (null === b || void 0 === b ? void 0 : b.x) &&
            null != (null === b || void 0 === b ? void 0 : b.y)
              ? (g = f ? { top: b.y, right: b.x } : { top: b.y, left: b.x })
              : null != (null === b || void 0 === b ? void 0 : b.y)
              ? (g = { top: b.y })
              : null != (null === b || void 0 === b ? void 0 : b.x) &&
                (g = f ? { right: b.x } : { left: b.x });
            return b6("div", {
              ref: this.Tza,
              style: g,
              className: e6("i0YQww", d, {
                _1b6u2A:
                  null != (null === b || void 0 === b ? void 0 : b.x) ||
                  null != (null === b || void 0 === b ? void 0 : b.y),
              }),
              children: b6("div", {
                ref: this.Uza,
                children: b6(M6, {
                  ...this.props,
                  viewport: this.YCa,
                  bounds:
                    "hidden" === (null === e || void 0 === e ? void 0 : e.type)
                      ? void 0
                      : c,
                  rK:
                    "hidden" === (null === e || void 0 === e ? void 0 : e.type)
                      ? e.rK
                      : void 0,
                }),
              }),
            });
          }
          componentDidMount() {
            const b = D6(() => {
              var c = this.props,
                d = c.scaleFactor,
                e = c.sheet;
              const f = c.range;
              var g = c.geometry,
                h = this.Tza.current;
              c = this.Uza.current;
              d = d ? d.get() : 1;
              if (h) {
                const k = f ? e.qa(f.ji) + f.ji.width - e.qa(f.ed) : g.width;
                g = f ? e.ua(f.ki) + f.ki.height - e.ua(f.od) : g.height;
                h.style.width = `${k * d}px`;
                h.style.height = `${g * d}px`;
              }
              c &&
                ((h = "rtl" === e.direction),
                (h = f ? e.qa(f.ed) * d * (h ? 1 : -1) : 0),
                (e = f ? -e.ua(f.od) * d : 0),
                (c.style.transform = `translate(${h}px, ${e}px)`));
            });
            Mc(this, [b]);
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.Tza = ys();
            this.Uza = ys();
          }
        };
        K6 = G6([qc], K6);
        var Yvb = class {
            constructor() {
              this.zQ = new Map();
              this.I4a = (a, b, c, d, e) => {
                const f = new Yvb();
                for (const [g, h] of this.zQ)
                  c.has(h.Ia) && d.has(h.column) && f.zQ.set(g, h);
                c = `${b.id}:${a.id}`;
                e
                  ? f.zQ.set(c, {
                      width: e.width,
                      height: e.height,
                      Ia: a,
                      column: b,
                    })
                  : f.zQ.delete(c);
                return f;
              };
              this.lS = (a, b) => this.zQ.get(`${b.id}:${a.id}`);
            }
          },
          M6 = class a extends F6 {
            static A(b) {
              N(b, {
                xJ: B6.shallow,
                bounds: n6,
                ew: n6({ equals: v6.shallow }),
                e7: n6({ equals: v6.shallow }),
                voa: C6,
                OZ: C6.bound,
              });
            }
            render() {
              return y6("div", {
                ref: this.Kd,
                children: [
                  b6("div", { ref: this.Epa, className: "_5YlOqQ" }),
                  b6("div", { ref: this.Npa, className: "_XCmKw" }),
                  this.xJ.map((b) => b.KZa),
                  b6(this.f8, { lS: this.state.lS }),
                ],
              });
            }
            componentDidMount() {
              const b = u6(
                  () => [this.e7, this.ew],
                  ([e, f]) => this.voa(e, f),
                  { fireImmediately: !0 }
                ),
                c = D6(() => {
                  var e = this.props,
                    f = e.scaleFactor;
                  e = e.geometry;
                  const g = this.Kd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.xJ.map((e) => ovb(e));
              Mc(this, [c, b, ...d]);
            }
            get bounds() {
              const b = this.props.sheet,
                c = this.props.bounds;
              var d, e, f, g;
              return {
                ed:
                  null !== (d = null === c || void 0 === c ? void 0 : c.ed) &&
                  void 0 !== d
                    ? d
                    : b.cols.first(),
                ji:
                  null !== (e = null === c || void 0 === c ? void 0 : c.ji) &&
                  void 0 !== e
                    ? e
                    : b.cols.last(),
                od:
                  null !== (f = null === c || void 0 === c ? void 0 : c.od) &&
                  void 0 !== f
                    ? f
                    : b.rows.first(),
                ki:
                  null !== (g = null === c || void 0 === c ? void 0 : c.ki) &&
                  void 0 !== g
                    ? g
                    : b.rows.last(),
              };
            }
            get ew() {
              const b = this.bounds,
                c = this.props.sheet;
              var d = this.props.viewport;
              const e = this.props.scaleFactor.get();
              var f = 500 * e,
                g = null === d || void 0 === d ? void 0 : d.get();
              d = g ? g.tl.y - f : b.od ? c.ua(b.od) : 0;
              f = g ? g.br.y + f : b.ki ? c.ua(b.ki) + b.ki.height : 0;
              g = new Map();
              for (
                let h = b.od;
                null != h && null != b.ki && 0 >= c.rows.Xh(h, b.ki);
                h = c.rows.next(h)
              ) {
                const k = c.ua(h);
                if (!(k + h.height < d)) {
                  if (k > f) break;
                  g.set(h, k * e);
                }
              }
              return g;
            }
            get e7() {
              const b = this.bounds,
                c = this.props.sheet;
              var d = this.props.viewport;
              const e = this.props.scaleFactor.get();
              var f = 100 * e,
                g = null === d || void 0 === d ? void 0 : d.get();
              d = g ? g.tl.x - f : b.ed ? c.qa(b.ed) : 0;
              f = g ? g.br.x + f : b.ji ? c.qa(b.ji) + b.ji.width : 0;
              g = new Map();
              for (
                let h = b.ed;
                null != h && null != b.ji && 0 >= c.cols.Xh(h, b.ji);
                h = c.cols.next(h)
              ) {
                const k = c.qa(h);
                if (!(k + h.width < d)) {
                  if (k > f) break;
                  g.set(h, k * e);
                }
              }
              return g;
            }
            voa(b, c) {
              const d = B(this.Epa.current),
                e = B(this.Npa.current),
                f = [],
                g = new Map();
              for (const h of this.EGa)
                c.has(h.Ia) ? g.set(h.Ia, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new Zvb(this.OZ, h)),
                    d.appendChild(c.XY),
                    e.appendChild(c.aZ),
                    this.EGa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            OZ(b, c) {
              const d = this.props.Faa,
                e = this.props.sheet,
                f = this.props.rK;
              b = new $vb(
                this.props.jF,
                this.props.Gi,
                d(b, c),
                e,
                b,
                c,
                f,
                this.S2
              );
              Mc(this, ovb(b));
              this.xJ.push(b);
              return b;
            }
            constructor(b) {
              super(b);
              a.A(this);
              this.Kd = ys();
              this.Epa = ys();
              this.Npa = ys();
              this.EGa = [];
              this.xJ = [];
              this.f8 = f6((c) => {
                const d = [...this.ew.keys()],
                  e = [...this.e7.keys()];
                return b6(this.props.RIa, { ew: d, r4a: e, lS: c.lS });
              });
              this.S2 = (c, d, e) => {
                this.setState((f) => {
                  const g = e();
                  return f.I4a(d, c, this.ew, this.e7, g);
                });
              };
              this.state = new Yvb();
            }
          };
        M6 = G6([qc], M6);
        var Zvb = class {
            static A(a) {
              N(a, { update: C6 });
            }
            update(a, b, c) {
              [this.XY, this.aZ].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.Ia = b;
              for (const [d] of c)
                (c = this.xJ.get(d)),
                  c ||
                    ((c = this.OZ(d, b)),
                    this.xJ.set(d, c),
                    this.XY.appendChild(c.O$),
                    this.aZ.appendChild(c.ZY)),
                  c.update(b);
            }
            hide() {
              [this.XY, this.aZ].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              Zvb.A(this);
              this.OZ = a;
              this.Ia = b;
              this.XY = document.createElement("div");
              this.aZ = document.createElement("div");
              this.xJ = new Map();
            }
          },
          $vb = class {
            static A(a) {
              N(a, {
                FZ: B6.ref,
                Ia: B6.ref,
                Aa: n6,
                attrs: n6,
                dT: n6,
                renderer: n6,
                update: C6,
              });
            }
            get KZa() {
              return this.FZ;
            }
            get Aa() {
              return QX(this.sheet.cells, this.col, this.Ia);
            }
            get attrs() {
              return this.sheet.attrs.get(this.col, this.Ia);
            }
            get dT() {
              return this.rK ? !this.rK(this.col, this.Ia) : !1;
            }
            get renderer() {
              const a = this.Aa;
              if (a && (a.content || a.Ea))
                return this.jF({
                  context: {
                    Ia: this.Ia,
                    col: this.col,
                    sheet: this.sheet,
                    attrs: this.attrs,
                  },
                  Gi: this.Gi,
                });
            }
            update(a) {
              this.Ia = a;
              this.gEa.Ia = a;
            }
            constructor(a, b, c, d, e, f, g, h) {
              $vb.A(this);
              var k, l, m, n, p, q;
              this.jF = a;
              this.gEa = c;
              this.sheet = d;
              this.col = e;
              this.rK = g;
              this.O$ = document.createElement("div");
              this.ZY = document.createElement("div");
              this.AQ = document.createElement("div");
              this.UF = document.createElement("div");
              this.KU = document.createElement("div");
              this.WVa = () => {
                if (this.renderer) {
                  var r = "react" === this.renderer.type ? this.KU : this.UF;
                  if (
                    0 !== r.childNodes.length &&
                    ((r = r.childNodes[0]), r instanceof HTMLElement)
                  )
                    return { width: r.clientWidth, height: r.clientHeight };
                }
              };
              this.Ia = f;
              this.O$.className = "_2JFriw";
              this.ZY.className = "imy9ug";
              this.AQ.className = e6("pDMp7w", {
                _0yZ6Qg:
                  "text3" !==
                  (null === (l = this.Aa) || void 0 === l
                    ? void 0
                    : null === (k = l.content) || void 0 === k
                    ? void 0
                    : k.type),
                qhF5uA:
                  "text3" !==
                    (null === (n = this.Aa) || void 0 === n
                      ? void 0
                      : null === (m = n.content) || void 0 === m
                      ? void 0
                      : m.type) &&
                  "text2" !==
                    (null === (q = this.Aa) || void 0 === q
                      ? void 0
                      : null === (p = q.content) || void 0 === p
                      ? void 0
                      : p.type),
              });
              this.UF.className = "_30B9pw";
              this.AQ.appendChild(this.UF);
              this.ZY.appendChild(this.AQ);
              this.KU.className = "G7zH2w";
              this.S2 = () => {
                h(this.col, this.Ia, this.WVa);
              };
              this.Gi = (r) => b6(b, { ...r, vya: this.S2 });
            }
          };
        var w6 = class a extends F6 {
          static A(b) {
            N(b, { yO: n6 });
          }
          render() {
            const b = this.props.sheet,
              c = this.props.jF,
              d = this.props.Jc,
              e = this.props.Gi,
              f = this.props.jt,
              g = this.props.viewport;
            return b6("div", {
              ref: this.props.tm,
              className: e6(
                "SNkrHw",
                "ltr" === b.direction ? "TA4X7w" : "WvuqMw"
              ),
              ...d,
              children: b6(L6, {
                jF: c,
                Gi: e,
                RIa: this.f8,
                Faa: this.Faa,
                sheet: b,
                scaleFactor: this.scaleFactor,
                viewport: g,
                geometry: f,
              }),
            });
          }
          get yO() {
            var b, c;
            return null === (b = (c = this.props).YL) || void 0 === b
              ? void 0
              : b.call(c, this.props.sheet);
          }
          get scaleFactor() {
            return this.props.scaleFactor
              ? this.props.scaleFactor
              : n6(() => 1);
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.f8 = f6((c) =>
              b6(J6, {
                ...c,
                sheet: this.props.sheet,
                scaleFactor: this.scaleFactor,
                jt: this.props.jt,
              })
            );
            this.Faa = (c, d) =>
              new Vvb(
                this.props.HV,
                this.props.sheet,
                this.props.jt,
                c,
                d,
                this.scaleFactor,
                this.yO
              );
          }
        };
        w6 = G6([qc], w6);
        __c.pqa = {
          ETa: function (a) {
            const b = new Mvb(),
              c = a.In,
              d = a.Lf,
              e = a.Yc;
            var f = a.Td;
            const g = a.Xs,
              h = a.Ed,
              k = a.Za,
              { SIa: l, Hy: m } = Dub({ ht: a.ht, Xj: a.Xj }),
              n = pvb({ r1a: b, jF: l, HV: new Kvb(k, h) });
            c.A8 = Vub({ Xp: n, Yc: e });
            d.g8 = Oub({ Xp: n, Yc: e });
            ({ VIa: a } = Tub({ Xp: n, Yc: g(), XCa: new Nvb() }));
            f.Xl.z8 = a;
            const { hHa: p, iHa: q, gHa: r } = Jub();
            f = f6((t) =>
              b6(Avb, { ...t, Xp: n, UIa: p, WIa: q, TIa: r, Gi: Bvb })
            );
            return { Hy: m, $ma: f };
          },
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/71045726bd20b6d2.js.map
