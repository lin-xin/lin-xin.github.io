import {
    d as g,
    Q as f,
    $ as E,
    o as a,
    a as n,
    v as u,
    w as t,
    f as i,
    j as p,
    t as m,
    F as b,
    aV as B,
    P as c,
    aS as U,
    cG as F,
    cH as x,
} from './index.4bf84d35.js';
import { E as A } from './el-input.46da08c2.js';
import './el-tag.a8af73f1.js';
import { E as z, a as T } from './el-select.b46d501e.js';
import { T as $ } from './table-custom.bd2543c0.js';
import { f as S } from './index.b33b1184.js';
import './index.37e9b6e1.js';
import './flatRest.f88cd71e.js';
import './initCloneObject.a6314c21.js';
import './isEqual.cb5dbe60.js';
import './el-checkbox.18197270.js';
import './scroll.519c37f7.js';
import './debounce.632c06d2.js';
import './el-table-column.c4be16ed.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './el-divider.6ab105fa.js';
import './index.d2d344cd.js';
const N = { class: 'container' },
    P = { key: 1 },
    j = { key: 1 },
    G = { key: 1 },
    H = { key: 1 },
    I = g({ name: 'table-editor' }),
    ie = g({
        ...I,
        setup(O) {
            let D = f([
                { type: 'index', label: '\u5E8F\u53F7', width: 55, align: 'center' },
                { prop: 'name', label: '\u7528\u6237\u540D' },
                { prop: 'password', label: '\u5BC6\u7801' },
                { prop: 'email', label: '\u90AE\u7BB1' },
                { prop: 'role', label: '\u89D2\u8272' },
                { prop: 'operator', label: '\u64CD\u4F5C', width: 180 },
            ]);
            const r = f([]);
            (async () => {
                const o = await S();
                r.value = o.data.list;
            })();
            const k = f({}),
                C = (o) => {
                    (k.value = { ...o }), (o.editing = !0);
                },
                h = (o, s) => {
                    (o.editing = !1), (r.value[s] = { ...k.value });
                };
            return (o, s) => {
                const _ = A,
                    V = z,
                    v = T,
                    d = E;
                return (
                    a(),
                    n('div', N, [
                        u(
                            $,
                            { columns: i(D), tableData: r.value, hasToolbar: !1, hasPagination: !1 },
                            {
                                name: t(({ rows: e }) => [
                                    e.editing
                                        ? (a(),
                                          p(
                                              _,
                                              {
                                                  key: 0,
                                                  modelValue: e.name,
                                                  'onUpdate:modelValue': (l) => (e.name = l),
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'onUpdate:modelValue']
                                          ))
                                        : (a(), n('span', P, m(e.name), 1)),
                                ]),
                                password: t(({ rows: e }) => [
                                    e.editing
                                        ? (a(),
                                          p(
                                              _,
                                              {
                                                  key: 0,
                                                  modelValue: e.password,
                                                  'onUpdate:modelValue': (l) => (e.password = l),
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'onUpdate:modelValue']
                                          ))
                                        : (a(), n('span', j, m(e.password), 1)),
                                ]),
                                email: t(({ rows: e }) => [
                                    e.editing
                                        ? (a(),
                                          p(
                                              _,
                                              {
                                                  key: 0,
                                                  modelValue: e.email,
                                                  'onUpdate:modelValue': (l) => (e.email = l),
                                              },
                                              null,
                                              8,
                                              ['modelValue', 'onUpdate:modelValue']
                                          ))
                                        : (a(), n('span', G, m(e.email), 1)),
                                ]),
                                role: t(({ rows: e }) => [
                                    e.editing
                                        ? (a(),
                                          p(
                                              v,
                                              {
                                                  key: 0,
                                                  modelValue: e.role,
                                                  'onUpdate:modelValue': (l) => (e.role = l),
                                              },
                                              {
                                                  default: t(() => [
                                                      u(V, {
                                                          label: '\u7BA1\u7406\u5458',
                                                          value: '\u7BA1\u7406\u5458',
                                                      }),
                                                      u(V, {
                                                          label: '\u666E\u901A\u7528\u6237',
                                                          value: '\u666E\u901A\u7528\u6237',
                                                      }),
                                                  ]),
                                                  _: 2,
                                              },
                                              1032,
                                              ['modelValue', 'onUpdate:modelValue']
                                          ))
                                        : (a(), n('span', H, m(e.role), 1)),
                                ]),
                                operator: t(({ rows: e, index: l }) => [
                                    e.editing
                                        ? (a(),
                                          n(
                                              b,
                                              { key: 1 },
                                              [
                                                  u(
                                                      d,
                                                      {
                                                          type: 'success',
                                                          size: 'small',
                                                          icon: i(F),
                                                          onClick: (y) => (e.editing = !1),
                                                      },
                                                      { default: t(() => [c(' \u4FDD\u5B58 ')]), _: 2 },
                                                      1032,
                                                      ['icon', 'onClick']
                                                  ),
                                                  u(
                                                      d,
                                                      {
                                                          type: 'default',
                                                          size: 'small',
                                                          icon: i(x),
                                                          onClick: (y) => h(e, l),
                                                      },
                                                      { default: t(() => [c(' \u53D6\u6D88 ')]), _: 2 },
                                                      1032,
                                                      ['icon', 'onClick']
                                                  ),
                                              ],
                                              64
                                          ))
                                        : (a(),
                                          n(
                                              b,
                                              { key: 0 },
                                              [
                                                  u(
                                                      d,
                                                      {
                                                          type: 'primary',
                                                          size: 'small',
                                                          icon: i(B),
                                                          onClick: (y) => C(e),
                                                      },
                                                      { default: t(() => [c(' \u7F16\u8F91 ')]), _: 2 },
                                                      1032,
                                                      ['icon', 'onClick']
                                                  ),
                                                  u(
                                                      d,
                                                      {
                                                          type: 'danger',
                                                          size: 'small',
                                                          icon: i(U),
                                                          onClick: s[0] || (s[0] = () => {}),
                                                      },
                                                      { default: t(() => [c(' \u5220\u9664 ')]), _: 1 },
                                                      8,
                                                      ['icon']
                                                  ),
                                              ],
                                              64
                                          )),
                                ]),
                                _: 1,
                            },
                            8,
                            ['columns', 'tableData']
                        ),
                    ])
                );
            };
        },
    });
export { ie as default };
