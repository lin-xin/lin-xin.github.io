import { d as c, Q as i, $ as m, o as E, a as b, e as p, v as a, w as _, P as x, A as f } from './index.4bf84d35.js';
import { a as h, E as D } from './el-table-column.c4be16ed.js';
import './el-checkbox.18197270.js';
import './el-tag.a8af73f1.js';
import { u, w as F } from './xlsx.db07aefa.js';
import './flatRest.f88cd71e.js';
import './initCloneObject.a6314c21.js';
import './debounce.632c06d2.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './isEqual.cb5dbe60.js';
const v = { class: 'container' },
    B = { class: 'handle-box' },
    C = c({ name: 'export' }),
    g = c({
        ...C,
        setup(k) {
            const s = i([]);
            (() => {
                s.value = [
                    { id: 1, name: '\u5C0F\u660E', sno: 'S001', class: '\u4E00\u73ED', age: '10', sex: '\u7537' },
                    { id: 2, name: '\u5C0F\u7EA2', sno: 'S002', class: '\u4E00\u73ED', age: '9', sex: '\u5973' },
                ];
            })();
            const n = [
                    ['\u5E8F\u53F7', '\u59D3\u540D', '\u5B66\u53F7', '\u73ED\u7EA7', '\u5E74\u9F84', '\u6027\u522B'],
                ],
                d = () => {
                    s.value.map((o, e) => {
                        const t = [e + 1];
                        t.push(o.name, o.sno, o.class, o.age, o.sex), n.push(t);
                    });
                    let r = u.aoa_to_sheet(n),
                        l = u.book_new();
                    u.book_append_sheet(l, r, '\u7B2C\u4E00\u9875'), F(l, '\u8868\u683C.xlsx');
                };
            return (r, l) => {
                const o = m,
                    e = h,
                    t = D;
                return (
                    E(),
                    b('div', null, [
                        p('div', v, [
                            p('div', B, [
                                a(
                                    o,
                                    { type: 'primary', onClick: d },
                                    { default: _(() => [x('\u5BFC\u51FAExcel')]), _: 1 }
                                ),
                            ]),
                            a(
                                t,
                                { data: s.value, border: '', class: 'table', 'header-cell-class-name': 'table-header' },
                                {
                                    default: _(() => [
                                        a(e, { prop: 'id', label: 'ID', width: '55', align: 'center' }),
                                        a(e, { prop: 'name', label: '\u59D3\u540D' }),
                                        a(e, { prop: 'sno', label: '\u5B66\u53F7' }),
                                        a(e, { prop: 'class', label: '\u73ED\u7EA7' }),
                                        a(e, { prop: 'age', label: '\u5E74\u9F84' }),
                                        a(e, { prop: 'sex', label: '\u6027\u522B' }),
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
const $ = f(g, [['__scopeId', 'data-v-13f006df']]);
export { $ as default };
