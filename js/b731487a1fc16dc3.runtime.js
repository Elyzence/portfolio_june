(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    f,
    s = {},
    i = {};
  function c(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = (i[e] = { id: e, loaded: !1, exports: {} });
    return s[e].call(t.exports, t, t.exports, c), (t.loaded = !0), t.exports;
  }
  (c.m = s),
    (c.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (c.amdO = {}),
    (e = []),
    (c.O = (r, t, n, f) => {
      if (!t) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, n, f] = e[u], i = !0, a = 0; a < t.length; a++)
            if (
              (!1 & f || s >= f) &&
              Object.keys(c.O).every((e) => c.O[e](t[a]))
            )
              t.splice(a--, 1);
            else if (((i = !1), f < s)) s = f;
          if (i) {
            e.splice(u--, 1);
            var o = n();
            if (void 0 !== o) r = o;
          }
        }
        return r;
      } else {
        f = f || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > f; u--) e[u] = e[u - 1];
        e[u] = [t, n, f];
      }
    }),
    (c.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return c.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (c.t = function (e, n) {
      if (1 & n) e = this(e);
      if (8 & n) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      c.r(f);
      var s = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var i = 2 & n && e; "object" == typeof i && !~r.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((r) => (s[r] = () => e[r]));
      return (s.default = () => e), c.d(f, s), f;
    }),
    (c.d = (e, r) => {
      for (var t in r)
        if (c.o(r, t) && !c.o(e, t))
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (c.f = {}),
    (c.e = (e) =>
      Promise.all(Object.keys(c.f).reduce((r, t) => (c.f[t](e, r), r), []))),
    (c.u = (e) => {
      if (7015 === e) return "b7f33008d159c536.js";
      if (4158 === e) return "644d51e23e20ed21.js";
      if (5199 === e) return "798ec5a5aeaec610.js";
      if (869 === e) return "af6ec7e1d1b20239.js";
      if (5696 === e) return "f781ab65cc1c6f71.vendor.js";
      if (7773 === e) return "0ea0415c177dccf6.js";
      if (4567 === e) return "cea54ba7af509afc.js";
      if (5465 === e) return "9353c1c4ed2d7a5b.vendor.js";
      if (3772 === e) return "792cfaff8a5e3cf7.js";
      if (4043 === e) return "02edef8a141f6536.vendor.js";
      if (1761 === e) return "6ad07ca8180cf2f2.vendor.js";
      if (1755 === e) return "f24a7ad96adc6e00.js";
      if (6477 === e) return "70a03f401af13746.js";
      if (1033 === e) return "b47d687f21f4bfb5.js";
      if (7717 === e) return "0b9a5882a1661654.js";
      if (4232 === e) return "021212f7c61fc6c0.js";
      if (3574 === e) return "5a8faf89f9ca2077.js";
      if (9554 === e) return "790ee5f7bbcd862c.js";
      if (9263 === e) return "25d6f2102eaaf2b2.js";
      if (5826 === e) return "b669cdc1cb38deb7.js";
      if (5733 === e) return "8536fc793eaa40ff.js";
      if (1871 === e) return "f56c14c6fa22e151.js";
      if (8085 === e) return "8cdbda3fff580c2c.js";
      if (3546 === e) return "c0fbc223512b19ee.js";
      if (6596 === e) return "11d5c393b2c0c593.vendor.js";
      if (4832 === e) return "c50a9e16209ba00c.js";
      if (8407 === e) return "7181f6b9abe19c14.js";
      if (481 === e) return "a6fdb9e97be05892.js";
      if (4656 === e) return "7528a81d25ecbd77.js";
      if (4821 === e) return "10e197dca0efc8f1.js";
      if (8072 === e) return "8c46b9f81bdf237c.js";
      if (9503 === e) return "e7cd4fac2c0c935e.js";
      if (5105 === e) return "194dcd0e5e0697d9.js";
      if (3667 === e) return "7ad552220b4bfd5f.js";
      if (9076 === e) return "d3c3305fe3cf6ad9.js";
      if (3189 === e) return "e072e860751dae5a.js";
      if (2708 === e) return "71045726bd20b6d2.js";
      if (4663 === e) return "98774ee7ecd52bf2.js";
      if (7611 === e) return "f6a59fc8634969c8.js";
      if (1169 === e) return "c1839de005f3ee85.js";
      if (1945 === e) return "12c5f0b903d1f0f1.js";
      if (8856 === e) return "4180b2f27f021f90.js";
      if (7724 === e) return "dcc674e45ddeda63.js";
      if (8600 === e) return "5f25081f8a3797e2.js";
      if (9206 === e) return "1924c1fccfa75033.js";
      if (7968 === e) return "0dcfcdd3fe55a646.js";
      if (1887 === e) return "9389c182256e30f8.js";
      if (9541 === e) return "7959f67daf2b2dbc.js";
      if (3645 === e) return "1732792510d6e415.js";
      if (8528 === e) return "c7bae1787b8c0661.js";
      if (3081 === e) return "5c63773a9a7c37cb.js";
      if (1399 === e) return "0c5977e9e1fe36fd.js";
      if (7935 === e) return "46fff9097906868c.js";
      if (4182 === e) return "e74bf4528225588a.js";
      if (7020 === e) return "1d8e464c68d437c5.js";
      if (4874 === e) return "25cb2759363e985a.js";
      if (1290 === e) return "fcd5c520d4649ae0.js";
      if (4353 === e) return "00d6da4e18d3c7db.js";
      if (9634 === e) return "9cfd3de0a3a4d6ea.js";
      if (5535 === e) return "db17d82403a2e558.js";
      if (7351 === e) return "65e9faebfa1ea796.vendor.js";
      if (3499 === e) return "b05b4d310c241c9a.js";
      if (193 === e) return "a5249a4ee05bff95.js";
      if (4692 === e) return "5190490a2c10df18.js";
      if (4132 === e) return "4930b1ddf05c4604.js";
      if (7598 === e) return "1a79c0da3333bf90.js";
      if (424 === e) return "2c28147a1cfb9da7.js";
      if (3412 === e) return "af32b861bb326c15.js";
      if (3281 === e) return "3bd3ad3750132bc3.js";
      if (6291 === e) return "ffa0d5e89568161e.js";
      if (3814 === e) return "c4b6e11e122d8359.js";
      if (8990 === e) return "e8ae45002fe91836.js";
      if (2244 === e) return "bdb44c4ce40044d0.js";
      if (9095 === e) return "b713fefe5ac1f3db.js";
      if (3972 === e) return "8654906c75ceb152.js";
      if (9951 === e) return "fc18b079dc861a9a.js";
      if (876 === e) return "81087d04ab7999bd.js";
      if (6574 === e) return "04b867504db66c1a.js";
      if (6021 === e) return "51db18f0c68ebf1e.js";
      if (2789 === e) return "b56d0f0e10bd926c.js";
      if (694 === e) return "48f117e2a0927a1b.js";
      if (9429 === e) return "bca48509861cb320.js";
      if (8347 === e) return "0407c2eb6c35277c.js";
      if (3714 === e) return "77c86d4bf77d152c.js";
      if (5558 === e) return "cf94a035f64cca11.js";
      if (3540 === e) return "6ae9cb4e591cda30.js";
      if (5517 === e) return "313c70aa3ff9eda5.js";
    }),
    (c.miniCssF = (e) => {
      if (
        {
          7015: 1,
          4158: 1,
          7773: 1,
          3772: 1,
          1755: 1,
          6477: 1,
          1033: 1,
          7717: 1,
          4232: 1,
          9554: 1,
          5826: 1,
          5733: 1,
          1871: 1,
          4832: 1,
          8407: 1,
          481: 1,
          4821: 1,
          8072: 1,
          9503: 1,
          5105: 1,
          3667: 1,
          9076: 1,
          1945: 1,
          8856: 1,
          7724: 1,
          9206: 1,
          7968: 1,
          1887: 1,
          9541: 1,
          3645: 1,
          3081: 1,
          1399: 1,
          7020: 1,
          4874: 1,
          1290: 1,
          4353: 1,
          9634: 1,
          5535: 1,
          4692: 1,
          4132: 1,
          7598: 1,
          424: 1,
          3412: 1,
          3281: 1,
          6291: 1,
          3814: 1,
          8990: 1,
          2244: 1,
          9095: 1,
          3972: 1,
          9951: 1,
          876: 1,
          6574: 1,
          6021: 1,
          2789: 1,
          694: 1,
          9429: 1,
          8347: 1,
          3714: 1,
          5558: 1,
          3540: 1,
          5517: 1,
        }[e]
      )
        return "ef46db3751d8e999.ltr.css";
      if (5199 === e) return "69ca4ca21824745b.ltr.css";
      if (869 === e) return "d7cf0aba64e1b2d4.ltr.css";
      if ({ 5696: 1, 5465: 1, 4043: 1, 1761: 1, 6596: 1, 7351: 1 }[e])
        return "ef46db3751d8e999.vendor.ltr.css";
      if (4567 === e) return "3c33882df929e4c7.ltr.css";
      if (3574 === e) return "c9bf091720f7f1c3.ltr.css";
      if (9263 === e) return "71dec1f5d11e3f66.ltr.css";
      if (8085 === e) return "f8678f5d2a496896.ltr.css";
      if (3546 === e) return "aed61a49fdfc513b.ltr.css";
      if (4656 === e) return "5b2241d885919c07.ltr.css";
      if (3189 === e) return "8dd0cb1e0979d988.ltr.css";
      if (2708 === e) return "3735dc52136d446c.ltr.css";
      if (4663 === e) return "118052af16110a6a.ltr.css";
      if (7611 === e) return "5b7fe8f909b06739.ltr.css";
      if (1169 === e) return "44ce630fa966dd23.ltr.css";
      if (8600 === e) return "638e8938c76a575e.ltr.css";
      if (8528 === e) return "86319d1aacd3d613.ltr.css";
      if (7935 === e) return "82aa3b736106389a.ltr.css";
      if (4182 === e) return "ff2d79ae51f693d2.ltr.css";
      if (3499 === e) return "fd8942d9bab90e1d.ltr.css";
      if (193 === e) return "6591b54e04964760.ltr.css";
    }),
    (c.miniCssFRtl = (e) => {
      if (8581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
      if ({ 2653: 1, 5696: 1, 5465: 1, 4043: 1, 1761: 1, 6596: 1, 7351: 1 }[e])
        return "c166e5d20ad58f4e.vendor.rtl.css";
      if (5436 === e) return "8e54262212aed57f.vendor.rtl.css";
      if (1389 === e) return "80c3ff429feb3594.rtl.css";
      if (
        {
          7015: 1,
          4158: 1,
          7773: 1,
          3772: 1,
          1755: 1,
          6477: 1,
          1033: 1,
          7717: 1,
          4232: 1,
          9554: 1,
          5826: 1,
          5733: 1,
          1871: 1,
          4832: 1,
          8407: 1,
          481: 1,
          4821: 1,
          8072: 1,
          9503: 1,
          5105: 1,
          3667: 1,
          9076: 1,
          1945: 1,
          8856: 1,
          7724: 1,
          9206: 1,
          7968: 1,
          1887: 1,
          9541: 1,
          3645: 1,
          3081: 1,
          1399: 1,
          7020: 1,
          4874: 1,
          1290: 1,
          4353: 1,
          9634: 1,
          5535: 1,
          4692: 1,
          4132: 1,
          7598: 1,
          424: 1,
          3412: 1,
          3281: 1,
          6291: 1,
          3814: 1,
          8990: 1,
          2244: 1,
          9095: 1,
          3972: 1,
          9951: 1,
          876: 1,
          6574: 1,
          6021: 1,
          2789: 1,
          694: 1,
          9429: 1,
          8347: 1,
          3714: 1,
          5558: 1,
          3540: 1,
          5517: 1,
        }[e]
      )
        return "c166e5d20ad58f4e.rtl.css";
      if (5199 === e) return "3ac6eb2ed7cd5712.rtl.css";
      if (869 === e) return "cb3538416979fc60.rtl.css";
      if (4567 === e) return "56d884fea768488d.rtl.css";
      if (3574 === e) return "49dcf4c456be0dd9.rtl.css";
      if (9263 === e) return "7cf7805937173758.rtl.css";
      if (8085 === e) return "29bdbb1d75c8c7a3.rtl.css";
      if (3546 === e) return "7dac84e36568326f.rtl.css";
      if (4656 === e) return "3759df5a77daebac.rtl.css";
      if (3189 === e) return "eaf9987ddc748d09.rtl.css";
      if (2708 === e) return "b48165e316589a0c.rtl.css";
      if (4663 === e) return "879da7300712ed1a.rtl.css";
      if (7611 === e) return "b197b394e4f55ce1.rtl.css";
      if (1169 === e) return "8ec5819b5639aca4.rtl.css";
      if (8600 === e) return "1e246b15020f607d.rtl.css";
      if (8528 === e) return "87969b9ffcdabd63.rtl.css";
      if (7935 === e) return "c529d5968e467a49.rtl.css";
      if (4182 === e) return "d2ceaed76952769e.rtl.css";
      if (3499 === e) return "3fc89a66687c3f68.rtl.css";
      if (193 === e) return "0848e26828d6f0d9.rtl.css";
    }),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.hmd = (e) => {
      if (!(e = Object.create(e)).children) e.children = [];
      return (
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (n = {}),
    (f = "@canva/web:"),
    (c.l = (e, r, t, s) => {
      if (!n[e]) {
        var i, a;
        if (void 0 !== t)
          for (
            var o = document.getElementsByTagName("script"), u = 0;
            u < o.length;
            u++
          ) {
            var d = o[u];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == f + t
            ) {
              i = d;
              break;
            }
          }
        if (!i) {
          if (
            ((a = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            c.nc)
          )
            i.setAttribute("nonce", c.nc);
          i.setAttribute("data-webpack", f + t), (i.src = e);
        }
        n[e] = [r];
        var l = (r, t) => {
            (i.onerror = i.onload = null), clearTimeout(b);
            var f = n[e];
            if (
              (delete n[e],
              i.parentNode && i.parentNode.removeChild(i),
              f && f.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          b = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = l.bind(null, i.onerror)),
          (i.onload = l.bind(null, i.onload)),
          a && document.head.appendChild(i);
      } else n[e].push(r);
    }),
    (c.r = (e) => {
      if ("undefined" != typeof Symbol && Symbol.toStringTag)
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => {
      if (((e.paths = []), !e.children)) e.children = [];
      return e;
    }),
    (() => {
      const e = c.e,
        r = function e(r, t, n) {
          return r().catch(function (f) {
            return 0 === n
              ? Promise.reject(f)
              : ((s = t),
                new Promise(function (e) {
                  setTimeout(e, s);
                })).then(function () {
                  return e(r, t, n - 1);
                });
            var s;
          });
        };
      c.e = function (t) {
        return r(
          function () {
            return e(t);
          },
          1e3,
          5
        );
      };
    })(),
    (c.p = ""),
    (() => {
      if (self.__batch_chunks__)
        !(function (e, r, t, n, f, s, i, c, a) {
          const o = e.l;
          let u = [],
            d = [];
          const l = [];
          for (const k of document.head.querySelectorAll(
            'link[rel="prefetch"][href]'
          )) {
            const e = k.getAttribute("href");
            e && l.push(e);
          }
          let b = (e) => document.head.appendChild(e);
          (e.l = function (e, r, f, i) {
            for (let t = 0; t < l.length; t++)
              if (l[t].endsWith(e)) return l.splice(t, 1), o(e, r, f, i);
            if (t) {
              if (0 === u.length)
                Promise.resolve().then(() => {
                  E(u, p), (u = []), (j = 0);
                });
              const r = y(e);
              if ((u.length >= 1 && j + r > s) || u.length >= n)
                E(u, p), (u = []), (j = 0);
              j += r;
            } else {
              if (h++ < 10) return o(e, r, f, i);
              if (0 === u.length) setTimeout(() => w(u, p), 1);
            }
            u.push({
              src: e,
              callback: function (t) {
                if ("load" === t.type) r(t);
                else o(e, r, f, i);
              },
              originalLoad: () => {
                o(e, r, f, i);
              },
            });
          }),
            (e.loadCss = function (e, r) {
              const f = e.getAttribute("href");
              if (((b = r || b), t)) {
                if (0 === d.length)
                  Promise.resolve().then(() => {
                    E(d, v), (d = []), (m = 0);
                  });
                const e = y(f);
                if ((d.length >= 1 && m + e > s) || d.length >= n)
                  E(d, v), (d = []), (m = 0);
                m += e;
              } else {
                if (g++ < 15) return r(e);
                if (0 === d.length) setTimeout(() => w(d, v), 1);
              }
              d.push({
                src: f,
                callback: (t) => {
                  if ("load" === t.type) e.onload && e.onload(t);
                  else r(e);
                },
                originalLoad: () => {
                  r(e);
                },
              });
            });
          let h = 0,
            j = 0;
          function p(e, t) {
            const n = document.createElement("script");
            let f;
            const s = (e) => {
              (n.onerror = n.onload = null),
                clearTimeout(f),
                n.parentNode && n.parentNode.removeChild(n),
                t("string" == typeof e ? { type: "error", target: {} } : e);
            };
            (n.onload = n.onerror = s),
              (n.src = e),
              (n.async = !1),
              (f = setTimeout(() => s({ type: "timeout", target: n }), r)),
              document.head.appendChild(n);
          }
          let g = 0,
            m = 0;
          function v(e, r) {
            const t = document.createElement("link");
            (t.onload = t.onerror = (e) => r(e)),
              (t.href = e),
              (t.rel = "stylesheet"),
              b(t);
          }
          function y(e) {
            const r = f(),
              t = e.substring(r.length);
            return t ? i[t] || 0 : 0;
          }
          function _() {
            const e = f(),
              r = new URL(window.location.href);
            if (null == e ? void 0 : e.startsWith("http")) {
              const { protocol: r, host: t } = new URL(e);
              return `${r}//chunk-composing.${t
                .split(".")
                .slice(-2)
                .join(".")}`;
            } else if (
              ["localhost", "127.0.0.1"].includes(r.hostname) &&
              r.searchParams.get("pageLoadWorkerUrl")
            )
              return r.searchParams.get("pageLoadWorkerUrl");
            else return r.origin;
          }
          async function w(e, r) {
            const t = f();
            let o,
              u = 0,
              d = [];
            try {
              o = self.navigator.serviceWorker;
            } catch {}
            const l =
              c && (null == o ? void 0 : o.controller)
                ? await (async function (e) {
                    const r = await caches.open(a),
                      t = [];
                    for (const n of e)
                      if (await r.match(n.src)) n.originalLoad();
                      else t.push(n);
                    return t;
                  })(e)
                : e;
            for (const f of l) {
              const e = f.src.substring(t.length),
                r = e ? i[e] || 0 : 0;
              if ((d.length >= 1 && u + r > s) || d.length >= n)
                b(d), (d = []), (u = 0);
              d.push(f), (u += r);
            }
            function b(e) {
              if (1 === e.length) return void e[0].originalLoad();
              const n = _(),
                f = e.map(({ src: e }) => e.substring(t.length)).join("+");
              r(`${n}/chunk-batch/${f}`, (r) => {
                for (const { callback: t, src: n } of e)
                  t({ type: r.type, target: { src: n, href: n } });
              });
            }
            d.length && b(d), (e.length = 0);
          }
          function E(e, r) {
            if (0 === e.length) return;
            const t = f();
            if (1 !== e.length)
              r(
                `${_()}/chunk-batch/${e
                  .map(({ src: e }) => e.substring(t.length))
                  .join("+")}`,
                (r) => {
                  for (const { callback: t, src: n } of e)
                    t({ type: r.type, target: { src: n, href: n } });
                }
              );
            else e[0].originalLoad();
          }
        })(
          c,
          12e4,
          self.__sync_batch_chunks__,
          40,
          () => c.p,
          10485760,
          {
            "066d4af168b1eeba.ltr.css": 409599,
            "935ce78cba9f8b4d.js": 12637719,
            "80c3ff429feb3594.rtl.css": 409610,
            "b731487a1fc16dc3.runtime.js": 64175,
            "a0684b0780c739e9.vendor.ltr.css": 15305,
            "231b3f91417fa696.vendor.js": 2897343,
            "8e54262212aed57f.vendor.rtl.css": 15305,
            "7f3c82de601b1e04.vendor.js": 695071,
            "69ca4ca21824745b.ltr.css": 6768,
            "798ec5a5aeaec610.js": 517485,
            "3ac6eb2ed7cd5712.rtl.css": 6768,
            "d7cf0aba64e1b2d4.ltr.css": 248,
            "af6ec7e1d1b20239.js": 5283,
            "cb3538416979fc60.rtl.css": 248,
            "9353c1c4ed2d7a5b.vendor.js": 169517,
            "792cfaff8a5e3cf7.js": 85535,
            "3c33882df929e4c7.ltr.css": 3642,
            "cea54ba7af509afc.js": 303104,
            "56d884fea768488d.rtl.css": 3642,
            "02edef8a141f6536.vendor.js": 114696,
            "6ad07ca8180cf2f2.vendor.js": 158330,
            "f24a7ad96adc6e00.js": 70099,
            "644d51e23e20ed21.js": 433700,
            "70a03f401af13746.js": 226815,
            "0ea0415c177dccf6.js": 98988,
            "b47d687f21f4bfb5.js": 241713,
            "b7f33008d159c536.js": 78477,
            "790ee5f7bbcd862c.js": 309114,
            "c9bf091720f7f1c3.ltr.css": 233,
            "5a8faf89f9ca2077.js": 583269,
            "49dcf4c456be0dd9.rtl.css": 233,
            "71dec1f5d11e3f66.ltr.css": 360,
            "25d6f2102eaaf2b2.js": 372158,
            "7cf7805937173758.rtl.css": 360,
            "b669cdc1cb38deb7.js": 77472,
            "8536fc793eaa40ff.js": 102265,
            "f56c14c6fa22e151.js": 225807,
            "f8678f5d2a496896.ltr.css": 355,
            "8cdbda3fff580c2c.js": 166440,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "c0fbc223512b19ee.js": 251558,
            "7dac84e36568326f.rtl.css": 355,
            "c50a9e16209ba00c.js": 184072,
            "11d5c393b2c0c593.vendor.js": 31759,
            "7181f6b9abe19c14.js": 187227,
            "a6fdb9e97be05892.js": 332718,
            "5b2241d885919c07.ltr.css": 360,
            "7528a81d25ecbd77.js": 70398,
            "3759df5a77daebac.rtl.css": 360,
            "10e197dca0efc8f1.js": 175984,
            "8c46b9f81bdf237c.js": 40150,
            "e7cd4fac2c0c935e.js": 36032,
            "194dcd0e5e0697d9.js": 43893,
            "7ad552220b4bfd5f.js": 51775,
            "d3c3305fe3cf6ad9.js": 24590,
            "8dd0cb1e0979d988.ltr.css": 5371,
            "e072e860751dae5a.js": 363912,
            "eaf9987ddc748d09.rtl.css": 5371,
            "3735dc52136d446c.ltr.css": 13138,
            "71045726bd20b6d2.js": 722939,
            "b48165e316589a0c.rtl.css": 13138,
            "118052af16110a6a.ltr.css": 253,
            "98774ee7ecd52bf2.js": 42172,
            "879da7300712ed1a.rtl.css": 253,
            "5b7fe8f909b06739.ltr.css": 913,
            "f6a59fc8634969c8.js": 60121,
            "b197b394e4f55ce1.rtl.css": 913,
            "f781ab65cc1c6f71.vendor.js": 648024,
            "44ce630fa966dd23.ltr.css": 607,
            "c1839de005f3ee85.js": 67305,
            "8ec5819b5639aca4.rtl.css": 607,
            "12c5f0b903d1f0f1.js": 257728,
            "4180b2f27f021f90.js": 448778,
            "dcc674e45ddeda63.js": 281160,
            "638e8938c76a575e.ltr.css": 412,
            "5f25081f8a3797e2.js": 158269,
            "1e246b15020f607d.rtl.css": 414,
            "1924c1fccfa75033.js": 16390,
            "0dcfcdd3fe55a646.js": 9042,
            "9389c182256e30f8.js": 47023,
            "7959f67daf2b2dbc.js": 60944,
            "db17d82403a2e558.js": 9829,
            "1732792510d6e415.js": 10886,
            "86319d1aacd3d613.ltr.css": 111375,
            "c7bae1787b8c0661.js": 2687428,
            "87969b9ffcdabd63.rtl.css": 111380,
            "65e9faebfa1ea796.vendor.js": 52495,
            "fd8942d9bab90e1d.ltr.css": 15017,
            "b05b4d310c241c9a.js": 109674,
            "3fc89a66687c3f68.rtl.css": 15018,
            "6591b54e04964760.ltr.css": 18034,
            "a5249a4ee05bff95.js": 241541,
            "0848e26828d6f0d9.rtl.css": 18036,
            "c4b6e11e122d8359.js": 208337,
            "e8ae45002fe91836.js": 3316,
            "bdb44c4ce40044d0.js": 3011,
            "b713fefe5ac1f3db.js": 228933,
            "8654906c75ceb152.js": 298212,
            "fc18b079dc861a9a.js": 2654,
            "81087d04ab7999bd.js": 560306,
            "04b867504db66c1a.js": 2781,
            "51db18f0c68ebf1e.js": 213881,
            "b56d0f0e10bd926c.js": 4456,
            "48f117e2a0927a1b.js": 2785,
            "bca48509861cb320.js": 1496,
            "0407c2eb6c35277c.js": 3787,
            "77c86d4bf77d152c.js": 2614,
            "cf94a035f64cca11.js": 2048,
            "6ae9cb4e591cda30.js": 3036,
            "313c70aa3ff9eda5.js": 6118,
            "5190490a2c10df18.js": 2854,
            "4930b1ddf05c4604.js": 4390,
            "1a79c0da3333bf90.js": 4851,
            "2c28147a1cfb9da7.js": 3101,
            "af32b861bb326c15.js": 11030,
            "5c63773a9a7c37cb.js": 10911,
            "0c5977e9e1fe36fd.js": 33857,
            "82aa3b736106389a.ltr.css": 748,
            "46fff9097906868c.js": 65983,
            "c529d5968e467a49.rtl.css": 748,
            "ff2d79ae51f693d2.ltr.css": 5988,
            "e74bf4528225588a.js": 192145,
            "d2ceaed76952769e.rtl.css": 5988,
            "1d8e464c68d437c5.js": 57928,
            "25cb2759363e985a.js": 71845,
            "3bd3ad3750132bc3.js": 6532,
            "ffa0d5e89568161e.js": 37905,
            "fcd5c520d4649ae0.js": 1428,
          },
          self.__check_cache_batch_chunks__,
          "assets-2"
        );
    })(),
    (c.g.BUILD_VARIABLES = Object.assign(c.g.BUILD_VARIABLES || {}, {
      PREFERRED_REACT_RENDERER: "concurrent",
    })),
    (() => {
      const e = JSON.parse(
          '{"5016":4692,"6767":6477,"13685":8347,"19266":9541,"47478":4353,"74640":9951,"75321":7611,"130057":5733,"143286":4874,"146743":4132,"182157":5558,"203898":8856,"217002":5535,"226423":869,"256851":424,"289332":8990,"298717":6291,"318147":5105,"327781":2708,"334257":5199,"337975":7968,"362087":7935,"373860":4656,"376892":1887,"379326":3281,"404990":694,"406255":3814,"434332":3412,"475829":1399,"510622":193,"515157":1169,"521077":3081,"546701":7351,"602856":7724,"607139":1169,"608736":9076,"637518":4182,"646301":3972,"649527":3499,"654571":3546,"677662":7020,"678557":9634,"697762":1761,"710513":2789,"710943":8085,"747575":3645,"756783":8072,"772248":7598,"785265":5199,"787376":3772,"791492":1755,"792592":4043,"798697":8407,"808857":6021,"819355":5826,"821965":1033,"830826":8528,"842726":6574,"843931":1871,"851647":9429,"852031":3540,"855097":4821,"856350":9503,"860328":1945,"884651":481,"888022":9095,"894000":3714,"897583":3189,"901473":7717,"922166":5517,"930428":4663,"935362":4832,"946167":4232,"952088":9206,"957934":3667,"963189":876,"964893":1290,"999718":2244}'
        ),
        r = JSON.parse(
          '{"193":[8600,5199],"424":[],"481":[9554],"694":[],"869":[5199],"876":[4567],"1033":[7773],"1169":[5696,7015],"1290":[],"1389":[],"1399":[],"1755":[],"1761":[],"1871":[9554],"1887":[5199],"1945":[7015],"2244":[],"2653":[],"2708":[3574],"2789":[],"3081":[],"3189":[3574,4567],"3281":[4567],"3412":[],"3499":[8600,5199,4567],"3540":[],"3546":[9554,4567],"3574":[7773,5199],"3645":[5199],"3667":[4567],"3714":[],"3772":[5465,4567],"3814":[4567],"3972":[4567],"4043":[5465],"4132":[],"4158":[],"4182":[],"4232":[5199,4567],"4353":[],"4567":[5696,7773],"4656":[9554],"4663":[],"4692":[],"4821":[9554,4567],"4832":[3574,6596,4567],"4874":[4567],"5105":[9263],"5199":[7015,4158],"5436":[],"5465":[],"5517":[],"5535":[8600],"5558":[],"5696":[],"5733":[9263],"5826":[9263],"6021":[4567],"6291":[],"6477":[7773,5199],"6574":[],"6596":[5465],"7015":[],"7020":[],"7351":[5465],"7598":[],"7611":[],"7717":[5199,4567],"7724":[4158],"7773":[],"7935":[5199],"7968":[],"8072":[3574,4567],"8085":[9554,4567],"8347":[],"8407":[3574,6596,4567],"8528":[5465,5199],"8600":[7015],"8856":[7015,4567],"8990":[],"9076":[],"9095":[4567],"9206":[8600],"9263":[9554,4567],"9429":[],"9503":[9263],"9541":[5199],"9554":[3574],"9634":[],"9951":[]}'
        ),
        t = (e, n, f) => {
          if (!f.has(e))
            return f.add(e), r[e].forEach((e) => t(e, n, f)), n.push(e), n;
        };
      c.me = function (r) {
        const n = e[r];
        if (null == n) return Promise.resolve(c(r));
        const f = t(n, [], new Set());
        return Promise.all(f.map((e) => c.e(e))).then(() => c(r));
      };
    })(),
    (() => {
      const e = {};
      c.f.locale = function (r, t) {
        !(function (e, r, t) {
          if (null == r[e]) {
            const t = self.cmsg;
            if (!t || !t.assets) return;
            const n = t.loaded,
              f = t.locale || "en";
            if (n && n[e + "_" + f]) return;
            const s = t.assets[f] && t.assets[f][e] && t.assets[f][e].js;
            if (!s) return;
            r[e] = Promise.all(
              s.map(
                (t) =>
                  new Promise((n, f) => {
                    const s = c.p + t;
                    c.l(
                      s,
                      (s) => {
                        if ("load" === s.type) (r[e] = 0), n();
                        else
                          delete r[e],
                            f(new Error(`Fail to load message files@${t}`));
                      },
                      "ensure-locale-" + e,
                      e
                    );
                  })
              )
            );
          }
          const n = r[e];
          if (n) t.push(n);
        })(r, e, t);
      };
    })(),
    (() => {
      let e =
        "undefined" != typeof self && void 0 !== self.document
          ? self.document.body.parentElement.getAttribute("dir")
          : "ltr";
      if ("ltr" !== e && "rtl" !== e)
        console.warn(
          "Could not determine the direction of text, please check that the dir attribute is set on the html tag"
        ),
          (e = "ltr");
      if ("rtl" === e) c.miniCssF = c.miniCssFRtl;
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((r, t) => {
              var n = c.miniCssF(e),
                f = c.p + n;
              if (
                ((e, r) => {
                  for (
                    var t = document.getElementsByTagName("link"), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var f =
                      (i = t[n]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (f === e || f === r))
                      return i;
                  }
                  var s = document.getElementsByTagName("style");
                  for (n = 0; n < s.length; n++) {
                    var i;
                    if (
                      (f = (i = s[n]).getAttribute("data-href")) === e ||
                      f === r
                    )
                      return i;
                  }
                })(n, f)
              )
                return r();
              ((e, r, t, n, f) => {
                var s = document.createElement("link");
                (s.rel = "stylesheet"),
                  (s.type = "text/css"),
                  (s.onerror = s.onload =
                    (t) => {
                      if (((s.onerror = s.onload = null), "load" === t.type))
                        n();
                      else {
                        var i = t && ("load" === t.type ? "missing" : t.type),
                          c = (t && t.target && t.target.href) || r,
                          a = new Error(
                            "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                          );
                        if (
                          ((a.code = "CSS_CHUNK_LOAD_FAILED"),
                          (a.type = i),
                          (a.request = c),
                          s.parentNode)
                        )
                          s.parentNode.removeChild(s);
                        f(a);
                      }
                    }),
                  (s.href = r),
                  (function (e) {
                    const r = (e) => {
                      document.head.appendChild(e);
                    };
                    if (c.loadCss) c.loadCss(e, r);
                    else r(e);
                  })(s);
              })(e, f, 0, r, t);
            }),
          r = { 8581: 0 };
        c.f.miniCss = (t, n) => {
          if (r[t]) n.push(r[t]);
          else if (
            0 !== r[t] &&
            {
              193: 1,
              869: 1,
              1169: 1,
              2708: 1,
              3189: 1,
              3499: 1,
              3546: 1,
              3574: 1,
              4182: 1,
              4567: 1,
              4656: 1,
              4663: 1,
              5199: 1,
              7611: 1,
              7935: 1,
              8085: 1,
              8528: 1,
              8600: 1,
              9263: 1,
            }[t]
          )
            n.push(
              (r[t] = e(t).then(
                () => {
                  r[t] = 0;
                },
                (e) => {
                  throw (delete r[t], e);
                }
              ))
            );
        };
      }
    })(),
    (() => {
      var e = { 8581: 0 };
      (c.f.j = (r, t) => {
        var n = c.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (8581 != r) {
            var f = new Promise((t, f) => (n = e[r] = [t, f]));
            t.push((n[2] = f));
            var s = c.p + c.u(r),
              i = new Error();
            c.l(
              s,
              (t) => {
                if (c.o(e, r)) {
                  if (0 !== (n = e[r])) e[r] = void 0;
                  if (n) {
                    var f = t && ("load" === t.type ? "missing" : t.type),
                      s = t && t.target && t.target.src;
                    (i.message =
                      "Loading chunk " +
                      r +
                      " failed.\n(" +
                      f +
                      ": " +
                      s +
                      ")"),
                      (i.name = "ChunkLoadError"),
                      (i.type = f),
                      (i.request = s),
                      n[1](i);
                  }
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (c.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var n,
            f,
            [s, i, a] = t,
            o = 0;
          if (s.some((r) => 0 !== e[r])) {
            for (n in i) if (c.o(i, n)) c.m[n] = i[n];
            if (a) var u = a(c);
          }
          if (r) r(t);
          for (; o < s.length; o++) {
            if (((f = s[o]), c.o(e, f) && e[f])) e[f][0]();
            e[f] = 0;
          }
          return c.O(u);
        },
        t = (self.webpackChunk_canva_web = self.webpackChunk_canva_web || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
//# sourceMappingURL=sourcemaps/b731487a1fc16dc3.runtime.js.map
