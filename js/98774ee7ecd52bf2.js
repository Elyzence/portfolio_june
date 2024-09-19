(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4663],
  {
    /***/ 930428: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var awb = class {
            equals(a) {
              return (
                this.type === a.type &&
                this.switch === a.switch &&
                this.container.equals(a.container)
              );
            }
            constructor(a, b) {
              this.container = a;
              this.type = "switch-item";
              this.switch = b;
            }
          },
          bwb = class {
            get switch() {
              return this.container.switch;
            }
            get items() {
              return this.text.items;
            }
            equals(a) {
              return (
                this.type === a.type &&
                this.option === a.option &&
                this.container.equals(a.container)
              );
            }
            constructor(a, b) {
              __c.N(this, { items: __c.R });
              this.container = a;
              this.option = b;
              this.type = "switch-item-option";
              __c.v(a.switch.options.has(b));
              this.text = b.text;
            }
          },
          cwb = class {
            get elements() {
              return this.switch.options.map((a) => a.element);
            }
            equals(a) {
              return (
                this.type === a.type &&
                this.switch === a.switch &&
                this.container.equals(a.container)
              );
            }
            constructor(a, b) {
              __c.N(this, { elements: __c.R });
              this.container = a;
              this.type = "switch-element";
              __c.v(a.elements.includes(b));
              this.switch = b;
            }
          },
          N6 = __webpack_require__(785893).jsx;
        var O6 = __webpack_require__(433581).Pi;
        var dwb = __webpack_require__(667294),
          ewb = dwb.useRef,
          fwb = dwb.useEffect;
        var gwb = __webpack_require__(168949).EH;
        var hwb = O6(({ element: a, container: b, ...c }) => {
            const d = ewb(null);
            fwb(() => {
              const e = d.current;
              if (e)
                return gwb(() => {
                  var f, g;
                  const h =
                    null !==
                      (g =
                        null === (f = c.scaleFactor) || void 0 === f
                          ? void 0
                          : f.get()) && void 0 !== g
                      ? g
                      : 1;
                  f = a.height;
                  e.style.width = `${a.width * h}px`;
                  e.style.height = `${f * h}px`;
                });
            }, [a, c.scaleFactor]);
            return N6("div", {
              className: "E_yBwg",
              ref: d,
              children:
                a.Yy &&
                N6(__c.xz, {
                  ...c,
                  element: a.Yy.element,
                  container: new cwb(b, a),
                  animation: void 0,
                }),
            });
          }),
          iwb = __c.Rs(hwb);
        var jwb = O6((a) => {
          const b = a.Rb,
            c = a.vc,
            d = a.tg,
            e = a.item,
            f = a.Ot;
          return N6("div", {
            className: "E_yBwg",
            ref: a.measureRef,
            children:
              e.Yy &&
              N6(
                f,
                {
                  Rb: b,
                  vc: c,
                  text: e.Yy.text,
                  $i: new bwb(new awb(d, e), e.Yy),
                },
                e.options.nx(e.Yy)
              ),
          });
        });
        __c.rqa = {
          FTa: function (a) {
            switch (a.Xc) {
              case "fixed":
                a.It.j8 = (d) => N6(iwb, { ...d });
                break;
              case "responsive":
                const b = a.Td;
                a = a.Xs;
                const c = a();
                b.Xl.B8 = O6((d) => {
                  __c.v("layout-item-cell" === d.tg.type);
                  return N6(jwb, { ...d, Ot: c });
                });
                break;
              default:
                throw new __c.E(a);
            }
          },
        };
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/98774ee7ecd52bf2.js.map
