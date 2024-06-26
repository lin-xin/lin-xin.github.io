import {
    d as C,
    Q as a,
    $,
    E as I,
    o as m,
    a as N,
    e as U,
    v as o,
    w as l,
    f as s,
    cp as b,
    a0 as q,
    P as O,
    j as E,
    k as F,
} from './index.4bf84d35.js';
import { E as j, _ as M, a as P } from './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js';
import { E as Q } from './el-radio.a37b6563.js';
import './el-input.46da08c2.js';
import './el-tag.a8af73f1.js';
import './el-checkbox.18197270.js';
import { T as S } from './table-custom.bd2543c0.js';
import { E as W } from './index.ad29a086.js';
import './index.d2d344cd.js';
import './scroll.519c37f7.js';
import './el-form-item.29d7f1b9.js';
import './baseClone.2314aca7.js';
import './initCloneObject.a6314c21.js';
import './el-col.56ba0c63.js';
import './el-upload.b8718f13.js';
import './el-progress.5478047e.js';
import './cloneDeep.256bb9de.js';
import './isEqual.cb5dbe60.js';
import './el-date-picker.087f596b.js';
import './localeData.b0463d95.js';
import './flatRest.f88cd71e.js';
import './el-input-number.5066f3d6.js';
import './debounce.632c06d2.js';
import './el-select.b46d501e.js';
import './index.37e9b6e1.js';
import './el-table-column.c4be16ed.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './el-divider.6ab105fa.js';
const z = { class: 'container' },
    A = C({ name: 'system-menu' }),
    Ce = C({
        ...A,
        setup(G) {
            let w = a([
                { prop: 'title', label: '\u83DC\u5355\u540D\u79F0', align: 'left' },
                { prop: 'icon', label: '\u56FE\u6807' },
                { prop: 'index', label: '\u8DEF\u7531\u8DEF\u5F84' },
                { prop: 'permiss', label: '\u6743\u9650\u6807\u8BC6' },
                { prop: 'operator', label: '\u64CD\u4F5C', width: 250 },
            ]);
            const _ = (u) =>
                    u.map((e) => {
                        const r = { label: e.title, value: e.id };
                        return e.children && (r.children = _(e.children)), r;
                    }),
                B = a(_(b));
            let V = a({
                labelWidth: '100px',
                span: 12,
                list: [
                    { type: 'input', label: '\u83DC\u5355\u540D\u79F0', prop: 'title', required: !0 },
                    { type: 'input', label: '\u8DEF\u7531\u8DEF\u5F84', prop: 'index', required: !0 },
                    { type: 'input', label: '\u56FE\u6807', prop: 'icon' },
                    { type: 'input', label: '\u6743\u9650\u6807\u8BC6', prop: 'permiss' },
                    { type: 'parent', label: '\u7236\u83DC\u5355', prop: 'parent' },
                ],
            });
            const i = a(!1),
                n = a(!1),
                p = a({}),
                y = (u) => {
                    (p.value = { ...u }), (n.value = !0), (i.value = !0);
                },
                x = () => {
                    f();
                },
                f = () => {
                    (i.value = !1), (n.value = !1);
                },
                d = a(!1),
                c = a({ row: {}, list: [] }),
                g = (u) => {
                    (c.value.row = { ...u }),
                        (c.value.list = [
                            { prop: 'id', label: '\u83DC\u5355ID' },
                            { prop: 'pid', label: '\u7236\u83DC\u5355ID' },
                            { prop: 'title', label: '\u83DC\u5355\u540D\u79F0' },
                            { prop: 'index', label: '\u8DEF\u7531\u8DEF\u5F84' },
                            { prop: 'permiss', label: '\u6743\u9650\u6807\u8BC6' },
                            { prop: 'icon', label: '\u56FE\u6807' },
                        ]),
                        (d.value = !0);
                },
                k = (u) => {
                    W.success('\u5220\u9664\u6210\u529F');
                };
            return (u, e) => {
                const r = $,
                    v = I,
                    h = Q,
                    T = P,
                    D = j;
                return (
                    m(),
                    N('div', null, [
                        U('div', z, [
                            o(
                                S,
                                {
                                    columns: s(w),
                                    tableData: s(b),
                                    'row-key': 'index',
                                    'has-pagination': !1,
                                    viewFunc: g,
                                    delFunc: k,
                                    editFunc: y,
                                },
                                {
                                    toolbarBtn: l(() => [
                                        o(
                                            r,
                                            {
                                                type: 'warning',
                                                icon: s(q),
                                                onClick: e[0] || (e[0] = (t) => (i.value = !0)),
                                            },
                                            { default: l(() => [O('\u65B0\u589E')]), _: 1 },
                                            8,
                                            ['icon']
                                        ),
                                    ]),
                                    icon: l(({ rows: t }) => [
                                        o(v, null, { default: l(() => [(m(), E(F(t.icon)))]), _: 2 }, 1024),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['columns', 'tableData']
                            ),
                        ]),
                        o(
                            D,
                            {
                                title: n.value ? '\u7F16\u8F91' : '\u65B0\u589E',
                                modelValue: i.value,
                                'onUpdate:modelValue': e[2] || (e[2] = (t) => (i.value = t)),
                                width: '700px',
                                'destroy-on-close': '',
                                'close-on-click-modal': !1,
                                onClose: f,
                            },
                            {
                                default: l(() => [
                                    o(
                                        T,
                                        { 'form-data': p.value, options: s(V), edit: n.value, update: x },
                                        {
                                            parent: l(() => [
                                                o(
                                                    h,
                                                    {
                                                        modelValue: p.value.pid,
                                                        'onUpdate:modelValue':
                                                            e[1] || (e[1] = (t) => (p.value.pid = t)),
                                                        options: B.value,
                                                        props: { checkStrictly: !0 },
                                                        clearable: '',
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'options']
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ['form-data', 'options', 'edit']
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['title', 'modelValue']
                        ),
                        o(
                            D,
                            {
                                title: '\u67E5\u770B\u8BE6\u60C5',
                                modelValue: d.value,
                                'onUpdate:modelValue': e[3] || (e[3] = (t) => (d.value = t)),
                                width: '700px',
                                'destroy-on-close': '',
                            },
                            {
                                default: l(() => [
                                    o(
                                        M,
                                        { data: c.value },
                                        {
                                            icon: l(({ rows: t }) => [
                                                o(v, null, { default: l(() => [(m(), E(F(t.icon)))]), _: 2 }, 1024),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ['data']
                                    ),
                                ]),
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
export { Ce as default };
