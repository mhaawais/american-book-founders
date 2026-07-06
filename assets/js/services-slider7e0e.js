/*! For license information please see services-slider.js.LICENSE.txt */
( () => {
    "use strict";
    var t = {
        286: (t, e, n) => {
            n.d(e, {
                A: () => o
            });
            var i = n(314)
              , r = n.n(i)()((function(t) {
                return t[1]
            }
            ));
            r.push([t.id, ".splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide:not(.is-overflow) .splide__pagination{display:none}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-ms-flex-negative:0;backface-visibility:hidden;box-sizing:border-box;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list>.splide__slide{margin:0!important;opacity:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__arrow{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;height:2em;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover:not(:disabled){opacity:.9}.splide__arrow:disabled{opacity:.3}.splide__arrow:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide.is-focus-in .splide__arrow:focus{outline:3px solid #0bf;outline-offset:3px}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;position:relative;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4);z-index:1}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__pagination__page:focus{outline:3px solid #0bf;outline-offset:3px}.splide__progress__bar{background:#ccc;height:3px}.splide__slide{-webkit-tap-highlight-color:rgba(0,0,0,0)}.splide__slide:focus{outline:0}@supports(outline-offset:-3px){.splide__slide:focus-visible{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide__slide:focus-visible{border:3px solid #0bf}}@supports(outline-offset:-3px){.splide.is-focus-in .splide__slide:focus{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide.is-focus-in .splide__slide:focus{border:3px solid #0bf}.splide.is-focus-in .splide__track>.splide__list>.splide__slide:focus{border-color:#0bf}}.splide__toggle{cursor:pointer}.splide__toggle:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__toggle:focus{outline:3px solid #0bf;outline-offset:3px}.splide__track--nav>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide__track--nav>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide__arrows--rtl .splide__arrow--prev{left:auto;right:1em}.splide__arrows--rtl .splide__arrow--prev svg{transform:scaleX(1)}.splide__arrows--rtl .splide__arrow--next{left:1em;right:auto}.splide__arrows--rtl .splide__arrow--next svg{transform:scaleX(-1)}.splide__arrows--ttb .splide__arrow{left:50%;transform:translate(-50%)}.splide__arrows--ttb .splide__arrow--prev{top:1em}.splide__arrows--ttb .splide__arrow--prev svg{transform:rotate(-90deg)}.splide__arrows--ttb .splide__arrow--next{bottom:1em;top:auto}.splide__arrows--ttb .splide__arrow--next svg{transform:rotate(90deg)}.splide__pagination--ttb{bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}", ""]);
            const o = r
        }
        ,
        314: t => {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = t(e);
                        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                    }
                    )).join("")
                }
                ,
                e.i = function(t, n, i) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var r = {};
                    if (i)
                        for (var o = 0; o < this.length; o++) {
                            var s = this[o][0];
                            null != s && (r[s] = !0)
                        }
                    for (var a = 0; a < t.length; a++) {
                        var u = [].concat(t[a]);
                        i && r[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n),
                        e.push(u))
                    }
                }
                ,
                e
            }
        }
        ,
        72: (t, e, n) => {
            var i, r = function() {
                return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
                i
            }, o = function() {
                var t = {};
                return function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }
            }(), s = [];
            function a(t) {
                for (var e = -1, n = 0; n < s.length; n++)
                    if (s[n].identifier === t) {
                        e = n;
                        break
                    }
                return e
            }
            function u(t, e) {
                for (var n = {}, i = [], r = 0; r < t.length; r++) {
                    var o = t[r]
                      , u = e.base ? o[0] + e.base : o[0]
                      , c = n[u] || 0
                      , l = "".concat(u, " ").concat(c);
                    n[u] = c + 1;
                    var d = a(l)
                      , f = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== d ? (s[d].references++,
                    s[d].updater(f)) : s.push({
                        identifier: l,
                        updater: h(f, e),
                        references: 1
                    }),
                    i.push(l)
                }
                return i
            }
            function c(t) {
                var e = document.createElement("style")
                  , i = t.attributes || {};
                if (void 0 === i.nonce) {
                    var r = n.nc;
                    r && (i.nonce = r)
                }
                if (Object.keys(i).forEach((function(t) {
                    e.setAttribute(t, i[t])
                }
                )),
                "function" == typeof t.insert)
                    t.insert(e);
                else {
                    var s = o(t.insert || "head");
                    if (!s)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    s.appendChild(e)
                }
                return e
            }
            var l, d = (l = [],
            function(t, e) {
                return l[t] = e,
                l.filter(Boolean).join("\n")
            }
            );
            function f(t, e, n, i) {
                var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                if (t.styleSheet)
                    t.styleSheet.cssText = d(e, r);
                else {
                    var o = document.createTextNode(r)
                      , s = t.childNodes;
                    s[e] && t.removeChild(s[e]),
                    s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
                }
            }
            function p(t, e, n) {
                var i = n.css
                  , r = n.media
                  , o = n.sourceMap;
                if (r ? t.setAttribute("media", r) : t.removeAttribute("media"),
                o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                t.styleSheet)
                    t.styleSheet.cssText = i;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(i))
                }
            }
            var v = null
              , g = 0;
            function h(t, e) {
                var n, i, r;
                if (e.singleton) {
                    var o = g++;
                    n = v || (v = c(e)),
                    i = f.bind(null, n, o, !1),
                    r = f.bind(null, n, o, !0)
                } else
                    n = c(e),
                    i = p.bind(null, n, e),
                    r = function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t)
                        }(n)
                    }
                    ;
                return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                            return;
                        i(t = e)
                    } else
                        r()
                }
            }
            t.exports = function(t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
                var n = u(t = t || [], e);
                return function(t) {
                    if (t = t || [],
                    "[object Array]" === Object.prototype.toString.call(t)) {
                        for (var i = 0; i < n.length; i++) {
                            var r = a(n[i]);
                            s[r].references--
                        }
                        for (var o = u(t, e), c = 0; c < n.length; c++) {
                            var l = a(n[c]);
                            0 === s[l].references && (s[l].updater(),
                            s.splice(l, 1))
                        }
                        n = o
                    }
                }
            }
        }
    }
      , e = {};
    function n(i) {
        var r = e[i];
        if (void 0 !== r)
            return r.exports;
        var o = e[i] = {
            id: i,
            exports: {}
        };
        return t[i](o, o.exports, n),
        o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (t, e) => {
        for (var i in e)
            n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    n.nc = void 0;
    var i = n(72)
      , r = n.n(i)
      , o = n(286)
      , s = {
        insert: "head",
        singleton: !1
    };
    r()(o.A, s);
    o.A.locals;
    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    var u = "(prefers-reduced-motion: reduce)"
      , c = 4
      , l = 5
      , d = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: c,
        SCROLLING: l,
        DRAGGING: 6,
        DESTROYED: 7
    };
    function f(t) {
        t.length = 0
    }
    function p(t, e, n) {
        return Array.prototype.slice.call(t, e, n)
    }
    function v(t) {
        return t.bind.apply(t, [null].concat(p(arguments, 1)))
    }
    var g = setTimeout
      , h = function() {};
    function m(t) {
        return requestAnimationFrame(t)
    }
    function _(t, e) {
        return typeof e === t
    }
    function b(t) {
        return !S(t) && _("object", t)
    }
    var y = Array.isArray
      , x = v(_, "function")
      , w = v(_, "string")
      , E = v(_, "undefined");
    function S(t) {
        return null === t
    }
    function k(t) {
        try {
            return t instanceof (t.ownerDocument.defaultView || window).HTMLElement
        } catch (t) {
            return !1
        }
    }
    function C(t) {
        return y(t) ? t : [t]
    }
    function P(t, e) {
        C(t).forEach(e)
    }
    function L(t, e) {
        return t.indexOf(e) > -1
    }
    function A(t, e) {
        return t.push.apply(t, C(e)),
        t
    }
    function M(t, e, n) {
        t && P(e, (function(e) {
            e && t.classList[n ? "add" : "remove"](e)
        }
        ))
    }
    function z(t, e) {
        M(t, w(e) ? e.split(" ") : e, !0)
    }
    function D(t, e) {
        P(e, t.appendChild.bind(t))
    }
    function N(t, e) {
        P(t, (function(t) {
            var n = (e || t).parentNode;
            n && n.insertBefore(t, e)
        }
        ))
    }
    function O(t, e) {
        return k(t) && (t.msMatchesSelector || t.matches).call(t, e)
    }
    function T(t, e) {
        var n = t ? p(t.children) : [];
        return e ? n.filter((function(t) {
            return O(t, e)
        }
        )) : n
    }
    function j(t, e) {
        return e ? T(t, e)[0] : t.firstElementChild
    }
    var I = Object.keys;
    function F(t, e, n) {
        return t && (n ? I(t).reverse() : I(t)).forEach((function(n) {
            "__proto__" !== n && e(t[n], n)
        }
        )),
        t
    }
    function R(t) {
        return p(arguments, 1).forEach((function(e) {
            F(e, (function(n, i) {
                t[i] = e[i]
            }
            ))
        }
        )),
        t
    }
    function X(t) {
        return p(arguments, 1).forEach((function(e) {
            F(e, (function(e, n) {
                y(e) ? t[n] = e.slice() : b(e) ? t[n] = X({}, b(t[n]) ? t[n] : {}, e) : t[n] = e
            }
            ))
        }
        )),
        t
    }
    function B(t, e) {
        P(e || I(t), (function(e) {
            delete t[e]
        }
        ))
    }
    function W(t, e) {
        P(t, (function(t) {
            P(e, (function(e) {
                t && t.removeAttribute(e)
            }
            ))
        }
        ))
    }
    function G(t, e, n) {
        b(e) ? F(e, (function(e, n) {
            G(t, n, e)
        }
        )) : P(t, (function(t) {
            S(n) || "" === n ? W(t, e) : t.setAttribute(e, String(n))
        }
        ))
    }
    function H(t, e, n) {
        var i = document.createElement(t);
        return e && (w(e) ? z(i, e) : G(i, e)),
        n && D(n, i),
        i
    }
    function U(t, e, n) {
        if (E(n))
            return getComputedStyle(t)[e];
        S(n) || (t.style[e] = "" + n)
    }
    function Y(t, e) {
        U(t, "display", e)
    }
    function q(t) {
        t.setActive && t.setActive() || t.focus({
            preventScroll: !0
        })
    }
    function J(t, e) {
        return t.getAttribute(e)
    }
    function K(t, e) {
        return t && t.classList.contains(e)
    }
    function V(t) {
        return t.getBoundingClientRect()
    }
    function Q(t) {
        P(t, (function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        ))
    }
    function Z(t) {
        return j((new DOMParser).parseFromString(t, "text/html").body)
    }
    function $(t, e) {
        t.preventDefault(),
        e && (t.stopPropagation(),
        t.stopImmediatePropagation())
    }
    function tt(t, e) {
        return t && t.querySelector(e)
    }
    function et(t, e) {
        return e ? p(t.querySelectorAll(e)) : []
    }
    function nt(t, e) {
        M(t, e, !1)
    }
    function it(t) {
        return t.timeStamp
    }
    function rt(t) {
        return w(t) ? t : t ? t + "px" : ""
    }
    var ot = "splide"
      , st = "data-" + ot;
    function at(t, e) {
        if (!t)
            throw new Error("[" + ot + "] " + (e || ""))
    }
    var ut = Math.min
      , ct = Math.max
      , lt = Math.floor
      , dt = Math.ceil
      , ft = Math.abs;
    function pt(t, e, n) {
        return ft(t - e) < n
    }
    function vt(t, e, n, i) {
        var r = ut(e, n)
          , o = ct(e, n);
        return i ? r < t && t < o : r <= t && t <= o
    }
    function gt(t, e, n) {
        var i = ut(e, n)
          , r = ct(e, n);
        return ut(ct(i, t), r)
    }
    function ht(t) {
        return +(t > 0) - +(t < 0)
    }
    function mt(t, e) {
        return P(e, (function(e) {
            t = t.replace("%s", "" + e)
        }
        )),
        t
    }
    function _t(t) {
        return t < 10 ? "0" + t : "" + t
    }
    var bt = {};
    function yt(t) {
        return "" + t + _t(bt[t] = (bt[t] || 0) + 1)
    }
    function xt() {
        var t = [];
        function e(t, e, n) {
            P(t, (function(t) {
                t && P(e, (function(e) {
                    e.split(" ").forEach((function(e) {
                        var i = e.split(".");
                        n(t, i[0], i[1])
                    }
                    ))
                }
                ))
            }
            ))
        }
        return {
            bind: function(n, i, r, o) {
                e(n, i, (function(e, n, i) {
                    var s = "addEventListener"in e
                      , a = s ? e.removeEventListener.bind(e, n, r, o) : e.removeListener.bind(e, r);
                    s ? e.addEventListener(n, r, o) : e.addListener(r),
                    t.push([e, n, i, r, a])
                }
                ))
            },
            unbind: function(n, i, r) {
                e(n, i, (function(e, n, i) {
                    t = t.filter((function(t) {
                        return !!(t[0] !== e || t[1] !== n || t[2] !== i || r && t[3] !== r) || (t[4](),
                        !1)
                    }
                    ))
                }
                ))
            },
            dispatch: function(t, e, n) {
                var i, r = !0;
                return "function" == typeof CustomEvent ? i = new CustomEvent(e,{
                    bubbles: r,
                    detail: n
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(e, r, !1, n),
                t.dispatchEvent(i),
                i
            },
            destroy: function() {
                t.forEach((function(t) {
                    t[4]()
                }
                )),
                f(t)
            }
        }
    }
    var wt = "mounted"
      , Et = "ready"
      , St = "move"
      , kt = "moved"
      , Ct = "click"
      , Pt = "active"
      , Lt = "inactive"
      , At = "visible"
      , Mt = "hidden"
      , zt = "refresh"
      , Dt = "updated"
      , Nt = "resize"
      , Ot = "resized"
      , Tt = "scroll"
      , jt = "scrolled"
      , It = "destroy"
      , Ft = "arrows:mounted"
      , Rt = "navigation:mounted"
      , Xt = "autoplay:play"
      , Bt = "autoplay:pause"
      , Wt = "lazyload:loaded"
      , Gt = "sk"
      , Ht = "sh"
      , Ut = "ei";
    function Yt(t) {
        var e = t ? t.event.bus : document.createDocumentFragment()
          , n = xt();
        return t && t.event.on(It, n.destroy),
        R(n, {
            bus: e,
            on: function(t, i) {
                n.bind(e, C(t).join(" "), (function(t) {
                    i.apply(i, y(t.detail) ? t.detail : [])
                }
                ))
            },
            off: v(n.unbind, e),
            emit: function(t) {
                n.dispatch(e, t, p(arguments, 1))
            }
        })
    }
    function qt(t, e, n, i) {
        var r, o, s = Date.now, a = 0, u = !0, c = 0;
        function l() {
            if (!u) {
                if (a = t ? ut((s() - r) / t, 1) : 1,
                n && n(a),
                a >= 1 && (e(),
                r = s(),
                i && ++c >= i))
                    return d();
                o = m(l)
            }
        }
        function d() {
            u = !0
        }
        function f() {
            o && cancelAnimationFrame(o),
            a = 0,
            o = 0,
            u = !0
        }
        return {
            start: function(e) {
                e || f(),
                r = s() - (e ? a * t : 0),
                u = !1,
                o = m(l)
            },
            rewind: function() {
                r = s(),
                a = 0,
                n && n(a)
            },
            pause: d,
            cancel: f,
            set: function(e) {
                t = e
            },
            isPaused: function() {
                return u
            }
        }
    }
    var Jt = "Arrow"
      , Kt = Jt + "Left"
      , Vt = Jt + "Right"
      , Qt = Jt + "Up"
      , Zt = Jt + "Down"
      , $t = "ttb"
      , te = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [Qt, Vt],
        ArrowRight: [Zt, Kt]
    };
    function ee(t, e, n) {
        return {
            resolve: function(t, e, i) {
                var r = "rtl" !== (i = i || n.direction) || e ? i === $t ? 0 : -1 : 1;
                return te[t] && te[t][r] || t.replace(/width|left|right/i, (function(t, e) {
                    var n = te[t.toLowerCase()][r] || t;
                    return e > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n
                }
                ))
            },
            orient: function(t) {
                return t * ("rtl" === n.direction ? 1 : -1)
            }
        }
    }
    var ne = "role"
      , ie = "tabindex"
      , re = "aria-"
      , oe = re + "controls"
      , se = re + "current"
      , ae = re + "selected"
      , ue = re + "label"
      , ce = re + "labelledby"
      , le = re + "hidden"
      , de = re + "orientation"
      , fe = re + "roledescription"
      , pe = re + "live"
      , ve = re + "busy"
      , ge = re + "atomic"
      , he = [ne, ie, "disabled", oe, se, ue, ce, le, de, fe]
      , me = ot + "__"
      , _e = "is-"
      , be = ot
      , ye = me + "track"
      , xe = me + "list"
      , we = me + "slide"
      , Ee = we + "--clone"
      , Se = we + "__container"
      , ke = me + "arrows"
      , Ce = me + "arrow"
      , Pe = Ce + "--prev"
      , Le = Ce + "--next"
      , Ae = me + "pagination"
      , Me = Ae + "__page"
      , ze = me + "progress" + "__bar"
      , De = me + "toggle"
      , Ne = me + "sr"
      , Oe = _e + "initialized"
      , Te = _e + "active"
      , je = _e + "prev"
      , Ie = _e + "next"
      , Fe = _e + "visible"
      , Re = _e + "loading"
      , Xe = _e + "focus-in"
      , Be = _e + "overflow"
      , We = [Te, Fe, je, Ie, Re, Xe, Be]
      , Ge = {
        slide: we,
        clone: Ee,
        arrows: ke,
        arrow: Ce,
        prev: Pe,
        next: Le,
        pagination: Ae,
        page: Me,
        spinner: me + "spinner"
    };
    var He = "touchstart mousedown"
      , Ue = "touchmove mousemove"
      , Ye = "touchend touchcancel mouseup click";
    var qe = "slide"
      , Je = "loop"
      , Ke = "fade";
    function Ve(t, e, n, i) {
        var r, o = Yt(t), s = o.on, a = o.emit, u = o.bind, d = t.Components, f = t.root, p = t.options, g = p.isNavigation, h = p.updateOnMove, m = p.i18n, _ = p.pagination, b = p.slideFocus, y = d.Direction.resolve, x = J(i, "style"), w = J(i, ue), E = n > -1, S = j(i, "." + Se);
        function k() {
            var r = t.splides.map((function(t) {
                var n = t.splide.Components.Slides.getAt(e);
                return n ? n.slide.id : ""
            }
            )).join(" ");
            G(i, ue, mt(m.slideX, (E ? n : e) + 1)),
            G(i, oe, r),
            G(i, ne, b ? "button" : ""),
            b && W(i, fe)
        }
        function C() {
            r || P()
        }
        function P() {
            if (!r) {
                var n = t.index;
                (o = L()) !== K(i, Te) && (M(i, Te, o),
                G(i, se, g && o || ""),
                a(o ? Pt : Lt, A)),
                function() {
                    var e = function() {
                        if (t.is(Ke))
                            return L();
                        var e = V(d.Elements.track)
                          , n = V(i)
                          , r = y("left", !0)
                          , o = y("right", !0);
                        return lt(e[r]) <= dt(n[r]) && lt(n[o]) <= dt(e[o])
                    }()
                      , n = !e && (!L() || E);
                    t.state.is([c, l]) || G(i, le, n || "");
                    G(et(i, p.focusableNodes || ""), ie, n ? -1 : ""),
                    b && G(i, ie, n ? -1 : 0);
                    e !== K(i, Fe) && (M(i, Fe, e),
                    a(e ? At : Mt, A));
                    if (!e && document.activeElement === i) {
                        var r = d.Slides.getAt(t.index);
                        r && q(r.slide)
                    }
                }(),
                M(i, je, e === n - 1),
                M(i, Ie, e === n + 1)
            }
            var o
        }
        function L() {
            var i = t.index;
            return i === e || p.cloneStatus && i === n
        }
        var A = {
            index: e,
            slideIndex: n,
            slide: i,
            container: S,
            isClone: E,
            mount: function() {
                E || (i.id = f.id + "-slide" + _t(e + 1),
                G(i, ne, _ ? "tabpanel" : "group"),
                G(i, fe, m.slide),
                G(i, ue, w || mt(m.slideLabel, [e + 1, t.length]))),
                u(i, "click", v(a, Ct, A)),
                u(i, "keydown", v(a, Gt, A)),
                s([kt, Ht, jt], P),
                s(Rt, k),
                h && s(St, C)
            },
            destroy: function() {
                r = !0,
                o.destroy(),
                nt(i, We),
                W(i, he),
                G(i, "style", x),
                G(i, ue, w || "")
            },
            update: P,
            style: function(t, e, n) {
                U(n && S || i, t, e)
            },
            isWithin: function(n, i) {
                var r = ft(n - e);
                return E || !p.rewind && !t.is(Je) || (r = ut(r, t.length - r)),
                r <= i
            }
        };
        return A
    }
    var Qe = "http://www.w3.org/2000/svg"
      , Ze = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
    var $e = st + "-interval";
    var tn = {
        passive: !1,
        capture: !0
    };
    var en = {
        Spacebar: " ",
        Right: Vt,
        Left: Kt,
        Up: Qt,
        Down: Zt
    };
    function nn(t) {
        return t = w(t) ? t : t.key,
        en[t] || t
    }
    var rn = "keydown";
    var on = st + "-lazy"
      , sn = on + "-srcset"
      , an = "[" + on + "], [" + sn + "]";
    var un = [" ", "Enter"];
    var cn = Object.freeze({
        __proto__: null,
        Media: function(t, e, n) {
            var i = t.state
              , r = n.breakpoints || {}
              , o = n.reducedMotion || {}
              , s = xt()
              , a = [];
            function c(t) {
                t && s.destroy()
            }
            function l(t, e) {
                var n = matchMedia(e);
                s.bind(n, "change", d),
                a.push([t, n])
            }
            function d() {
                var e = i.is(7)
                  , r = n.direction
                  , o = a.reduce((function(t, e) {
                    return X(t, e[1].matches ? e[0] : {})
                }
                ), {});
                B(n),
                f(o),
                n.destroy ? t.destroy("completely" === n.destroy) : e ? (c(!0),
                t.mount()) : r !== n.direction && t.refresh()
            }
            function f(e, r, o) {
                X(n, e),
                r && X(Object.getPrototypeOf(n), e),
                !o && i.is(1) || t.emit(Dt, n)
            }
            return {
                setup: function() {
                    var t = "min" === n.mediaQuery;
                    I(r).sort((function(e, n) {
                        return t ? +e - +n : +n - +e
                    }
                    )).forEach((function(e) {
                        l(r[e], "(" + (t ? "min" : "max") + "-width:" + e + "px)")
                    }
                    )),
                    l(o, u),
                    d()
                },
                destroy: c,
                reduce: function(t) {
                    matchMedia(u).matches && (t ? X(n, o) : B(n, I(o)))
                },
                set: f
            }
        },
        Direction: ee,
        Elements: function(t, e, n) {
            var i, r, o, s = Yt(t), a = s.on, u = s.bind, c = t.root, l = n.i18n, d = {}, p = [], v = [], g = [];
            function h() {
                i = b("." + ye),
                r = j(i, "." + xe),
                at(i && r, "A track/list element is missing."),
                A(p, T(r, "." + we + ":not(." + Ee + ")")),
                F({
                    arrows: ke,
                    pagination: Ae,
                    prev: Pe,
                    next: Le,
                    bar: ze,
                    toggle: De
                }, (function(t, e) {
                    d[e] = b("." + t)
                }
                )),
                R(d, {
                    root: c,
                    track: i,
                    list: r,
                    slides: p
                }),
                function() {
                    var t = c.id || yt(ot)
                      , e = n.role;
                    c.id = t,
                    i.id = i.id || t + "-track",
                    r.id = r.id || t + "-list",
                    !J(c, ne) && "SECTION" !== c.tagName && e && G(c, ne, e);
                    G(c, fe, l.carousel),
                    G(r, ne, "presentation")
                }(),
                _()
            }
            function m(t) {
                var e = he.concat("style");
                f(p),
                nt(c, v),
                nt(i, g),
                W([i, r], e),
                W(c, t ? e : ["style", fe])
            }
            function _() {
                nt(c, v),
                nt(i, g),
                v = y(be),
                g = y(ye),
                z(c, v),
                z(i, g),
                G(c, ue, n.label),
                G(c, ce, n.labelledby)
            }
            function b(t) {
                var e = tt(c, t);
                return e && function(t, e) {
                    if (x(t.closest))
                        return t.closest(e);
                    for (var n = t; n && 1 === n.nodeType && !O(n, e); )
                        n = n.parentElement;
                    return n
                }(e, "." + be) === c ? e : void 0
            }
            function y(t) {
                return [t + "--" + n.type, t + "--" + n.direction, n.drag && t + "--draggable", n.isNavigation && t + "--nav", t === be && Te]
            }
            return R(d, {
                setup: h,
                mount: function() {
                    a(zt, m),
                    a(zt, h),
                    a(Dt, _),
                    u(document, He + " keydown", (function(t) {
                        o = "keydown" === t.type
                    }
                    ), {
                        capture: !0
                    }),
                    u(c, "focusin", (function() {
                        M(c, Xe, !!o)
                    }
                    ))
                },
                destroy: m
            })
        },
        Slides: function(t, e, n) {
            var i = Yt(t)
              , r = i.on
              , o = i.emit
              , s = i.bind
              , a = e.Elements
              , u = a.slides
              , c = a.list
              , l = [];
            function d() {
                u.forEach((function(t, e) {
                    g(t, e, -1)
                }
                ))
            }
            function p() {
                m((function(t) {
                    t.destroy()
                }
                )),
                f(l)
            }
            function g(e, n, i) {
                var r = Ve(t, n, i, e);
                r.mount(),
                l.push(r),
                l.sort((function(t, e) {
                    return t.index - e.index
                }
                ))
            }
            function h(t) {
                return t ? _((function(t) {
                    return !t.isClone
                }
                )) : l
            }
            function m(t, e) {
                h(e).forEach(t)
            }
            function _(t) {
                return l.filter(x(t) ? t : function(e) {
                    return w(t) ? O(e.slide, t) : L(C(t), e.index)
                }
                )
            }
            return {
                mount: function() {
                    d(),
                    r(zt, p),
                    r(zt, d)
                },
                destroy: p,
                update: function() {
                    m((function(t) {
                        t.update()
                    }
                    ))
                },
                register: g,
                get: h,
                getIn: function(t) {
                    var i = e.Controller
                      , r = i.toIndex(t)
                      , o = i.hasFocus() ? 1 : n.perPage;
                    return _((function(t) {
                        return vt(t.index, r, r + o - 1)
                    }
                    ))
                },
                getAt: function(t) {
                    return _(t)[0]
                },
                add: function(t, e) {
                    P(t, (function(t) {
                        if (w(t) && (t = Z(t)),
                        k(t)) {
                            var i = u[e];
                            i ? N(t, i) : D(c, t),
                            z(t, n.classes.slide),
                            r = t,
                            a = v(o, Nt),
                            l = et(r, "img"),
                            (d = l.length) ? l.forEach((function(t) {
                                s(t, "load error", (function() {
                                    --d || a()
                                }
                                ))
                            }
                            )) : a()
                        }
                        var r, a, l, d
                    }
                    )),
                    o(zt)
                },
                remove: function(t) {
                    Q(_(t).map((function(t) {
                        return t.slide
                    }
                    ))),
                    o(zt)
                },
                forEach: m,
                filter: _,
                style: function(t, e, n) {
                    m((function(i) {
                        i.style(t, e, n)
                    }
                    ))
                },
                getLength: function(t) {
                    return t ? u.length : l.length
                },
                isEnough: function() {
                    return l.length > n.perPage
                }
            }
        },
        Layout: function(t, e, n) {
            var i, r, o, s = Yt(t), a = s.on, u = s.bind, c = s.emit, l = e.Slides, d = e.Direction.resolve, f = e.Elements, p = f.root, g = f.track, h = f.list, m = l.getAt, _ = l.style;
            function y() {
                i = n.direction === $t,
                U(p, "maxWidth", rt(n.width)),
                U(g, d("paddingLeft"), w(!1)),
                U(g, d("paddingRight"), w(!0)),
                x(!0)
            }
            function x(t) {
                var e = V(p);
                (t || r.width !== e.width || r.height !== e.height) && (U(g, "height", function() {
                    var t = "";
                    i && (at(t = E(), "height or heightRatio is missing."),
                    t = "calc(" + t + " - " + w(!1) + " - " + w(!0) + ")");
                    return t
                }()),
                _(d("marginRight"), rt(n.gap)),
                _("width", n.autoWidth ? null : rt(n.fixedWidth) || (i ? "" : S())),
                _("height", rt(n.fixedHeight) || (i ? n.autoHeight ? null : S() : E()), !0),
                r = e,
                c(Ot),
                o !== (o = z()) && (M(p, Be, o),
                c("overflow", o)))
            }
            function w(t) {
                var e = n.padding
                  , i = d(t ? "right" : "left");
                return e && rt(e[i] || (b(e) ? 0 : e)) || "0px"
            }
            function E() {
                return rt(n.height || V(h).width * n.heightRatio)
            }
            function S() {
                var t = rt(n.gap);
                return "calc((100%" + (t && " + " + t) + ")/" + (n.perPage || 1) + (t && " - " + t) + ")"
            }
            function k() {
                return V(h)[d("width")]
            }
            function C(t, e) {
                var n = m(t || 0);
                return n ? V(n.slide)[d("width")] + (e ? 0 : A()) : 0
            }
            function P(t, e) {
                var n = m(t);
                if (n) {
                    var i = V(n.slide)[d("right")]
                      , r = V(h)[d("left")];
                    return ft(i - r) + (e ? 0 : A())
                }
                return 0
            }
            function L(e) {
                return P(t.length - 1) - P(0) + C(0, e)
            }
            function A() {
                var t = m(0);
                return t && parseFloat(U(t.slide, d("marginRight"))) || 0
            }
            function z() {
                return t.is(Ke) || L(!0) > k()
            }
            return {
                mount: function() {
                    var t, e, n;
                    y(),
                    u(window, "resize load", (t = v(c, Nt),
                    n = qt(e || 0, t, null, 1),
                    function() {
                        n.isPaused() && n.start()
                    }
                    )),
                    a([Dt, zt], y),
                    a(Nt, x)
                },
                resize: x,
                listSize: k,
                slideSize: C,
                sliderSize: L,
                totalSize: P,
                getPadding: function(t) {
                    return parseFloat(U(g, d("padding" + (t ? "Right" : "Left")))) || 0
                },
                isOverflow: z
            }
        },
        Clones: function(t, e, n) {
            var i, r = Yt(t), o = r.on, s = e.Elements, a = e.Slides, u = e.Direction.resolve, c = [];
            function l() {
                o(zt, d),
                o([Dt, Nt], v),
                (i = g()) && (!function(e) {
                    var i = a.get().slice()
                      , r = i.length;
                    if (r) {
                        for (; i.length < e; )
                            A(i, i);
                        A(i.slice(-e), i.slice(0, e)).forEach((function(o, u) {
                            var l = u < e
                              , d = function(e, i) {
                                var r = e.cloneNode(!0);
                                return z(r, n.classes.clone),
                                r.id = t.root.id + "-clone" + _t(i + 1),
                                r
                            }(o.slide, u);
                            l ? N(d, i[0].slide) : D(s.list, d),
                            A(c, d),
                            a.register(d, u - e + (l ? 0 : r), o.index)
                        }
                        ))
                    }
                }(i),
                e.Layout.resize(!0))
            }
            function d() {
                p(),
                l()
            }
            function p() {
                Q(c),
                f(c),
                r.destroy()
            }
            function v() {
                var t = g();
                i !== t && (i < t || !t) && r.emit(zt)
            }
            function g() {
                var i = n.clones;
                if (t.is(Je)) {
                    if (E(i)) {
                        var r = n[u("fixedWidth")] && e.Layout.slideSize(0);
                        i = r && dt(V(s.track)[u("width")] / r) || n[u("autoWidth")] && t.length || 2 * n.perPage
                    }
                } else
                    i = 0;
                return i
            }
            return {
                mount: l,
                destroy: p
            }
        },
        Move: function(t, e, n) {
            var i, r = Yt(t), o = r.on, s = r.emit, a = t.state.set, u = e.Layout, l = u.slideSize, d = u.getPadding, f = u.totalSize, p = u.listSize, v = u.sliderSize, g = e.Direction, h = g.resolve, m = g.orient, _ = e.Elements, b = _.list, y = _.track;
            function x() {
                e.Controller.isBusy() || (e.Scroll.cancel(),
                w(t.index),
                e.Slides.update())
            }
            function w(t) {
                S(L(t, !0))
            }
            function S(n, i) {
                if (!t.is(Ke)) {
                    var r = i ? n : function(n) {
                        if (t.is(Je)) {
                            var i = P(n)
                              , r = i > e.Controller.getEnd();
                            (i < 0 || r) && (n = k(n, r))
                        }
                        return n
                    }(n);
                    U(b, "transform", "translate" + h("X") + "(" + r + "px)"),
                    n !== r && s(Ht)
                }
            }
            function k(t, e) {
                var n = t - M(e)
                  , i = v();
                return t -= m(i * (dt(ft(n) / i) || 1)) * (e ? 1 : -1)
            }
            function C() {
                S(A(), !0),
                i.cancel()
            }
            function P(t) {
                for (var n = e.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
                    var s = n[o].index
                      , a = ft(L(s, !0) - t);
                    if (!(a <= r))
                        break;
                    r = a,
                    i = s
                }
                return i
            }
            function L(e, i) {
                var r = m(f(e - 1) - function(t) {
                    var e = n.focus;
                    return "center" === e ? (p() - l(t, !0)) / 2 : +e * l(t) || 0
                }(e));
                return i ? function(e) {
                    n.trimSpace && t.is(qe) && (e = gt(e, 0, m(v(!0) - p())));
                    return e
                }(r) : r
            }
            function A() {
                var t = h("left");
                return V(b)[t] - V(y)[t] + m(d(!1))
            }
            function M(t) {
                return L(t ? e.Controller.getEnd() : 0, !!n.trimSpace)
            }
            return {
                mount: function() {
                    i = e.Transition,
                    o([wt, Ot, Dt, zt], x)
                },
                move: function(t, e, n, r) {
                    var o, u;
                    t !== e && (o = t > n,
                    u = m(k(A(), o)),
                    o ? u >= 0 : u <= b[h("scrollWidth")] - V(y)[h("width")]) && (C(),
                    S(k(A(), t > n), !0)),
                    a(c),
                    s(St, e, n, t),
                    i.start(e, (function() {
                        a(3),
                        s(kt, e, n, t),
                        r && r()
                    }
                    ))
                },
                jump: w,
                translate: S,
                shift: k,
                cancel: C,
                toIndex: P,
                toPosition: L,
                getPosition: A,
                getLimit: M,
                exceededLimit: function(t, e) {
                    e = E(e) ? A() : e;
                    var n = !0 !== t && m(e) < m(M(!1))
                      , i = !1 !== t && m(e) > m(M(!0));
                    return n || i
                },
                reposition: x
            }
        },
        Controller: function(t, e, n) {
            var i, r, o, s, a = Yt(t), u = a.on, d = a.emit, f = e.Move, p = f.getPosition, g = f.getLimit, h = f.toPosition, m = e.Slides, _ = m.isEnough, b = m.getLength, y = n.omitEnd, x = t.is(Je), S = t.is(qe), k = v(z, !1), C = v(z, !0), P = n.start || 0, L = P;
            function A() {
                r = b(!0),
                o = n.perMove,
                s = n.perPage,
                i = O();
                var t = gt(P, 0, y ? i : r - 1);
                t !== P && (P = t,
                f.reposition())
            }
            function M() {
                i !== O() && d(Ut)
            }
            function z(t, e) {
                var n = o || (F() ? 1 : s)
                  , r = D(P + n * (t ? -1 : 1), P, !(o || F()));
                return -1 === r && S && !pt(p(), g(!t), 1) ? t ? 0 : i : e ? r : N(r)
            }
            function D(e, a, u) {
                if (_() || F()) {
                    var c = function(e) {
                        if (S && "move" === n.trimSpace && e !== P)
                            for (var i = p(); i === h(e, !0) && vt(e, 0, t.length - 1, !n.rewind); )
                                e < P ? --e : ++e;
                        return e
                    }(e);
                    c !== e && (a = e,
                    e = c,
                    u = !1),
                    e < 0 || e > i ? e = o || !vt(0, e, a, !0) && !vt(i, a, e, !0) ? x ? u ? e < 0 ? -(r % s || s) : r : e : n.rewind ? e < 0 ? i : 0 : -1 : T(j(e)) : u && e !== a && (e = T(j(a) + (e < a ? -1 : 1)))
                } else
                    e = -1;
                return e
            }
            function N(t) {
                return x ? (t + r) % r || 0 : t
            }
            function O() {
                for (var t = r - (F() || x && o ? 1 : s); y && t-- > 0; )
                    if (h(r - 1, !0) !== h(t, !0)) {
                        t++;
                        break
                    }
                return gt(t, 0, r - 1)
            }
            function T(t) {
                return gt(F() ? t : s * t, 0, i)
            }
            function j(t) {
                return F() ? ut(t, i) : lt((t >= i ? r - 1 : t) / s)
            }
            function I(t) {
                t !== P && (L = P,
                P = t)
            }
            function F() {
                return !E(n.focus) || n.isNavigation
            }
            function R() {
                return t.state.is([c, l]) && !!n.waitForTransition
            }
            return {
                mount: function() {
                    A(),
                    u([Dt, zt, Ut], A),
                    u(Ot, M)
                },
                go: function(t, e, n) {
                    if (!R()) {
                        var r = function(t) {
                            var e = P;
                            if (w(t)) {
                                var n = t.match(/([+\-<>])(\d+)?/) || []
                                  , r = n[1]
                                  , o = n[2];
                                "+" === r || "-" === r ? e = D(P + +("" + r + (+o || 1)), P) : ">" === r ? e = o ? T(+o) : k(!0) : "<" === r && (e = C(!0))
                            } else
                                e = x ? t : gt(t, 0, i);
                            return e
                        }(t)
                          , o = N(r);
                        o > -1 && (e || o !== P) && (I(o),
                        f.move(r, o, L, n))
                    }
                },
                scroll: function(t, n, r, o) {
                    e.Scroll.scroll(t, n, r, (function() {
                        var t = N(f.toIndex(p()));
                        I(y ? ut(t, i) : t),
                        o && o()
                    }
                    ))
                },
                getNext: k,
                getPrev: C,
                getAdjacent: z,
                getEnd: O,
                setIndex: I,
                getIndex: function(t) {
                    return t ? L : P
                },
                toIndex: T,
                toPage: j,
                toDest: function(t) {
                    var e = f.toIndex(t);
                    return S ? gt(e, 0, i) : e
                },
                hasFocus: F,
                isBusy: R
            }
        },
        Arrows: function(t, e, n) {
            var i, r, o = Yt(t), s = o.on, a = o.bind, u = o.emit, c = n.classes, l = n.i18n, d = e.Elements, f = e.Controller, p = d.arrows, g = d.track, h = p, m = d.prev, _ = d.next, b = {};
            function y() {
                !function() {
                    var t = n.arrows;
                    !t || m && _ || (h = p || H("div", c.arrows),
                    m = S(!0),
                    _ = S(!1),
                    i = !0,
                    D(h, [m, _]),
                    !p && N(h, g));
                    m && _ && (R(b, {
                        prev: m,
                        next: _
                    }),
                    Y(h, t ? "" : "none"),
                    z(h, r = ke + "--" + n.direction),
                    t && (s([wt, kt, zt, jt, Ut], k),
                    a(_, "click", v(E, ">")),
                    a(m, "click", v(E, "<")),
                    k(),
                    G([m, _], oe, g.id),
                    u(Ft, m, _)))
                }(),
                s(Dt, x)
            }
            function x() {
                w(),
                y()
            }
            function w() {
                o.destroy(),
                nt(h, r),
                i ? (Q(p ? [m, _] : h),
                m = _ = null) : W([m, _], he)
            }
            function E(t) {
                f.go(t, !0)
            }
            function S(t) {
                return Z('<button class="' + c.arrow + " " + (t ? c.prev : c.next) + '" type="button"><svg xmlns="' + Qe + '" viewBox="0 0 ' + "40 " + '40" width="' + '40" height="' + '40" focusable="false"><path d="' + (n.arrowPath || Ze) + '" />')
            }
            function k() {
                if (m && _) {
                    var e = t.index
                      , n = f.getPrev()
                      , i = f.getNext()
                      , r = n > -1 && e < n ? l.last : l.prev
                      , o = i > -1 && e > i ? l.first : l.next;
                    m.disabled = n < 0,
                    _.disabled = i < 0,
                    G(m, ue, r),
                    G(_, ue, o),
                    u("arrows:updated", m, _, n, i)
                }
            }
            return {
                arrows: b,
                mount: y,
                destroy: w,
                update: k
            }
        },
        Autoplay: function(t, e, n) {
            var i, r, o = Yt(t), s = o.on, a = o.bind, u = o.emit, c = qt(n.interval, t.go.bind(t, ">"), (function(t) {
                var e = d.bar;
                e && U(e, "width", 100 * t + "%"),
                u("autoplay:playing", t)
            }
            )), l = c.isPaused, d = e.Elements, f = e.Elements, p = f.root, v = f.toggle, g = n.autoplay, h = "pause" === g;
            function m() {
                l() && e.Slides.isEnough() && (c.start(!n.resetProgress),
                r = i = h = !1,
                y(),
                u(Xt))
            }
            function _(t) {
                void 0 === t && (t = !0),
                h = !!t,
                y(),
                l() || (c.pause(),
                u(Bt))
            }
            function b() {
                h || (i || r ? _(!1) : m())
            }
            function y() {
                v && (M(v, Te, !h),
                G(v, ue, n.i18n[h ? "play" : "pause"]))
            }
            function x(t) {
                var i = e.Slides.getAt(t);
                c.set(i && +J(i.slide, $e) || n.interval)
            }
            return {
                mount: function() {
                    g && (!function() {
                        n.pauseOnHover && a(p, "mouseenter mouseleave", (function(t) {
                            i = "mouseenter" === t.type,
                            b()
                        }
                        ));
                        n.pauseOnFocus && a(p, "focusin focusout", (function(t) {
                            r = "focusin" === t.type,
                            b()
                        }
                        ));
                        v && a(v, "click", (function() {
                            h ? m() : _(!0)
                        }
                        ));
                        s([St, Tt, zt], c.rewind),
                        s(St, x)
                    }(),
                    v && G(v, oe, d.track.id),
                    h || m(),
                    y())
                },
                destroy: c.cancel,
                play: m,
                pause: _,
                isPaused: l
            }
        },
        Cover: function(t, e, n) {
            var i = Yt(t).on;
            function r(t) {
                e.Slides.forEach((function(e) {
                    var n = j(e.container || e.slide, "img");
                    n && n.src && o(t, n, e)
                }
                ))
            }
            function o(t, e, n) {
                n.style("background", t ? 'center/cover no-repeat url("' + e.src + '")' : "", !0),
                Y(e, t ? "none" : "")
            }
            return {
                mount: function() {
                    n.cover && (i(Wt, v(o, !0)),
                    i([wt, Dt, zt], v(r, !0)))
                },
                destroy: v(r, !1)
            }
        },
        Scroll: function(t, e, n) {
            var i, r, o = Yt(t), s = o.on, a = o.emit, u = t.state.set, c = e.Move, d = c.getPosition, f = c.getLimit, p = c.exceededLimit, g = c.translate, h = t.is(qe), m = 1;
            function _(t, n, o, s, f) {
                var g = d();
                if (x(),
                o && (!h || !p())) {
                    var _ = e.Layout.sliderSize()
                      , w = ht(t) * _ * lt(ft(t) / _) || 0;
                    t = c.toPosition(e.Controller.toDest(t % _)) + w
                }
                var E = pt(g, t, 1);
                m = 1,
                n = E ? 0 : n || ct(ft(t - g) / 1.5, 800),
                r = s,
                i = qt(n, b, v(y, g, t, f), 1),
                u(l),
                a(Tt),
                i.start()
            }
            function b() {
                u(3),
                r && r(),
                a(jt)
            }
            function y(t, e, i, o) {
                var s, a, u = d(), c = (t + (e - t) * (s = o,
                (a = n.easingFunc) ? a(s) : 1 - Math.pow(1 - s, 4)) - u) * m;
                g(u + c),
                h && !i && p() && (m *= .6,
                ft(c) < 10 && _(f(p(!0)), 600, !1, r, !0))
            }
            function x() {
                i && i.cancel()
            }
            function w() {
                i && !i.isPaused() && (x(),
                b())
            }
            return {
                mount: function() {
                    s(St, x),
                    s([Dt, zt], w)
                },
                destroy: x,
                scroll: _,
                cancel: w
            }
        },
        Drag: function(t, e, n) {
            var i, r, o, s, a, u, d, f, p = Yt(t), v = p.on, g = p.emit, m = p.bind, _ = p.unbind, y = t.state, x = e.Move, w = e.Scroll, E = e.Controller, S = e.Elements.track, k = e.Media.reduce, C = e.Direction, P = C.resolve, L = C.orient, A = x.getPosition, M = x.exceededLimit, z = !1;
            function D() {
                var t = n.drag;
                H(!t),
                s = "free" === t
            }
            function N(t) {
                if (u = !1,
                !d) {
                    var e = G(t);
                    i = t.target,
                    r = n.noDrag,
                    O(i, "." + Me + ", ." + Ce) || r && O(i, r) || !e && t.button || (E.isBusy() ? $(t, !0) : (f = e ? S : window,
                    a = y.is([c, l]),
                    o = null,
                    m(f, Ue, T, tn),
                    m(f, Ye, j, tn),
                    x.cancel(),
                    w.cancel(),
                    F(t)))
                }
                var i, r
            }
            function T(e) {
                if (y.is(6) || (y.set(6),
                g("drag")),
                e.cancelable)
                    if (a) {
                        x.translate(i + R(e) / (z && t.is(qe) ? 5 : 1));
                        var r = X(e) > 200
                          , o = z !== (z = M());
                        (r || o) && F(e),
                        u = !0,
                        g("dragging"),
                        $(e)
                    } else
                        (function(t) {
                            return ft(R(t)) > ft(R(t, !0))
                        }
                        )(e) && (a = function(t) {
                            var e = n.dragMinThreshold
                              , i = b(e)
                              , r = i && e.mouse || 0
                              , o = (i ? e.touch : +e) || 10;
                            return ft(R(t)) > (G(t) ? o : r)
                        }(e),
                        $(e))
            }
            function j(i) {
                y.is(6) && (y.set(3),
                g("dragged")),
                a && (!function(i) {
                    var r = function(e) {
                        if (t.is(Je) || !z) {
                            var n = X(e);
                            if (n && n < 200)
                                return R(e) / n
                        }
                        return 0
                    }(i)
                      , o = function(t) {
                        return A() + ht(t) * ut(ft(t) * (n.flickPower || 600), s ? 1 / 0 : e.Layout.listSize() * (n.flickMaxPages || 1))
                    }(r)
                      , a = n.rewind && n.rewindByDrag;
                    k(!1),
                    s ? E.scroll(o, 0, n.snap) : t.is(Ke) ? E.go(L(ht(r)) < 0 ? a ? "<" : "-" : a ? ">" : "+") : t.is(qe) && z && a ? E.go(M(!0) ? ">" : "<") : E.go(E.toDest(o), !0);
                    k(!0)
                }(i),
                $(i)),
                _(f, Ue, T),
                _(f, Ye, j),
                a = !1
            }
            function I(t) {
                !d && u && $(t, !0)
            }
            function F(t) {
                o = r,
                r = t,
                i = A()
            }
            function R(t, e) {
                return W(t, e) - W(B(t), e)
            }
            function X(t) {
                return it(t) - it(B(t))
            }
            function B(t) {
                return r === t && o || r
            }
            function W(t, e) {
                return (G(t) ? t.changedTouches[0] : t)["page" + P(e ? "Y" : "X")]
            }
            function G(t) {
                return "undefined" != typeof TouchEvent && t instanceof TouchEvent
            }
            function H(t) {
                d = t
            }
            return {
                mount: function() {
                    m(S, Ue, h, tn),
                    m(S, Ye, h, tn),
                    m(S, He, N, tn),
                    m(S, "click", I, {
                        capture: !0
                    }),
                    m(S, "dragstart", $),
                    v([wt, Dt], D)
                },
                disable: H,
                isDragging: function() {
                    return a
                }
            }
        },
        Keyboard: function(t, e, n) {
            var i, r, o = Yt(t), s = o.on, a = o.bind, u = o.unbind, c = t.root, l = e.Direction.resolve;
            function d() {
                var t = n.keyboard;
                t && (i = "global" === t ? window : c,
                a(i, rn, v))
            }
            function f() {
                u(i, rn)
            }
            function p() {
                var t = r;
                r = !0,
                g((function() {
                    r = t
                }
                ))
            }
            function v(e) {
                if (!r) {
                    var n = nn(e);
                    n === l(Kt) ? t.go("<") : n === l(Vt) && t.go(">")
                }
            }
            return {
                mount: function() {
                    d(),
                    s(Dt, f),
                    s(Dt, d),
                    s(St, p)
                },
                destroy: f,
                disable: function(t) {
                    r = t
                }
            }
        },
        LazyLoad: function(t, e, n) {
            var i = Yt(t)
              , r = i.on
              , o = i.off
              , s = i.bind
              , a = i.emit
              , u = "sequential" === n.lazyLoad
              , c = [kt, jt]
              , l = [];
            function d() {
                f(l),
                e.Slides.forEach((function(t) {
                    et(t.slide, an).forEach((function(e) {
                        var i = J(e, on)
                          , r = J(e, sn);
                        if (i !== e.src || r !== e.srcset) {
                            var o = n.classes.spinner
                              , s = e.parentElement
                              , a = j(s, "." + o) || H("span", o, s);
                            l.push([e, t, a]),
                            e.src || Y(e, "none")
                        }
                    }
                    ))
                }
                )),
                u ? m() : (o(c),
                r(c, p),
                p())
            }
            function p() {
                (l = l.filter((function(e) {
                    var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
                    return !e[1].isWithin(t.index, i) || g(e)
                }
                ))).length || o(c)
            }
            function g(t) {
                var e = t[0];
                z(t[1].slide, Re),
                s(e, "load error", v(h, t)),
                G(e, "src", J(e, on)),
                G(e, "srcset", J(e, sn)),
                W(e, on),
                W(e, sn)
            }
            function h(t, e) {
                var n = t[0]
                  , i = t[1];
                nt(i.slide, Re),
                "error" !== e.type && (Q(t[2]),
                Y(n, ""),
                a(Wt, n, i),
                a(Nt)),
                u && m()
            }
            function m() {
                l.length && g(l.shift())
            }
            return {
                mount: function() {
                    n.lazyLoad && (d(),
                    r(zt, d))
                },
                destroy: v(f, l),
                check: p
            }
        },
        Pagination: function(t, e, n) {
            var i, r, o = Yt(t), s = o.on, a = o.emit, u = o.bind, c = e.Slides, l = e.Elements, d = e.Controller, g = d.hasFocus, h = d.getIndex, m = d.go, _ = e.Direction.resolve, b = l.pagination, y = [];
            function x() {
                i && (Q(b ? p(i.children) : i),
                nt(i, r),
                f(y),
                i = null),
                o.destroy()
            }
            function w(t) {
                m(">" + t, !0)
            }
            function E(t, e) {
                var n = y.length
                  , i = nn(e)
                  , r = S()
                  , o = -1;
                i === _(Vt, !1, r) ? o = ++t % n : i === _(Kt, !1, r) ? o = (--t + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
                var s = y[o];
                s && (q(s.button),
                m(">" + o),
                $(e, !0))
            }
            function S() {
                return n.paginationDirection || n.direction
            }
            function k(t) {
                return y[d.toPage(t)]
            }
            function C() {
                var t = k(h(!0))
                  , e = k(h());
                if (t) {
                    var n = t.button;
                    nt(n, Te),
                    W(n, ae),
                    G(n, ie, -1)
                }
                if (e) {
                    var r = e.button;
                    z(r, Te),
                    G(r, ae, !0),
                    G(r, ie, "")
                }
                a("pagination:updated", {
                    list: i,
                    items: y
                }, t, e)
            }
            return {
                items: y,
                mount: function e() {
                    x(),
                    s([Dt, zt, Ut], e);
                    var o = n.pagination;
                    b && Y(b, o ? "" : "none"),
                    o && (s([St, Tt, jt], C),
                    function() {
                        var e = t.length
                          , o = n.classes
                          , s = n.i18n
                          , a = n.perPage
                          , f = g() ? d.getEnd() + 1 : dt(e / a);
                        z(i = b || H("ul", o.pagination, l.track.parentElement), r = Ae + "--" + S()),
                        G(i, ne, "tablist"),
                        G(i, ue, s.select),
                        G(i, de, S() === $t ? "vertical" : "");
                        for (var p = 0; p < f; p++) {
                            var h = H("li", null, i)
                              , m = H("button", {
                                class: o.page,
                                type: "button"
                            }, h)
                              , _ = c.getIn(p).map((function(t) {
                                return t.slide.id
                            }
                            ))
                              , x = !g() && a > 1 ? s.pageX : s.slideX;
                            u(m, "click", v(w, p)),
                            n.paginationKeyboard && u(m, "keydown", v(E, p)),
                            G(h, ne, "presentation"),
                            G(m, ne, "tab"),
                            G(m, oe, _.join(" ")),
                            G(m, ue, mt(x, p + 1)),
                            G(m, ie, -1),
                            y.push({
                                li: h,
                                button: m,
                                page: p
                            })
                        }
                    }(),
                    C(),
                    a("pagination:mounted", {
                        list: i,
                        items: y
                    }, k(t.index)))
                },
                destroy: x,
                getAt: k,
                update: C
            }
        },
        Sync: function(t, e, n) {
            var i = n.isNavigation
              , r = n.slideFocus
              , o = [];
            function s() {
                var e, n;
                t.splides.forEach((function(e) {
                    e.isParent || (u(t, e.splide),
                    u(e.splide, t))
                }
                )),
                i && (e = Yt(t),
                (n = e.on)(Ct, l),
                n(Gt, d),
                n([wt, Dt], c),
                o.push(e),
                e.emit(Rt, t.splides))
            }
            function a() {
                o.forEach((function(t) {
                    t.destroy()
                }
                )),
                f(o)
            }
            function u(t, e) {
                var n = Yt(t);
                n.on(St, (function(t, n, i) {
                    e.go(e.is(Je) ? i : t)
                }
                )),
                o.push(n)
            }
            function c() {
                G(e.Elements.list, de, n.direction === $t ? "vertical" : "")
            }
            function l(e) {
                t.go(e.index)
            }
            function d(t, e) {
                L(un, nn(e)) && (l(t),
                $(e))
            }
            return {
                setup: v(e.Media.set, {
                    slideFocus: E(r) ? i : r
                }, !0),
                mount: s,
                destroy: a,
                remount: function() {
                    a(),
                    s()
                }
            }
        },
        Wheel: function(t, e, n) {
            var i = Yt(t).bind
              , r = 0;
            function o(i) {
                if (i.cancelable) {
                    var o = i.deltaY
                      , s = o < 0
                      , a = it(i)
                      , u = n.wheelMinThreshold || 0
                      , l = n.wheelSleep || 0;
                    ft(o) > u && a - r > l && (t.go(s ? "<" : ">"),
                    r = a),
                    function(i) {
                        return !n.releaseWheel || t.state.is(c) || -1 !== e.Controller.getAdjacent(i)
                    }(s) && $(i)
                }
            }
            return {
                mount: function() {
                    n.wheel && i(e.Elements.track, "wheel", o, tn)
                }
            }
        },
        Live: function(t, e, n) {
            var i = Yt(t).on
              , r = e.Elements.track
              , o = n.live && !n.isNavigation
              , s = H("span", Ne)
              , a = qt(90, v(u, !1));
            function u(t) {
                G(r, ve, t),
                t ? (D(r, s),
                a.start()) : (Q(s),
                a.cancel())
            }
            function c(t) {
                o && G(r, pe, t ? "off" : "polite")
            }
            return {
                mount: function() {
                    o && (c(!e.Autoplay.isPaused()),
                    G(r, ge, !0),
                    s.textContent = "…",
                    i(Xt, v(c, !0)),
                    i(Bt, v(c, !1)),
                    i([kt, jt], v(u, !0)))
                },
                disable: c,
                destroy: function() {
                    W(r, [pe, ge, ve]),
                    Q(s)
                }
            }
        }
    })
      , ln = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: Ge,
        i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s"
        },
        reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: "pause"
        }
    };
    function dn(t, e, n) {
        var i = e.Slides;
        function r() {
            i.forEach((function(t) {
                t.style("transform", "translateX(-" + 100 * t.index + "%)")
            }
            ))
        }
        return {
            mount: function() {
                Yt(t).on([wt, zt], r)
            },
            start: function(t, e) {
                i.style("transition", "opacity " + n.speed + "ms " + n.easing),
                g(e)
            },
            cancel: h
        }
    }
    function fn(t, e, n) {
        var i, r = e.Move, o = e.Controller, s = e.Scroll, a = e.Elements.list, u = v(U, a, "transition");
        function c() {
            u(""),
            s.cancel()
        }
        return {
            mount: function() {
                Yt(t).bind(a, "transitionend", (function(t) {
                    t.target === a && i && (c(),
                    i())
                }
                ))
            },
            start: function(e, a) {
                var c = r.toPosition(e, !0)
                  , l = r.getPosition()
                  , d = function(e) {
                    var i = n.rewindSpeed;
                    if (t.is(qe) && i) {
                        var r = o.getIndex(!0)
                          , s = o.getEnd();
                        if (0 === r && e >= s || r >= s && 0 === e)
                            return i
                    }
                    return n.speed
                }(e);
                ft(c - l) >= 1 && d >= 1 ? n.useScroll ? s.scroll(c, d, !1, a) : (u("transform " + d + "ms " + n.easing),
                r.translate(c, !0),
                i = a) : (r.jump(e),
                a())
            },
            cancel: c
        }
    }
    var pn = function() {
        function t(e, n) {
            var i;
            this.event = Yt(),
            this.Components = {},
            this.state = (i = 1,
            {
                set: function(t) {
                    i = t
                },
                is: function(t) {
                    return L(C(t), i)
                }
            }),
            this.splides = [],
            this._o = {},
            this._E = {};
            var r = w(e) ? tt(document, e) : e;
            at(r, r + " is invalid."),
            this.root = r,
            n = X({
                label: J(r, ue) || "",
                labelledby: J(r, ce) || ""
            }, ln, t.defaults, n || {});
            try {
                X(n, JSON.parse(J(r, st)))
            } catch (t) {
                at(!1, "Invalid JSON")
            }
            this._o = Object.create(X({}, n))
        }
        var e, n, i, r = t.prototype;
        return r.mount = function(t, e) {
            var n = this
              , i = this.state
              , r = this.Components;
            return at(i.is([1, 7]), "Already mounted!"),
            i.set(1),
            this._C = r,
            this._T = e || this._T || (this.is(Ke) ? dn : fn),
            this._E = t || this._E,
            F(R({}, cn, this._E, {
                Transition: this._T
            }), (function(t, e) {
                var i = t(n, r, n._o);
                r[e] = i,
                i.setup && i.setup()
            }
            )),
            F(r, (function(t) {
                t.mount && t.mount()
            }
            )),
            this.emit(wt),
            z(this.root, Oe),
            i.set(3),
            this.emit(Et),
            this
        }
        ,
        r.sync = function(t) {
            return this.splides.push({
                splide: t
            }),
            t.splides.push({
                splide: this,
                isParent: !0
            }),
            this.state.is(3) && (this._C.Sync.remount(),
            t.Components.Sync.remount()),
            this
        }
        ,
        r.go = function(t) {
            return this._C.Controller.go(t),
            this
        }
        ,
        r.on = function(t, e) {
            return this.event.on(t, e),
            this
        }
        ,
        r.off = function(t) {
            return this.event.off(t),
            this
        }
        ,
        r.emit = function(t) {
            var e;
            return (e = this.event).emit.apply(e, [t].concat(p(arguments, 1))),
            this
        }
        ,
        r.add = function(t, e) {
            return this._C.Slides.add(t, e),
            this
        }
        ,
        r.remove = function(t) {
            return this._C.Slides.remove(t),
            this
        }
        ,
        r.is = function(t) {
            return this._o.type === t
        }
        ,
        r.refresh = function() {
            return this.emit(zt),
            this
        }
        ,
        r.destroy = function(t) {
            void 0 === t && (t = !0);
            var e = this.event
              , n = this.state;
            return n.is(1) ? Yt(this).on(Et, this.destroy.bind(this, t)) : (F(this._C, (function(e) {
                e.destroy && e.destroy(t)
            }
            ), !0),
            e.emit(It),
            e.destroy(),
            t && f(this.splides),
            n.set(7)),
            this
        }
        ,
        e = t,
        n = [{
            key: "options",
            get: function() {
                return this._o
            },
            set: function(t) {
                this._C.Media.set(t, !0, !0)
            }
        }, {
            key: "length",
            get: function() {
                return this._C.Slides.getLength(!0)
            }
        }, {
            key: "index",
            get: function() {
                return this._C.Controller.getIndex()
            }
        }],
        n && a(e.prototype, n),
        i && a(e, i),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t
    }()
      , vn = pn;
    vn.defaults = {},
    vn.STATES = d;
    new vn(".services-slider",{
        type: "loop",
        autoplay: !0,
        perPage: 5.5,
        perMove: 1,
        interval: 2e3,
        gap: "1rem",
        drag: !0,
        speed: 1e3,
        pagination: !0,
        arrows: !1,
        focus: "center",
        breakpoints: {
            991: {
                perPage: 4
            },
            767: {
                perPage: 2
            },
            575: {
                perPage: 1,
                width: "100%",
                padding: "10px"
            }
        }
    }).mount()
}
)();
