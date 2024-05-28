import {
    b as at,
    B as H,
    d as Y,
    c,
    T as Q,
    Q as lt,
    R as rt,
    S as st,
    X as ut,
    bQ as it,
    o as Z,
    a as q,
    r as ct,
    g as ft,
    _ as dt,
    m as mt,
    Z as pt,
    v as a,
    w as i,
    e as gt,
} from './index.4bf84d35.js';
import { E as vt, a as _t } from './el-col.56ba0c63.js';
import { E as xt, a as ht } from './el-form-item.29d7f1b9.js';
import { E as bt } from './el-space.2e189c45.js';
import { E as yt } from './el-input.46da08c2.js';
import { E as St } from './el-input-number.5066f3d6.js';
import { E as Vt } from './el-slider.d26334e9.js';
import { E as wt } from './el-color-picker.aead50b4.js';
import './baseClone.2314aca7.js';
import './initCloneObject.a6314c21.js';
import './index.37e9b6e1.js';
import './debounce.632c06d2.js';
import './position.f549de9f.js';
const Et = at({
    zIndex: { type: Number, default: 9 },
    rotate: { type: Number, default: -22 },
    width: Number,
    height: Number,
    image: String,
    content: { type: H([String, Array]), default: 'Element Plus' },
    font: { type: H(Object) },
    gap: { type: H(Array), default: () => [100, 100] },
    offset: { type: H(Array) },
});
function zt(s) {
    return s.replace(/([A-Z])/g, '-$1').toLowerCase();
}
function kt(s) {
    return Object.keys(s)
        .map((t) => `${zt(t)}: ${s[t]};`)
        .join(' ');
}
function Mt() {
    return window.devicePixelRatio || 1;
}
const $t = (s, t) => {
        let p = !1;
        return (
            s.removedNodes.length && t && (p = Array.from(s.removedNodes).includes(t)),
            s.type === 'attributes' && s.target === t && (p = !0),
            p
        );
    },
    J = 3;
function X(s, t, p = 1) {
    const n = document.createElement('canvas'),
        x = n.getContext('2d'),
        g = s * p,
        z = t * p;
    return n.setAttribute('width', `${g}px`), n.setAttribute('height', `${z}px`), x.save(), [x, n, g, z];
}
function Ct() {
    function s(t, p, n, x, g, z, f, U) {
        const [d, S, v, V] = X(x, g, n);
        if (t instanceof HTMLImageElement) d.drawImage(t, 0, 0, v, V);
        else {
            const {
                    color: y,
                    fontSize: B,
                    fontStyle: P,
                    fontWeight: T,
                    fontFamily: tt,
                    textAlign: et,
                    textBaseline: ot,
                } = z,
                G = Number(B) * n;
            (d.font = `${P} normal ${T} ${G}px/${g}px ${tt}`),
                (d.fillStyle = y),
                (d.textAlign = et),
                (d.textBaseline = ot);
            const j = Array.isArray(t) ? t : [t];
            j == null ||
                j.forEach((D, nt) => {
                    d.fillText(D != null ? D : '', v / 2, nt * (G + J * n));
                });
        }
        const h = (Math.PI / 180) * Number(p),
            l = Math.max(x, g),
            [F, O, w] = X(l, l, n);
        F.translate(w / 2, w / 2), F.rotate(h), v > 0 && V > 0 && F.drawImage(S, -v / 2, -V / 2);
        function _(y, B) {
            const P = y * Math.cos(h) - B * Math.sin(h),
                T = y * Math.sin(h) + B * Math.cos(h);
            return [P, T];
        }
        let k = 0,
            W = 0,
            R = 0,
            L = 0;
        const N = v / 2,
            M = V / 2;
        [
            [0 - N, 0 - M],
            [0 + N, 0 - M],
            [0 + N, 0 + M],
            [0 - N, 0 + M],
        ].forEach(([y, B]) => {
            const [P, T] = _(y, B);
            (k = Math.min(k, P)), (W = Math.max(W, P)), (R = Math.min(R, T)), (L = Math.max(L, T));
        });
        const e = k + w / 2,
            o = R + w / 2,
            r = W - k,
            b = L - R,
            E = f * n,
            $ = U * n,
            I = (r + E) * 2,
            C = b + $,
            [A, u] = X(I, C);
        function m(y = 0, B = 0) {
            A.drawImage(O, e, o, r, b, y, B, r, b);
        }
        return m(), m(r + E, -b / 2 - $ / 2), m(r + E, +b / 2 + $ / 2), [u.toDataURL(), I / n, C / n];
    }
    return s;
}
const At = Y({ name: 'ElWatermark' }),
    Bt = Y({
        ...At,
        props: Et,
        setup(s) {
            const t = s,
                p = { position: 'relative' },
                n = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.color) != null ? o : 'rgba(0,0,0,.15)';
                }),
                x = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.fontSize) != null ? o : 16;
                }),
                g = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.fontWeight) != null ? o : 'normal';
                }),
                z = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.fontStyle) != null ? o : 'normal';
                }),
                f = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.fontFamily) != null ? o : 'sans-serif';
                }),
                U = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.textAlign) != null ? o : 'center';
                }),
                d = c(() => {
                    var e, o;
                    return (o = (e = t.font) == null ? void 0 : e.textBaseline) != null ? o : 'top';
                }),
                S = c(() => t.gap[0]),
                v = c(() => t.gap[1]),
                V = c(() => S.value / 2),
                h = c(() => v.value / 2),
                l = c(() => {
                    var e, o;
                    return (o = (e = t.offset) == null ? void 0 : e[0]) != null ? o : V.value;
                }),
                F = c(() => {
                    var e, o;
                    return (o = (e = t.offset) == null ? void 0 : e[1]) != null ? o : h.value;
                }),
                O = () => {
                    const e = {
                        zIndex: t.zIndex,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        backgroundRepeat: 'repeat',
                    };
                    let o = l.value - V.value,
                        r = F.value - h.value;
                    return (
                        o > 0 && ((e.left = `${o}px`), (e.width = `calc(100% - ${o}px)`), (o = 0)),
                        r > 0 && ((e.top = `${r}px`), (e.height = `calc(100% - ${r}px)`), (r = 0)),
                        (e.backgroundPosition = `${o}px ${r}px`),
                        e
                    );
                },
                w = Q(null),
                _ = Q(),
                k = lt(!1),
                W = () => {
                    _.value && (_.value.remove(), (_.value = void 0));
                },
                R = (e, o) => {
                    var r;
                    w.value &&
                        _.value &&
                        ((k.value = !0),
                        _.value.setAttribute(
                            'style',
                            kt({ ...O(), backgroundImage: `url('${e}')`, backgroundSize: `${Math.floor(o)}px` })
                        ),
                        (r = w.value) == null || r.append(_.value),
                        setTimeout(() => {
                            k.value = !1;
                        }));
                },
                L = (e) => {
                    let o = 120,
                        r = 64;
                    const b = t.image,
                        E = t.content,
                        $ = t.width,
                        I = t.height;
                    if (!b && e.measureText) {
                        e.font = `${Number(x.value)}px ${f.value}`;
                        const C = Array.isArray(E) ? E : [E],
                            A = C.map((u) => {
                                const m = e.measureText(u);
                                return [
                                    m.width,
                                    m.fontBoundingBoxAscent !== void 0
                                        ? m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
                                        : m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
                                ];
                            });
                        (o = Math.ceil(Math.max(...A.map((u) => u[0])))),
                            (r = Math.ceil(Math.max(...A.map((u) => u[1]))) * C.length + (C.length - 1) * J);
                    }
                    return [$ != null ? $ : o, I != null ? I : r];
                },
                N = Ct(),
                M = () => {
                    const o = document.createElement('canvas').getContext('2d'),
                        r = t.image,
                        b = t.content,
                        E = t.rotate;
                    if (o) {
                        _.value || (_.value = document.createElement('div'));
                        const $ = Mt(),
                            [I, C] = L(o),
                            A = (u) => {
                                const [m, y] = N(
                                    u || '',
                                    E,
                                    $,
                                    I,
                                    C,
                                    {
                                        color: n.value,
                                        fontSize: x.value,
                                        fontStyle: z.value,
                                        fontWeight: g.value,
                                        fontFamily: f.value,
                                        textAlign: U.value,
                                        textBaseline: d.value,
                                    },
                                    S.value,
                                    v.value
                                );
                                R(m, y);
                            };
                        if (r) {
                            const u = new Image();
                            (u.onload = () => {
                                A(u);
                            }),
                                (u.onerror = () => {
                                    A(b);
                                }),
                                (u.crossOrigin = 'anonymous'),
                                (u.referrerPolicy = 'no-referrer'),
                                (u.src = r);
                        } else A(b);
                    }
                };
            return (
                rt(() => {
                    M();
                }),
                st(
                    () => t,
                    () => {
                        M();
                    },
                    { deep: !0, flush: 'post' }
                ),
                ut(() => {
                    W();
                }),
                it(
                    w,
                    (e) => {
                        k.value ||
                            e.forEach((o) => {
                                $t(o, _.value) && (W(), M());
                            });
                    },
                    { attributes: !0, subtree: !0, childList: !0 }
                ),
                (e, o) => (
                    Z(), q('div', { ref_key: 'containerRef', ref: w, style: ft([p]) }, [ct(e.$slots, 'default')], 4)
                )
            );
        },
    });
var It = dt(Bt, [['__file', 'watermark.vue']]);
const Wt = mt(It),
    Rt = { class: 'container' },
    Nt = gt('div', { style: { height: '600px' } }, null, -1),
    Zt = Y({
        __name: 'watermark',
        setup(s) {
            const t = pt({
                content: 'vue-manage-system',
                font: { fontSize: 16, color: 'rgba(0, 0, 0, 0.15)' },
                zIndex: -1,
                rotate: -22,
                gap: [100, 100],
                offset: [],
            });
            return (p, n) => {
                const x = Wt,
                    g = vt,
                    z = yt,
                    f = xt,
                    U = wt,
                    d = Vt,
                    S = St,
                    v = bt,
                    V = ht,
                    h = _t;
                return (
                    Z(),
                    q('div', Rt, [
                        a(
                            h,
                            { gutter: 20 },
                            {
                                default: i(() => [
                                    a(
                                        g,
                                        { span: 18 },
                                        {
                                            default: i(() => [
                                                a(
                                                    x,
                                                    {
                                                        content: t.content,
                                                        font: t.font,
                                                        'z-index': t.zIndex,
                                                        rotate: t.rotate,
                                                        gap: t.gap,
                                                        offset: t.offset,
                                                    },
                                                    { default: i(() => [Nt]), _: 1 },
                                                    8,
                                                    ['content', 'font', 'z-index', 'rotate', 'gap', 'offset']
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                    a(
                                        g,
                                        { span: 6 },
                                        {
                                            default: i(() => [
                                                a(
                                                    V,
                                                    {
                                                        class: 'form',
                                                        model: t,
                                                        'label-position': 'top',
                                                        'label-width': '50px',
                                                    },
                                                    {
                                                        default: i(() => [
                                                            a(
                                                                f,
                                                                { label: 'Content' },
                                                                {
                                                                    default: i(() => [
                                                                        a(
                                                                            z,
                                                                            {
                                                                                modelValue: t.content,
                                                                                'onUpdate:modelValue':
                                                                                    n[0] ||
                                                                                    (n[0] = (l) => (t.content = l)),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['modelValue']
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'Color' },
                                                                {
                                                                    default: i(() => [
                                                                        a(
                                                                            U,
                                                                            {
                                                                                modelValue: t.font.color,
                                                                                'onUpdate:modelValue':
                                                                                    n[1] ||
                                                                                    (n[1] = (l) => (t.font.color = l)),
                                                                                'show-alpha': '',
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['modelValue']
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'FontSize' },
                                                                {
                                                                    default: i(() => [
                                                                        a(
                                                                            d,
                                                                            {
                                                                                modelValue: t.font.fontSize,
                                                                                'onUpdate:modelValue':
                                                                                    n[2] ||
                                                                                    (n[2] = (l) =>
                                                                                        (t.font.fontSize = l)),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['modelValue']
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'zIndex' },
                                                                {
                                                                    default: i(() => [
                                                                        a(
                                                                            d,
                                                                            {
                                                                                modelValue: t.zIndex,
                                                                                'onUpdate:modelValue':
                                                                                    n[3] ||
                                                                                    (n[3] = (l) => (t.zIndex = l)),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['modelValue']
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'Rotate' },
                                                                {
                                                                    default: i(() => [
                                                                        a(
                                                                            d,
                                                                            {
                                                                                modelValue: t.rotate,
                                                                                'onUpdate:modelValue':
                                                                                    n[4] ||
                                                                                    (n[4] = (l) => (t.rotate = l)),
                                                                                min: -180,
                                                                                max: 180,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ['modelValue']
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'Gap' },
                                                                {
                                                                    default: i(() => [
                                                                        a(v, null, {
                                                                            default: i(() => [
                                                                                a(
                                                                                    S,
                                                                                    {
                                                                                        modelValue: t.gap[0],
                                                                                        'onUpdate:modelValue':
                                                                                            n[5] ||
                                                                                            (n[5] = (l) =>
                                                                                                (t.gap[0] = l)),
                                                                                        'controls-position': 'right',
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ['modelValue']
                                                                                ),
                                                                                a(
                                                                                    S,
                                                                                    {
                                                                                        modelValue: t.gap[1],
                                                                                        'onUpdate:modelValue':
                                                                                            n[6] ||
                                                                                            (n[6] = (l) =>
                                                                                                (t.gap[1] = l)),
                                                                                        'controls-position': 'right',
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ['modelValue']
                                                                                ),
                                                                            ]),
                                                                            _: 1,
                                                                        }),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                            a(
                                                                f,
                                                                { label: 'Offset' },
                                                                {
                                                                    default: i(() => [
                                                                        a(v, null, {
                                                                            default: i(() => [
                                                                                a(
                                                                                    S,
                                                                                    {
                                                                                        modelValue: t.offset[0],
                                                                                        'onUpdate:modelValue':
                                                                                            n[7] ||
                                                                                            (n[7] = (l) =>
                                                                                                (t.offset[0] = l)),
                                                                                        placeholder: 'offsetLeft',
                                                                                        'controls-position': 'right',
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ['modelValue']
                                                                                ),
                                                                                a(
                                                                                    S,
                                                                                    {
                                                                                        modelValue: t.offset[1],
                                                                                        'onUpdate:modelValue':
                                                                                            n[8] ||
                                                                                            (n[8] = (l) =>
                                                                                                (t.offset[1] = l)),
                                                                                        placeholder: 'offsetTop',
                                                                                        'controls-position': 'right',
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ['modelValue']
                                                                                ),
                                                                            ]),
                                                                            _: 1,
                                                                        }),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    },
                                                    8,
                                                    ['model']
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            }
                        ),
                    ])
                );
            };
        },
    });
export { Zt as default };
