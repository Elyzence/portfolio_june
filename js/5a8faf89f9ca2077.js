(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [3574],
  {
    /***/ 708257: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(988256);
      __web_req__(686040);
      __web_req__(785265);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var Ha = __c.Ha;
        var d0;
        var B = __c.B;
        var p_;
        var a_;
        var Wv = __c.Wv;
        var Qu = __c.Qu;
        var E = __c.E;
        var Gq = __c.Gq;
        var ee = __c.ee;
        var nw = __c.nw;
        var TZ,
          UZ,
          VZ,
          WZ,
          Wbb,
          Xbb,
          d_,
          $bb,
          bcb,
          ccb,
          dcb,
          Zbb,
          ecb,
          fcb,
          Ybb,
          acb,
          gcb,
          hcb,
          f_,
          g_,
          h_,
          icb,
          jcb,
          kcb,
          i_,
          j_,
          m_,
          n_,
          o_,
          q_,
          r_,
          s_,
          t_,
          qcb,
          scb,
          pcb,
          rcb,
          v_,
          w_,
          ucb,
          wcb,
          vcb,
          Acb,
          B_,
          C_,
          Ccb,
          G_,
          Icb,
          F_,
          Fcb,
          Dcb,
          E_,
          Ecb,
          J_,
          K_,
          L_,
          M_,
          Ncb,
          Qcb,
          Rcb,
          Scb,
          Ucb,
          Vcb,
          Z_,
          Wcb,
          Vbb,
          Xcb,
          Ycb,
          Zcb,
          $cb,
          adb,
          bdb,
          cdb,
          b0,
          c0,
          e0,
          ddb,
          edb;
        TZ = function (a) {
          let { r: b, g: c, b: d } = a;
          c /= 255;
          d /= 255;
          a = b / 255;
          b = 0.04045 >= a ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
          c = 0.04045 >= c ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
          d = 0.04045 >= d ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
          return new __c.kw(
            100 * (0.4360747 * b + 0.3850649 * c + 0.1430804 * d),
            100 * (0.2225045 * b + 0.7168786 * c + 0.0606169 * d),
            100 * (0.0139322 * b + 0.0971045 * c + 0.7141733 * d)
          );
        };
        UZ = function (a) {
          const b = __c.qw.qma,
            c = __c.qw.$Ga,
            d = __c.qw.ZGa;
          let { x: e, y: f, z: g } = a;
          e /= b.x;
          f /= b.y;
          g /= b.z;
          a = f > d ? Math.cbrt(f) : (c * f + 16) / 116;
          return new __c.gw(
            116 * a - 16,
            500 * ((e > d ? Math.cbrt(e) : (c * e + 16) / 116) - a),
            200 * (a - (g > d ? Math.cbrt(g) : (c * g + 16) / 116))
          );
        };
        VZ = function (a) {
          const b = a.a,
            c = a.b;
          return new nw(
            (180 * Math.atan2(c, b)) / Math.PI,
            Math.sqrt(b ** 2 + c ** 2),
            a.aa
          );
        };
        WZ = function (a) {
          return a instanceof __c.Vv
            ? ((a = TZ(a)), (a = UZ(a)), VZ(a))
            : a instanceof __c.gw
            ? VZ(a)
            : a instanceof __c.kw
            ? ((a = UZ(a)), VZ(a))
            : a instanceof __c.ow
            ? ((a = __c.iw(a)), WZ(a))
            : "string" === typeof a
            ? ((a = __c.jw(a)), (a = TZ(a)), (a = UZ(a)), VZ(a))
            : a;
        };
        __c.XZ = function (a) {
          return a instanceof __c.Vv
            ? ((a = TZ(a)), UZ(a))
            : a instanceof __c.kw
            ? UZ(a)
            : a instanceof nw
            ? __c.hw(a)
            : a instanceof __c.ow
            ? ((a = __c.iw(a)), __c.XZ(a))
            : "string" === typeof a
            ? ((a = __c.jw(a)), (a = TZ(a)), UZ(a))
            : a;
        };
        __c.YZ = function (a) {
          const b = new Map(),
            c = [];
          for (const d of a)
            (a = b.get(d) || 0), c.push(`${d}__${a}`), b.set(d, a + 1);
          return c;
        };
        __c.ZZ = function (a) {
          var b, c;
          a: {
            a = a.trim();
            a = Vbb.exec(a);
            if (null != a) {
              var [, d, e, f, g] = a;
              a = "-" === d;
              var h = parseFloat(f.replace(/[,\s]*/g, ""));
              a = a && 0 < h ? -h : h;
              if (isFinite(a)) {
                a = { SWa: a, rib: d + f, prefix: e, suffix: g };
                break a;
              }
            }
            a = void 0;
          }
          return null !==
            (c = null === (b = a) || void 0 === b ? void 0 : b.SWa) &&
            void 0 !== c
            ? c
            : NaN;
        };
        __c.$Z = function (a, b = 1) {
          return (0, __c.fX)(
            () =>
              !__c.gs() && a.reduce((c, d) => d.get().length + c, 0) < 150 / b
          );
        };
        a_ = __c.a_ = function (a) {
          a = a.next();
          if (!a.done) return a.value;
        };
        __c.b_ = function (a) {
          const b = ({ hDa: c = !1, children: d }) => {
            const e = (0, __c.T8a)(),
              f = (0, __c.U8a)(null);
            (0, __c.V8a)(
              () =>
                (0, __c.Y8a)(() => {
                  const { width: g, height: h, top: k = 0, left: l = 0 } = a(),
                    m = f.current;
                  m &&
                    (m.setAttribute("width", g.toString()),
                    m.setAttribute("height", h.toString()),
                    m.setAttribute("x", l.toString()),
                    m.setAttribute("y", k.toString()));
                }),
              []
            );
            return (0, __c.W8a)(__c.X8a, {
              children: [
                !c &&
                  (0, __c.KX)("clipPath", {
                    id: e,
                    children: (0, __c.KX)("rect", { ref: f }),
                  }),
                (0, __c.KX)("g", {
                  clipPath: c ? void 0 : `url(#${e})`,
                  children: d,
                }),
              ],
            });
          };
          b.displayName =
            null != a.name
              ? `ClippingContainer(${a.name})`
              : "ClippingContainer";
          return b;
        };
        Wbb = function (a) {
          const b = a.KR,
            c = a.enter,
            d = a.update,
            e = a.exit;
          a = a.Te;
          return {
            KR: b && ee(b, (f) => ({ ...c_, ...f })),
            enter: ee(c, (f) => ({ ...c_, ...f })),
            update: ee(d, (f) => ({ ...c_, ...f })),
            exit: ee(e, (f) => ({ ...c_, ...f })),
            Te: a,
          };
        };
        Xbb = function (a, b, c) {
          a.Ke = window.setTimeout(c, b);
        };
        d_ = function ({
          scale: a,
          maxWidth: b,
          fontSize: c,
          fontFamily: d,
          fontWeight: e,
          qn: f,
        }) {
          const g = Ybb(a);
          return f({
            texts: g.map(({ text: h }) => h),
            maxWidth: b,
            fontSize: c,
            fontFamily: d,
            fontWeight: e,
            textAlign: "center",
            textBaseline: "alphabetic",
          })
            .map((h, k) => ({
              ...h,
              index: k,
              count: g.length,
              M6: g[k].text,
              key: g[k].key,
            }))
            .filter(({ text: h }) => "" !== h);
        };
        $bb = function ({
          direction: a,
          fontSize: b,
          fontFamily: c,
          fontWeight: d,
          measureText: e,
        }) {
          a = Zbb({
            direction: a,
            fontSize: b,
            fontFamily: c,
            fontWeight: d,
            measureText: e,
          });
          return 0.5 * b + a;
        };
        bcb = function ({
          float: a,
          JH: b,
          maxHeight: c,
          Np: d,
          Aka: e,
          lda: f,
        }) {
          return function (g, h) {
            switch (a) {
              case "left":
                return new Gq(-h.width / 2 - d - e, acb(h, g, b, c));
              case "right":
                return new Gq(f + h.width / 2 + d + e, acb(h, g, b, c));
              case "top":
                return new Gq(
                  g,
                  -e - c + b - h.actualBoundingBoxAscent + h.height / 2
                );
              case "bottom":
                return new Gq(
                  g,
                  f + e + b - h.actualBoundingBoxAscent + h.height / 2
                );
              default:
                throw new E(a);
            }
          };
        };
        ccb = function ({ config: a, labels: b, F2a: c, lda: d, Aka: e }) {
          const f = a.float;
          a = a.Np;
          const g = Math.max(...b.map(({ actualBoundingBoxAscent: m }) => m)),
            h = Math.max(...b.map(({ actualBoundingBoxDescent: m }) => m)),
            k = bcb({
              float: f,
              JH: g,
              maxHeight: g + h,
              Np: a,
              Aka: e,
              lda: d,
            }),
            l = (m, n) =>
              __c.gr({ center: k(m, n), width: n.width, height: n.height });
          return { Ps: b.map((m) => l(c[m.index], m)), G2a: l };
        };
        dcb = function (a, b) {
          const c = (b * __c.Eq) / 180;
          return a.map((d) => {
            d = d.translate(-d.width / 2, 0);
            d = d.transform(__c.Xq(d.r, c));
            return d.translate(Math.abs(d.tr.x - d.br.x) / 2, 0);
          });
        };
        Zbb = function ({
          direction: a,
          fontSize: b,
          fontFamily: c,
          fontWeight: d,
          measureText: e,
        }) {
          switch (a) {
            case "vertical":
              return e({ text: " ", fontSize: b, fontFamily: c, fontWeight: d })
                .bK;
            case "horizontal":
              return 0;
            default:
              throw new E(a);
          }
        };
        ecb = function (a, b, c) {
          const d = "horizontal" === a.direction ? b : c;
          return a.scale.clone({
            Tb:
              "vertical" !== a.direction || a.IG ? () => [0, d] : () => [d, 0],
          });
        };
        fcb = function (a) {
          const b = a.kind;
          switch (b) {
            case "band":
              return a.wb().map((c) => a.get(c) + a.Mr / 2);
            case "point":
              return a.wb().map((c) => a.get(c));
            case "linear":
              return a.kr().map((c) => a.get(c));
            default:
              throw new E(b);
          }
        };
        Ybb = function (a) {
          var b = a.kind;
          switch (b) {
            case "band":
            case "point":
              b = a.wb().map((d) => a.Oc(d));
              const c = __c.YZ(b);
              return b.map((d, e) => ({ text: d, key: c[e] }));
            case "linear":
              return a.kr().map((d) => ({ text: a.Oc(d), key: d.toString() }));
            default:
              throw new E(b);
          }
        };
        acb = function (a, b, c, d) {
          b += a.height / 2;
          b += c - a.actualBoundingBoxAscent;
          return b - d / 2;
        };
        gcb = function ({ measurements: a, Ps: b, WJa: c }) {
          if (0 === a.length) return { measurements: a, Ps: b, Xx: new Set() };
          const d = { measurements: [a[0]], Ps: [b[0]], Xx: new Set() };
          let e = b[0];
          for (let f = 1; f < b.length; f++) {
            const g = a[f],
              h = b[f],
              k =
                0 === e.rotation
                  ? __c.ar(
                      e.tl.x - c.left,
                      e.tl.y - c.top,
                      e.br.x + c.right,
                      e.br.y + c.bottom
                    )
                  : e;
            (0 === h.rotation
              ? __c.ar(
                  h.tl.x - c.left,
                  h.tl.y - c.top,
                  h.br.x + c.right,
                  h.br.y + c.bottom
                )
              : h
            ).lp(k)
              ? d.Xx.add(g.index)
              : (d.measurements.push(g), d.Ps.push(h), (e = h));
          }
          return d;
        };
        hcb = function (a, b = Qu) {
          for (let e = 0; e < a.length; e++) {
            var c = a[e];
            c = __c.ar(
              c.tl.x - b.left,
              c.tl.y - b.top,
              c.br.x + b.right,
              c.br.y + b.bottom
            );
            for (let f = e + 1; f < a.length; f++) {
              var d = a[f];
              d = __c.ar(
                d.tl.x - b.left,
                d.tl.y - b.top,
                d.br.x + b.right,
                d.br.y + b.bottom
              );
              if (c.lp(d)) return !0;
            }
          }
          return !1;
        };
        f_ = function ({
          config: a,
          measurements: b,
          width: c,
          height: d,
          rotate: e,
          fontFamily: f,
          fontSize: g,
          fontWeight: h,
          measureText: k,
        }) {
          const l = a.direction;
          var m = a.float;
          const n = ecb(a, c, d),
            p = fcb(n),
            q = $bb({
              direction: l,
              fontFamily: f,
              fontSize: g,
              fontWeight: h,
              measureText: k,
            });
          let { Ps: r, G2a: t } = ccb({
            config: a,
            labels: b,
            F2a: p,
            lda: "horizontal" === l ? d : c,
            Aka: q,
          });
          a = k({ text: " ", fontSize: g, fontFamily: f, fontWeight: h }).bK;
          f = { ...Qu, left: 2 * a };
          a = 0;
          e && hcb(r, f) && ((a = "top" === m ? 45 : -45), (r = dcb(r, a)));
          m = gcb({ Ps: r, measurements: b, WJa: f });
          e = m.Xx;
          ({ Ps: r, measurements: b } = m);
          c = __c.e_(r, { width: c, height: d });
          return {
            fontSize: g,
            labels: r.map((u, w) => {
              const x = b[w];
              return {
                position: __c
                  .rr(u)
                  .transform(
                    x.actualBoundingBoxLeft,
                    x.actualBoundingBoxAscent
                  ),
                text: x.text,
                M6: x.M6,
                key: x.key,
                kE: (z, A) => {
                  z = t(z, x);
                  0 !== A && (z = dcb([z], A)[0]);
                  return __c
                    .rr(z)
                    .transform(
                      x.actualBoundingBoxLeft,
                      x.actualBoundingBoxAscent
                    );
                },
                p_a: p[x.index],
                JOa: x.index,
              };
            }),
            zj: a,
            margins: c,
            Xx: e,
            direction: l,
            scale: n,
          };
        };
        g_ = function ({
          scale: a,
          labels: b,
          fontSize: c,
          zj: d,
          direction: e,
        }) {
          if ("linear" === a.kind) {
            const f = a.va(),
              g = f.kr();
            return {
              numeric: b.map(({ text: h, key: k, M6: l, kE: m, JOa: n }) => ({
                text: h,
                value: g[n],
                fontSize: c,
                kE: m,
                textAnchor: "middle",
                dominantBaseline: "alphabetic",
                zj: d,
                key: k,
                tooltip: h.length && h !== l ? l : void 0,
                axis: { scale: f, direction: e },
              })),
              Lq: [],
            };
          }
          return {
            numeric: [],
            Lq: b.map(({ text: f, key: g, M6: h, kE: k, p_a: l }) => {
              const { x: m, y: n } = k(l, d);
              return {
                x: m,
                y: n,
                text: f,
                value: f,
                fontSize: c,
                textAnchor: "middle",
                dominantBaseline: "alphabetic",
                zj: d,
                key: g,
                tooltip: f.length && f !== h ? h : void 0,
                axis: { scale: a, direction: e },
              };
            }),
          };
        };
        __c.e_ = function (a, { width: b, height: c }) {
          return 0 === a.length
            ? Qu
            : a
                .map((d) => __c.dr(d))
                .reduce(
                  (d, e) => ({
                    left: Math.max(d.left, 0 - e.tl.x),
                    right: Math.max(d.right, e.br.x - b),
                    bottom: Math.max(d.bottom, e.br.y - c),
                    top: Math.max(d.top, 0 - e.tl.y),
                  }),
                  Qu
                );
        };
        h_ = function (a) {
          return a.reduce(
            (b, c) => ({
              top: Math.max(b.top, c.top),
              right: Math.max(b.right, c.right),
              bottom: Math.max(b.bottom, c.bottom),
              left: Math.max(b.left, c.left),
            }),
            Qu
          );
        };
        icb = function ({
          Gj: a,
          Ck: b,
          hF: c,
          width: d,
          height: e,
          color: f,
        }) {
          const g = __c.Tv(Wv(f), 0.6);
          f = __c.Tv(Wv(f), 0.25);
          let h = [],
            k = [],
            l = [],
            m = [],
            n = [],
            p = [];
          if (null === a || void 0 === a ? 0 : a.uh)
            "linear" === a.scale.kind
              ? (h = i_({
                  scale: a.scale,
                  direction: a.direction,
                  height: e,
                  width: d,
                  V9: g,
                  WG: f,
                }))
              : (k = j_({
                  scale: a.scale,
                  direction: a.direction,
                  height: e,
                  width: d,
                  WG: f,
                }));
          if (null === b || void 0 === b ? 0 : b.uh)
            "linear" === b.scale.kind
              ? (l = i_({
                  scale: b.scale,
                  direction: b.direction,
                  height: e,
                  width: d,
                  V9: g,
                  WG: f,
                }))
              : (m = j_({
                  scale: b.scale,
                  direction: b.direction,
                  height: e,
                  width: d,
                  WG: f,
                }));
          if (null === c || void 0 === c ? 0 : c.uh)
            "linear" === c.scale.kind
              ? (n = i_({
                  scale: c.scale,
                  direction: c.direction,
                  height: e,
                  width: d,
                  V9: g,
                  WG: f,
                }))
              : (p = j_({
                  scale: c.scale,
                  direction: c.direction,
                  height: e,
                  width: d,
                  WG: f,
                }));
          return { QD: h, KD: k, RD: l, LD: m, SD: n, MD: p };
        };
        jcb = function (a) {
          return a.kr().map((b) => [b, a.get(b)]);
        };
        kcb = function (a) {
          return a.wb().map((b) => [b, a.get(b)]);
        };
        i_ = function ({
          scale: a,
          direction: b,
          height: c,
          width: d,
          V9: e,
          WG: f,
        }) {
          const g = a.va();
          switch (b) {
            case "horizontal":
              return jcb(g).map(([h, k]) => ({
                key: `${h}`,
                jea: 0 === h,
                start: new Gq(k, c),
                end: new Gq(k, 0),
                value: h,
                axis: { scale: g, direction: b },
                color: 0 === h ? e : f,
              }));
            case "vertical":
              return jcb(g).map(([h, k]) => ({
                key: `${h}`,
                jea: 0 === h,
                start: new Gq(0, k),
                end: new Gq(d, k),
                value: h,
                axis: { scale: g, direction: b },
                color: 0 === h ? e : f,
              }));
            default:
              throw new E(b);
          }
        };
        j_ = function ({ direction: a, scale: b, height: c, width: d, WG: e }) {
          switch (a) {
            case "horizontal":
              return kcb(b).map(([f, g]) => ({
                key: `${f}`,
                jea: !1,
                start: new Gq(g, c),
                end: new Gq(g, 0),
                value: f,
                axis: { scale: b, direction: a },
                color: e,
              }));
            case "vertical":
              return kcb(b).map(([f, g]) => ({
                key: `${f}`,
                jea: !1,
                start: new Gq(0, g),
                end: new Gq(d, g),
                value: f,
                axis: { scale: b, direction: a },
                color: e,
              }));
            default:
              throw new E(a);
          }
        };
        m_ = function ({ Xf: a }) {
          return k_(function () {
            return l_(lcb, { Xf: a.get() });
          });
        };
        n_ = function ({ d: a, diff: b }) {
          var c, d;
          return (
            null !==
              (d =
                null === (c = a_(b.prev.values())) || void 0 === c
                  ? void 0
                  : c.axis.scale) && void 0 !== d
              ? d
              : a.axis.scale
          ).get(a.value);
        };
        o_ = function ({ d: a, diff: b }) {
          var c, d, e;
          return (
            null !==
              (e =
                null ===
                  (c =
                    null !== (d = a_(b.enter.values())) && void 0 !== d
                      ? d
                      : a_(b.update.values())) || void 0 === c
                  ? void 0
                  : c.axis.scale) && void 0 !== e
              ? e
              : a.axis.scale
          ).get(a.value);
        };
        q_ = function ({ F: a, Xf: b, Mt: c, ma: d, Oa: e }) {
          a = new p_({
            mc: {
              enter: {
                Yi: {
                  value: (g, h) =>
                    "horizontal" === g.axis.direction
                      ? n_({ d: g, diff: h })
                      : g.start.x,
                },
                Zi: {
                  value: (g, h) =>
                    "vertical" === g.axis.direction
                      ? n_({ d: g, diff: h })
                      : g.start.y,
                },
                En: {
                  value: (g, h) =>
                    "horizontal" === g.axis.direction
                      ? n_({ d: g, diff: h })
                      : g.end.x,
                },
                Fn: {
                  value: (g, h) =>
                    "vertical" === g.axis.direction
                      ? n_({ d: g, diff: h })
                      : g.end.y,
                },
                yC: { value: (g) => g.color.r },
                xC: { value: (g) => g.color.g },
                Ca: { value: (g) => g.color.b },
                Ba: { value: () => 0 },
              },
              update: {
                Yi: { value: (g) => g.start.x },
                Zi: { value: (g) => g.start.y },
                En: { value: (g) => g.end.x },
                Fn: { value: (g) => g.end.y },
                yC: { value: (g) => g.color.r },
                xC: { value: (g) => g.color.g },
                Ca: { value: (g) => g.color.b },
                Ba: { value: (g) => g.color.a },
              },
              exit: {
                Yi: {
                  value: (g, h) =>
                    "horizontal" === g.axis.direction
                      ? o_({ d: g, diff: h })
                      : g.start.x,
                },
                Zi: {
                  value: (g, h) =>
                    "vertical" === g.axis.direction
                      ? o_({ d: g, diff: h })
                      : g.start.y,
                },
                En: {
                  value: (g, h) =>
                    "horizontal" === g.axis.direction
                      ? o_({ d: g, diff: h })
                      : g.end.x,
                },
                Fn: {
                  value: (g, h) =>
                    "vertical" === g.axis.direction
                      ? o_({ d: g, diff: h })
                      : g.end.y,
                },
                yC: { value: (g) => g.color.r },
                xC: { value: (g) => g.color.g },
                Ca: { value: (g) => g.color.b },
                Ba: { value: () => 0 },
              },
              Te: {
                Yi: !0,
                Zi: !0,
                En: !0,
                Fn: !0,
                yC: !1,
                xC: !1,
                Ca: !1,
                Ba: !1,
              },
            },
            data: b,
            ma: d,
            F: a,
            Qd: 500,
            ye: 500,
            Rd: 500,
            getKey: (g) => g.key,
            Vk: 0,
            Zo: 0,
          });
          const { sb: f } = e(a);
          return function () {
            return l_(c, { children: l_(mcb, { sb: f }) });
          };
        };
        r_ = function ({ F: a, Xf: b, ma: c, Oa: d }) {
          a = new p_({
            mc: {
              enter: {
                Yi: { value: (f) => f.start.x },
                Zi: { value: (f) => f.start.y },
                En: { value: (f) => f.end.x },
                Fn: { value: (f) => f.end.y },
                yC: { value: (f) => f.color.r },
                xC: { value: (f) => f.color.g },
                Ca: { value: (f) => f.color.b },
                Ba: { value: () => 0 },
              },
              update: {
                Yi: { value: (f) => f.start.x },
                Zi: { value: (f) => f.start.y },
                En: { value: (f) => f.end.x },
                Fn: { value: (f) => f.end.y },
                yC: { value: (f) => f.color.r },
                xC: { value: (f) => f.color.g },
                Ca: { value: (f) => f.color.b },
                Ba: { value: (f) => f.color.a },
              },
              exit: {
                Yi: { value: (f) => f.start.x },
                Zi: { value: (f) => f.start.y },
                En: { value: (f) => f.end.x },
                Fn: { value: (f) => f.end.y },
                yC: { value: (f) => f.color.r },
                xC: { value: (f) => f.color.g },
                Ca: { value: (f) => f.color.b },
                Ba: { value: () => 0 },
              },
              Te: {
                Yi: !0,
                Zi: !0,
                En: !0,
                Fn: !0,
                yC: !1,
                xC: !1,
                Ca: !1,
                Ba: !1,
              },
            },
            data: b,
            ma: c,
            F: a,
            Qd: 500,
            ye: 500,
            Rd: 500,
            getKey: (f) => f.key,
            Vk: 0,
            Zo: 0,
          });
          const { sb: e } = d(a);
          return function () {
            return l_(mcb, { sb: e });
          };
        };
        s_ = function ({ Oe: a, cd: b, Ib: c, labels: d }) {
          return k_(function () {
            return l_(ncb, { labels: d.get(), Oe: a, cd: b, Ib: c });
          });
        };
        t_ = function ({ Oe: a, cd: b, Ib: c, labels: d }) {
          return k_(function () {
            return l_(ocb, { labels: d.get(), Oe: a, cd: b, Ib: c });
          });
        };
        qcb = function (a, b, c) {
          var d, e;
          c = c
            ? null !==
                (e =
                  null === (d = a_(b.prev.values())) || void 0 === d
                    ? void 0
                    : d.axis.scale) && void 0 !== e
              ? e
              : a.axis.scale
            : a.axis.scale;
          return a.kE(c.get(a.value), pcb(a, b));
        };
        scb = function (a, b, c) {
          var d, e, f;
          c = c
            ? null !==
                (f =
                  null ===
                    (d =
                      null !== (e = a_(b.enter.values())) && void 0 !== e
                        ? e
                        : a_(b.update.values())) || void 0 === d
                    ? void 0
                    : d.axis.scale) && void 0 !== f
              ? f
              : a.axis.scale
            : a.axis.scale;
          return a.kE(c.get(a.value), rcb(a, b));
        };
        pcb = function (a, b) {
          var c, d;
          return null !==
            (d =
              null === (c = a_(b.prev.values())) || void 0 === c
                ? void 0
                : c.zj) && void 0 !== d
            ? d
            : a.zj;
        };
        rcb = function (a, b) {
          var c, d, e;
          return null !==
            (e =
              null ===
                (c =
                  null !== (d = a_(b.enter.values())) && void 0 !== d
                    ? d
                    : a_(b.update.values())) || void 0 === c
                ? void 0
                : c.zj) && void 0 !== e
            ? e
            : a.zj;
        };
        v_ = function ({
          F: a,
          Oe: b,
          Mt: c,
          cd: d,
          Ib: e,
          labels: f,
          ma: g,
          Oa: h,
        }) {
          a = new p_({
            mc: {
              enter: {
                x: {
                  value: (m, n) =>
                    qcb(m, n, "horizontal" === m.axis.direction).x,
                },
                y: {
                  value: (m, n) => qcb(m, n, "vertical" === m.axis.direction).y,
                },
                rotation: { value: (m, n) => pcb(m, n) },
                fontSize: { value: (m) => m.fontSize },
                opacity: { value: () => 0 },
              },
              update: {
                x: { value: (m) => m.kE(m.axis.scale.get(m.value), m.zj).x },
                y: { value: (m) => m.kE(m.axis.scale.get(m.value), m.zj).y },
                rotation: { value: (m) => m.zj },
                fontSize: { value: (m) => m.fontSize },
                opacity: { value: () => 1, end: 0 },
              },
              exit: {
                x: {
                  value: (m, n) =>
                    scb(m, n, "horizontal" === m.axis.direction).x,
                },
                y: {
                  value: (m, n) => scb(m, n, "vertical" === m.axis.direction).y,
                },
                rotation: { value: (m, n) => rcb(m, n) },
                fontSize: { value: (m) => m.fontSize },
                opacity: { value: () => 0 },
              },
              Te: { x: !0, y: !0, rotation: !1, fontSize: !0, opacity: !1 },
            },
            data: f,
            ma: g,
            F: a,
            Qd: 500,
            ye: 500,
            Rd: 500,
            getKey: (m) => m.key,
            Vk: 0,
            Zo: 0,
          });
          const k = __c.u_(b, new Set(["transform", "fontSize", "opacity"])),
            { sb: l } = h(a);
          return k_(function () {
            return l_(c, { children: l_(tcb, { sb: l, Er: k, cd: d, Ib: e }) });
          });
        };
        w_ = function ({ F: a, Oe: b, cd: c, Ib: d, labels: e, ma: f, Oa: g }) {
          a = new p_({
            mc: {
              enter: {
                x: { value: (l) => l.x },
                y: { value: (l) => l.y },
                rotation: { value: (l) => l.zj },
                fontSize: { value: (l) => l.fontSize },
                opacity: { value: () => 0 },
              },
              update: {
                x: { value: (l) => l.x },
                y: { value: (l) => l.y },
                rotation: { value: (l) => l.zj },
                fontSize: { value: (l) => l.fontSize },
                opacity: { value: () => 1, end: 0 },
              },
              exit: {
                x: { value: (l) => l.x, end: 0 },
                y: { value: (l) => l.y, end: 0 },
                rotation: { value: (l) => l.zj, end: 0 },
                fontSize: { value: (l) => l.fontSize, end: 0 },
                opacity: { value: () => 0, end: 0 },
              },
              Te: { x: !0, y: !0, rotation: !1, fontSize: !0, opacity: !1 },
            },
            data: e,
            ma: f,
            F: a,
            Qd: 500,
            ye: 500,
            Rd: 500,
            getKey: (l) => l.key,
            Vk: 0,
            Zo: 0,
          });
          const h = __c.u_(b, new Set(["transform", "fontSize", "opacity"])),
            { sb: k } = g(a);
          return k_(function () {
            return l_(tcb, { sb: k, Er: h, cd: c, Ib: d });
          });
        };
        ucb = function ({ Gj: a, width: b, height: c, pX: d, WL: e }) {
          c = e(b - d.left - d.right, c);
          c = h_([d, c]);
          if (null != a) {
            {
              var f = a.nX;
              const p = a.mX.scale;
              if (0 === f.length) var g = [c.left, b - c.right];
              else {
                a = f[0];
                var h = a.index;
                e = a.width / 2;
                var k = f[f.length - 1];
                f = k.index;
                k = b - k.width / 2;
                if (h === f) {
                  var l;
                  [h] =
                    null !==
                      (l = p.wZ(
                        { center: e, index: h },
                        b - c.right,
                        a.count
                      )) && void 0 !== l
                      ? l
                      : [e, b - d.right];
                  [, d] =
                    null !==
                      (g = p.xZ({ center: k, index: f }, c.left, a.count)) &&
                    void 0 !== g
                      ? g
                      : [c.left, k];
                  g = [h, d];
                } else
                  g = p.yZ(
                    { center: e, index: h },
                    { center: k, index: f },
                    a.count
                  );
              }
            }
          } else g = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
          const [m, n] = g;
          return Math.min(n, b - c.right) - Math.max(m, c.left);
        };
        wcb = function ({
          mX: a,
          nX: b,
          width: c,
          height: d,
          pX: e,
          fontFamily: f,
          fontSize: g,
          fontWeight: h,
          WL: k,
          measureText: l,
        }) {
          k = k(c - e.left - e.right, d);
          let m;
          do {
            var n = vcb({ mX: a, nX: b, width: c, pX: e, Afa: k });
            ({ width: m } = n);
            const q = n.m6;
            n = f_({
              config: a,
              measurements: b,
              width: m,
              height: d,
              fontFamily: f,
              fontSize: g,
              fontWeight: h,
              rotate: !0,
              measureText: l,
            });
            if (null == q) break;
            var p = n.Xx;
            (p = null != q && p.has(q)) && (b = b.filter((r) => r.index !== q));
          } while (p);
          return { axis: n, width: m };
        };
        vcb = function ({ mX: a, nX: b, width: c, pX: d, Afa: e }) {
          const f = h_([d, e]),
            g = a.scale,
            h = b[b.length - 1];
          a = b.map((m) => {
            const n = m.index,
              p = Math.SQRT1_2 * m.width,
              q = h.index,
              r = c - Math.SQRT1_2 * h.height;
            if (n === q) {
              var t;
              const [w] =
                null !==
                  (t = g.wZ({ center: p, index: n }, c - f.right, m.count)) &&
                void 0 !== t
                  ? t
                  : [p, c - f.right];
              var u;
              [, m] =
                null !== (u = g.xZ({ center: r, index: q }, f.left, m.count)) &&
                void 0 !== u
                  ? u
                  : [f.left, r];
              return { range: [w, m], m6: n };
            }
            return {
              range: g.yZ(
                { center: p, index: n },
                { center: r, index: q },
                m.count
              ),
              m6: n,
            };
          });
          a = __c.Bz(a, ({ range: m }) => m[0]);
          const [k, l] = a.range;
          return {
            width: Math.min(l, c - f.right) - Math.max(k, f.left),
            m6: k > f.left ? a.m6 : void 0,
          };
        };
        Acb = function ({ F: a, Fg: b, width: c, height: d }) {
          const e = __c.tt.fontSize,
            f = "Canva Sans".replace(",", " "),
            g = __c.nt("Canva Sans");
          return k_(function ({ kind: h, children: k }) {
            var l = a.zoom;
            const m = e / l;
            l = 16 / l;
            const n = c.get() - 2 * l,
              {
                text: p,
                width: q,
                height: r,
              } = x_(
                () =>
                  b({
                    text: k,
                    fontSize: m,
                    fontFamily: f,
                    fontWeight: __c.tt.fontWeight,
                    maxWidth: n,
                  }),
                [k, n, m]
              ),
              t = (d.get() - r) / 2 - l,
              u = (c.get() - q) / 2 - l,
              w = xcb[h];
            return y_("g", {
              transform: `translate(${u}, ${t})`,
              children: [
                l_("rect", {
                  fill: ycb[h],
                  opacity: zcb[h],
                  x: 0,
                  y: 0,
                  rx: 4,
                  ry: 4,
                  width: q + 2 * l,
                  height: r + 2 * l,
                }),
                l_(__c.z_, {
                  x: l,
                  y: l,
                  fontFamily: g,
                  fontSize: m,
                  fill: w,
                  children: p,
                }),
              ],
            });
          });
        };
        __c.A_ = function ({ F: a, Fg: b, Zm: c, width: d, height: e }) {
          const f = Acb({ F: a, Fg: b, width: d, height: e });
          return k_(function () {
            return y_("g", {
              children: [
                c && l_(c, { width: d.get(), height: e.get() }),
                l_(f, { kind: "hint", children: __c.Q("AeIYbw") }),
              ],
            });
          });
        };
        B_ = function (a, b, c, d, e) {
          return (
            b +
            0.5 * (c - a) * e +
            0.5 * (2 * a + 4 * c - 5 * b - d) * e ** 2 +
            0.5 * (3 * b + d - a - 3 * c) * e ** 3
          );
        };
        C_ = function (a, b) {
          const c = Math.floor(b);
          return B_(
            a[0 === c ? a.length - 1 : c - 1],
            a[c],
            a[(c + 1) % a.length],
            a[(c + 2) % a.length],
            b - c
          );
        };
        Ccb = function (a, b) {
          var c = Bcb;
          const d = Math.floor(a);
          a -= d;
          const e = 0 === d ? c.length - 1 : d - 1,
            f = (d + 1) % c.length,
            g = (d + 2) % c.length,
            h = Math.floor(b),
            k = 0 === h ? c[0].length - 1 : h - 1,
            l = (h + 1) % c[0].length,
            m = (h + 2) % c[0].length;
          return Math.max(
            B_(
              B_(c[e][k], c[e][h], c[e][l], c[e][m], a),
              B_(c[d][k], c[d][h], c[d][l], c[d][m], a),
              B_(c[f][k], c[f][h], c[f][l], c[f][m], a),
              B_(c[g][k], c[g][h], c[g][l], c[g][m], a),
              b - h
            ),
            0
          );
        };
        G_ = function (a) {
          if (0 === a.length) return "#00cadc";
          if (1 === a.length)
            return (
              (a = WZ(Wv(a[0]))),
              (a = Dcb(new nw((((a.h + 31) % 360) + 360) % 360, a.c, a.aa))),
              __c.fZ(a)
            );
          var b = WZ(Wv(a[a.length - 2]));
          a = WZ(Wv(a[a.length - 1]));
          b = new D_(
            Ecb([a.h - b.h, a.h + 360 - b.h, a.h - (b.h + 360)]),
            a.c - b.c,
            a.aa - b.aa
          );
          var c = E_(b);
          c = new D_(F_(c.h), F_(c.c), F_(c.aa));
          var d = new D_(
            0,
            Fcb(
              a.c,
              Math.max(C_(Gcb, a.h / 18), 0),
              Math.max(Ccb(a.h / 18, a.aa / 5), 0)
            ),
            Fcb(a.aa, Math.max(C_(Hcb, a.h / 18), 0), 90)
          );
          c = E_(
            new D_(
              0.3 * c.h + 0.7 * d.h,
              0.3 * c.c + 0.7 * d.c,
              0.3 * c.aa + 0.7 * d.aa
            )
          );
          b = E_(new D_(b.h + 31 * c.h, b.c + 17 * c.c, b.aa + 19 * c.aa));
          a = new D_(a.h + 31 * b.h, a.c + 17 * b.c, a.aa + 19 * b.aa);
          a = Dcb(
            new nw(
              ((a.h % 360) + 360) % 360,
              Math.max(a.c, 0),
              Math.min(Math.max(a.aa, 0), 100)
            )
          );
          return __c.fZ(a);
        };
        Icb = function (a, b) {
          a = [...a];
          for (let c = a.length; c < b; c++) a.push(G_(a));
          return a;
        };
        F_ = function (a) {
          const b = 1 / (1 + 5 * Math.abs(a)) ** 2;
          return 0 > a ? -b : b;
        };
        Fcb = function (a, b, c) {
          a = (Math.min(Math.max(a, b), c) - b) / (c - b);
          return 1 / (1 + 8 * a) ** 2 - 1 / (1 + 8 * (1 - a)) ** 2;
        };
        Dcb = function (a) {
          return new nw(
            a.h,
            Math.min(
              Math.max(a.c, Math.max(C_(Gcb, a.h / 18), 0)),
              Math.max(Ccb(a.h / 18, a.aa / 5), 0)
            ),
            Math.min(Math.max(a.aa, Math.max(C_(Hcb, a.h / 18), 0)), 90)
          );
        };
        E_ = function (a) {
          const b = Math.sqrt(a.h ** 2 + a.c ** 2 + a.aa ** 2);
          return 0 === b ? new D_(0, 0, 0) : new D_(a.h / b, a.c / b, a.aa / b);
        };
        Ecb = function (a) {
          var b = Math.abs;
          return a.reduce((c, d) => (b(c) < b(d) ? c : d), Infinity);
        };
        __c.H_ = function (a) {
          var b;
          return null !==
            (b = null === a || void 0 === a ? void 0 : a.fill.color) &&
            void 0 !== b
            ? b
            : "#000000";
        };
        __c.Jcb = function (a, b) {
          const c = new Map();
          b.forEach((d) => {
            if (!c.has(d)) {
              const e = a.get(d);
              c.set(d, __c.H_(e));
            }
          });
          return c;
        };
        __c.I_ = function (a) {
          return new Kcb(a.Qa);
        };
        J_ = function (a) {
          const b = a.Yaa;
          0 !== b &&
            ((a.result += "|=d" + (1 < b ? b : "") + "|"), (a.Yaa = 0));
        };
        K_ = function (a) {
          const b = a.Xfa;
          0 !== b &&
            ((a.result += "|=n" + (1 < b ? b : "") + "|"), (a.Xfa = 0));
        };
        L_ = function (a) {
          const b = a.fga;
          0 !== b &&
            ((a.result += "|=o" + (1 < b ? b : "") + "|"), (a.fga = 0));
        };
        M_ = function (a) {
          return { type: "palette", Qa: a };
        };
        __c.N_ = function (a, b) {
          if ("palette" === a.type) {
            var c = a.Qa,
              d = [];
            const e = new Map();
            let f = !1;
            for (const [g, h] of b.entries())
              (b = e.get(h))
                ? g <= c.length && b === c[g]
                  ? d.push(b)
                  : (d.push(b), (f = !0))
                : g < c.length
                ? ((b = c[g]), d.push(b), e.set(h, b))
                : ((b = G_(Array.from(new Set(d)))),
                  d.push(b),
                  e.set(h, b),
                  (f = !0));
            return f ? M_(d) : a;
          }
          a = [];
          d = new Map();
          for (c of b)
            (b = d.get(c))
              ? a.push(b)
              : ((b = G_(Array.from(new Set(a)))), a.push(b), d.set(c, b));
          return M_(a);
        };
        __c.Lcb = function (a, b) {
          if ("interpolate" === a.type) return (a = Icb([a.from], b)), M_(a);
          if (a.Qa.length === b) return a;
          a = Icb(a.Qa.slice(0, b), b);
          return M_(a);
        };
        __c.P_ = function ({ F: a }) {
          return k_(
            O_(function (b, c) {
              return l_(__c.z_, {
                ref: c,
                ...b,
                fontFamily: a.fontFamily,
                fontSize: b.fontSize || a.fontSize,
                fontWeight: a.fontWeight,
                fontStyle: a.fontStyle,
                fill: a.mj,
              });
            })
          );
        };
        Ncb = function* (a) {
          let b = 0;
          for (let c = 1; c < a.length; c++) {
            const d = a[c - 1],
              e = a[c];
            (Mcb.has(d) || Mcb.has(e)) &&
              d !== e &&
              (yield a.slice(b, c), (b = c));
          }
          yield a.slice(b);
        };
        __c.R_ = function (a) {
          if ("@" === a.format) return { kind: "string" };
          const b = __c.Ocb(a.format);
          return null != b
            ? { kind: "number", format: [b, { df: a.df, Pd: a.Pd }] }
            : {
                kind: "date",
                format: B(
                  __c.Q_(a.format),
                  "Format does not match neither date nor numeric patterns {}",
                  a.format
                ),
              };
        };
        __c.U_ = function (a, b) {
          switch (a.kind) {
            case "string":
              return b.toString();
            case "number":
              const [c, d] = a.format;
              return __c.S_(b, c, d);
            case "date":
              return __c.T_(new Date(b), a.format);
            default:
              throw new E(a);
          }
        };
        __c.V_ = function (a, b, { minLength: c }) {
          return (d) => new Pcb(a, b, d, { minLength: c });
        };
        Qcb = function (a) {
          return a.data.reduce((b, c) => {
            null != c.id && b.set(c.id, c);
            return b;
          }, new W_(a.Cf));
        };
        Rcb = function (a) {
          return a.data.reduce((b, c) => {
            if (null != c.id) {
              const d = c.id;
              b.set(d, {
                Xq: d,
                Xa: c,
                format: null == c.Ea ? void 0 : __c.R_(c.Ea),
              });
            }
            return b;
          }, new W_(a.Cf));
        };
        __c.X_ = function (a, b) {
          const c = b.rb,
            d = b.data;
          b = b.Cf;
          const e = new Set();
          a.fD(c, (h) => e.add(h));
          const f = new Set(),
            g = __c.hX.yD(b);
          d.map((h) => {
            g || null == h.id || e.has(h.id) || (h.id = void 0);
            null != h.id && f.add(h.id);
          });
          a.forEach((h) => h.aqa(c, f));
        };
        Scb = function (a, b, c, d) {
          const e = new Map();
          c.map((g, h) => {
            e.set(h, g);
          });
          c = !1;
          for (const g in a.$d) {
            const h = a.$d[g];
            var f = d.get(g);
            if (null != f)
              switch (h.kind) {
                case "one":
                  f = e.get(f[0]);
                  if (
                    null == (null === f || void 0 === f ? void 0 : f.Ea) ||
                    !h.ME(__c.R_(f.Ea).kind)
                  )
                    break;
                  null == f.id && (f.id = __c.Y_(a.Gb));
                  h.set(b, f.id);
                  c = !0;
                  break;
                case "many":
                  c = f
                    .map((k) => {
                      k = e.get(k);
                      if (
                        null != (null === k || void 0 === k ? void 0 : k.Ea) &&
                        h.ME(__c.R_(k.Ea).kind)
                      )
                        return null == k.id && (k.id = __c.Y_(a.Gb)), k;
                    })
                    .filter(__c.rc)
                    .map((k) => k.id);
                  h.set(b, c);
                  c = !0;
                  break;
                default:
                  throw new E(h);
              }
          }
          return { TKa: c };
        };
        __c.Y_ = function (a = __c.qy) {
          return `${a.now().toString(36).slice(-5)}-${(++Tcb).toString(36)}`;
        };
        Ucb = function (a, b) {
          switch (a.kind) {
            case "number":
              return {
                id: B(b.id),
                kind: "number",
                label: b.label,
                values: b.values.map((c) => {
                  c = c.value;
                  "" !== c
                    ? ((c = Number(c)), (c = Number.isFinite(c) ? c : void 0))
                    : (c = void 0);
                  return c;
                }),
                format: a.format,
              };
            case "date":
              return {
                id: B(b.id),
                kind: "date",
                label: b.label,
                values: b.values.map((c) => {
                  c = c.value;
                  "" !== c
                    ? ((c = new Date(Number(c))),
                      (c = Number.isFinite(c.valueOf()) ? c : void 0))
                    : (c = void 0);
                  return c;
                }),
                format: a.format,
              };
            case "string":
              return {
                id: B(b.id),
                kind: "string",
                label: b.label,
                values: b.values.map((c) => c.value),
              };
            default:
              throw new E(a);
          }
        };
        Vcb = function (a) {
          switch (a.kind) {
            case "string":
              return a.values;
            case "number":
              const [b, c] = a.format;
              return a.values.map((d) =>
                null == d ? void 0 : __c.S_(d, b, c)
              );
            case "date":
              return a.values.map((d) =>
                null == d ? void 0 : __c.T_(d, a.format)
              );
            default:
              throw new E(a);
          }
        };
        Z_ = function (a, b) {
          return b.reduce((c, d) => {
            d = a.get(d);
            null != d && c.push(d);
            return c;
          }, []);
        };
        Wcb = function (a) {
          return Object.entries(a).map(([b, c]) => [b, c]);
        };
        __c.gU.prototype.mD = __c.fa(11, function () {
          var a, b;
          const c =
            null === (b = this.Pm) || void 0 === b
              ? void 0
              : null === (a = b.current) || void 0 === a
              ? void 0
              : a.getBoundingClientRect();
          if (null != c)
            return (a = this.zoom), { top: c.top / a, left: c.left / a };
        });
        __c.GU.prototype.mD = __c.fa(10, function () {
          var a, b;
          const c =
            null === (b = this.Pm) || void 0 === b
              ? void 0
              : null === (a = b.current) || void 0 === a
              ? void 0
              : a.getBoundingClientRect();
          if (null != c)
            return (a = this.zoom), { top: c.top / a, left: c.left / a };
        });
        Vbb = /(-?)([^\-0-9,.]*)([-0-9,.\s]*\d(?:\s*[Ee][+-]?\d+)?)(\D*)/;
        Xcb = /^("[^"]*" *)?([#0,.]+)(E\+0)?( *"[^"]*")?$/;
        Ycb = /^([#0,]*)$/;
        Zcb = /^([#0,.]+?)(,+)$/;
        $cb = /^([#0]+,?[#0]*)?(\.[0#]*)$/;
        adb = /"/g;
        bdb = /0/g;
        __c.Ocb = (a) => {
          const [, b, c = a, d, e] = a.match(Xcb) || [],
            [, f = c, g] = c.match(Zcb) || [];
          a = f.match(Ycb) || f.match($cb);
          if (null != a) {
            var [, h, k] = a;
            return {
              prefix: b ? b.replace(adb, "") : void 0,
              suffix: e ? e.replace(adb, "") : void 0,
              xi: null != g ? g.length : 0,
              FS: h ? h.includes(",") : !1,
              qV: null != d,
              decimal: k
                ? { length: k.length - 1, padding: (k.match(bdb) || []).length }
                : void 0,
              minimumIntegerDigits: h ? (h.match(bdb) || []).length : 0,
            };
          }
        };
        cdb = /^(-?[,0-9]*)(\.[0-9]*)?(e[+-]?[0-9]*)?$/;
        __c.S_ = (
          a,
          {
            prefix: b,
            suffix: c,
            xi: d,
            FS: e,
            qV: f,
            minimumIntegerDigits: g,
            decimal: h = { padding: 0, length: 0 },
          },
          { df: k, Pd: l }
        ) => {
          0 !== d && (a *= 1 / Math.pow(1e3, d));
          d = a
            .toLocaleString("en-US", {
              useGrouping: e,
              minimumIntegerDigits: 0 === g ? void 0 : g,
              minimumFractionDigits: h.padding,
              maximumFractionDigits: Math.max(h.padding, h.length),
              notation: f ? "scientific" : "standard",
            })
            .toLowerCase();
          let [, m, n, p] = B(
            d.match(cdb),
            "Could not parse '{}' from input '{}'",
            d,
            a
          );
          "0" === m && 0 === g
            ? (m = "")
            : "-0" === m && 0 === g && (m = null == n ? "" : "-");
          k && (m = m.replace(/,/g, k));
          null != n && (n = n.slice(1));
          null != p &&
            ((p = p.slice(1)), (p = (0 <= Number(p) ? "e+" : "e") + p));
          a = [];
          b && a.push(b);
          m && a.push(m);
          n && a.push(l + n);
          p && a.push(p);
          c && a.push(c);
          return a.join("");
        };
        __c.$_ = (a) => {
          const b = ({ children: c }) => {
            const d = (0, __c.x7a)(null);
            (0, __c.y7a)(
              () =>
                (0, __c.v7a)(() => {
                  const { vertical: e, horizontal: f } = a(),
                    g = d.current;
                  g && g.setAttribute("transform", `scale(${e}, ${f})`);
                }),
              []
            );
            return (0, __c.dX)("g", { ref: d, children: c });
          };
          b.displayName =
            null != a.name ? `ScaledLayout(${a.name})` : "ScaledLayout";
          return b;
        };
        __c.a0 = class {
          wb() {
            return this.dn(this.Q8());
          }
          get kind() {
            return "linear";
          }
          clone({
            wb: a = this.Q8,
            Tb: b = this.Tb,
            Oc: c = this.Oc,
            dn: d = this.dn,
            bE: e = this.bE,
          } = {}) {
            return new __c.a0({ wb: a, Tb: b, Oc: c, dn: d, bE: e });
          }
          va() {
            const a = this.Q8(),
              b = this.Tb();
            return new __c.a0({
              wb: () => a,
              Tb: () => b,
              Oc: this.Oc,
              dn: this.dn,
              bE: this.bE,
            });
          }
          get(a) {
            const [b, c] = this.Tb(),
              [d, e] = this.wb();
            return b + ((a - d) / (e - d)) * (c - b);
          }
          kr(a = 5) {
            __c.v(0 < a);
            var b = this.bE();
            if (null != b) return b;
            let [c, d] = this.wb();
            b = !1;
            c > d && (([c, d] = [d, c]), (b = !0));
            const { Oi: e, W3: f } = __c.a0.Oi(c, d, a);
            if (0 > f) {
              let g = Math.round(c * e);
              a = Math.round(d * e);
              g / e < c && g++;
              a / e > d && a--;
              a = Array.from({ length: a - g + 1 }).map((h, k) => (g + k) / e);
            } else {
              let g = Math.round(c / e);
              a = Math.round(d / e);
              g * e < c && g++;
              a * e > d && a--;
              a = Array.from({ length: a - g + 1 }).map((h, k) => (g + k) * e);
            }
            b && a.reverse();
            return a;
          }
          static Oi(a, b, c) {
            b = (b - a) / c;
            a = Math.floor(Math.log(b) / Math.LN10);
            b /= 10 ** a;
            b = b >= __c.G7a ? 10 : b >= __c.H7a ? 5 : b >= __c.I7a ? 2 : 1;
            return {
              Oi: 0 > a ? 10 ** -a / b : 10 ** a * b,
              W3: a,
              multiple: b,
            };
          }
          yZ(a, b, c) {
            __c.v(a.index !== b.index);
            const d = (b.center - a.center) / (b.index - a.index);
            return [a.center - d * a.index, b.center + d * (c - b.index - 1)];
          }
          xZ(a, b, c) {
            if (0 !== a.index)
              return [
                b,
                a.center + ((a.center - b) / a.index) * (c - a.index - 1),
              ];
          }
          wZ(a, b, c) {
            if (a.index !== c - 1)
              return [
                a.center - ((b - a.center) / (c - a.index - 1)) * a.index,
                b,
              ];
          }
          constructor({
            wb: a,
            Tb: b,
            Oc: c,
            dn: d = (f) => f,
            bE: e = () => {},
          }) {
            this.Q8 = a;
            this.Tb = b;
            this.Oc = c;
            this.dn = d;
            this.bE = e;
          }
        };
        __c.a0.prototype.Zn = __c.ea(27);
        b0 = __webpack_require__(168949);
        c0 = b0.aD;
        d0 = __c.d0 = b0.Fl;
        e0 = b0.LO;
        ddb = b0.EH;
        edb = b0.U5;
        var fdb = __webpack_require__(785893),
          l_ = fdb.jsx,
          y_ = fdb.jsxs;
        var k_ = __webpack_require__(433581).Pi;
        var f0 = __webpack_require__(667294),
          O_ = f0.forwardRef,
          x_ = f0.useMemo,
          g0 = f0.memo,
          gdb = f0.useRef,
          hdb = f0.useLayoutEffect,
          idb = f0.useEffect;
        var h0 = __webpack_require__(127661).Om;
        var jdb = __webpack_require__(699601).Z;
        var kdb = class {
          static A(a) {
            __c.N(a, { b4: e0.ref, CAa: d0, diff: d0 });
          }
          subscribe() {
            return edb(
              () => this.data.get(),
              () => this.flush(),
              { fireImmediately: !0 }
            );
          }
          flush() {
            const a = this.cra;
            this.cra = this.data.get();
            a && (this.b4 = a);
          }
          clear() {
            this.b4 = [];
            this.cra = void 0;
          }
          get CAa() {
            const a = new Map();
            for (const b of this.b4) {
              const c = this.getKey(b);
              a.set(c, b);
            }
            return a;
          }
          get diff() {
            const a = this.CAa,
              b = this.getKey;
            var c = this.data.get();
            const d = new Map(a),
              e = new Map(),
              f = new Map();
            for (const g of c)
              (c = b(g)), a.get(c) ? (a.delete(c), f.set(c, g)) : e.set(c, g);
            return { enter: e, update: f, exit: a, prev: d };
          }
          constructor(a, b) {
            kdb.A(this);
            this.data = a;
            this.getKey = b;
            this.b4 = [];
          }
        };
        var c_;
        c_ = {
          start: 0,
          end: 1,
          Xe: 0,
          group: (a, b) => b.toString(),
          easing: __c.SL.bra,
          xb: !1,
        };
        p_ = __c.p_ = class {
          static A(a) {
            __c.N(a, {
              Z8: e0.deep,
              Qd: e0.ref,
              ye: e0.ref,
              Rd: e0.ref,
              FE: e0.ref,
              K: e0.shallow,
              Ii: e0.shallow,
              Tj: e0.shallow,
              Zu: d0,
            });
          }
          set mc(a) {
            this.Z8 = Wbb(a);
          }
          get mc() {
            return this.Z8;
          }
          get Zu() {
            var a;
            const b =
              null === (a = this.F.bQ) || void 0 === a ? void 0 : a.get();
            return null != b && 0 !== b;
          }
          constructor({
            ma: a,
            F: b,
            data: c,
            mc: d,
            getKey: e,
            Qd: f,
            ye: g,
            Rd: h,
            Vk: k = f,
            Zo: l = h,
          }) {
            p_.A(this);
            this.FE = !0;
            this.K = new Map();
            this.Ii = new Map();
            this.Tj = new Map();
            this.ma = a;
            this.F = b;
            this.data = c;
            this.Iz = new kdb(c, e);
            this.getKey = e;
            this.Z8 = Wbb(d);
            this.Qd = f;
            this.ye = g;
            this.Rd = h;
            this.Vk = k;
            this.Zo = l;
            const m = b.bQ;
            this.qp =
              null != m
                ? d0(() => {
                    const n = m.get();
                    0 !== n && (this.VUa = 0 >= n ? n + 1 : n);
                    var p;
                    return null !== (p = this.VUa) && void 0 !== p ? p : n;
                  })
                : void 0;
            this.xi = d0(() => b.xi);
          }
        };
        __c.i0 = class {
          Yq(a, b) {
            this.GQ(a);
            const {
              Rm: c,
              content: d,
              placement: e,
              arrow: f,
              key: g,
              rDa: h = 0,
            } = b;
            Xbb(
              a,
              h,
              c0(() => {
                a.open = !0;
                a.position = c;
                a.placement = e;
                a.content = d;
                a.arrow = f;
                a.key = g;
              })
            );
          }
          $k(a) {
            this.GQ(a);
            a.open = !1;
          }
          GQ(a) {
            window.clearTimeout(a.Ke);
          }
        };
        var ldb = class {
          Xta(a, b, c, d, e) {
            e = e(c, d);
            if (!b.Zq)
              return {
                margins: e,
                labels: { QD: [], KD: [], RD: [], LD: [], SD: [], MD: [] },
              };
            b = {
              fontFamily: b.Gf,
              fontSize: b.fontSize,
              fontWeight: b.fontWeight,
            };
            c = { ...b, width: c, height: d };
            d = a.Gj;
            let f;
            d &&
              (f = f_({
                config: d,
                measurements: d_({
                  scale: d.scale,
                  maxWidth: d.vp || Infinity,
                  ...b,
                  qn: this.$a.qn,
                }),
                ...c,
                rotate: !0,
                measureText: this.$a.measureText,
              }));
            d = a.Ck;
            let g;
            d &&
              (g = f_({
                config: d,
                measurements: d_({
                  scale: d.scale,
                  maxWidth: d.vp || Infinity,
                  ...b,
                  qn: this.$a.qn,
                }),
                ...c,
                rotate: !1,
                measureText: this.$a.measureText,
              }));
            a = a.hF;
            let h;
            a &&
              (h = f_({
                config: a,
                measurements: d_({
                  scale: a.scale,
                  maxWidth: a.vp || Infinity,
                  ...b,
                  qn: this.$a.qn,
                }),
                ...c,
                rotate: !1,
                measureText: this.$a.measureText,
              }));
            a = h_(
              [
                null === f || void 0 === f ? void 0 : f.margins,
                null === g || void 0 === g ? void 0 : g.margins,
                null === h || void 0 === h ? void 0 : h.margins,
                e,
              ].filter(__c.rc)
            );
            const { numeric: k, Lq: l } =
                null != f ? g_(f) : { numeric: [], Lq: [] },
              { numeric: m, Lq: n } =
                null != g ? g_(g) : { numeric: [], Lq: [] },
              { numeric: p, Lq: q } =
                null != h ? g_(h) : { numeric: [], Lq: [] };
            return {
              margins: a,
              labels: { QD: k, KD: l, RD: m, LD: n, SD: p, MD: q },
            };
          }
          Rta(a, b, c, d) {
            return b.uh
              ? icb({
                  Gj: a.Gj,
                  Ck: a.Ck,
                  hF: a.hF,
                  width: c,
                  height: d,
                  color: b.mj,
                })
              : { QD: [], KD: [], RD: [], LD: [], SD: [], MD: [] };
          }
          constructor(a) {
            this.$a = a;
          }
        };
        var mdb;
        __c.u_ = (a, b) => {
          const c = (d, e) => {
            const f = gdb(null);
            idb(() => {
              const h = [];
              for (const k of b) {
                const l = d[k],
                  m = edb(
                    () => l.get(),
                    (n) => {
                      const p = f.current;
                      if (null != p)
                        if ("children" === k) p.textContent = n.toString();
                        else {
                          var q = mdb.get(k) || k;
                          p.setAttribute(q, n.toString());
                        }
                    },
                    { fireImmediately: !0 }
                  );
                h.push(m);
              }
              return () => {
                h.forEach((k) => k());
              };
            }, [d]);
            const g = Array.from(b).reduce(
              (h, k) => ({ ...h, [k]: d[k].get() }),
              {}
            );
            return l_(a, { ...d, ...g, ref: jdb(f, e) });
          };
          c.displayName = `AnimatableElement(${
            "string" === typeof a ? a : a.displayName || a.name || "Component"
          })`;
          return g0(O_(c));
        };
        mdb = new Map([
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeWidth", "stroke-width"],
          ["fontSize", "font-size"],
          ["textAnchor", "text-anchor"],
          ["letterSpacing", "letter-spacing"],
          ["strokeOpacity", "stroke-opacity"],
          ["fillOpacity", "fill-opacity"],
        ]);
        var ndb = g0(({ BS: { start: a, end: b, color: c } }) =>
            l_("g", {
              children: l_("line", {
                x1: a.x,
                x2: b.x,
                y1: a.y,
                y2: b.y,
                stroke: __c.bw(c),
                strokeWidth: 1,
              }),
            })
          ),
          lcb = ({ Xf: a }) =>
            l_("g", { children: a.map((b) => l_(ndb, { BS: b }, b.key)) }),
          odb = __c.u_("line", new Set(["x1", "x2", "y1", "y2", "stroke"])),
          mcb = ({ sb: a }) =>
            l_(a, { children: ({ gh: b, key: c }) => l_(pdb, { ...b }, c) }),
          pdb = g0(
            ({ yC: a, xC: b, Ca: c, Ba: d, Yi: e, Zi: f, En: g, Fn: h }) => {
              const k = d0(() =>
                __c.bw(new __c.Sv(a.get(), b.get(), c.get(), d.get()))
              );
              return l_(odb, {
                x1: e,
                x2: g,
                y1: f,
                y2: h,
                stroke: k,
                strokeWidth: 1,
              });
            }
          );
        var ncb = ({ labels: a, Oe: b, cd: c, Ib: d }) =>
            l_("g", {
              children: a.map(
                ({
                  textAnchor: e,
                  dominantBaseline: f,
                  zj: g,
                  text: h,
                  tooltip: k,
                  key: l,
                  kE: m,
                  axis: n,
                  value: p,
                }) => {
                  const { x: q, y: r } = m(n.scale.get(p), g);
                  return l_(
                    b,
                    {
                      textAnchor: e,
                      dominantBaseline: f,
                      transform: `translate(${q}, ${r}) rotate(${g})`,
                      onMouseEnter:
                        k && c
                          ? (t) =>
                              c(k, {
                                wv: t.currentTarget.getBoundingClientRect(),
                                key: l,
                                zj: g,
                              })
                          : void 0,
                      onMouseLeave: k ? d : void 0,
                      children: h,
                    },
                    l
                  );
                }
              ),
            }),
          ocb = ({ labels: a, Oe: b, cd: c, Ib: d }) =>
            l_("g", {
              children: a.map(
                ({
                  textAnchor: e,
                  dominantBaseline: f,
                  x: g,
                  y: h,
                  zj: k,
                  text: l,
                  tooltip: m,
                  key: n,
                }) =>
                  l_(
                    b,
                    {
                      textAnchor: e,
                      dominantBaseline: f,
                      transform: `translate(${g}, ${h}) rotate(${k})`,
                      onMouseEnter:
                        m && c
                          ? (p) =>
                              c(m, {
                                wv: p.currentTarget.getBoundingClientRect(),
                                key: n,
                                zj: k,
                              })
                          : void 0,
                      onMouseLeave: m ? d : void 0,
                      children: l,
                    },
                    n
                  )
              ),
            }),
          tcb = ({ sb: a, Er: b, cd: c, Ib: d }) =>
            l_(a, {
              children: ({ gh: e, key: f, ci: g }) =>
                l_(qdb, { Er: b, cd: c, Ib: d, label: g, ...e }, f),
            }),
          qdb = g0(
            ({
              label: {
                textAnchor: a,
                dominantBaseline: b,
                text: c,
                key: d,
                tooltip: e,
              },
              Er: f,
              cd: g,
              Ib: h,
              x: k,
              y: l,
              rotation: m,
              fontSize: n,
              opacity: p,
            }) => {
              const q = d0(
                () => `translate(${k.get()}, ${l.get()}) rotate(${m.get()})`
              );
              return l_(
                f,
                {
                  textAnchor: a,
                  dominantBaseline: b,
                  transform: q,
                  fontSize: n,
                  opacity: p,
                  onMouseEnter:
                    e && g
                      ? (r) =>
                          g(e, {
                            wv: r.currentTarget.getBoundingClientRect(),
                            key: d,
                            zj: m.get(),
                          })
                      : void 0,
                  onMouseLeave: e ? h : void 0,
                  children: c,
                },
                d
              );
            }
          );
        var rdb = class {
          Xta(a, b, c, d, e) {
            if (!b.Zq)
              return {
                margins: e(c, d),
                labels: { QD: [], KD: [], RD: [], LD: [], SD: [], MD: [] },
              };
            const f = b.Gf,
              g = b.fontSize;
            b = b.fontWeight;
            const h = { fontFamily: f, fontSize: g, fontWeight: b };
            var k = { ...h, width: c, height: d };
            const l = a.Gj;
            let m;
            l &&
              (m = d_({
                scale: l.scale,
                maxWidth: Math.min(l.vp || Infinity, c),
                ...h,
                qn: this.$a.qn,
              }));
            const n = a.Ck;
            let p, q;
            n &&
              ((p = d_({
                scale: n.scale,
                maxWidth: Math.min(n.vp || Infinity, c),
                ...h,
                qn: this.$a.qn,
              })),
              (q = f_({
                config: n,
                measurements: p,
                ...k,
                rotate: !1,
                measureText: this.$a.measureText,
              })));
            a = a.hF;
            let r, t;
            a &&
              ((r = d_({
                scale: a.scale,
                maxWidth: Math.min(a.vp || Infinity, c),
                ...h,
                qn: this.$a.qn,
              })),
              (t = f_({
                config: a,
                measurements: r,
                ...k,
                rotate: !1,
                measureText: this.$a.measureText,
              })));
            k = h_(
              [
                null === q || void 0 === q ? void 0 : q.margins,
                null === t || void 0 === t ? void 0 : t.margins,
              ].filter(__c.rc)
            );
            let u = ucb({
                Gj: null != l && null != m ? { mX: l, nX: m } : void 0,
                width: c,
                height: d,
                pX: k,
                WL: e,
              }),
              w;
            l &&
              m &&
              (w = f_({
                config: l,
                measurements: m,
                width: u,
                height: d,
                ...h,
                rotate: !1,
                measureText: this.$a.measureText,
              }));
            null != w &&
              0 < w.Xx.size &&
              l &&
              m &&
              ({ axis: w, width: u } = wcb({
                mX: l,
                nX: m,
                width: c,
                height: d,
                pX: k,
                WL: e,
                fontFamily: f,
                fontSize: g,
                fontWeight: b,
                measureText: this.$a.measureText,
              }));
            n &&
              p &&
              (q = f_({
                config: n,
                measurements: p,
                width: u,
                height: d,
                fontFamily: f,
                fontSize: g,
                fontWeight: b,
                rotate: !1,
                measureText: this.$a.measureText,
              }));
            a &&
              r &&
              (t = f_({
                config: a,
                measurements: r,
                width: u,
                height: d,
                fontFamily: f,
                fontSize: g,
                fontWeight: b,
                rotate: !1,
                measureText: this.$a.measureText,
              }));
            c = h_(
              [
                null === w || void 0 === w ? void 0 : w.margins,
                null === q || void 0 === q ? void 0 : q.margins,
                null === t || void 0 === t ? void 0 : t.margins,
                e(u, d),
              ].filter(__c.rc)
            );
            const { numeric: x, Lq: z } =
                null != w ? g_(w) : { numeric: [], Lq: [] },
              { numeric: A, Lq: D } =
                null != q ? g_(q) : { numeric: [], Lq: [] },
              { numeric: C, Lq: H } =
                null != t ? g_(t) : { numeric: [], Lq: [] };
            return {
              margins: c,
              labels: { QD: x, KD: z, RD: A, LD: D, SD: C, MD: H },
            };
          }
          Rta(a, b, c, d) {
            return b.uh
              ? icb({
                  Gj: a.Gj,
                  Ck: a.Ck,
                  hF: a.hF,
                  width: c,
                  height: d,
                  color: b.mj,
                })
              : { QD: [], KD: [], RD: [], LD: [], SD: [], MD: [] };
          }
          constructor(a) {
            this.$a = a;
          }
        };
        __c.j0 = ({
          F: a,
          kK: b,
          dh: c,
          Db: d,
          $a: e,
          width: f,
          height: g,
          Ac: h,
          Oa: k,
          WL: l = () => Qu,
        }) => {
          const m = a.mf ? new rdb(e) : new ldb(e),
            n = d0(() =>
              m.Xta(b, a, f.get(), g.get(), (Xb, Ya) => l(Xb, Ya, a.mf))
            );
          e = d0(() => n.get().labels.QD);
          const p = d0(() => n.get().labels.KD),
            q = d0(() => n.get().labels.RD),
            r = d0(() => n.get().labels.LD),
            t = d0(() => n.get().labels.SD),
            u = d0(() => n.get().labels.MD),
            w = d0(() => n.get().margins),
            x = d0(() => {
              const { left: Xb, right: Ya } = w.get();
              return a.mf ? f.get() - Xb - Ya : f.get();
            }),
            z = d0(() => {
              const { top: Xb, bottom: Ya } = w.get();
              return a.L5 ? g.get() - Xb - Ya : g.get();
            }),
            A = d0(() => m.Rta(b, a, x.get(), z.get())),
            D = d0(() => A.get().QD),
            C = d0(() => A.get().KD),
            H = d0(() => A.get().RD),
            I = d0(() => A.get().LD),
            M = d0(() => A.get().SD),
            K = d0(() => A.get().MD),
            O = c ? new __c.i0() : void 0;
          var S =
            c && O
              ? c0((Xb, { wv: Ya, key: Yb, zj: $c }) => {
                  const vb = a.mD();
                  if (null != vb) {
                    var vc = a.zoom,
                      Mb = Ya.width / vc,
                      gc = Ya.height / vc,
                      vf = Ya.left / vc - vb.left;
                    Ya = Ya.top / vc - vb.top;
                    O.Yq(c, {
                      content: Xb,
                      Rm:
                        0 === $c
                          ? { top: Ya, left: vf, width: Mb, height: gc }
                          : {
                              top: Ya + gc / 2,
                              left: vf + Mb / 2,
                              width: 0,
                              height: 0,
                            },
                      placement: "top-center",
                      arrow: !0,
                      key: Yb,
                    });
                  }
                })
              : void 0;
          const W =
            c && O
              ? c0(() => {
                  O.$k(c);
                })
              : void 0;
          d = { Oe: d, cd: S, Ib: W };
          let X, aa, ca, na, oa, ha, V, ja, va, Ta, ub, Ba;
          if (h && !__c.gs()) {
            var ab, Lb, Dc, bc;
            S = d0(() => [w.get()]);
            S = new p_({
              mc: {
                enter: {
                  top: { value: (vb) => vb.top },
                  left: { value: (vb) => vb.left },
                  right: { value: (vb) => vb.right },
                  bottom: { value: (vb) => vb.bottom },
                },
                update: {
                  top: {
                    value: (vb, vc) => {
                      var Mb;
                      return Math.max(
                        vb.top,
                        null !==
                          (ab =
                            null === (Mb = a_(vc.prev.values())) ||
                            void 0 === Mb
                              ? void 0
                              : Mb.top) && void 0 !== ab
                          ? ab
                          : 0
                      );
                    },
                  },
                  left: {
                    value: (vb, vc) => {
                      var Mb;
                      return Math.max(
                        vb.left,
                        null !==
                          (Lb =
                            null === (Mb = a_(vc.prev.values())) ||
                            void 0 === Mb
                              ? void 0
                              : Mb.left) && void 0 !== Lb
                          ? Lb
                          : 0
                      );
                    },
                  },
                  right: {
                    value: (vb, vc) => {
                      var Mb;
                      return Math.max(
                        vb.right,
                        null !==
                          (Dc =
                            null === (Mb = a_(vc.prev.values())) ||
                            void 0 === Mb
                              ? void 0
                              : Mb.right) && void 0 !== Dc
                          ? Dc
                          : 0
                      );
                    },
                  },
                  bottom: {
                    value: (vb, vc) => {
                      var Mb;
                      return Math.max(
                        vb.bottom,
                        null !==
                          (bc =
                            null === (Mb = a_(vc.prev.values())) ||
                            void 0 === Mb
                              ? void 0
                              : Mb.bottom) && void 0 !== bc
                          ? bc
                          : 0
                      );
                    },
                  },
                },
                exit: {
                  top: { value: (vb) => vb.top },
                  left: { value: (vb) => vb.left },
                  right: { value: (vb) => vb.right },
                  bottom: { value: (vb) => vb.bottom },
                },
                Te: { top: !0, left: !0, right: !0, bottom: !0 },
              },
              data: S,
              ma: h,
              F: a,
              Qd: 0,
              ye: 0,
              Rd: 0,
              getKey: () => "margins",
              Vk: 0,
              Zo: 0,
            });
            const { kla: Xb } = k(S);
            function Ya() {
              const vb = Xb(),
                vc = x_(
                  () =>
                    d0(() => {
                      var Mb;
                      return null === (Mb = vb.get().at(0)) || void 0 === Mb
                        ? void 0
                        : Mb.gh;
                    }),
                  [vb]
                );
              return x_(
                () =>
                  e0({
                    get top() {
                      var Mb, gc;
                      return null !==
                        (gc =
                          null === (Mb = vc.get()) || void 0 === Mb
                            ? void 0
                            : Mb.top.get()) && void 0 !== gc
                        ? gc
                        : 0;
                    },
                    get left() {
                      var Mb, gc;
                      return null !==
                        (gc =
                          null === (Mb = vc.get()) || void 0 === Mb
                            ? void 0
                            : Mb.left.get()) && void 0 !== gc
                        ? gc
                        : 0;
                    },
                    get right() {
                      var Mb, gc;
                      return null !==
                        (gc =
                          null === (Mb = vc.get()) || void 0 === Mb
                            ? void 0
                            : Mb.right.get()) && void 0 !== gc
                        ? gc
                        : 0;
                    },
                    get bottom() {
                      var Mb, gc;
                      return null !==
                        (gc =
                          null === (Mb = vc.get()) || void 0 === Mb
                            ? void 0
                            : Mb.bottom.get()) && void 0 !== gc
                        ? gc
                        : 0;
                    },
                  }),
                [vc]
              );
            }
            function Yb({ children: vb }) {
              const vc = Ya(),
                Mb = x_(
                  () =>
                    __c.b_(function () {
                      const gc = a.Be;
                      return {
                        width: vc.left + a.aq + vc.right,
                        height: gc.top + a.$p + gc.bottom,
                        left: -vc.left,
                        top: -gc.top,
                      };
                    }),
                  [vc]
                );
              return l_(Mb, { children: vb });
            }
            function $c({ children: vb }) {
              const vc = Ya(),
                Mb = x_(
                  () =>
                    __c.b_(function () {
                      const gc = a.Be;
                      return {
                        width: gc.left + a.aq + gc.right,
                        height: vc.top + a.$p + vc.bottom,
                        left: -gc.left,
                        top: -vc.top,
                      };
                    }),
                  [vc]
                );
              return l_(Mb, { children: vb });
            }
            h = { F: a, ma: h, Oa: k };
            k = { ...d, ...h };
            X = v_({ ...k, Mt: $c, labels: e });
            aa = w_({ ...k, labels: p });
            ca = v_({ ...k, Mt: Yb, labels: q });
            na = w_({ ...k, labels: r });
            oa = v_({ ...k, Mt: Yb, labels: t });
            ha = w_({ ...k, labels: u });
            V = q_({ ...h, Xf: D, Mt: $c });
            ja = r_({ ...h, Xf: C });
            va = q_({ ...h, Xf: H, Mt: Yb });
            Ta = r_({ ...h, Xf: I });
            ub = q_({ ...h, Xf: M, Mt: Yb });
            Ba = r_({ ...h, Xf: K });
          } else
            (X = s_({ ...d, labels: e })),
              (aa = t_({ ...d, labels: p })),
              (ca = s_({ ...d, labels: q })),
              (na = t_({ ...d, labels: r })),
              (oa = s_({ ...d, labels: t })),
              (ha = t_({ ...d, labels: u })),
              (V = m_({ Xf: D })),
              (ja = m_({ Xf: C })),
              (va = m_({ Xf: H })),
              (Ta = m_({ Xf: I })),
              (ub = m_({ Xf: M })),
              (Ba = m_({ Xf: K }));
          return {
            mC: w,
            Ql: g0(function () {
              return y_("g", {
                children: [
                  l_(X, {}),
                  l_(aa, {}),
                  l_(ca, {}),
                  l_(na, {}),
                  l_(oa, {}),
                  l_(ha, {}),
                  l_(V, {}),
                  l_(ja, {}),
                  l_(va, {}),
                  l_(Ta, {}),
                  l_(ub, {}),
                  l_(Ba, {}),
                ],
              });
            }),
            qo: x,
            vj: z,
          };
        };
        var sdb;
        __c.z_ = g0(
          O_(function (
            {
              textAnchor: a = "start",
              dominantBaseline: b = "hanging",
              fill: c,
              fontWeight: d,
              ...e
            },
            f
          ) {
            return l_("text", {
              ref: f,
              className: "tVQpqQ",
              textAnchor: a,
              dominantBaseline: b,
              fill: c,
              style: { color: c },
              textRendering: "geometricPrecision",
              onDragStart: sdb,
              fontWeight: null != d ? __c.Ez(d) : void 0,
              ...e,
            });
          })
        );
        sdb = (a) => a.preventDefault();
        var ycb = {
            hint: "rgb(255, 255, 255)",
            info: "var(--pYULlw)",
            error: "var(--1MO0IQ)",
          },
          xcb = {
            hint: "rgb(13, 18, 22)",
            info: "var(--v7HVIg)",
            error: "var(--fs4QpA)",
          },
          zcb = { hint: 0.8, info: 1, error: 1 };
        var Bcb = [
            [
              0, 14.89, 28.63, 42.27, 55.88, 69.51, 83.17, 96.85, 110.54,
              124.24, 137.96, 147.68, 122.56, 100.68, 81.45, 64.37, 49.06,
              35.22, 22.61, 11.04, 0,
            ],
            [
              0, 14.28, 27.31, 40.23, 53.12, 66.04, 78.98, 91.94, 104.92,
              117.92, 130.92, 143.94, 144.94, 115.65, 91.5, 71.07, 53.43, 37.95,
              24.15, 11.71, 0,
            ],
            [
              0, 8.85, 16.92, 24.91, 32.89, 40.88, 48.89, 56.91, 64.94, 72.98,
              81.03, 89.09, 97.14, 105.21, 113.27, 89.06, 65.73, 46.01, 28.94,
              13.9, 0,
            ],
            [
              0, 6.91, 13.19, 19.42, 25.63, 31.86, 38.1, 44.35, 50.61, 56.88,
              63.15, 69.43, 75.71, 81.99, 88.27, 94.56, 97.81, 66.71, 41.14,
              19.46, 0,
            ],
            [
              0, 6.15, 11.75, 17.29, 22.83, 28.38, 33.94, 39.5, 45.08, 50.66,
              56.24, 61.83, 67.43, 73.02, 78.62, 84.22, 89.82, 95.42, 85.6,
              38.71, 0,
            ],
            [
              0, 6.09, 11.62, 17.1, 22.57, 28.06, 33.55, 39.05, 44.57, 50.08,
              55.61, 61.13, 66.66, 72.19, 77.72, 83.26, 88.8, 94.33, 99.87,
              105.41, 0,
            ],
            [
              0, 6.67, 12.72, 18.72, 24.72, 30.72, 36.73, 42.76, 48.79, 54.83,
              60.87, 66.92, 72.98, 79.03, 85.09, 91.15, 97.21, 103.27, 109.33,
              71.78, 0,
            ],
            [
              0, 8.27, 15.77, 23.2, 30.62, 38.05, 45.5, 52.96, 60.43, 67.91,
              75.4, 82.89, 90.39, 97.89, 105.39, 112.89, 120.4, 127.91, 109.4,
              49.17, 0,
            ],
            [
              0, 5.89, 11.28, 16.62, 21.95, 27.29, 32.64, 38.01, 43.37, 48.75,
              54.12, 59.5, 64.89, 70.27, 75.66, 81.05, 86.44, 91.83, 86.85,
              40.4, 0,
            ],
            [
              0, 4.72, 9.07, 13.38, 17.68, 21.99, 26.31, 30.63, 34.96, 39.29,
              43.63, 47.97, 52.31, 56.65, 61, 65.34, 69.69, 74.04, 78.36, 37.39,
              0,
            ],
            [
              0, 4.29, 8.26, 12.19, 16.12, 20.06, 24, 27.95, 31.9, 35.85, 39.81,
              43.77, 47.73, 51.69, 55.66, 59.62, 63.59, 67.56, 71.53, 38.28, 0,
            ],
            [
              0, 4.32, 8.33, 12.31, 16.28, 20.26, 24.24, 28.23, 32.23, 36.22,
              40.22, 44.23, 48.23, 52.24, 56.24, 60.25, 64.26, 68.27, 63.29,
              31.5, 0,
            ],
            [
              0, 4.83, 9.33, 13.79, 18.25, 22.71, 27.18, 31.66, 36.14, 40.62,
              45.11, 49.6, 54.09, 58.59, 63.08, 67.57, 72.07, 57.9, 38.16,
              19.05, 0,
            ],
            [
              0, 6.16, 11.92, 17.65, 23.36, 29.08, 34.81, 40.55, 46.29, 52.04,
              57.79, 63.54, 69.3, 75.05, 80.81, 75.69, 59.99, 44.5, 29.38,
              14.68, 0,
            ],
            [
              0, 9.81, 19.1, 28.33, 37.55, 46.78, 56.01, 65.26, 74.52, 83.78,
              93.04, 102.31, 106.44, 93.72, 80.32, 66.61, 52.86, 39.26, 25.94,
              12.98, 0,
            ],
            [
              0, 18.82, 37.07, 55.25, 73.43, 91.61, 109.8, 128, 133.9, 130.54,
              123.87, 114.67, 103.66, 91.43, 78.47, 65.16, 51.77, 38.49, 25.46,
              12.75, 0,
            ],
            [
              0, 14.02, 27.43, 40.78, 54.11, 67.44, 80.79, 94.15, 107.52, 120.9,
              132.88, 123.28, 111.66, 98.67, 84.82, 70.54, 56.11, 41.77, 27.65,
              13.86, 0,
            ],
            [
              0, 12.12, 23.61, 35.03, 46.43, 57.85, 69.27, 80.71, 92.16, 103.61,
              115.08, 126.54, 135.37, 119.9, 103.3, 86.06, 68.58, 51.12, 33.89,
              17, 0,
            ],
            [
              0, 11.68, 22.67, 33.58, 44.48, 55.39, 66.31, 77.24, 88.19, 99.14,
              110.1, 121.07, 121.39, 104.66, 88.08, 71.9, 56.28, 41.32, 27.03,
              13.41, 0,
            ],
            [
              0, 12.45, 24.06, 35.59, 47.11, 58.63, 70.18, 81.74, 93.31, 104.88,
              116.47, 128.06, 116, 97.61, 80.49, 64.6, 49.86, 36.17, 23.42,
              11.52, 0,
            ],
            [
              0, 14.89, 28.63, 42.27, 55.88, 69.51, 83.17, 96.85, 110.54,
              124.24, 137.96, 147.68, 122.56, 100.68, 81.45, 64.37, 49.06,
              35.22, 22.61, 11.04, 0,
            ],
          ],
          Gcb = [
            20, 20, 40, 50, 50, 50, 40, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
            20, 20, 20, 20,
          ],
          Hcb = [
            30, 30, 50, 70, 70, 70, 50, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30,
          ];
        var D_ = class {
          constructor(a, b, c) {
            this.h = a;
            this.c = b;
            this.aa = c;
          }
        };
        var udb, tdb, Kcb;
        udb = class {
          PE(a) {
            return new tdb(a).encode();
          }
          RO(a) {
            var b;
            return d0(
              () =>
                null !== (b = a.fill.color) && void 0 !== b ? b : "#000000",
              {
                set: (c) => {
                  a.fill.color = c;
                },
              }
            );
          }
          constructor() {
            this.color = (a) => ({ fill: { ...__c.ZJ, color: a } });
          }
        };
        tdb = class {
          encode() {
            if (this.Jsa) throw Error("already ran");
            const a = this.key;
            this.Jsa = !0;
            const b = Math.min(a.length, 250);
            for (let c = 0; c < b; c++) {
              const d = a[c];
              switch (d) {
                case ".":
                  ++this.fga;
                  J_(this);
                  K_(this);
                  break;
                case "\x00":
                  ++this.Xfa;
                  L_(this);
                  J_(this);
                  break;
                case "$":
                  ++this.Yaa;
                  L_(this);
                  K_(this);
                  break;
                default:
                  L_(this), J_(this), K_(this), (this.result += d);
              }
            }
            L_(this);
            J_(this);
            K_(this);
            return ("_" + this.result).slice(0, 254);
          }
          constructor(a) {
            this.key = a;
            this.Jsa = !1;
            this.Xfa = this.Yaa = this.fga = 0;
            this.result = "";
          }
        };
        __c.k0 = new udb();
        Kcb = class {
          has(a) {
            return this.m.has(a);
          }
          set(a, b) {
            this.m.set(a, b);
          }
          get(a) {
            return this.m.get(a);
          }
          delete(a) {
            this.m.delete(a);
          }
          map(a) {
            return [...this.m.entries()].map(([b, c]) => a(b, c));
          }
          entries() {
            return this.m.entries();
          }
          constructor(a) {
            this.m = a;
          }
        };
        __c.l0 = (a) => {
          const b = ({ children: c }) => {
            const d = gdb(null);
            hdb(
              () =>
                ddb(() => {
                  const { top: e, left: f } = a(),
                    g = d.current;
                  g && g.setAttribute("transform", `translate(${f}, ${e})`);
                }),
              []
            );
            return l_("g", { ref: d, children: c });
          };
          b.displayName =
            null != a.name ? `PositionedLayout(${a.name})` : "PositionedLayout";
          return b;
        };
        var Mcb, vdb, wdb;
        Mcb = new Set("ymdhs0".split(""));
        vdb = /^("[^"]*")?((?:[,.\-:/ ZTymdhs]|000)+)(am\/pm)?("[^"]*")?$/i;
        wdb = /"/g;
        __c.Q_ = (a) => {
          const [, b, c, d, e] = a.match(vdb) || [];
          if (null != c) {
            a = Array.from(Ncb(c));
            d && a.push("am/pm");
            var f = b ? b.replace(wdb, "") : void 0;
            const h = [];
            for (let k = 0; k < a.length; k += 2) {
              var g = a[k];
              const l = a[k + 1];
              switch (g) {
                case "ddd":
                case "dddd":
                  h.push({
                    kind: "weekday",
                    format: "ddd" === g ? "short" : "long",
                    separator: l,
                  });
                  break;
                case "mmm":
                case "mmmm":
                  h.push({
                    kind: "month",
                    format: "mmm" === g ? "short" : "long",
                    separator: l,
                  });
                  break;
                case "yy":
                case "yyyy":
                  h.push({
                    kind: "year",
                    format: "yy" === g ? "2-digit" : "numeric",
                    separator: l,
                  });
                  break;
                case "d":
                case "dd":
                  h.push({
                    kind: "day",
                    format: "dd" === g ? "2-digit" : "numeric",
                    separator: l,
                  });
                  break;
                case "h":
                case "hh":
                  h.push({
                    kind: "hour",
                    format: "hh" === g ? "2-digit" : "numeric",
                    separator: l,
                  });
                  break;
                case "m":
                case "mm":
                  g = "mm" === g ? "2-digit" : "numeric";
                  const m = h[h.length - 1];
                  null != m && "hour" === m.kind
                    ? h.push({ kind: "minute", format: g, separator: l })
                    : h.push({ kind: "month", format: g, separator: l });
                  break;
                case "s":
                case "ss":
                  h.push({
                    kind: "second",
                    format: "ss" === g ? "2-digit" : "numeric",
                    separator: l,
                  });
                  break;
                case "000":
                  h.push({
                    kind: "millisecond",
                    format: "3-digit",
                    separator: l,
                  });
                  break;
                case "am/pm":
                  h.push({ kind: "ampm", separator: l });
                  break;
                default:
                  throw Error(`Invalid date component format '${g}'`);
              }
            }
            return {
              prefix: f,
              De: h,
              suffix: e ? e.replace(wdb, "") : void 0,
            };
          }
        };
        __c.T_ = (a, { prefix: b = "", suffix: c = "", De: d }) => {
          var e = new Set(d.map((g) => g.kind));
          __c.y(
            e.size === d.length,
            "Duplicated date components are not supported"
          );
          e = d.reduce(
            (g, h) => {
              switch (h.kind) {
                case "year":
                case "day":
                  g[h.kind] = h.format;
                  break;
                case "weekday":
                  g[h.kind] = h.format;
                  break;
                case "hour":
                case "minute":
                case "second":
                  g[h.kind] = h.format;
                  break;
                case "month":
                  g[h.kind] = h.format;
                  break;
                case "millisecond":
                  g.fractionalSecondDigits = 3;
                  break;
                case "ampm":
                  g.hour12 = !0;
                  break;
                default:
                  throw new E(h);
              }
              return g;
            },
            { hour12: !1 }
          );
          const f = new Intl.DateTimeFormat("en", e)
            .formatToParts(a)
            .reduce((g, h) => {
              g.set(h.type, h.value);
              return g;
            }, new Map());
          a = d.map((g) => {
            a: {
              var h = g.kind;
              switch (h) {
                case "year":
                case "day":
                case "weekday":
                case "hour":
                case "minute":
                case "second":
                case "month":
                  h = f.get(h);
                  break a;
                case "millisecond":
                  h = f.get("fractionalSecond");
                  break a;
                case "ampm":
                  h = f.get("dayPeriod");
                  break a;
                default:
                  throw new E(h);
              }
            }
            return (
              B(h, 'Could not find a locale config for "{}"', g.kind) +
              (g.separator || "")
            );
          });
          return b + a.join("") + c;
        };
        "yyyy-mm-ddThh:mm:ss.000Z;yyyy-mm-dd hh:mm:ss.000;yyyy-mm-dd hh:mm:ss;yyyy-mm-dd hh:mm;dd/mm/yy;dd/mm/yyyy;mm/dd/yy;mm/dd/yyyy;yyyy/mm/dd;dd-mm-yy;dd-mm-yyyy;mm-dd-yy;mm-dd-yyyy;dd.mm.yy;dd.mm.yyyy;yyyy-mm-dd;dd mmm yy;dd mmm yyyy;dd mmmm yy;dd mmmm yyyy;dd-mmm-yy;dd-mmm-yyyy;dd-mmmm-yy;dd-mmmm-yyyy;mm/yy;mm/yyyy;mmm yy;mmm yyyy;mmmm yy;mmmm yyyy;dd mmm;dd mmmm;mmm dd;mmmm dd;dd-mm;mm-dd;dd/mm;mm/dd;yyyy;mmmm;mmm;h:mm:ss am/pm;hh:mm am/pm;h am/pm;hh:mm;hh:mm:ss"
          .split(";")
          .map((a) => B(__c.Q_(a)));
        var xdb, Pcb, ydb, Tcb, W_;
        xdb = class {
          get kind() {
            return "one";
          }
          map(a, b) {
            a = this.get(a);
            return null != a ? b(a) : void 0;
          }
          fD(a, b) {
            a = this.get(a);
            null != a && b(a);
          }
          Xa(a, b) {
            a = this.get(a);
            if (null != a) return b.get(a);
          }
          values(a, b) {
            a = this.get(a);
            if (null != a && ((b = b.get(a)), null != b))
              return (a = B(b.format)), this.ME(a.kind) ? Ucb(a, b.Xa) : void 0;
          }
          validate(a) {
            if (null == a)
              return this.required ? (0, __c.Ia)([{ kind: 1, e4a: 1 }]) : Ha();
            const b = a.Xq;
            a = a.format;
            return null != a && this.ME(a.kind)
              ? Ha()
              : (0, __c.Ia)([{ kind: 2, yCa: [b] }]);
          }
          ME(a) {
            return this.$aa.has(a);
          }
          aqa(a, b) {
            this.fD(a, (c) => {
              b.has(c) || this.set(a, void 0);
            });
          }
          constructor(a, b, c, { required: d }) {
            this.get = a;
            this.set = b;
            this.required = d;
            this.$aa = new Set(c);
          }
        };
        Pcb = class {
          get kind() {
            return "many";
          }
          map(a, b) {
            return this.get(a).map(b);
          }
          fD(a, b) {
            this.get(a).forEach((c) => b(c));
          }
          Xa(a, b) {
            a = this.get(a);
            return Z_(b, a);
          }
          values(a, b) {
            a = this.get(a);
            return Z_(b, a).reduce((c, d) => {
              const e = B(d.format);
              this.ME(e.kind) && ((d = Ucb(e, d.Xa)), c.push(d));
              return c;
            }, []);
          }
          validate(a) {
            var b = a.filter(({ format: c }) => null == c || !this.ME(c.kind));
            a = this.minLength - a.length;
            b = [
              0 < a && { kind: 1, e4a: a },
              0 < b.length && { kind: 2, yCa: b.map((c) => c.Xq) },
            ].filter((c) => !!c);
            return 0 === b.length ? Ha() : (0, __c.Ia)(b);
          }
          ME(a) {
            return this.$aa.has(a);
          }
          aqa(a, b) {
            let c = !1;
            const d = [];
            this.fD(a, (e) => {
              b.has(e) ? d.push(e) : (c = !0);
            });
            c && this.set(a, d);
          }
          constructor(a, b, c, { minLength: d }) {
            this.get = a;
            this.set = b;
            this.minLength = d;
            this.$aa = new Set(c);
          }
        };
        ydb = class {
          one(a, b, { required: c }) {
            return (d) => new xdb(a, b, d, { required: c });
          }
        };
        __c.m0 = class {
          static create() {
            return (a, b) => {
              var c;
              return new __c.m0(
                a(new ydb()),
                b,
                null !== (c = b.Gb) && void 0 !== c ? c : __c.qy
              );
            };
          }
          fD(a, b) {
            Object.values(this.$d).forEach((c) => c.fD(a, b));
          }
          forEach(a) {
            Object.values(this.$d).forEach((b) => a(b));
          }
          init(a, b) {
            var c,
              d,
              e = a.rb;
            const f = a.data,
              g = b.action.mbb,
              h = __c.hX.yD(a.Cf);
            e = null != g && !h && Scb(this, e, f, g).TKa;
            null === (c = (d = this.config).init) || void 0 === c
              ? void 0
              : c.call(d, a, { ui: b.ui || h || e, action: b.action });
          }
          constructor(a, b, c) {
            this.$d = a;
            this.config = b;
            this.Gb = c;
            this.gA = h0((d) => {
              const e = d.rb;
              d = Qcb(d);
              const f = {};
              for (const g in this.$d) {
                const h = this.$d[g];
                switch (h.kind) {
                  case "one":
                    f[g] = h.Xa(e, d);
                    break;
                  case "many":
                    f[g] = h.Xa(e, d);
                    break;
                  default:
                    throw new E(h);
                }
              }
              return f;
            });
            this.Wta = h0((d) => {
              const e = new W_(d.Cf),
                f = d.rb;
              d.data.map((g, h) => {
                null != g.id && e.set(g.id, h);
              });
              d = new Map();
              for (const g in this.$d) {
                const h = [];
                this.$d[g].fD(f, (k) => {
                  k = e.get(k);
                  null != k && h.push(k);
                });
                d.set(g, h);
              }
              return d;
            });
            this.mSa = h0((d) => {
              const e = d.rb;
              d = Rcb(d);
              const f = {};
              for (const g in this.$d) f[g] = this.$d[g].values(e, d);
              return f;
            });
            this.iRa = h0((d) =>
              ee(d, (e) =>
                Array.isArray(e)
                  ? e.map((f) => Vcb(f))
                  : null == e
                  ? void 0
                  : Vcb(e)
              )
            );
            this.OB = h0((d) => {
              const e = d.rb;
              d = Rcb(d);
              const f = {};
              for (const h in this.$d) {
                const k = this.$d[h];
                switch (k.kind) {
                  case "one":
                    var g = k.get(e);
                    g = null != g ? d.get(g) : void 0;
                    f[h] = k.validate(g);
                    break;
                  case "many":
                    g = Z_(d, k.get(e));
                    f[h] = k.validate(g);
                    break;
                  default:
                    throw new E(k);
                }
              }
              return f;
            });
            h0((d, e) => {
              if (this.config.qeb) return Ha();
              const f = new Set();
              this.fD(d, (k) => f.add(k));
              const g = new Set();
              let h = 0;
              e.forEach((k) => {
                (null != k.id && f.has(k.id)) || g.add(h);
                ++h;
              });
              return 0 === g.size ? Ha() : (0, __c.Ia)({ Omb: g });
            });
          }
        };
        Tcb = 0;
        W_ = class {
          get(a) {
            const b = this.m.get(a);
            return this.sPa ? b : B(b, "No series with binding id={}", a);
          }
          set(a, b) {
            this.m.set(a, b);
          }
          constructor(a) {
            this.m = new Map();
            this.sPa = __c.hX.yD(a);
          }
        };
        __c.n0 = class {
          static A(a) {
            __c.N(a, {
              config: d0,
              bw: d0,
              bta: d0,
              valid: d0,
              values: d0,
              aA: d0,
              Xa: d0,
            });
          }
          get config() {
            if (!this.F.Ova) return this.F.rb;
          }
          get bw() {
            return null != this.config ? this.bindings.OB(this.F) : void 0;
          }
          get bta() {
            const a = this.bw;
            if (null != a)
              for (const [b, c] of Wcb(a))
                if (!c.ok) return { key: b, error: c.error[0] };
          }
          get valid() {
            return null != this.bw && null == this.bta;
          }
          get values() {
            return null != this.config ? this.bindings.mSa(this.F) : void 0;
          }
          get aA() {
            const a = this.values;
            return null != a ? this.bindings.iRa(a) : void 0;
          }
          get Xa() {
            return null != this.config ? this.bindings.gA(this.F) : void 0;
          }
          constructor(a, b) {
            __c.n0.A(this);
            this.F = a;
            this.bindings = b;
          }
        };
        __c.zdb = () => {
          const a = __c.m0.create()(
            (b) => ({
              label_by: b.one(
                (c) => c.ub,
                (c, d) => (c.ub = d),
                { required: !1 }
              )(["string", "number"]),
              value_by: b.one(
                (c) => c.Jb,
                (c, d) => (c.Jb = d),
                { required: !0 }
              )(["number"]),
            }),
            {
              init(b, c) {
                const d = b.rb,
                  e = b.data,
                  f = a.gA(b),
                  g = a.OB(b);
                let h = null != f.label_by && (c.ui || g.label_by.ok),
                  k = null != f.value_by && (c.ui || g.value_by.ok);
                (h && k) ||
                  (e.first((l) => {
                    if (null == l.Ea) return !1;
                    if (h && k) return !0;
                    var m = __c.R_(l.Ea);
                    switch (m.kind) {
                      case "string":
                        if (h) break;
                        m = l.id || __c.Y_();
                        h = !0;
                        l.id = m;
                        a.$d.label_by.set(d, m);
                        break;
                      case "number":
                        if (k) break;
                        m = l.id || __c.Y_();
                        k = !0;
                        l.id = m;
                        a.$d.value_by.set(d, m);
                        break;
                      case "date":
                        break;
                      default:
                        throw new E(m);
                    }
                    return !1;
                  }),
                  __c.X_(a, b));
              },
            }
          );
          return a;
        };
        __c.o0 = class {
          static A(a) {
            __c.N(a, { Rea: d0, labels: d0, TE: d0, format: d0 });
          }
          get Rea() {
            var a, b;
            return (
              null === (a = this.bindings.bw) || void 0 === a
                ? 0
                : a.label_by.ok
            )
              ? null === (b = this.bindings.Xa) || void 0 === b
                ? void 0
                : b.label_by
              : void 0;
          }
          get labels() {
            var a, b;
            const c = this.TE,
              d =
                null === (b = this.bindings.aA) || void 0 === b
                  ? void 0
                  : null === (a = b.label_by) || void 0 === a
                  ? void 0
                  : a.map((f) => (null !== f && void 0 !== f ? f : ""));
            var e;
            return null !== d && void 0 !== d
              ? d
              : Array.from(
                  {
                    length:
                      null !==
                        (e =
                          null === c || void 0 === c
                            ? void 0
                            : c.values.count()) && void 0 !== e
                        ? e
                        : 0,
                  },
                  () => ""
                );
          }
          get TE() {
            var a, b;
            return (
              null === (a = this.bindings.bw) || void 0 === a
                ? 0
                : a.value_by.ok
            )
              ? null === (b = this.bindings.Xa) || void 0 === b
                ? void 0
                : b.value_by
              : void 0;
          }
          get lz() {
            return this.bindings.bw;
          }
          get format() {
            var a;
            const b =
              null === (a = this.bindings.values) || void 0 === a
                ? void 0
                : a.value_by;
            return null != b ? (c) => __c.U_(b, c) : String;
          }
          constructor(a, b) {
            __c.o0.A(this);
            this.F = a;
            this.NUa = b;
            this.bindings = new __c.n0(this.F, this.NUa);
          }
        };
        var Adb;
        __c.Q_("dd mmm yyyy");
        Adb = new Date(1899, 11, 30);
        __c.Bdb = new Date(1970, 0, 1).getTime() - Adb.getTime();
        Object.freeze({ type: 5, value: void 0 });
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/5a8faf89f9ca2077.js.map
