import {
    d as r,
    s as n,
    o as m,
    a as E,
    v as s,
    w as a,
    e as o,
    P as u,
    E as F,
    y as h,
    z as v,
    A as B,
} from './index.4bf84d35.js';
import { E as f } from './el-upload.b8718f13.js';
import './el-progress.5478047e.js';
import './cloneDeep.256bb9de.js';
import './baseClone.2314aca7.js';
import './initCloneObject.a6314c21.js';
import './isEqual.cb5dbe60.js';
const e = (t) => (h('data-v-b95331dd'), (t = t()), v(), t),
    A = { class: 'container' },
    C = e(() => o('div', { class: 'content-title' }, '\u652F\u6301\u62D6\u62FD', -1)),
    g = e(() =>
        o(
            'div',
            { class: 'plugins-tips' },
            [
                u(' Element Plus\u81EA\u5E26\u4E0A\u4F20\u7EC4\u4EF6\u3002 \u8BBF\u95EE\u5730\u5740\uFF1A '),
                o(
                    'a',
                    { href: 'https://element-plus.org/zh-CN/component/upload.html', target: '_blank' },
                    'Element Plus Upload'
                ),
            ],
            -1
        )
    ),
    x = e(() =>
        o(
            'div',
            { class: 'el-upload__text' },
            [u(' \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 '), o('em', null, '\u70B9\u51FB\u4E0A\u4F20')],
            -1
        )
    ),
    b = e(() => o('div', { class: 'content-title' }, '\u652F\u6301\u88C1\u526A', -1)),
    k = { class: 'plugins-tips' },
    y = e(() => o('a', { href: 'https://github.com/xyxiao001/vue-cropper', target: '_blank' }, 'vue-cropper', -1)),
    D = r({
        __name: 'upload',
        setup(t) {
            const c = (l) => {
                console.log(l);
            };
            return (l, I) => {
                const p = n('upload-filled'),
                    d = F,
                    _ = f,
                    i = n('router-link');
                return (
                    m(),
                    E('div', A, [
                        C,
                        g,
                        s(
                            _,
                            {
                                class: 'upload-demo',
                                drag: '',
                                action: 'http://jsonplaceholder.typicode.com/api/posts/',
                                multiple: '',
                                'on-change': c,
                            },
                            {
                                default: a(() => [
                                    s(d, { class: 'el-icon--upload' }, { default: a(() => [s(p)]), _: 1 }),
                                    x,
                                ]),
                                _: 1,
                            }
                        ),
                        b,
                        o('div', k, [
                            u(
                                ' vue-cropper\uFF1A\u4E00\u4E2A\u7B80\u5355\u7684vue\u56FE\u7247\u88C1\u526A\u63D2\u4EF6\u3002 \u8BBF\u95EE\u5730\u5740\uFF1A '
                            ),
                            y,
                            u('\u3002 \u793A\u4F8B\u8BF7\u67E5\u770B '),
                            s(
                                i,
                                { to: '/ucenter' },
                                { default: a(() => [u('\u4E2A\u4EBA\u4E2D\u5FC3-\u6211\u7684\u5934\u50CF')]), _: 1 }
                            ),
                        ]),
                    ])
                );
            };
        },
    });
const j = B(D, [['__scopeId', 'data-v-b95331dd']]);
export { j as default };
