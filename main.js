/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Ri = s(() => {
    window.tram = (function (e) {
      function t(l, p) {
        var h = new ye.Bare();
        return h.init(l, p);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (p) {
          return "-" + p.toLowerCase();
        });
      }
      function n(l) {
        var p = parseInt(l.slice(1), 16),
          h = (p >> 16) & 255,
          y = (p >> 8) & 255,
          w = 255 & p;
        return [h, y, w];
      }
      function o(l, p, h) {
        return (
          "#" + ((1 << 24) | (l << 16) | (p << 8) | h).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, p) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof p + "] " + p);
      }
      function u(l, p, h) {
        f("Units do not match [" + l + "]: " + p + ", " + h);
      }
      function c(l, p, h) {
        if ((p !== void 0 && (h = p), l === void 0)) return h;
        var y = h;
        return (
          TT.test(l) || !ds.test(l)
            ? (y = parseInt(l, 10))
            : ds.test(l) && (y = 1e3 * parseFloat(l)),
          0 > y && (y = 0),
          y === y ? y : h
        );
      }
      function f(l) {
        Ae.debug && window && window.console.warn(l);
      }
      function v(l) {
        for (var p = -1, h = l ? l.length : 0, y = []; ++p < h; ) {
          var w = l[p];
          w && y.push(w);
        }
        return y;
      }
      var d = (function (l, p, h) {
          function y(j) {
            return typeof j == "object";
          }
          function w(j) {
            return typeof j == "function";
          }
          function m() {}
          function V(j, oe) {
            function F() {
              var Te = new $();
              return w(Te.init) && Te.init.apply(Te, arguments), Te;
            }
            function $() {}
            oe === h && ((oe = j), (j = Object)), (F.Bare = $);
            var Z,
              le = (m[l] = j[l]),
              He = ($[l] = F[l] = new m());
            return (
              (He.constructor = F),
              (F.mixin = function (Te) {
                return ($[l] = F[l] = V(F, Te)[l]), F;
              }),
              (F.open = function (Te) {
                if (
                  ((Z = {}),
                  w(Te) ? (Z = Te.call(F, He, le, F, j)) : y(Te) && (Z = Te),
                  y(Z))
                )
                  for (var dr in Z) p.call(Z, dr) && (He[dr] = Z[dr]);
                return w(He.init) || (He.init = j), F;
              }),
              F.open(oe)
            );
          }
          return V;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, p, h, y) {
              var w = (l /= y) * l,
                m = w * l;
              return (
                p +
                h * (-2.75 * m * w + 11 * w * w + -15.5 * m + 8 * w + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, p, h, y) {
              var w = (l /= y) * l,
                m = w * l;
              return p + h * (-1 * m * w + 3 * w * w + -3 * m + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, p, h, y) {
              var w = (l /= y) * l,
                m = w * l;
              return (
                p +
                h * (0.3 * m * w + -1.6 * w * w + 2.2 * m + -1.8 * w + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, p, h, y) {
              var w = (l /= y) * l,
                m = w * l;
              return p + h * (2 * m * w + -5 * w * w + 2 * m + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (l, p, h, y) {
              return (h * l) / y + p;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, p, h, y) {
              return h * (l /= y) * l + p;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, p, h, y) {
              return -h * (l /= y) * (l - 2) + p;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, p, h, y) {
              return (l /= y / 2) < 1
                ? (h / 2) * l * l + p
                : (-h / 2) * (--l * (l - 2) - 1) + p;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, p, h, y) {
              return h * (l /= y) * l * l + p;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, p, h, y) {
              return h * ((l = l / y - 1) * l * l + 1) + p;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, p, h, y) {
              return (l /= y / 2) < 1
                ? (h / 2) * l * l * l + p
                : (h / 2) * ((l -= 2) * l * l + 2) + p;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, p, h, y) {
              return h * (l /= y) * l * l * l + p;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, p, h, y) {
              return -h * ((l = l / y - 1) * l * l * l - 1) + p;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, p, h, y) {
              return (l /= y / 2) < 1
                ? (h / 2) * l * l * l * l + p
                : (-h / 2) * ((l -= 2) * l * l * l - 2) + p;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, p, h, y) {
              return h * (l /= y) * l * l * l * l + p;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, p, h, y) {
              return h * ((l = l / y - 1) * l * l * l * l + 1) + p;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, p, h, y) {
              return (l /= y / 2) < 1
                ? (h / 2) * l * l * l * l * l + p
                : (h / 2) * ((l -= 2) * l * l * l * l + 2) + p;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, p, h, y) {
              return -h * Math.cos((l / y) * (Math.PI / 2)) + h + p;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, p, h, y) {
              return h * Math.sin((l / y) * (Math.PI / 2)) + p;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, p, h, y) {
              return (-h / 2) * (Math.cos((Math.PI * l) / y) - 1) + p;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, p, h, y) {
              return l === 0 ? p : h * Math.pow(2, 10 * (l / y - 1)) + p;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, p, h, y) {
              return l === y
                ? p + h
                : h * (-Math.pow(2, (-10 * l) / y) + 1) + p;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, p, h, y) {
              return l === 0
                ? p
                : l === y
                ? p + h
                : (l /= y / 2) < 1
                ? (h / 2) * Math.pow(2, 10 * (l - 1)) + p
                : (h / 2) * (-Math.pow(2, -10 * --l) + 2) + p;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, p, h, y) {
              return -h * (Math.sqrt(1 - (l /= y) * l) - 1) + p;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, p, h, y) {
              return h * Math.sqrt(1 - (l = l / y - 1) * l) + p;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, p, h, y) {
              return (l /= y / 2) < 1
                ? (-h / 2) * (Math.sqrt(1 - l * l) - 1) + p
                : (h / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + p;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                h * (l /= y) * l * ((w + 1) * l - w) + p
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                h * ((l = l / y - 1) * l * ((w + 1) * l + w) + 1) + p
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                (l /= y / 2) < 1
                  ? (h / 2) * l * l * (((w *= 1.525) + 1) * l - w) + p
                  : (h / 2) *
                      ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) +
                    p
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        S = window,
        q = "bkwld-tram",
        O = /[\-\.0-9]/g,
        A = /[A-Z]/,
        _ = "number",
        C = /^(rgb|#)/,
        R = /(em|cm|mm|in|pt|pc|px)$/,
        N = /(em|cm|mm|in|pt|pc|px|%)$/,
        M = /(deg|rad|turn)$/,
        G = "unitless",
        X = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        W = " ",
        L = b.createElement("a"),
        g = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        x = function (l) {
          if (l in L.style) return { dom: l, css: l };
          var p,
            h,
            y = "",
            w = l.split("-");
          for (p = 0; p < w.length; p++)
            y += w[p].charAt(0).toUpperCase() + w[p].slice(1);
          for (p = 0; p < g.length; p++)
            if (((h = g[p] + y), h in L.style))
              return { dom: h, css: P[p] + l };
        },
        D = (t.support = {
          bind: Function.prototype.bind,
          transform: x("transform"),
          transition: x("transition"),
          backface: x("backface-visibility"),
          timing: x("transition-timing-function"),
        });
      if (D.transition) {
        var B = D.timing.dom;
        if (((L.style[B] = E["ease-in-back"][0]), !L.style[B]))
          for (var K in I) E[K][0] = I[K];
      }
      var ne = (t.frame = (function () {
          var l =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return l && D.bind
            ? l.bind(S)
            : function (p) {
                S.setTimeout(p, 16);
              };
        })()),
        Ne = (t.now = (function () {
          var l = S.performance,
            p = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return p && D.bind
            ? p.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        je = d(function (l) {
          function p(U, J) {
            var se = v(("" + U).split(W)),
              ee = se[0];
            J = J || {};
            var Ie = bi[ee];
            if (!Ie) return f("Unsupported property: " + ee);
            if (!J.weak || !this.props[ee]) {
              var Me = Ie[0],
                be = this.props[ee];
              return (
                be || (be = this.props[ee] = new Me.Bare()),
                be.init(this.$el, se, Ie, J),
                be
              );
            }
          }
          function h(U, J, se) {
            if (U) {
              var ee = typeof U;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ee == "number" && J)
              )
                return (
                  (this.timer = new Qr({
                    duration: U,
                    context: this,
                    complete: m,
                  })),
                  void (this.active = !0)
                );
              if (ee == "string" && J) {
                switch (U) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    V.call(this);
                    break;
                  case "redraw":
                    $.call(this);
                    break;
                  default:
                    p.call(this, U, se && se[1]);
                }
                return m.call(this);
              }
              if (ee == "function") return void U.call(this, this);
              if (ee == "object") {
                var Ie = 0;
                He.call(
                  this,
                  U,
                  function (fe, mT) {
                    fe.span > Ie && (Ie = fe.span), fe.stop(), fe.animate(mT);
                  },
                  function (fe) {
                    "wait" in fe && (Ie = c(fe.wait, 0));
                  }
                ),
                  le.call(this),
                  Ie > 0 &&
                    ((this.timer = new Qr({ duration: Ie, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = m));
                var Me = this,
                  be = !1,
                  Zr = {};
                ne(function () {
                  He.call(Me, U, function (fe) {
                    fe.active && ((be = !0), (Zr[fe.name] = fe.nextStyle));
                  }),
                    be && Me.$el.css(Zr);
                });
              }
            }
          }
          function y(U) {
            (U = c(U, 0)),
              this.active
                ? this.queue.push({ options: U })
                : ((this.timer = new Qr({
                    duration: U,
                    context: this,
                    complete: m,
                  })),
                  (this.active = !0));
          }
          function w(U) {
            return this.active
              ? (this.queue.push({ options: U, args: arguments }),
                void (this.timer.complete = m))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function m() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var U = this.queue.shift();
              h.call(this, U.options, !0, U.args);
            }
          }
          function V(U) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof U == "string"
              ? ((J = {}), (J[U] = 1))
              : (J = typeof U == "object" && U != null ? U : this.props),
              He.call(this, J, Te),
              le.call(this);
          }
          function j(U) {
            V.call(this, U), He.call(this, U, dr, IT);
          }
          function oe(U) {
            typeof U != "string" && (U = "block"), (this.el.style.display = U);
          }
          function F() {
            V.call(this), (this.el.style.display = "none");
          }
          function $() {
            this.el.offsetHeight;
          }
          function Z() {
            V.call(this), e.removeData(this.el, q), (this.$el = this.el = null);
          }
          function le() {
            var U,
              J,
              se = [];
            this.upstream && se.push(this.upstream);
            for (U in this.props)
              (J = this.props[U]), J.active && se.push(J.string);
            (se = se.join(",")),
              this.style !== se &&
                ((this.style = se), (this.el.style[D.transition.dom] = se));
          }
          function He(U, J, se) {
            var ee,
              Ie,
              Me,
              be,
              Zr = J !== Te,
              fe = {};
            for (ee in U)
              (Me = U[ee]),
                ee in st
                  ? (fe.transform || (fe.transform = {}),
                    (fe.transform[ee] = Me))
                  : (A.test(ee) && (ee = r(ee)),
                    ee in bi
                      ? (fe[ee] = Me)
                      : (be || (be = {}), (be[ee] = Me)));
            for (ee in fe) {
              if (((Me = fe[ee]), (Ie = this.props[ee]), !Ie)) {
                if (!Zr) continue;
                Ie = p.call(this, ee);
              }
              J.call(this, Ie, Me);
            }
            se && be && se.call(this, be);
          }
          function Te(U) {
            U.stop();
          }
          function dr(U, J) {
            U.set(J);
          }
          function IT(U) {
            this.$el.css(U);
          }
          function xe(U, J) {
            l[U] = function () {
              return this.children
                ? OT.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function OT(U, J) {
            var se,
              ee = this.children.length;
            for (se = 0; ee > se; se++) U.apply(this.children[se], J);
            return this;
          }
          (l.init = function (U) {
            if (
              ((this.$el = e(U)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Ae.keepInherited && !Ae.fallback)
            ) {
              var J = ls(this.el, "transition");
              J && !X.test(J) && (this.upstream = J);
            }
            D.backface &&
              Ae.hideBackface &&
              Pt(this.el, D.backface.css, "hidden");
          }),
            xe("add", p),
            xe("start", h),
            xe("wait", y),
            xe("then", w),
            xe("next", m),
            xe("stop", V),
            xe("set", j),
            xe("show", oe),
            xe("hide", F),
            xe("redraw", $),
            xe("destroy", Z);
        }),
        ye = d(je, function (l) {
          function p(h, y) {
            var w = e.data(h, q) || e.data(h, q, new je.Bare());
            return w.el || w.init(h), y ? w.start(y) : w;
          }
          l.init = function (h, y) {
            var w = e(h);
            if (!w.length) return this;
            if (w.length === 1) return p(w[0], y);
            var m = [];
            return (
              w.each(function (V, j) {
                m.push(p(j, y));
              }),
              (this.children = m),
              this
            );
          };
        }),
        Y = d(function (l) {
          function p() {
            var m = this.get();
            this.update("auto");
            var V = this.get();
            return this.update(m), V;
          }
          function h(m, V, j) {
            return V !== void 0 && (j = V), m in E ? m : j;
          }
          function y(m) {
            var V = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(m);
            return (V ? o(V[1], V[2], V[3]) : m).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (m, V, j, oe) {
            (this.$el = m), (this.el = m[0]);
            var F = V[0];
            j[2] && (F = j[2]),
              fs[F] && (F = fs[F]),
              (this.name = F),
              (this.type = j[1]),
              (this.duration = c(V[1], this.duration, w.duration)),
              (this.ease = h(V[2], this.ease, w.ease)),
              (this.delay = c(V[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = oe.unit || this.unit || Ae.defaultUnit),
              (this.angle = oe.angle || this.angle || Ae.defaultAngle),
              Ae.fallback || oe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    W +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? W + E[this.ease][0] : "") +
                    (this.delay ? W + this.delay + "ms" : "")));
          }),
            (l.set = function (m) {
              (m = this.convert(m, this.type)), this.update(m), this.redraw();
            }),
            (l.transition = function (m) {
              (this.active = !0),
                (m = this.convert(m, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  m == "auto" && (m = p.call(this))),
                (this.nextStyle = m);
            }),
            (l.fallback = function (m) {
              var V =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (m = this.convert(m, this.type)),
                this.auto &&
                  (V == "auto" && (V = this.convert(this.get(), this.type)),
                  m == "auto" && (m = p.call(this))),
                (this.tween = new fr({
                  from: V,
                  to: m,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return ls(this.el, this.name);
            }),
            (l.update = function (m) {
              Pt(this.el, this.name, m);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Pt(this.el, this.name, this.get()));
              var m = this.tween;
              m && m.context && m.destroy();
            }),
            (l.convert = function (m, V) {
              if (m == "auto" && this.auto) return m;
              var j,
                oe = typeof m == "number",
                F = typeof m == "string";
              switch (V) {
                case _:
                  if (oe) return m;
                  if (F && m.replace(O, "") === "") return +m;
                  j = "number(unitless)";
                  break;
                case C:
                  if (F) {
                    if (m === "" && this.original) return this.original;
                    if (V.test(m))
                      return m.charAt(0) == "#" && m.length == 7 ? m : y(m);
                  }
                  j = "hex or rgb string";
                  break;
                case R:
                  if (oe) return m + this.unit;
                  if (F && V.test(m)) return m;
                  j = "number(px) or string(unit)";
                  break;
                case N:
                  if (oe) return m + this.unit;
                  if (F && V.test(m)) return m;
                  j = "number(px) or string(unit or %)";
                  break;
                case M:
                  if (oe) return m + this.angle;
                  if (F && V.test(m)) return m;
                  j = "number(deg) or string(angle)";
                  break;
                case G:
                  if (oe || (F && N.test(m))) return m;
                  j = "number(unitless) or string(unit or %)";
              }
              return a(j, m), m;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Le = d(Y, function (l, p) {
          l.init = function () {
            p.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), C));
          };
        }),
        lr = d(Y, function (l, p) {
          (l.init = function () {
            p.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (h) {
              this.$el[this.name](h);
            });
        }),
        $r = d(Y, function (l, p) {
          function h(y, w) {
            var m, V, j, oe, F;
            for (m in y)
              (oe = st[m]),
                (j = oe[0]),
                (V = oe[1] || m),
                (F = this.convert(y[m], j)),
                w.call(this, V, F, j);
          }
          (l.init = function () {
            p.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                st.perspective &&
                  Ae.perspective &&
                  ((this.current.perspective = Ae.perspective),
                  Pt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (y) {
              h.call(this, y, function (w, m) {
                this.current[w] = m;
              }),
                Pt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (y) {
              var w = this.values(y);
              this.tween = new cs({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var m,
                V = {};
              for (m in this.current) V[m] = m in w ? w[m] : this.current[m];
              (this.active = !0), (this.nextStyle = this.style(V));
            }),
            (l.fallback = function (y) {
              var w = this.values(y);
              this.tween = new cs({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              Pt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (y) {
              var w,
                m = "";
              for (w in y) m += w + "(" + y[w] + ") ";
              return m;
            }),
            (l.values = function (y) {
              var w,
                m = {};
              return (
                h.call(this, y, function (V, j, oe) {
                  (m[V] = j),
                    this.current[V] === void 0 &&
                      ((w = 0),
                      ~V.indexOf("scale") && (w = 1),
                      (this.current[V] = this.convert(w, oe)));
                }),
                m
              );
            });
        }),
        fr = d(function (l) {
          function p(F) {
            j.push(F) === 1 && ne(h);
          }
          function h() {
            var F,
              $,
              Z,
              le = j.length;
            if (le)
              for (ne(h), $ = Ne(), F = le; F--; ) (Z = j[F]), Z && Z.render($);
          }
          function y(F) {
            var $,
              Z = e.inArray(F, j);
            Z >= 0 &&
              (($ = j.slice(Z + 1)),
              (j.length = Z),
              $.length && (j = j.concat($)));
          }
          function w(F) {
            return Math.round(F * oe) / oe;
          }
          function m(F, $, Z) {
            return o(
              F[0] + Z * ($[0] - F[0]),
              F[1] + Z * ($[1] - F[1]),
              F[2] + Z * ($[2] - F[2])
            );
          }
          var V = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var $ = F.ease || V.ease;
            E[$] && ($ = E[$][1]),
              typeof $ != "function" && ($ = V.ease),
              (this.ease = $),
              (this.update = F.update || i),
              (this.complete = F.complete || i),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              le = F.to;
            Z === void 0 && (Z = V.from),
              le === void 0 && (le = V.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof le == "number"
                ? ((this.begin = Z), (this.change = le - Z))
                : this.format(le, Z),
              (this.value = this.begin + this.unit),
              (this.start = Ne()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Ne()),
                (this.active = !0),
                p(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), y(this));
            }),
            (l.render = function (F) {
              var $,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var le = this.ease(Z, 0, 1, this.duration);
                return (
                  ($ = this.startRGB
                    ? m(this.startRGB, this.endRGB, le)
                    : w(this.begin + le * this.change)),
                  (this.value = $ + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ($ = this.endHex || this.begin + this.change),
                (this.value = $ + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, $) {
              if ((($ += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = n($)),
                  (this.endRGB = n(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = $.replace(O, ""),
                  le = F.replace(O, "");
                Z !== le && u("tween", $, F), (this.unit = Z);
              }
              ($ = parseFloat($)),
                (F = parseFloat(F)),
                (this.begin = this.value = $),
                (this.change = F - $);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var j = [],
            oe = 1e3;
        }),
        Qr = d(fr, function (l) {
          (l.init = function (p) {
            (this.duration = p.duration || 0),
              (this.complete = p.complete || i),
              (this.context = p.context),
              this.play();
          }),
            (l.render = function (p) {
              var h = p - this.start;
              h < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        cs = d(fr, function (l, p) {
          (l.init = function (h) {
            (this.context = h.context),
              (this.update = h.update),
              (this.tweens = []),
              (this.current = h.current);
            var y, w;
            for (y in h.values)
              (w = h.values[y]),
                this.current[y] !== w &&
                  this.tweens.push(
                    new fr({
                      name: y,
                      from: this.current[y],
                      to: w,
                      duration: h.duration,
                      delay: h.delay,
                      ease: h.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (h) {
              var y,
                w,
                m = this.tweens.length,
                V = !1;
              for (y = m; y--; )
                (w = this.tweens[y]),
                  w.context &&
                    (w.render(h), (this.current[w.name] = w.value), (V = !0));
              return V
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((p.destroy.call(this), this.tweens)) {
                var h,
                  y = this.tweens.length;
                for (h = y; h--; ) this.tweens[h].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !D.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!D.transition) return (Ae.fallback = !0);
        Ae.agentTests.push("(" + l + ")");
        var p = new RegExp(Ae.agentTests.join("|"), "i");
        Ae.fallback = p.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new fr(l);
        }),
        (t.delay = function (l, p, h) {
          return new Qr({ complete: p, duration: l, context: h });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var Pt = e.style,
        ls = e.css,
        fs = { transform: D.transform && D.transform.css },
        bi = {
          color: [Le, C],
          background: [Le, C, "background-color"],
          "outline-color": [Le, C],
          "border-color": [Le, C],
          "border-top-color": [Le, C],
          "border-right-color": [Le, C],
          "border-bottom-color": [Le, C],
          "border-left-color": [Le, C],
          "border-width": [Y, R],
          "border-top-width": [Y, R],
          "border-right-width": [Y, R],
          "border-bottom-width": [Y, R],
          "border-left-width": [Y, R],
          "border-spacing": [Y, R],
          "letter-spacing": [Y, R],
          margin: [Y, R],
          "margin-top": [Y, R],
          "margin-right": [Y, R],
          "margin-bottom": [Y, R],
          "margin-left": [Y, R],
          padding: [Y, R],
          "padding-top": [Y, R],
          "padding-right": [Y, R],
          "padding-bottom": [Y, R],
          "padding-left": [Y, R],
          "outline-width": [Y, R],
          opacity: [Y, _],
          top: [Y, N],
          right: [Y, N],
          bottom: [Y, N],
          left: [Y, N],
          "font-size": [Y, N],
          "text-indent": [Y, N],
          "word-spacing": [Y, N],
          width: [Y, N],
          "min-width": [Y, N],
          "max-width": [Y, N],
          height: [Y, N],
          "min-height": [Y, N],
          "max-height": [Y, N],
          "line-height": [Y, G],
          "scroll-top": [lr, _, "scrollTop"],
          "scroll-left": [lr, _, "scrollLeft"],
        },
        st = {};
      D.transform &&
        ((bi.transform = [$r]),
        (st = {
          x: [N, "translateX"],
          y: [N, "translateY"],
          rotate: [M],
          rotateX: [M],
          rotateY: [M],
          scale: [_],
          scaleX: [_],
          scaleY: [_],
          skew: [M],
          skewX: [M],
          skewY: [M],
        })),
        D.transform &&
          D.backface &&
          ((st.z = [N, "translateZ"]),
          (st.rotateZ = [M]),
          (st.scaleZ = [_]),
          (st.perspective = [R]));
      var TT = /ms/,
        ds = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var vs = s((GB, ps) => {
    var ST = window.$,
      AT = Ri() && ST.tram;
    ps.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        u = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        v = r.forEach,
        d = r.map,
        E = r.reduce,
        I = r.reduceRight,
        b = r.filter,
        S = r.every,
        q = r.some,
        O = r.indexOf,
        A = r.lastIndexOf,
        _ = Array.isArray,
        C = Object.keys,
        R = o.bind,
        N =
          (e.each =
          e.forEach =
            function (g, P, x) {
              if (g == null) return g;
              if (v && g.forEach === v) g.forEach(P, x);
              else if (g.length === +g.length) {
                for (var D = 0, B = g.length; D < B; D++)
                  if (P.call(x, g[D], D, g) === t) return;
              } else
                for (var K = e.keys(g), D = 0, B = K.length; D < B; D++)
                  if (P.call(x, g[K[D]], K[D], g) === t) return;
              return g;
            });
      (e.map = e.collect =
        function (g, P, x) {
          var D = [];
          return g == null
            ? D
            : d && g.map === d
            ? g.map(P, x)
            : (N(g, function (B, K, ne) {
                D.push(P.call(x, B, K, ne));
              }),
              D);
        }),
        (e.find = e.detect =
          function (g, P, x) {
            var D;
            return (
              M(g, function (B, K, ne) {
                if (P.call(x, B, K, ne)) return (D = B), !0;
              }),
              D
            );
          }),
        (e.filter = e.select =
          function (g, P, x) {
            var D = [];
            return g == null
              ? D
              : b && g.filter === b
              ? g.filter(P, x)
              : (N(g, function (B, K, ne) {
                  P.call(x, B, K, ne) && D.push(B);
                }),
                D);
          });
      var M =
        (e.some =
        e.any =
          function (g, P, x) {
            P || (P = e.identity);
            var D = !1;
            return g == null
              ? D
              : q && g.some === q
              ? g.some(P, x)
              : (N(g, function (B, K, ne) {
                  if (D || (D = P.call(x, B, K, ne))) return t;
                }),
                !!D);
          });
      (e.contains = e.include =
        function (g, P) {
          return g == null
            ? !1
            : O && g.indexOf === O
            ? g.indexOf(P) != -1
            : M(g, function (x) {
                return x === P;
              });
        }),
        (e.delay = function (g, P) {
          var x = a.call(arguments, 2);
          return setTimeout(function () {
            return g.apply(null, x);
          }, P);
        }),
        (e.defer = function (g) {
          return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (g) {
          var P, x, D;
          return function () {
            P ||
              ((P = !0),
              (x = arguments),
              (D = this),
              AT.frame(function () {
                (P = !1), g.apply(D, x);
              }));
          };
        }),
        (e.debounce = function (g, P, x) {
          var D,
            B,
            K,
            ne,
            Ne,
            je = function () {
              var ye = e.now() - ne;
              ye < P
                ? (D = setTimeout(je, P - ye))
                : ((D = null), x || ((Ne = g.apply(K, B)), (K = B = null)));
            };
          return function () {
            (K = this), (B = arguments), (ne = e.now());
            var ye = x && !D;
            return (
              D || (D = setTimeout(je, P)),
              ye && ((Ne = g.apply(K, B)), (K = B = null)),
              Ne
            );
          };
        }),
        (e.defaults = function (g) {
          if (!e.isObject(g)) return g;
          for (var P = 1, x = arguments.length; P < x; P++) {
            var D = arguments[P];
            for (var B in D) g[B] === void 0 && (g[B] = D[B]);
          }
          return g;
        }),
        (e.keys = function (g) {
          if (!e.isObject(g)) return [];
          if (C) return C(g);
          var P = [];
          for (var x in g) e.has(g, x) && P.push(x);
          return P;
        }),
        (e.has = function (g, P) {
          return f.call(g, P);
        }),
        (e.isObject = function (g) {
          return g === Object(g);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var G = /(.)^/,
        X = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        W = function (g) {
          return "\\" + X[g];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (g, P, x) {
          !P && x && (P = x), (P = e.defaults({}, P, e.templateSettings));
          var D = RegExp(
              [
                (P.escape || G).source,
                (P.interpolate || G).source,
                (P.evaluate || G).source,
              ].join("|") + "|$",
              "g"
            ),
            B = 0,
            K = "__p+='";
          g.replace(D, function (ye, Y, Le, lr, $r) {
            return (
              (K += g.slice(B, $r).replace(Q, W)),
              (B = $r + ye.length),
              Y
                ? (K +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':_.escape(__t))+
'`)
                : Le
                ? (K +=
                    `'+
((__t=(` +
                    Le +
                    `))==null?'':__t)+
'`)
                : lr &&
                  (K +=
                    `';
` +
                    lr +
                    `
__p+='`),
              ye
            );
          }),
            (K += `';
`);
          var ne = P.variable;
          if (ne) {
            if (!L.test(ne))
              throw new Error("variable is not a bare identifier: " + ne);
          } else
            (K =
              `with(obj||{}){
` +
              K +
              `}
`),
              (ne = "obj");
          K =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            K +
            `return __p;
`;
          var Ne;
          try {
            Ne = new Function(P.variable || "obj", "_", K);
          } catch (ye) {
            throw ((ye.source = K), ye);
          }
          var je = function (ye) {
            return Ne.call(this, ye, e);
          };
          return (
            (je.source =
              "function(" +
              ne +
              `){
` +
              K +
              "}"),
            je
          );
        }),
        e
      );
    })();
  });
  var ke = s((XB, Os) => {
    var te = {},
      Lt = {},
      xt = [],
      Ci = window.Webflow || [],
      ut = window.jQuery,
      Fe = ut(window),
      bT = ut(document),
      Ke = ut.isFunction,
      De = (te._ = vs()),
      hs = (te.tram = Ri() && ut.tram),
      en = !1,
      Ni = !1;
    hs.config.hideBackface = !1;
    hs.config.keepInherited = !0;
    te.define = function (e, t, r) {
      Lt[e] && _s(Lt[e]);
      var n = (Lt[e] = t(ut, De, r) || {});
      return gs(n), n;
    };
    te.require = function (e) {
      return Lt[e];
    };
    function gs(e) {
      te.env() &&
        (Ke(e.design) && Fe.on("__wf_design", e.design),
        Ke(e.preview) && Fe.on("__wf_preview", e.preview)),
        Ke(e.destroy) && Fe.on("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && RT(e);
    }
    function RT(e) {
      if (en) {
        e.ready();
        return;
      }
      De.contains(xt, e.ready) || xt.push(e.ready);
    }
    function _s(e) {
      Ke(e.design) && Fe.off("__wf_design", e.design),
        Ke(e.preview) && Fe.off("__wf_preview", e.preview),
        Ke(e.destroy) && Fe.off("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && wT(e);
    }
    function wT(e) {
      xt = De.filter(xt, function (t) {
        return t !== e.ready;
      });
    }
    te.push = function (e) {
      if (en) {
        Ke(e) && e();
        return;
      }
      Ci.push(e);
    };
    te.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Jr = navigator.userAgent.toLowerCase(),
      ys = (te.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      CT = (te.env.chrome =
        /chrome/.test(Jr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Jr.match(/chrome\/(\d+)\./)[1], 10)),
      NT = (te.env.ios = /(ipod|iphone|ipad)/.test(Jr));
    te.env.safari = /safari/.test(Jr) && !CT && !NT;
    var wi;
    ys &&
      bT.on("touchstart mousedown", function (e) {
        wi = e.target;
      });
    te.validClick = ys
      ? function (e) {
          return e === wi || ut.contains(e, wi);
        }
      : function () {
          return !0;
        };
    var Ts = "resize.webflow orientationchange.webflow load.webflow",
      qT = "scroll.webflow " + Ts;
    te.resize = qi(Fe, Ts);
    te.scroll = qi(Fe, qT);
    te.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = De.throttle(function (o) {
          De.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (De.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = De.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    te.location = function (e) {
      window.location = e;
    };
    te.env() && (te.location = function () {});
    te.ready = function () {
      (en = !0), Ni ? PT() : De.each(xt, Es), De.each(Ci, Es), te.resize.up();
    };
    function Es(e) {
      Ke(e) && e();
    }
    function PT() {
      (Ni = !1), De.each(Lt, gs);
    }
    var _t;
    te.load = function (e) {
      _t.then(e);
    };
    function Is() {
      _t && (_t.reject(), Fe.off("load", _t.resolve)),
        (_t = new ut.Deferred()),
        Fe.on("load", _t.resolve);
    }
    te.destroy = function (e) {
      (e = e || {}),
        (Ni = !0),
        Fe.triggerHandler("__wf_destroy"),
        e.domready != null && (en = e.domready),
        De.each(Lt, _s),
        te.resize.off(),
        te.scroll.off(),
        te.redraw.off(),
        (xt = []),
        (Ci = []),
        _t.state() === "pending" && Is();
    };
    ut(te.ready);
    Is();
    Os.exports = window.Webflow = te;
  });
  var As = s((VB, Ss) => {
    var ms = ke();
    ms.define(
      "brand",
      (Ss.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var I = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (I = !0),
            I &&
              !u &&
              ((f = f || d()),
              E(),
              setTimeout(E, 500),
              e(r).off(c, v).on(c, v));
        };
        function v() {
          var I =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", I ? "display: none !important;" : "");
        }
        function d() {
          var I = e('<a class="w-webflow-badge"></a>').attr(),
            b = e("<img>")
              .attr(
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            S = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return I.append(b, S), I[0];
        }
        function E() {
          var I = o.children(i),
            b = I.length && I.get(0) === f,
            S = ms.env("editor");
          if (b) {
            S && I.remove();
            return;
          }
          I.length && I.remove(), S || o.append(f);
        }
        return t;
      })
    );
  });
  var Rs = s((UB, bs) => {
    var Pi = ke();
    Pi.define(
      "edit",
      (bs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Pi.env("test") || Pi.env("frame")) && !r.fixture && !LT())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          c,
          f = r.load || E,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : o.on(u, d).triggerHandler(u);
        function d() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (c = !0),
            (window.WebflowEditor = !0),
            o.off(u, d),
            A(function (C) {
              e.ajax({
                url: O("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: I(C),
              });
            });
        }
        function I(C) {
          return function (R) {
            if (!R) {
              console.error("Could not load editor data");
              return;
            }
            (R.thirdPartyCookiesSupported = C),
              b(q(R.bugReporterScriptPath), function () {
                b(q(R.scriptPath), function () {
                  window.WebflowEditor(R);
                });
              });
          };
        }
        function b(C, R) {
          e.ajax({ type: "GET", url: C, dataType: "script", cache: !0 }).then(
            R,
            S
          );
        }
        function S(C, R, N) {
          throw (console.error("Could not load editor script: " + R), N);
        }
        function q(C) {
          return C.indexOf("//") >= 0
            ? C
            : O("https://editor-api.webflow.com" + C);
        }
        function O(C) {
          return C.replace(/([^:])\/\//g, "$1/");
        }
        function A(C) {
          var R = window.document.createElement("iframe");
          (R.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (R.style.display = "none"),
            (R.sandbox = "allow-scripts allow-same-origin");
          var N = function (M) {
            M.data === "WF_third_party_cookies_unsupported"
              ? (_(R, N), C(!1))
              : M.data === "WF_third_party_cookies_supported" &&
                (_(R, N), C(!0));
          };
          (R.onerror = function () {
            _(R, N), C(!1);
          }),
            window.addEventListener("message", N, !1),
            window.document.body.appendChild(R);
        }
        function _(C, R) {
          window.removeEventListener("message", R, !1), C.remove();
        }
        return n;
      })
    );
    function LT() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Cs = s((BB, ws) => {
    var xT = ke();
    xT.define(
      "focus-visible",
      (ws.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(_) {
            return !!(
              _ &&
              _ !== document &&
              _.nodeName !== "HTML" &&
              _.nodeName !== "BODY" &&
              "classList" in _ &&
              "contains" in _.classList
            );
          }
          function c(_) {
            var C = _.type,
              R = _.tagName;
            return !!(
              (R === "INPUT" && a[C] && !_.readOnly) ||
              (R === "TEXTAREA" && !_.readOnly) ||
              _.isContentEditable
            );
          }
          function f(_) {
            _.getAttribute("data-wf-focus-visible") ||
              _.setAttribute("data-wf-focus-visible", "true");
          }
          function v(_) {
            _.getAttribute("data-wf-focus-visible") &&
              _.removeAttribute("data-wf-focus-visible");
          }
          function d(_) {
            _.metaKey ||
              _.altKey ||
              _.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function I(_) {
            u(_.target) && (n || c(_.target)) && f(_.target);
          }
          function b(_) {
            u(_.target) &&
              _.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              v(_.target));
          }
          function S() {
            document.visibilityState === "hidden" && (o && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function O() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(_) {
            (_.target.nodeName && _.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), O());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", S, !0),
            q(),
            r.addEventListener("focus", I, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var qs = s((WB, Ns) => {
    var MT = ke();
    MT.define(
      "focus-within",
      (Ns.exports = function () {
        function e(i) {
          for (
            var a = [i], u = null;
            (u = i.parentNode || i.host || i.defaultView);

          )
            a.push(u), (i = u);
          return a;
        }
        function t(i) {
          typeof i.getAttribute != "function" ||
            i.getAttribute("data-wf-focus-within") ||
            i.setAttribute("data-wf-focus-within", "true");
        }
        function r(i) {
          typeof i.getAttribute != "function" ||
            !i.getAttribute("data-wf-focus-within") ||
            i.removeAttribute("data-wf-focus-within");
        }
        function n() {
          var i = function (a) {
            var u;
            function c() {
              (u = !1),
                a.type === "blur" &&
                  Array.prototype.slice.call(e(a.target)).forEach(r),
                a.type === "focus" &&
                  Array.prototype.slice.call(e(a.target)).forEach(t);
            }
            u || (window.requestAnimationFrame(c), (u = !0));
          };
          return (
            document.addEventListener("focus", i, !0),
            document.addEventListener("blur", i, !0),
            t(document.body),
            !0
          );
        }
        function o() {
          if (
            typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within")
          )
            try {
              document.querySelector(":focus-within");
            } catch {
              n();
            }
        }
        return { ready: o };
      })
    );
  });
  var xs = s((jB, Ls) => {
    var Ps = ke();
    Ps.define(
      "focus",
      (Ls.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            c = u.tagName;
          return (
            (/^a$/i.test(c) && u.href != null) ||
            (/^(button|textarea)$/i.test(c) && u.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && u.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ps.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Fs = s((HB, Ds) => {
    "use strict";
    var Li = window.jQuery,
      ze = {},
      tn = [],
      Ms = ".w-ix",
      rn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(ze.types.OUTRO));
        },
      };
    ze.triggers = {};
    ze.types = { INTRO: "w-ix-intro" + Ms, OUTRO: "w-ix-outro" + Ms };
    ze.init = function () {
      for (var e = tn.length, t = 0; t < e; t++) {
        var r = tn[t];
        r[0](0, r[1]);
      }
      (tn = []), Li.extend(ze.triggers, rn);
    };
    ze.async = function () {
      for (var e in rn) {
        var t = rn[e];
        rn.hasOwnProperty(e) &&
          (ze.triggers[e] = function (r, n) {
            tn.push([t, n]);
          });
      }
    };
    ze.async();
    Ds.exports = ze;
  });
  var Us = s((KB, Vs) => {
    "use strict";
    var xi = Fs();
    function Gs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var DT = window.jQuery,
      nn = {},
      Xs = ".w-ix",
      FT = {
        reset: function (e, t) {
          xi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          xi.triggers.intro(e, t), Gs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          xi.triggers.outro(e, t), Gs(t, "COMPONENT_INACTIVE");
        },
      };
    nn.triggers = {};
    nn.types = { INTRO: "w-ix-intro" + Xs, OUTRO: "w-ix-outro" + Xs };
    DT.extend(nn.triggers, FT);
    Vs.exports = nn;
  });
  var Bs = s((kB, nt) => {
    function Mi(e) {
      return (
        (nt.exports = Mi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (nt.exports.__esModule = !0),
        (nt.exports.default = nt.exports),
        Mi(e)
      );
    }
    (nt.exports = Mi),
      (nt.exports.__esModule = !0),
      (nt.exports.default = nt.exports);
  });
  var Mt = s((zB, pr) => {
    var GT = Bs().default;
    function Ws(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ws = function (o) {
        return o ? r : t;
      })(e);
    }
    function XT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (GT(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Ws(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (pr.exports = XT),
      (pr.exports.__esModule = !0),
      (pr.exports.default = pr.exports);
  });
  var Ye = s((YB, vr) => {
    function VT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (vr.exports = VT),
      (vr.exports.__esModule = !0),
      (vr.exports.default = vr.exports);
  });
  var ae = s(($B, js) => {
    var on = function (e) {
      return e && e.Math == Math && e;
    };
    js.exports =
      on(typeof globalThis == "object" && globalThis) ||
      on(typeof window == "object" && window) ||
      on(typeof self == "object" && self) ||
      on(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Dt = s((QB, Hs) => {
    Hs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var yt = s((ZB, Ks) => {
    var UT = Dt();
    Ks.exports = !UT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var an = s((JB, ks) => {
    var Er = Function.prototype.call;
    ks.exports = Er.bind
      ? Er.bind(Er)
      : function () {
          return Er.apply(Er, arguments);
        };
  });
  var Qs = s(($s) => {
    "use strict";
    var zs = {}.propertyIsEnumerable,
      Ys = Object.getOwnPropertyDescriptor,
      BT = Ys && !zs.call({ 1: 2 }, 1);
    $s.f = BT
      ? function (t) {
          var r = Ys(this, t);
          return !!r && r.enumerable;
        }
      : zs;
  });
  var Di = s((tW, Zs) => {
    Zs.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ge = s((rW, eu) => {
    var Js = Function.prototype,
      Fi = Js.bind,
      Gi = Js.call,
      WT = Fi && Fi.bind(Gi);
    eu.exports = Fi
      ? function (e) {
          return e && WT(Gi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Gi.apply(e, arguments);
            }
          );
        };
  });
  var nu = s((nW, ru) => {
    var tu = Ge(),
      jT = tu({}.toString),
      HT = tu("".slice);
    ru.exports = function (e) {
      return HT(jT(e), 8, -1);
    };
  });
  var ou = s((iW, iu) => {
    var KT = ae(),
      kT = Ge(),
      zT = Dt(),
      YT = nu(),
      Xi = KT.Object,
      $T = kT("".split);
    iu.exports = zT(function () {
      return !Xi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return YT(e) == "String" ? $T(e, "") : Xi(e);
        }
      : Xi;
  });
  var Vi = s((oW, au) => {
    var QT = ae(),
      ZT = QT.TypeError;
    au.exports = function (e) {
      if (e == null) throw ZT("Can't call method on " + e);
      return e;
    };
  });
  var hr = s((aW, su) => {
    var JT = ou(),
      eI = Vi();
    su.exports = function (e) {
      return JT(eI(e));
    };
  });
  var $e = s((sW, uu) => {
    uu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ft = s((uW, cu) => {
    var tI = $e();
    cu.exports = function (e) {
      return typeof e == "object" ? e !== null : tI(e);
    };
  });
  var gr = s((cW, lu) => {
    var Ui = ae(),
      rI = $e(),
      nI = function (e) {
        return rI(e) ? e : void 0;
      };
    lu.exports = function (e, t) {
      return arguments.length < 2 ? nI(Ui[e]) : Ui[e] && Ui[e][t];
    };
  });
  var du = s((lW, fu) => {
    var iI = Ge();
    fu.exports = iI({}.isPrototypeOf);
  });
  var vu = s((fW, pu) => {
    var oI = gr();
    pu.exports = oI("navigator", "userAgent") || "";
  });
  var Iu = s((dW, Tu) => {
    var yu = ae(),
      Bi = vu(),
      Eu = yu.process,
      hu = yu.Deno,
      gu = (Eu && Eu.versions) || (hu && hu.version),
      _u = gu && gu.v8,
      Xe,
      sn;
    _u &&
      ((Xe = _u.split(".")),
      (sn = Xe[0] > 0 && Xe[0] < 4 ? 1 : +(Xe[0] + Xe[1])));
    !sn &&
      Bi &&
      ((Xe = Bi.match(/Edge\/(\d+)/)),
      (!Xe || Xe[1] >= 74) &&
        ((Xe = Bi.match(/Chrome\/(\d+)/)), Xe && (sn = +Xe[1])));
    Tu.exports = sn;
  });
  var Wi = s((pW, mu) => {
    var Ou = Iu(),
      aI = Dt();
    mu.exports =
      !!Object.getOwnPropertySymbols &&
      !aI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Ou && Ou < 41)
        );
      });
  });
  var ji = s((vW, Su) => {
    var sI = Wi();
    Su.exports = sI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Hi = s((EW, Au) => {
    var uI = ae(),
      cI = gr(),
      lI = $e(),
      fI = du(),
      dI = ji(),
      pI = uI.Object;
    Au.exports = dI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = cI("Symbol");
          return lI(t) && fI(t.prototype, pI(e));
        };
  });
  var Ru = s((hW, bu) => {
    var vI = ae(),
      EI = vI.String;
    bu.exports = function (e) {
      try {
        return EI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Cu = s((gW, wu) => {
    var hI = ae(),
      gI = $e(),
      _I = Ru(),
      yI = hI.TypeError;
    wu.exports = function (e) {
      if (gI(e)) return e;
      throw yI(_I(e) + " is not a function");
    };
  });
  var qu = s((_W, Nu) => {
    var TI = Cu();
    Nu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : TI(r);
    };
  });
  var Lu = s((yW, Pu) => {
    var II = ae(),
      Ki = an(),
      ki = $e(),
      zi = Ft(),
      OI = II.TypeError;
    Pu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ki((r = e.toString)) && !zi((n = Ki(r, e)))) ||
        (ki((r = e.valueOf)) && !zi((n = Ki(r, e)))) ||
        (t !== "string" && ki((r = e.toString)) && !zi((n = Ki(r, e))))
      )
        return n;
      throw OI("Can't convert object to primitive value");
    };
  });
  var Mu = s((TW, xu) => {
    xu.exports = !1;
  });
  var un = s((IW, Fu) => {
    var Du = ae(),
      mI = Object.defineProperty;
    Fu.exports = function (e, t) {
      try {
        mI(Du, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Du[e] = t;
      }
      return t;
    };
  });
  var cn = s((OW, Xu) => {
    var SI = ae(),
      AI = un(),
      Gu = "__core-js_shared__",
      bI = SI[Gu] || AI(Gu, {});
    Xu.exports = bI;
  });
  var Yi = s((mW, Uu) => {
    var RI = Mu(),
      Vu = cn();
    (Uu.exports = function (e, t) {
      return Vu[e] || (Vu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: RI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Wu = s((SW, Bu) => {
    var wI = ae(),
      CI = Vi(),
      NI = wI.Object;
    Bu.exports = function (e) {
      return NI(CI(e));
    };
  });
  var ct = s((AW, ju) => {
    var qI = Ge(),
      PI = Wu(),
      LI = qI({}.hasOwnProperty);
    ju.exports =
      Object.hasOwn ||
      function (t, r) {
        return LI(PI(t), r);
      };
  });
  var $i = s((bW, Hu) => {
    var xI = Ge(),
      MI = 0,
      DI = Math.random(),
      FI = xI((1).toString);
    Hu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + FI(++MI + DI, 36);
    };
  });
  var Qi = s((RW, $u) => {
    var GI = ae(),
      XI = Yi(),
      Ku = ct(),
      VI = $i(),
      ku = Wi(),
      Yu = ji(),
      Gt = XI("wks"),
      Tt = GI.Symbol,
      zu = Tt && Tt.for,
      UI = Yu ? Tt : (Tt && Tt.withoutSetter) || VI;
    $u.exports = function (e) {
      if (!Ku(Gt, e) || !(ku || typeof Gt[e] == "string")) {
        var t = "Symbol." + e;
        ku && Ku(Tt, e)
          ? (Gt[e] = Tt[e])
          : Yu && zu
          ? (Gt[e] = zu(t))
          : (Gt[e] = UI(t));
      }
      return Gt[e];
    };
  });
  var ec = s((wW, Ju) => {
    var BI = ae(),
      WI = an(),
      Qu = Ft(),
      Zu = Hi(),
      jI = qu(),
      HI = Lu(),
      KI = Qi(),
      kI = BI.TypeError,
      zI = KI("toPrimitive");
    Ju.exports = function (e, t) {
      if (!Qu(e) || Zu(e)) return e;
      var r = jI(e, zI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = WI(r, e, t)), !Qu(n) || Zu(n))
        )
          return n;
        throw kI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), HI(e, t);
    };
  });
  var Zi = s((CW, tc) => {
    var YI = ec(),
      $I = Hi();
    tc.exports = function (e) {
      var t = YI(e, "string");
      return $I(t) ? t : t + "";
    };
  });
  var eo = s((NW, nc) => {
    var QI = ae(),
      rc = Ft(),
      Ji = QI.document,
      ZI = rc(Ji) && rc(Ji.createElement);
    nc.exports = function (e) {
      return ZI ? Ji.createElement(e) : {};
    };
  });
  var to = s((qW, ic) => {
    var JI = yt(),
      eO = Dt(),
      tO = eo();
    ic.exports =
      !JI &&
      !eO(function () {
        return (
          Object.defineProperty(tO("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var ro = s((ac) => {
    var rO = yt(),
      nO = an(),
      iO = Qs(),
      oO = Di(),
      aO = hr(),
      sO = Zi(),
      uO = ct(),
      cO = to(),
      oc = Object.getOwnPropertyDescriptor;
    ac.f = rO
      ? oc
      : function (t, r) {
          if (((t = aO(t)), (r = sO(r)), cO))
            try {
              return oc(t, r);
            } catch {}
          if (uO(t, r)) return oO(!nO(iO.f, t, r), t[r]);
        };
  });
  var _r = s((LW, uc) => {
    var sc = ae(),
      lO = Ft(),
      fO = sc.String,
      dO = sc.TypeError;
    uc.exports = function (e) {
      if (lO(e)) return e;
      throw dO(fO(e) + " is not an object");
    };
  });
  var yr = s((fc) => {
    var pO = ae(),
      vO = yt(),
      EO = to(),
      cc = _r(),
      hO = Zi(),
      gO = pO.TypeError,
      lc = Object.defineProperty;
    fc.f = vO
      ? lc
      : function (t, r, n) {
          if ((cc(t), (r = hO(r)), cc(n), EO))
            try {
              return lc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw gO("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var ln = s((MW, dc) => {
    var _O = yt(),
      yO = yr(),
      TO = Di();
    dc.exports = _O
      ? function (e, t, r) {
          return yO.f(e, t, TO(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var io = s((DW, pc) => {
    var IO = Ge(),
      OO = $e(),
      no = cn(),
      mO = IO(Function.toString);
    OO(no.inspectSource) ||
      (no.inspectSource = function (e) {
        return mO(e);
      });
    pc.exports = no.inspectSource;
  });
  var hc = s((FW, Ec) => {
    var SO = ae(),
      AO = $e(),
      bO = io(),
      vc = SO.WeakMap;
    Ec.exports = AO(vc) && /native code/.test(bO(vc));
  });
  var oo = s((GW, _c) => {
    var RO = Yi(),
      wO = $i(),
      gc = RO("keys");
    _c.exports = function (e) {
      return gc[e] || (gc[e] = wO(e));
    };
  });
  var fn = s((XW, yc) => {
    yc.exports = {};
  });
  var Ac = s((VW, Sc) => {
    var CO = hc(),
      mc = ae(),
      ao = Ge(),
      NO = Ft(),
      qO = ln(),
      so = ct(),
      uo = cn(),
      PO = oo(),
      LO = fn(),
      Tc = "Object already initialized",
      lo = mc.TypeError,
      xO = mc.WeakMap,
      dn,
      Tr,
      pn,
      MO = function (e) {
        return pn(e) ? Tr(e) : dn(e, {});
      },
      DO = function (e) {
        return function (t) {
          var r;
          if (!NO(t) || (r = Tr(t)).type !== e)
            throw lo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    CO || uo.state
      ? ((lt = uo.state || (uo.state = new xO())),
        (Ic = ao(lt.get)),
        (co = ao(lt.has)),
        (Oc = ao(lt.set)),
        (dn = function (e, t) {
          if (co(lt, e)) throw new lo(Tc);
          return (t.facade = e), Oc(lt, e, t), t;
        }),
        (Tr = function (e) {
          return Ic(lt, e) || {};
        }),
        (pn = function (e) {
          return co(lt, e);
        }))
      : ((It = PO("state")),
        (LO[It] = !0),
        (dn = function (e, t) {
          if (so(e, It)) throw new lo(Tc);
          return (t.facade = e), qO(e, It, t), t;
        }),
        (Tr = function (e) {
          return so(e, It) ? e[It] : {};
        }),
        (pn = function (e) {
          return so(e, It);
        }));
    var lt, Ic, co, Oc, It;
    Sc.exports = { set: dn, get: Tr, has: pn, enforce: MO, getterFor: DO };
  });
  var wc = s((UW, Rc) => {
    var fo = yt(),
      FO = ct(),
      bc = Function.prototype,
      GO = fo && Object.getOwnPropertyDescriptor,
      po = FO(bc, "name"),
      XO = po && function () {}.name === "something",
      VO = po && (!fo || (fo && GO(bc, "name").configurable));
    Rc.exports = { EXISTS: po, PROPER: XO, CONFIGURABLE: VO };
  });
  var Lc = s((BW, Pc) => {
    var UO = ae(),
      Cc = $e(),
      BO = ct(),
      Nc = ln(),
      WO = un(),
      jO = io(),
      qc = Ac(),
      HO = wc().CONFIGURABLE,
      KO = qc.get,
      kO = qc.enforce,
      zO = String(String).split("String");
    (Pc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Cc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!BO(r, "name") || (HO && r.name !== u)) && Nc(r, "name", u),
          (c = kO(r)),
          c.source || (c.source = zO.join(typeof u == "string" ? u : ""))),
        e === UO)
      ) {
        i ? (e[t] = r) : WO(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Nc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Cc(this) && KO(this).source) || jO(this);
    });
  });
  var vo = s((WW, xc) => {
    var YO = Math.ceil,
      $O = Math.floor;
    xc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? $O : YO)(t);
    };
  });
  var Dc = s((jW, Mc) => {
    var QO = vo(),
      ZO = Math.max,
      JO = Math.min;
    Mc.exports = function (e, t) {
      var r = QO(e);
      return r < 0 ? ZO(r + t, 0) : JO(r, t);
    };
  });
  var Gc = s((HW, Fc) => {
    var em = vo(),
      tm = Math.min;
    Fc.exports = function (e) {
      return e > 0 ? tm(em(e), 9007199254740991) : 0;
    };
  });
  var Vc = s((KW, Xc) => {
    var rm = Gc();
    Xc.exports = function (e) {
      return rm(e.length);
    };
  });
  var Eo = s((kW, Bc) => {
    var nm = hr(),
      im = Dc(),
      om = Vc(),
      Uc = function (e) {
        return function (t, r, n) {
          var o = nm(t),
            i = om(o),
            a = im(n, i),
            u;
          if (e && r != r) {
            for (; i > a; ) if (((u = o[a++]), u != u)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Bc.exports = { includes: Uc(!0), indexOf: Uc(!1) };
  });
  var go = s((zW, jc) => {
    var am = Ge(),
      ho = ct(),
      sm = hr(),
      um = Eo().indexOf,
      cm = fn(),
      Wc = am([].push);
    jc.exports = function (e, t) {
      var r = sm(e),
        n = 0,
        o = [],
        i;
      for (i in r) !ho(cm, i) && ho(r, i) && Wc(o, i);
      for (; t.length > n; ) ho(r, (i = t[n++])) && (~um(o, i) || Wc(o, i));
      return o;
    };
  });
  var vn = s((YW, Hc) => {
    Hc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var kc = s((Kc) => {
    var lm = go(),
      fm = vn(),
      dm = fm.concat("length", "prototype");
    Kc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return lm(t, dm);
      };
  });
  var Yc = s((zc) => {
    zc.f = Object.getOwnPropertySymbols;
  });
  var Qc = s((ZW, $c) => {
    var pm = gr(),
      vm = Ge(),
      Em = kc(),
      hm = Yc(),
      gm = _r(),
      _m = vm([].concat);
    $c.exports =
      pm("Reflect", "ownKeys") ||
      function (t) {
        var r = Em.f(gm(t)),
          n = hm.f;
        return n ? _m(r, n(t)) : r;
      };
  });
  var Jc = s((JW, Zc) => {
    var ym = ct(),
      Tm = Qc(),
      Im = ro(),
      Om = yr();
    Zc.exports = function (e, t) {
      for (var r = Tm(t), n = Om.f, o = Im.f, i = 0; i < r.length; i++) {
        var a = r[i];
        ym(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var tl = s((e5, el) => {
    var mm = Dt(),
      Sm = $e(),
      Am = /#|\.prototype\./,
      Ir = function (e, t) {
        var r = Rm[bm(e)];
        return r == Cm ? !0 : r == wm ? !1 : Sm(t) ? mm(t) : !!t;
      },
      bm = (Ir.normalize = function (e) {
        return String(e).replace(Am, ".").toLowerCase();
      }),
      Rm = (Ir.data = {}),
      wm = (Ir.NATIVE = "N"),
      Cm = (Ir.POLYFILL = "P");
    el.exports = Ir;
  });
  var nl = s((t5, rl) => {
    var _o = ae(),
      Nm = ro().f,
      qm = ln(),
      Pm = Lc(),
      Lm = un(),
      xm = Jc(),
      Mm = tl();
    rl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        u,
        c,
        f,
        v;
      if (
        (n
          ? (a = _o)
          : o
          ? (a = _o[r] || Lm(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (u in t) {
          if (
            ((f = t[u]),
            e.noTargetGet ? ((v = Nm(a, u)), (c = v && v.value)) : (c = a[u]),
            (i = Mm(n ? u : r + (o ? "." : "#") + u, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            xm(f, c);
          }
          (e.sham || (c && c.sham)) && qm(f, "sham", !0), Pm(a, u, f, e);
        }
    };
  });
  var ol = s((r5, il) => {
    var Dm = go(),
      Fm = vn();
    il.exports =
      Object.keys ||
      function (t) {
        return Dm(t, Fm);
      };
  });
  var sl = s((n5, al) => {
    var Gm = yt(),
      Xm = yr(),
      Vm = _r(),
      Um = hr(),
      Bm = ol();
    al.exports = Gm
      ? Object.defineProperties
      : function (t, r) {
          Vm(t);
          for (var n = Um(r), o = Bm(r), i = o.length, a = 0, u; i > a; )
            Xm.f(t, (u = o[a++]), n[u]);
          return t;
        };
  });
  var cl = s((i5, ul) => {
    var Wm = gr();
    ul.exports = Wm("document", "documentElement");
  });
  var gl = s((o5, hl) => {
    var jm = _r(),
      Hm = sl(),
      ll = vn(),
      Km = fn(),
      km = cl(),
      zm = eo(),
      Ym = oo(),
      fl = ">",
      dl = "<",
      To = "prototype",
      Io = "script",
      vl = Ym("IE_PROTO"),
      yo = function () {},
      El = function (e) {
        return dl + Io + fl + e + dl + "/" + Io + fl;
      },
      pl = function (e) {
        e.write(El("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      $m = function () {
        var e = zm("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          km.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(El("document.F=Object")),
          r.close(),
          r.F
        );
      },
      En,
      hn = function () {
        try {
          En = new ActiveXObject("htmlfile");
        } catch {}
        hn =
          typeof document < "u"
            ? document.domain && En
              ? pl(En)
              : $m()
            : pl(En);
        for (var e = ll.length; e--; ) delete hn[To][ll[e]];
        return hn();
      };
    Km[vl] = !0;
    hl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((yo[To] = jm(t)), (n = new yo()), (yo[To] = null), (n[vl] = t))
            : (n = hn()),
          r === void 0 ? n : Hm(n, r)
        );
      };
  });
  var yl = s((a5, _l) => {
    var Qm = Qi(),
      Zm = gl(),
      Jm = yr(),
      Oo = Qm("unscopables"),
      mo = Array.prototype;
    mo[Oo] == null && Jm.f(mo, Oo, { configurable: !0, value: Zm(null) });
    _l.exports = function (e) {
      mo[Oo][e] = !0;
    };
  });
  var Tl = s(() => {
    "use strict";
    var eS = nl(),
      tS = Eo().includes,
      rS = yl();
    eS(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return tS(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    rS("includes");
  });
  var Ol = s((c5, Il) => {
    var nS = ae(),
      iS = Ge();
    Il.exports = function (e, t) {
      return iS(nS[e].prototype[t]);
    };
  });
  var Sl = s((l5, ml) => {
    Tl();
    var oS = Ol();
    ml.exports = oS("Array", "includes");
  });
  var bl = s((f5, Al) => {
    var aS = Sl();
    Al.exports = aS;
  });
  var wl = s((d5, Rl) => {
    var sS = bl();
    Rl.exports = sS;
  });
  var Nl = s((p5, Cl) => {
    var uS =
      typeof global == "object" && global && global.Object === Object && global;
    Cl.exports = uS;
  });
  var Pl = s((v5, ql) => {
    var cS = Nl(),
      lS = typeof self == "object" && self && self.Object === Object && self,
      fS = cS || lS || Function("return this")();
    ql.exports = fS;
  });
  var So = s((E5, Ll) => {
    var dS = Pl(),
      pS = dS.Symbol;
    Ll.exports = pS;
  });
  var Fl = s((h5, Dl) => {
    var xl = So(),
      Ml = Object.prototype,
      vS = Ml.hasOwnProperty,
      ES = Ml.toString,
      Or = xl ? xl.toStringTag : void 0;
    function hS(e) {
      var t = vS.call(e, Or),
        r = e[Or];
      try {
        e[Or] = void 0;
        var n = !0;
      } catch {}
      var o = ES.call(e);
      return n && (t ? (e[Or] = r) : delete e[Or]), o;
    }
    Dl.exports = hS;
  });
  var Xl = s((g5, Gl) => {
    var gS = Object.prototype,
      _S = gS.toString;
    function yS(e) {
      return _S.call(e);
    }
    Gl.exports = yS;
  });
  var Wl = s((_5, Bl) => {
    var Vl = So(),
      TS = Fl(),
      IS = Xl(),
      OS = "[object Null]",
      mS = "[object Undefined]",
      Ul = Vl ? Vl.toStringTag : void 0;
    function SS(e) {
      return e == null
        ? e === void 0
          ? mS
          : OS
        : Ul && Ul in Object(e)
        ? TS(e)
        : IS(e);
    }
    Bl.exports = SS;
  });
  var Hl = s((y5, jl) => {
    function AS(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    jl.exports = AS;
  });
  var kl = s((T5, Kl) => {
    var bS = Hl(),
      RS = bS(Object.getPrototypeOf, Object);
    Kl.exports = RS;
  });
  var Yl = s((I5, zl) => {
    function wS(e) {
      return e != null && typeof e == "object";
    }
    zl.exports = wS;
  });
  var Ao = s((O5, Ql) => {
    var CS = Wl(),
      NS = kl(),
      qS = Yl(),
      PS = "[object Object]",
      LS = Function.prototype,
      xS = Object.prototype,
      $l = LS.toString,
      MS = xS.hasOwnProperty,
      DS = $l.call(Object);
    function FS(e) {
      if (!qS(e) || CS(e) != PS) return !1;
      var t = NS(e);
      if (t === null) return !0;
      var r = MS.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && $l.call(r) == DS;
    }
    Ql.exports = FS;
  });
  var Zl = s((bo) => {
    "use strict";
    Object.defineProperty(bo, "__esModule", { value: !0 });
    bo.default = GS;
    function GS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Jl = s((wo, Ro) => {
    "use strict";
    Object.defineProperty(wo, "__esModule", { value: !0 });
    var XS = Zl(),
      VS = US(XS);
    function US(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Xt;
    typeof self < "u"
      ? (Xt = self)
      : typeof window < "u"
      ? (Xt = window)
      : typeof global < "u"
      ? (Xt = global)
      : typeof Ro < "u"
      ? (Xt = Ro)
      : (Xt = Function("return this")());
    var BS = (0, VS.default)(Xt);
    wo.default = BS;
  });
  var Co = s((mr) => {
    "use strict";
    mr.__esModule = !0;
    mr.ActionTypes = void 0;
    mr.default = nf;
    var WS = Ao(),
      jS = rf(WS),
      HS = Jl(),
      ef = rf(HS);
    function rf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tf = (mr.ActionTypes = { INIT: "@@redux/INIT" });
    function nf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(nf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        u = a,
        c = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function v() {
        return i;
      }
      function d(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          f(),
          u.push(S),
          function () {
            if (q) {
              (q = !1), f();
              var A = u.indexOf(S);
              u.splice(A, 1);
            }
          }
        );
      }
      function E(S) {
        if (!(0, jS.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, S));
        } finally {
          c = !1;
        }
        for (var q = (a = u), O = 0; O < q.length; O++) q[O]();
        return S;
      }
      function I(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = S), E({ type: tf.INIT });
      }
      function b() {
        var S,
          q = d;
        return (
          (S = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function _() {
                A.next && A.next(v());
              }
              _();
              var C = q(_);
              return { unsubscribe: C };
            },
          }),
          (S[ef.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        E({ type: tf.INIT }),
        (n = { dispatch: E, subscribe: d, getState: v, replaceReducer: I }),
        (n[ef.default] = b),
        n
      );
    }
  });
  var qo = s((No) => {
    "use strict";
    No.__esModule = !0;
    No.default = KS;
    function KS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var sf = s((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = QS;
    var of = Co(),
      kS = Ao(),
      b5 = af(kS),
      zS = qo(),
      R5 = af(zS);
    function af(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function YS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function $S(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: of.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                of.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function QS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        $S(r);
      } catch (c) {
        u = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (u) throw u;
        if (!1) var d;
        for (var E = !1, I = {}, b = 0; b < i.length; b++) {
          var S = i[b],
            q = r[S],
            O = f[S],
            A = q(O, v);
          if (typeof A > "u") {
            var _ = YS(S, v);
            throw new Error(_);
          }
          (I[S] = A), (E = E || A !== O);
        }
        return E ? I : f;
      };
    }
  });
  var cf = s((Lo) => {
    "use strict";
    Lo.__esModule = !0;
    Lo.default = ZS;
    function uf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function ZS(e, t) {
      if (typeof e == "function") return uf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = uf(a, t));
      }
      return n;
    }
  });
  var Mo = s((xo) => {
    "use strict";
    xo.__esModule = !0;
    xo.default = JS;
    function JS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var lf = s((Do) => {
    "use strict";
    Do.__esModule = !0;
    var eA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Do.default = iA;
    var tA = Mo(),
      rA = nA(tA);
    function nA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function iA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var u = n(o, i, a),
            c = u.dispatch,
            f = [],
            v = {
              getState: u.getState,
              dispatch: function (E) {
                return c(E);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(v);
            })),
            (c = rA.default.apply(void 0, f)(u.dispatch)),
            eA({}, u, { dispatch: c })
          );
        };
      };
    }
  });
  var Fo = s((qe) => {
    "use strict";
    qe.__esModule = !0;
    qe.compose =
      qe.applyMiddleware =
      qe.bindActionCreators =
      qe.combineReducers =
      qe.createStore =
        void 0;
    var oA = Co(),
      aA = Vt(oA),
      sA = sf(),
      uA = Vt(sA),
      cA = cf(),
      lA = Vt(cA),
      fA = lf(),
      dA = Vt(fA),
      pA = Mo(),
      vA = Vt(pA),
      EA = qo(),
      P5 = Vt(EA);
    function Vt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    qe.createStore = aA.default;
    qe.combineReducers = uA.default;
    qe.bindActionCreators = lA.default;
    qe.applyMiddleware = dA.default;
    qe.compose = vA.default;
  });
  var ff = s((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    Ee.QuickEffectIds =
      Ee.QuickEffectDirectionConsts =
      Ee.EventTypeConsts =
      Ee.EventLimitAffectedElements =
      Ee.EventContinuousMouseAxes =
      Ee.EventBasedOn =
      Ee.EventAppliesTo =
        void 0;
    var hA = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ee.EventTypeConsts = hA;
    var gA = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ee.EventAppliesTo = gA;
    var _A = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ee.EventBasedOn = _A;
    var yA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ee.EventContinuousMouseAxes = yA;
    var TA = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ee.EventLimitAffectedElements = TA;
    var IA = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ee.QuickEffectIds = IA;
    var OA = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ee.QuickEffectDirectionConsts = OA;
  });
  var Go = s((Ut) => {
    "use strict";
    Object.defineProperty(Ut, "__esModule", { value: !0 });
    Ut.ActionTypeConsts = Ut.ActionAppliesTo = void 0;
    var mA = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Ut.ActionTypeConsts = mA;
    var SA = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Ut.ActionAppliesTo = SA;
  });
  var df = s((gn) => {
    "use strict";
    Object.defineProperty(gn, "__esModule", { value: !0 });
    gn.InteractionTypeConsts = void 0;
    var AA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    gn.InteractionTypeConsts = AA;
  });
  var pf = s((_n) => {
    "use strict";
    Object.defineProperty(_n, "__esModule", { value: !0 });
    _n.ReducedMotionTypes = void 0;
    var bA = Go(),
      {
        TRANSFORM_MOVE: RA,
        TRANSFORM_SCALE: wA,
        TRANSFORM_ROTATE: CA,
        TRANSFORM_SKEW: NA,
        STYLE_SIZE: qA,
        STYLE_FILTER: PA,
        STYLE_FONT_VARIATION: LA,
      } = bA.ActionTypeConsts,
      xA = {
        [RA]: !0,
        [wA]: !0,
        [CA]: !0,
        [NA]: !0,
        [qA]: !0,
        [PA]: !0,
        [LA]: !0,
      };
    _n.ReducedMotionTypes = xA;
  });
  var vf = s((k) => {
    "use strict";
    Object.defineProperty(k, "__esModule", { value: !0 });
    k.IX2_VIEWPORT_WIDTH_CHANGED =
      k.IX2_TEST_FRAME_RENDERED =
      k.IX2_STOP_REQUESTED =
      k.IX2_SESSION_STOPPED =
      k.IX2_SESSION_STARTED =
      k.IX2_SESSION_INITIALIZED =
      k.IX2_RAW_DATA_IMPORTED =
      k.IX2_PREVIEW_REQUESTED =
      k.IX2_PLAYBACK_REQUESTED =
      k.IX2_PARAMETER_CHANGED =
      k.IX2_MEDIA_QUERIES_DEFINED =
      k.IX2_INSTANCE_STARTED =
      k.IX2_INSTANCE_REMOVED =
      k.IX2_INSTANCE_ADDED =
      k.IX2_EVENT_STATE_CHANGED =
      k.IX2_EVENT_LISTENER_ADDED =
      k.IX2_ELEMENT_STATE_CHANGED =
      k.IX2_CLEAR_REQUESTED =
      k.IX2_ANIMATION_FRAME_CHANGED =
      k.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var MA = "IX2_RAW_DATA_IMPORTED";
    k.IX2_RAW_DATA_IMPORTED = MA;
    var DA = "IX2_SESSION_INITIALIZED";
    k.IX2_SESSION_INITIALIZED = DA;
    var FA = "IX2_SESSION_STARTED";
    k.IX2_SESSION_STARTED = FA;
    var GA = "IX2_SESSION_STOPPED";
    k.IX2_SESSION_STOPPED = GA;
    var XA = "IX2_PREVIEW_REQUESTED";
    k.IX2_PREVIEW_REQUESTED = XA;
    var VA = "IX2_PLAYBACK_REQUESTED";
    k.IX2_PLAYBACK_REQUESTED = VA;
    var UA = "IX2_STOP_REQUESTED";
    k.IX2_STOP_REQUESTED = UA;
    var BA = "IX2_CLEAR_REQUESTED";
    k.IX2_CLEAR_REQUESTED = BA;
    var WA = "IX2_EVENT_LISTENER_ADDED";
    k.IX2_EVENT_LISTENER_ADDED = WA;
    var jA = "IX2_EVENT_STATE_CHANGED";
    k.IX2_EVENT_STATE_CHANGED = jA;
    var HA = "IX2_ANIMATION_FRAME_CHANGED";
    k.IX2_ANIMATION_FRAME_CHANGED = HA;
    var KA = "IX2_PARAMETER_CHANGED";
    k.IX2_PARAMETER_CHANGED = KA;
    var kA = "IX2_INSTANCE_ADDED";
    k.IX2_INSTANCE_ADDED = kA;
    var zA = "IX2_INSTANCE_STARTED";
    k.IX2_INSTANCE_STARTED = zA;
    var YA = "IX2_INSTANCE_REMOVED";
    k.IX2_INSTANCE_REMOVED = YA;
    var $A = "IX2_ELEMENT_STATE_CHANGED";
    k.IX2_ELEMENT_STATE_CHANGED = $A;
    var QA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    k.IX2_ACTION_LIST_PLAYBACK_CHANGED = QA;
    var ZA = "IX2_VIEWPORT_WIDTH_CHANGED";
    k.IX2_VIEWPORT_WIDTH_CHANGED = ZA;
    var JA = "IX2_MEDIA_QUERIES_DEFINED";
    k.IX2_MEDIA_QUERIES_DEFINED = JA;
    var eb = "IX2_TEST_FRAME_RENDERED";
    k.IX2_TEST_FRAME_RENDERED = eb;
  });
  var Ef = s((T) => {
    "use strict";
    Object.defineProperty(T, "__esModule", { value: !0 });
    T.W_MOD_JS =
      T.W_MOD_IX =
      T.WILL_CHANGE =
      T.WIDTH =
      T.WF_PAGE =
      T.TRANSLATE_Z =
      T.TRANSLATE_Y =
      T.TRANSLATE_X =
      T.TRANSLATE_3D =
      T.TRANSFORM =
      T.SKEW_Y =
      T.SKEW_X =
      T.SKEW =
      T.SIBLINGS =
      T.SCALE_Z =
      T.SCALE_Y =
      T.SCALE_X =
      T.SCALE_3D =
      T.ROTATE_Z =
      T.ROTATE_Y =
      T.ROTATE_X =
      T.RENDER_TRANSFORM =
      T.RENDER_STYLE =
      T.RENDER_PLUGIN =
      T.RENDER_GENERAL =
      T.PRESERVE_3D =
      T.PLAIN_OBJECT =
      T.PARENT =
      T.OPACITY =
      T.IX2_ID_DELIMITER =
      T.IMMEDIATE_CHILDREN =
      T.HTML_ELEMENT =
      T.HEIGHT =
      T.FONT_VARIATION_SETTINGS =
      T.FLEX =
      T.FILTER =
      T.DISPLAY =
      T.CONFIG_Z_VALUE =
      T.CONFIG_Z_UNIT =
      T.CONFIG_Y_VALUE =
      T.CONFIG_Y_UNIT =
      T.CONFIG_X_VALUE =
      T.CONFIG_X_UNIT =
      T.CONFIG_VALUE =
      T.CONFIG_UNIT =
      T.COMMA_DELIMITER =
      T.COLOR =
      T.COLON_DELIMITER =
      T.CHILDREN =
      T.BOUNDARY_SELECTOR =
      T.BORDER_COLOR =
      T.BAR_DELIMITER =
      T.BACKGROUND_COLOR =
      T.BACKGROUND =
      T.AUTO =
      T.ABSTRACT_NODE =
        void 0;
    var tb = "|";
    T.IX2_ID_DELIMITER = tb;
    var rb = "data-wf-page";
    T.WF_PAGE = rb;
    var nb = "w-mod-js";
    T.W_MOD_JS = nb;
    var ib = "w-mod-ix";
    T.W_MOD_IX = ib;
    var ob = ".w-dyn-item";
    T.BOUNDARY_SELECTOR = ob;
    var ab = "xValue";
    T.CONFIG_X_VALUE = ab;
    var sb = "yValue";
    T.CONFIG_Y_VALUE = sb;
    var ub = "zValue";
    T.CONFIG_Z_VALUE = ub;
    var cb = "value";
    T.CONFIG_VALUE = cb;
    var lb = "xUnit";
    T.CONFIG_X_UNIT = lb;
    var fb = "yUnit";
    T.CONFIG_Y_UNIT = fb;
    var db = "zUnit";
    T.CONFIG_Z_UNIT = db;
    var pb = "unit";
    T.CONFIG_UNIT = pb;
    var vb = "transform";
    T.TRANSFORM = vb;
    var Eb = "translateX";
    T.TRANSLATE_X = Eb;
    var hb = "translateY";
    T.TRANSLATE_Y = hb;
    var gb = "translateZ";
    T.TRANSLATE_Z = gb;
    var _b = "translate3d";
    T.TRANSLATE_3D = _b;
    var yb = "scaleX";
    T.SCALE_X = yb;
    var Tb = "scaleY";
    T.SCALE_Y = Tb;
    var Ib = "scaleZ";
    T.SCALE_Z = Ib;
    var Ob = "scale3d";
    T.SCALE_3D = Ob;
    var mb = "rotateX";
    T.ROTATE_X = mb;
    var Sb = "rotateY";
    T.ROTATE_Y = Sb;
    var Ab = "rotateZ";
    T.ROTATE_Z = Ab;
    var bb = "skew";
    T.SKEW = bb;
    var Rb = "skewX";
    T.SKEW_X = Rb;
    var wb = "skewY";
    T.SKEW_Y = wb;
    var Cb = "opacity";
    T.OPACITY = Cb;
    var Nb = "filter";
    T.FILTER = Nb;
    var qb = "font-variation-settings";
    T.FONT_VARIATION_SETTINGS = qb;
    var Pb = "width";
    T.WIDTH = Pb;
    var Lb = "height";
    T.HEIGHT = Lb;
    var xb = "backgroundColor";
    T.BACKGROUND_COLOR = xb;
    var Mb = "background";
    T.BACKGROUND = Mb;
    var Db = "borderColor";
    T.BORDER_COLOR = Db;
    var Fb = "color";
    T.COLOR = Fb;
    var Gb = "display";
    T.DISPLAY = Gb;
    var Xb = "flex";
    T.FLEX = Xb;
    var Vb = "willChange";
    T.WILL_CHANGE = Vb;
    var Ub = "AUTO";
    T.AUTO = Ub;
    var Bb = ",";
    T.COMMA_DELIMITER = Bb;
    var Wb = ":";
    T.COLON_DELIMITER = Wb;
    var jb = "|";
    T.BAR_DELIMITER = jb;
    var Hb = "CHILDREN";
    T.CHILDREN = Hb;
    var Kb = "IMMEDIATE_CHILDREN";
    T.IMMEDIATE_CHILDREN = Kb;
    var kb = "SIBLINGS";
    T.SIBLINGS = kb;
    var zb = "PARENT";
    T.PARENT = zb;
    var Yb = "preserve-3d";
    T.PRESERVE_3D = Yb;
    var $b = "HTML_ELEMENT";
    T.HTML_ELEMENT = $b;
    var Qb = "PLAIN_OBJECT";
    T.PLAIN_OBJECT = Qb;
    var Zb = "ABSTRACT_NODE";
    T.ABSTRACT_NODE = Zb;
    var Jb = "RENDER_TRANSFORM";
    T.RENDER_TRANSFORM = Jb;
    var e0 = "RENDER_GENERAL";
    T.RENDER_GENERAL = e0;
    var t0 = "RENDER_STYLE";
    T.RENDER_STYLE = t0;
    var r0 = "RENDER_PLUGIN";
    T.RENDER_PLUGIN = r0;
  });
  var Re = s((de) => {
    "use strict";
    var hf = Mt().default;
    Object.defineProperty(de, "__esModule", { value: !0 });
    var yn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    de.IX2EngineConstants = de.IX2EngineActionTypes = void 0;
    var Xo = ff();
    Object.keys(Xo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(yn, e) ||
        (e in de && de[e] === Xo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Xo[e];
          },
        });
    });
    var Vo = Go();
    Object.keys(Vo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(yn, e) ||
        (e in de && de[e] === Vo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Vo[e];
          },
        });
    });
    var Uo = df();
    Object.keys(Uo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(yn, e) ||
        (e in de && de[e] === Uo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Uo[e];
          },
        });
    });
    var Bo = pf();
    Object.keys(Bo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(yn, e) ||
        (e in de && de[e] === Bo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Bo[e];
          },
        });
    });
    var n0 = hf(vf());
    de.IX2EngineActionTypes = n0;
    var i0 = hf(Ef());
    de.IX2EngineConstants = i0;
  });
  var gf = s((Tn) => {
    "use strict";
    Object.defineProperty(Tn, "__esModule", { value: !0 });
    Tn.ixData = void 0;
    var o0 = Re(),
      { IX2_RAW_DATA_IMPORTED: a0 } = o0.IX2EngineActionTypes,
      s0 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case a0:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Tn.ixData = s0;
  });
  var Sr = s((B5, it) => {
    function Wo() {
      return (
        (it.exports = Wo =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (it.exports.__esModule = !0),
        (it.exports.default = it.exports),
        Wo.apply(this, arguments)
      );
    }
    (it.exports = Wo),
      (it.exports.__esModule = !0),
      (it.exports.default = it.exports);
  });
  var Bt = s((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    var u0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ue.clone = On;
    ue.addLast = Tf;
    ue.addFirst = If;
    ue.removeLast = Of;
    ue.removeFirst = mf;
    ue.insert = Sf;
    ue.removeAt = Af;
    ue.replaceAt = bf;
    ue.getIn = mn;
    ue.set = Sn;
    ue.setIn = An;
    ue.update = wf;
    ue.updateIn = Cf;
    ue.merge = Nf;
    ue.mergeDeep = qf;
    ue.mergeIn = Pf;
    ue.omit = Lf;
    ue.addDefaults = xf;
    var _f = "INVALID_ARGS";
    function yf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var c0 = {}.hasOwnProperty;
    function On(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function we(e, t, r) {
      var n = r;
      n == null && yf(_f);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        a[u - 3] = arguments[u];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var v = jo(f);
          if (v.length)
            for (var d = 0; d <= v.length; d++) {
              var E = v[d];
              if (!(e && n[E] !== void 0)) {
                var I = f[E];
                t && In(n[E]) && In(I) && (I = we(e, t, n[E], I)),
                  !(I === void 0 || I === n[E]) &&
                    (o || ((o = !0), (n = On(n))), (n[E] = I));
              }
            }
        }
      }
      return n;
    }
    function In(e) {
      var t = typeof e > "u" ? "undefined" : u0(e);
      return e != null && (t === "object" || t === "function");
    }
    function Tf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function If(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Of(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function mf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Sf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Af(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function bf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function mn(e, t) {
      if ((!Array.isArray(t) && yf(_f), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Sn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = On(o);
      return (i[t] = r), i;
    }
    function Rf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          In(e) && In(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Rf(a, t, r, n + 1);
      }
      return Sn(e, i, o);
    }
    function An(e, t, r) {
      return t.length ? Rf(e, t, r, 0) : r;
    }
    function wf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Sn(e, t, o);
    }
    function Cf(e, t, r) {
      var n = mn(e, t),
        o = r(n);
      return An(e, t, o);
    }
    function Nf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? we.call.apply(we, [null, !1, !1, e, t, r, n, o, i].concat(u))
        : we(!1, !1, e, t, r, n, o, i);
    }
    function qf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? we.call.apply(we, [null, !1, !0, e, t, r, n, o, i].concat(u))
        : we(!1, !0, e, t, r, n, o, i);
    }
    function Pf(e, t, r, n, o, i, a) {
      var u = mn(e, t);
      u == null && (u = {});
      for (
        var c = void 0,
          f = arguments.length,
          v = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        v[d - 7] = arguments[d];
      return (
        v.length
          ? (c = we.call.apply(we, [null, !1, !1, u, r, n, o, i, a].concat(v)))
          : (c = we(!1, !1, u, r, n, o, i, a)),
        An(e, t, c)
      );
    }
    function Lf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (c0.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = jo(e), u = 0; u < a.length; u++) {
        var c = a[u];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function xf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? we.call.apply(we, [null, !0, !1, e, t, r, n, o, i].concat(u))
        : we(!0, !1, e, t, r, n, o, i);
    }
    var l0 = {
      clone: On,
      addLast: Tf,
      addFirst: If,
      removeLast: Of,
      removeFirst: mf,
      insert: Sf,
      removeAt: Af,
      replaceAt: bf,
      getIn: mn,
      set: Sn,
      setIn: An,
      update: wf,
      updateIn: Cf,
      merge: Nf,
      mergeDeep: qf,
      mergeIn: Pf,
      omit: Lf,
      addDefaults: xf,
    };
    ue.default = l0;
  });
  var Df = s((bn) => {
    "use strict";
    var f0 = Ye().default;
    Object.defineProperty(bn, "__esModule", { value: !0 });
    bn.ixRequest = void 0;
    var d0 = f0(Sr()),
      p0 = Re(),
      v0 = Bt(),
      {
        IX2_PREVIEW_REQUESTED: E0,
        IX2_PLAYBACK_REQUESTED: h0,
        IX2_STOP_REQUESTED: g0,
        IX2_CLEAR_REQUESTED: _0,
      } = p0.IX2EngineActionTypes,
      y0 = { preview: {}, playback: {}, stop: {}, clear: {} },
      Mf = Object.create(null, {
        [E0]: { value: "preview" },
        [h0]: { value: "playback" },
        [g0]: { value: "stop" },
        [_0]: { value: "clear" },
      }),
      T0 = (e = y0, t) => {
        if (t.type in Mf) {
          let r = [Mf[t.type]];
          return (0, v0.setIn)(e, [r], (0, d0.default)({}, t.payload));
        }
        return e;
      };
    bn.ixRequest = T0;
  });
  var Gf = s((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.ixSession = void 0;
    var I0 = Re(),
      Qe = Bt(),
      {
        IX2_SESSION_INITIALIZED: O0,
        IX2_SESSION_STARTED: m0,
        IX2_TEST_FRAME_RENDERED: S0,
        IX2_SESSION_STOPPED: A0,
        IX2_EVENT_LISTENER_ADDED: b0,
        IX2_EVENT_STATE_CHANGED: R0,
        IX2_ANIMATION_FRAME_CHANGED: w0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: C0,
        IX2_VIEWPORT_WIDTH_CHANGED: N0,
        IX2_MEDIA_QUERIES_DEFINED: q0,
      } = I0.IX2EngineActionTypes,
      Ff = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      P0 = 20,
      L0 = (e = Ff, t) => {
        switch (t.type) {
          case O0: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, Qe.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case m0:
            return (0, Qe.set)(e, "active", !0);
          case S0: {
            let {
              payload: { step: r = P0 },
            } = t;
            return (0, Qe.set)(e, "tick", e.tick + r);
          }
          case A0:
            return Ff;
          case w0: {
            let {
              payload: { now: r },
            } = t;
            return (0, Qe.set)(e, "tick", r);
          }
          case b0: {
            let r = (0, Qe.addLast)(e.eventListeners, t.payload);
            return (0, Qe.set)(e, "eventListeners", r);
          }
          case R0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, Qe.setIn)(e, ["eventState", r], n);
          }
          case C0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, Qe.setIn)(e, ["playbackState", r], n);
          }
          case N0: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: u, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                i = u;
                break;
              }
            }
            return (0, Qe.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case q0:
            return (0, Qe.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Rn.ixSession = L0;
  });
  var Vf = s((K5, Xf) => {
    function x0() {
      (this.__data__ = []), (this.size = 0);
    }
    Xf.exports = x0;
  });
  var wn = s((k5, Uf) => {
    function M0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Uf.exports = M0;
  });
  var Ar = s((z5, Bf) => {
    var D0 = wn();
    function F0(e, t) {
      for (var r = e.length; r--; ) if (D0(e[r][0], t)) return r;
      return -1;
    }
    Bf.exports = F0;
  });
  var jf = s((Y5, Wf) => {
    var G0 = Ar(),
      X0 = Array.prototype,
      V0 = X0.splice;
    function U0(e) {
      var t = this.__data__,
        r = G0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : V0.call(t, r, 1), --this.size, !0;
    }
    Wf.exports = U0;
  });
  var Kf = s(($5, Hf) => {
    var B0 = Ar();
    function W0(e) {
      var t = this.__data__,
        r = B0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hf.exports = W0;
  });
  var zf = s((Q5, kf) => {
    var j0 = Ar();
    function H0(e) {
      return j0(this.__data__, e) > -1;
    }
    kf.exports = H0;
  });
  var $f = s((Z5, Yf) => {
    var K0 = Ar();
    function k0(e, t) {
      var r = this.__data__,
        n = K0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Yf.exports = k0;
  });
  var br = s((J5, Qf) => {
    var z0 = Vf(),
      Y0 = jf(),
      $0 = Kf(),
      Q0 = zf(),
      Z0 = $f();
    function Wt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Wt.prototype.clear = z0;
    Wt.prototype.delete = Y0;
    Wt.prototype.get = $0;
    Wt.prototype.has = Q0;
    Wt.prototype.set = Z0;
    Qf.exports = Wt;
  });
  var Jf = s((ej, Zf) => {
    var J0 = br();
    function eR() {
      (this.__data__ = new J0()), (this.size = 0);
    }
    Zf.exports = eR;
  });
  var td = s((tj, ed) => {
    function tR(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    ed.exports = tR;
  });
  var nd = s((rj, rd) => {
    function rR(e) {
      return this.__data__.get(e);
    }
    rd.exports = rR;
  });
  var od = s((nj, id) => {
    function nR(e) {
      return this.__data__.has(e);
    }
    id.exports = nR;
  });
  var Ho = s((ij, ad) => {
    var iR =
      typeof global == "object" && global && global.Object === Object && global;
    ad.exports = iR;
  });
  var Ve = s((oj, sd) => {
    var oR = Ho(),
      aR = typeof self == "object" && self && self.Object === Object && self,
      sR = oR || aR || Function("return this")();
    sd.exports = sR;
  });
  var jt = s((aj, ud) => {
    var uR = Ve(),
      cR = uR.Symbol;
    ud.exports = cR;
  });
  var dd = s((sj, fd) => {
    var cd = jt(),
      ld = Object.prototype,
      lR = ld.hasOwnProperty,
      fR = ld.toString,
      Rr = cd ? cd.toStringTag : void 0;
    function dR(e) {
      var t = lR.call(e, Rr),
        r = e[Rr];
      try {
        e[Rr] = void 0;
        var n = !0;
      } catch {}
      var o = fR.call(e);
      return n && (t ? (e[Rr] = r) : delete e[Rr]), o;
    }
    fd.exports = dR;
  });
  var vd = s((uj, pd) => {
    var pR = Object.prototype,
      vR = pR.toString;
    function ER(e) {
      return vR.call(e);
    }
    pd.exports = ER;
  });
  var Ot = s((cj, gd) => {
    var Ed = jt(),
      hR = dd(),
      gR = vd(),
      _R = "[object Null]",
      yR = "[object Undefined]",
      hd = Ed ? Ed.toStringTag : void 0;
    function TR(e) {
      return e == null
        ? e === void 0
          ? yR
          : _R
        : hd && hd in Object(e)
        ? hR(e)
        : gR(e);
    }
    gd.exports = TR;
  });
  var Ze = s((lj, _d) => {
    function IR(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    _d.exports = IR;
  });
  var Ko = s((fj, yd) => {
    var OR = Ot(),
      mR = Ze(),
      SR = "[object AsyncFunction]",
      AR = "[object Function]",
      bR = "[object GeneratorFunction]",
      RR = "[object Proxy]";
    function wR(e) {
      if (!mR(e)) return !1;
      var t = OR(e);
      return t == AR || t == bR || t == SR || t == RR;
    }
    yd.exports = wR;
  });
  var Id = s((dj, Td) => {
    var CR = Ve(),
      NR = CR["__core-js_shared__"];
    Td.exports = NR;
  });
  var Sd = s((pj, md) => {
    var ko = Id(),
      Od = (function () {
        var e = /[^.]+$/.exec((ko && ko.keys && ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function qR(e) {
      return !!Od && Od in e;
    }
    md.exports = qR;
  });
  var zo = s((vj, Ad) => {
    var PR = Function.prototype,
      LR = PR.toString;
    function xR(e) {
      if (e != null) {
        try {
          return LR.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ad.exports = xR;
  });
  var Rd = s((Ej, bd) => {
    var MR = Ko(),
      DR = Sd(),
      FR = Ze(),
      GR = zo(),
      XR = /[\\^$.*+?()[\]{}|]/g,
      VR = /^\[object .+?Constructor\]$/,
      UR = Function.prototype,
      BR = Object.prototype,
      WR = UR.toString,
      jR = BR.hasOwnProperty,
      HR = RegExp(
        "^" +
          WR.call(jR)
            .replace(XR, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function KR(e) {
      if (!FR(e) || DR(e)) return !1;
      var t = MR(e) ? HR : VR;
      return t.test(GR(e));
    }
    bd.exports = KR;
  });
  var Cd = s((hj, wd) => {
    function kR(e, t) {
      return e?.[t];
    }
    wd.exports = kR;
  });
  var ft = s((gj, Nd) => {
    var zR = Rd(),
      YR = Cd();
    function $R(e, t) {
      var r = YR(e, t);
      return zR(r) ? r : void 0;
    }
    Nd.exports = $R;
  });
  var Cn = s((_j, qd) => {
    var QR = ft(),
      ZR = Ve(),
      JR = QR(ZR, "Map");
    qd.exports = JR;
  });
  var wr = s((yj, Pd) => {
    var ew = ft(),
      tw = ew(Object, "create");
    Pd.exports = tw;
  });
  var Md = s((Tj, xd) => {
    var Ld = wr();
    function rw() {
      (this.__data__ = Ld ? Ld(null) : {}), (this.size = 0);
    }
    xd.exports = rw;
  });
  var Fd = s((Ij, Dd) => {
    function nw(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Dd.exports = nw;
  });
  var Xd = s((Oj, Gd) => {
    var iw = wr(),
      ow = "__lodash_hash_undefined__",
      aw = Object.prototype,
      sw = aw.hasOwnProperty;
    function uw(e) {
      var t = this.__data__;
      if (iw) {
        var r = t[e];
        return r === ow ? void 0 : r;
      }
      return sw.call(t, e) ? t[e] : void 0;
    }
    Gd.exports = uw;
  });
  var Ud = s((mj, Vd) => {
    var cw = wr(),
      lw = Object.prototype,
      fw = lw.hasOwnProperty;
    function dw(e) {
      var t = this.__data__;
      return cw ? t[e] !== void 0 : fw.call(t, e);
    }
    Vd.exports = dw;
  });
  var Wd = s((Sj, Bd) => {
    var pw = wr(),
      vw = "__lodash_hash_undefined__";
    function Ew(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = pw && t === void 0 ? vw : t),
        this
      );
    }
    Bd.exports = Ew;
  });
  var Hd = s((Aj, jd) => {
    var hw = Md(),
      gw = Fd(),
      _w = Xd(),
      yw = Ud(),
      Tw = Wd();
    function Ht(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ht.prototype.clear = hw;
    Ht.prototype.delete = gw;
    Ht.prototype.get = _w;
    Ht.prototype.has = yw;
    Ht.prototype.set = Tw;
    jd.exports = Ht;
  });
  var zd = s((bj, kd) => {
    var Kd = Hd(),
      Iw = br(),
      Ow = Cn();
    function mw() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Kd(),
          map: new (Ow || Iw)(),
          string: new Kd(),
        });
    }
    kd.exports = mw;
  });
  var $d = s((Rj, Yd) => {
    function Sw(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Yd.exports = Sw;
  });
  var Cr = s((wj, Qd) => {
    var Aw = $d();
    function bw(e, t) {
      var r = e.__data__;
      return Aw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Qd.exports = bw;
  });
  var Jd = s((Cj, Zd) => {
    var Rw = Cr();
    function ww(e) {
      var t = Rw(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Zd.exports = ww;
  });
  var tp = s((Nj, ep) => {
    var Cw = Cr();
    function Nw(e) {
      return Cw(this, e).get(e);
    }
    ep.exports = Nw;
  });
  var np = s((qj, rp) => {
    var qw = Cr();
    function Pw(e) {
      return qw(this, e).has(e);
    }
    rp.exports = Pw;
  });
  var op = s((Pj, ip) => {
    var Lw = Cr();
    function xw(e, t) {
      var r = Lw(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ip.exports = xw;
  });
  var Nn = s((Lj, ap) => {
    var Mw = zd(),
      Dw = Jd(),
      Fw = tp(),
      Gw = np(),
      Xw = op();
    function Kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Kt.prototype.clear = Mw;
    Kt.prototype.delete = Dw;
    Kt.prototype.get = Fw;
    Kt.prototype.has = Gw;
    Kt.prototype.set = Xw;
    ap.exports = Kt;
  });
  var up = s((xj, sp) => {
    var Vw = br(),
      Uw = Cn(),
      Bw = Nn(),
      Ww = 200;
    function jw(e, t) {
      var r = this.__data__;
      if (r instanceof Vw) {
        var n = r.__data__;
        if (!Uw || n.length < Ww - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Bw(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    sp.exports = jw;
  });
  var Yo = s((Mj, cp) => {
    var Hw = br(),
      Kw = Jf(),
      kw = td(),
      zw = nd(),
      Yw = od(),
      $w = up();
    function kt(e) {
      var t = (this.__data__ = new Hw(e));
      this.size = t.size;
    }
    kt.prototype.clear = Kw;
    kt.prototype.delete = kw;
    kt.prototype.get = zw;
    kt.prototype.has = Yw;
    kt.prototype.set = $w;
    cp.exports = kt;
  });
  var fp = s((Dj, lp) => {
    var Qw = "__lodash_hash_undefined__";
    function Zw(e) {
      return this.__data__.set(e, Qw), this;
    }
    lp.exports = Zw;
  });
  var pp = s((Fj, dp) => {
    function Jw(e) {
      return this.__data__.has(e);
    }
    dp.exports = Jw;
  });
  var Ep = s((Gj, vp) => {
    var eC = Nn(),
      tC = fp(),
      rC = pp();
    function qn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eC(); ++t < r; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = tC;
    qn.prototype.has = rC;
    vp.exports = qn;
  });
  var gp = s((Xj, hp) => {
    function nC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    hp.exports = nC;
  });
  var yp = s((Vj, _p) => {
    function iC(e, t) {
      return e.has(t);
    }
    _p.exports = iC;
  });
  var $o = s((Uj, Tp) => {
    var oC = Ep(),
      aC = gp(),
      sC = yp(),
      uC = 1,
      cC = 2;
    function lC(e, t, r, n, o, i) {
      var a = r & uC,
        u = e.length,
        c = t.length;
      if (u != c && !(a && c > u)) return !1;
      var f = i.get(e),
        v = i.get(t);
      if (f && v) return f == t && v == e;
      var d = -1,
        E = !0,
        I = r & cC ? new oC() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < u; ) {
        var b = e[d],
          S = t[d];
        if (n) var q = a ? n(S, b, d, t, e, i) : n(b, S, d, e, t, i);
        if (q !== void 0) {
          if (q) continue;
          E = !1;
          break;
        }
        if (I) {
          if (
            !aC(t, function (O, A) {
              if (!sC(I, A) && (b === O || o(b, O, r, n, i))) return I.push(A);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(b === S || o(b, S, r, n, i))) {
          E = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), E;
    }
    Tp.exports = lC;
  });
  var Op = s((Bj, Ip) => {
    var fC = Ve(),
      dC = fC.Uint8Array;
    Ip.exports = dC;
  });
  var Sp = s((Wj, mp) => {
    function pC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    mp.exports = pC;
  });
  var bp = s((jj, Ap) => {
    function vC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ap.exports = vC;
  });
  var qp = s((Hj, Np) => {
    var Rp = jt(),
      wp = Op(),
      EC = wn(),
      hC = $o(),
      gC = Sp(),
      _C = bp(),
      yC = 1,
      TC = 2,
      IC = "[object Boolean]",
      OC = "[object Date]",
      mC = "[object Error]",
      SC = "[object Map]",
      AC = "[object Number]",
      bC = "[object RegExp]",
      RC = "[object Set]",
      wC = "[object String]",
      CC = "[object Symbol]",
      NC = "[object ArrayBuffer]",
      qC = "[object DataView]",
      Cp = Rp ? Rp.prototype : void 0,
      Qo = Cp ? Cp.valueOf : void 0;
    function PC(e, t, r, n, o, i, a) {
      switch (r) {
        case qC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case NC:
          return !(e.byteLength != t.byteLength || !i(new wp(e), new wp(t)));
        case IC:
        case OC:
        case AC:
          return EC(+e, +t);
        case mC:
          return e.name == t.name && e.message == t.message;
        case bC:
        case wC:
          return e == t + "";
        case SC:
          var u = gC;
        case RC:
          var c = n & yC;
          if ((u || (u = _C), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= TC), a.set(e, t);
          var v = hC(u(e), u(t), n, o, i, a);
          return a.delete(e), v;
        case CC:
          if (Qo) return Qo.call(e) == Qo.call(t);
      }
      return !1;
    }
    Np.exports = PC;
  });
  var Pn = s((Kj, Pp) => {
    function LC(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Pp.exports = LC;
  });
  var he = s((kj, Lp) => {
    var xC = Array.isArray;
    Lp.exports = xC;
  });
  var Zo = s((zj, xp) => {
    var MC = Pn(),
      DC = he();
    function FC(e, t, r) {
      var n = t(e);
      return DC(e) ? n : MC(n, r(e));
    }
    xp.exports = FC;
  });
  var Dp = s((Yj, Mp) => {
    function GC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Mp.exports = GC;
  });
  var Jo = s(($j, Fp) => {
    function XC() {
      return [];
    }
    Fp.exports = XC;
  });
  var ea = s((Qj, Xp) => {
    var VC = Dp(),
      UC = Jo(),
      BC = Object.prototype,
      WC = BC.propertyIsEnumerable,
      Gp = Object.getOwnPropertySymbols,
      jC = Gp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                VC(Gp(e), function (t) {
                  return WC.call(e, t);
                }));
          }
        : UC;
    Xp.exports = jC;
  });
  var Up = s((Zj, Vp) => {
    function HC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Vp.exports = HC;
  });
  var dt = s((Jj, Bp) => {
    function KC(e) {
      return e != null && typeof e == "object";
    }
    Bp.exports = KC;
  });
  var jp = s((eH, Wp) => {
    var kC = Ot(),
      zC = dt(),
      YC = "[object Arguments]";
    function $C(e) {
      return zC(e) && kC(e) == YC;
    }
    Wp.exports = $C;
  });
  var Nr = s((tH, kp) => {
    var Hp = jp(),
      QC = dt(),
      Kp = Object.prototype,
      ZC = Kp.hasOwnProperty,
      JC = Kp.propertyIsEnumerable,
      eN = Hp(
        (function () {
          return arguments;
        })()
      )
        ? Hp
        : function (e) {
            return QC(e) && ZC.call(e, "callee") && !JC.call(e, "callee");
          };
    kp.exports = eN;
  });
  var Yp = s((rH, zp) => {
    function tN() {
      return !1;
    }
    zp.exports = tN;
  });
  var Ln = s((qr, zt) => {
    var rN = Ve(),
      nN = Yp(),
      Zp = typeof qr == "object" && qr && !qr.nodeType && qr,
      $p = Zp && typeof zt == "object" && zt && !zt.nodeType && zt,
      iN = $p && $p.exports === Zp,
      Qp = iN ? rN.Buffer : void 0,
      oN = Qp ? Qp.isBuffer : void 0,
      aN = oN || nN;
    zt.exports = aN;
  });
  var xn = s((nH, Jp) => {
    var sN = 9007199254740991,
      uN = /^(?:0|[1-9]\d*)$/;
    function cN(e, t) {
      var r = typeof e;
      return (
        (t = t ?? sN),
        !!t &&
          (r == "number" || (r != "symbol" && uN.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Jp.exports = cN;
  });
  var Mn = s((iH, ev) => {
    var lN = 9007199254740991;
    function fN(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lN;
    }
    ev.exports = fN;
  });
  var rv = s((oH, tv) => {
    var dN = Ot(),
      pN = Mn(),
      vN = dt(),
      EN = "[object Arguments]",
      hN = "[object Array]",
      gN = "[object Boolean]",
      _N = "[object Date]",
      yN = "[object Error]",
      TN = "[object Function]",
      IN = "[object Map]",
      ON = "[object Number]",
      mN = "[object Object]",
      SN = "[object RegExp]",
      AN = "[object Set]",
      bN = "[object String]",
      RN = "[object WeakMap]",
      wN = "[object ArrayBuffer]",
      CN = "[object DataView]",
      NN = "[object Float32Array]",
      qN = "[object Float64Array]",
      PN = "[object Int8Array]",
      LN = "[object Int16Array]",
      xN = "[object Int32Array]",
      MN = "[object Uint8Array]",
      DN = "[object Uint8ClampedArray]",
      FN = "[object Uint16Array]",
      GN = "[object Uint32Array]",
      ie = {};
    ie[NN] =
      ie[qN] =
      ie[PN] =
      ie[LN] =
      ie[xN] =
      ie[MN] =
      ie[DN] =
      ie[FN] =
      ie[GN] =
        !0;
    ie[EN] =
      ie[hN] =
      ie[wN] =
      ie[gN] =
      ie[CN] =
      ie[_N] =
      ie[yN] =
      ie[TN] =
      ie[IN] =
      ie[ON] =
      ie[mN] =
      ie[SN] =
      ie[AN] =
      ie[bN] =
      ie[RN] =
        !1;
    function XN(e) {
      return vN(e) && pN(e.length) && !!ie[dN(e)];
    }
    tv.exports = XN;
  });
  var iv = s((aH, nv) => {
    function VN(e) {
      return function (t) {
        return e(t);
      };
    }
    nv.exports = VN;
  });
  var av = s((Pr, Yt) => {
    var UN = Ho(),
      ov = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      Lr = ov && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
      BN = Lr && Lr.exports === ov,
      ta = BN && UN.process,
      WN = (function () {
        try {
          var e = Lr && Lr.require && Lr.require("util").types;
          return e || (ta && ta.binding && ta.binding("util"));
        } catch {}
      })();
    Yt.exports = WN;
  });
  var Dn = s((sH, cv) => {
    var jN = rv(),
      HN = iv(),
      sv = av(),
      uv = sv && sv.isTypedArray,
      KN = uv ? HN(uv) : jN;
    cv.exports = KN;
  });
  var ra = s((uH, lv) => {
    var kN = Up(),
      zN = Nr(),
      YN = he(),
      $N = Ln(),
      QN = xn(),
      ZN = Dn(),
      JN = Object.prototype,
      eq = JN.hasOwnProperty;
    function tq(e, t) {
      var r = YN(e),
        n = !r && zN(e),
        o = !r && !n && $N(e),
        i = !r && !n && !o && ZN(e),
        a = r || n || o || i,
        u = a ? kN(e.length, String) : [],
        c = u.length;
      for (var f in e)
        (t || eq.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              QN(f, c))
          ) &&
          u.push(f);
      return u;
    }
    lv.exports = tq;
  });
  var Fn = s((cH, fv) => {
    var rq = Object.prototype;
    function nq(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || rq;
      return e === r;
    }
    fv.exports = nq;
  });
  var na = s((lH, dv) => {
    function iq(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    dv.exports = iq;
  });
  var vv = s((fH, pv) => {
    var oq = na(),
      aq = oq(Object.keys, Object);
    pv.exports = aq;
  });
  var Gn = s((dH, Ev) => {
    var sq = Fn(),
      uq = vv(),
      cq = Object.prototype,
      lq = cq.hasOwnProperty;
    function fq(e) {
      if (!sq(e)) return uq(e);
      var t = [];
      for (var r in Object(e)) lq.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ev.exports = fq;
  });
  var mt = s((pH, hv) => {
    var dq = Ko(),
      pq = Mn();
    function vq(e) {
      return e != null && pq(e.length) && !dq(e);
    }
    hv.exports = vq;
  });
  var xr = s((vH, gv) => {
    var Eq = ra(),
      hq = Gn(),
      gq = mt();
    function _q(e) {
      return gq(e) ? Eq(e) : hq(e);
    }
    gv.exports = _q;
  });
  var yv = s((EH, _v) => {
    var yq = Zo(),
      Tq = ea(),
      Iq = xr();
    function Oq(e) {
      return yq(e, Iq, Tq);
    }
    _v.exports = Oq;
  });
  var Ov = s((hH, Iv) => {
    var Tv = yv(),
      mq = 1,
      Sq = Object.prototype,
      Aq = Sq.hasOwnProperty;
    function bq(e, t, r, n, o, i) {
      var a = r & mq,
        u = Tv(e),
        c = u.length,
        f = Tv(t),
        v = f.length;
      if (c != v && !a) return !1;
      for (var d = c; d--; ) {
        var E = u[d];
        if (!(a ? E in t : Aq.call(t, E))) return !1;
      }
      var I = i.get(e),
        b = i.get(t);
      if (I && b) return I == t && b == e;
      var S = !0;
      i.set(e, t), i.set(t, e);
      for (var q = a; ++d < c; ) {
        E = u[d];
        var O = e[E],
          A = t[E];
        if (n) var _ = a ? n(A, O, E, t, e, i) : n(O, A, E, e, t, i);
        if (!(_ === void 0 ? O === A || o(O, A, r, n, i) : _)) {
          S = !1;
          break;
        }
        q || (q = E == "constructor");
      }
      if (S && !q) {
        var C = e.constructor,
          R = t.constructor;
        C != R &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof C == "function" &&
            C instanceof C &&
            typeof R == "function" &&
            R instanceof R
          ) &&
          (S = !1);
      }
      return i.delete(e), i.delete(t), S;
    }
    Iv.exports = bq;
  });
  var Sv = s((gH, mv) => {
    var Rq = ft(),
      wq = Ve(),
      Cq = Rq(wq, "DataView");
    mv.exports = Cq;
  });
  var bv = s((_H, Av) => {
    var Nq = ft(),
      qq = Ve(),
      Pq = Nq(qq, "Promise");
    Av.exports = Pq;
  });
  var wv = s((yH, Rv) => {
    var Lq = ft(),
      xq = Ve(),
      Mq = Lq(xq, "Set");
    Rv.exports = Mq;
  });
  var ia = s((TH, Cv) => {
    var Dq = ft(),
      Fq = Ve(),
      Gq = Dq(Fq, "WeakMap");
    Cv.exports = Gq;
  });
  var Xn = s((IH, Dv) => {
    var oa = Sv(),
      aa = Cn(),
      sa = bv(),
      ua = wv(),
      ca = ia(),
      Mv = Ot(),
      $t = zo(),
      Nv = "[object Map]",
      Xq = "[object Object]",
      qv = "[object Promise]",
      Pv = "[object Set]",
      Lv = "[object WeakMap]",
      xv = "[object DataView]",
      Vq = $t(oa),
      Uq = $t(aa),
      Bq = $t(sa),
      Wq = $t(ua),
      jq = $t(ca),
      St = Mv;
    ((oa && St(new oa(new ArrayBuffer(1))) != xv) ||
      (aa && St(new aa()) != Nv) ||
      (sa && St(sa.resolve()) != qv) ||
      (ua && St(new ua()) != Pv) ||
      (ca && St(new ca()) != Lv)) &&
      (St = function (e) {
        var t = Mv(e),
          r = t == Xq ? e.constructor : void 0,
          n = r ? $t(r) : "";
        if (n)
          switch (n) {
            case Vq:
              return xv;
            case Uq:
              return Nv;
            case Bq:
              return qv;
            case Wq:
              return Pv;
            case jq:
              return Lv;
          }
        return t;
      });
    Dv.exports = St;
  });
  var jv = s((OH, Wv) => {
    var la = Yo(),
      Hq = $o(),
      Kq = qp(),
      kq = Ov(),
      Fv = Xn(),
      Gv = he(),
      Xv = Ln(),
      zq = Dn(),
      Yq = 1,
      Vv = "[object Arguments]",
      Uv = "[object Array]",
      Vn = "[object Object]",
      $q = Object.prototype,
      Bv = $q.hasOwnProperty;
    function Qq(e, t, r, n, o, i) {
      var a = Gv(e),
        u = Gv(t),
        c = a ? Uv : Fv(e),
        f = u ? Uv : Fv(t);
      (c = c == Vv ? Vn : c), (f = f == Vv ? Vn : f);
      var v = c == Vn,
        d = f == Vn,
        E = c == f;
      if (E && Xv(e)) {
        if (!Xv(t)) return !1;
        (a = !0), (v = !1);
      }
      if (E && !v)
        return (
          i || (i = new la()),
          a || zq(e) ? Hq(e, t, r, n, o, i) : Kq(e, t, c, r, n, o, i)
        );
      if (!(r & Yq)) {
        var I = v && Bv.call(e, "__wrapped__"),
          b = d && Bv.call(t, "__wrapped__");
        if (I || b) {
          var S = I ? e.value() : e,
            q = b ? t.value() : t;
          return i || (i = new la()), o(S, q, r, n, i);
        }
      }
      return E ? (i || (i = new la()), kq(e, t, r, n, o, i)) : !1;
    }
    Wv.exports = Qq;
  });
  var fa = s((mH, kv) => {
    var Zq = jv(),
      Hv = dt();
    function Kv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Hv(e) && !Hv(t))
        ? e !== e && t !== t
        : Zq(e, t, r, n, Kv, o);
    }
    kv.exports = Kv;
  });
  var Yv = s((SH, zv) => {
    var Jq = Yo(),
      eP = fa(),
      tP = 1,
      rP = 2;
    function nP(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var u = r[o];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        u = r[o];
        var c = u[0],
          f = e[c],
          v = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new Jq();
          if (n) var E = n(f, v, c, e, t, d);
          if (!(E === void 0 ? eP(v, f, tP | rP, n, d) : E)) return !1;
        }
      }
      return !0;
    }
    zv.exports = nP;
  });
  var da = s((AH, $v) => {
    var iP = Ze();
    function oP(e) {
      return e === e && !iP(e);
    }
    $v.exports = oP;
  });
  var Zv = s((bH, Qv) => {
    var aP = da(),
      sP = xr();
    function uP(e) {
      for (var t = sP(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, aP(o)];
      }
      return t;
    }
    Qv.exports = uP;
  });
  var pa = s((RH, Jv) => {
    function cP(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Jv.exports = cP;
  });
  var tE = s((wH, eE) => {
    var lP = Yv(),
      fP = Zv(),
      dP = pa();
    function pP(e) {
      var t = fP(e);
      return t.length == 1 && t[0][2]
        ? dP(t[0][0], t[0][1])
        : function (r) {
            return r === e || lP(r, e, t);
          };
    }
    eE.exports = pP;
  });
  var Mr = s((CH, rE) => {
    var vP = Ot(),
      EP = dt(),
      hP = "[object Symbol]";
    function gP(e) {
      return typeof e == "symbol" || (EP(e) && vP(e) == hP);
    }
    rE.exports = gP;
  });
  var Un = s((NH, nE) => {
    var _P = he(),
      yP = Mr(),
      TP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      IP = /^\w*$/;
    function OP(e, t) {
      if (_P(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        yP(e)
        ? !0
        : IP.test(e) || !TP.test(e) || (t != null && e in Object(t));
    }
    nE.exports = OP;
  });
  var aE = s((qH, oE) => {
    var iE = Nn(),
      mP = "Expected a function";
    function va(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(mP);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (va.Cache || iE)()), r;
    }
    va.Cache = iE;
    oE.exports = va;
  });
  var uE = s((PH, sE) => {
    var SP = aE(),
      AP = 500;
    function bP(e) {
      var t = SP(e, function (n) {
          return r.size === AP && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    sE.exports = bP;
  });
  var lE = s((LH, cE) => {
    var RP = uE(),
      wP =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      CP = /\\(\\)?/g,
      NP = RP(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(wP, function (r, n, o, i) {
            t.push(o ? i.replace(CP, "$1") : n || r);
          }),
          t
        );
      });
    cE.exports = NP;
  });
  var Ea = s((xH, fE) => {
    function qP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    fE.exports = qP;
  });
  var gE = s((MH, hE) => {
    var dE = jt(),
      PP = Ea(),
      LP = he(),
      xP = Mr(),
      MP = 1 / 0,
      pE = dE ? dE.prototype : void 0,
      vE = pE ? pE.toString : void 0;
    function EE(e) {
      if (typeof e == "string") return e;
      if (LP(e)) return PP(e, EE) + "";
      if (xP(e)) return vE ? vE.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -MP ? "-0" : t;
    }
    hE.exports = EE;
  });
  var yE = s((DH, _E) => {
    var DP = gE();
    function FP(e) {
      return e == null ? "" : DP(e);
    }
    _E.exports = FP;
  });
  var Dr = s((FH, TE) => {
    var GP = he(),
      XP = Un(),
      VP = lE(),
      UP = yE();
    function BP(e, t) {
      return GP(e) ? e : XP(e, t) ? [e] : VP(UP(e));
    }
    TE.exports = BP;
  });
  var Qt = s((GH, IE) => {
    var WP = Mr(),
      jP = 1 / 0;
    function HP(e) {
      if (typeof e == "string" || WP(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -jP ? "-0" : t;
    }
    IE.exports = HP;
  });
  var Bn = s((XH, OE) => {
    var KP = Dr(),
      kP = Qt();
    function zP(e, t) {
      t = KP(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[kP(t[r++])];
      return r && r == n ? e : void 0;
    }
    OE.exports = zP;
  });
  var Wn = s((VH, mE) => {
    var YP = Bn();
    function $P(e, t, r) {
      var n = e == null ? void 0 : YP(e, t);
      return n === void 0 ? r : n;
    }
    mE.exports = $P;
  });
  var AE = s((UH, SE) => {
    function QP(e, t) {
      return e != null && t in Object(e);
    }
    SE.exports = QP;
  });
  var RE = s((BH, bE) => {
    var ZP = Dr(),
      JP = Nr(),
      eL = he(),
      tL = xn(),
      rL = Mn(),
      nL = Qt();
    function iL(e, t, r) {
      t = ZP(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = nL(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && rL(o) && tL(a, o) && (eL(e) || JP(e)));
    }
    bE.exports = iL;
  });
  var CE = s((WH, wE) => {
    var oL = AE(),
      aL = RE();
    function sL(e, t) {
      return e != null && aL(e, t, oL);
    }
    wE.exports = sL;
  });
  var qE = s((jH, NE) => {
    var uL = fa(),
      cL = Wn(),
      lL = CE(),
      fL = Un(),
      dL = da(),
      pL = pa(),
      vL = Qt(),
      EL = 1,
      hL = 2;
    function gL(e, t) {
      return fL(e) && dL(t)
        ? pL(vL(e), t)
        : function (r) {
            var n = cL(r, e);
            return n === void 0 && n === t ? lL(r, e) : uL(t, n, EL | hL);
          };
    }
    NE.exports = gL;
  });
  var jn = s((HH, PE) => {
    function _L(e) {
      return e;
    }
    PE.exports = _L;
  });
  var ha = s((KH, LE) => {
    function yL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    LE.exports = yL;
  });
  var ME = s((kH, xE) => {
    var TL = Bn();
    function IL(e) {
      return function (t) {
        return TL(t, e);
      };
    }
    xE.exports = IL;
  });
  var FE = s((zH, DE) => {
    var OL = ha(),
      mL = ME(),
      SL = Un(),
      AL = Qt();
    function bL(e) {
      return SL(e) ? OL(AL(e)) : mL(e);
    }
    DE.exports = bL;
  });
  var pt = s((YH, GE) => {
    var RL = tE(),
      wL = qE(),
      CL = jn(),
      NL = he(),
      qL = FE();
    function PL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? CL
        : typeof e == "object"
        ? NL(e)
          ? wL(e[0], e[1])
          : RL(e)
        : qL(e);
    }
    GE.exports = PL;
  });
  var ga = s(($H, XE) => {
    var LL = pt(),
      xL = mt(),
      ML = xr();
    function DL(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!xL(t)) {
          var i = LL(r, 3);
          (t = ML(t)),
            (r = function (u) {
              return i(o[u], u, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    XE.exports = DL;
  });
  var _a = s((QH, VE) => {
    function FL(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    VE.exports = FL;
  });
  var BE = s((ZH, UE) => {
    var GL = /\s/;
    function XL(e) {
      for (var t = e.length; t-- && GL.test(e.charAt(t)); );
      return t;
    }
    UE.exports = XL;
  });
  var jE = s((JH, WE) => {
    var VL = BE(),
      UL = /^\s+/;
    function BL(e) {
      return e && e.slice(0, VL(e) + 1).replace(UL, "");
    }
    WE.exports = BL;
  });
  var Hn = s((eK, kE) => {
    var WL = jE(),
      HE = Ze(),
      jL = Mr(),
      KE = 0 / 0,
      HL = /^[-+]0x[0-9a-f]+$/i,
      KL = /^0b[01]+$/i,
      kL = /^0o[0-7]+$/i,
      zL = parseInt;
    function YL(e) {
      if (typeof e == "number") return e;
      if (jL(e)) return KE;
      if (HE(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = HE(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = WL(e);
      var r = KL.test(e);
      return r || kL.test(e) ? zL(e.slice(2), r ? 2 : 8) : HL.test(e) ? KE : +e;
    }
    kE.exports = YL;
  });
  var $E = s((tK, YE) => {
    var $L = Hn(),
      zE = 1 / 0,
      QL = 17976931348623157e292;
    function ZL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = $L(e)), e === zE || e === -zE)) {
        var t = e < 0 ? -1 : 1;
        return t * QL;
      }
      return e === e ? e : 0;
    }
    YE.exports = ZL;
  });
  var ya = s((rK, QE) => {
    var JL = $E();
    function ex(e) {
      var t = JL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    QE.exports = ex;
  });
  var JE = s((nK, ZE) => {
    var tx = _a(),
      rx = pt(),
      nx = ya(),
      ix = Math.max;
    function ox(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : nx(r);
      return o < 0 && (o = ix(n + o, 0)), tx(e, rx(t, 3), o);
    }
    ZE.exports = ox;
  });
  var Ta = s((iK, eh) => {
    var ax = ga(),
      sx = JE(),
      ux = ax(sx);
    eh.exports = ux;
  });
  var kn = s((Oe) => {
    "use strict";
    var cx = Ye().default;
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.withBrowser =
      Oe.TRANSFORM_STYLE_PREFIXED =
      Oe.TRANSFORM_PREFIXED =
      Oe.IS_BROWSER_ENV =
      Oe.FLEX_PREFIXED =
      Oe.ELEMENT_MATCHES =
        void 0;
    var lx = cx(Ta()),
      rh = typeof window < "u";
    Oe.IS_BROWSER_ENV = rh;
    var Kn = (e, t) => (rh ? e() : t);
    Oe.withBrowser = Kn;
    var fx = Kn(() =>
      (0, lx.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Oe.ELEMENT_MATCHES = fx;
    var dx = Kn(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Oe.FLEX_PREFIXED = dx;
    var nh = Kn(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Oe.TRANSFORM_PREFIXED = nh;
    var th = nh.split("transform")[0],
      px = th ? th + "TransformStyle" : "transformStyle";
    Oe.TRANSFORM_STYLE_PREFIXED = px;
  });
  var Ia = s((aK, uh) => {
    var vx = 4,
      Ex = 0.001,
      hx = 1e-7,
      gx = 10,
      Fr = 11,
      zn = 1 / (Fr - 1),
      _x = typeof Float32Array == "function";
    function ih(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function oh(e, t) {
      return 3 * t - 6 * e;
    }
    function ah(e) {
      return 3 * e;
    }
    function Yn(e, t, r) {
      return ((ih(t, r) * e + oh(t, r)) * e + ah(t)) * e;
    }
    function sh(e, t, r) {
      return 3 * ih(t, r) * e * e + 2 * oh(t, r) * e + ah(t);
    }
    function yx(e, t, r, n, o) {
      var i,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (i = Yn(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > hx && ++u < gx);
      return a;
    }
    function Tx(e, t, r, n) {
      for (var o = 0; o < vx; ++o) {
        var i = sh(t, r, n);
        if (i === 0) return t;
        var a = Yn(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    uh.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = _x ? new Float32Array(Fr) : new Array(Fr);
      if (t !== r || n !== o)
        for (var a = 0; a < Fr; ++a) i[a] = Yn(a * zn, t, n);
      function u(c) {
        for (var f = 0, v = 1, d = Fr - 1; v !== d && i[v] <= c; ++v) f += zn;
        --v;
        var E = (c - i[v]) / (i[v + 1] - i[v]),
          I = f + E * zn,
          b = sh(I, t, n);
        return b >= Ex ? Tx(c, I, t, n) : b === 0 ? I : yx(c, f, f + zn, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Yn(u(f), r, o);
      };
    };
  });
  var Oa = s((H) => {
    "use strict";
    var Ix = Ye().default;
    Object.defineProperty(H, "__esModule", { value: !0 });
    H.bounce = nM;
    H.bouncePast = iM;
    H.easeOut = H.easeInOut = H.easeIn = H.ease = void 0;
    H.inBack = zx;
    H.inCirc = jx;
    H.inCubic = Cx;
    H.inElastic = Qx;
    H.inExpo = Ux;
    H.inOutBack = $x;
    H.inOutCirc = Kx;
    H.inOutCubic = qx;
    H.inOutElastic = Jx;
    H.inOutExpo = Wx;
    H.inOutQuad = wx;
    H.inOutQuart = xx;
    H.inOutQuint = Fx;
    H.inOutSine = Vx;
    H.inQuad = bx;
    H.inQuart = Px;
    H.inQuint = Mx;
    H.inSine = Gx;
    H.outBack = Yx;
    H.outBounce = kx;
    H.outCirc = Hx;
    H.outCubic = Nx;
    H.outElastic = Zx;
    H.outExpo = Bx;
    H.outQuad = Rx;
    H.outQuart = Lx;
    H.outQuint = Dx;
    H.outSine = Xx;
    H.swingFrom = tM;
    H.swingFromTo = eM;
    H.swingTo = rM;
    var $n = Ix(Ia()),
      ot = 1.70158,
      Ox = (0, $n.default)(0.25, 0.1, 0.25, 1);
    H.ease = Ox;
    var mx = (0, $n.default)(0.42, 0, 1, 1);
    H.easeIn = mx;
    var Sx = (0, $n.default)(0, 0, 0.58, 1);
    H.easeOut = Sx;
    var Ax = (0, $n.default)(0.42, 0, 0.58, 1);
    H.easeInOut = Ax;
    function bx(e) {
      return Math.pow(e, 2);
    }
    function Rx(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function wx(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function Cx(e) {
      return Math.pow(e, 3);
    }
    function Nx(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function qx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function Px(e) {
      return Math.pow(e, 4);
    }
    function Lx(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function xx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function Mx(e) {
      return Math.pow(e, 5);
    }
    function Dx(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function Fx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function Gx(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function Xx(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function Vx(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function Ux(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function Bx(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function Wx(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function jx(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function Hx(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function Kx(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function kx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function zx(e) {
      let t = ot;
      return e * e * ((t + 1) * e - t);
    }
    function Yx(e) {
      let t = ot;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function $x(e) {
      let t = ot;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function Qx(e) {
      let t = ot,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function Zx(e) {
      let t = ot,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function Jx(e) {
      let t = ot,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function eM(e) {
      let t = ot;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function tM(e) {
      let t = ot;
      return e * e * ((t + 1) * e - t);
    }
    function rM(e) {
      let t = ot;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function nM(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function iM(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Sa = s((Gr) => {
    "use strict";
    var oM = Ye().default,
      aM = Mt().default;
    Object.defineProperty(Gr, "__esModule", { value: !0 });
    Gr.applyEasing = cM;
    Gr.createBezierEasing = uM;
    Gr.optimizeFloat = ma;
    var ch = aM(Oa()),
      sM = oM(Ia());
    function ma(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function uM(e) {
      return (0, sM.default)(...e);
    }
    function cM(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : ma(r ? (t > 0 ? r(t) : t) : t > 0 && e && ch[e] ? ch[e](t) : t);
    }
  });
  var ph = s((Zt) => {
    "use strict";
    Object.defineProperty(Zt, "__esModule", { value: !0 });
    Zt.createElementState = dh;
    Zt.ixElements = void 0;
    Zt.mergeActionState = Aa;
    var Qn = Bt(),
      fh = Re(),
      {
        HTML_ELEMENT: cK,
        PLAIN_OBJECT: lM,
        ABSTRACT_NODE: lK,
        CONFIG_X_VALUE: fM,
        CONFIG_Y_VALUE: dM,
        CONFIG_Z_VALUE: pM,
        CONFIG_VALUE: vM,
        CONFIG_X_UNIT: EM,
        CONFIG_Y_UNIT: hM,
        CONFIG_Z_UNIT: gM,
        CONFIG_UNIT: _M,
      } = fh.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: yM,
        IX2_INSTANCE_ADDED: TM,
        IX2_ELEMENT_STATE_CHANGED: IM,
      } = fh.IX2EngineActionTypes,
      lh = {},
      OM = "refState",
      mM = (e = lh, t = {}) => {
        switch (t.type) {
          case yM:
            return lh;
          case TM: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: u } = i,
              c = e;
            return (
              (0, Qn.getIn)(c, [r, n]) !== n && (c = dh(c, n, a, r, i)),
              Aa(c, r, u, o, i)
            );
          }
          case IM: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Aa(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    Zt.ixElements = mM;
    function dh(e, t, r, n, o) {
      let i =
        r === lM ? (0, Qn.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, Qn.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Aa(e, t, r, n, o) {
      let i = AM(o),
        a = [t, OM, r];
      return (0, Qn.mergeIn)(e, a, n, i);
    }
    var SM = [
      [fM, EM],
      [dM, hM],
      [pM, gM],
      [vM, _M],
    ];
    function AM(e) {
      let { config: t } = e;
      return SM.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          u = t[i];
        return a != null && u != null && (r[i] = u), r;
      }, {});
    }
  });
  var vh = s((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.renderPlugin =
      ge.getPluginOrigin =
      ge.getPluginDuration =
      ge.getPluginDestination =
      ge.getPluginConfig =
      ge.createPluginInstance =
      ge.clearPlugin =
        void 0;
    var bM = (e) => e.value;
    ge.getPluginConfig = bM;
    var RM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    ge.getPluginDuration = RM;
    var wM = (e) => e || { value: 0 };
    ge.getPluginOrigin = wM;
    var CM = (e) => ({ value: e.value });
    ge.getPluginDestination = CM;
    var NM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    ge.createPluginInstance = NM;
    var qM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    ge.renderPlugin = qM;
    var PM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    ge.clearPlugin = PM;
  });
  var ba = s((ve) => {
    "use strict";
    Object.defineProperty(ve, "__esModule", { value: !0 });
    ve.getPluginOrigin =
      ve.getPluginDuration =
      ve.getPluginDestination =
      ve.getPluginConfig =
      ve.createPluginInstance =
      ve.clearPlugin =
        void 0;
    ve.isPluginType = MM;
    ve.renderPlugin = void 0;
    var At = vh(),
      Eh = Re(),
      LM = kn(),
      xM = {
        [Eh.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: At.getPluginConfig,
          getOrigin: At.getPluginOrigin,
          getDuration: At.getPluginDuration,
          getDestination: At.getPluginDestination,
          createInstance: At.createPluginInstance,
          render: At.renderPlugin,
          clear: At.clearPlugin,
        },
      };
    function MM(e) {
      return e === Eh.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var bt = (e) => (t) => {
        if (!LM.IS_BROWSER_ENV) return () => null;
        let r = xM[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      DM = bt("getConfig");
    ve.getPluginConfig = DM;
    var FM = bt("getOrigin");
    ve.getPluginOrigin = FM;
    var GM = bt("getDuration");
    ve.getPluginDuration = GM;
    var XM = bt("getDestination");
    ve.getPluginDestination = XM;
    var VM = bt("createInstance");
    ve.createPluginInstance = VM;
    var UM = bt("render");
    ve.renderPlugin = UM;
    var BM = bt("clear");
    ve.clearPlugin = BM;
  });
  var gh = s((vK, hh) => {
    function WM(e, t) {
      return e == null || e !== e ? t : e;
    }
    hh.exports = WM;
  });
  var yh = s((EK, _h) => {
    function jM(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    _h.exports = jM;
  });
  var Ih = s((hK, Th) => {
    function HM(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), u = a.length; u--; ) {
          var c = a[e ? u : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    Th.exports = HM;
  });
  var mh = s((gK, Oh) => {
    var KM = Ih(),
      kM = KM();
    Oh.exports = kM;
  });
  var Ra = s((_K, Sh) => {
    var zM = mh(),
      YM = xr();
    function $M(e, t) {
      return e && zM(e, t, YM);
    }
    Sh.exports = $M;
  });
  var bh = s((yK, Ah) => {
    var QM = mt();
    function ZM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!QM(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    Ah.exports = ZM;
  });
  var wa = s((TK, Rh) => {
    var JM = Ra(),
      eD = bh(),
      tD = eD(JM);
    Rh.exports = tD;
  });
  var Ch = s((IK, wh) => {
    function rD(e, t, r, n, o) {
      return (
        o(e, function (i, a, u) {
          r = n ? ((n = !1), i) : t(r, i, a, u);
        }),
        r
      );
    }
    wh.exports = rD;
  });
  var qh = s((OK, Nh) => {
    var nD = yh(),
      iD = wa(),
      oD = pt(),
      aD = Ch(),
      sD = he();
    function uD(e, t, r) {
      var n = sD(e) ? nD : aD,
        o = arguments.length < 3;
      return n(e, oD(t, 4), r, o, iD);
    }
    Nh.exports = uD;
  });
  var Lh = s((mK, Ph) => {
    var cD = _a(),
      lD = pt(),
      fD = ya(),
      dD = Math.max,
      pD = Math.min;
    function vD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = fD(r)), (o = r < 0 ? dD(n + o, 0) : pD(o, n - 1))),
        cD(e, lD(t, 3), o, !0)
      );
    }
    Ph.exports = vD;
  });
  var Mh = s((SK, xh) => {
    var ED = ga(),
      hD = Lh(),
      gD = ED(hD);
    xh.exports = gD;
  });
  var Fh = s((Zn) => {
    "use strict";
    Object.defineProperty(Zn, "__esModule", { value: !0 });
    Zn.default = void 0;
    var _D = Object.prototype.hasOwnProperty;
    function Dh(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function yD(e, t) {
      if (Dh(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!_D.call(t, r[o]) || !Dh(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var TD = yD;
    Zn.default = TD;
  });
  var ig = s((re) => {
    "use strict";
    var ti = Ye().default;
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.cleanupHTMLElement = gF;
    re.clearAllStyles = hF;
    re.getActionListProgress = yF;
    re.getAffectedElements = xa;
    re.getComputedStyle = HD;
    re.getDestinationValues = ZD;
    re.getElementId = UD;
    re.getInstanceId = XD;
    re.getInstanceOrigin = zD;
    re.getItemConfigByKey = void 0;
    re.getMaxDurationItemIndex = ng;
    re.getNamespacedParameterId = OF;
    re.getRenderType = eg;
    re.getStyleProp = JD;
    re.mediaQueriesEqual = SF;
    re.observeStore = jD;
    re.reduceListToGroup = TF;
    re.reifyState = BD;
    re.renderHTMLElement = eF;
    Object.defineProperty(re, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return kh.default;
      },
    });
    re.shouldAllowMediaQuery = mF;
    re.shouldNamespaceEventParameter = IF;
    re.stringifyTarget = AF;
    var vt = ti(gh()),
      Na = ti(qh()),
      Ca = ti(Mh()),
      Gh = Bt(),
      Rt = Re(),
      kh = ti(Fh()),
      ID = Sa(),
      tt = ba(),
      me = kn(),
      {
        BACKGROUND: OD,
        TRANSFORM: mD,
        TRANSLATE_3D: SD,
        SCALE_3D: AD,
        ROTATE_X: bD,
        ROTATE_Y: RD,
        ROTATE_Z: wD,
        SKEW: CD,
        PRESERVE_3D: ND,
        FLEX: qD,
        OPACITY: Jn,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: Vr,
        WIDTH: Je,
        HEIGHT: et,
        BACKGROUND_COLOR: zh,
        BORDER_COLOR: PD,
        COLOR: LD,
        CHILDREN: Xh,
        IMMEDIATE_CHILDREN: xD,
        SIBLINGS: Vh,
        PARENT: MD,
        DISPLAY: ei,
        WILL_CHANGE: Jt,
        AUTO: Et,
        COMMA_DELIMITER: Ur,
        COLON_DELIMITER: DD,
        BAR_DELIMITER: Uh,
        RENDER_TRANSFORM: Yh,
        RENDER_GENERAL: qa,
        RENDER_STYLE: Pa,
        RENDER_PLUGIN: $h,
      } = Rt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: er,
        TRANSFORM_SCALE: tr,
        TRANSFORM_ROTATE: rr,
        TRANSFORM_SKEW: Br,
        STYLE_OPACITY: Qh,
        STYLE_FILTER: Wr,
        STYLE_FONT_VARIATION: jr,
        STYLE_SIZE: nr,
        STYLE_BACKGROUND_COLOR: ir,
        STYLE_BORDER: or,
        STYLE_TEXT_COLOR: ar,
        GENERAL_DISPLAY: ri,
      } = Rt.ActionTypeConsts,
      FD = "OBJECT_VALUE",
      Zh = (e) => e.trim(),
      La = Object.freeze({ [ir]: zh, [or]: PD, [ar]: LD }),
      Jh = Object.freeze({
        [me.TRANSFORM_PREFIXED]: mD,
        [zh]: OD,
        [Jn]: Jn,
        [Xr]: Xr,
        [Je]: Je,
        [et]: et,
        [Vr]: Vr,
      }),
      Bh = {},
      GD = 1;
    function XD() {
      return "i" + GD++;
    }
    var VD = 1;
    function UD(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + VD++;
    }
    function BD({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Na.default)(
          e,
          (a, u) => {
            let { eventTypeId: c } = u;
            return a[c] || (a[c] = {}), (a[c][u.id] = u), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var WD = (e, t) => e === t;
    function jD({ store: e, select: t, onChange: r, comparator: n = WD }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        u = t(o());
      function c() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        n(f, u) || ((u = f), r(u, e));
      }
      return a;
    }
    function Wh(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        };
      }
      return {};
    }
    function xa({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, u;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (x, D) =>
            x.concat(
              xa({
                config: { target: D },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: v,
          queryDocument: d,
          getChildElements: E,
          getSiblingElements: I,
          matchSelector: b,
          elementContains: S,
          isSiblingNode: q,
        } = o,
        { target: O } = e;
      if (!O) return [];
      let {
        id: A,
        objectId: _,
        selector: C,
        selectorGuids: R,
        appliesTo: N,
        useEventTarget: M,
      } = Wh(O);
      if (_) return [Bh[_] || (Bh[_] = {})];
      if (N === Rt.EventAppliesTo.PAGE) {
        let x = f(A);
        return x ? [x] : [];
      }
      let X =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (u = a.config) === null ||
            u === void 0
              ? void 0
              : u.affectedElements) !== null && i !== void 0
            ? i
            : {})[A || C] || {},
        Q = !!(X.id || X.selector),
        W,
        L,
        g,
        P = t && v(Wh(t.target));
      if (
        (Q
          ? ((W = X.limitAffectedElements), (L = P), (g = v(X)))
          : (L = g = v({ id: A, selector: C, selectorGuids: R })),
        t && M)
      ) {
        let x = r && (g || M === !0) ? [r] : d(P);
        if (g) {
          if (M === MD) return d(g).filter((D) => x.some((B) => S(D, B)));
          if (M === Xh) return d(g).filter((D) => x.some((B) => S(B, D)));
          if (M === Vh) return d(g).filter((D) => x.some((B) => q(B, D)));
        }
        return x;
      }
      return L == null || g == null
        ? []
        : me.IS_BROWSER_ENV && n
        ? d(g).filter((x) => n.contains(x))
        : W === Xh
        ? d(L, g)
        : W === xD
        ? E(d(L)).filter(b(g))
        : W === Vh
        ? I(d(L)).filter(b(g))
        : d(g);
    }
    function HD({ element: e, actionItem: t }) {
      if (!me.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case nr:
        case ir:
        case or:
        case ar:
        case ri:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var jh = /px/,
      KD = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = tF[n.type]), r),
          e || {}
        ),
      kD = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = rF[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function zD(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, tt.isPluginType)(a)) return (0, tt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case er:
        case tr:
        case rr:
        case Br:
          return t[n.actionTypeId] || Ma[n.actionTypeId];
        case Wr:
          return KD(t[n.actionTypeId], n.config.filters);
        case jr:
          return kD(t[n.actionTypeId], n.config.fontVariations);
        case Qh:
          return { value: (0, vt.default)(parseFloat(i(e, Jn)), 1) };
        case nr: {
          let u = i(e, Je),
            c = i(e, et),
            f,
            v;
          return (
            n.config.widthUnit === Et
              ? (f = jh.test(u) ? parseFloat(u) : parseFloat(r.width))
              : (f = (0, vt.default)(parseFloat(u), parseFloat(r.width))),
            n.config.heightUnit === Et
              ? (v = jh.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (v = (0, vt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: v }
          );
        }
        case ir:
        case or:
        case ar:
          return pF({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case ri:
          return { value: (0, vt.default)(i(e, ei), r.display) };
        case FD:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var YD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      $D = (e, t) => (t && (e[t.type] = t.value || 0), e),
      QD = (e, t, r) => {
        if ((0, tt.isPluginType)(e)) return (0, tt.getPluginConfig)(e)(r, t);
        switch (e) {
          case Wr: {
            let n = (0, Ca.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case jr: {
            let n = (0, Ca.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    re.getItemConfigByKey = QD;
    function ZD({ element: e, actionItem: t, elementApi: r }) {
      if ((0, tt.isPluginType)(t.actionTypeId))
        return (0, tt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case er:
        case tr:
        case rr:
        case Br: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case nr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: u } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!me.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === Et) {
            let v = n(e, Je);
            o(e, Je, ""), (c = i(e, "offsetWidth")), o(e, Je, v);
          }
          if (u === Et) {
            let v = n(e, et);
            o(e, et, ""), (f = i(e, "offsetHeight")), o(e, et, v);
          }
          return { widthValue: c, heightValue: f };
        }
        case ir:
        case or:
        case ar: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case Wr:
          return t.config.filters.reduce(YD, {});
        case jr:
          return t.config.fontVariations.reduce($D, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function eg(e) {
      if (/^TRANSFORM_/.test(e)) return Yh;
      if (/^STYLE_/.test(e)) return Pa;
      if (/^GENERAL_/.test(e)) return qa;
      if (/^PLUGIN_/.test(e)) return $h;
    }
    function JD(e, t) {
      return e === Pa ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function eF(e, t, r, n, o, i, a, u, c) {
      switch (u) {
        case Yh:
          return oF(e, t, r, o, a);
        case Pa:
          return vF(e, t, r, o, i, a);
        case qa:
          return EF(e, o, a);
        case $h: {
          let { actionTypeId: f } = o;
          if ((0, tt.isPluginType)(f)) return (0, tt.renderPlugin)(f)(c, t, o);
        }
      }
    }
    var Ma = {
        [er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Br]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      tF = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      rF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      nF = (e, t) => {
        let r = (0, Ca.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      iF = Object.keys(Ma);
    function oF(e, t, r, n, o) {
      let i = iF
          .map((u) => {
            let c = Ma[u],
              {
                xValue: f = c.xValue,
                yValue: v = c.yValue,
                zValue: d = c.zValue,
                xUnit: E = "",
                yUnit: I = "",
                zUnit: b = "",
              } = t[u] || {};
            switch (u) {
              case er:
                return `${SD}(${f}${E}, ${v}${I}, ${d}${b})`;
              case tr:
                return `${AD}(${f}${E}, ${v}${I}, ${d}${b})`;
              case rr:
                return `${bD}(${f}${E}) ${RD}(${v}${I}) ${wD}(${d}${b})`;
              case Br:
                return `${CD}(${f}${E}, ${v}${I})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = o;
      wt(e, me.TRANSFORM_PREFIXED, o),
        a(e, me.TRANSFORM_PREFIXED, i),
        uF(n, r) && a(e, me.TRANSFORM_STYLE_PREFIXED, ND);
    }
    function aF(e, t, r, n) {
      let o = (0, Na.default)(t, (a, u, c) => `${a} ${c}(${u}${nF(c, r)})`, ""),
        { setStyle: i } = n;
      wt(e, Xr, n), i(e, Xr, o);
    }
    function sF(e, t, r, n) {
      let o = (0, Na.default)(
          t,
          (a, u, c) => (a.push(`"${c}" ${u}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      wt(e, Vr, n), i(e, Vr, o);
    }
    function uF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === er && n !== void 0) ||
        (e === tr && n !== void 0) ||
        (e === rr && (t !== void 0 || r !== void 0))
      );
    }
    var cF = "\\(([^)]+)\\)",
      lF = /^rgb/,
      fF = RegExp(`rgba?${cF}`);
    function dF(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function pF({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = La[t],
        i = n(e, o),
        a = lF.test(i) ? i : r[o],
        u = dF(fF, a).split(Ur);
      return {
        rValue: (0, vt.default)(parseInt(u[0], 10), 255),
        gValue: (0, vt.default)(parseInt(u[1], 10), 255),
        bValue: (0, vt.default)(parseInt(u[2], 10), 255),
        aValue: (0, vt.default)(parseFloat(u[3]), 1),
      };
    }
    function vF(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case nr: {
          let { widthUnit: u = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: v } = r;
          f !== void 0 &&
            (u === Et && (u = "px"), wt(e, Je, i), a(e, Je, f + u)),
            v !== void 0 &&
              (c === Et && (c = "px"), wt(e, et, i), a(e, et, v + c));
          break;
        }
        case Wr: {
          aF(e, r, n.config, i);
          break;
        }
        case jr: {
          sF(e, r, n.config, i);
          break;
        }
        case ir:
        case or:
        case ar: {
          let u = La[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            v = Math.round(r.bValue),
            d = r.aValue;
          wt(e, u, i),
            a(
              e,
              u,
              d >= 1 ? `rgb(${c},${f},${v})` : `rgba(${c},${f},${v},${d})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = n.config;
          wt(e, o, i), a(e, o, r.value + u);
          break;
        }
      }
    }
    function EF(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case ri: {
          let { value: o } = t.config;
          o === qD && me.IS_BROWSER_ENV
            ? n(e, ei, me.FLEX_PREFIXED)
            : n(e, ei, o);
          return;
        }
      }
    }
    function wt(e, t, r) {
      if (!me.IS_BROWSER_ENV) return;
      let n = Jh[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, Jt);
      if (!a) {
        i(e, Jt, n);
        return;
      }
      let u = a.split(Ur).map(Zh);
      u.indexOf(n) === -1 && i(e, Jt, u.concat(n).join(Ur));
    }
    function tg(e, t, r) {
      if (!me.IS_BROWSER_ENV) return;
      let n = Jh[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, Jt);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          Jt,
          a
            .split(Ur)
            .map(Zh)
            .filter((u) => u !== n)
            .join(Ur)
        );
    }
    function hF({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: u } = a.action,
          { actionListId: c } = u,
          f = o[c];
        f && Hh({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          Hh({ actionList: o[i], elementApi: t });
        });
    }
    function Hh({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          Kh({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((u) => {
              Kh({ actionGroup: u, event: t, elementApi: r });
            });
          });
    }
    function Kh({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, tt.isPluginType)(o)
          ? (a = (0, tt.clearPlugin)(o))
          : (a = rg({ effect: _F, actionTypeId: o, elementApi: r })),
          xa({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function gF(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === nr) {
        let { config: a } = t;
        a.widthUnit === Et && n(e, Je, ""), a.heightUnit === Et && n(e, et, "");
      }
      o(e, Jt) && rg({ effect: tg, actionTypeId: i, elementApi: r })(e);
    }
    var rg =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case er:
          case tr:
          case rr:
          case Br:
            e(n, me.TRANSFORM_PREFIXED, r);
            break;
          case Wr:
            e(n, Xr, r);
            break;
          case jr:
            e(n, Vr, r);
            break;
          case Qh:
            e(n, Jn, r);
            break;
          case nr:
            e(n, Je, r), e(n, et, r);
            break;
          case ir:
          case or:
          case ar:
            e(n, La[t], r);
            break;
          case ri:
            e(n, ei, r);
            break;
        }
      };
    function _F(e, t, r) {
      let { setStyle: n } = r;
      tg(e, t, r),
        n(e, t, ""),
        t === me.TRANSFORM_PREFIXED && n(e, me.TRANSFORM_STYLE_PREFIXED, "");
    }
    function ng(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function yF(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        u = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: v } = c,
            d = v[ng(v)],
            { config: E, actionTypeId: I } = d;
          o.id === d.id && (u = a + i);
          let b = eg(I) === qa ? 0 : E.duration;
          a += E.delay + b;
        }),
        a > 0 ? (0, ID.optimizeFloat)(u / a) : 0
      );
    }
    function TF({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (u) => (
          i.push((0, Gh.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        n && n.some(({ actionItems: u }) => u.some(a)),
        o &&
          o.some((u) => {
            let { continuousActionGroups: c } = u;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, Gh.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function IF(e, { basedOn: t }) {
      return (
        (e === Rt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Rt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Rt.EventTypeConsts.MOUSE_MOVE && t === Rt.EventBasedOn.ELEMENT)
      );
    }
    function OF(e, t) {
      return e + DD + t;
    }
    function mF(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function SF(e, t) {
      return (0, kh.default)(e && e.sort(), t && t.sort());
    }
    function AF(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Uh + r + Uh + n;
    }
  });
  var Ct = s((Se) => {
    "use strict";
    var sr = Mt().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.IX2VanillaUtils =
      Se.IX2VanillaPlugins =
      Se.IX2ElementsReducer =
      Se.IX2Easings =
      Se.IX2EasingUtils =
      Se.IX2BrowserSupport =
        void 0;
    var bF = sr(kn());
    Se.IX2BrowserSupport = bF;
    var RF = sr(Oa());
    Se.IX2Easings = RF;
    var wF = sr(Sa());
    Se.IX2EasingUtils = wF;
    var CF = sr(ph());
    Se.IX2ElementsReducer = CF;
    var NF = sr(ba());
    Se.IX2VanillaPlugins = NF;
    var qF = sr(ig());
    Se.IX2VanillaUtils = qF;
  });
  var ug = s((ii) => {
    "use strict";
    Object.defineProperty(ii, "__esModule", { value: !0 });
    ii.ixInstances = void 0;
    var og = Re(),
      ag = Ct(),
      ur = Bt(),
      {
        IX2_RAW_DATA_IMPORTED: PF,
        IX2_SESSION_STOPPED: LF,
        IX2_INSTANCE_ADDED: xF,
        IX2_INSTANCE_STARTED: MF,
        IX2_INSTANCE_REMOVED: DF,
        IX2_ANIMATION_FRAME_CHANGED: FF,
      } = og.IX2EngineActionTypes,
      {
        optimizeFloat: ni,
        applyEasing: sg,
        createBezierEasing: GF,
      } = ag.IX2EasingUtils,
      { RENDER_GENERAL: XF } = og.IX2EngineConstants,
      {
        getItemConfigByKey: Da,
        getRenderType: VF,
        getStyleProp: UF,
      } = ag.IX2VanillaUtils,
      BF = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: u,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: v,
            skipToValue: d,
          } = e,
          { parameters: E } = t.payload,
          I = Math.max(1 - a, 0.01),
          b = E[n];
        b == null && ((I = 1), (b = u));
        let S = Math.max(b, 0) || 0,
          q = ni(S - r),
          O = v ? d : ni(r + q * I),
          A = O * 100;
        if (O === r && e.current) return e;
        let _, C, R, N;
        for (let G = 0, { length: X } = o; G < X; G++) {
          let { keyframe: Q, actionItems: W } = o[G];
          if ((G === 0 && (_ = W[0]), A >= Q)) {
            _ = W[0];
            let L = o[G + 1],
              g = L && A !== Q;
            (C = g ? L.actionItems[0] : null),
              g && ((R = Q / 100), (N = (L.keyframe - Q) / 100));
          }
        }
        let M = {};
        if (_ && !C)
          for (let G = 0, { length: X } = i; G < X; G++) {
            let Q = i[G];
            M[Q] = Da(c, Q, _.config);
          }
        else if (_ && C && R !== void 0 && N !== void 0) {
          let G = (O - R) / N,
            X = _.config.easing,
            Q = sg(X, G, f);
          for (let W = 0, { length: L } = i; W < L; W++) {
            let g = i[W],
              P = Da(c, g, _.config),
              B = (Da(c, g, C.config) - P) * Q + P;
            M[g] = B;
          }
        }
        return (0, ur.merge)(e, { position: O, current: M });
      },
      WF = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: u,
            actionItem: c,
            destination: f,
            destinationKeys: v,
            pluginDuration: d,
            instanceDelay: E,
            customEasingFn: I,
            skipMotion: b,
          } = e,
          S = c.config.easing,
          { duration: q, delay: O } = c.config;
        d != null && (q = d),
          (O = E ?? O),
          a === XF ? (q = 0) : (i || b) && (q = O = 0);
        let { now: A } = t.payload;
        if (r && n) {
          let _ = A - (o + O);
          if (u) {
            let G = A - o,
              X = q + O,
              Q = ni(Math.min(Math.max(0, G / X), 1));
            e = (0, ur.set)(e, "verboseTimeElapsed", X * Q);
          }
          if (_ < 0) return e;
          let C = ni(Math.min(Math.max(0, _ / q), 1)),
            R = sg(S, C, I),
            N = {},
            M = null;
          return (
            v.length &&
              (M = v.reduce((G, X) => {
                let Q = f[X],
                  W = parseFloat(n[X]) || 0,
                  g = (parseFloat(Q) - W) * R + W;
                return (G[X] = g), G;
              }, {})),
            (N.current = M),
            (N.position = C),
            C === 1 && ((N.active = !1), (N.complete = !0)),
            (0, ur.merge)(e, N)
          );
        }
        return e;
      },
      jF = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case PF:
            return t.payload.ixInstances || Object.freeze({});
          case LF:
            return Object.freeze({});
          case xF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: u,
                actionListId: c,
                groupIndex: f,
                isCarrier: v,
                origin: d,
                destination: E,
                immediate: I,
                verbose: b,
                continuous: S,
                parameterId: q,
                actionGroups: O,
                smoothing: A,
                restingValue: _,
                pluginInstance: C,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: M,
                skipToValue: G,
              } = t.payload,
              { actionTypeId: X } = o,
              Q = VF(X),
              W = UF(Q, X),
              L = Object.keys(E).filter((P) => E[P] != null),
              { easing: g } = o.config;
            return (0, ur.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: E,
              destinationKeys: L,
              immediate: I,
              verbose: b,
              current: null,
              actionItem: o,
              actionTypeId: X,
              eventId: i,
              eventTarget: a,
              eventStateKey: u,
              actionListId: c,
              groupIndex: f,
              renderType: Q,
              isCarrier: v,
              styleProp: W,
              continuous: S,
              parameterId: q,
              actionGroups: O,
              smoothing: A,
              restingValue: _,
              pluginInstance: C,
              pluginDuration: R,
              instanceDelay: N,
              skipMotion: M,
              skipToValue: G,
              customEasingFn:
                Array.isArray(g) && g.length === 4 ? GF(g) : void 0,
            });
          }
          case MF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, ur.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case DF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let u = o[a];
              u !== r && (n[u] = e[u]);
            }
            return n;
          }
          case FF: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                u = e[a],
                c = u.continuous ? BF : WF;
              r = (0, ur.set)(r, a, c(u, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    ii.ixInstances = jF;
  });
  var cg = s((oi) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    oi.ixParameters = void 0;
    var HF = Re(),
      {
        IX2_RAW_DATA_IMPORTED: KF,
        IX2_SESSION_STOPPED: kF,
        IX2_PARAMETER_CHANGED: zF,
      } = HF.IX2EngineActionTypes,
      YF = (e = {}, t) => {
        switch (t.type) {
          case KF:
            return t.payload.ixParameters || {};
          case kF:
            return {};
          case zF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    oi.ixParameters = YF;
  });
  var lg = s((ai) => {
    "use strict";
    Object.defineProperty(ai, "__esModule", { value: !0 });
    ai.default = void 0;
    var $F = Fo(),
      QF = gf(),
      ZF = Df(),
      JF = Gf(),
      e2 = Ct(),
      t2 = ug(),
      r2 = cg(),
      { ixElements: n2 } = e2.IX2ElementsReducer,
      i2 = (0, $F.combineReducers)({
        ixData: QF.ixData,
        ixRequest: ZF.ixRequest,
        ixSession: JF.ixSession,
        ixElements: n2,
        ixInstances: t2.ixInstances,
        ixParameters: r2.ixParameters,
      });
    ai.default = i2;
  });
  var fg = s((qK, Hr) => {
    function o2(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (Hr.exports = o2),
      (Hr.exports.__esModule = !0),
      (Hr.exports.default = Hr.exports);
  });
  var pg = s((PK, dg) => {
    var a2 = Ot(),
      s2 = he(),
      u2 = dt(),
      c2 = "[object String]";
    function l2(e) {
      return typeof e == "string" || (!s2(e) && u2(e) && a2(e) == c2);
    }
    dg.exports = l2;
  });
  var Eg = s((LK, vg) => {
    var f2 = ha(),
      d2 = f2("length");
    vg.exports = d2;
  });
  var gg = s((xK, hg) => {
    var p2 = "\\ud800-\\udfff",
      v2 = "\\u0300-\\u036f",
      E2 = "\\ufe20-\\ufe2f",
      h2 = "\\u20d0-\\u20ff",
      g2 = v2 + E2 + h2,
      _2 = "\\ufe0e\\ufe0f",
      y2 = "\\u200d",
      T2 = RegExp("[" + y2 + p2 + g2 + _2 + "]");
    function I2(e) {
      return T2.test(e);
    }
    hg.exports = I2;
  });
  var bg = s((MK, Ag) => {
    var yg = "\\ud800-\\udfff",
      O2 = "\\u0300-\\u036f",
      m2 = "\\ufe20-\\ufe2f",
      S2 = "\\u20d0-\\u20ff",
      A2 = O2 + m2 + S2,
      b2 = "\\ufe0e\\ufe0f",
      R2 = "[" + yg + "]",
      Fa = "[" + A2 + "]",
      Ga = "\\ud83c[\\udffb-\\udfff]",
      w2 = "(?:" + Fa + "|" + Ga + ")",
      Tg = "[^" + yg + "]",
      Ig = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Og = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      C2 = "\\u200d",
      mg = w2 + "?",
      Sg = "[" + b2 + "]?",
      N2 = "(?:" + C2 + "(?:" + [Tg, Ig, Og].join("|") + ")" + Sg + mg + ")*",
      q2 = Sg + mg + N2,
      P2 = "(?:" + [Tg + Fa + "?", Fa, Ig, Og, R2].join("|") + ")",
      _g = RegExp(Ga + "(?=" + Ga + ")|" + P2 + q2, "g");
    function L2(e) {
      for (var t = (_g.lastIndex = 0); _g.test(e); ) ++t;
      return t;
    }
    Ag.exports = L2;
  });
  var wg = s((DK, Rg) => {
    var x2 = Eg(),
      M2 = gg(),
      D2 = bg();
    function F2(e) {
      return M2(e) ? D2(e) : x2(e);
    }
    Rg.exports = F2;
  });
  var Ng = s((FK, Cg) => {
    var G2 = Gn(),
      X2 = Xn(),
      V2 = mt(),
      U2 = pg(),
      B2 = wg(),
      W2 = "[object Map]",
      j2 = "[object Set]";
    function H2(e) {
      if (e == null) return 0;
      if (V2(e)) return U2(e) ? B2(e) : e.length;
      var t = X2(e);
      return t == W2 || t == j2 ? e.size : G2(e).length;
    }
    Cg.exports = H2;
  });
  var Pg = s((GK, qg) => {
    var K2 = "Expected a function";
    function k2(e) {
      if (typeof e != "function") throw new TypeError(K2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    qg.exports = k2;
  });
  var Xa = s((XK, Lg) => {
    var z2 = ft(),
      Y2 = (function () {
        try {
          var e = z2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Lg.exports = Y2;
  });
  var Va = s((VK, Mg) => {
    var xg = Xa();
    function $2(e, t, r) {
      t == "__proto__" && xg
        ? xg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Mg.exports = $2;
  });
  var Fg = s((UK, Dg) => {
    var Q2 = Va(),
      Z2 = wn(),
      J2 = Object.prototype,
      e1 = J2.hasOwnProperty;
    function t1(e, t, r) {
      var n = e[t];
      (!(e1.call(e, t) && Z2(n, r)) || (r === void 0 && !(t in e))) &&
        Q2(e, t, r);
    }
    Dg.exports = t1;
  });
  var Vg = s((BK, Xg) => {
    var r1 = Fg(),
      n1 = Dr(),
      i1 = xn(),
      Gg = Ze(),
      o1 = Qt();
    function a1(e, t, r, n) {
      if (!Gg(e)) return e;
      t = n1(t, e);
      for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
        var c = o1(t[o]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var v = u[c];
          (f = n ? n(v, c, u) : void 0),
            f === void 0 && (f = Gg(v) ? v : i1(t[o + 1]) ? [] : {});
        }
        r1(u, c, f), (u = u[c]);
      }
      return e;
    }
    Xg.exports = a1;
  });
  var Bg = s((WK, Ug) => {
    var s1 = Bn(),
      u1 = Vg(),
      c1 = Dr();
    function l1(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          u = s1(e, a);
        r(u, a) && u1(i, c1(a, e), u);
      }
      return i;
    }
    Ug.exports = l1;
  });
  var jg = s((jK, Wg) => {
    var f1 = na(),
      d1 = f1(Object.getPrototypeOf, Object);
    Wg.exports = d1;
  });
  var Kg = s((HK, Hg) => {
    var p1 = Pn(),
      v1 = jg(),
      E1 = ea(),
      h1 = Jo(),
      g1 = Object.getOwnPropertySymbols,
      _1 = g1
        ? function (e) {
            for (var t = []; e; ) p1(t, E1(e)), (e = v1(e));
            return t;
          }
        : h1;
    Hg.exports = _1;
  });
  var zg = s((KK, kg) => {
    function y1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    kg.exports = y1;
  });
  var $g = s((kK, Yg) => {
    var T1 = Ze(),
      I1 = Fn(),
      O1 = zg(),
      m1 = Object.prototype,
      S1 = m1.hasOwnProperty;
    function A1(e) {
      if (!T1(e)) return O1(e);
      var t = I1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !S1.call(e, n))) || r.push(n);
      return r;
    }
    Yg.exports = A1;
  });
  var Zg = s((zK, Qg) => {
    var b1 = ra(),
      R1 = $g(),
      w1 = mt();
    function C1(e) {
      return w1(e) ? b1(e, !0) : R1(e);
    }
    Qg.exports = C1;
  });
  var e_ = s((YK, Jg) => {
    var N1 = Zo(),
      q1 = Kg(),
      P1 = Zg();
    function L1(e) {
      return N1(e, P1, q1);
    }
    Jg.exports = L1;
  });
  var r_ = s(($K, t_) => {
    var x1 = Ea(),
      M1 = pt(),
      D1 = Bg(),
      F1 = e_();
    function G1(e, t) {
      if (e == null) return {};
      var r = x1(F1(e), function (n) {
        return [n];
      });
      return (
        (t = M1(t)),
        D1(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    t_.exports = G1;
  });
  var i_ = s((QK, n_) => {
    var X1 = pt(),
      V1 = Pg(),
      U1 = r_();
    function B1(e, t) {
      return U1(e, V1(X1(t)));
    }
    n_.exports = B1;
  });
  var a_ = s((ZK, o_) => {
    var W1 = Gn(),
      j1 = Xn(),
      H1 = Nr(),
      K1 = he(),
      k1 = mt(),
      z1 = Ln(),
      Y1 = Fn(),
      $1 = Dn(),
      Q1 = "[object Map]",
      Z1 = "[object Set]",
      J1 = Object.prototype,
      eG = J1.hasOwnProperty;
    function tG(e) {
      if (e == null) return !0;
      if (
        k1(e) &&
        (K1(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          z1(e) ||
          $1(e) ||
          H1(e))
      )
        return !e.length;
      var t = j1(e);
      if (t == Q1 || t == Z1) return !e.size;
      if (Y1(e)) return !W1(e).length;
      for (var r in e) if (eG.call(e, r)) return !1;
      return !0;
    }
    o_.exports = tG;
  });
  var u_ = s((JK, s_) => {
    var rG = Va(),
      nG = Ra(),
      iG = pt();
    function oG(e, t) {
      var r = {};
      return (
        (t = iG(t, 3)),
        nG(e, function (n, o, i) {
          rG(r, o, t(n, o, i));
        }),
        r
      );
    }
    s_.exports = oG;
  });
  var l_ = s((ek, c_) => {
    function aG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    c_.exports = aG;
  });
  var d_ = s((tk, f_) => {
    var sG = jn();
    function uG(e) {
      return typeof e == "function" ? e : sG;
    }
    f_.exports = uG;
  });
  var v_ = s((rk, p_) => {
    var cG = l_(),
      lG = wa(),
      fG = d_(),
      dG = he();
    function pG(e, t) {
      var r = dG(e) ? cG : lG;
      return r(e, fG(t));
    }
    p_.exports = pG;
  });
  var h_ = s((nk, E_) => {
    var vG = Ve(),
      EG = function () {
        return vG.Date.now();
      };
    E_.exports = EG;
  });
  var y_ = s((ik, __) => {
    var hG = Ze(),
      Ua = h_(),
      g_ = Hn(),
      gG = "Expected a function",
      _G = Math.max,
      yG = Math.min;
    function TG(e, t, r) {
      var n,
        o,
        i,
        a,
        u,
        c,
        f = 0,
        v = !1,
        d = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(gG);
      (t = g_(t) || 0),
        hG(r) &&
          ((v = !!r.leading),
          (d = "maxWait" in r),
          (i = d ? _G(g_(r.maxWait) || 0, t) : i),
          (E = "trailing" in r ? !!r.trailing : E));
      function I(N) {
        var M = n,
          G = o;
        return (n = o = void 0), (f = N), (a = e.apply(G, M)), a;
      }
      function b(N) {
        return (f = N), (u = setTimeout(O, t)), v ? I(N) : a;
      }
      function S(N) {
        var M = N - c,
          G = N - f,
          X = t - M;
        return d ? yG(X, i - G) : X;
      }
      function q(N) {
        var M = N - c,
          G = N - f;
        return c === void 0 || M >= t || M < 0 || (d && G >= i);
      }
      function O() {
        var N = Ua();
        if (q(N)) return A(N);
        u = setTimeout(O, S(N));
      }
      function A(N) {
        return (u = void 0), E && n ? I(N) : ((n = o = void 0), a);
      }
      function _() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = c = o = u = void 0);
      }
      function C() {
        return u === void 0 ? a : A(Ua());
      }
      function R() {
        var N = Ua(),
          M = q(N);
        if (((n = arguments), (o = this), (c = N), M)) {
          if (u === void 0) return b(c);
          if (d) return clearTimeout(u), (u = setTimeout(O, t)), I(c);
        }
        return u === void 0 && (u = setTimeout(O, t)), a;
      }
      return (R.cancel = _), (R.flush = C), R;
    }
    __.exports = TG;
  });
  var I_ = s((ok, T_) => {
    var IG = y_(),
      OG = Ze(),
      mG = "Expected a function";
    function SG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(mG);
      return (
        OG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        IG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    T_.exports = SG;
  });
  var si = s((z) => {
    "use strict";
    var AG = Ye().default;
    Object.defineProperty(z, "__esModule", { value: !0 });
    z.viewportWidthChanged =
      z.testFrameRendered =
      z.stopRequested =
      z.sessionStopped =
      z.sessionStarted =
      z.sessionInitialized =
      z.rawDataImported =
      z.previewRequested =
      z.playbackRequested =
      z.parameterChanged =
      z.mediaQueriesDefined =
      z.instanceStarted =
      z.instanceRemoved =
      z.instanceAdded =
      z.eventStateChanged =
      z.eventListenerAdded =
      z.elementStateChanged =
      z.clearRequested =
      z.animationFrameChanged =
      z.actionListPlaybackChanged =
        void 0;
    var O_ = AG(Sr()),
      m_ = Re(),
      bG = Ct(),
      {
        IX2_RAW_DATA_IMPORTED: RG,
        IX2_SESSION_INITIALIZED: wG,
        IX2_SESSION_STARTED: CG,
        IX2_SESSION_STOPPED: NG,
        IX2_PREVIEW_REQUESTED: qG,
        IX2_PLAYBACK_REQUESTED: PG,
        IX2_STOP_REQUESTED: LG,
        IX2_CLEAR_REQUESTED: xG,
        IX2_EVENT_LISTENER_ADDED: MG,
        IX2_TEST_FRAME_RENDERED: DG,
        IX2_EVENT_STATE_CHANGED: FG,
        IX2_ANIMATION_FRAME_CHANGED: GG,
        IX2_PARAMETER_CHANGED: XG,
        IX2_INSTANCE_ADDED: VG,
        IX2_INSTANCE_STARTED: UG,
        IX2_INSTANCE_REMOVED: BG,
        IX2_ELEMENT_STATE_CHANGED: WG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: jG,
        IX2_VIEWPORT_WIDTH_CHANGED: HG,
        IX2_MEDIA_QUERIES_DEFINED: KG,
      } = m_.IX2EngineActionTypes,
      { reifyState: kG } = bG.IX2VanillaUtils,
      zG = (e) => ({ type: RG, payload: (0, O_.default)({}, kG(e)) });
    z.rawDataImported = zG;
    var YG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: wG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    z.sessionInitialized = YG;
    var $G = () => ({ type: CG });
    z.sessionStarted = $G;
    var QG = () => ({ type: NG });
    z.sessionStopped = QG;
    var ZG = ({ rawData: e, defer: t }) => ({
      type: qG,
      payload: { defer: t, rawData: e },
    });
    z.previewRequested = ZG;
    var JG = ({
      actionTypeId: e = m_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: u,
      rawData: c,
    }) => ({
      type: PG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: u,
        rawData: c,
      },
    });
    z.playbackRequested = JG;
    var eX = (e) => ({ type: LG, payload: { actionListId: e } });
    z.stopRequested = eX;
    var tX = () => ({ type: xG });
    z.clearRequested = tX;
    var rX = (e, t) => ({
      type: MG,
      payload: { target: e, listenerParams: t },
    });
    z.eventListenerAdded = rX;
    var nX = (e = 1) => ({ type: DG, payload: { step: e } });
    z.testFrameRendered = nX;
    var iX = (e, t) => ({ type: FG, payload: { stateKey: e, newState: t } });
    z.eventStateChanged = iX;
    var oX = (e, t) => ({ type: GG, payload: { now: e, parameters: t } });
    z.animationFrameChanged = oX;
    var aX = (e, t) => ({ type: XG, payload: { key: e, value: t } });
    z.parameterChanged = aX;
    var sX = (e) => ({ type: VG, payload: (0, O_.default)({}, e) });
    z.instanceAdded = sX;
    var uX = (e, t) => ({ type: UG, payload: { instanceId: e, time: t } });
    z.instanceStarted = uX;
    var cX = (e) => ({ type: BG, payload: { instanceId: e } });
    z.instanceRemoved = cX;
    var lX = (e, t, r, n) => ({
      type: WG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    z.elementStateChanged = lX;
    var fX = ({ actionListId: e, isPlaying: t }) => ({
      type: jG,
      payload: { actionListId: e, isPlaying: t },
    });
    z.actionListPlaybackChanged = fX;
    var dX = ({ width: e, mediaQueries: t }) => ({
      type: HG,
      payload: { width: e, mediaQueries: t },
    });
    z.viewportWidthChanged = dX;
    var pX = () => ({ type: KG });
    z.mediaQueriesDefined = pX;
  });
  var b_ = s((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.elementContains = AX;
    _e.getChildElements = RX;
    _e.getClosestElement = void 0;
    _e.getProperty = TX;
    _e.getQuerySelector = OX;
    _e.getRefType = NX;
    _e.getSiblingElements = wX;
    _e.getStyle = yX;
    _e.getValidDocument = mX;
    _e.isSiblingNode = bX;
    _e.matchSelector = IX;
    _e.queryDocument = SX;
    _e.setStyle = _X;
    var vX = Ct(),
      EX = Re(),
      { ELEMENT_MATCHES: Ba } = vX.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: S_,
        HTML_ELEMENT: hX,
        PLAIN_OBJECT: gX,
        WF_PAGE: A_,
      } = EX.IX2EngineConstants;
    function _X(e, t, r) {
      e.style[t] = r;
    }
    function yX(e, t) {
      return e.style[t];
    }
    function TX(e, t) {
      return e[t];
    }
    function IX(e) {
      return (t) => t[Ba](e);
    }
    function OX({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(S_) !== -1) {
          let n = e.split(S_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(A_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function mX(e) {
      return e == null || e === document.documentElement.getAttribute(A_)
        ? document
        : null;
    }
    function SX(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function AX(e, t) {
      return e.contains(t);
    }
    function bX(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function RX(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function wX(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var CX = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Ba] && r[Ba](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    _e.getClosestElement = CX;
    function NX(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? hX
          : gX
        : null;
    }
  });
  var Wa = s((uk, w_) => {
    var qX = Ze(),
      R_ = Object.create,
      PX = (function () {
        function e() {}
        return function (t) {
          if (!qX(t)) return {};
          if (R_) return R_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    w_.exports = PX;
  });
  var ui = s((ck, C_) => {
    function LX() {}
    C_.exports = LX;
  });
  var li = s((lk, N_) => {
    var xX = Wa(),
      MX = ui();
    function ci(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ci.prototype = xX(MX.prototype);
    ci.prototype.constructor = ci;
    N_.exports = ci;
  });
  var x_ = s((fk, L_) => {
    var q_ = jt(),
      DX = Nr(),
      FX = he(),
      P_ = q_ ? q_.isConcatSpreadable : void 0;
    function GX(e) {
      return FX(e) || DX(e) || !!(P_ && e && e[P_]);
    }
    L_.exports = GX;
  });
  var F_ = s((dk, D_) => {
    var XX = Pn(),
      VX = x_();
    function M_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = VX), o || (o = []); ++i < a; ) {
        var u = e[i];
        t > 0 && r(u)
          ? t > 1
            ? M_(u, t - 1, r, n, o)
            : XX(o, u)
          : n || (o[o.length] = u);
      }
      return o;
    }
    D_.exports = M_;
  });
  var X_ = s((pk, G_) => {
    var UX = F_();
    function BX(e) {
      var t = e == null ? 0 : e.length;
      return t ? UX(e, 1) : [];
    }
    G_.exports = BX;
  });
  var U_ = s((vk, V_) => {
    function WX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    V_.exports = WX;
  });
  var j_ = s((Ek, W_) => {
    var jX = U_(),
      B_ = Math.max;
    function HX(e, t, r) {
      return (
        (t = B_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = B_(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var u = Array(t + 1); ++o < t; ) u[o] = n[o];
          return (u[t] = r(a)), jX(e, this, u);
        }
      );
    }
    W_.exports = HX;
  });
  var K_ = s((hk, H_) => {
    function KX(e) {
      return function () {
        return e;
      };
    }
    H_.exports = KX;
  });
  var Y_ = s((gk, z_) => {
    var kX = K_(),
      k_ = Xa(),
      zX = jn(),
      YX = k_
        ? function (e, t) {
            return k_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: kX(t),
              writable: !0,
            });
          }
        : zX;
    z_.exports = YX;
  });
  var Q_ = s((_k, $_) => {
    var $X = 800,
      QX = 16,
      ZX = Date.now;
    function JX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = ZX(),
          o = QX - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= $X) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    $_.exports = JX;
  });
  var J_ = s((yk, Z_) => {
    var eV = Y_(),
      tV = Q_(),
      rV = tV(eV);
    Z_.exports = rV;
  });
  var ty = s((Tk, ey) => {
    var nV = X_(),
      iV = j_(),
      oV = J_();
    function aV(e) {
      return oV(iV(e, void 0, nV), e + "");
    }
    ey.exports = aV;
  });
  var iy = s((Ik, ny) => {
    var ry = ia(),
      sV = ry && new ry();
    ny.exports = sV;
  });
  var ay = s((Ok, oy) => {
    function uV() {}
    oy.exports = uV;
  });
  var ja = s((mk, uy) => {
    var sy = iy(),
      cV = ay(),
      lV = sy
        ? function (e) {
            return sy.get(e);
          }
        : cV;
    uy.exports = lV;
  });
  var ly = s((Sk, cy) => {
    var fV = {};
    cy.exports = fV;
  });
  var Ha = s((Ak, dy) => {
    var fy = ly(),
      dV = Object.prototype,
      pV = dV.hasOwnProperty;
    function vV(e) {
      for (
        var t = e.name + "", r = fy[t], n = pV.call(fy, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    dy.exports = vV;
  });
  var di = s((bk, py) => {
    var EV = Wa(),
      hV = ui(),
      gV = 4294967295;
    function fi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = gV),
        (this.__views__ = []);
    }
    fi.prototype = EV(hV.prototype);
    fi.prototype.constructor = fi;
    py.exports = fi;
  });
  var Ey = s((Rk, vy) => {
    function _V(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    vy.exports = _V;
  });
  var gy = s((wk, hy) => {
    var yV = di(),
      TV = li(),
      IV = Ey();
    function OV(e) {
      if (e instanceof yV) return e.clone();
      var t = new TV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = IV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    hy.exports = OV;
  });
  var Ty = s((Ck, yy) => {
    var mV = di(),
      _y = li(),
      SV = ui(),
      AV = he(),
      bV = dt(),
      RV = gy(),
      wV = Object.prototype,
      CV = wV.hasOwnProperty;
    function pi(e) {
      if (bV(e) && !AV(e) && !(e instanceof mV)) {
        if (e instanceof _y) return e;
        if (CV.call(e, "__wrapped__")) return RV(e);
      }
      return new _y(e);
    }
    pi.prototype = SV.prototype;
    pi.prototype.constructor = pi;
    yy.exports = pi;
  });
  var Oy = s((Nk, Iy) => {
    var NV = di(),
      qV = ja(),
      PV = Ha(),
      LV = Ty();
    function xV(e) {
      var t = PV(e),
        r = LV[t];
      if (typeof r != "function" || !(t in NV.prototype)) return !1;
      if (e === r) return !0;
      var n = qV(r);
      return !!n && e === n[0];
    }
    Iy.exports = xV;
  });
  var by = s((qk, Ay) => {
    var my = li(),
      MV = ty(),
      DV = ja(),
      Ka = Ha(),
      FV = he(),
      Sy = Oy(),
      GV = "Expected a function",
      XV = 8,
      VV = 32,
      UV = 128,
      BV = 256;
    function WV(e) {
      return MV(function (t) {
        var r = t.length,
          n = r,
          o = my.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(GV);
          if (o && !a && Ka(i) == "wrapper") var a = new my([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var u = Ka(i),
            c = u == "wrapper" ? DV(i) : void 0;
          c &&
          Sy(c[0]) &&
          c[1] == (UV | XV | VV | BV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[Ka(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && Sy(i) ? a[u]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            v = f[0];
          if (a && f.length == 1 && FV(v)) return a.plant(v).value();
          for (var d = 0, E = r ? t[d].apply(this, f) : v; ++d < r; )
            E = t[d].call(this, E);
          return E;
        };
      });
    }
    Ay.exports = WV;
  });
  var wy = s((Pk, Ry) => {
    var jV = by(),
      HV = jV();
    Ry.exports = HV;
  });
  var Ny = s((Lk, Cy) => {
    function KV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Cy.exports = KV;
  });
  var Py = s((xk, qy) => {
    var kV = Ny(),
      ka = Hn();
    function zV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ka(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ka(t)), (t = t === t ? t : 0)),
        kV(ka(e), t, r)
      );
    }
    qy.exports = zV;
  });
  var $y = s((_i) => {
    "use strict";
    var gi = Ye().default;
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.default = void 0;
    var Pe = gi(Sr()),
      YV = gi(wy()),
      $V = gi(Wn()),
      QV = gi(Py()),
      Nt = Re(),
      za = Za(),
      vi = si(),
      ZV = Ct(),
      {
        MOUSE_CLICK: JV,
        MOUSE_SECOND_CLICK: eU,
        MOUSE_DOWN: tU,
        MOUSE_UP: rU,
        MOUSE_OVER: nU,
        MOUSE_OUT: iU,
        DROPDOWN_CLOSE: oU,
        DROPDOWN_OPEN: aU,
        SLIDER_ACTIVE: sU,
        SLIDER_INACTIVE: uU,
        TAB_ACTIVE: cU,
        TAB_INACTIVE: lU,
        NAVBAR_CLOSE: fU,
        NAVBAR_OPEN: dU,
        MOUSE_MOVE: pU,
        PAGE_SCROLL_DOWN: Uy,
        SCROLL_INTO_VIEW: By,
        SCROLL_OUT_OF_VIEW: vU,
        PAGE_SCROLL_UP: EU,
        SCROLLING_IN_VIEW: hU,
        PAGE_FINISH: Wy,
        ECOMMERCE_CART_CLOSE: gU,
        ECOMMERCE_CART_OPEN: _U,
        PAGE_START: jy,
        PAGE_SCROLL: yU,
      } = Nt.EventTypeConsts,
      Ya = "COMPONENT_ACTIVE",
      Hy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Ly } = Nt.IX2EngineConstants,
      { getNamespacedParameterId: xy } = ZV.IX2VanillaUtils,
      Ky = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      kr = Ky(({ element: e, nativeEvent: t }) => e === t.target),
      TU = Ky(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      rt = (0, YV.default)([kr, TU]),
      ky = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !OU[o.eventTypeId]) return o;
        }
        return null;
      },
      IU = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!ky(e, n);
      },
      Ce = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: u, autoStopEventId: c } = i.config,
          f = ky(e, c);
        return (
          f &&
            (0, za.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Ly + n.split(Ly)[1],
              actionListId: (0, $V.default)(f, "action.config.actionListId"),
            }),
          (0, za.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          (0, za.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          o
        );
      },
      Ue = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      zr = { handler: Ue(rt, Ce) },
      zy = (0, Pe.default)({}, zr, { types: [Ya, Hy].join(" ") }),
      $a = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      My = "mouseover mouseout",
      Qa = { types: $a },
      OU = { PAGE_START: jy, PAGE_FINISH: Wy },
      Kr = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, QV.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      mU = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      SU = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      AU = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = Kr(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return mU(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      Yy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [Ya, Hy].indexOf(n) !== -1 ? n === Ya : r.isActive,
          i = (0, Pe.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      Dy = (e) => (t, r) => {
        let n = { elementHovered: SU(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      bU = (e) => (t, r) => {
        let n = (0, Pe.default)({}, r, { elementVisible: AU(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      Fy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = Kr(),
            {
              event: { config: a, eventTypeId: u },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            v = f === "PX",
            d = o - i,
            E = Number((n / d).toFixed(2));
          if (r && r.percentTop === E) return r;
          let I = (v ? c : (i * (c || 0)) / 100) / d,
            b,
            S,
            q = 0;
          r &&
            ((b = E > r.percentTop),
            (S = r.scrollingDown !== b),
            (q = S ? E : r.anchorTop));
          let O = u === Uy ? E >= q + I : E <= q - I,
            A = (0, Pe.default)({}, r, {
              percentTop: E,
              inBounds: O,
              anchorTop: q,
              scrollingDown: b,
            });
          return (r && O && (S || A.inBounds !== r.inBounds) && e(t, A)) || A;
        },
      RU = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      wU = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      CU = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Gy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ei = (e = !0) =>
        (0, Pe.default)({}, zy, {
          handler: Ue(
            e ? rt : kr,
            Yy((t, r) => (r.isActive ? zr.handler(t, r) : r))
          ),
        }),
      hi = (e = !0) =>
        (0, Pe.default)({}, zy, {
          handler: Ue(
            e ? rt : kr,
            Yy((t, r) => (r.isActive ? r : zr.handler(t, r)))
          ),
        }),
      Xy = (0, Pe.default)({}, Qa, {
        handler: bU((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === By) === r
            ? (Ce(e), (0, Pe.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Vy = 0.05,
      NU = {
        [sU]: Ei(),
        [uU]: hi(),
        [aU]: Ei(),
        [oU]: hi(),
        [dU]: Ei(!1),
        [fU]: hi(!1),
        [cU]: Ei(),
        [lU]: hi(),
        [_U]: { types: "ecommerce-cart-open", handler: Ue(rt, Ce) },
        [gU]: { types: "ecommerce-cart-close", handler: Ue(rt, Ce) },
        [JV]: {
          types: "click",
          handler: Ue(
            rt,
            Gy((e, { clickCount: t }) => {
              IU(e) ? t === 1 && Ce(e) : Ce(e);
            })
          ),
        },
        [eU]: {
          types: "click",
          handler: Ue(
            rt,
            Gy((e, { clickCount: t }) => {
              t === 2 && Ce(e);
            })
          ),
        },
        [tU]: (0, Pe.default)({}, zr, { types: "mousedown" }),
        [rU]: (0, Pe.default)({}, zr, { types: "mouseup" }),
        [nU]: {
          types: My,
          handler: Ue(
            rt,
            Dy((e, t) => {
              t.elementHovered && Ce(e);
            })
          ),
        },
        [iU]: {
          types: My,
          handler: Ue(
            rt,
            Dy((e, t) => {
              t.elementHovered || Ce(e);
            })
          ),
        },
        [pU]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: u,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: v = 0,
              } = r,
              {
                clientX: d = i.clientX,
                clientY: E = i.clientY,
                pageX: I = i.pageX,
                pageY: b = i.pageY,
              } = n,
              S = u === "X_AXIS",
              q = n.type === "mouseout",
              O = v / 100,
              A = c,
              _ = !1;
            switch (a) {
              case Nt.EventBasedOn.VIEWPORT: {
                O = S
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              }
              case Nt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: C,
                  scrollTop: R,
                  scrollWidth: N,
                  scrollHeight: M,
                } = Kr();
                O = S ? Math.min(C + I, N) / N : Math.min(R + b, M) / M;
                break;
              }
              case Nt.EventBasedOn.ELEMENT:
              default: {
                A = xy(o, c);
                let C = n.type.indexOf("mouse") === 0;
                if (C && rt({ element: t, nativeEvent: n }) !== !0) break;
                let R = t.getBoundingClientRect(),
                  { left: N, top: M, width: G, height: X } = R;
                if (!C && !RU({ left: d, top: E }, R)) break;
                (_ = !0), (O = S ? (d - N) / G : (E - M) / X);
                break;
              }
            }
            return (
              q && (O > 1 - Vy || O < Vy) && (O = Math.round(O)),
              (a !== Nt.EventBasedOn.ELEMENT || _ || _ !== i.elementHovered) &&
                ((O = f ? 1 - O : O),
                e.dispatch((0, vi.parameterChanged)(A, O))),
              { elementHovered: _, clientX: d, clientY: E, pageX: I, pageY: b }
            );
          },
        },
        [yU]: {
          types: $a,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = Kr(),
              u = o / (i - a);
            (u = n ? 1 - u : u), e.dispatch((0, vi.parameterChanged)(r, u));
          },
        },
        [hU]: {
          types: $a,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: u,
                scrollHeight: c,
                clientHeight: f,
              } = Kr(),
              {
                basedOn: v,
                selectedAxis: d,
                continuousParameterGroupId: E,
                startsEntering: I,
                startsExiting: b,
                addEndOffset: S,
                addStartOffset: q,
                addOffsetValue: O = 0,
                endOffsetValue: A = 0,
              } = r,
              _ = d === "X_AXIS";
            if (v === Nt.EventBasedOn.VIEWPORT) {
              let C = _ ? i / u : a / c;
              return (
                C !== o.scrollPercent &&
                  t.dispatch((0, vi.parameterChanged)(E, C)),
                { scrollPercent: C }
              );
            } else {
              let C = xy(n, E),
                R = e.getBoundingClientRect(),
                N = (q ? O : 0) / 100,
                M = (S ? A : 0) / 100;
              (N = I ? N : 1 - N), (M = b ? M : 1 - M);
              let G = R.top + Math.min(R.height * N, f),
                Q = R.top + R.height * M - G,
                W = Math.min(f + Q, c),
                g = Math.min(Math.max(0, f - G), W) / W;
              return (
                g !== o.scrollPercent &&
                  t.dispatch((0, vi.parameterChanged)(C, g)),
                { scrollPercent: g }
              );
            }
          },
        },
        [By]: Xy,
        [vU]: Xy,
        [Uy]: (0, Pe.default)({}, Qa, {
          handler: Fy((e, t) => {
            t.scrollingDown && Ce(e);
          }),
        }),
        [EU]: (0, Pe.default)({}, Qa, {
          handler: Fy((e, t) => {
            t.scrollingDown || Ce(e);
          }),
        }),
        [Wy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(kr, wU(Ce)),
        },
        [jy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(kr, CU(Ce)),
        },
      };
    _i.default = NU;
  });
  var Za = s((gt) => {
    "use strict";
    var We = Ye().default,
      qU = Mt().default;
    Object.defineProperty(gt, "__esModule", { value: !0 });
    gt.observeRequests = aB;
    gt.startActionGroup = os;
    gt.startEngine = Oi;
    gt.stopActionGroup = is;
    gt.stopAllActionGroups = oT;
    gt.stopEngine = mi;
    var PU = We(Sr()),
      LU = We(fg()),
      xU = We(Ta()),
      ht = We(Wn()),
      MU = We(Ng()),
      DU = We(i_()),
      FU = We(a_()),
      GU = We(u_()),
      Yr = We(v_()),
      XU = We(I_()),
      Be = Re(),
      Jy = Ct(),
      ce = si(),
      pe = qU(b_()),
      VU = We($y()),
      UU = ["store", "computedStyle"],
      BU = Object.keys(Be.QuickEffectIds),
      Ja = (e) => BU.includes(e),
      {
        COLON_DELIMITER: es,
        BOUNDARY_SELECTOR: yi,
        HTML_ELEMENT: eT,
        RENDER_GENERAL: WU,
        W_MOD_IX: Qy,
      } = Be.IX2EngineConstants,
      {
        getAffectedElements: Ti,
        getElementId: jU,
        getDestinationValues: ts,
        observeStore: qt,
        getInstanceId: HU,
        renderHTMLElement: KU,
        clearAllStyles: tT,
        getMaxDurationItemIndex: kU,
        getComputedStyle: zU,
        getInstanceOrigin: YU,
        reduceListToGroup: $U,
        shouldNamespaceEventParameter: QU,
        getNamespacedParameterId: ZU,
        shouldAllowMediaQuery: Ii,
        cleanupHTMLElement: JU,
        stringifyTarget: eB,
        mediaQueriesEqual: tB,
        shallowEqual: rB,
      } = Jy.IX2VanillaUtils,
      {
        isPluginType: rs,
        createPluginInstance: ns,
        getPluginDuration: nB,
      } = Jy.IX2VanillaPlugins,
      Zy = navigator.userAgent,
      iB = Zy.match(/iPad/i) || Zy.match(/iPhone/),
      oB = 12;
    function aB(e) {
      qt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: cB }),
        qt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: lB,
        }),
        qt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: fB }),
        qt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: dB });
    }
    function sB(e) {
      qt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          mi(e),
            tT({ store: e, elementApi: pe }),
            Oi({ store: e, allowEvents: !0 }),
            rT();
        },
      });
    }
    function uB(e, t) {
      let r = qt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function cB({ rawData: e, defer: t }, r) {
      let n = () => {
        Oi({ store: r, rawData: e, allowEvents: !0 }), rT();
      };
      t ? setTimeout(n, 0) : n();
    }
    function rT() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function lB(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: u,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: v } = e;
      if (n && o && v && u) {
        let d = v.actionLists[n];
        d && (v = $U({ actionList: d, actionItemId: o, rawData: v }));
      }
      if (
        (Oi({ store: t, rawData: v, allowEvents: a, testManual: c }),
        (n && r === Be.ActionTypeConsts.GENERAL_START_ACTION) || Ja(r))
      ) {
        is({ store: t, actionListId: n }),
          iT({ store: t, actionListId: n, eventId: i });
        let d = os({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: u,
          verbose: f,
        });
        f &&
          d &&
          t.dispatch(
            (0, ce.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !u,
            })
          );
      }
    }
    function fB({ actionListId: e }, t) {
      e ? is({ store: t, actionListId: e }) : oT({ store: t }), mi(t);
    }
    function dB(e, t) {
      mi(t), tT({ store: t, elementApi: pe });
    }
    function Oi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, ce.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, ce.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(yi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (_B(e),
            pB(),
            e.getState().ixSession.hasDefinedMediaQueries && sB(e)),
          e.dispatch((0, ce.sessionStarted)()),
          vB(e, n));
    }
    function pB() {
      let { documentElement: e } = document;
      e.className.indexOf(Qy) === -1 && (e.className += ` ${Qy}`);
    }
    function vB(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, ce.animationFrameChanged)(n, i)),
          t ? uB(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function mi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(EB), e.dispatch((0, ce.sessionStopped)());
      }
    }
    function EB({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function hB({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: u,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[n],
        { eventTypeId: I } = E,
        b = {},
        S = {},
        q = [],
        { continuousActionGroups: O } = a,
        { id: A } = a;
      QU(I, o) && (A = ZU(t, A));
      let _ = v.hasBoundaryNodes && r ? pe.getClosestElement(r, yi) : null;
      O.forEach((C) => {
        let { keyframe: R, actionItems: N } = C;
        N.forEach((M) => {
          let { actionTypeId: G } = M,
            { target: X } = M.config;
          if (!X) return;
          let Q = X.boundaryMode ? _ : null,
            W = eB(X) + es + G;
          if (((S[W] = gB(S[W], R, M)), !b[W])) {
            b[W] = !0;
            let { config: L } = M;
            Ti({
              config: L,
              event: E,
              eventTarget: r,
              elementRoot: Q,
              elementApi: pe,
            }).forEach((g) => {
              q.push({ element: g, key: W });
            });
          }
        });
      }),
        q.forEach(({ element: C, key: R }) => {
          let N = S[R],
            M = (0, ht.default)(N, "[0].actionItems[0]", {}),
            { actionTypeId: G } = M,
            X = rs(G) ? ns(G)(C, M) : null,
            Q = ts({ element: C, actionItem: M, elementApi: pe }, X);
          as({
            store: e,
            element: C,
            eventId: n,
            actionListId: i,
            actionItem: M,
            destination: Q,
            continuous: !0,
            parameterId: A,
            actionGroups: N,
            smoothing: u,
            restingValue: c,
            pluginInstance: X,
          });
        });
    }
    function gB(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function _B(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      nT(e),
        (0, Yr.default)(r, (o, i) => {
          let a = VU.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          SB({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && TB(e);
    }
    var yB = ["resize", "orientationchange"];
    function TB(e) {
      let t = () => {
        nT(e);
      };
      yB.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, ce.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function nT(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, ce.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var IB = (e, t) => (0, DU.default)((0, GU.default)(e, t), FU.default),
      OB = (e, t) => {
        (0, Yr.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + es + i;
            t(o, n, a);
          });
        });
      },
      mB = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Ti({ config: t, elementApi: pe });
      };
    function SB({ logic: e, store: t, events: r }) {
      AB(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        u = IB(r, mB);
      if (!(0, MU.default)(u)) return;
      (0, Yr.default)(u, (d, E) => {
        let I = r[E],
          { action: b, id: S, mediaQueries: q = i.mediaQueryKeys } = I,
          { actionListId: O } = b.config;
        tB(q, i.mediaQueryKeys) || t.dispatch((0, ce.mediaQueriesDefined)()),
          b.actionTypeId === Be.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((_) => {
              let { continuousParameterGroupId: C } = _,
                R = (0, ht.default)(a, `${O}.continuousParameterGroups`, []),
                N = (0, xU.default)(R, ({ id: X }) => X === C),
                M = (_.smoothing || 0) / 100,
                G = (_.restingState || 0) / 100;
              N &&
                d.forEach((X, Q) => {
                  let W = S + es + Q;
                  hB({
                    store: t,
                    eventStateKey: W,
                    eventTarget: X,
                    eventId: S,
                    eventConfig: _,
                    actionListId: O,
                    parameterGroup: N,
                    smoothing: M,
                    restingValue: G,
                  });
                });
            }),
          (b.actionTypeId === Be.ActionTypeConsts.GENERAL_START_ACTION ||
            Ja(b.actionTypeId)) &&
            iT({ store: t, actionListId: O, eventId: S });
      });
      let c = (d) => {
          let { ixSession: E } = t.getState();
          OB(u, (I, b, S) => {
            let q = r[b],
              O = E.eventState[S],
              { action: A, mediaQueries: _ = i.mediaQueryKeys } = q;
            if (!Ii(_, E.mediaQueryKey)) return;
            let C = (R = {}) => {
              let N = o(
                {
                  store: t,
                  element: I,
                  event: q,
                  eventConfig: R,
                  nativeEvent: d,
                  eventStateKey: S,
                },
                O
              );
              rB(N, O) || t.dispatch((0, ce.eventStateChanged)(S, N));
            };
            A.actionTypeId === Be.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(C)
              : C();
          });
        },
        f = (0, XU.default)(c, oB),
        v = ({ target: d = document, types: E, throttle: I }) => {
          E.split(" ")
            .filter(Boolean)
            .forEach((b) => {
              let S = I ? f : c;
              d.addEventListener(b, S),
                t.dispatch((0, ce.eventListenerAdded)(d, [b, S]));
            });
        };
      Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
    }
    function AB(e) {
      if (!iB) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = pe.getQuerySelector(i);
        t[a] ||
          ((o === Be.EventTypeConsts.MOUSE_CLICK ||
            o === Be.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function iT({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        u = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, ht.default)(c, "actionItemGroups[0].actionItems", []),
          v = (0, ht.default)(u, "mediaQueries", n.mediaQueryKeys);
        if (!Ii(v, o.mediaQueryKey)) return;
        f.forEach((d) => {
          var E;
          let { config: I, actionTypeId: b } = d,
            S =
              (I == null || (E = I.target) === null || E === void 0
                ? void 0
                : E.useEventTarget) === !0
                ? { target: u.target, targets: u.targets }
                : I,
            q = Ti({ config: S, event: u, elementApi: pe }),
            O = rs(b);
          q.forEach((A) => {
            let _ = O ? ns(b)(A, d) : null;
            as({
              destination: ts({ element: A, actionItem: d, elementApi: pe }, _),
              immediate: !0,
              store: e,
              element: A,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: _,
            });
          });
        });
      }
    }
    function oT({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, Yr.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          ss(r, e),
            o &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function is({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        u = a.hasBoundaryNodes && r ? pe.getClosestElement(r, yi) : null;
      (0, Yr.default)(i, (c) => {
        let f = (0, ht.default)(c, "actionItem.config.target.boundaryMode"),
          v = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && v) {
          if (u && f && !pe.elementContains(u, c.element)) return;
          ss(c, e),
            c.verbose &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function os({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: u,
    }) {
      var c;
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[t] || {},
        { mediaQueries: I = f.mediaQueryKeys } = E,
        b = (0, ht.default)(f, `actionLists.${o}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: q } = b;
      if (!S || !S.length) return !1;
      i >= S.length && (0, ht.default)(E, "config.loop") && (i = 0),
        i === 0 && q && i++;
      let A =
          (i === 0 || (i === 1 && q)) &&
          Ja((c = E.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? E.config.delay
            : void 0,
        _ = (0, ht.default)(S, [i, "actionItems"], []);
      if (!_.length || !Ii(I, v.mediaQueryKey)) return !1;
      let C = v.hasBoundaryNodes && r ? pe.getClosestElement(r, yi) : null,
        R = kU(_),
        N = !1;
      return (
        _.forEach((M, G) => {
          let { config: X, actionTypeId: Q } = M,
            W = rs(Q),
            { target: L } = X;
          if (!L) return;
          let g = L.boundaryMode ? C : null;
          Ti({
            config: X,
            event: E,
            eventTarget: r,
            elementRoot: g,
            elementApi: pe,
          }).forEach((x, D) => {
            let B = W ? ns(Q)(x, M) : null,
              K = W ? nB(Q)(x, M) : null;
            N = !0;
            let ne = R === G && D === 0,
              Ne = zU({ element: x, actionItem: M }),
              je = ts({ element: x, actionItem: M, elementApi: pe }, B);
            as({
              store: e,
              element: x,
              actionItem: M,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: ne,
              computedStyle: Ne,
              destination: je,
              immediate: a,
              verbose: u,
              pluginInstance: B,
              pluginDuration: K,
              instanceDelay: A,
            });
          });
        }),
        N
      );
    }
    function as(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, LU.default)(e, UU),
        {
          element: i,
          actionItem: a,
          immediate: u,
          pluginInstance: c,
          continuous: f,
          restingValue: v,
          eventId: d,
        } = o,
        E = !f,
        I = HU(),
        { ixElements: b, ixSession: S, ixData: q } = r.getState(),
        O = jU(b, i),
        { refState: A } = b[O] || {},
        _ = pe.getRefType(i),
        C = S.reducedMotion && Be.ReducedMotionTypes[a.actionTypeId],
        R;
      if (C && f)
        switch (
          (t = q.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Be.EventTypeConsts.MOUSE_MOVE:
          case Be.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            R = v;
            break;
          default:
            R = 0.5;
            break;
        }
      let N = YU(i, A, n, a, pe, c);
      if (
        (r.dispatch(
          (0, ce.instanceAdded)(
            (0, PU.default)(
              {
                instanceId: I,
                elementId: O,
                origin: N,
                refType: _,
                skipMotion: C,
                skipToValue: R,
              },
              o
            )
          )
        ),
        aT(document.body, "ix2-animation-started", I),
        u)
      ) {
        bB(r, I);
        return;
      }
      qt({ store: r, select: ({ ixInstances: M }) => M[I], onChange: sT }),
        E && r.dispatch((0, ce.instanceStarted)(I, S.tick));
    }
    function ss(e, t) {
      aT(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === eT && JU(i, n, pe), t.dispatch((0, ce.instanceRemoved)(e.id));
    }
    function aT(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function bB(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, ce.instanceStarted)(t, 0)),
        e.dispatch((0, ce.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      sT(n[t], e);
    }
    function sT(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: u,
          renderType: c,
          current: f,
          groupIndex: v,
          eventId: d,
          eventTarget: E,
          eventStateKey: I,
          actionListId: b,
          isCarrier: S,
          styleProp: q,
          verbose: O,
          pluginInstance: A,
        } = e,
        { ixData: _, ixSession: C } = t.getState(),
        { events: R } = _,
        N = R[d] || {},
        { mediaQueries: M = _.mediaQueryKeys } = N;
      if (Ii(M, C.mediaQueryKey) && (n || r || o)) {
        if (f || (c === WU && o)) {
          t.dispatch((0, ce.elementStateChanged)(i, u, f, a));
          let { ixElements: G } = t.getState(),
            { ref: X, refType: Q, refState: W } = G[i] || {},
            L = W && W[u];
          switch (Q) {
            case eT: {
              KU(X, W, L, d, a, q, pe, c, A);
              break;
            }
          }
        }
        if (o) {
          if (S) {
            let G = os({
              store: t,
              eventId: d,
              eventTarget: E,
              eventStateKey: I,
              actionListId: b,
              groupIndex: v + 1,
              verbose: O,
            });
            O &&
              !G &&
              t.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: b,
                  isPlaying: !1,
                })
              );
          }
          ss(e, t);
        }
      }
    }
  });
  var cT = s((at) => {
    "use strict";
    var RB = Mt().default,
      wB = Ye().default;
    Object.defineProperty(at, "__esModule", { value: !0 });
    at.actions = void 0;
    at.destroy = uT;
    at.init = LB;
    at.setEnv = PB;
    at.store = void 0;
    wl();
    var CB = Fo(),
      NB = wB(lg()),
      us = Za(),
      qB = RB(si());
    at.actions = qB;
    var Si = (0, CB.createStore)(NB.default);
    at.store = Si;
    function PB(e) {
      e() && (0, us.observeRequests)(Si);
    }
    function LB(e) {
      uT(), (0, us.startEngine)({ store: Si, rawData: e, allowEvents: !0 });
    }
    function uT() {
      (0, us.stopEngine)(Si);
    }
  });
  var pT = s((Gk, dT) => {
    var lT = ke(),
      fT = cT();
    fT.setEnv(lT.env);
    lT.define(
      "ix2",
      (dT.exports = function () {
        return fT;
      })
    );
  });
  var ET = s((Xk, vT) => {
    var cr = ke();
    cr.define(
      "links",
      (vT.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = cr.env(),
          a = window.location,
          u = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          v = /\/$/,
          d,
          E;
        r.ready = r.design = r.preview = I;
        function I() {
          (o = i && cr.env("design")),
            (E = cr.env("slug") || a.pathname || ""),
            cr.scroll.off(S),
            (d = []);
          for (var O = document.links, A = 0; A < O.length; ++A) b(O[A]);
          d.length && (cr.scroll.on(S), S());
        }
        function b(O) {
          var A =
            (o && O.getAttribute("href-disabled")) || O.getAttribute("href");
          if (((u.href = A), !(A.indexOf(":") >= 0))) {
            var _ = e(O);
            if (
              u.hash.length > 1 &&
              u.host + u.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
              var C = e(u.hash);
              C.length && d.push({ link: _, sec: C, active: !1 });
              return;
            }
            if (!(A === "#" || A === "")) {
              var R = u.href === a.href || A === E || (f.test(A) && v.test(E));
              q(_, c, R);
            }
          }
        }
        function S() {
          var O = n.scrollTop(),
            A = n.height();
          t.each(d, function (_) {
            var C = _.link,
              R = _.sec,
              N = R.offset().top,
              M = R.outerHeight(),
              G = A * 0.5,
              X = R.is(":visible") && N + M - G >= O && N + G <= O + A;
            _.active !== X && ((_.active = X), q(C, c, X));
          });
        }
        function q(O, A, _) {
          var C = O.hasClass(A);
          (_ && C) || (!_ && !C) || (_ ? O.addClass(A) : O.removeClass(A));
        }
        return r;
      })
    );
  });
  var gT = s((Vk, hT) => {
    var Ai = ke();
    Ai.define(
      "scroll",
      (hT.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          c = Ai.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(E));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(L) {
          return S.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
        }
        let O =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            O.matches
          );
        }
        function _(L, g) {
          var P;
          switch (g) {
            case "add":
              (P = L.attr("tabindex")),
                P
                  ? L.attr("data-wf-tabindex-swap", P)
                  : L.attr("tabindex", "-1");
              break;
            case "remove":
              (P = L.attr("data-wf-tabindex-swap")),
                P
                  ? (L.attr("tabindex", P),
                    L.removeAttr("data-wf-tabindex-swap"))
                  : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", g === "add");
        }
        function C(L) {
          var g = L.currentTarget;
          if (
            !(
              Ai.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))
            )
          ) {
            var P = q(g) ? g.hash : "";
            if (P !== "") {
              var x = e(P);
              x.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                R(P, L),
                window.setTimeout(
                  function () {
                    N(x, function () {
                      _(x, "add"),
                        x.get(0).focus({ preventScroll: !0 }),
                        _(x, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function R(L) {
          if (
            r.hash !== L &&
            n &&
            n.pushState &&
            !(Ai.env.chrome && r.protocol === "file:")
          ) {
            var g = n.state && n.state.hash;
            g !== L && n.pushState({ hash: L }, "", L);
          }
        }
        function N(L, g) {
          var P = o.scrollTop(),
            x = M(L);
          if (P !== x) {
            var D = G(L, P, x),
              B = Date.now(),
              K = function () {
                var ne = Date.now() - B;
                window.scroll(0, X(P, x, ne, D)),
                  ne <= D ? u(K) : typeof g == "function" && g();
              };
            u(K);
          }
        }
        function M(L) {
          var g = e(f),
            P = g.css("position") === "fixed" ? g.outerHeight() : 0,
            x = L.offset().top - P;
          if (L.data("scroll") === "mid") {
            var D = o.height() - P,
              B = L.outerHeight();
            B < D && (x -= Math.round((D - B) / 2));
          }
          return x;
        }
        function G(L, g, P) {
          if (A()) return 0;
          var x = 1;
          return (
            a.add(L).each(function (D, B) {
              var K = parseFloat(B.getAttribute("data-scroll-time"));
              !isNaN(K) && K >= 0 && (x = K);
            }),
            (472.143 * Math.log(Math.abs(g - P) + 125) - 2e3) * x
          );
        }
        function X(L, g, P, x) {
          return P > x ? g : L + (g - L) * Q(P / x);
        }
        function Q(L) {
          return L < 0.5
            ? 4 * L * L * L
            : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function W() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: g } = t;
          i.on(g, d, C),
            i.on(L, v, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: W };
      })
    );
  });
  var yT = s((Uk, _T) => {
    var xB = ke();
    xB.define(
      "touch",
      (_T.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            u = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            v;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", E, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", b, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", E, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", b, !1);
          function d(q) {
            var O = q.touches;
            (O && O.length > 1) ||
              ((a = !0),
              O ? ((u = !0), (f = O[0].clientX)) : (f = q.clientX),
              (v = f));
          }
          function E(q) {
            if (a) {
              if (u && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var O = q.touches,
                A = O ? O[0].clientX : q.clientX,
                _ = A - v;
              (v = A),
                Math.abs(_) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", q, { direction: _ > 0 ? "right" : "left" }), b());
            }
          }
          function I(q) {
            if (a && ((a = !1), u && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (u = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function S() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", E, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", b, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", E, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", b, !1),
              (i = null);
          }
          this.destroy = S;
        }
        function o(i, a, u) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  As();
  Rs();
  Cs();
  qs();
  xs();
  Us();
  pT();
  ET();
  gT();
  yT();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".scholartexts",
        originalId:
          "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".scholartexts",
          originalId:
            "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1645057302608,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".scholartexts",
        originalId:
          "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".scholartexts",
          originalId:
            "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1645057302608,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".buttonhero",
        originalId:
          "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".buttonhero",
          originalId:
            "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1645075402556,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".buttonhero",
        originalId:
          "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".buttonhero",
          originalId:
            "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1645075402557,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344477219,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344477220,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344767274,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344767275,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344811567,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344811597,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344821260,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344821291,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344834148,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662344834178,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-40" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662409323370,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-42" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662409349633,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-44" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 70,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662409384170,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-46" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 90,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662409402428,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 120,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662409427995,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-50" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|8572d228-c170-d5bb-d5cc-56490916e355",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|8572d228-c170-d5bb-d5cc-56490916e355",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662409542212,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410406592,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410406593,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410433807,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410433807,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410434890,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410434890,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410435642,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410435642,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|9b98ad63-b014-bb4e-ca0d-61bf2b242509",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|9b98ad63-b014-bb4e-ca0d-61bf2b242509",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410436350,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|9b98ad63-b014-bb4e-ca0d-61bf2b242509",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|9b98ad63-b014-bb4e-ca0d-61bf2b242509",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410436350,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410514600,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662410514601,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfc2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|9f73dd35-12f9-3b40-7264-b19a123ecfc2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662410868121,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|b44a2b92-abeb-90a7-a279-4b78f628d9b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|b44a2b92-abeb-90a7-a279-4b78f628d9b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662410888962,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-72" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|da884d6c-fb25-d3d2-537d-88220981a8d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|da884d6c-fb25-d3d2-537d-88220981a8d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662410905714,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|54078383-dbb3-8824-29d1-8921de1ba94b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|54078383-dbb3-8824-29d1-8921de1ba94b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662410911875,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|a2a64fd8-5ab3-d5b8-231b-de9ddeff5b11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|a2a64fd8-5ab3-d5b8-231b-de9ddeff5b11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662410919831,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893dd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893dd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662493212821,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893de2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893de2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662493212821,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893de2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|5acb7bf5-e148-2eb8-9828-2eec90893de2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662493212821,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-138": {
      id: "e-138",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-140": {
      id: "e-140",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-139",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-144": {
      id: "e-144",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-143",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|2f27073f-daa6-525f-b039-27ce1c7d3c58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|7f91504f-e1ab-3e26-b445-a014bd0062d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|f604c238-cbb2-cf7a-f089-3f4575cf007e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 70,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|78bc2e78-b0c6-c64d-bf30-f17ab7e4bb09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 90,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|cb4c2925-ed7e-542a-ceab-ac2c8e36f33d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 120,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|8572d228-c170-d5bb-d5cc-56490916e355",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|8572d228-c170-d5bb-d5cc-56490916e355",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-165",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|d14fc962-67f5-4218-2f2e-6ef1b3c33fff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|4db4d4e3-76c3-64f7-b1a8-f0ef437e71ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|4fdc4143-d4e9-50fc-f689-158cb64d02cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|7801ca2d-4f46-01fb-c7ee-6d432f3f4fa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|b44a2b92-abeb-90a7-a279-4b78f628d9b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|b44a2b92-abeb-90a7-a279-4b78f628d9b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|da884d6c-fb25-d3d2-537d-88220981a8d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|da884d6c-fb25-d3d2-537d-88220981a8d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|54078383-dbb3-8824-29d1-8921de1ba94b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|54078383-dbb3-8824-29d1-8921de1ba94b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893dd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893dd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1662503936560,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893de2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893de2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893de2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5acb7bf5-e148-2eb8-9828-2eec90893de2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662503936560,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386301",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386301",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-240": {
      id: "e-240",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386301",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386301",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-242",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-242": {
      id: "e-242",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-241",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-244": {
      id: "e-244",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-248",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-248": {
      id: "e-248",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-247",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386315",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386315",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-251",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-258",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386304",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386304",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-258": {
      id: "e-258",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386304",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386304",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386309",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386309",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386309",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386309",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572737022,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572987672,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572987672,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d402238630d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d402238630d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572995827,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d402238630d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d402238630d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662572995827,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662573843325,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662573843325,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d40223862ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662573843325,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d402238631d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d402238631d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662573949227,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d402238631d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d402238631d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662573949227,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d4022386301",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d4022386301",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662574446408,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bd8929d6-651e-b989-3ac0-7d402238631c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bd8929d6-651e-b989-3ac0-7d402238631c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1662574653286,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".feature-card",
        originalId:
          "6449e233487a83eb7e667219|166e0b1c-56b1-ab0e-9e6b-1dfa715b4f84",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".feature-card",
          originalId:
            "6449e233487a83eb7e667219|166e0b1c-56b1-ab0e-9e6b-1dfa715b4f84",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654683738593,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".feature-card",
        originalId:
          "6449e233487a83eb7e667219|166e0b1c-56b1-ab0e-9e6b-1dfa715b4f84",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".feature-card",
          originalId:
            "6449e233487a83eb7e667219|166e0b1c-56b1-ab0e-9e6b-1dfa715b4f84",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654683738593,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-290" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1671912335792,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671912335792,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a832bbb667215|e4dd6cfb-4ff8-d7ae-e525-77a5594c4cca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671912335792,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671912561216,
    },
    "e-316": {
      id: "e-316",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-315",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671912561216,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-318" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6449e233487a833d1166721b|5e07f910-0bc0-b415-184e-63206b110761",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1671912561216,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
                },
                globalSwatchId: "",
                rValue: 199,
                bValue: 18,
                gValue: 153,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1645057310688,
    },
    "a-2": {
      id: "a-2",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a837e1566721e|5e8ff8b5-c6ab-6b54-1a1a-7d4230934ecc",
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1645057348506,
    },
    "a-3": {
      id: "a-3",
      title: "ButtonHover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
                },
                globalSwatchId: "",
                rValue: 120,
                bValue: 255,
                gValue: 221,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1645075405514,
    },
    "a-4": {
      id: "a-4",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a837e1566721e|e7014f6c-4d40-414f-cd64-abcebb573079",
                },
                globalSwatchId: "",
                rValue: 230,
                bValue: 0,
                gValue: 111,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1645075434820,
    },
    "a-9": {
      id: "a-9",
      title: "PortfolioCatHover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
                },
                globalSwatchId: "",
                rValue: 208,
                bValue: 103,
                gValue: 180,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662344492812,
    },
    "a-10": {
      id: "a-10",
      title: "PFOutHover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a832bbb667215|2f27073f-daa6-525f-b039-27ce1c7d3c58",
                },
                globalSwatchId: "",
                rValue: 220,
                bValue: 220,
                gValue: 220,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662344551403,
    },
    "a-8": {
      id: "a-8",
      title: "RhodesButtonHover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6449e233487a83ccad66721d|e17e0fe3-db6e-64f3-92fb-124023506c69",
                },
                globalSwatchId: "88e5d4ce",
                rValue: 229,
                bValue: 14,
                gValue: 224,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1655046322351,
    },
    "a-14": {
      id: "a-14",
      title: "AppearMobileMenu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navmenumobile",
                  selectorGuids: ["4ae6e4a7-cdc5-0914-dc22-2500cc71effe"],
                },
                heightValue: 160,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662572244004,
    },
    "a-15": {
      id: "a-15",
      title: "CloseMenuMobile",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navmenumobile",
                  selectorGuids: ["4ae6e4a7-cdc5-0914-dc22-2500cc71effe"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662572355119,
    },
    "a-12": {
      id: "a-12",
      title: "CloseMail",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".mail",
                  selectorGuids: ["3f1cfc8d-1b95-3369-93b8-2b54d830f1d1"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662569481649,
    },
    "a-13": {
      id: "a-13",
      title: "Apper Mail",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".mail",
                  selectorGuids: ["3f1cfc8d-1b95-3369-93b8-2b54d830f1d1"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662570009695,
    },
    "a-16": {
      id: "a-16",
      title: "AppearMobileMail",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".mailmobile",
                  selectorGuids: ["429a30cf-d921-9d00-95d3-034830e3c3d5"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662573409431,
    },
    "a-17": {
      id: "a-17",
      title: "CloseMailMobile",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".mailmobile",
                  selectorGuids: ["429a30cf-d921-9d00-95d3-034830e3c3d5"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1662574657513,
    },
    "a-20": {
      id: "a-20",
      title: "Feature /Card",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".feature-shape",
                  selectorGuids: ["19b98e89-8570-899e-eba3-71d588d21667"],
                },
                xValue: 100,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".feature-shape",
                  selectorGuids: ["19b98e89-8570-899e-eba3-71d588d21667"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654683743546,
    },
    "a-21": {
      id: "a-21",
      title: "Feature /Card 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".feature-shape",
                  selectorGuids: ["19b98e89-8570-899e-eba3-71d588d21667"],
                },
                xValue: 100,
                yValue: -100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654683743546,
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
