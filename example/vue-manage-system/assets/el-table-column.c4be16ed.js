import {
    bC as dt,
    bT as Wl,
    bU as Tt,
    bV as Ml,
    bH as _e,
    bW as Fl,
    bX as Hl,
    aL as Te,
    b4 as Al,
    ae as Tl,
    v as fe,
    aO as $t,
    aK as yt,
    b0 as $l,
    bF as bt,
    O as Ct,
    Q as x,
    V as le,
    f as J,
    c as P,
    S as he,
    U as kl,
    u as pe,
    Y as Le,
    bY as Pl,
    al as $e,
    d as Me,
    bp as kt,
    E as ct,
    br as Bl,
    bq as Kl,
    bu as zl,
    a9 as Pt,
    _ as Bt,
    s as ue,
    bO as Kt,
    o as G,
    j as Ne,
    w as Ce,
    a as de,
    e as oe,
    n as I,
    F as Qe,
    x as wt,
    P as zt,
    t as Re,
    a3 as Ke,
    bZ as Dt,
    R as Pe,
    b5 as Dl,
    b_ as ft,
    M as ye,
    b$ as Xe,
    aN as Vl,
    bs as ze,
    c0 as ke,
    h as A,
    W as Fe,
    aY as St,
    aZ as Et,
    a6 as Il,
    a5 as jl,
    N as Yl,
    p as Xl,
    r as De,
    g as xe,
    l as be,
    aq as xt,
    b7 as ql,
    aD as Vt,
    by as Ul,
    c1 as Gl,
    aM as _l,
    X as Ql,
    K as Zl,
    m as Jl,
    q as en,
} from './index.4bf84d35.js';
import { b as tn } from './flatRest.f88cd71e.js';
import { a as ln, i as nn, b as on } from './el-tag.a8af73f1.js';
import {
    i as ht,
    k as sn,
    c as rn,
    a as It,
    b as an,
    d as un,
    e as dn,
    f as cn,
    g as fn,
    h as Rt,
    j as hn,
    S as pn,
} from './initCloneObject.a6314c21.js';
import { d as qe } from './debounce.632c06d2.js';
import { E as Oe } from './el-checkbox.18197270.js';
import { i as vn } from './isPlainObject.9fc5cd37.js';
import { r as gn } from './raf.70a8995c.js';
function mn(e, t, l) {
    if (!dt(l)) return !1;
    var n = typeof t;
    return (n == 'number' ? ht(l) && Wl(t, l.length) : n == 'string' && t in l) ? Tt(l[t], e) : !1;
}
function yn(e) {
    return ln(function (t, l) {
        var n = -1,
            r = l.length,
            a = r > 1 ? l[r - 1] : void 0,
            i = r > 2 ? l[2] : void 0;
        for (
            a = e.length > 3 && typeof a == 'function' ? (r--, a) : void 0,
                i && mn(l[0], l[1], i) && ((a = r < 3 ? void 0 : a), (r = 1)),
                t = Object(t);
            ++n < r;

        ) {
            var o = l[n];
            o && e(t, o, n, a);
        }
        return t;
    });
}
function bn(e) {
    return function (t, l, n) {
        for (var r = -1, a = Object(t), i = n(t), o = i.length; o--; ) {
            var s = i[e ? o : ++r];
            if (l(a[s], s, a) === !1) break;
        }
        return t;
    };
}
var Cn = bn();
const jt = Cn;
function wn(e, t) {
    return e && jt(e, t, sn);
}
function Sn(e, t) {
    return function (l, n) {
        if (l == null) return l;
        if (!ht(l)) return e(l, n);
        for (var r = l.length, a = t ? r : -1, i = Object(l); (t ? a-- : ++a < r) && n(i[a], a, i) !== !1; );
        return l;
    };
}
var En = Sn(wn);
const xn = En;
function Ze(e, t, l) {
    ((l !== void 0 && !Tt(e[t], l)) || (l === void 0 && !(t in e))) && Ml(e, t, l);
}
function Je(e, t) {
    if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__') return e[t];
}
function Rn(e) {
    return rn(e, It(e));
}
function Nn(e, t, l, n, r, a, i) {
    var o = Je(e, l),
        s = Je(t, l),
        u = i.get(s);
    if (u) {
        Ze(e, l, u);
        return;
    }
    var d = a ? a(o, s, l + '', e, t, i) : void 0,
        f = d === void 0;
    if (f) {
        var v = _e(s),
            E = !v && an(s),
            h = !v && !E && un(s);
        (d = s),
            v || E || h
                ? _e(o)
                    ? (d = o)
                    : nn(o)
                    ? (d = dn(o))
                    : E
                    ? ((f = !1), (d = cn(s, !0)))
                    : h
                    ? ((f = !1), (d = fn(s, !0)))
                    : (d = [])
                : vn(s) || Rt(s)
                ? ((d = o), Rt(o) ? (d = Rn(o)) : (!dt(o) || Fl(o)) && (d = hn(s)))
                : (f = !1);
    }
    f && (i.set(s, d), r(d, s, n, a, i), i.delete(s)), Ze(e, l, d);
}
function Yt(e, t, l, n, r) {
    e !== t &&
        jt(
            t,
            function (a, i) {
                if ((r || (r = new pn()), dt(a))) Nn(e, t, i, l, Yt, n, r);
                else {
                    var o = n ? n(Je(e, i), a, i + '', e, t, r) : void 0;
                    o === void 0 && (o = a), Ze(e, i, o);
                }
            },
            It
        );
}
function Ln(e, t) {
    var l = -1,
        n = ht(e) ? Array(e.length) : [];
    return (
        xn(e, function (r, a, i) {
            n[++l] = t(r, a, i);
        }),
        n
    );
}
function On(e, t) {
    var l = _e(e) ? Hl : Ln;
    return l(e, on(t));
}
function Wn(e, t) {
    return tn(On(e, t), 1);
}
var Mn = yn(function (e, t, l) {
    Yt(e, t, l);
});
const Fn = Mn;
var Nt = !1,
    we,
    et,
    tt,
    Ve,
    Ie,
    Xt,
    je,
    lt,
    nt,
    ot,
    qt,
    st,
    rt,
    Ut,
    Gt;
function te() {
    if (!Nt) {
        Nt = !0;
        var e = navigator.userAgent,
            t =
                /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                    e
                ),
            l = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
        if (
            ((st = /\b(iPhone|iP[ao]d)/.exec(e)),
            (rt = /\b(iP[ao]d)/.exec(e)),
            (ot = /Android/i.exec(e)),
            (Ut = /FBAN\/\w+;/i.exec(e)),
            (Gt = /Mobile/i.exec(e)),
            (qt = !!/Win64/.exec(e)),
            t)
        ) {
            (we = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN),
                we && document && document.documentMode && (we = document.documentMode);
            var n = /(?:Trident\/(\d+.\d+))/.exec(e);
            (Xt = n ? parseFloat(n[1]) + 4 : we),
                (et = t[2] ? parseFloat(t[2]) : NaN),
                (tt = t[3] ? parseFloat(t[3]) : NaN),
                (Ve = t[4] ? parseFloat(t[4]) : NaN),
                Ve ? ((t = /(?:Chrome\/(\d+\.\d+))/.exec(e)), (Ie = t && t[1] ? parseFloat(t[1]) : NaN)) : (Ie = NaN);
        } else we = et = tt = Ie = Ve = NaN;
        if (l) {
            if (l[1]) {
                var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                je = r ? parseFloat(r[1].replace('_', '.')) : !0;
            } else je = !1;
            (lt = !!l[2]), (nt = !!l[3]);
        } else je = lt = nt = !1;
    }
}
var at = {
        ie: function () {
            return te() || we;
        },
        ieCompatibilityMode: function () {
            return te() || Xt > we;
        },
        ie64: function () {
            return at.ie() && qt;
        },
        firefox: function () {
            return te() || et;
        },
        opera: function () {
            return te() || tt;
        },
        webkit: function () {
            return te() || Ve;
        },
        safari: function () {
            return at.webkit();
        },
        chrome: function () {
            return te() || Ie;
        },
        windows: function () {
            return te() || lt;
        },
        osx: function () {
            return te() || je;
        },
        linux: function () {
            return te() || nt;
        },
        iphone: function () {
            return te() || st;
        },
        mobile: function () {
            return te() || st || rt || ot || Gt;
        },
        nativeApp: function () {
            return te() || Ut;
        },
        android: function () {
            return te() || ot;
        },
        ipad: function () {
            return te() || rt;
        },
    },
    Hn = at,
    Be = !!(typeof window < 'u' && window.document && window.document.createElement),
    An = {
        canUseDOM: Be,
        canUseWorkers: typeof Worker < 'u',
        canUseEventListeners: Be && !!(window.addEventListener || window.attachEvent),
        canUseViewport: Be && !!window.screen,
        isInWorker: !Be,
    },
    _t = An,
    Qt;
_t.canUseDOM &&
    (Qt =
        document.implementation &&
        document.implementation.hasFeature &&
        document.implementation.hasFeature('', '') !== !0);
function Tn(e, t) {
    if (!_t.canUseDOM || (t && !('addEventListener' in document))) return !1;
    var l = 'on' + e,
        n = l in document;
    if (!n) {
        var r = document.createElement('div');
        r.setAttribute(l, 'return;'), (n = typeof r[l] == 'function');
    }
    return !n && Qt && e === 'wheel' && (n = document.implementation.hasFeature('Events.wheel', '3.0')), n;
}
var $n = Tn,
    Lt = 10,
    Ot = 40,
    Wt = 800;
function Zt(e) {
    var t = 0,
        l = 0,
        n = 0,
        r = 0;
    return (
        'detail' in e && (l = e.detail),
        'wheelDelta' in e && (l = -e.wheelDelta / 120),
        'wheelDeltaY' in e && (l = -e.wheelDeltaY / 120),
        'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
        'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = l), (l = 0)),
        (n = t * Lt),
        (r = l * Lt),
        'deltaY' in e && (r = e.deltaY),
        'deltaX' in e && (n = e.deltaX),
        (n || r) && e.deltaMode && (e.deltaMode == 1 ? ((n *= Ot), (r *= Ot)) : ((n *= Wt), (r *= Wt))),
        n && !t && (t = n < 1 ? -1 : 1),
        r && !l && (l = r < 1 ? -1 : 1),
        { spinX: t, spinY: l, pixelX: n, pixelY: r }
    );
}
Zt.getEventType = function () {
    return Hn.firefox() ? 'DOMMouseScroll' : $n('wheel') ? 'wheel' : 'mousewheel';
};
var kn = Zt;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Pn = function (e, t) {
        if (e && e.addEventListener) {
            const l = function (n) {
                const r = kn(n);
                t && Reflect.apply(t, this, [n, r]);
            };
            e.addEventListener('wheel', l, { passive: !0 });
        }
    },
    Bn = {
        beforeMount(e, t) {
            Pn(e, t.value);
        },
    },
    Ge = function (e) {
        var t;
        return (t = e.target) == null ? void 0 : t.closest('td');
    },
    Kn = function (e, t, l, n, r) {
        if (!t && !n && (!r || (Array.isArray(r) && !r.length))) return e;
        typeof l == 'string' ? (l = l === 'descending' ? -1 : 1) : (l = l && l < 0 ? -1 : 1);
        const a = n
                ? null
                : function (o, s) {
                      return r
                          ? (Array.isArray(r) || (r = [r]),
                            r.map((u) => (typeof u == 'string' ? bt(o, u) : u(o, s, e))))
                          : (t !== '$key' && Ct(o) && '$value' in o && (o = o.$value), [Ct(o) ? bt(o, t) : o]);
                  },
            i = function (o, s) {
                if (n) return n(o.value, s.value);
                for (let u = 0, d = o.key.length; u < d; u++) {
                    if (o.key[u] < s.key[u]) return -1;
                    if (o.key[u] > s.key[u]) return 1;
                }
                return 0;
            };
        return e
            .map((o, s) => ({ value: o, index: s, key: a ? a(o, s) : null }))
            .sort((o, s) => {
                let u = i(o, s);
                return u || (u = o.index - s.index), u * +l;
            })
            .map((o) => o.value);
    },
    Jt = function (e, t) {
        let l = null;
        return (
            e.columns.forEach((n) => {
                n.id === t && (l = n);
            }),
            l
        );
    },
    zn = function (e, t) {
        let l = null;
        for (let n = 0; n < e.columns.length; n++) {
            const r = e.columns[n];
            if (r.columnKey === t) {
                l = r;
                break;
            }
        }
        return l || Al('ElTable', `No column matching with column-key: ${t}`), l;
    },
    Mt = function (e, t, l) {
        const n = (t.className || '').match(new RegExp(`${l}-table_[^\\s]+`, 'gm'));
        return n ? Jt(e, n[0]) : null;
    },
    _ = (e, t) => {
        if (!e) throw new Error('Row is required when get row identity');
        if (typeof t == 'string') {
            if (!t.includes('.')) return `${e[t]}`;
            const l = t.split('.');
            let n = e;
            for (const r of l) n = n[r];
            return `${n}`;
        } else if (typeof t == 'function') return t.call(null, e);
    },
    Se = function (e, t) {
        const l = {};
        return (
            (e || []).forEach((n, r) => {
                l[_(n, t)] = { row: n, index: r };
            }),
            l
        );
    };
function Dn(e, t) {
    const l = {};
    let n;
    for (n in e) l[n] = e[n];
    for (n in t)
        if (Te(t, n)) {
            const r = t[n];
            typeof r < 'u' && (l[n] = r);
        }
    return l;
}
function pt(e) {
    return e === '' || (e !== void 0 && ((e = Number.parseInt(e, 10)), Number.isNaN(e) && (e = ''))), e;
}
function el(e) {
    return e === '' || (e !== void 0 && ((e = pt(e)), Number.isNaN(e) && (e = 80))), e;
}
function Vn(e) {
    return typeof e == 'number'
        ? e
        : typeof e == 'string'
        ? /^\d+(?:px)?$/.test(e)
            ? Number.parseInt(e, 10)
            : e
        : null;
}
function In(...e) {
    return e.length === 0
        ? (t) => t
        : e.length === 1
        ? e[0]
        : e.reduce(
              (t, l) =>
                  (...n) =>
                      t(l(...n))
          );
}
function He(e, t, l) {
    let n = !1;
    const r = e.indexOf(t),
        a = r !== -1,
        i = (o) => {
            o === 'add' ? e.push(t) : e.splice(r, 1),
                (n = !0),
                $l(t.children) &&
                    t.children.forEach((s) => {
                        He(e, s, l != null ? l : !a);
                    });
        };
    return Tl(l) ? (l && !a ? i('add') : !l && a && i('remove')) : i(a ? 'remove' : 'add'), n;
}
function jn(e, t, l = 'children', n = 'hasChildren') {
    const r = (i) => !(Array.isArray(i) && i.length);
    function a(i, o, s) {
        t(i, o, s),
            o.forEach((u) => {
                if (u[n]) {
                    t(u, null, s + 1);
                    return;
                }
                const d = u[l];
                r(d) || a(u, d, s + 1);
            });
    }
    e.forEach((i) => {
        if (i[n]) {
            t(i, null, 0);
            return;
        }
        const o = i[l];
        r(o) || a(i, o, 0);
    });
}
let ie = null;
function Yn(e, t, l, n) {
    if ((ie == null ? void 0 : ie.trigger) === l) return;
    ie == null || ie();
    const r = n == null ? void 0 : n.refs.tableWrapper,
        a = r == null ? void 0 : r.dataset.prefix,
        i = { strategy: 'fixed', ...e.popperOptions },
        o = fe($t, {
            content: t,
            virtualTriggering: !0,
            virtualRef: l,
            appendTo: r,
            placement: 'top',
            transition: 'none',
            offset: 0,
            hideAfter: 0,
            ...e,
            popperOptions: i,
            onHide: () => {
                ie == null || ie();
            },
        });
    o.appContext = { ...n.appContext, ...n };
    const s = document.createElement('div');
    yt(o, s), o.component.exposed.onOpen();
    const u = r == null ? void 0 : r.querySelector(`.${a}-scrollbar__wrap`);
    (ie = () => {
        yt(null, s), u == null || u.removeEventListener('scroll', ie), (ie = null);
    }),
        (ie.trigger = l),
        u == null || u.addEventListener('scroll', ie);
}
function tl(e) {
    return e.children ? Wn(e.children, tl) : [e];
}
function Ft(e, t) {
    return e + t.colSpan;
}
const ll = (e, t, l, n) => {
        let r = 0,
            a = e;
        const i = l.states.columns.value;
        if (n) {
            const s = tl(n[e]);
            (r = i.slice(0, i.indexOf(s[0])).reduce(Ft, 0)), (a = r + s.reduce(Ft, 0) - 1);
        } else r = e;
        let o;
        switch (t) {
            case 'left':
                a < l.states.fixedLeafColumnsLength.value && (o = 'left');
                break;
            case 'right':
                r >= i.length - l.states.rightFixedLeafColumnsLength.value && (o = 'right');
                break;
            default:
                a < l.states.fixedLeafColumnsLength.value
                    ? (o = 'left')
                    : r >= i.length - l.states.rightFixedLeafColumnsLength.value && (o = 'right');
        }
        return o ? { direction: o, start: r, after: a } : {};
    },
    vt = (e, t, l, n, r, a = 0) => {
        const i = [],
            { direction: o, start: s, after: u } = ll(t, l, n, r);
        if (o) {
            const d = o === 'left';
            i.push(`${e}-fixed-column--${o}`),
                d && u + a === n.states.fixedLeafColumnsLength.value - 1
                    ? i.push('is-last-column')
                    : !d &&
                      s - a === n.states.columns.value.length - n.states.rightFixedLeafColumnsLength.value &&
                      i.push('is-first-column');
        }
        return i;
    };
function Ht(e, t) {
    return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const gt = (e, t, l, n) => {
        const { direction: r, start: a = 0, after: i = 0 } = ll(e, t, l, n);
        if (!r) return;
        const o = {},
            s = r === 'left',
            u = l.states.columns.value;
        return (
            s
                ? (o.left = u.slice(0, a).reduce(Ht, 0))
                : (o.right = u
                      .slice(i + 1)
                      .reverse()
                      .reduce(Ht, 0)),
            o
        );
    },
    We = (e, t) => {
        !e || Number.isNaN(e[t]) || (e[t] = `${e[t]}px`);
    };
function Xn(e) {
    const t = le(),
        l = x(!1),
        n = x([]);
    return {
        updateExpandRows: () => {
            const s = e.data.value || [],
                u = e.rowKey.value;
            if (l.value) n.value = s.slice();
            else if (u) {
                const d = Se(n.value, u);
                n.value = s.reduce((f, v) => {
                    const E = _(v, u);
                    return d[E] && f.push(v), f;
                }, []);
            } else n.value = [];
        },
        toggleRowExpansion: (s, u) => {
            He(n.value, s, u) && t.emit('expand-change', s, n.value.slice());
        },
        setExpandRowKeys: (s) => {
            t.store.assertRowKey();
            const u = e.data.value || [],
                d = e.rowKey.value,
                f = Se(u, d);
            n.value = s.reduce((v, E) => {
                const h = f[E];
                return h && v.push(h.row), v;
            }, []);
        },
        isRowExpanded: (s) => {
            const u = e.rowKey.value;
            return u ? !!Se(n.value, u)[_(s, u)] : n.value.includes(s);
        },
        states: { expandRows: n, defaultExpandAll: l },
    };
}
function qn(e) {
    const t = le(),
        l = x(null),
        n = x(null),
        r = (u) => {
            t.store.assertRowKey(), (l.value = u), i(u);
        },
        a = () => {
            l.value = null;
        },
        i = (u) => {
            const { data: d, rowKey: f } = e;
            let v = null;
            f.value && (v = (J(d) || []).find((E) => _(E, f.value) === u)),
                (n.value = v),
                t.emit('current-change', n.value, null);
        };
    return {
        setCurrentRowKey: r,
        restoreCurrentRowKey: a,
        setCurrentRowByKey: i,
        updateCurrentRow: (u) => {
            const d = n.value;
            if (u && u !== d) {
                (n.value = u), t.emit('current-change', n.value, d);
                return;
            }
            !u && d && ((n.value = null), t.emit('current-change', null, d));
        },
        updateCurrentRowData: () => {
            const u = e.rowKey.value,
                d = e.data.value || [],
                f = n.value;
            if (!d.includes(f) && f) {
                if (u) {
                    const v = _(f, u);
                    i(v);
                } else n.value = null;
                n.value === null && t.emit('current-change', null, f);
            } else l.value && (i(l.value), a());
        },
        states: { _currentRowKey: l, currentRow: n },
    };
}
function Un(e) {
    const t = x([]),
        l = x({}),
        n = x(16),
        r = x(!1),
        a = x({}),
        i = x('hasChildren'),
        o = x('children'),
        s = le(),
        u = P(() => {
            if (!e.rowKey.value) return {};
            const b = e.data.value || [];
            return f(b);
        }),
        d = P(() => {
            const b = e.rowKey.value,
                g = Object.keys(a.value),
                m = {};
            return (
                g.length &&
                    g.forEach((c) => {
                        if (a.value[c].length) {
                            const p = { children: [] };
                            a.value[c].forEach((R) => {
                                const S = _(R, b);
                                p.children.push(S), R[i.value] && !m[S] && (m[S] = { children: [] });
                            }),
                                (m[c] = p);
                        }
                    }),
                m
            );
        }),
        f = (b) => {
            const g = e.rowKey.value,
                m = {};
            return (
                jn(
                    b,
                    (c, p, R) => {
                        const S = _(c, g);
                        Array.isArray(p)
                            ? (m[S] = { children: p.map((N) => _(N, g)), level: R })
                            : r.value && (m[S] = { children: [], lazy: !0, level: R });
                    },
                    o.value,
                    i.value
                ),
                m
            );
        },
        v = (b = !1, g = ((m) => ((m = s.store) == null ? void 0 : m.states.defaultExpandAll.value))()) => {
            var m;
            const c = u.value,
                p = d.value,
                R = Object.keys(c),
                S = {};
            if (R.length) {
                const N = J(l),
                    W = [],
                    K = (M, B) => {
                        if (b) return t.value ? g || t.value.includes(B) : !!(g || (M == null ? void 0 : M.expanded));
                        {
                            const D = g || (t.value && t.value.includes(B));
                            return !!((M == null ? void 0 : M.expanded) || D);
                        }
                    };
                R.forEach((M) => {
                    const B = N[M],
                        D = { ...c[M] };
                    if (((D.expanded = K(B, M)), D.lazy)) {
                        const { loaded: X = !1, loading: q = !1 } = B || {};
                        (D.loaded = !!X), (D.loading = !!q), W.push(M);
                    }
                    S[M] = D;
                });
                const k = Object.keys(p);
                r.value &&
                    k.length &&
                    W.length &&
                    k.forEach((M) => {
                        const B = N[M],
                            D = p[M].children;
                        if (W.includes(M)) {
                            if (S[M].children.length !== 0)
                                throw new Error('[ElTable]children must be an empty array.');
                            S[M].children = D;
                        } else {
                            const { loaded: X = !1, loading: q = !1 } = B || {};
                            S[M] = { lazy: !0, loaded: !!X, loading: !!q, expanded: K(B, M), children: D, level: '' };
                        }
                    });
            }
            (l.value = S), (m = s.store) == null || m.updateTableScrollY();
        };
    he(
        () => t.value,
        () => {
            v(!0);
        }
    ),
        he(
            () => u.value,
            () => {
                v();
            }
        ),
        he(
            () => d.value,
            () => {
                v();
            }
        );
    const E = (b) => {
            (t.value = b), v();
        },
        h = (b, g) => {
            s.store.assertRowKey();
            const m = e.rowKey.value,
                c = _(b, m),
                p = c && l.value[c];
            if (c && p && 'expanded' in p) {
                const R = p.expanded;
                (g = typeof g > 'u' ? !p.expanded : g),
                    (l.value[c].expanded = g),
                    R !== g && s.emit('expand-change', b, g),
                    s.store.updateTableScrollY();
            }
        },
        w = (b) => {
            s.store.assertRowKey();
            const g = e.rowKey.value,
                m = _(b, g),
                c = l.value[m];
            r.value && c && 'loaded' in c && !c.loaded ? y(b, m, c) : h(b, void 0);
        },
        y = (b, g, m) => {
            const { load: c } = s.props;
            c &&
                !l.value[g].loaded &&
                ((l.value[g].loading = !0),
                c(b, m, (p) => {
                    if (!Array.isArray(p)) throw new TypeError('[ElTable] data must be an array');
                    (l.value[g].loading = !1),
                        (l.value[g].loaded = !0),
                        (l.value[g].expanded = !0),
                        p.length && (a.value[g] = p),
                        s.emit('expand-change', b, !0);
                }));
        };
    return {
        loadData: y,
        loadOrToggle: w,
        toggleTreeExpansion: h,
        updateTreeExpandKeys: E,
        updateTreeData: v,
        normalize: f,
        states: {
            expandRowKeys: t,
            treeData: l,
            indent: n,
            lazy: r,
            lazyTreeNodeMap: a,
            lazyColumnIdentifier: i,
            childrenColumnName: o,
        },
    };
}
const Gn = (e, t) => {
        const l = t.sortingColumn;
        return !l || typeof l.sortable == 'string' ? e : Kn(e, t.sortProp, t.sortOrder, l.sortMethod, l.sortBy);
    },
    Ye = (e) => {
        const t = [];
        return (
            e.forEach((l) => {
                l.children && l.children.length > 0 ? t.push.apply(t, Ye(l.children)) : t.push(l);
            }),
            t
        );
    };
function _n() {
    var e;
    const t = le(),
        { size: l } = kl((e = t.proxy) == null ? void 0 : e.$props),
        n = x(null),
        r = x([]),
        a = x([]),
        i = x(!1),
        o = x([]),
        s = x([]),
        u = x([]),
        d = x([]),
        f = x([]),
        v = x([]),
        E = x([]),
        h = x([]),
        w = [],
        y = x(0),
        b = x(0),
        g = x(0),
        m = x(!1),
        c = x([]),
        p = x(!1),
        R = x(!1),
        S = x(null),
        N = x({}),
        W = x(null),
        K = x(null),
        k = x(null),
        M = x(null),
        B = x(null);
    he(r, () => t.state && se(!1), { deep: !0 });
    const D = () => {
            if (!n.value) throw new Error('[ElTable] prop row-key is required');
        },
        X = (O) => {
            var F;
            (F = O.children) == null ||
                F.forEach((T) => {
                    (T.fixed = O.fixed), X(T);
                });
        },
        q = () => {
            o.value.forEach((z) => {
                X(z);
            }),
                (d.value = o.value.filter((z) => z.fixed === !0 || z.fixed === 'left')),
                (f.value = o.value.filter((z) => z.fixed === 'right')),
                d.value.length > 0 &&
                    o.value[0] &&
                    o.value[0].type === 'selection' &&
                    !o.value[0].fixed &&
                    ((o.value[0].fixed = !0), d.value.unshift(o.value[0]));
            const O = o.value.filter((z) => !z.fixed);
            s.value = [].concat(d.value).concat(O).concat(f.value);
            const F = Ye(O),
                T = Ye(d.value),
                H = Ye(f.value);
            (y.value = F.length),
                (b.value = T.length),
                (g.value = H.length),
                (u.value = [].concat(T).concat(F).concat(H)),
                (i.value = d.value.length > 0 || f.value.length > 0);
        },
        se = (O, F = !1) => {
            O && q(), F ? t.state.doLayout() : t.state.debouncedUpdateLayout();
        },
        U = (O) => c.value.includes(O),
        C = () => {
            (m.value = !1), c.value.length && ((c.value = []), t.emit('selection-change', []));
        },
        L = () => {
            let O;
            if (n.value) {
                O = [];
                const F = Se(c.value, n.value),
                    T = Se(r.value, n.value);
                for (const H in F) Te(F, H) && !T[H] && O.push(F[H].row);
            } else O = c.value.filter((F) => !r.value.includes(F));
            if (O.length) {
                const F = c.value.filter((T) => !O.includes(T));
                (c.value = F), t.emit('selection-change', F.slice());
            }
        },
        $ = () => (c.value || []).slice(),
        V = (O, F = void 0, T = !0) => {
            if (He(c.value, O, F)) {
                const z = (c.value || []).slice();
                T && t.emit('select', z, O), t.emit('selection-change', z);
            }
        },
        j = () => {
            var O, F;
            const T = R.value ? !m.value : !(m.value || c.value.length);
            m.value = T;
            let H = !1,
                z = 0;
            const Q =
                (F = (O = t == null ? void 0 : t.store) == null ? void 0 : O.states) == null ? void 0 : F.rowKey.value;
            r.value.forEach((ae, Ee) => {
                const me = Ee + z;
                S.value ? S.value.call(null, ae, me) && He(c.value, ae, T) && (H = !0) : He(c.value, ae, T) && (H = !0),
                    (z += Z(_(ae, Q)));
            }),
                H && t.emit('selection-change', c.value ? c.value.slice() : []),
                t.emit('select-all', c.value);
        },
        Y = () => {
            const O = Se(c.value, n.value);
            r.value.forEach((F) => {
                const T = _(F, n.value),
                    H = O[T];
                H && (c.value[H.index] = F);
            });
        },
        ne = () => {
            var O, F, T;
            if (((O = r.value) == null ? void 0 : O.length) === 0) {
                m.value = !1;
                return;
            }
            let H;
            n.value && (H = Se(c.value, n.value));
            const z = function (me) {
                return H ? !!H[_(me, n.value)] : c.value.includes(me);
            };
            let Q = !0,
                ae = 0,
                Ee = 0;
            for (let me = 0, Rl = (r.value || []).length; me < Rl; me++) {
                const Nl =
                        (T = (F = t == null ? void 0 : t.store) == null ? void 0 : F.states) == null
                            ? void 0
                            : T.rowKey.value,
                    Ll = me + Ee,
                    Ue = r.value[me],
                    Ol = S.value && S.value.call(null, Ue, Ll);
                if (z(Ue)) ae++;
                else if (!S.value || Ol) {
                    Q = !1;
                    break;
                }
                Ee += Z(_(Ue, Nl));
            }
            ae === 0 && (Q = !1), (m.value = Q);
        },
        Z = (O) => {
            var F;
            if (!t || !t.store) return 0;
            const { treeData: T } = t.store.states;
            let H = 0;
            const z = (F = T.value[O]) == null ? void 0 : F.children;
            return (
                z &&
                    ((H += z.length),
                    z.forEach((Q) => {
                        H += Z(Q);
                    })),
                H
            );
        },
        ge = (O, F) => {
            Array.isArray(O) || (O = [O]);
            const T = {};
            return (
                O.forEach((H) => {
                    (N.value[H.id] = F), (T[H.columnKey || H.id] = F);
                }),
                T
            );
        },
        ee = (O, F, T) => {
            K.value && K.value !== O && (K.value.order = null), (K.value = O), (k.value = F), (M.value = T);
        },
        re = () => {
            let O = J(a);
            Object.keys(N.value).forEach((F) => {
                const T = N.value[F];
                if (!T || T.length === 0) return;
                const H = Jt({ columns: u.value }, F);
                H && H.filterMethod && (O = O.filter((z) => T.some((Q) => H.filterMethod.call(null, Q, z, H))));
            }),
                (W.value = O);
        },
        ce = () => {
            r.value = Gn(W.value, { sortingColumn: K.value, sortProp: k.value, sortOrder: M.value });
        },
        ul = (O = void 0) => {
            (O && O.filter) || re(), ce();
        },
        dl = (O) => {
            const { tableHeaderRef: F } = t.refs;
            if (!F) return;
            const T = Object.assign({}, F.filterPanels),
                H = Object.keys(T);
            if (!!H.length)
                if ((typeof O == 'string' && (O = [O]), Array.isArray(O))) {
                    const z = O.map((Q) => zn({ columns: u.value }, Q));
                    H.forEach((Q) => {
                        const ae = z.find((Ee) => Ee.id === Q);
                        ae && (ae.filteredValue = []);
                    }),
                        t.store.commit('filterChange', { column: z, values: [], silent: !0, multi: !0 });
                } else
                    H.forEach((z) => {
                        const Q = u.value.find((ae) => ae.id === z);
                        Q && (Q.filteredValue = []);
                    }),
                        (N.value = {}),
                        t.store.commit('filterChange', { column: {}, values: [], silent: !0 });
        },
        cl = () => {
            !K.value || (ee(null, null, null), t.store.commit('changeSortCondition', { silent: !0 }));
        },
        {
            setExpandRowKeys: fl,
            toggleRowExpansion: mt,
            updateExpandRows: hl,
            states: pl,
            isRowExpanded: vl,
        } = Xn({ data: r, rowKey: n }),
        {
            updateTreeExpandKeys: gl,
            toggleTreeExpansion: ml,
            updateTreeData: yl,
            loadOrToggle: bl,
            states: Cl,
        } = Un({ data: r, rowKey: n }),
        {
            updateCurrentRowData: wl,
            updateCurrentRow: Sl,
            setCurrentRowKey: El,
            states: xl,
        } = qn({ data: r, rowKey: n });
    return {
        assertRowKey: D,
        updateColumns: q,
        scheduleLayout: se,
        isSelected: U,
        clearSelection: C,
        cleanSelection: L,
        getSelectionRows: $,
        toggleRowSelection: V,
        _toggleAllSelection: j,
        toggleAllSelection: null,
        updateSelectionByRowKey: Y,
        updateAllSelected: ne,
        updateFilters: ge,
        updateCurrentRow: Sl,
        updateSort: ee,
        execFilter: re,
        execSort: ce,
        execQuery: ul,
        clearFilter: dl,
        clearSort: cl,
        toggleRowExpansion: mt,
        setExpandRowKeysAdapter: (O) => {
            fl(O), gl(O);
        },
        setCurrentRowKey: El,
        toggleRowExpansionAdapter: (O, F) => {
            u.value.some(({ type: H }) => H === 'expand') ? mt(O, F) : ml(O, F);
        },
        isRowExpanded: vl,
        updateExpandRows: hl,
        updateCurrentRowData: wl,
        loadOrToggle: bl,
        updateTreeData: yl,
        states: {
            tableSize: l,
            rowKey: n,
            data: r,
            _data: a,
            isComplex: i,
            _columns: o,
            originColumns: s,
            columns: u,
            fixedColumns: d,
            rightFixedColumns: f,
            leafColumns: v,
            fixedLeafColumns: E,
            rightFixedLeafColumns: h,
            updateOrderFns: w,
            leafColumnsLength: y,
            fixedLeafColumnsLength: b,
            rightFixedLeafColumnsLength: g,
            isAllSelected: m,
            selection: c,
            reserveSelection: p,
            selectOnIndeterminate: R,
            selectable: S,
            filters: N,
            filteredData: W,
            sortingColumn: K,
            sortProp: k,
            sortOrder: M,
            hoverRow: B,
            ...pl,
            ...Cl,
            ...xl,
        },
    };
}
function it(e, t) {
    return e.map((l) => {
        var n;
        return l.id === t.id ? t : ((n = l.children) != null && n.length && (l.children = it(l.children, t)), l);
    });
}
function ut(e) {
    e.forEach((t) => {
        var l, n;
        (t.no = (l = t.getColumnIndex) == null ? void 0 : l.call(t)),
            (n = t.children) != null && n.length && ut(t.children);
    }),
        e.sort((t, l) => t.no - l.no);
}
function Qn() {
    const e = le(),
        t = _n();
    return {
        ns: pe('table'),
        ...t,
        mutations: {
            setData(i, o) {
                const s = J(i._data) !== o;
                (i.data.value = o),
                    (i._data.value = o),
                    e.store.execQuery(),
                    e.store.updateCurrentRowData(),
                    e.store.updateExpandRows(),
                    e.store.updateTreeData(e.store.states.defaultExpandAll.value),
                    J(i.reserveSelection)
                        ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey())
                        : s
                        ? e.store.clearSelection()
                        : e.store.cleanSelection(),
                    e.store.updateAllSelected(),
                    e.$ready && e.store.scheduleLayout();
            },
            insertColumn(i, o, s, u) {
                const d = J(i._columns);
                let f = [];
                s ? (s && !s.children && (s.children = []), s.children.push(o), (f = it(d, s))) : (d.push(o), (f = d)),
                    ut(f),
                    (i._columns.value = f),
                    i.updateOrderFns.push(u),
                    o.type === 'selection' &&
                        ((i.selectable.value = o.selectable), (i.reserveSelection.value = o.reserveSelection)),
                    e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
            },
            updateColumnOrder(i, o) {
                var s;
                ((s = o.getColumnIndex) == null ? void 0 : s.call(o)) !== o.no &&
                    (ut(i._columns.value), e.$ready && e.store.updateColumns());
            },
            removeColumn(i, o, s, u) {
                const d = J(i._columns) || [];
                if (s)
                    s.children.splice(
                        s.children.findIndex((v) => v.id === o.id),
                        1
                    ),
                        Le(() => {
                            var v;
                            ((v = s.children) == null ? void 0 : v.length) === 0 && delete s.children;
                        }),
                        (i._columns.value = it(d, s));
                else {
                    const v = d.indexOf(o);
                    v > -1 && (d.splice(v, 1), (i._columns.value = d));
                }
                const f = i.updateOrderFns.indexOf(u);
                f > -1 && i.updateOrderFns.splice(f, 1),
                    e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
            },
            sort(i, o) {
                const { prop: s, order: u, init: d } = o;
                if (s) {
                    const f = J(i.columns).find((v) => v.property === s);
                    f &&
                        ((f.order = u),
                        e.store.updateSort(f, s, u),
                        e.store.commit('changeSortCondition', { init: d }));
                }
            },
            changeSortCondition(i, o) {
                const { sortingColumn: s, sortProp: u, sortOrder: d } = i,
                    f = J(s),
                    v = J(u),
                    E = J(d);
                E === null && ((i.sortingColumn.value = null), (i.sortProp.value = null));
                const h = { filter: !0 };
                e.store.execQuery(h),
                    (!o || !(o.silent || o.init)) && e.emit('sort-change', { column: f, prop: v, order: E }),
                    e.store.updateTableScrollY();
            },
            filterChange(i, o) {
                const { column: s, values: u, silent: d } = o,
                    f = e.store.updateFilters(s, u);
                e.store.execQuery(), d || e.emit('filter-change', f), e.store.updateTableScrollY();
            },
            toggleAllSelection() {
                e.store.toggleAllSelection();
            },
            rowSelectedChanged(i, o) {
                e.store.toggleRowSelection(o), e.store.updateAllSelected();
            },
            setHoverRow(i, o) {
                i.hoverRow.value = o;
            },
            setCurrentRow(i, o) {
                e.store.updateCurrentRow(o);
            },
        },
        commit: function (i, ...o) {
            const s = e.store.mutations;
            if (s[i]) s[i].apply(e, [e.store.states].concat(o));
            else throw new Error(`Action not found: ${i}`);
        },
        updateTableScrollY: function () {
            Le(() => e.layout.updateScrollY.apply(e.layout));
        },
    };
}
const Ae = {
    rowKey: 'rowKey',
    defaultExpandAll: 'defaultExpandAll',
    selectOnIndeterminate: 'selectOnIndeterminate',
    indent: 'indent',
    lazy: 'lazy',
    data: 'data',
    ['treeProps.hasChildren']: { key: 'lazyColumnIdentifier', default: 'hasChildren' },
    ['treeProps.children']: { key: 'childrenColumnName', default: 'children' },
};
function Zn(e, t) {
    if (!e) throw new Error('Table is required.');
    const l = Qn();
    return (
        (l.toggleAllSelection = qe(l._toggleAllSelection, 10)),
        Object.keys(Ae).forEach((n) => {
            nl(ol(t, n), n, l);
        }),
        Jn(l, t),
        l
    );
}
function Jn(e, t) {
    Object.keys(Ae).forEach((l) => {
        he(
            () => ol(t, l),
            (n) => {
                nl(n, l, e);
            }
        );
    });
}
function nl(e, t, l) {
    let n = e,
        r = Ae[t];
    typeof Ae[t] == 'object' && ((r = r.key), (n = n || Ae[t].default)), (l.states[r].value = n);
}
function ol(e, t) {
    if (t.includes('.')) {
        const l = t.split('.');
        let n = e;
        return (
            l.forEach((r) => {
                n = n[r];
            }),
            n
        );
    } else return e[t];
}
class eo {
    constructor(t) {
        (this.observers = []),
            (this.table = null),
            (this.store = null),
            (this.columns = []),
            (this.fit = !0),
            (this.showHeader = !0),
            (this.height = x(null)),
            (this.scrollX = x(!1)),
            (this.scrollY = x(!1)),
            (this.bodyWidth = x(null)),
            (this.fixedWidth = x(null)),
            (this.rightFixedWidth = x(null)),
            (this.gutterWidth = 0);
        for (const l in t) Te(t, l) && (Pl(this[l]) ? (this[l].value = t[l]) : (this[l] = t[l]));
        if (!this.table) throw new Error('Table is required for Table Layout');
        if (!this.store) throw new Error('Store is required for Table Layout');
    }
    updateScrollY() {
        if (this.height.value === null) return !1;
        const l = this.table.refs.scrollBarRef;
        if (this.table.vnode.el && (l == null ? void 0 : l.wrapRef)) {
            let n = !0;
            const r = this.scrollY.value;
            return (n = l.wrapRef.scrollHeight > l.wrapRef.clientHeight), (this.scrollY.value = n), r !== n;
        }
        return !1;
    }
    setHeight(t, l = 'height') {
        if (!$e) return;
        const n = this.table.vnode.el;
        if (((t = Vn(t)), (this.height.value = Number(t)), !n && (t || t === 0))) return Le(() => this.setHeight(t, l));
        typeof t == 'number'
            ? ((n.style[l] = `${t}px`), this.updateElsHeight())
            : typeof t == 'string' && ((n.style[l] = t), this.updateElsHeight());
    }
    setMaxHeight(t) {
        this.setHeight(t, 'max-height');
    }
    getFlattenColumns() {
        const t = [];
        return (
            this.table.store.states.columns.value.forEach((n) => {
                n.isColumnGroup ? t.push.apply(t, n.columns) : t.push(n);
            }),
            t
        );
    }
    updateElsHeight() {
        this.updateScrollY(), this.notifyObservers('scrollable');
    }
    headerDisplayNone(t) {
        if (!t) return !0;
        let l = t;
        for (; l.tagName !== 'DIV'; ) {
            if (getComputedStyle(l).display === 'none') return !0;
            l = l.parentElement;
        }
        return !1;
    }
    updateColumnsWidth() {
        if (!$e) return;
        const t = this.fit,
            l = this.table.vnode.el.clientWidth;
        let n = 0;
        const r = this.getFlattenColumns(),
            a = r.filter((s) => typeof s.width != 'number');
        if (
            (r.forEach((s) => {
                typeof s.width == 'number' && s.realWidth && (s.realWidth = null);
            }),
            a.length > 0 && t)
        ) {
            if (
                (r.forEach((s) => {
                    n += Number(s.width || s.minWidth || 80);
                }),
                n <= l)
            ) {
                this.scrollX.value = !1;
                const s = l - n;
                if (a.length === 1) a[0].realWidth = Number(a[0].minWidth || 80) + s;
                else {
                    const u = a.reduce((v, E) => v + Number(E.minWidth || 80), 0),
                        d = s / u;
                    let f = 0;
                    a.forEach((v, E) => {
                        if (E === 0) return;
                        const h = Math.floor(Number(v.minWidth || 80) * d);
                        (f += h), (v.realWidth = Number(v.minWidth || 80) + h);
                    }),
                        (a[0].realWidth = Number(a[0].minWidth || 80) + s - f);
                }
            } else
                (this.scrollX.value = !0),
                    a.forEach((s) => {
                        s.realWidth = Number(s.minWidth);
                    });
            (this.bodyWidth.value = Math.max(n, l)), (this.table.state.resizeState.value.width = this.bodyWidth.value);
        } else
            r.forEach((s) => {
                !s.width && !s.minWidth ? (s.realWidth = 80) : (s.realWidth = Number(s.width || s.minWidth)),
                    (n += s.realWidth);
            }),
                (this.scrollX.value = n > l),
                (this.bodyWidth.value = n);
        const i = this.store.states.fixedColumns.value;
        if (i.length > 0) {
            let s = 0;
            i.forEach((u) => {
                s += Number(u.realWidth || u.width);
            }),
                (this.fixedWidth.value = s);
        }
        const o = this.store.states.rightFixedColumns.value;
        if (o.length > 0) {
            let s = 0;
            o.forEach((u) => {
                s += Number(u.realWidth || u.width);
            }),
                (this.rightFixedWidth.value = s);
        }
        this.notifyObservers('columns');
    }
    addObserver(t) {
        this.observers.push(t);
    }
    removeObserver(t) {
        const l = this.observers.indexOf(t);
        l !== -1 && this.observers.splice(l, 1);
    }
    notifyObservers(t) {
        this.observers.forEach((n) => {
            var r, a;
            switch (t) {
                case 'columns':
                    (r = n.state) == null || r.onColumnsChange(this);
                    break;
                case 'scrollable':
                    (a = n.state) == null || a.onScrollableChange(this);
                    break;
                default:
                    throw new Error(`Table Layout don't have event ${t}.`);
            }
        });
    }
}
const { CheckboxGroup: to } = Oe,
    lo = Me({
        name: 'ElTableFilterPanel',
        components: {
            ElCheckbox: Oe,
            ElCheckboxGroup: to,
            ElScrollbar: kt,
            ElTooltip: $t,
            ElIcon: ct,
            ArrowDown: Bl,
            ArrowUp: Kl,
        },
        directives: { ClickOutside: zl },
        props: {
            placement: { type: String, default: 'bottom-start' },
            store: { type: Object },
            column: { type: Object },
            upDataColumn: { type: Function },
        },
        setup(e) {
            const t = le(),
                { t: l } = Pt(),
                n = pe('table-filter'),
                r = t == null ? void 0 : t.parent;
            r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
            const a = x(!1),
                i = x(null),
                o = P(() => e.column && e.column.filters),
                s = P(() => (e.column.filterClassName ? `${n.b()} ${e.column.filterClassName}` : n.b())),
                u = P({
                    get: () => {
                        var p;
                        return (((p = e.column) == null ? void 0 : p.filteredValue) || [])[0];
                    },
                    set: (p) => {
                        d.value && (typeof p < 'u' && p !== null ? d.value.splice(0, 1, p) : d.value.splice(0, 1));
                    },
                }),
                d = P({
                    get() {
                        return e.column ? e.column.filteredValue || [] : [];
                    },
                    set(p) {
                        e.column && e.upDataColumn('filteredValue', p);
                    },
                }),
                f = P(() => (e.column ? e.column.filterMultiple : !0)),
                v = (p) => p.value === u.value,
                E = () => {
                    a.value = !1;
                },
                h = (p) => {
                    p.stopPropagation(), (a.value = !a.value);
                },
                w = () => {
                    a.value = !1;
                },
                y = () => {
                    m(d.value), E();
                },
                b = () => {
                    (d.value = []), m(d.value), E();
                },
                g = (p) => {
                    (u.value = p), m(typeof p < 'u' && p !== null ? d.value : []), E();
                },
                m = (p) => {
                    e.store.commit('filterChange', { column: e.column, values: p }), e.store.updateAllSelected();
                };
            he(
                a,
                (p) => {
                    e.column && e.upDataColumn('filterOpened', p);
                },
                { immediate: !0 }
            );
            const c = P(() => {
                var p, R;
                return (R = (p = i.value) == null ? void 0 : p.popperRef) == null ? void 0 : R.contentRef;
            });
            return {
                tooltipVisible: a,
                multiple: f,
                filterClassName: s,
                filteredValue: d,
                filterValue: u,
                filters: o,
                handleConfirm: y,
                handleReset: b,
                handleSelect: g,
                isActive: v,
                t: l,
                ns: n,
                showFilterPanel: h,
                hideFilterPanel: w,
                popperPaneRef: c,
                tooltip: i,
            };
        },
    }),
    no = { key: 0 },
    oo = ['disabled'],
    so = ['label', 'onClick'];
function ro(e, t, l, n, r, a) {
    const i = ue('el-checkbox'),
        o = ue('el-checkbox-group'),
        s = ue('el-scrollbar'),
        u = ue('arrow-up'),
        d = ue('arrow-down'),
        f = ue('el-icon'),
        v = ue('el-tooltip'),
        E = Kt('click-outside');
    return (
        G(),
        Ne(
            v,
            {
                ref: 'tooltip',
                visible: e.tooltipVisible,
                offset: 0,
                placement: e.placement,
                'show-arrow': !1,
                'stop-popper-mouse-event': !1,
                teleported: '',
                effect: 'light',
                pure: '',
                'popper-class': e.filterClassName,
                persistent: '',
            },
            {
                content: Ce(() => [
                    e.multiple
                        ? (G(),
                          de('div', no, [
                              oe(
                                  'div',
                                  { class: I(e.ns.e('content')) },
                                  [
                                      fe(
                                          s,
                                          { 'wrap-class': e.ns.e('wrap') },
                                          {
                                              default: Ce(() => [
                                                  fe(
                                                      o,
                                                      {
                                                          modelValue: e.filteredValue,
                                                          'onUpdate:modelValue':
                                                              t[0] || (t[0] = (h) => (e.filteredValue = h)),
                                                          class: I(e.ns.e('checkbox-group')),
                                                      },
                                                      {
                                                          default: Ce(() => [
                                                              (G(!0),
                                                              de(
                                                                  Qe,
                                                                  null,
                                                                  wt(
                                                                      e.filters,
                                                                      (h) => (
                                                                          G(),
                                                                          Ne(
                                                                              i,
                                                                              { key: h.value, value: h.value },
                                                                              {
                                                                                  default: Ce(() => [
                                                                                      zt(Re(h.text), 1),
                                                                                  ]),
                                                                                  _: 2,
                                                                              },
                                                                              1032,
                                                                              ['value']
                                                                          )
                                                                      )
                                                                  ),
                                                                  128
                                                              )),
                                                          ]),
                                                          _: 1,
                                                      },
                                                      8,
                                                      ['modelValue', 'class']
                                                  ),
                                              ]),
                                              _: 1,
                                          },
                                          8,
                                          ['wrap-class']
                                      ),
                                  ],
                                  2
                              ),
                              oe(
                                  'div',
                                  { class: I(e.ns.e('bottom')) },
                                  [
                                      oe(
                                          'button',
                                          {
                                              class: I({ [e.ns.is('disabled')]: e.filteredValue.length === 0 }),
                                              disabled: e.filteredValue.length === 0,
                                              type: 'button',
                                              onClick:
                                                  t[1] || (t[1] = (...h) => e.handleConfirm && e.handleConfirm(...h)),
                                          },
                                          Re(e.t('el.table.confirmFilter')),
                                          11,
                                          oo
                                      ),
                                      oe(
                                          'button',
                                          {
                                              type: 'button',
                                              onClick: t[2] || (t[2] = (...h) => e.handleReset && e.handleReset(...h)),
                                          },
                                          Re(e.t('el.table.resetFilter')),
                                          1
                                      ),
                                  ],
                                  2
                              ),
                          ]))
                        : (G(),
                          de(
                              'ul',
                              { key: 1, class: I(e.ns.e('list')) },
                              [
                                  oe(
                                      'li',
                                      {
                                          class: I([
                                              e.ns.e('list-item'),
                                              {
                                                  [e.ns.is('active')]:
                                                      e.filterValue === void 0 || e.filterValue === null,
                                              },
                                          ]),
                                          onClick: t[3] || (t[3] = (h) => e.handleSelect(null)),
                                      },
                                      Re(e.t('el.table.clearFilter')),
                                      3
                                  ),
                                  (G(!0),
                                  de(
                                      Qe,
                                      null,
                                      wt(
                                          e.filters,
                                          (h) => (
                                              G(),
                                              de(
                                                  'li',
                                                  {
                                                      key: h.value,
                                                      class: I([e.ns.e('list-item'), e.ns.is('active', e.isActive(h))]),
                                                      label: h.value,
                                                      onClick: (w) => e.handleSelect(h.value),
                                                  },
                                                  Re(h.text),
                                                  11,
                                                  so
                                              )
                                          )
                                      ),
                                      128
                                  )),
                              ],
                              2
                          )),
                ]),
                default: Ce(() => [
                    Ke(
                        (G(),
                        de(
                            'span',
                            {
                                class: I([
                                    `${e.ns.namespace.value}-table__column-filter-trigger`,
                                    `${e.ns.namespace.value}-none-outline`,
                                ]),
                                onClick: t[4] || (t[4] = (...h) => e.showFilterPanel && e.showFilterPanel(...h)),
                            },
                            [
                                fe(f, null, {
                                    default: Ce(() => [
                                        e.column.filterOpened ? (G(), Ne(u, { key: 0 })) : (G(), Ne(d, { key: 1 })),
                                    ]),
                                    _: 1,
                                }),
                            ],
                            2
                        )),
                        [[E, e.hideFilterPanel, e.popperPaneRef]]
                    ),
                ]),
                _: 1,
            },
            8,
            ['visible', 'placement', 'popper-class']
        )
    );
}
var ao = Bt(lo, [
    ['render', ro],
    ['__file', 'filter-panel.vue'],
]);
function sl(e) {
    const t = le();
    Dt(() => {
        l.value.addObserver(t);
    }),
        Pe(() => {
            n(l.value), r(l.value);
        }),
        Dl(() => {
            n(l.value), r(l.value);
        }),
        ft(() => {
            l.value.removeObserver(t);
        });
    const l = P(() => {
            const a = e.layout;
            if (!a) throw new Error('Can not find table layout.');
            return a;
        }),
        n = (a) => {
            var i;
            const o = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll('colgroup > col')) || [];
            if (!o.length) return;
            const s = a.getFlattenColumns(),
                u = {};
            s.forEach((d) => {
                u[d.id] = d;
            });
            for (let d = 0, f = o.length; d < f; d++) {
                const v = o[d],
                    E = v.getAttribute('name'),
                    h = u[E];
                h && v.setAttribute('width', h.realWidth || h.width);
            }
        },
        r = (a) => {
            var i, o;
            const s = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll('colgroup > col[name=gutter]')) || [];
            for (let d = 0, f = s.length; d < f; d++) s[d].setAttribute('width', a.scrollY.value ? a.gutterWidth : '0');
            const u = ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll('th.gutter')) || [];
            for (let d = 0, f = u.length; d < f; d++) {
                const v = u[d];
                (v.style.width = a.scrollY.value ? `${a.gutterWidth}px` : '0'),
                    (v.style.display = a.scrollY.value ? '' : 'none');
            }
        };
    return { tableLayout: l.value, onColumnsChange: n, onScrollableChange: r };
}
const ve = Symbol('ElTable');
function io(e, t) {
    const l = le(),
        n = ye(ve),
        r = (w) => {
            w.stopPropagation();
        },
        a = (w, y) => {
            !y.filters && y.sortable ? h(w, y, !1) : y.filterable && !y.sortable && r(w),
                n == null || n.emit('header-click', y, w);
        },
        i = (w, y) => {
            n == null || n.emit('header-contextmenu', y, w);
        },
        o = x(null),
        s = x(!1),
        u = x({}),
        d = (w, y) => {
            if (!!$e && !(y.children && y.children.length > 0) && o.value && e.border) {
                s.value = !0;
                const b = n;
                t('set-drag-visible', !0);
                const m = (b == null ? void 0 : b.vnode.el).getBoundingClientRect().left,
                    c = l.vnode.el.querySelector(`th.${y.id}`),
                    p = c.getBoundingClientRect(),
                    R = p.left - m + 30;
                Xe(c, 'noclick'),
                    (u.value = {
                        startMouseLeft: w.clientX,
                        startLeft: p.right - m,
                        startColumnLeft: p.left - m,
                        tableLeft: m,
                    });
                const S = b == null ? void 0 : b.refs.resizeProxy;
                (S.style.left = `${u.value.startLeft}px`),
                    (document.onselectstart = function () {
                        return !1;
                    }),
                    (document.ondragstart = function () {
                        return !1;
                    });
                const N = (K) => {
                        const k = K.clientX - u.value.startMouseLeft,
                            M = u.value.startLeft + k;
                        S.style.left = `${Math.max(R, M)}px`;
                    },
                    W = () => {
                        if (s.value) {
                            const { startColumnLeft: K, startLeft: k } = u.value,
                                B = Number.parseInt(S.style.left, 10) - K;
                            (y.width = y.realWidth = B),
                                b == null || b.emit('header-dragend', y.width, k - K, y, w),
                                requestAnimationFrame(() => {
                                    e.store.scheduleLayout(!1, !0);
                                }),
                                (document.body.style.cursor = ''),
                                (s.value = !1),
                                (o.value = null),
                                (u.value = {}),
                                t('set-drag-visible', !1);
                        }
                        document.removeEventListener('mousemove', N),
                            document.removeEventListener('mouseup', W),
                            (document.onselectstart = null),
                            (document.ondragstart = null),
                            setTimeout(() => {
                                ke(c, 'noclick');
                            }, 0);
                    };
                document.addEventListener('mousemove', N), document.addEventListener('mouseup', W);
            }
        },
        f = (w, y) => {
            if (y.children && y.children.length > 0) return;
            const b = w.target;
            if (!Vl(b)) return;
            const g = b == null ? void 0 : b.closest('th');
            if (!(!y || !y.resizable) && !s.value && e.border) {
                const m = g.getBoundingClientRect(),
                    c = document.body.style;
                m.width > 12 && m.right - w.pageX < 8
                    ? ((c.cursor = 'col-resize'),
                      ze(g, 'is-sortable') && (g.style.cursor = 'col-resize'),
                      (o.value = y))
                    : s.value ||
                      ((c.cursor = ''), ze(g, 'is-sortable') && (g.style.cursor = 'pointer'), (o.value = null));
            }
        },
        v = () => {
            !$e || (document.body.style.cursor = '');
        },
        E = ({ order: w, sortOrders: y }) => {
            if (w === '') return y[0];
            const b = y.indexOf(w || null);
            return y[b > y.length - 2 ? 0 : b + 1];
        },
        h = (w, y, b) => {
            var g;
            w.stopPropagation();
            const m = y.order === b ? null : b || E(y),
                c = (g = w.target) == null ? void 0 : g.closest('th');
            if (c && ze(c, 'noclick')) {
                ke(c, 'noclick');
                return;
            }
            if (!y.sortable) return;
            const p = e.store.states;
            let R = p.sortProp.value,
                S;
            const N = p.sortingColumn.value;
            (N !== y || (N === y && N.order === null)) &&
                (N && (N.order = null), (p.sortingColumn.value = y), (R = y.property)),
                m ? (S = y.order = m) : (S = y.order = null),
                (p.sortProp.value = R),
                (p.sortOrder.value = S),
                n == null || n.store.commit('changeSortCondition');
        };
    return {
        handleHeaderClick: a,
        handleHeaderContextMenu: i,
        handleMouseDown: d,
        handleMouseMove: f,
        handleMouseOut: v,
        handleSortClick: h,
        handleFilterClick: r,
    };
}
function uo(e) {
    const t = ye(ve),
        l = pe('table');
    return {
        getHeaderRowStyle: (o) => {
            const s = t == null ? void 0 : t.props.headerRowStyle;
            return typeof s == 'function' ? s.call(null, { rowIndex: o }) : s;
        },
        getHeaderRowClass: (o) => {
            const s = [],
                u = t == null ? void 0 : t.props.headerRowClassName;
            return (
                typeof u == 'string' ? s.push(u) : typeof u == 'function' && s.push(u.call(null, { rowIndex: o })),
                s.join(' ')
            );
        },
        getHeaderCellStyle: (o, s, u, d) => {
            var f;
            let v = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
            typeof v == 'function' && (v = v.call(null, { rowIndex: o, columnIndex: s, row: u, column: d }));
            const E = gt(s, d.fixed, e.store, u);
            return We(E, 'left'), We(E, 'right'), Object.assign({}, v, E);
        },
        getHeaderCellClass: (o, s, u, d) => {
            const f = vt(l.b(), s, d.fixed, e.store, u),
                v = [d.id, d.order, d.headerAlign, d.className, d.labelClassName, ...f];
            d.children || v.push('is-leaf'), d.sortable && v.push('is-sortable');
            const E = t == null ? void 0 : t.props.headerCellClassName;
            return (
                typeof E == 'string'
                    ? v.push(E)
                    : typeof E == 'function' &&
                      v.push(E.call(null, { rowIndex: o, columnIndex: s, row: u, column: d })),
                v.push(l.e('cell')),
                v.filter((h) => Boolean(h)).join(' ')
            );
        },
    };
}
const rl = (e) => {
        const t = [];
        return (
            e.forEach((l) => {
                l.children ? (t.push(l), t.push.apply(t, rl(l.children))) : t.push(l);
            }),
            t
        );
    },
    co = (e) => {
        let t = 1;
        const l = (a, i) => {
            if ((i && ((a.level = i.level + 1), t < a.level && (t = a.level)), a.children)) {
                let o = 0;
                a.children.forEach((s) => {
                    l(s, a), (o += s.colSpan);
                }),
                    (a.colSpan = o);
            } else a.colSpan = 1;
        };
        e.forEach((a) => {
            (a.level = 1), l(a, void 0);
        });
        const n = [];
        for (let a = 0; a < t; a++) n.push([]);
        return (
            rl(e).forEach((a) => {
                a.children
                    ? ((a.rowSpan = 1), a.children.forEach((i) => (i.isSubColumn = !0)))
                    : (a.rowSpan = t - a.level + 1),
                    n[a.level - 1].push(a);
            }),
            n
        );
    };
function fo(e) {
    const t = ye(ve),
        l = P(() => co(e.store.states.originColumns.value));
    return {
        isGroup: P(() => {
            const a = l.value.length > 1;
            return a && t && (t.state.isGroup.value = !0), a;
        }),
        toggleAllSelection: (a) => {
            a.stopPropagation(), t == null || t.store.commit('toggleAllSelection');
        },
        columnRows: l,
    };
}
var ho = Me({
    name: 'ElTableHeader',
    components: { ElCheckbox: Oe },
    props: {
        fixed: { type: String, default: '' },
        store: { required: !0, type: Object },
        border: Boolean,
        defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
    },
    setup(e, { emit: t }) {
        const l = le(),
            n = ye(ve),
            r = pe('table'),
            a = x({}),
            { onColumnsChange: i, onScrollableChange: o } = sl(n);
        Pe(async () => {
            await Le(), await Le();
            const { prop: R, order: S } = e.defaultSort;
            n == null || n.store.commit('sort', { prop: R, order: S, init: !0 });
        });
        const {
                handleHeaderClick: s,
                handleHeaderContextMenu: u,
                handleMouseDown: d,
                handleMouseMove: f,
                handleMouseOut: v,
                handleSortClick: E,
                handleFilterClick: h,
            } = io(e, t),
            { getHeaderRowStyle: w, getHeaderRowClass: y, getHeaderCellStyle: b, getHeaderCellClass: g } = uo(e),
            { isGroup: m, toggleAllSelection: c, columnRows: p } = fo(e);
        return (
            (l.state = { onColumnsChange: i, onScrollableChange: o }),
            (l.filterPanels = a),
            {
                ns: r,
                filterPanels: a,
                onColumnsChange: i,
                onScrollableChange: o,
                columnRows: p,
                getHeaderRowClass: y,
                getHeaderRowStyle: w,
                getHeaderCellClass: g,
                getHeaderCellStyle: b,
                handleHeaderClick: s,
                handleHeaderContextMenu: u,
                handleMouseDown: d,
                handleMouseMove: f,
                handleMouseOut: v,
                handleSortClick: E,
                handleFilterClick: h,
                isGroup: m,
                toggleAllSelection: c,
            }
        );
    },
    render() {
        const {
            ns: e,
            isGroup: t,
            columnRows: l,
            getHeaderCellStyle: n,
            getHeaderCellClass: r,
            getHeaderRowClass: a,
            getHeaderRowStyle: i,
            handleHeaderClick: o,
            handleHeaderContextMenu: s,
            handleMouseDown: u,
            handleMouseMove: d,
            handleSortClick: f,
            handleMouseOut: v,
            store: E,
            $parent: h,
        } = this;
        let w = 1;
        return A(
            'thead',
            { class: { [e.is('group')]: t } },
            l.map((y, b) =>
                A(
                    'tr',
                    { class: a(b), key: b, style: i(b) },
                    y.map(
                        (g, m) => (
                            g.rowSpan > w && (w = g.rowSpan),
                            A(
                                'th',
                                {
                                    class: r(b, m, y, g),
                                    colspan: g.colSpan,
                                    key: `${g.id}-thead`,
                                    rowspan: g.rowSpan,
                                    style: n(b, m, y, g),
                                    onClick: (c) => o(c, g),
                                    onContextmenu: (c) => s(c, g),
                                    onMousedown: (c) => u(c, g),
                                    onMousemove: (c) => d(c, g),
                                    onMouseout: v,
                                },
                                [
                                    A(
                                        'div',
                                        {
                                            class: [
                                                'cell',
                                                g.filteredValue && g.filteredValue.length > 0 ? 'highlight' : '',
                                            ],
                                        },
                                        [
                                            g.renderHeader
                                                ? g.renderHeader({ column: g, $index: m, store: E, _self: h })
                                                : g.label,
                                            g.sortable &&
                                                A('span', { onClick: (c) => f(c, g), class: 'caret-wrapper' }, [
                                                    A('i', {
                                                        onClick: (c) => f(c, g, 'ascending'),
                                                        class: 'sort-caret ascending',
                                                    }),
                                                    A('i', {
                                                        onClick: (c) => f(c, g, 'descending'),
                                                        class: 'sort-caret descending',
                                                    }),
                                                ]),
                                            g.filterable &&
                                                A(ao, {
                                                    store: E,
                                                    placement: g.filterPlacement || 'bottom-start',
                                                    column: g,
                                                    upDataColumn: (c, p) => {
                                                        g[c] = p;
                                                    },
                                                }),
                                        ]
                                    ),
                                ]
                            )
                        )
                    )
                )
            )
        );
    },
});
function po(e) {
    const t = ye(ve),
        l = x(''),
        n = x(A('div')),
        r = (h, w, y) => {
            var b;
            const g = t,
                m = Ge(h);
            let c;
            const p = (b = g == null ? void 0 : g.vnode.el) == null ? void 0 : b.dataset.prefix;
            m &&
                ((c = Mt({ columns: e.store.states.columns.value }, m, p)),
                c && (g == null || g.emit(`cell-${y}`, w, c, m, h))),
                g == null || g.emit(`row-${y}`, w, c, h);
        },
        a = (h, w) => {
            r(h, w, 'dblclick');
        },
        i = (h, w) => {
            e.store.commit('setCurrentRow', w), r(h, w, 'click');
        },
        o = (h, w) => {
            r(h, w, 'contextmenu');
        },
        s = qe((h) => {
            e.store.commit('setHoverRow', h);
        }, 30),
        u = qe(() => {
            e.store.commit('setHoverRow', null);
        }, 30),
        d = (h) => {
            const w = window.getComputedStyle(h, null),
                y = Number.parseInt(w.paddingLeft, 10) || 0,
                b = Number.parseInt(w.paddingRight, 10) || 0,
                g = Number.parseInt(w.paddingTop, 10) || 0,
                m = Number.parseInt(w.paddingBottom, 10) || 0;
            return { left: y, right: b, top: g, bottom: m };
        },
        f = (h, w, y) => {
            let b = w.target.parentNode;
            for (; h > 1 && ((b = b == null ? void 0 : b.nextSibling), !(!b || b.nodeName !== 'TR')); )
                y(b, 'hover-row hover-fixed-row'), h--;
        };
    return {
        handleDoubleClick: a,
        handleClick: i,
        handleContextMenu: o,
        handleMouseEnter: s,
        handleMouseLeave: u,
        handleCellMouseEnter: (h, w, y) => {
            var b;
            const g = t,
                m = Ge(h),
                c = (b = g == null ? void 0 : g.vnode.el) == null ? void 0 : b.dataset.prefix;
            if (m) {
                const se = Mt({ columns: e.store.states.columns.value }, m, c);
                m.rowSpan > 1 && f(m.rowSpan, h, Xe);
                const U = (g.hoverState = { cell: m, column: se, row: w });
                g == null || g.emit('cell-mouse-enter', U.row, U.column, U.cell, h);
            }
            if (!y) return;
            const p = h.target.querySelector('.cell');
            if (!(ze(p, `${c}-tooltip`) && p.childNodes.length)) return;
            const R = document.createRange();
            R.setStart(p, 0), R.setEnd(p, p.childNodes.length);
            let S = R.getBoundingClientRect().width,
                N = R.getBoundingClientRect().height;
            S - Math.floor(S) < 0.001 && (S = Math.floor(S)), N - Math.floor(N) < 0.001 && (N = Math.floor(N));
            const { top: k, left: M, right: B, bottom: D } = d(p),
                X = M + B,
                q = k + D;
            (S + X > p.offsetWidth || N + q > p.offsetHeight || p.scrollWidth > p.offsetWidth) &&
                Yn(y, m.innerText || m.textContent, m, g);
        },
        handleCellMouseLeave: (h) => {
            const w = Ge(h);
            if (!w) return;
            w.rowSpan > 1 && f(w.rowSpan, h, ke);
            const y = t == null ? void 0 : t.hoverState;
            t == null ||
                t.emit(
                    'cell-mouse-leave',
                    y == null ? void 0 : y.row,
                    y == null ? void 0 : y.column,
                    y == null ? void 0 : y.cell,
                    h
                );
        },
        tooltipContent: l,
        tooltipTrigger: n,
    };
}
function vo(e) {
    const t = ye(ve),
        l = pe('table');
    return {
        getRowStyle: (u, d) => {
            const f = t == null ? void 0 : t.props.rowStyle;
            return typeof f == 'function' ? f.call(null, { row: u, rowIndex: d }) : f || null;
        },
        getRowClass: (u, d) => {
            const f = [l.e('row')];
            (t == null ? void 0 : t.props.highlightCurrentRow) &&
                u === e.store.states.currentRow.value &&
                f.push('current-row'),
                e.stripe && d % 2 === 1 && f.push(l.em('row', 'striped'));
            const v = t == null ? void 0 : t.props.rowClassName;
            return (
                typeof v == 'string'
                    ? f.push(v)
                    : typeof v == 'function' && f.push(v.call(null, { row: u, rowIndex: d })),
                f
            );
        },
        getCellStyle: (u, d, f, v) => {
            const E = t == null ? void 0 : t.props.cellStyle;
            let h = E != null ? E : {};
            typeof E == 'function' && (h = E.call(null, { rowIndex: u, columnIndex: d, row: f, column: v }));
            const w = gt(d, e == null ? void 0 : e.fixed, e.store);
            return We(w, 'left'), We(w, 'right'), Object.assign({}, h, w);
        },
        getCellClass: (u, d, f, v, E) => {
            const h = vt(l.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, E),
                w = [v.id, v.align, v.className, ...h],
                y = t == null ? void 0 : t.props.cellClassName;
            return (
                typeof y == 'string'
                    ? w.push(y)
                    : typeof y == 'function' &&
                      w.push(y.call(null, { rowIndex: u, columnIndex: d, row: f, column: v })),
                w.push(l.e('cell')),
                w.filter((b) => Boolean(b)).join(' ')
            );
        },
        getSpan: (u, d, f, v) => {
            let E = 1,
                h = 1;
            const w = t == null ? void 0 : t.props.spanMethod;
            if (typeof w == 'function') {
                const y = w({ row: u, column: d, rowIndex: f, columnIndex: v });
                Array.isArray(y)
                    ? ((E = y[0]), (h = y[1]))
                    : typeof y == 'object' && ((E = y.rowspan), (h = y.colspan));
            }
            return { rowspan: E, colspan: h };
        },
        getColspanRealWidth: (u, d, f) => {
            if (d < 1) return u[f].realWidth;
            const v = u.map(({ realWidth: E, width: h }) => E || h).slice(f, f + d);
            return Number(v.reduce((E, h) => Number(E) + Number(h), -1));
        },
    };
}
function go(e) {
    const t = ye(ve),
        l = pe('table'),
        {
            handleDoubleClick: n,
            handleClick: r,
            handleContextMenu: a,
            handleMouseEnter: i,
            handleMouseLeave: o,
            handleCellMouseEnter: s,
            handleCellMouseLeave: u,
            tooltipContent: d,
            tooltipTrigger: f,
        } = po(e),
        {
            getRowStyle: v,
            getRowClass: E,
            getCellStyle: h,
            getCellClass: w,
            getSpan: y,
            getColspanRealWidth: b,
        } = vo(e),
        g = P(() => e.store.states.columns.value.findIndex(({ type: S }) => S === 'default')),
        m = (S, N) => {
            const W = t.props.rowKey;
            return W ? _(S, W) : N;
        },
        c = (S, N, W, K = !1) => {
            const { tooltipEffect: k, tooltipOptions: M, store: B } = e,
                { indent: D, columns: X } = B.states,
                q = E(S, N);
            let se = !0;
            return (
                W && (q.push(l.em('row', `level-${W.level}`)), (se = W.display)),
                A(
                    'tr',
                    {
                        style: [se ? null : { display: 'none' }, v(S, N)],
                        class: q,
                        key: m(S, N),
                        onDblclick: (C) => n(C, S),
                        onClick: (C) => r(C, S),
                        onContextmenu: (C) => a(C, S),
                        onMouseenter: () => i(N),
                        onMouseleave: o,
                    },
                    X.value.map((C, L) => {
                        const { rowspan: $, colspan: V } = y(S, C, N, L);
                        if (!$ || !V) return null;
                        const j = Object.assign({}, C);
                        j.realWidth = b(X.value, V, L);
                        const Y = {
                            store: e.store,
                            _self: e.context || t,
                            column: j,
                            row: S,
                            $index: N,
                            cellIndex: L,
                            expanded: K,
                        };
                        L === g.value &&
                            W &&
                            ((Y.treeNode = { indent: W.level * D.value, level: W.level }),
                            typeof W.expanded == 'boolean' &&
                                ((Y.treeNode.expanded = W.expanded),
                                'loading' in W && (Y.treeNode.loading = W.loading),
                                'noLazyChildren' in W && (Y.treeNode.noLazyChildren = W.noLazyChildren)));
                        const ne = `${N},${L}`,
                            Z = j.columnKey || j.rawColumnKey || '',
                            ge = p(L, C, Y),
                            ee = C.showOverflowTooltip && Fn({ effect: k }, M, C.showOverflowTooltip);
                        return A(
                            'td',
                            {
                                style: h(N, L, S, C),
                                class: w(N, L, S, C, V - 1),
                                key: `${Z}${ne}`,
                                rowspan: $,
                                colspan: V,
                                onMouseenter: (re) => s(re, S, ee),
                                onMouseleave: u,
                            },
                            [ge]
                        );
                    })
                )
            );
        },
        p = (S, N, W) => N.renderCell(W);
    return {
        wrappedRowRender: (S, N) => {
            const W = e.store,
                { isRowExpanded: K, assertRowKey: k } = W,
                { treeData: M, lazyTreeNodeMap: B, childrenColumnName: D, rowKey: X } = W.states,
                q = W.states.columns.value;
            if (q.some(({ type: U }) => U === 'expand')) {
                const U = K(S),
                    C = c(S, N, void 0, U),
                    L = t.renderExpanded;
                return U
                    ? L
                        ? [
                              [
                                  C,
                                  A('tr', { key: `expanded-row__${C.key}` }, [
                                      A('td', { colspan: q.length, class: `${l.e('cell')} ${l.e('expanded-cell')}` }, [
                                          L({ row: S, $index: N, store: W, expanded: U }),
                                      ]),
                                  ]),
                              ],
                          ]
                        : (console.error('[Element Error]renderExpanded is required.'), C)
                    : [[C]];
            } else if (Object.keys(M.value).length) {
                k();
                const U = _(S, X.value);
                let C = M.value[U],
                    L = null;
                C &&
                    ((L = { expanded: C.expanded, level: C.level, display: !0 }),
                    typeof C.lazy == 'boolean' &&
                        (typeof C.loaded == 'boolean' &&
                            C.loaded &&
                            (L.noLazyChildren = !(C.children && C.children.length)),
                        (L.loading = C.loading)));
                const $ = [c(S, N, L)];
                if (C) {
                    let V = 0;
                    const j = (ne, Z) => {
                        !(ne && ne.length && Z) ||
                            ne.forEach((ge) => {
                                const ee = {
                                        display: Z.display && Z.expanded,
                                        level: Z.level + 1,
                                        expanded: !1,
                                        noLazyChildren: !1,
                                        loading: !1,
                                    },
                                    re = _(ge, X.value);
                                if (re == null) throw new Error('For nested data item, row-key is required.');
                                if (
                                    ((C = { ...M.value[re] }),
                                    C &&
                                        ((ee.expanded = C.expanded),
                                        (C.level = C.level || ee.level),
                                        (C.display = !!(C.expanded && ee.display)),
                                        typeof C.lazy == 'boolean' &&
                                            (typeof C.loaded == 'boolean' &&
                                                C.loaded &&
                                                (ee.noLazyChildren = !(C.children && C.children.length)),
                                            (ee.loading = C.loading))),
                                    V++,
                                    $.push(c(ge, N + V, ee)),
                                    C)
                                ) {
                                    const ce = B.value[re] || ge[D.value];
                                    j(ce, C);
                                }
                            });
                    };
                    C.display = !0;
                    const Y = B.value[U] || S[D.value];
                    j(Y, C);
                }
                return $;
            } else return c(S, N, void 0);
        },
        tooltipContent: d,
        tooltipTrigger: f,
    };
}
const mo = {
    store: { required: !0, type: Object },
    stripe: Boolean,
    tooltipEffect: String,
    tooltipOptions: { type: Object },
    context: { default: () => ({}), type: Object },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: { type: String, default: '' },
    highlight: Boolean,
};
var yo = Me({
    name: 'ElTableBody',
    props: mo,
    setup(e) {
        const t = le(),
            l = ye(ve),
            n = pe('table'),
            { wrappedRowRender: r, tooltipContent: a, tooltipTrigger: i } = go(e),
            { onColumnsChange: o, onScrollableChange: s } = sl(l),
            u = [];
        return (
            he(e.store.states.hoverRow, (d, f) => {
                var v;
                const E = t == null ? void 0 : t.vnode.el,
                    h = Array.from((E == null ? void 0 : E.children) || []).filter((b) =>
                        b == null ? void 0 : b.classList.contains(`${n.e('row')}`)
                    );
                let w = d;
                const y = (v = h[w]) == null ? void 0 : v.childNodes;
                if (y != null && y.length) {
                    let b = 0;
                    Array.from(y)
                        .reduce((m, c, p) => {
                            var R, S;
                            return (
                                ((R = y[p]) == null ? void 0 : R.colSpan) > 1 &&
                                    (b = (S = y[p]) == null ? void 0 : S.colSpan),
                                c.nodeName !== 'TD' && b === 0 && m.push(p),
                                b > 0 && b--,
                                m
                            );
                        }, [])
                        .forEach((m) => {
                            for (var c; w > 0; ) {
                                const p = (c = h[w - 1]) == null ? void 0 : c.childNodes;
                                if (p[m] && p[m].nodeName === 'TD' && p[m].rowSpan > 1) {
                                    Xe(p[m], 'hover-cell'), u.push(p[m]);
                                    break;
                                }
                                w--;
                            }
                        });
                } else u.forEach((b) => ke(b, 'hover-cell')), (u.length = 0);
                !e.store.states.isComplex.value ||
                    !$e ||
                    gn(() => {
                        const b = h[f],
                            g = h[d];
                        b && !b.classList.contains('hover-fixed-row') && ke(b, 'hover-row'), g && Xe(g, 'hover-row');
                    });
            }),
            ft(() => {
                var d;
                (d = ie) == null || d();
            }),
            {
                ns: n,
                onColumnsChange: o,
                onScrollableChange: s,
                wrappedRowRender: r,
                tooltipContent: a,
                tooltipTrigger: i,
            }
        );
    },
    render() {
        const { wrappedRowRender: e, store: t } = this,
            l = t.states.data.value || [];
        return A('tbody', { tabIndex: -1 }, [l.reduce((n, r) => n.concat(e(r, n.length)), [])]);
    },
});
function bo() {
    const e = ye(ve),
        t = e == null ? void 0 : e.store,
        l = P(() => t.states.fixedLeafColumnsLength.value),
        n = P(() => t.states.rightFixedColumns.value.length),
        r = P(() => t.states.columns.value.length),
        a = P(() => t.states.fixedColumns.value.length),
        i = P(() => t.states.rightFixedColumns.value.length);
    return {
        leftFixedLeafCount: l,
        rightFixedLeafCount: n,
        columnsCount: r,
        leftFixedCount: a,
        rightFixedCount: i,
        columns: t.states.columns,
    };
}
function Co(e) {
    const { columns: t } = bo(),
        l = pe('table');
    return {
        getCellClasses: (a, i) => {
            const o = a[i],
                s = [l.e('cell'), o.id, o.align, o.labelClassName, ...vt(l.b(), i, o.fixed, e.store)];
            return o.className && s.push(o.className), o.children || s.push(l.is('leaf')), s;
        },
        getCellStyles: (a, i) => {
            const o = gt(i, a.fixed, e.store);
            return We(o, 'left'), We(o, 'right'), o;
        },
        columns: t,
    };
}
var wo = Me({
    name: 'ElTableFooter',
    props: {
        fixed: { type: String, default: '' },
        store: { required: !0, type: Object },
        summaryMethod: Function,
        sumText: String,
        border: Boolean,
        defaultSort: { type: Object, default: () => ({ prop: '', order: '' }) },
    },
    setup(e) {
        const { getCellClasses: t, getCellStyles: l, columns: n } = Co(e);
        return { ns: pe('table'), getCellClasses: t, getCellStyles: l, columns: n };
    },
    render() {
        const { columns: e, getCellStyles: t, getCellClasses: l, summaryMethod: n, sumText: r } = this,
            a = this.store.states.data.value;
        let i = [];
        return (
            n
                ? (i = n({ columns: e, data: a }))
                : e.forEach((o, s) => {
                      if (s === 0) {
                          i[s] = r;
                          return;
                      }
                      const u = a.map((E) => Number(E[o.property])),
                          d = [];
                      let f = !0;
                      u.forEach((E) => {
                          if (!Number.isNaN(+E)) {
                              f = !1;
                              const h = `${E}`.split('.')[1];
                              d.push(h ? h.length : 0);
                          }
                      });
                      const v = Math.max.apply(null, d);
                      f
                          ? (i[s] = '')
                          : (i[s] = u.reduce((E, h) => {
                                const w = Number(h);
                                return Number.isNaN(+w) ? E : Number.parseFloat((E + h).toFixed(Math.min(v, 20)));
                            }, 0));
                  }),
            A(
                A('tfoot', [
                    A('tr', {}, [
                        ...e.map((o, s) =>
                            A(
                                'td',
                                { key: s, colspan: o.colSpan, rowspan: o.rowSpan, class: l(e, s), style: t(o, s) },
                                [A('div', { class: ['cell', o.labelClassName] }, [i[s]])]
                            )
                        ),
                    ]),
                ])
            )
        );
    },
});
function So(e) {
    return {
        setCurrentRow: (d) => {
            e.commit('setCurrentRow', d);
        },
        getSelectionRows: () => e.getSelectionRows(),
        toggleRowSelection: (d, f) => {
            e.toggleRowSelection(d, f, !1), e.updateAllSelected();
        },
        clearSelection: () => {
            e.clearSelection();
        },
        clearFilter: (d) => {
            e.clearFilter(d);
        },
        toggleAllSelection: () => {
            e.commit('toggleAllSelection');
        },
        toggleRowExpansion: (d, f) => {
            e.toggleRowExpansionAdapter(d, f);
        },
        clearSort: () => {
            e.clearSort();
        },
        sort: (d, f) => {
            e.commit('sort', { prop: d, order: f });
        },
    };
}
function Eo(e, t, l, n) {
    const r = x(!1),
        a = x(null),
        i = x(!1),
        o = (C) => {
            i.value = C;
        },
        s = x({ width: null, height: null, headerHeight: null }),
        u = x(!1),
        d = { display: 'inline-block', verticalAlign: 'middle' },
        f = x(),
        v = x(0),
        E = x(0),
        h = x(0),
        w = x(0),
        y = x(0);
    Fe(() => {
        t.setHeight(e.height);
    }),
        Fe(() => {
            t.setMaxHeight(e.maxHeight);
        }),
        he(
            () => [e.currentRowKey, l.states.rowKey],
            ([C, L]) => {
                !J(L) || !J(C) || l.setCurrentRowKey(`${C}`);
            },
            { immediate: !0 }
        ),
        he(
            () => e.data,
            (C) => {
                n.store.commit('setData', C);
            },
            { immediate: !0, deep: !0 }
        ),
        Fe(() => {
            e.expandRowKeys && l.setExpandRowKeysAdapter(e.expandRowKeys);
        });
    const b = () => {
            n.store.commit('setHoverRow', null), n.hoverState && (n.hoverState = null);
        },
        g = (C, L) => {
            const { pixelX: $, pixelY: V } = L;
            Math.abs($) >= Math.abs(V) && (n.refs.bodyWrapper.scrollLeft += L.pixelX / 5);
        },
        m = P(
            () =>
                e.height ||
                e.maxHeight ||
                l.states.fixedColumns.value.length > 0 ||
                l.states.rightFixedColumns.value.length > 0
        ),
        c = P(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : '' })),
        p = () => {
            m.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(W);
        };
    Pe(async () => {
        await Le(), l.updateColumns(), K(), requestAnimationFrame(p);
        const C = n.vnode.el,
            L = n.refs.headerWrapper;
        e.flexible && C && C.parentElement && (C.parentElement.style.minWidth = '0'),
            (s.value = {
                width: (f.value = C.offsetWidth),
                height: C.offsetHeight,
                headerHeight: e.showHeader && L ? L.offsetHeight : null,
            }),
            l.states.columns.value.forEach(($) => {
                $.filteredValue &&
                    $.filteredValue.length &&
                    n.store.commit('filterChange', { column: $, values: $.filteredValue, silent: !0 });
            }),
            (n.$ready = !0);
    });
    const R = (C, L) => {
            if (!C) return;
            const $ = Array.from(C.classList).filter((V) => !V.startsWith('is-scrolling-'));
            $.push(t.scrollX.value ? L : 'is-scrolling-none'), (C.className = $.join(' '));
        },
        S = (C) => {
            const { tableWrapper: L } = n.refs;
            R(L, C);
        },
        N = (C) => {
            const { tableWrapper: L } = n.refs;
            return !!(L && L.classList.contains(C));
        },
        W = function () {
            if (!n.refs.scrollBarRef) return;
            if (!t.scrollX.value) {
                const Z = 'is-scrolling-none';
                N(Z) || S(Z);
                return;
            }
            const C = n.refs.scrollBarRef.wrapRef;
            if (!C) return;
            const { scrollLeft: L, offsetWidth: $, scrollWidth: V } = C,
                { headerWrapper: j, footerWrapper: Y } = n.refs;
            j && (j.scrollLeft = L), Y && (Y.scrollLeft = L);
            const ne = V - $ - 1;
            L >= ne ? S('is-scrolling-right') : S(L === 0 ? 'is-scrolling-left' : 'is-scrolling-middle');
        },
        K = () => {
            !n.refs.scrollBarRef ||
                (n.refs.scrollBarRef.wrapRef && St(n.refs.scrollBarRef.wrapRef, 'scroll', W, { passive: !0 }),
                e.fit ? Et(n.vnode.el, k) : St(window, 'resize', k),
                Et(n.refs.bodyWrapper, () => {
                    var C, L;
                    k(), (L = (C = n.refs) == null ? void 0 : C.scrollBarRef) == null || L.update();
                }));
        },
        k = () => {
            var C, L, $, V;
            const j = n.vnode.el;
            if (!n.$ready || !j) return;
            let Y = !1;
            const { width: ne, height: Z, headerHeight: ge } = s.value,
                ee = (f.value = j.offsetWidth);
            ne !== ee && (Y = !0);
            const re = j.offsetHeight;
            (e.height || m.value) && Z !== re && (Y = !0);
            const ce =
                e.tableLayout === 'fixed' ? n.refs.headerWrapper : (C = n.refs.tableHeaderRef) == null ? void 0 : C.$el;
            e.showHeader && (ce == null ? void 0 : ce.offsetHeight) !== ge && (Y = !0),
                (v.value = ((L = n.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0),
                (h.value = (ce == null ? void 0 : ce.scrollHeight) || 0),
                (w.value = (($ = n.refs.footerWrapper) == null ? void 0 : $.offsetHeight) || 0),
                (y.value = ((V = n.refs.appendWrapper) == null ? void 0 : V.offsetHeight) || 0),
                (E.value = v.value - h.value - w.value - y.value),
                Y &&
                    ((s.value = {
                        width: ee,
                        height: re,
                        headerHeight: (e.showHeader && (ce == null ? void 0 : ce.offsetHeight)) || 0,
                    }),
                    p());
        },
        M = Il(),
        B = P(() => {
            const { bodyWidth: C, scrollY: L, gutterWidth: $ } = t;
            return C.value ? `${C.value - (L.value ? $ : 0)}px` : '';
        }),
        D = P(() => (e.maxHeight ? 'fixed' : e.tableLayout)),
        X = P(() => {
            if (e.data && e.data.length) return null;
            let C = '100%';
            e.height && E.value && (C = `${E.value}px`);
            const L = f.value;
            return { width: L ? `${L}px` : '', height: C };
        }),
        q = P(() =>
            e.height
                ? { height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px` }
                : e.maxHeight
                ? { maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px` }
                : {}
        ),
        se = P(() =>
            e.height
                ? { height: '100%' }
                : e.maxHeight
                ? Number.isNaN(Number(e.maxHeight))
                    ? { maxHeight: `calc(${e.maxHeight} - ${h.value + w.value}px)` }
                    : { maxHeight: `${e.maxHeight - h.value - w.value}px` }
                : {}
        );
    return {
        isHidden: r,
        renderExpanded: a,
        setDragVisible: o,
        isGroup: u,
        handleMouseLeave: b,
        handleHeaderFooterMousewheel: g,
        tableSize: M,
        emptyBlockStyle: X,
        handleFixedMousewheel: (C, L) => {
            const $ = n.refs.bodyWrapper;
            if (Math.abs(L.spinY) > 0) {
                const V = $.scrollTop;
                L.pixelY < 0 && V !== 0 && C.preventDefault(),
                    L.pixelY > 0 && $.scrollHeight - $.clientHeight > V && C.preventDefault(),
                    ($.scrollTop += Math.ceil(L.pixelY / 5));
            } else $.scrollLeft += Math.ceil(L.pixelX / 5);
        },
        resizeProxyVisible: i,
        bodyWidth: B,
        resizeState: s,
        doLayout: p,
        tableBodyStyles: c,
        tableLayout: D,
        scrollbarViewStyle: d,
        tableInnerStyle: q,
        scrollbarStyle: se,
    };
}
function xo(e) {
    const t = x(),
        l = () => {
            const r = e.vnode.el.querySelector('.hidden-columns'),
                a = { childList: !0, subtree: !0 },
                i = e.store.states.updateOrderFns;
            (t.value = new MutationObserver(() => {
                i.forEach((o) => o());
            })),
                t.value.observe(r, a);
        };
    Pe(() => {
        l();
    }),
        ft(() => {
            var n;
            (n = t.value) == null || n.disconnect();
        });
}
var Ro = {
    data: { type: Array, default: () => [] },
    size: jl,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: { type: Boolean, default: !0 },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    showHeader: { type: Boolean, default: !0 },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    tooltipOptions: Object,
    spanMethod: Function,
    selectOnIndeterminate: { type: Boolean, default: !0 },
    indent: { type: Number, default: 16 },
    treeProps: { type: Object, default: () => ({ hasChildren: 'hasChildren', children: 'children' }) },
    lazy: Boolean,
    load: Function,
    style: { type: Object, default: () => ({}) },
    className: { type: String, default: '' },
    tableLayout: { type: String, default: 'fixed' },
    scrollbarAlwaysOn: Boolean,
    flexible: Boolean,
    showOverflowTooltip: [Boolean, Object],
};
function al(e) {
    const t = e.tableLayout === 'auto';
    let l = e.columns || [];
    t && l.every((r) => r.width === void 0) && (l = []);
    const n = (r) => {
        const a = { key: `${e.tableLayout}_${r.id}`, style: {}, name: void 0 };
        return t ? (a.style = { width: `${r.width}px` }) : (a.name = r.id), a;
    };
    return A(
        'colgroup',
        {},
        l.map((r) => A('col', n(r)))
    );
}
al.props = ['columns', 'tableLayout'];
const No = () => {
    const e = x(),
        t = (a, i) => {
            const o = e.value;
            o && o.scrollTo(a, i);
        },
        l = (a, i) => {
            const o = e.value;
            o && Yl(i) && ['Top', 'Left'].includes(a) && o[`setScroll${a}`](i);
        };
    return { scrollBarRef: e, scrollTo: t, setScrollTop: (a) => l('Top', a), setScrollLeft: (a) => l('Left', a) };
};
let Lo = 1;
const Oo = Me({
        name: 'ElTable',
        directives: { Mousewheel: Bn },
        components: { TableHeader: ho, TableBody: yo, TableFooter: wo, ElScrollbar: kt, hColgroup: al },
        props: Ro,
        emits: [
            'select',
            'select-all',
            'selection-change',
            'cell-mouse-enter',
            'cell-mouse-leave',
            'cell-contextmenu',
            'cell-click',
            'cell-dblclick',
            'row-click',
            'row-contextmenu',
            'row-dblclick',
            'header-click',
            'header-contextmenu',
            'sort-change',
            'filter-change',
            'current-change',
            'header-dragend',
            'expand-change',
        ],
        setup(e) {
            const { t } = Pt(),
                l = pe('table'),
                n = le();
            Xl(ve, n);
            const r = Zn(n, e);
            n.store = r;
            const a = new eo({ store: n.store, table: n, fit: e.fit, showHeader: e.showHeader });
            n.layout = a;
            const i = P(() => (r.states.data.value || []).length === 0),
                {
                    setCurrentRow: o,
                    getSelectionRows: s,
                    toggleRowSelection: u,
                    clearSelection: d,
                    clearFilter: f,
                    toggleAllSelection: v,
                    toggleRowExpansion: E,
                    clearSort: h,
                    sort: w,
                } = So(r),
                {
                    isHidden: y,
                    renderExpanded: b,
                    setDragVisible: g,
                    isGroup: m,
                    handleMouseLeave: c,
                    handleHeaderFooterMousewheel: p,
                    tableSize: R,
                    emptyBlockStyle: S,
                    handleFixedMousewheel: N,
                    resizeProxyVisible: W,
                    bodyWidth: K,
                    resizeState: k,
                    doLayout: M,
                    tableBodyStyles: B,
                    tableLayout: D,
                    scrollbarViewStyle: X,
                    tableInnerStyle: q,
                    scrollbarStyle: se,
                } = Eo(e, a, r, n),
                { scrollBarRef: U, scrollTo: C, setScrollLeft: L, setScrollTop: $ } = No(),
                V = qe(M, 50),
                j = `${l.namespace.value}-table_${Lo++}`;
            (n.tableId = j), (n.state = { isGroup: m, resizeState: k, doLayout: M, debouncedUpdateLayout: V });
            const Y = P(() => e.sumText || t('el.table.sumText')),
                ne = P(() => e.emptyText || t('el.table.emptyText'));
            return (
                xo(n),
                {
                    ns: l,
                    layout: a,
                    store: r,
                    handleHeaderFooterMousewheel: p,
                    handleMouseLeave: c,
                    tableId: j,
                    tableSize: R,
                    isHidden: y,
                    isEmpty: i,
                    renderExpanded: b,
                    resizeProxyVisible: W,
                    resizeState: k,
                    isGroup: m,
                    bodyWidth: K,
                    tableBodyStyles: B,
                    emptyBlockStyle: S,
                    debouncedUpdateLayout: V,
                    handleFixedMousewheel: N,
                    setCurrentRow: o,
                    getSelectionRows: s,
                    toggleRowSelection: u,
                    clearSelection: d,
                    clearFilter: f,
                    toggleAllSelection: v,
                    toggleRowExpansion: E,
                    clearSort: h,
                    doLayout: M,
                    sort: w,
                    t,
                    setDragVisible: g,
                    context: n,
                    computedSumText: Y,
                    computedEmptyText: ne,
                    tableLayout: D,
                    scrollbarViewStyle: X,
                    tableInnerStyle: q,
                    scrollbarStyle: se,
                    scrollBarRef: U,
                    scrollTo: C,
                    setScrollLeft: L,
                    setScrollTop: $,
                }
            );
        },
    }),
    Wo = ['data-prefix'],
    Mo = { ref: 'hiddenColumns', class: 'hidden-columns' };
function Fo(e, t, l, n, r, a) {
    const i = ue('hColgroup'),
        o = ue('table-header'),
        s = ue('table-body'),
        u = ue('table-footer'),
        d = ue('el-scrollbar'),
        f = Kt('mousewheel');
    return (
        G(),
        de(
            'div',
            {
                ref: 'tableWrapper',
                class: I([
                    {
                        [e.ns.m('fit')]: e.fit,
                        [e.ns.m('striped')]: e.stripe,
                        [e.ns.m('border')]: e.border || e.isGroup,
                        [e.ns.m('hidden')]: e.isHidden,
                        [e.ns.m('group')]: e.isGroup,
                        [e.ns.m('fluid-height')]: e.maxHeight,
                        [e.ns.m('scrollable-x')]: e.layout.scrollX.value,
                        [e.ns.m('scrollable-y')]: e.layout.scrollY.value,
                        [e.ns.m('enable-row-hover')]: !e.store.states.isComplex.value,
                        [e.ns.m('enable-row-transition')]:
                            (e.store.states.data.value || []).length !== 0 &&
                            (e.store.states.data.value || []).length < 100,
                        'has-footer': e.showSummary,
                    },
                    e.ns.m(e.tableSize),
                    e.className,
                    e.ns.b(),
                    e.ns.m(`layout-${e.tableLayout}`),
                ]),
                style: xe(e.style),
                'data-prefix': e.ns.namespace.value,
                onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v)),
            },
            [
                oe(
                    'div',
                    { class: I(e.ns.e('inner-wrapper')), style: xe(e.tableInnerStyle) },
                    [
                        oe('div', Mo, [De(e.$slots, 'default')], 512),
                        e.showHeader && e.tableLayout === 'fixed'
                            ? Ke(
                                  (G(),
                                  de(
                                      'div',
                                      { key: 0, ref: 'headerWrapper', class: I(e.ns.e('header-wrapper')) },
                                      [
                                          oe(
                                              'table',
                                              {
                                                  ref: 'tableHeader',
                                                  class: I(e.ns.e('header')),
                                                  style: xe(e.tableBodyStyles),
                                                  border: '0',
                                                  cellpadding: '0',
                                                  cellspacing: '0',
                                              },
                                              [
                                                  fe(
                                                      i,
                                                      {
                                                          columns: e.store.states.columns.value,
                                                          'table-layout': e.tableLayout,
                                                      },
                                                      null,
                                                      8,
                                                      ['columns', 'table-layout']
                                                  ),
                                                  fe(
                                                      o,
                                                      {
                                                          ref: 'tableHeaderRef',
                                                          border: e.border,
                                                          'default-sort': e.defaultSort,
                                                          store: e.store,
                                                          onSetDragVisible: e.setDragVisible,
                                                      },
                                                      null,
                                                      8,
                                                      ['border', 'default-sort', 'store', 'onSetDragVisible']
                                                  ),
                                              ],
                                              6
                                          ),
                                      ],
                                      2
                                  )),
                                  [[f, e.handleHeaderFooterMousewheel]]
                              )
                            : be('v-if', !0),
                        oe(
                            'div',
                            { ref: 'bodyWrapper', class: I(e.ns.e('body-wrapper')) },
                            [
                                fe(
                                    d,
                                    {
                                        ref: 'scrollBarRef',
                                        'view-style': e.scrollbarViewStyle,
                                        'wrap-style': e.scrollbarStyle,
                                        always: e.scrollbarAlwaysOn,
                                    },
                                    {
                                        default: Ce(() => [
                                            oe(
                                                'table',
                                                {
                                                    ref: 'tableBody',
                                                    class: I(e.ns.e('body')),
                                                    cellspacing: '0',
                                                    cellpadding: '0',
                                                    border: '0',
                                                    style: xe({ width: e.bodyWidth, tableLayout: e.tableLayout }),
                                                },
                                                [
                                                    fe(
                                                        i,
                                                        {
                                                            columns: e.store.states.columns.value,
                                                            'table-layout': e.tableLayout,
                                                        },
                                                        null,
                                                        8,
                                                        ['columns', 'table-layout']
                                                    ),
                                                    e.showHeader && e.tableLayout === 'auto'
                                                        ? (G(),
                                                          Ne(
                                                              o,
                                                              {
                                                                  key: 0,
                                                                  ref: 'tableHeaderRef',
                                                                  class: I(e.ns.e('body-header')),
                                                                  border: e.border,
                                                                  'default-sort': e.defaultSort,
                                                                  store: e.store,
                                                                  onSetDragVisible: e.setDragVisible,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                  'class',
                                                                  'border',
                                                                  'default-sort',
                                                                  'store',
                                                                  'onSetDragVisible',
                                                              ]
                                                          ))
                                                        : be('v-if', !0),
                                                    fe(
                                                        s,
                                                        {
                                                            context: e.context,
                                                            highlight: e.highlightCurrentRow,
                                                            'row-class-name': e.rowClassName,
                                                            'tooltip-effect': e.tooltipEffect,
                                                            'tooltip-options': e.tooltipOptions,
                                                            'row-style': e.rowStyle,
                                                            store: e.store,
                                                            stripe: e.stripe,
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                            'context',
                                                            'highlight',
                                                            'row-class-name',
                                                            'tooltip-effect',
                                                            'tooltip-options',
                                                            'row-style',
                                                            'store',
                                                            'stripe',
                                                        ]
                                                    ),
                                                    e.showSummary && e.tableLayout === 'auto'
                                                        ? (G(),
                                                          Ne(
                                                              u,
                                                              {
                                                                  key: 1,
                                                                  class: I(e.ns.e('body-footer')),
                                                                  border: e.border,
                                                                  'default-sort': e.defaultSort,
                                                                  store: e.store,
                                                                  'sum-text': e.computedSumText,
                                                                  'summary-method': e.summaryMethod,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                  'class',
                                                                  'border',
                                                                  'default-sort',
                                                                  'store',
                                                                  'sum-text',
                                                                  'summary-method',
                                                              ]
                                                          ))
                                                        : be('v-if', !0),
                                                ],
                                                6
                                            ),
                                            e.isEmpty
                                                ? (G(),
                                                  de(
                                                      'div',
                                                      {
                                                          key: 0,
                                                          ref: 'emptyBlock',
                                                          style: xe(e.emptyBlockStyle),
                                                          class: I(e.ns.e('empty-block')),
                                                      },
                                                      [
                                                          oe(
                                                              'span',
                                                              { class: I(e.ns.e('empty-text')) },
                                                              [
                                                                  De(e.$slots, 'empty', {}, () => [
                                                                      zt(Re(e.computedEmptyText), 1),
                                                                  ]),
                                                              ],
                                                              2
                                                          ),
                                                      ],
                                                      6
                                                  ))
                                                : be('v-if', !0),
                                            e.$slots.append
                                                ? (G(),
                                                  de(
                                                      'div',
                                                      {
                                                          key: 1,
                                                          ref: 'appendWrapper',
                                                          class: I(e.ns.e('append-wrapper')),
                                                      },
                                                      [De(e.$slots, 'append')],
                                                      2
                                                  ))
                                                : be('v-if', !0),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    ['view-style', 'wrap-style', 'always']
                                ),
                            ],
                            2
                        ),
                        e.showSummary && e.tableLayout === 'fixed'
                            ? Ke(
                                  (G(),
                                  de(
                                      'div',
                                      { key: 1, ref: 'footerWrapper', class: I(e.ns.e('footer-wrapper')) },
                                      [
                                          oe(
                                              'table',
                                              {
                                                  class: I(e.ns.e('footer')),
                                                  cellspacing: '0',
                                                  cellpadding: '0',
                                                  border: '0',
                                                  style: xe(e.tableBodyStyles),
                                              },
                                              [
                                                  fe(
                                                      i,
                                                      {
                                                          columns: e.store.states.columns.value,
                                                          'table-layout': e.tableLayout,
                                                      },
                                                      null,
                                                      8,
                                                      ['columns', 'table-layout']
                                                  ),
                                                  fe(
                                                      u,
                                                      {
                                                          border: e.border,
                                                          'default-sort': e.defaultSort,
                                                          store: e.store,
                                                          'sum-text': e.computedSumText,
                                                          'summary-method': e.summaryMethod,
                                                      },
                                                      null,
                                                      8,
                                                      ['border', 'default-sort', 'store', 'sum-text', 'summary-method']
                                                  ),
                                              ],
                                              6
                                          ),
                                      ],
                                      2
                                  )),
                                  [
                                      [xt, !e.isEmpty],
                                      [f, e.handleHeaderFooterMousewheel],
                                  ]
                              )
                            : be('v-if', !0),
                        e.border || e.isGroup
                            ? (G(), de('div', { key: 2, class: I(e.ns.e('border-left-patch')) }, null, 2))
                            : be('v-if', !0),
                    ],
                    6
                ),
                Ke(oe('div', { ref: 'resizeProxy', class: I(e.ns.e('column-resize-proxy')) }, null, 2), [
                    [xt, e.resizeProxyVisible],
                ]),
            ],
            46,
            Wo
        )
    );
}
var Ho = Bt(Oo, [
    ['render', Fo],
    ['__file', 'table.vue'],
]);
const Ao = { selection: 'table-column--selection', expand: 'table__expand-column' },
    To = {
        default: { order: '' },
        selection: { width: 48, minWidth: 48, realWidth: 48, order: '' },
        expand: { width: 48, minWidth: 48, realWidth: 48, order: '' },
        index: { width: 48, minWidth: 48, realWidth: 48, order: '' },
    },
    $o = (e) => Ao[e] || '',
    ko = {
        selection: {
            renderHeader({ store: e, column: t }) {
                function l() {
                    return e.states.data.value && e.states.data.value.length === 0;
                }
                return A(Oe, {
                    disabled: l(),
                    size: e.states.tableSize.value,
                    indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
                    'onUpdate:modelValue': e.toggleAllSelection,
                    modelValue: e.states.isAllSelected.value,
                    ariaLabel: t.label,
                });
            },
            renderCell({ row: e, column: t, store: l, $index: n }) {
                return A(Oe, {
                    disabled: t.selectable ? !t.selectable.call(null, e, n) : !1,
                    size: l.states.tableSize.value,
                    onChange: () => {
                        l.commit('rowSelectedChanged', e);
                    },
                    onClick: (r) => r.stopPropagation(),
                    modelValue: l.isSelected(e),
                    ariaLabel: t.label,
                });
            },
            sortable: !1,
            resizable: !1,
        },
        index: {
            renderHeader({ column: e }) {
                return e.label || '#';
            },
            renderCell({ column: e, $index: t }) {
                let l = t + 1;
                const n = e.index;
                return typeof n == 'number' ? (l = t + n) : typeof n == 'function' && (l = n(t)), A('div', {}, [l]);
            },
            sortable: !1,
        },
        expand: {
            renderHeader({ column: e }) {
                return e.label || '';
            },
            renderCell({ row: e, store: t, expanded: l }) {
                const { ns: n } = t,
                    r = [n.e('expand-icon')];
                return (
                    l && r.push(n.em('expand-icon', 'expanded')),
                    A(
                        'div',
                        {
                            class: r,
                            onClick: function (i) {
                                i.stopPropagation(), t.toggleRowExpansion(e);
                            },
                        },
                        { default: () => [A(ct, null, { default: () => [A(Vt)] })] }
                    )
                );
            },
            sortable: !1,
            resizable: !1,
        },
    };
function Po({ row: e, column: t, $index: l }) {
    var n;
    const r = t.property,
        a = r && ql(e, r).value;
    return t && t.formatter
        ? t.formatter(e, t, a, l)
        : ((n = a == null ? void 0 : a.toString) == null ? void 0 : n.call(a)) || '';
}
function Bo({ row: e, treeNode: t, store: l }, n = !1) {
    const { ns: r } = l;
    if (!t) return n ? [A('span', { class: r.e('placeholder') })] : null;
    const a = [],
        i = function (o) {
            o.stopPropagation(), !t.loading && l.loadOrToggle(e);
        };
    if (
        (t.indent && a.push(A('span', { class: r.e('indent'), style: { 'padding-left': `${t.indent}px` } })),
        typeof t.expanded == 'boolean' && !t.noLazyChildren)
    ) {
        const o = [r.e('expand-icon'), t.expanded ? r.em('expand-icon', 'expanded') : ''];
        let s = Vt;
        t.loading && (s = Ul),
            a.push(
                A(
                    'div',
                    { class: o, onClick: i },
                    { default: () => [A(ct, { class: { [r.is('loading')]: t.loading } }, { default: () => [A(s)] })] }
                )
            );
    } else a.push(A('span', { class: r.e('placeholder') }));
    return a;
}
function At(e, t) {
    return e.reduce((l, n) => ((l[n] = n), l), t);
}
function Ko(e, t) {
    const l = le();
    return {
        registerComplexWatchers: () => {
            const a = ['fixed'],
                i = { realWidth: 'width', realMinWidth: 'minWidth' },
                o = At(a, i);
            Object.keys(o).forEach((s) => {
                const u = i[s];
                Te(t, u) &&
                    he(
                        () => t[u],
                        (d) => {
                            let f = d;
                            u === 'width' && s === 'realWidth' && (f = pt(d)),
                                u === 'minWidth' && s === 'realMinWidth' && (f = el(d)),
                                (l.columnConfig.value[u] = f),
                                (l.columnConfig.value[s] = f);
                            const v = u === 'fixed';
                            e.value.store.scheduleLayout(v);
                        }
                    );
            });
        },
        registerNormalWatchers: () => {
            const a = [
                    'label',
                    'filters',
                    'filterMultiple',
                    'filteredValue',
                    'sortable',
                    'index',
                    'formatter',
                    'className',
                    'labelClassName',
                    'filterClassName',
                    'showOverflowTooltip',
                ],
                i = { property: 'prop', align: 'realAlign', headerAlign: 'realHeaderAlign' },
                o = At(a, i);
            Object.keys(o).forEach((s) => {
                const u = i[s];
                Te(t, u) &&
                    he(
                        () => t[u],
                        (d) => {
                            l.columnConfig.value[s] = d;
                        }
                    );
            });
        },
    };
}
function zo(e, t, l) {
    const n = le(),
        r = x(''),
        a = x(!1),
        i = x(),
        o = x(),
        s = pe('table');
    Fe(() => {
        (i.value = e.align ? `is-${e.align}` : null), i.value;
    }),
        Fe(() => {
            (o.value = e.headerAlign ? `is-${e.headerAlign}` : i.value), o.value;
        });
    const u = P(() => {
            let c = n.vnode.vParent || n.parent;
            for (; c && !c.tableId && !c.columnId; ) c = c.vnode.vParent || c.parent;
            return c;
        }),
        d = P(() => {
            const { store: c } = n.parent;
            if (!c) return !1;
            const { treeData: p } = c.states,
                R = p.value;
            return R && Object.keys(R).length > 0;
        }),
        f = x(pt(e.width)),
        v = x(el(e.minWidth)),
        E = (c) => (
            f.value && (c.width = f.value),
            v.value && (c.minWidth = v.value),
            !f.value && v.value && (c.width = void 0),
            c.minWidth || (c.minWidth = 80),
            (c.realWidth = Number(c.width === void 0 ? c.minWidth : c.width)),
            c
        ),
        h = (c) => {
            const p = c.type,
                R = ko[p] || {};
            Object.keys(R).forEach((N) => {
                const W = R[N];
                N !== 'className' && W !== void 0 && (c[N] = W);
            });
            const S = $o(p);
            if (S) {
                const N = `${J(s.namespace)}-${S}`;
                c.className = c.className ? `${c.className} ${N}` : N;
            }
            return c;
        },
        w = (c) => {
            Array.isArray(c) ? c.forEach((R) => p(R)) : p(c);
            function p(R) {
                var S;
                ((S = R == null ? void 0 : R.type) == null ? void 0 : S.name) === 'ElTableColumn' && (R.vParent = n);
            }
        };
    return {
        columnId: r,
        realAlign: i,
        isSubColumn: a,
        realHeaderAlign: o,
        columnOrTableParent: u,
        setColumnWidth: E,
        setColumnForcedProps: h,
        setColumnRenders: (c) => {
            e.renderHeader ||
                (c.type !== 'selection' &&
                    (c.renderHeader = (R) => (n.columnConfig.value.label, De(t, 'header', R, () => [c.label]))));
            let p = c.renderCell;
            return (
                c.type === 'expand'
                    ? ((c.renderCell = (R) => A('div', { class: 'cell' }, [p(R)])),
                      (l.value.renderExpanded = (R) => (t.default ? t.default(R) : t.default)))
                    : ((p = p || Po),
                      (c.renderCell = (R) => {
                          let S = null;
                          if (t.default) {
                              const B = t.default(R);
                              S = B.some((D) => D.type !== Gl) ? B : p(R);
                          } else S = p(R);
                          const { columns: N } = l.value.store.states,
                              W = N.value.findIndex((B) => B.type === 'default'),
                              K = d.value && R.cellIndex === W,
                              k = Bo(R, K),
                              M = { class: 'cell', style: {} };
                          return (
                              c.showOverflowTooltip &&
                                  ((M.class = `${M.class} ${J(s.namespace)}-tooltip`),
                                  (M.style = { width: `${(R.column.realWidth || Number(R.column.width)) - 1}px` })),
                              w(S),
                              A('div', M, [k, S])
                          );
                      })),
                c
            );
        },
        getPropsData: (...c) =>
            c.reduce(
                (p, R) => (
                    Array.isArray(R) &&
                        R.forEach((S) => {
                            p[S] = e[S];
                        }),
                    p
                ),
                {}
            ),
        getColumnElIndex: (c, p) => Array.prototype.indexOf.call(c, p),
        updateColumnOrder: () => {
            l.value.store.commit('updateColumnOrder', n.columnConfig.value);
        },
    };
}
var Do = {
    type: { type: String, default: 'default' },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: { type: [String, Number], default: '' },
    minWidth: { type: [String, Number], default: '' },
    renderHeader: Function,
    sortable: { type: [Boolean, String], default: !1 },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: { type: Boolean, default: !0 },
    columnKey: String,
    align: String,
    headerAlign: String,
    showOverflowTooltip: { type: [Boolean, Object], default: void 0 },
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: { type: Boolean, default: !0 },
    filterClassName: String,
    index: [Number, Function],
    sortOrders: {
        type: Array,
        default: () => ['ascending', 'descending', null],
        validator: (e) => e.every((t) => ['ascending', 'descending', null].includes(t)),
    },
};
let Vo = 1;
var il = Me({
    name: 'ElTableColumn',
    components: { ElCheckbox: Oe },
    props: Do,
    setup(e, { slots: t }) {
        const l = le(),
            n = x({}),
            r = P(() => {
                let m = l.parent;
                for (; m && !m.tableId; ) m = m.parent;
                return m;
            }),
            { registerNormalWatchers: a, registerComplexWatchers: i } = Ko(r, e),
            {
                columnId: o,
                isSubColumn: s,
                realHeaderAlign: u,
                columnOrTableParent: d,
                setColumnWidth: f,
                setColumnForcedProps: v,
                setColumnRenders: E,
                getPropsData: h,
                getColumnElIndex: w,
                realAlign: y,
                updateColumnOrder: b,
            } = zo(e, t, r),
            g = d.value;
        (o.value = `${g.tableId || g.columnId}_column_${Vo++}`),
            Dt(() => {
                s.value = r.value !== g;
                const m = e.type || 'default',
                    c = e.sortable === '' ? !0 : e.sortable,
                    p = _l(e.showOverflowTooltip) ? g.props.showOverflowTooltip : e.showOverflowTooltip,
                    R = {
                        ...To[m],
                        id: o.value,
                        type: m,
                        property: e.prop || e.property,
                        align: y,
                        headerAlign: u,
                        showOverflowTooltip: p,
                        filterable: e.filters || e.filterMethod,
                        filteredValue: [],
                        filterPlacement: '',
                        filterClassName: '',
                        isColumnGroup: !1,
                        isSubColumn: !1,
                        filterOpened: !1,
                        sortable: c,
                        index: e.index,
                        rawColumnKey: l.vnode.key,
                    };
                let k = h(
                    [
                        'columnKey',
                        'label',
                        'className',
                        'labelClassName',
                        'type',
                        'renderHeader',
                        'formatter',
                        'fixed',
                        'resizable',
                    ],
                    ['sortMethod', 'sortBy', 'sortOrders'],
                    ['selectable', 'reserveSelection'],
                    [
                        'filterMethod',
                        'filters',
                        'filterMultiple',
                        'filterOpened',
                        'filteredValue',
                        'filterPlacement',
                        'filterClassName',
                    ]
                );
                (k = Dn(R, k)), (k = In(E, f, v)(k)), (n.value = k), a(), i();
            }),
            Pe(() => {
                var m;
                const c = d.value,
                    p = s.value ? c.vnode.el.children : (m = c.refs.hiddenColumns) == null ? void 0 : m.children,
                    R = () => w(p || [], l.vnode.el);
                (n.value.getColumnIndex = R),
                    R() > -1 && r.value.store.commit('insertColumn', n.value, s.value ? c.columnConfig.value : null, b);
            }),
            Ql(() => {
                r.value.store.commit('removeColumn', n.value, s.value ? g.columnConfig.value : null, b);
            }),
            (l.columnId = o.value),
            (l.columnConfig = n);
    },
    render() {
        var e, t, l;
        try {
            const n = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, { row: {}, column: {}, $index: -1 }),
                r = [];
            if (Array.isArray(n))
                for (const i of n)
                    ((l = i.type) == null ? void 0 : l.name) === 'ElTableColumn' || i.shapeFlag & 2
                        ? r.push(i)
                        : i.type === Qe &&
                          Array.isArray(i.children) &&
                          i.children.forEach((o) => {
                              (o == null ? void 0 : o.patchFlag) !== 1024 &&
                                  !Zl(o == null ? void 0 : o.children) &&
                                  r.push(o);
                          });
            return A('div', r);
        } catch {
            return A('div', []);
        }
    },
});
const Jo = Jl(Ho, { TableColumn: il }),
    es = en(il);
export { Jo as E, es as a };
