"use strict";(self.webpackChunkqa_portal=self.webpackChunkqa_portal||[]).push([[297],{4297:()=>{function t(){}function n(n){return null==n?t:function(){return this.querySelector(n)}}function e(){return[]}function r(t){return null==t?e:function(){return this.querySelectorAll(t)}}function i(t){return function(){return null==(n=t.apply(this,arguments))?[]:Array.isArray(n)?n:Array.from(n);var n}}function o(t){return function(){return this.matches(t)}}function a(t){return function(n){return n.matches(t)}}var u=Array.prototype.find;function s(){return this.firstElementChild}var c=Array.prototype.filter;function l(){return Array.from(this.children)}function h(t){return new Array(t.length)}function f(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function p(t,n,e,r,i,o){for(var a,u=0,s=n.length,c=o.length;u<c;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new f(t,o[u]);for(;u<s;++u)(a=n[u])&&(i[u]=a)}function d(t,n,e,r,i,o,a){var u,s,c,l=new Map,h=n.length,p=o.length,d=new Array(h);for(u=0;u<h;++u)(s=n[u])&&(d[u]=c=a.call(s,s.__data__,u,n)+"",l.has(c)?i[u]=s:l.set(c,s));for(u=0;u<p;++u)c=a.call(t,o[u],u,o)+"",(s=l.get(c))?(r[u]=s,s.__data__=o[u],l.delete(c)):e[u]=new f(t,o[u]);for(u=0;u<h;++u)(s=n[u])&&l.get(d[u])===s&&(i[u]=s)}function y(t){return t.__data__}function v(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}function _(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}f.prototype={constructor:f,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var g="http://www.w3.org/1999/xhtml";const w={svg:"http://www.w3.org/2000/svg",xhtml:g,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function m(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),w.hasOwnProperty(n)?{space:w[n],local:t}:t}function b(t){return function(){this.removeAttribute(t)}}function x(t){return function(){this.removeAttributeNS(t.space,t.local)}}function k(t,n){return function(){this.setAttribute(t,n)}}function A(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function N(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function E(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function M(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function S(t){return function(){this.style.removeProperty(t)}}function C(t,n,e){return function(){this.style.setProperty(t,n,e)}}function q(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function X(t,n){return t.style.getPropertyValue(n)||M(t).getComputedStyle(t,null).getPropertyValue(n)}function P(t){return function(){delete this[t]}}function O(t,n){return function(){this[t]=n}}function T(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function R(t){return t.trim().split(/^|\s+/)}function H(t){return t.classList||new I(t)}function I(t){this._node=t,this._names=R(t.getAttribute("class")||"")}function Y(t,n){for(var e=H(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function j(t,n){for(var e=H(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function L(t){return function(){Y(this,t)}}function D(t){return function(){j(this,t)}}function B(t,n){return function(){(n.apply(this,arguments)?Y:j)(this,t)}}function $(){this.textContent=""}function V(t){return function(){this.textContent=t}}function z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function U(){this.innerHTML=""}function F(t){return function(){this.innerHTML=t}}function K(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function W(){this.nextSibling&&this.parentNode.appendChild(this)}function G(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function J(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===g&&n.documentElement.namespaceURI===g?n.createElement(t):n.createElementNS(e,t)}}function Q(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Z(t){var n=m(t);return(n.local?Q:J)(n)}function tt(){return null}function nt(){var t=this.parentNode;t&&t.removeChild(this)}function et(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function rt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function it(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function ot(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function at(t,n,e){var r=M(t),i=r.CustomEvent;"function"===typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ut(t,n){return function(){return at(this,t,n)}}function st(t,n){return function(){return at(this,t,n.apply(this,arguments))}}I.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ct=[null];function lt(t,n){this._groups=t,this._parents=n}function ht(){return new lt([[document.documentElement]],ct)}lt.prototype=ht.prototype={constructor:lt,select:function(t){"function"!==typeof t&&(t=n(t));for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var a,u,s=e[o],c=s.length,l=i[o]=new Array(c),h=0;h<c;++h)(a=s[h])&&(u=t.call(a,a.__data__,h,s))&&("__data__"in a&&(u.__data__=a.__data__),l[h]=u);return new lt(i,this._parents)},selectAll:function(t){t="function"===typeof t?i(t):r(t);for(var n=this._groups,e=n.length,o=[],a=[],u=0;u<e;++u)for(var s,c=n[u],l=c.length,h=0;h<l;++h)(s=c[h])&&(o.push(t.call(s,s.__data__,h,c)),a.push(s));return new lt(o,a)},selectChild:function(t){return this.select(null==t?s:function(t){return function(){return u.call(this.children,t)}}("function"===typeof t?t:a(t)))},selectChildren:function(t){return this.selectAll(null==t?l:function(t){return function(){return c.call(this.children,t)}}("function"===typeof t?t:a(t)))},filter:function(t){"function"!==typeof t&&(t=o(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,u=n[i],s=u.length,c=r[i]=[],l=0;l<s;++l)(a=u[l])&&t.call(a,a.__data__,l,u)&&c.push(a);return new lt(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,y);var e,r=n?d:p,i=this._parents,o=this._groups;"function"!==typeof t&&(e=t,t=function(){return e});for(var a=o.length,u=new Array(a),s=new Array(a),c=new Array(a),l=0;l<a;++l){var h=i[l],f=o[l],_=f.length,g=v(t.call(h,h&&h.__data__,l,i)),w=g.length,m=s[l]=new Array(w),b=u[l]=new Array(w);r(h,f,m,b,c[l]=new Array(_),g,n);for(var x,k,A=0,N=0;A<w;++A)if(x=m[A]){for(A>=N&&(N=A+1);!(k=b[N])&&++N<w;);x._next=k||null}}return(u=new lt(u,i))._enter=s,u._exit=c,u},enter:function(){return new lt(this._enter||this._groups.map(h),this._parents)},exit:function(){return new lt(this._exit||this._groups.map(h),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"===typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,a=Math.min(i,o),u=new Array(i),s=0;s<a;++s)for(var c,l=e[s],h=r[s],f=l.length,p=u[s]=new Array(f),d=0;d<f;++d)(c=l[d]||h[d])&&(p[d]=c);for(;s<i;++s)u[s]=e[s];return new lt(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=_);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,c=i[o]=new Array(s),l=0;l<s;++l)(a=u[l])&&(c[l]=a);c.sort(n)}return new lt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=m(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?x:b:"function"===typeof n?e.local?E:N:e.local?A:k)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?S:"function"===typeof n?q:C)(t,n,null==e?"":e)):X(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?P:"function"===typeof n?T:O)(t,n)):this.node()[t]},classed:function(t,n){var e=R(t+"");if(arguments.length<2){for(var r=H(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"===typeof n?B:n?L:D)(e,n))},text:function(t){return arguments.length?this.each(null==t?$:("function"===typeof t?z:V)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?U:("function"===typeof t?K:F)(t)):this.node().innerHTML},raise:function(){return this.each(W)},lower:function(){return this.each(G)},append:function(t){var n="function"===typeof t?t:Z(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,e){var r="function"===typeof t?t:Z(t),i=null==e?tt:"function"===typeof e?e:n(e);return this.select((function(){return this.insertBefore(r.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(nt)},clone:function(t){return this.select(t?rt:et)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?ot:it,r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var s,c=0,l=u.length;c<l;++c)for(r=0,s=u[c];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"===typeof n?st:ut)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};const ft=ht;var pt={value:()=>{}};function dt(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new yt(r)}function yt(t){this._=t}function vt(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function _t(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=pt,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}yt.prototype=dt.prototype={constructor:yt,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))),a=-1,u=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!==typeof n)throw new Error("invalid callback: "+n);for(;++a<u;)if(e=(t=o[a]).type)i[e]=_t(i[e],t.name,n);else if(null==n)for(e in i)i[e]=_t(i[e],t.name,null);return this}for(;++a<u;)if((e=(t=o[a]).type)&&(e=vt(i[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new yt(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};const gt=dt;var wt,mt,bt=0,xt=0,kt=0,At=1e3,Nt=0,Et=0,Mt=0,St="object"===typeof performance&&performance.now?performance:Date,Ct="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function qt(){return Et||(Ct(Xt),Et=St.now()+Mt)}function Xt(){Et=0}function Pt(){this._call=this._time=this._next=null}function Ot(t,n,e){var r=new Pt;return r.restart(t,n,e),r}function Tt(){Et=(Nt=St.now())+Mt,bt=xt=0;try{!function(){qt(),++bt;for(var t,n=wt;n;)(t=Et-n._time)>=0&&n._call.call(void 0,t),n=n._next;--bt}()}finally{bt=0,function(){var t,n,e=wt,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:wt=n);mt=t,Ht(r)}(),Et=0}}function Rt(){var t=St.now(),n=t-Nt;n>At&&(Mt-=n,Nt=t)}function Ht(t){bt||(xt&&(xt=clearTimeout(xt)),t-Et>24?(t<1/0&&(xt=setTimeout(Tt,t-St.now()-Mt)),kt&&(kt=clearInterval(kt))):(kt||(Nt=St.now(),kt=setInterval(Rt,At)),bt=1,Ct(Tt)))}function It(t,n,e){var r=new Pt;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}Pt.prototype=Ot.prototype={constructor:Pt,restart:function(t,n,e){if("function"!==typeof t)throw new TypeError("callback is not a function");e=(null==e?qt():+e)+(null==n?0:+n),this._next||mt===this||(mt?mt._next=this:wt=this,mt=this),this._call=t,this._time=e,Ht()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ht())}};var Yt=gt("start","end","cancel","interrupt"),jt=[],Lt=0,Dt=1,Bt=2,$t=3,Vt=4,zt=5,Ut=6;function Ft(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(t){e.state=Dt,e.timer.restart(a,e.delay,e.time),e.delay<=t&&a(t-e.delay)}function a(o){var c,l,h,f;if(e.state!==Dt)return s();for(c in i)if((f=i[c]).name===e.name){if(f.state===$t)return It(a);f.state===Vt?(f.state=Ut,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[c]):+c<n&&(f.state=Ut,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[c])}if(It((function(){e.state===$t&&(e.state=Vt,e.timer.restart(u,e.delay,e.time),u(o))})),e.state=Bt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Bt){for(e.state=$t,r=new Array(h=e.tween.length),c=0,l=-1;c<h;++c)(f=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=f);r.length=l+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(s),e.state=zt,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===zt&&(e.on.call("end",t,t.__data__,e.index,e.group),s())}function s(){for(var r in e.state=Ut,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=Ot(o,0,e.time)}(t,e,{name:n,index:r,group:i,on:Yt,tween:jt,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Lt})}function Kt(t,n){var e=Gt(t,n);if(e.state>Lt)throw new Error("too late; already scheduled");return e}function Wt(t,n){var e=Gt(t,n);if(e.state>$t)throw new Error("too late; already running");return e}function Gt(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Jt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var Qt,Zt=180/Math.PI,tn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function nn(t,n,e,r,i,o){var a,u,s;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Zt,skewX:Math.atan(s)*Zt,scaleX:a,scaleY:u}}function en(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e);u.push({i:s-4,x:Jt(t,i)},{i:s-2,x:Jt(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Jt(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Jt(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:Jt(t,e)},{i:u-2,x:Jt(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t);return u.join("")}}}var rn=en((function(t){const n=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?tn:nn(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),on=en((function(t){return null==t?tn:(Qt||(Qt=document.createElementNS("http://www.w3.org/2000/svg","g")),Qt.setAttribute("transform",t),(t=Qt.transform.baseVal.consolidate())?nn((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):tn)}),", ",")",")");function an(t,n){var e,r;return function(){var i=Wt(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}function un(t,n,e){var r,i;if("function"!==typeof e)throw new Error;return function(){var o=Wt(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=u;break}s===c&&i.push(u)}o.tween=i}}function sn(t,n,e){var r=t._id;return t.each((function(){var t=Wt(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Gt(t,r).value[n]}}function cn(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function ln(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function hn(){}var fn=.7,pn=1/fn,dn="\\s*([+-]?\\d+)\\s*",yn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",vn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_n=/^#([0-9a-f]{3,8})$/,gn=new RegExp("^rgb\\(".concat(dn,",").concat(dn,",").concat(dn,"\\)$")),wn=new RegExp("^rgb\\(".concat(vn,",").concat(vn,",").concat(vn,"\\)$")),mn=new RegExp("^rgba\\(".concat(dn,",").concat(dn,",").concat(dn,",").concat(yn,"\\)$")),bn=new RegExp("^rgba\\(".concat(vn,",").concat(vn,",").concat(vn,",").concat(yn,"\\)$")),xn=new RegExp("^hsl\\(".concat(yn,",").concat(vn,",").concat(vn,"\\)$")),kn=new RegExp("^hsla\\(".concat(yn,",").concat(vn,",").concat(vn,",").concat(yn,"\\)$")),An={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Nn(){return this.rgb().formatHex()}function En(){return this.rgb().formatRgb()}function Mn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=_n.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Sn(n):3===e?new Xn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?Cn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?Cn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=gn.exec(t))?new Xn(n[1],n[2],n[3],1):(n=wn.exec(t))?new Xn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=mn.exec(t))?Cn(n[1],n[2],n[3],n[4]):(n=bn.exec(t))?Cn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=xn.exec(t))?In(n[1],n[2]/100,n[3]/100,1):(n=kn.exec(t))?In(n[1],n[2]/100,n[3]/100,n[4]):An.hasOwnProperty(t)?Sn(An[t]):"transparent"===t?new Xn(NaN,NaN,NaN,0):null}function Sn(t){return new Xn(t>>16&255,t>>8&255,255&t,1)}function Cn(t,n,e,r){return r<=0&&(t=n=e=NaN),new Xn(t,n,e,r)}function qn(t,n,e,r){return 1===arguments.length?((i=t)instanceof hn||(i=Mn(i)),i?new Xn((i=i.rgb()).r,i.g,i.b,i.opacity):new Xn):new Xn(t,n,e,null==r?1:r);var i}function Xn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Pn(){return"#".concat(Hn(this.r)).concat(Hn(this.g)).concat(Hn(this.b))}function On(){const t=Tn(this.opacity);return"".concat(1===t?"rgb(":"rgba(").concat(Rn(this.r),", ").concat(Rn(this.g),", ").concat(Rn(this.b)).concat(1===t?")":", ".concat(t,")"))}function Tn(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Rn(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Hn(t){return((t=Rn(t))<16?"0":"")+t.toString(16)}function In(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new jn(t,n,e,r)}function Yn(t){if(t instanceof jn)return new jn(t.h,t.s,t.l,t.opacity);if(t instanceof hn||(t=Mn(t)),!t)return new jn;if(t instanceof jn)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new jn(a,u,s,t.opacity)}function jn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Ln(t){return(t=(t||0)%360)<0?t+360:t}function Dn(t){return Math.max(0,Math.min(1,t||0))}function Bn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function $n(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}cn(hn,Mn,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Nn,formatHex:Nn,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Yn(this).formatHsl()},formatRgb:En,toString:En}),cn(Xn,qn,ln(hn,{brighter(t){return t=null==t?pn:Math.pow(pn,t),new Xn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?fn:Math.pow(fn,t),new Xn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Xn(Rn(this.r),Rn(this.g),Rn(this.b),Tn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pn,formatHex:Pn,formatHex8:function(){return"#".concat(Hn(this.r)).concat(Hn(this.g)).concat(Hn(this.b)).concat(Hn(255*(isNaN(this.opacity)?1:this.opacity)))},formatRgb:On,toString:On})),cn(jn,(function(t,n,e,r){return 1===arguments.length?Yn(t):new jn(t,n,e,null==r?1:r)}),ln(hn,{brighter(t){return t=null==t?pn:Math.pow(pn,t),new jn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?fn:Math.pow(fn,t),new jn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Xn(Bn(t>=240?t-240:t+120,i,r),Bn(t,i,r),Bn(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new jn(Ln(this.h),Dn(this.s),Dn(this.l),Tn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Tn(this.opacity);return"".concat(1===t?"hsl(":"hsla(").concat(Ln(this.h),", ").concat(100*Dn(this.s),"%, ").concat(100*Dn(this.l),"%").concat(1===t?")":", ".concat(t,")"))}}));const Vn=t=>()=>t;function zn(t,n){return function(e){return t+e*n}}function Un(t){return 1===(t=+t)?Fn:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Vn(isNaN(n)?e:n)}}function Fn(t,n){var e=n-t;return e?zn(t,e):Vn(isNaN(t)?n:t)}const Kn=function t(n){var e=Un(n);function r(t,n){var r=e((t=qn(t)).r,(n=qn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=Fn(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function Wn(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=qn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}Wn((function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return $n((e-r/n)*n,a,i,o,u)}})),Wn((function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return $n((e-r/n)*n,i,o,a,u)}}));var Gn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Jn=new RegExp(Gn.source,"g");function Qn(t,n){var e,r,i,o=Gn.lastIndex=Jn.lastIndex=0,a=-1,u=[],s=[];for(t+="",n+="";(e=Gn.exec(t))&&(r=Jn.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Jt(e,r)})),o=Jn.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}function Zn(t,n){var e;return("number"===typeof n?Jt:n instanceof Mn?Kn:(e=Mn(n))?(n=e,Kn):Qn)(t,n)}function te(t){return function(){this.removeAttribute(t)}}function ne(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ee(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}}function re(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}function ie(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttribute(t)}}function oe(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttributeNS(t.space,t.local)}}function ae(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}function ue(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i}function se(t,n){return function(){Kt(this,t).delay=+n.apply(this,arguments)}}function ce(t,n){return n=+n,function(){Kt(this,t).delay=n}}function le(t,n){return function(){Wt(this,t).duration=+n.apply(this,arguments)}}function he(t,n){return n=+n,function(){Wt(this,t).duration=n}}var fe=ft.prototype.constructor;function pe(t){return function(){this.style.removeProperty(t)}}var de=0;function ye(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ve(){return++de}var _e=ft.prototype;ye.prototype=function(t){return ft().transition(t)}.prototype={constructor:ye,select:function(t){var e=this._name,r=this._id;"function"!==typeof t&&(t=n(t));for(var i=this._groups,o=i.length,a=new Array(o),u=0;u<o;++u)for(var s,c,l=i[u],h=l.length,f=a[u]=new Array(h),p=0;p<h;++p)(s=l[p])&&(c=t.call(s,s.__data__,p,l))&&("__data__"in s&&(c.__data__=s.__data__),f[p]=c,Ft(f[p],e,r,p,f,Gt(s,r)));return new ye(a,this._parents,e,r)},selectAll:function(t){var n=this._name,e=this._id;"function"!==typeof t&&(t=r(t));for(var i=this._groups,o=i.length,a=[],u=[],s=0;s<o;++s)for(var c,l=i[s],h=l.length,f=0;f<h;++f)if(c=l[f]){for(var p,d=t.call(c,c.__data__,f,l),y=Gt(c,e),v=0,_=d.length;v<_;++v)(p=d[v])&&Ft(p,n,e,v,d,y);a.push(d),u.push(c)}return new ye(a,u,n,e)},selectChild:_e.selectChild,selectChildren:_e.selectChildren,filter:function(t){"function"!==typeof t&&(t=o(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,u=n[i],s=u.length,c=r[i]=[],l=0;l<s;++l)(a=u[l])&&t.call(a,a.__data__,l,u)&&c.push(a);return new ye(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,c=n[u],l=e[u],h=c.length,f=a[u]=new Array(h),p=0;p<h;++p)(s=c[p]||l[p])&&(f[p]=s);for(;u<r;++u)a[u]=n[u];return new ye(a,this._parents,this._name,this._id)},selection:function(){return new fe(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=ve(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)if(a=u[c]){var l=Gt(a,n);Ft(a,t,e,c,u,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new ye(r,this._parents,t,e)},call:_e.call,nodes:_e.nodes,node:_e.node,size:_e.size,empty:_e.empty,each:_e.each,on:function(t,n){var e=this._id;return arguments.length<2?Gt(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Kt:Wt;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=m(t),r="transform"===e?on:Zn;return this.attrTween(t,"function"===typeof n?(e.local?oe:ie)(e,r,sn(this,"attr."+t,n)):null==n?(e.local?ne:te)(e):(e.local?re:ee)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!==typeof n)throw new Error;var r=m(t);return this.tween(e,(r.local?ae:ue)(r,n))},style:function(t,n,e){var r="transform"===(t+="")?rn:Zn;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=X(this,t),a=(this.style.removeProperty(t),X(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,pe(t)):"function"===typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=X(this,t),u=e(this),s=u+"";return null==u&&(this.style.removeProperty(t),s=u=X(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,sn(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var s=Wt(this,t),c=s.on,l=null==s.value[a]?o||(o=pe(n)):void 0;c===e&&i===l||(r=(e=c).copy()).on(u,i=l),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=X(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!==typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"===typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(sn(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Gt(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?an:un)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"===typeof t?se:ce)(n,t)):Gt(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"===typeof t?le:he)(n,t)):Gt(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!==typeof n)throw new Error;return function(){Wt(this,t).ease=n}}(n,t)):Gt(this.node(),n).ease},easeVarying:function(t){if("function"!==typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!==typeof e)throw new Error;Wt(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,a){var u={value:a},s={value:function(){0===--i&&o()}};e.each((function(){var e=Wt(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:_e[Symbol.iterator]};var ge={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function we(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error("transition ".concat(n," not found"));return e}ft.prototype.interrupt=function(t){return this.each((function(){!function(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>Bt&&e.state<zt,e.state=Ut,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}(this,t)}))},ft.prototype.transition=function(t){var n,e;t instanceof ye?(n=t._id,t=t._name):(n=ve(),(e=ge).time=qt(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,c=0;c<s;++c)(a=u[c])&&Ft(a,t,n,c,u,e||we(a,n));return new ye(r,this._parents,t,n)};const{abs:me,max:be,min:xe}=Math;function ke(t){return[+t[0],+t[1]]}function Ae(t){return[ke(t[0]),ke(t[1])]}["w","e"].map(Ne),["n","s"].map(Ne),["n","w","e","s","nw","ne","sw","se"].map(Ne);function Ne(t){return{type:t}}function Ee(t,n,e){this.k=t,this.x=n,this.y=e}Ee.prototype={constructor:Ee,scale:function(t){return 1===t?this:new Ee(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Ee(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Ee(1,0,0);Ee.prototype}}]);
//# sourceMappingURL=297.c2a15f47.chunk.js.map