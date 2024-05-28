import {
    bG as ce,
    c2 as Xt,
    bE as ue,
    bX as fe,
    b as bt,
    B as S,
    Q as L,
    R as Ut,
    S as xt,
    X as Yt,
    c as A,
    K as de,
    J as pe,
    b0 as qt,
    f as d,
    W as me,
    al as ge,
    cE as he,
    d as X,
    M as Bt,
    bf as Y,
    o as k,
    a as H,
    e as M,
    n as I,
    g as at,
    ao as gt,
    l as K,
    _ as _t,
    v as P,
    w as V,
    r as ht,
    an as ve,
    a8 as ye,
    i as Gt,
    ad as we,
    ae as Kt,
    N as St,
    u as be,
    be as xe,
    af as _e,
    a7 as Ce,
    p as Ee,
    j as nt,
    as as Oe,
    F as Tt,
    ab as Ae,
    a9 as Se,
    k as Mt,
    E as Te,
    t as pt,
    x as ke,
    P as it,
    $ as kt,
    m as Re,
    q as $e,
    az as Be,
    cL as Pe,
} from './index.4bf84d35.js';
import { E as Le } from './el-space.2e189c45.js';
import { E as Fe } from './el-divider.6ab105fa.js';
import { u as De } from './index.d2d344cd.js';
import { g as Ie, b as Ve } from './baseClone.2314aca7.js';
import { c as Ne } from './initCloneObject.a6314c21.js';
import { i as Me } from './isPlainObject.9fc5cd37.js';
import { a as We } from './flatRest.f88cd71e.js';
import './scroll.519c37f7.js';
function ze(t, e, n) {
    var o = -1,
        s = t.length;
    e < 0 && (e = -e > s ? 0 : s + e),
        (n = n > s ? s : n),
        n < 0 && (n += s),
        (s = e > n ? 0 : (n - e) >>> 0),
        (e >>>= 0);
    for (var r = Array(s); ++o < s; ) r[o] = t[o + e];
    return r;
}
function He(t) {
    var e = t == null ? 0 : t.length;
    return e ? t[e - 1] : void 0;
}
function je(t, e) {
    return e.length < 2 ? t : ce(t, ze(e, 0, -1));
}
function Xe(t, e) {
    return (e = Xt(e, t)), (t = je(t, e)), t == null || delete t[ue(He(e))];
}
function Ue(t) {
    return Me(t) ? void 0 : t;
}
var Ye = 1,
    qe = 2,
    Ge = 4,
    Ke = We(function (t, e) {
        var n = {};
        if (t == null) return n;
        var o = !1;
        (e = fe(e, function (r) {
            return (r = Xt(r, t)), o || (o = r.length > 1), r;
        })),
            Ne(t, Ie(t), n),
            o && (n = Ve(n, Ye | qe | Ge, Ue));
        for (var s = e.length; s--; ) Xe(n, e[s]);
        return n;
    });
const Ze = Ke,
    st = Math.min,
    Q = Math.max,
    vt = Math.round,
    mt = Math.floor,
    Z = (t) => ({ x: t, y: t }),
    Je = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    Qe = { start: 'end', end: 'start' };
function Rt(t, e, n) {
    return Q(t, st(e, n));
}
function ut(t, e) {
    return typeof t == 'function' ? t(e) : t;
}
function tt(t) {
    return t.split('-')[0];
}
function ft(t) {
    return t.split('-')[1];
}
function Zt(t) {
    return t === 'x' ? 'y' : 'x';
}
function Pt(t) {
    return t === 'y' ? 'height' : 'width';
}
function Ct(t) {
    return ['top', 'bottom'].includes(tt(t)) ? 'y' : 'x';
}
function Lt(t) {
    return Zt(Ct(t));
}
function tn(t, e, n) {
    n === void 0 && (n = !1);
    const o = ft(t),
        s = Lt(t),
        r = Pt(s);
    let l = s === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top';
    return e.reference[r] > e.floating[r] && (l = yt(l)), [l, yt(l)];
}
function en(t) {
    const e = yt(t);
    return [$t(t), e, $t(e)];
}
function $t(t) {
    return t.replace(/start|end/g, (e) => Qe[e]);
}
function nn(t, e, n) {
    const o = ['left', 'right'],
        s = ['right', 'left'],
        r = ['top', 'bottom'],
        l = ['bottom', 'top'];
    switch (t) {
        case 'top':
        case 'bottom':
            return n ? (e ? s : o) : e ? o : s;
        case 'left':
        case 'right':
            return e ? r : l;
        default:
            return [];
    }
}
function on(t, e, n, o) {
    const s = ft(t);
    let r = nn(tt(t), n === 'start', o);
    return s && ((r = r.map((l) => l + '-' + s)), e && (r = r.concat(r.map($t)))), r;
}
function yt(t) {
    return t.replace(/left|right|bottom|top/g, (e) => Je[e]);
}
function sn(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Jt(t) {
    return typeof t != 'number' ? sn(t) : { top: t, right: t, bottom: t, left: t };
}
function wt(t) {
    return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
function Wt(t, e, n) {
    let { reference: o, floating: s } = t;
    const r = Ct(e),
        l = Lt(e),
        i = Pt(l),
        c = tt(e),
        u = r === 'y',
        p = o.x + o.width / 2 - s.width / 2,
        a = o.y + o.height / 2 - s.height / 2,
        m = o[i] / 2 - s[i] / 2;
    let f;
    switch (c) {
        case 'top':
            f = { x: p, y: o.y - s.height };
            break;
        case 'bottom':
            f = { x: p, y: o.y + o.height };
            break;
        case 'right':
            f = { x: o.x + o.width, y: a };
            break;
        case 'left':
            f = { x: o.x - s.width, y: a };
            break;
        default:
            f = { x: o.x, y: o.y };
    }
    switch (ft(e)) {
        case 'start':
            f[l] -= m * (n && u ? -1 : 1);
            break;
        case 'end':
            f[l] += m * (n && u ? -1 : 1);
            break;
    }
    return f;
}
const rn = async (t, e, n) => {
    const { placement: o = 'bottom', strategy: s = 'absolute', middleware: r = [], platform: l } = n,
        i = r.filter(Boolean),
        c = await (l.isRTL == null ? void 0 : l.isRTL(e));
    let u = await l.getElementRects({ reference: t, floating: e, strategy: s }),
        { x: p, y: a } = Wt(u, o, c),
        m = o,
        f = {},
        h = 0;
    for (let y = 0; y < i.length; y++) {
        const { name: w, fn: g } = i[y],
            {
                x: b,
                y: _,
                data: E,
                reset: O,
            } = await g({
                x: p,
                y: a,
                initialPlacement: o,
                placement: m,
                strategy: s,
                middlewareData: f,
                rects: u,
                platform: l,
                elements: { reference: t, floating: e },
            });
        (p = b != null ? b : p),
            (a = _ != null ? _ : a),
            (f = { ...f, [w]: { ...f[w], ...E } }),
            O &&
                h <= 50 &&
                (h++,
                typeof O == 'object' &&
                    (O.placement && (m = O.placement),
                    O.rects &&
                        (u =
                            O.rects === !0
                                ? await l.getElementRects({ reference: t, floating: e, strategy: s })
                                : O.rects),
                    ({ x: p, y: a } = Wt(u, m, c))),
                (y = -1));
    }
    return { x: p, y: a, placement: m, strategy: s, middlewareData: f };
};
async function Ft(t, e) {
    var n;
    e === void 0 && (e = {});
    const { x: o, y: s, platform: r, rects: l, elements: i, strategy: c } = t,
        {
            boundary: u = 'clippingAncestors',
            rootBoundary: p = 'viewport',
            elementContext: a = 'floating',
            altBoundary: m = !1,
            padding: f = 0,
        } = ut(e, t),
        h = Jt(f),
        w = i[m ? (a === 'floating' ? 'reference' : 'floating') : a],
        g = wt(
            await r.getClippingRect({
                element:
                    (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                          (await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating))),
                boundary: u,
                rootBoundary: p,
                strategy: c,
            })
        ),
        b = a === 'floating' ? { ...l.floating, x: o, y: s } : l.reference,
        _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)),
        E = (await (r.isElement == null ? void 0 : r.isElement(_)))
            ? (await (r.getScale == null ? void 0 : r.getScale(_))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        O = wt(
            r.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: i,
                      rect: b,
                      offsetParent: _,
                      strategy: c,
                  })
                : b
        );
    return {
        top: (g.top - O.top + h.top) / E.y,
        bottom: (O.bottom - g.bottom + h.bottom) / E.y,
        left: (g.left - O.left + h.left) / E.x,
        right: (O.right - g.right + h.right) / E.x,
    };
}
const ln = (t) => ({
        name: 'arrow',
        options: t,
        async fn(e) {
            const { x: n, y: o, placement: s, rects: r, platform: l, elements: i, middlewareData: c } = e,
                { element: u, padding: p = 0 } = ut(t, e) || {};
            if (u == null) return {};
            const a = Jt(p),
                m = { x: n, y: o },
                f = Lt(s),
                h = Pt(f),
                y = await l.getDimensions(u),
                w = f === 'y',
                g = w ? 'top' : 'left',
                b = w ? 'bottom' : 'right',
                _ = w ? 'clientHeight' : 'clientWidth',
                E = r.reference[h] + r.reference[f] - m[f] - r.floating[h],
                O = m[f] - r.reference[f],
                R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
            let $ = R ? R[_] : 0;
            (!$ || !(await (l.isElement == null ? void 0 : l.isElement(R)))) && ($ = i.floating[_] || r.floating[h]);
            const x = E / 2 - O / 2,
                v = $ / 2 - y[h] / 2 - 1,
                C = st(a[g], v),
                T = st(a[b], v),
                B = C,
                lt = $ - y[h] - T,
                F = $ / 2 - y[h] / 2 + x,
                W = Rt(B, F, lt),
                z = !c.arrow && ft(s) != null && F !== W && r.reference[h] / 2 - (F < B ? C : T) - y[h] / 2 < 0,
                U = z ? (F < B ? F - B : F - lt) : 0;
            return {
                [f]: m[f] + U,
                data: { [f]: W, centerOffset: F - W - U, ...(z && { alignmentOffset: U }) },
                reset: z,
            };
        },
    }),
    an = function (t) {
        return (
            t === void 0 && (t = {}),
            {
                name: 'flip',
                options: t,
                async fn(e) {
                    var n, o;
                    const {
                            placement: s,
                            middlewareData: r,
                            rects: l,
                            initialPlacement: i,
                            platform: c,
                            elements: u,
                        } = e,
                        {
                            mainAxis: p = !0,
                            crossAxis: a = !0,
                            fallbackPlacements: m,
                            fallbackStrategy: f = 'bestFit',
                            fallbackAxisSideDirection: h = 'none',
                            flipAlignment: y = !0,
                            ...w
                        } = ut(t, e);
                    if ((n = r.arrow) != null && n.alignmentOffset) return {};
                    const g = tt(s),
                        b = tt(i) === i,
                        _ = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                        E = m || (b || !y ? [yt(i)] : en(i));
                    !m && h !== 'none' && E.push(...on(i, y, h, _));
                    const O = [i, ...E],
                        R = await Ft(e, w),
                        $ = [];
                    let x = ((o = r.flip) == null ? void 0 : o.overflows) || [];
                    if ((p && $.push(R[g]), a)) {
                        const B = tn(s, l, _);
                        $.push(R[B[0]], R[B[1]]);
                    }
                    if (((x = [...x, { placement: s, overflows: $ }]), !$.every((B) => B <= 0))) {
                        var v, C;
                        const B = (((v = r.flip) == null ? void 0 : v.index) || 0) + 1,
                            lt = O[B];
                        if (lt) return { data: { index: B, overflows: x }, reset: { placement: lt } };
                        let F =
                            (C = x
                                .filter((W) => W.overflows[0] <= 0)
                                .sort((W, z) => W.overflows[1] - z.overflows[1])[0]) == null
                                ? void 0
                                : C.placement;
                        if (!F)
                            switch (f) {
                                case 'bestFit': {
                                    var T;
                                    const W =
                                        (T = x
                                            .map((z) => [
                                                z.placement,
                                                z.overflows.filter((U) => U > 0).reduce((U, ae) => U + ae, 0),
                                            ])
                                            .sort((z, U) => z[1] - U[1])[0]) == null
                                            ? void 0
                                            : T[0];
                                    W && (F = W);
                                    break;
                                }
                                case 'initialPlacement':
                                    F = i;
                                    break;
                            }
                        if (s !== F) return { reset: { placement: F } };
                    }
                    return {};
                },
            }
        );
    };
async function cn(t, e) {
    const { placement: n, platform: o, elements: s } = t,
        r = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
        l = tt(n),
        i = ft(n),
        c = Ct(n) === 'y',
        u = ['left', 'top'].includes(l) ? -1 : 1,
        p = r && c ? -1 : 1,
        a = ut(e, t);
    let {
        mainAxis: m,
        crossAxis: f,
        alignmentAxis: h,
    } = typeof a == 'number'
        ? { mainAxis: a, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...a };
    return (
        i && typeof h == 'number' && (f = i === 'end' ? h * -1 : h), c ? { x: f * p, y: m * u } : { x: m * u, y: f * p }
    );
}
const un = function (t) {
        return (
            t === void 0 && (t = 0),
            {
                name: 'offset',
                options: t,
                async fn(e) {
                    var n, o;
                    const { x: s, y: r, placement: l, middlewareData: i } = e,
                        c = await cn(e, t);
                    return l === ((n = i.offset) == null ? void 0 : n.placement) &&
                        (o = i.arrow) != null &&
                        o.alignmentOffset
                        ? {}
                        : { x: s + c.x, y: r + c.y, data: { ...c, placement: l } };
                },
            }
        );
    },
    fn = function (t) {
        return (
            t === void 0 && (t = {}),
            {
                name: 'shift',
                options: t,
                async fn(e) {
                    const { x: n, y: o, placement: s } = e,
                        {
                            mainAxis: r = !0,
                            crossAxis: l = !1,
                            limiter: i = {
                                fn: (w) => {
                                    let { x: g, y: b } = w;
                                    return { x: g, y: b };
                                },
                            },
                            ...c
                        } = ut(t, e),
                        u = { x: n, y: o },
                        p = await Ft(e, c),
                        a = Ct(tt(s)),
                        m = Zt(a);
                    let f = u[m],
                        h = u[a];
                    if (r) {
                        const w = m === 'y' ? 'top' : 'left',
                            g = m === 'y' ? 'bottom' : 'right',
                            b = f + p[w],
                            _ = f - p[g];
                        f = Rt(b, f, _);
                    }
                    if (l) {
                        const w = a === 'y' ? 'top' : 'left',
                            g = a === 'y' ? 'bottom' : 'right',
                            b = h + p[w],
                            _ = h - p[g];
                        h = Rt(b, h, _);
                    }
                    const y = i.fn({ ...e, [m]: f, [a]: h });
                    return { ...y, data: { x: y.x - n, y: y.y - o } };
                },
            }
        );
    };
function J(t) {
    return Qt(t) ? (t.nodeName || '').toLowerCase() : '#document';
}
function D(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function G(t) {
    var e;
    return (e = (Qt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Qt(t) {
    return t instanceof Node || t instanceof D(t).Node;
}
function q(t) {
    return t instanceof Element || t instanceof D(t).Element;
}
function j(t) {
    return t instanceof HTMLElement || t instanceof D(t).HTMLElement;
}
function zt(t) {
    return typeof ShadowRoot > 'u' ? !1 : t instanceof ShadowRoot || t instanceof D(t).ShadowRoot;
}
function dt(t) {
    const { overflow: e, overflowX: n, overflowY: o, display: s } = N(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !['inline', 'contents'].includes(s);
}
function dn(t) {
    return ['table', 'td', 'th'].includes(J(t));
}
function Dt(t) {
    const e = It(),
        n = N(t);
    return (
        n.transform !== 'none' ||
        n.perspective !== 'none' ||
        (n.containerType ? n.containerType !== 'normal' : !1) ||
        (!e && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
        (!e && (n.filter ? n.filter !== 'none' : !1)) ||
        ['transform', 'perspective', 'filter'].some((o) => (n.willChange || '').includes(o)) ||
        ['paint', 'layout', 'strict', 'content'].some((o) => (n.contain || '').includes(o))
    );
}
function pn(t) {
    let e = rt(t);
    for (; j(e) && !Et(e); ) {
        if (Dt(e)) return e;
        e = rt(e);
    }
    return null;
}
function It() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Et(t) {
    return ['html', 'body', '#document'].includes(J(t));
}
function N(t) {
    return D(t).getComputedStyle(t);
}
function Ot(t) {
    return q(t)
        ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
        : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function rt(t) {
    if (J(t) === 'html') return t;
    const e = t.assignedSlot || t.parentNode || (zt(t) && t.host) || G(t);
    return zt(e) ? e.host : e;
}
function te(t) {
    const e = rt(t);
    return Et(e) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : j(e) && dt(e) ? e : te(e);
}
function ct(t, e, n) {
    var o;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    const s = te(t),
        r = s === ((o = t.ownerDocument) == null ? void 0 : o.body),
        l = D(s);
    return r
        ? e.concat(l, l.visualViewport || [], dt(s) ? s : [], l.frameElement && n ? ct(l.frameElement) : [])
        : e.concat(s, ct(s, [], n));
}
function ee(t) {
    const e = N(t);
    let n = parseFloat(e.width) || 0,
        o = parseFloat(e.height) || 0;
    const s = j(t),
        r = s ? t.offsetWidth : n,
        l = s ? t.offsetHeight : o,
        i = vt(n) !== r || vt(o) !== l;
    return i && ((n = r), (o = l)), { width: n, height: o, $: i };
}
function Vt(t) {
    return q(t) ? t : t.contextElement;
}
function ot(t) {
    const e = Vt(t);
    if (!j(e)) return Z(1);
    const n = e.getBoundingClientRect(),
        { width: o, height: s, $: r } = ee(e);
    let l = (r ? vt(n.width) : n.width) / o,
        i = (r ? vt(n.height) : n.height) / s;
    return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), { x: l, y: i };
}
const mn = Z(0);
function ne(t) {
    const e = D(t);
    return !It() || !e.visualViewport ? mn : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function gn(t, e, n) {
    return e === void 0 && (e = !1), !n || (e && n !== D(t)) ? !1 : e;
}
function et(t, e, n, o) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const s = t.getBoundingClientRect(),
        r = Vt(t);
    let l = Z(1);
    e && (o ? q(o) && (l = ot(o)) : (l = ot(t)));
    const i = gn(r, n, o) ? ne(r) : Z(0);
    let c = (s.left + i.x) / l.x,
        u = (s.top + i.y) / l.y,
        p = s.width / l.x,
        a = s.height / l.y;
    if (r) {
        const m = D(r),
            f = o && q(o) ? D(o) : o;
        let h = m,
            y = h.frameElement;
        for (; y && o && f !== h; ) {
            const w = ot(y),
                g = y.getBoundingClientRect(),
                b = N(y),
                _ = g.left + (y.clientLeft + parseFloat(b.paddingLeft)) * w.x,
                E = g.top + (y.clientTop + parseFloat(b.paddingTop)) * w.y;
            (c *= w.x), (u *= w.y), (p *= w.x), (a *= w.y), (c += _), (u += E), (h = D(y)), (y = h.frameElement);
        }
    }
    return wt({ width: p, height: a, x: c, y: u });
}
const hn = [':popover-open', ':modal'];
function oe(t) {
    return hn.some((e) => {
        try {
            return t.matches(e);
        } catch {
            return !1;
        }
    });
}
function vn(t) {
    let { elements: e, rect: n, offsetParent: o, strategy: s } = t;
    const r = s === 'fixed',
        l = G(o),
        i = e ? oe(e.floating) : !1;
    if (o === l || (i && r)) return n;
    let c = { scrollLeft: 0, scrollTop: 0 },
        u = Z(1);
    const p = Z(0),
        a = j(o);
    if ((a || (!a && !r)) && ((J(o) !== 'body' || dt(l)) && (c = Ot(o)), j(o))) {
        const m = et(o);
        (u = ot(o)), (p.x = m.x + o.clientLeft), (p.y = m.y + o.clientTop);
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + p.x,
        y: n.y * u.y - c.scrollTop * u.y + p.y,
    };
}
function yn(t) {
    return Array.from(t.getClientRects());
}
function se(t) {
    return et(G(t)).left + Ot(t).scrollLeft;
}
function wn(t) {
    const e = G(t),
        n = Ot(t),
        o = t.ownerDocument.body,
        s = Q(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
        r = Q(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
    let l = -n.scrollLeft + se(t);
    const i = -n.scrollTop;
    return N(o).direction === 'rtl' && (l += Q(e.clientWidth, o.clientWidth) - s), { width: s, height: r, x: l, y: i };
}
function bn(t, e) {
    const n = D(t),
        o = G(t),
        s = n.visualViewport;
    let r = o.clientWidth,
        l = o.clientHeight,
        i = 0,
        c = 0;
    if (s) {
        (r = s.width), (l = s.height);
        const u = It();
        (!u || (u && e === 'fixed')) && ((i = s.offsetLeft), (c = s.offsetTop));
    }
    return { width: r, height: l, x: i, y: c };
}
function xn(t, e) {
    const n = et(t, !0, e === 'fixed'),
        o = n.top + t.clientTop,
        s = n.left + t.clientLeft,
        r = j(t) ? ot(t) : Z(1),
        l = t.clientWidth * r.x,
        i = t.clientHeight * r.y,
        c = s * r.x,
        u = o * r.y;
    return { width: l, height: i, x: c, y: u };
}
function Ht(t, e, n) {
    let o;
    if (e === 'viewport') o = bn(t, n);
    else if (e === 'document') o = wn(G(t));
    else if (q(e)) o = xn(e, n);
    else {
        const s = ne(t);
        o = { ...e, x: e.x - s.x, y: e.y - s.y };
    }
    return wt(o);
}
function re(t, e) {
    const n = rt(t);
    return n === e || !q(n) || Et(n) ? !1 : N(n).position === 'fixed' || re(n, e);
}
function _n(t, e) {
    const n = e.get(t);
    if (n) return n;
    let o = ct(t, [], !1).filter((i) => q(i) && J(i) !== 'body'),
        s = null;
    const r = N(t).position === 'fixed';
    let l = r ? rt(t) : t;
    for (; q(l) && !Et(l); ) {
        const i = N(l),
            c = Dt(l);
        !c && i.position === 'fixed' && (s = null),
            (
                r
                    ? !c && !s
                    : (!c && i.position === 'static' && !!s && ['absolute', 'fixed'].includes(s.position)) ||
                      (dt(l) && !c && re(t, l))
            )
                ? (o = o.filter((p) => p !== l))
                : (s = i),
            (l = rt(l));
    }
    return e.set(t, o), o;
}
function Cn(t) {
    let { element: e, boundary: n, rootBoundary: o, strategy: s } = t;
    const l = [...(n === 'clippingAncestors' ? _n(e, this._c) : [].concat(n)), o],
        i = l[0],
        c = l.reduce((u, p) => {
            const a = Ht(e, p, s);
            return (
                (u.top = Q(a.top, u.top)),
                (u.right = st(a.right, u.right)),
                (u.bottom = st(a.bottom, u.bottom)),
                (u.left = Q(a.left, u.left)),
                u
            );
        }, Ht(e, i, s));
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function En(t) {
    const { width: e, height: n } = ee(t);
    return { width: e, height: n };
}
function On(t, e, n) {
    const o = j(e),
        s = G(e),
        r = n === 'fixed',
        l = et(t, !0, r, e);
    let i = { scrollLeft: 0, scrollTop: 0 };
    const c = Z(0);
    if (o || (!o && !r))
        if (((J(e) !== 'body' || dt(s)) && (i = Ot(e)), o)) {
            const a = et(e, !0, r, e);
            (c.x = a.x + e.clientLeft), (c.y = a.y + e.clientTop);
        } else s && (c.x = se(s));
    const u = l.left + i.scrollLeft - c.x,
        p = l.top + i.scrollTop - c.y;
    return { x: u, y: p, width: l.width, height: l.height };
}
function jt(t, e) {
    return !j(t) || N(t).position === 'fixed' ? null : e ? e(t) : t.offsetParent;
}
function le(t, e) {
    const n = D(t);
    if (!j(t) || oe(t)) return n;
    let o = jt(t, e);
    for (; o && dn(o) && N(o).position === 'static'; ) o = jt(o, e);
    return o && (J(o) === 'html' || (J(o) === 'body' && N(o).position === 'static' && !Dt(o))) ? n : o || pn(t) || n;
}
const An = async function (t) {
    const e = this.getOffsetParent || le,
        n = this.getDimensions;
    return {
        reference: On(t.reference, await e(t.floating), t.strategy),
        floating: { x: 0, y: 0, ...(await n(t.floating)) },
    };
};
function Sn(t) {
    return N(t).direction === 'rtl';
}
const Tn = {
    convertOffsetParentRelativeRectToViewportRelativeRect: vn,
    getDocumentElement: G,
    getClippingRect: Cn,
    getOffsetParent: le,
    getElementRects: An,
    getClientRects: yn,
    getDimensions: En,
    getScale: ot,
    isElement: q,
    isRTL: Sn,
};
function kn(t, e) {
    let n = null,
        o;
    const s = G(t);
    function r() {
        var i;
        clearTimeout(o), (i = n) == null || i.disconnect(), (n = null);
    }
    function l(i, c) {
        i === void 0 && (i = !1), c === void 0 && (c = 1), r();
        const { left: u, top: p, width: a, height: m } = t.getBoundingClientRect();
        if ((i || e(), !a || !m)) return;
        const f = mt(p),
            h = mt(s.clientWidth - (u + a)),
            y = mt(s.clientHeight - (p + m)),
            w = mt(u),
            b = { rootMargin: -f + 'px ' + -h + 'px ' + -y + 'px ' + -w + 'px', threshold: Q(0, st(1, c)) || 1 };
        let _ = !0;
        function E(O) {
            const R = O[0].intersectionRatio;
            if (R !== c) {
                if (!_) return l();
                R
                    ? l(!1, R)
                    : (o = setTimeout(() => {
                          l(!1, 1e-7);
                      }, 100));
            }
            _ = !1;
        }
        try {
            n = new IntersectionObserver(E, { ...b, root: s.ownerDocument });
        } catch {
            n = new IntersectionObserver(E, b);
        }
        n.observe(t);
    }
    return l(!0), r;
}
function Rn(t, e, n, o) {
    o === void 0 && (o = {});
    const {
            ancestorScroll: s = !0,
            ancestorResize: r = !0,
            elementResize: l = typeof ResizeObserver == 'function',
            layoutShift: i = typeof IntersectionObserver == 'function',
            animationFrame: c = !1,
        } = o,
        u = Vt(t),
        p = s || r ? [...(u ? ct(u) : []), ...ct(e)] : [];
    p.forEach((g) => {
        s && g.addEventListener('scroll', n, { passive: !0 }), r && g.addEventListener('resize', n);
    });
    const a = u && i ? kn(u, n) : null;
    let m = -1,
        f = null;
    l &&
        ((f = new ResizeObserver((g) => {
            let [b] = g;
            b &&
                b.target === u &&
                f &&
                (f.unobserve(e),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var _;
                    (_ = f) == null || _.observe(e);
                }))),
                n();
        })),
        u && !c && f.observe(u),
        f.observe(e));
    let h,
        y = c ? et(t) : null;
    c && w();
    function w() {
        const g = et(t);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
            (y = g),
            (h = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var g;
            p.forEach((b) => {
                s && b.removeEventListener('scroll', n), r && b.removeEventListener('resize', n);
            }),
                a == null || a(),
                (g = f) == null || g.disconnect(),
                (f = null),
                c && cancelAnimationFrame(h);
        }
    );
}
const $n = fn,
    Bn = an,
    Pn = ln,
    Ln = (t, e, n) => {
        const o = new Map(),
            s = { platform: Tn, ...n },
            r = { ...s.platform, _c: o };
        return rn(t, e, { ...s, platform: r });
    },
    Fn = bt({
        zIndex: { type: Number, default: 1001 },
        visible: Boolean,
        fill: { type: String, default: 'rgba(0,0,0,0.5)' },
        pos: { type: S(Object) },
        targetAreaClickable: { type: Boolean, default: !0 },
    }),
    Dn = (t, e, n, o, s) => {
        const r = L(null),
            l = () => {
                let a;
                return (
                    de(t.value) ? (a = document.querySelector(t.value)) : pe(t.value) ? (a = t.value()) : (a = t.value),
                    a
                );
            },
            i = () => {
                const a = l();
                if (!a || !e.value) {
                    r.value = null;
                    return;
                }
                !In(a) && e.value && a.scrollIntoView(s.value);
                const { left: m, top: f, width: h, height: y } = a.getBoundingClientRect();
                r.value = { left: m, top: f, width: h, height: y, radius: 0 };
            };
        Ut(() => {
            xt(
                [e, t],
                () => {
                    i();
                },
                { immediate: !0 }
            ),
                window.addEventListener('resize', i);
        }),
            Yt(() => {
                window.removeEventListener('resize', i);
            });
        const c = (a) => {
                var m;
                return (m = qt(n.value.offset) ? n.value.offset[a] : n.value.offset) != null ? m : 6;
            },
            u = A(() => {
                var a;
                if (!r.value) return r.value;
                const m = c(0),
                    f = c(1),
                    h = ((a = n.value) == null ? void 0 : a.radius) || 2;
                return {
                    left: r.value.left - m,
                    top: r.value.top - f,
                    width: r.value.width + m * 2,
                    height: r.value.height + f * 2,
                    radius: h,
                };
            }),
            p = A(() => {
                const a = l();
                return !o.value || !a || !window.DOMRect
                    ? a || void 0
                    : {
                          getBoundingClientRect() {
                              var m, f, h, y;
                              return window.DOMRect.fromRect({
                                  width: ((m = u.value) == null ? void 0 : m.width) || 0,
                                  height: ((f = u.value) == null ? void 0 : f.height) || 0,
                                  x: ((h = u.value) == null ? void 0 : h.left) || 0,
                                  y: ((y = u.value) == null ? void 0 : y.top) || 0,
                              });
                          },
                      };
            });
        return { mergedPosInfo: u, triggerTarget: p };
    },
    At = Symbol('ElTour');
function In(t) {
    const e = window.innerWidth || document.documentElement.clientWidth,
        n = window.innerHeight || document.documentElement.clientHeight,
        { top: o, right: s, bottom: r, left: l } = t.getBoundingClientRect();
    return o >= 0 && l >= 0 && s <= e && r <= n;
}
const Vn = (t, e, n, o, s, r, l, i) => {
        const c = L(),
            u = L(),
            p = L({}),
            a = { x: c, y: u, placement: o, strategy: s, middlewareData: p },
            m = A(() => {
                const g = [un(d(r)), Bn(), $n(), Nn()];
                return d(i) && d(n) && g.push(Pn({ element: d(n) })), g;
            }),
            f = async () => {
                if (!ge) return;
                const g = d(t),
                    b = d(e);
                if (!g || !b) return;
                const _ = await Ln(g, b, { placement: d(o), strategy: d(s), middleware: d(m) });
                he(a).forEach((E) => {
                    a[E].value = _[E];
                });
            },
            h = A(() => {
                if (!d(t))
                    return {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate3d(-50%, -50%, 0)',
                        maxWidth: '100vw',
                        zIndex: d(l),
                    };
                const { overflow: g } = d(p);
                return {
                    position: d(s),
                    zIndex: d(l),
                    top: d(u) != null ? `${d(u)}px` : '',
                    left: d(c) != null ? `${d(c)}px` : '',
                    maxWidth: g != null && g.maxWidth ? `${g == null ? void 0 : g.maxWidth}px` : '',
                };
            }),
            y = A(() => {
                if (!d(i)) return {};
                const { arrow: g } = d(p);
                return {
                    left: (g == null ? void 0 : g.x) != null ? `${g == null ? void 0 : g.x}px` : '',
                    top: (g == null ? void 0 : g.y) != null ? `${g == null ? void 0 : g.y}px` : '',
                };
            });
        let w;
        return (
            Ut(() => {
                const g = d(t),
                    b = d(e);
                g && b && (w = Rn(g, b, f)),
                    me(() => {
                        f();
                    });
            }),
            Yt(() => {
                w && w();
            }),
            { update: f, contentStyle: h, arrowStyle: y }
        );
    },
    Nn = () => ({
        name: 'overflow',
        async fn(t) {
            const e = await Ft(t);
            let n = 0;
            return (
                e.left > 0 && (n = e.left),
                e.right > 0 && (n = e.right),
                { data: { maxWidth: t.rects.floating.width - n } }
            );
        },
    }),
    Mn = { style: { width: '100%', height: '100%' } },
    Wn = ['d'],
    zn = X({ name: 'ElTourMask', inheritAttrs: !1 }),
    Hn = X({
        ...zn,
        props: Fn,
        setup(t) {
            const e = t,
                { ns: n } = Bt(At),
                o = A(() => {
                    var i, c;
                    return (c = (i = e.pos) == null ? void 0 : i.radius) != null ? c : 2;
                }),
                s = A(() => {
                    const i = o.value,
                        c = `a${i},${i} 0 0 1`;
                    return {
                        topRight: `${c} ${i},${i}`,
                        bottomRight: `${c} ${-i},${i}`,
                        bottomLeft: `${c} ${-i},${-i}`,
                        topLeft: `${c} ${i},${-i}`,
                    };
                }),
                r = A(() => {
                    const i = window.innerWidth,
                        c = window.innerHeight,
                        u = s.value,
                        p = `M${i},0 L0,0 L0,${c} L${i},${c} L${i},0 Z`,
                        a = o.value;
                    return e.pos
                        ? `${p} M${e.pos.left + a},${e.pos.top} h${e.pos.width - a * 2} ${u.topRight} v${
                              e.pos.height - a * 2
                          } ${u.bottomRight} h${-e.pos.width + a * 2} ${u.bottomLeft} v${-e.pos.height + a * 2} ${
                              u.topLeft
                          } z`
                        : p;
                }),
                l = A(() => ({ fill: e.fill, pointerEvents: 'auto', cursor: 'auto' }));
            return (
                De(Y(e, 'visible'), { ns: n }),
                (i, c) =>
                    i.visible
                        ? (k(),
                          H(
                              'div',
                              gt(
                                  {
                                      key: 0,
                                      class: d(n).e('mask'),
                                      style: {
                                          position: 'fixed',
                                          left: 0,
                                          right: 0,
                                          top: 0,
                                          bottom: 0,
                                          zIndex: i.zIndex,
                                          pointerEvents: i.pos && i.targetAreaClickable ? 'none' : 'auto',
                                      },
                                  },
                                  i.$attrs
                              ),
                              [
                                  (k(),
                                  H('svg', Mn, [
                                      M('path', { class: I(d(n).e('hollow')), style: at(d(l)), d: d(r) }, null, 14, Wn),
                                  ])),
                              ],
                              16
                          ))
                        : K('v-if', !0)
            );
        },
    });
var jn = _t(Hn, [['__file', 'mask.vue']]);
const Xn = ['absolute', 'fixed'],
    Un = [
        'top-start',
        'top-end',
        'top',
        'bottom-start',
        'bottom-end',
        'bottom',
        'left-start',
        'left-end',
        'left',
        'right-start',
        'right-end',
        'right',
    ],
    Nt = bt({
        placement: { type: S(String), values: Un, default: 'bottom' },
        reference: { type: S(Object), default: null },
        strategy: { type: S(String), values: Xn, default: 'absolute' },
        offset: { type: Number, default: 10 },
        showArrow: Boolean,
        zIndex: { type: Number, default: 2001 },
    }),
    Yn = { close: () => !0 },
    qn = ['data-side'],
    Gn = X({ name: 'ElTourContent' }),
    Kn = X({
        ...Gn,
        props: Nt,
        emits: Yn,
        setup(t, { emit: e }) {
            const n = t,
                o = L(n.placement),
                s = L(n.strategy),
                r = L(null),
                l = L(null);
            xt(
                () => n.placement,
                () => {
                    o.value = n.placement;
                }
            );
            const { contentStyle: i, arrowStyle: c } = Vn(
                    Y(n, 'reference'),
                    r,
                    l,
                    o,
                    s,
                    Y(n, 'offset'),
                    Y(n, 'zIndex'),
                    Y(n, 'showArrow')
                ),
                u = A(() => o.value.split('-')[0]),
                { ns: p } = Bt(At),
                a = () => {
                    e('close');
                },
                m = (f) => {
                    f.detail.focusReason === 'pointer' && f.preventDefault();
                };
            return (f, h) => (
                k(),
                H(
                    'div',
                    {
                        ref_key: 'contentRef',
                        ref: r,
                        style: at(d(i)),
                        class: I(d(p).e('content')),
                        'data-side': d(u),
                        tabindex: '-1',
                    },
                    [
                        P(
                            d(ve),
                            {
                                loop: '',
                                trapped: '',
                                'focus-start-el': 'container',
                                'focus-trap-el': r.value || void 0,
                                onReleaseRequested: a,
                                onFocusoutPrevented: m,
                            },
                            { default: V(() => [ht(f.$slots, 'default')]), _: 3 },
                            8,
                            ['focus-trap-el']
                        ),
                        f.showArrow
                            ? (k(),
                              H(
                                  'span',
                                  { key: 0, ref_key: 'arrowRef', ref: l, style: at(d(c)), class: I(d(p).e('arrow')) },
                                  null,
                                  6
                              ))
                            : K('v-if', !0),
                    ],
                    14,
                    qn
                )
            );
        },
    });
var Zn = _t(Kn, [['__file', 'content.vue']]),
    Jn = X({
        name: 'ElTourSteps',
        props: { current: { type: Number, default: 0 } },
        emits: ['update-total'],
        setup(t, { slots: e, emit: n }) {
            let o = 0;
            return () => {
                var s, r;
                const l = (s = e.default) == null ? void 0 : s.call(e),
                    i = [];
                let c = 0;
                function u(p) {
                    !qt(p) ||
                        p.forEach((a) => {
                            var m;
                            ((m = (a == null ? void 0 : a.type) || {}) == null ? void 0 : m.name) === 'ElTourStep' &&
                                (i.push(a), (c += 1));
                        });
                }
                return (
                    l.length && u(ye((r = l[0]) == null ? void 0 : r.children)),
                    o !== c && ((o = c), n('update-total', c)),
                    i.length ? i[t.current] : null
                );
            };
        },
    });
const Qn = bt({
        modelValue: Boolean,
        current: { type: Number, default: 0 },
        showArrow: { type: Boolean, default: !0 },
        showClose: { type: Boolean, default: !0 },
        closeIcon: { type: Gt },
        placement: Nt.placement,
        contentStyle: { type: S([Object]) },
        mask: { type: S([Boolean, Object]), default: !0 },
        gap: { type: S(Object), default: () => ({ offset: 6, radius: 2 }) },
        zIndex: { type: Number },
        scrollIntoViewOptions: { type: S([Boolean, Object]), default: () => ({ block: 'center' }) },
        type: { type: S(String) },
        appendTo: { type: S([String, Object]), default: 'body' },
        closeOnPressEscape: { type: Boolean, default: !0 },
        targetAreaClickable: { type: Boolean, default: !0 },
    }),
    to = {
        [we]: (t) => Kt(t),
        ['update:current']: (t) => St(t),
        close: (t) => St(t),
        finish: () => !0,
        change: (t) => St(t),
    },
    eo = X({ name: 'ElTour' }),
    no = X({
        ...eo,
        props: Qn,
        emits: to,
        setup(t, { emit: e }) {
            const n = t,
                o = be('tour'),
                s = L(0),
                r = L(),
                l = xe(n, 'current', e, { passive: !0 }),
                i = A(() => {
                    var v;
                    return (v = r.value) == null ? void 0 : v.target;
                }),
                c = A(() => [o.b(), w.value === 'primary' ? o.m('primary') : '']),
                u = A(() => {
                    var v;
                    return ((v = r.value) == null ? void 0 : v.placement) || n.placement;
                }),
                p = A(() => {
                    var v, C;
                    return (C = (v = r.value) == null ? void 0 : v.contentStyle) != null ? C : n.contentStyle;
                }),
                a = A(() => {
                    var v, C;
                    return (C = (v = r.value) == null ? void 0 : v.mask) != null ? C : n.mask;
                }),
                m = A(() => !!a.value && n.modelValue),
                f = A(() => (Kt(a.value) ? void 0 : a.value)),
                h = A(() => {
                    var v, C;
                    return !!i.value && ((C = (v = r.value) == null ? void 0 : v.showArrow) != null ? C : n.showArrow);
                }),
                y = A(() => {
                    var v, C;
                    return (C = (v = r.value) == null ? void 0 : v.scrollIntoViewOptions) != null
                        ? C
                        : n.scrollIntoViewOptions;
                }),
                w = A(() => {
                    var v, C;
                    return (C = (v = r.value) == null ? void 0 : v.type) != null ? C : n.type;
                }),
                { nextZIndex: g } = _e(),
                b = g(),
                _ = A(() => {
                    var v;
                    return (v = n.zIndex) != null ? v : b;
                }),
                { mergedPosInfo: E, triggerTarget: O } = Dn(i, Y(n, 'modelValue'), Y(n, 'gap'), a, y);
            xt(
                () => n.modelValue,
                (v) => {
                    v || (l.value = 0);
                }
            );
            const R = () => {
                    n.closeOnPressEscape && (e('update:modelValue', !1), e('close', l.value));
                },
                $ = (v) => {
                    s.value = v;
                },
                x = Ce();
            return (
                Ee(At, {
                    currentStep: r,
                    current: l,
                    total: s,
                    showClose: Y(n, 'showClose'),
                    closeIcon: Y(n, 'closeIcon'),
                    mergedType: w,
                    ns: o,
                    slots: x,
                    updateModelValue(v) {
                        e('update:modelValue', v);
                    },
                    onClose() {
                        e('close', l.value);
                    },
                    onFinish() {
                        e('finish');
                    },
                    onChange() {
                        e('change', l.value);
                    },
                }),
                (v, C) => {
                    var T, B;
                    return (
                        k(),
                        H(
                            Tt,
                            null,
                            [
                                (k(),
                                nt(
                                    Oe,
                                    { to: v.appendTo },
                                    [
                                        M(
                                            'div',
                                            gt({ class: d(c) }, v.$attrs),
                                            [
                                                P(
                                                    jn,
                                                    {
                                                        visible: d(m),
                                                        fill: (T = d(f)) == null ? void 0 : T.color,
                                                        style: at((B = d(f)) == null ? void 0 : B.style),
                                                        pos: d(E),
                                                        'z-index': d(_),
                                                        'target-area-clickable': v.targetAreaClickable,
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                        'visible',
                                                        'fill',
                                                        'style',
                                                        'pos',
                                                        'z-index',
                                                        'target-area-clickable',
                                                    ]
                                                ),
                                                v.modelValue
                                                    ? (k(),
                                                      nt(
                                                          Zn,
                                                          {
                                                              key: d(l),
                                                              reference: d(O),
                                                              placement: d(u),
                                                              'show-arrow': d(h),
                                                              'z-index': d(_),
                                                              style: at(d(p)),
                                                              onClose: R,
                                                          },
                                                          {
                                                              default: V(() => [
                                                                  P(
                                                                      d(Jn),
                                                                      { current: d(l), onUpdateTotal: $ },
                                                                      {
                                                                          default: V(() => [ht(v.$slots, 'default')]),
                                                                          _: 3,
                                                                      },
                                                                      8,
                                                                      ['current']
                                                                  ),
                                                              ]),
                                                              _: 3,
                                                          },
                                                          8,
                                                          ['reference', 'placement', 'show-arrow', 'z-index', 'style']
                                                      ))
                                                    : K('v-if', !0),
                                            ],
                                            16
                                        ),
                                    ],
                                    8,
                                    ['to']
                                )),
                                K(' just for IDE '),
                                K('v-if', !0),
                            ],
                            64
                        )
                    );
                }
            );
        },
    });
var oo = _t(no, [['__file', 'tour.vue']]);
const so = bt({
        target: { type: S([String, Object, Function]) },
        title: String,
        description: String,
        showClose: { type: Boolean, default: void 0 },
        closeIcon: { type: Gt },
        showArrow: { type: Boolean, default: void 0 },
        placement: Nt.placement,
        mask: { type: S([Boolean, Object]), default: void 0 },
        contentStyle: { type: S([Object]) },
        prevButtonProps: { type: S(Object) },
        nextButtonProps: { type: S(Object) },
        scrollIntoViewOptions: { type: S([Boolean, Object]), default: void 0 },
        type: { type: S(String) },
    }),
    ro = { close: () => !0 },
    lo = X({ name: 'ElTourStep' }),
    io = X({
        ...lo,
        props: so,
        emits: ro,
        setup(t, { emit: e }) {
            const n = t,
                { Close: o } = Ae,
                { t: s } = Se(),
                {
                    currentStep: r,
                    current: l,
                    total: i,
                    showClose: c,
                    closeIcon: u,
                    mergedType: p,
                    ns: a,
                    slots: m,
                    updateModelValue: f,
                    onClose: h,
                    onFinish: y,
                    onChange: w,
                } = Bt(At);
            xt(
                n,
                (x) => {
                    r.value = x;
                },
                { immediate: !0 }
            );
            const g = A(() => {
                    var x;
                    return (x = n.showClose) != null ? x : c.value;
                }),
                b = A(() => {
                    var x, v;
                    return (v = (x = n.closeIcon) != null ? x : u.value) != null ? v : o;
                }),
                _ = (x) => {
                    if (!!x) return Ze(x, ['children', 'onClick']);
                },
                E = () => {
                    var x, v;
                    (l.value -= 1),
                        (x = n.prevButtonProps) != null &&
                            x.onClick &&
                            ((v = n.prevButtonProps) == null || v.onClick()),
                        w();
                },
                O = () => {
                    var x;
                    l.value >= i.value - 1 ? R() : (l.value += 1),
                        (x = n.nextButtonProps) != null && x.onClick && n.nextButtonProps.onClick(),
                        w();
                },
                R = () => {
                    $(), y();
                },
                $ = () => {
                    f(!1), h(), e('close');
                };
            return (x, v) => (
                k(),
                H(
                    Tt,
                    null,
                    [
                        d(g)
                            ? (k(),
                              H(
                                  'button',
                                  {
                                      key: 0,
                                      'aria-label': 'Close',
                                      class: I(d(a).e('closebtn')),
                                      type: 'button',
                                      onClick: $,
                                  },
                                  [
                                      P(
                                          d(Te),
                                          { class: I(d(a).e('close')) },
                                          { default: V(() => [(k(), nt(Mt(d(b))))]), _: 1 },
                                          8,
                                          ['class']
                                      ),
                                  ],
                                  2
                              ))
                            : K('v-if', !0),
                        M(
                            'header',
                            { class: I([d(a).e('header'), { 'show-close': d(c) }]) },
                            [
                                ht(x.$slots, 'header', {}, () => [
                                    M('span', { role: 'heading', class: I(d(a).e('title')) }, pt(x.title), 3),
                                ]),
                            ],
                            2
                        ),
                        M(
                            'div',
                            { class: I(d(a).e('body')) },
                            [ht(x.$slots, 'default', {}, () => [M('span', null, pt(x.description), 1)])],
                            2
                        ),
                        M(
                            'footer',
                            { class: I(d(a).e('footer')) },
                            [
                                M(
                                    'div',
                                    { class: I(d(a).b('indicators')) },
                                    [
                                        d(m).indicators
                                            ? (k(),
                                              nt(Mt(d(m).indicators), { key: 0, current: d(l), total: d(i) }, null, 8, [
                                                  'current',
                                                  'total',
                                              ]))
                                            : (k(!0),
                                              H(
                                                  Tt,
                                                  { key: 1 },
                                                  ke(
                                                      d(i),
                                                      (C, T) => (
                                                          k(),
                                                          H(
                                                              'span',
                                                              {
                                                                  key: C,
                                                                  class: I([
                                                                      d(a).b('indicator'),
                                                                      T === d(l) ? 'is-active' : '',
                                                                  ]),
                                                              },
                                                              null,
                                                              2
                                                          )
                                                      )
                                                  ),
                                                  128
                                              )),
                                    ],
                                    2
                                ),
                                M(
                                    'div',
                                    { class: I(d(a).b('buttons')) },
                                    [
                                        d(l) > 0
                                            ? (k(),
                                              nt(
                                                  d(kt),
                                                  gt({ key: 0, size: 'small', type: d(p) }, _(x.prevButtonProps), {
                                                      onClick: E,
                                                  }),
                                                  {
                                                      default: V(() => {
                                                          var C, T;
                                                          return [
                                                              it(
                                                                  pt(
                                                                      (T =
                                                                          (C = x.prevButtonProps) == null
                                                                              ? void 0
                                                                              : C.children) != null
                                                                          ? T
                                                                          : d(s)('el.tour.previous')
                                                                  ),
                                                                  1
                                                              ),
                                                          ];
                                                      }),
                                                      _: 1,
                                                  },
                                                  16,
                                                  ['type']
                                              ))
                                            : K('v-if', !0),
                                        d(l) <= d(i) - 1
                                            ? (k(),
                                              nt(
                                                  d(kt),
                                                  gt(
                                                      {
                                                          key: 1,
                                                          size: 'small',
                                                          type: d(p) === 'primary' ? 'default' : 'primary',
                                                      },
                                                      _(x.nextButtonProps),
                                                      { onClick: O }
                                                  ),
                                                  {
                                                      default: V(() => {
                                                          var C, T;
                                                          return [
                                                              it(
                                                                  pt(
                                                                      (T =
                                                                          (C = x.nextButtonProps) == null
                                                                              ? void 0
                                                                              : C.children) != null
                                                                          ? T
                                                                          : d(l) === d(i) - 1
                                                                          ? d(s)('el.tour.finish')
                                                                          : d(s)('el.tour.next')
                                                                  ),
                                                                  1
                                                              ),
                                                          ];
                                                      }),
                                                      _: 1,
                                                  },
                                                  16,
                                                  ['type']
                                              ))
                                            : K('v-if', !0),
                                    ],
                                    2
                                ),
                            ],
                            2
                        ),
                    ],
                    64
                )
            );
        },
    });
var ie = _t(io, [['__file', 'step.vue']]);
const ao = Re(oo, { TourStep: ie }),
    co = $e(ie);
const uo = { class: 'container' },
    fo = M('img', { style: { width: '120px' }, src: Pe, alt: 'tour.png' }, null, -1),
    po = M('div', null, '\u70B9\u51FB\u8FD9\u91CC\u9009\u62E9\u6587\u4EF6', -1),
    Co = X({
        __name: 'tour',
        setup(t) {
            const e = L(),
                n = L(),
                o = L(),
                s = L(!1);
            return (r, l) => {
                const i = kt,
                    c = Fe,
                    u = Le,
                    p = co,
                    a = ao;
                return (
                    k(),
                    H('div', uo, [
                        P(
                            i,
                            { type: 'primary', onClick: l[0] || (l[0] = (m) => (s.value = !0)) },
                            { default: V(() => [it('\u5F00\u59CB\u5F15\u5BFC')]), _: 1 }
                        ),
                        P(c),
                        P(u, null, {
                            default: V(() => [
                                P(
                                    i,
                                    { ref_key: 'ref1', ref: e },
                                    { default: V(() => [it('\u4E0A\u4F20')]), _: 1 },
                                    512
                                ),
                                P(
                                    i,
                                    { ref_key: 'ref2', ref: n, type: 'primary' },
                                    { default: V(() => [it('\u4FDD\u5B58')]), _: 1 },
                                    512
                                ),
                                P(i, { ref_key: 'ref3', ref: o, icon: d(Be) }, null, 8, ['icon']),
                            ]),
                            _: 1,
                        }),
                        P(
                            a,
                            { modelValue: s.value, 'onUpdate:modelValue': l[1] || (l[1] = (m) => (s.value = m)) },
                            {
                                default: V(() => {
                                    var m, f, h;
                                    return [
                                        P(
                                            p,
                                            {
                                                target: (m = e.value) == null ? void 0 : m.$el,
                                                title: '\u4E0A\u4F20\u6587\u4EF6',
                                            },
                                            { default: V(() => [fo, po]), _: 1 },
                                            8,
                                            ['target']
                                        ),
                                        P(
                                            p,
                                            {
                                                target: (f = n.value) == null ? void 0 : f.$el,
                                                title: '\u4FDD\u5B58',
                                                description: '\u70B9\u51FB\u8FDB\u884C\u4E0A\u4F20',
                                            },
                                            null,
                                            8,
                                            ['target']
                                        ),
                                        P(
                                            p,
                                            {
                                                target: (h = o.value) == null ? void 0 : h.$el,
                                                title: '\u66F4\u591A\u64CD\u4F5C',
                                                description: '\u70B9\u51FB\u67E5\u770B\u66F4\u591A\u64CD\u4F5C',
                                            },
                                            null,
                                            8,
                                            ['target']
                                        ),
                                    ];
                                }),
                                _: 1,
                            },
                            8,
                            ['modelValue']
                        ),
                    ])
                );
            };
        },
    });
export { Co as default };
