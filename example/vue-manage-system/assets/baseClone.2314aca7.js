import {
    c as T,
    k as C,
    a as j,
    o as F,
    s as _,
    p as N,
    q as v,
    r as K,
    t as E,
    g as R,
    n as p,
    u,
    v as B,
    e as q,
    b as H,
    f as W,
    j as Y,
    S as J,
    m as Q,
} from './initCloneObject.a6314c21.js';
import { cc as m, bI as M, bC as V, bH as X, cf as Z } from './index.4bf84d35.js';
function z(t, e) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o && e(t[n], n, t) !== !1; );
    return t;
}
function k(t, e) {
    return t && T(e, C(e), t);
}
function tt(t, e) {
    return t && T(e, j(e), t);
}
function et(t, e) {
    return T(t, F(t), e);
}
var rt = Object.getOwnPropertySymbols,
    nt = rt
        ? function (t) {
              for (var e = []; t; ) N(e, F(t)), (t = v(t));
              return e;
          }
        : _;
const x = nt;
function at(t, e) {
    return T(t, x(t), e);
}
function ot(t) {
    return K(t, j, x);
}
var st = Object.prototype,
    ct = st.hasOwnProperty;
function it(t) {
    var e = t.length,
        n = new t.constructor(e);
    return e && typeof t[0] == 'string' && ct.call(t, 'index') && ((n.index = t.index), (n.input = t.input)), n;
}
function bt(t, e) {
    var n = e ? E(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
}
var ft = /\w*$/;
function gt(t) {
    var e = new t.constructor(t.source, ft.exec(t));
    return (e.lastIndex = t.lastIndex), e;
}
var I = m ? m.prototype : void 0,
    O = I ? I.valueOf : void 0;
function yt(t) {
    return O ? Object(O.call(t)) : {};
}
var ut = '[object Boolean]',
    Tt = '[object Date]',
    lt = '[object Map]',
    jt = '[object Number]',
    pt = '[object RegExp]',
    At = '[object Set]',
    $t = '[object String]',
    dt = '[object Symbol]',
    St = '[object ArrayBuffer]',
    mt = '[object DataView]',
    It = '[object Float32Array]',
    Ot = '[object Float64Array]',
    wt = '[object Int8Array]',
    ht = '[object Int16Array]',
    Ct = '[object Int32Array]',
    Ft = '[object Uint8Array]',
    Et = '[object Uint8ClampedArray]',
    Bt = '[object Uint16Array]',
    Mt = '[object Uint32Array]';
function xt(t, e, n) {
    var o = t.constructor;
    switch (e) {
        case St:
            return E(t);
        case ut:
        case Tt:
            return new o(+t);
        case mt:
            return bt(t, n);
        case It:
        case Ot:
        case wt:
        case ht:
        case Ct:
        case Ft:
        case Et:
        case Bt:
        case Mt:
            return R(t, n);
        case lt:
            return new o();
        case jt:
        case $t:
            return new o(t);
        case pt:
            return gt(t);
        case At:
            return new o();
        case dt:
            return yt(t);
    }
}
var Lt = '[object Map]';
function Ut(t) {
    return M(t) && p(t) == Lt;
}
var w = u && u.isMap,
    Pt = w ? B(w) : Ut;
const Dt = Pt;
var Gt = '[object Set]';
function _t(t) {
    return M(t) && p(t) == Gt;
}
var h = u && u.isSet,
    Nt = h ? B(h) : _t;
const vt = Nt;
var Kt = 1,
    Rt = 2,
    qt = 4,
    L = '[object Arguments]',
    Ht = '[object Array]',
    Wt = '[object Boolean]',
    Yt = '[object Date]',
    Jt = '[object Error]',
    U = '[object Function]',
    Qt = '[object GeneratorFunction]',
    Vt = '[object Map]',
    Xt = '[object Number]',
    P = '[object Object]',
    Zt = '[object RegExp]',
    zt = '[object Set]',
    kt = '[object String]',
    te = '[object Symbol]',
    ee = '[object WeakMap]',
    re = '[object ArrayBuffer]',
    ne = '[object DataView]',
    ae = '[object Float32Array]',
    oe = '[object Float64Array]',
    se = '[object Int8Array]',
    ce = '[object Int16Array]',
    ie = '[object Int32Array]',
    be = '[object Uint8Array]',
    fe = '[object Uint8ClampedArray]',
    ge = '[object Uint16Array]',
    ye = '[object Uint32Array]',
    r = {};
r[L] =
    r[Ht] =
    r[re] =
    r[ne] =
    r[Wt] =
    r[Yt] =
    r[ae] =
    r[oe] =
    r[se] =
    r[ce] =
    r[ie] =
    r[Vt] =
    r[Xt] =
    r[P] =
    r[Zt] =
    r[zt] =
    r[kt] =
    r[te] =
    r[be] =
    r[fe] =
    r[ge] =
    r[ye] =
        !0;
r[Jt] = r[U] = r[ee] = !1;
function l(t, e, n, o, f, s) {
    var a,
        g = e & Kt,
        y = e & Rt,
        D = e & qt;
    if ((n && (a = f ? n(t, o, f, s) : n(t)), a !== void 0)) return a;
    if (!V(t)) return t;
    var A = X(t);
    if (A) {
        if (((a = it(t)), !g)) return q(t, a);
    } else {
        var b = p(t),
            $ = b == U || b == Qt;
        if (H(t)) return W(t, g);
        if (b == P || b == L || ($ && !f)) {
            if (((a = y || $ ? {} : Y(t)), !g)) return y ? at(t, tt(a, t)) : et(t, k(a, t));
        } else {
            if (!r[b]) return f ? t : {};
            a = xt(t, b, g);
        }
    }
    s || (s = new J());
    var d = s.get(t);
    if (d) return d;
    s.set(t, a),
        vt(t)
            ? t.forEach(function (c) {
                  a.add(l(c, e, n, c, t, s));
              })
            : Dt(t) &&
              t.forEach(function (c, i) {
                  a.set(i, l(c, e, n, i, t, s));
              });
    var G = D ? (y ? ot : Q) : y ? j : C,
        S = A ? void 0 : G(t);
    return (
        z(S || t, function (c, i) {
            S && ((i = c), (c = t[i])), Z(a, i, l(c, e, n, i, t, s));
        }),
        a
    );
}
export { l as b, ot as g };
