import { s as y, o as L, i as p } from './flatRest.f88cd71e.js';
import { S as P, k as C, i as M } from './initCloneObject.a6314c21.js';
import { b as O } from './isEqual.cb5dbe60.js';
import { bC as _, bD as m, bE as E, bF as c, bG as l, bH as I, bI as D } from './index.4bf84d35.js';
import { h as G } from './el-checkbox.18197270.js';
function Q(n, r) {
    return y(L(n, r, p), n + '');
}
var d = 1,
    F = 2;
function S(n, r, i, t) {
    var e = i.length,
        o = e,
        a = !t;
    if (n == null) return !o;
    for (n = Object(n); e--; ) {
        var f = i[e];
        if (a && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1;
    }
    for (; ++e < o; ) {
        f = i[e];
        var s = f[0],
            u = n[s],
            A = f[1];
        if (a && f[2]) {
            if (u === void 0 && !(s in n)) return !1;
        } else {
            var b = new P();
            if (t) var R = t(u, A, s, n, r, b);
            if (!(R === void 0 ? O(A, u, d | F, t, b) : R)) return !1;
        }
    }
    return !0;
}
function g(n) {
    return n === n && !_(n);
}
function w(n) {
    for (var r = C(n), i = r.length; i--; ) {
        var t = r[i],
            e = n[t];
        r[i] = [t, e, g(e)];
    }
    return r;
}
function h(n, r) {
    return function (i) {
        return i == null ? !1 : i[n] === r && (r !== void 0 || n in Object(i));
    };
}
function T(n) {
    var r = w(n);
    return r.length == 1 && r[0][2]
        ? h(r[0][0], r[0][1])
        : function (i) {
              return i === n || S(i, n, r);
          };
}
var x = 1,
    K = 2;
function N(n, r) {
    return m(n) && g(r)
        ? h(E(n), r)
        : function (i) {
              var t = c(i, n);
              return t === void 0 && t === r ? G(i, n) : O(r, t, x | K);
          };
}
function U(n) {
    return function (r) {
        return r == null ? void 0 : r[n];
    };
}
function $(n) {
    return function (r) {
        return l(r, n);
    };
}
function k(n) {
    return m(n) ? U(E(n)) : $(n);
}
function W(n) {
    return typeof n == 'function' ? n : n == null ? p : typeof n == 'object' ? (I(n) ? N(n[0], n[1]) : T(n)) : k(n);
}
function X(n) {
    return D(n) && M(n);
}
export { Q as a, W as b, X as i };
