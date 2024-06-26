import {
    d as y,
    c$ as w,
    Z as k,
    Q as b,
    s as d,
    o as I,
    a as x,
    e as r,
    v as e,
    w as s,
    aB as $,
    P as _,
    E as A,
    $ as D,
    y as U,
    z as h,
    d2 as q,
    A as z,
} from './index.4bf84d35.js';
import { E as L, a as M } from './el-form-item.29d7f1b9.js';
import { E as N } from './el-link.78abca44.js';
import { E as S } from './el-input.46da08c2.js';
import { E as K } from './index.ad29a086.js';
import './baseClone.2314aca7.js';
import './initCloneObject.a6314c21.js';
import './index.37e9b6e1.js';
const P = (a) => (U('data-v-29e86230'), (a = a()), h(), a),
    Q = { class: 'login-bg' },
    R = { class: 'login-container' },
    T = P(() =>
        r(
            'div',
            { class: 'login-header' },
            [
                r('img', { class: 'logo mr10', src: q, alt: '' }),
                r('div', { class: 'login-title' }, '\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF'),
            ],
            -1
        )
    ),
    Z = { class: 'login-text' },
    j = y({
        __name: 'register',
        setup(a) {
            const g = w(),
                u = k({ username: '', password: '', email: '' }),
                f = {
                    username: [{ required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D', trigger: 'blur' }],
                    password: [{ required: !0, message: '\u8BF7\u8F93\u5165\u5BC6\u7801', trigger: 'blur' }],
                    email: [{ required: !0, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1', trigger: 'blur' }],
                },
                n = b(),
                c = (l) => {
                    !l ||
                        l.validate((o) => {
                            if (o) K.success('\u6CE8\u518C\u6210\u529F\uFF0C\u8BF7\u767B\u5F55'), g.push('/login');
                            else return !1;
                        });
                };
            return (l, o) => {
                const F = d('User'),
                    p = A,
                    i = S,
                    m = L,
                    B = d('Message'),
                    E = d('Lock'),
                    v = D,
                    C = N,
                    V = M;
                return (
                    I(),
                    x('div', Q, [
                        r('div', R, [
                            T,
                            e(
                                V,
                                { model: u, rules: f, ref_key: 'register', ref: n, size: 'large' },
                                {
                                    default: s(() => [
                                        e(
                                            m,
                                            { prop: 'username' },
                                            {
                                                default: s(() => [
                                                    e(
                                                        i,
                                                        {
                                                            modelValue: u.username,
                                                            'onUpdate:modelValue':
                                                                o[0] || (o[0] = (t) => (u.username = t)),
                                                            placeholder: '\u7528\u6237\u540D',
                                                        },
                                                        {
                                                            prepend: s(() => [
                                                                e(p, null, { default: s(() => [e(F)]), _: 1 }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue']
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                        e(
                                            m,
                                            { prop: 'email' },
                                            {
                                                default: s(() => [
                                                    e(
                                                        i,
                                                        {
                                                            modelValue: u.email,
                                                            'onUpdate:modelValue':
                                                                o[1] || (o[1] = (t) => (u.email = t)),
                                                            placeholder: '\u90AE\u7BB1',
                                                        },
                                                        {
                                                            prepend: s(() => [
                                                                e(p, null, { default: s(() => [e(B)]), _: 1 }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue']
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                        e(
                                            m,
                                            { prop: 'password' },
                                            {
                                                default: s(() => [
                                                    e(
                                                        i,
                                                        {
                                                            type: 'password',
                                                            placeholder: '\u5BC6\u7801',
                                                            modelValue: u.password,
                                                            'onUpdate:modelValue':
                                                                o[2] || (o[2] = (t) => (u.password = t)),
                                                            onKeyup: o[3] || (o[3] = $((t) => c(n.value), ['enter'])),
                                                        },
                                                        {
                                                            prepend: s(() => [
                                                                e(p, null, { default: s(() => [e(E)]), _: 1 }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue']
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                        e(
                                            v,
                                            {
                                                class: 'login-btn',
                                                type: 'primary',
                                                size: 'large',
                                                onClick: o[4] || (o[4] = (t) => c(n.value)),
                                            },
                                            { default: s(() => [_('\u6CE8\u518C')]), _: 1 }
                                        ),
                                        r('p', Z, [
                                            _(' \u5DF2\u6709\u8D26\u53F7\uFF0C'),
                                            e(
                                                C,
                                                {
                                                    type: 'primary',
                                                    onClick: o[5] || (o[5] = (t) => l.$router.push('/login')),
                                                },
                                                { default: s(() => [_('\u7ACB\u5373\u767B\u5F55')]), _: 1 }
                                            ),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['model']
                            ),
                        ]),
                    ])
                );
            };
        },
    });
const oe = z(j, [['__scopeId', 'data-v-29e86230']]);
export { oe as default };
