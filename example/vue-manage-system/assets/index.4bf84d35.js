(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver((o) => {
        for (const a of o)
            if (a.type === 'childList')
                for (const s of a.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(o) {
        const a = {};
        return (
            o.integrity && (a.integrity = o.integrity),
            o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
            o.crossorigin === 'use-credentials'
                ? (a.credentials = 'include')
                : o.crossorigin === 'anonymous'
                ? (a.credentials = 'omit')
                : (a.credentials = 'same-origin'),
            a
        );
    }
    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const a = r(o);
        fetch(o.href, a);
    }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function x2(e, t) {
    const r = new Set(e.split(','));
    return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const Ie = {},
    Zr = [],
    Ze = () => {},
    Y1 = () => !1,
    Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    C2 = (e) => e.startsWith('onUpdate:'),
    We = Object.assign,
    M2 = (e, t) => {
        const r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
    },
    J1 = Object.prototype.hasOwnProperty,
    be = (e, t) => J1.call(e, t),
    se = Array.isArray,
    Qr = (e) => gn(e) === '[object Map]',
    Uo = (e) => gn(e) === '[object Set]',
    L0 = (e) => gn(e) === '[object Date]',
    Z1 = (e) => gn(e) === '[object RegExp]',
    pe = (e) => typeof e == 'function',
    xe = (e) => typeof e == 'string',
    yr = (e) => typeof e == 'symbol',
    Ee = (e) => e !== null && typeof e == 'object',
    kl = (e) => (Ee(e) || pe(e)) && pe(e.then) && pe(e.catch),
    Rl = Object.prototype.toString,
    gn = (e) => Rl.call(e),
    Q1 = (e) => gn(e).slice(8, -1),
    Fl = (e) => gn(e) === '[object Object]',
    E2 = (e) => xe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    Bn = x2(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    Wo = (e) => {
        const t = Object.create(null);
        return (r) => t[r] || (t[r] = e(r));
    },
    X1 = /-(\w)/g,
    Ct = Wo((e) => e.replace(X1, (t, r) => (r ? r.toUpperCase() : ''))),
    ec = /\B([A-Z])/g,
    kr = Wo((e) => e.replace(ec, '-$1').toLowerCase()),
    Xn = Wo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Co = Wo((e) => (e ? `on${Xn(e)}` : '')),
    br = (e, t) => !Object.is(e, t),
    Xr = (e, t) => {
        for (let r = 0; r < e.length; r++) e[r](t);
    },
    Lo = (e, t, r) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r });
    },
    Ya = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    tc = (e) => {
        const t = xe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    };
let V0;
const $l = () =>
    V0 ||
    (V0 =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
            ? self
            : typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : {});
function Mt(e) {
    if (se(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r],
                o = xe(n) ? ac(n) : Mt(n);
            if (o) for (const a in o) t[a] = o[a];
        }
        return t;
    } else if (xe(e) || Ee(e)) return e;
}
const rc = /;(?![^(]*\))/g,
    nc = /:([^]+)/,
    oc = /\/\*[^]*?\*\//g;
function ac(e) {
    const t = {};
    return (
        e
            .replace(oc, '')
            .split(rc)
            .forEach((r) => {
                if (r) {
                    const n = r.split(nc);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
            }),
        t
    );
}
function ke(e) {
    let t = '';
    if (xe(e)) t = e;
    else if (se(e))
        for (let r = 0; r < e.length; r++) {
            const n = ke(e[r]);
            n && (t += n + ' ');
        }
    else if (Ee(e)) for (const r in e) e[r] && (t += r + ' ');
    return t.trim();
}
function sc(e) {
    if (!e) return null;
    let { class: t, style: r } = e;
    return t && !xe(t) && (e.class = ke(t)), r && (e.style = Mt(r)), e;
}
const lc = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    ic = x2(lc);
function Nl(e) {
    return !!e || e === '';
}
function uc(e, t) {
    if (e.length !== t.length) return !1;
    let r = !0;
    for (let n = 0; r && n < e.length; n++) r = nn(e[n], t[n]);
    return r;
}
function nn(e, t) {
    if (e === t) return !0;
    let r = L0(e),
        n = L0(t);
    if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
    if (((r = yr(e)), (n = yr(t)), r || n)) return e === t;
    if (((r = se(e)), (n = se(t)), r || n)) return r && n ? uc(e, t) : !1;
    if (((r = Ee(e)), (n = Ee(t)), r || n)) {
        if (!r || !n) return !1;
        const o = Object.keys(e).length,
            a = Object.keys(t).length;
        if (o !== a) return !1;
        for (const s in e) {
            const l = e.hasOwnProperty(s),
                i = t.hasOwnProperty(s);
            if ((l && !i) || (!l && i) || !nn(e[s], t[s])) return !1;
        }
    }
    return String(e) === String(t);
}
function Dl(e, t) {
    return e.findIndex((r) => nn(r, t));
}
const fr = (e) =>
        xe(e)
            ? e
            : e == null
            ? ''
            : se(e) || (Ee(e) && (e.toString === Rl || !pe(e.toString)))
            ? JSON.stringify(e, jl, 2)
            : String(e),
    jl = (e, t) =>
        t && t.__v_isRef
            ? jl(e, t.value)
            : Qr(t)
            ? { [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, o], a) => ((r[Ca(n, a) + ' =>'] = o), r), {}) }
            : Uo(t)
            ? { [`Set(${t.size})`]: [...t.values()].map((r) => Ca(r)) }
            : yr(t)
            ? Ca(t)
            : Ee(t) && !se(t) && !Fl(t)
            ? String(t)
            : t,
    Ca = (e, t = '') => {
        var r;
        return yr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
    };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let _t;
class ql {
    constructor(t = !1) {
        (this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = _t),
            !t && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    run(t) {
        if (this._active) {
            const r = _t;
            try {
                return (_t = this), t();
            } finally {
                _t = r;
            }
        }
    }
    on() {
        _t = this;
    }
    off() {
        _t = this.parent;
    }
    stop(t) {
        if (this._active) {
            let r, n;
            for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
            for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
            if (this.scopes) for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
            }
            (this.parent = void 0), (this._active = !1);
        }
    }
}
function Kl(e) {
    return new ql(e);
}
function cc(e, t = _t) {
    t && t.active && t.effects.push(e);
}
function S2() {
    return _t;
}
function Ul(e) {
    _t && _t.cleanups.push(e);
}
let Vr;
class A2 {
    constructor(t, r, n, o) {
        (this.fn = t),
            (this.trigger = r),
            (this.scheduler = n),
            (this.active = !0),
            (this.deps = []),
            (this._dirtyLevel = 4),
            (this._trackId = 0),
            (this._runnings = 0),
            (this._shouldSchedule = !1),
            (this._depsLength = 0),
            cc(this, o);
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            (this._dirtyLevel = 1), Rr();
            for (let t = 0; t < this._depsLength; t++) {
                const r = this.deps[t];
                if (r.computed && (pc(r.computed), this._dirtyLevel >= 4)) break;
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), Fr();
        }
        return this._dirtyLevel >= 4;
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0;
    }
    run() {
        if (((this._dirtyLevel = 0), !this.active)) return this.fn();
        let t = mr,
            r = Vr;
        try {
            return (mr = !0), (Vr = this), this._runnings++, O0(this), this.fn();
        } finally {
            P0(this), this._runnings--, (Vr = r), (mr = t);
        }
    }
    stop() {
        var t;
        this.active && (O0(this), P0(this), (t = this.onStop) == null || t.call(this), (this.active = !1));
    }
}
function pc(e) {
    return e.value;
}
function O0(e) {
    e._trackId++, (e._depsLength = 0);
}
function P0(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Wl(e.deps[t], e);
        e.deps.length = e._depsLength;
    }
}
function Wl(e, t) {
    const r = e.get(t);
    r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let mr = !0,
    Ja = 0;
const Gl = [];
function Rr() {
    Gl.push(mr), (mr = !1);
}
function Fr() {
    const e = Gl.pop();
    mr = e === void 0 ? !0 : e;
}
function z2() {
    Ja++;
}
function T2() {
    for (Ja--; !Ja && Za.length; ) Za.shift()();
}
function Yl(e, t, r) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && Wl(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
    }
}
const Za = [];
function Jl(e, t, r) {
    z2();
    for (const n of e.keys()) {
        let o;
        n._dirtyLevel < t &&
            (o != null ? o : (o = e.get(n) === n._trackId)) &&
            (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), (n._dirtyLevel = t)),
            n._shouldSchedule &&
                (o != null ? o : (o = e.get(n) === n._trackId)) &&
                (n.trigger(),
                (!n._runnings || n.allowRecurse) &&
                    n._dirtyLevel !== 2 &&
                    ((n._shouldSchedule = !1), n.scheduler && Za.push(n.scheduler)));
    }
    T2();
}
const Zl = (e, t) => {
        const r = new Map();
        return (r.cleanup = e), (r.computed = t), r;
    },
    Vo = new WeakMap(),
    Or = Symbol(''),
    Qa = Symbol('');
function pt(e, t, r) {
    if (mr && Vr) {
        let n = Vo.get(e);
        n || Vo.set(e, (n = new Map()));
        let o = n.get(r);
        o || n.set(r, (o = Zl(() => n.delete(r)))), Yl(Vr, o);
    }
}
function Gt(e, t, r, n, o, a) {
    const s = Vo.get(e);
    if (!s) return;
    let l = [];
    if (t === 'clear') l = [...s.values()];
    else if (r === 'length' && se(e)) {
        const i = Number(n);
        s.forEach((u, c) => {
            (c === 'length' || (!yr(c) && c >= i)) && l.push(u);
        });
    } else
        switch ((r !== void 0 && l.push(s.get(r)), t)) {
            case 'add':
                se(e) ? E2(r) && l.push(s.get('length')) : (l.push(s.get(Or)), Qr(e) && l.push(s.get(Qa)));
                break;
            case 'delete':
                se(e) || (l.push(s.get(Or)), Qr(e) && l.push(s.get(Qa)));
                break;
            case 'set':
                Qr(e) && l.push(s.get(Or));
                break;
        }
    z2();
    for (const i of l) i && Jl(i, 4);
    T2();
}
function fc(e, t) {
    var r;
    return (r = Vo.get(e)) == null ? void 0 : r.get(t);
}
const dc = x2('__proto__,__v_isRef,__isVue'),
    Ql = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== 'arguments' && e !== 'caller')
            .map((e) => Symbol[e])
            .filter(yr)
    ),
    I0 = _c();
function _c() {
    const e = {};
    return (
        ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
            e[t] = function (...r) {
                const n = Ce(this);
                for (let a = 0, s = this.length; a < s; a++) pt(n, 'get', a + '');
                const o = n[t](...r);
                return o === -1 || o === !1 ? n[t](...r.map(Ce)) : o;
            };
        }),
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
            e[t] = function (...r) {
                Rr(), z2();
                const n = Ce(this)[t].apply(this, r);
                return T2(), Fr(), n;
            };
        }),
        e
    );
}
function vc(e) {
    const t = Ce(this);
    return pt(t, 'has', e), t.hasOwnProperty(e);
}
class Xl {
    constructor(t = !1, r = !1) {
        (this._isReadonly = t), (this._isShallow = r);
    }
    get(t, r, n) {
        const o = this._isReadonly,
            a = this._isShallow;
        if (r === '__v_isReactive') return !o;
        if (r === '__v_isReadonly') return o;
        if (r === '__v_isShallow') return a;
        if (r === '__v_raw')
            return n === (o ? (a ? zc : ni) : a ? ri : ti).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
                ? t
                : void 0;
        const s = se(t);
        if (!o) {
            if (s && be(I0, r)) return Reflect.get(I0, r, n);
            if (r === 'hasOwnProperty') return vc;
        }
        const l = Reflect.get(t, r, n);
        return (yr(r) ? Ql.has(r) : dc(r)) || (o || pt(t, 'get', r), a)
            ? l
            : je(l)
            ? s && E2(r)
                ? l
                : l.value
            : Ee(l)
            ? o
                ? $r(l)
                : Lt(l)
            : l;
    }
}
class ei extends Xl {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, r, n, o) {
        let a = t[r];
        if (!this._isShallow) {
            const i = on(a);
            if ((!Oo(n) && !on(n) && ((a = Ce(a)), (n = Ce(n))), !se(t) && je(a) && !je(n)))
                return i ? !1 : ((a.value = n), !0);
        }
        const s = se(t) && E2(r) ? Number(r) < t.length : be(t, r),
            l = Reflect.set(t, r, n, o);
        return t === Ce(o) && (s ? br(n, a) && Gt(t, 'set', r, n) : Gt(t, 'add', r, n)), l;
    }
    deleteProperty(t, r) {
        const n = be(t, r);
        t[r];
        const o = Reflect.deleteProperty(t, r);
        return o && n && Gt(t, 'delete', r, void 0), o;
    }
    has(t, r) {
        const n = Reflect.has(t, r);
        return (!yr(r) || !Ql.has(r)) && pt(t, 'has', r), n;
    }
    ownKeys(t) {
        return pt(t, 'iterate', se(t) ? 'length' : Or), Reflect.ownKeys(t);
    }
}
class hc extends Xl {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, r) {
        return !0;
    }
    deleteProperty(t, r) {
        return !0;
    }
}
const mc = new ei(),
    gc = new hc(),
    wc = new ei(!0),
    H2 = (e) => e,
    Go = (e) => Reflect.getPrototypeOf(e);
function lo(e, t, r = !1, n = !1) {
    e = e.__v_raw;
    const o = Ce(e),
        a = Ce(t);
    r || (br(t, a) && pt(o, 'get', t), pt(o, 'get', a));
    const { has: s } = Go(o),
        l = n ? H2 : r ? V2 : Nn;
    if (s.call(o, t)) return l(e.get(t));
    if (s.call(o, a)) return l(e.get(a));
    e !== o && e.get(t);
}
function io(e, t = !1) {
    const r = this.__v_raw,
        n = Ce(r),
        o = Ce(e);
    return t || (br(e, o) && pt(n, 'has', e), pt(n, 'has', o)), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function uo(e, t = !1) {
    return (e = e.__v_raw), !t && pt(Ce(e), 'iterate', Or), Reflect.get(e, 'size', e);
}
function k0(e) {
    e = Ce(e);
    const t = Ce(this);
    return Go(t).has.call(t, e) || (t.add(e), Gt(t, 'add', e, e)), this;
}
function R0(e, t) {
    t = Ce(t);
    const r = Ce(this),
        { has: n, get: o } = Go(r);
    let a = n.call(r, e);
    a || ((e = Ce(e)), (a = n.call(r, e)));
    const s = o.call(r, e);
    return r.set(e, t), a ? br(t, s) && Gt(r, 'set', e, t) : Gt(r, 'add', e, t), this;
}
function F0(e) {
    const t = Ce(this),
        { has: r, get: n } = Go(t);
    let o = r.call(t, e);
    o || ((e = Ce(e)), (o = r.call(t, e))), n && n.call(t, e);
    const a = t.delete(e);
    return o && Gt(t, 'delete', e, void 0), a;
}
function $0() {
    const e = Ce(this),
        t = e.size !== 0,
        r = e.clear();
    return t && Gt(e, 'clear', void 0, void 0), r;
}
function co(e, t) {
    return function (n, o) {
        const a = this,
            s = a.__v_raw,
            l = Ce(s),
            i = t ? H2 : e ? V2 : Nn;
        return !e && pt(l, 'iterate', Or), s.forEach((u, c) => n.call(o, i(u), i(c), a));
    };
}
function po(e, t, r) {
    return function (...n) {
        const o = this.__v_raw,
            a = Ce(o),
            s = Qr(a),
            l = e === 'entries' || (e === Symbol.iterator && s),
            i = e === 'keys' && s,
            u = o[e](...n),
            c = r ? H2 : t ? V2 : Nn;
        return (
            !t && pt(a, 'iterate', i ? Qa : Or),
            {
                next() {
                    const { value: p, done: d } = u.next();
                    return d ? { value: p, done: d } : { value: l ? [c(p[0]), c(p[1])] : c(p), done: d };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function Xt(e) {
    return function (...t) {
        return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
    };
}
function yc() {
    const e = {
            get(a) {
                return lo(this, a);
            },
            get size() {
                return uo(this);
            },
            has: io,
            add: k0,
            set: R0,
            delete: F0,
            clear: $0,
            forEach: co(!1, !1),
        },
        t = {
            get(a) {
                return lo(this, a, !1, !0);
            },
            get size() {
                return uo(this);
            },
            has: io,
            add: k0,
            set: R0,
            delete: F0,
            clear: $0,
            forEach: co(!1, !0),
        },
        r = {
            get(a) {
                return lo(this, a, !0);
            },
            get size() {
                return uo(this, !0);
            },
            has(a) {
                return io.call(this, a, !0);
            },
            add: Xt('add'),
            set: Xt('set'),
            delete: Xt('delete'),
            clear: Xt('clear'),
            forEach: co(!0, !1),
        },
        n = {
            get(a) {
                return lo(this, a, !0, !0);
            },
            get size() {
                return uo(this, !0);
            },
            has(a) {
                return io.call(this, a, !0);
            },
            add: Xt('add'),
            set: Xt('set'),
            delete: Xt('delete'),
            clear: Xt('clear'),
            forEach: co(!0, !0),
        };
    return (
        ['keys', 'values', 'entries', Symbol.iterator].forEach((a) => {
            (e[a] = po(a, !1, !1)), (r[a] = po(a, !0, !1)), (t[a] = po(a, !1, !0)), (n[a] = po(a, !0, !0));
        }),
        [e, r, t, n]
    );
}
const [bc, xc, Cc, Mc] = yc();
function B2(e, t) {
    const r = t ? (e ? Mc : Cc) : e ? xc : bc;
    return (n, o, a) =>
        o === '__v_isReactive'
            ? !e
            : o === '__v_isReadonly'
            ? e
            : o === '__v_raw'
            ? n
            : Reflect.get(be(r, o) && o in n ? r : n, o, a);
}
const Ec = { get: B2(!1, !1) },
    Sc = { get: B2(!1, !0) },
    Ac = { get: B2(!0, !1) },
    ti = new WeakMap(),
    ri = new WeakMap(),
    ni = new WeakMap(),
    zc = new WeakMap();
function Tc(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function Hc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Tc(Q1(e));
}
function Lt(e) {
    return on(e) ? e : L2(e, !1, mc, Ec, ti);
}
function oi(e) {
    return L2(e, !1, wc, Sc, ri);
}
function $r(e) {
    return L2(e, !0, gc, Ac, ni);
}
function L2(e, t, r, n, o) {
    if (!Ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const a = o.get(e);
    if (a) return a;
    const s = Hc(e);
    if (s === 0) return e;
    const l = new Proxy(e, s === 2 ? n : r);
    return o.set(e, l), l;
}
function gr(e) {
    return on(e) ? gr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function on(e) {
    return !!(e && e.__v_isReadonly);
}
function Oo(e) {
    return !!(e && e.__v_isShallow);
}
function ai(e) {
    return gr(e) || on(e);
}
function Ce(e) {
    const t = e && e.__v_raw;
    return t ? Ce(t) : e;
}
function Yo(e) {
    return Object.isExtensible(e) && Lo(e, '__v_skip', !0), e;
}
const Nn = (e) => (Ee(e) ? Lt(e) : e),
    V2 = (e) => (Ee(e) ? $r(e) : e);
class si {
    constructor(t, r, n, o) {
        (this.getter = t),
            (this._setter = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this.__v_isReadonly = !1),
            (this.effect = new A2(
                () => t(this._value),
                () => Mo(this, this.effect._dirtyLevel === 2 ? 2 : 3)
            )),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !o),
            (this.__v_isReadonly = n);
    }
    get value() {
        const t = Ce(this);
        return (
            (!t._cacheable || t.effect.dirty) && br(t._value, (t._value = t.effect.run())) && Mo(t, 4),
            li(t),
            t.effect._dirtyLevel >= 2 && Mo(t, 2),
            t._value
        );
    }
    set value(t) {
        this._setter(t);
    }
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(t) {
        this.effect.dirty = t;
    }
}
function Bc(e, t, r = !1) {
    let n, o;
    const a = pe(e);
    return a ? ((n = e), (o = Ze)) : ((n = e.get), (o = e.set)), new si(n, o, a || !o, r);
}
function li(e) {
    var t;
    mr &&
        Vr &&
        ((e = Ce(e)),
        Yl(Vr, (t = e.dep) != null ? t : (e.dep = Zl(() => (e.dep = void 0), e instanceof si ? e : void 0))));
}
function Mo(e, t = 4, r) {
    e = Ce(e);
    const n = e.dep;
    n && Jl(n, t);
}
function je(e) {
    return !!(e && e.__v_isRef === !0);
}
function D(e) {
    return ii(e, !1);
}
function Jo(e) {
    return ii(e, !0);
}
function ii(e, t) {
    return je(e) ? e : new Lc(e, t);
}
class Lc {
    constructor(t, r) {
        (this.__v_isShallow = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._rawValue = r ? t : Ce(t)),
            (this._value = r ? t : Nn(t));
    }
    get value() {
        return li(this), this._value;
    }
    set value(t) {
        const r = this.__v_isShallow || Oo(t) || on(t);
        (t = r ? t : Ce(t)),
            br(t, this._rawValue) && ((this._rawValue = t), (this._value = r ? t : Nn(t)), Mo(this, 4));
    }
}
function A(e) {
    return je(e) ? e.value : e;
}
const Vc = {
    get: (e, t, r) => A(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
        const o = e[t];
        return je(o) && !je(r) ? ((o.value = r), !0) : Reflect.set(e, t, r, n);
    },
};
function ui(e) {
    return gr(e) ? e : new Proxy(e, Vc);
}
function Oc(e) {
    const t = se(e) ? new Array(e.length) : {};
    for (const r in e) t[r] = ci(e, r);
    return t;
}
class Pc {
    constructor(t, r, n) {
        (this._object = t), (this._key = r), (this._defaultValue = n), (this.__v_isRef = !0);
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
        this._object[this._key] = t;
    }
    get dep() {
        return fc(Ce(this._object), this._key);
    }
}
class Ic {
    constructor(t) {
        (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
    }
    get value() {
        return this._getter();
    }
}
function nt(e, t, r) {
    return je(e) ? e : pe(e) ? new Ic(e) : Ee(e) && arguments.length > 1 ? ci(e, t, r) : D(e);
}
function ci(e, t, r) {
    const n = e[t];
    return je(n) ? n : new Pc(e, t, r);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function wr(e, t, r, n) {
    try {
        return n ? e(...n) : e();
    } catch (o) {
        Zo(o, t, r);
    }
}
function bt(e, t, r, n) {
    if (pe(e)) {
        const a = wr(e, t, r, n);
        return (
            a &&
                kl(a) &&
                a.catch((s) => {
                    Zo(s, t, r);
                }),
            a
        );
    }
    const o = [];
    for (let a = 0; a < e.length; a++) o.push(bt(e[a], t, r, n));
    return o;
}
function Zo(e, t, r, n = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const s = t.proxy,
            l = `https://vuejs.org/error-reference/#runtime-${r}`;
        for (; a; ) {
            const u = a.ec;
            if (u) {
                for (let c = 0; c < u.length; c++) if (u[c](e, s, l) === !1) return;
            }
            a = a.parent;
        }
        const i = t.appContext.config.errorHandler;
        if (i) {
            wr(i, null, 10, [e, s, l]);
            return;
        }
    }
    kc(e, r, o, n);
}
function kc(e, t, r, n = !0) {
    console.error(e);
}
let Dn = !1,
    Xa = !1;
const rt = [];
let It = 0;
const en = [];
let lr = null,
    Hr = 0;
const pi = Promise.resolve();
let O2 = null;
function ht(e) {
    const t = O2 || pi;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rc(e) {
    let t = It + 1,
        r = rt.length;
    for (; t < r; ) {
        const n = (t + r) >>> 1,
            o = rt[n],
            a = jn(o);
        a < e || (a === e && o.pre) ? (t = n + 1) : (r = n);
    }
    return t;
}
function P2(e) {
    (!rt.length || !rt.includes(e, Dn && e.allowRecurse ? It + 1 : It)) &&
        (e.id == null ? rt.push(e) : rt.splice(Rc(e.id), 0, e), fi());
}
function fi() {
    !Dn && !Xa && ((Xa = !0), (O2 = pi.then(_i)));
}
function Fc(e) {
    const t = rt.indexOf(e);
    t > It && rt.splice(t, 1);
}
function $c(e) {
    se(e) ? en.push(...e) : (!lr || !lr.includes(e, e.allowRecurse ? Hr + 1 : Hr)) && en.push(e), fi();
}
function N0(e, t, r = Dn ? It + 1 : 0) {
    for (; r < rt.length; r++) {
        const n = rt[r];
        if (n && n.pre) {
            if (e && n.id !== e.uid) continue;
            rt.splice(r, 1), r--, n();
        }
    }
}
function di(e) {
    if (en.length) {
        const t = [...new Set(en)].sort((r, n) => jn(r) - jn(n));
        if (((en.length = 0), lr)) {
            lr.push(...t);
            return;
        }
        for (lr = t, Hr = 0; Hr < lr.length; Hr++) lr[Hr]();
        (lr = null), (Hr = 0);
    }
}
const jn = (e) => (e.id == null ? 1 / 0 : e.id),
    Nc = (e, t) => {
        const r = jn(e) - jn(t);
        if (r === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1;
        }
        return r;
    };
function _i(e) {
    (Xa = !1), (Dn = !0), rt.sort(Nc);
    const t = Ze;
    try {
        for (It = 0; It < rt.length; It++) {
            const r = rt[It];
            r && r.active !== !1 && wr(r, null, 14);
        }
    } finally {
        (It = 0), (rt.length = 0), di(), (Dn = !1), (O2 = null), (rt.length || en.length) && _i();
    }
}
function Dc(e, t, ...r) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || Ie;
    let o = r;
    const a = t.startsWith('update:'),
        s = a && t.slice(7);
    if (s && s in n) {
        const c = `${s === 'modelValue' ? 'model' : s}Modifiers`,
            { number: p, trim: d } = n[c] || Ie;
        d && (o = r.map((m) => (xe(m) ? m.trim() : m))), p && (o = r.map(Ya));
    }
    let l,
        i = n[(l = Co(t))] || n[(l = Co(Ct(t)))];
    !i && a && (i = n[(l = Co(kr(t)))]), i && bt(i, e, 6, o);
    const u = n[l + 'Once'];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        (e.emitted[l] = !0), bt(u, e, 6, o);
    }
}
function vi(e, t, r = !1) {
    const n = t.emitsCache,
        o = n.get(e);
    if (o !== void 0) return o;
    const a = e.emits;
    let s = {},
        l = !1;
    if (!pe(e)) {
        const i = (u) => {
            const c = vi(u, t, !0);
            c && ((l = !0), We(s, c));
        };
        !r && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
    }
    return !a && !l
        ? (Ee(e) && n.set(e, null), null)
        : (se(a) ? a.forEach((i) => (s[i] = null)) : We(s, a), Ee(e) && n.set(e, s), s);
}
function Qo(e, t) {
    return !e || !Ko(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, '')), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, kr(t)) || be(e, t));
}
let Ue = null,
    Xo = null;
function Po(e) {
    const t = Ue;
    return (Ue = e), (Xo = (e && e.type.__scopeId) || null), t;
}
function jc(e) {
    Xo = e;
}
function qc() {
    Xo = null;
}
function re(e, t = Ue, r) {
    if (!t || e._n) return e;
    const n = (...o) => {
        n._d && ts(-1);
        const a = Po(t);
        let s;
        try {
            s = e(...o);
        } finally {
            Po(a), n._d && ts(1);
        }
        return s;
    };
    return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function Ma(e) {
    const {
        type: t,
        vnode: r,
        proxy: n,
        withProxy: o,
        props: a,
        propsOptions: [s],
        slots: l,
        attrs: i,
        emit: u,
        render: c,
        renderCache: p,
        data: d,
        setupState: m,
        ctx: _,
        inheritAttrs: g,
    } = e;
    let x, y;
    const C = Po(e);
    try {
        if (r.shapeFlag & 4) {
            const S = o || n,
                H = S;
            (x = Pt(c.call(H, S, p, a, m, d, _))), (y = i);
        } else {
            const S = t;
            (x = Pt(S.length > 1 ? S(a, { attrs: i, slots: l, emit: u }) : S(a, null))), (y = t.props ? i : Kc(i));
        }
    } catch (S) {
        (On.length = 0), Zo(S, e, 1), (x = G(lt));
    }
    let E = x;
    if (y && g !== !1) {
        const S = Object.keys(y),
            { shapeFlag: H } = E;
        S.length && H & 7 && (s && S.some(C2) && (y = Uc(y, s)), (E = Nt(E, y)));
    }
    return (
        r.dirs && ((E = Nt(E)), (E.dirs = E.dirs ? E.dirs.concat(r.dirs) : r.dirs)),
        r.transition && (E.transition = r.transition),
        (x = E),
        Po(C),
        x
    );
}
const Kc = (e) => {
        let t;
        for (const r in e) (r === 'class' || r === 'style' || Ko(r)) && ((t || (t = {}))[r] = e[r]);
        return t;
    },
    Uc = (e, t) => {
        const r = {};
        for (const n in e) (!C2(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
        return r;
    };
function Wc(e, t, r) {
    const { props: n, children: o, component: a } = e,
        { props: s, children: l, patchFlag: i } = t,
        u = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (r && i >= 0) {
        if (i & 1024) return !0;
        if (i & 16) return n ? D0(n, s, u) : !!s;
        if (i & 8) {
            const c = t.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                const d = c[p];
                if (s[d] !== n[d] && !Qo(u, d)) return !0;
            }
        }
    } else return (o || l) && (!l || !l.$stable) ? !0 : n === s ? !1 : n ? (s ? D0(n, s, u) : !0) : !!s;
    return !1;
}
function D0(e, t, r) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < n.length; o++) {
        const a = n[o];
        if (t[a] !== e[a] && !Qo(r, a)) return !0;
    }
    return !1;
}
function Gc({ vnode: e, parent: t }, r) {
    for (; t; ) {
        const n = t.subTree;
        if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
            ((e = t.vnode).el = r), (t = t.parent);
        else break;
    }
}
const I2 = 'components',
    Yc = 'directives';
function Fe(e, t) {
    return k2(I2, e, !0, t) || e;
}
const hi = Symbol.for('v-ndc');
function Yt(e) {
    return xe(e) ? k2(I2, e, !1) || e : e || hi;
}
function Jc(e) {
    return k2(Yc, e);
}
function k2(e, t, r = !0, n = !1) {
    const o = Ue || Je;
    if (o) {
        const a = o.type;
        if (e === I2) {
            const l = l2(a, !1);
            if (l && (l === t || l === Ct(t) || l === Xn(Ct(t)))) return a;
        }
        const s = j0(o[e] || a[e], t) || j0(o.appContext[e], t);
        return !s && n ? a : s;
    }
}
function j0(e, t) {
    return e && (e[t] || e[Ct(t)] || e[Xn(Ct(t))]);
}
const mi = (e) => e.__isSuspense;
function Zc(e, t) {
    t && t.pendingBranch ? (se(e) ? t.effects.push(...e) : t.effects.push(e)) : $c(e);
}
const Qc = Symbol.for('v-scx'),
    Xc = () => le(Qc);
function gi(e, t) {
    return R2(e, null, t);
}
const fo = {};
function ce(e, t, r) {
    return R2(e, t, r);
}
function R2(e, t, { immediate: r, deep: n, flush: o, once: a, onTrack: s, onTrigger: l } = Ie) {
    if (t && a) {
        const z = t;
        t = (...O) => {
            z(...O), H();
        };
    }
    const i = Je,
        u = (z) => (n === !0 ? z : Br(z, n === !1 ? 1 : void 0));
    let c,
        p = !1,
        d = !1;
    if (
        (je(e)
            ? ((c = () => e.value), (p = Oo(e)))
            : gr(e)
            ? ((c = () => u(e)), (p = !0))
            : se(e)
            ? ((d = !0),
              (p = e.some((z) => gr(z) || Oo(z))),
              (c = () =>
                  e.map((z) => {
                      if (je(z)) return z.value;
                      if (gr(z)) return u(z);
                      if (pe(z)) return wr(z, i, 2);
                  })))
            : pe(e)
            ? t
                ? (c = () => wr(e, i, 2))
                : (c = () => (m && m(), bt(e, i, 3, [_])))
            : (c = Ze),
        t && n)
    ) {
        const z = c;
        c = () => Br(z());
    }
    let m,
        _ = (z) => {
            m = E.onStop = () => {
                wr(z, i, 4), (m = E.onStop = void 0);
            };
        },
        g;
    if (na)
        if (((_ = Ze), t ? r && bt(t, i, 3, [c(), d ? [] : void 0, _]) : c(), o === 'sync')) {
            const z = Xc();
            g = z.__watcherHandles || (z.__watcherHandles = []);
        } else return Ze;
    let x = d ? new Array(e.length).fill(fo) : fo;
    const y = () => {
        if (!(!E.active || !E.dirty))
            if (t) {
                const z = E.run();
                (n || p || (d ? z.some((O, T) => br(O, x[T])) : br(z, x))) &&
                    (m && m(), bt(t, i, 3, [z, x === fo ? void 0 : d && x[0] === fo ? [] : x, _]), (x = z));
            } else E.run();
    };
    y.allowRecurse = !!t;
    let C;
    o === 'sync'
        ? (C = y)
        : o === 'post'
        ? (C = () => Qe(y, i && i.suspense))
        : ((y.pre = !0), i && (y.id = i.uid), (C = () => P2(y)));
    const E = new A2(c, Ze, C),
        S = S2(),
        H = () => {
            E.stop(), S && M2(S.effects, E);
        };
    return (
        t ? (r ? y() : (x = E.run())) : o === 'post' ? Qe(E.run.bind(E), i && i.suspense) : E.run(), g && g.push(H), H
    );
}
function e4(e, t, r) {
    const n = this.proxy,
        o = xe(e) ? (e.includes('.') ? wi(n, e) : () => n[e]) : e.bind(n, n);
    let a;
    pe(t) ? (a = t) : ((a = t.handler), (r = t));
    const s = ro(this),
        l = R2(o, a.bind(n), r);
    return s(), l;
}
function wi(e, t) {
    const r = t.split('.');
    return () => {
        let n = e;
        for (let o = 0; o < r.length && n; o++) n = n[r[o]];
        return n;
    };
}
function Br(e, t, r = 0, n) {
    if (!Ee(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (r >= t) return e;
        r++;
    }
    if (((n = n || new Set()), n.has(e))) return e;
    if ((n.add(e), je(e))) Br(e.value, t, r, n);
    else if (se(e)) for (let o = 0; o < e.length; o++) Br(e[o], t, r, n);
    else if (Uo(e) || Qr(e))
        e.forEach((o) => {
            Br(o, t, r, n);
        });
    else if (Fl(e)) for (const o in e) Br(e[o], t, r, n);
    return e;
}
function kt(e, t) {
    if (Ue === null) return e;
    const r = oa(Ue) || Ue.proxy,
        n = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [a, s, l, i = Ie] = t[o];
        a &&
            (pe(a) && (a = { mounted: a, updated: a }),
            a.deep && Br(s),
            n.push({ dir: a, instance: r, value: s, oldValue: void 0, arg: l, modifiers: i }));
    }
    return e;
}
function Sr(e, t, r, n) {
    const o = e.dirs,
        a = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const l = o[s];
        a && (l.oldValue = a[s].value);
        let i = l.dir[n];
        i && (Rr(), bt(i, r, 8, [e.el, l, e, t]), Fr());
    }
}
const ir = Symbol('_leaveCb'),
    _o = Symbol('_enterCb');
function yi() {
    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
    return (
        Ge(() => {
            e.isMounted = !0;
        }),
        ot(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const wt = [Function, Array],
    bi = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: wt,
        onEnter: wt,
        onAfterEnter: wt,
        onEnterCancelled: wt,
        onBeforeLeave: wt,
        onLeave: wt,
        onAfterLeave: wt,
        onLeaveCancelled: wt,
        onBeforeAppear: wt,
        onAppear: wt,
        onAfterAppear: wt,
        onAppearCancelled: wt,
    },
    t4 = {
        name: 'BaseTransition',
        props: bi,
        setup(e, { slots: t }) {
            const r = Ne(),
                n = yi();
            return () => {
                const o = t.default && F2(t.default(), !0);
                if (!o || !o.length) return;
                let a = o[0];
                if (o.length > 1) {
                    for (const d of o)
                        if (d.type !== lt) {
                            a = d;
                            break;
                        }
                }
                const s = Ce(e),
                    { mode: l } = s;
                if (n.isLeaving) return Ea(a);
                const i = q0(a);
                if (!i) return Ea(a);
                const u = qn(i, s, n, r);
                an(i, u);
                const c = r.subTree,
                    p = c && q0(c);
                if (p && p.type !== lt && !dr(i, p)) {
                    const d = qn(p, s, n, r);
                    if ((an(p, d), l === 'out-in'))
                        return (
                            (n.isLeaving = !0),
                            (d.afterLeave = () => {
                                (n.isLeaving = !1), r.update.active !== !1 && ((r.effect.dirty = !0), r.update());
                            }),
                            Ea(a)
                        );
                    l === 'in-out' &&
                        i.type !== lt &&
                        (d.delayLeave = (m, _, g) => {
                            const x = xi(n, p);
                            (x[String(p.key)] = p),
                                (m[ir] = () => {
                                    _(), (m[ir] = void 0), delete u.delayedLeave;
                                }),
                                (u.delayedLeave = g);
                        });
                }
                return a;
            };
        },
    },
    r4 = t4;
function xi(e, t) {
    const { leavingVNodes: r } = e;
    let n = r.get(t.type);
    return n || ((n = Object.create(null)), r.set(t.type, n)), n;
}
function qn(e, t, r, n) {
    const {
            appear: o,
            mode: a,
            persisted: s = !1,
            onBeforeEnter: l,
            onEnter: i,
            onAfterEnter: u,
            onEnterCancelled: c,
            onBeforeLeave: p,
            onLeave: d,
            onAfterLeave: m,
            onLeaveCancelled: _,
            onBeforeAppear: g,
            onAppear: x,
            onAfterAppear: y,
            onAppearCancelled: C,
        } = t,
        E = String(e.key),
        S = xi(r, e),
        H = (T, V) => {
            T && bt(T, n, 9, V);
        },
        z = (T, V) => {
            const F = V[1];
            H(T, V), se(T) ? T.every((j) => j.length <= 1) && F() : T.length <= 1 && F();
        },
        O = {
            mode: a,
            persisted: s,
            beforeEnter(T) {
                let V = l;
                if (!r.isMounted)
                    if (o) V = g || l;
                    else return;
                T[ir] && T[ir](!0);
                const F = S[E];
                F && dr(e, F) && F.el[ir] && F.el[ir](), H(V, [T]);
            },
            enter(T) {
                let V = i,
                    F = u,
                    j = c;
                if (!r.isMounted)
                    if (o) (V = x || i), (F = y || u), (j = C || c);
                    else return;
                let R = !1;
                const Q = (T[_o] = (q) => {
                    R || ((R = !0), q ? H(j, [T]) : H(F, [T]), O.delayedLeave && O.delayedLeave(), (T[_o] = void 0));
                });
                V ? z(V, [T, Q]) : Q();
            },
            leave(T, V) {
                const F = String(e.key);
                if ((T[_o] && T[_o](!0), r.isUnmounting)) return V();
                H(p, [T]);
                let j = !1;
                const R = (T[ir] = (Q) => {
                    j || ((j = !0), V(), Q ? H(_, [T]) : H(m, [T]), (T[ir] = void 0), S[F] === e && delete S[F]);
                });
                (S[F] = e), d ? z(d, [T, R]) : R();
            },
            clone(T) {
                return qn(T, t, r, n);
            },
        };
    return O;
}
function Ea(e) {
    if (ea(e)) return (e = Nt(e)), (e.children = null), e;
}
function q0(e) {
    return ea(e) ? (e.children ? e.children[0] : void 0) : e;
}
function an(e, t) {
    e.shapeFlag & 6 && e.component
        ? an(e.component.subTree, t)
        : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t);
}
function F2(e, t = !1, r) {
    let n = [],
        o = 0;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        const l = r == null ? s.key : String(r) + String(s.key != null ? s.key : a);
        s.type === Oe
            ? (s.patchFlag & 128 && o++, (n = n.concat(F2(s.children, t, l))))
            : (t || s.type !== lt) && n.push(l != null ? Nt(s, { key: l }) : s);
    }
    if (o > 1) for (let a = 0; a < n.length; a++) n[a].patchFlag = -2;
    return n;
}
/*! #__NO_SIDE_EFFECTS__ */ function h(e, t) {
    return pe(e) ? (() => We({ name: e.name }, t, { setup: e }))() : e;
}
const tn = (e) => !!e.type.__asyncLoader,
    ea = (e) => e.type.__isKeepAlive,
    n4 = {
        name: 'KeepAlive',
        __isKeepAlive: !0,
        props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
        setup(e, { slots: t }) {
            const r = Ne(),
                n = r.ctx;
            if (!n.renderer)
                return () => {
                    const C = t.default && t.default();
                    return C && C.length === 1 ? C[0] : C;
                };
            const o = new Map(),
                a = new Set();
            let s = null;
            const l = r.suspense,
                {
                    renderer: {
                        p: i,
                        m: u,
                        um: c,
                        o: { createElement: p },
                    },
                } = n,
                d = p('div');
            (n.activate = (C, E, S, H, z) => {
                const O = C.component;
                u(C, E, S, 0, l),
                    i(O.vnode, C, E, S, O, l, H, C.slotScopeIds, z),
                    Qe(() => {
                        (O.isDeactivated = !1), O.a && Xr(O.a);
                        const T = C.props && C.props.onVnodeMounted;
                        T && yt(T, O.parent, C);
                    }, l);
            }),
                (n.deactivate = (C) => {
                    const E = C.component;
                    u(C, d, null, 1, l),
                        Qe(() => {
                            E.da && Xr(E.da);
                            const S = C.props && C.props.onVnodeUnmounted;
                            S && yt(S, E.parent, C), (E.isDeactivated = !0);
                        }, l);
                });
            function m(C) {
                Sa(C), c(C, r, l, !0);
            }
            function _(C) {
                o.forEach((E, S) => {
                    const H = l2(E.type);
                    H && (!C || !C(H)) && g(S);
                });
            }
            function g(C) {
                const E = o.get(C);
                !s || !dr(E, s) ? m(E) : s && Sa(s), o.delete(C), a.delete(C);
            }
            ce(
                () => [e.include, e.exclude],
                ([C, E]) => {
                    C && _((S) => Tn(C, S)), E && _((S) => !Tn(E, S));
                },
                { flush: 'post', deep: !0 }
            );
            let x = null;
            const y = () => {
                x != null && o.set(x, Aa(r.subTree));
            };
            return (
                Ge(y),
                eo(y),
                ot(() => {
                    o.forEach((C) => {
                        const { subTree: E, suspense: S } = r,
                            H = Aa(E);
                        if (C.type === H.type && C.key === H.key) {
                            Sa(H);
                            const z = H.component.da;
                            z && Qe(z, S);
                            return;
                        }
                        m(C);
                    });
                }),
                () => {
                    if (((x = null), !t.default)) return null;
                    const C = t.default(),
                        E = C[0];
                    if (C.length > 1) return (s = null), C;
                    if (!mt(E) || (!(E.shapeFlag & 4) && !(E.shapeFlag & 128))) return (s = null), E;
                    let S = Aa(E);
                    const H = S.type,
                        z = l2(tn(S) ? S.type.__asyncResolved || {} : H),
                        { include: O, exclude: T, max: V } = e;
                    if ((O && (!z || !Tn(O, z))) || (T && z && Tn(T, z))) return (s = S), E;
                    const F = S.key == null ? H : S.key,
                        j = o.get(F);
                    return (
                        S.el && ((S = Nt(S)), E.shapeFlag & 128 && (E.ssContent = S)),
                        (x = F),
                        j
                            ? ((S.el = j.el),
                              (S.component = j.component),
                              S.transition && an(S, S.transition),
                              (S.shapeFlag |= 512),
                              a.delete(F),
                              a.add(F))
                            : (a.add(F), V && a.size > parseInt(V, 10) && g(a.values().next().value)),
                        (S.shapeFlag |= 256),
                        (s = S),
                        mi(E.type) ? E : S
                    );
                }
            );
        },
    },
    o4 = n4;
function Tn(e, t) {
    return se(e) ? e.some((r) => Tn(r, t)) : xe(e) ? e.split(',').includes(t) : Z1(e) ? e.test(t) : !1;
}
function Ci(e, t) {
    Mi(e, 'a', t);
}
function $2(e, t) {
    Mi(e, 'da', t);
}
function Mi(e, t, r = Je) {
    const n =
        e.__wdc ||
        (e.__wdc = () => {
            let o = r;
            for (; o; ) {
                if (o.isDeactivated) return;
                o = o.parent;
            }
            return e();
        });
    if ((ta(t, n, r), r)) {
        let o = r.parent;
        for (; o && o.parent; ) ea(o.parent.vnode) && a4(n, t, r, o), (o = o.parent);
    }
}
function a4(e, t, r, n) {
    const o = ta(t, e, n, !0);
    to(() => {
        M2(n[t], o);
    }, r);
}
function Sa(e) {
    (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Aa(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
}
function ta(e, t, r = Je, n = !1) {
    if (r) {
        const o = r[e] || (r[e] = []),
            a =
                t.__weh ||
                (t.__weh = (...s) => {
                    if (r.isUnmounted) return;
                    Rr();
                    const l = ro(r),
                        i = bt(t, r, e, s);
                    return l(), Fr(), i;
                });
        return n ? o.unshift(a) : o.push(a), a;
    }
}
const Qt =
        (e) =>
        (t, r = Je) =>
            (!na || e === 'sp') && ta(e, (...n) => t(...n), r),
    Ei = Qt('bm'),
    Ge = Qt('m'),
    s4 = Qt('bu'),
    eo = Qt('u'),
    ot = Qt('bum'),
    to = Qt('um'),
    l4 = Qt('sp'),
    i4 = Qt('rtg'),
    u4 = Qt('rtc');
function c4(e, t = Je) {
    ta('ec', e, t);
}
function Eo(e, t, r, n) {
    let o;
    const a = r && r[n];
    if (se(e) || xe(e)) {
        o = new Array(e.length);
        for (let s = 0, l = e.length; s < l; s++) o[s] = t(e[s], s, void 0, a && a[s]);
    } else if (typeof e == 'number') {
        o = new Array(e);
        for (let s = 0; s < e; s++) o[s] = t(s + 1, s, void 0, a && a[s]);
    } else if (Ee(e))
        if (e[Symbol.iterator]) o = Array.from(e, (s, l) => t(s, l, void 0, a && a[l]));
        else {
            const s = Object.keys(e);
            o = new Array(s.length);
            for (let l = 0, i = s.length; l < i; l++) {
                const u = s[l];
                o[l] = t(e[u], u, l, a && a[l]);
            }
        }
    else o = [];
    return r && (r[n] = o), o;
}
function p4(e, t) {
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (se(n)) for (let o = 0; o < n.length; o++) e[n[o].name] = n[o].fn;
        else
            n &&
                (e[n.name] = n.key
                    ? (...o) => {
                          const a = n.fn(...o);
                          return a && (a.key = n.key), a;
                      }
                    : n.fn);
    }
    return e;
}
function ye(e, t, r = {}, n, o) {
    if (Ue.isCE || (Ue.parent && tn(Ue.parent) && Ue.parent.isCE))
        return t !== 'default' && (r.name = t), G('slot', r, n && n());
    let a = e[t];
    a && a._c && (a._d = !1), v();
    const s = a && Si(a(r)),
        l = me(Oe, { key: r.key || (s && s.key) || `_${t}` }, s || (n ? n() : []), s && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), a && a._c && (a._d = !0), l;
}
function Si(e) {
    return e.some((t) => (mt(t) ? !(t.type === lt || (t.type === Oe && !Si(t.children))) : !0)) ? e : null;
}
function f4(e, t) {
    const r = {};
    for (const n in e) r[t && /[A-Z]/.test(n) ? `on:${n}` : Co(n)] = e[n];
    return r;
}
const e2 = (e) => (e ? (Ni(e) ? oa(e) || e.proxy : e2(e.parent)) : null),
    Ln = We(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => e2(e.parent),
        $root: (e) => e2(e.root),
        $emit: (e) => e.emit,
        $options: (e) => N2(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                (e.effect.dirty = !0), P2(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)),
        $watch: (e) => e4.bind(e),
    }),
    za = (e, t) => e !== Ie && !e.__isScriptSetup && be(e, t),
    d4 = {
        get({ _: e }, t) {
            const { ctx: r, setupState: n, data: o, props: a, accessCache: s, type: l, appContext: i } = e;
            let u;
            if (t[0] !== '$') {
                const m = s[t];
                if (m !== void 0)
                    switch (m) {
                        case 1:
                            return n[t];
                        case 2:
                            return o[t];
                        case 4:
                            return r[t];
                        case 3:
                            return a[t];
                    }
                else {
                    if (za(n, t)) return (s[t] = 1), n[t];
                    if (o !== Ie && be(o, t)) return (s[t] = 2), o[t];
                    if ((u = e.propsOptions[0]) && be(u, t)) return (s[t] = 3), a[t];
                    if (r !== Ie && be(r, t)) return (s[t] = 4), r[t];
                    t2 && (s[t] = 0);
                }
            }
            const c = Ln[t];
            let p, d;
            if (c) return t === '$attrs' && pt(e, 'get', t), c(e);
            if ((p = l.__cssModules) && (p = p[t])) return p;
            if (r !== Ie && be(r, t)) return (s[t] = 4), r[t];
            if (((d = i.config.globalProperties), be(d, t))) return d[t];
        },
        set({ _: e }, t, r) {
            const { data: n, setupState: o, ctx: a } = e;
            return za(o, t)
                ? ((o[t] = r), !0)
                : n !== Ie && be(n, t)
                ? ((n[t] = r), !0)
                : be(e.props, t) || (t[0] === '$' && t.slice(1) in e)
                ? !1
                : ((a[t] = r), !0);
        },
        has({ _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a } }, s) {
            let l;
            return (
                !!r[s] ||
                (e !== Ie && be(e, s)) ||
                za(t, s) ||
                ((l = a[0]) && be(l, s)) ||
                be(n, s) ||
                be(Ln, s) ||
                be(o.config.globalProperties, s)
            );
        },
        defineProperty(e, t, r) {
            return (
                r.get != null ? (e._.accessCache[t] = 0) : be(r, 'value') && this.set(e, t, r.value, null),
                Reflect.defineProperty(e, t, r)
            );
        },
    };
function Ai() {
    return zi().slots;
}
function PE() {
    return zi().attrs;
}
function zi() {
    const e = Ne();
    return e.setupContext || (e.setupContext = ji(e));
}
function K0(e) {
    return se(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
let t2 = !0;
function _4(e) {
    const t = N2(e),
        r = e.proxy,
        n = e.ctx;
    (t2 = !1), t.beforeCreate && U0(t.beforeCreate, e, 'bc');
    const {
        data: o,
        computed: a,
        methods: s,
        watch: l,
        provide: i,
        inject: u,
        created: c,
        beforeMount: p,
        mounted: d,
        beforeUpdate: m,
        updated: _,
        activated: g,
        deactivated: x,
        beforeDestroy: y,
        beforeUnmount: C,
        destroyed: E,
        unmounted: S,
        render: H,
        renderTracked: z,
        renderTriggered: O,
        errorCaptured: T,
        serverPrefetch: V,
        expose: F,
        inheritAttrs: j,
        components: R,
        directives: Q,
        filters: q,
    } = t;
    if ((u && v4(u, n, null), s))
        for (const B in s) {
            const J = s[B];
            pe(J) && (n[B] = J.bind(r));
        }
    if (o) {
        const B = o.call(r, r);
        Ee(B) && (e.data = Lt(B));
    }
    if (((t2 = !0), a))
        for (const B in a) {
            const J = a[B],
                he = pe(J) ? J.bind(r, r) : pe(J.get) ? J.get.bind(r, r) : Ze,
                oe = !pe(J) && pe(J.set) ? J.set.bind(r) : Ze,
                _e = P({ get: he, set: oe });
            Object.defineProperty(n, B, {
                enumerable: !0,
                configurable: !0,
                get: () => _e.value,
                set: (ve) => (_e.value = ve),
            });
        }
    if (l) for (const B in l) Ti(l[B], n, r, B);
    if (i) {
        const B = pe(i) ? i.call(r) : i;
        Reflect.ownKeys(B).forEach((J) => {
            $e(J, B[J]);
        });
    }
    c && U0(c, e, 'c');
    function N(B, J) {
        se(J) ? J.forEach((he) => B(he.bind(r))) : J && B(J.bind(r));
    }
    if (
        (N(Ei, p),
        N(Ge, d),
        N(s4, m),
        N(eo, _),
        N(Ci, g),
        N($2, x),
        N(c4, T),
        N(u4, z),
        N(i4, O),
        N(ot, C),
        N(to, S),
        N(l4, V),
        se(F))
    )
        if (F.length) {
            const B = e.exposed || (e.exposed = {});
            F.forEach((J) => {
                Object.defineProperty(B, J, { get: () => r[J], set: (he) => (r[J] = he) });
            });
        } else e.exposed || (e.exposed = {});
    H && e.render === Ze && (e.render = H),
        j != null && (e.inheritAttrs = j),
        R && (e.components = R),
        Q && (e.directives = Q);
}
function v4(e, t, r = Ze) {
    se(e) && (e = r2(e));
    for (const n in e) {
        const o = e[n];
        let a;
        Ee(o) ? ('default' in o ? (a = le(o.from || n, o.default, !0)) : (a = le(o.from || n))) : (a = le(o)),
            je(a)
                ? Object.defineProperty(t, n, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => a.value,
                      set: (s) => (a.value = s),
                  })
                : (t[n] = a);
    }
}
function U0(e, t, r) {
    bt(se(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function Ti(e, t, r, n) {
    const o = n.includes('.') ? wi(r, n) : () => r[n];
    if (xe(e)) {
        const a = t[e];
        pe(a) && ce(o, a);
    } else if (pe(e)) ce(o, e.bind(r));
    else if (Ee(e))
        if (se(e)) e.forEach((a) => Ti(a, t, r, n));
        else {
            const a = pe(e.handler) ? e.handler.bind(r) : t[e.handler];
            pe(a) && ce(o, a, e);
        }
}
function N2(e) {
    const t = e.type,
        { mixins: r, extends: n } = t,
        {
            mixins: o,
            optionsCache: a,
            config: { optionMergeStrategies: s },
        } = e.appContext,
        l = a.get(t);
    let i;
    return (
        l
            ? (i = l)
            : !o.length && !r && !n
            ? (i = t)
            : ((i = {}), o.length && o.forEach((u) => Io(i, u, s, !0)), Io(i, t, s)),
        Ee(t) && a.set(t, i),
        i
    );
}
function Io(e, t, r, n = !1) {
    const { mixins: o, extends: a } = t;
    a && Io(e, a, r, !0), o && o.forEach((s) => Io(e, s, r, !0));
    for (const s in t)
        if (!(n && s === 'expose')) {
            const l = h4[s] || (r && r[s]);
            e[s] = l ? l(e[s], t[s]) : t[s];
        }
    return e;
}
const h4 = {
    data: W0,
    props: G0,
    emits: G0,
    methods: Hn,
    computed: Hn,
    beforeCreate: at,
    created: at,
    beforeMount: at,
    mounted: at,
    beforeUpdate: at,
    updated: at,
    beforeDestroy: at,
    beforeUnmount: at,
    destroyed: at,
    unmounted: at,
    activated: at,
    deactivated: at,
    errorCaptured: at,
    serverPrefetch: at,
    components: Hn,
    directives: Hn,
    watch: g4,
    provide: W0,
    inject: m4,
};
function W0(e, t) {
    return t
        ? e
            ? function () {
                  return We(pe(e) ? e.call(this, this) : e, pe(t) ? t.call(this, this) : t);
              }
            : t
        : e;
}
function m4(e, t) {
    return Hn(r2(e), r2(t));
}
function r2(e) {
    if (se(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
        return t;
    }
    return e;
}
function at(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Hn(e, t) {
    return e ? We(Object.create(null), e, t) : t;
}
function G0(e, t) {
    return e
        ? se(e) && se(t)
            ? [...new Set([...e, ...t])]
            : We(Object.create(null), K0(e), K0(t != null ? t : {}))
        : t;
}
function g4(e, t) {
    if (!e) return t;
    if (!t) return e;
    const r = We(Object.create(null), e);
    for (const n in t) r[n] = at(e[n], t[n]);
    return r;
}
function Hi() {
    return {
        app: null,
        config: {
            isNativeTag: Y1,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let w4 = 0;
function y4(e, t) {
    return function (n, o = null) {
        pe(n) || (n = We({}, n)), o != null && !Ee(o) && (o = null);
        const a = Hi(),
            s = new WeakSet();
        let l = !1;
        const i = (a.app = {
            _uid: w4++,
            _component: n,
            _props: o,
            _container: null,
            _context: a,
            _instance: null,
            version: q4,
            get config() {
                return a.config;
            },
            set config(u) {},
            use(u, ...c) {
                return (
                    s.has(u) || (u && pe(u.install) ? (s.add(u), u.install(i, ...c)) : pe(u) && (s.add(u), u(i, ...c))),
                    i
                );
            },
            mixin(u) {
                return a.mixins.includes(u) || a.mixins.push(u), i;
            },
            component(u, c) {
                return c ? ((a.components[u] = c), i) : a.components[u];
            },
            directive(u, c) {
                return c ? ((a.directives[u] = c), i) : a.directives[u];
            },
            mount(u, c, p) {
                if (!l) {
                    const d = G(n, o);
                    return (
                        (d.appContext = a),
                        p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
                        c && t ? t(d, u) : e(d, u, p),
                        (l = !0),
                        (i._container = u),
                        (u.__vue_app__ = i),
                        oa(d.component) || d.component.proxy
                    );
                }
            },
            unmount() {
                l && (e(null, i._container), delete i._container.__vue_app__);
            },
            provide(u, c) {
                return (a.provides[u] = c), i;
            },
            runWithContext(u) {
                const c = rn;
                rn = i;
                try {
                    return u();
                } finally {
                    rn = c;
                }
            },
        });
        return i;
    };
}
let rn = null;
function $e(e, t) {
    if (Je) {
        let r = Je.provides;
        const n = Je.parent && Je.parent.provides;
        n === r && (r = Je.provides = Object.create(n)), (r[e] = t);
    }
}
function le(e, t, r = !1) {
    const n = Je || Ue;
    if (n || rn) {
        const o = n
            ? n.parent == null
                ? n.vnode.appContext && n.vnode.appContext.provides
                : n.parent.provides
            : rn._context.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return r && pe(t) ? t.call(n && n.proxy) : t;
    }
}
function b4() {
    return !!(Je || Ue || rn);
}
function x4(e, t, r, n = !1) {
    const o = {},
        a = {};
    Lo(a, ra, 1), (e.propsDefaults = Object.create(null)), Bi(e, t, o, a);
    for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
    r ? (e.props = n ? o : oi(o)) : e.type.props ? (e.props = o) : (e.props = a), (e.attrs = a);
}
function C4(e, t, r, n) {
    const {
            props: o,
            attrs: a,
            vnode: { patchFlag: s },
        } = e,
        l = Ce(o),
        [i] = e.propsOptions;
    let u = !1;
    if ((n || s > 0) && !(s & 16)) {
        if (s & 8) {
            const c = e.vnode.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                let d = c[p];
                if (Qo(e.emitsOptions, d)) continue;
                const m = t[d];
                if (i)
                    if (be(a, d)) m !== a[d] && ((a[d] = m), (u = !0));
                    else {
                        const _ = Ct(d);
                        o[_] = n2(i, l, _, m, e, !1);
                    }
                else m !== a[d] && ((a[d] = m), (u = !0));
            }
        }
    } else {
        Bi(e, t, o, a) && (u = !0);
        let c;
        for (const p in l)
            (!t || (!be(t, p) && ((c = kr(p)) === p || !be(t, c)))) &&
                (i ? r && (r[p] !== void 0 || r[c] !== void 0) && (o[p] = n2(i, l, p, void 0, e, !0)) : delete o[p]);
        if (a !== l) for (const p in a) (!t || (!be(t, p) && !0)) && (delete a[p], (u = !0));
    }
    u && Gt(e, 'set', '$attrs');
}
function Bi(e, t, r, n) {
    const [o, a] = e.propsOptions;
    let s = !1,
        l;
    if (t)
        for (let i in t) {
            if (Bn(i)) continue;
            const u = t[i];
            let c;
            o && be(o, (c = Ct(i)))
                ? !a || !a.includes(c)
                    ? (r[c] = u)
                    : ((l || (l = {}))[c] = u)
                : Qo(e.emitsOptions, i) || ((!(i in n) || u !== n[i]) && ((n[i] = u), (s = !0)));
        }
    if (a) {
        const i = Ce(r),
            u = l || Ie;
        for (let c = 0; c < a.length; c++) {
            const p = a[c];
            r[p] = n2(o, i, p, u[p], e, !be(u, p));
        }
    }
    return s;
}
function n2(e, t, r, n, o, a) {
    const s = e[r];
    if (s != null) {
        const l = be(s, 'default');
        if (l && n === void 0) {
            const i = s.default;
            if (s.type !== Function && !s.skipFactory && pe(i)) {
                const { propsDefaults: u } = o;
                if (r in u) n = u[r];
                else {
                    const c = ro(o);
                    (n = u[r] = i.call(null, t)), c();
                }
            } else n = i;
        }
        s[0] && (a && !l ? (n = !1) : s[1] && (n === '' || n === kr(r)) && (n = !0));
    }
    return n;
}
function Li(e, t, r = !1) {
    const n = t.propsCache,
        o = n.get(e);
    if (o) return o;
    const a = e.props,
        s = {},
        l = [];
    let i = !1;
    if (!pe(e)) {
        const c = (p) => {
            i = !0;
            const [d, m] = Li(p, t, !0);
            We(s, d), m && l.push(...m);
        };
        !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!a && !i) return Ee(e) && n.set(e, Zr), Zr;
    if (se(a))
        for (let c = 0; c < a.length; c++) {
            const p = Ct(a[c]);
            Y0(p) && (s[p] = Ie);
        }
    else if (a)
        for (const c in a) {
            const p = Ct(c);
            if (Y0(p)) {
                const d = a[c],
                    m = (s[p] = se(d) || pe(d) ? { type: d } : We({}, d));
                if (m) {
                    const _ = Q0(Boolean, m.type),
                        g = Q0(String, m.type);
                    (m[0] = _ > -1), (m[1] = g < 0 || _ < g), (_ > -1 || be(m, 'default')) && l.push(p);
                }
            }
        }
    const u = [s, l];
    return Ee(e) && n.set(e, u), u;
}
function Y0(e) {
    return e[0] !== '$' && !Bn(e);
}
function J0(e) {
    return e === null
        ? 'null'
        : typeof e == 'function'
        ? e.name || ''
        : (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function Z0(e, t) {
    return J0(e) === J0(t);
}
function Q0(e, t) {
    return se(t) ? t.findIndex((r) => Z0(r, e)) : pe(t) && Z0(t, e) ? 0 : -1;
}
const Vi = (e) => e[0] === '_' || e === '$stable',
    D2 = (e) => (se(e) ? e.map(Pt) : [Pt(e)]),
    M4 = (e, t, r) => {
        if (t._n) return t;
        const n = re((...o) => D2(t(...o)), r);
        return (n._c = !1), n;
    },
    Oi = (e, t, r) => {
        const n = e._ctx;
        for (const o in e) {
            if (Vi(o)) continue;
            const a = e[o];
            if (pe(a)) t[o] = M4(o, a, n);
            else if (a != null) {
                const s = D2(a);
                t[o] = () => s;
            }
        }
    },
    Pi = (e, t) => {
        const r = D2(t);
        e.slots.default = () => r;
    },
    E4 = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? ((e.slots = Ce(t)), Lo(t, '_', r)) : Oi(t, (e.slots = {}));
        } else (e.slots = {}), t && Pi(e, t);
        Lo(e.slots, ra, 1);
    },
    S4 = (e, t, r) => {
        const { vnode: n, slots: o } = e;
        let a = !0,
            s = Ie;
        if (n.shapeFlag & 32) {
            const l = t._;
            l ? (r && l === 1 ? (a = !1) : (We(o, t), !r && l === 1 && delete o._)) : ((a = !t.$stable), Oi(t, o)),
                (s = t);
        } else t && (Pi(e, t), (s = { default: 1 }));
        if (a) for (const l in o) !Vi(l) && s[l] == null && delete o[l];
    };
function o2(e, t, r, n, o = !1) {
    if (se(e)) {
        e.forEach((d, m) => o2(d, t && (se(t) ? t[m] : t), r, n, o));
        return;
    }
    if (tn(n) && !o) return;
    const a = n.shapeFlag & 4 ? oa(n.component) || n.component.proxy : n.el,
        s = o ? null : a,
        { i: l, r: i } = e,
        u = t && t.r,
        c = l.refs === Ie ? (l.refs = {}) : l.refs,
        p = l.setupState;
    if (
        (u != null && u !== i && (xe(u) ? ((c[u] = null), be(p, u) && (p[u] = null)) : je(u) && (u.value = null)),
        pe(i))
    )
        wr(i, l, 12, [s, c]);
    else {
        const d = xe(i),
            m = je(i);
        if (d || m) {
            const _ = () => {
                if (e.f) {
                    const g = d ? (be(p, i) ? p[i] : c[i]) : i.value;
                    o
                        ? se(g) && M2(g, a)
                        : se(g)
                        ? g.includes(a) || g.push(a)
                        : d
                        ? ((c[i] = [a]), be(p, i) && (p[i] = c[i]))
                        : ((i.value = [a]), e.k && (c[e.k] = i.value));
                } else d ? ((c[i] = s), be(p, i) && (p[i] = s)) : m && ((i.value = s), e.k && (c[e.k] = s));
            };
            s ? ((_.id = -1), Qe(_, r)) : _();
        }
    }
}
const Qe = Zc;
function A4(e) {
    return z4(e);
}
function z4(e, t) {
    const r = $l();
    r.__VUE__ = !0;
    const {
            insert: n,
            remove: o,
            patchProp: a,
            createElement: s,
            createText: l,
            createComment: i,
            setText: u,
            setElementText: c,
            parentNode: p,
            nextSibling: d,
            setScopeId: m = Ze,
            insertStaticContent: _,
        } = e,
        g = (b, M, L, $ = null, I = null, Y = null, ee = void 0, U = null, Z = !!M.dynamicChildren) => {
            if (b === M) return;
            b && !dr(b, M) && (($ = k(b)), ve(b, I, Y, !0), (b = null)),
                M.patchFlag === -2 && ((Z = !1), (M.dynamicChildren = null));
            const { type: K, ref: ne, shapeFlag: ue } = M;
            switch (K) {
                case wn:
                    x(b, M, L, $);
                    break;
                case lt:
                    y(b, M, L, $);
                    break;
                case Ha:
                    b == null && C(M, L, $, ee);
                    break;
                case Oe:
                    R(b, M, L, $, I, Y, ee, U, Z);
                    break;
                default:
                    ue & 1
                        ? H(b, M, L, $, I, Y, ee, U, Z)
                        : ue & 6
                        ? Q(b, M, L, $, I, Y, ee, U, Z)
                        : (ue & 64 || ue & 128) && K.process(b, M, L, $, I, Y, ee, U, Z, ae);
            }
            ne != null && I && o2(ne, b && b.ref, Y, M || b, !M);
        },
        x = (b, M, L, $) => {
            if (b == null) n((M.el = l(M.children)), L, $);
            else {
                const I = (M.el = b.el);
                M.children !== b.children && u(I, M.children);
            }
        },
        y = (b, M, L, $) => {
            b == null ? n((M.el = i(M.children || '')), L, $) : (M.el = b.el);
        },
        C = (b, M, L, $) => {
            [b.el, b.anchor] = _(b.children, M, L, $, b.el, b.anchor);
        },
        E = ({ el: b, anchor: M }, L, $) => {
            let I;
            for (; b && b !== M; ) (I = d(b)), n(b, L, $), (b = I);
            n(M, L, $);
        },
        S = ({ el: b, anchor: M }) => {
            let L;
            for (; b && b !== M; ) (L = d(b)), o(b), (b = L);
            o(M);
        },
        H = (b, M, L, $, I, Y, ee, U, Z) => {
            M.type === 'svg' ? (ee = 'svg') : M.type === 'math' && (ee = 'mathml'),
                b == null ? z(M, L, $, I, Y, ee, U, Z) : V(b, M, I, Y, ee, U, Z);
        },
        z = (b, M, L, $, I, Y, ee, U) => {
            let Z, K;
            const { props: ne, shapeFlag: ue, transition: ie, dirs: fe } = b;
            if (
                ((Z = b.el = s(b.type, Y, ne && ne.is, ne)),
                ue & 8 ? c(Z, b.children) : ue & 16 && T(b.children, Z, null, $, I, Ta(b, Y), ee, U),
                fe && Sr(b, null, $, 'created'),
                O(Z, b, b.scopeId, ee, $),
                ne)
            ) {
                for (const Ae in ne) Ae !== 'value' && !Bn(Ae) && a(Z, Ae, null, ne[Ae], Y, b.children, $, I, De);
                'value' in ne && a(Z, 'value', null, ne.value, Y), (K = ne.onVnodeBeforeMount) && yt(K, $, b);
            }
            fe && Sr(b, null, $, 'beforeMount');
            const ge = T4(I, ie);
            ge && ie.beforeEnter(Z),
                n(Z, M, L),
                ((K = ne && ne.onVnodeMounted) || ge || fe) &&
                    Qe(() => {
                        K && yt(K, $, b), ge && ie.enter(Z), fe && Sr(b, null, $, 'mounted');
                    }, I);
        },
        O = (b, M, L, $, I) => {
            if ((L && m(b, L), $)) for (let Y = 0; Y < $.length; Y++) m(b, $[Y]);
            if (I) {
                let Y = I.subTree;
                if (M === Y) {
                    const ee = I.vnode;
                    O(b, ee, ee.scopeId, ee.slotScopeIds, I.parent);
                }
            }
        },
        T = (b, M, L, $, I, Y, ee, U, Z = 0) => {
            for (let K = Z; K < b.length; K++) {
                const ne = (b[K] = U ? ur(b[K]) : Pt(b[K]));
                g(null, ne, M, L, $, I, Y, ee, U);
            }
        },
        V = (b, M, L, $, I, Y, ee) => {
            const U = (M.el = b.el);
            let { patchFlag: Z, dynamicChildren: K, dirs: ne } = M;
            Z |= b.patchFlag & 16;
            const ue = b.props || Ie,
                ie = M.props || Ie;
            let fe;
            if (
                (L && Ar(L, !1),
                (fe = ie.onVnodeBeforeUpdate) && yt(fe, L, M, b),
                ne && Sr(M, b, L, 'beforeUpdate'),
                L && Ar(L, !0),
                K ? F(b.dynamicChildren, K, U, L, $, Ta(M, I), Y) : ee || J(b, M, U, null, L, $, Ta(M, I), Y, !1),
                Z > 0)
            ) {
                if (Z & 16) j(U, M, ue, ie, L, $, I);
                else if (
                    (Z & 2 && ue.class !== ie.class && a(U, 'class', null, ie.class, I),
                    Z & 4 && a(U, 'style', ue.style, ie.style, I),
                    Z & 8)
                ) {
                    const ge = M.dynamicProps;
                    for (let Ae = 0; Ae < ge.length; Ae++) {
                        const Re = ge[Ae],
                            Ye = ue[Re],
                            zt = ie[Re];
                        (zt !== Ye || Re === 'value') && a(U, Re, Ye, zt, I, b.children, L, $, De);
                    }
                }
                Z & 1 && b.children !== M.children && c(U, M.children);
            } else !ee && K == null && j(U, M, ue, ie, L, $, I);
            ((fe = ie.onVnodeUpdated) || ne) &&
                Qe(() => {
                    fe && yt(fe, L, M, b), ne && Sr(M, b, L, 'updated');
                }, $);
        },
        F = (b, M, L, $, I, Y, ee) => {
            for (let U = 0; U < M.length; U++) {
                const Z = b[U],
                    K = M[U],
                    ne = Z.el && (Z.type === Oe || !dr(Z, K) || Z.shapeFlag & 70) ? p(Z.el) : L;
                g(Z, K, ne, null, $, I, Y, ee, !0);
            }
        },
        j = (b, M, L, $, I, Y, ee) => {
            if (L !== $) {
                if (L !== Ie) for (const U in L) !Bn(U) && !(U in $) && a(b, U, L[U], null, ee, M.children, I, Y, De);
                for (const U in $) {
                    if (Bn(U)) continue;
                    const Z = $[U],
                        K = L[U];
                    Z !== K && U !== 'value' && a(b, U, K, Z, ee, M.children, I, Y, De);
                }
                'value' in $ && a(b, 'value', L.value, $.value, ee);
            }
        },
        R = (b, M, L, $, I, Y, ee, U, Z) => {
            const K = (M.el = b ? b.el : l('')),
                ne = (M.anchor = b ? b.anchor : l(''));
            let { patchFlag: ue, dynamicChildren: ie, slotScopeIds: fe } = M;
            fe && (U = U ? U.concat(fe) : fe),
                b == null
                    ? (n(K, L, $), n(ne, L, $), T(M.children || [], L, ne, I, Y, ee, U, Z))
                    : ue > 0 && ue & 64 && ie && b.dynamicChildren
                    ? (F(b.dynamicChildren, ie, L, I, Y, ee, U),
                      (M.key != null || (I && M === I.subTree)) && j2(b, M, !0))
                    : J(b, M, L, ne, I, Y, ee, U, Z);
        },
        Q = (b, M, L, $, I, Y, ee, U, Z) => {
            (M.slotScopeIds = U),
                b == null ? (M.shapeFlag & 512 ? I.ctx.activate(M, L, $, ee, Z) : q(M, L, $, I, Y, ee, Z)) : W(b, M, Z);
        },
        q = (b, M, L, $, I, Y, ee) => {
            const U = (b.component = F4(b, $, I));
            if ((ea(b) && (U.ctx.renderer = ae), $4(U), U.asyncDep)) {
                if ((I && I.registerDep(U, N), !b.el)) {
                    const Z = (U.subTree = G(lt));
                    y(null, Z, M, L);
                }
            } else N(U, b, M, L, I, Y, ee);
        },
        W = (b, M, L) => {
            const $ = (M.component = b.component);
            if (Wc(b, M, L))
                if ($.asyncDep && !$.asyncResolved) {
                    B($, M, L);
                    return;
                } else ($.next = M), Fc($.update), ($.effect.dirty = !0), $.update();
            else (M.el = b.el), ($.vnode = M);
        },
        N = (b, M, L, $, I, Y, ee) => {
            const U = () => {
                    if (b.isMounted) {
                        let { next: ne, bu: ue, u: ie, parent: fe, vnode: ge } = b;
                        {
                            const Kr = Ii(b);
                            if (Kr) {
                                ne && ((ne.el = ge.el), B(b, ne, ee)),
                                    Kr.asyncDep.then(() => {
                                        b.isUnmounted || U();
                                    });
                                return;
                            }
                        }
                        let Ae = ne,
                            Re;
                        Ar(b, !1),
                            ne ? ((ne.el = ge.el), B(b, ne, ee)) : (ne = ge),
                            ue && Xr(ue),
                            (Re = ne.props && ne.props.onVnodeBeforeUpdate) && yt(Re, fe, ne, ge),
                            Ar(b, !0);
                        const Ye = Ma(b),
                            zt = b.subTree;
                        (b.subTree = Ye),
                            g(zt, Ye, p(zt.el), k(zt), b, I, Y),
                            (ne.el = Ye.el),
                            Ae === null && Gc(b, Ye.el),
                            ie && Qe(ie, I),
                            (Re = ne.props && ne.props.onVnodeUpdated) && Qe(() => yt(Re, fe, ne, ge), I);
                    } else {
                        let ne;
                        const { el: ue, props: ie } = M,
                            { bm: fe, m: ge, parent: Ae } = b,
                            Re = tn(M);
                        if (
                            (Ar(b, !1),
                            fe && Xr(fe),
                            !Re && (ne = ie && ie.onVnodeBeforeMount) && yt(ne, Ae, M),
                            Ar(b, !0),
                            ue && Pe)
                        ) {
                            const Ye = () => {
                                (b.subTree = Ma(b)), Pe(ue, b.subTree, b, I, null);
                            };
                            Re ? M.type.__asyncLoader().then(() => !b.isUnmounted && Ye()) : Ye();
                        } else {
                            const Ye = (b.subTree = Ma(b));
                            g(null, Ye, L, $, b, I, Y), (M.el = Ye.el);
                        }
                        if ((ge && Qe(ge, I), !Re && (ne = ie && ie.onVnodeMounted))) {
                            const Ye = M;
                            Qe(() => yt(ne, Ae, Ye), I);
                        }
                        (M.shapeFlag & 256 || (Ae && tn(Ae.vnode) && Ae.vnode.shapeFlag & 256)) && b.a && Qe(b.a, I),
                            (b.isMounted = !0),
                            (M = L = $ = null);
                    }
                },
                Z = (b.effect = new A2(U, Ze, () => P2(K), b.scope)),
                K = (b.update = () => {
                    Z.dirty && Z.run();
                });
            (K.id = b.uid), Ar(b, !0), K();
        },
        B = (b, M, L) => {
            M.component = b;
            const $ = b.vnode.props;
            (b.vnode = M), (b.next = null), C4(b, M.props, $, L), S4(b, M.children, L), Rr(), N0(b), Fr();
        },
        J = (b, M, L, $, I, Y, ee, U, Z = !1) => {
            const K = b && b.children,
                ne = b ? b.shapeFlag : 0,
                ue = M.children,
                { patchFlag: ie, shapeFlag: fe } = M;
            if (ie > 0) {
                if (ie & 128) {
                    oe(K, ue, L, $, I, Y, ee, U, Z);
                    return;
                } else if (ie & 256) {
                    he(K, ue, L, $, I, Y, ee, U, Z);
                    return;
                }
            }
            fe & 8
                ? (ne & 16 && De(K, I, Y), ue !== K && c(L, ue))
                : ne & 16
                ? fe & 16
                    ? oe(K, ue, L, $, I, Y, ee, U, Z)
                    : De(K, I, Y, !0)
                : (ne & 8 && c(L, ''), fe & 16 && T(ue, L, $, I, Y, ee, U, Z));
        },
        he = (b, M, L, $, I, Y, ee, U, Z) => {
            (b = b || Zr), (M = M || Zr);
            const K = b.length,
                ne = M.length,
                ue = Math.min(K, ne);
            let ie;
            for (ie = 0; ie < ue; ie++) {
                const fe = (M[ie] = Z ? ur(M[ie]) : Pt(M[ie]));
                g(b[ie], fe, L, null, I, Y, ee, U, Z);
            }
            K > ne ? De(b, I, Y, !0, !1, ue) : T(M, L, $, I, Y, ee, U, Z, ue);
        },
        oe = (b, M, L, $, I, Y, ee, U, Z) => {
            let K = 0;
            const ne = M.length;
            let ue = b.length - 1,
                ie = ne - 1;
            for (; K <= ue && K <= ie; ) {
                const fe = b[K],
                    ge = (M[K] = Z ? ur(M[K]) : Pt(M[K]));
                if (dr(fe, ge)) g(fe, ge, L, null, I, Y, ee, U, Z);
                else break;
                K++;
            }
            for (; K <= ue && K <= ie; ) {
                const fe = b[ue],
                    ge = (M[ie] = Z ? ur(M[ie]) : Pt(M[ie]));
                if (dr(fe, ge)) g(fe, ge, L, null, I, Y, ee, U, Z);
                else break;
                ue--, ie--;
            }
            if (K > ue) {
                if (K <= ie) {
                    const fe = ie + 1,
                        ge = fe < ne ? M[fe].el : $;
                    for (; K <= ie; ) g(null, (M[K] = Z ? ur(M[K]) : Pt(M[K])), L, ge, I, Y, ee, U, Z), K++;
                }
            } else if (K > ie) for (; K <= ue; ) ve(b[K], I, Y, !0), K++;
            else {
                const fe = K,
                    ge = K,
                    Ae = new Map();
                for (K = ge; K <= ie; K++) {
                    const ft = (M[K] = Z ? ur(M[K]) : Pt(M[K]));
                    ft.key != null && Ae.set(ft.key, K);
                }
                let Re,
                    Ye = 0;
                const zt = ie - ge + 1;
                let Kr = !1,
                    T0 = 0;
                const xn = new Array(zt);
                for (K = 0; K < zt; K++) xn[K] = 0;
                for (K = fe; K <= ue; K++) {
                    const ft = b[K];
                    if (Ye >= zt) {
                        ve(ft, I, Y, !0);
                        continue;
                    }
                    let Ot;
                    if (ft.key != null) Ot = Ae.get(ft.key);
                    else
                        for (Re = ge; Re <= ie; Re++)
                            if (xn[Re - ge] === 0 && dr(ft, M[Re])) {
                                Ot = Re;
                                break;
                            }
                    Ot === void 0
                        ? ve(ft, I, Y, !0)
                        : ((xn[Ot - ge] = K + 1),
                          Ot >= T0 ? (T0 = Ot) : (Kr = !0),
                          g(ft, M[Ot], L, null, I, Y, ee, U, Z),
                          Ye++);
                }
                const H0 = Kr ? H4(xn) : Zr;
                for (Re = H0.length - 1, K = zt - 1; K >= 0; K--) {
                    const ft = ge + K,
                        Ot = M[ft],
                        B0 = ft + 1 < ne ? M[ft + 1].el : $;
                    xn[K] === 0
                        ? g(null, Ot, L, B0, I, Y, ee, U, Z)
                        : Kr && (Re < 0 || K !== H0[Re] ? _e(Ot, L, B0, 2) : Re--);
                }
            }
        },
        _e = (b, M, L, $, I = null) => {
            const { el: Y, type: ee, transition: U, children: Z, shapeFlag: K } = b;
            if (K & 6) {
                _e(b.component.subTree, M, L, $);
                return;
            }
            if (K & 128) {
                b.suspense.move(M, L, $);
                return;
            }
            if (K & 64) {
                ee.move(b, M, L, ae);
                return;
            }
            if (ee === Oe) {
                n(Y, M, L);
                for (let ue = 0; ue < Z.length; ue++) _e(Z[ue], M, L, $);
                n(b.anchor, M, L);
                return;
            }
            if (ee === Ha) {
                E(b, M, L);
                return;
            }
            if ($ !== 2 && K & 1 && U)
                if ($ === 0) U.beforeEnter(Y), n(Y, M, L), Qe(() => U.enter(Y), I);
                else {
                    const { leave: ue, delayLeave: ie, afterLeave: fe } = U,
                        ge = () => n(Y, M, L),
                        Ae = () => {
                            ue(Y, () => {
                                ge(), fe && fe();
                            });
                        };
                    ie ? ie(Y, ge, Ae) : Ae();
                }
            else n(Y, M, L);
        },
        ve = (b, M, L, $ = !1, I = !1) => {
            const {
                type: Y,
                props: ee,
                ref: U,
                children: Z,
                dynamicChildren: K,
                shapeFlag: ne,
                patchFlag: ue,
                dirs: ie,
            } = b;
            if ((U != null && o2(U, null, L, b, !0), ne & 256)) {
                M.ctx.deactivate(b);
                return;
            }
            const fe = ne & 1 && ie,
                ge = !tn(b);
            let Ae;
            if ((ge && (Ae = ee && ee.onVnodeBeforeUnmount) && yt(Ae, M, b), ne & 6)) tt(b.component, L, $);
            else {
                if (ne & 128) {
                    b.suspense.unmount(L, $);
                    return;
                }
                fe && Sr(b, null, M, 'beforeUnmount'),
                    ne & 64
                        ? b.type.remove(b, M, L, I, ae, $)
                        : K && (Y !== Oe || (ue > 0 && ue & 64))
                        ? De(K, M, L, !1, !0)
                        : ((Y === Oe && ue & 384) || (!I && ne & 16)) && De(Z, M, L),
                    $ && Ve(b);
            }
            ((ge && (Ae = ee && ee.onVnodeUnmounted)) || fe) &&
                Qe(() => {
                    Ae && yt(Ae, M, b), fe && Sr(b, null, M, 'unmounted');
                }, L);
        },
        Ve = (b) => {
            const { type: M, el: L, anchor: $, transition: I } = b;
            if (M === Oe) {
                Se(L, $);
                return;
            }
            if (M === Ha) {
                S(b);
                return;
            }
            const Y = () => {
                o(L), I && !I.persisted && I.afterLeave && I.afterLeave();
            };
            if (b.shapeFlag & 1 && I && !I.persisted) {
                const { leave: ee, delayLeave: U } = I,
                    Z = () => ee(L, Y);
                U ? U(b.el, Y, Z) : Z();
            } else Y();
        },
        Se = (b, M) => {
            let L;
            for (; b !== M; ) (L = d(b)), o(b), (b = L);
            o(M);
        },
        tt = (b, M, L) => {
            const { bum: $, scope: I, update: Y, subTree: ee, um: U } = b;
            $ && Xr($),
                I.stop(),
                Y && ((Y.active = !1), ve(ee, b, M, L)),
                U && Qe(U, M),
                Qe(() => {
                    b.isUnmounted = !0;
                }, M),
                M &&
                    M.pendingBranch &&
                    !M.isUnmounted &&
                    b.asyncDep &&
                    !b.asyncResolved &&
                    b.suspenseId === M.pendingId &&
                    (M.deps--, M.deps === 0 && M.resolve());
        },
        De = (b, M, L, $ = !1, I = !1, Y = 0) => {
            for (let ee = Y; ee < b.length; ee++) ve(b[ee], M, L, $, I);
        },
        k = (b) =>
            b.shapeFlag & 6 ? k(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : d(b.anchor || b.el);
    let te = !1;
    const X = (b, M, L) => {
            b == null ? M._vnode && ve(M._vnode, null, null, !0) : g(M._vnode || null, b, M, null, null, null, L),
                te || ((te = !0), N0(), di(), (te = !1)),
                (M._vnode = b);
        },
        ae = { p: g, um: ve, m: _e, r: Ve, mt: q, mc: T, pc: J, pbc: F, n: k, o: e };
    let Me, Pe;
    return t && ([Me, Pe] = t(ae)), { render: X, hydrate: Me, createApp: y4(X, Me) };
}
function Ta({ type: e, props: t }, r) {
    return (r === 'svg' && e === 'foreignObject') ||
        (r === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
        ? void 0
        : r;
}
function Ar({ effect: e, update: t }, r) {
    e.allowRecurse = t.allowRecurse = r;
}
function T4(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function j2(e, t, r = !1) {
    const n = e.children,
        o = t.children;
    if (se(n) && se(o))
        for (let a = 0; a < n.length; a++) {
            const s = n[a];
            let l = o[a];
            l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = o[a] = ur(o[a])), (l.el = s.el)), r || j2(s, l)),
                l.type === wn && (l.el = s.el);
        }
}
function H4(e) {
    const t = e.slice(),
        r = [0];
    let n, o, a, s, l;
    const i = e.length;
    for (n = 0; n < i; n++) {
        const u = e[n];
        if (u !== 0) {
            if (((o = r[r.length - 1]), e[o] < u)) {
                (t[n] = o), r.push(n);
                continue;
            }
            for (a = 0, s = r.length - 1; a < s; ) (l = (a + s) >> 1), e[r[l]] < u ? (a = l + 1) : (s = l);
            u < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), (r[a] = n));
        }
    }
    for (a = r.length, s = r[a - 1]; a-- > 0; ) (r[a] = s), (s = t[s]);
    return r;
}
function Ii(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ii(t);
}
const B4 = (e) => e.__isTeleport,
    Vn = (e) => e && (e.disabled || e.disabled === ''),
    X0 = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
    es = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
    a2 = (e, t) => {
        const r = e && e.to;
        return xe(r) ? (t ? t(r) : null) : r;
    },
    L4 = {
        name: 'Teleport',
        __isTeleport: !0,
        process(e, t, r, n, o, a, s, l, i, u) {
            const {
                    mc: c,
                    pc: p,
                    pbc: d,
                    o: { insert: m, querySelector: _, createText: g, createComment: x },
                } = u,
                y = Vn(t.props);
            let { shapeFlag: C, children: E, dynamicChildren: S } = t;
            if (e == null) {
                const H = (t.el = g('')),
                    z = (t.anchor = g(''));
                m(H, r, n), m(z, r, n);
                const O = (t.target = a2(t.props, _)),
                    T = (t.targetAnchor = g(''));
                O && (m(T, O), s === 'svg' || X0(O) ? (s = 'svg') : (s === 'mathml' || es(O)) && (s = 'mathml'));
                const V = (F, j) => {
                    C & 16 && c(E, F, j, o, a, s, l, i);
                };
                y ? V(r, z) : O && V(O, T);
            } else {
                t.el = e.el;
                const H = (t.anchor = e.anchor),
                    z = (t.target = e.target),
                    O = (t.targetAnchor = e.targetAnchor),
                    T = Vn(e.props),
                    V = T ? r : z,
                    F = T ? H : O;
                if (
                    (s === 'svg' || X0(z) ? (s = 'svg') : (s === 'mathml' || es(z)) && (s = 'mathml'),
                    S ? (d(e.dynamicChildren, S, V, o, a, s, l), j2(e, t, !0)) : i || p(e, t, V, F, o, a, s, l, !1),
                    y)
                )
                    T
                        ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
                        : vo(t, r, H, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const j = (t.target = a2(t.props, _));
                    j && vo(t, j, null, u, 0);
                } else T && vo(t, z, O, u, 1);
            }
            ki(t);
        },
        remove(e, t, r, n, { um: o, o: { remove: a } }, s) {
            const { shapeFlag: l, children: i, anchor: u, targetAnchor: c, target: p, props: d } = e;
            if ((p && a(c), s && a(u), l & 16)) {
                const m = s || !Vn(d);
                for (let _ = 0; _ < i.length; _++) {
                    const g = i[_];
                    o(g, t, r, m, !!g.dynamicChildren);
                }
            }
        },
        move: vo,
        hydrate: V4,
    };
function vo(e, t, r, { o: { insert: n }, m: o }, a = 2) {
    a === 0 && n(e.targetAnchor, t, r);
    const { el: s, anchor: l, shapeFlag: i, children: u, props: c } = e,
        p = a === 2;
    if ((p && n(s, t, r), (!p || Vn(c)) && i & 16)) for (let d = 0; d < u.length; d++) o(u[d], t, r, 2);
    p && n(l, t, r);
}
function V4(e, t, r, n, o, a, { o: { nextSibling: s, parentNode: l, querySelector: i } }, u) {
    const c = (t.target = a2(t.props, i));
    if (c) {
        const p = c._lpa || c.firstChild;
        if (t.shapeFlag & 16)
            if (Vn(t.props)) (t.anchor = u(s(e), t, l(e), r, n, o, a)), (t.targetAnchor = p);
            else {
                t.anchor = s(e);
                let d = p;
                for (; d; )
                    if (((d = s(d)), d && d.nodeType === 8 && d.data === 'teleport anchor')) {
                        (t.targetAnchor = d), (c._lpa = t.targetAnchor && s(t.targetAnchor));
                        break;
                    }
                u(p, t, c, r, n, o, a);
            }
        ki(t);
    }
    return t.anchor && s(t.anchor);
}
const O4 = L4;
function ki(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let r = e.children[0].el;
        for (; r && r !== e.targetAnchor; )
            r.nodeType === 1 && r.setAttribute('data-v-owner', t.uid), (r = r.nextSibling);
        t.ut();
    }
}
const Oe = Symbol.for('v-fgt'),
    wn = Symbol.for('v-txt'),
    lt = Symbol.for('v-cmt'),
    Ha = Symbol.for('v-stc'),
    On = [];
let Ht = null;
function v(e = !1) {
    On.push((Ht = e ? null : []));
}
function P4() {
    On.pop(), (Ht = On[On.length - 1] || null);
}
let Kn = 1;
function ts(e) {
    Kn += e;
}
function Ri(e) {
    return (e.dynamicChildren = Kn > 0 ? Ht || Zr : null), P4(), Kn > 0 && Ht && Ht.push(e), e;
}
function w(e, t, r, n, o, a) {
    return Ri(f(e, t, r, n, o, a, !0));
}
function me(e, t, r, n, o) {
    return Ri(G(e, t, r, n, o, !0));
}
function mt(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function dr(e, t) {
    return e.type === t.type && e.key === t.key;
}
const ra = '__vInternal',
    Fi = ({ key: e }) => (e != null ? e : null),
    So = ({ ref: e, ref_key: t, ref_for: r }) => (
        typeof e == 'number' && (e = '' + e),
        e != null ? (xe(e) || je(e) || pe(e) ? { i: Ue, r: e, k: t, f: !!r } : e) : null
    );
function f(e, t = null, r = null, n = 0, o = null, a = e === Oe ? 0 : 1, s = !1, l = !1) {
    const i = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Fi(t),
        ref: t && So(t),
        scopeId: Xo,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: n,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Ue,
    };
    return (
        l ? (q2(i, r), a & 128 && e.normalize(i)) : r && (i.shapeFlag |= xe(r) ? 8 : 16),
        Kn > 0 && !s && Ht && (i.patchFlag > 0 || a & 6) && i.patchFlag !== 32 && Ht.push(i),
        i
    );
}
const G = I4;
function I4(e, t = null, r = null, n = 0, o = null, a = !1) {
    if (((!e || e === hi) && (e = lt), mt(e))) {
        const l = Nt(e, t, !0);
        return (
            r && q2(l, r),
            Kn > 0 && !a && Ht && (l.shapeFlag & 6 ? (Ht[Ht.indexOf(e)] = l) : Ht.push(l)),
            (l.patchFlag |= -2),
            l
        );
    }
    if ((j4(e) && (e = e.__vccOpts), t)) {
        t = $i(t);
        let { class: l, style: i } = t;
        l && !xe(l) && (t.class = ke(l)), Ee(i) && (ai(i) && !se(i) && (i = We({}, i)), (t.style = Mt(i)));
    }
    const s = xe(e) ? 1 : mi(e) ? 128 : B4(e) ? 64 : Ee(e) ? 4 : pe(e) ? 2 : 0;
    return f(e, t, r, n, o, s, a, !0);
}
function $i(e) {
    return e ? (ai(e) || ra in e ? We({}, e) : e) : null;
}
function Nt(e, t, r = !1) {
    const { props: n, ref: o, patchFlag: a, children: s } = e,
        l = t ? gt(n || {}, t) : n;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Fi(l),
        ref: t && t.ref ? (r && o ? (se(o) ? o.concat(So(t)) : [o, So(t)]) : So(t)) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Oe ? (a === -1 ? 16 : a | 16) : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Nt(e.ssContent),
        ssFallback: e.ssFallback && Nt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
    };
}
function st(e = ' ', t = 0) {
    return G(wn, null, e, t);
}
function Et(e = '', t = !1) {
    return t ? (v(), me(lt, null, e)) : G(lt, null, e);
}
function Pt(e) {
    return e == null || typeof e == 'boolean'
        ? G(lt)
        : se(e)
        ? G(Oe, null, e.slice())
        : typeof e == 'object'
        ? ur(e)
        : G(wn, null, String(e));
}
function ur(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Nt(e);
}
function q2(e, t) {
    let r = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (se(t)) r = 16;
    else if (typeof t == 'object')
        if (n & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), q2(e, o()), o._c && (o._d = !0));
            return;
        } else {
            r = 32;
            const o = t._;
            !o && !(ra in t)
                ? (t._ctx = Ue)
                : o === 3 && Ue && (Ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        pe(t)
            ? ((t = { default: t, _ctx: Ue }), (r = 32))
            : ((t = String(t)), n & 64 ? ((r = 16), (t = [st(t)])) : (r = 8));
    (e.children = t), (e.shapeFlag |= r);
}
function gt(...e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
        const n = e[r];
        for (const o in n)
            if (o === 'class') t.class !== n.class && (t.class = ke([t.class, n.class]));
            else if (o === 'style') t.style = Mt([t.style, n.style]);
            else if (Ko(o)) {
                const a = t[o],
                    s = n[o];
                s && a !== s && !(se(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
            } else o !== '' && (t[o] = n[o]);
    }
    return t;
}
function yt(e, t, r, n = null) {
    bt(e, t, 7, [r, n]);
}
const k4 = Hi();
let R4 = 0;
function F4(e, t, r) {
    const n = e.type,
        o = (t ? t.appContext : e.appContext) || k4,
        a = {
            uid: R4++,
            vnode: e,
            type: n,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new ql(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Li(n, o),
            emitsOptions: vi(n, o),
            emit: null,
            emitted: null,
            propsDefaults: Ie,
            inheritAttrs: n.inheritAttrs,
            ctx: Ie,
            data: Ie,
            props: Ie,
            attrs: Ie,
            slots: Ie,
            refs: Ie,
            setupState: Ie,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (a.ctx = { _: a }), (a.root = t ? t.root : a), (a.emit = Dc.bind(null, a)), e.ce && e.ce(a), a;
}
let Je = null;
const Ne = () => Je || Ue;
let ko, s2;
{
    const e = $l(),
        t = (r, n) => {
            let o;
            return (
                (o = e[r]) || (o = e[r] = []),
                o.push(n),
                (a) => {
                    o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
                }
            );
        };
    (ko = t('__VUE_INSTANCE_SETTERS__', (r) => (Je = r))), (s2 = t('__VUE_SSR_SETTERS__', (r) => (na = r)));
}
const ro = (e) => {
        const t = Je;
        return (
            ko(e),
            e.scope.on(),
            () => {
                e.scope.off(), ko(t);
            }
        );
    },
    rs = () => {
        Je && Je.scope.off(), ko(null);
    };
function Ni(e) {
    return e.vnode.shapeFlag & 4;
}
let na = !1;
function $4(e, t = !1) {
    t && s2(t);
    const { props: r, children: n } = e.vnode,
        o = Ni(e);
    x4(e, r, o, t), E4(e, n);
    const a = o ? N4(e, t) : void 0;
    return t && s2(!1), a;
}
function N4(e, t) {
    const r = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = Yo(new Proxy(e.ctx, d4)));
    const { setup: n } = r;
    if (n) {
        const o = (e.setupContext = n.length > 1 ? ji(e) : null),
            a = ro(e);
        Rr();
        const s = wr(n, e, 0, [e.props, o]);
        if ((Fr(), a(), kl(s))) {
            if ((s.then(rs, rs), t))
                return s
                    .then((l) => {
                        ns(e, l, t);
                    })
                    .catch((l) => {
                        Zo(l, e, 0);
                    });
            e.asyncDep = s;
        } else ns(e, s, t);
    } else Di(e, t);
}
function ns(e, t, r) {
    pe(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : Ee(t) && (e.setupState = ui(t)), Di(e, r);
}
let os;
function Di(e, t, r) {
    const n = e.type;
    if (!e.render) {
        if (!t && os && !n.render) {
            const o = n.template || N2(e).template;
            if (o) {
                const { isCustomElement: a, compilerOptions: s } = e.appContext.config,
                    { delimiters: l, compilerOptions: i } = n,
                    u = We(We({ isCustomElement: a, delimiters: l }, s), i);
                n.render = os(o, u);
            }
        }
        e.render = n.render || Ze;
    }
    {
        const o = ro(e);
        Rr();
        try {
            _4(e);
        } finally {
            Fr(), o();
        }
    }
}
function D4(e) {
    return (
        e.attrsProxy ||
        (e.attrsProxy = new Proxy(e.attrs, {
            get(t, r) {
                return pt(e, 'get', '$attrs'), t[r];
            },
        }))
    );
}
function ji(e) {
    const t = (r) => {
        e.exposed = r || {};
    };
    return {
        get attrs() {
            return D4(e);
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function oa(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy(ui(Yo(e.exposed)), {
                get(t, r) {
                    if (r in t) return t[r];
                    if (r in Ln) return Ln[r](e);
                },
                has(t, r) {
                    return r in t || r in Ln;
                },
            }))
        );
}
function l2(e, t = !0) {
    return pe(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function j4(e) {
    return pe(e) && '__vccOpts' in e;
}
const P = (e, t) => Bc(e, t, na);
function qe(e, t, r) {
    const n = arguments.length;
    return n === 2
        ? Ee(t) && !se(t)
            ? mt(t)
                ? G(e, null, [t])
                : G(e, t)
            : G(e, null, t)
        : (n > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : n === 3 && mt(r) && (r = [r]), G(e, t, r));
}
const q4 = '3.4.21',
    K4 = Ze;
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const U4 = 'http://www.w3.org/2000/svg',
    W4 = 'http://www.w3.org/1998/Math/MathML',
    cr = typeof document < 'u' ? document : null,
    as = cr && cr.createElement('template'),
    G4 = {
        insert: (e, t, r) => {
            t.insertBefore(e, r || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, r, n) => {
            const o =
                t === 'svg'
                    ? cr.createElementNS(U4, e)
                    : t === 'mathml'
                    ? cr.createElementNS(W4, e)
                    : cr.createElement(e, r ? { is: r } : void 0);
            return e === 'select' && n && n.multiple != null && o.setAttribute('multiple', n.multiple), o;
        },
        createText: (e) => cr.createTextNode(e),
        createComment: (e) => cr.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => cr.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, '');
        },
        insertStaticContent(e, t, r, n, o, a) {
            const s = r ? r.previousSibling : t.lastChild;
            if (o && (o === a || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), r), !(o === a || !(o = o.nextSibling)); );
            else {
                as.innerHTML = n === 'svg' ? `<svg>${e}</svg>` : n === 'mathml' ? `<math>${e}</math>` : e;
                const l = as.content;
                if (n === 'svg' || n === 'mathml') {
                    const i = l.firstChild;
                    for (; i.firstChild; ) l.appendChild(i.firstChild);
                    l.removeChild(i);
                }
                t.insertBefore(l, r);
            }
            return [s ? s.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
        },
    },
    er = 'transition',
    Cn = 'animation',
    sn = Symbol('_vtc'),
    Nr = (e, { slots: t }) => qe(r4, Ki(e), t);
Nr.displayName = 'Transition';
const qi = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    Y4 = (Nr.props = We({}, bi, qi)),
    zr = (e, t = []) => {
        se(e) ? e.forEach((r) => r(...t)) : e && e(...t);
    },
    ss = (e) => (e ? (se(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Ki(e) {
    const t = {};
    for (const R in e) R in qi || (t[R] = e[R]);
    if (e.css === !1) return t;
    const {
            name: r = 'v',
            type: n,
            duration: o,
            enterFromClass: a = `${r}-enter-from`,
            enterActiveClass: s = `${r}-enter-active`,
            enterToClass: l = `${r}-enter-to`,
            appearFromClass: i = a,
            appearActiveClass: u = s,
            appearToClass: c = l,
            leaveFromClass: p = `${r}-leave-from`,
            leaveActiveClass: d = `${r}-leave-active`,
            leaveToClass: m = `${r}-leave-to`,
        } = e,
        _ = J4(o),
        g = _ && _[0],
        x = _ && _[1],
        {
            onBeforeEnter: y,
            onEnter: C,
            onEnterCancelled: E,
            onLeave: S,
            onLeaveCancelled: H,
            onBeforeAppear: z = y,
            onAppear: O = C,
            onAppearCancelled: T = E,
        } = t,
        V = (R, Q, q) => {
            nr(R, Q ? c : l), nr(R, Q ? u : s), q && q();
        },
        F = (R, Q) => {
            (R._isLeaving = !1), nr(R, p), nr(R, m), nr(R, d), Q && Q();
        },
        j = (R) => (Q, q) => {
            const W = R ? O : C,
                N = () => V(Q, R, q);
            zr(W, [Q, N]),
                ls(() => {
                    nr(Q, R ? i : a), Ut(Q, R ? c : l), ss(W) || is(Q, n, g, N);
                });
        };
    return We(t, {
        onBeforeEnter(R) {
            zr(y, [R]), Ut(R, a), Ut(R, s);
        },
        onBeforeAppear(R) {
            zr(z, [R]), Ut(R, i), Ut(R, u);
        },
        onEnter: j(!1),
        onAppear: j(!0),
        onLeave(R, Q) {
            R._isLeaving = !0;
            const q = () => F(R, Q);
            Ut(R, p),
                Wi(),
                Ut(R, d),
                ls(() => {
                    !R._isLeaving || (nr(R, p), Ut(R, m), ss(S) || is(R, n, x, q));
                }),
                zr(S, [R, q]);
        },
        onEnterCancelled(R) {
            V(R, !1), zr(E, [R]);
        },
        onAppearCancelled(R) {
            V(R, !0), zr(T, [R]);
        },
        onLeaveCancelled(R) {
            F(R), zr(H, [R]);
        },
    });
}
function J4(e) {
    if (e == null) return null;
    if (Ee(e)) return [Ba(e.enter), Ba(e.leave)];
    {
        const t = Ba(e);
        return [t, t];
    }
}
function Ba(e) {
    return tc(e);
}
function Ut(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[sn] || (e[sn] = new Set())).add(t);
}
function nr(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
    const r = e[sn];
    r && (r.delete(t), r.size || (e[sn] = void 0));
}
function ls(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let Z4 = 0;
function is(e, t, r, n) {
    const o = (e._endId = ++Z4),
        a = () => {
            o === e._endId && n();
        };
    if (r) return setTimeout(a, r);
    const { type: s, timeout: l, propCount: i } = Ui(e, t);
    if (!s) return n();
    const u = s + 'end';
    let c = 0;
    const p = () => {
            e.removeEventListener(u, d), a();
        },
        d = (m) => {
            m.target === e && ++c >= i && p();
        };
    setTimeout(() => {
        c < i && p();
    }, l + 1),
        e.addEventListener(u, d);
}
function Ui(e, t) {
    const r = window.getComputedStyle(e),
        n = (_) => (r[_] || '').split(', '),
        o = n(`${er}Delay`),
        a = n(`${er}Duration`),
        s = us(o, a),
        l = n(`${Cn}Delay`),
        i = n(`${Cn}Duration`),
        u = us(l, i);
    let c = null,
        p = 0,
        d = 0;
    t === er
        ? s > 0 && ((c = er), (p = s), (d = a.length))
        : t === Cn
        ? u > 0 && ((c = Cn), (p = u), (d = i.length))
        : ((p = Math.max(s, u)),
          (c = p > 0 ? (s > u ? er : Cn) : null),
          (d = c ? (c === er ? a.length : i.length) : 0));
    const m = c === er && /\b(transform|all)(,|$)/.test(n(`${er}Property`).toString());
    return { type: c, timeout: p, propCount: d, hasTransform: m };
}
function us(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((r, n) => cs(r) + cs(e[n])));
}
function cs(e) {
    return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Wi() {
    return document.body.offsetHeight;
}
function Q4(e, t, r) {
    const n = e[sn];
    n && (t = (t ? [t, ...n] : [...n]).join(' ')),
        t == null ? e.removeAttribute('class') : r ? e.setAttribute('class', t) : (e.className = t);
}
const Ro = Symbol('_vod'),
    Gi = Symbol('_vsh'),
    aa = {
        beforeMount(e, { value: t }, { transition: r }) {
            (e[Ro] = e.style.display === 'none' ? '' : e.style.display), r && t ? r.beforeEnter(e) : Mn(e, t);
        },
        mounted(e, { value: t }, { transition: r }) {
            r && t && r.enter(e);
        },
        updated(e, { value: t, oldValue: r }, { transition: n }) {
            !t != !r &&
                (n
                    ? t
                        ? (n.beforeEnter(e), Mn(e, !0), n.enter(e))
                        : n.leave(e, () => {
                              Mn(e, !1);
                          })
                    : Mn(e, t));
        },
        beforeUnmount(e, { value: t }) {
            Mn(e, t);
        },
    };
function Mn(e, t) {
    (e.style.display = t ? e[Ro] : 'none'), (e[Gi] = !t);
}
const X4 = Symbol(''),
    e6 = /(^|;)\s*display\s*:/;
function t6(e, t, r) {
    const n = e.style,
        o = xe(r);
    let a = !1;
    if (r && !o) {
        if (t)
            if (xe(t))
                for (const s of t.split(';')) {
                    const l = s.slice(0, s.indexOf(':')).trim();
                    r[l] == null && Ao(n, l, '');
                }
            else for (const s in t) r[s] == null && Ao(n, s, '');
        for (const s in r) s === 'display' && (a = !0), Ao(n, s, r[s]);
    } else if (o) {
        if (t !== r) {
            const s = n[X4];
            s && (r += ';' + s), (n.cssText = r), (a = e6.test(r));
        }
    } else t && e.removeAttribute('style');
    Ro in e && ((e[Ro] = a ? n.display : ''), e[Gi] && (n.display = 'none'));
}
const ps = /\s*!important$/;
function Ao(e, t, r) {
    if (se(r)) r.forEach((n) => Ao(e, t, n));
    else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r);
    else {
        const n = r6(e, t);
        ps.test(r) ? e.setProperty(kr(n), r.replace(ps, ''), 'important') : (e[n] = r);
    }
}
const fs = ['Webkit', 'Moz', 'ms'],
    La = {};
function r6(e, t) {
    const r = La[t];
    if (r) return r;
    let n = Ct(t);
    if (n !== 'filter' && n in e) return (La[t] = n);
    n = Xn(n);
    for (let o = 0; o < fs.length; o++) {
        const a = fs[o] + n;
        if (a in e) return (La[t] = a);
    }
    return t;
}
const ds = 'http://www.w3.org/1999/xlink';
function n6(e, t, r, n, o) {
    if (n && t.startsWith('xlink:'))
        r == null ? e.removeAttributeNS(ds, t.slice(6, t.length)) : e.setAttributeNS(ds, t, r);
    else {
        const a = ic(t);
        r == null || (a && !Nl(r)) ? e.removeAttribute(t) : e.setAttribute(t, a ? '' : r);
    }
}
function o6(e, t, r, n, o, a, s) {
    if (t === 'innerHTML' || t === 'textContent') {
        n && s(n, o, a), (e[t] = r == null ? '' : r);
        return;
    }
    const l = e.tagName;
    if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
        const u = l === 'OPTION' ? e.getAttribute('value') || '' : e.value,
            c = r == null ? '' : r;
        (u !== c || !('_value' in e)) && (e.value = c), r == null && e.removeAttribute(t), (e._value = r);
        return;
    }
    let i = !1;
    if (r === '' || r == null) {
        const u = typeof e[t];
        u === 'boolean'
            ? (r = Nl(r))
            : r == null && u === 'string'
            ? ((r = ''), (i = !0))
            : u === 'number' && ((r = 0), (i = !0));
    }
    try {
        e[t] = r;
    } catch {}
    i && e.removeAttribute(t);
}
function _r(e, t, r, n) {
    e.addEventListener(t, r, n);
}
function a6(e, t, r, n) {
    e.removeEventListener(t, r, n);
}
const _s = Symbol('_vei');
function s6(e, t, r, n, o = null) {
    const a = e[_s] || (e[_s] = {}),
        s = a[t];
    if (n && s) s.value = n;
    else {
        const [l, i] = l6(t);
        if (n) {
            const u = (a[t] = c6(n, o));
            _r(e, l, u, i);
        } else s && (a6(e, l, s, i), (a[t] = void 0));
    }
}
const vs = /(?:Once|Passive|Capture)$/;
function l6(e) {
    let t;
    if (vs.test(e)) {
        t = {};
        let n;
        for (; (n = e.match(vs)); ) (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
    }
    return [e[2] === ':' ? e.slice(3) : kr(e.slice(2)), t];
}
let Va = 0;
const i6 = Promise.resolve(),
    u6 = () => Va || (i6.then(() => (Va = 0)), (Va = Date.now()));
function c6(e, t) {
    const r = (n) => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= r.attached) return;
        bt(p6(n, r.value), t, 5, [n]);
    };
    return (r.value = e), (r.attached = u6()), r;
}
function p6(e, t) {
    if (se(t)) {
        const r = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                r.call(e), (e._stopped = !0);
            }),
            t.map((n) => (o) => !o._stopped && n && n(o))
        );
    } else return t;
}
const hs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    f6 = (e, t, r, n, o, a, s, l, i) => {
        const u = o === 'svg';
        t === 'class'
            ? Q4(e, n, u)
            : t === 'style'
            ? t6(e, r, n)
            : Ko(t)
            ? C2(t) || s6(e, t, r, n, s)
            : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : d6(e, t, n, u))
            ? o6(e, t, n, a, s, l, i)
            : (t === 'true-value' ? (e._trueValue = n) : t === 'false-value' && (e._falseValue = n), n6(e, t, n, u));
    };
function d6(e, t, r, n) {
    if (n) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && hs(t) && pe(r)));
    if (
        t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA')
    )
        return !1;
    if (t === 'width' || t === 'height') {
        const o = e.tagName;
        if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE') return !1;
    }
    return hs(t) && xe(r) ? !1 : t in e;
}
const Yi = new WeakMap(),
    Ji = new WeakMap(),
    Fo = Symbol('_moveCb'),
    ms = Symbol('_enterCb'),
    Zi = {
        name: 'TransitionGroup',
        props: We({}, Y4, { tag: String, moveClass: String }),
        setup(e, { slots: t }) {
            const r = Ne(),
                n = yi();
            let o, a;
            return (
                eo(() => {
                    if (!o.length) return;
                    const s = e.moveClass || `${e.name || 'v'}-move`;
                    if (!g6(o[0].el, r.vnode.el, s)) return;
                    o.forEach(v6), o.forEach(h6);
                    const l = o.filter(m6);
                    Wi(),
                        l.forEach((i) => {
                            const u = i.el,
                                c = u.style;
                            Ut(u, s), (c.transform = c.webkitTransform = c.transitionDuration = '');
                            const p = (u[Fo] = (d) => {
                                (d && d.target !== u) ||
                                    ((!d || /transform$/.test(d.propertyName)) &&
                                        (u.removeEventListener('transitionend', p), (u[Fo] = null), nr(u, s)));
                            });
                            u.addEventListener('transitionend', p);
                        });
                }),
                () => {
                    const s = Ce(e),
                        l = Ki(s);
                    let i = s.tag || Oe;
                    (o = a), (a = t.default ? F2(t.default()) : []);
                    for (let u = 0; u < a.length; u++) {
                        const c = a[u];
                        c.key != null && an(c, qn(c, l, n, r));
                    }
                    if (o)
                        for (let u = 0; u < o.length; u++) {
                            const c = o[u];
                            an(c, qn(c, l, n, r)), Yi.set(c, c.el.getBoundingClientRect());
                        }
                    return G(i, null, a);
                }
            );
        },
    },
    _6 = (e) => delete e.mode;
Zi.props;
const IE = Zi;
function v6(e) {
    const t = e.el;
    t[Fo] && t[Fo](), t[ms] && t[ms]();
}
function h6(e) {
    Ji.set(e, e.el.getBoundingClientRect());
}
function m6(e) {
    const t = Yi.get(e),
        r = Ji.get(e),
        n = t.left - r.left,
        o = t.top - r.top;
    if (n || o) {
        const a = e.el.style;
        return (a.transform = a.webkitTransform = `translate(${n}px,${o}px)`), (a.transitionDuration = '0s'), e;
    }
}
function g6(e, t, r) {
    const n = e.cloneNode(),
        o = e[sn];
    o &&
        o.forEach((l) => {
            l.split(/\s+/).forEach((i) => i && n.classList.remove(i));
        }),
        r.split(/\s+/).forEach((l) => l && n.classList.add(l)),
        (n.style.display = 'none');
    const a = t.nodeType === 1 ? t : t.parentNode;
    a.appendChild(n);
    const { hasTransform: s } = Ui(n);
    return a.removeChild(n), s;
}
const ln = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1;
    return se(t) ? (r) => Xr(t, r) : t;
};
function w6(e) {
    e.target.composing = !0;
}
function gs(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const Jt = Symbol('_assign'),
    kE = {
        created(e, { modifiers: { lazy: t, trim: r, number: n } }, o) {
            e[Jt] = ln(o);
            const a = n || (o.props && o.props.type === 'number');
            _r(e, t ? 'change' : 'input', (s) => {
                if (s.target.composing) return;
                let l = e.value;
                r && (l = l.trim()), a && (l = Ya(l)), e[Jt](l);
            }),
                r &&
                    _r(e, 'change', () => {
                        e.value = e.value.trim();
                    }),
                t || (_r(e, 'compositionstart', w6), _r(e, 'compositionend', gs), _r(e, 'change', gs));
        },
        mounted(e, { value: t }) {
            e.value = t == null ? '' : t;
        },
        beforeUpdate(e, { value: t, modifiers: { lazy: r, trim: n, number: o } }, a) {
            if (((e[Jt] = ln(a)), e.composing)) return;
            const s = o || e.type === 'number' ? Ya(e.value) : e.value,
                l = t == null ? '' : t;
            s !== l &&
                ((document.activeElement === e && e.type !== 'range' && (r || (n && e.value.trim() === l))) ||
                    (e.value = l));
        },
    },
    RE = {
        deep: !0,
        created(e, t, r) {
            (e[Jt] = ln(r)),
                _r(e, 'change', () => {
                    const n = e._modelValue,
                        o = Qi(e),
                        a = e.checked,
                        s = e[Jt];
                    if (se(n)) {
                        const l = Dl(n, o),
                            i = l !== -1;
                        if (a && !i) s(n.concat(o));
                        else if (!a && i) {
                            const u = [...n];
                            u.splice(l, 1), s(u);
                        }
                    } else if (Uo(n)) {
                        const l = new Set(n);
                        a ? l.add(o) : l.delete(o), s(l);
                    } else s(Xi(e, a));
                });
        },
        mounted: ws,
        beforeUpdate(e, t, r) {
            (e[Jt] = ln(r)), ws(e, t, r);
        },
    };
function ws(e, { value: t, oldValue: r }, n) {
    (e._modelValue = t),
        se(t)
            ? (e.checked = Dl(t, n.props.value) > -1)
            : Uo(t)
            ? (e.checked = t.has(n.props.value))
            : t !== r && (e.checked = nn(t, Xi(e, !0)));
}
const FE = {
    created(e, { value: t }, r) {
        (e.checked = nn(t, r.props.value)),
            (e[Jt] = ln(r)),
            _r(e, 'change', () => {
                e[Jt](Qi(e));
            });
    },
    beforeUpdate(e, { value: t, oldValue: r }, n) {
        (e[Jt] = ln(n)), t !== r && (e.checked = nn(t, n.props.value));
    },
};
function Qi(e) {
    return '_value' in e ? e._value : e.value;
}
function Xi(e, t) {
    const r = t ? '_trueValue' : '_falseValue';
    return r in e ? e[r] : t;
}
const y6 = ['ctrl', 'shift', 'alt', 'meta'],
    b6 = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => 'button' in e && e.button !== 0,
        middle: (e) => 'button' in e && e.button !== 1,
        right: (e) => 'button' in e && e.button !== 2,
        exact: (e, t) => y6.some((r) => e[`${r}Key`] && !t.includes(r)),
    },
    i2 = (e, t) => {
        const r = e._withMods || (e._withMods = {}),
            n = t.join('.');
        return (
            r[n] ||
            (r[n] = (o, ...a) => {
                for (let s = 0; s < t.length; s++) {
                    const l = b6[t[s]];
                    if (l && l(o, t)) return;
                }
                return e(o, ...a);
            })
        );
    },
    x6 = {
        esc: 'escape',
        space: ' ',
        up: 'arrow-up',
        left: 'arrow-left',
        right: 'arrow-right',
        down: 'arrow-down',
        delete: 'backspace',
    },
    $E = (e, t) => {
        const r = e._withKeys || (e._withKeys = {}),
            n = t.join('.');
        return (
            r[n] ||
            (r[n] = (o) => {
                if (!('key' in o)) return;
                const a = kr(o.key);
                if (t.some((s) => s === a || x6[s] === a)) return e(o);
            })
        );
    },
    C6 = We({ patchProp: f6 }, G4);
let ys;
function eu() {
    return ys || (ys = A4(C6));
}
const NE = (...e) => {
        eu().render(...e);
    },
    M6 = (...e) => {
        const t = eu().createApp(...e),
            { mount: r } = t;
        return (
            (t.mount = (n) => {
                const o = S6(n);
                if (!o) return;
                const a = t._component;
                !pe(a) && !a.render && !a.template && (a.template = o.innerHTML), (o.innerHTML = '');
                const s = r(o, !1, E6(o));
                return o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), s;
            }),
            t
        );
    };
function E6(e) {
    if (e instanceof SVGElement) return 'svg';
    if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function S6(e) {
    return xe(e) ? document.querySelector(e) : e;
}
var A6 = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let tu;
const sa = (e) => (tu = e),
    ru = Symbol();
function u2(e) {
    return (
        e &&
        typeof e == 'object' &&
        Object.prototype.toString.call(e) === '[object Object]' &&
        typeof e.toJSON != 'function'
    );
}
var Pn;
(function (e) {
    (e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function');
})(Pn || (Pn = {}));
function z6() {
    const e = Kl(!0),
        t = e.run(() => D({}));
    let r = [],
        n = [];
    const o = Yo({
        install(a) {
            sa(o),
                (o._a = a),
                a.provide(ru, o),
                (a.config.globalProperties.$pinia = o),
                n.forEach((s) => r.push(s)),
                (n = []);
        },
        use(a) {
            return !this._a && !A6 ? n.push(a) : r.push(a), this;
        },
        _p: r,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return o;
}
const nu = () => {};
function bs(e, t, r, n = nu) {
    e.push(t);
    const o = () => {
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1), n());
    };
    return !r && S2() && Ul(o), o;
}
function Ur(e, ...t) {
    e.slice().forEach((r) => {
        r(...t);
    });
}
const T6 = (e) => e();
function c2(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((r, n) => e.set(n, r)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const r in t) {
        if (!t.hasOwnProperty(r)) continue;
        const n = t[r],
            o = e[r];
        u2(o) && u2(n) && e.hasOwnProperty(r) && !je(n) && !gr(n) ? (e[r] = c2(o, n)) : (e[r] = n);
    }
    return e;
}
const H6 = Symbol();
function B6(e) {
    return !u2(e) || !e.hasOwnProperty(H6);
}
const { assign: or } = Object;
function L6(e) {
    return !!(je(e) && e.effect);
}
function V6(e, t, r, n) {
    const { state: o, actions: a, getters: s } = t,
        l = r.state.value[e];
    let i;
    function u() {
        l || (r.state.value[e] = o ? o() : {});
        const c = Oc(r.state.value[e]);
        return or(
            c,
            a,
            Object.keys(s || {}).reduce(
                (p, d) => (
                    (p[d] = Yo(
                        P(() => {
                            sa(r);
                            const m = r._s.get(e);
                            return s[d].call(m, m);
                        })
                    )),
                    p
                ),
                {}
            )
        );
    }
    return (i = ou(e, u, t, r, n, !0)), i;
}
function ou(e, t, r = {}, n, o, a) {
    let s;
    const l = or({ actions: {} }, r),
        i = { deep: !0 };
    let u,
        c,
        p = [],
        d = [],
        m;
    const _ = n.state.value[e];
    !a && !_ && (n.state.value[e] = {}), D({});
    let g;
    function x(T) {
        let V;
        (u = c = !1),
            typeof T == 'function'
                ? (T(n.state.value[e]), (V = { type: Pn.patchFunction, storeId: e, events: m }))
                : (c2(n.state.value[e], T), (V = { type: Pn.patchObject, payload: T, storeId: e, events: m }));
        const F = (g = Symbol());
        ht().then(() => {
            g === F && (u = !0);
        }),
            (c = !0),
            Ur(p, V, n.state.value[e]);
    }
    const y = a
        ? function () {
              const { state: V } = r,
                  F = V ? V() : {};
              this.$patch((j) => {
                  or(j, F);
              });
          }
        : nu;
    function C() {
        s.stop(), (p = []), (d = []), n._s.delete(e);
    }
    function E(T, V) {
        return function () {
            sa(n);
            const F = Array.from(arguments),
                j = [],
                R = [];
            function Q(N) {
                j.push(N);
            }
            function q(N) {
                R.push(N);
            }
            Ur(d, { args: F, name: T, store: H, after: Q, onError: q });
            let W;
            try {
                W = V.apply(this && this.$id === e ? this : H, F);
            } catch (N) {
                throw (Ur(R, N), N);
            }
            return W instanceof Promise
                ? W.then((N) => (Ur(j, N), N)).catch((N) => (Ur(R, N), Promise.reject(N)))
                : (Ur(j, W), W);
        };
    }
    const S = {
            _p: n,
            $id: e,
            $onAction: bs.bind(null, d),
            $patch: x,
            $reset: y,
            $subscribe(T, V = {}) {
                const F = bs(p, T, V.detached, () => j()),
                    j = s.run(() =>
                        ce(
                            () => n.state.value[e],
                            (R) => {
                                (V.flush === 'sync' ? c : u) && T({ storeId: e, type: Pn.direct, events: m }, R);
                            },
                            or({}, i, V)
                        )
                    );
                return F;
            },
            $dispose: C,
        },
        H = Lt(S);
    n._s.set(e, H);
    const O = ((n._a && n._a.runWithContext) || T6)(() => n._e.run(() => (s = Kl()).run(t)));
    for (const T in O) {
        const V = O[T];
        if ((je(V) && !L6(V)) || gr(V))
            a || (_ && B6(V) && (je(V) ? (V.value = _[T]) : c2(V, _[T])), (n.state.value[e][T] = V));
        else if (typeof V == 'function') {
            const F = E(T, V);
            (O[T] = F), (l.actions[T] = V);
        }
    }
    return (
        or(H, O),
        or(Ce(H), O),
        Object.defineProperty(H, '$state', {
            get: () => n.state.value[e],
            set: (T) => {
                x((V) => {
                    or(V, T);
                });
            },
        }),
        n._p.forEach((T) => {
            or(
                H,
                s.run(() => T({ store: H, app: n._a, pinia: n, options: l }))
            );
        }),
        _ && a && r.hydrate && r.hydrate(H.$state, _),
        (u = !0),
        (c = !0),
        H
    );
}
function la(e, t, r) {
    let n, o;
    const a = typeof t == 'function';
    typeof e == 'string' ? ((n = e), (o = a ? r : t)) : ((o = e), (n = e.id));
    function s(l, i) {
        const u = b4();
        return (
            (l = l || (u ? le(ru, null) : null)),
            l && sa(l),
            (l = tu),
            l._s.has(n) || (a ? ou(n, t, o, l) : V6(n, o, l)),
            l._s.get(n)
        );
    }
    return (s.$id = n), s;
}
/*! Element Plus Icons Vue v2.3.1 */ var O6 = h({
        name: 'AddLocation',
        __name: 'add-location',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0z',
                    }),
                ])
            );
        },
    }),
    P6 = O6,
    I6 = h({
        name: 'Aim',
        __name: 'aim',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32m0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32M96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32m576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32',
                    }),
                ])
            );
        },
    }),
    k6 = I6,
    R6 = h({
        name: 'AlarmClock',
        __name: 'alarm-clock',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'm292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z',
                    }),
                ])
            );
        },
    }),
    F6 = R6,
    $6 = h({
        name: 'Apple',
        __name: 'apple',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z',
                    }),
                ])
            );
        },
    }),
    N6 = $6,
    D6 = h({
        name: 'ArrowDownBold',
        __name: 'arrow-down-bold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z',
                    }),
                ])
            );
        },
    }),
    j6 = D6,
    q6 = h({
        name: 'ArrowDown',
        __name: 'arrow-down',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z',
                    }),
                ])
            );
        },
    }),
    K2 = q6,
    K6 = h({
        name: 'ArrowLeftBold',
        __name: 'arrow-left-bold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z',
                    }),
                ])
            );
        },
    }),
    U6 = K6,
    W6 = h({
        name: 'ArrowLeft',
        __name: 'arrow-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z',
                    }),
                ])
            );
        },
    }),
    au = W6,
    G6 = h({
        name: 'ArrowRightBold',
        __name: 'arrow-right-bold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z',
                    }),
                ])
            );
        },
    }),
    Y6 = G6,
    J6 = h({
        name: 'ArrowRight',
        __name: 'arrow-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z',
                    }),
                ])
            );
        },
    }),
    U2 = J6,
    Z6 = h({
        name: 'ArrowUpBold',
        __name: 'arrow-up-bold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z',
                    }),
                ])
            );
        },
    }),
    Q6 = Z6,
    X6 = h({
        name: 'ArrowUp',
        __name: 'arrow-up',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0',
                    }),
                ])
            );
        },
    }),
    e3 = X6,
    t3 = h({
        name: 'Avatar',
        __name: 'avatar',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0',
                    }),
                ])
            );
        },
    }),
    r3 = t3,
    n3 = h({
        name: 'Back',
        __name: 'back',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'm237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z',
                    }),
                ])
            );
        },
    }),
    o3 = n3,
    a3 = h({
        name: 'Baseball',
        __name: 'baseball',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z',
                    }),
                ])
            );
        },
    }),
    s3 = a3,
    l3 = h({
        name: 'Basketball',
        __name: 'basketball',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336m-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8m106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6',
                    }),
                ])
            );
        },
    }),
    i3 = l3,
    u3 = h({
        name: 'BellFilled',
        __name: 'bell-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 832a128 128 0 0 1-256 0zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8z',
                    }),
                ])
            );
        },
    }),
    c3 = u3,
    p3 = h({
        name: 'Bell',
        __name: 'bell',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 768h512V448a256 256 0 1 0-512 0zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32m352 128h128a64 64 0 0 1-128 0',
                    }),
                ])
            );
        },
    }),
    f3 = p3,
    d3 = h({
        name: 'Bicycle',
        __name: 'bicycle',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384',
                    }),
                    f('path', { fill: 'currentColor', d: 'M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z',
                    }),
                    f('path', { fill: 'currentColor', d: 'm373.376 599.808-42.752-47.616 320-288 42.752 47.616z' }),
                ])
            );
        },
    }),
    _3 = d3,
    v3 = h({
        name: 'BottomLeft',
        __name: 'bottom-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z',
                    }),
                ])
            );
        },
    }),
    h3 = v3,
    m3 = h({
        name: 'BottomRight',
        __name: 'bottom-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312z',
                    }),
                ])
            );
        },
    }),
    g3 = m3,
    w3 = h({
        name: 'Bottom',
        __name: 'bottom',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z',
                    }),
                ])
            );
        },
    }),
    y3 = w3,
    b3 = h({
        name: 'Bowl',
        __name: 'bowl',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424zM352 768v64h320v-64z',
                    }),
                ])
            );
        },
    }),
    x3 = b3,
    C3 = h({
        name: 'Box',
        __name: 'box',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M317.056 128 128 344.064V896h768V344.064L706.944 128zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z',
                    }),
                    f('path', { fill: 'currentColor', d: 'M64 320h896v64H64z' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M448 327.872V640h128V327.872L526.08 128h-28.16zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320z',
                    }),
                ])
            );
        },
    }),
    M3 = C3,
    E3 = h({
        name: 'Briefcase',
        __name: 'briefcase',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M320 320V128h384v192h192v192H128V320zM128 576h768v320H128zm256-256h256.064V192H384z',
                    }),
                ])
            );
        },
    }),
    S3 = E3,
    A3 = h({
        name: 'BrushFilled',
        __name: 'brush-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128zM192 512V128.064h640V512z',
                    }),
                ])
            );
        },
    }),
    z3 = A3,
    T3 = h({
        name: 'Brush',
        __name: 'brush',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z',
                    }),
                ])
            );
        },
    }),
    H3 = T3,
    B3 = h({
        name: 'Burger',
        __name: 'burger',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44M832 448a320 320 0 0 0-640 0zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704z',
                    }),
                ])
            );
        },
    }),
    L3 = B3,
    V3 = h({
        name: 'Calendar',
        __name: 'calendar',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64',
                    }),
                ])
            );
        },
    }),
    O3 = V3,
    P3 = h({
        name: 'CameraFilled',
        __name: 'camera-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4m0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512',
                    }),
                ])
            );
        },
    }),
    I3 = P3,
    k3 = h({
        name: 'Camera',
        __name: 'camera',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M896 256H128v576h768zm-199.424-64-32.064-64h-304.96l-32 64zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32m416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320m0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448',
                    }),
                ])
            );
        },
    }),
    R3 = k3,
    F3 = h({
        name: 'CaretBottom',
        __name: 'caret-bottom',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'm192 384 320 384 320-384z' }),
                ])
            );
        },
    }),
    $3 = F3,
    N3 = h({
        name: 'CaretLeft',
        __name: 'caret-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M672 192 288 511.936 672 832z' }),
                ])
            );
        },
    }),
    D3 = N3,
    j3 = h({
        name: 'CaretRight',
        __name: 'caret-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M384 192v640l384-320.064z' }),
                ])
            );
        },
    }),
    q3 = j3,
    K3 = h({
        name: 'CaretTop',
        __name: 'caret-top',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M512 320 192 704h639.936z' }),
                ])
            );
        },
    }),
    U3 = K3,
    W3 = h({
        name: 'Cellphone',
        __name: 'cellphone',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64m128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64m128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128',
                    }),
                ])
            );
        },
    }),
    G3 = W3,
    Y3 = h({
        name: 'ChatDotRound',
        __name: 'chat-dot-round',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4',
                    }),
                ])
            );
        },
    }),
    J3 = Y3,
    Z3 = h({
        name: 'ChatDotSquare',
        __name: 'chat-dot-square',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z',
                    }),
                ])
            );
        },
    }),
    Q3 = Z3,
    X3 = h({
        name: 'ChatLineRound',
        __name: 'chat-line-round',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32',
                    }),
                ])
            );
        },
    }),
    e8 = X3,
    t8 = h({
        name: 'ChatLineSquare',
        __name: 'chat-line-square',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32',
                    }),
                ])
            );
        },
    }),
    r8 = t8,
    n8 = h({
        name: 'ChatRound',
        __name: 'chat-round',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z',
                    }),
                ])
            );
        },
    }),
    o8 = n8,
    a8 = h({
        name: 'ChatSquare',
        __name: 'chat-square',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z',
                    }),
                ])
            );
        },
    }),
    s8 = a8,
    l8 = h({
        name: 'Check',
        __name: 'check',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z',
                    }),
                ])
            );
        },
    }),
    i8 = l8,
    u8 = h({
        name: 'Checked',
        __name: 'checked',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 192h160v736H160V192h160.064v64H704zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024zM384 192V96h256v96z',
                    }),
                ])
            );
        },
    }),
    c8 = u8,
    p8 = h({
        name: 'Cherry',
        __name: 'cherry',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320m448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320',
                    }),
                ])
            );
        },
    }),
    f8 = p8,
    d8 = h({
        name: 'Chicken',
        __name: 'chicken',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84M244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z',
                    }),
                ])
            );
        },
    }),
    _8 = d8,
    v8 = h({
        name: 'ChromeFilled',
        __name: 'chrome-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21m117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z',
                        }),
                    ]
                )
            );
        },
    }),
    h8 = v8,
    m8 = h({
        name: 'CircleCheckFilled',
        __name: 'circle-check-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z',
                    }),
                ])
            );
        },
    }),
    g8 = m8,
    w8 = h({
        name: 'CircleCheck',
        __name: 'circle-check',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z',
                    }),
                ])
            );
        },
    }),
    su = w8,
    y8 = h({
        name: 'CircleCloseFilled',
        __name: 'circle-close-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z',
                    }),
                ])
            );
        },
    }),
    W2 = y8,
    b8 = h({
        name: 'CircleClose',
        __name: 'circle-close',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                ])
            );
        },
    }),
    lu = b8,
    x8 = h({
        name: 'CirclePlusFilled',
        __name: 'circle-plus-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z',
                    }),
                ])
            );
        },
    }),
    C8 = x8,
    M8 = h({
        name: 'CirclePlus',
        __name: 'circle-plus',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64' }),
                    f('path', { fill: 'currentColor', d: 'M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                ])
            );
        },
    }),
    E8 = M8,
    S8 = h({
        name: 'Clock',
        __name: 'clock',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32',
                    }),
                    f('path', { fill: 'currentColor', d: 'M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32' }),
                ])
            );
        },
    }),
    A8 = S8,
    z8 = h({
        name: 'CloseBold',
        __name: 'close-bold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z',
                    }),
                ])
            );
        },
    }),
    T8 = z8,
    H8 = h({
        name: 'Close',
        __name: 'close',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z',
                    }),
                ])
            );
        },
    }),
    ia = H8,
    B8 = h({
        name: 'Cloudy',
        __name: 'cloudy',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872m-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z',
                    }),
                ])
            );
        },
    }),
    L8 = B8,
    V8 = h({
        name: 'CoffeeCup',
        __name: 'coffee-cup',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v256a128 128 0 1 0 0-256M96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192z',
                    }),
                ])
            );
        },
    }),
    O8 = V8,
    P8 = h({
        name: 'Coffee',
        __name: 'coffee',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304zm-64.128 0 4.544-64H260.736l4.544 64h493.184m-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784m68.736 64 36.544 512H708.16l36.544-512z',
                    }),
                ])
            );
        },
    }),
    I8 = P8,
    k8 = h({
        name: 'Coin',
        __name: 'coin',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'm161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160',
                    }),
                ])
            );
        },
    }),
    R8 = k8,
    F8 = h({
        name: 'ColdDrink',
        __name: 'cold-drink',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64M656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928z',
                    }),
                ])
            );
        },
    }),
    $8 = F8,
    N8 = h({
        name: 'CollectionTag',
        __name: 'collection-tag',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    D8 = N8,
    j8 = h({
        name: 'Collection',
        __name: 'collection',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 736h640V128H256a64 64 0 0 0-64 64zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M240 800a48 48 0 1 0 0 96h592v-96zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224m144-608v250.88l96-76.8 96 76.8V128zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44z',
                    }),
                ])
            );
        },
    }),
    q8 = j8,
    K8 = h({
        name: 'Comment',
        __name: 'comment',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z',
                    }),
                ])
            );
        },
    }),
    U8 = K8,
    W8 = h({
        name: 'Compass',
        __name: 'compass',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832',
                    }),
                ])
            );
        },
    }),
    G8 = W8,
    Y8 = h({
        name: 'Connection',
        __name: 'connection',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192z',
                    }),
                ])
            );
        },
    }),
    J8 = Y8,
    Z8 = h({
        name: 'Coordinate',
        __name: 'coordinate',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M480 512h64v320h-64z' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64m64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128m256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512',
                    }),
                ])
            );
        },
    }),
    Q8 = Z8,
    X8 = h({
        name: 'CopyDocument',
        __name: 'copy-document',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64',
                    }),
                ])
            );
        },
    }),
    ep = X8,
    tp = h({
        name: 'Cpu',
        __name: 'cpu',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32M64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32',
                    }),
                ])
            );
        },
    }),
    rp = tp,
    np = h({
        name: 'CreditCard',
        __name: 'credit-card',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z',
                    }),
                    f('path', { fill: 'currentColor', d: 'M64 320h896v64H64zm0 128h896v64H64zm128 192h256v64H192z' }),
                ])
            );
        },
    }),
    op = np,
    ap = h({
        name: 'Crop',
        __name: 'crop',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32',
                    }),
                ])
            );
        },
    }),
    sp = ap,
    lp = h({
        name: 'DArrowLeft',
        __name: 'd-arrow-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z',
                    }),
                ])
            );
        },
    }),
    ip = lp,
    up = h({
        name: 'DArrowRight',
        __name: 'd-arrow-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z',
                    }),
                ])
            );
        },
    }),
    cp = up,
    pp = h({
        name: 'DCaret',
        __name: 'd-caret',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'm512 128 288 320H224zM224 576h576L512 896z' }),
                ])
            );
        },
    }),
    fp = pp,
    dp = h({
        name: 'DataAnalysis',
        __name: 'data-analysis',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32zM832 192H192v512h640zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    _p = dp,
    vp = h({
        name: 'DataBoard',
        __name: 'data-board',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M32 128h960v64H32z' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 192v512h640V192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M322.176 960H248.32l144.64-250.56 55.424 32zm453.888 0h-73.856L576 741.44l55.424-32z',
                    }),
                ])
            );
        },
    }),
    hp = vp,
    mp = h({
        name: 'DataLine',
        __name: 'data-line',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32zM832 192H192v512h640zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z',
                    }),
                ])
            );
        },
    }),
    gp = mp,
    wp = h({
        name: 'DeleteFilled',
        __name: 'delete-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32',
                    }),
                ])
            );
        },
    }),
    yp = wp,
    bp = h({
        name: 'DeleteLocation',
        __name: 'delete-location',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
                    }),
                    f('path', { fill: 'currentColor', d: 'M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32' }),
                ])
            );
        },
    }),
    xp = bp,
    Cp = h({
        name: 'Delete',
        __name: 'delete',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32',
                    }),
                ])
            );
        },
    }),
    Mp = Cp,
    Ep = h({
        name: 'Dessert',
        __name: 'dessert',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64',
                    }),
                ])
            );
        },
    }),
    Sp = Ep,
    Ap = h({
        name: 'Discount',
        __name: 'discount',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zm0 64v128h576V768zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                ])
            );
        },
    }),
    zp = Ap,
    Tp = h({
        name: 'DishDot',
        __name: 'dish-dot',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-128h768a384 384 0 1 0-768 0m447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256z',
                    }),
                ])
            );
        },
    }),
    Hp = Tp,
    Bp = h({
        name: 'Dish',
        __name: 'dish',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152M128 704h768a384 384 0 1 0-768 0M96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64',
                    }),
                ])
            );
        },
    }),
    Lp = Bp,
    Vp = h({
        name: 'DocumentAdd',
        __name: 'document-add',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m320 512V448h64v128h128v64H544v128h-64V640H352v-64z',
                    }),
                ])
            );
        },
    }),
    Op = Vp,
    Pp = h({
        name: 'DocumentChecked',
        __name: 'document-checked',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312z',
                    }),
                ])
            );
        },
    }),
    Ip = Pp,
    kp = h({
        name: 'DocumentCopy',
        __name: 'document-copy',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z',
                    }),
                ])
            );
        },
    }),
    Rp = kp,
    Fp = h({
        name: 'DocumentDelete',
        __name: 'document-delete',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z',
                    }),
                ])
            );
        },
    }),
    $p = Fp,
    Np = h({
        name: 'DocumentRemove',
        __name: 'document-remove',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m192 512h320v64H352z',
                    }),
                ])
            );
        },
    }),
    Dp = Np,
    jp = h({
        name: 'Document',
        __name: 'document',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z',
                    }),
                ])
            );
        },
    }),
    qp = jp,
    Kp = h({
        name: 'Download',
        __name: 'download',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z',
                    }),
                ])
            );
        },
    }),
    Up = Kp,
    Wp = h({
        name: 'Drizzling',
        __name: 'drizzling',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480M288 800h64v64h-64zm192 0h64v64h-64zm-96 96h64v64h-64zm192 0h64v64h-64zm96-96h64v64h-64z',
                    }),
                ])
            );
        },
    }),
    Gp = Wp,
    Yp = h({
        name: 'EditPen',
        __name: 'edit-pen',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z',
                    }),
                ])
            );
        },
    }),
    Jp = Yp,
    Zp = h({
        name: 'Edit',
        __name: 'edit',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'm469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z',
                    }),
                ])
            );
        },
    }),
    Qp = Zp,
    Xp = h({
        name: 'ElemeFilled',
        __name: 'eleme-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112m150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z',
                    }),
                ])
            );
        },
    }),
    ef = Xp,
    tf = h({
        name: 'Eleme',
        __name: 'eleme',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z',
                    }),
                ])
            );
        },
    }),
    rf = tf,
    nf = h({
        name: 'ElementPlus',
        __name: 'element-plus',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8M714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z',
                    }),
                ])
            );
        },
    }),
    of = nf,
    af = h({
        name: 'Expand',
        __name: 'expand',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352 192 160-192 128z',
                    }),
                ])
            );
        },
    }),
    sf = af,
    lf = h({
        name: 'Failed',
        __name: 'failed',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384zm-320 0V96h256v96z',
                    }),
                ])
            );
        },
    }),
    uf = lf,
    cf = h({
        name: 'Female',
        __name: 'female',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640',
                    }),
                    f('path', { fill: 'currentColor', d: 'M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32' }),
                    f('path', { fill: 'currentColor', d: 'M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32' }),
                ])
            );
        },
    }),
    pf = cf,
    ff = h({
        name: 'Files',
        __name: 'files',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 384v448h768V384zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32m64-128h704v64H160zm96-128h512v64H256z',
                    }),
                ])
            );
        },
    }),
    df = ff,
    _f = h({
        name: 'Film',
        __name: 'film',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z',
                    }),
                ])
            );
        },
    }),
    vf = _f,
    hf = h({
        name: 'Filter',
        __name: 'filter',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288z',
                    }),
                ])
            );
        },
    }),
    mf = hf,
    gf = h({
        name: 'Finished',
        __name: 'finished',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64z',
                    }),
                ])
            );
        },
    }),
    wf = gf,
    yf = h({
        name: 'FirstAidKit',
        __name: 'first-aid-kit',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0zM352 128v64h320v-64zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    bf = yf,
    xf = h({
        name: 'Flag',
        __name: 'flag',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M288 128h608L736 384l160 256H288v320h-96V64h96z' }),
                ])
            );
        },
    }),
    Cf = xf,
    Mf = h({
        name: 'Fold',
        __name: 'fold',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z',
                    }),
                ])
            );
        },
    }),
    Ef = Mf,
    Sf = h({
        name: 'FolderAdd',
        __name: 'folder-add',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m384 416V416h64v128h128v64H544v128h-64V608H352v-64z',
                    }),
                ])
            );
        },
    }),
    Af = Sf,
    zf = h({
        name: 'FolderChecked',
        __name: 'folder-checked',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312z',
                    }),
                ])
            );
        },
    }),
    Tf = zf,
    Hf = h({
        name: 'FolderDelete',
        __name: 'folder-delete',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248z',
                    }),
                ])
            );
        },
    }),
    Bf = Hf,
    Lf = h({
        name: 'FolderOpened',
        __name: 'folder-opened',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896',
                    }),
                ])
            );
        },
    }),
    Vf = Lf,
    Of = h({
        name: 'FolderRemove',
        __name: 'folder-remove',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m256 416h320v64H352z',
                    }),
                ])
            );
        },
    }),
    Pf = Of,
    If = h({
        name: 'Folder',
        __name: 'folder',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    kf = If,
    Rf = h({
        name: 'Food',
        __name: 'food',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0m128 0h192a96 96 0 0 0-192 0m439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352M672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288',
                    }),
                ])
            );
        },
    }),
    Ff = Rf,
    $f = h({
        name: 'Football',
        __name: 'football',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0m-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z',
                    }),
                ])
            );
        },
    }),
    Nf = $f,
    Df = h({
        name: 'ForkSpoon',
        __name: 'fork-spoon',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192',
                    }),
                ])
            );
        },
    }),
    jf = Df,
    qf = h({
        name: 'Fries',
        __name: 'fries',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480zm-128 96V224a32 32 0 0 0-64 0v160zh-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704z',
                    }),
                ])
            );
        },
    }),
    Kf = qf,
    Uf = h({
        name: 'FullScreen',
        __name: 'full-screen',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z',
                    }),
                ])
            );
        },
    }),
    Wf = Uf,
    Gf = h({
        name: 'GobletFull',
        __name: 'goblet-full',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320m503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4',
                    }),
                ])
            );
        },
    }),
    Yf = Gf,
    Jf = h({
        name: 'GobletSquareFull',
        __name: 'goblet-square-full',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96z',
                    }),
                ])
            );
        },
    }),
    Zf = Jf,
    Qf = h({
        name: 'GobletSquare',
        __name: 'goblet-square',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912M256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256z',
                    }),
                ])
            );
        },
    }),
    Xf = Qf,
    ed = h({
        name: 'Goblet',
        __name: 'goblet',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4M256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320',
                    }),
                ])
            );
        },
    }),
    td = ed,
    rd = h({
        name: 'GoldMedal',
        __name: 'gold-medal',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'm772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z',
                        }),
                        f('path', { fill: 'currentColor', d: 'M544 480H416v64h64v192h-64v64h192v-64h-64z' }),
                    ]
                )
            );
        },
    }),
    nd = rd,
    od = h({
        name: 'GoodsFilled',
        __name: 'goods-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 352h640l64 544H128zm128 224h64V448h-64zm320 0h64V448h-64zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0',
                    }),
                ])
            );
        },
    }),
    ad = od,
    sd = h({
        name: 'Goods',
        __name: 'goods',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0z',
                    }),
                ])
            );
        },
    }),
    ld = sd,
    id = h({
        name: 'Grape',
        __name: 'grape',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192m-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192',
                    }),
                ])
            );
        },
    }),
    ud = id,
    cd = h({
        name: 'Grid',
        __name: 'grid',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 384v256H384V384zm64 0h192v256H704zm-64 512H384V704h256zm64 0V704h192v192zm-64-768v192H384V128zm64 0h192v192H704zM320 384v256H128V384zm0 512H128V704h192zm0-768v192H128V128z',
                    }),
                ])
            );
        },
    }),
    pd = cd,
    fd = h({
        name: 'Guide',
        __name: 'guide',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 608h-64V416h64zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768zM384 608V416h64v192zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'm220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192m678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z',
                    }),
                ])
            );
        },
    }),
    dd = fd,
    _d = h({
        name: 'Handbag',
        __name: 'handbag',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z',
                        }),
                    ]
                )
            );
        },
    }),
    vd = _d,
    hd = h({
        name: 'Headset',
        __name: 'headset',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848M896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0',
                    }),
                ])
            );
        },
    }),
    md = hd,
    gd = h({
        name: 'HelpFilled',
        __name: 'help-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480m0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z',
                    }),
                ])
            );
        },
    }),
    wd = gd,
    yd = h({
        name: 'Help',
        __name: 'help',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752m45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                ])
            );
        },
    }),
    bd = yd,
    xd = h({
        name: 'Hide',
        __name: 'hide',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z',
                    }),
                ])
            );
        },
    }),
    Cd = xd,
    Md = h({
        name: 'Histogram',
        __name: 'histogram',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M416 896V128h192v768zm-288 0V448h192v448zm576 0V320h192v576z',
                    }),
                ])
            );
        },
    }),
    Ed = Md,
    Sd = h({
        name: 'HomeFilled',
        __name: 'home-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z',
                    }),
                ])
            );
        },
    }),
    Ad = Sd,
    zd = h({
        name: 'HotWater',
        __name: 'hot-water',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M273.067 477.867h477.866V409.6H273.067zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133m273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133M170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z',
                    }),
                ])
            );
        },
    }),
    Td = zd,
    Hd = h({
        name: 'House',
        __name: 'house',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576',
                    }),
                ])
            );
        },
    }),
    Bd = Hd,
    Ld = h({
        name: 'IceCreamRound',
        __name: 'ice-cream-round',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z',
                    }),
                ])
            );
        },
    }),
    Vd = Ld,
    Od = h({
        name: 'IceCreamSquare',
        __name: 'ice-cream-square',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96zm-64 0h-64v160a32 32 0 1 0 64 0z',
                    }),
                ])
            );
        },
    }),
    Pd = Od,
    Id = h({
        name: 'IceCream',
        __name: 'ice-cream',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56',
                    }),
                ])
            );
        },
    }),
    kd = Id,
    Rd = h({
        name: 'IceDrink',
        __name: 'ice-drink',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 448v128h239.68l16.064-128zm-64 0H256.256l16.064 128H448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64m-64 8.064A256.448 256.448 0 0 0 264.256 384H448zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32zM743.68 640H280.32l32.128 256h399.104z',
                    }),
                ])
            );
        },
    }),
    Fd = Rd,
    $d = h({
        name: 'IceTea',
        __name: 'ice-tea',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352M264.064 256h495.872a256.128 256.128 0 0 0-495.872 0m495.424 256H264.512l48 384h398.976zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32m160 192h64v64h-64zm192 64h64v64h-64zm-128 64h64v64h-64zm64-192h64v64h-64z',
                    }),
                ])
            );
        },
    }),
    Nd = $d,
    Dd = h({
        name: 'InfoFilled',
        __name: 'info-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z',
                    }),
                ])
            );
        },
    }),
    G2 = Dd,
    jd = h({
        name: 'Iphone',
        __name: 'iphone',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0',
                    }),
                ])
            );
        },
    }),
    qd = jd,
    Kd = h({
        name: 'Key',
        __name: 'key',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064M512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384',
                    }),
                ])
            );
        },
    }),
    Ud = Kd,
    Wd = h({
        name: 'KnifeFork',
        __name: 'knife-fork',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56m384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288z',
                    }),
                ])
            );
        },
    }),
    Gd = Wd,
    Yd = h({
        name: 'Lightning',
        __name: 'lightning',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736z',
                    }),
                ])
            );
        },
    }),
    Jd = Yd,
    Zd = h({
        name: 'Link',
        __name: 'link',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152z',
                    }),
                ])
            );
        },
    }),
    Qd = Zd,
    Xd = h({
        name: 'List',
        __name: 'list',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z',
                    }),
                ])
            );
        },
    }),
    e_ = Xd,
    t_ = h({
        name: 'Loading',
        __name: 'loading',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
                    }),
                ])
            );
        },
    }),
    Y2 = t_,
    r_ = h({
        name: 'LocationFilled',
        __name: 'location-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928m0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6',
                    }),
                ])
            );
        },
    }),
    n_ = r_,
    o_ = h({
        name: 'LocationInformation',
        __name: 'location-information',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320',
                    }),
                ])
            );
        },
    }),
    a_ = o_,
    s_ = h({
        name: 'Location',
        __name: 'location',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320',
                    }),
                ])
            );
        },
    }),
    l_ = s_,
    i_ = h({
        name: 'Lock',
        __name: 'lock',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64',
                    }),
                ])
            );
        },
    }),
    u_ = i_,
    c_ = h({
        name: 'Lollipop',
        __name: 'lollipop',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696m105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z',
                    }),
                ])
            );
        },
    }),
    p_ = c_,
    f_ = h({
        name: 'MagicStick',
        __name: 'magic-stick',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64h64v192h-64zm0 576h64v192h-64zM160 480v-64h192v64zm576 0v-64h192v64zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248z',
                    }),
                ])
            );
        },
    }),
    d_ = f_,
    __ = h({
        name: 'Magnet',
        __name: 'magnet',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0',
                    }),
                ])
            );
        },
    }),
    v_ = __,
    h_ = h({
        name: 'Male',
        __name: 'male',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450m0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5m253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z',
                    }),
                ])
            );
        },
    }),
    m_ = h_,
    g_ = h({
        name: 'Management',
        __name: 'management',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M576 128v288l96-96 96 96V128h128v768H320V128zm-448 0h128v768H128z',
                    }),
                ])
            );
        },
    }),
    w_ = g_,
    y_ = h({
        name: 'MapLocation',
        __name: 'map-location',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256m345.6 192L960 960H672v-64H352v64H64l102.4-256zm-68.928 0H235.328l-76.8 192h706.944z',
                    }),
                ])
            );
        },
    }),
    b_ = y_,
    x_ = h({
        name: 'Medal',
        __name: 'medal',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64',
                    }),
                ])
            );
        },
    }),
    C_ = x_,
    M_ = h({
        name: 'Memo',
        __name: 'memo',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01M192 896V128h96v768zm640 0H352V128h480z',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32m0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32',
                        }),
                    ]
                )
            );
        },
    }),
    E_ = M_,
    S_ = h({
        name: 'Menu',
        __name: 'menu',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z',
                    }),
                ])
            );
        },
    }),
    A_ = S_,
    z_ = h({
        name: 'MessageBox',
        __name: 'message-box',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M288 384h448v64H288zm96-128h256v64H384zM131.456 512H384v128h256V512h252.544L721.856 192H302.144zM896 576H704v128H320V576H128v256h768zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z',
                    }),
                ])
            );
        },
    }),
    T_ = z_,
    H_ = h({
        name: 'Message',
        __name: 'message',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056',
                    }),
                ])
            );
        },
    }),
    B_ = H_,
    L_ = h({
        name: 'Mic',
        __name: 'mic',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128z',
                    }),
                ])
            );
        },
    }),
    V_ = L_,
    O_ = h({
        name: 'Microphone',
        __name: 'microphone',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128m0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64m-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64z',
                    }),
                ])
            );
        },
    }),
    P_ = O_,
    I_ = h({
        name: 'MilkTea',
        __name: 'milk-tea',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64m493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12',
                    }),
                ])
            );
        },
    }),
    k_ = I_,
    R_ = h({
        name: 'Minus',
        __name: 'minus',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64' }),
                ])
            );
        },
    }),
    F_ = R_,
    $_ = h({
        name: 'Money',
        __name: 'money',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 192H128v448h640zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320m0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192',
                    }),
                ])
            );
        },
    }),
    N_ = $_,
    D_ = h({
        name: 'Monitor',
        __name: 'monitor',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z',
                    }),
                ])
            );
        },
    }),
    j_ = D_,
    q_ = h({
        name: 'MoonNight',
        __name: 'moon-night',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512M171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z',
                    }),
                ])
            );
        },
    }),
    K_ = q_,
    U_ = h({
        name: 'Moon',
        __name: 'moon',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696',
                    }),
                ])
            );
        },
    }),
    W_ = U_,
    G_ = h({
        name: 'MoreFilled',
        __name: 'more-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224',
                    }),
                ])
            );
        },
    }),
    Y_ = G_,
    J_ = h({
        name: 'More',
        __name: 'more',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96',
                    }),
                ])
            );
        },
    }),
    iu = J_,
    Z_ = h({
        name: 'MostlyCloudy',
        __name: 'mostly-cloudy',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048m15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72',
                    }),
                ])
            );
        },
    }),
    Q_ = Z_,
    X_ = h({
        name: 'Mouse',
        __name: 'mouse',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32m32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96z',
                    }),
                ])
            );
        },
    }),
    ev = X_,
    tv = h({
        name: 'Mug',
        __name: 'mug',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64m64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z',
                    }),
                ])
            );
        },
    }),
    rv = tv,
    nv = h({
        name: 'MuteNotification',
        __name: 'mute-notification',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z',
                    }),
                ])
            );
        },
    }),
    ov = nv,
    av = h({
        name: 'Mute',
        __name: 'mute',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128m51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032M266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z',
                    }),
                ])
            );
        },
    }),
    sv = av,
    lv = h({
        name: 'NoSmoking',
        __name: 'no-smoking',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744zM768 576v128h128V576zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
                    }),
                ])
            );
        },
    }),
    iv = lv,
    uv = h({
        name: 'Notebook',
        __name: 'notebook',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32',
                    }),
                ])
            );
        },
    }),
    cv = uv,
    pv = h({
        name: 'Notification',
        __name: 'notification',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384',
                    }),
                ])
            );
        },
    }),
    fv = pv,
    dv = h({
        name: 'Odometer',
        __name: 'odometer',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928',
                    }),
                ])
            );
        },
    }),
    _v = dv,
    vv = h({
        name: 'OfficeBuilding',
        __name: 'office-building',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 128v704h384V128zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 256h256v64H256zm0 192h256v64H256zm0 192h256v64H256zm384-128h128v64H640zm0 128h128v64H640zM64 832h896v64H64z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 384v448h192V384zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    hv = vv,
    mv = h({
        name: 'Open',
        __name: 'open',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088',
                    }),
                ])
            );
        },
    }),
    gv = mv,
    wv = h({
        name: 'Operation',
        __name: 'operation',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z',
                    }),
                ])
            );
        },
    }),
    yv = wv,
    bv = h({
        name: 'Opportunity',
        __name: 'opportunity',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 960v-64h192.064v64zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416m-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288z',
                    }),
                ])
            );
        },
    }),
    xv = bv,
    Cv = h({
        name: 'Orange',
        __name: 'orange',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128',
                    }),
                ])
            );
        },
    }),
    Mv = Cv,
    Ev = h({
        name: 'Paperclip',
        __name: 'paperclip',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z',
                    }),
                ])
            );
        },
    }),
    Sv = Ev,
    Av = h({
        name: 'PartlyCloudy',
        __name: 'partly-cloudy',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872m-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z',
                    }),
                ])
            );
        },
    }),
    zv = Av,
    Tv = h({
        name: 'Pear',
        __name: 'pear',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z',
                    }),
                ])
            );
        },
    }),
    Hv = Tv,
    Bv = h({
        name: 'PhoneFilled',
        __name: 'phone-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z',
                    }),
                ])
            );
        },
    }),
    Lv = Bv,
    Vv = h({
        name: 'Phone',
        __name: 'phone',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192m0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384',
                    }),
                ])
            );
        },
    }),
    Ov = Vv,
    Pv = h({
        name: 'PictureFilled',
        __name: 'picture-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384',
                    }),
                ])
            );
        },
    }),
    Iv = Pv,
    kv = h({
        name: 'PictureRounded',
        __name: 'picture-rounded',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768m0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64M214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z',
                    }),
                ])
            );
        },
    }),
    Rv = kv,
    Fv = h({
        name: 'Picture',
        __name: 'picture',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64M185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952z',
                    }),
                ])
            );
        },
    }),
    $v = Fv,
    Nv = h({
        name: 'PieChart',
        __name: 'pie-chart',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512z',
                    }),
                ])
            );
        },
    }),
    Dv = Nv,
    jv = h({
        name: 'Place',
        __name: 'place',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912',
                    }),
                ])
            );
        },
    }),
    qv = jv,
    Kv = h({
        name: 'Platform',
        __name: 'platform',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M448 832v-64h128v64h192v64H256v-64zM128 704V128h768v576z' }),
                ])
            );
        },
    }),
    Uv = Kv,
    Wv = h({
        name: 'Plus',
        __name: 'plus',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z',
                    }),
                ])
            );
        },
    }),
    uu = Wv,
    Gv = h({
        name: 'Pointer',
        __name: 'pointer',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128M359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32z',
                    }),
                ])
            );
        },
    }),
    Yv = Gv,
    Jv = h({
        name: 'Position',
        __name: 'position',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z',
                    }),
                ])
            );
        },
    }),
    Zv = Jv,
    Qv = h({
        name: 'Postcard',
        __name: 'postcard',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32',
                    }),
                ])
            );
        },
    }),
    Xv = Qv,
    e5 = h({
        name: 'Pouring',
        __name: 'pouring',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480M224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    t5 = e5,
    r5 = h({
        name: 'Present',
        __name: 'present',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 896V640H192v-64h288V320H192v576zm64 0h288V320H544v256h288v64H544zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z',
                    }),
                    f('path', { fill: 'currentColor', d: 'M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                ])
            );
        },
    }),
    n5 = r5,
    o5 = h({
        name: 'PriceTag',
        __name: 'price-tag',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                ])
            );
        },
    }),
    a5 = o5,
    s5 = h({
        name: 'Printer',
        __name: 'printer',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256zm64-192v320h384V576zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704zm64-448h384V128H320zm-64 128h64v64h-64zm128 0h64v64h-64z',
                    }),
                ])
            );
        },
    }),
    l5 = s5,
    i5 = h({
        name: 'Promotion',
        __name: 'promotion',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z',
                    }),
                ])
            );
        },
    }),
    u5 = i5,
    c5 = h({
        name: 'QuartzWatch',
        __name: 'quartz-watch',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01m6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49M512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99m183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5M416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99m112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02',
                        }),
                    ]
                )
            );
        },
    }),
    p5 = c5,
    f5 = h({
        name: 'QuestionFilled',
        __name: 'question-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z',
                    }),
                ])
            );
        },
    }),
    d5 = f5,
    _5 = h({
        name: 'Rank',
        __name: 'rank',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z',
                    }),
                ])
            );
        },
    }),
    v5 = _5,
    h5 = h({
        name: 'ReadingLamp',
        __name: 'reading-lamp',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m-44.672-768-99.52 448h608.384l-99.52-448zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32m-192-.064h64V960h-64z',
                    }),
                ])
            );
        },
    }),
    m5 = h5,
    g5 = h({
        name: 'Reading',
        __name: 'reading',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z',
                    }),
                    f('path', { fill: 'currentColor', d: 'M480 192h64v704h-64z' }),
                ])
            );
        },
    }),
    w5 = g5,
    y5 = h({
        name: 'RefreshLeft',
        __name: 'refresh-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z',
                    }),
                ])
            );
        },
    }),
    b5 = y5,
    x5 = h({
        name: 'RefreshRight',
        __name: 'refresh-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z',
                    }),
                ])
            );
        },
    }),
    C5 = x5,
    M5 = h({
        name: 'Refresh',
        __name: 'refresh',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z',
                    }),
                ])
            );
        },
    }),
    E5 = M5,
    S5 = h({
        name: 'Refrigerator',
        __name: 'refrigerator',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96m32 224h64v96h-64zm0 288h64v96h-64z',
                    }),
                ])
            );
        },
    }),
    A5 = S5,
    z5 = h({
        name: 'RemoveFilled',
        __name: 'remove-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896M288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512',
                    }),
                ])
            );
        },
    }),
    T5 = z5,
    H5 = h({
        name: 'Remove',
        __name: 'remove',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                ])
            );
        },
    }),
    B5 = H5,
    L5 = h({
        name: 'Right',
        __name: 'right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z',
                    }),
                ])
            );
        },
    }),
    V5 = L5,
    O5 = h({
        name: 'ScaleToOriginal',
        __name: 'scale-to-original',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512',
                    }),
                ])
            );
        },
    }),
    P5 = O5,
    I5 = h({
        name: 'School',
        __name: 'school',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 128v704h576V128zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32',
                    }),
                    f('path', { fill: 'currentColor', d: 'M64 832h896v64H64zm256-640h128v96H320z' }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 832h256v-64a128 128 0 1 0-256 0zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192M320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z',
                    }),
                ])
            );
        },
    }),
    k5 = I5,
    R5 = h({
        name: 'Scissor',
        __name: 'scissor',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248',
                    }),
                ])
            );
        },
    }),
    F5 = R5,
    $5 = h({
        name: 'Search',
        __name: 'search',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704',
                    }),
                ])
            );
        },
    }),
    N5 = $5,
    D5 = h({
        name: 'Select',
        __name: 'select',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z',
                    }),
                ])
            );
        },
    }),
    j5 = D5,
    q5 = h({
        name: 'Sell',
        __name: 'sell',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z',
                    }),
                ])
            );
        },
    }),
    K5 = q5,
    U5 = h({
        name: 'SemiSelect',
        __name: 'semi-select',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', { fill: 'currentColor', d: 'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64' }),
                ])
            );
        },
    }),
    W5 = U5,
    G5 = h({
        name: 'Service',
        __name: 'service',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128',
                    }),
                ])
            );
        },
    }),
    Y5 = G5,
    J5 = h({
        name: 'SetUp',
        __name: 'set-up',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32m160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256',
                    }),
                    f('path', { fill: 'currentColor', d: 'M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32' }),
                ])
            );
        },
    }),
    Z5 = J5,
    Q5 = h({
        name: 'Setting',
        __name: 'setting',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256',
                    }),
                ])
            );
        },
    }),
    X5 = Q5,
    eh = h({
        name: 'Share',
        __name: 'share',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z',
                    }),
                ])
            );
        },
    }),
    th = eh,
    rh = h({
        name: 'Ship',
        __name: 'ship',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216zm0-70.272 144.768-65.792L512 171.84zM512 512H148.864l18.24 64H856.96l18.24-64zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408',
                    }),
                ])
            );
        },
    }),
    nh = rh,
    oh = h({
        name: 'Shop',
        __name: 'shop',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 704h64v192H256V704h64v64h384zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640z',
                    }),
                ])
            );
        },
    }),
    ah = oh,
    sh = h({
        name: 'ShoppingBag',
        __name: 'shopping-bag',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zm64 0h256a128 128 0 1 0-256 0',
                    }),
                    f('path', { fill: 'currentColor', d: 'M192 704h640v64H192z' }),
                ])
            );
        },
    }),
    lh = sh,
    ih = h({
        name: 'ShoppingCartFull',
        __name: 'shopping-cart-full',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04',
                    }),
                ])
            );
        },
    }),
    uh = ih,
    ch = h({
        name: 'ShoppingCart',
        __name: 'shopping-cart',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
                    }),
                ])
            );
        },
    }),
    ph = ch,
    fh = h({
        name: 'ShoppingTrolley',
        __name: 'shopping-trolley',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833m439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64zM256 192h622l-96 384H256zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833',
                        }),
                    ]
                )
            );
        },
    }),
    dh = fh,
    _h = h({
        name: 'Smoking',
        __name: 'smoking',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 576v128h640V576zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
                    }),
                ])
            );
        },
    }),
    vh = _h,
    hh = h({
        name: 'Soccer',
        __name: 'soccer',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24m72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152m452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z',
                    }),
                ])
            );
        },
    }),
    mh = hh,
    gh = h({
        name: 'SoldOut',
        __name: 'sold-out',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z',
                    }),
                ])
            );
        },
    }),
    wh = gh,
    yh = h({
        name: 'SortDown',
        __name: 'sort-down',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0',
                    }),
                ])
            );
        },
    }),
    bh = yh,
    xh = h({
        name: 'SortUp',
        __name: 'sort-up',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248',
                    }),
                ])
            );
        },
    }),
    Ch = xh,
    Mh = h({
        name: 'Sort',
        __name: 'sort',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z',
                    }),
                ])
            );
        },
    }),
    Eh = Mh,
    Sh = h({
        name: 'Stamp',
        __name: 'stamp',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0M128 896v-64h768v64z',
                    }),
                ])
            );
        },
    }),
    Ah = Sh,
    zh = h({
        name: 'StarFilled',
        __name: 'star-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z',
                    }),
                ])
            );
        },
    }),
    Th = zh,
    Hh = h({
        name: 'Star',
        __name: 'star',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z',
                    }),
                ])
            );
        },
    }),
    Bh = Hh,
    Lh = h({
        name: 'Stopwatch',
        __name: 'stopwatch',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z',
                    }),
                ])
            );
        },
    }),
    Vh = Lh,
    Oh = h({
        name: 'SuccessFilled',
        __name: 'success-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z',
                    }),
                ])
            );
        },
    }),
    J2 = Oh,
    Ph = h({
        name: 'Sugar',
        __name: 'sugar',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z',
                    }),
                ])
            );
        },
    }),
    Ih = Ph,
    kh = h({
        name: 'SuitcaseLine',
        __name: 'suitcase-line',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5M384 128h256v64H384zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128zm448 0H320V448h384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320z',
                        }),
                    ]
                )
            );
        },
    }),
    Rh = kh,
    Fh = h({
        name: 'Suitcase',
        __name: 'suitcase',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M384 128v64h256v-64zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64',
                    }),
                ])
            );
        },
    }),
    $h = Fh,
    Nh = h({
        name: 'Sunny',
        __name: 'sunny',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32M195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248M64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32m768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32M195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0',
                    }),
                ])
            );
        },
    }),
    Dh = Nh,
    jh = h({
        name: 'Sunrise',
        __name: 'sunrise',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64m129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32m407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248',
                    }),
                ])
            );
        },
    }),
    qh = jh,
    Kh = h({
        name: 'Sunset',
        __name: 'sunset',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32',
                    }),
                ])
            );
        },
    }),
    Uh = Kh,
    Wh = h({
        name: 'SwitchButton',
        __name: 'switch-button',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z',
                    }),
                    f('path', { fill: 'currentColor', d: 'M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32' }),
                ])
            );
        },
    }),
    Gh = Wh,
    Yh = h({
        name: 'SwitchFilled',
        __name: 'switch-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z',
                        }),
                        f('path', {
                            fill: 'currentColor',
                            d: 'M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z',
                        }),
                    ]
                )
            );
        },
    }),
    Jh = Yh,
    Zh = h({
        name: 'Switch',
        __name: 'switch',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32',
                    }),
                ])
            );
        },
    }),
    Qh = Zh,
    Xh = h({
        name: 'TakeawayBox',
        __name: 'takeaway-box',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M832 384H192v448h640zM96 320h832V128H96zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64',
                    }),
                ])
            );
        },
    }),
    e9 = Xh,
    t9 = h({
        name: 'Ticket',
        __name: 'ticket',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64zm0-416v192h64V416z',
                    }),
                ])
            );
        },
    }),
    r9 = t9,
    n9 = h({
        name: 'Tickets',
        __name: 'tickets',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h192v64H320zm0 384h384v64H320z',
                    }),
                ])
            );
        },
    }),
    o9 = n9,
    a9 = h({
        name: 'Timer',
        __name: 'timer',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z',
                    }),
                ])
            );
        },
    }),
    s9 = a9,
    l9 = h({
        name: 'ToiletPaper',
        __name: 'toilet-paper',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224M736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96',
                    }),
                ])
            );
        },
    }),
    i9 = l9,
    u9 = h({
        name: 'Tools',
        __name: 'tools',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0',
                    }),
                ])
            );
        },
    }),
    c9 = u9,
    p9 = h({
        name: 'TopLeft',
        __name: 'top-left',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z',
                    }),
                ])
            );
        },
    }),
    f9 = p9,
    d9 = h({
        name: 'TopRight',
        __name: 'top-right',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z',
                    }),
                ])
            );
        },
    }),
    _9 = d9,
    v9 = h({
        name: 'Top',
        __name: 'top',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z',
                    }),
                ])
            );
        },
    }),
    h9 = v9,
    m9 = h({
        name: 'TrendCharts',
        __name: 'trend-charts',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 896V128h768v768zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0',
                    }),
                ])
            );
        },
    }),
    g9 = m9,
    w9 = h({
        name: 'TrophyBase',
        __name: 'trophy-base',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4m172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6',
                        }),
                    ]
                )
            );
        },
    }),
    y9 = w9,
    b9 = h({
        name: 'Trophy',
        __name: 'trophy',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64zm224-448V128H320v320a192 192 0 1 0 384 0m64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448z',
                    }),
                ])
            );
        },
    }),
    x9 = b9,
    C9 = h({
        name: 'TurnOff',
        __name: 'turn-off',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088',
                    }),
                ])
            );
        },
    }),
    M9 = C9,
    E9 = h({
        name: 'Umbrella',
        __name: 'umbrella',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0m570.688-320a384.128 384.128 0 0 0-757.376 0z',
                    }),
                ])
            );
        },
    }),
    S9 = E9,
    A9 = h({
        name: 'Unlock',
        __name: 'unlock',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104z',
                    }),
                ])
            );
        },
    }),
    z9 = A9,
    T9 = h({
        name: 'UploadFilled',
        __name: 'upload-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z',
                    }),
                ])
            );
        },
    }),
    H9 = T9,
    B9 = h({
        name: 'Upload',
        __name: 'upload',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z',
                    }),
                ])
            );
        },
    }),
    L9 = B9,
    V9 = h({
        name: 'UserFilled',
        __name: 'user-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z',
                    }),
                ])
            );
        },
    }),
    O9 = V9,
    P9 = h({
        name: 'User',
        __name: 'user',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0',
                    }),
                ])
            );
        },
    }),
    I9 = P9,
    k9 = h({
        name: 'Van',
        __name: 'van',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672m48.128-192-14.72-96H704v96h151.872M688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160m-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160',
                    }),
                ])
            );
        },
    }),
    R9 = k9,
    F9 = h({
        name: 'VideoCameraFilled',
        __name: 'video-camera-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM192 768v64h384v-64zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0m64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288m-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320m64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0',
                    }),
                ])
            );
        },
    }),
    $9 = F9,
    N9 = h({
        name: 'VideoCamera',
        __name: 'video-camera',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M704 768V256H128v512zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 71.552v176.896l128 64V359.552zM192 320h192v64H192z',
                    }),
                ])
            );
        },
    }),
    D9 = N9,
    j9 = h({
        name: 'VideoPause',
        __name: 'video-pause',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32m192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32',
                    }),
                ])
            );
        },
    }),
    q9 = j9,
    K9 = h({
        name: 'VideoPlay',
        __name: 'video-play',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-48-247.616L668.608 512 464 375.616zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z',
                    }),
                ])
            );
        },
    }),
    U9 = K9,
    W9 = h({
        name: 'View',
        __name: 'view',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160',
                    }),
                ])
            );
        },
    }),
    G9 = W9,
    Y9 = h({
        name: 'WalletFilled',
        __name: 'wallet-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96m-80-544 128 160H384z',
                    }),
                ])
            );
        },
    }),
    J9 = Y9,
    Z9 = h({
        name: 'Wallet',
        __name: 'wallet',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32z',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M128 320v512h768V320zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32',
                    }),
                    f('path', { fill: 'currentColor', d: 'M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128' }),
                ])
            );
        },
    }),
    Q9 = Z9,
    X9 = h({
        name: 'WarnTriangleFilled',
        __name: 'warn-triangle-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xml:space': 'preserve',
                        style: { 'enable-background': 'new 0 0 1024 1024' },
                        viewBox: '0 0 1024 1024',
                    },
                    [
                        f('path', {
                            fill: 'currentColor',
                            d: 'M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03M554.67 768h-85.33v-85.33h85.33zm0-426.67v298.66h-85.33V341.32z',
                        }),
                    ]
                )
            );
        },
    }),
    em = X9,
    tm = h({
        name: 'WarningFilled',
        __name: 'warning-filled',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4',
                    }),
                ])
            );
        },
    }),
    Z2 = tm,
    rm = h({
        name: 'Warning',
        __name: 'warning',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32',
                    }),
                ])
            );
        },
    }),
    nm = rm,
    om = h({
        name: 'Watch',
        __name: 'watch',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32',
                    }),
                    f('path', {
                        fill: 'currentColor',
                        d: 'M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32m128-256V128H416v128h-64V64h320v192zM416 768v128h192V768h64v192H352V768z',
                    }),
                ])
            );
        },
    }),
    am = om,
    sm = h({
        name: 'Watermelon',
        __name: 'watermelon',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248zm231.552 141.056a448 448 0 1 1-632-632l632 632',
                    }),
                ])
            );
        },
    }),
    lm = sm,
    im = h({
        name: 'WindPower',
        __name: 'wind-power',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32m416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96z',
                    }),
                ])
            );
        },
    }),
    um = im,
    cm = h({
        name: 'ZoomIn',
        __name: 'zoom-in',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z',
                    }),
                ])
            );
        },
    }),
    pm = cm,
    fm = h({
        name: 'ZoomOut',
        __name: 'zoom-out',
        setup(e) {
            return (t, r) => (
                v(),
                w('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' }, [
                    f('path', {
                        fill: 'currentColor',
                        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64',
                    }),
                ])
            );
        },
    }),
    dm = fm;
const _m = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                AddLocation: P6,
                Aim: k6,
                AlarmClock: F6,
                Apple: N6,
                ArrowDown: K2,
                ArrowDownBold: j6,
                ArrowLeft: au,
                ArrowLeftBold: U6,
                ArrowRight: U2,
                ArrowRightBold: Y6,
                ArrowUp: e3,
                ArrowUpBold: Q6,
                Avatar: r3,
                Back: o3,
                Baseball: s3,
                Basketball: i3,
                Bell: f3,
                BellFilled: c3,
                Bicycle: _3,
                Bottom: y3,
                BottomLeft: h3,
                BottomRight: g3,
                Bowl: x3,
                Box: M3,
                Briefcase: S3,
                Brush: H3,
                BrushFilled: z3,
                Burger: L3,
                Calendar: O3,
                Camera: R3,
                CameraFilled: I3,
                CaretBottom: $3,
                CaretLeft: D3,
                CaretRight: q3,
                CaretTop: U3,
                Cellphone: G3,
                ChatDotRound: J3,
                ChatDotSquare: Q3,
                ChatLineRound: e8,
                ChatLineSquare: r8,
                ChatRound: o8,
                ChatSquare: s8,
                Check: i8,
                Checked: c8,
                Cherry: f8,
                Chicken: _8,
                ChromeFilled: h8,
                CircleCheck: su,
                CircleCheckFilled: g8,
                CircleClose: lu,
                CircleCloseFilled: W2,
                CirclePlus: E8,
                CirclePlusFilled: C8,
                Clock: A8,
                Close: ia,
                CloseBold: T8,
                Cloudy: L8,
                Coffee: I8,
                CoffeeCup: O8,
                Coin: R8,
                ColdDrink: $8,
                Collection: q8,
                CollectionTag: D8,
                Comment: U8,
                Compass: G8,
                Connection: J8,
                Coordinate: Q8,
                CopyDocument: ep,
                Cpu: rp,
                CreditCard: op,
                Crop: sp,
                DArrowLeft: ip,
                DArrowRight: cp,
                DCaret: fp,
                DataAnalysis: _p,
                DataBoard: hp,
                DataLine: gp,
                Delete: Mp,
                DeleteFilled: yp,
                DeleteLocation: xp,
                Dessert: Sp,
                Discount: zp,
                Dish: Lp,
                DishDot: Hp,
                Document: qp,
                DocumentAdd: Op,
                DocumentChecked: Ip,
                DocumentCopy: Rp,
                DocumentDelete: $p,
                DocumentRemove: Dp,
                Download: Up,
                Drizzling: Gp,
                Edit: Qp,
                EditPen: Jp,
                Eleme: rf,
                ElemeFilled: ef,
                ElementPlus: of,
                Expand: sf,
                Failed: uf,
                Female: pf,
                Files: df,
                Film: vf,
                Filter: mf,
                Finished: wf,
                FirstAidKit: bf,
                Flag: Cf,
                Fold: Ef,
                Folder: kf,
                FolderAdd: Af,
                FolderChecked: Tf,
                FolderDelete: Bf,
                FolderOpened: Vf,
                FolderRemove: Pf,
                Food: Ff,
                Football: Nf,
                ForkSpoon: jf,
                Fries: Kf,
                FullScreen: Wf,
                Goblet: td,
                GobletFull: Yf,
                GobletSquare: Xf,
                GobletSquareFull: Zf,
                GoldMedal: nd,
                Goods: ld,
                GoodsFilled: ad,
                Grape: ud,
                Grid: pd,
                Guide: dd,
                Handbag: vd,
                Headset: md,
                Help: bd,
                HelpFilled: wd,
                Hide: Cd,
                Histogram: Ed,
                HomeFilled: Ad,
                HotWater: Td,
                House: Bd,
                IceCream: kd,
                IceCreamRound: Vd,
                IceCreamSquare: Pd,
                IceDrink: Fd,
                IceTea: Nd,
                InfoFilled: G2,
                Iphone: qd,
                Key: Ud,
                KnifeFork: Gd,
                Lightning: Jd,
                Link: Qd,
                List: e_,
                Loading: Y2,
                Location: l_,
                LocationFilled: n_,
                LocationInformation: a_,
                Lock: u_,
                Lollipop: p_,
                MagicStick: d_,
                Magnet: v_,
                Male: m_,
                Management: w_,
                MapLocation: b_,
                Medal: C_,
                Memo: E_,
                Menu: A_,
                Message: B_,
                MessageBox: T_,
                Mic: V_,
                Microphone: P_,
                MilkTea: k_,
                Minus: F_,
                Money: N_,
                Monitor: j_,
                Moon: W_,
                MoonNight: K_,
                More: iu,
                MoreFilled: Y_,
                MostlyCloudy: Q_,
                Mouse: ev,
                Mug: rv,
                Mute: sv,
                MuteNotification: ov,
                NoSmoking: iv,
                Notebook: cv,
                Notification: fv,
                Odometer: _v,
                OfficeBuilding: hv,
                Open: gv,
                Operation: yv,
                Opportunity: xv,
                Orange: Mv,
                Paperclip: Sv,
                PartlyCloudy: zv,
                Pear: Hv,
                Phone: Ov,
                PhoneFilled: Lv,
                Picture: $v,
                PictureFilled: Iv,
                PictureRounded: Rv,
                PieChart: Dv,
                Place: qv,
                Platform: Uv,
                Plus: uu,
                Pointer: Yv,
                Position: Zv,
                Postcard: Xv,
                Pouring: t5,
                Present: n5,
                PriceTag: a5,
                Printer: l5,
                Promotion: u5,
                QuartzWatch: p5,
                QuestionFilled: d5,
                Rank: v5,
                Reading: w5,
                ReadingLamp: m5,
                Refresh: E5,
                RefreshLeft: b5,
                RefreshRight: C5,
                Refrigerator: A5,
                Remove: B5,
                RemoveFilled: T5,
                Right: V5,
                ScaleToOriginal: P5,
                School: k5,
                Scissor: F5,
                Search: N5,
                Select: j5,
                Sell: K5,
                SemiSelect: W5,
                Service: Y5,
                SetUp: Z5,
                Setting: X5,
                Share: th,
                Ship: nh,
                Shop: ah,
                ShoppingBag: lh,
                ShoppingCart: ph,
                ShoppingCartFull: uh,
                ShoppingTrolley: dh,
                Smoking: vh,
                Soccer: mh,
                SoldOut: wh,
                Sort: Eh,
                SortDown: bh,
                SortUp: Ch,
                Stamp: Ah,
                Star: Bh,
                StarFilled: Th,
                Stopwatch: Vh,
                SuccessFilled: J2,
                Sugar: Ih,
                Suitcase: $h,
                SuitcaseLine: Rh,
                Sunny: Dh,
                Sunrise: qh,
                Sunset: Uh,
                Switch: Qh,
                SwitchButton: Gh,
                SwitchFilled: Jh,
                TakeawayBox: e9,
                Ticket: r9,
                Tickets: o9,
                Timer: s9,
                ToiletPaper: i9,
                Tools: c9,
                Top: h9,
                TopLeft: f9,
                TopRight: _9,
                TrendCharts: g9,
                Trophy: x9,
                TrophyBase: y9,
                TurnOff: M9,
                Umbrella: S9,
                Unlock: z9,
                Upload: L9,
                UploadFilled: H9,
                User: I9,
                UserFilled: O9,
                Van: R9,
                VideoCamera: D9,
                VideoCameraFilled: $9,
                VideoPause: q9,
                VideoPlay: U9,
                View: G9,
                Wallet: Q9,
                WalletFilled: J9,
                WarnTriangleFilled: em,
                Warning: nm,
                WarningFilled: Z2,
                Watch: am,
                Watermelon: lm,
                WindPower: um,
                ZoomIn: pm,
                ZoomOut: dm,
            },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    vm =
        'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',
    hm = (e) => (getComputedStyle(e).position === 'fixed' ? !1 : e.offsetParent !== null),
    DE = (e) => Array.from(e.querySelectorAll(vm)).filter((t) => mm(t) && hm(t)),
    mm = (e) => {
        if (e.tabIndex > 0 || (e.tabIndex === 0 && e.getAttribute('tabIndex') !== null)) return !0;
        if (e.disabled) return !1;
        switch (e.nodeName) {
            case 'A':
                return !!e.href && e.rel !== 'ignore';
            case 'INPUT':
                return !(e.type === 'hidden' || e.type === 'file');
            case 'BUTTON':
            case 'SELECT':
            case 'TEXTAREA':
                return !0;
            default:
                return !1;
        }
    },
    zo = function (e, t, ...r) {
        let n;
        t.includes('mouse') || t.includes('click')
            ? (n = 'MouseEvents')
            : t.includes('key')
            ? (n = 'KeyboardEvent')
            : (n = 'HTMLEvents');
        const o = document.createEvent(n);
        return o.initEvent(t, ...r), e.dispatchEvent(o), e;
    },
    gm = (e) => !e.getAttribute('aria-owns'),
    jE = (e, t, r) => {
        const { parentNode: n } = e;
        if (!n) return null;
        const o = n.querySelectorAll(r),
            a = Array.prototype.indexOf.call(o, e);
        return o[a + t] || null;
    },
    qE = (e) => {
        !e || (e.focus(), !gm(e) && e.click());
    },
    Ke =
        (e, t, { checkForDefaultPrevented: r = !0 } = {}) =>
        (o) => {
            const a = e == null ? void 0 : e(o);
            if (r === !1 || !a) return t == null ? void 0 : t(o);
        },
    xs = (e) => (t) => t.pointerType === 'mouse' ? e(t) : void 0;
var wm = Object.defineProperty,
    ym = Object.defineProperties,
    bm = Object.getOwnPropertyDescriptors,
    Cs = Object.getOwnPropertySymbols,
    xm = Object.prototype.hasOwnProperty,
    Cm = Object.prototype.propertyIsEnumerable,
    Ms = (e, t, r) => (t in e ? wm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    Mm = (e, t) => {
        for (var r in t || (t = {})) xm.call(t, r) && Ms(e, r, t[r]);
        if (Cs) for (var r of Cs(t)) Cm.call(t, r) && Ms(e, r, t[r]);
        return e;
    },
    Em = (e, t) => ym(e, bm(t));
function Es(e, t) {
    var r;
    const n = Jo();
    return (
        gi(() => {
            n.value = e();
        }, Em(Mm({}, t), { flush: (r = t == null ? void 0 : t.flush) != null ? r : 'sync' })),
        $r(n)
    );
}
var Ss;
const Xe = typeof window < 'u',
    Sm = (e) => typeof e < 'u',
    cu = (e) => typeof e == 'function',
    Oa = (e) => typeof e == 'number',
    Am = (e) => typeof e == 'string',
    zm = (e, t, r) => Math.min(r, Math.max(t, e)),
    xr = () => {},
    Tm =
        Xe &&
        ((Ss = window == null ? void 0 : window.navigator) == null ? void 0 : Ss.userAgent) &&
        /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Cr(e) {
    return typeof e == 'function' ? e() : A(e);
}
function pu(e, t) {
    function r(...n) {
        return new Promise((o, a) => {
            Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n }))
                .then(o)
                .catch(a);
        });
    }
    return r;
}
function Hm(e, t = {}) {
    let r,
        n,
        o = xr;
    const a = (l) => {
        clearTimeout(l), o(), (o = xr);
    };
    return (l) => {
        const i = Cr(e),
            u = Cr(t.maxWait);
        return (
            r && a(r),
            i <= 0 || (u !== void 0 && u <= 0)
                ? (n && (a(n), (n = null)), Promise.resolve(l()))
                : new Promise((c, p) => {
                      (o = t.rejectOnCancel ? p : c),
                          u &&
                              !n &&
                              (n = setTimeout(() => {
                                  r && a(r), (n = null), c(l());
                              }, u)),
                          (r = setTimeout(() => {
                              n && a(n), (n = null), c(l());
                          }, i));
                  })
        );
    };
}
function Bm(e, t = !0, r = !0, n = !1) {
    let o = 0,
        a,
        s = !0,
        l = xr,
        i;
    const u = () => {
        a && (clearTimeout(a), (a = void 0), l(), (l = xr));
    };
    return (p) => {
        const d = Cr(e),
            m = Date.now() - o,
            _ = () => (i = p());
        return (
            u(),
            d <= 0
                ? ((o = Date.now()), _())
                : (m > d && (r || !s)
                      ? ((o = Date.now()), _())
                      : t &&
                        (i = new Promise((g, x) => {
                            (l = n ? x : g),
                                (a = setTimeout(() => {
                                    (o = Date.now()), (s = !0), g(_()), u();
                                }, Math.max(0, d - m)));
                        })),
                  !r && !a && (a = setTimeout(() => (s = !0), d)),
                  (s = !1),
                  i)
        );
    };
}
function fu(e) {
    return e;
}
function yn(e) {
    return S2() ? (Ul(e), !0) : !1;
}
function Lm(e, t = 200, r = {}) {
    return pu(Hm(t, r), e);
}
function KE(e, t = 200, r = {}) {
    const n = D(e.value),
        o = Lm(
            () => {
                n.value = e.value;
            },
            t,
            r
        );
    return ce(e, () => o()), n;
}
function UE(e, t = 200, r = !1, n = !0, o = !1) {
    return pu(Bm(t, r, n, o), e);
}
function Vm(e, t = !0) {
    Ne() ? Ge(e) : t ? e() : ht(e);
}
function p2(e, t, r = {}) {
    const { immediate: n = !0 } = r,
        o = D(!1);
    let a = null;
    function s() {
        a && (clearTimeout(a), (a = null));
    }
    function l() {
        (o.value = !1), s();
    }
    function i(...u) {
        s(),
            (o.value = !0),
            (a = setTimeout(() => {
                (o.value = !1), (a = null), e(...u);
            }, Cr(t)));
    }
    return n && ((o.value = !0), Xe && i()), yn(l), { isPending: $r(o), start: i, stop: l };
}
function Rt(e) {
    var t;
    const r = Cr(e);
    return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const Dr = Xe ? window : void 0,
    Om = Xe ? window.document : void 0;
Xe && window.navigator;
Xe && window.location;
function Ft(...e) {
    let t, r, n, o;
    if ((Am(e[0]) || Array.isArray(e[0]) ? (([r, n, o] = e), (t = Dr)) : ([t, r, n, o] = e), !t)) return xr;
    Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
    const a = [],
        s = () => {
            a.forEach((c) => c()), (a.length = 0);
        },
        l = (c, p, d, m) => (c.addEventListener(p, d, m), () => c.removeEventListener(p, d, m)),
        i = ce(
            () => [Rt(t), Cr(o)],
            ([c, p]) => {
                s(), c && a.push(...r.flatMap((d) => n.map((m) => l(c, d, m, p))));
            },
            { immediate: !0, flush: 'post' }
        ),
        u = () => {
            i(), s();
        };
    return yn(u), u;
}
let As = !1;
function Pm(e, t, r = {}) {
    const { window: n = Dr, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = r;
    if (!n) return;
    Tm && !As && ((As = !0), Array.from(n.document.body.children).forEach((d) => d.addEventListener('click', xr)));
    let l = !0;
    const i = (d) =>
            o.some((m) => {
                if (typeof m == 'string')
                    return Array.from(n.document.querySelectorAll(m)).some(
                        (_) => _ === d.target || d.composedPath().includes(_)
                    );
                {
                    const _ = Rt(m);
                    return _ && (d.target === _ || d.composedPath().includes(_));
                }
            }),
        c = [
            Ft(
                n,
                'click',
                (d) => {
                    const m = Rt(e);
                    if (!(!m || m === d.target || d.composedPath().includes(m))) {
                        if ((d.detail === 0 && (l = !i(d)), !l)) {
                            l = !0;
                            return;
                        }
                        t(d);
                    }
                },
                { passive: !0, capture: a }
            ),
            Ft(
                n,
                'pointerdown',
                (d) => {
                    const m = Rt(e);
                    m && (l = !d.composedPath().includes(m) && !i(d));
                },
                { passive: !0 }
            ),
            s &&
                Ft(n, 'blur', (d) => {
                    var m;
                    const _ = Rt(e);
                    ((m = n.document.activeElement) == null ? void 0 : m.tagName) === 'IFRAME' &&
                        !(_ != null && _.contains(n.document.activeElement)) &&
                        t(d);
                }),
        ].filter(Boolean);
    return () => c.forEach((d) => d());
}
function du(e, t = !1) {
    const r = D(),
        n = () => (r.value = Boolean(e()));
    return n(), Vm(n, t), r;
}
function Im(e) {
    return JSON.parse(JSON.stringify(e));
}
const f2 =
        typeof globalThis < 'u'
            ? globalThis
            : typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : typeof self < 'u'
            ? self
            : {},
    d2 = '__vueuse_ssr_handlers__';
f2[d2] = f2[d2] || {};
f2[d2];
function WE(e, t, { window: r = Dr, initialValue: n = '' } = {}) {
    const o = D(n),
        a = P(() => {
            var s;
            return Rt(t) || ((s = r == null ? void 0 : r.document) == null ? void 0 : s.documentElement);
        });
    return (
        ce(
            [a, () => Cr(e)],
            ([s, l]) => {
                var i;
                if (s && r) {
                    const u = (i = r.getComputedStyle(s).getPropertyValue(l)) == null ? void 0 : i.trim();
                    o.value = u || n;
                }
            },
            { immediate: !0 }
        ),
        ce(o, (s) => {
            var l;
            (l = a.value) != null && l.style && a.value.style.setProperty(Cr(e), s);
        }),
        o
    );
}
function km({ document: e = Om } = {}) {
    if (!e) return D('visible');
    const t = D(e.visibilityState);
    return (
        Ft(e, 'visibilitychange', () => {
            t.value = e.visibilityState;
        }),
        t
    );
}
var zs = Object.getOwnPropertySymbols,
    Rm = Object.prototype.hasOwnProperty,
    Fm = Object.prototype.propertyIsEnumerable,
    $m = (e, t) => {
        var r = {};
        for (var n in e) Rm.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && zs) for (var n of zs(e)) t.indexOf(n) < 0 && Fm.call(e, n) && (r[n] = e[n]);
        return r;
    };
function ua(e, t, r = {}) {
    const n = r,
        { window: o = Dr } = n,
        a = $m(n, ['window']);
    let s;
    const l = du(() => o && 'ResizeObserver' in o),
        i = () => {
            s && (s.disconnect(), (s = void 0));
        },
        u = ce(
            () => Rt(e),
            (p) => {
                i(), l.value && o && p && ((s = new ResizeObserver(t)), s.observe(p, a));
            },
            { immediate: !0, flush: 'post' }
        ),
        c = () => {
            i(), u();
        };
    return yn(c), { isSupported: l, stop: c };
}
function Nm(e, t = {}) {
    const { immediate: r = !0, window: n = Dr } = t,
        o = D(!1);
    let a = 0,
        s = null;
    function l(c) {
        if (!o.value || !n) return;
        const p = c - a;
        e({ delta: p, timestamp: c }), (a = c), (s = n.requestAnimationFrame(l));
    }
    function i() {
        !o.value && n && ((o.value = !0), (s = n.requestAnimationFrame(l)));
    }
    function u() {
        (o.value = !1), s != null && n && (n.cancelAnimationFrame(s), (s = null));
    }
    return r && i(), yn(u), { isActive: $r(o), pause: u, resume: i };
}
var Ts = Object.getOwnPropertySymbols,
    Dm = Object.prototype.hasOwnProperty,
    jm = Object.prototype.propertyIsEnumerable,
    qm = (e, t) => {
        var r = {};
        for (var n in e) Dm.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && Ts) for (var n of Ts(e)) t.indexOf(n) < 0 && jm.call(e, n) && (r[n] = e[n]);
        return r;
    };
function GE(e, t, r = {}) {
    const n = r,
        { window: o = Dr } = n,
        a = qm(n, ['window']);
    let s;
    const l = du(() => o && 'MutationObserver' in o),
        i = () => {
            s && (s.disconnect(), (s = void 0));
        },
        u = ce(
            () => Rt(e),
            (p) => {
                i(), l.value && o && p && ((s = new MutationObserver(t)), s.observe(p, a));
            },
            { immediate: !0 }
        ),
        c = () => {
            i(), u();
        };
    return yn(c), { isSupported: l, stop: c };
}
var Hs;
(function (e) {
    (e.UP = 'UP'), (e.RIGHT = 'RIGHT'), (e.DOWN = 'DOWN'), (e.LEFT = 'LEFT'), (e.NONE = 'NONE');
})(Hs || (Hs = {}));
var Km = Object.defineProperty,
    Bs = Object.getOwnPropertySymbols,
    Um = Object.prototype.hasOwnProperty,
    Wm = Object.prototype.propertyIsEnumerable,
    Ls = (e, t, r) => (t in e ? Km(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    Gm = (e, t) => {
        for (var r in t || (t = {})) Um.call(t, r) && Ls(e, r, t[r]);
        if (Bs) for (var r of Bs(t)) Wm.call(t, r) && Ls(e, r, t[r]);
        return e;
    };
const Ym = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
Gm({ linear: fu }, Ym);
function Jm([e, t, r, n]) {
    const o = (c, p) => 1 - 3 * p + 3 * c,
        a = (c, p) => 3 * p - 6 * c,
        s = (c) => 3 * c,
        l = (c, p, d) => ((o(p, d) * c + a(p, d)) * c + s(p)) * c,
        i = (c, p, d) => 3 * o(p, d) * c * c + 2 * a(p, d) * c + s(p),
        u = (c) => {
            let p = c;
            for (let d = 0; d < 4; ++d) {
                const m = i(p, e, r);
                if (m === 0) return p;
                const _ = l(p, e, r) - c;
                p -= _ / m;
            }
            return p;
        };
    return (c) => (e === t && r === n ? c : l(u(c), t, n));
}
function YE(e, t = {}) {
    const {
            delay: r = 0,
            disabled: n = !1,
            duration: o = 1e3,
            onFinished: a = xr,
            onStarted: s = xr,
            transition: l = fu,
        } = t,
        i = P(() => {
            const H = A(l);
            return cu(H) ? H : Jm(H);
        }),
        u = P(() => {
            const H = A(e);
            return Oa(H) ? H : H.map(A);
        }),
        c = P(() => (Oa(u.value) ? [u.value] : u.value)),
        p = D(c.value.slice(0));
    let d, m, _, g, x;
    const { resume: y, pause: C } = Nm(
            () => {
                const H = Date.now(),
                    z = zm(1 - (_ - H) / d, 0, 1);
                (p.value = x.map((O, T) => {
                    var V;
                    return O + ((V = m[T]) != null ? V : 0) * i.value(z);
                })),
                    z >= 1 && (C(), a());
            },
            { immediate: !1 }
        ),
        E = () => {
            C(),
                (d = A(o)),
                (m = p.value.map((H, z) => {
                    var O, T;
                    return ((O = c.value[z]) != null ? O : 0) - ((T = p.value[z]) != null ? T : 0);
                })),
                (x = p.value.slice(0)),
                (g = Date.now()),
                (_ = g + d),
                y(),
                s();
        },
        S = p2(E, r, { immediate: !1 });
    return (
        ce(
            c,
            () => {
                A(n) || (A(r) <= 0 ? E() : S.start());
            },
            { deep: !0 }
        ),
        ce(
            () => A(n),
            (H) => {
                H && ((p.value = c.value.slice(0)), C());
            }
        ),
        P(() => {
            const H = A(n) ? c : p;
            return Oa(u.value) ? H.value[0] : H.value;
        })
    );
}
function JE(e, t, r, n = {}) {
    var o, a, s;
    const { clone: l = !1, passive: i = !1, eventName: u, deep: c = !1, defaultValue: p } = n,
        d = Ne(),
        m =
            r ||
            (d == null ? void 0 : d.emit) ||
            ((o = d == null ? void 0 : d.$emit) == null ? void 0 : o.bind(d)) ||
            ((s = (a = d == null ? void 0 : d.proxy) == null ? void 0 : a.$emit) == null
                ? void 0
                : s.bind(d == null ? void 0 : d.proxy));
    let _ = u;
    t || (t = 'modelValue'), (_ = u || _ || `update:${t.toString()}`);
    const g = (y) => (l ? (cu(l) ? l(y) : Im(y)) : y),
        x = () => (Sm(e[t]) ? g(e[t]) : p);
    if (i) {
        const y = x(),
            C = D(y);
        return (
            ce(
                () => e[t],
                (E) => (C.value = g(E))
            ),
            ce(
                C,
                (E) => {
                    (E !== e[t] || c) && m(_, E);
                },
                { deep: c }
            ),
            C
        );
    } else
        return P({
            get() {
                return x();
            },
            set(y) {
                m(_, y);
            },
        });
}
function Zm({ window: e = Dr } = {}) {
    if (!e) return D(!1);
    const t = D(e.document.hasFocus());
    return (
        Ft(e, 'blur', () => {
            t.value = !1;
        }),
        Ft(e, 'focus', () => {
            t.value = !0;
        }),
        t
    );
}
var Qm = typeof global == 'object' && global && global.Object === Object && global;
const Xm = Qm;
var eg = typeof self == 'object' && self && self.Object === Object && self,
    tg = Xm || eg || Function('return this')();
const Q2 = tg;
var rg = Q2.Symbol;
const un = rg;
var _u = Object.prototype,
    ng = _u.hasOwnProperty,
    og = _u.toString,
    En = un ? un.toStringTag : void 0;
function ag(e) {
    var t = ng.call(e, En),
        r = e[En];
    try {
        e[En] = void 0;
        var n = !0;
    } catch {}
    var o = og.call(e);
    return n && (t ? (e[En] = r) : delete e[En]), o;
}
var sg = Object.prototype,
    lg = sg.toString;
function ig(e) {
    return lg.call(e);
}
var ug = '[object Null]',
    cg = '[object Undefined]',
    Vs = un ? un.toStringTag : void 0;
function vu(e) {
    return e == null ? (e === void 0 ? cg : ug) : Vs && Vs in Object(e) ? ag(e) : ig(e);
}
function pg(e) {
    return e != null && typeof e == 'object';
}
var fg = '[object Symbol]';
function X2(e) {
    return typeof e == 'symbol' || (pg(e) && vu(e) == fg);
}
function dg(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
}
var _g = Array.isArray;
const ca = _g;
var vg = 1 / 0,
    Os = un ? un.prototype : void 0,
    Ps = Os ? Os.toString : void 0;
function hu(e) {
    if (typeof e == 'string') return e;
    if (ca(e)) return dg(e, hu) + '';
    if (X2(e)) return Ps ? Ps.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -vg ? '-0' : t;
}
function $o(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
}
var hg = '[object AsyncFunction]',
    mg = '[object Function]',
    gg = '[object GeneratorFunction]',
    wg = '[object Proxy]';
function yg(e) {
    if (!$o(e)) return !1;
    var t = vu(e);
    return t == mg || t == gg || t == hg || t == wg;
}
var bg = Q2['__core-js_shared__'];
const Pa = bg;
var Is = (function () {
    var e = /[^.]+$/.exec((Pa && Pa.keys && Pa.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
})();
function xg(e) {
    return !!Is && Is in e;
}
var Cg = Function.prototype,
    Mg = Cg.toString;
function Eg(e) {
    if (e != null) {
        try {
            return Mg.call(e);
        } catch {}
        try {
            return e + '';
        } catch {}
    }
    return '';
}
var Sg = /[\\^$.*+?()[\]{}|]/g,
    Ag = /^\[object .+?Constructor\]$/,
    zg = Function.prototype,
    Tg = Object.prototype,
    Hg = zg.toString,
    Bg = Tg.hasOwnProperty,
    Lg = RegExp(
        '^' +
            Hg.call(Bg)
                .replace(Sg, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
function Vg(e) {
    if (!$o(e) || xg(e)) return !1;
    var t = yg(e) ? Lg : Ag;
    return t.test(Eg(e));
}
function Og(e, t) {
    return e == null ? void 0 : e[t];
}
function e0(e, t) {
    var r = Og(e, t);
    return Vg(r) ? r : void 0;
}
var Pg = (function () {
    try {
        var e = e0(Object, 'defineProperty');
        return e({}, '', {}), e;
    } catch {}
})();
const ks = Pg;
var Ig = 9007199254740991,
    kg = /^(?:0|[1-9]\d*)$/;
function Rg(e, t) {
    var r = typeof e;
    return (
        (t = t == null ? Ig : t),
        !!t && (r == 'number' || (r != 'symbol' && kg.test(e))) && e > -1 && e % 1 == 0 && e < t
    );
}
function Fg(e, t, r) {
    t == '__proto__' && ks ? ks(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
}
function mu(e, t) {
    return e === t || (e !== e && t !== t);
}
var $g = Object.prototype,
    Ng = $g.hasOwnProperty;
function Dg(e, t, r) {
    var n = e[t];
    (!(Ng.call(e, t) && mu(n, r)) || (r === void 0 && !(t in e))) && Fg(e, t, r);
}
var jg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    qg = /^\w*$/;
function Kg(e, t) {
    if (ca(e)) return !1;
    var r = typeof e;
    return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || X2(e)
        ? !0
        : qg.test(e) || !jg.test(e) || (t != null && e in Object(t));
}
var Ug = e0(Object, 'create');
const Un = Ug;
function Wg() {
    (this.__data__ = Un ? Un(null) : {}), (this.size = 0);
}
function Gg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
}
var Yg = '__lodash_hash_undefined__',
    Jg = Object.prototype,
    Zg = Jg.hasOwnProperty;
function Qg(e) {
    var t = this.__data__;
    if (Un) {
        var r = t[e];
        return r === Yg ? void 0 : r;
    }
    return Zg.call(t, e) ? t[e] : void 0;
}
var Xg = Object.prototype,
    e7 = Xg.hasOwnProperty;
function t7(e) {
    var t = this.__data__;
    return Un ? t[e] !== void 0 : e7.call(t, e);
}
var r7 = '__lodash_hash_undefined__';
function n7(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Un && t === void 0 ? r7 : t), this;
}
function Ir(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
Ir.prototype.clear = Wg;
Ir.prototype.delete = Gg;
Ir.prototype.get = Qg;
Ir.prototype.has = t7;
Ir.prototype.set = n7;
function o7() {
    (this.__data__ = []), (this.size = 0);
}
function pa(e, t) {
    for (var r = e.length; r--; ) if (mu(e[r][0], t)) return r;
    return -1;
}
var a7 = Array.prototype,
    s7 = a7.splice;
function l7(e) {
    var t = this.__data__,
        r = pa(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : s7.call(t, r, 1), --this.size, !0;
}
function i7(e) {
    var t = this.__data__,
        r = pa(t, e);
    return r < 0 ? void 0 : t[r][1];
}
function u7(e) {
    return pa(this.__data__, e) > -1;
}
function c7(e, t) {
    var r = this.__data__,
        n = pa(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
function bn(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
bn.prototype.clear = o7;
bn.prototype.delete = l7;
bn.prototype.get = i7;
bn.prototype.has = u7;
bn.prototype.set = c7;
var p7 = e0(Q2, 'Map');
const f7 = p7;
function d7() {
    (this.size = 0), (this.__data__ = { hash: new Ir(), map: new (f7 || bn)(), string: new Ir() });
}
function _7(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
}
function fa(e, t) {
    var r = e.__data__;
    return _7(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
}
function v7(e) {
    var t = fa(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
}
function h7(e) {
    return fa(this, e).get(e);
}
function m7(e) {
    return fa(this, e).has(e);
}
function g7(e, t) {
    var r = fa(this, e),
        n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
function jr(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
jr.prototype.clear = d7;
jr.prototype.delete = v7;
jr.prototype.get = h7;
jr.prototype.has = m7;
jr.prototype.set = g7;
var w7 = 'Expected a function';
function t0(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(w7);
    var r = function () {
        var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(o)) return a.get(o);
        var s = e.apply(this, n);
        return (r.cache = a.set(o, s) || a), s;
    };
    return (r.cache = new (t0.Cache || jr)()), r;
}
t0.Cache = jr;
var y7 = 500;
function b7(e) {
    var t = t0(e, function (n) {
            return r.size === y7 && r.clear(), n;
        }),
        r = t.cache;
    return t;
}
var x7 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    C7 = /\\(\\)?/g,
    M7 = b7(function (e) {
        var t = [];
        return (
            e.charCodeAt(0) === 46 && t.push(''),
            e.replace(x7, function (r, n, o, a) {
                t.push(o ? a.replace(C7, '$1') : n || r);
            }),
            t
        );
    });
const E7 = M7;
function S7(e) {
    return e == null ? '' : hu(e);
}
function gu(e, t) {
    return ca(e) ? e : Kg(e, t) ? [e] : E7(S7(e));
}
var A7 = 1 / 0;
function wu(e) {
    if (typeof e == 'string' || X2(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -A7 ? '-0' : t;
}
function z7(e, t) {
    t = gu(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[wu(t[r++])];
    return r && r == n ? e : void 0;
}
function yu(e, t, r) {
    var n = e == null ? void 0 : z7(e, t);
    return n === void 0 ? r : n;
}
function T7() {
    if (!arguments.length) return [];
    var e = arguments[0];
    return ca(e) ? e : [e];
}
function _2(e) {
    for (var t = -1, r = e == null ? 0 : e.length, n = {}; ++t < r; ) {
        var o = e[t];
        n[o[0]] = o[1];
    }
    return n;
}
function cn(e) {
    return e == null;
}
function H7(e) {
    return e === void 0;
}
function B7(e, t, r, n) {
    if (!$o(e)) return e;
    t = gu(t, e);
    for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
        var i = wu(t[o]),
            u = r;
        if (i === '__proto__' || i === 'constructor' || i === 'prototype') return e;
        if (o != s) {
            var c = l[i];
            (u = n ? n(c, i, l) : void 0), u === void 0 && (u = $o(c) ? c : Rg(t[o + 1]) ? [] : {});
        }
        Dg(l, i, u), (l = l[i]);
    }
    return e;
}
function L7(e, t, r) {
    return e == null ? e : B7(e, t, r);
}
const v2 = (e) => e === void 0,
    bu = (e) => typeof e == 'boolean',
    vt = (e) => typeof e == 'number',
    ZE = (e) => (!e && e !== 0) || (se(e) && e.length === 0) || (Ee(e) && !Object.keys(e).length),
    Wn = (e) => (typeof Element > 'u' ? !1 : e instanceof Element),
    QE = (e) => cn(e),
    V7 = (e) => (xe(e) ? !Number.isNaN(Number(e)) : !1),
    XE = (e = '') => e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
    vr = (e) => Xn(e),
    Rs = (e) => Object.keys(e),
    eS = (e) => Object.entries(e),
    tS = (e, t, r) => ({
        get value() {
            return yu(e, t, r);
        },
        set value(n) {
            L7(e, t, n);
        },
    });
class O7 extends Error {
    constructor(t) {
        super(t), (this.name = 'ElementPlusError');
    }
}
function Mr(e, t) {
    throw new O7(`[${e}] ${t}`);
}
function rS(e, t) {}
const xu = (e = '') => e.split(' ').filter((t) => !!t.trim()),
    P7 = (e, t) => {
        if (!e || !t) return !1;
        if (t.includes(' ')) throw new Error('className should not contain space.');
        return e.classList.contains(t);
    },
    ho = (e, t) => {
        !e || !t.trim() || e.classList.add(...xu(t));
    },
    Ia = (e, t) => {
        !e || !t.trim() || e.classList.remove(...xu(t));
    },
    nS = (e, t) => {
        var r;
        if (!Xe || !e || !t) return '';
        let n = Ct(t);
        n === 'float' && (n = 'cssFloat');
        try {
            const o = e.style[n];
            if (o) return o;
            const a = (r = document.defaultView) == null ? void 0 : r.getComputedStyle(e, '');
            return a ? a[n] : '';
        } catch {
            return e.style[n];
        }
    };
function Gn(e, t = 'px') {
    if (!e) return '';
    if (vt(e) || V7(e)) return `${e}${t}`;
    if (xe(e)) return e;
}
const Cu = '__epPropKey',
    de = (e) => e,
    I7 = (e) => Ee(e) && !!e[Cu],
    da = (e, t) => {
        if (!Ee(e) || I7(e)) return e;
        const { values: r, required: n, default: o, type: a, validator: s } = e,
            i = {
                type: a,
                required: !!n,
                validator:
                    r || s
                        ? (u) => {
                              let c = !1,
                                  p = [];
                              if (
                                  (r && ((p = Array.from(r)), be(e, 'default') && p.push(o), c || (c = p.includes(u))),
                                  s && (c || (c = s(u))),
                                  !c && p.length > 0)
                              ) {
                                  const d = [...new Set(p)].map((m) => JSON.stringify(m)).join(', ');
                                  K4(
                                      `Invalid prop: validation failed${
                                          t ? ` for prop "${t}"` : ''
                                      }. Expected one of [${d}], got value ${JSON.stringify(u)}.`
                                  );
                              }
                              return c;
                          }
                        : void 0,
                [Cu]: !0,
            };
        return be(e, 'default') && (i.default = o), i;
    },
    Le = (e) => _2(Object.entries(e).map(([t, r]) => [t, da(r, t)])),
    Wt = de([String, Object, Function]),
    oS = { Close: ia },
    aS = { Close: ia, SuccessFilled: J2, InfoFilled: G2, WarningFilled: Z2, CircleCloseFilled: W2 },
    sS = { success: J2, warning: Z2, error: W2, info: G2 },
    lS = { validating: Y2, success: su, error: lu },
    jt = (e, t) => {
        if (
            ((e.install = (r) => {
                for (const n of [e, ...Object.values(t != null ? t : {})]) r.component(n.name, n);
            }),
            t)
        )
            for (const [r, n] of Object.entries(t)) e[r] = n;
        return e;
    },
    iS = (e, t) => (
        (e.install = (r) => {
            (e._context = r._context), (r.config.globalProperties[t] = e);
        }),
        e
    ),
    qr = (e) => ((e.install = Ze), e),
    Mu =
        (...e) =>
        (t) => {
            e.forEach((r) => {
                pe(r) ? r(t) : (r.value = t);
            });
        },
    we = {
        tab: 'Tab',
        enter: 'Enter',
        space: 'Space',
        left: 'ArrowLeft',
        up: 'ArrowUp',
        right: 'ArrowRight',
        down: 'ArrowDown',
        esc: 'Escape',
        delete: 'Delete',
        backspace: 'Backspace',
        numpadEnter: 'NumpadEnter',
        pageUp: 'PageUp',
        pageDown: 'PageDown',
        home: 'Home',
        end: 'End',
    },
    Eu = 'update:modelValue',
    uS = 'change',
    cS = 'input',
    Su = ['', 'default', 'small', 'large'];
var k7 = ((e) => (
    (e[(e.TEXT = 1)] = 'TEXT'),
    (e[(e.CLASS = 2)] = 'CLASS'),
    (e[(e.STYLE = 4)] = 'STYLE'),
    (e[(e.PROPS = 8)] = 'PROPS'),
    (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
    (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
    (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
    (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
    (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
    (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
    (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
    (e[(e.HOISTED = -1)] = 'HOISTED'),
    (e[(e.BAIL = -2)] = 'BAIL'),
    e
))(k7 || {});
function R7(e) {
    return mt(e) && e.type === Oe;
}
function F7(e) {
    return mt(e) && e.type === lt;
}
function pS(e) {
    return mt(e) && !R7(e) && !F7(e);
}
const fS = (e) => {
        if (!mt(e)) return {};
        const t = e.props || {},
            r = (mt(e.type) ? e.type.props : void 0) || {},
            n = {};
        return (
            Object.keys(r).forEach((o) => {
                be(r[o], 'default') && (n[o] = r[o].default);
            }),
            Object.keys(t).forEach((o) => {
                n[Ct(o)] = t[o];
            }),
            n
        );
    },
    In = (e) => {
        const t = se(e) ? e : [e],
            r = [];
        return (
            t.forEach((n) => {
                var o;
                se(n)
                    ? r.push(...In(n))
                    : mt(n) && se(n.children)
                    ? r.push(...In(n.children))
                    : (r.push(n),
                      mt(n) && ((o = n.component) == null ? void 0 : o.subTree) && r.push(...In(n.component.subTree)));
            }),
            r
        );
    },
    r0 = (e) => e,
    $7 = ({ from: e, replacement: t, scope: r, version: n, ref: o, type: a = 'API' }, s) => {
        ce(
            () => A(s),
            (l) => {},
            { immediate: !0 }
        );
    };
var N7 = {
    name: 'en',
    el: {
        breadcrumb: { label: 'Breadcrumb' },
        colorpicker: {
            confirm: 'OK',
            clear: 'Clear',
            defaultLabel: 'color picker',
            description: 'current color is {color}. press enter to select a new color.',
        },
        datepicker: {
            now: 'Now',
            today: 'Today',
            cancel: 'Cancel',
            clear: 'Clear',
            confirm: 'OK',
            dateTablePrompt: 'Use the arrow keys and enter to select the day of the month',
            monthTablePrompt: 'Use the arrow keys and enter to select the month',
            yearTablePrompt: 'Use the arrow keys and enter to select the year',
            selectedDate: 'Selected date',
            selectDate: 'Select date',
            selectTime: 'Select time',
            startDate: 'Start Date',
            startTime: 'Start Time',
            endDate: 'End Date',
            endTime: 'End Time',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            year: '',
            month1: 'January',
            month2: 'February',
            month3: 'March',
            month4: 'April',
            month5: 'May',
            month6: 'June',
            month7: 'July',
            month8: 'August',
            month9: 'September',
            month10: 'October',
            month11: 'November',
            month12: 'December',
            week: 'week',
            weeks: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
            weeksFull: {
                sun: 'Sunday',
                mon: 'Monday',
                tue: 'Tuesday',
                wed: 'Wednesday',
                thu: 'Thursday',
                fri: 'Friday',
                sat: 'Saturday',
            },
            months: {
                jan: 'Jan',
                feb: 'Feb',
                mar: 'Mar',
                apr: 'Apr',
                may: 'May',
                jun: 'Jun',
                jul: 'Jul',
                aug: 'Aug',
                sep: 'Sep',
                oct: 'Oct',
                nov: 'Nov',
                dec: 'Dec',
            },
        },
        inputNumber: { decrease: 'decrease number', increase: 'increase number' },
        select: { loading: 'Loading', noMatch: 'No matching data', noData: 'No data', placeholder: 'Select' },
        dropdown: { toggleDropdown: 'Toggle Dropdown' },
        cascader: { noMatch: 'No matching data', loading: 'Loading', placeholder: 'Select', noData: 'No data' },
        pagination: {
            goto: 'Go to',
            pagesize: '/page',
            total: 'Total {total}',
            pageClassifier: '',
            page: 'Page',
            prev: 'Go to previous page',
            next: 'Go to next page',
            currentPage: 'page {pager}',
            prevPages: 'Previous {pager} pages',
            nextPages: 'Next {pager} pages',
            deprecationWarning:
                'Deprecated usages detected, please refer to the el-pagination documentation for more details',
        },
        dialog: { close: 'Close this dialog' },
        drawer: { close: 'Close this dialog' },
        messagebox: {
            title: 'Message',
            confirm: 'OK',
            cancel: 'Cancel',
            error: 'Illegal input',
            close: 'Close this dialog',
        },
        upload: { deleteTip: 'press delete to remove', delete: 'Delete', preview: 'Preview', continue: 'Continue' },
        slider: {
            defaultLabel: 'slider between {min} and {max}',
            defaultRangeStartLabel: 'pick start value',
            defaultRangeEndLabel: 'pick end value',
        },
        table: {
            emptyText: 'No Data',
            confirmFilter: 'Confirm',
            resetFilter: 'Reset',
            clearFilter: 'All',
            sumText: 'Sum',
        },
        tour: { next: 'Next', previous: 'Previous', finish: 'Finish' },
        tree: { emptyText: 'No Data' },
        transfer: {
            noMatch: 'No matching data',
            noData: 'No data',
            titles: ['List 1', 'List 2'],
            filterPlaceholder: 'Enter keyword',
            noCheckedFormat: '{total} items',
            hasCheckedFormat: '{checked}/{total} checked',
        },
        image: { error: 'FAILED' },
        pageHeader: { title: 'Back' },
        popconfirm: { confirmButtonText: 'Yes', cancelButtonText: 'No' },
        carousel: {
            leftArrow: 'Carousel arrow left',
            rightArrow: 'Carousel arrow right',
            indicator: 'Carousel switch to index {index}',
        },
    },
};
const D7 = (e) => (t, r) => j7(t, r, A(e)),
    j7 = (e, t, r) =>
        yu(r, e, e).replace(/\{(\w+)\}/g, (n, o) => {
            var a;
            return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
        }),
    q7 = (e) => {
        const t = P(() => A(e).name),
            r = je(e) ? e : D(e);
        return { lang: t, locale: r, t: D7(e) };
    },
    Au = Symbol('localeContextKey'),
    zu = (e) => {
        const t = e || le(Au, D());
        return q7(P(() => t.value || N7));
    },
    To = 'el',
    K7 = 'is-',
    Tr = (e, t, r, n, o) => {
        let a = `${e}-${t}`;
        return r && (a += `-${r}`), n && (a += `__${n}`), o && (a += `--${o}`), a;
    },
    Tu = Symbol('namespaceContextKey'),
    n0 = (e) => {
        const t = e || (Ne() ? le(Tu, D(To)) : D(To));
        return P(() => A(t) || To);
    },
    ze = (e, t) => {
        const r = n0(t);
        return {
            namespace: r,
            b: (g = '') => Tr(r.value, e, g, '', ''),
            e: (g) => (g ? Tr(r.value, e, '', g, '') : ''),
            m: (g) => (g ? Tr(r.value, e, '', '', g) : ''),
            be: (g, x) => (g && x ? Tr(r.value, e, g, x, '') : ''),
            em: (g, x) => (g && x ? Tr(r.value, e, '', g, x) : ''),
            bm: (g, x) => (g && x ? Tr(r.value, e, g, '', x) : ''),
            bem: (g, x, y) => (g && x && y ? Tr(r.value, e, g, x, y) : ''),
            is: (g, ...x) => {
                const y = x.length >= 1 ? x[0] : !0;
                return g && y ? `${K7}${g}` : '';
            },
            cssVar: (g) => {
                const x = {};
                for (const y in g) g[y] && (x[`--${r.value}-${y}`] = g[y]);
                return x;
            },
            cssVarName: (g) => `--${r.value}-${g}`,
            cssVarBlock: (g) => {
                const x = {};
                for (const y in g) g[y] && (x[`--${r.value}-${e}-${y}`] = g[y]);
                return x;
            },
            cssVarBlockName: (g) => `--${r.value}-${e}-${g}`,
        };
    },
    U7 = da({ type: de(Boolean), default: null }),
    W7 = da({ type: de(Function) }),
    G7 = (e) => {
        const t = `update:${e}`,
            r = `onUpdate:${e}`,
            n = [t],
            o = { [e]: U7, [r]: W7 };
        return {
            useModelToggle: ({
                indicator: s,
                toggleReason: l,
                shouldHideWhenRouteChanges: i,
                shouldProceed: u,
                onShow: c,
                onHide: p,
            }) => {
                const d = Ne(),
                    { emit: m } = d,
                    _ = d.props,
                    g = P(() => pe(_[r])),
                    x = P(() => _[e] === null),
                    y = (O) => {
                        s.value !== !0 && ((s.value = !0), l && (l.value = O), pe(c) && c(O));
                    },
                    C = (O) => {
                        s.value !== !1 && ((s.value = !1), l && (l.value = O), pe(p) && p(O));
                    },
                    E = (O) => {
                        if (_.disabled === !0 || (pe(u) && !u())) return;
                        const T = g.value && Xe;
                        T && m(t, !0), (x.value || !T) && y(O);
                    },
                    S = (O) => {
                        if (_.disabled === !0 || !Xe) return;
                        const T = g.value && Xe;
                        T && m(t, !1), (x.value || !T) && C(O);
                    },
                    H = (O) => {
                        !bu(O) || (_.disabled && O ? g.value && m(t, !1) : s.value !== O && (O ? y() : C()));
                    },
                    z = () => {
                        s.value ? S() : E();
                    };
                return (
                    ce(() => _[e], H),
                    i &&
                        d.appContext.config.globalProperties.$route !== void 0 &&
                        ce(
                            () => ({ ...d.proxy.$route }),
                            () => {
                                i.value && s.value && S();
                            }
                        ),
                    Ge(() => {
                        H(_[e]);
                    }),
                    { hide: S, show: E, toggle: z, hasUpdateHandler: g }
                );
            },
            useModelToggleProps: o,
            useModelToggleEmits: n,
        };
    },
    Hu = (e) => {
        const t = Ne();
        return P(() => {
            var r, n;
            return (n = (r = t == null ? void 0 : t.proxy) == null ? void 0 : r.$props) == null ? void 0 : n[e];
        });
    };
var it = 'top',
    St = 'bottom',
    At = 'right',
    ut = 'left',
    o0 = 'auto',
    no = [it, St, At, ut],
    pn = 'start',
    Yn = 'end',
    Y7 = 'clippingParents',
    Bu = 'viewport',
    Sn = 'popper',
    J7 = 'reference',
    Fs = no.reduce(function (e, t) {
        return e.concat([t + '-' + pn, t + '-' + Yn]);
    }, []),
    a0 = [].concat(no, [o0]).reduce(function (e, t) {
        return e.concat([t, t + '-' + pn, t + '-' + Yn]);
    }, []),
    Z7 = 'beforeRead',
    Q7 = 'read',
    X7 = 'afterRead',
    ew = 'beforeMain',
    tw = 'main',
    rw = 'afterMain',
    nw = 'beforeWrite',
    ow = 'write',
    aw = 'afterWrite',
    sw = [Z7, Q7, X7, ew, tw, rw, nw, ow, aw];
function Dt(e) {
    return e ? (e.nodeName || '').toLowerCase() : null;
}
function Vt(e) {
    if (e == null) return window;
    if (e.toString() !== '[object Window]') {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
    }
    return e;
}
function fn(e) {
    var t = Vt(e).Element;
    return e instanceof t || e instanceof Element;
}
function xt(e) {
    var t = Vt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function s0(e) {
    if (typeof ShadowRoot > 'u') return !1;
    var t = Vt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
function lw(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (r) {
        var n = t.styles[r] || {},
            o = t.attributes[r] || {},
            a = t.elements[r];
        !xt(a) ||
            !Dt(a) ||
            (Object.assign(a.style, n),
            Object.keys(o).forEach(function (s) {
                var l = o[s];
                l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? '' : l);
            }));
    });
}
function iw(e) {
    var t = e.state,
        r = {
            popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
        };
    return (
        Object.assign(t.elements.popper.style, r.popper),
        (t.styles = r),
        t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
        function () {
            Object.keys(t.elements).forEach(function (n) {
                var o = t.elements[n],
                    a = t.attributes[n] || {},
                    s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
                    l = s.reduce(function (i, u) {
                        return (i[u] = ''), i;
                    }, {});
                !xt(o) ||
                    !Dt(o) ||
                    (Object.assign(o.style, l),
                    Object.keys(a).forEach(function (i) {
                        o.removeAttribute(i);
                    }));
            });
        }
    );
}
var Lu = { name: 'applyStyles', enabled: !0, phase: 'write', fn: lw, effect: iw, requires: ['computeStyles'] };
function $t(e) {
    return e.split('-')[0];
}
var Pr = Math.max,
    No = Math.min,
    dn = Math.round;
function _n(e, t) {
    t === void 0 && (t = !1);
    var r = e.getBoundingClientRect(),
        n = 1,
        o = 1;
    if (xt(e) && t) {
        var a = e.offsetHeight,
            s = e.offsetWidth;
        s > 0 && (n = dn(r.width) / s || 1), a > 0 && (o = dn(r.height) / a || 1);
    }
    return {
        width: r.width / n,
        height: r.height / o,
        top: r.top / o,
        right: r.right / n,
        bottom: r.bottom / o,
        left: r.left / n,
        x: r.left / n,
        y: r.top / o,
    };
}
function l0(e) {
    var t = _n(e),
        r = e.offsetWidth,
        n = e.offsetHeight;
    return (
        Math.abs(t.width - r) <= 1 && (r = t.width),
        Math.abs(t.height - n) <= 1 && (n = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
    );
}
function Vu(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && s0(r)) {
        var n = t;
        do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
        } while (n);
    }
    return !1;
}
function Zt(e) {
    return Vt(e).getComputedStyle(e);
}
function uw(e) {
    return ['table', 'td', 'th'].indexOf(Dt(e)) >= 0;
}
function Er(e) {
    return ((fn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _a(e) {
    return Dt(e) === 'html' ? e : e.assignedSlot || e.parentNode || (s0(e) ? e.host : null) || Er(e);
}
function $s(e) {
    return !xt(e) || Zt(e).position === 'fixed' ? null : e.offsetParent;
}
function cw(e) {
    var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
        r = navigator.userAgent.indexOf('Trident') !== -1;
    if (r && xt(e)) {
        var n = Zt(e);
        if (n.position === 'fixed') return null;
    }
    var o = _a(e);
    for (s0(o) && (o = o.host); xt(o) && ['html', 'body'].indexOf(Dt(o)) < 0; ) {
        var a = Zt(o);
        if (
            a.transform !== 'none' ||
            a.perspective !== 'none' ||
            a.contain === 'paint' ||
            ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
            (t && a.willChange === 'filter') ||
            (t && a.filter && a.filter !== 'none')
        )
            return o;
        o = o.parentNode;
    }
    return null;
}
function oo(e) {
    for (var t = Vt(e), r = $s(e); r && uw(r) && Zt(r).position === 'static'; ) r = $s(r);
    return r && (Dt(r) === 'html' || (Dt(r) === 'body' && Zt(r).position === 'static')) ? t : r || cw(e) || t;
}
function i0(e) {
    return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function kn(e, t, r) {
    return Pr(e, No(t, r));
}
function pw(e, t, r) {
    var n = kn(e, t, r);
    return n > r ? r : n;
}
function Ou() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Pu(e) {
    return Object.assign({}, Ou(), e);
}
function Iu(e, t) {
    return t.reduce(function (r, n) {
        return (r[n] = e), r;
    }, {});
}
var fw = function (e, t) {
    return (
        (e = typeof e == 'function' ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
        Pu(typeof e != 'number' ? e : Iu(e, no))
    );
};
function dw(e) {
    var t,
        r = e.state,
        n = e.name,
        o = e.options,
        a = r.elements.arrow,
        s = r.modifiersData.popperOffsets,
        l = $t(r.placement),
        i = i0(l),
        u = [ut, At].indexOf(l) >= 0,
        c = u ? 'height' : 'width';
    if (!(!a || !s)) {
        var p = fw(o.padding, r),
            d = l0(a),
            m = i === 'y' ? it : ut,
            _ = i === 'y' ? St : At,
            g = r.rects.reference[c] + r.rects.reference[i] - s[i] - r.rects.popper[c],
            x = s[i] - r.rects.reference[i],
            y = oo(a),
            C = y ? (i === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
            E = g / 2 - x / 2,
            S = p[m],
            H = C - d[c] - p[_],
            z = C / 2 - d[c] / 2 + E,
            O = kn(S, z, H),
            T = i;
        r.modifiersData[n] = ((t = {}), (t[T] = O), (t.centerOffset = O - z), t);
    }
}
function _w(e) {
    var t = e.state,
        r = e.options,
        n = r.element,
        o = n === void 0 ? '[data-popper-arrow]' : n;
    o != null &&
        ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
            !Vu(t.elements.popper, o) ||
            (t.elements.arrow = o));
}
var vw = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: dw,
    effect: _w,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
};
function vn(e) {
    return e.split('-')[1];
}
var hw = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function mw(e) {
    var t = e.x,
        r = e.y,
        n = window,
        o = n.devicePixelRatio || 1;
    return { x: dn(t * o) / o || 0, y: dn(r * o) / o || 0 };
}
function Ns(e) {
    var t,
        r = e.popper,
        n = e.popperRect,
        o = e.placement,
        a = e.variation,
        s = e.offsets,
        l = e.position,
        i = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        p = e.isFixed,
        d = s.x,
        m = d === void 0 ? 0 : d,
        _ = s.y,
        g = _ === void 0 ? 0 : _,
        x = typeof c == 'function' ? c({ x: m, y: g }) : { x: m, y: g };
    (m = x.x), (g = x.y);
    var y = s.hasOwnProperty('x'),
        C = s.hasOwnProperty('y'),
        E = ut,
        S = it,
        H = window;
    if (u) {
        var z = oo(r),
            O = 'clientHeight',
            T = 'clientWidth';
        if (
            (z === Vt(r) &&
                ((z = Er(r)),
                Zt(z).position !== 'static' && l === 'absolute' && ((O = 'scrollHeight'), (T = 'scrollWidth'))),
            (z = z),
            o === it || ((o === ut || o === At) && a === Yn))
        ) {
            S = St;
            var V = p && z === H && H.visualViewport ? H.visualViewport.height : z[O];
            (g -= V - n.height), (g *= i ? 1 : -1);
        }
        if (o === ut || ((o === it || o === St) && a === Yn)) {
            E = At;
            var F = p && z === H && H.visualViewport ? H.visualViewport.width : z[T];
            (m -= F - n.width), (m *= i ? 1 : -1);
        }
    }
    var j = Object.assign({ position: l }, u && hw),
        R = c === !0 ? mw({ x: m, y: g }) : { x: m, y: g };
    if (((m = R.x), (g = R.y), i)) {
        var Q;
        return Object.assign(
            {},
            j,
            ((Q = {}),
            (Q[S] = C ? '0' : ''),
            (Q[E] = y ? '0' : ''),
            (Q.transform =
                (H.devicePixelRatio || 1) <= 1
                    ? 'translate(' + m + 'px, ' + g + 'px)'
                    : 'translate3d(' + m + 'px, ' + g + 'px, 0)'),
            Q)
        );
    }
    return Object.assign(
        {},
        j,
        ((t = {}), (t[S] = C ? g + 'px' : ''), (t[E] = y ? m + 'px' : ''), (t.transform = ''), t)
    );
}
function gw(e) {
    var t = e.state,
        r = e.options,
        n = r.gpuAcceleration,
        o = n === void 0 ? !0 : n,
        a = r.adaptive,
        s = a === void 0 ? !0 : a,
        l = r.roundOffsets,
        i = l === void 0 ? !0 : l,
        u = {
            placement: $t(t.placement),
            variation: vn(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === 'fixed',
        };
    t.modifiersData.popperOffsets != null &&
        (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            Ns(
                Object.assign({}, u, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s,
                    roundOffsets: i,
                })
            )
        )),
        t.modifiersData.arrow != null &&
            (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Ns(
                    Object.assign({}, u, {
                        offsets: t.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: i,
                    })
                )
            )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }));
}
var ku = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: gw, data: {} },
    mo = { passive: !0 };
function ww(e) {
    var t = e.state,
        r = e.instance,
        n = e.options,
        o = n.scroll,
        a = o === void 0 ? !0 : o,
        s = n.resize,
        l = s === void 0 ? !0 : s,
        i = Vt(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
        a &&
            u.forEach(function (c) {
                c.addEventListener('scroll', r.update, mo);
            }),
        l && i.addEventListener('resize', r.update, mo),
        function () {
            a &&
                u.forEach(function (c) {
                    c.removeEventListener('scroll', r.update, mo);
                }),
                l && i.removeEventListener('resize', r.update, mo);
        }
    );
}
var Ru = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: ww, data: {} },
    yw = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Ho(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
        return yw[t];
    });
}
var bw = { start: 'end', end: 'start' };
function Ds(e) {
    return e.replace(/start|end/g, function (t) {
        return bw[t];
    });
}
function u0(e) {
    var t = Vt(e),
        r = t.pageXOffset,
        n = t.pageYOffset;
    return { scrollLeft: r, scrollTop: n };
}
function c0(e) {
    return _n(Er(e)).left + u0(e).scrollLeft;
}
function xw(e) {
    var t = Vt(e),
        r = Er(e),
        n = t.visualViewport,
        o = r.clientWidth,
        a = r.clientHeight,
        s = 0,
        l = 0;
    return (
        n &&
            ((o = n.width),
            (a = n.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((s = n.offsetLeft), (l = n.offsetTop))),
        { width: o, height: a, x: s + c0(e), y: l }
    );
}
function Cw(e) {
    var t,
        r = Er(e),
        n = u0(e),
        o = (t = e.ownerDocument) == null ? void 0 : t.body,
        a = Pr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        s = Pr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        l = -n.scrollLeft + c0(e),
        i = -n.scrollTop;
    return (
        Zt(o || r).direction === 'rtl' && (l += Pr(r.clientWidth, o ? o.clientWidth : 0) - a),
        { width: a, height: s, x: l, y: i }
    );
}
function p0(e) {
    var t = Zt(e),
        r = t.overflow,
        n = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Fu(e) {
    return ['html', 'body', '#document'].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : xt(e) && p0(e) ? e : Fu(_a(e));
}
function Rn(e, t) {
    var r;
    t === void 0 && (t = []);
    var n = Fu(e),
        o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
        a = Vt(n),
        s = o ? [a].concat(a.visualViewport || [], p0(n) ? n : []) : n,
        l = t.concat(s);
    return o ? l : l.concat(Rn(_a(s)));
}
function h2(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Mw(e) {
    var t = _n(e);
    return (
        (t.top = t.top + e.clientTop),
        (t.left = t.left + e.clientLeft),
        (t.bottom = t.top + e.clientHeight),
        (t.right = t.left + e.clientWidth),
        (t.width = e.clientWidth),
        (t.height = e.clientHeight),
        (t.x = t.left),
        (t.y = t.top),
        t
    );
}
function js(e, t) {
    return t === Bu ? h2(xw(e)) : fn(t) ? Mw(t) : h2(Cw(Er(e)));
}
function Ew(e) {
    var t = Rn(_a(e)),
        r = ['absolute', 'fixed'].indexOf(Zt(e).position) >= 0,
        n = r && xt(e) ? oo(e) : e;
    return fn(n)
        ? t.filter(function (o) {
              return fn(o) && Vu(o, n) && Dt(o) !== 'body';
          })
        : [];
}
function Sw(e, t, r) {
    var n = t === 'clippingParents' ? Ew(e) : [].concat(t),
        o = [].concat(n, [r]),
        a = o[0],
        s = o.reduce(function (l, i) {
            var u = js(e, i);
            return (
                (l.top = Pr(u.top, l.top)),
                (l.right = No(u.right, l.right)),
                (l.bottom = No(u.bottom, l.bottom)),
                (l.left = Pr(u.left, l.left)),
                l
            );
        }, js(e, a));
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
}
function $u(e) {
    var t = e.reference,
        r = e.element,
        n = e.placement,
        o = n ? $t(n) : null,
        a = n ? vn(n) : null,
        s = t.x + t.width / 2 - r.width / 2,
        l = t.y + t.height / 2 - r.height / 2,
        i;
    switch (o) {
        case it:
            i = { x: s, y: t.y - r.height };
            break;
        case St:
            i = { x: s, y: t.y + t.height };
            break;
        case At:
            i = { x: t.x + t.width, y: l };
            break;
        case ut:
            i = { x: t.x - r.width, y: l };
            break;
        default:
            i = { x: t.x, y: t.y };
    }
    var u = o ? i0(o) : null;
    if (u != null) {
        var c = u === 'y' ? 'height' : 'width';
        switch (a) {
            case pn:
                i[u] = i[u] - (t[c] / 2 - r[c] / 2);
                break;
            case Yn:
                i[u] = i[u] + (t[c] / 2 - r[c] / 2);
                break;
        }
    }
    return i;
}
function Jn(e, t) {
    t === void 0 && (t = {});
    var r = t,
        n = r.placement,
        o = n === void 0 ? e.placement : n,
        a = r.boundary,
        s = a === void 0 ? Y7 : a,
        l = r.rootBoundary,
        i = l === void 0 ? Bu : l,
        u = r.elementContext,
        c = u === void 0 ? Sn : u,
        p = r.altBoundary,
        d = p === void 0 ? !1 : p,
        m = r.padding,
        _ = m === void 0 ? 0 : m,
        g = Pu(typeof _ != 'number' ? _ : Iu(_, no)),
        x = c === Sn ? J7 : Sn,
        y = e.rects.popper,
        C = e.elements[d ? x : c],
        E = Sw(fn(C) ? C : C.contextElement || Er(e.elements.popper), s, i),
        S = _n(e.elements.reference),
        H = $u({ reference: S, element: y, strategy: 'absolute', placement: o }),
        z = h2(Object.assign({}, y, H)),
        O = c === Sn ? z : S,
        T = {
            top: E.top - O.top + g.top,
            bottom: O.bottom - E.bottom + g.bottom,
            left: E.left - O.left + g.left,
            right: O.right - E.right + g.right,
        },
        V = e.modifiersData.offset;
    if (c === Sn && V) {
        var F = V[o];
        Object.keys(T).forEach(function (j) {
            var R = [At, St].indexOf(j) >= 0 ? 1 : -1,
                Q = [it, St].indexOf(j) >= 0 ? 'y' : 'x';
            T[j] += F[Q] * R;
        });
    }
    return T;
}
function Aw(e, t) {
    t === void 0 && (t = {});
    var r = t,
        n = r.placement,
        o = r.boundary,
        a = r.rootBoundary,
        s = r.padding,
        l = r.flipVariations,
        i = r.allowedAutoPlacements,
        u = i === void 0 ? a0 : i,
        c = vn(n),
        p = c
            ? l
                ? Fs
                : Fs.filter(function (_) {
                      return vn(_) === c;
                  })
            : no,
        d = p.filter(function (_) {
            return u.indexOf(_) >= 0;
        });
    d.length === 0 && (d = p);
    var m = d.reduce(function (_, g) {
        return (_[g] = Jn(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[$t(g)]), _;
    }, {});
    return Object.keys(m).sort(function (_, g) {
        return m[_] - m[g];
    });
}
function zw(e) {
    if ($t(e) === o0) return [];
    var t = Ho(e);
    return [Ds(e), t, Ds(t)];
}
function Tw(e) {
    var t = e.state,
        r = e.options,
        n = e.name;
    if (!t.modifiersData[n]._skip) {
        for (
            var o = r.mainAxis,
                a = o === void 0 ? !0 : o,
                s = r.altAxis,
                l = s === void 0 ? !0 : s,
                i = r.fallbackPlacements,
                u = r.padding,
                c = r.boundary,
                p = r.rootBoundary,
                d = r.altBoundary,
                m = r.flipVariations,
                _ = m === void 0 ? !0 : m,
                g = r.allowedAutoPlacements,
                x = t.options.placement,
                y = $t(x),
                C = y === x,
                E = i || (C || !_ ? [Ho(x)] : zw(x)),
                S = [x].concat(E).reduce(function (Se, tt) {
                    return Se.concat(
                        $t(tt) === o0
                            ? Aw(t, {
                                  placement: tt,
                                  boundary: c,
                                  rootBoundary: p,
                                  padding: u,
                                  flipVariations: _,
                                  allowedAutoPlacements: g,
                              })
                            : tt
                    );
                }, []),
                H = t.rects.reference,
                z = t.rects.popper,
                O = new Map(),
                T = !0,
                V = S[0],
                F = 0;
            F < S.length;
            F++
        ) {
            var j = S[F],
                R = $t(j),
                Q = vn(j) === pn,
                q = [it, St].indexOf(R) >= 0,
                W = q ? 'width' : 'height',
                N = Jn(t, { placement: j, boundary: c, rootBoundary: p, altBoundary: d, padding: u }),
                B = q ? (Q ? At : ut) : Q ? St : it;
            H[W] > z[W] && (B = Ho(B));
            var J = Ho(B),
                he = [];
            if (
                (a && he.push(N[R] <= 0),
                l && he.push(N[B] <= 0, N[J] <= 0),
                he.every(function (Se) {
                    return Se;
                }))
            ) {
                (V = j), (T = !1);
                break;
            }
            O.set(j, he);
        }
        if (T)
            for (
                var oe = _ ? 3 : 1,
                    _e = function (Se) {
                        var tt = S.find(function (De) {
                            var k = O.get(De);
                            if (k)
                                return k.slice(0, Se).every(function (te) {
                                    return te;
                                });
                        });
                        if (tt) return (V = tt), 'break';
                    },
                    ve = oe;
                ve > 0;
                ve--
            ) {
                var Ve = _e(ve);
                if (Ve === 'break') break;
            }
        t.placement !== V && ((t.modifiersData[n]._skip = !0), (t.placement = V), (t.reset = !0));
    }
}
var Hw = { name: 'flip', enabled: !0, phase: 'main', fn: Tw, requiresIfExists: ['offset'], data: { _skip: !1 } };
function qs(e, t, r) {
    return (
        r === void 0 && (r = { x: 0, y: 0 }),
        {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
        }
    );
}
function Ks(e) {
    return [it, At, St, ut].some(function (t) {
        return e[t] >= 0;
    });
}
function Bw(e) {
    var t = e.state,
        r = e.name,
        n = t.rects.reference,
        o = t.rects.popper,
        a = t.modifiersData.preventOverflow,
        s = Jn(t, { elementContext: 'reference' }),
        l = Jn(t, { altBoundary: !0 }),
        i = qs(s, n),
        u = qs(l, o, a),
        c = Ks(i),
        p = Ks(u);
    (t.modifiersData[r] = {
        referenceClippingOffsets: i,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: p,
    }),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            'data-popper-reference-hidden': c,
            'data-popper-escaped': p,
        }));
}
var Lw = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Bw };
function Vw(e, t, r) {
    var n = $t(e),
        o = [ut, it].indexOf(n) >= 0 ? -1 : 1,
        a = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
        s = a[0],
        l = a[1];
    return (s = s || 0), (l = (l || 0) * o), [ut, At].indexOf(n) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function Ow(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        o = r.offset,
        a = o === void 0 ? [0, 0] : o,
        s = a0.reduce(function (c, p) {
            return (c[p] = Vw(p, t.rects, a)), c;
        }, {}),
        l = s[t.placement],
        i = l.x,
        u = l.y;
    t.modifiersData.popperOffsets != null &&
        ((t.modifiersData.popperOffsets.x += i), (t.modifiersData.popperOffsets.y += u)),
        (t.modifiersData[n] = s);
}
var Pw = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Ow };
function Iw(e) {
    var t = e.state,
        r = e.name;
    t.modifiersData[r] = $u({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: 'absolute',
        placement: t.placement,
    });
}
var Nu = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Iw, data: {} };
function kw(e) {
    return e === 'x' ? 'y' : 'x';
}
function Rw(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        o = r.mainAxis,
        a = o === void 0 ? !0 : o,
        s = r.altAxis,
        l = s === void 0 ? !1 : s,
        i = r.boundary,
        u = r.rootBoundary,
        c = r.altBoundary,
        p = r.padding,
        d = r.tether,
        m = d === void 0 ? !0 : d,
        _ = r.tetherOffset,
        g = _ === void 0 ? 0 : _,
        x = Jn(t, { boundary: i, rootBoundary: u, padding: p, altBoundary: c }),
        y = $t(t.placement),
        C = vn(t.placement),
        E = !C,
        S = i0(y),
        H = kw(S),
        z = t.modifiersData.popperOffsets,
        O = t.rects.reference,
        T = t.rects.popper,
        V = typeof g == 'function' ? g(Object.assign({}, t.rects, { placement: t.placement })) : g,
        F = typeof V == 'number' ? { mainAxis: V, altAxis: V } : Object.assign({ mainAxis: 0, altAxis: 0 }, V),
        j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        R = { x: 0, y: 0 };
    if (z) {
        if (a) {
            var Q,
                q = S === 'y' ? it : ut,
                W = S === 'y' ? St : At,
                N = S === 'y' ? 'height' : 'width',
                B = z[S],
                J = B + x[q],
                he = B - x[W],
                oe = m ? -T[N] / 2 : 0,
                _e = C === pn ? O[N] : T[N],
                ve = C === pn ? -T[N] : -O[N],
                Ve = t.elements.arrow,
                Se = m && Ve ? l0(Ve) : { width: 0, height: 0 },
                tt = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : Ou(),
                De = tt[q],
                k = tt[W],
                te = kn(0, O[N], Se[N]),
                X = E ? O[N] / 2 - oe - te - De - F.mainAxis : _e - te - De - F.mainAxis,
                ae = E ? -O[N] / 2 + oe + te + k + F.mainAxis : ve + te + k + F.mainAxis,
                Me = t.elements.arrow && oo(t.elements.arrow),
                Pe = Me ? (S === 'y' ? Me.clientTop || 0 : Me.clientLeft || 0) : 0,
                b = (Q = j == null ? void 0 : j[S]) != null ? Q : 0,
                M = B + X - b - Pe,
                L = B + ae - b,
                $ = kn(m ? No(J, M) : J, B, m ? Pr(he, L) : he);
            (z[S] = $), (R[S] = $ - B);
        }
        if (l) {
            var I,
                Y = S === 'x' ? it : ut,
                ee = S === 'x' ? St : At,
                U = z[H],
                Z = H === 'y' ? 'height' : 'width',
                K = U + x[Y],
                ne = U - x[ee],
                ue = [it, ut].indexOf(y) !== -1,
                ie = (I = j == null ? void 0 : j[H]) != null ? I : 0,
                fe = ue ? K : U - O[Z] - T[Z] - ie + F.altAxis,
                ge = ue ? U + O[Z] + T[Z] - ie - F.altAxis : ne,
                Ae = m && ue ? pw(fe, U, ge) : kn(m ? fe : K, U, m ? ge : ne);
            (z[H] = Ae), (R[H] = Ae - U);
        }
        t.modifiersData[n] = R;
    }
}
var Fw = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: Rw, requiresIfExists: ['offset'] };
function $w(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Nw(e) {
    return e === Vt(e) || !xt(e) ? u0(e) : $w(e);
}
function Dw(e) {
    var t = e.getBoundingClientRect(),
        r = dn(t.width) / e.offsetWidth || 1,
        n = dn(t.height) / e.offsetHeight || 1;
    return r !== 1 || n !== 1;
}
function jw(e, t, r) {
    r === void 0 && (r = !1);
    var n = xt(t),
        o = xt(t) && Dw(t),
        a = Er(t),
        s = _n(e, o),
        l = { scrollLeft: 0, scrollTop: 0 },
        i = { x: 0, y: 0 };
    return (
        (n || (!n && !r)) &&
            ((Dt(t) !== 'body' || p0(a)) && (l = Nw(t)),
            xt(t) ? ((i = _n(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop)) : a && (i.x = c0(a))),
        { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height }
    );
}
function qw(e) {
    var t = new Map(),
        r = new Set(),
        n = [];
    e.forEach(function (a) {
        t.set(a.name, a);
    });
    function o(a) {
        r.add(a.name);
        var s = [].concat(a.requires || [], a.requiresIfExists || []);
        s.forEach(function (l) {
            if (!r.has(l)) {
                var i = t.get(l);
                i && o(i);
            }
        }),
            n.push(a);
    }
    return (
        e.forEach(function (a) {
            r.has(a.name) || o(a);
        }),
        n
    );
}
function Kw(e) {
    var t = qw(e);
    return sw.reduce(function (r, n) {
        return r.concat(
            t.filter(function (o) {
                return o.phase === n;
            })
        );
    }, []);
}
function Uw(e) {
    var t;
    return function () {
        return (
            t ||
                (t = new Promise(function (r) {
                    Promise.resolve().then(function () {
                        (t = void 0), r(e());
                    });
                })),
            t
        );
    };
}
function Ww(e) {
    var t = e.reduce(function (r, n) {
        var o = r[n.name];
        return (
            (r[n.name] = o
                ? Object.assign({}, o, n, {
                      options: Object.assign({}, o.options, n.options),
                      data: Object.assign({}, o.data, n.data),
                  })
                : n),
            r
        );
    }, {});
    return Object.keys(t).map(function (r) {
        return t[r];
    });
}
var Us = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Ws() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function (n) {
        return !(n && typeof n.getBoundingClientRect == 'function');
    });
}
function f0(e) {
    e === void 0 && (e = {});
    var t = e,
        r = t.defaultModifiers,
        n = r === void 0 ? [] : r,
        o = t.defaultOptions,
        a = o === void 0 ? Us : o;
    return function (s, l, i) {
        i === void 0 && (i = a);
        var u = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, Us, a),
                modifiersData: {},
                elements: { reference: s, popper: l },
                attributes: {},
                styles: {},
            },
            c = [],
            p = !1,
            d = {
                state: u,
                setOptions: function (g) {
                    var x = typeof g == 'function' ? g(u.options) : g;
                    _(),
                        (u.options = Object.assign({}, a, u.options, x)),
                        (u.scrollParents = {
                            reference: fn(s) ? Rn(s) : s.contextElement ? Rn(s.contextElement) : [],
                            popper: Rn(l),
                        });
                    var y = Kw(Ww([].concat(n, u.options.modifiers)));
                    return (
                        (u.orderedModifiers = y.filter(function (C) {
                            return C.enabled;
                        })),
                        m(),
                        d.update()
                    );
                },
                forceUpdate: function () {
                    if (!p) {
                        var g = u.elements,
                            x = g.reference,
                            y = g.popper;
                        if (Ws(x, y)) {
                            (u.rects = { reference: jw(x, oo(y), u.options.strategy === 'fixed'), popper: l0(y) }),
                                (u.reset = !1),
                                (u.placement = u.options.placement),
                                u.orderedModifiers.forEach(function (T) {
                                    return (u.modifiersData[T.name] = Object.assign({}, T.data));
                                });
                            for (var C = 0; C < u.orderedModifiers.length; C++) {
                                if (u.reset === !0) {
                                    (u.reset = !1), (C = -1);
                                    continue;
                                }
                                var E = u.orderedModifiers[C],
                                    S = E.fn,
                                    H = E.options,
                                    z = H === void 0 ? {} : H,
                                    O = E.name;
                                typeof S == 'function' && (u = S({ state: u, options: z, name: O, instance: d }) || u);
                            }
                        }
                    }
                },
                update: Uw(function () {
                    return new Promise(function (g) {
                        d.forceUpdate(), g(u);
                    });
                }),
                destroy: function () {
                    _(), (p = !0);
                },
            };
        if (!Ws(s, l)) return d;
        d.setOptions(i).then(function (g) {
            !p && i.onFirstUpdate && i.onFirstUpdate(g);
        });
        function m() {
            u.orderedModifiers.forEach(function (g) {
                var x = g.name,
                    y = g.options,
                    C = y === void 0 ? {} : y,
                    E = g.effect;
                if (typeof E == 'function') {
                    var S = E({ state: u, name: x, instance: d, options: C }),
                        H = function () {};
                    c.push(S || H);
                }
            });
        }
        function _() {
            c.forEach(function (g) {
                return g();
            }),
                (c = []);
        }
        return d;
    };
}
f0();
var Gw = [Ru, Nu, ku, Lu];
f0({ defaultModifiers: Gw });
var Yw = [Ru, Nu, ku, Lu, Pw, Hw, Fw, vw, Lw],
    Jw = f0({ defaultModifiers: Yw });
const Zw = (e, t, r = {}) => {
    const n = {
            name: 'updateState',
            enabled: !0,
            phase: 'write',
            fn: ({ state: i }) => {
                const u = Qw(i);
                Object.assign(s.value, u);
            },
            requires: ['computeStyles'],
        },
        o = P(() => {
            const { onFirstUpdate: i, placement: u, strategy: c, modifiers: p } = A(r);
            return {
                onFirstUpdate: i,
                placement: u || 'bottom',
                strategy: c || 'absolute',
                modifiers: [...(p || []), n, { name: 'applyStyles', enabled: !1 }],
            };
        }),
        a = Jo(),
        s = D({
            styles: { popper: { position: A(o).strategy, left: '0', top: '0' }, arrow: { position: 'absolute' } },
            attributes: {},
        }),
        l = () => {
            !a.value || (a.value.destroy(), (a.value = void 0));
        };
    return (
        ce(
            o,
            (i) => {
                const u = A(a);
                u && u.setOptions(i);
            },
            { deep: !0 }
        ),
        ce([e, t], ([i, u]) => {
            l(), !(!i || !u) && (a.value = Jw(i, u, A(o)));
        }),
        ot(() => {
            l();
        }),
        {
            state: P(() => {
                var i;
                return { ...(((i = A(a)) == null ? void 0 : i.state) || {}) };
            }),
            styles: P(() => A(s).styles),
            attributes: P(() => A(s).attributes),
            update: () => {
                var i;
                return (i = A(a)) == null ? void 0 : i.update();
            },
            forceUpdate: () => {
                var i;
                return (i = A(a)) == null ? void 0 : i.forceUpdate();
            },
            instanceRef: P(() => A(a)),
        }
    );
};
function Qw(e) {
    const t = Object.keys(e.elements),
        r = _2(t.map((o) => [o, e.styles[o] || {}])),
        n = _2(t.map((o) => [o, e.attributes[o]]));
    return { styles: r, attributes: n };
}
function Gs() {
    let e;
    const t = (n, o) => {
            r(), (e = window.setTimeout(n, o));
        },
        r = () => window.clearTimeout(e);
    return yn(() => r()), { registerTimeout: t, cancelTimeout: r };
}
const Ys = { prefix: Math.floor(Math.random() * 1e4), current: 0 },
    Xw = Symbol('elIdInjection'),
    Du = () => (Ne() ? le(Xw, Ys) : Ys),
    va = (e) => {
        const t = Du(),
            r = n0();
        return P(() => A(e) || `${r.value}-id-${t.prefix}-${t.current++}`);
    };
let Yr = [];
const Js = (e) => {
        const t = e;
        t.key === we.esc && Yr.forEach((r) => r(t));
    },
    ey = (e) => {
        Ge(() => {
            Yr.length === 0 && document.addEventListener('keydown', Js), Xe && Yr.push(e);
        }),
            ot(() => {
                (Yr = Yr.filter((t) => t !== e)), Yr.length === 0 && Xe && document.removeEventListener('keydown', Js);
            });
    };
let Zs;
const ju = () => {
        const e = n0(),
            t = Du(),
            r = P(() => `${e.value}-popper-container-${t.prefix}`),
            n = P(() => `#${r.value}`);
        return { id: r, selector: n };
    },
    ty = (e) => {
        const t = document.createElement('div');
        return (t.id = e), document.body.appendChild(t), t;
    },
    ry = () => {
        const { id: e, selector: t } = ju();
        return (
            Ei(() => {
                !Xe || (!Zs && !document.body.querySelector(t.value) && (Zs = ty(e.value)));
            }),
            { id: e, selector: t }
        );
    },
    ny = Le({
        showAfter: { type: Number, default: 0 },
        hideAfter: { type: Number, default: 200 },
        autoClose: { type: Number, default: 0 },
    }),
    oy = ({ showAfter: e, hideAfter: t, autoClose: r, open: n, close: o }) => {
        const { registerTimeout: a } = Gs(),
            { registerTimeout: s, cancelTimeout: l } = Gs();
        return {
            onOpen: (c) => {
                a(() => {
                    n(c);
                    const p = A(r);
                    vt(p) &&
                        p > 0 &&
                        s(() => {
                            o(c);
                        }, p);
                }, A(e));
            },
            onClose: (c) => {
                l(),
                    a(() => {
                        o(c);
                    }, A(t));
            },
        };
    },
    qu = Symbol('elForwardRef'),
    ay = (e) => {
        $e(qu, {
            setForwardRef: (r) => {
                e.value = r;
            },
        });
    },
    sy = (e) => ({
        mounted(t) {
            e(t);
        },
        updated(t) {
            e(t);
        },
        unmounted() {
            e(null);
        },
    }),
    Qs = { current: 0 },
    Xs = D(0),
    Ku = 2e3,
    el = Symbol('elZIndexContextKey'),
    Uu = Symbol('zIndexContextKey'),
    Wu = (e) => {
        const t = Ne() ? le(el, Qs) : Qs,
            r = e || (Ne() ? le(Uu, void 0) : void 0),
            n = P(() => {
                const s = A(r);
                return vt(s) ? s : Ku;
            }),
            o = P(() => n.value + Xs.value),
            a = () => (t.current++, (Xs.value = t.current), o.value);
        return !Xe && le(el), { initialZIndex: n, currentZIndex: o, nextZIndex: a };
    },
    ly = (e, t, r) =>
        In(e.subTree)
            .filter((a) => {
                var s;
                return mt(a) && ((s = a.type) == null ? void 0 : s.name) === t && !!a.component;
            })
            .map((a) => a.component.uid)
            .map((a) => r[a])
            .filter((a) => !!a),
    iy = (e, t) => {
        const r = {},
            n = Jo([]);
        return {
            children: n,
            addChild: (s) => {
                (r[s.uid] = s), (n.value = ly(e, t, r));
            },
            removeChild: (s) => {
                delete r[s], (n.value = n.value.filter((l) => l.uid !== s));
            },
        };
    },
    Gu = da({ type: String, values: Su, required: !1 }),
    Yu = Symbol('size'),
    uy = () => {
        const e = le(Yu, {});
        return P(() => A(e.size) || '');
    },
    cy = ['', void 0, null],
    py = void 0,
    fy = Le({
        emptyValues: Array,
        valueOnClear: {
            type: [String, Number, Boolean, Function],
            default: void 0,
            validator: (e) => (pe(e) ? !e() : !e),
        },
    }),
    dS = (e, t) => {
        const r = ha();
        r.value = r.value || {};
        const n = P(() => e.emptyValues || r.value.emptyValues || cy),
            o = P(() =>
                pe(e.valueOnClear)
                    ? e.valueOnClear()
                    : e.valueOnClear !== void 0
                    ? e.valueOnClear
                    : pe(r.value.valueOnClear)
                    ? r.value.valueOnClear()
                    : r.value.valueOnClear !== void 0
                    ? r.value.valueOnClear
                    : t !== void 0
                    ? t
                    : py
            ),
            a = (s) => n.value.includes(s);
        return n.value.includes(o.value), { emptyValues: n, valueOnClear: o, isEmptyValue: a };
    },
    Ju = Symbol(),
    Do = D();
function ha(e, t = void 0) {
    const r = Ne() ? le(Ju, Do) : Do;
    return e
        ? P(() => {
              var n, o;
              return (o = (n = r.value) == null ? void 0 : n[e]) != null ? o : t;
          })
        : r;
}
function _S(e, t) {
    const r = ha(),
        n = ze(
            e,
            P(() => {
                var l;
                return ((l = r.value) == null ? void 0 : l.namespace) || To;
            })
        ),
        o = zu(
            P(() => {
                var l;
                return (l = r.value) == null ? void 0 : l.locale;
            })
        ),
        a = Wu(
            P(() => {
                var l;
                return ((l = r.value) == null ? void 0 : l.zIndex) || Ku;
            })
        ),
        s = P(() => {
            var l;
            return A(t) || ((l = r.value) == null ? void 0 : l.size) || '';
        });
    return Zu(P(() => A(r) || {})), { ns: n, locale: o, zIndex: a, size: s };
}
const Zu = (e, t, r = !1) => {
        var n;
        const o = !!Ne(),
            a = o ? ha() : void 0,
            s = (n = t == null ? void 0 : t.provide) != null ? n : o ? $e : void 0;
        if (!s) return;
        const l = P(() => {
            const i = A(e);
            return a != null && a.value ? dy(a.value, i) : i;
        });
        return (
            s(Ju, l),
            s(
                Au,
                P(() => l.value.locale)
            ),
            s(
                Tu,
                P(() => l.value.namespace)
            ),
            s(
                Uu,
                P(() => l.value.zIndex)
            ),
            s(Yu, { size: P(() => l.value.size || '') }),
            (r || !Do.value) && (Do.value = l.value),
            l
        );
    },
    dy = (e, t) => {
        const r = [...new Set([...Rs(e), ...Rs(t)])],
            n = {};
        for (const o of r) n[o] = t[o] !== void 0 ? t[o] : e[o];
        return n;
    },
    _y = Le({
        a11y: { type: Boolean, default: !0 },
        locale: { type: de(Object) },
        size: Gu,
        button: { type: de(Object) },
        experimentalFeatures: { type: de(Object) },
        keyboardNavigation: { type: Boolean, default: !0 },
        message: { type: de(Object) },
        zIndex: Number,
        namespace: { type: String, default: 'el' },
        ...fy,
    }),
    vy = {},
    hy = h({
        name: 'ElConfigProvider',
        props: _y,
        setup(e, { slots: t }) {
            ce(
                () => e.message,
                (n) => {
                    Object.assign(vy, n != null ? n : {});
                },
                { immediate: !0, deep: !0 }
            );
            const r = Zu(e);
            return () => ye(t, 'default', { config: r == null ? void 0 : r.value });
        },
    }),
    my = jt(hy);
var Te = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, o] of t) r[n] = o;
    return r;
};
const gy = Le({ size: { type: de([Number, String]) }, color: { type: String } }),
    wy = h({ name: 'ElIcon', inheritAttrs: !1 }),
    yy = h({
        ...wy,
        props: gy,
        setup(e) {
            const t = e,
                r = ze('icon'),
                n = P(() => {
                    const { size: o, color: a } = t;
                    return !o && !a ? {} : { fontSize: v2(o) ? void 0 : Gn(o), '--color': a };
                });
            return (o, a) => (
                v(), w('i', gt({ class: A(r).b(), style: A(n) }, o.$attrs), [ye(o.$slots, 'default')], 16)
            );
        },
    });
var by = Te(yy, [['__file', 'icon.vue']]);
const ct = jt(by),
    d0 = Symbol('formContextKey'),
    jo = Symbol('formItemContextKey'),
    Qu = (e, t = {}) => {
        const r = D(void 0),
            n = t.prop ? r : Hu('size'),
            o = t.global ? r : uy(),
            a = t.form ? { size: void 0 } : le(d0, void 0),
            s = t.formItem ? { size: void 0 } : le(jo, void 0);
        return P(
            () => n.value || A(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || o.value || ''
        );
    },
    Xu = (e) => {
        const t = Hu('disabled'),
            r = le(d0, void 0);
        return P(() => t.value || A(e) || (r == null ? void 0 : r.disabled) || !1);
    },
    xy = () => {
        const e = le(d0, void 0),
            t = le(jo, void 0);
        return { form: e, formItem: t };
    },
    vS = (e, { formItemContext: t, disableIdGeneration: r, disableIdManagement: n }) => {
        r || (r = D(!1)), n || (n = D(!1));
        const o = D();
        let a;
        const s = P(() => {
            var l;
            return !!(!e.label && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
        });
        return (
            Ge(() => {
                a = ce(
                    [nt(e, 'id'), r],
                    ([l, i]) => {
                        const u = l != null ? l : i ? void 0 : va().value;
                        u !== o.value &&
                            (t != null &&
                                t.removeInputId &&
                                (o.value && t.removeInputId(o.value),
                                !(n != null && n.value) && !i && u && t.addInputId(u)),
                            (o.value = u));
                    },
                    { immediate: !0 }
                );
            }),
            to(() => {
                a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
            }),
            { isLabeledByFormItem: s, inputId: o }
        );
    },
    Wr = 4,
    Cy = {
        vertical: {
            offset: 'offsetHeight',
            scroll: 'scrollTop',
            scrollSize: 'scrollHeight',
            size: 'height',
            key: 'vertical',
            axis: 'Y',
            client: 'clientY',
            direction: 'top',
        },
        horizontal: {
            offset: 'offsetWidth',
            scroll: 'scrollLeft',
            scrollSize: 'scrollWidth',
            size: 'width',
            key: 'horizontal',
            axis: 'X',
            client: 'clientX',
            direction: 'left',
        },
    },
    My = ({ move: e, size: t, bar: r }) => ({ [r.size]: t, transform: `translate${r.axis}(${e}%)` }),
    _0 = Symbol('scrollbarContextKey'),
    Ey = Le({ vertical: Boolean, size: String, move: Number, ratio: { type: Number, required: !0 }, always: Boolean }),
    Sy = 'Thumb',
    Ay = h({
        __name: 'thumb',
        props: Ey,
        setup(e) {
            const t = e,
                r = le(_0),
                n = ze('scrollbar');
            r || Mr(Sy, 'can not inject scrollbar context');
            const o = D(),
                a = D(),
                s = D({}),
                l = D(!1);
            let i = !1,
                u = !1,
                c = Xe ? document.onselectstart : null;
            const p = P(() => Cy[t.vertical ? 'vertical' : 'horizontal']),
                d = P(() => My({ size: t.size, move: t.move, bar: p.value })),
                m = P(
                    () =>
                        o.value[p.value.offset] ** 2 /
                        r.wrapElement[p.value.scrollSize] /
                        t.ratio /
                        a.value[p.value.offset]
                ),
                _ = (z) => {
                    var O;
                    if ((z.stopPropagation(), z.ctrlKey || [1, 2].includes(z.button))) return;
                    (O = window.getSelection()) == null || O.removeAllRanges(), x(z);
                    const T = z.currentTarget;
                    !T ||
                        (s.value[p.value.axis] =
                            T[p.value.offset] - (z[p.value.client] - T.getBoundingClientRect()[p.value.direction]));
                },
                g = (z) => {
                    if (!a.value || !o.value || !r.wrapElement) return;
                    const O = Math.abs(z.target.getBoundingClientRect()[p.value.direction] - z[p.value.client]),
                        T = a.value[p.value.offset] / 2,
                        V = ((O - T) * 100 * m.value) / o.value[p.value.offset];
                    r.wrapElement[p.value.scroll] = (V * r.wrapElement[p.value.scrollSize]) / 100;
                },
                x = (z) => {
                    z.stopImmediatePropagation(),
                        (i = !0),
                        document.addEventListener('mousemove', y),
                        document.addEventListener('mouseup', C),
                        (c = document.onselectstart),
                        (document.onselectstart = () => !1);
                },
                y = (z) => {
                    if (!o.value || !a.value || i === !1) return;
                    const O = s.value[p.value.axis];
                    if (!O) return;
                    const T = (o.value.getBoundingClientRect()[p.value.direction] - z[p.value.client]) * -1,
                        V = a.value[p.value.offset] - O,
                        F = ((T - V) * 100 * m.value) / o.value[p.value.offset];
                    r.wrapElement[p.value.scroll] = (F * r.wrapElement[p.value.scrollSize]) / 100;
                },
                C = () => {
                    (i = !1),
                        (s.value[p.value.axis] = 0),
                        document.removeEventListener('mousemove', y),
                        document.removeEventListener('mouseup', C),
                        H(),
                        u && (l.value = !1);
                },
                E = () => {
                    (u = !1), (l.value = !!t.size);
                },
                S = () => {
                    (u = !0), (l.value = i);
                };
            ot(() => {
                H(), document.removeEventListener('mouseup', C);
            });
            const H = () => {
                document.onselectstart !== c && (document.onselectstart = c);
            };
            return (
                Ft(nt(r, 'scrollbarElement'), 'mousemove', E),
                Ft(nt(r, 'scrollbarElement'), 'mouseleave', S),
                (z, O) => (
                    v(),
                    me(
                        Nr,
                        { name: A(n).b('fade'), persisted: '' },
                        {
                            default: re(() => [
                                kt(
                                    f(
                                        'div',
                                        {
                                            ref_key: 'instance',
                                            ref: o,
                                            class: ke([A(n).e('bar'), A(n).is(A(p).key)]),
                                            onMousedown: g,
                                        },
                                        [
                                            f(
                                                'div',
                                                {
                                                    ref_key: 'thumb',
                                                    ref: a,
                                                    class: ke(A(n).e('thumb')),
                                                    style: Mt(A(d)),
                                                    onMousedown: _,
                                                },
                                                null,
                                                38
                                            ),
                                        ],
                                        34
                                    ),
                                    [[aa, z.always || l.value]]
                                ),
                            ]),
                            _: 1,
                        },
                        8,
                        ['name']
                    )
                )
            );
        },
    });
var tl = Te(Ay, [['__file', 'thumb.vue']]);
const zy = Le({ always: { type: Boolean, default: !0 }, minSize: { type: Number, required: !0 } }),
    Ty = h({
        __name: 'bar',
        props: zy,
        setup(e, { expose: t }) {
            const r = e,
                n = le(_0),
                o = D(0),
                a = D(0),
                s = D(''),
                l = D(''),
                i = D(1),
                u = D(1);
            return (
                t({
                    handleScroll: (d) => {
                        if (d) {
                            const m = d.offsetHeight - Wr,
                                _ = d.offsetWidth - Wr;
                            (a.value = ((d.scrollTop * 100) / m) * i.value),
                                (o.value = ((d.scrollLeft * 100) / _) * u.value);
                        }
                    },
                    update: () => {
                        const d = n == null ? void 0 : n.wrapElement;
                        if (!d) return;
                        const m = d.offsetHeight - Wr,
                            _ = d.offsetWidth - Wr,
                            g = m ** 2 / d.scrollHeight,
                            x = _ ** 2 / d.scrollWidth,
                            y = Math.max(g, r.minSize),
                            C = Math.max(x, r.minSize);
                        (i.value = g / (m - g) / (y / (m - y))),
                            (u.value = x / (_ - x) / (C / (_ - C))),
                            (l.value = y + Wr < m ? `${y}px` : ''),
                            (s.value = C + Wr < _ ? `${C}px` : '');
                    },
                }),
                (d, m) => (
                    v(),
                    w(
                        Oe,
                        null,
                        [
                            G(tl, { move: o.value, ratio: u.value, size: s.value, always: d.always }, null, 8, [
                                'move',
                                'ratio',
                                'size',
                                'always',
                            ]),
                            G(
                                tl,
                                { move: a.value, ratio: i.value, size: l.value, vertical: '', always: d.always },
                                null,
                                8,
                                ['move', 'ratio', 'size', 'always']
                            ),
                        ],
                        64
                    )
                )
            );
        },
    });
var Hy = Te(Ty, [['__file', 'bar.vue']]);
const By = Le({
        height: { type: [String, Number], default: '' },
        maxHeight: { type: [String, Number], default: '' },
        native: { type: Boolean, default: !1 },
        wrapStyle: { type: de([String, Object, Array]), default: '' },
        wrapClass: { type: [String, Array], default: '' },
        viewClass: { type: [String, Array], default: '' },
        viewStyle: { type: [String, Array, Object], default: '' },
        noresize: Boolean,
        tag: { type: String, default: 'div' },
        always: Boolean,
        minSize: { type: Number, default: 20 },
        id: String,
        role: String,
        ariaLabel: String,
        ariaOrientation: { type: String, values: ['horizontal', 'vertical'] },
    }),
    Ly = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(vt) },
    Vy = 'ElScrollbar',
    Oy = h({ name: Vy }),
    Py = h({
        ...Oy,
        props: By,
        emits: Ly,
        setup(e, { expose: t, emit: r }) {
            const n = e,
                o = ze('scrollbar');
            let a, s;
            const l = D(),
                i = D(),
                u = D(),
                c = D(),
                p = P(() => {
                    const E = {};
                    return (
                        n.height && (E.height = Gn(n.height)),
                        n.maxHeight && (E.maxHeight = Gn(n.maxHeight)),
                        [n.wrapStyle, E]
                    );
                }),
                d = P(() => [n.wrapClass, o.e('wrap'), { [o.em('wrap', 'hidden-default')]: !n.native }]),
                m = P(() => [o.e('view'), n.viewClass]),
                _ = () => {
                    var E;
                    i.value &&
                        ((E = c.value) == null || E.handleScroll(i.value),
                        r('scroll', { scrollTop: i.value.scrollTop, scrollLeft: i.value.scrollLeft }));
                };
            function g(E, S) {
                Ee(E) ? i.value.scrollTo(E) : vt(E) && vt(S) && i.value.scrollTo(E, S);
            }
            const x = (E) => {
                    !vt(E) || (i.value.scrollTop = E);
                },
                y = (E) => {
                    !vt(E) || (i.value.scrollLeft = E);
                },
                C = () => {
                    var E;
                    (E = c.value) == null || E.update();
                };
            return (
                ce(
                    () => n.noresize,
                    (E) => {
                        E ? (a == null || a(), s == null || s()) : (({ stop: a } = ua(u, C)), (s = Ft('resize', C)));
                    },
                    { immediate: !0 }
                ),
                ce(
                    () => [n.maxHeight, n.height],
                    () => {
                        n.native ||
                            ht(() => {
                                var E;
                                C(), i.value && ((E = c.value) == null || E.handleScroll(i.value));
                            });
                    }
                ),
                $e(_0, Lt({ scrollbarElement: l, wrapElement: i })),
                Ge(() => {
                    n.native ||
                        ht(() => {
                            C();
                        });
                }),
                eo(() => C()),
                t({ wrapRef: i, update: C, scrollTo: g, setScrollTop: x, setScrollLeft: y, handleScroll: _ }),
                (E, S) => (
                    v(),
                    w(
                        'div',
                        { ref_key: 'scrollbarRef', ref: l, class: ke(A(o).b()) },
                        [
                            f(
                                'div',
                                { ref_key: 'wrapRef', ref: i, class: ke(A(d)), style: Mt(A(p)), onScroll: _ },
                                [
                                    (v(),
                                    me(
                                        Yt(E.tag),
                                        {
                                            id: E.id,
                                            ref_key: 'resizeRef',
                                            ref: u,
                                            class: ke(A(m)),
                                            style: Mt(E.viewStyle),
                                            role: E.role,
                                            'aria-label': E.ariaLabel,
                                            'aria-orientation': E.ariaOrientation,
                                        },
                                        { default: re(() => [ye(E.$slots, 'default')]), _: 3 },
                                        8,
                                        ['id', 'class', 'style', 'role', 'aria-label', 'aria-orientation']
                                    )),
                                ],
                                38
                            ),
                            E.native
                                ? Et('v-if', !0)
                                : (v(),
                                  me(
                                      Hy,
                                      { key: 0, ref_key: 'barRef', ref: c, always: E.always, 'min-size': E.minSize },
                                      null,
                                      8,
                                      ['always', 'min-size']
                                  )),
                        ],
                        2
                    )
                )
            );
        },
    });
var Iy = Te(Py, [['__file', 'scrollbar.vue']]);
const ky = jt(Iy),
    v0 = Symbol('popper'),
    e1 = Symbol('popperContent'),
    Ry = ['dialog', 'grid', 'group', 'listbox', 'menu', 'navigation', 'tooltip', 'tree'],
    t1 = Le({ role: { type: String, values: Ry, default: 'tooltip' } }),
    Fy = h({ name: 'ElPopper', inheritAttrs: !1 }),
    $y = h({
        ...Fy,
        props: t1,
        setup(e, { expose: t }) {
            const r = e,
                n = D(),
                o = D(),
                a = D(),
                s = D(),
                l = P(() => r.role),
                i = { triggerRef: n, popperInstanceRef: o, contentRef: a, referenceRef: s, role: l };
            return t(i), $e(v0, i), (u, c) => ye(u.$slots, 'default');
        },
    });
var Ny = Te($y, [['__file', 'popper.vue']]);
const r1 = Le({ arrowOffset: { type: Number, default: 5 } }),
    Dy = h({ name: 'ElPopperArrow', inheritAttrs: !1 }),
    jy = h({
        ...Dy,
        props: r1,
        setup(e, { expose: t }) {
            const r = e,
                n = ze('popper'),
                { arrowOffset: o, arrowRef: a, arrowStyle: s } = le(e1, void 0);
            return (
                ce(
                    () => r.arrowOffset,
                    (l) => {
                        o.value = l;
                    }
                ),
                ot(() => {
                    a.value = void 0;
                }),
                t({ arrowRef: a }),
                (l, i) => (
                    v(),
                    w(
                        'span',
                        {
                            ref_key: 'arrowRef',
                            ref: a,
                            class: ke(A(n).e('arrow')),
                            style: Mt(A(s)),
                            'data-popper-arrow': '',
                        },
                        null,
                        6
                    )
                )
            );
        },
    });
var qy = Te(jy, [['__file', 'arrow.vue']]);
const Ky = 'ElOnlyChild',
    n1 = h({
        name: Ky,
        setup(e, { slots: t, attrs: r }) {
            var n;
            const o = le(qu),
                a = sy((n = o == null ? void 0 : o.setForwardRef) != null ? n : Ze);
            return () => {
                var s;
                const l = (s = t.default) == null ? void 0 : s.call(t, r);
                if (!l || l.length > 1) return null;
                const i = o1(l);
                return i ? kt(Nt(i, r), [[a]]) : null;
            };
        },
    });
function o1(e) {
    if (!e) return null;
    const t = e;
    for (const r of t) {
        if (Ee(r))
            switch (r.type) {
                case lt:
                    continue;
                case wn:
                case 'svg':
                    return rl(r);
                case Oe:
                    return o1(r.children);
                default:
                    return r;
            }
        return rl(r);
    }
    return null;
}
function rl(e) {
    const t = ze('only-child');
    return G('span', { class: t.e('content') }, [e]);
}
const a1 = Le({
        virtualRef: { type: de(Object) },
        virtualTriggering: Boolean,
        onMouseenter: { type: de(Function) },
        onMouseleave: { type: de(Function) },
        onClick: { type: de(Function) },
        onKeydown: { type: de(Function) },
        onFocus: { type: de(Function) },
        onBlur: { type: de(Function) },
        onContextmenu: { type: de(Function) },
        id: String,
        open: Boolean,
    }),
    Uy = h({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
    Wy = h({
        ...Uy,
        props: a1,
        setup(e, { expose: t }) {
            const r = e,
                { role: n, triggerRef: o } = le(v0, void 0);
            ay(o);
            const a = P(() => (l.value ? r.id : void 0)),
                s = P(() => {
                    if (n && n.value === 'tooltip') return r.open && r.id ? r.id : void 0;
                }),
                l = P(() => {
                    if (n && n.value !== 'tooltip') return n.value;
                }),
                i = P(() => (l.value ? `${r.open}` : void 0));
            let u;
            return (
                Ge(() => {
                    ce(
                        () => r.virtualRef,
                        (c) => {
                            c && (o.value = Rt(c));
                        },
                        { immediate: !0 }
                    ),
                        ce(
                            o,
                            (c, p) => {
                                u == null || u(),
                                    (u = void 0),
                                    Wn(c) &&
                                        ([
                                            'onMouseenter',
                                            'onMouseleave',
                                            'onClick',
                                            'onKeydown',
                                            'onFocus',
                                            'onBlur',
                                            'onContextmenu',
                                        ].forEach((d) => {
                                            var m;
                                            const _ = r[d];
                                            _ &&
                                                (c.addEventListener(d.slice(2).toLowerCase(), _),
                                                (m = p == null ? void 0 : p.removeEventListener) == null ||
                                                    m.call(p, d.slice(2).toLowerCase(), _));
                                        }),
                                        (u = ce(
                                            [a, s, l, i],
                                            (d) => {
                                                [
                                                    'aria-controls',
                                                    'aria-describedby',
                                                    'aria-haspopup',
                                                    'aria-expanded',
                                                ].forEach((m, _) => {
                                                    cn(d[_]) ? c.removeAttribute(m) : c.setAttribute(m, d[_]);
                                                });
                                            },
                                            { immediate: !0 }
                                        ))),
                                    Wn(p) &&
                                        ['aria-controls', 'aria-describedby', 'aria-haspopup', 'aria-expanded'].forEach(
                                            (d) => p.removeAttribute(d)
                                        );
                            },
                            { immediate: !0 }
                        );
                }),
                ot(() => {
                    u == null || u(), (u = void 0);
                }),
                t({ triggerRef: o }),
                (c, p) =>
                    c.virtualTriggering
                        ? Et('v-if', !0)
                        : (v(),
                          me(
                              A(n1),
                              gt({ key: 0 }, c.$attrs, {
                                  'aria-controls': A(a),
                                  'aria-describedby': A(s),
                                  'aria-expanded': A(i),
                                  'aria-haspopup': A(l),
                              }),
                              { default: re(() => [ye(c.$slots, 'default')]), _: 3 },
                              16,
                              ['aria-controls', 'aria-describedby', 'aria-expanded', 'aria-haspopup']
                          ))
            );
        },
    });
var Gy = Te(Wy, [['__file', 'trigger.vue']]);
const ka = 'focus-trap.focus-after-trapped',
    Ra = 'focus-trap.focus-after-released',
    Yy = 'focus-trap.focusout-prevented',
    nl = { cancelable: !0, bubbles: !1 },
    Jy = { cancelable: !0, bubbles: !1 },
    ol = 'focusAfterTrapped',
    al = 'focusAfterReleased',
    s1 = Symbol('elFocusTrap'),
    h0 = D(),
    ma = D(0),
    m0 = D(0);
let go = 0;
const l1 = (e) => {
        const t = [],
            r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: (n) => {
                    const o = n.tagName === 'INPUT' && n.type === 'hidden';
                    return n.disabled || n.hidden || o
                        ? NodeFilter.FILTER_SKIP
                        : n.tabIndex >= 0 || n === document.activeElement
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_SKIP;
                },
            });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
    },
    sl = (e, t) => {
        for (const r of e) if (!Zy(r, t)) return r;
    },
    Zy = (e, t) => {
        if (getComputedStyle(e).visibility === 'hidden') return !0;
        for (; e; ) {
            if (t && e === t) return !1;
            if (getComputedStyle(e).display === 'none') return !0;
            e = e.parentElement;
        }
        return !1;
    },
    Qy = (e) => {
        const t = l1(e),
            r = sl(t, e),
            n = sl(t.reverse(), e);
        return [r, n];
    },
    Xy = (e) => e instanceof HTMLInputElement && 'select' in e,
    ar = (e, t) => {
        if (e && e.focus) {
            const r = document.activeElement;
            e.focus({ preventScroll: !0 }), (m0.value = window.performance.now()), e !== r && Xy(e) && t && e.select();
        }
    };
function ll(e, t) {
    const r = [...e],
        n = e.indexOf(t);
    return n !== -1 && r.splice(n, 1), r;
}
const eb = () => {
        let e = [];
        return {
            push: (n) => {
                const o = e[0];
                o && n !== o && o.pause(), (e = ll(e, n)), e.unshift(n);
            },
            remove: (n) => {
                var o, a;
                (e = ll(e, n)), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
            },
        };
    },
    tb = (e, t = !1) => {
        const r = document.activeElement;
        for (const n of e) if ((ar(n, t), document.activeElement !== r)) return;
    },
    il = eb(),
    rb = () => ma.value > m0.value,
    wo = () => {
        (h0.value = 'pointer'), (ma.value = window.performance.now());
    },
    ul = () => {
        (h0.value = 'keyboard'), (ma.value = window.performance.now());
    },
    nb = () => (
        Ge(() => {
            go === 0 &&
                (document.addEventListener('mousedown', wo),
                document.addEventListener('touchstart', wo),
                document.addEventListener('keydown', ul)),
                go++;
        }),
        ot(() => {
            go--,
                go <= 0 &&
                    (document.removeEventListener('mousedown', wo),
                    document.removeEventListener('touchstart', wo),
                    document.removeEventListener('keydown', ul));
        }),
        { focusReason: h0, lastUserFocusTimestamp: ma, lastAutomatedFocusTimestamp: m0 }
    ),
    yo = (e) => new CustomEvent(Yy, { ...Jy, detail: e }),
    ob = h({
        name: 'ElFocusTrap',
        inheritAttrs: !1,
        props: {
            loop: Boolean,
            trapped: Boolean,
            focusTrapEl: Object,
            focusStartEl: { type: [Object, String], default: 'first' },
        },
        emits: [ol, al, 'focusin', 'focusout', 'focusout-prevented', 'release-requested'],
        setup(e, { emit: t }) {
            const r = D();
            let n, o;
            const { focusReason: a } = nb();
            ey((_) => {
                e.trapped && !s.paused && t('release-requested', _);
            });
            const s = {
                    paused: !1,
                    pause() {
                        this.paused = !0;
                    },
                    resume() {
                        this.paused = !1;
                    },
                },
                l = (_) => {
                    if ((!e.loop && !e.trapped) || s.paused) return;
                    const { key: g, altKey: x, ctrlKey: y, metaKey: C, currentTarget: E, shiftKey: S } = _,
                        { loop: H } = e,
                        z = g === we.tab && !x && !y && !C,
                        O = document.activeElement;
                    if (z && O) {
                        const T = E,
                            [V, F] = Qy(T);
                        if (V && F) {
                            if (!S && O === F) {
                                const R = yo({ focusReason: a.value });
                                t('focusout-prevented', R), R.defaultPrevented || (_.preventDefault(), H && ar(V, !0));
                            } else if (S && [V, T].includes(O)) {
                                const R = yo({ focusReason: a.value });
                                t('focusout-prevented', R), R.defaultPrevented || (_.preventDefault(), H && ar(F, !0));
                            }
                        } else if (O === T) {
                            const R = yo({ focusReason: a.value });
                            t('focusout-prevented', R), R.defaultPrevented || _.preventDefault();
                        }
                    }
                };
            $e(s1, { focusTrapRef: r, onKeydown: l }),
                ce(
                    () => e.focusTrapEl,
                    (_) => {
                        _ && (r.value = _);
                    },
                    { immediate: !0 }
                ),
                ce([r], ([_], [g]) => {
                    _ &&
                        (_.addEventListener('keydown', l),
                        _.addEventListener('focusin', c),
                        _.addEventListener('focusout', p)),
                        g &&
                            (g.removeEventListener('keydown', l),
                            g.removeEventListener('focusin', c),
                            g.removeEventListener('focusout', p));
                });
            const i = (_) => {
                    t(ol, _);
                },
                u = (_) => t(al, _),
                c = (_) => {
                    const g = A(r);
                    if (!g) return;
                    const x = _.target,
                        y = _.relatedTarget,
                        C = x && g.contains(x);
                    e.trapped || (y && g.contains(y)) || (n = y),
                        C && t('focusin', _),
                        !s.paused && e.trapped && (C ? (o = x) : ar(o, !0));
                },
                p = (_) => {
                    const g = A(r);
                    if (!(s.paused || !g))
                        if (e.trapped) {
                            const x = _.relatedTarget;
                            !cn(x) &&
                                !g.contains(x) &&
                                setTimeout(() => {
                                    if (!s.paused && e.trapped) {
                                        const y = yo({ focusReason: a.value });
                                        t('focusout-prevented', y), y.defaultPrevented || ar(o, !0);
                                    }
                                }, 0);
                        } else {
                            const x = _.target;
                            (x && g.contains(x)) || t('focusout', _);
                        }
                };
            async function d() {
                await ht();
                const _ = A(r);
                if (_) {
                    il.push(s);
                    const g = _.contains(document.activeElement) ? n : document.activeElement;
                    if (((n = g), !_.contains(g))) {
                        const y = new Event(ka, nl);
                        _.addEventListener(ka, i),
                            _.dispatchEvent(y),
                            y.defaultPrevented ||
                                ht(() => {
                                    let C = e.focusStartEl;
                                    xe(C) || (ar(C), document.activeElement !== C && (C = 'first')),
                                        C === 'first' && tb(l1(_), !0),
                                        (document.activeElement === g || C === 'container') && ar(_);
                                });
                    }
                }
            }
            function m() {
                const _ = A(r);
                if (_) {
                    _.removeEventListener(ka, i);
                    const g = new CustomEvent(Ra, { ...nl, detail: { focusReason: a.value } });
                    _.addEventListener(Ra, u),
                        _.dispatchEvent(g),
                        !g.defaultPrevented &&
                            (a.value == 'keyboard' || !rb() || _.contains(document.activeElement)) &&
                            ar(n != null ? n : document.body),
                        _.removeEventListener(Ra, u),
                        il.remove(s);
                }
            }
            return (
                Ge(() => {
                    e.trapped && d(),
                        ce(
                            () => e.trapped,
                            (_) => {
                                _ ? d() : m();
                            }
                        );
                }),
                ot(() => {
                    e.trapped && m();
                }),
                { onKeydown: l }
            );
        },
    });
function ab(e, t, r, n, o, a) {
    return ye(e.$slots, 'default', { handleKeydown: e.onKeydown });
}
var sb = Te(ob, [
    ['render', ab],
    ['__file', 'focus-trap.vue'],
]);
const lb = ['fixed', 'absolute'],
    ib = Le({
        boundariesPadding: { type: Number, default: 0 },
        fallbackPlacements: { type: de(Array), default: void 0 },
        gpuAcceleration: { type: Boolean, default: !0 },
        offset: { type: Number, default: 12 },
        placement: { type: String, values: a0, default: 'bottom' },
        popperOptions: { type: de(Object), default: () => ({}) },
        strategy: { type: String, values: lb, default: 'absolute' },
    }),
    i1 = Le({
        ...ib,
        id: String,
        style: { type: de([String, Array, Object]) },
        className: { type: de([String, Array, Object]) },
        effect: { type: String, default: 'dark' },
        visible: Boolean,
        enterable: { type: Boolean, default: !0 },
        pure: Boolean,
        focusOnShow: { type: Boolean, default: !1 },
        trapping: { type: Boolean, default: !1 },
        popperClass: { type: de([String, Array, Object]) },
        popperStyle: { type: de([String, Array, Object]) },
        referenceEl: { type: de(Object) },
        triggerTargetEl: { type: de(Object) },
        stopPopperMouseEvent: { type: Boolean, default: !0 },
        ariaLabel: { type: String, default: void 0 },
        virtualTriggering: Boolean,
        zIndex: Number,
    }),
    ub = {
        mouseenter: (e) => e instanceof MouseEvent,
        mouseleave: (e) => e instanceof MouseEvent,
        focus: () => !0,
        blur: () => !0,
        close: () => !0,
    },
    cb = (e, t = []) => {
        const { placement: r, strategy: n, popperOptions: o } = e,
            a = { placement: r, strategy: n, ...o, modifiers: [...fb(e), ...t] };
        return db(a, o == null ? void 0 : o.modifiers), a;
    },
    pb = (e) => {
        if (!!Xe) return Rt(e);
    };
function fb(e) {
    const { offset: t, gpuAcceleration: r, fallbackPlacements: n } = e;
    return [
        { name: 'offset', options: { offset: [0, t != null ? t : 12] } },
        { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
        { name: 'flip', options: { padding: 5, fallbackPlacements: n } },
        { name: 'computeStyles', options: { gpuAcceleration: r } },
    ];
}
function db(e, t) {
    t && (e.modifiers = [...e.modifiers, ...(t != null ? t : [])]);
}
const _b = 0,
    vb = (e) => {
        const { popperInstanceRef: t, contentRef: r, triggerRef: n, role: o } = le(v0, void 0),
            a = D(),
            s = D(),
            l = P(() => ({ name: 'eventListeners', enabled: !!e.visible })),
            i = P(() => {
                var y;
                const C = A(a),
                    E = (y = A(s)) != null ? y : _b;
                return { name: 'arrow', enabled: !H7(C), options: { element: C, padding: E } };
            }),
            u = P(() => ({
                onFirstUpdate: () => {
                    _();
                },
                ...cb(e, [A(i), A(l)]),
            })),
            c = P(() => pb(e.referenceEl) || A(n)),
            { attributes: p, state: d, styles: m, update: _, forceUpdate: g, instanceRef: x } = Zw(c, r, u);
        return (
            ce(x, (y) => (t.value = y)),
            Ge(() => {
                ce(
                    () => {
                        var y;
                        return (y = A(c)) == null ? void 0 : y.getBoundingClientRect();
                    },
                    () => {
                        _();
                    }
                );
            }),
            {
                attributes: p,
                arrowRef: a,
                contentRef: r,
                instanceRef: x,
                state: d,
                styles: m,
                role: o,
                forceUpdate: g,
                update: _,
            }
        );
    },
    hb = (e, { attributes: t, styles: r, role: n }) => {
        const { nextZIndex: o } = Wu(),
            a = ze('popper'),
            s = P(() => A(t).popper),
            l = D(vt(e.zIndex) ? e.zIndex : o()),
            i = P(() => [a.b(), a.is('pure', e.pure), a.is(e.effect), e.popperClass]),
            u = P(() => [{ zIndex: A(l) }, A(r).popper, e.popperStyle || {}]),
            c = P(() => (n.value === 'dialog' ? 'false' : void 0)),
            p = P(() => A(r).arrow || {});
        return {
            ariaModal: c,
            arrowStyle: p,
            contentAttrs: s,
            contentClass: i,
            contentStyle: u,
            contentZIndex: l,
            updateZIndex: () => {
                l.value = vt(e.zIndex) ? e.zIndex : o();
            },
        };
    },
    mb = (e, t) => {
        const r = D(!1),
            n = D();
        return {
            focusStartRef: n,
            trapped: r,
            onFocusAfterReleased: (u) => {
                var c;
                ((c = u.detail) == null ? void 0 : c.focusReason) !== 'pointer' && ((n.value = 'first'), t('blur'));
            },
            onFocusAfterTrapped: () => {
                t('focus');
            },
            onFocusInTrap: (u) => {
                e.visible && !r.value && (u.target && (n.value = u.target), (r.value = !0));
            },
            onFocusoutPrevented: (u) => {
                e.trapping || (u.detail.focusReason === 'pointer' && u.preventDefault(), (r.value = !1));
            },
            onReleaseRequested: () => {
                (r.value = !1), t('close');
            },
        };
    },
    gb = h({ name: 'ElPopperContent' }),
    wb = h({
        ...gb,
        props: i1,
        emits: ub,
        setup(e, { expose: t, emit: r }) {
            const n = e,
                {
                    focusStartRef: o,
                    trapped: a,
                    onFocusAfterReleased: s,
                    onFocusAfterTrapped: l,
                    onFocusInTrap: i,
                    onFocusoutPrevented: u,
                    onReleaseRequested: c,
                } = mb(n, r),
                { attributes: p, arrowRef: d, contentRef: m, styles: _, instanceRef: g, role: x, update: y } = vb(n),
                {
                    ariaModal: C,
                    arrowStyle: E,
                    contentAttrs: S,
                    contentClass: H,
                    contentStyle: z,
                    updateZIndex: O,
                } = hb(n, { styles: _, attributes: p, role: x }),
                T = le(jo, void 0),
                V = D();
            $e(e1, { arrowStyle: E, arrowRef: d, arrowOffset: V }),
                T && (T.addInputId || T.removeInputId) && $e(jo, { ...T, addInputId: Ze, removeInputId: Ze });
            let F;
            const j = (Q = !0) => {
                    y(), Q && O();
                },
                R = () => {
                    j(!1), n.visible && n.focusOnShow ? (a.value = !0) : n.visible === !1 && (a.value = !1);
                };
            return (
                Ge(() => {
                    ce(
                        () => n.triggerTargetEl,
                        (Q, q) => {
                            F == null || F(), (F = void 0);
                            const W = A(Q || m.value),
                                N = A(q || m.value);
                            Wn(W) &&
                                (F = ce(
                                    [x, () => n.ariaLabel, C, () => n.id],
                                    (B) => {
                                        ['role', 'aria-label', 'aria-modal', 'id'].forEach((J, he) => {
                                            cn(B[he]) ? W.removeAttribute(J) : W.setAttribute(J, B[he]);
                                        });
                                    },
                                    { immediate: !0 }
                                )),
                                N !== W &&
                                    Wn(N) &&
                                    ['role', 'aria-label', 'aria-modal', 'id'].forEach((B) => {
                                        N.removeAttribute(B);
                                    });
                        },
                        { immediate: !0 }
                    ),
                        ce(() => n.visible, R, { immediate: !0 });
                }),
                ot(() => {
                    F == null || F(), (F = void 0);
                }),
                t({ popperContentRef: m, popperInstanceRef: g, updatePopper: j, contentStyle: z }),
                (Q, q) => (
                    v(),
                    w(
                        'div',
                        gt({ ref_key: 'contentRef', ref: m }, A(S), {
                            style: A(z),
                            class: A(H),
                            tabindex: '-1',
                            onMouseenter: q[0] || (q[0] = (W) => Q.$emit('mouseenter', W)),
                            onMouseleave: q[1] || (q[1] = (W) => Q.$emit('mouseleave', W)),
                        }),
                        [
                            G(
                                A(sb),
                                {
                                    trapped: A(a),
                                    'trap-on-focus-in': !0,
                                    'focus-trap-el': A(m),
                                    'focus-start-el': A(o),
                                    onFocusAfterTrapped: A(l),
                                    onFocusAfterReleased: A(s),
                                    onFocusin: A(i),
                                    onFocusoutPrevented: A(u),
                                    onReleaseRequested: A(c),
                                },
                                { default: re(() => [ye(Q.$slots, 'default')]), _: 3 },
                                8,
                                [
                                    'trapped',
                                    'focus-trap-el',
                                    'focus-start-el',
                                    'onFocusAfterTrapped',
                                    'onFocusAfterReleased',
                                    'onFocusin',
                                    'onFocusoutPrevented',
                                    'onReleaseRequested',
                                ]
                            ),
                        ],
                        16
                    )
                )
            );
        },
    });
var yb = Te(wb, [['__file', 'content.vue']]);
const bb = jt(Ny),
    g0 = Symbol('elTooltip'),
    qo = Le({
        ...ny,
        ...i1,
        appendTo: { type: de([String, Object]) },
        content: { type: String, default: '' },
        rawContent: { type: Boolean, default: !1 },
        persistent: Boolean,
        ariaLabel: String,
        visible: { type: de(Boolean), default: null },
        transition: String,
        teleported: { type: Boolean, default: !0 },
        disabled: Boolean,
    }),
    w0 = Le({
        ...a1,
        disabled: Boolean,
        trigger: { type: de([String, Array]), default: 'hover' },
        triggerKeys: { type: de(Array), default: () => [we.enter, we.space] },
    }),
    { useModelToggleProps: xb, useModelToggleEmits: Cb, useModelToggle: Mb } = G7('visible'),
    Eb = Le({ ...t1, ...xb, ...qo, ...w0, ...r1, showArrow: { type: Boolean, default: !0 } }),
    Sb = [...Cb, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
    Ab = (e, t) => (se(e) ? e.includes(t) : e === t),
    Gr = (e, t, r) => (n) => {
        Ab(A(e), t) && r(n);
    },
    zb = h({ name: 'ElTooltipTrigger' }),
    Tb = h({
        ...zb,
        props: w0,
        setup(e, { expose: t }) {
            const r = e,
                n = ze('tooltip'),
                { controlled: o, id: a, open: s, onOpen: l, onClose: i, onToggle: u } = le(g0, void 0),
                c = D(null),
                p = () => {
                    if (A(o) || r.disabled) return !0;
                },
                d = nt(r, 'trigger'),
                m = Ke(p, Gr(d, 'hover', l)),
                _ = Ke(p, Gr(d, 'hover', i)),
                g = Ke(
                    p,
                    Gr(d, 'click', (S) => {
                        S.button === 0 && u(S);
                    })
                ),
                x = Ke(p, Gr(d, 'focus', l)),
                y = Ke(p, Gr(d, 'focus', i)),
                C = Ke(
                    p,
                    Gr(d, 'contextmenu', (S) => {
                        S.preventDefault(), u(S);
                    })
                ),
                E = Ke(p, (S) => {
                    const { code: H } = S;
                    r.triggerKeys.includes(H) && (S.preventDefault(), u(S));
                });
            return (
                t({ triggerRef: c }),
                (S, H) => (
                    v(),
                    me(
                        A(Gy),
                        {
                            id: A(a),
                            'virtual-ref': S.virtualRef,
                            open: A(s),
                            'virtual-triggering': S.virtualTriggering,
                            class: ke(A(n).e('trigger')),
                            onBlur: A(y),
                            onClick: A(g),
                            onContextmenu: A(C),
                            onFocus: A(x),
                            onMouseenter: A(m),
                            onMouseleave: A(_),
                            onKeydown: A(E),
                        },
                        { default: re(() => [ye(S.$slots, 'default')]), _: 3 },
                        8,
                        [
                            'id',
                            'virtual-ref',
                            'open',
                            'virtual-triggering',
                            'class',
                            'onBlur',
                            'onClick',
                            'onContextmenu',
                            'onFocus',
                            'onMouseenter',
                            'onMouseleave',
                            'onKeydown',
                        ]
                    )
                )
            );
        },
    });
var Hb = Te(Tb, [['__file', 'trigger.vue']]);
const Bb = h({ name: 'ElTooltipContent', inheritAttrs: !1 }),
    Lb = h({
        ...Bb,
        props: qo,
        setup(e, { expose: t }) {
            const r = e,
                { selector: n } = ju(),
                o = ze('tooltip'),
                a = D(null),
                s = D(!1),
                {
                    controlled: l,
                    id: i,
                    open: u,
                    trigger: c,
                    onClose: p,
                    onOpen: d,
                    onShow: m,
                    onHide: _,
                    onBeforeShow: g,
                    onBeforeHide: x,
                } = le(g0, void 0),
                y = P(() => r.transition || `${o.namespace.value}-fade-in-linear`),
                C = P(() => r.persistent);
            ot(() => {
                s.value = !0;
            });
            const E = P(() => (A(C) ? !0 : A(u))),
                S = P(() => (r.disabled ? !1 : A(u))),
                H = P(() => r.appendTo || n.value),
                z = P(() => {
                    var B;
                    return (B = r.style) != null ? B : {};
                }),
                O = P(() => !A(u)),
                T = () => {
                    _();
                },
                V = () => {
                    if (A(l)) return !0;
                },
                F = Ke(V, () => {
                    r.enterable && A(c) === 'hover' && d();
                }),
                j = Ke(V, () => {
                    A(c) === 'hover' && p();
                }),
                R = () => {
                    var B, J;
                    (J = (B = a.value) == null ? void 0 : B.updatePopper) == null || J.call(B), g == null || g();
                },
                Q = () => {
                    x == null || x();
                },
                q = () => {
                    m(),
                        (N = Pm(
                            P(() => {
                                var B;
                                return (B = a.value) == null ? void 0 : B.popperContentRef;
                            }),
                            () => {
                                if (A(l)) return;
                                A(c) !== 'hover' && p();
                            }
                        ));
                },
                W = () => {
                    r.virtualTriggering || p();
                };
            let N;
            return (
                ce(
                    () => A(u),
                    (B) => {
                        B || N == null || N();
                    },
                    { flush: 'post' }
                ),
                ce(
                    () => r.content,
                    () => {
                        var B, J;
                        (J = (B = a.value) == null ? void 0 : B.updatePopper) == null || J.call(B);
                    }
                ),
                t({ contentRef: a }),
                (B, J) => (
                    v(),
                    me(
                        O4,
                        { disabled: !B.teleported, to: A(H) },
                        [
                            G(
                                Nr,
                                { name: A(y), onAfterLeave: T, onBeforeEnter: R, onAfterEnter: q, onBeforeLeave: Q },
                                {
                                    default: re(() => [
                                        A(E)
                                            ? kt(
                                                  (v(),
                                                  me(
                                                      A(yb),
                                                      gt(
                                                          { key: 0, id: A(i), ref_key: 'contentRef', ref: a },
                                                          B.$attrs,
                                                          {
                                                              'aria-label': B.ariaLabel,
                                                              'aria-hidden': A(O),
                                                              'boundaries-padding': B.boundariesPadding,
                                                              'fallback-placements': B.fallbackPlacements,
                                                              'gpu-acceleration': B.gpuAcceleration,
                                                              offset: B.offset,
                                                              placement: B.placement,
                                                              'popper-options': B.popperOptions,
                                                              strategy: B.strategy,
                                                              effect: B.effect,
                                                              enterable: B.enterable,
                                                              pure: B.pure,
                                                              'popper-class': B.popperClass,
                                                              'popper-style': [B.popperStyle, A(z)],
                                                              'reference-el': B.referenceEl,
                                                              'trigger-target-el': B.triggerTargetEl,
                                                              visible: A(S),
                                                              'z-index': B.zIndex,
                                                              onMouseenter: A(F),
                                                              onMouseleave: A(j),
                                                              onBlur: W,
                                                              onClose: A(p),
                                                          }
                                                      ),
                                                      {
                                                          default: re(() => [
                                                              s.value
                                                                  ? Et('v-if', !0)
                                                                  : ye(B.$slots, 'default', { key: 0 }),
                                                          ]),
                                                          _: 3,
                                                      },
                                                      16,
                                                      [
                                                          'id',
                                                          'aria-label',
                                                          'aria-hidden',
                                                          'boundaries-padding',
                                                          'fallback-placements',
                                                          'gpu-acceleration',
                                                          'offset',
                                                          'placement',
                                                          'popper-options',
                                                          'strategy',
                                                          'effect',
                                                          'enterable',
                                                          'pure',
                                                          'popper-class',
                                                          'popper-style',
                                                          'reference-el',
                                                          'trigger-target-el',
                                                          'visible',
                                                          'z-index',
                                                          'onMouseenter',
                                                          'onMouseleave',
                                                          'onClose',
                                                      ]
                                                  )),
                                                  [[aa, A(S)]]
                                              )
                                            : Et('v-if', !0),
                                    ]),
                                    _: 3,
                                },
                                8,
                                ['name']
                            ),
                        ],
                        8,
                        ['disabled', 'to']
                    )
                )
            );
        },
    });
var Vb = Te(Lb, [['__file', 'content.vue']]);
const Ob = ['innerHTML'],
    Pb = { key: 1 },
    Ib = h({ name: 'ElTooltip' }),
    kb = h({
        ...Ib,
        props: Eb,
        emits: Sb,
        setup(e, { expose: t, emit: r }) {
            const n = e;
            ry();
            const o = va(),
                a = D(),
                s = D(),
                l = () => {
                    var y;
                    const C = A(a);
                    C && ((y = C.popperInstanceRef) == null || y.update());
                },
                i = D(!1),
                u = D(),
                { show: c, hide: p, hasUpdateHandler: d } = Mb({ indicator: i, toggleReason: u }),
                { onOpen: m, onClose: _ } = oy({
                    showAfter: nt(n, 'showAfter'),
                    hideAfter: nt(n, 'hideAfter'),
                    autoClose: nt(n, 'autoClose'),
                    open: c,
                    close: p,
                }),
                g = P(() => bu(n.visible) && !d.value);
            $e(g0, {
                controlled: g,
                id: o,
                open: $r(i),
                trigger: nt(n, 'trigger'),
                onOpen: (y) => {
                    m(y);
                },
                onClose: (y) => {
                    _(y);
                },
                onToggle: (y) => {
                    A(i) ? _(y) : m(y);
                },
                onShow: () => {
                    r('show', u.value);
                },
                onHide: () => {
                    r('hide', u.value);
                },
                onBeforeShow: () => {
                    r('before-show', u.value);
                },
                onBeforeHide: () => {
                    r('before-hide', u.value);
                },
                updatePopper: l,
            }),
                ce(
                    () => n.disabled,
                    (y) => {
                        y && i.value && (i.value = !1);
                    }
                );
            const x = (y) => {
                var C, E;
                const S = (E = (C = s.value) == null ? void 0 : C.contentRef) == null ? void 0 : E.popperContentRef,
                    H = (y == null ? void 0 : y.relatedTarget) || document.activeElement;
                return S && S.contains(H);
            };
            return (
                $2(() => i.value && p()),
                t({
                    popperRef: a,
                    contentRef: s,
                    isFocusInsideContent: x,
                    updatePopper: l,
                    onOpen: m,
                    onClose: _,
                    hide: p,
                }),
                (y, C) => (
                    v(),
                    me(
                        A(bb),
                        { ref_key: 'popperRef', ref: a, role: y.role },
                        {
                            default: re(() => [
                                G(
                                    Hb,
                                    {
                                        disabled: y.disabled,
                                        trigger: y.trigger,
                                        'trigger-keys': y.triggerKeys,
                                        'virtual-ref': y.virtualRef,
                                        'virtual-triggering': y.virtualTriggering,
                                    },
                                    {
                                        default: re(() => [
                                            y.$slots.default ? ye(y.$slots, 'default', { key: 0 }) : Et('v-if', !0),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    ['disabled', 'trigger', 'trigger-keys', 'virtual-ref', 'virtual-triggering']
                                ),
                                G(
                                    Vb,
                                    {
                                        ref_key: 'contentRef',
                                        ref: s,
                                        'aria-label': y.ariaLabel,
                                        'boundaries-padding': y.boundariesPadding,
                                        content: y.content,
                                        disabled: y.disabled,
                                        effect: y.effect,
                                        enterable: y.enterable,
                                        'fallback-placements': y.fallbackPlacements,
                                        'hide-after': y.hideAfter,
                                        'gpu-acceleration': y.gpuAcceleration,
                                        offset: y.offset,
                                        persistent: y.persistent,
                                        'popper-class': y.popperClass,
                                        'popper-style': y.popperStyle,
                                        placement: y.placement,
                                        'popper-options': y.popperOptions,
                                        pure: y.pure,
                                        'raw-content': y.rawContent,
                                        'reference-el': y.referenceEl,
                                        'trigger-target-el': y.triggerTargetEl,
                                        'show-after': y.showAfter,
                                        strategy: y.strategy,
                                        teleported: y.teleported,
                                        transition: y.transition,
                                        'virtual-triggering': y.virtualTriggering,
                                        'z-index': y.zIndex,
                                        'append-to': y.appendTo,
                                    },
                                    {
                                        default: re(() => [
                                            ye(y.$slots, 'content', {}, () => [
                                                y.rawContent
                                                    ? (v(), w('span', { key: 0, innerHTML: y.content }, null, 8, Ob))
                                                    : (v(), w('span', Pb, fr(y.content), 1)),
                                            ]),
                                            y.showArrow
                                                ? (v(),
                                                  me(A(qy), { key: 0, 'arrow-offset': y.arrowOffset }, null, 8, [
                                                      'arrow-offset',
                                                  ]))
                                                : Et('v-if', !0),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    [
                                        'aria-label',
                                        'boundaries-padding',
                                        'content',
                                        'disabled',
                                        'effect',
                                        'enterable',
                                        'fallback-placements',
                                        'hide-after',
                                        'gpu-acceleration',
                                        'offset',
                                        'persistent',
                                        'popper-class',
                                        'popper-style',
                                        'placement',
                                        'popper-options',
                                        'pure',
                                        'raw-content',
                                        'reference-el',
                                        'trigger-target-el',
                                        'show-after',
                                        'strategy',
                                        'teleported',
                                        'transition',
                                        'virtual-triggering',
                                        'z-index',
                                        'append-to',
                                    ]
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        ['role']
                    )
                )
            );
        },
    });
var Rb = Te(kb, [['__file', 'tooltip.vue']]);
const ga = jt(Rb),
    Fb = Le({
        size: { type: [Number, String], values: Su, default: '', validator: (e) => vt(e) },
        shape: { type: String, values: ['circle', 'square'], default: 'circle' },
        icon: { type: Wt },
        src: { type: String, default: '' },
        alt: String,
        srcSet: String,
        fit: { type: de(String), default: 'cover' },
    }),
    $b = { error: (e) => e instanceof Event },
    Nb = ['src', 'alt', 'srcset'],
    Db = h({ name: 'ElAvatar' }),
    jb = h({
        ...Db,
        props: Fb,
        emits: $b,
        setup(e, { emit: t }) {
            const r = e,
                n = ze('avatar'),
                o = D(!1),
                a = P(() => {
                    const { size: u, icon: c, shape: p } = r,
                        d = [n.b()];
                    return xe(u) && d.push(n.m(u)), c && d.push(n.m('icon')), p && d.push(n.m(p)), d;
                }),
                s = P(() => {
                    const { size: u } = r;
                    return vt(u) ? n.cssVarBlock({ size: Gn(u) || '' }) : void 0;
                }),
                l = P(() => ({ objectFit: r.fit }));
            ce(
                () => r.src,
                () => (o.value = !1)
            );
            function i(u) {
                (o.value = !0), t('error', u);
            }
            return (u, c) => (
                v(),
                w(
                    'span',
                    { class: ke(A(a)), style: Mt(A(s)) },
                    [
                        (u.src || u.srcSet) && !o.value
                            ? (v(),
                              w(
                                  'img',
                                  { key: 0, src: u.src, alt: u.alt, srcset: u.srcSet, style: Mt(A(l)), onError: i },
                                  null,
                                  44,
                                  Nb
                              ))
                            : u.icon
                            ? (v(), me(A(ct), { key: 1 }, { default: re(() => [(v(), me(Yt(u.icon)))]), _: 1 }))
                            : ye(u.$slots, 'default', { key: 2 }),
                    ],
                    6
                )
            );
        },
    });
var qb = Te(jb, [['__file', 'avatar.vue']]);
const Kb = jt(qb),
    u1 = Symbol('buttonGroupContextKey'),
    Ub = (e, t) => {
        $7(
            {
                from: 'type.text',
                replacement: 'link',
                version: '3.0.0',
                scope: 'props',
                ref: 'https://element-plus.org/en-US/component/button.html#button-attributes',
            },
            P(() => e.type === 'text')
        );
        const r = le(u1, void 0),
            n = ha('button'),
            { form: o } = xy(),
            a = Qu(P(() => (r == null ? void 0 : r.size))),
            s = Xu(),
            l = D(),
            i = Ai(),
            u = P(() => e.type || (r == null ? void 0 : r.type) || ''),
            c = P(() => {
                var _, g, x;
                return (x = (g = e.autoInsertSpace) != null ? g : (_ = n.value) == null ? void 0 : _.autoInsertSpace) !=
                    null
                    ? x
                    : !1;
            }),
            p = P(() =>
                e.tag === 'button'
                    ? {
                          ariaDisabled: s.value || e.loading,
                          disabled: s.value || e.loading,
                          autofocus: e.autofocus,
                          type: e.nativeType,
                      }
                    : {}
            ),
            d = P(() => {
                var _;
                const g = (_ = i.default) == null ? void 0 : _.call(i);
                if (c.value && (g == null ? void 0 : g.length) === 1) {
                    const x = g[0];
                    if ((x == null ? void 0 : x.type) === wn) {
                        const y = x.children;
                        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
                    }
                }
                return !1;
            });
        return {
            _disabled: s,
            _size: a,
            _type: u,
            _ref: l,
            _props: p,
            shouldAddSpace: d,
            handleClick: (_) => {
                e.nativeType === 'reset' && (o == null || o.resetFields()), t('click', _);
            },
        };
    },
    Wb = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', ''],
    Gb = ['button', 'submit', 'reset'],
    m2 = Le({
        size: Gu,
        disabled: Boolean,
        type: { type: String, values: Wb, default: '' },
        icon: { type: Wt },
        nativeType: { type: String, values: Gb, default: 'button' },
        loading: Boolean,
        loadingIcon: { type: Wt, default: () => Y2 },
        plain: Boolean,
        text: Boolean,
        link: Boolean,
        bg: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        color: String,
        dark: Boolean,
        autoInsertSpace: { type: Boolean, default: void 0 },
        tag: { type: de([String, Object]), default: 'button' },
    }),
    Yb = { click: (e) => e instanceof MouseEvent };
function et(e, t) {
    Jb(e) && (e = '100%');
    var r = Zb(e);
    return (
        (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
        r && (e = parseInt(String(e * t), 10) / 100),
        Math.abs(e - t) < 1e-6
            ? 1
            : (t === 360
                  ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
                  : (e = (e % t) / parseFloat(String(t))),
              e)
    );
}
function bo(e) {
    return Math.min(1, Math.max(0, e));
}
function Jb(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function Zb(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1;
}
function c1(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function xo(e) {
    return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function Lr(e) {
    return e.length === 1 ? '0' + e : String(e);
}
function Qb(e, t, r) {
    return { r: et(e, 255) * 255, g: et(t, 255) * 255, b: et(r, 255) * 255 };
}
function cl(e, t, r) {
    (e = et(e, 255)), (t = et(t, 255)), (r = et(r, 255));
    var n = Math.max(e, t, r),
        o = Math.min(e, t, r),
        a = 0,
        s = 0,
        l = (n + o) / 2;
    if (n === o) (s = 0), (a = 0);
    else {
        var i = n - o;
        switch (((s = l > 0.5 ? i / (2 - n - o) : i / (n + o)), n)) {
            case e:
                a = (t - r) / i + (t < r ? 6 : 0);
                break;
            case t:
                a = (r - e) / i + 2;
                break;
            case r:
                a = (e - t) / i + 4;
                break;
        }
        a /= 6;
    }
    return { h: a, s, l };
}
function Fa(e, t, r) {
    return (
        r < 0 && (r += 1),
        r > 1 && (r -= 1),
        r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    );
}
function Xb(e, t, r) {
    var n, o, a;
    if (((e = et(e, 360)), (t = et(t, 100)), (r = et(r, 100)), t === 0)) (o = r), (a = r), (n = r);
    else {
        var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
            l = 2 * r - s;
        (n = Fa(l, s, e + 1 / 3)), (o = Fa(l, s, e)), (a = Fa(l, s, e - 1 / 3));
    }
    return { r: n * 255, g: o * 255, b: a * 255 };
}
function pl(e, t, r) {
    (e = et(e, 255)), (t = et(t, 255)), (r = et(r, 255));
    var n = Math.max(e, t, r),
        o = Math.min(e, t, r),
        a = 0,
        s = n,
        l = n - o,
        i = n === 0 ? 0 : l / n;
    if (n === o) a = 0;
    else {
        switch (n) {
            case e:
                a = (t - r) / l + (t < r ? 6 : 0);
                break;
            case t:
                a = (r - e) / l + 2;
                break;
            case r:
                a = (e - t) / l + 4;
                break;
        }
        a /= 6;
    }
    return { h: a, s: i, v: s };
}
function ex(e, t, r) {
    (e = et(e, 360) * 6), (t = et(t, 100)), (r = et(r, 100));
    var n = Math.floor(e),
        o = e - n,
        a = r * (1 - t),
        s = r * (1 - o * t),
        l = r * (1 - (1 - o) * t),
        i = n % 6,
        u = [r, s, a, a, l, r][i],
        c = [l, r, r, s, a, a][i],
        p = [a, a, l, r, r, s][i];
    return { r: u * 255, g: c * 255, b: p * 255 };
}
function fl(e, t, r, n) {
    var o = [Lr(Math.round(e).toString(16)), Lr(Math.round(t).toString(16)), Lr(Math.round(r).toString(16))];
    return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1))
        ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
        : o.join('');
}
function tx(e, t, r, n, o) {
    var a = [Lr(Math.round(e).toString(16)), Lr(Math.round(t).toString(16)), Lr(Math.round(r).toString(16)), Lr(rx(n))];
    return o &&
        a[0].startsWith(a[0].charAt(1)) &&
        a[1].startsWith(a[1].charAt(1)) &&
        a[2].startsWith(a[2].charAt(1)) &&
        a[3].startsWith(a[3].charAt(1))
        ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
        : a.join('');
}
function rx(e) {
    return Math.round(parseFloat(e) * 255).toString(16);
}
function dl(e) {
    return dt(e) / 255;
}
function dt(e) {
    return parseInt(e, 16);
}
function nx(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var g2 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};
function ox(e) {
    var t = { r: 0, g: 0, b: 0 },
        r = 1,
        n = null,
        o = null,
        a = null,
        s = !1,
        l = !1;
    return (
        typeof e == 'string' && (e = lx(e)),
        typeof e == 'object' &&
            (qt(e.r) && qt(e.g) && qt(e.b)
                ? ((t = Qb(e.r, e.g, e.b)), (s = !0), (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
                : qt(e.h) && qt(e.s) && qt(e.v)
                ? ((n = xo(e.s)), (o = xo(e.v)), (t = ex(e.h, n, o)), (s = !0), (l = 'hsv'))
                : qt(e.h) &&
                  qt(e.s) &&
                  qt(e.l) &&
                  ((n = xo(e.s)), (a = xo(e.l)), (t = Xb(e.h, n, a)), (s = !0), (l = 'hsl')),
            Object.prototype.hasOwnProperty.call(e, 'a') && (r = e.a)),
        (r = c1(r)),
        {
            ok: s,
            format: e.format || l,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: r,
        }
    );
}
var ax = '[-\\+]?\\d+%?',
    sx = '[-\\+]?\\d*\\.\\d+%?',
    hr = '(?:'.concat(sx, ')|(?:').concat(ax, ')'),
    $a = '[\\s|\\(]+('.concat(hr, ')[,|\\s]+(').concat(hr, ')[,|\\s]+(').concat(hr, ')\\s*\\)?'),
    Na = '[\\s|\\(]+('
        .concat(hr, ')[,|\\s]+(')
        .concat(hr, ')[,|\\s]+(')
        .concat(hr, ')[,|\\s]+(')
        .concat(hr, ')\\s*\\)?'),
    Tt = {
        CSS_UNIT: new RegExp(hr),
        rgb: new RegExp('rgb' + $a),
        rgba: new RegExp('rgba' + Na),
        hsl: new RegExp('hsl' + $a),
        hsla: new RegExp('hsla' + Na),
        hsv: new RegExp('hsv' + $a),
        hsva: new RegExp('hsva' + Na),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
function lx(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
    var t = !1;
    if (g2[e]) (e = g2[e]), (t = !0);
    else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    var r = Tt.rgb.exec(e);
    return r
        ? { r: r[1], g: r[2], b: r[3] }
        : ((r = Tt.rgba.exec(e)),
          r
              ? { r: r[1], g: r[2], b: r[3], a: r[4] }
              : ((r = Tt.hsl.exec(e)),
                r
                    ? { h: r[1], s: r[2], l: r[3] }
                    : ((r = Tt.hsla.exec(e)),
                      r
                          ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                          : ((r = Tt.hsv.exec(e)),
                            r
                                ? { h: r[1], s: r[2], v: r[3] }
                                : ((r = Tt.hsva.exec(e)),
                                  r
                                      ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                                      : ((r = Tt.hex8.exec(e)),
                                        r
                                            ? {
                                                  r: dt(r[1]),
                                                  g: dt(r[2]),
                                                  b: dt(r[3]),
                                                  a: dl(r[4]),
                                                  format: t ? 'name' : 'hex8',
                                              }
                                            : ((r = Tt.hex6.exec(e)),
                                              r
                                                  ? {
                                                        r: dt(r[1]),
                                                        g: dt(r[2]),
                                                        b: dt(r[3]),
                                                        format: t ? 'name' : 'hex',
                                                    }
                                                  : ((r = Tt.hex4.exec(e)),
                                                    r
                                                        ? {
                                                              r: dt(r[1] + r[1]),
                                                              g: dt(r[2] + r[2]),
                                                              b: dt(r[3] + r[3]),
                                                              a: dl(r[4] + r[4]),
                                                              format: t ? 'name' : 'hex8',
                                                          }
                                                        : ((r = Tt.hex3.exec(e)),
                                                          r
                                                              ? {
                                                                    r: dt(r[1] + r[1]),
                                                                    g: dt(r[2] + r[2]),
                                                                    b: dt(r[3] + r[3]),
                                                                    format: t ? 'name' : 'hex',
                                                                }
                                                              : !1)))))))));
}
function qt(e) {
    return Boolean(Tt.CSS_UNIT.exec(String(e)));
}
var p1 = (function () {
    function e(t, r) {
        t === void 0 && (t = ''), r === void 0 && (r = {});
        var n;
        if (t instanceof e) return t;
        typeof t == 'number' && (t = nx(t)), (this.originalInput = t);
        var o = ox(t);
        (this.originalInput = t),
            (this.r = o.r),
            (this.g = o.g),
            (this.b = o.b),
            (this.a = o.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format = (n = r.format) !== null && n !== void 0 ? n : o.format),
            (this.gradientType = r.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = o.ok);
    }
    return (
        (e.prototype.isDark = function () {
            return this.getBrightness() < 128;
        }),
        (e.prototype.isLight = function () {
            return !this.isDark();
        }),
        (e.prototype.getBrightness = function () {
            var t = this.toRgb();
            return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
        }),
        (e.prototype.getLuminance = function () {
            var t = this.toRgb(),
                r,
                n,
                o,
                a = t.r / 255,
                s = t.g / 255,
                l = t.b / 255;
            return (
                a <= 0.03928 ? (r = a / 12.92) : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
                s <= 0.03928 ? (n = s / 12.92) : (n = Math.pow((s + 0.055) / 1.055, 2.4)),
                l <= 0.03928 ? (o = l / 12.92) : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
                0.2126 * r + 0.7152 * n + 0.0722 * o
            );
        }),
        (e.prototype.getAlpha = function () {
            return this.a;
        }),
        (e.prototype.setAlpha = function (t) {
            return (this.a = c1(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.isMonochrome = function () {
            var t = this.toHsl().s;
            return t === 0;
        }),
        (e.prototype.toHsv = function () {
            var t = pl(this.r, this.g, this.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
        }),
        (e.prototype.toHsvString = function () {
            var t = pl(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.v * 100);
            return this.a === 1
                ? 'hsv('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
                : 'hsva('.concat(r, ', ').concat(n, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHsl = function () {
            var t = cl(this.r, this.g, this.b);
            return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
        }),
        (e.prototype.toHslString = function () {
            var t = cl(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.l * 100);
            return this.a === 1
                ? 'hsl('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
                : 'hsla('.concat(r, ', ').concat(n, '%, ').concat(o, '%, ').concat(this.roundA, ')');
        }),
        (e.prototype.toHex = function (t) {
            return t === void 0 && (t = !1), fl(this.r, this.g, this.b, t);
        }),
        (e.prototype.toHexString = function (t) {
            return t === void 0 && (t = !1), '#' + this.toHex(t);
        }),
        (e.prototype.toHex8 = function (t) {
            return t === void 0 && (t = !1), tx(this.r, this.g, this.b, this.a, t);
        }),
        (e.prototype.toHex8String = function (t) {
            return t === void 0 && (t = !1), '#' + this.toHex8(t);
        }),
        (e.prototype.toHexShortString = function (t) {
            return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
        }),
        (e.prototype.toRgb = function () {
            return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
        }),
        (e.prototype.toRgbString = function () {
            var t = Math.round(this.r),
                r = Math.round(this.g),
                n = Math.round(this.b);
            return this.a === 1
                ? 'rgb('.concat(t, ', ').concat(r, ', ').concat(n, ')')
                : 'rgba('.concat(t, ', ').concat(r, ', ').concat(n, ', ').concat(this.roundA, ')');
        }),
        (e.prototype.toPercentageRgb = function () {
            var t = function (r) {
                return ''.concat(Math.round(et(r, 255) * 100), '%');
            };
            return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function () {
            var t = function (r) {
                return Math.round(et(r, 255) * 100);
            };
            return this.a === 1
                ? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
                : 'rgba('
                      .concat(t(this.r), '%, ')
                      .concat(t(this.g), '%, ')
                      .concat(t(this.b), '%, ')
                      .concat(this.roundA, ')');
        }),
        (e.prototype.toName = function () {
            if (this.a === 0) return 'transparent';
            if (this.a < 1) return !1;
            for (var t = '#' + fl(this.r, this.g, this.b, !1), r = 0, n = Object.entries(g2); r < n.length; r++) {
                var o = n[r],
                    a = o[0],
                    s = o[1];
                if (t === s) return a;
            }
            return !1;
        }),
        (e.prototype.toString = function (t) {
            var r = Boolean(t);
            t = t != null ? t : this.format;
            var n = !1,
                o = this.a < 1 && this.a >= 0,
                a = !r && o && (t.startsWith('hex') || t === 'name');
            return a
                ? t === 'name' && this.a === 0
                    ? this.toName()
                    : this.toRgbString()
                : (t === 'rgb' && (n = this.toRgbString()),
                  t === 'prgb' && (n = this.toPercentageRgbString()),
                  (t === 'hex' || t === 'hex6') && (n = this.toHexString()),
                  t === 'hex3' && (n = this.toHexString(!0)),
                  t === 'hex4' && (n = this.toHex8String(!0)),
                  t === 'hex8' && (n = this.toHex8String()),
                  t === 'name' && (n = this.toName()),
                  t === 'hsl' && (n = this.toHslString()),
                  t === 'hsv' && (n = this.toHsvString()),
                  n || this.toHexString());
        }),
        (e.prototype.toNumber = function () {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        }),
        (e.prototype.clone = function () {
            return new e(this.toString());
        }),
        (e.prototype.lighten = function (t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return (r.l += t / 100), (r.l = bo(r.l)), new e(r);
        }),
        (e.prototype.brighten = function (t) {
            t === void 0 && (t = 10);
            var r = this.toRgb();
            return (
                (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
                (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
                (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
                new e(r)
            );
        }),
        (e.prototype.darken = function (t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return (r.l -= t / 100), (r.l = bo(r.l)), new e(r);
        }),
        (e.prototype.tint = function (t) {
            return t === void 0 && (t = 10), this.mix('white', t);
        }),
        (e.prototype.shade = function (t) {
            return t === void 0 && (t = 10), this.mix('black', t);
        }),
        (e.prototype.desaturate = function (t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return (r.s -= t / 100), (r.s = bo(r.s)), new e(r);
        }),
        (e.prototype.saturate = function (t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return (r.s += t / 100), (r.s = bo(r.s)), new e(r);
        }),
        (e.prototype.greyscale = function () {
            return this.desaturate(100);
        }),
        (e.prototype.spin = function (t) {
            var r = this.toHsl(),
                n = (r.h + t) % 360;
            return (r.h = n < 0 ? 360 + n : n), new e(r);
        }),
        (e.prototype.mix = function (t, r) {
            r === void 0 && (r = 50);
            var n = this.toRgb(),
                o = new e(t).toRgb(),
                a = r / 100,
                s = {
                    r: (o.r - n.r) * a + n.r,
                    g: (o.g - n.g) * a + n.g,
                    b: (o.b - n.b) * a + n.b,
                    a: (o.a - n.a) * a + n.a,
                };
            return new e(s);
        }),
        (e.prototype.analogous = function (t, r) {
            t === void 0 && (t = 6), r === void 0 && (r = 30);
            var n = this.toHsl(),
                o = 360 / r,
                a = [this];
            for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + o) % 360), a.push(new e(n));
            return a;
        }),
        (e.prototype.complement = function () {
            var t = this.toHsl();
            return (t.h = (t.h + 180) % 360), new e(t);
        }),
        (e.prototype.monochromatic = function (t) {
            t === void 0 && (t = 6);
            for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, s = [], l = 1 / t; t--; )
                s.push(new e({ h: n, s: o, v: a })), (a = (a + l) % 1);
            return s;
        }),
        (e.prototype.splitcomplement = function () {
            var t = this.toHsl(),
                r = t.h;
            return [this, new e({ h: (r + 72) % 360, s: t.s, l: t.l }), new e({ h: (r + 216) % 360, s: t.s, l: t.l })];
        }),
        (e.prototype.onBackground = function (t) {
            var r = this.toRgb(),
                n = new e(t).toRgb(),
                o = r.a + n.a * (1 - r.a);
            return new e({
                r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
                g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
                b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
                a: o,
            });
        }),
        (e.prototype.triad = function () {
            return this.polyad(3);
        }),
        (e.prototype.tetrad = function () {
            return this.polyad(4);
        }),
        (e.prototype.polyad = function (t) {
            for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, s = 1; s < t; s++)
                o.push(new e({ h: (n + s * a) % 360, s: r.s, l: r.l }));
            return o;
        }),
        (e.prototype.equals = function (t) {
            return this.toRgbString() === new e(t).toRgbString();
        }),
        e
    );
})();
function tr(e, t = 20) {
    return e.mix('#141414', t).toString();
}
function ix(e) {
    const t = Xu(),
        r = ze('button');
    return P(() => {
        let n = {};
        const o = e.color;
        if (o) {
            const a = new p1(o),
                s = e.dark ? a.tint(20).toString() : tr(a, 20);
            if (e.plain)
                (n = r.cssVarBlock({
                    'bg-color': e.dark ? tr(a, 90) : a.tint(90).toString(),
                    'text-color': o,
                    'border-color': e.dark ? tr(a, 50) : a.tint(50).toString(),
                    'hover-text-color': `var(${r.cssVarName('color-white')})`,
                    'hover-bg-color': o,
                    'hover-border-color': o,
                    'active-bg-color': s,
                    'active-text-color': `var(${r.cssVarName('color-white')})`,
                    'active-border-color': s,
                })),
                    t.value &&
                        ((n[r.cssVarBlockName('disabled-bg-color')] = e.dark ? tr(a, 90) : a.tint(90).toString()),
                        (n[r.cssVarBlockName('disabled-text-color')] = e.dark ? tr(a, 50) : a.tint(50).toString()),
                        (n[r.cssVarBlockName('disabled-border-color')] = e.dark ? tr(a, 80) : a.tint(80).toString()));
            else {
                const l = e.dark ? tr(a, 30) : a.tint(30).toString(),
                    i = a.isDark() ? `var(${r.cssVarName('color-white')})` : `var(${r.cssVarName('color-black')})`;
                if (
                    ((n = r.cssVarBlock({
                        'bg-color': o,
                        'text-color': i,
                        'border-color': o,
                        'hover-bg-color': l,
                        'hover-text-color': i,
                        'hover-border-color': l,
                        'active-bg-color': s,
                        'active-border-color': s,
                    })),
                    t.value)
                ) {
                    const u = e.dark ? tr(a, 50) : a.tint(50).toString();
                    (n[r.cssVarBlockName('disabled-bg-color')] = u),
                        (n[r.cssVarBlockName('disabled-text-color')] = e.dark
                            ? 'rgba(255, 255, 255, 0.5)'
                            : `var(${r.cssVarName('color-white')})`),
                        (n[r.cssVarBlockName('disabled-border-color')] = u);
                }
            }
        }
        return n;
    });
}
const ux = h({ name: 'ElButton' }),
    cx = h({
        ...ux,
        props: m2,
        emits: Yb,
        setup(e, { expose: t, emit: r }) {
            const n = e,
                o = ix(n),
                a = ze('button'),
                { _ref: s, _size: l, _type: i, _disabled: u, _props: c, shouldAddSpace: p, handleClick: d } = Ub(n, r),
                m = P(() => [
                    a.b(),
                    a.m(i.value),
                    a.m(l.value),
                    a.is('disabled', u.value),
                    a.is('loading', n.loading),
                    a.is('plain', n.plain),
                    a.is('round', n.round),
                    a.is('circle', n.circle),
                    a.is('text', n.text),
                    a.is('link', n.link),
                    a.is('has-bg', n.bg),
                ]);
            return (
                t({ ref: s, size: l, type: i, disabled: u, shouldAddSpace: p }),
                (_, g) => (
                    v(),
                    me(
                        Yt(_.tag),
                        gt({ ref_key: '_ref', ref: s }, A(c), { class: A(m), style: A(o), onClick: A(d) }),
                        {
                            default: re(() => [
                                _.loading
                                    ? (v(),
                                      w(
                                          Oe,
                                          { key: 0 },
                                          [
                                              _.$slots.loading
                                                  ? ye(_.$slots, 'loading', { key: 0 })
                                                  : (v(),
                                                    me(
                                                        A(ct),
                                                        { key: 1, class: ke(A(a).is('loading')) },
                                                        { default: re(() => [(v(), me(Yt(_.loadingIcon)))]), _: 1 },
                                                        8,
                                                        ['class']
                                                    )),
                                          ],
                                          64
                                      ))
                                    : _.icon || _.$slots.icon
                                    ? (v(),
                                      me(
                                          A(ct),
                                          { key: 1 },
                                          {
                                              default: re(() => [
                                                  _.icon
                                                      ? (v(), me(Yt(_.icon), { key: 0 }))
                                                      : ye(_.$slots, 'icon', { key: 1 }),
                                              ]),
                                              _: 3,
                                          }
                                      ))
                                    : Et('v-if', !0),
                                _.$slots.default
                                    ? (v(),
                                      w(
                                          'span',
                                          { key: 2, class: ke({ [A(a).em('text', 'expand')]: A(p) }) },
                                          [ye(_.$slots, 'default')],
                                          2
                                      ))
                                    : Et('v-if', !0),
                            ]),
                            _: 3,
                        },
                        16,
                        ['class', 'style', 'onClick']
                    )
                )
            );
        },
    });
var px = Te(cx, [['__file', 'button.vue']]);
const fx = { size: m2.size, type: m2.type },
    dx = h({ name: 'ElButtonGroup' }),
    _x = h({
        ...dx,
        props: fx,
        setup(e) {
            const t = e;
            $e(u1, Lt({ size: nt(t, 'size'), type: nt(t, 'type') }));
            const r = ze('button');
            return (n, o) => (v(), w('div', { class: ke(`${A(r).b('group')}`) }, [ye(n.$slots, 'default')], 2));
        },
    });
var f1 = Te(_x, [['__file', 'button-group.vue']]);
const y0 = jt(px, { ButtonGroup: f1 }),
    hS = qr(f1);
var vx =
    typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {};
const sr = new Map();
let _l;
Xe &&
    (document.addEventListener('mousedown', (e) => (_l = e)),
    document.addEventListener('mouseup', (e) => {
        for (const t of sr.values()) for (const { documentHandler: r } of t) r(e, _l);
    }));
function vl(e, t) {
    let r = [];
    return (
        Array.isArray(t.arg) ? (r = t.arg) : Wn(t.arg) && r.push(t.arg),
        function (n, o) {
            const a = t.instance.popperRef,
                s = n.target,
                l = o == null ? void 0 : o.target,
                i = !t || !t.instance,
                u = !s || !l,
                c = e.contains(s) || e.contains(l),
                p = e === s,
                d = (r.length && r.some((_) => (_ == null ? void 0 : _.contains(s)))) || (r.length && r.includes(l)),
                m = a && (a.contains(s) || a.contains(l));
            i || u || c || p || d || m || t.value(n, o);
        }
    );
}
const hx = {
        beforeMount(e, t) {
            sr.has(e) || sr.set(e, []), sr.get(e).push({ documentHandler: vl(e, t), bindingFn: t.value });
        },
        updated(e, t) {
            sr.has(e) || sr.set(e, []);
            const r = sr.get(e),
                n = r.findIndex((a) => a.bindingFn === t.oldValue),
                o = { documentHandler: vl(e, t), bindingFn: t.value };
            n >= 0 ? r.splice(n, 1, o) : r.push(o);
        },
        unmounted(e) {
            sr.delete(e);
        },
    },
    mx = h({ name: 'ElCollapseTransition' }),
    gx = h({
        ...mx,
        setup(e) {
            const t = ze('collapse-transition'),
                r = (o) => {
                    (o.style.maxHeight = ''),
                        (o.style.overflow = o.dataset.oldOverflow),
                        (o.style.paddingTop = o.dataset.oldPaddingTop),
                        (o.style.paddingBottom = o.dataset.oldPaddingBottom);
                },
                n = {
                    beforeEnter(o) {
                        o.dataset || (o.dataset = {}),
                            (o.dataset.oldPaddingTop = o.style.paddingTop),
                            (o.dataset.oldPaddingBottom = o.style.paddingBottom),
                            o.style.height && (o.dataset.elExistsHeight = o.style.height),
                            (o.style.maxHeight = 0),
                            (o.style.paddingTop = 0),
                            (o.style.paddingBottom = 0);
                    },
                    enter(o) {
                        requestAnimationFrame(() => {
                            (o.dataset.oldOverflow = o.style.overflow),
                                o.dataset.elExistsHeight
                                    ? (o.style.maxHeight = o.dataset.elExistsHeight)
                                    : o.scrollHeight !== 0
                                    ? (o.style.maxHeight = `${o.scrollHeight}px`)
                                    : (o.style.maxHeight = 0),
                                (o.style.paddingTop = o.dataset.oldPaddingTop),
                                (o.style.paddingBottom = o.dataset.oldPaddingBottom),
                                (o.style.overflow = 'hidden');
                        });
                    },
                    afterEnter(o) {
                        (o.style.maxHeight = ''), (o.style.overflow = o.dataset.oldOverflow);
                    },
                    enterCancelled(o) {
                        r(o);
                    },
                    beforeLeave(o) {
                        o.dataset || (o.dataset = {}),
                            (o.dataset.oldPaddingTop = o.style.paddingTop),
                            (o.dataset.oldPaddingBottom = o.style.paddingBottom),
                            (o.dataset.oldOverflow = o.style.overflow),
                            (o.style.maxHeight = `${o.scrollHeight}px`),
                            (o.style.overflow = 'hidden');
                    },
                    leave(o) {
                        o.scrollHeight !== 0 &&
                            ((o.style.maxHeight = 0), (o.style.paddingTop = 0), (o.style.paddingBottom = 0));
                    },
                    afterLeave(o) {
                        r(o);
                    },
                    leaveCancelled(o) {
                        r(o);
                    },
                };
            return (o, a) => (
                v(),
                me(Nr, gt({ name: A(t).b() }, f4(n)), { default: re(() => [ye(o.$slots, 'default')]), _: 3 }, 16, [
                    'name',
                ])
            );
        },
    });
var Bo = Te(gx, [['__file', 'collapse-transition.vue']]);
Bo.install = (e) => {
    e.component(Bo.name, Bo);
};
const wx = Bo,
    yx = h({ inheritAttrs: !1 });
function bx(e, t, r, n, o, a) {
    return ye(e.$slots, 'default');
}
var xx = Te(yx, [
    ['render', bx],
    ['__file', 'collection.vue'],
]);
const Cx = h({ name: 'ElCollectionItem', inheritAttrs: !1 });
function Mx(e, t, r, n, o, a) {
    return ye(e.$slots, 'default');
}
var Ex = Te(Cx, [
    ['render', Mx],
    ['__file', 'collection-item.vue'],
]);
const d1 = 'data-el-collection-item',
    _1 = (e) => {
        const t = `El${e}Collection`,
            r = `${t}Item`,
            n = Symbol(t),
            o = Symbol(r),
            a = {
                ...xx,
                name: t,
                setup() {
                    const l = D(null),
                        i = new Map();
                    $e(n, {
                        itemMap: i,
                        getItems: () => {
                            const c = A(l);
                            if (!c) return [];
                            const p = Array.from(c.querySelectorAll(`[${d1}]`));
                            return [...i.values()].sort((m, _) => p.indexOf(m.ref) - p.indexOf(_.ref));
                        },
                        collectionRef: l,
                    });
                },
            },
            s = {
                ...Ex,
                name: r,
                setup(l, { attrs: i }) {
                    const u = D(null),
                        c = le(n, void 0);
                    $e(o, { collectionItemRef: u }),
                        Ge(() => {
                            const p = A(u);
                            p && c.itemMap.set(p, { ref: p, ...i });
                        }),
                        ot(() => {
                            const p = A(u);
                            c.itemMap.delete(p);
                        });
                },
            };
        return { COLLECTION_INJECTION_KEY: n, COLLECTION_ITEM_INJECTION_KEY: o, ElCollection: a, ElCollectionItem: s };
    },
    Sx = Le({
        style: { type: de([String, Array, Object]) },
        currentTabId: { type: de(String) },
        defaultCurrentTabId: String,
        loop: Boolean,
        dir: { type: String, values: ['ltr', 'rtl'], default: 'ltr' },
        orientation: { type: de(String) },
        onBlur: Function,
        onFocus: Function,
        onMousedown: Function,
    }),
    {
        ElCollection: Ax,
        ElCollectionItem: zx,
        COLLECTION_INJECTION_KEY: b0,
        COLLECTION_ITEM_INJECTION_KEY: Tx,
    } = _1('RovingFocusGroup'),
    x0 = Symbol('elRovingFocusGroup'),
    v1 = Symbol('elRovingFocusGroupItem'),
    Hx = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
    },
    Bx = (e, t) => {
        if (t !== 'rtl') return e;
        switch (e) {
            case we.right:
                return we.left;
            case we.left:
                return we.right;
            default:
                return e;
        }
    },
    Lx = (e, t, r) => {
        const n = Bx(e.key, r);
        if (
            !(t === 'vertical' && [we.left, we.right].includes(n)) &&
            !(t === 'horizontal' && [we.up, we.down].includes(n))
        )
            return Hx[n];
    },
    Vx = (e, t) => e.map((r, n) => e[(n + t) % e.length]),
    C0 = (e) => {
        const { activeElement: t } = document;
        for (const r of e) if (r === t || (r.focus(), t !== document.activeElement)) return;
    },
    hl = 'currentTabIdChange',
    ml = 'rovingFocusGroup.entryFocus',
    Ox = { bubbles: !1, cancelable: !0 },
    Px = h({
        name: 'ElRovingFocusGroupImpl',
        inheritAttrs: !1,
        props: Sx,
        emits: [hl, 'entryFocus'],
        setup(e, { emit: t }) {
            var r;
            const n = D((r = e.currentTabId || e.defaultCurrentTabId) != null ? r : null),
                o = D(!1),
                a = D(!1),
                s = D(null),
                { getItems: l } = le(b0, void 0),
                i = P(() => [{ outline: 'none' }, e.style]),
                u = (g) => {
                    t(hl, g);
                },
                c = () => {
                    o.value = !0;
                },
                p = Ke(
                    (g) => {
                        var x;
                        (x = e.onMousedown) == null || x.call(e, g);
                    },
                    () => {
                        a.value = !0;
                    }
                ),
                d = Ke(
                    (g) => {
                        var x;
                        (x = e.onFocus) == null || x.call(e, g);
                    },
                    (g) => {
                        const x = !A(a),
                            { target: y, currentTarget: C } = g;
                        if (y === C && x && !A(o)) {
                            const E = new Event(ml, Ox);
                            if ((C == null || C.dispatchEvent(E), !E.defaultPrevented)) {
                                const S = l().filter((V) => V.focusable),
                                    H = S.find((V) => V.active),
                                    z = S.find((V) => V.id === A(n)),
                                    T = [H, z, ...S].filter(Boolean).map((V) => V.ref);
                                C0(T);
                            }
                        }
                        a.value = !1;
                    }
                ),
                m = Ke(
                    (g) => {
                        var x;
                        (x = e.onBlur) == null || x.call(e, g);
                    },
                    () => {
                        o.value = !1;
                    }
                ),
                _ = (...g) => {
                    t('entryFocus', ...g);
                };
            $e(x0, {
                currentTabbedId: $r(n),
                loop: nt(e, 'loop'),
                tabIndex: P(() => (A(o) ? -1 : 0)),
                rovingFocusGroupRef: s,
                rovingFocusGroupRootStyle: i,
                orientation: nt(e, 'orientation'),
                dir: nt(e, 'dir'),
                onItemFocus: u,
                onItemShiftTab: c,
                onBlur: m,
                onFocus: d,
                onMousedown: p,
            }),
                ce(
                    () => e.currentTabId,
                    (g) => {
                        n.value = g != null ? g : null;
                    }
                ),
                Ft(s, ml, _);
        },
    });
function Ix(e, t, r, n, o, a) {
    return ye(e.$slots, 'default');
}
var kx = Te(Px, [
    ['render', Ix],
    ['__file', 'roving-focus-group-impl.vue'],
]);
const Rx = h({ name: 'ElRovingFocusGroup', components: { ElFocusGroupCollection: Ax, ElRovingFocusGroupImpl: kx } });
function Fx(e, t, r, n, o, a) {
    const s = Fe('el-roving-focus-group-impl'),
        l = Fe('el-focus-group-collection');
    return (
        v(),
        me(l, null, {
            default: re(() => [G(s, sc($i(e.$attrs)), { default: re(() => [ye(e.$slots, 'default')]), _: 3 }, 16)]),
            _: 3,
        })
    );
}
var $x = Te(Rx, [
    ['render', Fx],
    ['__file', 'roving-focus-group.vue'],
]);
const Nx = h({
    components: { ElRovingFocusCollectionItem: zx },
    props: { focusable: { type: Boolean, default: !0 }, active: { type: Boolean, default: !1 } },
    emits: ['mousedown', 'focus', 'keydown'],
    setup(e, { emit: t }) {
        const { currentTabbedId: r, loop: n, onItemFocus: o, onItemShiftTab: a } = le(x0, void 0),
            { getItems: s } = le(b0, void 0),
            l = va(),
            i = D(null),
            u = Ke(
                (m) => {
                    t('mousedown', m);
                },
                (m) => {
                    e.focusable ? o(A(l)) : m.preventDefault();
                }
            ),
            c = Ke(
                (m) => {
                    t('focus', m);
                },
                () => {
                    o(A(l));
                }
            ),
            p = Ke(
                (m) => {
                    t('keydown', m);
                },
                (m) => {
                    const { key: _, shiftKey: g, target: x, currentTarget: y } = m;
                    if (_ === we.tab && g) {
                        a();
                        return;
                    }
                    if (x !== y) return;
                    const C = Lx(m);
                    if (C) {
                        m.preventDefault();
                        let S = s()
                            .filter((H) => H.focusable)
                            .map((H) => H.ref);
                        switch (C) {
                            case 'last': {
                                S.reverse();
                                break;
                            }
                            case 'prev':
                            case 'next': {
                                C === 'prev' && S.reverse();
                                const H = S.indexOf(y);
                                S = n.value ? Vx(S, H + 1) : S.slice(H + 1);
                                break;
                            }
                        }
                        ht(() => {
                            C0(S);
                        });
                    }
                }
            ),
            d = P(() => r.value === A(l));
        return (
            $e(v1, {
                rovingFocusGroupItemRef: i,
                tabIndex: P(() => (A(d) ? 0 : -1)),
                handleMousedown: u,
                handleFocus: c,
                handleKeydown: p,
            }),
            { id: l, handleKeydown: p, handleFocus: c, handleMousedown: u }
        );
    },
});
function Dx(e, t, r, n, o, a) {
    const s = Fe('el-roving-focus-collection-item');
    return (
        v(),
        me(
            s,
            { id: e.id, focusable: e.focusable, active: e.active },
            { default: re(() => [ye(e.$slots, 'default')]), _: 3 },
            8,
            ['id', 'focusable', 'active']
        )
    );
}
var jx = Te(Nx, [
    ['render', Dx],
    ['__file', 'roving-focus-item.vue'],
]);
const qx = Le({
        trigger: w0.trigger,
        effect: { ...qo.effect, default: 'light' },
        type: { type: de(String) },
        placement: { type: de(String), default: 'bottom' },
        popperOptions: { type: de(Object), default: () => ({}) },
        id: String,
        size: { type: String, default: '' },
        splitButton: Boolean,
        hideOnClick: { type: Boolean, default: !0 },
        loop: { type: Boolean, default: !0 },
        showTimeout: { type: Number, default: 150 },
        hideTimeout: { type: Number, default: 150 },
        tabindex: { type: de([Number, String]), default: 0 },
        maxHeight: { type: de([Number, String]), default: '' },
        popperClass: { type: String, default: '' },
        disabled: { type: Boolean, default: !1 },
        role: { type: String, default: 'menu' },
        buttonProps: { type: de(Object) },
        teleported: qo.teleported,
    }),
    h1 = Le({
        command: { type: [Object, String, Number], default: () => ({}) },
        disabled: Boolean,
        divided: Boolean,
        textValue: String,
        icon: { type: Wt },
    }),
    Kx = Le({ onKeydown: { type: de(Function) } }),
    Ux = [we.down, we.pageDown, we.home],
    m1 = [we.up, we.pageUp, we.end],
    Wx = [...Ux, ...m1],
    {
        ElCollection: Gx,
        ElCollectionItem: Yx,
        COLLECTION_INJECTION_KEY: Jx,
        COLLECTION_ITEM_INJECTION_KEY: Zx,
    } = _1('Dropdown'),
    wa = Symbol('elDropdown'),
    { ButtonGroup: Qx } = y0,
    Xx = h({
        name: 'ElDropdown',
        components: {
            ElButton: y0,
            ElButtonGroup: Qx,
            ElScrollbar: ky,
            ElDropdownCollection: Gx,
            ElTooltip: ga,
            ElRovingFocusGroup: $x,
            ElOnlyChild: n1,
            ElIcon: ct,
            ArrowDown: K2,
        },
        props: qx,
        emits: ['visible-change', 'click', 'command'],
        setup(e, { emit: t }) {
            const r = Ne(),
                n = ze('dropdown'),
                { t: o } = zu(),
                a = D(),
                s = D(),
                l = D(null),
                i = D(null),
                u = D(null),
                c = D(null),
                p = D(!1),
                d = [we.enter, we.space, we.down],
                m = P(() => ({ maxHeight: Gn(e.maxHeight) })),
                _ = P(() => [n.m(H.value)]),
                g = P(() => T7(e.trigger)),
                x = va().value,
                y = P(() => e.id || x);
            ce(
                [a, g],
                ([B, J], [he]) => {
                    var oe, _e, ve;
                    (oe = he == null ? void 0 : he.$el) != null &&
                        oe.removeEventListener &&
                        he.$el.removeEventListener('pointerenter', O),
                        (_e = B == null ? void 0 : B.$el) != null &&
                            _e.removeEventListener &&
                            B.$el.removeEventListener('pointerenter', O),
                        ((ve = B == null ? void 0 : B.$el) == null ? void 0 : ve.addEventListener) &&
                            J.includes('hover') &&
                            B.$el.addEventListener('pointerenter', O);
                },
                { immediate: !0 }
            ),
                ot(() => {
                    var B, J;
                    (J = (B = a.value) == null ? void 0 : B.$el) != null &&
                        J.removeEventListener &&
                        a.value.$el.removeEventListener('pointerenter', O);
                });
            function C() {
                E();
            }
            function E() {
                var B;
                (B = l.value) == null || B.onClose();
            }
            function S() {
                var B;
                (B = l.value) == null || B.onOpen();
            }
            const H = Qu();
            function z(...B) {
                t('command', ...B);
            }
            function O() {
                var B, J;
                (J = (B = a.value) == null ? void 0 : B.$el) == null || J.focus();
            }
            function T() {}
            function V() {
                const B = A(i);
                g.value.includes('hover') && (B == null || B.focus()), (c.value = null);
            }
            function F(B) {
                c.value = B;
            }
            function j(B) {
                p.value || (B.preventDefault(), B.stopImmediatePropagation());
            }
            function R() {
                t('visible-change', !0);
            }
            function Q(B) {
                (B == null ? void 0 : B.type) === 'keydown' && i.value.focus();
            }
            function q() {
                t('visible-change', !1);
            }
            return (
                $e(wa, {
                    contentRef: i,
                    role: P(() => e.role),
                    triggerId: y,
                    isUsingKeyboard: p,
                    onItemEnter: T,
                    onItemLeave: V,
                }),
                $e('elDropdown', {
                    instance: r,
                    dropdownSize: H,
                    handleClick: C,
                    commandHandler: z,
                    trigger: nt(e, 'trigger'),
                    hideOnClick: nt(e, 'hideOnClick'),
                }),
                {
                    t: o,
                    ns: n,
                    scrollbar: u,
                    wrapStyle: m,
                    dropdownTriggerKls: _,
                    dropdownSize: H,
                    triggerId: y,
                    triggerKeys: d,
                    currentTabId: c,
                    handleCurrentTabIdChange: F,
                    handlerMainButtonClick: (B) => {
                        t('click', B);
                    },
                    handleEntryFocus: j,
                    handleClose: E,
                    handleOpen: S,
                    handleBeforeShowTooltip: R,
                    handleShowTooltip: Q,
                    handleBeforeHideTooltip: q,
                    onFocusAfterTrapped: (B) => {
                        var J, he;
                        B.preventDefault(),
                            (he = (J = i.value) == null ? void 0 : J.focus) == null ||
                                he.call(J, { preventScroll: !0 });
                    },
                    popperRef: l,
                    contentRef: i,
                    triggeringElementRef: a,
                    referenceElementRef: s,
                }
            );
        },
    });
function eC(e, t, r, n, o, a) {
    var s;
    const l = Fe('el-dropdown-collection'),
        i = Fe('el-roving-focus-group'),
        u = Fe('el-scrollbar'),
        c = Fe('el-only-child'),
        p = Fe('el-tooltip'),
        d = Fe('el-button'),
        m = Fe('arrow-down'),
        _ = Fe('el-icon'),
        g = Fe('el-button-group');
    return (
        v(),
        w(
            'div',
            { class: ke([e.ns.b(), e.ns.is('disabled', e.disabled)]) },
            [
                G(
                    p,
                    {
                        ref: 'popperRef',
                        role: e.role,
                        effect: e.effect,
                        'fallback-placements': ['bottom', 'top'],
                        'popper-options': e.popperOptions,
                        'gpu-acceleration': !1,
                        'hide-after': e.trigger === 'hover' ? e.hideTimeout : 0,
                        'manual-mode': !0,
                        placement: e.placement,
                        'popper-class': [e.ns.e('popper'), e.popperClass],
                        'reference-element': (s = e.referenceElementRef) == null ? void 0 : s.$el,
                        trigger: e.trigger,
                        'trigger-keys': e.triggerKeys,
                        'trigger-target-el': e.contentRef,
                        'show-after': e.trigger === 'hover' ? e.showTimeout : 0,
                        'stop-popper-mouse-event': !1,
                        'virtual-ref': e.triggeringElementRef,
                        'virtual-triggering': e.splitButton,
                        disabled: e.disabled,
                        transition: `${e.ns.namespace.value}-zoom-in-top`,
                        teleported: e.teleported,
                        pure: '',
                        persistent: '',
                        onBeforeShow: e.handleBeforeShowTooltip,
                        onShow: e.handleShowTooltip,
                        onBeforeHide: e.handleBeforeHideTooltip,
                    },
                    p4(
                        {
                            content: re(() => [
                                G(
                                    u,
                                    {
                                        ref: 'scrollbar',
                                        'wrap-style': e.wrapStyle,
                                        tag: 'div',
                                        'view-class': e.ns.e('list'),
                                    },
                                    {
                                        default: re(() => [
                                            G(
                                                i,
                                                {
                                                    loop: e.loop,
                                                    'current-tab-id': e.currentTabId,
                                                    orientation: 'horizontal',
                                                    onCurrentTabIdChange: e.handleCurrentTabIdChange,
                                                    onEntryFocus: e.handleEntryFocus,
                                                },
                                                {
                                                    default: re(() => [
                                                        G(l, null, {
                                                            default: re(() => [ye(e.$slots, 'dropdown')]),
                                                            _: 3,
                                                        }),
                                                    ]),
                                                    _: 3,
                                                },
                                                8,
                                                ['loop', 'current-tab-id', 'onCurrentTabIdChange', 'onEntryFocus']
                                            ),
                                        ]),
                                        _: 3,
                                    },
                                    8,
                                    ['wrap-style', 'view-class']
                                ),
                            ]),
                            _: 2,
                        },
                        [
                            e.splitButton
                                ? void 0
                                : {
                                      name: 'default',
                                      fn: re(() => [
                                          G(
                                              c,
                                              {
                                                  id: e.triggerId,
                                                  ref: 'triggeringElementRef',
                                                  role: 'button',
                                                  tabindex: e.tabindex,
                                              },
                                              { default: re(() => [ye(e.$slots, 'default')]), _: 3 },
                                              8,
                                              ['id', 'tabindex']
                                          ),
                                      ]),
                                  },
                        ]
                    ),
                    1032,
                    [
                        'role',
                        'effect',
                        'popper-options',
                        'hide-after',
                        'placement',
                        'popper-class',
                        'reference-element',
                        'trigger',
                        'trigger-keys',
                        'trigger-target-el',
                        'show-after',
                        'virtual-ref',
                        'virtual-triggering',
                        'disabled',
                        'transition',
                        'teleported',
                        'onBeforeShow',
                        'onShow',
                        'onBeforeHide',
                    ]
                ),
                e.splitButton
                    ? (v(),
                      me(
                          g,
                          { key: 0 },
                          {
                              default: re(() => [
                                  G(
                                      d,
                                      gt({ ref: 'referenceElementRef' }, e.buttonProps, {
                                          size: e.dropdownSize,
                                          type: e.type,
                                          disabled: e.disabled,
                                          tabindex: e.tabindex,
                                          onClick: e.handlerMainButtonClick,
                                      }),
                                      { default: re(() => [ye(e.$slots, 'default')]), _: 3 },
                                      16,
                                      ['size', 'type', 'disabled', 'tabindex', 'onClick']
                                  ),
                                  G(
                                      d,
                                      gt({ id: e.triggerId, ref: 'triggeringElementRef' }, e.buttonProps, {
                                          role: 'button',
                                          size: e.dropdownSize,
                                          type: e.type,
                                          class: e.ns.e('caret-button'),
                                          disabled: e.disabled,
                                          tabindex: e.tabindex,
                                          'aria-label': e.t('el.dropdown.toggleDropdown'),
                                      }),
                                      {
                                          default: re(() => [
                                              G(
                                                  _,
                                                  { class: ke(e.ns.e('icon')) },
                                                  { default: re(() => [G(m)]), _: 1 },
                                                  8,
                                                  ['class']
                                              ),
                                          ]),
                                          _: 1,
                                      },
                                      16,
                                      ['id', 'size', 'type', 'class', 'disabled', 'tabindex', 'aria-label']
                                  ),
                              ]),
                              _: 3,
                          }
                      ))
                    : Et('v-if', !0),
            ],
            2
        )
    );
}
var tC = Te(Xx, [
    ['render', eC],
    ['__file', 'dropdown.vue'],
]);
const rC = h({
        name: 'DropdownItemImpl',
        components: { ElIcon: ct },
        props: h1,
        emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
        setup(e, { emit: t }) {
            const r = ze('dropdown'),
                { role: n } = le(wa, void 0),
                { collectionItemRef: o } = le(Zx, void 0),
                { collectionItemRef: a } = le(Tx, void 0),
                {
                    rovingFocusGroupItemRef: s,
                    tabIndex: l,
                    handleFocus: i,
                    handleKeydown: u,
                    handleMousedown: c,
                } = le(v1, void 0),
                p = Mu(o, a, s),
                d = P(() => (n.value === 'menu' ? 'menuitem' : n.value === 'navigation' ? 'link' : 'button')),
                m = Ke((_) => {
                    const { code: g } = _;
                    if (g === we.enter || g === we.space)
                        return _.preventDefault(), _.stopImmediatePropagation(), t('clickimpl', _), !0;
                }, u);
            return {
                ns: r,
                itemRef: p,
                dataset: { [d1]: '' },
                role: d,
                tabIndex: l,
                handleFocus: i,
                handleKeydown: m,
                handleMousedown: c,
            };
        },
    }),
    nC = ['aria-disabled', 'tabindex', 'role'];
function oC(e, t, r, n, o, a) {
    const s = Fe('el-icon');
    return (
        v(),
        w(
            Oe,
            null,
            [
                e.divided
                    ? (v(),
                      w(
                          'li',
                          gt({ key: 0, role: 'separator', class: e.ns.bem('menu', 'item', 'divided') }, e.$attrs),
                          null,
                          16
                      ))
                    : Et('v-if', !0),
                f(
                    'li',
                    gt(
                        { ref: e.itemRef },
                        { ...e.dataset, ...e.$attrs },
                        {
                            'aria-disabled': e.disabled,
                            class: [e.ns.be('menu', 'item'), e.ns.is('disabled', e.disabled)],
                            tabindex: e.tabIndex,
                            role: e.role,
                            onClick: t[0] || (t[0] = (l) => e.$emit('clickimpl', l)),
                            onFocus: t[1] || (t[1] = (...l) => e.handleFocus && e.handleFocus(...l)),
                            onKeydown:
                                t[2] || (t[2] = i2((...l) => e.handleKeydown && e.handleKeydown(...l), ['self'])),
                            onMousedown: t[3] || (t[3] = (...l) => e.handleMousedown && e.handleMousedown(...l)),
                            onPointermove: t[4] || (t[4] = (l) => e.$emit('pointermove', l)),
                            onPointerleave: t[5] || (t[5] = (l) => e.$emit('pointerleave', l)),
                        }
                    ),
                    [
                        e.icon
                            ? (v(), me(s, { key: 0 }, { default: re(() => [(v(), me(Yt(e.icon)))]), _: 1 }))
                            : Et('v-if', !0),
                        ye(e.$slots, 'default'),
                    ],
                    16,
                    nC
                ),
            ],
            64
        )
    );
}
var aC = Te(rC, [
    ['render', oC],
    ['__file', 'dropdown-item-impl.vue'],
]);
const g1 = () => {
        const e = le('elDropdown', {}),
            t = P(() => (e == null ? void 0 : e.dropdownSize));
        return { elDropdown: e, _elDropdownSize: t };
    },
    sC = h({
        name: 'ElDropdownItem',
        components: { ElDropdownCollectionItem: Yx, ElRovingFocusItem: jx, ElDropdownItemImpl: aC },
        inheritAttrs: !1,
        props: h1,
        emits: ['pointermove', 'pointerleave', 'click'],
        setup(e, { emit: t, attrs: r }) {
            const { elDropdown: n } = g1(),
                o = Ne(),
                a = D(null),
                s = P(() => {
                    var m, _;
                    return (_ = (m = A(a)) == null ? void 0 : m.textContent) != null ? _ : '';
                }),
                { onItemEnter: l, onItemLeave: i } = le(wa, void 0),
                u = Ke(
                    (m) => (t('pointermove', m), m.defaultPrevented),
                    xs((m) => {
                        if (e.disabled) {
                            i(m);
                            return;
                        }
                        const _ = m.currentTarget;
                        _ === document.activeElement ||
                            _.contains(document.activeElement) ||
                            (l(m), m.defaultPrevented || _ == null || _.focus());
                    })
                ),
                c = Ke(
                    (m) => (t('pointerleave', m), m.defaultPrevented),
                    xs((m) => {
                        i(m);
                    })
                ),
                p = Ke(
                    (m) => {
                        if (!e.disabled) return t('click', m), m.type !== 'keydown' && m.defaultPrevented;
                    },
                    (m) => {
                        var _, g, x;
                        if (e.disabled) {
                            m.stopImmediatePropagation();
                            return;
                        }
                        (_ = n == null ? void 0 : n.hideOnClick) != null &&
                            _.value &&
                            ((g = n.handleClick) == null || g.call(n)),
                            (x = n.commandHandler) == null || x.call(n, e.command, o, m);
                    }
                ),
                d = P(() => ({ ...e, ...r }));
            return { handleClick: p, handlePointerMove: u, handlePointerLeave: c, textContent: s, propsAndAttrs: d };
        },
    });
function lC(e, t, r, n, o, a) {
    var s;
    const l = Fe('el-dropdown-item-impl'),
        i = Fe('el-roving-focus-item'),
        u = Fe('el-dropdown-collection-item');
    return (
        v(),
        me(
            u,
            { disabled: e.disabled, 'text-value': (s = e.textValue) != null ? s : e.textContent },
            {
                default: re(() => [
                    G(
                        i,
                        { focusable: !e.disabled },
                        {
                            default: re(() => [
                                G(
                                    l,
                                    gt(e.propsAndAttrs, {
                                        onPointerleave: e.handlePointerLeave,
                                        onPointermove: e.handlePointerMove,
                                        onClickimpl: e.handleClick,
                                    }),
                                    { default: re(() => [ye(e.$slots, 'default')]), _: 3 },
                                    16,
                                    ['onPointerleave', 'onPointermove', 'onClickimpl']
                                ),
                            ]),
                            _: 3,
                        },
                        8,
                        ['focusable']
                    ),
                ]),
                _: 3,
            },
            8,
            ['disabled', 'text-value']
        )
    );
}
var w1 = Te(sC, [
    ['render', lC],
    ['__file', 'dropdown-item.vue'],
]);
const iC = h({
        name: 'ElDropdownMenu',
        props: Kx,
        setup(e) {
            const t = ze('dropdown'),
                { _elDropdownSize: r } = g1(),
                n = r.value,
                { focusTrapRef: o, onKeydown: a } = le(s1, void 0),
                { contentRef: s, role: l, triggerId: i } = le(wa, void 0),
                { collectionRef: u, getItems: c } = le(Jx, void 0),
                {
                    rovingFocusGroupRef: p,
                    rovingFocusGroupRootStyle: d,
                    tabIndex: m,
                    onBlur: _,
                    onFocus: g,
                    onMousedown: x,
                } = le(x0, void 0),
                { collectionRef: y } = le(b0, void 0),
                C = P(() => [t.b('menu'), t.bm('menu', n == null ? void 0 : n.value)]),
                E = Mu(s, u, o, p, y),
                S = Ke(
                    (z) => {
                        var O;
                        (O = e.onKeydown) == null || O.call(e, z);
                    },
                    (z) => {
                        const { currentTarget: O, code: T, target: V } = z;
                        if (
                            (O.contains(V),
                            we.tab === T && z.stopImmediatePropagation(),
                            z.preventDefault(),
                            V !== A(s) || !Wx.includes(T))
                        )
                            return;
                        const j = c()
                            .filter((R) => !R.disabled)
                            .map((R) => R.ref);
                        m1.includes(T) && j.reverse(), C0(j);
                    }
                );
            return {
                size: n,
                rovingFocusGroupRootStyle: d,
                tabIndex: m,
                dropdownKls: C,
                role: l,
                triggerId: i,
                dropdownListWrapperRef: E,
                handleKeydown: (z) => {
                    S(z), a(z);
                },
                onBlur: _,
                onFocus: g,
                onMousedown: x,
            };
        },
    }),
    uC = ['role', 'aria-labelledby'];
function cC(e, t, r, n, o, a) {
    return (
        v(),
        w(
            'ul',
            {
                ref: e.dropdownListWrapperRef,
                class: ke(e.dropdownKls),
                style: Mt(e.rovingFocusGroupRootStyle),
                tabindex: -1,
                role: e.role,
                'aria-labelledby': e.triggerId,
                onBlur: t[0] || (t[0] = (...s) => e.onBlur && e.onBlur(...s)),
                onFocus: t[1] || (t[1] = (...s) => e.onFocus && e.onFocus(...s)),
                onKeydown: t[2] || (t[2] = i2((...s) => e.handleKeydown && e.handleKeydown(...s), ['self'])),
                onMousedown: t[3] || (t[3] = i2((...s) => e.onMousedown && e.onMousedown(...s), ['self'])),
            },
            [ye(e.$slots, 'default')],
            46,
            uC
        )
    );
}
var y1 = Te(iC, [
    ['render', cC],
    ['__file', 'dropdown-menu.vue'],
]);
const b1 = jt(tC, { DropdownItem: w1, DropdownMenu: y1 }),
    x1 = qr(w1),
    C1 = qr(y1);
class pC {
    constructor(t, r) {
        (this.parent = t), (this.domNode = r), (this.subIndex = 0), (this.subIndex = 0), this.init();
    }
    init() {
        (this.subMenuItems = this.domNode.querySelectorAll('li')), this.addListeners();
    }
    gotoSubIndex(t) {
        t === this.subMenuItems.length ? (t = 0) : t < 0 && (t = this.subMenuItems.length - 1),
            this.subMenuItems[t].focus(),
            (this.subIndex = t);
    }
    addListeners() {
        const t = this.parent.domNode;
        Array.prototype.forEach.call(this.subMenuItems, (r) => {
            r.addEventListener('keydown', (n) => {
                let o = !1;
                switch (n.code) {
                    case we.down: {
                        this.gotoSubIndex(this.subIndex + 1), (o = !0);
                        break;
                    }
                    case we.up: {
                        this.gotoSubIndex(this.subIndex - 1), (o = !0);
                        break;
                    }
                    case we.tab: {
                        zo(t, 'mouseleave');
                        break;
                    }
                    case we.enter:
                    case we.space: {
                        (o = !0), n.currentTarget.click();
                        break;
                    }
                }
                return o && (n.preventDefault(), n.stopPropagation()), !1;
            });
        });
    }
}
class fC {
    constructor(t, r) {
        (this.domNode = t), (this.submenu = null), (this.submenu = null), this.init(r);
    }
    init(t) {
        this.domNode.setAttribute('tabindex', '0');
        const r = this.domNode.querySelector(`.${t}-menu`);
        r && (this.submenu = new pC(this, r)), this.addListeners();
    }
    addListeners() {
        this.domNode.addEventListener('keydown', (t) => {
            let r = !1;
            switch (t.code) {
                case we.down: {
                    zo(t.currentTarget, 'mouseenter'), this.submenu && this.submenu.gotoSubIndex(0), (r = !0);
                    break;
                }
                case we.up: {
                    zo(t.currentTarget, 'mouseenter'),
                        this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
                        (r = !0);
                    break;
                }
                case we.tab: {
                    zo(t.currentTarget, 'mouseleave');
                    break;
                }
                case we.enter:
                case we.space: {
                    (r = !0), t.currentTarget.click();
                    break;
                }
            }
            r && t.preventDefault();
        });
    }
}
class dC {
    constructor(t, r) {
        (this.domNode = t), this.init(r);
    }
    init(t) {
        const r = this.domNode.childNodes;
        Array.from(r).forEach((n) => {
            n.nodeType === 1 && new fC(n, t);
        });
    }
}
const _C = h({
    name: 'ElMenuCollapseTransition',
    setup() {
        const e = ze('menu');
        return {
            listeners: {
                onBeforeEnter: (r) => (r.style.opacity = '0.2'),
                onEnter(r, n) {
                    ho(r, `${e.namespace.value}-opacity-transition`), (r.style.opacity = '1'), n();
                },
                onAfterEnter(r) {
                    Ia(r, `${e.namespace.value}-opacity-transition`), (r.style.opacity = '');
                },
                onBeforeLeave(r) {
                    r.dataset || (r.dataset = {}),
                        P7(r, e.m('collapse'))
                            ? (Ia(r, e.m('collapse')),
                              (r.dataset.oldOverflow = r.style.overflow),
                              (r.dataset.scrollWidth = r.clientWidth.toString()),
                              ho(r, e.m('collapse')))
                            : (ho(r, e.m('collapse')),
                              (r.dataset.oldOverflow = r.style.overflow),
                              (r.dataset.scrollWidth = r.clientWidth.toString()),
                              Ia(r, e.m('collapse'))),
                        (r.style.width = `${r.scrollWidth}px`),
                        (r.style.overflow = 'hidden');
                },
                onLeave(r) {
                    ho(r, 'horizontal-collapse-transition'), (r.style.width = `${r.dataset.scrollWidth}px`);
                },
            },
        };
    },
});
function vC(e, t, r, n, o, a) {
    return v(), me(Nr, gt({ mode: 'out-in' }, e.listeners), { default: re(() => [ye(e.$slots, 'default')]), _: 3 }, 16);
}
var hC = Te(_C, [
    ['render', vC],
    ['__file', 'menu-collapse-transition.vue'],
]);
function M1(e, t) {
    const r = P(() => {
        let o = e.parent;
        const a = [t.value];
        for (; o.type.name !== 'ElMenu'; ) o.props.index && a.unshift(o.props.index), (o = o.parent);
        return a;
    });
    return {
        parentMenu: P(() => {
            let o = e.parent;
            for (; o && !['ElMenu', 'ElSubMenu'].includes(o.type.name); ) o = o.parent;
            return o;
        }),
        indexPath: r,
    };
}
function mC(e) {
    return P(() => {
        const r = e.backgroundColor;
        return r ? new p1(r).shade(20).toString() : '';
    });
}
const E1 = (e, t) => {
        const r = ze('menu');
        return P(() =>
            r.cssVarBlock({
                'text-color': e.textColor || '',
                'hover-text-color': e.textColor || '',
                'bg-color': e.backgroundColor || '',
                'hover-bg-color': mC(e).value || '',
                'active-color': e.activeTextColor || '',
                level: `${t}`,
            })
        );
    },
    gC = Le({
        index: { type: String, required: !0 },
        showTimeout: Number,
        hideTimeout: Number,
        popperClass: String,
        disabled: Boolean,
        teleported: { type: Boolean, default: void 0 },
        popperOffset: Number,
        expandCloseIcon: { type: Wt },
        expandOpenIcon: { type: Wt },
        collapseCloseIcon: { type: Wt },
        collapseOpenIcon: { type: Wt },
    }),
    Da = 'ElSubMenu';
var M0 = h({
    name: Da,
    props: gC,
    setup(e, { slots: t, expose: r }) {
        const n = Ne(),
            { indexPath: o, parentMenu: a } = M1(
                n,
                P(() => e.index)
            ),
            s = ze('menu'),
            l = ze('sub-menu'),
            i = le('rootMenu');
        i || Mr(Da, 'can not inject root menu');
        const u = le(`subMenu:${a.value.uid}`);
        u || Mr(Da, 'can not inject sub menu');
        const c = D({}),
            p = D({});
        let d;
        const m = D(!1),
            _ = D(),
            g = D(null),
            x = P(() => (T.value === 'horizontal' && C.value ? 'bottom-start' : 'right-start')),
            y = P(() =>
                (T.value === 'horizontal' && C.value) || (T.value === 'vertical' && !i.props.collapse)
                    ? e.expandCloseIcon && e.expandOpenIcon
                        ? z.value
                            ? e.expandOpenIcon
                            : e.expandCloseIcon
                        : K2
                    : e.collapseCloseIcon && e.collapseOpenIcon
                    ? z.value
                        ? e.collapseOpenIcon
                        : e.collapseCloseIcon
                    : U2
            ),
            C = P(() => u.level === 0),
            E = P(() => {
                const oe = e.teleported;
                return oe === void 0 ? C.value : oe;
            }),
            S = P(() => (i.props.collapse ? `${s.namespace.value}-zoom-in-left` : `${s.namespace.value}-zoom-in-top`)),
            H = P(() =>
                T.value === 'horizontal' && C.value
                    ? ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start']
                    : [
                          'right-start',
                          'right',
                          'right-end',
                          'left-start',
                          'bottom-start',
                          'bottom-end',
                          'top-start',
                          'top-end',
                      ]
            ),
            z = P(() => i.openedMenus.includes(e.index)),
            O = P(() => {
                let oe = !1;
                return (
                    Object.values(c.value).forEach((_e) => {
                        _e.active && (oe = !0);
                    }),
                    Object.values(p.value).forEach((_e) => {
                        _e.active && (oe = !0);
                    }),
                    oe
                );
            }),
            T = P(() => i.props.mode),
            V = Lt({ index: e.index, indexPath: o, active: O }),
            F = E1(i.props, u.level + 1),
            j = P(() => {
                var oe;
                return (oe = e.popperOffset) != null ? oe : i.props.popperOffset;
            }),
            R = P(() => {
                var oe;
                return (oe = e.popperClass) != null ? oe : i.props.popperClass;
            }),
            Q = P(() => {
                var oe;
                return (oe = e.showTimeout) != null ? oe : i.props.showTimeout;
            }),
            q = P(() => {
                var oe;
                return (oe = e.hideTimeout) != null ? oe : i.props.hideTimeout;
            }),
            W = () => {
                var oe, _e, ve;
                return (ve =
                    (_e = (oe = g.value) == null ? void 0 : oe.popperRef) == null ? void 0 : _e.popperInstanceRef) ==
                    null
                    ? void 0
                    : ve.destroy();
            },
            N = (oe) => {
                oe || W();
            },
            B = () => {
                (i.props.menuTrigger === 'hover' && i.props.mode === 'horizontal') ||
                    (i.props.collapse && i.props.mode === 'vertical') ||
                    e.disabled ||
                    i.handleSubMenuClick({ index: e.index, indexPath: o.value, active: O.value });
            },
            J = (oe, _e = Q.value) => {
                var ve;
                if (oe.type !== 'focus') {
                    if (
                        (i.props.menuTrigger === 'click' && i.props.mode === 'horizontal') ||
                        (!i.props.collapse && i.props.mode === 'vertical') ||
                        e.disabled
                    ) {
                        u.mouseInChild.value = !0;
                        return;
                    }
                    (u.mouseInChild.value = !0),
                        d == null || d(),
                        ({ stop: d } = p2(() => {
                            i.openMenu(e.index, o.value);
                        }, _e)),
                        E.value && ((ve = a.value.vnode.el) == null || ve.dispatchEvent(new MouseEvent('mouseenter')));
                }
            },
            he = (oe = !1) => {
                var _e;
                if (
                    (i.props.menuTrigger === 'click' && i.props.mode === 'horizontal') ||
                    (!i.props.collapse && i.props.mode === 'vertical')
                ) {
                    u.mouseInChild.value = !1;
                    return;
                }
                d == null || d(),
                    (u.mouseInChild.value = !1),
                    ({ stop: d } = p2(() => !m.value && i.closeMenu(e.index, o.value), q.value)),
                    E.value && oe && ((_e = u.handleMouseleave) == null || _e.call(u, !0));
            };
        ce(
            () => i.props.collapse,
            (oe) => N(Boolean(oe))
        );
        {
            const oe = (ve) => {
                    p.value[ve.index] = ve;
                },
                _e = (ve) => {
                    delete p.value[ve.index];
                };
            $e(`subMenu:${n.uid}`, {
                addSubMenu: oe,
                removeSubMenu: _e,
                handleMouseleave: he,
                mouseInChild: m,
                level: u.level + 1,
            });
        }
        return (
            r({ opened: z }),
            Ge(() => {
                i.addSubMenu(V), u.addSubMenu(V);
            }),
            ot(() => {
                u.removeSubMenu(V), i.removeSubMenu(V);
            }),
            () => {
                var oe;
                const _e = [
                        (oe = t.title) == null ? void 0 : oe.call(t),
                        qe(
                            ct,
                            {
                                class: l.e('icon-arrow'),
                                style: {
                                    transform: z.value
                                        ? (e.expandCloseIcon && e.expandOpenIcon) ||
                                          (e.collapseCloseIcon && e.collapseOpenIcon && i.props.collapse)
                                            ? 'none'
                                            : 'rotateZ(180deg)'
                                        : 'none',
                                },
                            },
                            { default: () => (xe(y.value) ? qe(n.appContext.components[y.value]) : qe(y.value)) }
                        ),
                    ],
                    ve = i.isMenuPopup
                        ? qe(
                              ga,
                              {
                                  ref: g,
                                  visible: z.value,
                                  effect: 'light',
                                  pure: !0,
                                  offset: j.value,
                                  showArrow: !1,
                                  persistent: !0,
                                  popperClass: R.value,
                                  placement: x.value,
                                  teleported: E.value,
                                  fallbackPlacements: H.value,
                                  transition: S.value,
                                  gpuAcceleration: !1,
                              },
                              {
                                  content: () => {
                                      var Ve;
                                      return qe(
                                          'div',
                                          {
                                              class: [s.m(T.value), s.m('popup-container'), R.value],
                                              onMouseenter: (Se) => J(Se, 100),
                                              onMouseleave: () => he(!0),
                                              onFocus: (Se) => J(Se, 100),
                                          },
                                          [
                                              qe(
                                                  'ul',
                                                  {
                                                      class: [s.b(), s.m('popup'), s.m(`popup-${x.value}`)],
                                                      style: F.value,
                                                  },
                                                  [(Ve = t.default) == null ? void 0 : Ve.call(t)]
                                              ),
                                          ]
                                      );
                                  },
                                  default: () => qe('div', { class: l.e('title'), onClick: B }, _e),
                              }
                          )
                        : qe(Oe, {}, [
                              qe('div', { class: l.e('title'), ref: _, onClick: B }, _e),
                              qe(
                                  wx,
                                  {},
                                  {
                                      default: () => {
                                          var Ve;
                                          return kt(
                                              qe(
                                                  'ul',
                                                  { role: 'menu', class: [s.b(), s.m('inline')], style: F.value },
                                                  [(Ve = t.default) == null ? void 0 : Ve.call(t)]
                                              ),
                                              [[aa, z.value]]
                                          );
                                      },
                                  }
                              ),
                          ]);
                return qe(
                    'li',
                    {
                        class: [l.b(), l.is('active', O.value), l.is('opened', z.value), l.is('disabled', e.disabled)],
                        role: 'menuitem',
                        ariaHaspopup: !0,
                        ariaExpanded: z.value,
                        onMouseenter: J,
                        onMouseleave: () => he(),
                        onFocus: J,
                    },
                    [ve]
                );
            }
        );
    },
});
const wC = Le({
        mode: { type: String, values: ['horizontal', 'vertical'], default: 'vertical' },
        defaultActive: { type: String, default: '' },
        defaultOpeneds: { type: de(Array), default: () => r0([]) },
        uniqueOpened: Boolean,
        router: Boolean,
        menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
        collapse: Boolean,
        backgroundColor: String,
        textColor: String,
        activeTextColor: String,
        closeOnClickOutside: Boolean,
        collapseTransition: { type: Boolean, default: !0 },
        ellipsis: { type: Boolean, default: !0 },
        popperOffset: { type: Number, default: 6 },
        ellipsisIcon: { type: Wt, default: () => iu },
        popperEffect: { type: String, values: ['dark', 'light'], default: 'dark' },
        popperClass: String,
        showTimeout: { type: Number, default: 300 },
        hideTimeout: { type: Number, default: 300 },
    }),
    ja = (e) => Array.isArray(e) && e.every((t) => xe(t)),
    yC = {
        close: (e, t) => xe(e) && ja(t),
        open: (e, t) => xe(e) && ja(t),
        select: (e, t, r, n) => xe(e) && ja(t) && Ee(r) && (n === void 0 || n instanceof Promise),
    };
var bC = h({
    name: 'ElMenu',
    props: wC,
    emits: yC,
    setup(e, { emit: t, slots: r, expose: n }) {
        const o = Ne(),
            a = o.appContext.config.globalProperties.$router,
            s = D(),
            l = ze('menu'),
            i = ze('sub-menu'),
            u = D(-1),
            c = D(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
            p = D(e.defaultActive),
            d = D({}),
            m = D({}),
            _ = P(() => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)),
            g = () => {
                const q = p.value && d.value[p.value];
                if (!q || e.mode === 'horizontal' || e.collapse) return;
                q.indexPath.forEach((N) => {
                    const B = m.value[N];
                    B && x(N, B.indexPath);
                });
            },
            x = (q, W) => {
                c.value.includes(q) ||
                    (e.uniqueOpened && (c.value = c.value.filter((N) => W.includes(N))),
                    c.value.push(q),
                    t('open', q, W));
            },
            y = (q) => {
                const W = c.value.indexOf(q);
                W !== -1 && c.value.splice(W, 1);
            },
            C = (q, W) => {
                y(q), t('close', q, W);
            },
            E = ({ index: q, indexPath: W }) => {
                c.value.includes(q) ? C(q, W) : x(q, W);
            },
            S = (q) => {
                (e.mode === 'horizontal' || e.collapse) && (c.value = []);
                const { index: W, indexPath: N } = q;
                if (!(cn(W) || cn(N)))
                    if (e.router && a) {
                        const B = q.route || W,
                            J = a.push(B).then((he) => (he || (p.value = W), he));
                        t('select', W, N, { index: W, indexPath: N, route: B }, J);
                    } else (p.value = W), t('select', W, N, { index: W, indexPath: N });
            },
            H = (q) => {
                const W = d.value,
                    N = W[q] || (p.value && W[p.value]) || W[e.defaultActive];
                N ? (p.value = N.index) : (p.value = q);
            },
            z = (q) => {
                const W = getComputedStyle(q),
                    N = Number.parseInt(W.marginLeft, 10),
                    B = Number.parseInt(W.marginRight, 10);
                return q.offsetWidth + N + B || 0;
            },
            O = () => {
                var q, W;
                if (!s.value) return -1;
                const N = Array.from((W = (q = s.value) == null ? void 0 : q.childNodes) != null ? W : []).filter(
                        (Se) => Se.nodeName !== '#comment' && (Se.nodeName !== '#text' || Se.nodeValue)
                    ),
                    B = 64,
                    J = getComputedStyle(s.value),
                    he = Number.parseInt(J.paddingLeft, 10),
                    oe = Number.parseInt(J.paddingRight, 10),
                    _e = s.value.clientWidth - he - oe;
                let ve = 0,
                    Ve = 0;
                return (
                    N.forEach((Se, tt) => {
                        (ve += z(Se)), ve <= _e - B && (Ve = tt + 1);
                    }),
                    Ve === N.length ? -1 : Ve
                );
            },
            T = (q) => m.value[q].indexPath,
            V = (q, W = 33.34) => {
                let N;
                return () => {
                    N && clearTimeout(N),
                        (N = setTimeout(() => {
                            q();
                        }, W));
                };
            };
        let F = !0;
        const j = () => {
            if (u.value === O()) return;
            const q = () => {
                (u.value = -1),
                    ht(() => {
                        u.value = O();
                    });
            };
            F ? q() : V(q)(), (F = !1);
        };
        ce(
            () => e.defaultActive,
            (q) => {
                d.value[q] || (p.value = ''), H(q);
            }
        ),
            ce(
                () => e.collapse,
                (q) => {
                    q && (c.value = []);
                }
            ),
            ce(d.value, g);
        let R;
        gi(() => {
            e.mode === 'horizontal' && e.ellipsis ? (R = ua(s, j).stop) : R == null || R();
        });
        const Q = D(!1);
        {
            const q = (J) => {
                    m.value[J.index] = J;
                },
                W = (J) => {
                    delete m.value[J.index];
                };
            $e(
                'rootMenu',
                Lt({
                    props: e,
                    openedMenus: c,
                    items: d,
                    subMenus: m,
                    activeIndex: p,
                    isMenuPopup: _,
                    addMenuItem: (J) => {
                        d.value[J.index] = J;
                    },
                    removeMenuItem: (J) => {
                        delete d.value[J.index];
                    },
                    addSubMenu: q,
                    removeSubMenu: W,
                    openMenu: x,
                    closeMenu: C,
                    handleMenuItemClick: S,
                    handleSubMenuClick: E,
                })
            ),
                $e(`subMenu:${o.uid}`, { addSubMenu: q, removeSubMenu: W, mouseInChild: Q, level: 0 });
        }
        return (
            Ge(() => {
                e.mode === 'horizontal' && new dC(o.vnode.el, l.namespace.value);
            }),
            n({
                open: (W) => {
                    const { indexPath: N } = m.value[W];
                    N.forEach((B) => x(B, N));
                },
                close: y,
                handleResize: j,
            }),
            () => {
                var q, W;
                let N = (W = (q = r.default) == null ? void 0 : q.call(r)) != null ? W : [];
                const B = [];
                if (e.mode === 'horizontal' && s.value) {
                    const _e = In(N),
                        ve = u.value === -1 ? _e : _e.slice(0, u.value),
                        Ve = u.value === -1 ? [] : _e.slice(u.value);
                    (Ve == null ? void 0 : Ve.length) &&
                        e.ellipsis &&
                        ((N = ve),
                        B.push(
                            qe(
                                M0,
                                { index: 'sub-menu-more', class: i.e('hide-arrow'), popperOffset: e.popperOffset },
                                {
                                    title: () =>
                                        qe(ct, { class: i.e('icon-more') }, { default: () => qe(e.ellipsisIcon) }),
                                    default: () => Ve,
                                }
                            )
                        ));
                }
                const J = E1(e, 0),
                    he = e.closeOnClickOutside
                        ? [
                              [
                                  hx,
                                  () => {
                                      !c.value.length ||
                                          Q.value ||
                                          (c.value.forEach((_e) => t('close', _e, T(_e))), (c.value = []));
                                  },
                              ],
                          ]
                        : [],
                    oe = kt(
                        qe(
                            'ul',
                            {
                                key: String(e.collapse),
                                role: 'menubar',
                                ref: s,
                                style: J.value,
                                class: { [l.b()]: !0, [l.m(e.mode)]: !0, [l.m('collapse')]: e.collapse },
                            },
                            [...N, ...B]
                        ),
                        he
                    );
                return e.collapseTransition && e.mode === 'vertical' ? qe(hC, () => oe) : oe;
            }
        );
    },
});
const xC = Le({
        index: { type: de([String, null]), default: null },
        route: { type: de([String, Object]) },
        disabled: Boolean,
    }),
    CC = { click: (e) => xe(e.index) && Array.isArray(e.indexPath) },
    qa = 'ElMenuItem',
    MC = h({
        name: qa,
        components: { ElTooltip: ga },
        props: xC,
        emits: CC,
        setup(e, { emit: t }) {
            const r = Ne(),
                n = le('rootMenu'),
                o = ze('menu'),
                a = ze('menu-item');
            n || Mr(qa, 'can not inject root menu');
            const { parentMenu: s, indexPath: l } = M1(r, nt(e, 'index')),
                i = le(`subMenu:${s.value.uid}`);
            i || Mr(qa, 'can not inject sub menu');
            const u = P(() => e.index === n.activeIndex),
                c = Lt({ index: e.index, indexPath: l, active: u }),
                p = () => {
                    e.disabled ||
                        (n.handleMenuItemClick({ index: e.index, indexPath: l.value, route: e.route }), t('click', c));
                };
            return (
                Ge(() => {
                    i.addSubMenu(c), n.addMenuItem(c);
                }),
                ot(() => {
                    i.removeSubMenu(c), n.removeMenuItem(c);
                }),
                { parentMenu: s, rootMenu: n, active: u, nsMenu: o, nsMenuItem: a, handleClick: p }
            );
        },
    });
function EC(e, t, r, n, o, a) {
    const s = Fe('el-tooltip');
    return (
        v(),
        w(
            'li',
            {
                class: ke([
                    e.nsMenuItem.b(),
                    e.nsMenuItem.is('active', e.active),
                    e.nsMenuItem.is('disabled', e.disabled),
                ]),
                role: 'menuitem',
                tabindex: '-1',
                onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l)),
            },
            [
                e.parentMenu.type.name === 'ElMenu' && e.rootMenu.props.collapse && e.$slots.title
                    ? (v(),
                      me(
                          s,
                          {
                              key: 0,
                              effect: e.rootMenu.props.popperEffect,
                              placement: 'right',
                              'fallback-placements': ['left'],
                              persistent: '',
                          },
                          {
                              content: re(() => [ye(e.$slots, 'title')]),
                              default: re(() => [
                                  f(
                                      'div',
                                      { class: ke(e.nsMenu.be('tooltip', 'trigger')) },
                                      [ye(e.$slots, 'default')],
                                      2
                                  ),
                              ]),
                              _: 3,
                          },
                          8,
                          ['effect']
                      ))
                    : (v(), w(Oe, { key: 1 }, [ye(e.$slots, 'default'), ye(e.$slots, 'title')], 64)),
            ],
            2
        )
    );
}
var S1 = Te(MC, [
    ['render', EC],
    ['__file', 'menu-item.vue'],
]);
const SC = { title: String },
    AC = 'ElMenuItemGroup',
    zC = h({
        name: AC,
        props: SC,
        setup() {
            return { ns: ze('menu-item-group') };
        },
    });
function TC(e, t, r, n, o, a) {
    return (
        v(),
        w(
            'li',
            { class: ke(e.ns.b()) },
            [
                f(
                    'div',
                    { class: ke(e.ns.e('title')) },
                    [
                        e.$slots.title
                            ? ye(e.$slots, 'title', { key: 1 })
                            : (v(), w(Oe, { key: 0 }, [st(fr(e.title), 1)], 64)),
                    ],
                    2
                ),
                f('ul', null, [ye(e.$slots, 'default')]),
            ],
            2
        )
    );
}
var A1 = Te(zC, [
    ['render', TC],
    ['__file', 'menu-item-group.vue'],
]);
const HC = jt(bC, { MenuItem: S1, MenuItemGroup: A1, SubMenu: M0 }),
    BC = qr(S1);
qr(A1);
const LC = qr(M0),
    ya = Symbol('tabsRootContextKey'),
    VC = Le({ tabs: { type: de(Array), default: () => r0([]) } }),
    z1 = 'ElTabBar',
    OC = h({ name: z1 }),
    PC = h({
        ...OC,
        props: VC,
        setup(e, { expose: t }) {
            const r = e,
                n = Ne(),
                o = le(ya);
            o || Mr(z1, '<el-tabs><el-tab-bar /></el-tabs>');
            const a = ze('tabs'),
                s = D(),
                l = D(),
                i = () => {
                    let c = 0,
                        p = 0;
                    const d = ['top', 'bottom'].includes(o.props.tabPosition) ? 'width' : 'height',
                        m = d === 'width' ? 'x' : 'y',
                        _ = m === 'x' ? 'left' : 'top';
                    return (
                        r.tabs.every((g) => {
                            var x, y;
                            const C =
                                (y = (x = n.parent) == null ? void 0 : x.refs) == null ? void 0 : y[`tab-${g.uid}`];
                            if (!C) return !1;
                            if (!g.active) return !0;
                            (c = C[`offset${vr(_)}`]), (p = C[`client${vr(d)}`]);
                            const E = window.getComputedStyle(C);
                            return (
                                d === 'width' &&
                                    (r.tabs.length > 1 &&
                                        (p -= Number.parseFloat(E.paddingLeft) + Number.parseFloat(E.paddingRight)),
                                    (c += Number.parseFloat(E.paddingLeft))),
                                !1
                            );
                        }),
                        { [d]: `${p}px`, transform: `translate${vr(m)}(${c}px)` }
                    );
                },
                u = () => (l.value = i());
            return (
                ce(
                    () => r.tabs,
                    async () => {
                        await ht(), u();
                    },
                    { immediate: !0 }
                ),
                ua(s, () => u()),
                t({ ref: s, update: u }),
                (c, p) => (
                    v(),
                    w(
                        'div',
                        {
                            ref_key: 'barRef',
                            ref: s,
                            class: ke([A(a).e('active-bar'), A(a).is(A(o).props.tabPosition)]),
                            style: Mt(l.value),
                        },
                        null,
                        6
                    )
                )
            );
        },
    });
var IC = Te(PC, [['__file', 'tab-bar.vue']]);
const kC = Le({
        panes: { type: de(Array), default: () => r0([]) },
        currentName: { type: [String, Number], default: '' },
        editable: Boolean,
        type: { type: String, values: ['card', 'border-card', ''], default: '' },
        stretch: Boolean,
    }),
    RC = { tabClick: (e, t, r) => r instanceof Event, tabRemove: (e, t) => t instanceof Event },
    gl = 'ElTabNav',
    FC = h({
        name: gl,
        props: kC,
        emits: RC,
        setup(e, { expose: t, emit: r }) {
            const n = Ne(),
                o = le(ya);
            o || Mr(gl, '<el-tabs><tab-nav /></el-tabs>');
            const a = ze('tabs'),
                s = km(),
                l = Zm(),
                i = D(),
                u = D(),
                c = D(),
                p = D(),
                d = D(!1),
                m = D(0),
                _ = D(!1),
                g = D(!0),
                x = P(() => (['top', 'bottom'].includes(o.props.tabPosition) ? 'width' : 'height')),
                y = P(() => ({ transform: `translate${x.value === 'width' ? 'X' : 'Y'}(-${m.value}px)` })),
                C = () => {
                    if (!i.value) return;
                    const V = i.value[`offset${vr(x.value)}`],
                        F = m.value;
                    if (!F) return;
                    const j = F > V ? F - V : 0;
                    m.value = j;
                },
                E = () => {
                    if (!i.value || !u.value) return;
                    const V = u.value[`offset${vr(x.value)}`],
                        F = i.value[`offset${vr(x.value)}`],
                        j = m.value;
                    if (V - j <= F) return;
                    const R = V - j > F * 2 ? j + F : V - F;
                    m.value = R;
                },
                S = async () => {
                    const V = u.value;
                    if (!d.value || !c.value || !i.value || !V) return;
                    await ht();
                    const F = c.value.querySelector('.is-active');
                    if (!F) return;
                    const j = i.value,
                        R = ['top', 'bottom'].includes(o.props.tabPosition),
                        Q = F.getBoundingClientRect(),
                        q = j.getBoundingClientRect(),
                        W = R ? V.offsetWidth - q.width : V.offsetHeight - q.height,
                        N = m.value;
                    let B = N;
                    R
                        ? (Q.left < q.left && (B = N - (q.left - Q.left)),
                          Q.right > q.right && (B = N + Q.right - q.right))
                        : (Q.top < q.top && (B = N - (q.top - Q.top)),
                          Q.bottom > q.bottom && (B = N + (Q.bottom - q.bottom))),
                        (B = Math.max(B, 0)),
                        (m.value = Math.min(B, W));
                },
                H = () => {
                    var V;
                    if (!u.value || !i.value) return;
                    e.stretch && ((V = p.value) == null || V.update());
                    const F = u.value[`offset${vr(x.value)}`],
                        j = i.value[`offset${vr(x.value)}`],
                        R = m.value;
                    j < F
                        ? ((d.value = d.value || {}),
                          (d.value.prev = R),
                          (d.value.next = R + j < F),
                          F - R < j && (m.value = F - j))
                        : ((d.value = !1), R > 0 && (m.value = 0));
                },
                z = (V) => {
                    const F = V.code,
                        { up: j, down: R, left: Q, right: q } = we;
                    if (![j, R, Q, q].includes(F)) return;
                    const W = Array.from(V.currentTarget.querySelectorAll('[role=tab]:not(.is-disabled)')),
                        N = W.indexOf(V.target);
                    let B;
                    F === Q || F === j
                        ? N === 0
                            ? (B = W.length - 1)
                            : (B = N - 1)
                        : N < W.length - 1
                        ? (B = N + 1)
                        : (B = 0),
                        W[B].focus({ preventScroll: !0 }),
                        W[B].click(),
                        O();
                },
                O = () => {
                    g.value && (_.value = !0);
                },
                T = () => (_.value = !1);
            return (
                ce(s, (V) => {
                    V === 'hidden' ? (g.value = !1) : V === 'visible' && setTimeout(() => (g.value = !0), 50);
                }),
                ce(l, (V) => {
                    V ? setTimeout(() => (g.value = !0), 50) : (g.value = !1);
                }),
                ua(c, H),
                Ge(() => setTimeout(() => S(), 0)),
                eo(() => H()),
                t({ scrollToActiveTab: S, removeFocus: T }),
                ce(
                    () => e.panes,
                    () => n.update(),
                    { flush: 'post', deep: !0 }
                ),
                () => {
                    const V = d.value
                            ? [
                                  G('span', { class: [a.e('nav-prev'), a.is('disabled', !d.value.prev)], onClick: C }, [
                                      G(ct, null, { default: () => [G(au, null, null)] }),
                                  ]),
                                  G('span', { class: [a.e('nav-next'), a.is('disabled', !d.value.next)], onClick: E }, [
                                      G(ct, null, { default: () => [G(U2, null, null)] }),
                                  ]),
                              ]
                            : null,
                        F = e.panes.map((j, R) => {
                            var Q, q, W, N;
                            const B = j.uid,
                                J = j.props.disabled,
                                he = (q = (Q = j.props.name) != null ? Q : j.index) != null ? q : `${R}`,
                                oe = !J && (j.isClosable || e.editable);
                            j.index = `${R}`;
                            const _e = oe
                                    ? G(
                                          ct,
                                          { class: 'is-icon-close', onClick: (Se) => r('tabRemove', j, Se) },
                                          { default: () => [G(ia, null, null)] }
                                      )
                                    : null,
                                ve = ((N = (W = j.slots).label) == null ? void 0 : N.call(W)) || j.props.label,
                                Ve = !J && j.active ? 0 : -1;
                            return G(
                                'div',
                                {
                                    ref: `tab-${B}`,
                                    class: [
                                        a.e('item'),
                                        a.is(o.props.tabPosition),
                                        a.is('active', j.active),
                                        a.is('disabled', J),
                                        a.is('closable', oe),
                                        a.is('focus', _.value),
                                    ],
                                    id: `tab-${he}`,
                                    key: `tab-${B}`,
                                    'aria-controls': `pane-${he}`,
                                    role: 'tab',
                                    'aria-selected': j.active,
                                    tabindex: Ve,
                                    onFocus: () => O(),
                                    onBlur: () => T(),
                                    onClick: (Se) => {
                                        T(), r('tabClick', j, he, Se);
                                    },
                                    onKeydown: (Se) => {
                                        oe &&
                                            (Se.code === we.delete || Se.code === we.backspace) &&
                                            r('tabRemove', j, Se);
                                    },
                                },
                                [ve, _e]
                            );
                        });
                    return G(
                        'div',
                        { ref: c, class: [a.e('nav-wrap'), a.is('scrollable', !!d.value), a.is(o.props.tabPosition)] },
                        [
                            V,
                            G('div', { class: a.e('nav-scroll'), ref: i }, [
                                G(
                                    'div',
                                    {
                                        class: [
                                            a.e('nav'),
                                            a.is(o.props.tabPosition),
                                            a.is(
                                                'stretch',
                                                e.stretch && ['top', 'bottom'].includes(o.props.tabPosition)
                                            ),
                                        ],
                                        ref: u,
                                        style: y.value,
                                        role: 'tablist',
                                        onKeydown: z,
                                    },
                                    [e.type ? null : G(IC, { ref: p, tabs: [...e.panes] }, null), F]
                                ),
                            ]),
                        ]
                    );
                }
            );
        },
    }),
    $C = Le({
        type: { type: String, values: ['card', 'border-card', ''], default: '' },
        closable: Boolean,
        addable: Boolean,
        modelValue: { type: [String, Number] },
        editable: Boolean,
        tabPosition: { type: String, values: ['top', 'right', 'bottom', 'left'], default: 'top' },
        beforeLeave: { type: de(Function), default: () => !0 },
        stretch: Boolean,
    }),
    Ka = (e) => xe(e) || vt(e),
    NC = {
        [Eu]: (e) => Ka(e),
        tabClick: (e, t) => t instanceof Event,
        tabChange: (e) => Ka(e),
        edit: (e, t) => ['remove', 'add'].includes(t),
        tabRemove: (e) => Ka(e),
        tabAdd: () => !0,
    },
    DC = h({
        name: 'ElTabs',
        props: $C,
        emits: NC,
        setup(e, { emit: t, slots: r, expose: n }) {
            var o;
            const a = ze('tabs'),
                { children: s, addChild: l, removeChild: i } = iy(Ne(), 'ElTabPane'),
                u = D(),
                c = D((o = e.modelValue) != null ? o : '0'),
                p = async (g, x = !1) => {
                    var y, C, E;
                    if (!(c.value === g || v2(g)))
                        try {
                            (await ((y = e.beforeLeave) == null ? void 0 : y.call(e, g, c.value))) !== !1 &&
                                ((c.value = g),
                                x && (t(Eu, g), t('tabChange', g)),
                                (E = (C = u.value) == null ? void 0 : C.removeFocus) == null || E.call(C));
                        } catch {}
                },
                d = (g, x, y) => {
                    g.props.disabled || (p(x, !0), t('tabClick', g, y));
                },
                m = (g, x) => {
                    g.props.disabled ||
                        v2(g.props.name) ||
                        (x.stopPropagation(), t('edit', g.props.name, 'remove'), t('tabRemove', g.props.name));
                },
                _ = () => {
                    t('edit', void 0, 'add'), t('tabAdd');
                };
            return (
                ce(
                    () => e.modelValue,
                    (g) => p(g)
                ),
                ce(c, async () => {
                    var g;
                    await ht(), (g = u.value) == null || g.scrollToActiveTab();
                }),
                $e(ya, { props: e, currentName: c, registerPane: l, unregisterPane: i }),
                n({ currentName: c }),
                () => {
                    const g = r['add-icon'],
                        x =
                            e.editable || e.addable
                                ? G(
                                      'span',
                                      {
                                          class: a.e('new-tab'),
                                          tabindex: '0',
                                          onClick: _,
                                          onKeydown: (E) => {
                                              E.code === we.enter && _();
                                          },
                                      },
                                      [
                                          g
                                              ? ye(r, 'add-icon')
                                              : G(
                                                    ct,
                                                    { class: a.is('icon-plus') },
                                                    { default: () => [G(uu, null, null)] }
                                                ),
                                      ]
                                  )
                                : null,
                        y = G('div', { class: [a.e('header'), a.is(e.tabPosition)] }, [
                            x,
                            G(
                                FC,
                                {
                                    ref: u,
                                    currentName: c.value,
                                    editable: e.editable,
                                    type: e.type,
                                    panes: s.value,
                                    stretch: e.stretch,
                                    onTabClick: d,
                                    onTabRemove: m,
                                },
                                null
                            ),
                        ]),
                        C = G('div', { class: a.e('content') }, [ye(r, 'default')]);
                    return G(
                        'div',
                        {
                            class: [
                                a.b(),
                                a.m(e.tabPosition),
                                { [a.m('card')]: e.type === 'card', [a.m('border-card')]: e.type === 'border-card' },
                            ],
                        },
                        [...(e.tabPosition !== 'bottom' ? [y, C] : [C, y])]
                    );
                }
            );
        },
    }),
    jC = Le({
        label: { type: String, default: '' },
        name: { type: [String, Number] },
        closable: Boolean,
        disabled: Boolean,
        lazy: Boolean,
    }),
    qC = ['id', 'aria-hidden', 'aria-labelledby'],
    T1 = 'ElTabPane',
    KC = h({ name: T1 }),
    UC = h({
        ...KC,
        props: jC,
        setup(e) {
            const t = e,
                r = Ne(),
                n = Ai(),
                o = le(ya);
            o || Mr(T1, 'usage: <el-tabs><el-tab-pane /></el-tabs/>');
            const a = ze('tab-pane'),
                s = D(),
                l = P(() => t.closable || o.props.closable),
                i = Es(() => {
                    var m;
                    return o.currentName.value === ((m = t.name) != null ? m : s.value);
                }),
                u = D(i.value),
                c = P(() => {
                    var m;
                    return (m = t.name) != null ? m : s.value;
                }),
                p = Es(() => !t.lazy || u.value || i.value);
            ce(i, (m) => {
                m && (u.value = !0);
            });
            const d = Lt({ uid: r.uid, slots: n, props: t, paneName: c, active: i, index: s, isClosable: l });
            return (
                Ge(() => {
                    o.registerPane(d);
                }),
                to(() => {
                    o.unregisterPane(d.uid);
                }),
                (m, _) =>
                    A(p)
                        ? kt(
                              (v(),
                              w(
                                  'div',
                                  {
                                      key: 0,
                                      id: `pane-${A(c)}`,
                                      class: ke(A(a).b()),
                                      role: 'tabpanel',
                                      'aria-hidden': !A(i),
                                      'aria-labelledby': `tab-${A(c)}`,
                                  },
                                  [ye(m.$slots, 'default')],
                                  10,
                                  qC
                              )),
                              [[aa, A(i)]]
                          )
                        : Et('v-if', !0)
            );
        },
    });
var H1 = Te(UC, [['__file', 'tab-pane.vue']]);
const WC = jt(DC, { TabPane: H1 }),
    GC = qr(H1);
var YC = {
    name: 'zh-cn',
    el: {
        breadcrumb: { label: '\u9762\u5305\u5C51' },
        colorpicker: { confirm: '\u786E\u5B9A', clear: '\u6E05\u7A7A' },
        datepicker: {
            now: '\u6B64\u523B',
            today: '\u4ECA\u5929',
            cancel: '\u53D6\u6D88',
            clear: '\u6E05\u7A7A',
            confirm: '\u786E\u5B9A',
            selectDate: '\u9009\u62E9\u65E5\u671F',
            selectTime: '\u9009\u62E9\u65F6\u95F4',
            startDate: '\u5F00\u59CB\u65E5\u671F',
            startTime: '\u5F00\u59CB\u65F6\u95F4',
            endDate: '\u7ED3\u675F\u65E5\u671F',
            endTime: '\u7ED3\u675F\u65F6\u95F4',
            prevYear: '\u524D\u4E00\u5E74',
            nextYear: '\u540E\u4E00\u5E74',
            prevMonth: '\u4E0A\u4E2A\u6708',
            nextMonth: '\u4E0B\u4E2A\u6708',
            year: '\u5E74',
            month1: '1 \u6708',
            month2: '2 \u6708',
            month3: '3 \u6708',
            month4: '4 \u6708',
            month5: '5 \u6708',
            month6: '6 \u6708',
            month7: '7 \u6708',
            month8: '8 \u6708',
            month9: '9 \u6708',
            month10: '10 \u6708',
            month11: '11 \u6708',
            month12: '12 \u6708',
            weeks: {
                sun: '\u65E5',
                mon: '\u4E00',
                tue: '\u4E8C',
                wed: '\u4E09',
                thu: '\u56DB',
                fri: '\u4E94',
                sat: '\u516D',
            },
            months: {
                jan: '\u4E00\u6708',
                feb: '\u4E8C\u6708',
                mar: '\u4E09\u6708',
                apr: '\u56DB\u6708',
                may: '\u4E94\u6708',
                jun: '\u516D\u6708',
                jul: '\u4E03\u6708',
                aug: '\u516B\u6708',
                sep: '\u4E5D\u6708',
                oct: '\u5341\u6708',
                nov: '\u5341\u4E00\u6708',
                dec: '\u5341\u4E8C\u6708',
            },
        },
        select: {
            loading: '\u52A0\u8F7D\u4E2D',
            noMatch: '\u65E0\u5339\u914D\u6570\u636E',
            noData: '\u65E0\u6570\u636E',
            placeholder: '\u8BF7\u9009\u62E9',
        },
        cascader: {
            noMatch: '\u65E0\u5339\u914D\u6570\u636E',
            loading: '\u52A0\u8F7D\u4E2D',
            placeholder: '\u8BF7\u9009\u62E9',
            noData: '\u6682\u65E0\u6570\u636E',
        },
        pagination: {
            goto: '\u524D\u5F80',
            pagesize: '\u6761/\u9875',
            total: '\u5171 {total} \u6761',
            pageClassifier: '\u9875',
            page: '\u9875',
            prev: '\u4E0A\u4E00\u9875',
            next: '\u4E0B\u4E00\u9875',
            currentPage: '\u7B2C {pager} \u9875',
            prevPages: '\u5411\u524D {pager} \u9875',
            nextPages: '\u5411\u540E {pager} \u9875',
            deprecationWarning:
                '\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863',
        },
        messagebox: {
            title: '\u63D0\u793A',
            confirm: '\u786E\u5B9A',
            cancel: '\u53D6\u6D88',
            error: '\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!',
        },
        upload: {
            deleteTip: '\u6309 delete \u952E\u53EF\u5220\u9664',
            delete: '\u5220\u9664',
            preview: '\u67E5\u770B\u56FE\u7247',
            continue: '\u7EE7\u7EED\u4E0A\u4F20',
        },
        table: {
            emptyText: '\u6682\u65E0\u6570\u636E',
            confirmFilter: '\u7B5B\u9009',
            resetFilter: '\u91CD\u7F6E',
            clearFilter: '\u5168\u90E8',
            sumText: '\u5408\u8BA1',
        },
        tour: { next: '\u4E0B\u4E00\u6B65', previous: '\u4E0A\u4E00\u6B65', finish: '\u7ED3\u675F\u5BFC\u89C8' },
        tree: { emptyText: '\u6682\u65E0\u6570\u636E' },
        transfer: {
            noMatch: '\u65E0\u5339\u914D\u6570\u636E',
            noData: '\u65E0\u6570\u636E',
            titles: ['\u5217\u8868 1', '\u5217\u8868 2'],
            filterPlaceholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9',
            noCheckedFormat: '\u5171 {total} \u9879',
            hasCheckedFormat: '\u5DF2\u9009 {checked}/{total} \u9879',
        },
        image: { error: '\u52A0\u8F7D\u5931\u8D25' },
        pageHeader: { title: '\u8FD4\u56DE' },
        popconfirm: { confirmButtonText: '\u786E\u5B9A', cancelButtonText: '\u53D6\u6D88' },
        carousel: {
            leftArrow: '\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247',
            rightArrow: '\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247',
            indicator: '\u5E7B\u706F\u7247\u5207\u6362\u81F3\u7D22\u5F15 {index}',
        },
    },
};
const An = (e, t, r = document.documentElement) => {
        r.style.setProperty(e, t);
    },
    wl = (e, t, r = 0.5) => {
        let n = '#';
        for (let o = 0; o <= 2; o++) {
            const a = parseInt(e.substring(1 + o * 2, 3 + o * 2), 16),
                s = parseInt(t.substring(1 + o * 2, 3 + o * 2), 16),
                l = Math.round(a * r + s * (1 - r));
            n += l.toString(16).padStart(2, '0');
        }
        return n;
    },
    JC = la('theme', {
        state: () => ({
            primary: '',
            success: '',
            warning: '',
            danger: '',
            info: '',
            headerBgColor: '#242f42',
            headerTextColor: '#fff',
        }),
        getters: {},
        actions: {
            initTheme() {
                ['primary', 'success', 'warning', 'danger', 'info'].forEach((r) => {
                    const n = localStorage.getItem(`theme-${r}`) || '';
                    n && this.setPropertyColor(n, r);
                });
                const e = localStorage.getItem('header-bg-color');
                e && this.setHeaderBgColor(e);
                const t = localStorage.getItem('header-text-color');
                t && this.setHeaderTextColor(t);
            },
            resetTheme() {
                ['primary', 'success', 'warning', 'danger', 'info'].forEach((e) => {
                    this.setPropertyColor('', e);
                });
            },
            setPropertyColor(e, t = 'primary') {
                (this[t] = e), An(`--el-color-${t}`, e), localStorage.setItem(`theme-${t}`, e), this.setThemeLight(t);
            },
            setThemeLight(e = 'primary') {
                [3, 5, 7, 8, 9].forEach((t) => {
                    An(`--el-color-${e}-light-${t}`, wl('#ffffff', this[e], t / 10));
                }),
                    An(`--el-color-${e}-dark-2`, wl('#ffffff', this[e], 0.2));
            },
            setHeaderBgColor(e) {
                (this.headerBgColor = e), An('--header-bg-color', e), localStorage.setItem('header-bg-color', e);
            },
            setHeaderTextColor(e) {
                (this.headerTextColor = e), An('--header-text-color', e), localStorage.setItem('header-text-color', e);
            },
        },
    }),
    ZC = h({
        __name: 'App',
        setup(e) {
            return (
                JC().initTheme(),
                (r, n) => {
                    const o = Fe('router-view');
                    return v(), me(A(my), { locale: A(YC) }, { default: re(() => [G(o)]), _: 1 }, 8, ['locale']);
                }
            );
        },
    });
const QC = 'modulepreload',
    XC = function (e, t) {
        return new URL(e, t).href;
    },
    yl = {},
    Be = function (t, r, n) {
        if (!r || r.length === 0) return t();
        const o = document.getElementsByTagName('link');
        return Promise.all(
            r.map((a) => {
                if (((a = XC(a, n)), a in yl)) return;
                yl[a] = !0;
                const s = a.endsWith('.css'),
                    l = s ? '[rel="stylesheet"]' : '';
                if (!!n)
                    for (let c = o.length - 1; c >= 0; c--) {
                        const p = o[c];
                        if (p.href === a && (!s || p.rel === 'stylesheet')) return;
                    }
                else if (document.querySelector(`link[href="${a}"]${l}`)) return;
                const u = document.createElement('link');
                if (
                    ((u.rel = s ? 'stylesheet' : QC),
                    s || ((u.as = 'script'), (u.crossOrigin = '')),
                    (u.href = a),
                    document.head.appendChild(u),
                    s)
                )
                    return new Promise((c, p) => {
                        u.addEventListener('load', c),
                            u.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${a}`)));
                    });
            })
        ).then(() => t());
    };
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Jr = typeof document < 'u';
function eM(e) {
    return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const He = Object.assign;
function Ua(e, t) {
    const r = {};
    for (const n in t) {
        const o = t[n];
        r[n] = Bt(o) ? o.map(e) : e(o);
    }
    return r;
}
const Fn = () => {},
    Bt = Array.isArray,
    B1 = /#/g,
    tM = /&/g,
    rM = /\//g,
    nM = /=/g,
    oM = /\?/g,
    L1 = /\+/g,
    aM = /%5B/g,
    sM = /%5D/g,
    V1 = /%5E/g,
    lM = /%60/g,
    O1 = /%7B/g,
    iM = /%7C/g,
    P1 = /%7D/g,
    uM = /%20/g;
function E0(e) {
    return encodeURI('' + e)
        .replace(iM, '|')
        .replace(aM, '[')
        .replace(sM, ']');
}
function cM(e) {
    return E0(e).replace(O1, '{').replace(P1, '}').replace(V1, '^');
}
function w2(e) {
    return E0(e)
        .replace(L1, '%2B')
        .replace(uM, '+')
        .replace(B1, '%23')
        .replace(tM, '%26')
        .replace(lM, '`')
        .replace(O1, '{')
        .replace(P1, '}')
        .replace(V1, '^');
}
function pM(e) {
    return w2(e).replace(nM, '%3D');
}
function fM(e) {
    return E0(e).replace(B1, '%23').replace(oM, '%3F');
}
function dM(e) {
    return e == null ? '' : fM(e).replace(rM, '%2F');
}
function Zn(e) {
    try {
        return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
}
const _M = /\/$/,
    vM = (e) => e.replace(_M, '');
function Wa(e, t, r = '/') {
    let n,
        o = {},
        a = '',
        s = '';
    const l = t.indexOf('#');
    let i = t.indexOf('?');
    return (
        l < i && l >= 0 && (i = -1),
        i > -1 && ((n = t.slice(0, i)), (a = t.slice(i + 1, l > -1 ? l : t.length)), (o = e(a))),
        l > -1 && ((n = n || t.slice(0, l)), (s = t.slice(l, t.length))),
        (n = wM(n != null ? n : t, r)),
        { fullPath: n + (a && '?') + a + s, path: n, query: o, hash: Zn(s) }
    );
}
function hM(e, t) {
    const r = t.query ? e(t.query) : '';
    return t.path + (r && '?') + r + (t.hash || '');
}
function bl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function mM(e, t, r) {
    const n = t.matched.length - 1,
        o = r.matched.length - 1;
    return (
        n > -1 &&
        n === o &&
        hn(t.matched[n], r.matched[o]) &&
        I1(t.params, r.params) &&
        e(t.query) === e(r.query) &&
        t.hash === r.hash
    );
}
function hn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function I1(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const r in e) if (!gM(e[r], t[r])) return !1;
    return !0;
}
function gM(e, t) {
    return Bt(e) ? xl(e, t) : Bt(t) ? xl(t, e) : e === t;
}
function xl(e, t) {
    return Bt(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t;
}
function wM(e, t) {
    if (e.startsWith('/')) return e;
    if (!e) return t;
    const r = t.split('/'),
        n = e.split('/'),
        o = n[n.length - 1];
    (o === '..' || o === '.') && n.push('');
    let a = r.length - 1,
        s,
        l;
    for (s = 0; s < n.length; s++)
        if (((l = n[s]), l !== '.'))
            if (l === '..') a > 1 && a--;
            else break;
    return r.slice(0, a).join('/') + '/' + n.slice(s).join('/');
}
var Qn;
(function (e) {
    (e.pop = 'pop'), (e.push = 'push');
})(Qn || (Qn = {}));
var $n;
(function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})($n || ($n = {}));
function yM(e) {
    if (!e)
        if (Jr) {
            const t = document.querySelector('base');
            (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
        } else e = '/';
    return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), vM(e);
}
const bM = /^[^#]+#/;
function xM(e, t) {
    return e.replace(bM, '#') + t;
}
function CM(e, t) {
    const r = document.documentElement.getBoundingClientRect(),
        n = e.getBoundingClientRect();
    return { behavior: t.behavior, left: n.left - r.left - (t.left || 0), top: n.top - r.top - (t.top || 0) };
}
const ba = () => ({ left: window.scrollX, top: window.scrollY });
function MM(e) {
    let t;
    if ('el' in e) {
        const r = e.el,
            n = typeof r == 'string' && r.startsWith('#'),
            o = typeof r == 'string' ? (n ? document.getElementById(r.slice(1)) : document.querySelector(r)) : r;
        if (!o) return;
        t = CM(o, e);
    } else t = e;
    'scrollBehavior' in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Cl(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const y2 = new Map();
function EM(e, t) {
    y2.set(e, t);
}
function SM(e) {
    const t = y2.get(e);
    return y2.delete(e), t;
}
let AM = () => location.protocol + '//' + location.host;
function k1(e, t) {
    const { pathname: r, search: n, hash: o } = t,
        a = e.indexOf('#');
    if (a > -1) {
        let l = o.includes(e.slice(a)) ? e.slice(a).length : 1,
            i = o.slice(l);
        return i[0] !== '/' && (i = '/' + i), bl(i, '');
    }
    return bl(r, e) + n + o;
}
function zM(e, t, r, n) {
    let o = [],
        a = [],
        s = null;
    const l = ({ state: d }) => {
        const m = k1(e, location),
            _ = r.value,
            g = t.value;
        let x = 0;
        if (d) {
            if (((r.value = m), (t.value = d), s && s === _)) {
                s = null;
                return;
            }
            x = g ? d.position - g.position : 0;
        } else n(m);
        o.forEach((y) => {
            y(r.value, _, { delta: x, type: Qn.pop, direction: x ? (x > 0 ? $n.forward : $n.back) : $n.unknown });
        });
    };
    function i() {
        s = r.value;
    }
    function u(d) {
        o.push(d);
        const m = () => {
            const _ = o.indexOf(d);
            _ > -1 && o.splice(_, 1);
        };
        return a.push(m), m;
    }
    function c() {
        const { history: d } = window;
        !d.state || d.replaceState(He({}, d.state, { scroll: ba() }), '');
    }
    function p() {
        for (const d of a) d();
        (a = []), window.removeEventListener('popstate', l), window.removeEventListener('beforeunload', c);
    }
    return (
        window.addEventListener('popstate', l),
        window.addEventListener('beforeunload', c, { passive: !0 }),
        { pauseListeners: i, listen: u, destroy: p }
    );
}
function Ml(e, t, r, n = !1, o = !1) {
    return { back: e, current: t, forward: r, replaced: n, position: window.history.length, scroll: o ? ba() : null };
}
function TM(e) {
    const { history: t, location: r } = window,
        n = { value: k1(e, r) },
        o = { value: t.state };
    o.value ||
        a(
            n.value,
            { back: null, current: n.value, forward: null, position: t.length - 1, replaced: !0, scroll: null },
            !0
        );
    function a(i, u, c) {
        const p = e.indexOf('#'),
            d = p > -1 ? (r.host && document.querySelector('base') ? e : e.slice(p)) + i : AM() + e + i;
        try {
            t[c ? 'replaceState' : 'pushState'](u, '', d), (o.value = u);
        } catch (m) {
            console.error(m), r[c ? 'replace' : 'assign'](d);
        }
    }
    function s(i, u) {
        const c = He({}, t.state, Ml(o.value.back, i, o.value.forward, !0), u, { position: o.value.position });
        a(i, c, !0), (n.value = i);
    }
    function l(i, u) {
        const c = He({}, o.value, t.state, { forward: i, scroll: ba() });
        a(c.current, c, !0);
        const p = He({}, Ml(n.value, i, null), { position: c.position + 1 }, u);
        a(i, p, !1), (n.value = i);
    }
    return { location: n, state: o, push: l, replace: s };
}
function HM(e) {
    e = yM(e);
    const t = TM(e),
        r = zM(e, t.state, t.location, t.replace);
    function n(a, s = !0) {
        s || r.pauseListeners(), history.go(a);
    }
    const o = He({ location: '', base: e, go: n, createHref: xM.bind(null, e) }, t, r);
    return (
        Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
        Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
        o
    );
}
function BM(e) {
    return (e = location.host ? e || location.pathname + location.search : ''), e.includes('#') || (e += '#'), HM(e);
}
function LM(e) {
    return typeof e == 'string' || (e && typeof e == 'object');
}
function R1(e) {
    return typeof e == 'string' || typeof e == 'symbol';
}
const rr = {
        path: '/',
        name: void 0,
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: void 0,
    },
    F1 = Symbol('');
var El;
(function (e) {
    (e[(e.aborted = 4)] = 'aborted'), (e[(e.cancelled = 8)] = 'cancelled'), (e[(e.duplicated = 16)] = 'duplicated');
})(El || (El = {}));
function mn(e, t) {
    return He(new Error(), { type: e, [F1]: !0 }, t);
}
function Kt(e, t) {
    return e instanceof Error && F1 in e && (t == null || !!(e.type & t));
}
const Sl = '[^/]+?',
    VM = { sensitive: !1, strict: !1, start: !0, end: !0 },
    OM = /[.+*?^${}()[\]/\\]/g;
function PM(e, t) {
    const r = He({}, VM, t),
        n = [];
    let o = r.start ? '^' : '';
    const a = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        r.strict && !u.length && (o += '/');
        for (let p = 0; p < u.length; p++) {
            const d = u[p];
            let m = 40 + (r.sensitive ? 0.25 : 0);
            if (d.type === 0) p || (o += '/'), (o += d.value.replace(OM, '\\$&')), (m += 40);
            else if (d.type === 1) {
                const { value: _, repeatable: g, optional: x, regexp: y } = d;
                a.push({ name: _, repeatable: g, optional: x });
                const C = y || Sl;
                if (C !== Sl) {
                    m += 10;
                    try {
                        new RegExp(`(${C})`);
                    } catch (S) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${C}): ` + S.message);
                    }
                }
                let E = g ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
                p || (E = x && u.length < 2 ? `(?:/${E})` : '/' + E),
                    x && (E += '?'),
                    (o += E),
                    (m += 20),
                    x && (m += -8),
                    g && (m += -20),
                    C === '.*' && (m += -50);
            }
            c.push(m);
        }
        n.push(c);
    }
    if (r.strict && r.end) {
        const u = n.length - 1;
        n[u][n[u].length - 1] += 0.7000000000000001;
    }
    r.strict || (o += '/?'), r.end ? (o += '$') : r.strict && (o += '(?:/|$)');
    const s = new RegExp(o, r.sensitive ? '' : 'i');
    function l(u) {
        const c = u.match(s),
            p = {};
        if (!c) return null;
        for (let d = 1; d < c.length; d++) {
            const m = c[d] || '',
                _ = a[d - 1];
            p[_.name] = m && _.repeatable ? m.split('/') : m;
        }
        return p;
    }
    function i(u) {
        let c = '',
            p = !1;
        for (const d of e) {
            (!p || !c.endsWith('/')) && (c += '/'), (p = !1);
            for (const m of d)
                if (m.type === 0) c += m.value;
                else if (m.type === 1) {
                    const { value: _, repeatable: g, optional: x } = m,
                        y = _ in u ? u[_] : '';
                    if (Bt(y) && !g)
                        throw new Error(
                            `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`
                        );
                    const C = Bt(y) ? y.join('/') : y;
                    if (!C)
                        if (x) d.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (p = !0));
                        else throw new Error(`Missing required param "${_}"`);
                    c += C;
                }
        }
        return c || '/';
    }
    return { re: s, score: n, keys: a, parse: l, stringify: i };
}
function IM(e, t) {
    let r = 0;
    for (; r < e.length && r < t.length; ) {
        const n = t[r] - e[r];
        if (n) return n;
        r++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === 40 + 40
            ? -1
            : 1
        : e.length > t.length
        ? t.length === 1 && t[0] === 40 + 40
            ? 1
            : -1
        : 0;
}
function kM(e, t) {
    let r = 0;
    const n = e.score,
        o = t.score;
    for (; r < n.length && r < o.length; ) {
        const a = IM(n[r], o[r]);
        if (a) return a;
        r++;
    }
    if (Math.abs(o.length - n.length) === 1) {
        if (Al(n)) return 1;
        if (Al(o)) return -1;
    }
    return o.length - n.length;
}
function Al(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const RM = { type: 0, value: '' },
    FM = /[a-zA-Z0-9_]/;
function $M(e) {
    if (!e) return [[]];
    if (e === '/') return [[RM]];
    if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${r})/"${u}": ${m}`);
    }
    let r = 0,
        n = r;
    const o = [];
    let a;
    function s() {
        a && o.push(a), (a = []);
    }
    let l = 0,
        i,
        u = '',
        c = '';
    function p() {
        !u ||
            (r === 0
                ? a.push({ type: 0, value: u })
                : r === 1 || r === 2 || r === 3
                ? (a.length > 1 &&
                      (i === '*' || i === '+') &&
                      t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
                  a.push({
                      type: 1,
                      value: u,
                      regexp: c,
                      repeatable: i === '*' || i === '+',
                      optional: i === '*' || i === '?',
                  }))
                : t('Invalid state to consume buffer'),
            (u = ''));
    }
    function d() {
        u += i;
    }
    for (; l < e.length; ) {
        if (((i = e[l++]), i === '\\' && r !== 2)) {
            (n = r), (r = 4);
            continue;
        }
        switch (r) {
            case 0:
                i === '/' ? (u && p(), s()) : i === ':' ? (p(), (r = 1)) : d();
                break;
            case 4:
                d(), (r = n);
                break;
            case 1:
                i === '(' ? (r = 2) : FM.test(i) ? d() : (p(), (r = 0), i !== '*' && i !== '?' && i !== '+' && l--);
                break;
            case 2:
                i === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + i) : (r = 3)) : (c += i);
                break;
            case 3:
                p(), (r = 0), i !== '*' && i !== '?' && i !== '+' && l--, (c = '');
                break;
            default:
                t('Unknown state');
                break;
        }
    }
    return r === 2 && t(`Unfinished custom RegExp for param "${u}"`), p(), s(), o;
}
function NM(e, t, r) {
    const n = PM($M(e.path), r),
        o = He(n, { record: e, parent: t, children: [], alias: [] });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function DM(e, t) {
    const r = [],
        n = new Map();
    t = Hl({ strict: !1, end: !0, sensitive: !1 }, t);
    function o(c) {
        return n.get(c);
    }
    function a(c, p, d) {
        const m = !d,
            _ = jM(c);
        _.aliasOf = d && d.record;
        const g = Hl(t, c),
            x = [_];
        if ('alias' in c) {
            const E = typeof c.alias == 'string' ? [c.alias] : c.alias;
            for (const S of E)
                x.push(
                    He({}, _, {
                        components: d ? d.record.components : _.components,
                        path: S,
                        aliasOf: d ? d.record : _,
                    })
                );
        }
        let y, C;
        for (const E of x) {
            const { path: S } = E;
            if (p && S[0] !== '/') {
                const H = p.record.path,
                    z = H[H.length - 1] === '/' ? '' : '/';
                E.path = p.record.path + (S && z + S);
            }
            if (
                ((y = NM(E, p, g)),
                d ? d.alias.push(y) : ((C = C || y), C !== y && C.alias.push(y), m && c.name && !Tl(y) && s(c.name)),
                _.children)
            ) {
                const H = _.children;
                for (let z = 0; z < H.length; z++) a(H[z], y, d && d.children[z]);
            }
            (d = d || y),
                ((y.record.components && Object.keys(y.record.components).length) ||
                    y.record.name ||
                    y.record.redirect) &&
                    i(y);
        }
        return C
            ? () => {
                  s(C);
              }
            : Fn;
    }
    function s(c) {
        if (R1(c)) {
            const p = n.get(c);
            p && (n.delete(c), r.splice(r.indexOf(p), 1), p.children.forEach(s), p.alias.forEach(s));
        } else {
            const p = r.indexOf(c);
            p > -1 &&
                (r.splice(p, 1), c.record.name && n.delete(c.record.name), c.children.forEach(s), c.alias.forEach(s));
        }
    }
    function l() {
        return r;
    }
    function i(c) {
        let p = 0;
        for (; p < r.length && kM(c, r[p]) >= 0 && (c.record.path !== r[p].record.path || !$1(c, r[p])); ) p++;
        r.splice(p, 0, c), c.record.name && !Tl(c) && n.set(c.record.name, c);
    }
    function u(c, p) {
        let d,
            m = {},
            _,
            g;
        if ('name' in c && c.name) {
            if (((d = n.get(c.name)), !d)) throw mn(1, { location: c });
            (g = d.record.name),
                (m = He(
                    zl(
                        p.params,
                        d.keys
                            .filter((C) => !C.optional)
                            .concat(d.parent ? d.parent.keys.filter((C) => C.optional) : [])
                            .map((C) => C.name)
                    ),
                    c.params &&
                        zl(
                            c.params,
                            d.keys.map((C) => C.name)
                        )
                )),
                (_ = d.stringify(m));
        } else if (c.path != null)
            (_ = c.path), (d = r.find((C) => C.re.test(_))), d && ((m = d.parse(_)), (g = d.record.name));
        else {
            if (((d = p.name ? n.get(p.name) : r.find((C) => C.re.test(p.path))), !d))
                throw mn(1, { location: c, currentLocation: p });
            (g = d.record.name), (m = He({}, p.params, c.params)), (_ = d.stringify(m));
        }
        const x = [];
        let y = d;
        for (; y; ) x.unshift(y.record), (y = y.parent);
        return { name: g, path: _, params: m, matched: x, meta: KM(x) };
    }
    return e.forEach((c) => a(c)), { addRoute: a, resolve: u, removeRoute: s, getRoutes: l, getRecordMatcher: o };
}
function zl(e, t) {
    const r = {};
    for (const n of t) n in e && (r[n] = e[n]);
    return r;
}
function jM(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: qM(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in e ? e.components || null : e.component && { default: e.component },
    };
}
function qM(e) {
    const t = {},
        r = e.props || !1;
    if ('component' in e) t.default = r;
    else for (const n in e.components) t[n] = typeof r == 'object' ? r[n] : r;
    return t;
}
function Tl(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function KM(e) {
    return e.reduce((t, r) => He(t, r.meta), {});
}
function Hl(e, t) {
    const r = {};
    for (const n in e) r[n] = n in t ? t[n] : e[n];
    return r;
}
function $1(e, t) {
    return t.children.some((r) => r === e || $1(e, r));
}
function UM(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const n = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let o = 0; o < n.length; ++o) {
        const a = n[o].replace(L1, ' '),
            s = a.indexOf('='),
            l = Zn(s < 0 ? a : a.slice(0, s)),
            i = s < 0 ? null : Zn(a.slice(s + 1));
        if (l in t) {
            let u = t[l];
            Bt(u) || (u = t[l] = [u]), u.push(i);
        } else t[l] = i;
    }
    return t;
}
function Bl(e) {
    let t = '';
    for (let r in e) {
        const n = e[r];
        if (((r = pM(r)), n == null)) {
            n !== void 0 && (t += (t.length ? '&' : '') + r);
            continue;
        }
        (Bt(n) ? n.map((a) => a && w2(a)) : [n && w2(n)]).forEach((a) => {
            a !== void 0 && ((t += (t.length ? '&' : '') + r), a != null && (t += '=' + a));
        });
    }
    return t;
}
function WM(e) {
    const t = {};
    for (const r in e) {
        const n = e[r];
        n !== void 0 && (t[r] = Bt(n) ? n.map((o) => (o == null ? null : '' + o)) : n == null ? n : '' + n);
    }
    return t;
}
const N1 = Symbol(''),
    Ll = Symbol(''),
    xa = Symbol(''),
    S0 = Symbol(''),
    b2 = Symbol('');
function zn() {
    let e = [];
    function t(n) {
        return (
            e.push(n),
            () => {
                const o = e.indexOf(n);
                o > -1 && e.splice(o, 1);
            }
        );
    }
    function r() {
        e = [];
    }
    return { add: t, list: () => e.slice(), reset: r };
}
function GM(e, t, r) {
    const n = () => {
        e[t].delete(r);
    };
    to(n),
        $2(n),
        Ci(() => {
            e[t].add(r);
        }),
        e[t].add(r);
}
function YM(e) {
    const t = le(N1, {}).value;
    !t || GM(t, 'updateGuards', e);
}
function pr(e, t, r, n, o, a = (s) => s()) {
    const s = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
    return () =>
        new Promise((l, i) => {
            const u = (d) => {
                    d === !1
                        ? i(mn(4, { from: r, to: t }))
                        : d instanceof Error
                        ? i(d)
                        : LM(d)
                        ? i(mn(2, { from: t, to: d }))
                        : (s && n.enterCallbacks[o] === s && typeof d == 'function' && s.push(d), l());
                },
                c = a(() => e.call(n && n.instances[o], t, r, u));
            let p = Promise.resolve(c);
            e.length < 3 && (p = p.then(u)), p.catch((d) => i(d));
        });
}
function Ga(e, t, r, n, o = (a) => a()) {
    const a = [];
    for (const s of e)
        for (const l in s.components) {
            let i = s.components[l];
            if (!(t !== 'beforeRouteEnter' && !s.instances[l]))
                if (JM(i)) {
                    const c = (i.__vccOpts || i)[t];
                    c && a.push(pr(c, r, n, s, l, o));
                } else {
                    let u = i();
                    a.push(() =>
                        u.then((c) => {
                            if (!c)
                                return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${s.path}"`));
                            const p = eM(c) ? c.default : c;
                            s.components[l] = p;
                            const m = (p.__vccOpts || p)[t];
                            return m && pr(m, r, n, s, l, o)();
                        })
                    );
                }
        }
    return a;
}
function JM(e) {
    return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function Vl(e) {
    const t = le(xa),
        r = le(S0),
        n = P(() => t.resolve(A(e.to))),
        o = P(() => {
            const { matched: i } = n.value,
                { length: u } = i,
                c = i[u - 1],
                p = r.matched;
            if (!c || !p.length) return -1;
            const d = p.findIndex(hn.bind(null, c));
            if (d > -1) return d;
            const m = Ol(i[u - 2]);
            return u > 1 && Ol(c) === m && p[p.length - 1].path !== m ? p.findIndex(hn.bind(null, i[u - 2])) : d;
        }),
        a = P(() => o.value > -1 && eE(r.params, n.value.params)),
        s = P(() => o.value > -1 && o.value === r.matched.length - 1 && I1(r.params, n.value.params));
    function l(i = {}) {
        return XM(i) ? t[A(e.replace) ? 'replace' : 'push'](A(e.to)).catch(Fn) : Promise.resolve();
    }
    return { route: n, href: P(() => n.value.href), isActive: a, isExactActive: s, navigate: l };
}
const ZM = h({
        name: 'RouterLink',
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: 'page' },
        },
        useLink: Vl,
        setup(e, { slots: t }) {
            const r = Lt(Vl(e)),
                { options: n } = le(xa),
                o = P(() => ({
                    [Pl(e.activeClass, n.linkActiveClass, 'router-link-active')]: r.isActive,
                    [Pl(e.exactActiveClass, n.linkExactActiveClass, 'router-link-exact-active')]: r.isExactActive,
                }));
            return () => {
                const a = t.default && t.default(r);
                return e.custom
                    ? a
                    : qe(
                          'a',
                          {
                              'aria-current': r.isExactActive ? e.ariaCurrentValue : null,
                              href: r.href,
                              onClick: r.navigate,
                              class: o.value,
                          },
                          a
                      );
            };
        },
    }),
    QM = ZM;
function XM(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
        }
        return e.preventDefault && e.preventDefault(), !0;
    }
}
function eE(e, t) {
    for (const r in t) {
        const n = t[r],
            o = e[r];
        if (typeof n == 'string') {
            if (n !== o) return !1;
        } else if (!Bt(o) || o.length !== n.length || n.some((a, s) => a !== o[s])) return !1;
    }
    return !0;
}
function Ol(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Pl = (e, t, r) => (e != null ? e : t != null ? t : r),
    tE = h({
        name: 'RouterView',
        inheritAttrs: !1,
        props: { name: { type: String, default: 'default' }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: r }) {
            const n = le(b2),
                o = P(() => e.route || n.value),
                a = le(Ll, 0),
                s = P(() => {
                    let u = A(a);
                    const { matched: c } = o.value;
                    let p;
                    for (; (p = c[u]) && !p.components; ) u++;
                    return u;
                }),
                l = P(() => o.value.matched[s.value]);
            $e(
                Ll,
                P(() => s.value + 1)
            ),
                $e(N1, l),
                $e(b2, o);
            const i = D();
            return (
                ce(
                    () => [i.value, l.value, e.name],
                    ([u, c, p], [d, m, _]) => {
                        c &&
                            ((c.instances[p] = u),
                            m &&
                                m !== c &&
                                u &&
                                u === d &&
                                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
                            u && c && (!m || !hn(c, m) || !d) && (c.enterCallbacks[p] || []).forEach((g) => g(u));
                    },
                    { flush: 'post' }
                ),
                () => {
                    const u = o.value,
                        c = e.name,
                        p = l.value,
                        d = p && p.components[c];
                    if (!d) return Il(r.default, { Component: d, route: u });
                    const m = p.props[c],
                        _ = m ? (m === !0 ? u.params : typeof m == 'function' ? m(u) : m) : null,
                        x = qe(
                            d,
                            He({}, _, t, {
                                onVnodeUnmounted: (y) => {
                                    y.component.isUnmounted && (p.instances[c] = null);
                                },
                                ref: i,
                            })
                        );
                    return Il(r.default, { Component: x, route: u }) || x;
                }
            );
        },
    });
function Il(e, t) {
    if (!e) return null;
    const r = e(t);
    return r.length === 1 ? r[0] : r;
}
const rE = tE;
function nE(e) {
    const t = DM(e.routes, e),
        r = e.parseQuery || UM,
        n = e.stringifyQuery || Bl,
        o = e.history,
        a = zn(),
        s = zn(),
        l = zn(),
        i = Jo(rr);
    let u = rr;
    Jr && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
    const c = Ua.bind(null, (k) => '' + k),
        p = Ua.bind(null, dM),
        d = Ua.bind(null, Zn);
    function m(k, te) {
        let X, ae;
        return R1(k) ? ((X = t.getRecordMatcher(k)), (ae = te)) : (ae = k), t.addRoute(ae, X);
    }
    function _(k) {
        const te = t.getRecordMatcher(k);
        te && t.removeRoute(te);
    }
    function g() {
        return t.getRoutes().map((k) => k.record);
    }
    function x(k) {
        return !!t.getRecordMatcher(k);
    }
    function y(k, te) {
        if (((te = He({}, te || i.value)), typeof k == 'string')) {
            const M = Wa(r, k, te.path),
                L = t.resolve({ path: M.path }, te),
                $ = o.createHref(M.fullPath);
            return He(M, L, { params: d(L.params), hash: Zn(M.hash), redirectedFrom: void 0, href: $ });
        }
        let X;
        if (k.path != null) X = He({}, k, { path: Wa(r, k.path, te.path).path });
        else {
            const M = He({}, k.params);
            for (const L in M) M[L] == null && delete M[L];
            (X = He({}, k, { params: p(M) })), (te.params = p(te.params));
        }
        const ae = t.resolve(X, te),
            Me = k.hash || '';
        ae.params = c(d(ae.params));
        const Pe = hM(n, He({}, k, { hash: cM(Me), path: ae.path })),
            b = o.createHref(Pe);
        return He({ fullPath: Pe, hash: Me, query: n === Bl ? WM(k.query) : k.query || {} }, ae, {
            redirectedFrom: void 0,
            href: b,
        });
    }
    function C(k) {
        return typeof k == 'string' ? Wa(r, k, i.value.path) : He({}, k);
    }
    function E(k, te) {
        if (u !== k) return mn(8, { from: te, to: k });
    }
    function S(k) {
        return O(k);
    }
    function H(k) {
        return S(He(C(k), { replace: !0 }));
    }
    function z(k) {
        const te = k.matched[k.matched.length - 1];
        if (te && te.redirect) {
            const { redirect: X } = te;
            let ae = typeof X == 'function' ? X(k) : X;
            return (
                typeof ae == 'string' &&
                    ((ae = ae.includes('?') || ae.includes('#') ? (ae = C(ae)) : { path: ae }), (ae.params = {})),
                He({ query: k.query, hash: k.hash, params: ae.path != null ? {} : k.params }, ae)
            );
        }
    }
    function O(k, te) {
        const X = (u = y(k)),
            ae = i.value,
            Me = k.state,
            Pe = k.force,
            b = k.replace === !0,
            M = z(X);
        if (M)
            return O(
                He(C(M), { state: typeof M == 'object' ? He({}, Me, M.state) : Me, force: Pe, replace: b }),
                te || X
            );
        const L = X;
        L.redirectedFrom = te;
        let $;
        return (
            !Pe && mM(n, ae, X) && (($ = mn(16, { to: L, from: ae })), _e(ae, ae, !0, !1)),
            ($ ? Promise.resolve($) : F(L, ae))
                .catch((I) => (Kt(I) ? (Kt(I, 2) ? I : oe(I)) : J(I, L, ae)))
                .then((I) => {
                    if (I) {
                        if (Kt(I, 2))
                            return O(
                                He({ replace: b }, C(I.to), {
                                    state: typeof I.to == 'object' ? He({}, Me, I.to.state) : Me,
                                    force: Pe,
                                }),
                                te || L
                            );
                    } else I = R(L, ae, !0, b, Me);
                    return j(L, ae, I), I;
                })
        );
    }
    function T(k, te) {
        const X = E(k, te);
        return X ? Promise.reject(X) : Promise.resolve();
    }
    function V(k) {
        const te = Se.values().next().value;
        return te && typeof te.runWithContext == 'function' ? te.runWithContext(k) : k();
    }
    function F(k, te) {
        let X;
        const [ae, Me, Pe] = oE(k, te);
        X = Ga(ae.reverse(), 'beforeRouteLeave', k, te);
        for (const M of ae)
            M.leaveGuards.forEach((L) => {
                X.push(pr(L, k, te));
            });
        const b = T.bind(null, k, te);
        return (
            X.push(b),
            De(X)
                .then(() => {
                    X = [];
                    for (const M of a.list()) X.push(pr(M, k, te));
                    return X.push(b), De(X);
                })
                .then(() => {
                    X = Ga(Me, 'beforeRouteUpdate', k, te);
                    for (const M of Me)
                        M.updateGuards.forEach((L) => {
                            X.push(pr(L, k, te));
                        });
                    return X.push(b), De(X);
                })
                .then(() => {
                    X = [];
                    for (const M of Pe)
                        if (M.beforeEnter)
                            if (Bt(M.beforeEnter)) for (const L of M.beforeEnter) X.push(pr(L, k, te));
                            else X.push(pr(M.beforeEnter, k, te));
                    return X.push(b), De(X);
                })
                .then(
                    () => (
                        k.matched.forEach((M) => (M.enterCallbacks = {})),
                        (X = Ga(Pe, 'beforeRouteEnter', k, te, V)),
                        X.push(b),
                        De(X)
                    )
                )
                .then(() => {
                    X = [];
                    for (const M of s.list()) X.push(pr(M, k, te));
                    return X.push(b), De(X);
                })
                .catch((M) => (Kt(M, 8) ? M : Promise.reject(M)))
        );
    }
    function j(k, te, X) {
        l.list().forEach((ae) => V(() => ae(k, te, X)));
    }
    function R(k, te, X, ae, Me) {
        const Pe = E(k, te);
        if (Pe) return Pe;
        const b = te === rr,
            M = Jr ? history.state : {};
        X && (ae || b ? o.replace(k.fullPath, He({ scroll: b && M && M.scroll }, Me)) : o.push(k.fullPath, Me)),
            (i.value = k),
            _e(k, te, X, b),
            oe();
    }
    let Q;
    function q() {
        Q ||
            (Q = o.listen((k, te, X) => {
                if (!tt.listening) return;
                const ae = y(k),
                    Me = z(ae);
                if (Me) {
                    O(He(Me, { replace: !0 }), ae).catch(Fn);
                    return;
                }
                u = ae;
                const Pe = i.value;
                Jr && EM(Cl(Pe.fullPath, X.delta), ba()),
                    F(ae, Pe)
                        .catch((b) =>
                            Kt(b, 12)
                                ? b
                                : Kt(b, 2)
                                ? (O(b.to, ae)
                                      .then((M) => {
                                          Kt(M, 20) && !X.delta && X.type === Qn.pop && o.go(-1, !1);
                                      })
                                      .catch(Fn),
                                  Promise.reject())
                                : (X.delta && o.go(-X.delta, !1), J(b, ae, Pe))
                        )
                        .then((b) => {
                            (b = b || R(ae, Pe, !1)),
                                b &&
                                    (X.delta && !Kt(b, 8)
                                        ? o.go(-X.delta, !1)
                                        : X.type === Qn.pop && Kt(b, 20) && o.go(-1, !1)),
                                j(ae, Pe, b);
                        })
                        .catch(Fn);
            }));
    }
    let W = zn(),
        N = zn(),
        B;
    function J(k, te, X) {
        oe(k);
        const ae = N.list();
        return ae.length ? ae.forEach((Me) => Me(k, te, X)) : console.error(k), Promise.reject(k);
    }
    function he() {
        return B && i.value !== rr
            ? Promise.resolve()
            : new Promise((k, te) => {
                  W.add([k, te]);
              });
    }
    function oe(k) {
        return B || ((B = !k), q(), W.list().forEach(([te, X]) => (k ? X(k) : te())), W.reset()), k;
    }
    function _e(k, te, X, ae) {
        const { scrollBehavior: Me } = e;
        if (!Jr || !Me) return Promise.resolve();
        const Pe = (!X && SM(Cl(k.fullPath, 0))) || ((ae || !X) && history.state && history.state.scroll) || null;
        return ht()
            .then(() => Me(k, te, Pe))
            .then((b) => b && MM(b))
            .catch((b) => J(b, k, te));
    }
    const ve = (k) => o.go(k);
    let Ve;
    const Se = new Set(),
        tt = {
            currentRoute: i,
            listening: !0,
            addRoute: m,
            removeRoute: _,
            hasRoute: x,
            getRoutes: g,
            resolve: y,
            options: e,
            push: S,
            replace: H,
            go: ve,
            back: () => ve(-1),
            forward: () => ve(1),
            beforeEach: a.add,
            beforeResolve: s.add,
            afterEach: l.add,
            onError: N.add,
            isReady: he,
            install(k) {
                const te = this;
                k.component('RouterLink', QM),
                    k.component('RouterView', rE),
                    (k.config.globalProperties.$router = te),
                    Object.defineProperty(k.config.globalProperties, '$route', { enumerable: !0, get: () => A(i) }),
                    Jr && !Ve && i.value === rr && ((Ve = !0), S(o.location).catch((Me) => {}));
                const X = {};
                for (const Me in rr) Object.defineProperty(X, Me, { get: () => i.value[Me], enumerable: !0 });
                k.provide(xa, te), k.provide(S0, oi(X)), k.provide(b2, i);
                const ae = k.unmount;
                Se.add(k),
                    (k.unmount = function () {
                        Se.delete(k),
                            Se.size < 1 && ((u = rr), Q && Q(), (Q = null), (i.value = rr), (Ve = !1), (B = !1)),
                            ae();
                    });
            },
        };
    function De(k) {
        return k.reduce((te, X) => te.then(() => V(X)), Promise.resolve());
    }
    return tt;
}
function oE(e, t) {
    const r = [],
        n = [],
        o = [],
        a = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < a; s++) {
        const l = t.matched[s];
        l && (e.matched.find((u) => hn(u, l)) ? n.push(l) : r.push(l));
        const i = e.matched[s];
        i && (t.matched.find((u) => hn(u, i)) || o.push(i));
    }
    return [r, n, o];
}
function D1() {
    return le(xa);
}
function j1() {
    return le(S0);
}
const q1 = la('permiss', {
        state: () => {
            const e = {
                    admin: [
                        '0',
                        '1',
                        '11',
                        '12',
                        '13',
                        '2',
                        '21',
                        '22',
                        '23',
                        '24',
                        '25',
                        '26',
                        '27',
                        '28',
                        '29',
                        '291',
                        '292',
                        '3',
                        '31',
                        '32',
                        '33',
                        '34',
                        '4',
                        '41',
                        '42',
                        '5',
                        '7',
                        '6',
                        '61',
                        '62',
                        '63',
                        '64',
                        '65',
                        '66',
                    ],
                    user: ['0', '1', '11', '12', '13'],
                },
                t = localStorage.getItem('vuems_name');
            return console.log(t), { key: t == 'admin' ? e.admin : e.user, defaultList: e };
        },
        actions: {
            handleSet(e) {
                this.key = e;
            },
        },
    }),
    A0 = la('sidebar', {
        state: () => ({
            collapse: !1,
            bgColor: localStorage.getItem('sidebar-bg-color') || '#324157',
            textColor: localStorage.getItem('sidebar-text-color') || '#bfcbd9',
        }),
        getters: {},
        actions: {
            handleCollapse() {
                this.collapse = !this.collapse;
            },
            setBgColor(e) {
                (this.bgColor = e), localStorage.setItem('sidebar-bg-color', e);
            },
            setTextColor(e) {
                (this.textColor = e), localStorage.setItem('sidebar-text-color', e);
            },
        },
    }),
    K1 = la('tabs', {
        state: () => ({ list: [] }),
        getters: { show: (e) => e.list.length > 0, nameList: (e) => e.list.map((t) => t.name) },
        actions: {
            delTabsItem(e) {
                this.list.splice(e, 1);
            },
            setTabsItem(e) {
                this.list.push(e);
            },
            clearTabs() {
                this.list = [];
            },
            closeTabsOther(e) {
                this.list = e;
            },
            closeCurrentTag(e) {
                for (let t = 0, r = this.list.length; t < r; t++)
                    if (this.list[t].path === e.$route.fullPath) {
                        t < r - 1
                            ? e.$router.push(this.list[t + 1].path)
                            : t > 0
                            ? e.$router.push(this.list[t - 1].path)
                            : e.$router.push('/'),
                            this.list.splice(t, 1);
                        break;
                    }
            },
        },
    });
const aE = '' + new URL('logo.99192c0e.svg', import.meta.url).href,
    sE = '' + new URL('img.cf1cb86c.jpg', import.meta.url).href,
    ao = (e) => (jc('data-v-60bd1104'), (e = e()), qc(), e),
    lE = { class: 'header' },
    iE = { class: 'header-left' },
    uE = ao(() => f('img', { class: 'logo', src: aE, alt: '' }, null, -1)),
    cE = ao(() => f('div', { class: 'web-title' }, '\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF', -1)),
    pE = { class: 'header-right' },
    fE = { class: 'header-user-con' },
    dE = ao(() => f('i', { class: 'el-icon-lx-skin' }, null, -1)),
    _E = ao(() => f('i', { class: 'el-icon-lx-notice' }, null, -1)),
    vE = { key: 0, class: 'btn-bell-badge' },
    hE = ao(() => f('i', { class: 'el-icon-lx-full' }, null, -1)),
    mE = { class: 'el-dropdown-link' },
    gE = { href: 'https://github.com/lin-xin/vue-manage-system', target: '_blank' },
    wE = { href: 'https://lin-xin.gitee.io/example/vuems-doc/', target: '_blank' },
    yE = 2,
    bE = h({
        __name: 'header',
        setup(e) {
            const t = localStorage.getItem('vuems_name'),
                r = A0(),
                n = () => {
                    r.handleCollapse();
                };
            Ge(() => {
                document.body.clientWidth < 1500 && n();
            });
            const o = D1(),
                a = (l) => {
                    l == 'loginout'
                        ? (localStorage.removeItem('vuems_name'), o.push('/login'))
                        : l == 'user' && o.push('/ucenter');
                },
                s = () => {
                    document.fullscreenElement
                        ? document.exitFullscreen()
                        : document.body.requestFullscreen.call(document.body);
                };
            return (l, i) => {
                const u = Fe('Expand'),
                    c = ct,
                    p = Fe('Fold'),
                    d = ga,
                    m = Kb,
                    _ = Fe('arrow-down'),
                    g = x1,
                    x = C1,
                    y = b1;
                return (
                    v(),
                    w('div', lE, [
                        f('div', iE, [
                            uE,
                            cE,
                            f('div', { class: 'collapse-btn', onClick: n }, [
                                A(r).collapse
                                    ? (v(), me(c, { key: 0 }, { default: re(() => [G(u)]), _: 1 }))
                                    : (v(), me(c, { key: 1 }, { default: re(() => [G(p)]), _: 1 })),
                            ]),
                        ]),
                        f('div', pE, [
                            f('div', fE, [
                                f('div', { class: 'btn-icon', onClick: i[0] || (i[0] = (C) => A(o).push('/theme')) }, [
                                    G(
                                        d,
                                        { effect: 'dark', content: '\u8BBE\u7F6E\u4E3B\u9898', placement: 'bottom' },
                                        { default: re(() => [dE]), _: 1 }
                                    ),
                                ]),
                                f(
                                    'div',
                                    { class: 'btn-icon', onClick: i[1] || (i[1] = (C) => A(o).push('/ucenter')) },
                                    [
                                        G(
                                            d,
                                            {
                                                effect: 'dark',
                                                content: `\u6709${yE}\u6761\u672A\u8BFB\u6D88\u606F`,
                                                placement: 'bottom',
                                            },
                                            { default: re(() => [_E]), _: 1 },
                                            8,
                                            ['content']
                                        ),
                                        (v(), w('span', vE)),
                                    ]
                                ),
                                f('div', { class: 'btn-icon', onClick: s }, [
                                    G(
                                        d,
                                        { effect: 'dark', content: '\u5168\u5C4F', placement: 'bottom' },
                                        { default: re(() => [hE]), _: 1 }
                                    ),
                                ]),
                                G(m, { class: 'user-avator', size: 30, src: A(sE) }, null, 8, ['src']),
                                G(
                                    y,
                                    { class: 'user-name', trigger: 'click', onCommand: a },
                                    {
                                        dropdown: re(() => [
                                            G(x, null, {
                                                default: re(() => [
                                                    f('a', gE, [
                                                        G(g, null, {
                                                            default: re(() => [st('\u9879\u76EE\u4ED3\u5E93')]),
                                                            _: 1,
                                                        }),
                                                    ]),
                                                    f('a', wE, [
                                                        G(g, null, {
                                                            default: re(() => [st('\u5B98\u65B9\u6587\u6863')]),
                                                            _: 1,
                                                        }),
                                                    ]),
                                                    G(
                                                        g,
                                                        { command: 'user' },
                                                        { default: re(() => [st('\u4E2A\u4EBA\u4E2D\u5FC3')]), _: 1 }
                                                    ),
                                                    G(
                                                        g,
                                                        { divided: '', command: 'loginout' },
                                                        { default: re(() => [st('\u9000\u51FA\u767B\u5F55')]), _: 1 }
                                                    ),
                                                ]),
                                                _: 1,
                                            }),
                                        ]),
                                        default: re(() => [
                                            f('span', mE, [
                                                st(fr(A(t)) + ' ', 1),
                                                G(c, { class: 'el-icon--right' }, { default: re(() => [G(_)]), _: 1 }),
                                            ]),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                        ]),
                    ])
                );
            };
        },
    });
const U1 = (e, t) => {
        const r = e.__vccOpts || e;
        for (const [n, o] of t) r[n] = o;
        return r;
    },
    xE = U1(bE, [['__scopeId', 'data-v-60bd1104']]);
const CE = [
        { id: '0', title: '\u7CFB\u7EDF\u9996\u9875', index: '/dashboard', icon: 'Odometer' },
        {
            id: '1',
            title: '\u7CFB\u7EDF\u7BA1\u7406',
            index: '1',
            icon: 'HomeFilled',
            children: [
                { id: '11', pid: '1', index: '/system-user', title: '\u7528\u6237\u7BA1\u7406' },
                { id: '12', pid: '1', index: '/system-role', title: '\u89D2\u8272\u7BA1\u7406' },
                { id: '13', pid: '1', index: '/system-menu', title: '\u83DC\u5355\u7BA1\u7406' },
            ],
        },
        {
            id: '2',
            title: '\u7EC4\u4EF6',
            index: '2-1',
            icon: 'Calendar',
            children: [
                { id: '21', pid: '3', index: '/form', title: '\u8868\u5355' },
                { id: '22', pid: '3', index: '/upload', title: '\u4E0A\u4F20' },
                { id: '23', pid: '2', index: '/carousel', title: '\u8D70\u9A6C\u706F' },
                { id: '24', pid: '2', index: '/calendar', title: '\u65E5\u5386' },
                { id: '25', pid: '2', index: '/watermark', title: '\u6C34\u5370' },
                { id: '26', pid: '2', index: '/tour', title: '\u5206\u5E03\u5F15\u5BFC' },
                { id: '27', pid: '2', index: '/steps', title: '\u6B65\u9AA4\u6761' },
                { id: '28', pid: '2', index: '/statistic', title: '\u7EDF\u8BA1' },
                {
                    id: '29',
                    pid: '3',
                    index: '29',
                    title: '\u4E09\u7EA7\u83DC\u5355',
                    children: [
                        { id: '291', pid: '29', index: '/editor', title: '\u5BCC\u6587\u672C\u7F16\u8F91\u5668' },
                        { id: '292', pid: '29', index: '/markdown', title: 'markdown\u7F16\u8F91\u5668' },
                    ],
                },
            ],
        },
        {
            id: '3',
            title: '\u8868\u683C',
            index: '3',
            icon: 'Calendar',
            children: [
                { id: '31', pid: '3', index: '/table', title: '\u57FA\u7840\u8868\u683C' },
                { id: '32', pid: '3', index: '/table-editor', title: '\u53EF\u7F16\u8F91\u8868\u683C' },
                { id: '33', pid: '3', index: '/import', title: '\u5BFC\u5165Excel' },
                { id: '34', pid: '3', index: '/export', title: '\u5BFC\u51FAExcel' },
            ],
        },
        {
            id: '4',
            icon: 'PieChart',
            index: '4',
            title: '\u56FE\u8868',
            children: [
                { id: '41', pid: '4', index: '/schart', title: 'schart\u56FE\u8868' },
                { id: '42', pid: '4', index: '/echarts', title: 'echarts\u56FE\u8868' },
            ],
        },
        { id: '5', icon: 'Guide', index: '/icon', title: '\u56FE\u6807', permiss: '5' },
        { id: '7', icon: 'Brush', index: '/theme', title: '\u4E3B\u9898' },
        {
            id: '6',
            icon: 'DocumentAdd',
            index: '6',
            title: '\u9644\u52A0\u9875\u9762',
            children: [
                { id: '61', pid: '6', index: '/ucenter', title: '\u4E2A\u4EBA\u4E2D\u5FC3' },
                { id: '62', pid: '6', index: '/login', title: '\u767B\u5F55' },
                { id: '63', pid: '6', index: '/register', title: '\u6CE8\u518C' },
                { id: '64', pid: '6', index: '/reset-pwd', title: '\u91CD\u8BBE\u5BC6\u7801' },
                { id: '65', pid: '6', index: '/403', title: '403' },
                { id: '66', pid: '6', index: '/404', title: '404' },
            ],
        },
    ],
    ME = { class: 'sidebar' },
    EE = h({
        __name: 'sidebar',
        setup(e) {
            const t = j1(),
                r = P(() => t.path),
                n = A0();
            return (o, a) => {
                const s = ct,
                    l = BC,
                    i = LC,
                    u = HC,
                    c = Jc('permiss');
                return (
                    v(),
                    w('div', ME, [
                        G(
                            u,
                            {
                                class: 'sidebar-el-menu',
                                'default-active': r.value,
                                collapse: A(n).collapse,
                                'background-color': A(n).bgColor,
                                'text-color': A(n).textColor,
                                router: '',
                            },
                            {
                                default: re(() => [
                                    (v(!0),
                                    w(
                                        Oe,
                                        null,
                                        Eo(
                                            A(CE),
                                            (p) => (
                                                v(),
                                                w(
                                                    Oe,
                                                    null,
                                                    [
                                                        p.children
                                                            ? kt(
                                                                  (v(),
                                                                  me(
                                                                      i,
                                                                      { index: p.index, key: p.index },
                                                                      {
                                                                          title: re(() => [
                                                                              G(
                                                                                  s,
                                                                                  null,
                                                                                  {
                                                                                      default: re(() => [
                                                                                          (v(), me(Yt(p.icon))),
                                                                                      ]),
                                                                                      _: 2,
                                                                                  },
                                                                                  1024
                                                                              ),
                                                                              f('span', null, fr(p.title), 1),
                                                                          ]),
                                                                          default: re(() => [
                                                                              (v(!0),
                                                                              w(
                                                                                  Oe,
                                                                                  null,
                                                                                  Eo(
                                                                                      p.children,
                                                                                      (d) => (
                                                                                          v(),
                                                                                          w(
                                                                                              Oe,
                                                                                              null,
                                                                                              [
                                                                                                  d.children
                                                                                                      ? kt(
                                                                                                            (v(),
                                                                                                            me(
                                                                                                                i,
                                                                                                                {
                                                                                                                    index: d.index,
                                                                                                                    key: d.index,
                                                                                                                },
                                                                                                                {
                                                                                                                    title: re(
                                                                                                                        () => [
                                                                                                                            st(
                                                                                                                                fr(
                                                                                                                                    d.title
                                                                                                                                ),
                                                                                                                                1
                                                                                                                            ),
                                                                                                                        ]
                                                                                                                    ),
                                                                                                                    default:
                                                                                                                        re(
                                                                                                                            () => [
                                                                                                                                (v(
                                                                                                                                    !0
                                                                                                                                ),
                                                                                                                                w(
                                                                                                                                    Oe,
                                                                                                                                    null,
                                                                                                                                    Eo(
                                                                                                                                        d.children,
                                                                                                                                        (
                                                                                                                                            m,
                                                                                                                                            _
                                                                                                                                        ) => (
                                                                                                                                            v(),
                                                                                                                                            me(
                                                                                                                                                l,
                                                                                                                                                {
                                                                                                                                                    key: _,
                                                                                                                                                    index: m.index,
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    default:
                                                                                                                                                        re(
                                                                                                                                                            () => [
                                                                                                                                                                st(
                                                                                                                                                                    fr(
                                                                                                                                                                        m.title
                                                                                                                                                                    ),
                                                                                                                                                                    1
                                                                                                                                                                ),
                                                                                                                                                            ]
                                                                                                                                                        ),
                                                                                                                                                    _: 2,
                                                                                                                                                },
                                                                                                                                                1032,
                                                                                                                                                [
                                                                                                                                                    'index',
                                                                                                                                                ]
                                                                                                                                            )
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                    128
                                                                                                                                )),
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                    _: 2,
                                                                                                                },
                                                                                                                1032,
                                                                                                                [
                                                                                                                    'index',
                                                                                                                ]
                                                                                                            )),
                                                                                                            [[c, p.id]]
                                                                                                        )
                                                                                                      : kt(
                                                                                                            (v(),
                                                                                                            me(
                                                                                                                l,
                                                                                                                {
                                                                                                                    key: 1,
                                                                                                                    index: d.index,
                                                                                                                },
                                                                                                                {
                                                                                                                    default:
                                                                                                                        re(
                                                                                                                            () => [
                                                                                                                                st(
                                                                                                                                    fr(
                                                                                                                                        d.title
                                                                                                                                    ),
                                                                                                                                    1
                                                                                                                                ),
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                    _: 2,
                                                                                                                },
                                                                                                                1032,
                                                                                                                [
                                                                                                                    'index',
                                                                                                                ]
                                                                                                            )),
                                                                                                            [[c, p.id]]
                                                                                                        ),
                                                                                              ],
                                                                                              64
                                                                                          )
                                                                                      )
                                                                                  ),
                                                                                  256
                                                                              )),
                                                                          ]),
                                                                          _: 2,
                                                                      },
                                                                      1032,
                                                                      ['index']
                                                                  )),
                                                                  [[c, p.id]]
                                                              )
                                                            : kt(
                                                                  (v(),
                                                                  me(
                                                                      l,
                                                                      { index: p.index, key: p.index },
                                                                      {
                                                                          title: re(() => [st(fr(p.title), 1)]),
                                                                          default: re(() => [
                                                                              G(
                                                                                  s,
                                                                                  null,
                                                                                  {
                                                                                      default: re(() => [
                                                                                          (v(), me(Yt(p.icon))),
                                                                                      ]),
                                                                                      _: 2,
                                                                                  },
                                                                                  1024
                                                                              ),
                                                                          ]),
                                                                          _: 2,
                                                                      },
                                                                      1032,
                                                                      ['index']
                                                                  )),
                                                                  [[c, p.id]]
                                                              ),
                                                    ],
                                                    64
                                                )
                                            )
                                        ),
                                        256
                                    )),
                                ]),
                                _: 1,
                            },
                            8,
                            ['default-active', 'collapse', 'background-color', 'text-color']
                        ),
                    ])
                );
            };
        },
    });
const SE = U1(EE, [['__scopeId', 'data-v-ea94e60c']]);
const AE = { class: 'tabs-container' },
    zE = { class: 'Tabs-close-box' },
    TE = h({
        __name: 'tabs',
        setup(e) {
            const t = j1(),
                r = D1(),
                n = D(t.fullPath),
                o = K1(),
                a = (p) => {
                    o.list.some((m) => m.path === p.fullPath) ||
                        o.setTabsItem({ name: p.name, title: p.meta.title, path: p.fullPath });
                };
            a(t),
                YM((p) => {
                    a(p);
                });
            const s = () => {
                    o.clearTabs(), r.push('/');
                },
                l = () => {
                    const p = o.list.filter((d) => d.path === t.fullPath);
                    o.closeTabsOther(p);
                },
                i = (p) => {
                    switch (p) {
                        case 'current':
                            o.closeCurrentTag({ $router: r, $route: t });
                            break;
                        case 'all':
                            s();
                            break;
                        case 'other':
                            l();
                            break;
                    }
                },
                u = (p) => {
                    r.push(p.props.name);
                },
                c = (p) => {
                    const d = o.list.findIndex((_) => _.path === p);
                    o.delTabsItem(d);
                    const m = o.list[d] || o.list[d - 1];
                    r.push(m ? m.path : '/');
                };
            return (
                ce(
                    () => t.fullPath,
                    (p, d) => {
                        n.value = p;
                    }
                ),
                (p, d) => {
                    const m = GC,
                        _ = WC,
                        g = Fe('arrow-down'),
                        x = ct,
                        y = y0,
                        C = x1,
                        E = C1,
                        S = b1;
                    return (
                        v(),
                        w('div', AE, [
                            G(
                                _,
                                {
                                    modelValue: n.value,
                                    'onUpdate:modelValue': d[0] || (d[0] = (H) => (n.value = H)),
                                    class: 'tabs',
                                    type: 'card',
                                    closable: '',
                                    onTabClick: u,
                                    onTabRemove: c,
                                },
                                {
                                    default: re(() => [
                                        (v(!0),
                                        w(
                                            Oe,
                                            null,
                                            Eo(
                                                A(o).list,
                                                (H) => (
                                                    v(),
                                                    me(
                                                        m,
                                                        {
                                                            key: H.path,
                                                            label: H.title,
                                                            name: H.path,
                                                            onClick: (z) => a(H),
                                                        },
                                                        null,
                                                        8,
                                                        ['label', 'name', 'onClick']
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['modelValue']
                            ),
                            f('div', zE, [
                                G(
                                    S,
                                    { onCommand: i },
                                    {
                                        dropdown: re(() => [
                                            G(
                                                E,
                                                { size: 'small' },
                                                {
                                                    default: re(() => [
                                                        G(
                                                            C,
                                                            { command: 'other' },
                                                            {
                                                                default: re(() => [st('\u5173\u95ED\u5176\u4ED6')]),
                                                                _: 1,
                                                            }
                                                        ),
                                                        G(
                                                            C,
                                                            { command: 'current' },
                                                            {
                                                                default: re(() => [st('\u5173\u95ED\u5F53\u524D')]),
                                                                _: 1,
                                                            }
                                                        ),
                                                        G(
                                                            C,
                                                            { command: 'all' },
                                                            {
                                                                default: re(() => [st('\u5173\u95ED\u6240\u6709')]),
                                                                _: 1,
                                                            }
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                        ]),
                                        default: re(() => [
                                            G(
                                                y,
                                                { size: 'small', type: 'primary', plain: '' },
                                                {
                                                    default: re(() => [
                                                        st(' \u6807\u7B7E\u9009\u9879 '),
                                                        G(
                                                            x,
                                                            { class: 'el-icon--right' },
                                                            { default: re(() => [G(g)]), _: 1 }
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                        ])
                    );
                }
            );
        },
    });
const HE = { class: 'wrapper' },
    BE = { class: 'content' },
    LE = h({
        __name: 'home',
        setup(e) {
            const t = A0(),
                r = K1();
            return (n, o) => {
                const a = Fe('router-view');
                return (
                    v(),
                    w('div', HE, [
                        G(xE),
                        G(SE),
                        f(
                            'div',
                            { class: ke(['content-box', { 'content-collapse': A(t).collapse }]) },
                            [
                                G(TE),
                                f('div', BE, [
                                    G(a, null, {
                                        default: re(({ Component: s }) => [
                                            G(
                                                Nr,
                                                { name: 'move', mode: 'out-in' },
                                                {
                                                    default: re(() => [
                                                        (v(),
                                                        me(o4, { include: A(r).nameList }, [(v(), me(Yt(s)))], 1032, [
                                                            'include',
                                                        ])),
                                                    ]),
                                                    _: 2,
                                                },
                                                1024
                                            ),
                                        ]),
                                        _: 1,
                                    }),
                                ]),
                            ],
                            2
                        ),
                    ])
                );
            };
        },
    });
var W1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function (e, t) {
    (function (r, n) {
        e.exports = n();
    })(vx, function () {
        var r = {};
        r.version = '0.2.0';
        var n = (r.settings = {
            minimum: 0.08,
            easing: 'ease',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
        });
        (r.configure = function (_) {
            var g, x;
            for (g in _) (x = _[g]), x !== void 0 && _.hasOwnProperty(g) && (n[g] = x);
            return this;
        }),
            (r.status = null),
            (r.set = function (_) {
                var g = r.isStarted();
                (_ = o(_, n.minimum, 1)), (r.status = _ === 1 ? null : _);
                var x = r.render(!g),
                    y = x.querySelector(n.barSelector),
                    C = n.speed,
                    E = n.easing;
                return (
                    x.offsetWidth,
                    l(function (S) {
                        n.positionUsing === '' && (n.positionUsing = r.getPositioningCSS()),
                            i(y, s(_, C, E)),
                            _ === 1
                                ? (i(x, { transition: 'none', opacity: 1 }),
                                  x.offsetWidth,
                                  setTimeout(function () {
                                      i(x, { transition: 'all ' + C + 'ms linear', opacity: 0 }),
                                          setTimeout(function () {
                                              r.remove(), S();
                                          }, C);
                                  }, C))
                                : setTimeout(S, C);
                    }),
                    this
                );
            }),
            (r.isStarted = function () {
                return typeof r.status == 'number';
            }),
            (r.start = function () {
                r.status || r.set(0);
                var _ = function () {
                    setTimeout(function () {
                        !r.status || (r.trickle(), _());
                    }, n.trickleSpeed);
                };
                return n.trickle && _(), this;
            }),
            (r.done = function (_) {
                return !_ && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
            }),
            (r.inc = function (_) {
                var g = r.status;
                return g
                    ? (typeof _ != 'number' && (_ = (1 - g) * o(Math.random() * g, 0.1, 0.95)),
                      (g = o(g + _, 0, 0.994)),
                      r.set(g))
                    : r.start();
            }),
            (r.trickle = function () {
                return r.inc(Math.random() * n.trickleRate);
            }),
            (function () {
                var _ = 0,
                    g = 0;
                r.promise = function (x) {
                    return !x || x.state() === 'resolved'
                        ? this
                        : (g === 0 && r.start(),
                          _++,
                          g++,
                          x.always(function () {
                              g--, g === 0 ? ((_ = 0), r.done()) : r.set((_ - g) / _);
                          }),
                          this);
                };
            })(),
            (r.render = function (_) {
                if (r.isRendered()) return document.getElementById('nprogress');
                c(document.documentElement, 'nprogress-busy');
                var g = document.createElement('div');
                (g.id = 'nprogress'), (g.innerHTML = n.template);
                var x = g.querySelector(n.barSelector),
                    y = _ ? '-100' : a(r.status || 0),
                    C = document.querySelector(n.parent),
                    E;
                return (
                    i(x, { transition: 'all 0 linear', transform: 'translate3d(' + y + '%,0,0)' }),
                    n.showSpinner || ((E = g.querySelector(n.spinnerSelector)), E && m(E)),
                    C != document.body && c(C, 'nprogress-custom-parent'),
                    C.appendChild(g),
                    g
                );
            }),
            (r.remove = function () {
                p(document.documentElement, 'nprogress-busy'),
                    p(document.querySelector(n.parent), 'nprogress-custom-parent');
                var _ = document.getElementById('nprogress');
                _ && m(_);
            }),
            (r.isRendered = function () {
                return !!document.getElementById('nprogress');
            }),
            (r.getPositioningCSS = function () {
                var _ = document.body.style,
                    g =
                        'WebkitTransform' in _
                            ? 'Webkit'
                            : 'MozTransform' in _
                            ? 'Moz'
                            : 'msTransform' in _
                            ? 'ms'
                            : 'OTransform' in _
                            ? 'O'
                            : '';
                return g + 'Perspective' in _ ? 'translate3d' : g + 'Transform' in _ ? 'translate' : 'margin';
            });
        function o(_, g, x) {
            return _ < g ? g : _ > x ? x : _;
        }
        function a(_) {
            return (-1 + _) * 100;
        }
        function s(_, g, x) {
            var y;
            return (
                n.positionUsing === 'translate3d'
                    ? (y = { transform: 'translate3d(' + a(_) + '%,0,0)' })
                    : n.positionUsing === 'translate'
                    ? (y = { transform: 'translate(' + a(_) + '%,0)' })
                    : (y = { 'margin-left': a(_) + '%' }),
                (y.transition = 'all ' + g + 'ms ' + x),
                y
            );
        }
        var l = (function () {
                var _ = [];
                function g() {
                    var x = _.shift();
                    x && x(g);
                }
                return function (x) {
                    _.push(x), _.length == 1 && g();
                };
            })(),
            i = (function () {
                var _ = ['Webkit', 'O', 'Moz', 'ms'],
                    g = {};
                function x(S) {
                    return S.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (H, z) {
                        return z.toUpperCase();
                    });
                }
                function y(S) {
                    var H = document.body.style;
                    if (S in H) return S;
                    for (var z = _.length, O = S.charAt(0).toUpperCase() + S.slice(1), T; z--; )
                        if (((T = _[z] + O), T in H)) return T;
                    return S;
                }
                function C(S) {
                    return (S = x(S)), g[S] || (g[S] = y(S));
                }
                function E(S, H, z) {
                    (H = C(H)), (S.style[H] = z);
                }
                return function (S, H) {
                    var z = arguments,
                        O,
                        T;
                    if (z.length == 2) for (O in H) (T = H[O]), T !== void 0 && H.hasOwnProperty(O) && E(S, O, T);
                    else E(S, z[1], z[2]);
                };
            })();
        function u(_, g) {
            var x = typeof _ == 'string' ? _ : d(_);
            return x.indexOf(' ' + g + ' ') >= 0;
        }
        function c(_, g) {
            var x = d(_),
                y = x + g;
            u(x, g) || (_.className = y.substring(1));
        }
        function p(_, g) {
            var x = d(_),
                y;
            !u(_, g) || ((y = x.replace(' ' + g + ' ', ' ')), (_.className = y.substring(1, y.length - 1)));
        }
        function d(_) {
            return (' ' + (_.className || '') + ' ').replace(/\s+/gi, ' ');
        }
        function m(_) {
            _ && _.parentNode && _.parentNode.removeChild(_);
        }
        return r;
    });
})(W1);
const G1 = W1.exports;
const VE = [
        { path: '/', redirect: '/dashboard' },
        {
            path: '/',
            name: 'Home',
            component: LE,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: { title: '\u7CFB\u7EDF\u9996\u9875', noAuth: !0 },
                    component: () =>
                        Be(
                            () => import('./dashboard.517d76b5.js'),
                            [
                                './dashboard.517d76b5.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './countup.vue_vue_type_script_setup_true_lang.eb94e4f4.js',
                                './china.7e7650c8.js',
                                './dashboard.28da95ba.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/system-user',
                    name: 'system-user',
                    meta: { title: '\u7528\u6237\u7BA1\u7406', permiss: '11' },
                    component: () =>
                        Be(
                            () => import('./user.85ad260d.js'),
                            [
                                './user.85ad260d.js',
                                './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js',
                                './table-custom.bd2543c0.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-tag.a8af73f1.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './debounce.632c06d2.js',
                                './el-select.6088e138.css',
                                './el-table-column.c4be16ed.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './table-custom.4da9a880.css',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './el-form-item.86df69f9.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './el-upload.5bb6fad5.css',
                                './el-date-picker.087f596b.js',
                                './localeData.b0463d95.js',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './el-date-picker.3e4d9e53.css',
                                './table-detail.5e6f4f00.css',
                                './index.b33b1184.js',
                                './table-search.829b8e04.js',
                                './table-search.a21dca8a.css',
                                './index.ad29a086.js',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/system-role',
                    name: 'system-role',
                    meta: { title: '\u89D2\u8272\u7BA1\u7406', permiss: '12' },
                    component: () =>
                        Be(
                            () => import('./role.99aefa15.js'),
                            [
                                './role.99aefa15.js',
                                './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js',
                                './table-custom.bd2543c0.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-tag.a8af73f1.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './debounce.632c06d2.js',
                                './el-select.6088e138.css',
                                './el-table-column.c4be16ed.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './table-custom.4da9a880.css',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './el-form-item.86df69f9.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './el-upload.5bb6fad5.css',
                                './el-date-picker.087f596b.js',
                                './localeData.b0463d95.js',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './el-date-picker.3e4d9e53.css',
                                './table-detail.5e6f4f00.css',
                                './table-search.829b8e04.js',
                                './table-search.a21dca8a.css',
                                './index.b33b1184.js',
                                './index.ad29a086.js',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/system-menu',
                    name: 'system-menu',
                    meta: { title: '\u83DC\u5355\u7BA1\u7406', permiss: '13' },
                    component: () =>
                        Be(
                            () => import('./menu.fe30011a.js'),
                            [
                                './menu.fe30011a.js',
                                './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js',
                                './table-custom.bd2543c0.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-tag.a8af73f1.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './debounce.632c06d2.js',
                                './el-select.6088e138.css',
                                './el-table-column.c4be16ed.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './table-custom.4da9a880.css',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './el-form-item.86df69f9.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './el-upload.5bb6fad5.css',
                                './el-date-picker.087f596b.js',
                                './localeData.b0463d95.js',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './el-date-picker.3e4d9e53.css',
                                './table-detail.5e6f4f00.css',
                                './el-radio.a37b6563.js',
                                './el-radio.78ecfd3b.css',
                                './index.ad29a086.js',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/table',
                    name: 'basetable',
                    meta: { title: '\u57FA\u7840\u8868\u683C', permiss: '31' },
                    component: () =>
                        Be(
                            () => import('./basetable.7077c9e2.js'),
                            [
                                './basetable.7077c9e2.js',
                                './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js',
                                './table-custom.bd2543c0.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-tag.a8af73f1.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './debounce.632c06d2.js',
                                './el-select.6088e138.css',
                                './el-table-column.c4be16ed.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './table-custom.4da9a880.css',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './el-form-item.86df69f9.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './el-upload.5bb6fad5.css',
                                './el-date-picker.087f596b.js',
                                './localeData.b0463d95.js',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './el-date-picker.3e4d9e53.css',
                                './table-detail.5e6f4f00.css',
                                './el-image-viewer.70b779bf.js',
                                './position.f549de9f.js',
                                './el-image-viewer.04bd763b.css',
                                './index.b33b1184.js',
                                './table-search.829b8e04.js',
                                './table-search.a21dca8a.css',
                                './index.ad29a086.js',
                                './basetable.b285e51e.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/table-editor',
                    name: 'table-editor',
                    meta: { title: '\u53EF\u7F16\u8F91\u8868\u683C', permiss: '32' },
                    component: () =>
                        Be(
                            () => import('./table-editor.308389f8.js'),
                            [
                                './table-editor.308389f8.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-tag.a8af73f1.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './debounce.632c06d2.js',
                                './el-select.6088e138.css',
                                './table-custom.bd2543c0.js',
                                './el-table-column.c4be16ed.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './table-custom.4da9a880.css',
                                './index.b33b1184.js',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/schart',
                    name: 'schart',
                    meta: { title: 'schart\u56FE\u8868', permiss: '41' },
                    component: () =>
                        Be(
                            () => import('./schart.841299c7.js'),
                            [
                                './schart.841299c7.js',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './schart.a733b590.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/echarts',
                    name: 'echarts',
                    meta: { title: 'echarts\u56FE\u8868', permiss: '42' },
                    component: () =>
                        Be(
                            () => import('./echarts.b30a2c64.js'),
                            [
                                './echarts.b30a2c64.js',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './china.7e7650c8.js',
                                './echarts.6b0cec5c.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/icon',
                    name: 'icon',
                    meta: { title: '\u56FE\u6807', permiss: '5' },
                    component: () =>
                        Be(
                            () => import('./icon.bcd79ab0.js'),
                            [
                                './icon.bcd79ab0.js',
                                './el-link.78abca44.js',
                                './el-link.0543119b.css',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './icon.3ac47f90.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/ucenter',
                    name: 'ucenter',
                    meta: { title: '\u4E2A\u4EBA\u4E2D\u5FC3' },
                    component: () =>
                        Be(
                            () => import('./ucenter.5867777b.js'),
                            [
                                './ucenter.5867777b.js',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './initCloneObject.a6314c21.js',
                                './el-form-item.86df69f9.css',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './el-statistic.35e63173.js',
                                './el-statistic.cc518016.css',
                                './el-link.78abca44.js',
                                './el-link.0543119b.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './el-table-column.c4be16ed.js',
                                './flatRest.f88cd71e.js',
                                './el-tag.a8af73f1.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './debounce.632c06d2.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './ucenter.3335a3e2.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/editor',
                    name: 'editor',
                    meta: { title: '\u5BCC\u6587\u672C\u7F16\u8F91\u5668', permiss: '291' },
                    component: () =>
                        Be(
                            () => import('./editor.39f9b095.js'),
                            ['./editor.39f9b095.js', './editor.501cf061.css'],
                            import.meta.url
                        ),
                },
                {
                    path: '/markdown',
                    name: 'markdown',
                    meta: { title: 'markdown\u7F16\u8F91\u5668', permiss: '292' },
                    component: () =>
                        Be(
                            () => import('./markdown.824addfc.js'),
                            ['./markdown.824addfc.js', './markdown.c3f58cfa.css'],
                            import.meta.url
                        ),
                },
                {
                    path: '/export',
                    name: 'export',
                    meta: { title: '\u5BFC\u51FAExcel', permiss: '34' },
                    component: () =>
                        Be(
                            () => import('./export.126fba99.js'),
                            [
                                './export.126fba99.js',
                                './el-table-column.c4be16ed.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './el-tag.a8af73f1.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './debounce.632c06d2.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './xlsx.db07aefa.js',
                                './export.c14fe784.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/import',
                    name: 'import',
                    meta: { title: '\u5BFC\u5165Excel', permiss: '33' },
                    component: () =>
                        Be(
                            () => import('./import.c2c57b23.js'),
                            [
                                './import.c2c57b23.js',
                                './el-table-column.c4be16ed.js',
                                './flatRest.f88cd71e.js',
                                './initCloneObject.a6314c21.js',
                                './el-tag.a8af73f1.js',
                                './isEqual.cb5dbe60.js',
                                './el-checkbox.18197270.js',
                                './el-checkbox.8297aa06.css',
                                './el-tag.856368e3.css',
                                './debounce.632c06d2.js',
                                './isPlainObject.9fc5cd37.js',
                                './raf.70a8995c.js',
                                './el-table-column.49ce98dd.css',
                                './el-link.78abca44.js',
                                './el-link.0543119b.css',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './baseClone.2314aca7.js',
                                './el-upload.5bb6fad5.css',
                                './xlsx.db07aefa.js',
                                './import.b97a27ea.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/theme',
                    name: 'theme',
                    meta: { title: '\u4E3B\u9898\u8BBE\u7F6E', permiss: '7' },
                    component: () =>
                        Be(
                            () => import('./theme.8a0ea38c.js'),
                            [
                                './theme.8a0ea38c.js',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-color-picker.aead50b4.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './position.f549de9f.js',
                                './debounce.632c06d2.js',
                                './el-color-picker.003d920a.css',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './theme.da2afa4a.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/calendar',
                    name: 'calendar',
                    meta: { title: '\u65E5\u5386', permiss: '24' },
                    component: () =>
                        Be(
                            () => import('./calendar.f8168545.js'),
                            ['./calendar.f8168545.js', './localeData.b0463d95.js', './calendar.35851313.css'],
                            import.meta.url
                        ),
                },
                {
                    path: '/watermark',
                    name: 'watermark',
                    meta: { title: '\u6C34\u5370', permiss: '25' },
                    component: () =>
                        Be(
                            () => import('./watermark.4102490c.js'),
                            [
                                './watermark.4102490c.js',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './initCloneObject.a6314c21.js',
                                './el-form-item.86df69f9.css',
                                './el-space.2e189c45.js',
                                './el-space.417b6673.css',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './el-slider.d26334e9.js',
                                './debounce.632c06d2.js',
                                './el-slider.876f881f.css',
                                './el-color-picker.aead50b4.js',
                                './position.f549de9f.js',
                                './el-color-picker.003d920a.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/carousel',
                    name: 'carousel',
                    meta: { title: '\u8D70\u9A6C\u706F', permiss: '23' },
                    component: () =>
                        Be(
                            () => import('./carousel.347d0e51.js'),
                            [
                                './carousel.347d0e51.js',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-image-viewer.70b779bf.js',
                                './debounce.632c06d2.js',
                                './index.37e9b6e1.js',
                                './position.f549de9f.js',
                                './scroll.519c37f7.js',
                                './el-image-viewer.04bd763b.css',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './carousel.9f73bb83.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/tour',
                    name: 'tour',
                    meta: { title: '\u5206\u6B65\u5F15\u5BFC', permiss: '26' },
                    component: () =>
                        Be(
                            () => import('./tour.5f9929a7.js'),
                            [
                                './tour.5f9929a7.js',
                                './el-space.2e189c45.js',
                                './el-space.417b6673.css',
                                './el-divider.6ab105fa.js',
                                './el-divider.07810808.css',
                                './index.d2d344cd.js',
                                './scroll.519c37f7.js',
                                './baseClone.2314aca7.js',
                                './initCloneObject.a6314c21.js',
                                './isPlainObject.9fc5cd37.js',
                                './flatRest.f88cd71e.js',
                                './tour.78803d3b.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/steps',
                    name: 'steps',
                    meta: { title: '\u6B65\u9AA4\u6761', permiss: '27' },
                    component: () =>
                        Be(
                            () => import('./steps.f944d0f4.js'),
                            [
                                './steps.f944d0f4.js',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './steps.eba6e5cb.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/form',
                    name: 'forms',
                    meta: { title: '\u8868\u5355', permiss: '21' },
                    component: () =>
                        Be(
                            () => import('./form.4635f864.js'),
                            [
                                './form.4635f864.js',
                                './el-form-item.29d7f1b9.js',
                                './baseClone.2314aca7.js',
                                './initCloneObject.a6314c21.js',
                                './el-form-item.86df69f9.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-input.46da08c2.js',
                                './index.37e9b6e1.js',
                                './el-input.562d4327.css',
                                './el-checkbox.18197270.js',
                                './isEqual.cb5dbe60.js',
                                './flatRest.f88cd71e.js',
                                './el-checkbox.8297aa06.css',
                                './el-radio.a37b6563.js',
                                './el-date-picker.087f596b.js',
                                './localeData.b0463d95.js',
                                './el-input-number.5066f3d6.js',
                                './el-input-number.b1792c4c.css',
                                './debounce.632c06d2.js',
                                './el-select.b46d501e.js',
                                './scroll.519c37f7.js',
                                './el-tag.a8af73f1.js',
                                './el-tag.856368e3.css',
                                './el-select.6088e138.css',
                                './el-date-picker.3e4d9e53.css',
                                './cloneDeep.256bb9de.js',
                                './el-radio.78ecfd3b.css',
                                './el-color-picker.aead50b4.js',
                                './position.f549de9f.js',
                                './el-color-picker.003d920a.css',
                                './el-slider.d26334e9.js',
                                './el-slider.876f881f.css',
                                './index.ad29a086.js',
                                './form.3178b78d.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/upload',
                    name: 'upload',
                    meta: { title: '\u4E0A\u4F20', permiss: '22' },
                    component: () =>
                        Be(
                            () => import('./upload.7d5c4cc5.js'),
                            [
                                './upload.7d5c4cc5.js',
                                './el-upload.b8718f13.js',
                                './el-progress.5478047e.js',
                                './el-progress.fc13a5bd.css',
                                './cloneDeep.256bb9de.js',
                                './baseClone.2314aca7.js',
                                './initCloneObject.a6314c21.js',
                                './isEqual.cb5dbe60.js',
                                './el-upload.5bb6fad5.css',
                                './upload.d622e89b.css',
                            ],
                            import.meta.url
                        ),
                },
                {
                    path: '/statistic',
                    name: 'statistic',
                    meta: { title: '\u7EDF\u8BA1', permiss: '28' },
                    component: () =>
                        Be(
                            () => import('./statistic.c03dca41.js'),
                            [
                                './statistic.c03dca41.js',
                                './el-card.af4c5345.js',
                                './el-card.48e750da.css',
                                './el-col.56ba0c63.js',
                                './el-col.ec80d69d.css',
                                './el-statistic.35e63173.js',
                                './el-statistic.cc518016.css',
                                './countup.vue_vue_type_script_setup_true_lang.eb94e4f4.js',
                                './raf.70a8995c.js',
                                './statistic.2c8204c5.css',
                            ],
                            import.meta.url
                        ),
                },
            ],
        },
        {
            path: '/login',
            meta: { title: '\u767B\u5F55', noAuth: !0 },
            component: () =>
                Be(
                    () => import('./login.0ad5be88.js'),
                    [
                        './login.0ad5be88.js',
                        './el-form-item.29d7f1b9.js',
                        './baseClone.2314aca7.js',
                        './initCloneObject.a6314c21.js',
                        './el-form-item.86df69f9.css',
                        './el-link.78abca44.js',
                        './el-link.0543119b.css',
                        './el-checkbox.18197270.js',
                        './isEqual.cb5dbe60.js',
                        './flatRest.f88cd71e.js',
                        './el-checkbox.8297aa06.css',
                        './el-input.46da08c2.js',
                        './index.37e9b6e1.js',
                        './el-input.562d4327.css',
                        './index.ad29a086.js',
                        './login.25ee2779.css',
                    ],
                    import.meta.url
                ),
        },
        {
            path: '/register',
            meta: { title: '\u6CE8\u518C', noAuth: !0 },
            component: () =>
                Be(
                    () => import('./register.0f1a694f.js'),
                    [
                        './register.0f1a694f.js',
                        './el-form-item.29d7f1b9.js',
                        './baseClone.2314aca7.js',
                        './initCloneObject.a6314c21.js',
                        './el-form-item.86df69f9.css',
                        './el-link.78abca44.js',
                        './el-link.0543119b.css',
                        './el-input.46da08c2.js',
                        './index.37e9b6e1.js',
                        './el-input.562d4327.css',
                        './index.ad29a086.js',
                        './register.28f083be.css',
                    ],
                    import.meta.url
                ),
        },
        {
            path: '/reset-pwd',
            meta: { title: '\u91CD\u7F6E\u5BC6\u7801', noAuth: !0 },
            component: () =>
                Be(
                    () => import('./reset-pwd.2a78ebc4.js'),
                    [
                        './reset-pwd.2a78ebc4.js',
                        './el-form-item.29d7f1b9.js',
                        './baseClone.2314aca7.js',
                        './initCloneObject.a6314c21.js',
                        './el-form-item.86df69f9.css',
                        './el-link.78abca44.js',
                        './el-link.0543119b.css',
                        './el-input.46da08c2.js',
                        './index.37e9b6e1.js',
                        './el-input.562d4327.css',
                        './index.ad29a086.js',
                        './reset-pwd.dfb0a620.css',
                    ],
                    import.meta.url
                ),
        },
        {
            path: '/403',
            meta: { title: '\u6CA1\u6709\u6743\u9650', noAuth: !0 },
            component: () =>
                Be(() => import('./403.202f67bb.js'), ['./403.202f67bb.js', './403.5d26a4de.css'], import.meta.url),
        },
        {
            path: '/404',
            meta: { title: '\u627E\u4E0D\u5230\u9875\u9762', noAuth: !0 },
            component: () =>
                Be(() => import('./404.dd357345.js'), ['./404.dd357345.js', './404.0c5b0740.css'], import.meta.url),
        },
        { path: '/:path(.*)', redirect: '/404' },
    ],
    z0 = nE({ history: BM(), routes: VE });
z0.beforeEach((e, t, r) => {
    G1.start();
    const n = localStorage.getItem('vuems_name'),
        o = q1();
    !n && e.meta.noAuth !== !0
        ? r('/login')
        : typeof e.meta.permiss == 'string' && !o.key.includes(e.meta.permiss)
        ? r('/403')
        : r();
});
z0.afterEach(() => {
    G1.done();
});
const so = M6(ZC);
so.use(z6());
so.use(z0);
for (const [e, t] of Object.entries(_m)) so.component(e, t);
const OE = q1();
so.directive('permiss', {
    mounted(e, t) {
        t.value && !OE.key.includes(String(t.value)) && (e.hidden = !0);
    },
});
so.mount('#app');
export {
    y0 as $,
    U1 as A,
    de as B,
    Z2 as C,
    su as D,
    ct as E,
    Oe as F,
    lu as G,
    i8 as H,
    ia as I,
    pe as J,
    xe as K,
    r0 as L,
    le as M,
    vt as N,
    Ee as O,
    st as P,
    D as Q,
    Ge as R,
    ce as S,
    Jo as T,
    Oc as U,
    Ne as V,
    gi as W,
    ot as X,
    ht as Y,
    Lt as Z,
    Te as _,
    w as a,
    iS as a$,
    C8 as a0,
    fS as a1,
    Gn as a2,
    kt as a3,
    cn as a4,
    Gu as a5,
    Qu as a6,
    Ai as a7,
    In as a8,
    zu as a9,
    cp as aA,
    $E as aB,
    au as aC,
    U2 as aD,
    rS as aE,
    aS as aF,
    _S as aG,
    sS as aH,
    i2 as aI,
    mt as aJ,
    NE as aK,
    be as aL,
    v2 as aM,
    Wn as aN,
    ga as aO,
    x1 as aP,
    C1 as aQ,
    b1 as aR,
    Mp as aS,
    E5 as aT,
    G9 as aU,
    Qp as aV,
    N5 as aW,
    oi as aX,
    Ft as aY,
    ua as aZ,
    vy as a_,
    s1 as aa,
    oS as ab,
    Mu as ac,
    Eu as ad,
    bu as ae,
    Wu as af,
    va as ag,
    ha as ah,
    To as ai,
    H7 as aj,
    p2 as ak,
    Xe as al,
    $7 as am,
    sb as an,
    gt as ao,
    p4 as ap,
    aa as aq,
    Nr as ar,
    O4 as as,
    Ze as at,
    DE as au,
    we as av,
    k7 as aw,
    Su as ax,
    ip as ay,
    Y_ as az,
    Le as b,
    ho as b$,
    se as b0,
    T7 as b1,
    d0 as b2,
    jo as b3,
    Mr as b4,
    eo as b5,
    KE as b6,
    tS as b7,
    IE as b8,
    Xu as b9,
    lS as bA,
    Cd as bB,
    $o as bC,
    Kg as bD,
    wu as bE,
    yu as bF,
    z7 as bG,
    ca as bH,
    pg as bI,
    Ce as bJ,
    XE as bK,
    Q1 as bL,
    qo as bM,
    a0 as bN,
    Jc as bO,
    kE as bP,
    GE as bQ,
    F_ as bR,
    uu as bS,
    Rg as bT,
    mu as bU,
    Fg as bV,
    yg as bW,
    dg as bX,
    je as bY,
    Ei as bZ,
    to as b_,
    qp as ba,
    pm as bb,
    Fl as bc,
    eS as bd,
    JE as be,
    nt as bf,
    vx as bg,
    fy as bh,
    PE as bi,
    xy as bj,
    dS as bk,
    A8 as bl,
    O3 as bm,
    Pm as bn,
    nS as bo,
    ky as bp,
    e3 as bq,
    K2 as br,
    P7 as bs,
    g0 as bt,
    hx as bu,
    uS as bv,
    cS as bw,
    vS as bx,
    Y2 as by,
    kl as bz,
    P as c,
    D1 as c$,
    Ia as c0,
    lt as c1,
    gu as c2,
    B7 as c3,
    QE as c4,
    RE as c5,
    _2 as c6,
    ZE as c7,
    L0 as c8,
    Bc as c9,
    Kl as cA,
    dm as cB,
    b5 as cC,
    C5 as cD,
    Rs as cE,
    UE as cF,
    j5 as cG,
    T8 as cH,
    GC as cI,
    WC as cJ,
    Kb as cK,
    sE as cL,
    Nt as cM,
    JC as cN,
    A0 as cO,
    hS as cP,
    sc as cQ,
    $i as cR,
    R7 as cS,
    pS as cT,
    iy as cU,
    g8 as cV,
    W2 as cW,
    G2 as cX,
    Th as cY,
    Bh as cZ,
    YE as c_,
    Ul as ca,
    jr as cb,
    un as cc,
    X2 as cd,
    Q2 as ce,
    Dg as cf,
    e0 as cg,
    vu as ch,
    Xm as ci,
    bn as cj,
    f7 as ck,
    Eg as cl,
    ks as cm,
    wx as cn,
    q3 as co,
    CE as cp,
    FE as cq,
    vr as cr,
    gm as cs,
    s4 as ct,
    qE as cu,
    jE as cv,
    WE as cw,
    Yo as cx,
    Wf as cy,
    P5 as cz,
    h as d,
    q1 as d0,
    K1 as d1,
    aE as d2,
    f as e,
    A as f,
    Mt as g,
    qe as h,
    Wt as i,
    me as j,
    Yt as k,
    Et as l,
    jt as m,
    ke as n,
    v as o,
    $e as p,
    qr as q,
    ye as r,
    Fe as s,
    fr as t,
    ze as u,
    G as v,
    re as w,
    Eo as x,
    jc as y,
    qc as z,
};
