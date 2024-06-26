import {
    aL as de,
    Z as re,
    O as Se,
    c4 as xe,
    d as U,
    u as ee,
    M as G,
    h as ye,
    r as ve,
    _ as he,
    p as X,
    Q as k,
    c0 as se,
    b$ as Te,
    cn as Ae,
    E as Be,
    by as Fe,
    S as B,
    Y as ge,
    co as Ie,
    V as Ce,
    J as $e,
    K as Oe,
    s as j,
    a3 as ie,
    aq as le,
    o as E,
    a as M,
    e as oe,
    j as $,
    w,
    k as Le,
    n as L,
    aI as q,
    l as Q,
    v as T,
    g as Me,
    F as me,
    x as be,
    T as Ne,
    R as qe,
    b5 as ze,
    aY as je,
    av as z,
    i as Pe,
    a9 as Re,
    c as _e,
    b3 as He,
    t as Ve,
    f as ae,
    P,
    cp as Ue,
    $ as De,
    a0 as Ye,
} from './index.4bf84d35.js';
import { E as We, _ as Je, a as Qe } from './table-detail.vue_vue_type_script_setup_true_lang.9b44dfb4.js';
import './el-tag.a8af73f1.js';
import { T as Ze } from './table-search.829b8e04.js';
import { a as Ge } from './index.b33b1184.js';
import { T as Xe } from './table-custom.bd2543c0.js';
import { E as et } from './el-checkbox.18197270.js';
import { b as tt } from './el-select.b46d501e.js';
import { E as nt } from './index.ad29a086.js';
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
import './el-table-column.c4be16ed.js';
import './isPlainObject.9fc5cd37.js';
import './raf.70a8995c.js';
import './el-divider.6ab105fa.js';
const V = '$treeNodeId',
    ke = function (t, e) {
        !e || e[V] || Object.defineProperty(e, V, { value: t.id, enumerable: !1, configurable: !1, writable: !1 });
    },
    fe = function (t, e) {
        return t ? e[t] : e[V];
    },
    ce = (t, e, o) => {
        const a = t.value.currentNode;
        o();
        const n = t.value.currentNode;
        a !== n && e('current-change', n ? n.data : null, n);
    },
    ue = (t) => {
        let e = !0,
            o = !0,
            a = !0;
        for (let n = 0, s = t.length; n < s; n++) {
            const l = t[n];
            (l.checked !== !0 || l.indeterminate) && ((e = !1), l.disabled || (a = !1)),
                (l.checked !== !1 || l.indeterminate) && (o = !1);
        }
        return { all: e, none: o, allWithoutDisable: a, half: !e && !o };
    },
    Z = function (t) {
        if (t.childNodes.length === 0 || t.loading) return;
        const { all: e, none: o, half: a } = ue(t.childNodes);
        e
            ? ((t.checked = !0), (t.indeterminate = !1))
            : a
            ? ((t.checked = !1), (t.indeterminate = !0))
            : o && ((t.checked = !1), (t.indeterminate = !1));
        const n = t.parent;
        !n || n.level === 0 || t.store.checkStrictly || Z(n);
    },
    te = function (t, e) {
        const o = t.store.props,
            a = t.data || {},
            n = o[e];
        if (typeof n == 'function') return n(a, t);
        if (typeof n == 'string') return a[n];
        if (typeof n > 'u') {
            const s = a[e];
            return s === void 0 ? '' : s;
        }
    };
let ot = 0;
class R {
    constructor(e) {
        (this.id = ot++),
            (this.text = null),
            (this.checked = !1),
            (this.indeterminate = !1),
            (this.data = null),
            (this.expanded = !1),
            (this.parent = null),
            (this.visible = !0),
            (this.isCurrent = !1),
            (this.canFocus = !1);
        for (const o in e) de(e, o) && (this[o] = e[o]);
        (this.level = 0),
            (this.loaded = !1),
            (this.childNodes = []),
            (this.loading = !1),
            this.parent && (this.level = this.parent.level + 1);
    }
    initialize() {
        const e = this.store;
        if (!e) throw new Error('[Node]store is required!');
        e.registerNode(this);
        const o = e.props;
        if (o && typeof o.isLeaf < 'u') {
            const s = te(this, 'isLeaf');
            typeof s == 'boolean' && (this.isLeafByUser = s);
        }
        if (
            (e.lazy !== !0 && this.data
                ? (this.setData(this.data), e.defaultExpandAll && ((this.expanded = !0), (this.canFocus = !0)))
                : this.level > 0 && e.lazy && e.defaultExpandAll && this.expand(),
            Array.isArray(this.data) || ke(this, this.data),
            !this.data)
        )
            return;
        const a = e.defaultExpandedKeys,
            n = e.key;
        n && a && a.includes(this.key) && this.expand(null, e.autoExpandParent),
            n &&
                e.currentNodeKey !== void 0 &&
                this.key === e.currentNodeKey &&
                ((e.currentNode = this), (e.currentNode.isCurrent = !0)),
            e.lazy && e._initDefaultCheckedNode(this),
            this.updateLeafState(),
            this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
    }
    setData(e) {
        Array.isArray(e) || ke(this, e), (this.data = e), (this.childNodes = []);
        let o;
        this.level === 0 && Array.isArray(this.data) ? (o = this.data) : (o = te(this, 'children') || []);
        for (let a = 0, n = o.length; a < n; a++) this.insertChild({ data: o[a] });
    }
    get label() {
        return te(this, 'label');
    }
    get key() {
        const e = this.store.key;
        return this.data ? this.data[e] : null;
    }
    get disabled() {
        return te(this, 'disabled');
    }
    get nextSibling() {
        const e = this.parent;
        if (e) {
            const o = e.childNodes.indexOf(this);
            if (o > -1) return e.childNodes[o + 1];
        }
        return null;
    }
    get previousSibling() {
        const e = this.parent;
        if (e) {
            const o = e.childNodes.indexOf(this);
            if (o > -1) return o > 0 ? e.childNodes[o - 1] : null;
        }
        return null;
    }
    contains(e, o = !0) {
        return (this.childNodes || []).some((a) => a === e || (o && a.contains(e)));
    }
    remove() {
        const e = this.parent;
        e && e.removeChild(this);
    }
    insertChild(e, o, a) {
        if (!e) throw new Error('InsertChild error: child is required.');
        if (!(e instanceof R)) {
            if (!a) {
                const n = this.getChildren(!0);
                n.includes(e.data) || (typeof o > 'u' || o < 0 ? n.push(e.data) : n.splice(o, 0, e.data));
            }
            Object.assign(e, { parent: this, store: this.store }), (e = re(new R(e))), e instanceof R && e.initialize();
        }
        (e.level = this.level + 1),
            typeof o > 'u' || o < 0 ? this.childNodes.push(e) : this.childNodes.splice(o, 0, e),
            this.updateLeafState();
    }
    insertBefore(e, o) {
        let a;
        o && (a = this.childNodes.indexOf(o)), this.insertChild(e, a);
    }
    insertAfter(e, o) {
        let a;
        o && ((a = this.childNodes.indexOf(o)), a !== -1 && (a += 1)), this.insertChild(e, a);
    }
    removeChild(e) {
        const o = this.getChildren() || [],
            a = o.indexOf(e.data);
        a > -1 && o.splice(a, 1);
        const n = this.childNodes.indexOf(e);
        n > -1 && (this.store && this.store.deregisterNode(e), (e.parent = null), this.childNodes.splice(n, 1)),
            this.updateLeafState();
    }
    removeChildByData(e) {
        let o = null;
        for (let a = 0; a < this.childNodes.length; a++)
            if (this.childNodes[a].data === e) {
                o = this.childNodes[a];
                break;
            }
        o && this.removeChild(o);
    }
    expand(e, o) {
        const a = () => {
            if (o) {
                let n = this.parent;
                for (; n.level > 0; ) (n.expanded = !0), (n = n.parent);
            }
            (this.expanded = !0),
                e && e(),
                this.childNodes.forEach((n) => {
                    n.canFocus = !0;
                });
        };
        this.shouldLoadData()
            ? this.loadData((n) => {
                  Array.isArray(n) &&
                      (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || Z(this), a());
              })
            : a();
    }
    doCreateChildren(e, o = {}) {
        e.forEach((a) => {
            this.insertChild(Object.assign({ data: a }, o), void 0, !0);
        });
    }
    collapse() {
        (this.expanded = !1),
            this.childNodes.forEach((e) => {
                e.canFocus = !1;
            });
    }
    shouldLoadData() {
        return this.store.lazy === !0 && this.store.load && !this.loaded;
    }
    updateLeafState() {
        if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < 'u') {
            this.isLeaf = this.isLeafByUser;
            return;
        }
        const e = this.childNodes;
        if (!this.store.lazy || (this.store.lazy === !0 && this.loaded === !0)) {
            this.isLeaf = !e || e.length === 0;
            return;
        }
        this.isLeaf = !1;
    }
    setChecked(e, o, a, n) {
        if (((this.indeterminate = e === 'half'), (this.checked = e === !0), this.store.checkStrictly)) return;
        if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
            const { all: l, allWithoutDisable: r } = ue(this.childNodes);
            !this.isLeaf && !l && r && ((this.checked = !1), (e = !1));
            const f = () => {
                if (o) {
                    const p = this.childNodes;
                    for (let i = 0, y = p.length; i < y; i++) {
                        const g = p[i];
                        n = n || e !== !1;
                        const C = g.disabled ? g.checked : n;
                        g.setChecked(C, o, !0, n);
                    }
                    const { half: d, all: c } = ue(p);
                    c || ((this.checked = c), (this.indeterminate = d));
                }
            };
            if (this.shouldLoadData()) {
                this.loadData(
                    () => {
                        f(), Z(this);
                    },
                    { checked: e !== !1 }
                );
                return;
            } else f();
        }
        const s = this.parent;
        !s || s.level === 0 || a || Z(s);
    }
    getChildren(e = !1) {
        if (this.level === 0) return this.data;
        const o = this.data;
        if (!o) return null;
        const a = this.store.props;
        let n = 'children';
        return a && (n = a.children || 'children'), o[n] === void 0 && (o[n] = null), e && !o[n] && (o[n] = []), o[n];
    }
    updateChildren() {
        const e = this.getChildren() || [],
            o = this.childNodes.map((s) => s.data),
            a = {},
            n = [];
        e.forEach((s, l) => {
            const r = s[V];
            !!r && o.findIndex((p) => p[V] === r) >= 0 ? (a[r] = { index: l, data: s }) : n.push({ index: l, data: s });
        }),
            this.store.lazy ||
                o.forEach((s) => {
                    a[s[V]] || this.removeChildByData(s);
                }),
            n.forEach(({ index: s, data: l }) => {
                this.insertChild({ data: l }, s);
            }),
            this.updateLeafState();
    }
    loadData(e, o = {}) {
        if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(o).length)) {
            this.loading = !0;
            const a = (s) => {
                    (this.childNodes = []),
                        this.doCreateChildren(s, o),
                        (this.loaded = !0),
                        (this.loading = !1),
                        this.updateLeafState(),
                        e && e.call(this, s);
                },
                n = () => {
                    this.loading = !1;
                };
            this.store.load(this, a, n);
        } else e && e.call(this);
    }
    eachNode(e) {
        const o = [this];
        for (; o.length; ) {
            const a = o.shift();
            o.unshift(...a.childNodes), e(a);
        }
    }
    reInitChecked() {
        this.store.checkStrictly || Z(this);
    }
}
class at {
    constructor(e) {
        (this.currentNode = null), (this.currentNodeKey = null);
        for (const o in e) de(e, o) && (this[o] = e[o]);
        this.nodesMap = {};
    }
    initialize() {
        if (((this.root = new R({ data: this.data, store: this })), this.root.initialize(), this.lazy && this.load)) {
            const e = this.load;
            e(this.root, (o) => {
                this.root.doCreateChildren(o), this._initDefaultCheckedNodes();
            });
        } else this._initDefaultCheckedNodes();
    }
    filter(e) {
        const o = this.filterNodeMethod,
            a = this.lazy,
            n = function (s) {
                const l = s.root ? s.root.childNodes : s.childNodes;
                if (
                    (l.forEach((r) => {
                        (r.visible = o.call(r, e, r.data, r)), n(r);
                    }),
                    !s.visible && l.length)
                ) {
                    let r = !0;
                    (r = !l.some((f) => f.visible)), s.root ? (s.root.visible = r === !1) : (s.visible = r === !1);
                }
                !e || (s.visible && !s.isLeaf && (!a || s.loaded) && s.expand());
            };
        n(this);
    }
    setData(e) {
        e !== this.root.data ? (this.root.setData(e), this._initDefaultCheckedNodes()) : this.root.updateChildren();
    }
    getNode(e) {
        if (e instanceof R) return e;
        const o = Se(e) ? fe(this.key, e) : e;
        return this.nodesMap[o] || null;
    }
    insertBefore(e, o) {
        const a = this.getNode(o);
        a.parent.insertBefore({ data: e }, a);
    }
    insertAfter(e, o) {
        const a = this.getNode(o);
        a.parent.insertAfter({ data: e }, a);
    }
    remove(e) {
        const o = this.getNode(e);
        o && o.parent && (o === this.currentNode && (this.currentNode = null), o.parent.removeChild(o));
    }
    append(e, o) {
        const a = xe(o) ? this.root : this.getNode(o);
        a && a.insertChild({ data: e });
    }
    _initDefaultCheckedNodes() {
        const e = this.defaultCheckedKeys || [],
            o = this.nodesMap;
        e.forEach((a) => {
            const n = o[a];
            n && n.setChecked(!0, !this.checkStrictly);
        });
    }
    _initDefaultCheckedNode(e) {
        (this.defaultCheckedKeys || []).includes(e.key) && e.setChecked(!0, !this.checkStrictly);
    }
    setDefaultCheckedKey(e) {
        e !== this.defaultCheckedKeys && ((this.defaultCheckedKeys = e), this._initDefaultCheckedNodes());
    }
    registerNode(e) {
        const o = this.key;
        !e || !e.data || (o ? e.key !== void 0 && (this.nodesMap[e.key] = e) : (this.nodesMap[e.id] = e));
    }
    deregisterNode(e) {
        !this.key ||
            !e ||
            !e.data ||
            (e.childNodes.forEach((a) => {
                this.deregisterNode(a);
            }),
            delete this.nodesMap[e.key]);
    }
    getCheckedNodes(e = !1, o = !1) {
        const a = [],
            n = function (s) {
                (s.root ? s.root.childNodes : s.childNodes).forEach((r) => {
                    (r.checked || (o && r.indeterminate)) && (!e || (e && r.isLeaf)) && a.push(r.data), n(r);
                });
            };
        return n(this), a;
    }
    getCheckedKeys(e = !1) {
        return this.getCheckedNodes(e).map((o) => (o || {})[this.key]);
    }
    getHalfCheckedNodes() {
        const e = [],
            o = function (a) {
                (a.root ? a.root.childNodes : a.childNodes).forEach((s) => {
                    s.indeterminate && e.push(s.data), o(s);
                });
            };
        return o(this), e;
    }
    getHalfCheckedKeys() {
        return this.getHalfCheckedNodes().map((e) => (e || {})[this.key]);
    }
    _getAllNodes() {
        const e = [],
            o = this.nodesMap;
        for (const a in o) de(o, a) && e.push(o[a]);
        return e;
    }
    updateChildren(e, o) {
        const a = this.nodesMap[e];
        if (!a) return;
        const n = a.childNodes;
        for (let s = n.length - 1; s >= 0; s--) {
            const l = n[s];
            this.remove(l.data);
        }
        for (let s = 0, l = o.length; s < l; s++) {
            const r = o[s];
            this.append(r, a.data);
        }
    }
    _setCheckedKeys(e, o = !1, a) {
        const n = this._getAllNodes().sort((f, p) => f.level - p.level),
            s = Object.create(null),
            l = Object.keys(a);
        n.forEach((f) => f.setChecked(!1, !1));
        const r = (f) => {
            f.childNodes.forEach((p) => {
                var d;
                (s[p.data[e]] = !0), (d = p.childNodes) != null && d.length && r(p);
            });
        };
        for (let f = 0, p = n.length; f < p; f++) {
            const d = n[f],
                c = d.data[e].toString();
            if (!l.includes(c)) {
                d.checked && !s[c] && d.setChecked(!1, !1);
                continue;
            }
            if ((d.childNodes.length && r(d), d.isLeaf || this.checkStrictly)) {
                d.setChecked(!0, !1);
                continue;
            }
            if ((d.setChecked(!0, !0), o)) {
                d.setChecked(!1, !1);
                const y = function (g) {
                    g.childNodes.forEach((v) => {
                        v.isLeaf || v.setChecked(!1, !1), y(v);
                    });
                };
                y(d);
            }
        }
    }
    setCheckedNodes(e, o = !1) {
        const a = this.key,
            n = {};
        e.forEach((s) => {
            n[(s || {})[a]] = !0;
        }),
            this._setCheckedKeys(a, o, n);
    }
    setCheckedKeys(e, o = !1) {
        this.defaultCheckedKeys = e;
        const a = this.key,
            n = {};
        e.forEach((s) => {
            n[s] = !0;
        }),
            this._setCheckedKeys(a, o, n);
    }
    setDefaultExpandedKeys(e) {
        (e = e || []),
            (this.defaultExpandedKeys = e),
            e.forEach((o) => {
                const a = this.getNode(o);
                a && a.expand(null, this.autoExpandParent);
            });
    }
    setChecked(e, o, a) {
        const n = this.getNode(e);
        n && n.setChecked(!!o, a);
    }
    getCurrentNode() {
        return this.currentNode;
    }
    setCurrentNode(e) {
        const o = this.currentNode;
        o && (o.isCurrent = !1), (this.currentNode = e), (this.currentNode.isCurrent = !0);
    }
    setUserCurrentNode(e, o = !0) {
        const a = e[this.key],
            n = this.nodesMap[a];
        this.setCurrentNode(n), o && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
    }
    setCurrentNodeKey(e, o = !0) {
        if (e == null) {
            this.currentNode && (this.currentNode.isCurrent = !1), (this.currentNode = null);
            return;
        }
        const a = this.getNode(e);
        a && (this.setCurrentNode(a), o && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
    }
}
const st = U({
    name: 'ElTreeNodeContent',
    props: { node: { type: Object, required: !0 }, renderContent: Function },
    setup(t) {
        const e = ee('tree'),
            o = G('NodeInstance'),
            a = G('RootTree');
        return () => {
            const n = t.node,
                { data: s, store: l } = n;
            return t.renderContent
                ? t.renderContent(ye, { _self: o, node: n, data: s, store: l })
                : ve(a.ctx.slots, 'default', { node: n, data: s }, () => [
                      ye('span', { class: e.be('node', 'label') }, [n.label]),
                  ]);
        };
    },
});
var dt = he(st, [['__file', 'tree-node-content.vue']]);
function Ee(t) {
    const e = G('TreeNodeMap', null),
        o = {
            treeNodeExpand: (a) => {
                t.node !== a && t.node.collapse();
            },
            children: [],
        };
    return (
        e && e.children.push(o),
        X('TreeNodeMap', o),
        {
            broadcastExpanded: (a) => {
                if (!!t.accordion) for (const n of o.children) n.treeNodeExpand(a);
            },
        }
    );
}
const Ke = Symbol('dragEvents');
function rt({ props: t, ctx: e, el$: o, dropIndicator$: a, store: n }) {
    const s = ee('tree'),
        l = k({ showDropIndicator: !1, draggingNode: null, dropNode: null, allowDrop: !0, dropType: null });
    return (
        X(Ke, {
            treeNodeDragStart: ({ event: d, treeNode: c }) => {
                if (typeof t.allowDrag == 'function' && !t.allowDrag(c.node)) return d.preventDefault(), !1;
                d.dataTransfer.effectAllowed = 'move';
                try {
                    d.dataTransfer.setData('text/plain', '');
                } catch {}
                (l.value.draggingNode = c), e.emit('node-drag-start', c.node, d);
            },
            treeNodeDragOver: ({ event: d, treeNode: c }) => {
                const i = c,
                    y = l.value.dropNode;
                y && y.node.id !== i.node.id && se(y.$el, s.is('drop-inner'));
                const g = l.value.draggingNode;
                if (!g || !i) return;
                let C = !0,
                    v = !0,
                    K = !0,
                    O = !0;
                typeof t.allowDrop == 'function' &&
                    ((C = t.allowDrop(g.node, i.node, 'prev')),
                    (O = v = t.allowDrop(g.node, i.node, 'inner')),
                    (K = t.allowDrop(g.node, i.node, 'next'))),
                    (d.dataTransfer.dropEffect = v || C || K ? 'move' : 'none'),
                    (C || v || K) &&
                        (y == null ? void 0 : y.node.id) !== i.node.id &&
                        (y && e.emit('node-drag-leave', g.node, y.node, d),
                        e.emit('node-drag-enter', g.node, i.node, d)),
                    C || v || K ? (l.value.dropNode = i) : (l.value.dropNode = null),
                    i.node.nextSibling === g.node && (K = !1),
                    i.node.previousSibling === g.node && (C = !1),
                    i.node.contains(g.node, !1) && (v = !1),
                    (g.node === i.node || g.node.contains(i.node)) && ((C = !1), (v = !1), (K = !1));
                const F = i.$el.querySelector(`.${s.be('node', 'content')}`).getBoundingClientRect(),
                    I = o.value.getBoundingClientRect();
                let S;
                const _ = C ? (v ? 0.25 : K ? 0.45 : 1) : -1,
                    D = K ? (v ? 0.75 : C ? 0.55 : 0) : 1;
                let x = -9999;
                const h = d.clientY - F.top;
                h < F.height * _ ? (S = 'before') : h > F.height * D ? (S = 'after') : v ? (S = 'inner') : (S = 'none');
                const m = i.$el.querySelector(`.${s.be('node', 'expand-icon')}`).getBoundingClientRect(),
                    b = a.value;
                S === 'before' ? (x = m.top - I.top) : S === 'after' && (x = m.bottom - I.top),
                    (b.style.top = `${x}px`),
                    (b.style.left = `${m.right - I.left}px`),
                    S === 'inner' ? Te(i.$el, s.is('drop-inner')) : se(i.$el, s.is('drop-inner')),
                    (l.value.showDropIndicator = S === 'before' || S === 'after'),
                    (l.value.allowDrop = l.value.showDropIndicator || O),
                    (l.value.dropType = S),
                    e.emit('node-drag-over', g.node, i.node, d);
            },
            treeNodeDragEnd: (d) => {
                const { draggingNode: c, dropType: i, dropNode: y } = l.value;
                if ((d.preventDefault(), (d.dataTransfer.dropEffect = 'move'), c && y)) {
                    const g = { data: c.node.data };
                    i !== 'none' && c.node.remove(),
                        i === 'before'
                            ? y.node.parent.insertBefore(g, y.node)
                            : i === 'after'
                            ? y.node.parent.insertAfter(g, y.node)
                            : i === 'inner' && y.node.insertChild(g),
                        i !== 'none' &&
                            (n.value.registerNode(g),
                            n.value.key &&
                                c.node.eachNode((C) => {
                                    var v;
                                    (v = n.value.nodesMap[C.data[n.value.key]]) == null ||
                                        v.setChecked(C.checked, !n.value.checkStrictly);
                                })),
                        se(y.$el, s.is('drop-inner')),
                        e.emit('node-drag-end', c.node, y.node, i, d),
                        i !== 'none' && e.emit('node-drop', c.node, y.node, i, d);
                }
                c && !y && e.emit('node-drag-end', c.node, null, i, d),
                    (l.value.showDropIndicator = !1),
                    (l.value.draggingNode = null),
                    (l.value.dropNode = null),
                    (l.value.allowDrop = !0);
            },
        }),
        { dragState: l }
    );
}
const it = U({
        name: 'ElTreeNode',
        components: { ElCollapseTransition: Ae, ElCheckbox: et, NodeContent: dt, ElIcon: Be, Loading: Fe },
        props: {
            node: { type: R, default: () => ({}) },
            props: { type: Object, default: () => ({}) },
            accordion: Boolean,
            renderContent: Function,
            renderAfterExpand: Boolean,
            showCheckbox: { type: Boolean, default: !1 },
        },
        emits: ['node-expand'],
        setup(t, e) {
            const o = ee('tree'),
                { broadcastExpanded: a } = Ee(t),
                n = G('RootTree'),
                s = k(!1),
                l = k(!1),
                r = k(null),
                f = k(null),
                p = k(null),
                d = G(Ke),
                c = Ce();
            X('NodeInstance', c), t.node.expanded && ((s.value = !0), (l.value = !0));
            const i = n.props.props.children || 'children';
            B(
                () => {
                    const h = t.node.data[i];
                    return h && [...h];
                },
                () => {
                    t.node.updateChildren();
                }
            ),
                B(
                    () => t.node.indeterminate,
                    (h) => {
                        C(t.node.checked, h);
                    }
                ),
                B(
                    () => t.node.checked,
                    (h) => {
                        C(h, t.node.indeterminate);
                    }
                ),
                B(
                    () => t.node.childNodes.length,
                    () => t.node.reInitChecked()
                ),
                B(
                    () => t.node.expanded,
                    (h) => {
                        ge(() => (s.value = h)), h && (l.value = !0);
                    }
                );
            const y = (h) => fe(n.props.nodeKey, h.data),
                g = (h) => {
                    const m = t.props.class;
                    if (!m) return {};
                    let b;
                    if ($e(m)) {
                        const { data: Y } = h;
                        b = m(Y, h);
                    } else b = m;
                    return Oe(b) ? { [b]: !0 } : b;
                },
                C = (h, m) => {
                    (r.value !== h || f.value !== m) && n.ctx.emit('check-change', t.node.data, h, m),
                        (r.value = h),
                        (f.value = m);
                },
                v = (h) => {
                    ce(n.store, n.ctx.emit, () => n.store.value.setCurrentNode(t.node)),
                        (n.currentNode.value = t.node),
                        n.props.expandOnClickNode && O(),
                        n.props.checkOnClickNode &&
                            !t.node.disabled &&
                            F(null, { target: { checked: !t.node.checked } }),
                        n.ctx.emit('node-click', t.node.data, t.node, c, h);
                },
                K = (h) => {
                    n.instance.vnode.props.onNodeContextmenu && (h.stopPropagation(), h.preventDefault()),
                        n.ctx.emit('node-contextmenu', h, t.node.data, t.node, c);
                },
                O = () => {
                    t.node.isLeaf ||
                        (s.value
                            ? (n.ctx.emit('node-collapse', t.node.data, t.node, c), t.node.collapse())
                            : (t.node.expand(), e.emit('node-expand', t.node.data, t.node, c)));
                },
                F = (h, m) => {
                    t.node.setChecked(m.target.checked, !n.props.checkStrictly),
                        ge(() => {
                            const b = n.store.value;
                            n.ctx.emit('check', t.node.data, {
                                checkedNodes: b.getCheckedNodes(),
                                checkedKeys: b.getCheckedKeys(),
                                halfCheckedNodes: b.getHalfCheckedNodes(),
                                halfCheckedKeys: b.getHalfCheckedKeys(),
                            });
                        });
                };
            return {
                ns: o,
                node$: p,
                tree: n,
                expanded: s,
                childNodeRendered: l,
                oldChecked: r,
                oldIndeterminate: f,
                getNodeKey: y,
                getNodeClass: g,
                handleSelectChange: C,
                handleClick: v,
                handleContextMenu: K,
                handleExpandIconClick: O,
                handleCheckChange: F,
                handleChildNodeExpand: (h, m, b) => {
                    a(m), n.ctx.emit('node-expand', h, m, b);
                },
                handleDragStart: (h) => {
                    !n.props.draggable || d.treeNodeDragStart({ event: h, treeNode: t });
                },
                handleDragOver: (h) => {
                    h.preventDefault(),
                        n.props.draggable && d.treeNodeDragOver({ event: h, treeNode: { $el: p.value, node: t.node } });
                },
                handleDrop: (h) => {
                    h.preventDefault();
                },
                handleDragEnd: (h) => {
                    !n.props.draggable || d.treeNodeDragEnd(h);
                },
                CaretRight: Ie,
            };
        },
    }),
    lt = ['aria-expanded', 'aria-disabled', 'aria-checked', 'draggable', 'data-key'],
    ct = ['aria-expanded'];
function ut(t, e, o, a, n, s) {
    const l = j('el-icon'),
        r = j('el-checkbox'),
        f = j('loading'),
        p = j('node-content'),
        d = j('el-tree-node'),
        c = j('el-collapse-transition');
    return ie(
        (E(),
        M(
            'div',
            {
                ref: 'node$',
                class: L([
                    t.ns.b('node'),
                    t.ns.is('expanded', t.expanded),
                    t.ns.is('current', t.node.isCurrent),
                    t.ns.is('hidden', !t.node.visible),
                    t.ns.is('focusable', !t.node.disabled),
                    t.ns.is('checked', !t.node.disabled && t.node.checked),
                    t.getNodeClass(t.node),
                ]),
                role: 'treeitem',
                tabindex: '-1',
                'aria-expanded': t.expanded,
                'aria-disabled': t.node.disabled,
                'aria-checked': t.node.checked,
                draggable: t.tree.props.draggable,
                'data-key': t.getNodeKey(t.node),
                onClick: e[1] || (e[1] = q((...i) => t.handleClick && t.handleClick(...i), ['stop'])),
                onContextmenu: e[2] || (e[2] = (...i) => t.handleContextMenu && t.handleContextMenu(...i)),
                onDragstart: e[3] || (e[3] = q((...i) => t.handleDragStart && t.handleDragStart(...i), ['stop'])),
                onDragover: e[4] || (e[4] = q((...i) => t.handleDragOver && t.handleDragOver(...i), ['stop'])),
                onDragend: e[5] || (e[5] = q((...i) => t.handleDragEnd && t.handleDragEnd(...i), ['stop'])),
                onDrop: e[6] || (e[6] = q((...i) => t.handleDrop && t.handleDrop(...i), ['stop'])),
            },
            [
                oe(
                    'div',
                    {
                        class: L(t.ns.be('node', 'content')),
                        style: Me({ paddingLeft: (t.node.level - 1) * t.tree.props.indent + 'px' }),
                    },
                    [
                        t.tree.props.icon || t.CaretRight
                            ? (E(),
                              $(
                                  l,
                                  {
                                      key: 0,
                                      class: L([
                                          t.ns.be('node', 'expand-icon'),
                                          t.ns.is('leaf', t.node.isLeaf),
                                          { expanded: !t.node.isLeaf && t.expanded },
                                      ]),
                                      onClick: q(t.handleExpandIconClick, ['stop']),
                                  },
                                  { default: w(() => [(E(), $(Le(t.tree.props.icon || t.CaretRight)))]), _: 1 },
                                  8,
                                  ['class', 'onClick']
                              ))
                            : Q('v-if', !0),
                        t.showCheckbox
                            ? (E(),
                              $(
                                  r,
                                  {
                                      key: 1,
                                      'model-value': t.node.checked,
                                      indeterminate: t.node.indeterminate,
                                      disabled: !!t.node.disabled,
                                      onClick: e[0] || (e[0] = q(() => {}, ['stop'])),
                                      onChange: t.handleCheckChange,
                                  },
                                  null,
                                  8,
                                  ['model-value', 'indeterminate', 'disabled', 'onChange']
                              ))
                            : Q('v-if', !0),
                        t.node.loading
                            ? (E(),
                              $(
                                  l,
                                  { key: 2, class: L([t.ns.be('node', 'loading-icon'), t.ns.is('loading')]) },
                                  { default: w(() => [T(f)]), _: 1 },
                                  8,
                                  ['class']
                              ))
                            : Q('v-if', !0),
                        T(p, { node: t.node, 'render-content': t.renderContent }, null, 8, ['node', 'render-content']),
                    ],
                    6
                ),
                T(c, null, {
                    default: w(() => [
                        !t.renderAfterExpand || t.childNodeRendered
                            ? ie(
                                  (E(),
                                  M(
                                      'div',
                                      {
                                          key: 0,
                                          class: L(t.ns.be('node', 'children')),
                                          role: 'group',
                                          'aria-expanded': t.expanded,
                                      },
                                      [
                                          (E(!0),
                                          M(
                                              me,
                                              null,
                                              be(
                                                  t.node.childNodes,
                                                  (i) => (
                                                      E(),
                                                      $(
                                                          d,
                                                          {
                                                              key: t.getNodeKey(i),
                                                              'render-content': t.renderContent,
                                                              'render-after-expand': t.renderAfterExpand,
                                                              'show-checkbox': t.showCheckbox,
                                                              node: i,
                                                              accordion: t.accordion,
                                                              props: t.props,
                                                              onNodeExpand: t.handleChildNodeExpand,
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                              'render-content',
                                                              'render-after-expand',
                                                              'show-checkbox',
                                                              'node',
                                                              'accordion',
                                                              'props',
                                                              'onNodeExpand',
                                                          ]
                                                      )
                                                  )
                                              ),
                                              128
                                          )),
                                      ],
                                      10,
                                      ct
                                  )),
                                  [[le, t.expanded]]
                              )
                            : Q('v-if', !0),
                    ]),
                    _: 1,
                }),
            ],
            42,
            lt
        )),
        [[le, t.node.visible]]
    );
}
var ht = he(it, [
    ['render', ut],
    ['__file', 'tree-node.vue'],
]);
function ft({ el$: t }, e) {
    const o = ee('tree'),
        a = Ne([]),
        n = Ne([]);
    qe(() => {
        l();
    }),
        ze(() => {
            (a.value = Array.from(t.value.querySelectorAll('[role=treeitem]'))),
                (n.value = Array.from(t.value.querySelectorAll('input[type=checkbox]')));
        }),
        B(n, (r) => {
            r.forEach((f) => {
                f.setAttribute('tabindex', '-1');
            });
        }),
        je(t, 'keydown', (r) => {
            const f = r.target;
            if (!f.className.includes(o.b('node'))) return;
            const p = r.code;
            a.value = Array.from(t.value.querySelectorAll(`.${o.is('focusable')}[role=treeitem]`));
            const d = a.value.indexOf(f);
            let c;
            if ([z.up, z.down].includes(p)) {
                if ((r.preventDefault(), p === z.up)) {
                    c = d === -1 ? 0 : d !== 0 ? d - 1 : a.value.length - 1;
                    const y = c;
                    for (; !e.value.getNode(a.value[c].dataset.key).canFocus; ) {
                        if ((c--, c === y)) {
                            c = -1;
                            break;
                        }
                        c < 0 && (c = a.value.length - 1);
                    }
                } else {
                    c = d === -1 ? 0 : d < a.value.length - 1 ? d + 1 : 0;
                    const y = c;
                    for (; !e.value.getNode(a.value[c].dataset.key).canFocus; ) {
                        if ((c++, c === y)) {
                            c = -1;
                            break;
                        }
                        c >= a.value.length && (c = 0);
                    }
                }
                c !== -1 && a.value[c].focus();
            }
            [z.left, z.right].includes(p) && (r.preventDefault(), f.click());
            const i = f.querySelector('[type="checkbox"]');
            [z.enter, z.space].includes(p) && i && (r.preventDefault(), i.click());
        });
    const l = () => {
        var r;
        (a.value = Array.from(t.value.querySelectorAll(`.${o.is('focusable')}[role=treeitem]`))),
            (n.value = Array.from(t.value.querySelectorAll('input[type=checkbox]')));
        const f = t.value.querySelectorAll(`.${o.is('checked')}[role=treeitem]`);
        if (f.length) {
            f[0].setAttribute('tabindex', '0');
            return;
        }
        (r = a.value[0]) == null || r.setAttribute('tabindex', '0');
    };
}
const pt = U({
    name: 'ElTree',
    components: { ElTreeNode: ht },
    props: {
        data: { type: Array, default: () => [] },
        emptyText: { type: String },
        renderAfterExpand: { type: Boolean, default: !0 },
        nodeKey: String,
        checkStrictly: Boolean,
        defaultExpandAll: Boolean,
        expandOnClickNode: { type: Boolean, default: !0 },
        checkOnClickNode: Boolean,
        checkDescendants: { type: Boolean, default: !1 },
        autoExpandParent: { type: Boolean, default: !0 },
        defaultCheckedKeys: Array,
        defaultExpandedKeys: Array,
        currentNodeKey: [String, Number],
        renderContent: Function,
        showCheckbox: { type: Boolean, default: !1 },
        draggable: { type: Boolean, default: !1 },
        allowDrag: Function,
        allowDrop: Function,
        props: { type: Object, default: () => ({ children: 'children', label: 'label', disabled: 'disabled' }) },
        lazy: { type: Boolean, default: !1 },
        highlightCurrent: Boolean,
        load: Function,
        filterNodeMethod: Function,
        accordion: Boolean,
        indent: { type: Number, default: 18 },
        icon: { type: Pe },
    },
    emits: [
        'check-change',
        'current-change',
        'node-click',
        'node-contextmenu',
        'node-collapse',
        'node-expand',
        'check',
        'node-drag-start',
        'node-drag-end',
        'node-drop',
        'node-drag-leave',
        'node-drag-enter',
        'node-drag-over',
    ],
    setup(t, e) {
        const { t: o } = Re(),
            a = ee('tree'),
            n = k(
                new at({
                    key: t.nodeKey,
                    data: t.data,
                    lazy: t.lazy,
                    props: t.props,
                    load: t.load,
                    currentNodeKey: t.currentNodeKey,
                    checkStrictly: t.checkStrictly,
                    checkDescendants: t.checkDescendants,
                    defaultCheckedKeys: t.defaultCheckedKeys,
                    defaultExpandedKeys: t.defaultExpandedKeys,
                    autoExpandParent: t.autoExpandParent,
                    defaultExpandAll: t.defaultExpandAll,
                    filterNodeMethod: t.filterNodeMethod,
                })
            );
        n.value.initialize();
        const s = k(n.value.root),
            l = k(null),
            r = k(null),
            f = k(null),
            { broadcastExpanded: p } = Ee(t),
            { dragState: d } = rt({ props: t, ctx: e, el$: r, dropIndicator$: f, store: n });
        ft({ el$: r }, n);
        const c = _e(() => {
            const { childNodes: u } = s.value;
            return !u || u.length === 0 || u.every(({ visible: N }) => !N);
        });
        B(
            () => t.currentNodeKey,
            (u) => {
                n.value.setCurrentNodeKey(u);
            }
        ),
            B(
                () => t.defaultCheckedKeys,
                (u) => {
                    n.value.setDefaultCheckedKey(u);
                }
            ),
            B(
                () => t.defaultExpandedKeys,
                (u) => {
                    n.value.setDefaultExpandedKeys(u);
                }
            ),
            B(
                () => t.data,
                (u) => {
                    n.value.setData(u);
                },
                { deep: !0 }
            ),
            B(
                () => t.checkStrictly,
                (u) => {
                    n.value.checkStrictly = u;
                }
            );
        const i = (u) => {
                if (!t.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
                n.value.filter(u);
            },
            y = (u) => fe(t.nodeKey, u.data),
            g = (u) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
                const N = n.value.getNode(u);
                if (!N) return [];
                const H = [N.data];
                let J = N.parent;
                for (; J && J !== s.value; ) H.push(J.data), (J = J.parent);
                return H.reverse();
            },
            C = (u, N) => n.value.getCheckedNodes(u, N),
            v = (u) => n.value.getCheckedKeys(u),
            K = () => {
                const u = n.value.getCurrentNode();
                return u ? u.data : null;
            },
            O = () => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
                const u = K();
                return u ? u[t.nodeKey] : null;
            },
            F = (u, N) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
                n.value.setCheckedNodes(u, N);
            },
            I = (u, N) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
                n.value.setCheckedKeys(u, N);
            },
            S = (u, N, H) => {
                n.value.setChecked(u, N, H);
            },
            _ = () => n.value.getHalfCheckedNodes(),
            D = () => n.value.getHalfCheckedKeys(),
            x = (u, N = !0) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
                ce(n, e.emit, () => n.value.setUserCurrentNode(u, N));
            },
            h = (u, N = !0) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
                ce(n, e.emit, () => n.value.setCurrentNodeKey(u, N));
            },
            m = (u) => n.value.getNode(u),
            b = (u) => {
                n.value.remove(u);
            },
            Y = (u, N) => {
                n.value.append(u, N);
            },
            W = (u, N) => {
                n.value.insertBefore(u, N);
            },
            A = (u, N) => {
                n.value.insertAfter(u, N);
            },
            pe = (u, N, H) => {
                p(N), e.emit('node-expand', u, N, H);
            },
            we = (u, N) => {
                if (!t.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
                n.value.updateChildren(u, N);
            };
        return (
            X('RootTree', { ctx: e, props: t, store: n, root: s, currentNode: l, instance: Ce() }),
            X(He, void 0),
            {
                ns: a,
                store: n,
                root: s,
                currentNode: l,
                dragState: d,
                el$: r,
                dropIndicator$: f,
                isEmpty: c,
                filter: i,
                getNodeKey: y,
                getNodePath: g,
                getCheckedNodes: C,
                getCheckedKeys: v,
                getCurrentNode: K,
                getCurrentKey: O,
                setCheckedNodes: F,
                setCheckedKeys: I,
                setChecked: S,
                getHalfCheckedNodes: _,
                getHalfCheckedKeys: D,
                setCurrentNode: x,
                setCurrentKey: h,
                t: o,
                getNode: m,
                remove: b,
                append: Y,
                insertBefore: W,
                insertAfter: A,
                handleNodeExpand: pe,
                updateKeyChildren: we,
            }
        );
    },
});
function yt(t, e, o, a, n, s) {
    const l = j('el-tree-node');
    return (
        E(),
        M(
            'div',
            {
                ref: 'el$',
                class: L([
                    t.ns.b(),
                    t.ns.is('dragging', !!t.dragState.draggingNode),
                    t.ns.is('drop-not-allow', !t.dragState.allowDrop),
                    t.ns.is('drop-inner', t.dragState.dropType === 'inner'),
                    { [t.ns.m('highlight-current')]: t.highlightCurrent },
                ]),
                role: 'tree',
            },
            [
                (E(!0),
                M(
                    me,
                    null,
                    be(
                        t.root.childNodes,
                        (r) => (
                            E(),
                            $(
                                l,
                                {
                                    key: t.getNodeKey(r),
                                    node: r,
                                    props: t.props,
                                    accordion: t.accordion,
                                    'render-after-expand': t.renderAfterExpand,
                                    'show-checkbox': t.showCheckbox,
                                    'render-content': t.renderContent,
                                    onNodeExpand: t.handleNodeExpand,
                                },
                                null,
                                8,
                                [
                                    'node',
                                    'props',
                                    'accordion',
                                    'render-after-expand',
                                    'show-checkbox',
                                    'render-content',
                                    'onNodeExpand',
                                ]
                            )
                        )
                    ),
                    128
                )),
                t.isEmpty
                    ? (E(),
                      M(
                          'div',
                          { key: 0, class: L(t.ns.e('empty-block')) },
                          [
                              ve(t.$slots, 'empty', {}, () => {
                                  var r;
                                  return [
                                      oe(
                                          'span',
                                          { class: L(t.ns.e('empty-text')) },
                                          Ve((r = t.emptyText) != null ? r : t.t('el.tree.emptyText')),
                                          3
                                      ),
                                  ];
                              }),
                          ],
                          2
                      ))
                    : Q('v-if', !0),
                ie(oe('div', { ref: 'dropIndicator$', class: L(t.ns.e('drop-indicator')) }, null, 2), [
                    [le, t.dragState.showDropIndicator],
                ]),
            ],
            2
        )
    );
}
var ne = he(pt, [
    ['render', yt],
    ['__file', 'tree.vue'],
]);
ne.install = (t) => {
    t.component(ne.name, ne);
};
const gt = ne,
    Nt = gt,
    kt = U({
        __name: 'role-permission',
        props: { permissOptions: { type: Object, required: !0 } },
        setup(t) {
            const e = t,
                o = k({}),
                a = (p) =>
                    p.map((d) => {
                        const c = { id: d.id, label: d.title };
                        return (
                            d.children && ((o.value[d.id] = d.children.map((i) => i.id)), (c.children = a(d.children))),
                            c
                        );
                    }),
                n = a(Ue),
                l = k(
                    ((p) => p.filter((d) => !o.value[d] || p.toString().includes(o.value[d].toString())))(
                        e.permissOptions.permiss
                    )
                ),
                r = k(),
                f = () => {
                    const p = [...r.value.getCheckedKeys(!1), ...r.value.getHalfCheckedKeys()];
                    console.log(p);
                };
            return (p, d) => {
                const c = De;
                return (
                    E(),
                    M('div', null, [
                        T(
                            ae(Nt),
                            {
                                class: 'mgb10',
                                ref_key: 'tree',
                                ref: r,
                                data: ae(n),
                                'node-key': 'id',
                                'default-expand-all': '',
                                'show-checkbox': '',
                                'default-checked-keys': l.value,
                            },
                            null,
                            8,
                            ['data', 'default-checked-keys']
                        ),
                        T(
                            c,
                            { type: 'primary', onClick: f },
                            { default: w(() => [P('\u4FDD\u5B58\u6743\u9650')]), _: 1 }
                        ),
                    ])
                );
            };
        },
    }),
    vt = { class: 'container' },
    Ct = U({ name: 'system-role' }),
    Zt = U({
        ...Ct,
        setup(t) {
            const e = re({ name: '' }),
                o = k([{ type: 'input', label: '\u89D2\u8272\u540D\u79F0\uFF1A', prop: 'name' }]),
                a = () => {
                    f(1);
                };
            let n = k([
                { type: 'index', label: '\u5E8F\u53F7', width: 55, align: 'center' },
                { prop: 'name', label: '\u89D2\u8272\u540D\u79F0' },
                { prop: 'key', label: '\u89D2\u8272\u6807\u8BC6' },
                { prop: 'status', label: '\u72B6\u6001' },
                { prop: 'permissions', label: '\u6743\u9650\u7BA1\u7406' },
                { prop: 'operator', label: '\u64CD\u4F5C', width: 250 },
            ]);
            const s = re({ index: 1, size: 10, total: 0 }),
                l = k([]),
                r = async () => {
                    const D = await Ge();
                    (l.value = D.data.list), (s.total = D.data.pageTotal);
                };
            r();
            const f = (D) => {
                    (s.index = D), r();
                },
                p = k({
                    labelWidth: '100px',
                    span: 24,
                    list: [
                        { type: 'input', label: '\u89D2\u8272\u540D\u79F0', prop: 'name', required: !0 },
                        { type: 'input', label: '\u89D2\u8272\u6807\u8BC6', prop: 'key', required: !0 },
                        {
                            type: 'switch',
                            label: '\u72B6\u6001',
                            prop: 'status',
                            required: !1,
                            activeText: '\u542F\u7528',
                            inactiveText: '\u7981\u7528',
                        },
                    ],
                }),
                d = k(!1),
                c = k(!1),
                i = k({}),
                y = (D) => {
                    (i.value = { ...D }), (c.value = !0), (d.value = !0);
                },
                g = () => {
                    C(), r();
                },
                C = () => {
                    (d.value = !1), (c.value = !1), (i.value = {});
                },
                v = k(!1),
                K = k({ row: {}, list: [], column: 1 }),
                O = (D) => {
                    (K.value.row = { ...D }),
                        (K.value.list = [
                            { prop: 'id', label: '\u89D2\u8272ID' },
                            { prop: 'name', label: '\u89D2\u8272\u540D\u79F0' },
                            { prop: 'key', label: '\u89D2\u8272\u6807\u8BC6' },
                            { prop: 'status', label: '\u89D2\u8272\u72B6\u6001' },
                        ]),
                        (v.value = !0);
                },
                F = (D) => {
                    nt.success('\u5220\u9664\u6210\u529F');
                },
                I = k(!1),
                S = k({}),
                _ = (D) => {
                    (I.value = !0), (S.value = { id: D.id, permiss: D.permiss });
                };
            return (D, x) => {
                const h = Ze,
                    m = De,
                    b = tt,
                    Y = Qe,
                    W = We;
                return (
                    E(),
                    M('div', null, [
                        T(h, { query: e, options: o.value, search: a }, null, 8, ['query', 'options']),
                        oe('div', vt, [
                            T(
                                Xe,
                                {
                                    columns: ae(n),
                                    tableData: l.value,
                                    total: s.total,
                                    viewFunc: O,
                                    delFunc: F,
                                    'page-change': f,
                                    editFunc: y,
                                },
                                {
                                    toolbarBtn: w(() => [
                                        T(
                                            m,
                                            {
                                                type: 'warning',
                                                icon: ae(Ye),
                                                onClick: x[0] || (x[0] = (A) => (d.value = !0)),
                                            },
                                            { default: w(() => [P('\u65B0\u589E')]), _: 1 },
                                            8,
                                            ['icon']
                                        ),
                                    ]),
                                    status: w(({ rows: A }) => [
                                        A.status
                                            ? (E(),
                                              $(
                                                  b,
                                                  { key: 0, type: 'success' },
                                                  { default: w(() => [P('\u542F\u7528')]), _: 1 }
                                              ))
                                            : (E(),
                                              $(
                                                  b,
                                                  { key: 1, type: 'danger' },
                                                  { default: w(() => [P('\u7981\u7528')]), _: 1 }
                                              )),
                                    ]),
                                    permissions: w(({ rows: A }) => [
                                        T(
                                            m,
                                            { type: 'primary', size: 'small', plain: '', onClick: (pe) => _(A) },
                                            { default: w(() => [P('\u7BA1\u7406')]), _: 2 },
                                            1032,
                                            ['onClick']
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['columns', 'tableData', 'total']
                            ),
                        ]),
                        T(
                            W,
                            {
                                title: c.value ? '\u7F16\u8F91' : '\u65B0\u589E',
                                modelValue: d.value,
                                'onUpdate:modelValue': x[1] || (x[1] = (A) => (d.value = A)),
                                width: '700px',
                                'destroy-on-close': '',
                                'close-on-click-modal': !1,
                                onClose: C,
                            },
                            {
                                default: w(() => [
                                    T(
                                        Y,
                                        { 'form-data': i.value, options: p.value, edit: c.value, update: g },
                                        null,
                                        8,
                                        ['form-data', 'options', 'edit']
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['title', 'modelValue']
                        ),
                        T(
                            W,
                            {
                                title: '\u67E5\u770B\u8BE6\u60C5',
                                modelValue: v.value,
                                'onUpdate:modelValue': x[2] || (x[2] = (A) => (v.value = A)),
                                width: '700px',
                                'destroy-on-close': '',
                            },
                            {
                                default: w(() => [
                                    T(
                                        Je,
                                        { data: K.value },
                                        {
                                            status: w(({ rows: A }) => [
                                                A.status
                                                    ? (E(),
                                                      $(
                                                          b,
                                                          { key: 0, type: 'success' },
                                                          { default: w(() => [P('\u542F\u7528')]), _: 1 }
                                                      ))
                                                    : (E(),
                                                      $(
                                                          b,
                                                          { key: 1, type: 'danger' },
                                                          { default: w(() => [P('\u7981\u7528')]), _: 1 }
                                                      )),
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
                        T(
                            W,
                            {
                                title: '\u6743\u9650\u7BA1\u7406',
                                modelValue: I.value,
                                'onUpdate:modelValue': x[3] || (x[3] = (A) => (I.value = A)),
                                width: '500px',
                                'destroy-on-close': '',
                            },
                            {
                                default: w(() => [T(kt, { 'permiss-options': S.value }, null, 8, ['permiss-options'])]),
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
export { Zt as default };
