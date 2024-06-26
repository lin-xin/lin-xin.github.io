import {
    d as g,
    Z as y,
    Q as l,
    $ as S,
    o as z,
    a as A,
    v as t,
    e as E,
    w as a,
    f as c,
    a0 as U,
    P as d,
    t as F,
    A as M,
} from './index.4bf84d35.js';
import { E as O, _ as Q, a as W } from './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js';
import './el-tag.a8af73f1.js';
import { E as Z } from './el-image-viewer.70b779bf.js';
import { b as j } from './index.b33b1184.js';
import { T as G } from './table-custom.bd2543c0.js';
import { T as H } from './table-search.829b8e04.js';
import { b as J } from './el-select.b46d501e.js';
import { E as K } from './index.ad29a086.js';
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
import './el-input.46da08c2.js';
import './index.37e9b6e1.js';
import './flatRest.f88cd71e.js';
import './el-input-number.5066f3d6.js';
import './debounce.632c06d2.js';
import './el-checkbox.18197270.js';
import './position.f549de9f.js';
import './el-table-column.c4be16ed.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './el-divider.6ab105fa.js';
const L = { class: 'container' },
    R = ['src'],
    X = g({ name: 'basetable' }),
    Y = g({
        ...X,
        setup(ee) {
            const w = y({ name: '' }),
                x = l([{ type: 'input', label: '\u7528\u6237\u540D\uFF1A', prop: 'name' }]),
                B = () => {
                    _(1);
                };
            let C = l([
                { type: 'selection' },
                { type: 'index', label: '\u5E8F\u53F7', width: 55, align: 'center' },
                { prop: 'name', label: '\u7528\u6237\u540D' },
                { prop: 'money', label: '\u8D26\u6237\u4F59\u989D' },
                { prop: 'thumb', label: '\u5934\u50CF' },
                { prop: 'state', label: '\u8D26\u6237\u72B6\u6001' },
                { prop: 'operator', label: '\u64CD\u4F5C', width: 250 },
            ]);
            const i = y({ index: 1, size: 10, total: 200 }),
                b = l([]),
                r = async () => {
                    const o = await j();
                    b.value = o.data.list;
                };
            r();
            const _ = (o) => {
                (i.index = o), r();
            };
            let V = l({
                labelWidth: '100px',
                span: 24,
                list: [
                    { type: 'input', label: '\u7528\u6237\u540D', prop: 'name', required: !0 },
                    { type: 'number', label: '\u8D26\u6237\u4F59\u989D', prop: 'money', required: !0 },
                    {
                        type: 'switch',
                        activeText: '\u6B63\u5E38',
                        inactiveText: '\u5F02\u5E38',
                        label: '\u8D26\u6237\u72B6\u6001',
                        prop: 'state',
                        required: !0,
                    },
                    { type: 'upload', label: '\u5934\u50CF', prop: 'thumb', required: !0 },
                ],
            });
            const s = l(!1),
                n = l(!1),
                v = l({}),
                T = (o) => {
                    (v.value = { ...o }), (n.value = !0), (s.value = !0);
                },
                q = () => {
                    f(), r();
                },
                f = () => {
                    (s.value = !1), (n.value = !1);
                },
                p = l(!1),
                m = l({ row: {}, list: [] }),
                k = (o) => {
                    (m.value.row = { ...o }),
                        (m.value.list = [
                            { prop: 'id', label: '\u7528\u6237ID' },
                            { prop: 'name', label: '\u7528\u6237\u540D' },
                            { prop: 'money', label: '\u8D26\u6237\u4F59\u989D' },
                            { prop: 'state', label: '\u8D26\u6237\u72B6\u6001' },
                            { prop: 'thumb', label: '\u5934\u50CF' },
                        ]),
                        (p.value = !0);
                },
                P = (o) => {
                    K.success('\u5220\u9664\u6210\u529F');
                };
            return (o, u) => {
                const $ = S,
                    h = Z,
                    I = J,
                    N = W,
                    D = O;
                return (
                    z(),
                    A('div', null, [
                        t(H, { query: w, options: x.value, search: B }, null, 8, ['query', 'options']),
                        E('div', L, [
                            t(
                                G,
                                {
                                    columns: c(C),
                                    tableData: b.value,
                                    total: i.total,
                                    viewFunc: k,
                                    delFunc: P,
                                    editFunc: T,
                                    refresh: r,
                                    currentPage: i.index,
                                    changePage: _,
                                },
                                {
                                    toolbarBtn: a(() => [
                                        t(
                                            $,
                                            {
                                                type: 'warning',
                                                icon: c(U),
                                                onClick: u[0] || (u[0] = (e) => (s.value = !0)),
                                            },
                                            { default: a(() => [d('\u65B0\u589E')]), _: 1 },
                                            8,
                                            ['icon']
                                        ),
                                    ]),
                                    money: a(({ rows: e }) => [d(' \uFFE5' + F(e.money), 1)]),
                                    thumb: a(({ rows: e }) => [
                                        t(
                                            h,
                                            {
                                                class: 'table-td-thumb',
                                                src: e.thumb,
                                                'z-index': 10,
                                                'preview-src-list': [e.thumb],
                                                'preview-teleported': '',
                                            },
                                            null,
                                            8,
                                            ['src', 'preview-src-list']
                                        ),
                                    ]),
                                    state: a(({ rows: e }) => [
                                        t(
                                            I,
                                            { type: e.state ? 'success' : 'danger' },
                                            {
                                                default: a(() => [d(F(e.state ? '\u6B63\u5E38' : '\u5F02\u5E38'), 1)]),
                                                _: 2,
                                            },
                                            1032,
                                            ['type']
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['columns', 'tableData', 'total', 'currentPage']
                            ),
                        ]),
                        t(
                            D,
                            {
                                title: n.value ? '\u7F16\u8F91' : '\u65B0\u589E',
                                modelValue: s.value,
                                'onUpdate:modelValue': u[1] || (u[1] = (e) => (s.value = e)),
                                width: '700px',
                                'destroy-on-close': '',
                                'close-on-click-modal': !1,
                                onClose: f,
                            },
                            {
                                default: a(() => [
                                    t(
                                        N,
                                        { 'form-data': v.value, options: c(V), edit: n.value, update: q },
                                        {
                                            thumb: a(({ rows: e }) => [
                                                E('img', { class: 'table-td-thumb', src: e.thumb }, null, 8, R),
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
                        t(
                            D,
                            {
                                title: '\u67E5\u770B\u8BE6\u60C5',
                                modelValue: p.value,
                                'onUpdate:modelValue': u[2] || (u[2] = (e) => (p.value = e)),
                                width: '700px',
                                'destroy-on-close': '',
                            },
                            {
                                default: a(() => [
                                    t(
                                        Q,
                                        { data: m.value },
                                        { thumb: a(({ rows: e }) => [t(h, { src: e.thumb }, null, 8, ['src'])]), _: 1 },
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
const $e = M(Y, [['__scopeId', 'data-v-ed683872']]);
export { $e as default };
