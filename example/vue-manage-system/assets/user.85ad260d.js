import {
    d as B,
    Z as D,
    Q as t,
    $ as A,
    o as k,
    a as $,
    v as a,
    e as N,
    w as p,
    f as d,
    a0 as U,
    P,
} from './index.4bf84d35.js';
import { E as S, _ as z, a as I } from './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js';
import { f as M } from './index.b33b1184.js';
import { T as O } from './table-custom.bd2543c0.js';
import { T as Q } from './table-search.829b8e04.js';
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
import './el-input.46da08c2.js';
import './index.37e9b6e1.js';
import './flatRest.f88cd71e.js';
import './el-input-number.5066f3d6.js';
import './debounce.632c06d2.js';
import './el-select.b46d501e.js';
import './el-tag.a8af73f1.js';
import './el-checkbox.18197270.js';
import './el-table-column.c4be16ed.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './el-divider.6ab105fa.js';
const Z = { class: 'container' },
    j = B({ name: 'system-user' }),
    ye = B({
        ...j,
        setup(G) {
            const E = D({ name: '' }),
                w = t([{ type: 'input', label: '\u7528\u6237\u540D\uFF1A', prop: 'name' }]),
                h = () => {
                    f(1);
                };
            let y = t([
                { type: 'index', label: '\u5E8F\u53F7', width: 55, align: 'center' },
                { prop: 'name', label: '\u7528\u6237\u540D' },
                { prop: 'phone', label: '\u624B\u673A\u53F7' },
                { prop: 'role', label: '\u89D2\u8272' },
                { prop: 'operator', label: '\u64CD\u4F5C', width: 250 },
            ]);
            const s = D({ index: 1, size: 10, total: 0 }),
                c = t([]),
                i = async () => {
                    const e = await M();
                    (c.value = e.data.list), (s.total = e.data.pageTotal);
                };
            i();
            const f = (e) => {
                (s.index = e), i();
            };
            let F = t({
                labelWidth: '100px',
                span: 12,
                list: [
                    { type: 'input', label: '\u7528\u6237\u540D', prop: 'name', required: !0 },
                    { type: 'input', label: '\u624B\u673A\u53F7', prop: 'phone', required: !0 },
                    { type: 'input', label: '\u5BC6\u7801', prop: 'password', required: !0 },
                    { type: 'input', label: '\u90AE\u7BB1', prop: 'email', required: !0 },
                    { type: 'input', label: '\u89D2\u8272', prop: 'role', required: !0 },
                ],
            });
            const l = t(!1),
                u = t(!1),
                b = t({}),
                g = (e) => {
                    (b.value = { ...e }), (u.value = !0), (l.value = !0);
                },
                C = () => {
                    v(), i();
                },
                v = () => {
                    (l.value = !1), (u.value = !1);
                },
                n = t(!1),
                m = t({ row: {}, list: [] }),
                x = (e) => {
                    (m.value.row = { ...e }),
                        (m.value.list = [
                            { prop: 'id', label: '\u7528\u6237ID' },
                            { prop: 'name', label: '\u7528\u6237\u540D' },
                            { prop: 'password', label: '\u5BC6\u7801' },
                            { prop: 'email', label: '\u90AE\u7BB1' },
                            { prop: 'phone', label: '\u7535\u8BDD' },
                            { prop: 'role', label: '\u89D2\u8272' },
                            { prop: 'date', label: '\u6CE8\u518C\u65E5\u671F' },
                        ]),
                        (n.value = !0);
                },
                V = (e) => {
                    W.success('\u5220\u9664\u6210\u529F');
                };
            return (e, o) => {
                const q = A,
                    T = I,
                    _ = S;
                return (
                    k(),
                    $('div', null, [
                        a(Q, { query: E, options: w.value, search: h }, null, 8, ['query', 'options']),
                        N('div', Z, [
                            a(
                                O,
                                {
                                    columns: d(y),
                                    tableData: c.value,
                                    total: s.total,
                                    viewFunc: x,
                                    delFunc: V,
                                    'page-change': f,
                                    editFunc: g,
                                },
                                {
                                    toolbarBtn: p(() => [
                                        a(
                                            q,
                                            {
                                                type: 'warning',
                                                icon: d(U),
                                                onClick: o[0] || (o[0] = (r) => (l.value = !0)),
                                            },
                                            { default: p(() => [P('\u65B0\u589E')]), _: 1 },
                                            8,
                                            ['icon']
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['columns', 'tableData', 'total']
                            ),
                        ]),
                        a(
                            _,
                            {
                                title: u.value ? '\u7F16\u8F91' : '\u65B0\u589E',
                                modelValue: l.value,
                                'onUpdate:modelValue': o[1] || (o[1] = (r) => (l.value = r)),
                                width: '700px',
                                'destroy-on-close': '',
                                'close-on-click-modal': !1,
                                onClose: v,
                            },
                            {
                                default: p(() => [
                                    a(T, { 'form-data': b.value, options: d(F), edit: u.value, update: C }, null, 8, [
                                        'form-data',
                                        'options',
                                        'edit',
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['title', 'modelValue']
                        ),
                        a(
                            _,
                            {
                                title: '\u67E5\u770B\u8BE6\u60C5',
                                modelValue: n.value,
                                'onUpdate:modelValue': o[2] || (o[2] = (r) => (n.value = r)),
                                width: '700px',
                                'destroy-on-close': '',
                            },
                            { default: p(() => [a(z, { data: m.value }, null, 8, ['data'])]), _: 1 },
                            8,
                            ['modelValue']
                        ),
                    ])
                );
            };
        },
    });
export { ye as default };
