import { d as m, Q as i, $ as D, o as v, a as g, e as _, v as e, w as r, P as d, A as y } from './index.4bf84d35.js';
import { a as B, E as F } from './el-table-column.c4be16ed.js';
import './el-checkbox.18197270.js';
import './el-tag.a8af73f1.js';
import { E as w } from './el-link.78abca44.js';
import { E as C } from './el-upload.b8718f13.js';
import './el-progress.5478047e.js';
import { r as A, u as S } from './xlsx.db07aefa.js';
import './flatRest.f88cd71e.js';
import './initCloneObject.a6314c21.js';
import './debounce.632c06d2.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './isEqual.cb5dbe60.js';
import './cloneDeep.256bb9de.js';
import './baseClone.2314aca7.js';
const k = { class: 'container' },
    N = { class: 'handle-box' },
    j = m({ name: 'import' }),
    T = m({
        ...j,
        setup(V) {
            const u = i([]);
            (() => {
                u.value = [
                    { id: 1, name: '\u5C0F\u660E', sno: 'S001', class: '\u4E00\u73ED', age: '10', sex: '\u7537' },
                    { id: 2, name: '\u5C0F\u7EA2', sno: 'S002', class: '\u4E00\u73ED', age: '9', sex: '\u5973' },
                ];
            })();
            const p = i([]),
                E = async (o) => ((p.value = await f(o)), !0),
                f = (o) =>
                    new Promise(function (t, s) {
                        const n = new FileReader();
                        (n.onload = function (c) {
                            const a = c.target.result;
                            let l = A(a, { type: 'binary' });
                            const h = l.SheetNames[0],
                                x = S.sheet_to_json(l.Sheets[h]);
                            t(x);
                        }),
                            n.readAsBinaryString(o);
                    }),
                b = async () => {
                    const o = p.value.map((t, s) => ({
                        id: s,
                        name: t.姓名,
                        sno: t.学号,
                        class: t.班级,
                        age: t.年龄,
                        sex: t.性别,
                    }));
                    u.value.push(...o);
                };
            return (o, t) => {
                const s = D,
                    n = C,
                    c = w,
                    a = B,
                    l = F;
                return (
                    v(),
                    g('div', null, [
                        _('div', k, [
                            _('div', N, [
                                e(
                                    n,
                                    {
                                        action: '#',
                                        limit: 1,
                                        accept: '.xlsx, .xls',
                                        'show-file-list': !1,
                                        'before-upload': E,
                                        'http-request': b,
                                    },
                                    {
                                        default: r(() => [
                                            e(
                                                s,
                                                { class: 'mr10', type: 'success' },
                                                { default: r(() => [d('\u6279\u91CF\u5BFC\u5165')]), _: 1 }
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                                e(
                                    c,
                                    { href: '/template.xlsx', target: '_blank' },
                                    { default: r(() => [d('\u4E0B\u8F7D\u6A21\u677F')]), _: 1 }
                                ),
                            ]),
                            e(
                                l,
                                { data: u.value, border: '', class: 'table', 'header-cell-class-name': 'table-header' },
                                {
                                    default: r(() => [
                                        e(a, { prop: 'id', label: 'ID', width: '55', align: 'center' }),
                                        e(a, { prop: 'name', label: '\u59D3\u540D' }),
                                        e(a, { prop: 'sno', label: '\u5B66\u53F7' }),
                                        e(a, { prop: 'class', label: '\u73ED\u7EA7' }),
                                        e(a, { prop: 'age', label: '\u5E74\u9F84' }),
                                        e(a, { prop: 'sex', label: '\u6027\u522B' }),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['data']
                            ),
                        ]),
                    ])
                );
            };
        },
    });
const Y = y(T, [['__scopeId', 'data-v-992d3d1c']]);
export { Y as default };
