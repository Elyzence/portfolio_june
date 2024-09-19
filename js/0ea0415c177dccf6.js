(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [7773],
  {
    /***/ 988256: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._fe4d99ebe0d2d259646a80d250150d47 =
        self._fe4d99ebe0d2d259646a80d250150d47 || {};
      (function (__c) {
        var dX;
        var u7a;
        __c.bX = function (a) {
          const b = [];
          for (let c = 0; c < a.length; c++)
            for (let d = 0; d < a[c].length; d++)
              (b[d] = b[d] || []), (b[d][c] = a[c][d]);
          return b;
        };
        __c.s7a = function ({
          icon: a,
          ariaLabel: b,
          fill: c,
          height: d,
          width: e,
          PTa: f = !1,
          jMa: g = !1,
          onClick: h,
          Wua: k,
          fillOpacity: l,
        }) {
          g = g ? 0.75 : 1;
          const m = 24 * g;
          return p7a(__c.cX, {
            role: "button",
            ariaLabel: b,
            onClick: h,
            children: [
              f
                ? dX(q7a, {
                    fill: c,
                    fillOpacity: null !== l && void 0 !== l ? l : 1,
                    width: e,
                  })
                : dX(r7a, { fill: c, height: d, width: e }),
              dX("g", {
                transform: `translate(${(e - m) / 2}, ${
                  (d - m) / 2
                }) scale(${g}) `,
                style: { ...k, pointerEvents: "none" },
                children: dX(a, {}),
              }),
            ],
          });
        };
        __c.eX = function (a) {
          return t7a(({ className: b }) =>
            dX("g", { dangerouslySetInnerHTML: { __html: a }, className: b })
          );
        };
        u7a = __webpack_require__(168949);
        __c.fX = u7a.Fl;
        __c.v7a = u7a.EH;
        var w7a, p7a;
        w7a = __webpack_require__(785893);
        dX = __c.dX = w7a.jsx;
        p7a = w7a.jsxs;
        var gX, z7a, t7a;
        gX = __webpack_require__(667294);
        __c.x7a = gX.useRef;
        __c.y7a = gX.useLayoutEffect;
        z7a = gX.Component;
        t7a = gX.memo;
        __c.hX = class {
          static yD(a) {
            if (null == a) return !1;
            switch (a.type) {
              case "google-sheets":
              case "copy-sheets":
                return !1;
              case "live-sheets":
                return !0;
              case "app":
                return !1;
              default:
                throw new __c.E(a);
            }
          }
        };
        var iX, B7a, A7a;
        iX = (a) =>
          !a.defaultPrevented &&
          (0 === a.button || void 0 === a.button) &&
          !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
        __c.cX = class extends z7a {
          render() {
            const a = this.props.role;
            var b = this.props.tabIndex;
            b = null !== b && void 0 !== b ? b : "button" === a ? 0 : void 0;
            return dX("g", {
              role: a,
              "aria-label": this.props.ariaLabel,
              tabIndex: b,
              onKeyDown: null != b ? this.onKeyDown : void 0,
              onMouseDown: this.sXa,
              onTouchStart: this.onTouchStart,
              onMouseUp: this.nXa,
              onTouchEnd: this.onTouchEnd,
              onClick: this.onClick,
              style: __c.zt.Rg ? A7a : B7a,
              children: this.props.children,
            });
          }
          constructor(...a) {
            super(...a);
            this.Zi = this.Yi = 0;
            this.sXa = (b) => {
              iX(b) &&
                ((this.startTime = Date.now()),
                (this.Yi = b.pageX),
                (this.Zi = b.pageY));
            };
            this.onTouchStart = (b) => {
              1 === b.touches.length &&
                iX(b) &&
                ((this.startTime = Date.now()),
                (this.Yi = b.touches[0].pageX),
                (this.Zi = b.touches[0].pageY));
            };
            this.nXa = (b) => {
              if (iX(b)) {
                var c = this.startTime;
                null != c &&
                  ((this.startTime = void 0),
                  !(1e3 < Date.now() - c) &&
                    5 >
                      Math.abs(b.pageX - this.Yi) +
                        Math.abs(b.pageY - this.Zi) &&
                    (b.preventDefault(), this.props.onClick(b)));
              } else this.startTime = void 0;
            };
            this.onTouchEnd = (b) => {
              if (0 === b.touches.length && iX(b)) {
                var c = this.startTime;
                null != c &&
                  ((this.startTime = void 0),
                  !(1e3 < Date.now() - c) &&
                    5 >
                      Math.abs(b.changedTouches[0].pageX - this.Yi) +
                        Math.abs(b.changedTouches[0].pageY - this.Zi) &&
                    (b.preventDefault(), this.props.onClick(b)));
              } else this.startTime = void 0;
            };
            this.onClick = (b) => {
              b.stopPropagationAtElementView = !0;
            };
            this.onKeyDown = (b) => {
              if (" " === b.key || "Enter" === b.key) this.props.onClick(b);
            };
          }
        };
        B7a = { cursor: "pointer" };
        A7a = { cursor: "pointer", outline: "none" };
        var q7a = ({ width: a, fill: b, fillOpacity: c }) =>
            dX("circle", {
              cx: a / 2,
              cy: a / 2,
              r: a / 2,
              fill: b,
              fillOpacity: c,
              pointerEvents: "all",
            }),
          r7a = ({ fill: a, height: b, width: c }) =>
            dX("rect", {
              x: 0,
              y: 0,
              fill: a,
              width: c,
              height: b,
              rx: 4,
              ry: 4,
              pointerEvents: "all",
            });
        __c.C7a = new Set(
          "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BOV BRL BSD BTN BWP BYN BZD CAD CDF CHE CHF CHW CLF CLP CNY COP COU CRC CUC CUP CVE CZK DJF DKK DOP DZD EGP ERN ETB EUR FJD FKP GBP GEL GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS INR IQD IRR ISK JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP MRU MUR MVR MWK MXN MXV MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLE SOS SRD SSP STN SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD USN UYI UYU UZS VED VEF VND VUV WST XAF XCD XDR XOF XPF XSU XUA YER ZAR ZMW ZWL".split(
            " "
          )
        );
        __c.D7a = new Set([",", ".", "'", " ", "\u2019"]);
        __c.E7a = new Set([",", "."]);
        __c.F7a = RegExp(
          "^(-?)([^0-9\\.,\u2019+\\-\\/]{0,50})([+-]?[0-9 \\.,\u2019]*[0-9\\.,])([eE][+-]?[0-9]*)?([^0-9\\.,\u2019+\\-\\/]{0,50})$"
        );
        __c.G7a = Math.sqrt(50);
        __c.H7a = Math.sqrt(10);
        __c.I7a = Math.sqrt(2);
      }.call(self, self._fe4d99ebe0d2d259646a80d250150d47));
    },
  },
]);
//# sourceMappingURL=sourcemaps/0ea0415c177dccf6.js.map
