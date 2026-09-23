/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = (t)=>t, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$h = "$lit$", $f58f44579a4747ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$n = "?" + $f58f44579a4747ac$var$o, $f58f44579a4747ac$var$r = `<${$f58f44579a4747ac$var$n}>`, $f58f44579a4747ac$var$l = document, $f58f44579a4747ac$var$c = ()=>$f58f44579a4747ac$var$l.createComment(""), $f58f44579a4747ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$u = Array.isArray, $f58f44579a4747ac$var$d = (t)=>$f58f44579a4747ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$f = "[ \t\n\f\r]", $f58f44579a4747ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$f}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$f}*=${$f58f44579a4747ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$x(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$x(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$x(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$C = new WeakMap, $f58f44579a4747ac$var$P = $f58f44579a4747ac$var$l.createTreeWalker($f58f44579a4747ac$var$l, 129);
function $f58f44579a4747ac$var$V(t, i) {
    if (!$f58f44579a4747ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $f58f44579a4747ac$var$v ? "!--" === u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[1] ? c = $f58f44579a4747ac$var$m : void 0 !== u[2] ? ($f58f44579a4747ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$p) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$p ? ">" === u[0] ? (c = n ?? $f58f44579a4747ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$p : '"' === u[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : c === $f58f44579a4747ac$var$$ || c === $f58f44579a4747ac$var$g ? c = $f58f44579a4747ac$var$p : c === $f58f44579a4747ac$var$_ || c === $f58f44579a4747ac$var$m ? c = $f58f44579a4747ac$var$v : (c = $f58f44579a4747ac$var$p, n = void 0);
        const x = c === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$v ? s + $f58f44579a4747ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $f58f44579a4747ac$var$h + s.slice(d) + $f58f44579a4747ac$var$o + x) : s + $f58f44579a4747ac$var$o + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$N(t, i);
        if (this.el = $f58f44579a4747ac$var$S.createElement(f, e), $f58f44579a4747ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$I : "?" === e[1] ? $f58f44579a4747ac$var$L : "@" === e[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $f58f44579a4747ac$var$c()), $f58f44579a4747ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $f58f44579a4747ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $f58f44579a4747ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$M(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$R {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$l).importNode(i, !0);
        $f58f44579a4747ac$var$P.currentNode = e;
        let h = $f58f44579a4747ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$P.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$P.currentNode = $f58f44579a4747ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$M(this, t, i), $f58f44579a4747ac$var$a(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$S.createElement($f58f44579a4747ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$C.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$C.set(t.strings, i = new $f58f44579a4747ac$var$S(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$k(this.O($f58f44579a4747ac$var$c()), this.O($f58f44579a4747ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $f58f44579a4747ac$var$i(t).nextSibling;
            $f58f44579a4747ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$M(this, t, i, 0), o = !$f58f44579a4747ac$var$a(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$M(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$a(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$M(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$M(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$h,
    P: $f58f44579a4747ac$var$o,
    A: $f58f44579a4747ac$var$n,
    C: 1,
    L: $f58f44579a4747ac$var$N,
    R: $f58f44579a4747ac$var$R,
    D: $f58f44579a4747ac$var$d,
    V: $f58f44579a4747ac$var$M,
    I: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$H,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$z,
    B: $f58f44579a4747ac$var$I,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$B?.($f58f44579a4747ac$var$S, $f58f44579a4747ac$var$k), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.3");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$k(i.insertBefore($f58f44579a4747ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




const $3cb55e3e7ebd776a$export$31089ea8b3e502e3 = "meteo-overview";
const $3cb55e3e7ebd776a$export$112ee299e69fdf7 = "M\xe9t\xe9o Overview";
const $3cb55e3e7ebd776a$export$ce612590f71e0c8a = "Custom card showing a weather forecast overview";
const $3cb55e3e7ebd776a$export$d5e7ce6d07daf10f = "v0.0.1";
const $3cb55e3e7ebd776a$export$6af2e7fd4d06fd68 = "ndesgranges";
const $3cb55e3e7ebd776a$export$95cbc05a9c4e98d9 = 24;
const $3cb55e3e7ebd776a$export$4c86ef3b6335a4e8 = 6;



// Colored weather-condition SVGs. Paths and CSS variables are taken verbatim
// from Home Assistant (Apache 2.0, `homeassistant/frontend/src/data/weather.ts`,
// functions `getWeatherStateSVG` / `weatherSVGStyles`) so this card shows the
// exact same icons as the built-in weather forecast card and more-info dialog.

const $82165265a895b47d$var$cloudyStates = new Set([
    "partlycloudy",
    "cloudy",
    "fog",
    "windy",
    "windy-variant",
    "hail",
    "rainy",
    "snowy",
    "snowy-rainy",
    "pouring",
    "lightning",
    "lightning-rainy"
]);
const $82165265a895b47d$var$rainStates = new Set([
    "hail",
    "rainy",
    "pouring",
    "lightning-rainy"
]);
const $82165265a895b47d$var$windyStates = new Set([
    "windy",
    "windy-variant"
]);
const $82165265a895b47d$var$snowyStates = new Set([
    "snowy",
    "snowy-rainy"
]);
const $82165265a895b47d$var$lightningStates = new Set([
    "lightning",
    "lightning-rainy"
]);
const $82165265a895b47d$export$f576d013b73a7a8b = new Set([
    "clear-night",
    "cloudy",
    "fog",
    "lightning",
    "lightning-rainy",
    "partlycloudy",
    "pouring",
    "rainy",
    "hail",
    "snowy",
    "snowy-rainy",
    "sunny",
    "windy",
    "windy-variant"
]);
function $82165265a895b47d$export$b51ebbfb1608b171(state, nightTime) {
    return (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
            ${state === "sunny" ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<path class="sun" d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"/>` : ""}
            ${state === "clear-night" ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<path class="moon" d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"/>` : ""}
            ${state === "partlycloudy" && nightTime ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<path class="moon" d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"/>` : state === "partlycloudy" ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<path class="sun" d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"/>` : ""}
            ${$82165265a895b47d$var$cloudyStates.has(state) ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path class="cloud-back" d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"/>
                <path class="cloud-front" d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"/>` : ""}
            ${$82165265a895b47d$var$rainStates.has(state) ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path class="rain" d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"/>
                <path class="rain" d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"/>
                <path class="rain" d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"/>
                <path class="rain" d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"/>` : ""}
            ${state === "pouring" ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path class="rain" d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"/>
                <path class="rain" d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"/>` : ""}
            ${$82165265a895b47d$var$windyStates.has(state) ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path class="cloud-back" d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"/>
                <path class="cloud-back" d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"/>` : ""}
            ${$82165265a895b47d$var$snowyStates.has(state) ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                <path class="snow" d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"/>
                <path class="snow" d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"/>
                <path class="snow" d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"/>` : ""}
            ${$82165265a895b47d$var$lightningStates.has(state) ? (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`<path class="sun" d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"/>` : ""}
        </svg>
    `;
}
const $82165265a895b47d$export$b1d93779c8cad3c3 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    .weather-svg .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
    .weather-svg .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
    .weather-svg .moon { fill: var(--weather-icon-moon-color, #fcf497); }
    .weather-svg .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
    .weather-svg .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
    .weather-svg .snow {
        fill: var(--weather-icon-snow-color, #f9f9f9);
        stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
        stroke-width: 1;
        paint-order: stroke;
    }
`;


const $13632afec4749c69$export$9dd6ff9ea0189349 = [
    (0, $82165265a895b47d$export$b1d93779c8cad3c3),
    (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
    :host {
        /* Themeable colors — themes can override these for custom look */
        --meteo-overview-curve-color: var(--info-color, var(--primary-color));
        --meteo-overview-precip-color: var(--info-color, var(--primary-color));
        --meteo-overview-grid-color: var(--divider-color);
    }

    ha-card {
        overflow: hidden;
    }

    .card-content {
        padding: 12px 12px 16px 12px;
    }

    .placeholder {
        padding: 32px 8px;
        text-align: center;
        color: var(--secondary-text-color);
    }

    /* --- Header --- */
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 4px 8px 12px 8px;
        cursor: pointer;
    }
    .header .location {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .header .name {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header .condition {
        font-size: 13px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header .current {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
    }
    .header .current ha-icon {
        --mdc-icon-size: 32px;
        color: var(--state-icon-color, var(--primary-text-color));
    }
    .header .current .temp {
        font-size: 24px;
        font-weight: 400;
    }

    /* --- Chart layout --- */
    .chart-wrapper {
        display: grid;
        grid-template-columns: 36px 1fr;
        grid-template-areas:
            ".      hours"
            "yaxis  chart"
            ".      precip";
        column-gap: 4px;
        row-gap: 4px;
    }

    .y-axis {
        grid-area: yaxis;
        position: relative;
        color: var(--secondary-text-color);
        font-size: 11px;
    }
    .y-label {
        position: absolute;
        right: 4px;
        transform: translateY(-50%);
        white-space: nowrap;
    }

    /* --- Hours row --- */
    .hours-row {
        grid-area: hours;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    .hour-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        font-size: 12px;
        color: var(--primary-text-color);
    }
    .hour-item .hour {
        color: var(--secondary-text-color);
    }
    .hour-item ha-icon {
        --mdc-icon-size: 22px;
        color: var(--state-icon-color, var(--primary-text-color));
    }
    .hour-item .weather-svg {
        display: inline-flex;
        line-height: 0;
    }
    .hour-item .weather-svg svg {
        width: 28px;
        height: 28px;
    }
    .hour-item .hour-temp {
        font-weight: 500;
    }

    /* --- Chart canvas --- */
    .chart-canvas {
        grid-area: chart;
        position: relative;
        width: 100%;
        height: var(--chart-height, 200px);
    }
    .chart-canvas svg {
        display: block;
        width: 100%;
        height: 100%;
    }

    .grid-h,
    .grid-v {
        stroke: var(--meteo-overview-grid-color);
        stroke-width: 1;
        stroke-dasharray: 3 3;
        vector-effect: non-scaling-stroke;
        opacity: 0.6;
    }

    .curve {
        stroke: var(--meteo-overview-curve-color);
        stroke-width: 2;
        vector-effect: non-scaling-stroke;
        opacity: 0.9;
    }

    .fill-stop-top {
        stop-color: var(--meteo-overview-curve-color);
        stop-opacity: 0.45;
    }
    .fill-stop-bottom {
        stop-color: var(--meteo-overview-curve-color);
        stop-opacity: 0;
    }

    /* --- Sun markers --- */
    .sun-marker {
        position: absolute;
        bottom: 8px;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: var(--secondary-text-color);
        pointer-events: none;
        white-space: nowrap;
    }
    .sun-marker ha-icon {
        --mdc-icon-size: 14px;
        color: var(--warning-color, var(--primary-text-color));
    }

    /* --- Peak / trough temperature markers --- */
    .temp-marker {
        position: absolute;
        font-size: 11px;
        font-weight: 500;
        color: var(--primary-text-color);
        white-space: nowrap;
        pointer-events: none;
    }
    .temp-marker.peak {
        transform: translate(-50%, calc(-100% - 4px));
    }
    .temp-marker.trough {
        transform: translate(-50%, 4px);
    }

    /* --- Rain overlay (animated vertical drops over rainy hours) --- */
    .rain-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        background: linear-gradient(
            180deg,
            rgba(0, 161, 255, 0.14),
            rgba(0, 161, 255, 0.02)
        );
    }
    .rain-overlay::before,
    .rain-overlay::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -24px;
        bottom: -24px;
        will-change: transform;
    }
    /* Front layer: denser, brighter, faster drops */
    .rain-overlay::before {
        background-image: radial-gradient(
            ellipse 0.8px 3px at 50% 50%,
            rgba(0, 161, 255, 0.9) 40%,
            transparent 70%
        );
        background-size: 8px 16px;
        animation: meteo-rain-fall-a 0.5s linear infinite;
    }
    /* Back layer: sparser, dimmer, slower drops (parallax) */
    .rain-overlay::after {
        background-image: radial-gradient(
            ellipse 0.8px 3px at 50% 50%,
            rgba(0, 161, 255, 0.55) 40%,
            transparent 70%
        );
        background-size: 14px 22px;
        background-position: 5px 0;
        animation: meteo-rain-fall-b 0.85s linear infinite;
    }
    @keyframes meteo-rain-fall-a {
        from { transform: translateY(-16px); }
        to   { transform: translateY(0); }
    }
    @keyframes meteo-rain-fall-b {
        from { transform: translateY(-22px); }
        to   { transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
        .rain-overlay::before,
        .rain-overlay::after { animation: none; }
    }
`
];


// ---- Weather condition icons ----
// Maps Home Assistant weather condition states to MDI icon names.
// See https://developers.home-assistant.io/docs/core/entity/weather/#recommended-values-for-state-and-condition
const $feccc7a5980a21d5$var$CONDITION_ICONS_DAY = {
    "clear-night": "mdi:weather-night",
    "cloudy": "mdi:weather-cloudy",
    "exceptional": "mdi:alert-circle-outline",
    "fog": "mdi:weather-fog",
    "hail": "mdi:weather-hail",
    "lightning": "mdi:weather-lightning",
    "lightning-rainy": "mdi:weather-lightning-rainy",
    "partlycloudy": "mdi:weather-partly-cloudy",
    "pouring": "mdi:weather-pouring",
    "rainy": "mdi:weather-rainy",
    "snowy": "mdi:weather-snowy",
    "snowy-rainy": "mdi:weather-snowy-rainy",
    "sunny": "mdi:weather-sunny",
    "windy": "mdi:weather-windy",
    "windy-variant": "mdi:weather-windy-variant"
};
const $feccc7a5980a21d5$var$CONDITION_ICONS_NIGHT = {
    ...$feccc7a5980a21d5$var$CONDITION_ICONS_DAY,
    "sunny": "mdi:weather-night",
    "partlycloudy": "mdi:weather-night-partly-cloudy"
};
function $feccc7a5980a21d5$export$b80313f856d781b7(condition, isNight) {
    if (!condition) return "mdi:weather-cloudy";
    const map = isNight ? $feccc7a5980a21d5$var$CONDITION_ICONS_NIGHT : $feccc7a5980a21d5$var$CONDITION_ICONS_DAY;
    return map[condition] || "mdi:weather-cloudy";
}
function $feccc7a5980a21d5$export$81754e9bd8c75c49(date, sunrise, sunset) {
    if (sunrise && sunset) {
        // Compare only time of day, wrapping across midnight
        const t = date.getHours() * 60 + date.getMinutes();
        const sr = sunrise.getHours() * 60 + sunrise.getMinutes();
        const ss = sunset.getHours() * 60 + sunset.getMinutes();
        return t < sr || t >= ss;
    }
    const h = date.getHours();
    return h < 7 || h >= 20;
}
const $feccc7a5980a21d5$var$WET_CONDITIONS = new Set([
    "rainy",
    "pouring",
    "lightning-rainy",
    "snowy-rainy",
    "hail"
]);
function $feccc7a5980a21d5$export$af46720897a99738(p) {
    if ((p.precipitation ?? 0) > 0) return true;
    if (p.condition && $feccc7a5980a21d5$var$WET_CONDITIONS.has(p.condition)) return true;
    return false;
}
function $feccc7a5980a21d5$export$28b2570330037a15(forecast) {
    const ranges = [];
    let start = -1;
    for(let i = 0; i < forecast.length; i++){
        if ($feccc7a5980a21d5$export$af46720897a99738(forecast[i])) {
            if (start === -1) start = i;
        } else if (start !== -1) {
            ranges.push([
                start,
                i - 1
            ]);
            start = -1;
        }
    }
    if (start !== -1) ranges.push([
        start,
        forecast.length - 1
    ]);
    return ranges;
}
function $feccc7a5980a21d5$export$22b6490f9676dd5(points) {
    if (points.length === 0) return "";
    if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;
    let d = `M ${points[0][0]},${points[0][1]}`;
    for(let i = 0; i < points.length - 1; i++){
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;
        const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
    }
    return d;
}
function $feccc7a5980a21d5$export$3718c2bf1de9ff8c(min, max, step = 10) {
    const roundedMin = Math.floor(min / step) * step;
    const roundedMax = Math.ceil(max / step) * step;
    // Ensure at least two ticks even if min ≈ max
    const finalMax = roundedMax === roundedMin ? roundedMin + step : roundedMax;
    const ticks = [];
    for(let t = roundedMin; t <= finalMax; t += step)ticks.push(t);
    return {
        min: roundedMin,
        max: finalMax,
        ticks: ticks
    };
}
function $feccc7a5980a21d5$export$6b862160d295c8e(value) {
    if (!value) return undefined;
    if (value instanceof Date) return value;
    const d = new Date(value);
    return isNaN(d.getTime()) ? undefined : d;
}
function $feccc7a5980a21d5$export$86a5557e1d677e29(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
}



class $a399cc6bbb0eb26a$export$7d7dcd0eedac1d1d extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.properties = {
            _forecast: {
                state: true
            },
            _hass: {
                state: true
            }
        };
    }
    static{
        this.styles = (0, $13632afec4749c69$export$9dd6ff9ea0189349);
    }
    set hass(hass) {
        this._hass = hass;
        this._ensureSubscribed();
        this.requestUpdate();
    }
    setConfig(config) {
        if (!config.entity) throw new Error("You need to define a weather entity");
        this._config = config;
        this._ensureSubscribed();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._unsubscribe();
    }
    connectedCallback() {
        super.connectedCallback();
        this._ensureSubscribed();
    }
    async _ensureSubscribed() {
        if (!this._hass?.connection || !this._config?.entity) return;
        if (this._subscribedEntity === this._config.entity && this._unsub) return;
        await this._unsubscribe();
        this._subscribedEntity = this._config.entity;
        const entityId = this._config.entity;
        this._unsub = this._hass.connection.subscribeMessage((msg)=>{
            this._forecast = msg.forecast || [];
            this.requestUpdate();
        }, {
            type: "weather/subscribe_forecast",
            forecast_type: "hourly",
            entity_id: entityId
        });
    }
    async _unsubscribe() {
        if (!this._unsub) return;
        try {
            const unsub = await this._unsub;
            await unsub();
        } catch  {
        // subscription may have failed; nothing to clean up
        }
        this._unsub = undefined;
        this._subscribedEntity = undefined;
    }
    _localizeCondition(condition) {
        if (!condition) return "";
        return this._hass?.localize(`component.weather.entity_component._.state.${condition}`) || condition;
    }
    _moreInfo() {
        this.dispatchEvent(new CustomEvent("hass-more-info", {
            bubbles: true,
            composed: true,
            detail: {
                entityId: this._config.entity
            }
        }));
    }
    _renderPlaceholder(text) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <ha-card>
            <div class="card-content">
                <div class="placeholder">${text}</div>
            </div>
        </ha-card>
        `;
    }
    render() {
        if (!this._hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        const stateObj = this._hass.states[this._config.entity];
        if (!stateObj) return this._renderPlaceholder(`Entity ${this._config.entity} not found`);
        const forecast = (this._forecast || []).slice(0, (0, $3cb55e3e7ebd776a$export$95cbc05a9c4e98d9));
        if (forecast.length < 2) return this._renderPlaceholder("Loading hourly forecast\u2026");
        // --- Y axis (temperature range) ---
        const temps = forecast.map((p)=>p.temperature).filter((t)=>typeof t === "number");
        if (temps.length < 2) return this._renderPlaceholder("No temperature data in forecast");
        const { min: yMin, max: yMax, ticks: yTicks } = (0, $feccc7a5980a21d5$export$3718c2bf1de9ff8c)(Math.min(...temps), Math.max(...temps), 10);
        // --- Chart geometry ---
        const W = 600;
        const H = 200;
        const yPad = 16;
        const yScale = (t)=>yPad + (yMax - t) / (yMax - yMin) * (H - yPad);
        const xForIndex = (i)=>(i + 0.5) * (W / forecast.length);
        const midTemp = (yMin + yMax) / 2;
        const points = forecast.map((p, i)=>[
                xForIndex(i),
                yScale(typeof p.temperature === "number" ? p.temperature : midTemp)
            ]);
        const linePath = (0, $feccc7a5980a21d5$export$22b6490f9676dd5)(points);
        const lastX = points[points.length - 1][0];
        const firstX = points[0][0];
        const areaPath = `${linePath} L ${lastX},${H} L ${firstX},${H} Z`;
        // --- Temperature extrema (for peak / trough labels) ---
        let peakIdx = -1;
        let troughIdx = -1;
        let peakT = -Infinity;
        let troughT = Infinity;
        forecast.forEach((p, i)=>{
            if (typeof p.temperature !== "number") return;
            if (p.temperature > peakT) {
                peakT = p.temperature;
                peakIdx = i;
            }
            if (p.temperature < troughT) {
                troughT = p.temperature;
                troughIdx = i;
            }
        });
        const showExtrema = peakIdx !== -1 && troughIdx !== -1 && peakIdx !== troughIdx;
        // --- Sun times ---
        const sunEntity = this._config.sun_entity ? this._hass.states[this._config.sun_entity] : undefined;
        const sunrise = (0, $feccc7a5980a21d5$export$6b862160d295c8e)(sunEntity?.attributes.next_rising);
        const sunset = (0, $feccc7a5980a21d5$export$6b862160d295c8e)(sunEntity?.attributes.next_setting);
        const t0 = (0, $feccc7a5980a21d5$export$6b862160d295c8e)(forecast[0].datetime);
        const tN = (0, $feccc7a5980a21d5$export$6b862160d295c8e)(forecast[forecast.length - 1].datetime);
        const timeToX = (d)=>{
            if (!t0 || !tN || d < t0 || d > tN) return undefined;
            const frac = (d.getTime() - t0.getTime()) / (tN.getTime() - t0.getTime());
            return firstX + frac * (lastX - firstX);
        };
        const sunriseX = sunrise ? timeToX(sunrise) : undefined;
        const sunsetX = sunset ? timeToX(sunset) : undefined;
        // Flip the trough marker above the curve when it would sit right on top
        // of a sun marker (which is anchored at the bottom of the chart)
        const NEAR_SUN_PX = 40;
        const collidesWithSun = (x)=>sunriseX !== undefined && Math.abs(x - sunriseX) < NEAR_SUN_PX || sunsetX !== undefined && Math.abs(x - sunsetX) < NEAR_SUN_PX;
        const troughFlipped = showExtrema && collidesWithSun(points[troughIdx][0]);
        // --- Hour labels (start of each group, so the first one is the closest to now) ---
        const groupSize = Math.max(1, Math.floor(forecast.length / (0, $3cb55e3e7ebd776a$export$4c86ef3b6335a4e8)));
        const labelIndices = [];
        for(let g = 0; g < (0, $3cb55e3e7ebd776a$export$4c86ef3b6335a4e8); g++)labelIndices.push(Math.min(forecast.length - 1, g * groupSize));
        // --- Precipitation ---
        const precipProbs = forecast.map((p)=>p.precipitation_probability ?? 0);
        const precipMax = Math.max(...precipProbs);
        const rainRanges = (0, $feccc7a5980a21d5$export$28b2570330037a15)(forecast);
        // --- Current conditions ---
        const now = new Date();
        const isNightNow = (0, $feccc7a5980a21d5$export$81754e9bd8c75c49)(now, sunrise, sunset);
        const currentIcon = (0, $feccc7a5980a21d5$export$b80313f856d781b7)(stateObj.state, isNightNow);
        const currentTemp = stateObj.attributes.temperature;
        const tempUnit = stateObj.attributes.temperature_unit || "\xb0";
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <ha-card>
            <div class="card-content">
                <div class="chart-wrapper">
                    <div class="y-axis">
                        ${yTicks.map((t)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                <div
                                    class="y-label"
                                    style="top: ${yScale(t) / H * 100}%"
                                >
                                    ${t}°
                                </div>
                            `)}
                    </div>
                    <div class="hours-row">
                    ${labelIndices.map((i)=>{
            const p = forecast[i];
            const d = (0, $feccc7a5980a21d5$export$6b862160d295c8e)(p.datetime);
            const night = d ? (0, $feccc7a5980a21d5$export$81754e9bd8c75c49)(d, sunrise, sunset) : false;
            const cond = p.condition;
            const useSvg = cond && (0, $82165265a895b47d$export$f576d013b73a7a8b).has(cond);
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                            <div class="hour-item">
                                <div class="hour">${d ? (0, $feccc7a5980a21d5$export$86a5557e1d677e29)(d) : ""}</div>
                                ${useSvg ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="weather-svg">${(0, $82165265a895b47d$export$b51ebbfb1608b171)(cond, night)}</span>` : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon .icon=${(0, $feccc7a5980a21d5$export$b80313f856d781b7)(cond, night)}></ha-icon>`}
                                <div class="hour-temp">
                                    ${p.temperature != null ? `${Math.round(p.temperature)}\xb0` : ""}
                                </div>
                            </div>
                        `;
        })}
                    </div>
                    <div class="chart-canvas" style="--chart-height: ${H}px">
                        <svg
                            viewBox="0 0 ${W} ${H}"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <defs>
                            <linearGradient id="tempFill-${this._config.entity}" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" class="fill-stop-top"></stop>
                            <stop offset="100%" class="fill-stop-bottom"></stop>
                            </linearGradient>
                            </defs>
                            <g class="grid">
                            ${yTicks.map((t)=>(0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                                <line
                                class="grid-h"
                                x1="0"
                                y1="${yScale(t)}"
                                x2="${W}"
                                y2="${yScale(t)}"
                                />
                                `)}
                            ${labelIndices.map((_i, g)=>{
            // Vertical gridlines sit under each hour column center, not on the data point
            const x = (g + 0.5) * W / (0, $3cb55e3e7ebd776a$export$4c86ef3b6335a4e8);
            return (0, $f58f44579a4747ac$export$7ed1367e7fa1ad68)`
                                <line
                                class="grid-v"
                                x1="${x}"
                                y1="0"
                                x2="${x}"
                                y2="${H}"
                                />
                                `;
        })}
                            </g>
                            <path
                            class="area"
                            d="${areaPath}"
                            fill="url(#tempFill-${this._config.entity})"
                            />
                            <path class="curve" d="${linePath}" fill="none" />
                        </svg>
                        ${rainRanges.map(([s, e])=>{
            const leftPct = s / forecast.length * 100;
            const widthPct = (e - s + 1) / forecast.length * 100;
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                <div
                                    class="rain-overlay"
                                    style="left: ${leftPct}%; width: ${widthPct}%"
                                ></div>
                            `;
        })}
                        ${showExtrema ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                <div
                                    class="temp-marker peak"
                                    style="left: ${points[peakIdx][0] / W * 100}%; top: ${points[peakIdx][1] / H * 100}%"
                                >
                                    ${Math.round(peakT)}°
                                </div>
                                <div
                                    class="temp-marker ${troughFlipped ? "peak" : "trough"}"
                                    style="left: ${points[troughIdx][0] / W * 100}%; top: ${points[troughIdx][1] / H * 100}%"
                                >
                                    ${Math.round(troughT)}°
                                </div>
                            ` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                        ${sunriseX !== undefined && sunrise ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                <div
                                    class="sun-marker"
                                    style="left: ${sunriseX / W * 100}%"
                                >
                                    <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                                    <span>${(0, $feccc7a5980a21d5$export$86a5557e1d677e29)(sunrise)}</span>
                                </div>
                            ` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                        ${sunsetX !== undefined && sunset ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                                <div
                                    class="sun-marker"
                                    style="left: ${sunsetX / W * 100}%"
                                >
                                    <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
                                    <span>${(0, $feccc7a5980a21d5$export$86a5557e1d677e29)(sunset)}</span>
                                </div>
                            ` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                    </div>
                </div>
            </div>
        </ha-card>
    `;
    }
    static getConfigElement() {
        return document.createElement(`${(0, $3cb55e3e7ebd776a$export$31089ea8b3e502e3)}-editor`);
    }
    static getStubConfig(hass) {
        // Pick the first available weather entity for the initial preview
        const weatherEntity = Object.keys(hass.states || {}).find((id)=>id.startsWith("weather."));
        const sunEntity = hass.states?.["sun.sun"] ? "sun.sun" : undefined;
        return {
            entity: weatherEntity || "",
            ...sunEntity ? {
                sun_entity: sunEntity
            } : {}
        };
    }
    getCardSize() {
        return 6;
    }
    getGridOptions() {
        return {
            columns: 12,
            min_columns: 6,
            max_columns: 12,
            min_rows: 4,
            max_rows: 8
        };
    }
    constructor(...args){
        super(...args), this._forecast = [];
    }
}



class $d067581fc0d59830$export$a3f8cab7a0322a73 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.schema = [
            {
                name: "entity",
                required: true,
                selector: {
                    entity: {
                        domain: "weather"
                    }
                }
            },
            {
                name: "sun_entity",
                selector: {
                    entity: {
                        domain: "sun"
                    }
                }
            }
        ];
    }
    static{
        this.properties = {
            _config: {
                state: true
            }
        };
    }
    set hass(hass) {
        this._hass = hass;
    }
    setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        if (!this._config || !this._hass) return;
        const newConfig = Object.assign({}, this._config, ev.detail.value);
        this._config = newConfig;
        const event = new CustomEvent("config-changed", {
            detail: {
                config: newConfig
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    render() {
        if (!this._hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div>Invalid</div>`;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-form
                .hass=${this._hass}
                .data=${this._config}
                .schema=${$d067581fc0d59830$export$a3f8cab7a0322a73.schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }
    constructor(...args){
        super(...args), this._computeLabel = (schema)=>{
            if (schema.name === "entity") return this._hass?.localize("ui.panel.lovelace.editor.card.generic.entity") || "Weather entity";
            if (schema.name === "sun_entity") return "Sun entity (optional, for sunrise/sunset)";
            return schema.name;
        };
    }
}



console.info(`%c \u{1F324} ${(0, $3cb55e3e7ebd776a$export$112ee299e69fdf7)} \u{1F324} %c ${(0, $3cb55e3e7ebd776a$export$d5e7ce6d07daf10f)} \n%c  By @${(0, $3cb55e3e7ebd776a$export$6af2e7fd4d06fd68)}`, "color: white; background: #03a9f4; font-weight: bold; border: solid 1px #03a9f4; border-radius: 4px 0 0 4px", "color: #03a9f4; background: white; font-weight: bold; border: solid 1px #03a9f4; border-radius:  0 4px 4px 0", "color: #03a9f4;");
customElements.define(`${(0, $3cb55e3e7ebd776a$export$31089ea8b3e502e3)}-editor`, (0, $d067581fc0d59830$export$a3f8cab7a0322a73));
customElements.define((0, $3cb55e3e7ebd776a$export$31089ea8b3e502e3), (0, $a399cc6bbb0eb26a$export$7d7dcd0eedac1d1d));
window.customCards = window.customCards || [];
window.customCards.push({
    type: (0, $3cb55e3e7ebd776a$export$31089ea8b3e502e3),
    name: (0, $3cb55e3e7ebd776a$export$112ee299e69fdf7),
    description: (0, $3cb55e3e7ebd776a$export$ce612590f71e0c8a),
    preview: true,
    documentationURL: "https://github.com/ndesgranges/meteo-overview"
});


//# sourceMappingURL=meteo-overview.js.map
