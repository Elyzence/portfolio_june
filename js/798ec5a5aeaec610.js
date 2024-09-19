(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5199],
  {
    /***/ 785265: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(686040);
      __web_req__(92348);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var Q = __c.Q;
        var pU = __c.pU;
        var Iu = __c.Iu;
        var DO = __c.DO;
        var yu = __c.yu;
        var N = __c.N;
        var U = __c.U;
        var J = __c.J;
        var ee = __c.ee;
        var v = __c.v;
        var gZ,
          qab,
          uab,
          vab,
          sab,
          tab,
          kZ,
          wab,
          xab,
          lZ,
          mZ,
          rab,
          yab,
          zab,
          Aab,
          nZ,
          Cab,
          Fab,
          Hab,
          Sab,
          Qab,
          Rab,
          Pab,
          Vab,
          Wab,
          Xab,
          AZ,
          BZ,
          jZ,
          CZ,
          Yab;
        __c.fZ = function (a) {
          return __c.Zv(__c.pw(a));
        };
        gZ = function* (a) {
          let b = 0;
          for (const c of a) yield [b++, c];
        };
        __c.hZ = function (a) {
          return __c.it({
            design_id: a.Dd,
            doctype_id: a.Uf,
            category_id: a.vn,
            mode: a.mode,
            access_role: a.Yp,
            present_session_id: a.QZa,
            num_pages_in_design: a.ega,
            num_all_pages_in_design: a.TWa,
            current_page_index: a.Dz,
            location: a.location,
          });
        };
        __c.iZ = function (a, b, c, d, e) {
          d = new Date(Date.UTC(a, b, null != c ? c : 1, d || 0, e || 0));
          d.setUTCFullYear(a, b, null !== c && void 0 !== c ? c : 1);
          return d;
        };
        qab = function (a) {
          return jZ("g", { children: a.caa.map((b) => a.render(b)) });
        };
        uab = function (
          a,
          { wx: b, EI: c, $D: d, aE: e } = {
            wx: !1,
            EI: !1,
            $D: new Map(),
            aE: new Map(),
          }
        ) {
          const f = a.mc,
            g = a.ye,
            h = a.FE,
            k = a.Iz.diff,
            l =
              0 < k.enter.size &&
              0 === k.update.size &&
              0 === k.exit.size &&
              !b;
          rab({
            ma: a.ma,
            K: a.K,
            mc: {
              enter: (l && f.KR) || f.enter,
              update: f.update,
              exit: f.exit,
              Te: f.Te,
            },
            getKey: a.getKey,
            Ii: a.Ii,
            Tj: a.Tj,
            Qd: sab({ FE: h, WTa: l, Qd: a.Qd, Vk: a.Vk }),
            ye: h ? g : 0,
            Rd: tab({
              FE: h,
              YTa:
                0 === k.enter.size &&
                0 === k.update.size &&
                0 < k.exit.size &&
                !b,
              Rd: a.Rd,
              Zo: a.Zo,
            }),
            qp: a.qp,
            Zu: a.Zu && c,
            xi: a.xi,
            diff: k,
            $D: d,
            aE: e,
            wx: b,
          });
        };
        vab = function (a, b) {
          const c = new Map();
          if (null == a) return c;
          for (const d of a) c.set(b.getKey(d), d);
          return c;
        };
        sab = function ({ FE: a, WTa: b, Qd: c, Vk: d }) {
          return a ? (b && null != d ? d : c) : 0;
        };
        tab = function ({ FE: a, YTa: b, Rd: c, Zo: d }) {
          return a ? (b && null != d ? d : c) : 0;
        };
        kZ = function (a, b) {
          return __c.B(a.get(b), "Could not find animations for key {}", b);
        };
        wab = function* (a, b) {
          for (const c of a.keys()) {
            const d = kZ(a, c);
            for (const e of b) yield d[e];
          }
        };
        xab = function ({ ci: a, K: b, mc: c, diff: d, getKey: e }) {
          return Object.keys(c).some((f) => {
            const g = b[f];
            return c[f].value(a, d, e) !== g.definition.end;
          });
        };
        lZ = function (a, b) {
          const c = new Set();
          for (const [d, e] of gZ(b.values())) c.add(a.group(e, d));
          return new Map(Array.from(c, (d, e) => [d, e]));
        };
        mZ = function (a, b, c, d, e, f) {
          var g = a.start,
            h = a.end;
          const k = a.Xe;
          v(0 < d, "count should be non-zero");
          v(0 <= g && 1 >= g, "start should be between 0 and 1");
          v(0 <= h && 1 >= h, "end should be between 0 and 1");
          v(0 <= k && 1 >= k, "stagger should be between 0 and 1");
          g *= b;
          h = b * h - g;
          if (a.xb && !e) return { jc: 0, di: 0, Am: 1 };
          if (f && e) return { jc: b, di: 0, Am: 1 };
          if (1 === d) return { jc: h, di: g, Am: 1 };
          a = h / (1 + (d - 1) * k);
          c = g + ((h - a) / (d - 1)) * c;
          return { jc: a, di: c, Am: 0 === b || 0 === a + c ? 1 : b / (a + c) };
        };
        rab = function ({
          ma: a,
          K: b,
          mc: c,
          getKey: d,
          Ii: e,
          Tj: f,
          Qd: g,
          ye: h,
          Rd: k,
          qp: l,
          Zu: m,
          xi: n,
          diff: p,
          $D: q,
          aE: r,
          wx: t,
        }) {
          yab({
            ma: a,
            K: b,
            mc: c,
            Ii: e,
            Tj: f,
            Qd: g,
            qp: l,
            Zu: m,
            xi: n,
            diff: p,
            $D: q,
            getKey: d,
            wx: t,
          });
          zab({
            K: b,
            mc: c,
            Ii: e,
            ye: h,
            qp: l,
            Zu: m,
            diff: p,
            getKey: d,
            wx: t,
          });
          Aab({
            ma: a,
            K: b,
            mc: c,
            Ii: e,
            Tj: f,
            Rd: k,
            qp: l,
            Zu: m,
            diff: p,
            aE: r,
            getKey: d,
            wx: t,
          });
        };
        yab = function ({
          ma: a,
          K: b,
          mc: c,
          Ii: d,
          Tj: e,
          Qd: f,
          qp: g,
          Zu: h,
          xi: k,
          diff: l,
          $D: m,
          getKey: n,
          wx: p,
        }) {
          const q = ee(c.enter, (t) => lZ(t, l.enter));
          for (const [t, [u, w]] of gZ(l.enter)) {
            var r;
            const x = null !== (r = m.get(u)) && void 0 !== r ? r : w;
            d.set(u, w);
            const z = b.get(u);
            z && e.delete(u);
            const A = ee(c.enter, (D, C) => {
              var H,
                I = c.update[C];
              const M = D.value(x, l, n),
                K = I.value(w, l, n);
              var O = D.group(x, t),
                S;
              const W =
                null !==
                  (S = null === (H = c.Te) || void 0 === H ? void 0 : H[C]) &&
                void 0 !== S
                  ? S
                  : !1;
              H = q[C];
              O = __c.B(H.get(O));
              S = D.easing;
              if (z) {
                D = z[C];
                const { jc: na, di: oa, Am: ha } = mZ(I, f, O, H.size, p, W);
                D.update({ end: K, jc: na, di: oa, Am: ha, easing: S });
                return D;
              }
              const {
                jc: X,
                di: aa,
                Am: ca,
              } = mZ(D, M === K ? 0 : f, O, H.size, p, W);
              I = __c.Bab(
                a,
                { start: M, end: K, jc: X, di: aa, Am: ca, easing: S },
                W ? k : void 0
              );
              I.play();
              g && h && I.V_(g);
              return I;
            });
            b.set(u, A);
          }
        };
        zab = function ({
          K: a,
          mc: b,
          Ii: c,
          ye: d,
          qp: e,
          Zu: f,
          diff: g,
          getKey: h,
          wx: k,
        }) {
          for (const [n, p] of g.update) c.set(n, p);
          const l = new Map();
          for (const [n, p] of g.update)
            (c = kZ(a, n)),
              xab({ ci: p, K: c, mc: b.update, diff: g, getKey: h }) &&
                l.set(n, p);
          const m = ee(b.update, (n) => lZ(n, l));
          for (const [n, [p, q]] of gZ(l)) {
            const r = kZ(a, p);
            c = ee(b.update, (t, u) => {
              var w;
              const x = r[u],
                z = t.value(q, g, h);
              if (z === x.definition.end) return x;
              var A = t.group(q, n);
              const D = m[u];
              A = __c.B(D.get(A));
              var C;
              const H =
                  null !==
                    (C = null === (w = b.Te) || void 0 === w ? void 0 : w[u]) &&
                  void 0 !== C
                    ? C
                    : !1,
                { jc: I, di: M, Am: K } = mZ(t, d, A, D.size, k, H);
              x.update({ end: z, jc: I, di: M, Am: K, easing: t.easing });
              e && f && x.V_(e);
              return x;
            });
            a.set(p, c);
          }
        };
        Aab = function ({
          ma: a,
          K: b,
          mc: c,
          Ii: d,
          Tj: e,
          Rd: f,
          qp: g,
          Zu: h,
          diff: k,
          aE: l,
          getKey: m,
          wx: n,
        }) {
          const p = new Map();
          var q = new Map();
          for (const [C, H] of k.exit) {
            var r = kZ(b, C),
              t;
            xab({
              ci: null !== (t = l.get(C)) && void 0 !== t ? t : H,
              K: r,
              mc: c.exit,
              diff: k,
              getKey: m,
            })
              ? p.set(C, H)
              : q.set(C, H);
          }
          const u = Object.keys(c.enter);
          for (var w of q.keys())
            nZ({ K: b, ma: a, Ii: d, Tj: e, properties: u, key: w });
          q = ee(c.exit, (C) => lZ(C, p));
          for (const [C, [H, I]] of gZ(p)) {
            d.delete(H);
            e.set(H, I);
            var x;
            r = null !== (x = l.get(H)) && void 0 !== x ? x : I;
            w = kZ(b, H);
            t = [];
            for (const M in c.exit) {
              var z;
              const K = c.exit[M],
                O = w[M],
                S = K.value(r, k, m);
              if (S === O.definition.end) continue;
              var A = K.group(r, C);
              const W = q[M];
              A = __c.B(W.get(A));
              var D;
              const X =
                  null !==
                    (D = null === (z = c.Te) || void 0 === z ? void 0 : z[M]) &&
                  void 0 !== D
                    ? D
                    : !1,
                { jc: aa, di: ca, Am: na } = mZ(K, f, A, W.size, n, X);
              t.push({
                animation: O,
                definition: {
                  end: S,
                  jc: aa,
                  di: ca,
                  Am: na,
                  easing: K.easing,
                },
              });
            }
            ({ animation: r } = __c.Bz(t, ({ definition: M }) => M.di + M.jc));
            for (const { animation: M, definition: K } of t)
              M.update({
                ...K,
                Cm:
                  M === r
                    ? () =>
                        nZ({ K: b, ma: a, Ii: d, Tj: e, properties: u, key: H })
                    : void 0,
              }),
                g && h && M.V_(g);
          }
        };
        nZ = function ({ K: a, ma: b, Ii: c, Tj: d, properties: e, key: f }) {
          const g = kZ(a, f);
          for (const h of e) b.K.delete(g[h]);
          a.delete(f);
          c.delete(f);
          d.delete(f);
        };
        Cab = function ({ K: a, ma: b, Ii: c, Tj: d, Iz: e, properties: f }) {
          for (const g of a.keys())
            nZ({ K: a, ma: b, Ii: c, Tj: d, properties: f, key: g });
          e.clear();
        };
        Fab = function (a, b, c) {
          function d() {
            oZ(
              () =>
                pZ(
                  () => [a.data.get(), a.F.Kba],
                  () => {
                    const m = a.F.Kba,
                      n = a.DAa;
                    a.DAa = m;
                    null != n && (a.FE = Dab.structural(m, n));
                  },
                  { fireImmediately: !0 }
                ),
              []
            );
          }
          const e = new Eab(),
            f = qZ(() => e.caa(a)),
            g = (m) => {
              e.flush(a, m);
            },
            h = () => {
              e.reset(a);
            },
            k = () => a.data.get(),
            l = rZ(function ({ children: m }) {
              d();
              oZ(() => e.subscribe(a), []);
              return jZ(qab, { render: m, caa: f.get() });
            });
          return {
            sb: function ({ children: m }) {
              oZ(() => {
                null === b || void 0 === b
                  ? void 0
                  : b(a, { flush: g, reset: h, capture: k });
                return () => (null === c || void 0 === c ? void 0 : c(a));
              }, []);
              return jZ(l, { children: m });
            },
            kla: function () {
              d();
              oZ(() => {
                const m = e.subscribe(a);
                null === b || void 0 === b
                  ? void 0
                  : b(a, { flush: g, reset: h, capture: k });
                return () => {
                  null === c || void 0 === c ? void 0 : c(a);
                  m();
                };
              }, []);
              return f;
            },
          };
        };
        __c.Fga = function (a) {
          return Fab(a);
        };
        __c.Dga = function () {
          const a = [],
            b = new Map();
          let c = 0;
          const d = (f, { flush: g, reset: h, capture: k }) => {
              const l = new Map();
              for (const { id: m, $C: n, effect: p } of a)
                l.set(
                  m,
                  pZ(n, (q) => p(q, { flush: g, reset: h, capture: k }), {
                    fireImmediately: !0,
                  })
                );
              b.set(f, { flush: g, reset: h, capture: k, mia: l });
            },
            e = (f) => {
              const g = b.get(f);
              if (g) for (const h of g.mia.values()) h();
              b.delete(f);
            };
          return {
            Oa: (f) => Fab(f, d, e),
            DTa: function (f, g) {
              const h = c++;
              a.push({ id: h, $C: f, effect: g });
              for (const {
                flush: k,
                reset: l,
                capture: m,
                mia: n,
              } of b.values())
                n.set(
                  h,
                  pZ(f, (p) => g(p, { flush: k, reset: l, capture: m }), {
                    fireImmediately: !0,
                  })
                );
              return () => {
                for (const { mia: k } of b.values()) {
                  const l = k.get(h);
                  l && (l(), k.delete(h));
                }
              };
            },
          };
        };
        __c.Bab = function (a, b, c) {
          b = new Gab(b, a, c);
          a.K.add(b);
          return b;
        };
        Hab = function (a) {
          if (null == a) return document.body;
          const {
            overflow: b,
            overflowX: c,
            overflowY: d,
          } = window.getComputedStyle(a);
          return /(auto|scroll|overlay)/.test(b + d + c)
            ? a
            : Hab(a.parentElement);
        };
        __c.sZ = function (a) {
          let b = "";
          for (; 0 <= a; )
            (b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 26] + b),
              (a = Math.floor(a / 26) - 1);
          return b;
        };
        __c.Kab = function (a = 0) {
          const [b, c] = tZ(!1),
            d = Iab(),
            e = Jab(() => {
              window.clearTimeout(d.current);
              d.current = window.setTimeout(() => c(!0), a);
            }, [a]),
            f = Jab(() => {
              window.clearTimeout(d.current);
              c(!1);
            }, []);
          return { Wu: b, PDa: e, XDa: f };
        };
        __c.uZ = function (a, b = 0) {
          const { Wu: c, PDa: d, XDa: e } = __c.Kab(b);
          oZ(() => {
            const f = a.current;
            if (f)
              return (
                f.addEventListener("mouseenter", d),
                f.addEventListener("mouseleave", e),
                () => {
                  f.removeEventListener("mouseenter", d);
                  f.removeEventListener("mouseleave", e);
                }
              );
          }, [a, d, e]);
          return { Wu: c };
        };
        __c.Lab = function (a) {
          const b = Iab();
          oZ(() => {
            b.current = a;
          }, [a]);
          return b.current;
        };
        __c.vZ = function (a) {
          return a.replace(Mab, (b) => Nab[b]);
        };
        __c.xZ = function (a) {
          const {
            tagName: b = "span",
            className: c,
            Ahb: d = "regular",
            message: e,
            ...f
          } = a;
          return jZ(b, {
            ...f,
            className: wZ(c, {
              "dIH_FQ z2oZFw": "regular" === d,
              "iDyyyA wL6vqQ": "semiBold" === d,
              "ybyegg _5JgSIQ": "subtle" === d,
              "hqiMtw _6pE_dQ": "muted" === d,
              "ISdZAA _2AY7TA": "critical" === d,
              "swFEHQ l__qeA": "unstyled" === d,
            }),
            dangerouslySetInnerHTML: { __html: e },
          });
        };
        __c.yZ = function (a, b) {
          const c = b.width / 3;
          return 1 === __c.gv.direction
            ? a > b.left + c
              ? 1
              : 0
            : a < b.right - c
            ? 1
            : 0;
        };
        __c.Oab = function ({ direction: a, hv: b, yv: c }) {
          return (1 === a && b) || (0 === a && c);
        };
        Sab = async function ({ openWindow: a, eha: b, kYa: c }) {
          const d = await a({
              width: 1280,
              height: 720,
              left: window.screen.availWidth - window.screen.availLeft - 1280,
              top: window.screen.availHeight - window.screen.availTop - 720,
              Qjb: !0,
              nab: b,
            }),
            e = new MutationObserver((g) => {
              for (const h of g)
                h.addedNodes &&
                  h.addedNodes.forEach(function (k) {
                    k instanceof HTMLStyleElement
                      ? Pab(d.document, k.sheet)
                      : k instanceof HTMLLinkElement &&
                        d.document.head.appendChild(k.cloneNode(!0));
                  });
            });
          e.observe(document.head, { childList: !0 });
          e.observe(document.body, { childList: !0 });
          const f = () => {
            e.disconnect();
            d.removeEventListener("unload", f);
          };
          d.addEventListener("unload", f);
          Qab(d.document);
          d.document.body.style.backgroundColor = "black";
          d.document.dir = window.document.dir;
          (a = window.document.documentElement.getAttribute("lang")) &&
            d.document.documentElement.setAttribute("lang", a);
          await Rab(d.document, c);
          return d;
        };
        Qab = function (a) {
          var b = window.document;
          a = a.getElementsByTagName("head")[0];
          for (const c of b.getElementsByTagName("meta"))
            a.appendChild(c.cloneNode());
        };
        Rab = async function (a, b) {
          var c = window.document;
          const d = a.createElement("base");
          d.href = c.URL;
          a.head.appendChild(d);
          await Promise.all(
            Array.from(c.styleSheets).map(
              (e) =>
                new Promise((f) => {
                  if (e.href) {
                    const g = e.href,
                      h = a.createElement("link");
                    h.rel = "stylesheet";
                    h.href = g;
                    a.head.appendChild(h);
                    h.onload = () => f();
                    h.onerror = () => {
                      b({ url: g });
                      f();
                    };
                  } else {
                    try {
                      Pab(a, e);
                    } catch (g) {}
                    f();
                  }
                })
            )
          );
        };
        Pab = function (a, b) {
          b = b.cssRules;
          const c = a.createElement("style");
          c.setAttribute("type", "text/css");
          a.head.appendChild(c);
          Array.from(b).forEach((d, e) => {
            c.sheet.insertRule(d.cssText, e);
          });
        };
        Vab = function (a) {
          const b = (0, __c.nb)(__c.eQ).data;
          Tab(() => {
            if (a) {
              var c = () => {},
                d = Uab(() => {
                  c();
                  const e = b.classNames,
                    f = a.classList;
                  f.add(...e);
                  c = () => f.remove(...e);
                });
              return () => {
                c();
                d();
              };
            }
          }, [a, b]);
        };
        Wab = function (a, b) {
          a.Hha.delete(b);
          a.bb.Kp(b);
          const { startTime: c } = __c.AH(a.bb, b);
          a.bb.seek(b, c);
        };
        __c.zZ = function (a, b) {
          return pZ(
            () => b.flatMap((c) => a.PJa(c)),
            (c, d) => {
              a.bb.setActive(!0);
              null === d || void 0 === d
                ? void 0
                : d.forEach((e) => {
                    c.includes(e) || Wab(a, e);
                  });
              c.length && a.Bh(c);
            },
            { fireImmediately: !0 }
          );
        };
        Xab = function (a) {
          const b = a.oa || 0;
          return { oa: b, Df: b + (a.M || Infinity) };
        };
        AZ = (a) => (null == a || "number" === typeof a ? a : __c.VSa(a));
        BZ = __webpack_require__(785893);
        jZ = BZ.jsx;
        CZ = BZ.jsxs;
        Yab = BZ.Fragment;
        var DZ = __webpack_require__(433581),
          rZ = DZ.Pi,
          Zab = DZ.Qj,
          $ab = DZ.fv;
        var EZ = __webpack_require__(667294),
          Tab = EZ.useLayoutEffect,
          abb = EZ.Component,
          oZ = EZ.useEffect,
          Iab = EZ.useRef,
          FZ = EZ.memo,
          tZ = EZ.useState,
          bbb = EZ.useId,
          cbb = EZ.useMemo,
          dbb = EZ.useContext,
          Jab = EZ.useCallback,
          ebb = EZ.Suspense;
        var fbb = __webpack_require__(973935).createPortal;
        var GZ = __webpack_require__(168949),
          HZ = GZ.LO,
          IZ = GZ.aD,
          JZ = GZ.z,
          Uab = GZ.EH,
          qZ = GZ.Fl,
          pZ = GZ.U5,
          Dab = GZ.p6;
        var gbb = __webpack_require__,
          hbb = gbb(693967),
          wZ = gbb.n_x(hbb)();
        var ibb = __webpack_require__(197582).gn;
        var jbb = __webpack_require__(127661).Om;
        __c.kbb = J(() => ({ sessionId: U(1), gm: U(2) }));
        __c.lbb = J(() => ({ sessionId: U(1), gm: U(2) }));
        __c.mbb = J(() => ({ sessionId: U(1) }));
        __c.nbb = __c.jb(() => [1, 2, { SE: !0 }]);
        __c.KZ = J(() => ({ id: U(1), type: __c.Ua(2, __c.nbb) }));
        __c.obb = J(() => ({ DDa: __c.PP(1), EDa: __c.PP(2, !0) }));
        __c.LZ = ({ ratio: a, children: b, width: c, height: d, sfb: e }) => {
          v(0 < a, "Ratio must be greater than 0");
          if (null == c && null == d)
            return (
              (d = AZ(e)),
              (a = {
                paddingTop:
                  null != d && 0 < d
                    ? `calc(${(1 / a) * 100}% + ${AZ(e)}px)`
                    : `${(1 / a) * 100}%`,
              }),
              jZ("div", {
                className: "h7eUeg",
                style: a,
                children: jZ("div", { className: "_3FYLtg", children: b }),
              })
            );
          e = AZ(c);
          d = AZ(d);
          return null != e
            ? jZ("div", {
                style: { width: e, height: e / a, flexShrink: 0 },
                children: b,
              })
            : jZ("div", {
                style: { height: d, width: d * a, flexShrink: 0 },
                children: b,
              });
        };
        __c.iZ(1900, 0);
        __c.MZ = class a extends abb {
          static A(b) {
            N(b, { open: HZ.ref, aaa: HZ.ref, rga: IZ.bound, sba: IZ });
          }
          render() {
            const {
                title: b,
                ZC: c,
                Mhb: d = "primary",
                lba: e = !1,
                Vpa: f,
                role: g = "dialog",
                mode: h,
                UD: k,
                yg: l,
              } = this.props,
              m = void 0 === this.props.open ? this.open : this.props.open;
            var n;
            const p =
              null !== (n = this.props.buttons) && void 0 !== n
                ? n
                : [this.props.button];
            return jZ(__c.$t, {
              count: 2,
              children: (q, r) =>
                jZ(__c.K0a, {
                  Ab: q,
                  Jd: c ? r : void 0,
                  open: m,
                  Cb: e ? this.WLa : void 0,
                  mode: h,
                  UD: k,
                  role: g,
                  yg: l,
                  children: jZ(__c.LO, {
                    className: wZ("sheet" !== h && "Nu8M1g"),
                    padding: { default: "3u", ie: "4u" },
                    children: CZ(__c.Au, {
                      spacing: "3u",
                      children: [
                        CZ(__c.Au, {
                          align: "start",
                          spacing: "2u",
                          children: [
                            jZ(__c.uU, {
                              id: q,
                              tagName: "h1",
                              alignment: "start",
                              children: b,
                            }),
                            c &&
                              ("string" === typeof c
                                ? jZ(yu, {
                                    id: r,
                                    tone: "secondary",
                                    children: c,
                                  })
                                : jZ("div", { id: r, children: c })),
                            f && jZ(__c.E6a, { label: f, onChange: this.rga }),
                          ],
                        }),
                        jZ(__c.zO, {
                          reversed: !0,
                          spacing: "2u",
                          hqa: "small",
                          collapsed: "sheet" === h,
                          children: p.map((t, u) =>
                            jZ(
                              DO,
                              {
                                width: 0 === u ? "content" : "containedContent",
                                children: jZ(Iu, {
                                  stretch: !0,
                                  variant: 0 === u ? d : "secondary",
                                  ...t,
                                  className: t.className,
                                  onClick: () => this.bQa(t.onClick),
                                }),
                              },
                              u
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
            });
          }
          rga(b, c) {
            var d, e;
            this.aaa = c;
            null === (d = (e = this.props).rga) || void 0 === d
              ? void 0
              : d.call(e, c);
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.open = !0;
            this.aaa = !1;
            this.bQa = (c) => {
              null === c || void 0 === c
                ? void 0
                : c({ checkboxChecked: !(!this.props.Vpa || !this.aaa) });
              this.sba();
            };
            this.WLa = () => {
              var c, d;
              null === (c = (d = this.props).hN) || void 0 === c
                ? void 0
                : c.call(d);
              this.sba();
            };
            this.sba = () => {
              var c, d;
              null === (c = (d = this.props).onClose) || void 0 === c
                ? void 0
                : c.call(d);
              this.open = !1;
            };
          }
        };
        __c.MZ = ibb([__c.qc], __c.MZ);
        var pbb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.778 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM8.889 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM11.172 8.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM15.111 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM17.395 8.778a.828.828 0 1 0 1.655 0 .828.828 0 0 0-1.655 0ZM7.278 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM9.561 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM13.5 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM15.783 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM6 15.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-1.5h14A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z" fill="currentColor"/></svg>';
        __c.NZ = pU({ medium: pbb });
        var qbb =
          '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 7.5H8a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM8 5a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.232 16 6.616 8.384l1.768-1.768L16 14.232l7.616-7.616 1.768 1.768L17.768 16l7.616 7.616-1.768 1.768L16 17.768l-7.616 7.616-1.768-1.768L14.232 16z" fill="currentColor"/></svg>';
        var rbb =
          '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 3.25v9.5h9.5v-9.5h-9.5zM3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m12.558 13.442-10-10 .884-.884 10 10-.884.884z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m3.442 13.442 10-10-.884-.884-10 10 .884.884z" fill="currentColor"/></svg>';
        var sbb =
          '<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H3v6h6V3zM3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m9.146 9.854-7-7 .708-.708 7 7-.708.708z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m2.854 9.854 7-7-.708-.708-7 7 .708.708z" fill="currentColor"/></svg>';
        var tbb =
          '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 4.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.94 12 3.47 4.53l1.06-1.06L12 10.94l7.47-7.47 1.06 1.06L13.06 12l7.47 7.47-1.06 1.06L12 13.06l-7.47 7.47-1.06-1.06L10.94 12z" fill="currentColor"/></svg>';
        var ubb = pU({ Ml: sbb, small: rbb, medium: tbb, Gd: qbb });
        __c.OZ = class a extends abb {
          static A(b) {
            N(b, { error: HZ.ref, componentDidCatch: IZ });
          }
          componentDidCatch(b) {
            this.error = b;
          }
          render() {
            return this.props.gDa
              ? this.error
                ? jZ(ubb, { ...this.props.MS })
                : jZ(ebb, {
                    fallback: jZ(this.Cma, {}),
                    children: jZ(this.props.Ym, { ...this.props.MS }),
                  })
              : jZ(this.Cma, {});
          }
          constructor(...b) {
            super(...b);
            a.A(this);
            this.error = void 0;
            this.Cma = () =>
              jZ("span", {
                className: wZ(
                  __c.Vt(this.props.MS.size || "medium", {})[1],
                  this.props.MS.className
                ),
                children: jZ(__c.fU, { shape: "circle" }),
              });
          }
        };
        __c.OZ = ibb([__c.qc], __c.OZ);
        var Eab = class {
          subscribe(a) {
            const b = a.Iz.subscribe(),
              c = pZ(
                () => a.Iz.diff,
                () => {
                  a.Zu || uab(a);
                },
                { fireImmediately: !0 }
              );
            return IZ(() => {
              const d = a.K,
                e = a.ma,
                f = a.Ii,
                g = a.Tj,
                h = a.Iz,
                k = Object.keys(a.mc.enter);
              Cab({ K: d, ma: e, Ii: f, Tj: g, properties: k, Iz: h });
              b();
              a.DAa = void 0;
              c();
            });
          }
          reset(a) {
            const b = a.K,
              c = a.ma,
              d = a.Ii,
              e = a.Tj,
              f = a.Iz;
            a = Object.keys(a.mc.enter);
            Cab({ K: b, ma: c, Ii: d, Tj: e, properties: a, Iz: f });
          }
          flush(a, { EI: b, $D: c, aE: d }) {
            a.FE = !0;
            a.Iz.flush();
            const e = a.K,
              f = Object.keys(a.mc.enter);
            for (const g of wab(e, f)) g.Un(g.definition.jc + g.definition.di);
            uab(a, { wx: !0, EI: b, $D: vab(c, a), aE: vab(d, a) });
          }
          caa(a) {
            const b = a.K,
              c = a.Ii;
            a = a.Tj;
            const d = [...c.values(), ...a.values()];
            return [...c.entries(), ...a.entries()].map(([e, f], g) => ({
              gh: ee(kZ(b, e), (h) => h.state),
              ci: f,
              index: g,
              key: e,
              data: d,
            }));
          }
        };
        var Gab;
        Gab = class {
          static A(a) {
            N(a, {
              definition: HZ.ref,
              ww: HZ.ref,
              playing: HZ.ref,
              qp: HZ.ref,
              play: IZ,
              pause: IZ,
              Ux: qZ,
              PO: IZ,
              update: IZ,
              Un: IZ,
              V_: IZ,
              H3a: IZ,
            });
          }
          play() {
            this.playing = !0;
            this.ma.play();
          }
          pause() {
            this.playing = !1;
          }
          get Ux() {
            const a = this.qp;
            var b = this.definition;
            const c = b.di,
              d = b.jc;
            b = b.Am;
            const e = this.ww;
            return a ? a.get() * b * (c + d) : e;
          }
          PO(a) {
            const b = this.definition.jc,
              c = this.definition.di,
              d = this.definition.Cm;
            this.ww += a;
            this.ww >= b + c &&
              ((this.ww = b + c),
              this.pause(),
              null === d || void 0 === d ? void 0 : d());
          }
          update({ end: a, jc: b, di: c, Am: d, easing: e, Cm: f }) {
            const g = this.state.get();
            this.definition = {
              start: g,
              end: a,
              jc: b,
              di: c,
              Am: d,
              easing: e,
              Cm: f,
            };
            g === a
              ? ((this.ww = b + c),
                this.pause(),
                null === f || void 0 === f ? void 0 : f())
              : ((this.ww = 0), this.play());
          }
          Un(a) {
            const b = this.definition.jc,
              c = this.definition.di;
            v(0 <= a && a <= b + c);
            this.ww = a;
          }
          V_(a) {
            this.qp = a;
            this.pause();
          }
          H3a() {
            const a = this.qp;
            var b = this.definition;
            const c = b.di,
              d = b.jc;
            b = b.Am;
            a && ((this.ww = a.get() * b * (c + d)), (this.qp = void 0));
          }
          constructor(a, b, c) {
            Gab.A(this);
            this.ma = b;
            this.ww = 0;
            this.playing = !1;
            this.definition = a;
            this.xi = c;
            this.state = qZ(() => {
              var d,
                e = this.definition,
                f = e.start;
              const g = e.end;
              var h = e.di,
                k = e.jc;
              e = e.easing;
              var l = this.Ux;
              if (l < h) return f;
              if (l >= h + k) return g;
              h = l - h;
              return (l =
                null === (d = this.xi) || void 0 === d ? void 0 : d.get())
                ? ((d = l.start),
                  (e = l.end),
                  (l = l.easing),
                  (f = l(d * f, e * g, h, k)),
                  (k = l(d, e, h, k)),
                  f / k)
                : e(f, g, h, k);
            });
          }
        };
        __c.ev = class {
          static A(a) {
            N(a, { PO: IZ });
          }
          play() {
            this.playing ||
              ((this.Uea = this.now()),
              (this.playing = !0),
              this.requestAnimationFrame(this.PO));
          }
          pause() {
            this.playing = !1;
          }
          constructor(
            a = (c) => window.requestAnimationFrame(c),
            b = () => performance.now()
          ) {
            __c.ev.A(this);
            this.requestAnimationFrame = a;
            this.now = b;
            this.playing = !1;
            this.K = new Set();
            this.Uea = 0;
            this.PO = (c) => {
              if (this.playing) {
                var d = !1,
                  e = c - this.Uea;
                for (const f of this.K)
                  f.playing && (f.PO(e), (d = d || f.playing));
                this.Uea = c;
                d ? this.requestAnimationFrame(this.PO) : this.pause();
              }
            };
          }
        };
        __c.cv = class {
          static A(a) {
            N(a, {
              V8: HZ.ref,
              open: qZ,
              key: HZ.ref,
              uw: HZ.ref,
              position: qZ,
              content: HZ.ref,
              placement: HZ.ref,
              arrow: HZ.ref,
            });
          }
          get open() {
            return this.V8 && this.QRa();
          }
          set open(a) {
            this.V8 = a;
          }
          set position(a) {
            this.uw = a;
          }
          get position() {
            var a;
            const b = this.uw;
            var c;
            const d =
              null !==
                (c =
                  null === (a = this.scaleFactor) || void 0 === a
                    ? void 0
                    : a.get()) && void 0 !== c
                ? c
                : 1;
            return {
              left: d * (this.ld ? b.left - this.F.width : b.left),
              top: d * b.top,
              width: d * b.width,
              height: d * b.height,
            };
          }
          constructor(a, b, c, d = 2 === __c.gv.direction) {
            __c.cv.A(this);
            this.F = a;
            this.scaleFactor = b;
            this.QRa = c;
            this.ld = d;
            this.V8 = !1;
            this.key = void 0;
            this.uw = { top: 0, left: 0, width: 0, height: 0 };
            this.content = "";
            this.placement = "bottom-center";
            this.arrow = !0;
            this.Ke = 0;
          }
        };
        var xbb = ({
            content: a,
            open: b,
            placement: c,
            children: d,
            arrow: e,
          }) => {
            const [f, g] = tZ();
            return jZ("div", {
              className: "Mlkk4Q",
              ref: (h) => {
                null != h && ((h = Hab(h.parentElement)), null != h && g(h));
              },
              children: jZ(__c.Bu, {
                placement:
                  null == c || "auto" === c || "string" !== typeof c
                    ? c
                    : { placement: c, cO: !1 },
                level: 1,
                reference: d,
                open: b,
                offset: { main: __c.nu, aR: 0 },
                boundary: f,
                Woa: !0,
                children: ({ ly: h }) =>
                  jZ(Zab, {
                    children: () =>
                      CZ(Yab, {
                        children: [
                          jZ(vbb, { content: a }),
                          e &&
                            jZ("div", {
                              ref: h,
                              className: "U14oZw",
                              children: jZ(wbb, {}),
                            }),
                        ],
                      }),
                  }),
              }),
            });
          },
          vbb = ({ content: a }) =>
            jZ(__c.zu, {
              light: "dark",
              dark: "dark",
              xn: "dark",
              iq: "dark",
              children: ({ className: b }) =>
                jZ("div", {
                  className: wZ(b, "F_wBfg"),
                  role: "tooltip",
                  children:
                    "string" === typeof a
                      ? jZ(yu, {
                          size: "small",
                          tagName: "div",
                          lineClamp: 0,
                          tone: "primary",
                          className: "_2V1T4g",
                          alignment: "start",
                          children: a,
                        })
                      : a,
                }),
            }),
          wbb = () =>
            CZ("svg", {
              width: "16",
              height: "16",
              viewBox: "0 -7 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: wZ("_nNNQA", "UxWiaw"),
              children: [
                jZ("path", {
                  d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L15 9Z",
                  className: "aSY8AA",
                }),
                jZ("path", {
                  d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L2.46004 9L6.28773 5.40198C7.25004 4.4974 8.74996 4.4974 9.71228 5.40198L13.54 9L15 9Z",
                  className: "sk_amQ",
                }),
              ],
            });
        var ybb;
        __c.av = () =>
          rZ(function ({ store: a }) {
            if (null == a) return null;
            const b = a.open;
            return jZ(xbb, {
              content: a.content,
              open: b,
              placement: a.placement,
              arrow: a.arrow,
              children: b ? jZ(ybb, { store: a }) : jZ("div", {}),
            });
          });
        ybb = rZ(({ store: a }) => {
          a = a.position;
          return jZ("div", {
            style: {
              position: "absolute",
              left: a.left,
              top: a.top,
              width: a.width,
              height: a.height,
              pointerEvents: "none",
            },
          });
        });
        __c.PZ = class {};
        __c.Zu = {};
        __c.Zu.AIa = __c.PZ;
        __c.Zu.i$a = { F5a: 0, N5a: 1, e$a: 2 };
        var zbb = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "/": "&#x2F;" };
        Object.keys(zbb).join("");
        var Nab = { ...zbb, '"': "&quot;", "'": "&#x27;" },
          Mab = new RegExp(`[${Object.keys(Nab).join("")}]`, "g");
        var Abb =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M18.04 6.55c.9.19 1.37.88 1.37 2.15 0 1.2-.43 2.44-1.06 3.07l-.03.03a.87.87 0 0 0-.26.62v.76a.87.87 0 0 0 .49.76l1.49.69c.08.03.15.08.21.14.16.15.25.36.25.6v.3c0 .15-.11.26-.25.26h-.84c.2.47.32.98.34 1.5h.5c.97 0 1.75-.78 1.75-1.75v-.32c0-.87-.5-1.71-1.33-2.1l-1.1-.5v-.1c.89-1 1.34-2.58 1.34-3.96 0-.93-.2-1.91-.87-2.66A3.31 3.31 0 0 0 17.4 5c.3.5.5 1.02.65 1.55zM7.87 5.02A4.57 4.57 0 0 0 7.48 5c-.92 0-1.87.28-2.55 1.09a4.06 4.06 0 0 0-.84 2.68c0 .8.14 1.58.39 2.28.21.6.53 1.2.97 1.68v.04l-1.1.5A2.3 2.3 0 0 0 3 15.37v.3c0 .98.78 1.76 1.75 1.76h.75c.02-.52.14-1.03.34-1.5H4.75a.25.25 0 0 1-.25-.25v-.32a.8.8 0 0 1 .46-.72l1.5-.67a.87.87 0 0 0 .5-.78v-.71a.89.89 0 0 0-.32-.68C6.02 11.2 5.6 10 5.6 8.77c0-1.43.57-2.17 1.65-2.26.14-.51.34-1.02.63-1.5zm2.59 1.62c-.28.5-.43 1.16-.43 2 0-.84.15-1.5.43-2zm-1.9 10.79c.03-.2.12-.4.25-.55.1-.12.22-.22.37-.28l2.03-.91a1.19 1.19 0 0 0 .67-1.05c0 .46-.26.87-.67 1.05l-2.03.9c-.34.16-.57.47-.62.84zm7.51-.85-2.02-.93 2.02.93z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M14.75 13.53c1.17-1.21 1.8-3.27 1.8-5.1 0-1.18-.26-2.34-1.03-3.21A3.92 3.92 0 0 0 12.48 4c-1.13 0-2.24.35-3.03 1.28-.75.88-1 2.05-1 3.25 0 1 .18 2 .5 2.87.28.8.72 1.6 1.32 2.2v.59l-1.77.79A2.55 2.55 0 0 0 7 17.32v.5c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75v-.5c0-.99-.56-1.92-1.49-2.35l-1.76-.81v-.63zm-3-.27a1.2 1.2 0 0 1 .02.2v.95l-.01.18c-.06.38-.3.7-.65.86l-2 .9c-.12.05-.22.13-.31.22a1.08 1.08 0 0 0-.3.74v.51c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25v-.5a1.1 1.1 0 0 0-.29-.75c-.09-.1-.2-.18-.32-.24l-2-.91a1.13 1.13 0 0 1-.64-1.04v-.99a1.18 1.18 0 0 1 .35-.83c.85-.83 1.45-2.5 1.45-4.12 0-2.01-.87-2.94-2.57-2.94-1.65 0-2.53.98-2.53 3.03 0 1.65.6 3.3 1.45 4.08.19.17.31.4.35.65z" clip-rule="evenodd"/></svg>';
        var Bbb = pU({ medium: Abb });
        var Cbb =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M9.985 3.75H8.707A.75.75 0 0 0 8 3.25H4a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h.75V11H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 1.985 1.75ZM8 5h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 1.25a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75H8Z"/></svg>';
        var Dbb =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 5.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h2.5v-1.5H5a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v.5H15zm-4 3a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-8zM11 7h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2z"/></svg>';
        var Ebb = pU({ small: Cbb, medium: Dbb });
        var Fbb =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.291 7.267a9 9 0 0 0-2.963-2.947c-.353-.216-.806-.064-.992.306-.185.37-.033.818.316 1.04a7.498 7.498 0 0 1 .024 12.653c-.348.223-.499.671-.312 1.04.188.37.64.52.994.303A9 9 0 0 0 20.29 7.267ZM3.709 7.267A9 9 0 0 1 6.672 4.32c.353-.216.806-.064.992.306.185.37.033.818-.316 1.04a7.5 7.5 0 0 0-.025 12.653c.35.223.5.671.313 1.04-.188.37-.64.52-.994.303A9 9 0 0 1 3.71 7.267Z" fill="currentColor"/><path d="M17.308 9.203a6 6 0 0 0-1.392-1.748c-.313-.27-.783-.174-1.012.172-.229.345-.13.806.173 1.09a4.501 4.501 0 0 1-.098 6.655c-.31.275-.423.733-.204 1.084.22.352.685.463 1.007.202a6 6 0 0 0 1.526-7.455ZM6.69 9.203a6 6 0 0 1 1.392-1.748c.314-.27.783-.174 1.012.172.23.345.13.806-.172 1.09a4.5 4.5 0 0 0 .097 6.655c.31.275.423.733.205 1.084-.22.352-.686.463-1.007.202A6 6 0 0 1 6.69 9.203Z" fill="currentColor"/></svg>';
        __c.QZ = pU({ medium: Fbb });
        __c.RZ = (a) => {
          var b;
          return (
            (null === (b = a.match(/.{1,4}/g)) || void 0 === b
              ? void 0
              : b.join(" ")) || a
          );
        };
        var Gbb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="1.9" transform="matrix(-1 0 0 1 14.4 2)" fill="#fff" stroke="#fff" stroke-width="1.2"/><circle cx="1.5" cy="1.5" r=".9" transform="matrix(-1 0 0 1 19 4.076)" fill="#fff" stroke="#fff" stroke-width="1.2"/><circle cx="6.5" cy="5.5" r=".9" fill="#fff" stroke="#fff" stroke-width="1.2"/><path d="M16.034 12.862c0-5.637-8.069-5.285-8.069 0 0 5.284 4.066 8.814 4.066 8.814s4.003-3.177 4.003-8.814ZM21 13c0-3.176-2.045-4.405-3.775-3.885a2.802 2.802 0 0 0-.225.079M3 13c0-3.176 2.045-4.405 3.775-3.885A2.8 2.8 0 0 1 7 9.194" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/><path d="M3 12.863a9 9 0 1 0 18 0" stroke="#fff" stroke-width="1.3"/></svg>';
        var Hbb = pU({ medium: Gbb, Gd: Gbb });
        var Jbb, Lbb;
        __c.Kbb = rZ(function ({
          uea: a = !1,
          fUa: b,
          Aga: c,
          SXa: d,
          yc: e,
          Ta: f,
        }) {
          const g = b ? "secondary" : "contrast";
          b = b ? Q("tD6Ijg") : Q("W+bvGQ");
          const h = bbb();
          return jZ(__c.LO, {
            jI: "3u",
            children: CZ(__c.zO, {
              spacing: "1u",
              Qh: "center",
              children: [
                jZ(DO, {
                  width: "content",
                  children:
                    1 === f.status ? jZ(__c.Ibb, {}) : jZ(Jbb, { variant: g }),
                }),
                c &&
                  jZ(DO, {
                    width: "content",
                    children: jZ(Iu, {
                      variant: g,
                      onClick: c,
                      loading: a,
                      ariaLabel: Q("PG6NSw"),
                      Pa: Q("p65+lQ"),
                      yc: e,
                      Jd: e ? void 0 : h,
                      disabled: 2 === f.status,
                      children: Q("PG6NSw"),
                    }),
                  }),
                jZ(DO, {
                  width: "content",
                  children: jZ(Iu, {
                    variant: g,
                    onClick: d,
                    ariaLabel: b,
                    children: b,
                  }),
                }),
              ],
            }),
          });
        });
        __c.Mbb = rZ(function ({
          code: a,
          uea: b,
          Aga: c,
          tZa: d,
          url: e,
          zz: f,
          Ta: g,
        }) {
          const [h, k] = tZ(!1),
            l = cbb(() => () => jZ(Lbb, { code: a, url: e, zz: f }), [a, e, f]);
          return jZ(__c.LO, {
            jI: "3u",
            children: CZ(__c.zO, {
              spacing: "1u",
              Qh: "center",
              children: [
                jZ(DO, {
                  width: "fluid",
                  children: jZ(Iu, {
                    variant: "secondary",
                    loading: b,
                    onClick: c,
                    stretch: !0,
                    ariaLabel: Q("p65+lQ"),
                    disabled: 2 === g.status,
                    children: Q("p65+lQ"),
                  }),
                }),
                jZ(DO, {
                  width: "content",
                  children: jZ(__c.rO, {
                    open: h,
                    Cb: () => k((m) => !m),
                    $l: !0,
                    placement: "bottom-end",
                    Vm: (m) =>
                      jZ(Iu, {
                        variant: "secondary",
                        onClick: () => k((n) => !n),
                        ...m,
                        children: Q("Y5sGrA"),
                      }),
                    width: "40u",
                    children: l,
                  }),
                }),
                jZ(__c.ZA, { direction: "horizontal", size: "1u" }),
                jZ(DO, {
                  width: "content",
                  children: jZ(Bbb, { size: "medium", tone: "primary" }),
                }),
                jZ(DO, {
                  width: "content",
                  children: jZ(yu, { weight: "bold", children: d }),
                }),
              ],
            }),
          });
        });
        __c.Ibb = FZ(function () {
          return CZ("div", {
            className: wZ("LSMNLw", "_WeTjA", { vdvlyg: __c.gv.ab }),
            children: [
              jZ(Hbb, { size: "medium" }),
              jZ(yu, { weight: "bold", tone: __c.su, children: Q("4aZhcQ") }),
            ],
          });
        });
        Jbb = FZ(function ({ variant: a }) {
          return CZ("div", {
            className: wZ("LSMNLw", "secondary" === a ? "gCzpkA" : "p2Gu6w"),
            children: [
              jZ(__c.QZ, { size: "medium" }),
              jZ(yu, { weight: "bold", tone: __c.su, children: Q("vaZIDQ") }),
            ],
          });
        });
        Lbb = FZ(function ({ code: a, url: b, zz: c }) {
          var d = __c.RZ(a),
            e = jZ(__c.uU, { size: "xsmall", children: Q("4YqcGw") });
          b = __c.vZ(b);
          d = __c.vZ(d);
          d = __c.yc("jkrHpg", ["vBADUg", b, d]);
          return jZ(__c.LO, {
            padding: "2u",
            children: CZ(__c.Au, {
              spacing: "2u",
              children: [
                e,
                jZ(yu, {
                  tone: "tertiary",
                  children: jZ(__c.xZ, { message: d }),
                }),
                jZ(__c.Nbb, { code: a, stretch: !0, url: c }),
              ],
            }),
          });
        });
        __c.Nbb = rZ(function ({ code: a, stretch: b, url: c }) {
          const d = $ab(() => ({ Mqa: !1, Y0a: IZ(() => (d.Mqa = !0)) })),
            e = dbb(__c.PX),
            f = cbb(() => {
              const h = __c.lO(),
                k = `${c}?code=${a}`;
              return () => {
                d.Y0a();
                h(k, e);
              };
            }, [a, d, c, e]),
            g = d.Mqa ? Q("x5PaAA") : Q("m/z4vA");
          return jZ(Iu, {
            variant: "secondary",
            icon: Ebb,
            qe: "medium",
            iconPosition: "start",
            onClick: f,
            stretch: b,
            ariaLabel: g,
            children: g,
          });
        });
        __c.Obb = { [1]: "_1fjYug", [0]: "_1fLCfA" };
        var Pbb;
        Pbb = class {
          static A(a) {
            N(a, {
              _state: HZ.ref,
              open: IZ.bound,
              close: IZ.bound,
              cha: IZ.bound,
            });
          }
          get state() {
            return this._state;
          }
          async open({ lU: a }) {
            if (3 !== this.state.status && 1 !== this.state.status) {
              JZ(() => (this._state = { status: 1 }));
              this.Qr.trace("Opening child window");
              try {
                var b = await Sab({
                  openWindow: this.openWindow,
                  eha: this.eha,
                  kYa: ({ url: e }) =>
                    this.H.zJ("Error loading resource in window portal store", {
                      extra: new Map([["url", e]]),
                    }),
                });
              } catch (e) {
                throw (JZ(() => (this._state = { status: 2 })), e);
              }
              var c = b.document.createElement("div");
              c.id = "root";
              b.document.body.appendChild(c);
              this.Qr.trace("Child window opened");
              this.lU = a;
              window.addEventListener("beforeunload", this.close);
              this.Mi.push(() =>
                window.removeEventListener("beforeunload", this.close)
              );
              b.addEventListener("beforeunload", this.cha);
              this.Mi.push(() =>
                b.removeEventListener("beforeunload", this.cha)
              );
              window.document.fonts &&
                (window.document.fonts.addEventListener(
                  "loadingdone",
                  this.Nqa
                ),
                this.Mi.push(() =>
                  window.document.fonts.removeEventListener(
                    "loadingdone",
                    this.Nqa
                  )
                ));
              var d = rZ(function ({ children: e, title: f }) {
                Vab(b.document.documentElement);
                b.document.title = null !== f && void 0 !== f ? f : "";
                return jZ(__c.PX.Provider, {
                  value: b,
                  children: jZ(__c.SA, {
                    open: !0,
                    yg: b.document.body,
                    children: fbb(
                      jZ(__c.n7a, {
                        jKa: !1,
                        children: jZ(__c.l7a, { children: e }),
                      }),
                      c
                    ),
                  }),
                });
              });
              JZ(() => {
                this._state = { Qsa: b, status: 3, mJa: d };
              });
            }
          }
          close() {
            3 === this._state.status && this._state.Qsa.close();
          }
          cha() {
            var a;
            null === (a = this.lU) || void 0 === a ? void 0 : a.call(this);
            this.lU = void 0;
            this.Mi.forEach((b) => b());
            this.Mi = [];
            this._state = { status: 0 };
            this.Qr.trace("Child window closed");
          }
          constructor(a, b, c, d) {
            Pbb.A(this);
            this.Qr = a;
            this.openWindow = b;
            this.eha = c;
            this.H = d;
            this.Mi = [];
            this.lU = void 0;
            this.Nqa = (e) => {
              if (3 === this._state.status) {
                const f = this._state.Qsa;
                f &&
                  f.document.fonts &&
                  e.fontfaces.forEach((g) => {
                    f.document.fonts.has(g) || f.document.fonts.add(g);
                  });
              }
            };
            this._state = { status: 0 };
          }
        };
        __c.ZM = { M9a: { P8a: 0, W8a: 1, y7a: 2, OPENED: 3 } };
        __c.ZM.nJa = Pbb;
        __c.ZM.Tmb = Vab;
        __c.Qbb = FZ(function () {
          return jZ("div", { className: "vMVcag" });
        });
        __c.SZ = class {
          static A(a) {
            N(a, { Zx: IZ });
          }
          Zx(a) {
            __c.uz.Ol(a).forEach((b) => Wab(this, b));
          }
          Bh(a) {
            const [b, c] = __c.jK(a, (d) => !!this.bb.canPlay(d));
            c.forEach((d) => this.bb.uy(d, { iea: !0 }));
            b.forEach((d) => {
              this.bb.Ra(d) ||
                this.Hha.has(d) ||
                !d.autoplay ||
                (this.Hha.add(d), __c.PH(this.bb, d));
            });
          }
          constructor(a, b, c) {
            __c.SZ.A(this);
            this.bb = a;
            this.ma = b;
            this.tPa = c;
            this.Hha = new WeakSet();
            this.PJa = jbb(
              (d) => {
                if (d !== this.ma.kb && d !== this.ma.nextPage) return [];
                var e = 1e3 * this.ma.progress;
                const f = 1e3 * this.ma.XL(d).start.get(),
                  g = 1e3 * __c.OM(this.ma, d);
                if (e < f || e >= g) return [];
                const h = this.tPa ? d.hn.map((n) => n.Hk) : [],
                  k = e - f,
                  l = [],
                  m = (n, p) => {
                    const q = __c.uz.Qp(n),
                      r = __c.NI(n, h);
                    r && this.ma.Xwa(d).includes(n)
                      ? l.push(...q)
                      : !r && k >= p.oa && k < p.Df && l.push(...q);
                  };
                d.elements.forEach((n) => {
                  "group" === n.type
                    ? (!__c.NI(n, h) || this.ma.Xwa(d).includes(n)) &&
                      n.fb.forEach((p) => {
                        m(p, Xab(__c.Ds(n, p)));
                      })
                    : m(n, Xab(n));
                });
                (e = d.background.video.ref) && l.push(e);
                return l;
              },
              { equals: Dab.shallow }
            );
          }
        };
        var Rbb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 12a.75.75 0 0 1 .75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 1 0 1.5h-2A2.25 2.25 0 0 1 5 14.75v-2a.75.75 0 0 1 .75-.75ZM17.5 11.25a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 16.75 7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4c-4 0-6 2-6 6v4c0 4 2 6 6 6h8c4 0 6-2 6-6v-4c0-4-2-6-6-6H8Zm8 1.5H8c-1.769 0-2.82.441-3.44 1.06C3.942 7.18 3.5 8.232 3.5 10v4c0 1.769.441 2.82 1.06 3.44.62.619 1.671 1.06 3.44 1.06h8c1.769 0 2.82-.441 3.44-1.06.619-.62 1.06-1.671 1.06-3.44v-4c0-1.769-.441-2.82-1.06-3.44-.62-.619-1.671-1.06-3.44-1.06Z" fill="currentColor"/></svg>';
        var Sbb = pU({ medium: Rbb });
        var Tbb = {
          colorBlack: "rgb(13, 18, 22)",
          colorBlackA15: "rgba(57, 76, 96, 0.15)",
          colorWhite: "rgb(255, 255, 255)",
          baseUnit: "8px",
          badgeOverlay: "laIQig",
          small: "TRU08A",
          large: "BWDOdg",
        };
        __c.Ubb = FZ(function ({ size: a }) {
          return jZ("div", {
            className: wZ("laIQig", Tbb[a]),
            children: jZ(Sbb, { size: a }),
          });
        });
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },

    /***/ 334257: (_, __, r) => r(785265),
  },
]);
//# sourceMappingURL=sourcemaps/798ec5a5aeaec610.js.map
