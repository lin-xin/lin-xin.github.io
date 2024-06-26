import {
    c2 as Z,
    bE as ke,
    bT as he,
    bH as ge,
    bG as pe,
    c3 as xe,
    a5 as j,
    ad as D,
    K as Y,
    N as J,
    ae as U,
    M as N,
    c as h,
    aM as O,
    b9 as Ce,
    bj as K,
    S as _,
    aE as ee,
    Y as le,
    V as ae,
    Q as T,
    b0 as $,
    c4 as M,
    O as ye,
    bJ as Q,
    a6 as W,
    bx as ne,
    am as P,
    d as L,
    a7 as te,
    u as R,
    o as y,
    j as oe,
    w as se,
    e as X,
    n as C,
    f as t,
    a3 as F,
    a as V,
    bY as G,
    aI as w,
    c5 as z,
    r as q,
    F as Ve,
    P as ue,
    t as ie,
    l as A,
    k as re,
    _ as H,
    g as Se,
    b as Le,
    B as Be,
    p as Ee,
    U as Ie,
    m as $e,
    q as de,
} from './index.4bf84d35.js';
import { i as Ne } from './isEqual.cb5dbe60.js';
import { l as Fe, h as Ge } from './initCloneObject.a6314c21.js';
import { a as we } from './flatRest.f88cd71e.js';
function ze(e, s) {
    return e != null && s in Object(e);
}
function De(e, s, b) {
    s = Z(s, e);
    for (var l = -1, v = s.length, r = !1; ++l < v; ) {
        var c = ke(s[l]);
        if (!(r = e != null && b(e, c))) break;
        e = e[c];
    }
    return r || ++l != v ? r : ((v = e == null ? 0 : e.length), !!v && Fe(v) && he(c, v) && (ge(e) || Ge(e)));
}
function Pe(e, s) {
    return e != null && De(e, s, ze);
}
function Ue(e, s, b) {
    for (var l = -1, v = s.length, r = {}; ++l < v; ) {
        var c = s[l],
            o = pe(e, c);
        b(o, c) && xe(r, Z(c, e), o);
    }
    return r;
}
function Oe(e, s) {
    return Ue(e, s, function (b, l) {
        return Pe(e, l);
    });
}
var Te = we(function (e, s) {
    return e == null ? {} : Oe(e, s);
});
const Me = Te,
    be = {
        modelValue: { type: [Number, String, Boolean], default: void 0 },
        label: { type: [String, Boolean, Number, Object], default: void 0 },
        value: { type: [String, Boolean, Number, Object], default: void 0 },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: { type: String, default: void 0 },
        trueValue: { type: [String, Number], default: void 0 },
        falseValue: { type: [String, Number], default: void 0 },
        trueLabel: { type: [String, Number], default: void 0 },
        falseLabel: { type: [String, Number], default: void 0 },
        id: { type: String, default: void 0 },
        controls: { type: String, default: void 0 },
        border: Boolean,
        size: j,
        tabindex: [String, Number],
        validateEvent: { type: Boolean, default: !0 },
    },
    ve = { [D]: (e) => Y(e) || J(e) || U(e), change: (e) => Y(e) || J(e) || U(e) },
    B = Symbol('checkboxGroupContextKey'),
    Ae = ({ model: e, isChecked: s }) => {
        const b = N(B, void 0),
            l = h(() => {
                var r, c;
                const o = (r = b == null ? void 0 : b.max) == null ? void 0 : r.value,
                    f = (c = b == null ? void 0 : b.min) == null ? void 0 : c.value;
                return (!O(o) && e.value.length >= o && !s.value) || (!O(f) && e.value.length <= f && s.value);
            });
        return { isDisabled: Ce(h(() => (b == null ? void 0 : b.disabled.value) || l.value)), isLimitDisabled: l };
    },
    Ke = (e, { model: s, isLimitExceeded: b, hasOwnLabel: l, isDisabled: v, isLabeledByFormItem: r }) => {
        const c = N(B, void 0),
            { formItem: o } = K(),
            { emit: f } = ae();
        function m(a) {
            var i, g, d, n;
            return [!0, e.trueValue, e.trueLabel].includes(a)
                ? (g = (i = e.trueValue) != null ? i : e.trueLabel) != null
                    ? g
                    : !0
                : (n = (d = e.falseValue) != null ? d : e.falseLabel) != null
                ? n
                : !1;
        }
        function u(a, i) {
            f('change', m(a), i);
        }
        function k(a) {
            if (b.value) return;
            const i = a.target;
            f('change', m(i.checked), a);
        }
        async function p(a) {
            b.value ||
                (!l.value &&
                    !v.value &&
                    r.value &&
                    (a.composedPath().some((d) => d.tagName === 'LABEL') ||
                        ((s.value = m([!1, e.falseValue, e.falseLabel].includes(s.value))),
                        await le(),
                        u(s.value, a))));
        }
        const S = h(() => (c == null ? void 0 : c.validateEvent) || e.validateEvent);
        return (
            _(
                () => e.modelValue,
                () => {
                    S.value && (o == null || o.validate('change').catch((a) => ee()));
                }
            ),
            { handleChange: k, onClickRoot: p }
        );
    },
    Re = (e) => {
        const s = T(!1),
            { emit: b } = ae(),
            l = N(B, void 0),
            v = h(() => O(l) === !1),
            r = T(!1),
            c = h({
                get() {
                    var o, f;
                    return v.value
                        ? (o = l == null ? void 0 : l.modelValue) == null
                            ? void 0
                            : o.value
                        : (f = e.modelValue) != null
                        ? f
                        : s.value;
                },
                set(o) {
                    var f, m;
                    v.value && $(o)
                        ? ((r.value =
                              ((f = l == null ? void 0 : l.max) == null ? void 0 : f.value) !== void 0 &&
                              o.length > (l == null ? void 0 : l.max.value) &&
                              o.length > c.value.length),
                          r.value === !1 && ((m = l == null ? void 0 : l.changeEvent) == null || m.call(l, o)))
                        : (b(D, o), (s.value = o));
                },
            });
        return { model: c, isGroup: v, isLimitExceeded: r };
    },
    qe = (e, s, { model: b }) => {
        const l = N(B, void 0),
            v = T(!1),
            r = h(() => (M(e.value) ? e.label : e.value)),
            c = h(() => {
                const u = b.value;
                return U(u)
                    ? u
                    : $(u)
                    ? ye(r.value)
                        ? u.map(Q).some((k) => Ne(k, r.value))
                        : u.map(Q).includes(r.value)
                    : u != null
                    ? u === e.trueValue || u === e.trueLabel
                    : !!u;
            }),
            o = W(
                h(() => {
                    var u;
                    return (u = l == null ? void 0 : l.size) == null ? void 0 : u.value;
                }),
                { prop: !0 }
            ),
            f = W(
                h(() => {
                    var u;
                    return (u = l == null ? void 0 : l.size) == null ? void 0 : u.value;
                })
            ),
            m = h(() => !!s.default || !M(r.value));
        return { checkboxButtonSize: o, isChecked: c, isFocused: v, checkboxSize: f, hasOwnLabel: m, actualValue: r };
    },
    ce = (e, s) => {
        const { formItem: b } = K(),
            { model: l, isGroup: v, isLimitExceeded: r } = Re(e),
            {
                isFocused: c,
                isChecked: o,
                checkboxButtonSize: f,
                checkboxSize: m,
                hasOwnLabel: u,
                actualValue: k,
            } = qe(e, s, { model: l }),
            { isDisabled: p } = Ae({ model: l, isChecked: o }),
            { inputId: S, isLabeledByFormItem: a } = ne(e, {
                formItemContext: b,
                disableIdGeneration: u,
                disableIdManagement: v,
            }),
            { handleChange: i, onClickRoot: g } = Ke(e, {
                model: l,
                isLimitExceeded: r,
                hasOwnLabel: u,
                isDisabled: p,
                isLabeledByFormItem: a,
            });
        return (
            (() => {
                function n() {
                    var E, I;
                    $(l.value) && !l.value.includes(k.value)
                        ? l.value.push(k.value)
                        : (l.value = (I = (E = e.trueValue) != null ? E : e.trueLabel) != null ? I : !0);
                }
                e.checked && n();
            })(),
            P(
                {
                    from: 'label act as value',
                    replacement: 'value',
                    version: '3.0.0',
                    scope: 'el-checkbox',
                    ref: 'https://element-plus.org/en-US/component/checkbox.html',
                },
                h(() => v.value && M(e.value))
            ),
            P(
                {
                    from: 'true-label',
                    replacement: 'true-value',
                    version: '3.0.0',
                    scope: 'el-checkbox',
                    ref: 'https://element-plus.org/en-US/component/checkbox.html',
                },
                h(() => !!e.trueLabel)
            ),
            P(
                {
                    from: 'false-label',
                    replacement: 'false-value',
                    version: '3.0.0',
                    scope: 'el-checkbox',
                    ref: 'https://element-plus.org/en-US/component/checkbox.html',
                },
                h(() => !!e.falseLabel)
            ),
            {
                inputId: S,
                isLabeledByFormItem: a,
                isChecked: o,
                isDisabled: p,
                isFocused: c,
                checkboxButtonSize: f,
                checkboxSize: m,
                hasOwnLabel: u,
                model: l,
                actualValue: k,
                handleChange: i,
                onClickRoot: g,
            }
        );
    },
    He = ['id', 'indeterminate', 'name', 'tabindex', 'disabled', 'true-value', 'false-value'],
    Ye = ['id', 'indeterminate', 'disabled', 'value', 'name', 'tabindex'],
    Je = L({ name: 'ElCheckbox' }),
    Qe = L({
        ...Je,
        props: be,
        emits: ve,
        setup(e) {
            const s = e,
                b = te(),
                {
                    inputId: l,
                    isLabeledByFormItem: v,
                    isChecked: r,
                    isDisabled: c,
                    isFocused: o,
                    checkboxSize: f,
                    hasOwnLabel: m,
                    model: u,
                    actualValue: k,
                    handleChange: p,
                    onClickRoot: S,
                } = ce(s, b),
                a = R('checkbox'),
                i = h(() => [
                    a.b(),
                    a.m(f.value),
                    a.is('disabled', c.value),
                    a.is('bordered', s.border),
                    a.is('checked', r.value),
                ]),
                g = h(() => [
                    a.e('input'),
                    a.is('disabled', c.value),
                    a.is('checked', r.value),
                    a.is('indeterminate', s.indeterminate),
                    a.is('focus', o.value),
                ]);
            return (d, n) => (
                y(),
                oe(
                    re(!t(m) && t(v) ? 'span' : 'label'),
                    { class: C(t(i)), 'aria-controls': d.indeterminate ? d.controls : null, onClick: t(S) },
                    {
                        default: se(() => {
                            var E, I;
                            return [
                                X(
                                    'span',
                                    { class: C(t(g)) },
                                    [
                                        d.trueValue || d.falseValue || d.trueLabel || d.falseLabel
                                            ? F(
                                                  (y(),
                                                  V(
                                                      'input',
                                                      {
                                                          key: 0,
                                                          id: t(l),
                                                          'onUpdate:modelValue':
                                                              n[0] || (n[0] = (x) => (G(u) ? (u.value = x) : null)),
                                                          class: C(t(a).e('original')),
                                                          type: 'checkbox',
                                                          indeterminate: d.indeterminate,
                                                          name: d.name,
                                                          tabindex: d.tabindex,
                                                          disabled: t(c),
                                                          'true-value': (E = d.trueValue) != null ? E : d.trueLabel,
                                                          'false-value': (I = d.falseValue) != null ? I : d.falseLabel,
                                                          onChange: n[1] || (n[1] = (...x) => t(p) && t(p)(...x)),
                                                          onFocus: n[2] || (n[2] = (x) => (o.value = !0)),
                                                          onBlur: n[3] || (n[3] = (x) => (o.value = !1)),
                                                          onClick: n[4] || (n[4] = w(() => {}, ['stop'])),
                                                      },
                                                      null,
                                                      42,
                                                      He
                                                  )),
                                                  [[z, t(u)]]
                                              )
                                            : F(
                                                  (y(),
                                                  V(
                                                      'input',
                                                      {
                                                          key: 1,
                                                          id: t(l),
                                                          'onUpdate:modelValue':
                                                              n[5] || (n[5] = (x) => (G(u) ? (u.value = x) : null)),
                                                          class: C(t(a).e('original')),
                                                          type: 'checkbox',
                                                          indeterminate: d.indeterminate,
                                                          disabled: t(c),
                                                          value: t(k),
                                                          name: d.name,
                                                          tabindex: d.tabindex,
                                                          onChange: n[6] || (n[6] = (...x) => t(p) && t(p)(...x)),
                                                          onFocus: n[7] || (n[7] = (x) => (o.value = !0)),
                                                          onBlur: n[8] || (n[8] = (x) => (o.value = !1)),
                                                          onClick: n[9] || (n[9] = w(() => {}, ['stop'])),
                                                      },
                                                      null,
                                                      42,
                                                      Ye
                                                  )),
                                                  [[z, t(u)]]
                                              ),
                                        X('span', { class: C(t(a).e('inner')) }, null, 2),
                                    ],
                                    2
                                ),
                                t(m)
                                    ? (y(),
                                      V(
                                          'span',
                                          { key: 0, class: C(t(a).e('label')) },
                                          [
                                              q(d.$slots, 'default'),
                                              d.$slots.default
                                                  ? A('v-if', !0)
                                                  : (y(), V(Ve, { key: 0 }, [ue(ie(d.label), 1)], 64)),
                                          ],
                                          2
                                      ))
                                    : A('v-if', !0),
                            ];
                        }),
                        _: 3,
                    },
                    8,
                    ['class', 'aria-controls', 'onClick']
                )
            );
        },
    });
var We = H(Qe, [['__file', 'checkbox.vue']]);
const Xe = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
    Ze = ['name', 'tabindex', 'disabled', 'value'],
    je = L({ name: 'ElCheckboxButton' }),
    _e = L({
        ...je,
        props: be,
        emits: ve,
        setup(e) {
            const s = e,
                b = te(),
                {
                    isFocused: l,
                    isChecked: v,
                    isDisabled: r,
                    checkboxButtonSize: c,
                    model: o,
                    actualValue: f,
                    handleChange: m,
                } = ce(s, b),
                u = N(B, void 0),
                k = R('checkbox'),
                p = h(() => {
                    var a, i, g, d;
                    const n = (i = (a = u == null ? void 0 : u.fill) == null ? void 0 : a.value) != null ? i : '';
                    return {
                        backgroundColor: n,
                        borderColor: n,
                        color: (d = (g = u == null ? void 0 : u.textColor) == null ? void 0 : g.value) != null ? d : '',
                        boxShadow: n ? `-1px 0 0 0 ${n}` : void 0,
                    };
                }),
                S = h(() => [
                    k.b('button'),
                    k.bm('button', c.value),
                    k.is('disabled', r.value),
                    k.is('checked', v.value),
                    k.is('focus', l.value),
                ]);
            return (a, i) => {
                var g, d;
                return (
                    y(),
                    V(
                        'label',
                        { class: C(t(S)) },
                        [
                            a.trueValue || a.falseValue || a.trueLabel || a.falseLabel
                                ? F(
                                      (y(),
                                      V(
                                          'input',
                                          {
                                              key: 0,
                                              'onUpdate:modelValue':
                                                  i[0] || (i[0] = (n) => (G(o) ? (o.value = n) : null)),
                                              class: C(t(k).be('button', 'original')),
                                              type: 'checkbox',
                                              name: a.name,
                                              tabindex: a.tabindex,
                                              disabled: t(r),
                                              'true-value': (g = a.trueValue) != null ? g : a.trueLabel,
                                              'false-value': (d = a.falseValue) != null ? d : a.falseLabel,
                                              onChange: i[1] || (i[1] = (...n) => t(m) && t(m)(...n)),
                                              onFocus: i[2] || (i[2] = (n) => (l.value = !0)),
                                              onBlur: i[3] || (i[3] = (n) => (l.value = !1)),
                                              onClick: i[4] || (i[4] = w(() => {}, ['stop'])),
                                          },
                                          null,
                                          42,
                                          Xe
                                      )),
                                      [[z, t(o)]]
                                  )
                                : F(
                                      (y(),
                                      V(
                                          'input',
                                          {
                                              key: 1,
                                              'onUpdate:modelValue':
                                                  i[5] || (i[5] = (n) => (G(o) ? (o.value = n) : null)),
                                              class: C(t(k).be('button', 'original')),
                                              type: 'checkbox',
                                              name: a.name,
                                              tabindex: a.tabindex,
                                              disabled: t(r),
                                              value: t(f),
                                              onChange: i[6] || (i[6] = (...n) => t(m) && t(m)(...n)),
                                              onFocus: i[7] || (i[7] = (n) => (l.value = !0)),
                                              onBlur: i[8] || (i[8] = (n) => (l.value = !1)),
                                              onClick: i[9] || (i[9] = w(() => {}, ['stop'])),
                                          },
                                          null,
                                          42,
                                          Ze
                                      )),
                                      [[z, t(o)]]
                                  ),
                            a.$slots.default || a.label
                                ? (y(),
                                  V(
                                      'span',
                                      { key: 2, class: C(t(k).be('button', 'inner')), style: Se(t(v) ? t(p) : void 0) },
                                      [q(a.$slots, 'default', {}, () => [ue(ie(a.label), 1)])],
                                      6
                                  ))
                                : A('v-if', !0),
                        ],
                        2
                    )
                );
            };
        },
    });
var me = H(_e, [['__file', 'checkbox-button.vue']]);
const el = Le({
        modelValue: { type: Be(Array), default: () => [] },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: j,
        label: String,
        fill: String,
        textColor: String,
        tag: { type: String, default: 'div' },
        validateEvent: { type: Boolean, default: !0 },
    }),
    ll = { [D]: (e) => $(e), change: (e) => $(e) },
    al = L({ name: 'ElCheckboxGroup' }),
    nl = L({
        ...al,
        props: el,
        emits: ll,
        setup(e, { emit: s }) {
            const b = e,
                l = R('checkbox'),
                { formItem: v } = K(),
                { inputId: r, isLabeledByFormItem: c } = ne(b, { formItemContext: v }),
                o = async (m) => {
                    s(D, m), await le(), s('change', m);
                },
                f = h({
                    get() {
                        return b.modelValue;
                    },
                    set(m) {
                        o(m);
                    },
                });
            return (
                Ee(B, {
                    ...Me(Ie(b), ['size', 'min', 'max', 'disabled', 'validateEvent', 'fill', 'textColor']),
                    modelValue: f,
                    changeEvent: o,
                }),
                _(
                    () => b.modelValue,
                    () => {
                        b.validateEvent && (v == null || v.validate('change').catch((m) => ee()));
                    }
                ),
                (m, u) => {
                    var k;
                    return (
                        y(),
                        oe(
                            re(m.tag),
                            {
                                id: t(r),
                                class: C(t(l).b('group')),
                                role: 'group',
                                'aria-label': t(c) ? void 0 : m.label || 'checkbox-group',
                                'aria-labelledby': t(c) ? ((k = t(v)) == null ? void 0 : k.labelId) : void 0,
                            },
                            { default: se(() => [q(m.$slots, 'default')]), _: 3 },
                            8,
                            ['id', 'class', 'aria-label', 'aria-labelledby']
                        )
                    );
                }
            );
        },
    });
var fe = H(nl, [['__file', 'checkbox-group.vue']]);
const il = $e(We, { CheckboxButton: me, CheckboxGroup: fe });
de(me);
const rl = de(fe);
export { il as E, rl as a, Pe as h };
