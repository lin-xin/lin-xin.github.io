import { bI as c, ch as n } from './index.4bf84d35.js';
import { q as a } from './initCloneObject.a6314c21.js';
var i = '[object Object]',
    s = Function.prototype,
    p = Object.prototype,
    e = s.toString,
    b = p.hasOwnProperty,
    f = e.call(Object);
function l(r) {
    if (!c(r) || n(r) != i) return !1;
    var o = a(r);
    if (o === null) return !0;
    var t = b.call(o, 'constructor') && o.constructor;
    return typeof t == 'function' && t instanceof t && e.call(t) == f;
}
export { l as i };
