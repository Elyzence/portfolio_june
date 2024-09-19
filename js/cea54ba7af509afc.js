(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4567],
  {
    /***/ 30897: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(988256);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var J7a,
          K7a,
          L7a,
          jX,
          M7a,
          lX,
          O7a,
          R7a,
          S7a,
          X7a,
          $7a,
          a8a,
          b8a,
          i8a,
          rX,
          m8a,
          n8a,
          k8a,
          tX,
          j8a,
          qX,
          l8a,
          T7a,
          U7a,
          o8a,
          uX;
        J7a = function (a, b) {
          return null != b &&
            "object" === typeof b &&
            null != b.sampleRate &&
            b instanceof Error
            ? Math.min(Math.max(0, b.sampleRate), 1)
            : a.xra;
        };
        K7a = function (a) {
          switch (a) {
            case "unset":
              return 0;
            case "ok":
              return 1;
            case "error":
              return 2;
            default:
              return 0;
          }
        };
        L7a = function (a) {
          const b = [];
          for (const [c, d] of a.entries())
            null != d && b.push({ key: c, value: jX(d) });
          return b;
        };
        jX = function (a) {
          const b = typeof a;
          return "string" === b
            ? { stringValue: a }
            : "number" === b
            ? Number.isInteger(a)
              ? { intValue: a }
              : { doubleValue: a }
            : "boolean" === b
            ? { boolValue: a }
            : a instanceof Uint8Array
            ? { bytesValue: a }
            : Array.isArray(a)
            ? { arrayValue: { values: a.map(jX) } }
            : "object" === b && null != a
            ? {
                kvlistValue: {
                  values: Object.entries(a).map(([c, d]) => ({
                    key: c,
                    value: jX(d),
                  })),
                },
              }
            : {};
        };
        M7a = function (a) {
          const b = new Map();
          for (const c of a)
            (a = b.get(c.kp)), a || ((a = []), b.set(c.kp, a)), a.push(c);
          return b;
        };
        lX = function (a, b) {
          b = b(a) / 1e3;
          a = Math.trunc(b);
          b = Number((b - a).toFixed(9)) * kX;
          let [c, d] = [a, b];
          d > kX && ((d -= kX), (c += 1));
          return c * kX + d;
        };
        __c.N7a = function (a, b) {
          if (0 === a.length) return { resourceSpans: [] };
          const c = [];
          a = M7a(a);
          for (const [d, e] of a)
            if (0 < e.length) {
              a = { attributes: L7a(e[0].gp), droppedAttributesCount: 0 };
              const f = [
                {
                  scope: { name: d },
                  spans: e.map((g) => {
                    var h = g.Im();
                    const k = lX(g.startTime, b);
                    var l;
                    const m = lX(
                      null !== (l = g.endTime) && void 0 !== l
                        ? l
                        : g.startTime,
                      b
                    );
                    var n = g.attrs;
                    "event" === g.nt &&
                      ((l = g.attrs.get("parent_start")),
                      null != l &&
                        "number" === typeof l &&
                        (n = new Map([
                          ...n.entries(),
                          ["parent_start", lX(l, b)],
                        ])));
                    l = h.traceId;
                    h = h.spanId;
                    var p = g.parentSpanId,
                      q = g.name;
                    n = L7a(n);
                    var r = { code: K7a(g.status) };
                    g = g.links;
                    const t = [];
                    for (const u of g)
                      t.push({
                        spanId: u.e3a.spanId,
                        traceId: u.e3a.traceId,
                        droppedAttributesCount: 0,
                      });
                    return {
                      traceId: l,
                      spanId: h,
                      parentSpanId: p,
                      name: q,
                      kind: 3,
                      startTimeUnixNano: k,
                      endTimeUnixNano: m,
                      attributes: n,
                      droppedAttributesCount: 0,
                      events: [],
                      droppedEventsCount: 0,
                      status: r,
                      links: t,
                      droppedLinksCount: 0,
                    };
                  }),
                },
              ];
              c.push({ resource: a, scopeSpans: f });
            }
          return { resourceSpans: c };
        };
        O7a = function (a) {
          return a
            .trim()
            .split(/\s+/, 2)
            .map((b) => __c.zE(b)[0])
            .join("");
        };
        R7a = function (a = "") {
          a = P7a(a);
          a = Math.floor(a() * Q7a.length);
          return Q7a[a];
        };
        S7a = function (a) {
          switch (a.type) {
            case "GROUPED_COLUMN":
            case "GROUPED_ROW":
              return {
                spacing: a.spacing,
                V: a.V,
                hb: { ...a.hb, alignment: { ...a.hb.alignment } },
              };
            case "STACKED_ROW":
            case "STACKED_COLUMN":
              return {
                spacing: a.spacing,
                V: a.V,
                hb: { ...a.hb, alignment: { ...a.hb.alignment } },
                ej: { ...a.ej, alignment: { ...a.hb.alignment } },
              };
            case "PIE":
            case "DONUT":
              break;
            case "LINE":
              return { Kb: a.Kb, Lb: a.Lb };
            case "STACKED_AREA":
              break;
            case "SCATTERPLOT":
            case "BUBBLEPLOT":
              return { up: a.up, Lb: a.Lb };
            case "PACKED_CIRCLES":
              break;
            case "TREEMAP":
              break;
            case "HISTOGRAM":
              return { V: a.V };
            case "RADAR":
              return { Kb: a.Kb, GG: a.GG };
            case "FUNNEL":
              break;
            case "BAR_RACE":
              return { spacing: a.spacing, NH: a.NH };
            case "PROGRESS":
            case "PICTOGRAM":
              break;
            case "POPULATION_PYRAMID":
            case "DUMBBELL":
            case "LOLLIPOP":
            case "SUNBURST":
            case "TIME_SERIES":
              break;
            default:
              throw new __c.E(a);
          }
        };
        __c.V7a = function (a, b) {
          var { fireImmediately: c = !0 } = {};
          return (d, e) =>
            T7a(
              () => ({ Qaa: a.Zt, C9: d() }),
              ({ Qaa: f, C9: g }) => {
                b === f && e(g);
              },
              {
                fireImmediately: c,
                equals: (f, g) => f.Qaa === g.Qaa && U7a.shallow(f.C9, g.C9),
              }
            );
        };
        __c.W7a = function (a, b) {
          const c = new Map();
          for (const [g, h] of a.entries()) {
            const k = g === a.length - 1;
            for (const [l, m] of h.entries()) {
              var d,
                e = c;
              for (var f = 0; f < g; f++)
                (e = __c.B(e.get(a[f][l].ES))), __c.y(!e.LM), (e = e.children);
              f = b[l];
              const n =
                null === (d = e.get(m.ES)) || void 0 === d
                  ? void 0
                  : d.children;
              n
                ? k && (__c.y(Array.isArray(n)), n.push(f))
                : e.set(
                    m.ES,
                    k
                      ? { zg: m.zg, LM: !0, children: [f] }
                      : { zg: m.zg, LM: !1, children: new Map() }
                  );
            }
          }
          return c;
        };
        __c.mX = function (a, b) {
          const c = new Map();
          for (const [d, e] of a)
            e.LM
              ? c.set(d, { zg: e.zg, LM: !0, children: b(e.children) })
              : c.set(d, { zg: e.zg, LM: !1, children: __c.mX(e.children, b) });
          return c;
        };
        X7a = function (a, b) {
          const c = [];
          for (const [d, e] of a)
            (a = b ? `${b}.${d}` : d),
              e.LM
                ? c.push({ name: d, zg: e.zg, key: a, value: e.children })
                : c.push({
                    name: d,
                    zg: e.zg,
                    key: a,
                    children: X7a(e.children, a),
                  });
          return c;
        };
        __c.Y7a = function (a) {
          return { name: "root", zg: "root", key: "root", children: X7a(a) };
        };
        __c.Z7a = function (a) {
          return Array.from({ length: a }, () => 1);
        };
        $7a = function (a) {
          return a.every((b) => void 0 !== b);
        };
        a8a = function (a) {
          return $7a(a.groupBy) && void 0 !== a.Je;
        };
        b8a = function (a) {
          return a.groupBy.some((b) => "" !== b.ES);
        };
        __c.c8a = function (a, b, c, d) {
          a = __c
            .bX(a)
            .map((f, g) => ({ groupBy: f, Je: b[g], color: c[g] }))
            .filter(a8a);
          var e = d ? a.filter(b8a) : a;
          d = __c.bX(e.map(({ groupBy: f }) => f));
          a = e.map(({ Je: f }) => f);
          e = e.map(({ color: f }) => f);
          return { groupBy: d, Je: a, Qa: e };
        };
        __c.h8a = function ({
          JS: a,
          margins: b,
          position: c,
          qC: d,
          uya: e,
          dh: f,
          fFa: g,
        }) {
          const h = new d8a(a, d),
            k = new e8a(b, c);
          return f8a(function () {
            const l = c.horizontal,
              m = c.vertical,
              n = nX(() => k.onClick(e, f, g), []),
              p = nX(() => k.onMouseEnter(h, f, g), []),
              q = nX(() => k.onMouseLeave(h, f, g), []),
              r = h.rA ? "var(--QADODw)" : "var(--KtXlRg)";
            return h.oDa
              ? oX("g", {
                  transform: `translate(${"left" === l ? 0 : -32}, ${
                    "top" === m ? 0 : -32
                  })`,
                  onMouseEnter: p,
                  onMouseLeave: q,
                  children: oX(__c.s7a, {
                    icon: g8a,
                    Wua: { color: "var(--6u-yJQ)" },
                    ariaLabel: __c.Q("7+kJ1A"),
                    fill: r,
                    onClick: n,
                    width: 32,
                    height: 32,
                  }),
                })
              : null;
          });
        };
        i8a = function ({
          text: a,
          fontSize: b,
          fontFamily: c,
          fontWeight: d,
          textAlign: e,
          textBaseline: f,
        }) {
          return `${a}.${b.toFixed(1)}.${c}.${__c.Ez(d)}.${e}.${f}`;
        };
        rX = function ({
          text: a,
          fontSize: b,
          fontFamily: c,
          fontWeight: d,
          textAlign: e = "start",
          textBaseline: f = "alphabetic",
          un: g,
        }) {
          __c.y(
            j8a(),
            "baseMeasureText should only be called from within a reactive context"
          );
          const h = i8a({
            text: a,
            fontSize: b,
            fontFamily: c,
            fontWeight: d,
            textAlign: e,
            textBaseline: f,
          });
          var k = pX.get(h);
          if (k) return { PT: k.get(), un: g };
          k = qX(() => {
            g =
              g ||
              k8a({
                fontSize: b,
                fontFamily: c,
                textAlign: e,
                textBaseline: f,
                fontWeight: d,
              });
            const l = g.measureText(a),
              m = Math.ceil(l.actualBoundingBoxAscent + 1),
              n = Math.ceil(l.actualBoundingBoxDescent + 1),
              p = Math.ceil(l.actualBoundingBoxLeft),
              q = Math.ceil(l.actualBoundingBoxRight);
            return {
              actualBoundingBoxAscent: m,
              actualBoundingBoxDescent: n,
              actualBoundingBoxLeft: p,
              actualBoundingBoxRight: q,
              fontBoundingBoxAscent: l.fontBoundingBoxAscent,
              fontBoundingBoxDescent: l.fontBoundingBoxDescent,
              height: m + n,
              width: p + q,
              bK: l.width,
            };
          });
          pX.set(h, k);
          l8a(k, () => {
            pX.delete(h);
          });
          return { PT: k.get(), un: g };
        };
        m8a = function ({ maxWidth: a, ...b }) {
          return `${i8a(b)}.${a}`;
        };
        n8a = function ({
          text: a,
          fontSize: b,
          fontFamily: c,
          fontWeight: d,
          textAlign: e = "start",
          textBaseline: f = "alphabetic",
          maxWidth: g,
          un: h,
        }) {
          __c.y(
            j8a(),
            "baseTruncateText should only be called from within a reactive context"
          );
          const k = m8a({
            text: a,
            maxWidth: g,
            fontSize: b,
            fontWeight: d,
            fontFamily: c,
            textAlign: e,
            textBaseline: f,
          });
          var l = sX.get(k);
          if (l) return { cla: l.get(), un: h };
          l = qX(() => {
            let m;
            ({ PT: m, un: h } = rX({
              text: a,
              fontSize: b,
              fontFamily: c,
              fontWeight: d,
              textAlign: e,
              textBaseline: f,
              un: h,
            }));
            if (m.width <= g) return { ...m, text: a };
            do {
              a = a.substring(0, a.length - 1).trim();
              if (!a.length)
                return {
                  text: a,
                  width: 0,
                  height: 0,
                  actualBoundingBoxAscent: 0,
                  actualBoundingBoxDescent: 0,
                  actualBoundingBoxLeft: 0,
                  actualBoundingBoxRight: 0,
                  bK: 0,
                  fontBoundingBoxAscent: 0,
                  fontBoundingBoxDescent: 0,
                };
              ({ un: h, PT: m } = rX({
                text: a + "\u2026",
                fontSize: b,
                fontFamily: c,
                fontWeight: d,
                textAlign: e,
                textBaseline: f,
                un: h,
              }));
            } while (m.width > g);
            return { ...m, text: a + "\u2026" };
          });
          sX.set(k, l);
          l8a(l, () => {
            sX.delete(k);
          });
          return { cla: l.get(), un: h };
        };
        k8a = function ({
          fontSize: a,
          fontFamily: b,
          textAlign: c,
          textBaseline: d,
          fontWeight: e,
        }) {
          var f = document.createElement("canvas");
          f = __c.B(
            f.getContext("2d"),
            "could not initialize measuring canvas context"
          );
          f.font = `${e ? __c.Ez(e) + " " : ""}${a}px '${b}'`;
          f.textAlign = c;
          f.textBaseline = d;
          return f;
        };
        tX = __webpack_require__(168949);
        j8a = tX.SW;
        qX = tX.Fl;
        l8a = tX.pA;
        T7a = tX.U5;
        U7a = tX.p6;
        o8a = tX.LO;
        uX = tX.aD;
        var vX = __webpack_require__(667294),
          p8a = vX.memo,
          nX = vX.useCallback,
          q8a = vX.useId,
          r8a = vX.Component,
          s8a = vX.createRef;
        var P7a = __webpack_require__(236377);
        var t8a = __webpack_require__(785893),
          oX = t8a.jsx,
          u8a = t8a.jsxs;
        var v8a = __webpack_require__,
          w8a = v8a(693967),
          wX = v8a.n_x(w8a)();
        var f8a = __webpack_require__(433581).Pi;
        var x8a = __webpack_require__,
          y8a = x8a(98234),
          z8a = x8a.n_x(y8a);
        __c.A8a = new Set(
          "share acl remix view edit screen render animate watch published draft".split(
            " "
          )
        );
        __c.B8a = new Set(
          "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid q query clickId referrer signup_referrer redirect origin type category schema dclid _channel_track_key callback_id channel_account_id channel_ad_id channel_adgroup_id channel_campaign_id channel_keyword channel_keyword_id channel_link_type channel_name channel_utm_campaign channel_utm_content channel_utm_medium channel_utm_source channel_utm_term hash_key sat_cf tid link_version utm_adgroup utm_keyword template media create touchpoint_label touchpoint_correlation_id cta_source".split(
            " "
          )
        );
        __c.xX = class extends Error {
          constructor(a, b) {
            super(a);
            this.sampleRate = b;
            this.sampleRate = Math.min(Math.max(0, b), 1);
          }
        };
        __c.yX = class {
          setupOnce(a, b) {
            a((c, d) => {
              const e = b().getIntegration(__c.yX);
              if (!e) return c;
              if (
                !(
                  Math.random() <
                  J7a(
                    e,
                    null === d || void 0 === d ? void 0 : d.originalException
                  )
                )
              )
                return null;
              d = {
                sampleRate: J7a(
                  this,
                  null === d || void 0 === d ? void 0 : d.originalException
                ),
              };
              c.extra = null != c.extra ? { ...c.extra, ...d } : d;
              c.tags = null != c.tags ? { ...c.tags, ...d } : d;
              return c;
            });
          }
          constructor(a) {
            this.xra = a;
            this.name = __c.yX.id;
            this.xra = Math.min(Math.max(0, a), 1);
          }
        };
        __c.yX.id = "Sampling";
        var kX = Math.pow(10, 9);
        __c.C8a = class {
          cY(a) {
            return this.PFa + (a - this.iAa);
          }
          qK() {
            var a = Date.now(),
              b = performance.now();
            Math.abs(this.cY(b) - a) < this.threshold ||
              ((this.PFa = a), (this.iAa = b));
          }
          constructor() {
            var a = Date.now(),
              b = performance.now();
            this.PFa = a;
            this.iAa = b;
            this.threshold = 1e4;
          }
        };
        __c.D8a = {
          xxsmall: 16,
          xsmall: 24,
          small: 32,
          medium: 40,
          large: 48,
          xlarge: 64,
          xxlarge: 80,
          xxxlarge: 160,
        };
        var Q7a = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.Zv(__c.Yv(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var E8a = p8a((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            lK: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          d
            ? ((a = __c.fw(d)),
              (a = a instanceof __c.Sv ? __c.bw(a) : __c.Zv(a)))
            : (a = e ? R7a(e) : "#8e8e8e");
          var n = q8a();
          switch (l) {
            case "circle":
              var p = oX("defs", {
                children: oX("clipPath", {
                  id: n,
                  children: oX("circle", {
                    id: `${n}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              p = oX("defs", {
                children: oX("clipPath", {
                  id: n,
                  children: oX("rect", {
                    id: `${n}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          switch (l) {
            case "circle":
              var q = oX("circle", {
                cx: "50%",
                cy: "50%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: wX("BleKDg", { le3l_g: c }),
              });
              break;
            case "square":
              q = oX("rect", {
                width: "100%",
                height: "100%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: wX("rL1fFQ", { le3l_g: c }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          n = wX("VXdYCg", { rL1fFQ: "square" === l });
          a = __c.Wv(a);
          return oX("span", {
            role: f,
            "aria-label": g,
            className: n,
            ...m,
            children: u8a("svg", {
              className: h,
              style: k,
              children: [
                p,
                q,
                oX("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill:
                    0.75 <
                    Math.round(
                      (Math.sqrt(
                        0.241 * a.r * a.r +
                          0.691 * a.g * a.g +
                          0.068 * a.b * a.b
                      ) /
                        255) *
                        1e3
                    ) /
                      1e3
                      ? "rgb(13, 18, 22)"
                      : "rgb(255, 255, 255)",
                  fontWeight: "500",
                  fontSize: "50%",
                  children: oX("tspan", {
                    dy: "0.36em",
                    letterSpacing: "0.01rem",
                    children: O7a(b).toUpperCase(),
                  }),
                }),
              ],
            }),
          });
        });
        var F8a =
          __webpack_require__.p + "images/a19434babf42bf0175c9f0f8187b9cf6.svg";
        var G8a = ({
          borderColor: a,
          jAa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          oX("span", {
            className: wX(d, { HtmwTg: a, honG0A: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": "img" === f ? c : void 0,
            ...g,
          });
        __c.H8a = ({
          name: a,
          nKa: b,
          ariaLabel: c,
          lK: d,
          backgroundColor: e,
          borderColor: f,
          po: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = wX("_8M3E3w", "f4qJng fs-hide", h, { w5_ehA: "square" === l });
          b = b || "presentation";
          return g
            ? oX(G8a, {
                className: h,
                style: k,
                borderColor: f,
                jAa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? oX(E8a, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                lK: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : oX(G8a, {
                className: h,
                style: k,
                borderColor: f,
                jAa: F8a,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
        var I8a =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3.75" fill="currentColor" stroke="currentColor" stroke-width="1.5"/></svg>';
        __c.J8a = __c.pU({ medium: I8a });
        __c.bv = class {
          static A(a) {
            __c.N(a, { rb: qX, Ova: qX, Kba: qX });
          }
          get base() {
            var a, b;
            return null !==
              (b =
                null === (a = this.F.transition) || void 0 === a
                  ? void 0
                  : a.base) && void 0 !== b
              ? b
              : this._base;
          }
          get Sb() {
            var a, b;
            return null !==
              (b =
                null === (a = this.F.transition) || void 0 === a
                  ? void 0
                  : a.Sb) && void 0 !== b
              ? b
              : this.G8;
          }
          get rb() {
            var a;
            const b =
              null === (a = this.F.transition) || void 0 === a
                ? void 0
                : a.Sb.config.ref;
            if (null != b && this.pea(b)) return b;
            a = this.Sb.config.ref;
            this.pea(a) && (this.BAa = a);
            return this.BAa;
          }
          get Ova() {
            return !this.pea(this.Sb.config.ref);
          }
          get Zt() {
            return this.rb.type;
          }
          get Kba() {
            return {
              ud: this.ud,
              Sd: this.Sd,
              fontSize: this.fontSize,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontStyle: this.fontStyle,
              mj: this.mj,
              ...S7a(this.rb),
            };
          }
          get data() {
            return this.base.data;
          }
          get Cf() {
            return this.base.Cf;
          }
          get X$() {
            return this.base.X$;
          }
          get pO() {
            return !!this.Sb.Il;
          }
          get Zq() {
            return !this.Sb.vm;
          }
          get uh() {
            return !this.Sb.Eq;
          }
          get zk() {
            return this.Sb.zk;
          }
          get zoom() {
            return this.F.zoom;
          }
          get width() {
            return this.F.width;
          }
          get height() {
            return this.F.height;
          }
          get rotation() {
            return this.F.rotation;
          }
          get xf() {
            return this.F.xf;
          }
          get fontSize() {
            return this.F.fontSize;
          }
          get Du() {
            return this.F.Du;
          }
          get fontFamily() {
            return this.F.fontFamily;
          }
          get mj() {
            return this.F.mj;
          }
          get fontStyle() {
            return this.F.fontStyle;
          }
          get fontWeight() {
            return this.F.fontWeight;
          }
          get Gf() {
            return this.F.Gf;
          }
          get we() {
            return this.F.we;
          }
          get mf() {
            return this.F.mf;
          }
          get L5() {
            return this.F.L5;
          }
          get ud() {
            return this.F.ud;
          }
          get Sd() {
            return this.F.Sd;
          }
          get margins() {
            return this.F.margins;
          }
          get Ya() {
            return this.F.Ya;
          }
          get qo() {
            return this.F.qo;
          }
          get vj() {
            return this.F.vj;
          }
          get xi() {
            return this.F.xi;
          }
          get bQ() {
            return this.F.bQ;
          }
          get aq() {
            return this.F.aq;
          }
          get $p() {
            return this.F.$p;
          }
          get Be() {
            return this.F.Be;
          }
          mD() {
            return this.F.mD();
          }
          cA() {
            return this.F.cA();
          }
          constructor(a, b, c, d, e) {
            __c.bv.A(this);
            this.F = a;
            this._base = b;
            this.G8 = c;
            this.BAa = d;
            this.pea = e;
          }
        };
        __c.K8a = p8a(({ label: a, value: b }) =>
          u8a("div", {
            children: [
              oX(__c.yu, {
                size: "small",
                tagName: "div",
                lineClamp: 0,
                tone: "primary",
                className: "EXY4fA",
                alignment: "center",
                weight: "bold",
                children: a,
              }),
              oX(__c.yu, {
                size: "small",
                tagName: "div",
                lineClamp: 0,
                tone: "primary",
                className: "EXY4fA",
                alignment: "center",
                children: b,
              }),
            ],
          })
        );
        var L8a =
          '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.202 16.343a7.5 7.5 0 1 1 1.378-1.45l4.193 4.193a1 1 0 1 1-1.415 1.414l-4.156-4.157zM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7.25 9.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5z"/></svg>';
        var g8a = __c.eX(L8a);
        var M8a = () =>
            oX(__c.yu, {
              size: "small",
              tagName: "div",
              lineClamp: 0,
              tone: "primary",
              alignment: "center",
              weight: "bold",
              children: __c.Q("W5NwSg"),
            }),
          e8a = class {
            static A(a) {
              __c.N(a, { onMouseEnter: uX, onMouseLeave: uX, Ib: uX, cd: uX });
            }
            onClick(a, b, c) {
              a();
              b && c && this.Ib(b, c);
            }
            onMouseEnter(a, b, c) {
              a.rA = !0;
              b && c && this.cd(a, b, c);
            }
            onMouseLeave(a, b, c) {
              a.rA = !1;
              b && c && this.Ib(b, c);
            }
            Ib(a, b) {
              b.$k(a);
            }
            cd(a, b, c) {
              var d = a.JS;
              const {
                top: e,
                right: f,
                bottom: g,
                left: h,
              } = this.margins.get();
              a = d.F.ud;
              var k = d.F.Sd;
              const l = 32 / d.we.vertical;
              d = 32 / d.we.horizontal;
              k = "top" === this.position.vertical ? e + l : k - g;
              a =
                "left" === this.position.horizontal ? h + d / 2 : a - f - d / 2;
              c.Yq(b, {
                content: oX(M8a, {}),
                Rm: { width: 0, height: 0, top: k, left: a },
                placement: "bottom-center",
                arrow: !0,
                key: "Zoom out",
              });
            }
            constructor(a, b) {
              e8a.A(this);
              this.margins = a;
              this.position = b;
            }
          };
        var d8a = class {
          static A(a) {
            __c.N(a, { rA: o8a.ref, oDa: qX });
          }
          get oDa() {
            return !!this.JS.Gm && !this.qC.get();
          }
          constructor(a, b) {
            d8a.A(this);
            this.JS = a;
            this.qC = b;
            this.rA = !1;
          }
        };
        __c.zX = class {
          static A(a) {
            __c.N(a, { step: qX });
          }
          get kind() {
            return "point";
          }
          clone({
            wb: a = this.wb,
            Tb: b = this.Tb,
            vf: c = this.vf,
            Oc: d = this.Oc,
          }) {
            return new __c.zX({ wb: a, Tb: b, vf: c, Oc: d });
          }
          va() {
            const a = this.wb(),
              b = this.Tb();
            return new __c.zX({
              wb: () => a,
              Tb: () => b,
              vf: this.vf,
              Oc: this.Oc,
            });
          }
          get(a) {
            const b = this.wb().indexOf(a);
            __c.v(-1 !== b, `value ${a} must exist in domain`);
            const [c, d] = this.Tb();
            a = 1 === this.wb().length ? 0.5 : this.vf();
            return c + (a * this.step + b * this.step) * Math.sign(d - c);
          }
          get step() {
            const a = this.wb().length + 2 * this.vf(),
              [b, c] = this.Tb();
            return Math.abs(c - b) / Math.max(a - 1, 1);
          }
          yZ(a, b, c) {
            __c.v(a.index !== b.index);
            const d = this.vf(),
              e = (b.center - a.center) / (b.index - a.index);
            return [
              a.center - (d + a.index) * e,
              b.center + (d + c - b.index - 1) * e,
            ];
          }
          xZ(a, b, c) {
            const d = this.vf();
            return [
              b,
              a.center +
                ((a.center - b) / (a.index + d)) * (d + c - a.index - 1),
            ];
          }
          wZ(a, b, c) {
            const d = this.vf();
            return [
              a.center -
                ((b - a.center) / (c - a.index - 1 + d)) * (d + a.index),
              b,
            ];
          }
          constructor({ wb: a, Tb: b, vf: c, Oc: d }) {
            __c.zX.A(this);
            this.wb = a;
            this.Tb = b;
            this.vf = c;
            this.Oc = d;
          }
        };
        var pX, sX;
        pX = new Map();
        sX = new Map();
        __c.AX = ({
          text: a,
          maxWidth: b,
          fontSize: c,
          fontFamily: d,
          fontWeight: e,
          textAlign: f,
          textBaseline: g,
        }) =>
          n8a({
            text: a,
            maxWidth: b,
            fontSize: c,
            fontFamily: d,
            fontWeight: e,
            textAlign: f,
            textBaseline: g,
            un: void 0,
          }).cla;
        __c.dv = {
          measureText: ({
            text: a,
            fontSize: b,
            fontFamily: c,
            fontWeight: d,
            textAlign: e,
            textBaseline: f,
          }) =>
            rX({
              text: a,
              fontSize: b,
              fontFamily: c,
              fontWeight: d,
              textAlign: e,
              textBaseline: f,
              un: void 0,
            }).PT,
          Jj: ({
            texts: a,
            fontSize: b,
            fontFamily: c,
            fontWeight: d,
            textAlign: e,
            textBaseline: f,
          }) => {
            let g;
            return a.map((h) => {
              h = rX({
                text: h,
                fontSize: b,
                fontFamily: c,
                fontWeight: d,
                textAlign: e,
                textBaseline: f,
                un: g,
              });
              ({ un: g } = h);
              return h.PT;
            });
          },
          Fg: __c.AX,
          qn: ({
            texts: a,
            maxWidth: b,
            fontSize: c,
            fontFamily: d,
            fontWeight: e,
            textAlign: f,
            textBaseline: g,
          }) => {
            let h;
            return a.map((k) => {
              k = n8a({
                text: k,
                fontSize: c,
                fontFamily: d,
                fontWeight: e,
                maxWidth: b,
                textAlign: f,
                textBaseline: g,
                un: h,
              });
              ({ un: h } = k);
              return k.cla;
            });
          },
        };
        var N8a;
        N8a = ({ j6: a, fontSize: b, GY: c, w$: d }) => {
          const e = a.width;
          a = a.height;
          d = null !== d && void 0 !== d ? d : a;
          if (e <= c && a <= d)
            return { width: e, height: a, fontSize: b, E$: !0 };
          d = Math.min(Math.min(1, c / e), Math.min(1, d / a));
          const f = b * d;
          c = 0.5 * b;
          return f < c
            ? ((b = c / b),
              { width: e * b, height: a * b, fontSize: c, E$: !1 })
            : { width: e * d, height: a * d, fontSize: f, E$: !0 };
        };
        __c.O8a = ({
          text: a,
          j6: b,
          fontSize: c,
          GY: d,
          w$: e,
          fontFamily: f,
          fontWeight: g,
        }) => {
          const {
            fontSize: h,
            width: k,
            height: l,
            E$: m,
          } = N8a({ j6: b, fontSize: c, GY: d, w$: e });
          if (m) return { text: a, width: k, height: l, fontSize: h };
          const {
            text: n,
            width: p,
            height: q,
          } = __c.AX({
            text: a,
            maxWidth: d,
            fontSize: h,
            fontFamily: f,
            fontWeight: g,
          });
          return { text: n, width: p, height: q, fontSize: h };
        };
        var BX = Math.PI / 5,
          CX = Math.cos(BX),
          DX = Math.sin(BX),
          P8a = Math.cos(BX / 2),
          Q8a = Math.sin(BX / 2),
          R8a = Math.atan(Math.PI / 2 - 2 * BX);
        __c.EX = {
          [1]: function ({ x: a, y: b }, c) {
            const d = c / 2;
            return [
              "M",
              a + d,
              b,
              "a",
              d,
              d,
              0,
              0,
              0,
              -c,
              0,
              "a",
              d,
              d,
              0,
              0,
              0,
              c,
              0,
              "Z",
            ].join(" ");
          },
          [2]: function ({ x: a, y: b }, c, d) {
            c /= 2;
            d = d || 0;
            return [
              "M",
              a + c,
              b + c - d,
              "L",
              a + c,
              b - c + d,
              "A",
              d,
              d,
              0,
              0,
              0,
              a + c - d,
              b - c,
              "L",
              a - c + d,
              b - c,
              "A",
              d,
              d,
              0,
              0,
              0,
              a - c,
              b - c + d,
              "L",
              a - c,
              b + c - d,
              "A",
              d,
              d,
              0,
              0,
              0,
              a - c + d,
              b + c,
              "L",
              a + c - d,
              b + c,
              "A",
              d,
              d,
              0,
              0,
              0,
              a + c,
              b + c - d,
              "Z",
            ].join(" ");
          },
          [3]: function ({ x: a, y: b }, c) {
            c /= 2;
            return [
              "M",
              a,
              b + c,
              "L",
              a + c,
              b,
              "L",
              a,
              b - c,
              "L",
              a - c,
              b,
              "Z",
            ].join(" ");
          },
          [4]: function ({ x: a, y: b }, c) {
            c /= 2;
            return [
              "M",
              a,
              b - c,
              "L",
              a - c,
              b + c,
              "L",
              a + c,
              b + c,
              "Z",
            ].join(" ");
          },
          [5]: function ({ x: a, y: b }, c) {
            c /= 2;
            const d = 2 * c * DX,
              e = c - d * DX,
              f = d * CX,
              g = Math.sqrt(e * e + Math.pow(R8a * d * DX, 2));
            return [
              "M",
              a,
              b - c,
              "L",
              a - DX * g,
              b - CX * g,
              "L",
              a - f,
              b - e,
              "L",
              a - P8a * g,
              b + Q8a * g,
              "L",
              a - d / 2,
              b + c * CX,
              "L",
              a,
              b + g,
              "L",
              a + d / 2,
              b + c * CX,
              "L",
              a + P8a * g,
              b + Q8a * g,
              "L",
              a + f,
              b - e,
              "L",
              a + DX * g,
              b - CX * g,
              "Z",
            ].join(" ");
          },
        };
        __c.FX = class extends r8a {
          componentDidMount() {
            const a = __c.B(this.hxa.current);
            var b;
            this.hh = z8a().loadAnimation({
              autoplay: __c.gv.ab,
              path: this.props.Xn,
              container: a,
              renderer: "svg",
              loop: null !== (b = this.props.loop) && void 0 !== b ? b : !1,
              rendererSettings: this.props.rendererSettings,
            });
            this.props.loop ||
              this.hh.addEventListener("complete", () => {
                var c, d;
                null === (c = (d = this.props).Cm) || void 0 === c
                  ? void 0
                  : c.call(d);
              });
          }
          render() {
            return oX("div", { className: "sH8e1w", ref: this.hxa });
          }
          componentWillUnmount() {
            this.hh && this.hh.destroy();
          }
          constructor(...a) {
            super(...a);
            this.hxa = s8a();
          }
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/cea54ba7af509afc.js.map
