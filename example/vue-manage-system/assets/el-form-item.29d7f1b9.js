import {
    b as we,
    ax as $e,
    B as ue,
    b0 as it,
    K as de,
    ae as Be,
    Q as $,
    c as E,
    b1 as ce,
    d as Y,
    a6 as Te,
    u as Fe,
    S as te,
    aE as at,
    p as Ce,
    Z as De,
    U as ze,
    b2 as qe,
    o as pe,
    a as Ue,
    r as k,
    n as Z,
    f as x,
    _ as Ze,
    J as Ge,
    M as re,
    b3 as ve,
    b4 as st,
    R as Je,
    X as Ke,
    b5 as ot,
    aZ as ft,
    v as ne,
    F as lt,
    Y as Ye,
    a7 as ut,
    ag as dt,
    b6 as ct,
    a2 as _e,
    b7 as oe,
    w as fe,
    j as pt,
    k as vt,
    g as Ae,
    P as mt,
    t as Pe,
    l as Se,
    e as je,
    b8 as gt,
    m as ht,
    q as yt,
} from './index.4bf84d35.js';
import { b as bt } from './baseClone.2314aca7.js';
var wt = 4;
function Re(i) {
    return bt(i, wt);
}
const Ft = we({ size: { type: String, values: $e }, disabled: Boolean }),
    qt = we({
        ...Ft,
        model: Object,
        rules: { type: ue(Object) },
        labelPosition: { type: String, values: ['left', 'right', 'top'], default: 'right' },
        requireAsteriskPosition: { type: String, values: ['left', 'right'], default: 'left' },
        labelWidth: { type: [String, Number], default: '' },
        labelSuffix: { type: String, default: '' },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: { type: Boolean, default: !0 },
        validateOnRuleChange: { type: Boolean, default: !0 },
        hideRequiredAsterisk: Boolean,
        scrollToError: Boolean,
        scrollIntoViewOptions: { type: [Object, Boolean] },
    }),
    xt = { validate: (i, e, t) => (it(i) || de(i)) && Be(e) && de(t) };
function Ot() {
    const i = $([]),
        e = E(() => {
            if (!i.value.length) return '0';
            const s = Math.max(...i.value);
            return s ? `${s}px` : '';
        });
    function t(s) {
        const a = i.value.indexOf(s);
        return a === -1 && e.value, a;
    }
    function n(s, a) {
        if (s && a) {
            const o = t(a);
            i.value.splice(o, 1, s);
        } else s && i.value.push(s);
    }
    function r(s) {
        const a = t(s);
        a > -1 && i.value.splice(a, 1);
    }
    return { autoLabelWidth: e, registerLabelWidth: n, deregisterLabelWidth: r };
}
const X = (i, e) => {
        const t = ce(e);
        return t.length > 0 ? i.filter((n) => n.prop && t.includes(n.prop)) : i;
    },
    Et = 'ElForm',
    _t = Y({ name: Et }),
    At = Y({
        ..._t,
        props: qt,
        emits: xt,
        setup(i, { expose: e, emit: t }) {
            const n = i,
                r = [],
                s = Te(),
                a = Fe('form'),
                o = E(() => {
                    const { labelPosition: f, inline: c } = n;
                    return [a.b(), a.m(s.value || 'default'), { [a.m(`label-${f}`)]: f, [a.m('inline')]: c }];
                }),
                u = (f) => r.find((c) => c.prop === f),
                y = (f) => {
                    r.push(f);
                },
                v = (f) => {
                    f.prop && r.splice(r.indexOf(f), 1);
                },
                g = (f = []) => {
                    !n.model || X(r, f).forEach((c) => c.resetField());
                },
                h = (f = []) => {
                    X(r, f).forEach((c) => c.clearValidate());
                },
                O = E(() => !!n.model),
                A = (f) => {
                    if (r.length === 0) return [];
                    const c = X(r, f);
                    return c.length ? c : [];
                },
                d = async (f) => l(void 0, f),
                b = async (f = []) => {
                    if (!O.value) return !1;
                    const c = A(f);
                    if (c.length === 0) return !0;
                    let q = {};
                    for (const w of c)
                        try {
                            await w.validate('');
                        } catch (S) {
                            q = { ...q, ...S };
                        }
                    return Object.keys(q).length === 0 ? !0 : Promise.reject(q);
                },
                l = async (f = [], c) => {
                    const q = !Ge(c);
                    try {
                        const w = await b(f);
                        return w === !0 && (c == null || c(w)), w;
                    } catch (w) {
                        if (w instanceof Error) throw w;
                        const S = w;
                        return n.scrollToError && R(Object.keys(S)[0]), c == null || c(!1, S), q && Promise.reject(S);
                    }
                },
                R = (f) => {
                    var c;
                    const q = X(r, f)[0];
                    q && ((c = q.$el) == null || c.scrollIntoView(n.scrollIntoViewOptions));
                };
            return (
                te(
                    () => n.rules,
                    () => {
                        n.validateOnRuleChange && d().catch((f) => at());
                    },
                    { deep: !0 }
                ),
                Ce(
                    qe,
                    De({
                        ...ze(n),
                        emit: t,
                        resetFields: g,
                        clearValidate: h,
                        validateField: l,
                        getField: u,
                        addField: y,
                        removeField: v,
                        ...Ot(),
                    })
                ),
                e({ validate: d, validateField: l, resetFields: g, clearValidate: h, scrollToField: R }),
                (f, c) => (pe(), Ue('form', { class: Z(x(o)) }, [k(f.$slots, 'default')], 2))
            );
        },
    });
var Pt = Ze(At, [['__file', 'form.vue']]);
function B() {
    return (
        (B = Object.assign
            ? Object.assign.bind()
            : function (i) {
                  for (var e = 1; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
                  }
                  return i;
              }),
        B.apply(this, arguments)
    );
}
function St(i, e) {
    (i.prototype = Object.create(e.prototype)), (i.prototype.constructor = i), K(i, e);
}
function me(i) {
    return (
        (me = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        me(i)
    );
}
function K(i, e) {
    return (
        (K = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, r) {
                  return (n.__proto__ = r), n;
              }),
        K(i, e)
    );
}
function jt() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
        return !1;
    }
}
function ee(i, e, t) {
    return (
        jt()
            ? (ee = Reflect.construct.bind())
            : (ee = function (r, s, a) {
                  var o = [null];
                  o.push.apply(o, s);
                  var u = Function.bind.apply(r, o),
                      y = new u();
                  return a && K(y, a.prototype), y;
              }),
        ee.apply(null, arguments)
    );
}
function Rt(i) {
    return Function.toString.call(i).indexOf('[native code]') !== -1;
}
function ge(i) {
    var e = typeof Map == 'function' ? new Map() : void 0;
    return (
        (ge = function (n) {
            if (n === null || !Rt(n)) return n;
            if (typeof n != 'function') throw new TypeError('Super expression must either be null or a function');
            if (typeof e < 'u') {
                if (e.has(n)) return e.get(n);
                e.set(n, r);
            }
            function r() {
                return ee(n, arguments, me(this).constructor);
            }
            return (
                (r.prototype = Object.create(n.prototype, {
                    constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
                })),
                K(r, n)
            );
        }),
        ge(i)
    );
}
var Nt = /%[sdj%]/g,
    Vt = function () {};
typeof process < 'u' && process.env;
function he(i) {
    if (!i || !i.length) return null;
    var e = {};
    return (
        i.forEach(function (t) {
            var n = t.field;
            (e[n] = e[n] || []), e[n].push(t);
        }),
        e
    );
}
function V(i) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
    var r = 0,
        s = t.length;
    if (typeof i == 'function') return i.apply(null, t);
    if (typeof i == 'string') {
        var a = i.replace(Nt, function (o) {
            if (o === '%%') return '%';
            if (r >= s) return o;
            switch (o) {
                case '%s':
                    return String(t[r++]);
                case '%d':
                    return Number(t[r++]);
                case '%j':
                    try {
                        return JSON.stringify(t[r++]);
                    } catch {
                        return '[Circular]';
                    }
                    break;
                default:
                    return o;
            }
        });
        return a;
    }
    return i;
}
function Mt(i) {
    return i === 'string' || i === 'url' || i === 'hex' || i === 'email' || i === 'date' || i === 'pattern';
}
function _(i, e) {
    return !!(i == null || (e === 'array' && Array.isArray(i) && !i.length) || (Mt(e) && typeof i == 'string' && !i));
}
function Wt(i, e, t) {
    var n = [],
        r = 0,
        s = i.length;
    function a(o) {
        n.push.apply(n, o || []), r++, r === s && t(n);
    }
    i.forEach(function (o) {
        e(o, a);
    });
}
function Ne(i, e, t) {
    var n = 0,
        r = i.length;
    function s(a) {
        if (a && a.length) {
            t(a);
            return;
        }
        var o = n;
        (n = n + 1), o < r ? e(i[o], s) : t([]);
    }
    s([]);
}
function It(i) {
    var e = [];
    return (
        Object.keys(i).forEach(function (t) {
            e.push.apply(e, i[t] || []);
        }),
        e
    );
}
var Ve = (function (i) {
    St(e, i);
    function e(t, n) {
        var r;
        return (r = i.call(this, 'Async Validation Error') || this), (r.errors = t), (r.fields = n), r;
    }
    return e;
})(ge(Error));
function Lt(i, e, t, n, r) {
    if (e.first) {
        var s = new Promise(function (h, O) {
            var A = function (l) {
                    return n(l), l.length ? O(new Ve(l, he(l))) : h(r);
                },
                d = It(i);
            Ne(d, t, A);
        });
        return (
            s.catch(function (h) {
                return h;
            }),
            s
        );
    }
    var a = e.firstFields === !0 ? Object.keys(i) : e.firstFields || [],
        o = Object.keys(i),
        u = o.length,
        y = 0,
        v = [],
        g = new Promise(function (h, O) {
            var A = function (b) {
                if ((v.push.apply(v, b), y++, y === u)) return n(v), v.length ? O(new Ve(v, he(v))) : h(r);
            };
            o.length || (n(v), h(r)),
                o.forEach(function (d) {
                    var b = i[d];
                    a.indexOf(d) !== -1 ? Ne(b, t, A) : Wt(b, t, A);
                });
        });
    return (
        g.catch(function (h) {
            return h;
        }),
        g
    );
}
function $t(i) {
    return !!(i && i.message !== void 0);
}
function Bt(i, e) {
    for (var t = i, n = 0; n < e.length; n++) {
        if (t == null) return t;
        t = t[e[n]];
    }
    return t;
}
function Me(i, e) {
    return function (t) {
        var n;
        return (
            i.fullFields ? (n = Bt(e, i.fullFields)) : (n = e[t.field || i.fullField]),
            $t(t)
                ? ((t.field = t.field || i.fullField), (t.fieldValue = n), t)
                : { message: typeof t == 'function' ? t() : t, fieldValue: n, field: t.field || i.fullField }
        );
    };
}
function We(i, e) {
    if (e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var n = e[t];
                typeof n == 'object' && typeof i[t] == 'object' ? (i[t] = B({}, i[t], n)) : (i[t] = n);
            }
    }
    return i;
}
var Qe = function (e, t, n, r, s, a) {
        e.required && (!n.hasOwnProperty(e.field) || _(t, a || e.type)) && r.push(V(s.messages.required, e.fullField));
    },
    Tt = function (e, t, n, r, s) {
        (/^\s+$/.test(t) || t === '') && r.push(V(s.messages.whitespace, e.fullField));
    },
    H,
    Ct = function () {
        if (H) return H;
        var i = '[a-fA-F\\d:]',
            e = function (c) {
                return c && c.includeBoundaries ? '(?:(?<=\\s|^)(?=' + i + ')|(?<=' + i + ')(?=\\s|$))' : '';
            },
            t = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
            n = '[a-fA-F\\d]{1,4}',
            r = (
                `
(?:
(?:` +
                n +
                ':){7}(?:' +
                n +
                `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
                n +
                ':){6}(?:' +
                t +
                '|:' +
                n +
                `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
                n +
                ':){5}(?::' +
                t +
                '|(?::' +
                n +
                `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
                n +
                ':){4}(?:(?::' +
                n +
                '){0,1}:' +
                t +
                '|(?::' +
                n +
                `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
                n +
                ':){3}(?:(?::' +
                n +
                '){0,2}:' +
                t +
                '|(?::' +
                n +
                `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
                n +
                ':){2}(?:(?::' +
                n +
                '){0,3}:' +
                t +
                '|(?::' +
                n +
                `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
                n +
                ':){1}(?:(?::' +
                n +
                '){0,4}:' +
                t +
                '|(?::' +
                n +
                `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
                n +
                '){0,5}:' +
                t +
                '|(?::' +
                n +
                `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
            )
                .replace(/\s*\/\/.*$/gm, '')
                .replace(/\n/g, '')
                .trim(),
            s = new RegExp('(?:^' + t + '$)|(?:^' + r + '$)'),
            a = new RegExp('^' + t + '$'),
            o = new RegExp('^' + r + '$'),
            u = function (c) {
                return c && c.exact ? s : new RegExp('(?:' + e(c) + t + e(c) + ')|(?:' + e(c) + r + e(c) + ')', 'g');
            };
        (u.v4 = function (f) {
            return f && f.exact ? a : new RegExp('' + e(f) + t + e(f), 'g');
        }),
            (u.v6 = function (f) {
                return f && f.exact ? o : new RegExp('' + e(f) + r + e(f), 'g');
            });
        var y = '(?:(?:[a-z]+:)?//)',
            v = '(?:\\S+(?::\\S*)?@)?',
            g = u.v4().source,
            h = u.v6().source,
            O = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
            A = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
            d = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
            b = '(?::\\d{2,5})?',
            l = '(?:[/?#][^\\s"]*)?',
            R = '(?:' + y + '|www\\.)' + v + '(?:localhost|' + g + '|' + h + '|' + O + A + d + ')' + b + l;
        return (H = new RegExp('(?:^' + R + '$)', 'i')), H;
    },
    Ie = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    },
    G = {
        integer: function (e) {
            return G.number(e) && parseInt(e, 10) === e;
        },
        float: function (e) {
            return G.number(e) && !G.integer(e);
        },
        array: function (e) {
            return Array.isArray(e);
        },
        regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e);
            } catch {
                return !1;
            }
        },
        date: function (e) {
            return (
                typeof e.getTime == 'function' &&
                typeof e.getMonth == 'function' &&
                typeof e.getYear == 'function' &&
                !isNaN(e.getTime())
            );
        },
        number: function (e) {
            return isNaN(e) ? !1 : typeof e == 'number';
        },
        object: function (e) {
            return typeof e == 'object' && !G.array(e);
        },
        method: function (e) {
            return typeof e == 'function';
        },
        email: function (e) {
            return typeof e == 'string' && e.length <= 320 && !!e.match(Ie.email);
        },
        url: function (e) {
            return typeof e == 'string' && e.length <= 2048 && !!e.match(Ct());
        },
        hex: function (e) {
            return typeof e == 'string' && !!e.match(Ie.hex);
        },
    },
    Dt = function (e, t, n, r, s) {
        if (e.required && t === void 0) {
            Qe(e, t, n, r, s);
            return;
        }
        var a = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'],
            o = e.type;
        a.indexOf(o) > -1
            ? G[o](t) || r.push(V(s.messages.types[o], e.fullField, e.type))
            : o && typeof t !== e.type && r.push(V(s.messages.types[o], e.fullField, e.type));
    },
    zt = function (e, t, n, r, s) {
        var a = typeof e.len == 'number',
            o = typeof e.min == 'number',
            u = typeof e.max == 'number',
            y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            v = t,
            g = null,
            h = typeof t == 'number',
            O = typeof t == 'string',
            A = Array.isArray(t);
        if ((h ? (g = 'number') : O ? (g = 'string') : A && (g = 'array'), !g)) return !1;
        A && (v = t.length),
            O && (v = t.replace(y, '_').length),
            a
                ? v !== e.len && r.push(V(s.messages[g].len, e.fullField, e.len))
                : o && !u && v < e.min
                ? r.push(V(s.messages[g].min, e.fullField, e.min))
                : u && !o && v > e.max
                ? r.push(V(s.messages[g].max, e.fullField, e.max))
                : o && u && (v < e.min || v > e.max) && r.push(V(s.messages[g].range, e.fullField, e.min, e.max));
    },
    U = 'enum',
    Ut = function (e, t, n, r, s) {
        (e[U] = Array.isArray(e[U]) ? e[U] : []),
            e[U].indexOf(t) === -1 && r.push(V(s.messages[U], e.fullField, e[U].join(', ')));
    },
    Zt = function (e, t, n, r, s) {
        if (e.pattern) {
            if (e.pattern instanceof RegExp)
                (e.pattern.lastIndex = 0),
                    e.pattern.test(t) || r.push(V(s.messages.pattern.mismatch, e.fullField, t, e.pattern));
            else if (typeof e.pattern == 'string') {
                var a = new RegExp(e.pattern);
                a.test(t) || r.push(V(s.messages.pattern.mismatch, e.fullField, t, e.pattern));
            }
        }
    },
    m = { required: Qe, whitespace: Tt, type: Dt, range: zt, enum: Ut, pattern: Zt },
    Gt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t, 'string') && !e.required) return n();
            m.required(e, t, r, a, s, 'string'),
                _(t, 'string') ||
                    (m.type(e, t, r, a, s),
                    m.range(e, t, r, a, s),
                    m.pattern(e, t, r, a, s),
                    e.whitespace === !0 && m.whitespace(e, t, r, a, s));
        }
        n(a);
    },
    Jt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && m.type(e, t, r, a, s);
        }
        n(a);
    },
    Kt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if ((t === '' && (t = void 0), _(t) && !e.required)) return n();
            m.required(e, t, r, a, s), t !== void 0 && (m.type(e, t, r, a, s), m.range(e, t, r, a, s));
        }
        n(a);
    },
    Yt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && m.type(e, t, r, a, s);
        }
        n(a);
    },
    Qt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), _(t) || m.type(e, t, r, a, s);
        }
        n(a);
    },
    Xt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && (m.type(e, t, r, a, s), m.range(e, t, r, a, s));
        }
        n(a);
    },
    Ht = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && (m.type(e, t, r, a, s), m.range(e, t, r, a, s));
        }
        n(a);
    },
    kt = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (t == null && !e.required) return n();
            m.required(e, t, r, a, s, 'array'), t != null && (m.type(e, t, r, a, s), m.range(e, t, r, a, s));
        }
        n(a);
    },
    er = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && m.type(e, t, r, a, s);
        }
        n(a);
    },
    tr = 'enum',
    rr = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s), t !== void 0 && m[tr](e, t, r, a, s);
        }
        n(a);
    },
    nr = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t, 'string') && !e.required) return n();
            m.required(e, t, r, a, s), _(t, 'string') || m.pattern(e, t, r, a, s);
        }
        n(a);
    },
    ir = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t, 'date') && !e.required) return n();
            if ((m.required(e, t, r, a, s), !_(t, 'date'))) {
                var u;
                t instanceof Date ? (u = t) : (u = new Date(t)),
                    m.type(e, u, r, a, s),
                    u && m.range(e, u.getTime(), r, a, s);
            }
        }
        n(a);
    },
    ar = function (e, t, n, r, s) {
        var a = [],
            o = Array.isArray(t) ? 'array' : typeof t;
        m.required(e, t, r, a, s, o), n(a);
    },
    le = function (e, t, n, r, s) {
        var a = e.type,
            o = [],
            u = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (u) {
            if (_(t, a) && !e.required) return n();
            m.required(e, t, r, o, s, a), _(t, a) || m.type(e, t, r, o, s);
        }
        n(o);
    },
    sr = function (e, t, n, r, s) {
        var a = [],
            o = e.required || (!e.required && r.hasOwnProperty(e.field));
        if (o) {
            if (_(t) && !e.required) return n();
            m.required(e, t, r, a, s);
        }
        n(a);
    },
    J = {
        string: Gt,
        method: Jt,
        number: Kt,
        boolean: Yt,
        regexp: Qt,
        integer: Xt,
        float: Ht,
        array: kt,
        object: er,
        enum: rr,
        pattern: nr,
        date: ir,
        url: le,
        hex: le,
        email: le,
        required: ar,
        any: sr,
    };
function ye() {
    return {
        default: 'Validation error on field %s',
        required: '%s is required',
        enum: '%s must be one of %s',
        whitespace: '%s cannot be empty',
        date: {
            format: '%s date %s is invalid for format %s',
            parse: '%s date could not be parsed, %s is invalid ',
            invalid: '%s date %s is invalid',
        },
        types: {
            string: '%s is not a %s',
            method: '%s is not a %s (function)',
            array: '%s is not an %s',
            object: '%s is not an %s',
            number: '%s is not a %s',
            date: '%s is not a %s',
            boolean: '%s is not a %s',
            integer: '%s is not an %s',
            float: '%s is not a %s',
            regexp: '%s is not a valid %s',
            email: '%s is not a valid %s',
            url: '%s is not a valid %s',
            hex: '%s is not a valid %s',
        },
        string: {
            len: '%s must be exactly %s characters',
            min: '%s must be at least %s characters',
            max: '%s cannot be longer than %s characters',
            range: '%s must be between %s and %s characters',
        },
        number: {
            len: '%s must equal %s',
            min: '%s cannot be less than %s',
            max: '%s cannot be greater than %s',
            range: '%s must be between %s and %s',
        },
        array: {
            len: '%s must be exactly %s in length',
            min: '%s cannot be less than %s in length',
            max: '%s cannot be greater than %s in length',
            range: '%s must be between %s and %s in length',
        },
        pattern: { mismatch: '%s value %s does not match pattern %s' },
        clone: function () {
            var e = JSON.parse(JSON.stringify(this));
            return (e.clone = this.clone), e;
        },
    };
}
var be = ye(),
    Q = (function () {
        function i(t) {
            (this.rules = null), (this._messages = be), this.define(t);
        }
        var e = i.prototype;
        return (
            (e.define = function (n) {
                var r = this;
                if (!n) throw new Error('Cannot configure a schema with no rules');
                if (typeof n != 'object' || Array.isArray(n)) throw new Error('Rules must be an object');
                (this.rules = {}),
                    Object.keys(n).forEach(function (s) {
                        var a = n[s];
                        r.rules[s] = Array.isArray(a) ? a : [a];
                    });
            }),
            (e.messages = function (n) {
                return n && (this._messages = We(ye(), n)), this._messages;
            }),
            (e.validate = function (n, r, s) {
                var a = this;
                r === void 0 && (r = {}), s === void 0 && (s = function () {});
                var o = n,
                    u = r,
                    y = s;
                if (
                    (typeof u == 'function' && ((y = u), (u = {})), !this.rules || Object.keys(this.rules).length === 0)
                )
                    return y && y(null, o), Promise.resolve(o);
                function v(d) {
                    var b = [],
                        l = {};
                    function R(c) {
                        if (Array.isArray(c)) {
                            var q;
                            b = (q = b).concat.apply(q, c);
                        } else b.push(c);
                    }
                    for (var f = 0; f < d.length; f++) R(d[f]);
                    b.length ? ((l = he(b)), y(b, l)) : y(null, o);
                }
                if (u.messages) {
                    var g = this.messages();
                    g === be && (g = ye()), We(g, u.messages), (u.messages = g);
                } else u.messages = this.messages();
                var h = {},
                    O = u.keys || Object.keys(this.rules);
                O.forEach(function (d) {
                    var b = a.rules[d],
                        l = o[d];
                    b.forEach(function (R) {
                        var f = R;
                        typeof f.transform == 'function' && (o === n && (o = B({}, o)), (l = o[d] = f.transform(l))),
                            typeof f == 'function' ? (f = { validator: f }) : (f = B({}, f)),
                            (f.validator = a.getValidationMethod(f)),
                            f.validator &&
                                ((f.field = d),
                                (f.fullField = f.fullField || d),
                                (f.type = a.getType(f)),
                                (h[d] = h[d] || []),
                                h[d].push({ rule: f, value: l, source: o, field: d }));
                    });
                });
                var A = {};
                return Lt(
                    h,
                    u,
                    function (d, b) {
                        var l = d.rule,
                            R =
                                (l.type === 'object' || l.type === 'array') &&
                                (typeof l.fields == 'object' || typeof l.defaultField == 'object');
                        (R = R && (l.required || (!l.required && d.value))), (l.field = d.field);
                        function f(w, S) {
                            return B({}, S, {
                                fullField: l.fullField + '.' + w,
                                fullFields: l.fullFields ? [].concat(l.fullFields, [w]) : [w],
                            });
                        }
                        function c(w) {
                            w === void 0 && (w = []);
                            var S = Array.isArray(w) ? w : [w];
                            !u.suppressWarning && S.length && i.warning('async-validator:', S),
                                S.length && l.message !== void 0 && (S = [].concat(l.message));
                            var N = S.map(Me(l, o));
                            if (u.first && N.length) return (A[l.field] = 1), b(N);
                            if (!R) b(N);
                            else {
                                if (l.required && !d.value)
                                    return (
                                        l.message !== void 0
                                            ? (N = [].concat(l.message).map(Me(l, o)))
                                            : u.error && (N = [u.error(l, V(u.messages.required, l.field))]),
                                        b(N)
                                    );
                                var L = {};
                                l.defaultField &&
                                    Object.keys(d.value).map(function (W) {
                                        L[W] = l.defaultField;
                                    }),
                                    (L = B({}, L, d.rule.fields));
                                var T = {};
                                Object.keys(L).forEach(function (W) {
                                    var M = L[W],
                                        ie = Array.isArray(M) ? M : [M];
                                    T[W] = ie.map(f.bind(null, W));
                                });
                                var C = new i(T);
                                C.messages(u.messages),
                                    d.rule.options &&
                                        ((d.rule.options.messages = u.messages), (d.rule.options.error = u.error)),
                                    C.validate(d.value, d.rule.options || u, function (W) {
                                        var M = [];
                                        N && N.length && M.push.apply(M, N),
                                            W && W.length && M.push.apply(M, W),
                                            b(M.length ? M : null);
                                    });
                            }
                        }
                        var q;
                        if (l.asyncValidator) q = l.asyncValidator(l, d.value, c, d.source, u);
                        else if (l.validator) {
                            try {
                                q = l.validator(l, d.value, c, d.source, u);
                            } catch (w) {
                                console.error == null || console.error(w),
                                    u.suppressValidatorError ||
                                        setTimeout(function () {
                                            throw w;
                                        }, 0),
                                    c(w.message);
                            }
                            q === !0
                                ? c()
                                : q === !1
                                ? c(
                                      typeof l.message == 'function'
                                          ? l.message(l.fullField || l.field)
                                          : l.message || (l.fullField || l.field) + ' fails'
                                  )
                                : q instanceof Array
                                ? c(q)
                                : q instanceof Error && c(q.message);
                        }
                        q &&
                            q.then &&
                            q.then(
                                function () {
                                    return c();
                                },
                                function (w) {
                                    return c(w);
                                }
                            );
                    },
                    function (d) {
                        v(d);
                    },
                    o
                );
            }),
            (e.getType = function (n) {
                if (
                    (n.type === void 0 && n.pattern instanceof RegExp && (n.type = 'pattern'),
                    typeof n.validator != 'function' && n.type && !J.hasOwnProperty(n.type))
                )
                    throw new Error(V('Unknown rule type %s', n.type));
                return n.type || 'string';
            }),
            (e.getValidationMethod = function (n) {
                if (typeof n.validator == 'function') return n.validator;
                var r = Object.keys(n),
                    s = r.indexOf('message');
                return (
                    s !== -1 && r.splice(s, 1),
                    r.length === 1 && r[0] === 'required' ? J.required : J[this.getType(n)] || void 0
                );
            }),
            i
        );
    })();
Q.register = function (e, t) {
    if (typeof t != 'function') throw new Error('Cannot register a validator by type, validator is not a function');
    J[e] = t;
};
Q.warning = Vt;
Q.messages = be;
Q.validators = J;
const or = ['', 'error', 'validating', 'success'],
    fr = we({
        label: String,
        labelWidth: { type: [String, Number], default: '' },
        prop: { type: ue([String, Array]) },
        required: { type: Boolean, default: void 0 },
        rules: { type: ue([Object, Array]) },
        error: String,
        validateStatus: { type: String, values: or },
        for: String,
        inlineMessage: { type: [String, Boolean], default: '' },
        showMessage: { type: Boolean, default: !0 },
        size: { type: String, values: $e },
    }),
    Le = 'ElLabelWrap';
var lr = Y({
    name: Le,
    props: { isAutoWidth: Boolean, updateAll: Boolean },
    setup(i, { slots: e }) {
        const t = re(qe, void 0),
            n = re(ve);
        n || st(Le, 'usage: <el-form-item><label-wrap /></el-form-item>');
        const r = Fe('form'),
            s = $(),
            a = $(0),
            o = () => {
                var v;
                if ((v = s.value) != null && v.firstElementChild) {
                    const g = window.getComputedStyle(s.value.firstElementChild).width;
                    return Math.ceil(Number.parseFloat(g));
                } else return 0;
            },
            u = (v = 'update') => {
                Ye(() => {
                    e.default &&
                        i.isAutoWidth &&
                        (v === 'update'
                            ? (a.value = o())
                            : v === 'remove' && (t == null || t.deregisterLabelWidth(a.value)));
                });
            },
            y = () => u('update');
        return (
            Je(() => {
                y();
            }),
            Ke(() => {
                u('remove');
            }),
            ot(() => y()),
            te(a, (v, g) => {
                i.updateAll && (t == null || t.registerLabelWidth(v, g));
            }),
            ft(
                E(() => {
                    var v, g;
                    return (g = (v = s.value) == null ? void 0 : v.firstElementChild) != null ? g : null;
                }),
                y
            ),
            () => {
                var v, g;
                if (!e) return null;
                const { isAutoWidth: h } = i;
                if (h) {
                    const O = t == null ? void 0 : t.autoLabelWidth,
                        A = n == null ? void 0 : n.hasLabel,
                        d = {};
                    if (A && O && O !== 'auto') {
                        const b = Math.max(0, Number.parseInt(O, 10) - a.value),
                            l = t.labelPosition === 'left' ? 'marginRight' : 'marginLeft';
                        b && (d[l] = `${b}px`);
                    }
                    return ne('div', { ref: s, class: [r.be('item', 'label-wrap')], style: d }, [
                        (v = e.default) == null ? void 0 : v.call(e),
                    ]);
                } else return ne(lt, { ref: s }, [(g = e.default) == null ? void 0 : g.call(e)]);
            }
        );
    },
});
const ur = ['role', 'aria-labelledby'],
    dr = Y({ name: 'ElFormItem' }),
    cr = Y({
        ...dr,
        props: fr,
        setup(i, { expose: e }) {
            const t = i,
                n = ut(),
                r = re(qe, void 0),
                s = re(ve, void 0),
                a = Te(void 0, { formItem: !1 }),
                o = Fe('form-item'),
                u = dt().value,
                y = $([]),
                v = $(''),
                g = ct(v, 100),
                h = $(''),
                O = $();
            let A,
                d = !1;
            const b = E(() => {
                    if ((r == null ? void 0 : r.labelPosition) === 'top') return {};
                    const p = _e(t.labelWidth || (r == null ? void 0 : r.labelWidth) || '');
                    return p ? { width: p } : {};
                }),
                l = E(() => {
                    if ((r == null ? void 0 : r.labelPosition) === 'top' || (r == null ? void 0 : r.inline)) return {};
                    if (!t.label && !t.labelWidth && L) return {};
                    const p = _e(t.labelWidth || (r == null ? void 0 : r.labelWidth) || '');
                    return !t.label && !n.label ? { marginLeft: p } : {};
                }),
                R = E(() => [
                    o.b(),
                    o.m(a.value),
                    o.is('error', v.value === 'error'),
                    o.is('validating', v.value === 'validating'),
                    o.is('success', v.value === 'success'),
                    o.is('required', ie.value || t.required),
                    o.is('no-asterisk', r == null ? void 0 : r.hideRequiredAsterisk),
                    (r == null ? void 0 : r.requireAsteriskPosition) === 'right' ? 'asterisk-right' : 'asterisk-left',
                    { [o.m('feedback')]: r == null ? void 0 : r.statusIcon },
                ]),
                f = E(() => (Be(t.inlineMessage) ? t.inlineMessage : (r == null ? void 0 : r.inlineMessage) || !1)),
                c = E(() => [o.e('error'), { [o.em('error', 'inline')]: f.value }]),
                q = E(() => (t.prop ? (de(t.prop) ? t.prop : t.prop.join('.')) : '')),
                w = E(() => !!(t.label || n.label)),
                S = E(() => t.for || (y.value.length === 1 ? y.value[0] : void 0)),
                N = E(() => !S.value && w.value),
                L = !!s,
                T = E(() => {
                    const p = r == null ? void 0 : r.model;
                    if (!(!p || !t.prop)) return oe(p, t.prop).value;
                }),
                C = E(() => {
                    const { required: p } = t,
                        F = [];
                    t.rules && F.push(...ce(t.rules));
                    const j = r == null ? void 0 : r.rules;
                    if (j && t.prop) {
                        const P = oe(j, t.prop).value;
                        P && F.push(...ce(P));
                    }
                    if (p !== void 0) {
                        const P = F.map((I, z) => [I, z]).filter(([I]) => Object.keys(I).includes('required'));
                        if (P.length > 0) for (const [I, z] of P) I.required !== p && (F[z] = { ...I, required: p });
                        else F.push({ required: p });
                    }
                    return F;
                }),
                W = E(() => C.value.length > 0),
                M = (p) =>
                    C.value
                        .filter((j) =>
                            !j.trigger || !p ? !0 : Array.isArray(j.trigger) ? j.trigger.includes(p) : j.trigger === p
                        )
                        .map(({ trigger: j, ...P }) => P),
                ie = E(() => C.value.some((p) => p.required)),
                He = E(() => {
                    var p;
                    return (
                        g.value === 'error' &&
                        t.showMessage &&
                        ((p = r == null ? void 0 : r.showMessage) != null ? p : !0)
                    );
                }),
                xe = E(() => `${t.label || ''}${(r == null ? void 0 : r.labelSuffix) || ''}`),
                D = (p) => {
                    v.value = p;
                },
                ke = (p) => {
                    var F, j;
                    const { errors: P, fields: I } = p;
                    (!P || !I) && console.error(p),
                        D('error'),
                        (h.value = P
                            ? (j = (F = P == null ? void 0 : P[0]) == null ? void 0 : F.message) != null
                                ? j
                                : `${t.prop} is required`
                            : ''),
                        r == null || r.emit('validate', t.prop, !1, h.value);
                },
                et = () => {
                    D('success'), r == null || r.emit('validate', t.prop, !0, '');
                },
                tt = async (p) => {
                    const F = q.value;
                    return new Q({ [F]: p })
                        .validate({ [F]: T.value }, { firstFields: !0 })
                        .then(() => (et(), !0))
                        .catch((P) => (ke(P), Promise.reject(P)));
                },
                Oe = async (p, F) => {
                    if (d || !t.prop) return !1;
                    const j = Ge(F);
                    if (!W.value) return F == null || F(!1), !1;
                    const P = M(p);
                    return P.length === 0
                        ? (F == null || F(!0), !0)
                        : (D('validating'),
                          tt(P)
                              .then(() => (F == null || F(!0), !0))
                              .catch((I) => {
                                  const { fields: z } = I;
                                  return F == null || F(!1, z), j ? !1 : Promise.reject(z);
                              }));
                },
                ae = () => {
                    D(''), (h.value = ''), (d = !1);
                },
                Ee = async () => {
                    const p = r == null ? void 0 : r.model;
                    if (!p || !t.prop) return;
                    const F = oe(p, t.prop);
                    (d = !0), (F.value = Re(A)), await Ye(), ae(), (d = !1);
                },
                rt = (p) => {
                    y.value.includes(p) || y.value.push(p);
                },
                nt = (p) => {
                    y.value = y.value.filter((F) => F !== p);
                };
            te(
                () => t.error,
                (p) => {
                    (h.value = p || ''), D(p ? 'error' : '');
                },
                { immediate: !0 }
            ),
                te(
                    () => t.validateStatus,
                    (p) => D(p || '')
                );
            const se = De({
                ...ze(t),
                $el: O,
                size: a,
                validateState: v,
                labelId: u,
                inputIds: y,
                isGroup: N,
                hasLabel: w,
                fieldValue: T,
                addInputId: rt,
                removeInputId: nt,
                resetField: Ee,
                clearValidate: ae,
                validate: Oe,
            });
            return (
                Ce(ve, se),
                Je(() => {
                    t.prop && (r == null || r.addField(se), (A = Re(T.value)));
                }),
                Ke(() => {
                    r == null || r.removeField(se);
                }),
                e({ size: a, validateMessage: h, validateState: v, validate: Oe, clearValidate: ae, resetField: Ee }),
                (p, F) => {
                    var j;
                    return (
                        pe(),
                        Ue(
                            'div',
                            {
                                ref_key: 'formItemRef',
                                ref: O,
                                class: Z(x(R)),
                                role: x(N) ? 'group' : void 0,
                                'aria-labelledby': x(N) ? x(u) : void 0,
                            },
                            [
                                ne(
                                    x(lr),
                                    {
                                        'is-auto-width': x(b).width === 'auto',
                                        'update-all': ((j = x(r)) == null ? void 0 : j.labelWidth) === 'auto',
                                    },
                                    {
                                        default: fe(() => [
                                            x(w)
                                                ? (pe(),
                                                  pt(
                                                      vt(x(S) ? 'label' : 'div'),
                                                      {
                                                          key: 0,
                                                          id: x(u),
                                                          for: x(S),
                                                          class: Z(x(o).e('label')),
                                                          style: Ae(x(b)),
                                                      },
                                                      {
                                                          default: fe(() => [
                                                              k(p.$slots, 'label', { label: x(xe) }, () => [
                                                                  mt(Pe(x(xe)), 1),
                                                              ]),
                                                          ]),
                                                          _: 3,
                                                      },
                                                      8,
                                                      ['id', 'for', 'class', 'style']
                                                  ))
                                                : Se('v-if', !0),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    ['is-auto-width', 'update-all']
                                ),
                                je(
                                    'div',
                                    { class: Z(x(o).e('content')), style: Ae(x(l)) },
                                    [
                                        k(p.$slots, 'default'),
                                        ne(
                                            gt,
                                            { name: `${x(o).namespace.value}-zoom-in-top` },
                                            {
                                                default: fe(() => [
                                                    x(He)
                                                        ? k(p.$slots, 'error', { key: 0, error: h.value }, () => [
                                                              je('div', { class: Z(x(c)) }, Pe(h.value), 3),
                                                          ])
                                                        : Se('v-if', !0),
                                                ]),
                                                _: 3,
                                            },
                                            8,
                                            ['name']
                                        ),
                                    ],
                                    6
                                ),
                            ],
                            10,
                            ur
                        )
                    );
                }
            );
        },
    });
var Xe = Ze(cr, [['__file', 'form-item.vue']]);
const mr = ht(Pt, { FormItem: Xe }),
    gr = yt(Xe);
export { gr as E, mr as a };
