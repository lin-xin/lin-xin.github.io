import {
    b as me,
    a5 as Ae,
    ad as ue,
    K as Xe,
    N as Qe,
    ae as ze,
    bv as Ee,
    Q as T,
    M as Ke,
    c as h,
    c4 as ea,
    a6 as da,
    b9 as Za,
    am as ja,
    d as W,
    u as ie,
    o as k,
    a as B,
    e as j,
    a3 as fe,
    cq as ca,
    f as s,
    bY as Oe,
    n as E,
    aI as oe,
    r as Te,
    P as qe,
    t as ne,
    _ as de,
    Y as le,
    g as pa,
    ag as fa,
    bj as va,
    bx as Wa,
    R as Ge,
    p as ha,
    Z as Re,
    U as Ya,
    S as se,
    aE as ma,
    m as Ja,
    q as ga,
    h as Xa,
    E as ye,
    H as ba,
    by as ya,
    aD as Qa,
    s as Z,
    l as J,
    j as H,
    w as R,
    v as X,
    F as ve,
    bp as ka,
    a9 as Ca,
    x as ke,
    V as et,
    c7 as xe,
    J as aa,
    aM as at,
    cr as ta,
    B as Ce,
    at as tt,
    cs as lt,
    ct as nt,
    al as Na,
    av as K,
    cu as Se,
    cv as Ea,
    bM as st,
    bh as ot,
    bi as it,
    bk as rt,
    bz as ut,
    aZ as dt,
    G as ct,
    br as pt,
    aO as la,
    aB as ft,
    bP as vt,
    bu as ht,
    aq as na,
    cw as mt,
} from './index.4bf84d35.js';
import { E as gt } from './el-checkbox.18197270.js';
import { i as Ne } from './isEqual.cb5dbe60.js';
import { u as sa, c as oa } from './el-date-picker.087f596b.js';
import { s as bt } from './scroll.519c37f7.js';
import { b as yt } from './flatRest.f88cd71e.js';
import { c as $a } from './cloneDeep.256bb9de.js';
import { E as kt, i as Ct } from './el-input.46da08c2.js';
import { t as Nt, b as ia } from './el-select.b46d501e.js';
import { d as Et } from './debounce.632c06d2.js';
var $t = 1 / 0;
function St(e) {
    var t = e == null ? 0 : e.length;
    return t ? yt(e, $t) : [];
}
const Sa = me({
        modelValue: { type: [String, Number, Boolean], default: void 0 },
        size: Ae,
        disabled: Boolean,
        label: { type: [String, Number, Boolean], default: void 0 },
        value: { type: [String, Number, Boolean], default: void 0 },
        name: { type: String, default: void 0 },
    }),
    wt = me({ ...Sa, border: Boolean }),
    wa = { [ue]: (e) => Xe(e) || Qe(e) || ze(e), [Ee]: (e) => Xe(e) || Qe(e) || ze(e) },
    Va = Symbol('radioGroupKey'),
    Ta = (e, t) => {
        const n = T(),
            a = Ke(Va, void 0),
            i = h(() => !!a),
            p = h(() => (ea(e.value) ? e.label : e.value)),
            u = h({
                get() {
                    return i.value ? a.modelValue : e.modelValue;
                },
                set(g) {
                    i.value ? a.changeEvent(g) : t && t(ue, g), (n.value.checked = e.modelValue === p.value);
                },
            }),
            f = da(h(() => (a == null ? void 0 : a.size))),
            r = Za(h(() => (a == null ? void 0 : a.disabled))),
            v = T(!1),
            y = h(() => (r.value || (i.value && u.value !== p.value) ? -1 : 0));
        return (
            ja(
                {
                    from: 'label act as value',
                    replacement: 'value',
                    version: '3.0.0',
                    scope: 'el-radio',
                    ref: 'https://element-plus.org/en-US/component/radio.html',
                },
                h(() => i.value && ea(e.value))
            ),
            {
                radioRef: n,
                isGroup: i,
                radioGroup: a,
                focus: v,
                size: f,
                disabled: r,
                tabIndex: y,
                modelValue: u,
                actualValue: p,
            }
        );
    },
    Vt = ['value', 'name', 'disabled'],
    Tt = W({ name: 'ElRadio' }),
    Pt = W({
        ...Tt,
        props: wt,
        emits: wa,
        setup(e, { emit: t }) {
            const n = e,
                a = ie('radio'),
                {
                    radioRef: i,
                    radioGroup: p,
                    focus: u,
                    size: f,
                    disabled: r,
                    modelValue: v,
                    actualValue: y,
                } = Ta(n, t);
            function g() {
                le(() => t('change', v.value));
            }
            return (m, N) => {
                var _;
                return (
                    k(),
                    B(
                        'label',
                        {
                            class: E([
                                s(a).b(),
                                s(a).is('disabled', s(r)),
                                s(a).is('focus', s(u)),
                                s(a).is('bordered', m.border),
                                s(a).is('checked', s(v) === s(y)),
                                s(a).m(s(f)),
                            ]),
                        },
                        [
                            j(
                                'span',
                                {
                                    class: E([
                                        s(a).e('input'),
                                        s(a).is('disabled', s(r)),
                                        s(a).is('checked', s(v) === s(y)),
                                    ]),
                                },
                                [
                                    fe(
                                        j(
                                            'input',
                                            {
                                                ref_key: 'radioRef',
                                                ref: i,
                                                'onUpdate:modelValue':
                                                    N[0] || (N[0] = (F) => (Oe(v) ? (v.value = F) : null)),
                                                class: E(s(a).e('original')),
                                                value: s(y),
                                                name: m.name || ((_ = s(p)) == null ? void 0 : _.name),
                                                disabled: s(r),
                                                type: 'radio',
                                                onFocus: N[1] || (N[1] = (F) => (u.value = !0)),
                                                onBlur: N[2] || (N[2] = (F) => (u.value = !1)),
                                                onChange: g,
                                                onClick: N[3] || (N[3] = oe(() => {}, ['stop'])),
                                            },
                                            null,
                                            42,
                                            Vt
                                        ),
                                        [[ca, s(v)]]
                                    ),
                                    j('span', { class: E(s(a).e('inner')) }, null, 2),
                                ],
                                2
                            ),
                            j(
                                'span',
                                { class: E(s(a).e('label')), onKeydown: N[4] || (N[4] = oe(() => {}, ['stop'])) },
                                [Te(m.$slots, 'default', {}, () => [qe(ne(m.label), 1)])],
                                34
                            ),
                        ],
                        2
                    )
                );
            };
        },
    });
var It = de(Pt, [['__file', 'radio.vue']]);
const _t = me({ ...Sa }),
    Lt = ['value', 'name', 'disabled'],
    Bt = W({ name: 'ElRadioButton' }),
    Dt = W({
        ...Bt,
        props: _t,
        setup(e) {
            const t = e,
                n = ie('radio'),
                { radioRef: a, focus: i, size: p, disabled: u, modelValue: f, radioGroup: r, actualValue: v } = Ta(t),
                y = h(() => ({
                    backgroundColor: (r == null ? void 0 : r.fill) || '',
                    borderColor: (r == null ? void 0 : r.fill) || '',
                    boxShadow: r != null && r.fill ? `-1px 0 0 0 ${r.fill}` : '',
                    color: (r == null ? void 0 : r.textColor) || '',
                }));
            return (g, m) => {
                var N;
                return (
                    k(),
                    B(
                        'label',
                        {
                            class: E([
                                s(n).b('button'),
                                s(n).is('active', s(f) === s(v)),
                                s(n).is('disabled', s(u)),
                                s(n).is('focus', s(i)),
                                s(n).bm('button', s(p)),
                            ]),
                        },
                        [
                            fe(
                                j(
                                    'input',
                                    {
                                        ref_key: 'radioRef',
                                        ref: a,
                                        'onUpdate:modelValue': m[0] || (m[0] = (_) => (Oe(f) ? (f.value = _) : null)),
                                        class: E(s(n).be('button', 'original-radio')),
                                        value: s(v),
                                        type: 'radio',
                                        name: g.name || ((N = s(r)) == null ? void 0 : N.name),
                                        disabled: s(u),
                                        onFocus: m[1] || (m[1] = (_) => (i.value = !0)),
                                        onBlur: m[2] || (m[2] = (_) => (i.value = !1)),
                                        onClick: m[3] || (m[3] = oe(() => {}, ['stop'])),
                                    },
                                    null,
                                    42,
                                    Lt
                                ),
                                [[ca, s(f)]]
                            ),
                            j(
                                'span',
                                {
                                    class: E(s(n).be('button', 'inner')),
                                    style: pa(s(f) === s(v) ? s(y) : {}),
                                    onKeydown: m[4] || (m[4] = oe(() => {}, ['stop'])),
                                },
                                [Te(g.$slots, 'default', {}, () => [qe(ne(g.label), 1)])],
                                38
                            ),
                        ],
                        2
                    )
                );
            };
        },
    });
var Pa = de(Dt, [['__file', 'radio-button.vue']]);
const Mt = me({
        id: { type: String, default: void 0 },
        size: Ae,
        disabled: Boolean,
        modelValue: { type: [String, Number, Boolean], default: void 0 },
        fill: { type: String, default: '' },
        label: { type: String, default: void 0 },
        textColor: { type: String, default: '' },
        name: { type: String, default: void 0 },
        validateEvent: { type: Boolean, default: !0 },
    }),
    Ft = wa,
    zt = ['id', 'aria-label', 'aria-labelledby'],
    Rt = W({ name: 'ElRadioGroup' }),
    xt = W({
        ...Rt,
        props: Mt,
        emits: Ft,
        setup(e, { emit: t }) {
            const n = e,
                a = ie('radio'),
                i = fa(),
                p = T(),
                { formItem: u } = va(),
                { inputId: f, isLabeledByFormItem: r } = Wa(n, { formItemContext: u }),
                v = (g) => {
                    t(ue, g), le(() => t('change', g));
                };
            Ge(() => {
                const g = p.value.querySelectorAll('[type=radio]'),
                    m = g[0];
                !Array.from(g).some((N) => N.checked) && m && (m.tabIndex = 0);
            });
            const y = h(() => n.name || i.value);
            return (
                ha(Va, Re({ ...Ya(n), changeEvent: v, name: y })),
                se(
                    () => n.modelValue,
                    () => {
                        n.validateEvent && (u == null || u.validate('change').catch((g) => ma()));
                    }
                ),
                (g, m) => (
                    k(),
                    B(
                        'div',
                        {
                            id: s(f),
                            ref_key: 'radioGroupRef',
                            ref: p,
                            class: E(s(a).b('group')),
                            role: 'radiogroup',
                            'aria-label': s(r) ? void 0 : g.label || 'radio-group',
                            'aria-labelledby': s(r) ? s(u).labelId : void 0,
                        },
                        [Te(g.$slots, 'default')],
                        10,
                        zt
                    )
                )
            );
        },
    });
var Ia = de(xt, [['__file', 'radio-group.vue']]);
const Ht = Ja(It, { RadioButton: Pa, RadioGroup: Ia }),
    $l = ga(Ia),
    Sl = ga(Pa);
var At = W({
    name: 'NodeContent',
    setup() {
        return { ns: ie('cascader-node') };
    },
    render() {
        const { ns: e } = this,
            { node: t, panel: n } = this.$parent,
            { data: a, label: i } = t,
            { renderLabelFn: p } = n;
        return Xa('span', { class: e.e('label') }, p ? p({ node: t, data: a }) : i);
    },
});
const Ue = Symbol(),
    Kt = W({
        name: 'ElCascaderNode',
        components: {
            ElCheckbox: gt,
            ElRadio: Ht,
            NodeContent: At,
            ElIcon: ye,
            Check: ba,
            Loading: ya,
            ArrowRight: Qa,
        },
        props: { node: { type: Object, required: !0 }, menuId: String },
        emits: ['expand'],
        setup(e, { emit: t }) {
            const n = Ke(Ue),
                a = ie('cascader-node'),
                i = h(() => n.isHoverMenu),
                p = h(() => n.config.multiple),
                u = h(() => n.config.checkStrictly),
                f = h(() => {
                    var $;
                    return ($ = n.checkedNodes[0]) == null ? void 0 : $.uid;
                }),
                r = h(() => e.node.isDisabled),
                v = h(() => e.node.isLeaf),
                y = h(() => (u.value && !v.value) || !r.value),
                g = h(() => N(n.expandingNode)),
                m = h(() => u.value && n.checkedNodes.some(N)),
                N = ($) => {
                    var z;
                    const { level: x, uid: Y } = e.node;
                    return ((z = $ == null ? void 0 : $.pathNodes[x - 1]) == null ? void 0 : z.uid) === Y;
                },
                _ = () => {
                    g.value || n.expandNode(e.node);
                },
                F = ($) => {
                    const { node: z } = e;
                    $ !== z.checked && n.handleCheckChange(z, $);
                },
                A = () => {
                    n.lazyLoad(e.node, () => {
                        v.value || _();
                    });
                },
                L = ($) => {
                    !i.value || (O(), !v.value && t('expand', $));
                },
                O = () => {
                    const { node: $ } = e;
                    !y.value || $.loading || ($.loaded ? _() : A());
                },
                D = () => {
                    (i.value && !v.value) || (v.value && !r.value && !u.value && !p.value ? M(!0) : O());
                },
                Q = ($) => {
                    u.value ? (F($), e.node.loaded && _()) : M($);
                },
                M = ($) => {
                    e.node.loaded ? (F($), !u.value && _()) : A();
                };
            return {
                panel: n,
                isHoverMenu: i,
                multiple: p,
                checkStrictly: u,
                checkedNodeId: f,
                isDisabled: r,
                isLeaf: v,
                expandable: y,
                inExpandingPath: g,
                inCheckedPath: m,
                ns: a,
                handleHoverExpand: L,
                handleExpand: O,
                handleClick: D,
                handleCheck: M,
                handleSelectCheck: Q,
            };
        },
    }),
    Ot = ['id', 'aria-haspopup', 'aria-owns', 'aria-expanded', 'tabindex'],
    qt = j('span', null, null, -1);
function Gt(e, t, n, a, i, p) {
    const u = Z('el-checkbox'),
        f = Z('el-radio'),
        r = Z('check'),
        v = Z('el-icon'),
        y = Z('node-content'),
        g = Z('loading'),
        m = Z('arrow-right');
    return (
        k(),
        B(
            'li',
            {
                id: `${e.menuId}-${e.node.uid}`,
                role: 'menuitem',
                'aria-haspopup': !e.isLeaf,
                'aria-owns': e.isLeaf ? null : e.menuId,
                'aria-expanded': e.inExpandingPath,
                tabindex: e.expandable ? -1 : void 0,
                class: E([
                    e.ns.b(),
                    e.ns.is('selectable', e.checkStrictly),
                    e.ns.is('active', e.node.checked),
                    e.ns.is('disabled', !e.expandable),
                    e.inExpandingPath && 'in-active-path',
                    e.inCheckedPath && 'in-checked-path',
                ]),
                onMouseenter: t[2] || (t[2] = (...N) => e.handleHoverExpand && e.handleHoverExpand(...N)),
                onFocus: t[3] || (t[3] = (...N) => e.handleHoverExpand && e.handleHoverExpand(...N)),
                onClick: t[4] || (t[4] = (...N) => e.handleClick && e.handleClick(...N)),
            },
            [
                J(' prefix '),
                e.multiple
                    ? (k(),
                      H(
                          u,
                          {
                              key: 0,
                              'model-value': e.node.checked,
                              indeterminate: e.node.indeterminate,
                              disabled: e.isDisabled,
                              onClick: t[0] || (t[0] = oe(() => {}, ['stop'])),
                              'onUpdate:modelValue': e.handleSelectCheck,
                          },
                          null,
                          8,
                          ['model-value', 'indeterminate', 'disabled', 'onUpdate:modelValue']
                      ))
                    : e.checkStrictly
                    ? (k(),
                      H(
                          f,
                          {
                              key: 1,
                              'model-value': e.checkedNodeId,
                              label: e.node.uid,
                              disabled: e.isDisabled,
                              'onUpdate:modelValue': e.handleSelectCheck,
                              onClick: t[1] || (t[1] = oe(() => {}, ['stop'])),
                          },
                          {
                              default: R(() => [
                                  J(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),
                                  qt,
                              ]),
                              _: 1,
                          },
                          8,
                          ['model-value', 'label', 'disabled', 'onUpdate:modelValue']
                      ))
                    : e.isLeaf && e.node.checked
                    ? (k(),
                      H(v, { key: 2, class: E(e.ns.e('prefix')) }, { default: R(() => [X(r)]), _: 1 }, 8, ['class']))
                    : J('v-if', !0),
                J(' content '),
                X(y),
                J(' postfix '),
                e.isLeaf
                    ? J('v-if', !0)
                    : (k(),
                      B(
                          ve,
                          { key: 3 },
                          [
                              e.node.loading
                                  ? (k(),
                                    H(
                                        v,
                                        { key: 0, class: E([e.ns.is('loading'), e.ns.e('postfix')]) },
                                        { default: R(() => [X(g)]), _: 1 },
                                        8,
                                        ['class']
                                    ))
                                  : (k(),
                                    H(
                                        v,
                                        { key: 1, class: E(['arrow-right', e.ns.e('postfix')]) },
                                        { default: R(() => [X(m)]), _: 1 },
                                        8,
                                        ['class']
                                    )),
                          ],
                          64
                      )),
            ],
            42,
            Ot
        )
    );
}
var Ut = de(Kt, [
    ['render', Gt],
    ['__file', 'node.vue'],
]);
const Zt = W({
    name: 'ElCascaderMenu',
    components: { Loading: ya, ElIcon: ye, ElScrollbar: ka, ElCascaderNode: Ut },
    props: { nodes: { type: Array, required: !0 }, index: { type: Number, required: !0 } },
    setup(e) {
        const t = et(),
            n = ie('cascader-menu'),
            { t: a } = Ca(),
            i = fa();
        let p = null,
            u = null;
        const f = Ke(Ue),
            r = T(null),
            v = h(() => !e.nodes.length),
            y = h(() => !f.initialLoaded),
            g = h(() => `${i.value}-${e.index}`),
            m = (A) => {
                p = A.target;
            },
            N = (A) => {
                if (!(!f.isHoverMenu || !p || !r.value))
                    if (p.contains(A.target)) {
                        _();
                        const L = t.vnode.el,
                            { left: O } = L.getBoundingClientRect(),
                            { offsetWidth: D, offsetHeight: Q } = L,
                            M = A.clientX - O,
                            $ = p.offsetTop,
                            z = $ + p.offsetHeight;
                        r.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${$} L${D} 0 V${$} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${M} ${z} L${D} ${Q} V${z} Z" />
        `;
                    } else u || (u = window.setTimeout(F, f.config.hoverThreshold));
            },
            _ = () => {
                !u || (clearTimeout(u), (u = null));
            },
            F = () => {
                !r.value || ((r.value.innerHTML = ''), _());
            };
        return {
            ns: n,
            panel: f,
            hoverZone: r,
            isEmpty: v,
            isLoading: y,
            menuId: g,
            t: a,
            handleExpand: m,
            handleMouseMove: N,
            clearHoverZone: F,
        };
    },
});
function jt(e, t, n, a, i, p) {
    const u = Z('el-cascader-node'),
        f = Z('loading'),
        r = Z('el-icon'),
        v = Z('el-scrollbar');
    return (
        k(),
        H(
            v,
            {
                key: e.menuId,
                tag: 'ul',
                role: 'menu',
                class: E(e.ns.b()),
                'wrap-class': e.ns.e('wrap'),
                'view-class': [e.ns.e('list'), e.ns.is('empty', e.isEmpty)],
                onMousemove: e.handleMouseMove,
                onMouseleave: e.clearHoverZone,
            },
            {
                default: R(() => {
                    var y;
                    return [
                        (k(!0),
                        B(
                            ve,
                            null,
                            ke(
                                e.nodes,
                                (g) => (
                                    k(),
                                    H(
                                        u,
                                        { key: g.uid, node: g, 'menu-id': e.menuId, onExpand: e.handleExpand },
                                        null,
                                        8,
                                        ['node', 'menu-id', 'onExpand']
                                    )
                                )
                            ),
                            128
                        )),
                        e.isLoading
                            ? (k(),
                              B(
                                  'div',
                                  { key: 0, class: E(e.ns.e('empty-text')) },
                                  [
                                      X(
                                          r,
                                          { size: '14', class: E(e.ns.is('loading')) },
                                          { default: R(() => [X(f)]), _: 1 },
                                          8,
                                          ['class']
                                      ),
                                      qe(' ' + ne(e.t('el.cascader.loading')), 1),
                                  ],
                                  2
                              ))
                            : e.isEmpty
                            ? (k(),
                              B('div', { key: 1, class: E(e.ns.e('empty-text')) }, ne(e.t('el.cascader.noData')), 3))
                            : (y = e.panel) != null && y.isHoverMenu
                            ? (k(), B('svg', { key: 2, ref: 'hoverZone', class: E(e.ns.e('hover-zone')) }, null, 2))
                            : J('v-if', !0),
                    ];
                }),
                _: 1,
            },
            8,
            ['class', 'wrap-class', 'view-class', 'onMousemove', 'onMouseleave']
        )
    );
}
var Wt = de(Zt, [
    ['render', jt],
    ['__file', 'menu.vue'],
]);
let Yt = 0;
const Jt = (e) => {
    const t = [e];
    let { parent: n } = e;
    for (; n; ) t.unshift(n), (n = n.parent);
    return t;
};
class he {
    constructor(t, n, a, i = !1) {
        (this.data = t),
            (this.config = n),
            (this.parent = a),
            (this.root = i),
            (this.uid = Yt++),
            (this.checked = !1),
            (this.indeterminate = !1),
            (this.loading = !1);
        const { value: p, label: u, children: f } = n,
            r = t[f],
            v = Jt(this);
        (this.level = i ? 0 : a ? a.level + 1 : 1),
            (this.value = t[p]),
            (this.label = t[u]),
            (this.pathNodes = v),
            (this.pathValues = v.map((y) => y.value)),
            (this.pathLabels = v.map((y) => y.label)),
            (this.childrenData = r),
            (this.children = (r || []).map((y) => new he(y, n, this))),
            (this.loaded = !n.lazy || this.isLeaf || !xe(r));
    }
    get isDisabled() {
        const { data: t, parent: n, config: a } = this,
            { disabled: i, checkStrictly: p } = a;
        return (aa(i) ? i(t, this) : !!t[i]) || (!p && (n == null ? void 0 : n.isDisabled));
    }
    get isLeaf() {
        const { data: t, config: n, childrenData: a, loaded: i } = this,
            { lazy: p, leaf: u } = n,
            f = aa(u) ? u(t, this) : t[u];
        return at(f) ? (p && !i ? !1 : !(Array.isArray(a) && a.length)) : !!f;
    }
    get valueByOption() {
        return this.config.emitPath ? this.pathValues : this.value;
    }
    appendChild(t) {
        const { childrenData: n, children: a } = this,
            i = new he(t, this.config, this);
        return Array.isArray(n) ? n.push(t) : (this.childrenData = [t]), a.push(i), i;
    }
    calcText(t, n) {
        const a = t ? this.pathLabels.join(n) : this.label;
        return (this.text = a), a;
    }
    broadcast(t, ...n) {
        const a = `onParent${ta(t)}`;
        this.children.forEach((i) => {
            i && (i.broadcast(t, ...n), i[a] && i[a](...n));
        });
    }
    emit(t, ...n) {
        const { parent: a } = this,
            i = `onChild${ta(t)}`;
        a && (a[i] && a[i](...n), a.emit(t, ...n));
    }
    onParentCheck(t) {
        this.isDisabled || this.setCheckState(t);
    }
    onChildCheck() {
        const { children: t } = this,
            n = t.filter((i) => !i.isDisabled),
            a = n.length ? n.every((i) => i.checked) : !1;
        this.setCheckState(a);
    }
    setCheckState(t) {
        const n = this.children.length,
            a = this.children.reduce((i, p) => {
                const u = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
                return i + u;
            }, 0);
        (this.checked =
            this.loaded && this.children.filter((i) => !i.isDisabled).every((i) => i.loaded && i.checked) && t),
            (this.indeterminate = this.loaded && a !== n && a > 0);
    }
    doCheck(t) {
        if (this.checked === t) return;
        const { checkStrictly: n, multiple: a } = this.config;
        n || !a ? (this.checked = t) : (this.broadcast('check', t), this.setCheckState(t), this.emit('check'));
    }
}
const He = (e, t) =>
    e.reduce((n, a) => (a.isLeaf ? n.push(a) : (!t && n.push(a), (n = n.concat(He(a.children, t)))), n), []);
class ra {
    constructor(t, n) {
        this.config = n;
        const a = (t || []).map((i) => new he(i, this.config));
        (this.nodes = a), (this.allNodes = He(a, !1)), (this.leafNodes = He(a, !0));
    }
    getNodes() {
        return this.nodes;
    }
    getFlattedNodes(t) {
        return t ? this.leafNodes : this.allNodes;
    }
    appendNode(t, n) {
        const a = n ? n.appendChild(t) : new he(t, this.config);
        n || this.nodes.push(a), this.allNodes.push(a), a.isLeaf && this.leafNodes.push(a);
    }
    appendNodes(t, n) {
        t.forEach((a) => this.appendNode(a, n));
    }
    getNodeByValue(t, n = !1) {
        return !t && t !== 0
            ? null
            : this.getFlattedNodes(n).find((i) => Ne(i.value, t) || Ne(i.pathValues, t)) || null;
    }
    getSameNode(t) {
        return (
            (t && this.getFlattedNodes(!1).find(({ value: a, level: i }) => Ne(t.value, a) && t.level === i)) || null
        );
    }
}
const _a = me({
        modelValue: { type: Ce([Number, String, Array]) },
        options: { type: Ce(Array), default: () => [] },
        props: { type: Ce(Object), default: () => ({}) },
    }),
    Xt = {
        expandTrigger: 'click',
        multiple: !1,
        checkStrictly: !1,
        emitPath: !0,
        lazy: !1,
        lazyLoad: tt,
        value: 'value',
        label: 'label',
        children: 'children',
        leaf: 'leaf',
        disabled: 'disabled',
        hoverThreshold: 500,
    },
    Qt = (e) => h(() => ({ ...Xt, ...e.props })),
    ua = (e) => {
        if (!e) return 0;
        const t = e.id.split('-');
        return Number(t[t.length - 2]);
    },
    el = (e) => {
        if (!e) return;
        const t = e.querySelector('input');
        t ? t.click() : lt(e) && e.click();
    },
    al = (e, t) => {
        const n = t.slice(0),
            a = n.map((p) => p.uid),
            i = e.reduce((p, u) => {
                const f = a.indexOf(u.uid);
                return f > -1 && (p.push(u), n.splice(f, 1), a.splice(f, 1)), p;
            }, []);
        return i.push(...n), i;
    },
    tl = W({
        name: 'ElCascaderPanel',
        components: { ElCascaderMenu: Wt },
        props: { ..._a, border: { type: Boolean, default: !0 }, renderLabel: Function },
        emits: [ue, Ee, 'close', 'expand-change'],
        setup(e, { emit: t, slots: n }) {
            let a = !1;
            const i = ie('cascader'),
                p = Qt(e);
            let u = null;
            const f = T(!0),
                r = T([]),
                v = T(null),
                y = T([]),
                g = T(null),
                m = T([]),
                N = h(() => p.value.expandTrigger === 'hover'),
                _ = h(() => e.renderLabel || n.default),
                F = () => {
                    const { options: c } = e,
                        C = p.value;
                    (a = !1),
                        (u = new ra(c, C)),
                        (y.value = [u.getNodes()]),
                        C.lazy && xe(e.options)
                            ? ((f.value = !1),
                              A(void 0, (b) => {
                                  b && ((u = new ra(b, C)), (y.value = [u.getNodes()])), (f.value = !0), x(!1, !0);
                              }))
                            : x(!1, !0);
                },
                A = (c, C) => {
                    const b = p.value;
                    (c = c || new he({}, b, void 0, !0)), (c.loading = !0);
                    const w = (P) => {
                        const V = c,
                            G = V.root ? null : V;
                        P && (u == null || u.appendNodes(P, G)),
                            (V.loading = !1),
                            (V.loaded = !0),
                            (V.childrenData = V.childrenData || []),
                            C && C(P);
                    };
                    b.lazyLoad(c, w);
                },
                L = (c, C) => {
                    var b;
                    const { level: w } = c,
                        P = y.value.slice(0, w);
                    let V;
                    c.isLeaf ? (V = c.pathNodes[w - 2]) : ((V = c), P.push(c.children)),
                        ((b = g.value) == null ? void 0 : b.uid) !== (V == null ? void 0 : V.uid) &&
                            ((g.value = c),
                            (y.value = P),
                            !C && t('expand-change', (c == null ? void 0 : c.pathValues) || []));
                },
                O = (c, C, b = !0) => {
                    const { checkStrictly: w, multiple: P } = p.value,
                        V = m.value[0];
                    (a = !0),
                        !P && (V == null || V.doCheck(!1)),
                        c.doCheck(C),
                        z(),
                        b && !P && !w && t('close'),
                        !b && !P && !w && D(c);
                },
                D = (c) => {
                    !c || ((c = c.parent), D(c), c && L(c));
                },
                Q = (c) => (u == null ? void 0 : u.getFlattedNodes(c)),
                M = (c) => {
                    var C;
                    return (C = Q(c)) == null ? void 0 : C.filter((b) => b.checked !== !1);
                },
                $ = () => {
                    m.value.forEach((c) => c.doCheck(!1)),
                        z(),
                        (y.value = y.value.slice(0, 1)),
                        (g.value = null),
                        t('expand-change', []);
                },
                z = () => {
                    var c;
                    const { checkStrictly: C, multiple: b } = p.value,
                        w = m.value,
                        P = M(!C),
                        V = al(w, P),
                        G = V.map((I) => I.valueByOption);
                    (m.value = V), (v.value = b ? G : (c = G[0]) != null ? c : null);
                },
                x = (c = !1, C = !1) => {
                    const { modelValue: b } = e,
                        { lazy: w, multiple: P, checkStrictly: V } = p.value,
                        G = !V;
                    if (!(!f.value || a || (!C && Ne(b, v.value))))
                        if (w && !c) {
                            const re = sa(St(oa(b)))
                                .map((U) => (u == null ? void 0 : u.getNodeByValue(U)))
                                .filter((U) => !!U && !U.loaded && !U.loading);
                            re.length
                                ? re.forEach((U) => {
                                      A(U, () => x(!1, C));
                                  })
                                : x(!0, C);
                        } else {
                            const I = P ? oa(b) : [b],
                                re = sa(I.map((U) => (u == null ? void 0 : u.getNodeByValue(U, G))));
                            Y(re, C), (v.value = $a(b));
                        }
                },
                Y = (c, C = !0) => {
                    const { checkStrictly: b } = p.value,
                        w = m.value,
                        P = c.filter((I) => !!I && (b || I.isLeaf)),
                        V = u == null ? void 0 : u.getSameNode(g.value),
                        G = (C && V) || P[0];
                    G ? G.pathNodes.forEach((I) => L(I, !0)) : (g.value = null),
                        w.forEach((I) => I.doCheck(!1)),
                        Re(P).forEach((I) => I.doCheck(!0)),
                        (m.value = P),
                        le(ce);
                },
                ce = () => {
                    !Na ||
                        r.value.forEach((c) => {
                            const C = c == null ? void 0 : c.$el;
                            if (C) {
                                const b = C.querySelector(`.${i.namespace.value}-scrollbar__wrap`),
                                    w =
                                        C.querySelector(`.${i.b('node')}.${i.is('active')}`) ||
                                        C.querySelector(`.${i.b('node')}.in-active-path`);
                                bt(b, w);
                            }
                        });
                },
                ge = (c) => {
                    const C = c.target,
                        { code: b } = c;
                    switch (b) {
                        case K.up:
                        case K.down: {
                            c.preventDefault();
                            const w = b === K.up ? -1 : 1;
                            Se(Ea(C, w, `.${i.b('node')}[tabindex="-1"]`));
                            break;
                        }
                        case K.left: {
                            c.preventDefault();
                            const w = r.value[ua(C) - 1],
                                P = w == null ? void 0 : w.$el.querySelector(`.${i.b('node')}[aria-expanded="true"]`);
                            Se(P);
                            break;
                        }
                        case K.right: {
                            c.preventDefault();
                            const w = r.value[ua(C) + 1],
                                P = w == null ? void 0 : w.$el.querySelector(`.${i.b('node')}[tabindex="-1"]`);
                            Se(P);
                            break;
                        }
                        case K.enter:
                            el(C);
                            break;
                    }
                };
            return (
                ha(
                    Ue,
                    Re({
                        config: p,
                        expandingNode: g,
                        checkedNodes: m,
                        isHoverMenu: N,
                        initialLoaded: f,
                        renderLabelFn: _,
                        lazyLoad: A,
                        expandNode: L,
                        handleCheckChange: O,
                    })
                ),
                se([p, () => e.options], F, { deep: !0, immediate: !0 }),
                se(
                    () => e.modelValue,
                    () => {
                        (a = !1), x();
                    },
                    { deep: !0 }
                ),
                se(
                    () => v.value,
                    (c) => {
                        Ne(c, e.modelValue) || (t(ue, c), t(Ee, c));
                    }
                ),
                nt(() => (r.value = [])),
                Ge(() => !xe(e.modelValue) && x()),
                {
                    ns: i,
                    menuList: r,
                    menus: y,
                    checkedNodes: m,
                    handleKeyDown: ge,
                    handleCheckChange: O,
                    getFlattedNodes: Q,
                    getCheckedNodes: M,
                    clearCheckedNodes: $,
                    calculateCheckedValue: z,
                    scrollToExpandingNode: ce,
                }
            );
        },
    });
function ll(e, t, n, a, i, p) {
    const u = Z('el-cascader-menu');
    return (
        k(),
        B(
            'div',
            {
                class: E([e.ns.b('panel'), e.ns.is('bordered', e.border)]),
                onKeydown: t[0] || (t[0] = (...f) => e.handleKeyDown && e.handleKeyDown(...f)),
            },
            [
                (k(!0),
                B(
                    ve,
                    null,
                    ke(
                        e.menus,
                        (f, r) => (
                            k(),
                            H(
                                u,
                                { key: r, ref_for: !0, ref: (v) => (e.menuList[r] = v), index: r, nodes: [...f] },
                                null,
                                8,
                                ['index', 'nodes']
                            )
                        )
                    ),
                    128
                )),
            ],
            34
        )
    );
}
var we = de(tl, [
    ['render', ll],
    ['__file', 'index.vue'],
]);
we.install = (e) => {
    e.component(we.name, we);
};
const nl = we,
    sl = me({
        ..._a,
        size: Ae,
        placeholder: String,
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
        filterMethod: { type: Ce(Function), default: (e, t) => e.text.includes(t) },
        separator: { type: String, default: ' / ' },
        showAllLevels: { type: Boolean, default: !0 },
        collapseTags: Boolean,
        maxCollapseTags: { type: Number, default: 1 },
        collapseTagsTooltip: { type: Boolean, default: !1 },
        debounce: { type: Number, default: 300 },
        beforeFilter: { type: Ce(Function), default: () => !0 },
        popperClass: { type: String, default: '' },
        teleported: st.teleported,
        tagType: { ...Nt.type, default: 'info' },
        validateEvent: { type: Boolean, default: !0 },
        ...ot,
    }),
    ol = {
        [ue]: (e) => !0,
        [Ee]: (e) => !0,
        focus: (e) => e instanceof FocusEvent,
        blur: (e) => e instanceof FocusEvent,
        visibleChange: (e) => ze(e),
        expandChange: (e) => !!e,
        removeTag: (e) => !!e,
    },
    il = { key: 0 },
    rl = ['placeholder', 'onKeydown'],
    ul = ['onClick'],
    dl = 'ElCascader',
    cl = W({ name: dl }),
    pl = W({
        ...cl,
        props: sl,
        emits: ol,
        setup(e, { expose: t, emit: n }) {
            const a = e,
                i = {
                    modifiers: [
                        {
                            name: 'arrowPosition',
                            enabled: !0,
                            phase: 'main',
                            fn: ({ state: l }) => {
                                const { modifiersData: o, placement: d } = l;
                                ['right', 'left', 'bottom', 'top'].includes(d) || (o.arrow.x = 35);
                            },
                            requires: ['arrow'],
                        },
                    ],
                },
                p = it();
            let u = 0,
                f = 0;
            const r = ie('cascader'),
                v = ie('input'),
                { t: y } = Ca(),
                { form: g, formItem: m } = va(),
                { valueOnClear: N } = rt(a),
                _ = T(null),
                F = T(null),
                A = T(null),
                L = T(null),
                O = T(null),
                D = T(!1),
                Q = T(!1),
                M = T(!1),
                $ = T(!1),
                z = T(''),
                x = T(''),
                Y = T([]),
                ce = T([]),
                ge = T([]),
                c = T(!1),
                C = h(() => p.style),
                b = h(() => a.disabled || (g == null ? void 0 : g.disabled)),
                w = h(() => a.placeholder || y('el.cascader.placeholder')),
                P = h(() => (x.value || Y.value.length > 0 || c.value ? '' : w.value)),
                V = da(),
                G = h(() => (['small'].includes(V.value) ? 'small' : 'default')),
                I = h(() => !!a.props.multiple),
                re = h(() => !a.filterable || I.value),
                U = h(() => (I.value ? x.value : z.value)),
                $e = h(() => {
                    var l;
                    return ((l = L.value) == null ? void 0 : l.checkedNodes) || [];
                }),
                La = h(() => (!a.clearable || b.value || M.value || !Q.value ? !1 : !!$e.value.length)),
                Pe = h(() => {
                    const { showAllLevels: l, separator: o } = a,
                        d = $e.value;
                    return d.length ? (I.value ? '' : d[0].calcText(l, o)) : '';
                }),
                Ba = h(() => (m == null ? void 0 : m.validateState) || ''),
                Ie = h({
                    get() {
                        return $a(a.modelValue);
                    },
                    set(l) {
                        const o = l || N.value;
                        n(ue, o), n(Ee, o), a.validateEvent && (m == null || m.validate('change').catch((d) => ma()));
                    },
                }),
                Da = h(() => [r.b(), r.m(V.value), r.is('disabled', b.value), p.class]),
                Ma = h(() => [v.e('icon'), 'icon-arrow-down', r.is('reverse', D.value)]),
                Fa = h(() => r.is('focus', D.value || $.value)),
                Ze = h(() => {
                    var l, o;
                    return (o = (l = _.value) == null ? void 0 : l.popperRef) == null ? void 0 : o.contentRef;
                }),
                q = (l) => {
                    var o, d, S;
                    b.value ||
                        ((l = l != null ? l : !D.value),
                        l !== D.value &&
                            ((D.value = l),
                            (d = (o = F.value) == null ? void 0 : o.input) == null ||
                                d.setAttribute('aria-expanded', `${l}`),
                            l
                                ? (be(), le((S = L.value) == null ? void 0 : S.scrollToExpandingNode))
                                : a.filterable && Me(),
                            n('visibleChange', l)));
                },
                be = () => {
                    le(() => {
                        var l;
                        (l = _.value) == null || l.updatePopper();
                    });
                },
                _e = () => {
                    M.value = !1;
                },
                Le = (l) => {
                    const { showAllLevels: o, separator: d } = a;
                    return {
                        node: l,
                        key: l.uid,
                        text: l.calcText(o, d),
                        hitState: !1,
                        closable: !b.value && !l.isDisabled,
                        isCollapseTag: !1,
                    };
                },
                Be = (l) => {
                    var o;
                    const d = l.node;
                    d.doCheck(!1), (o = L.value) == null || o.calculateCheckedValue(), n('removeTag', d.valueByOption);
                },
                za = () => {
                    if (!I.value) return;
                    const l = $e.value,
                        o = [],
                        d = [];
                    if ((l.forEach((S) => d.push(Le(S))), (ce.value = d), l.length)) {
                        l.slice(0, a.maxCollapseTags).forEach((ee) => o.push(Le(ee)));
                        const S = l.slice(a.maxCollapseTags),
                            ae = S.length;
                        ae &&
                            (a.collapseTags
                                ? o.push({ key: -1, text: `+ ${ae}`, closable: !1, isCollapseTag: !0 })
                                : S.forEach((ee) => o.push(Le(ee))));
                    }
                    Y.value = o;
                },
                je = () => {
                    var l, o;
                    const { filterMethod: d, showAllLevels: S, separator: ae } = a,
                        ee =
                            (o = (l = L.value) == null ? void 0 : l.getFlattedNodes(!a.props.checkStrictly)) == null
                                ? void 0
                                : o.filter((te) => (te.isDisabled ? !1 : (te.calcText(S, ae), d(te, U.value))));
                    I.value &&
                        (Y.value.forEach((te) => {
                            te.hitState = !1;
                        }),
                        ce.value.forEach((te) => {
                            te.hitState = !1;
                        })),
                        (M.value = !0),
                        (ge.value = ee),
                        be();
                },
                Ra = () => {
                    var l;
                    let o;
                    M.value && O.value
                        ? (o = O.value.$el.querySelector(`.${r.e('suggestion-item')}`))
                        : (o = (l = L.value) == null ? void 0 : l.$el.querySelector(`.${r.b('node')}[tabindex="-1"]`)),
                        o && (o.focus(), !M.value && o.click());
                },
                De = () => {
                    var l, o;
                    const d = (l = F.value) == null ? void 0 : l.input,
                        S = A.value,
                        ae = (o = O.value) == null ? void 0 : o.$el;
                    if (!(!Na || !d)) {
                        if (ae) {
                            const ee = ae.querySelector(`.${r.e('suggestion-list')}`);
                            ee.style.minWidth = `${d.offsetWidth}px`;
                        }
                        if (S) {
                            const { offsetHeight: ee } = S,
                                te = Y.value.length > 0 ? `${Math.max(ee + 6, u)}px` : `${u}px`;
                            (d.style.height = te), be();
                        }
                    }
                },
                xa = (l) => {
                    var o;
                    return (o = L.value) == null ? void 0 : o.getCheckedNodes(l);
                },
                Ha = (l) => {
                    be(), n('expandChange', l);
                },
                pe = (l) => {
                    var o;
                    const d = (o = l.target) == null ? void 0 : o.value;
                    if (l.type === 'compositionend') (c.value = !1), le(() => Fe(d));
                    else {
                        const S = d[d.length - 1] || '';
                        c.value = !Ct(S);
                    }
                },
                Aa = (l) => {
                    if (!c.value)
                        switch (l.code) {
                            case K.enter:
                                q();
                                break;
                            case K.down:
                                q(!0), le(Ra), l.preventDefault();
                                break;
                            case K.esc:
                                D.value === !0 && (l.preventDefault(), l.stopPropagation(), q(!1));
                                break;
                            case K.tab:
                                q(!1);
                                break;
                        }
                },
                Ka = () => {
                    var l;
                    (l = L.value) == null || l.clearCheckedNodes(), !D.value && a.filterable && Me(), q(!1);
                },
                Me = () => {
                    const { value: l } = Pe;
                    (z.value = l), (x.value = l);
                },
                Oa = (l) => {
                    var o, d;
                    const { checked: S } = l;
                    I.value
                        ? (o = L.value) == null || o.handleCheckChange(l, !S, !1)
                        : (!S && ((d = L.value) == null || d.handleCheckChange(l, !0, !1)), q(!1));
                },
                qa = (l) => {
                    const o = l.target,
                        { code: d } = l;
                    switch (d) {
                        case K.up:
                        case K.down: {
                            const S = d === K.up ? -1 : 1;
                            Se(Ea(o, S, `.${r.e('suggestion-item')}[tabindex="-1"]`));
                            break;
                        }
                        case K.enter:
                            o.click();
                            break;
                    }
                },
                Ga = () => {
                    const l = Y.value,
                        o = l[l.length - 1];
                    (f = x.value ? 0 : f + 1),
                        !(!o || !f || (a.collapseTags && l.length > 1)) && (o.hitState ? Be(o) : (o.hitState = !0));
                },
                We = (l) => {
                    const o = l.target,
                        d = r.e('search-input');
                    o.className === d && ($.value = !0), n('focus', l);
                },
                Ye = (l) => {
                    ($.value = !1), n('blur', l);
                },
                Ua = Et(() => {
                    const { value: l } = U;
                    if (!l) return;
                    const o = a.beforeFilter(l);
                    ut(o) ? o.then(je).catch(() => {}) : o !== !1 ? je() : _e();
                }, a.debounce),
                Fe = (l, o) => {
                    !D.value && q(!0), !(o != null && o.isComposing) && (l ? Ua() : _e());
                },
                Je = (l) => Number.parseFloat(mt(v.cssVarName('input-height'), l).value) - 2;
            return (
                se(M, be),
                se([$e, b], za),
                se(Y, () => {
                    le(() => De());
                }),
                se(V, async () => {
                    await le();
                    const l = F.value.input;
                    (u = Je(l) || u), De();
                }),
                se(Pe, Me, { immediate: !0 }),
                Ge(() => {
                    const l = F.value.input,
                        o = Je(l);
                    (u = l.offsetHeight || o), dt(l, De);
                }),
                t({ getCheckedNodes: xa, cascaderPanelRef: L, togglePopperVisible: q, contentRef: Ze }),
                (l, o) => (
                    k(),
                    H(
                        s(la),
                        {
                            ref_key: 'tooltipRef',
                            ref: _,
                            visible: D.value,
                            teleported: l.teleported,
                            'popper-class': [s(r).e('dropdown'), l.popperClass],
                            'popper-options': i,
                            'fallback-placements': ['bottom-start', 'bottom', 'top-start', 'top', 'right', 'left'],
                            'stop-popper-mouse-event': !1,
                            'gpu-acceleration': !1,
                            placement: 'bottom-start',
                            transition: `${s(r).namespace.value}-zoom-in-top`,
                            effect: 'light',
                            pure: '',
                            persistent: '',
                            onHide: _e,
                        },
                        {
                            default: R(() => [
                                fe(
                                    (k(),
                                    B(
                                        'div',
                                        {
                                            class: E(s(Da)),
                                            style: pa(s(C)),
                                            onClick: o[5] || (o[5] = () => q(s(re) ? void 0 : !0)),
                                            onKeydown: Aa,
                                            onMouseenter: o[6] || (o[6] = (d) => (Q.value = !0)),
                                            onMouseleave: o[7] || (o[7] = (d) => (Q.value = !1)),
                                        },
                                        [
                                            X(
                                                s(kt),
                                                {
                                                    ref_key: 'input',
                                                    ref: F,
                                                    modelValue: z.value,
                                                    'onUpdate:modelValue': o[1] || (o[1] = (d) => (z.value = d)),
                                                    placeholder: s(P),
                                                    readonly: s(re),
                                                    disabled: s(b),
                                                    'validate-event': !1,
                                                    size: s(V),
                                                    class: E(s(Fa)),
                                                    tabindex: s(I) && l.filterable && !s(b) ? -1 : void 0,
                                                    onCompositionstart: pe,
                                                    onCompositionupdate: pe,
                                                    onCompositionend: pe,
                                                    onFocus: We,
                                                    onBlur: Ye,
                                                    onInput: Fe,
                                                },
                                                {
                                                    suffix: R(() => [
                                                        s(La)
                                                            ? (k(),
                                                              H(
                                                                  s(ye),
                                                                  {
                                                                      key: 'clear',
                                                                      class: E([s(v).e('icon'), 'icon-circle-close']),
                                                                      onClick: oe(Ka, ['stop']),
                                                                  },
                                                                  { default: R(() => [X(s(ct))]), _: 1 },
                                                                  8,
                                                                  ['class', 'onClick']
                                                              ))
                                                            : (k(),
                                                              H(
                                                                  s(ye),
                                                                  {
                                                                      key: 'arrow-down',
                                                                      class: E(s(Ma)),
                                                                      onClick:
                                                                          o[0] || (o[0] = oe((d) => q(), ['stop'])),
                                                                  },
                                                                  { default: R(() => [X(s(pt))]), _: 1 },
                                                                  8,
                                                                  ['class']
                                                              )),
                                                    ]),
                                                    _: 1,
                                                },
                                                8,
                                                [
                                                    'modelValue',
                                                    'placeholder',
                                                    'readonly',
                                                    'disabled',
                                                    'size',
                                                    'class',
                                                    'tabindex',
                                                ]
                                            ),
                                            s(I)
                                                ? (k(),
                                                  B(
                                                      'div',
                                                      {
                                                          key: 0,
                                                          ref_key: 'tagWrapper',
                                                          ref: A,
                                                          class: E([
                                                              s(r).e('tags'),
                                                              s(r).is('validate', Boolean(s(Ba))),
                                                          ]),
                                                      },
                                                      [
                                                          (k(!0),
                                                          B(
                                                              ve,
                                                              null,
                                                              ke(
                                                                  Y.value,
                                                                  (d) => (
                                                                      k(),
                                                                      H(
                                                                          s(ia),
                                                                          {
                                                                              key: d.key,
                                                                              type: l.tagType,
                                                                              size: s(G),
                                                                              hit: d.hitState,
                                                                              closable: d.closable,
                                                                              'disable-transitions': '',
                                                                              onClose: (S) => Be(d),
                                                                          },
                                                                          {
                                                                              default: R(() => [
                                                                                  d.isCollapseTag === !1
                                                                                      ? (k(),
                                                                                        B('span', il, ne(d.text), 1))
                                                                                      : (k(),
                                                                                        H(
                                                                                            s(la),
                                                                                            {
                                                                                                key: 1,
                                                                                                disabled:
                                                                                                    D.value ||
                                                                                                    !l.collapseTagsTooltip,
                                                                                                'fallback-placements': [
                                                                                                    'bottom',
                                                                                                    'top',
                                                                                                    'right',
                                                                                                    'left',
                                                                                                ],
                                                                                                placement: 'bottom',
                                                                                                effect: 'light',
                                                                                            },
                                                                                            {
                                                                                                default: R(() => [
                                                                                                    j(
                                                                                                        'span',
                                                                                                        null,
                                                                                                        ne(d.text),
                                                                                                        1
                                                                                                    ),
                                                                                                ]),
                                                                                                content: R(() => [
                                                                                                    j(
                                                                                                        'div',
                                                                                                        {
                                                                                                            class: E(
                                                                                                                s(r).e(
                                                                                                                    'collapse-tags'
                                                                                                                )
                                                                                                            ),
                                                                                                        },
                                                                                                        [
                                                                                                            (k(!0),
                                                                                                            B(
                                                                                                                ve,
                                                                                                                null,
                                                                                                                ke(
                                                                                                                    ce.value.slice(
                                                                                                                        l.maxCollapseTags
                                                                                                                    ),
                                                                                                                    (
                                                                                                                        S,
                                                                                                                        ae
                                                                                                                    ) => (
                                                                                                                        k(),
                                                                                                                        B(
                                                                                                                            'div',
                                                                                                                            {
                                                                                                                                key: ae,
                                                                                                                                class: E(
                                                                                                                                    s(
                                                                                                                                        r
                                                                                                                                    ).e(
                                                                                                                                        'collapse-tag'
                                                                                                                                    )
                                                                                                                                ),
                                                                                                                            },
                                                                                                                            [
                                                                                                                                (k(),
                                                                                                                                H(
                                                                                                                                    s(
                                                                                                                                        ia
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        key: S.key,
                                                                                                                                        class: 'in-tooltip',
                                                                                                                                        type: l.tagType,
                                                                                                                                        size: s(
                                                                                                                                            G
                                                                                                                                        ),
                                                                                                                                        hit: S.hitState,
                                                                                                                                        closable:
                                                                                                                                            S.closable,
                                                                                                                                        'disable-transitions':
                                                                                                                                            '',
                                                                                                                                        onClose:
                                                                                                                                            (
                                                                                                                                                ee
                                                                                                                                            ) =>
                                                                                                                                                Be(
                                                                                                                                                    S
                                                                                                                                                ),
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        default:
                                                                                                                                            R(
                                                                                                                                                () => [
                                                                                                                                                    j(
                                                                                                                                                        'span',
                                                                                                                                                        null,
                                                                                                                                                        ne(
                                                                                                                                                            S.text
                                                                                                                                                        ),
                                                                                                                                                        1
                                                                                                                                                    ),
                                                                                                                                                ]
                                                                                                                                            ),
                                                                                                                                        _: 2,
                                                                                                                                    },
                                                                                                                                    1032,
                                                                                                                                    [
                                                                                                                                        'type',
                                                                                                                                        'size',
                                                                                                                                        'hit',
                                                                                                                                        'closable',
                                                                                                                                        'onClose',
                                                                                                                                    ]
                                                                                                                                )),
                                                                                                                            ],
                                                                                                                            2
                                                                                                                        )
                                                                                                                    )
                                                                                                                ),
                                                                                                                128
                                                                                                            )),
                                                                                                        ],
                                                                                                        2
                                                                                                    ),
                                                                                                ]),
                                                                                                _: 2,
                                                                                            },
                                                                                            1032,
                                                                                            ['disabled']
                                                                                        )),
                                                                              ]),
                                                                              _: 2,
                                                                          },
                                                                          1032,
                                                                          ['type', 'size', 'hit', 'closable', 'onClose']
                                                                      )
                                                                  )
                                                              ),
                                                              128
                                                          )),
                                                          l.filterable && !s(b)
                                                              ? fe(
                                                                    (k(),
                                                                    B(
                                                                        'input',
                                                                        {
                                                                            key: 0,
                                                                            'onUpdate:modelValue':
                                                                                o[2] || (o[2] = (d) => (x.value = d)),
                                                                            type: 'text',
                                                                            class: E(s(r).e('search-input')),
                                                                            placeholder: s(Pe) ? '' : s(w),
                                                                            onInput:
                                                                                o[3] || (o[3] = (d) => Fe(x.value, d)),
                                                                            onClick:
                                                                                o[4] ||
                                                                                (o[4] = oe((d) => q(!0), ['stop'])),
                                                                            onKeydown: ft(Ga, ['delete']),
                                                                            onCompositionstart: pe,
                                                                            onCompositionupdate: pe,
                                                                            onCompositionend: pe,
                                                                            onFocus: We,
                                                                            onBlur: Ye,
                                                                        },
                                                                        null,
                                                                        42,
                                                                        rl
                                                                    )),
                                                                    [[vt, x.value]]
                                                                )
                                                              : J('v-if', !0),
                                                      ],
                                                      2
                                                  ))
                                                : J('v-if', !0),
                                        ],
                                        38
                                    )),
                                    [[s(ht), () => q(!1), s(Ze)]]
                                ),
                            ]),
                            content: R(() => [
                                fe(
                                    X(
                                        s(nl),
                                        {
                                            ref_key: 'cascaderPanelRef',
                                            ref: L,
                                            modelValue: s(Ie),
                                            'onUpdate:modelValue':
                                                o[8] || (o[8] = (d) => (Oe(Ie) ? (Ie.value = d) : null)),
                                            options: l.options,
                                            props: a.props,
                                            border: !1,
                                            'render-label': l.$slots.default,
                                            onExpandChange: Ha,
                                            onClose: o[9] || (o[9] = (d) => l.$nextTick(() => q(!1))),
                                        },
                                        null,
                                        8,
                                        ['modelValue', 'options', 'props', 'render-label']
                                    ),
                                    [[na, !M.value]]
                                ),
                                l.filterable
                                    ? fe(
                                          (k(),
                                          H(
                                              s(ka),
                                              {
                                                  key: 0,
                                                  ref_key: 'suggestionPanel',
                                                  ref: O,
                                                  tag: 'ul',
                                                  class: E(s(r).e('suggestion-panel')),
                                                  'view-class': s(r).e('suggestion-list'),
                                                  onKeydown: qa,
                                              },
                                              {
                                                  default: R(() => [
                                                      ge.value.length
                                                          ? (k(!0),
                                                            B(
                                                                ve,
                                                                { key: 0 },
                                                                ke(
                                                                    ge.value,
                                                                    (d) => (
                                                                        k(),
                                                                        B(
                                                                            'li',
                                                                            {
                                                                                key: d.uid,
                                                                                class: E([
                                                                                    s(r).e('suggestion-item'),
                                                                                    s(r).is('checked', d.checked),
                                                                                ]),
                                                                                tabindex: -1,
                                                                                onClick: (S) => Oa(d),
                                                                            },
                                                                            [
                                                                                j('span', null, ne(d.text), 1),
                                                                                d.checked
                                                                                    ? (k(),
                                                                                      H(
                                                                                          s(ye),
                                                                                          { key: 0 },
                                                                                          {
                                                                                              default: R(() => [
                                                                                                  X(s(ba)),
                                                                                              ]),
                                                                                              _: 1,
                                                                                          }
                                                                                      ))
                                                                                    : J('v-if', !0),
                                                                            ],
                                                                            10,
                                                                            ul
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            ))
                                                          : Te(l.$slots, 'empty', { key: 1 }, () => [
                                                                j(
                                                                    'li',
                                                                    { class: E(s(r).e('empty-text')) },
                                                                    ne(s(y)('el.cascader.noMatch')),
                                                                    3
                                                                ),
                                                            ]),
                                                  ]),
                                                  _: 3,
                                              },
                                              8,
                                              ['class', 'view-class']
                                          )),
                                          [[na, M.value]]
                                      )
                                    : J('v-if', !0),
                            ]),
                            _: 3,
                        },
                        8,
                        ['visible', 'teleported', 'popper-class', 'transition']
                    )
                )
            );
        },
    });
var Ve = de(pl, [['__file', 'cascader.vue']]);
Ve.install = (e) => {
    e.component(Ve.name, Ve);
};
const fl = Ve,
    wl = fl;
export { wl as E, Sl as a, $l as b, Ht as c };
