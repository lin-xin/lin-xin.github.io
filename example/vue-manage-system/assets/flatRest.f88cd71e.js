import { h as b, p as h } from './initCloneObject.a6314c21.js';
import { cm as u, cc as f, bH as g } from './index.4bf84d35.js';
function v(n) {
    return n;
}
function d(n, e, t) {
    switch (t.length) {
        case 0:
            return n.call(e);
        case 1:
            return n.call(e, t[0]);
        case 2:
            return n.call(e, t[0], t[1]);
        case 3:
            return n.call(e, t[0], t[1], t[2]);
    }
    return n.apply(e, t);
}
var S = 800,
    p = 16,
    y = Date.now;
function w(n) {
    var e = 0,
        t = 0;
    return function () {
        var a = y(),
            r = p - (a - t);
        if (((t = a), r > 0)) {
            if (++e >= S) return arguments[0];
        } else e = 0;
        return n.apply(void 0, arguments);
    };
}
function T(n) {
    return function () {
        return n;
    };
}
var x = u
    ? function (n, e) {
          return u(n, 'toString', { configurable: !0, enumerable: !1, value: T(e), writable: !0 });
      }
    : v;
const O = x;
var C = w(O);
const H = C;
var s = Math.max;
function N(n, e, t) {
    return (
        (e = s(e === void 0 ? n.length - 1 : e, 0)),
        function () {
            for (var a = arguments, r = -1, o = s(a.length - e, 0), l = Array(o); ++r < o; ) l[r] = a[e + r];
            r = -1;
            for (var i = Array(e + 1); ++r < e; ) i[r] = a[r];
            return (i[e] = t(l)), d(n, this, i);
        }
    );
}
var c = f ? f.isConcatSpreadable : void 0;
function P(n) {
    return g(n) || b(n) || !!(c && n && n[c]);
}
function m(n, e, t, a, r) {
    var o = -1,
        l = n.length;
    for (t || (t = P), r || (r = []); ++o < l; ) {
        var i = n[o];
        e > 0 && t(i) ? (e > 1 ? m(i, e - 1, t, a, r) : h(r, i)) : a || (r[r.length] = i);
    }
    return r;
}
function $(n) {
    var e = n == null ? 0 : n.length;
    return e ? m(n, 1) : [];
}
function M(n) {
    return H(N(n, void 0, $), n + '');
}
export { M as a, m as b, $ as f, v as i, N as o, H as s };
