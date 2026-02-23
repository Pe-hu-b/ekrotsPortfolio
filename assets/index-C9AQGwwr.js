(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var O_={exports:{}},ru={},B_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),TE=Symbol.for("react.portal"),wE=Symbol.for("react.fragment"),AE=Symbol.for("react.strict_mode"),CE=Symbol.for("react.profiler"),RE=Symbol.for("react.provider"),bE=Symbol.for("react.context"),PE=Symbol.for("react.forward_ref"),DE=Symbol.for("react.suspense"),LE=Symbol.for("react.memo"),IE=Symbol.for("react.lazy"),ag=Symbol.iterator;function NE(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V_=Object.assign,z_={};function _o(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||k_}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H_(){}H_.prototype=_o.prototype;function up(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||k_}var fp=up.prototype=new H_;fp.constructor=up;V_(fp,_o.prototype);fp.isPureReactComponent=!0;var lg=Array.isArray,G_=Object.prototype.hasOwnProperty,dp={current:null},W_={key:!0,ref:!0,__self:!0,__source:!0};function X_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ka,type:t,key:s,ref:o,props:r,_owner:dp.current}}function FE(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function UE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UE(""+t.key):e.toString(36)}function ql(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case TE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Du(o,0):i,lg(r)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),ql(r,e,n,"",function(c){return c})):r!=null&&(hp(r)&&(r=FE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Du(s,a);o+=ql(s,e,n,l,r)}else if(l=NE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Du(s,a++),o+=ql(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var i=[],r=0;return ql(t,i,"","",function(s){return e.call(n,s,r++)}),i}function OE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Kl={transition:null},BE={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:dp};function j_(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=_o;Xe.Fragment=wE;Xe.Profiler=CE;Xe.PureComponent=up;Xe.StrictMode=AE;Xe.Suspense=DE;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BE;Xe.act=j_;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=V_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G_.call(e,l)&&!W_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:bE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RE,_context:t},t.Consumer=t};Xe.createElement=X_;Xe.createFactory=function(t){var e=X_.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:PE,render:t}};Xe.isValidElement=hp;Xe.lazy=function(t){return{$$typeof:IE,_payload:{_status:-1,_result:t},_init:OE}};Xe.memo=function(t,e){return{$$typeof:LE,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};Xe.unstable_act=j_;Xe.useCallback=function(t,e){return pn.current.useCallback(t,e)};Xe.useContext=function(t){return pn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return pn.current.useEffect(t,e)};Xe.useId=function(){return pn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return pn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Xe.useRef=function(t){return pn.current.useRef(t)};Xe.useState=function(t){return pn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return pn.current.useTransition()};Xe.version="18.3.1";B_.exports=Xe;var Q=B_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=Q,VE=Symbol.for("react.element"),zE=Symbol.for("react.fragment"),HE=Object.prototype.hasOwnProperty,GE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WE={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)HE.call(e,i)&&!WE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:VE,type:t,key:s,ref:o,props:r,_owner:GE.current}}ru.Fragment=zE;ru.jsx=Y_;ru.jsxs=Y_;O_.exports=ru;var j=O_.exports,$_={exports:{}},Dn={},q_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var $=U.length;U.push(G);e:for(;0<$;){var te=$-1>>>1,ne=U[te];if(0<r(ne,G))U[te]=G,U[$]=ne,$=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var G=U[0],$=U.pop();if($!==G){U[0]=$;e:for(var te=0,ne=U.length,ge=ne>>>1;te<ge;){var Ve=2*(te+1)-1,We=U[Ve],Z=Ve+1,oe=U[Z];if(0>r(We,$))Z<ne&&0>r(oe,We)?(U[te]=oe,U[Z]=$,te=Z):(U[te]=We,U[Ve]=$,te=Ve);else if(Z<ne&&0>r(oe,$))U[te]=oe,U[Z]=$,te=Z;else break e}}return G}function r(U,G){var $=U.sortIndex-G.sortIndex;return $!==0?$:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=U)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function S(U){if(y=!1,_(U),!g)if(n(l)!==null)g=!0,B(E);else{var G=n(c);G!==null&&D(S,G.startTime-U)}}function E(U,G){g=!1,y&&(y=!1,d(x),x=-1),p=!0;var $=u;try{for(_(G),h=n(l);h!==null&&(!(h.expirationTime>G)||U&&!b());){var te=h.callback;if(typeof te=="function"){h.callback=null,u=h.priorityLevel;var ne=te(h.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),_(G)}else i(l);h=n(l)}if(h!==null)var ge=!0;else{var Ve=n(c);Ve!==null&&D(S,Ve.startTime-G),ge=!1}return ge}finally{h=null,u=$,p=!1}}var A=!1,C=null,x=-1,T=5,L=-1;function b(){return!(t.unstable_now()-L<T)}function k(){if(C!==null){var U=t.unstable_now();L=U;var G=!0;try{G=C(!0,U)}finally{G?V():(A=!1,C=null)}}else A=!1}var V;if(typeof m=="function")V=function(){m(k)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,H=Y.port2;Y.port1.onmessage=k,V=function(){H.postMessage(null)}}else V=function(){v(k,0)};function B(U){C=U,A||(A=!0,V())}function D(U,G){x=v(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,B(E))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var $=u;u=G;try{return U()}finally{u=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=u;u=U;try{return G()}finally{u=$}},t.unstable_scheduleCallback=function(U,G,$){var te=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?te+$:te):$=te,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=$+ne,U={id:f++,callback:G,priorityLevel:U,startTime:$,expirationTime:ne,sortIndex:-1},$>te?(U.sortIndex=$,e(c,U),n(l)===null&&U===n(c)&&(y?(d(x),x=-1):y=!0,D(S,$-te))):(U.sortIndex=ne,e(l,U),g||p||(g=!0,B(E))),U},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(U){var G=u;return function(){var $=u;u=G;try{return U.apply(this,arguments)}finally{u=$}}}})(K_);q_.exports=K_;var XE=q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=Q,Pn=XE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,pa={};function fs(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(pa[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,YE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},fg={};function $E(t){return td.call(fg,t)?!0:td.call(ug,t)?!1:YE.test(t)?fg[t]=!0:(ug[t]=!0,!1)}function qE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KE(t,e,n,i){if(e===null||typeof e>"u"||qE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,mp);$t[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,mp);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,mp);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function gp(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KE(e,n,r,i)&&(n=null),i||r===null?$E(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),xp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),ex=Symbol.for("react.offscreen"),dg=Symbol.iterator;function Ro(t){return t===null||typeof t!="object"?null:(t=dg&&t[dg]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Lu;function jo(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Iu=!1;function Nu(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function ZE(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ds:return"Portal";case nd:return"Profiler";case vp:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J_:return(t.displayName||"Context")+".Consumer";case Q_:return(t._context.displayName||"Context")+".Provider";case _p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xp:return e=t.displayName||null,e!==null?e:sd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return sd(t(e))}catch{}}return null}function QE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JE(t){var e=tx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=JE(t))}function nx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ix(t,e){e=e.checked,e!=null&&gp(t,"checked",e,!1)}function ad(t,e){ix(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Yo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function rx(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,ox=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e1=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){e1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function ax(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function lx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ax(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var t1=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(t1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,qs=null,Ks=null;function vg(t){if(t=Ha(t)){if(typeof pd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=cu(e),pd(t.stateNode,t.type,e))}}function cx(t){qs?Ks?Ks.push(t):Ks=[t]:qs=t}function ux(){if(qs){var t=qs,e=Ks;if(Ks=qs=null,vg(t),e)for(t=0;t<e.length;t++)vg(e[t])}}function fx(t,e){return t(e)}function dx(){}var Fu=!1;function hx(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return fx(t,e,n)}finally{Fu=!1,(qs!==null||Ks!==null)&&(dx(),ux())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var md=!1;if(Gi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){md=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{md=!1}function n1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ea=!1,yc=null,Sc=!1,gd=null,i1={onError:function(t){ea=!0,yc=t}};function r1(t,e,n,i,r,s,o,a,l){ea=!1,yc=null,n1.apply(i1,arguments)}function s1(t,e,n,i,r,s,o,a,l){if(r1.apply(this,arguments),ea){if(ea){var c=yc;ea=!1,yc=null}else throw Error(ie(198));Sc||(Sc=!0,gd=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function px(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _g(t){if(ds(t)!==t)throw Error(ie(188))}function o1(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _g(r),t;if(s===i)return _g(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function mx(t){return t=o1(t),t!==null?gx(t):null}function gx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gx(t);if(e!==null)return e;t=t.sibling}return null}var vx=Pn.unstable_scheduleCallback,xg=Pn.unstable_cancelCallback,a1=Pn.unstable_shouldYield,l1=Pn.unstable_requestPaint,Ct=Pn.unstable_now,c1=Pn.unstable_getCurrentPriorityLevel,Sp=Pn.unstable_ImmediatePriority,_x=Pn.unstable_UserBlockingPriority,Mc=Pn.unstable_NormalPriority,u1=Pn.unstable_LowPriority,xx=Pn.unstable_IdlePriority,su=null,yi=null;function f1(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:p1,d1=Math.log,h1=Math.LN2;function p1(t){return t>>>=0,t===0?32:31-(d1(t)/h1|0)|0}var rl=64,sl=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$o(a):(s&=o,s!==0&&(i=$o(s)))}else o=n&~r,o!==0?i=$o(o):s!==0&&(i=$o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function m1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=m1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yx(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function v1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Sx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mx,Ep,Ex,Tx,wx,_d=!1,ol=[],_r=null,xr=null,yr=null,va=new Map,_a=new Map,fr=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x1(t,e,n,i,r){switch(e){case"focusin":return _r=Po(_r,t,e,n,i,r),!0;case"dragenter":return xr=Po(xr,t,e,n,i,r),!0;case"mouseover":return yr=Po(yr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Po(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Po(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function Ax(t){var e=qr(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=px(n),e!==null){t.blockedOn=e,wx(t.priority,function(){Ex(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hd=i,n.target.dispatchEvent(i),hd=null}else return e=Ha(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function Sg(t,e,n){Zl(t)&&n.delete(e)}function y1(){_d=!1,_r!==null&&Zl(_r)&&(_r=null),xr!==null&&Zl(xr)&&(xr=null),yr!==null&&Zl(yr)&&(yr=null),va.forEach(Sg),_a.forEach(Sg)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,_d||(_d=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,y1)))}function xa(t){function e(r){return Do(r,t)}if(0<ol.length){Do(ol[0],t);for(var n=1;n<ol.length;n++){var i=ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Do(_r,t),xr!==null&&Do(xr,t),yr!==null&&Do(yr,t),va.forEach(e),_a.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Ax(n),n.blockedOn===null&&fr.shift()}var Zs=Zi.ReactCurrentBatchConfig,Tc=!0;function S1(t,e,n,i){var r=rt,s=Zs.transition;Zs.transition=null;try{rt=1,Tp(t,e,n,i)}finally{rt=r,Zs.transition=s}}function M1(t,e,n,i){var r=rt,s=Zs.transition;Zs.transition=null;try{rt=4,Tp(t,e,n,i)}finally{rt=r,Zs.transition=s}}function Tp(t,e,n,i){if(Tc){var r=xd(t,e,n,i);if(r===null)ju(t,e,i,wc,n),yg(t,i);else if(x1(r,t,e,n,i))i.stopPropagation();else if(yg(t,i),e&4&&-1<_1.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&Mx(s),s=xd(t,e,n,i),s===null&&ju(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var wc=null;function xd(t,e,n,i){if(wc=null,t=yp(i),t=qr(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=px(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Cx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c1()){case Sp:return 1;case _x:return 4;case Mc:case u1:return 16;case xx:return 536870912;default:return 16}default:return 16}}var pr=null,wp=null,Ql=null;function Rx(){if(Ql)return Ql;var t,e=wp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ql=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Mg(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:Mg,this.isPropagationStopped=Mg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=Ln(xo),za=yt({},xo,{view:0,detail:0}),E1=Ln(za),Ou,Bu,Lo,ou=yt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Ou=t.screenX-Lo.screenX,Bu=t.screenY-Lo.screenY):Bu=Ou=0,Lo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Eg=Ln(ou),T1=yt({},ou,{dataTransfer:0}),w1=Ln(T1),A1=yt({},za,{relatedTarget:0}),ku=Ln(A1),C1=yt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=Ln(C1),b1=yt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P1=Ln(b1),D1=yt({},xo,{data:0}),Tg=Ln(D1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N1[t])?!!e[t]:!1}function Cp(){return F1}var U1=yt({},za,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O1=Ln(U1),B1=yt({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=Ln(B1),k1=yt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),V1=Ln(k1),z1=yt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=Ln(z1),G1=yt({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W1=Ln(G1),X1=[9,13,27,32],Rp=Gi&&"CompositionEvent"in window,ta=null;Gi&&"documentMode"in document&&(ta=document.documentMode);var j1=Gi&&"TextEvent"in window&&!ta,bx=Gi&&(!Rp||ta&&8<ta&&11>=ta),Ag=" ",Cg=!1;function Px(t,e){switch(t){case"keyup":return X1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function Y1(t,e){switch(t){case"compositionend":return Dx(e);case"keypress":return e.which!==32?null:(Cg=!0,Ag);case"textInput":return t=e.data,t===Ag&&Cg?null:t;default:return null}}function $1(t,e){if(Is)return t==="compositionend"||!Rp&&Px(t,e)?(t=Rx(),Ql=wp=pr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bx&&e.locale!=="ko"?null:e.data;default:return null}}var q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q1[t.type]:e==="textarea"}function Lx(t,e,n,i){cx(i),e=Ac(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,ya=null;function K1(t){Gx(t,0)}function au(t){var e=Us(t);if(nx(e))return t}function Z1(t,e){if(t==="change")return e}var Ix=!1;if(Gi){var Vu;if(Gi){var zu="oninput"in document;if(!zu){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),zu=typeof bg.oninput=="function"}Vu=zu}else Vu=!1;Ix=Vu&&(!document.documentMode||9<document.documentMode)}function Pg(){na&&(na.detachEvent("onpropertychange",Nx),ya=na=null)}function Nx(t){if(t.propertyName==="value"&&au(ya)){var e=[];Lx(e,ya,t,yp(t)),hx(K1,e)}}function Q1(t,e,n){t==="focusin"?(Pg(),na=e,ya=n,na.attachEvent("onpropertychange",Nx)):t==="focusout"&&Pg()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(ya)}function eT(t,e){if(t==="click")return au(e)}function tT(t,e){if(t==="input"||t==="change")return au(e)}function nT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:nT;function Sa(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!td.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lg(t,e){var n=Dg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dg(n)}}function Fx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ux(){for(var t=window,e=xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xc(t.document)}return e}function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iT(t){var e=Ux(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fx(n.ownerDocument.documentElement,n)){if(i!==null&&bp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lg(n,s);var o=Lg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rT=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,yd=null,ia=null,Sd=!1;function Ig(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||Ns==null||Ns!==xc(i)||(i=Ns,"selectionStart"in i&&bp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&Sa(ia,i)||(ia=i,i=Ac(yd,"onSelect"),0<i.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Hu={},Ox={};Gi&&(Ox=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function lu(t){if(Hu[t])return Hu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ox)return Hu[t]=e[n];return t}var Bx=lu("animationend"),kx=lu("animationiteration"),Vx=lu("animationstart"),zx=lu("transitionend"),Hx=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){Hx.set(t,e),fs(e,[t])}for(var Gu=0;Gu<Ng.length;Gu++){var Wu=Ng[Gu],sT=Wu.toLowerCase(),oT=Wu[0].toUpperCase()+Wu.slice(1);Pr(sT,"on"+oT)}Pr(Bx,"onAnimationEnd");Pr(kx,"onAnimationIteration");Pr(Vx,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(zx,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aT=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Fg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s1(i,e,void 0,t),t.currentTarget=null}function Gx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}}}if(Sc)throw t=gd,Sc=!1,gd=null,t}function ht(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var i=t+"__bubble";n.has(i)||(Wx(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),Wx(n,t,i,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[cl]){t[cl]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(aT.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,Xu("selectionchange",!1,e))}}function Wx(t,e,n,i){switch(Cx(e)){case 1:var r=S1;break;case 4:r=M1;break;default:r=Tp}n=r.bind(null,e,n,t),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hx(function(){var c=s,f=yp(n),h=[];e:{var u=Hx.get(t);if(u!==void 0){var p=Ap,g=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":p=O1;break;case"focusin":g="focus",p=ku;break;case"focusout":g="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=V1;break;case Bx:case kx:case Vx:p=R1;break;case zx:p=H1;break;case"scroll":p=E1;break;case"wheel":p=W1;break;case"copy":case"cut":case"paste":p=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wg}var y=(e&4)!==0,v=!y&&t==="scroll",d=y?u!==null?u+"Capture":null:u;y=[];for(var m=c,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=ga(m,d),S!=null&&y.push(Ea(m,S,_)))),v)break;m=m.return}0<y.length&&(u=new p(u,g,null,n,f),h.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==hd&&(g=n.relatedTarget||n.fromElement)&&(qr(g)||g[Wi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?qr(g):null,g!==null&&(v=ds(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Eg,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=wg,S="onPointerLeave",d="onPointerEnter",m="pointer"),v=p==null?u:Us(p),_=g==null?u:Us(g),u=new y(S,m+"leave",p,n,f),u.target=v,u.relatedTarget=_,S=null,qr(f)===c&&(y=new y(d,m+"enter",g,n,f),y.target=_,y.relatedTarget=v,S=y),v=S,p&&g)t:{for(y=p,d=g,m=0,_=y;_;_=ms(_))m++;for(_=0,S=d;S;S=ms(S))_++;for(;0<m-_;)y=ms(y),m--;for(;0<_-m;)d=ms(d),_--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=ms(y),d=ms(d)}y=null}else y=null;p!==null&&Ug(h,u,p,y,!1),g!==null&&v!==null&&Ug(h,v,g,y,!0)}}e:{if(u=c?Us(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=Z1;else if(Rg(u))if(Ix)E=tT;else{E=J1;var A=Q1}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=eT);if(E&&(E=E(t,c))){Lx(h,E,n,f);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&ld(u,"number",u.value)}switch(A=c?Us(c):window,t){case"focusin":(Rg(A)||A.contentEditable==="true")&&(Ns=A,yd=c,ia=null);break;case"focusout":ia=yd=Ns=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Ig(h,n,f);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":Ig(h,n,f)}var C;if(Rp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Is?Px(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(bx&&n.locale!=="ko"&&(Is||x!=="onCompositionStart"?x==="onCompositionEnd"&&Is&&(C=Rx()):(pr=f,wp="value"in pr?pr.value:pr.textContent,Is=!0)),A=Ac(c,x),0<A.length&&(x=new Tg(x,t,null,n,f),h.push({event:x,listeners:A}),C?x.data=C:(C=Dx(n),C!==null&&(x.data=C)))),(C=j1?Y1(t,n):$1(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(f=new Tg("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}Gx(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=ga(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ug(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ga(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=ga(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lT=/\r\n?/g,cT=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(lT,`
`).replace(cT,"")}function ul(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(ie(425))}function Cc(){}var Md=null,Ed=null;function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,uT=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(dT)}:wd;function dT(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xa(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),vi="__reactFiber$"+yo,Ta="__reactProps$"+yo,Wi="__reactContainer$"+yo,Ad="__reactEvents$"+yo,hT="__reactListeners$"+yo,pT="__reactHandles$"+yo;function qr(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kg(t);t!==null;){if(n=t[vi])return n;t=kg(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[vi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function cu(t){return t[Ta]||null}var Cd=[],Os=-1;function Dr(t){return{current:t}}function pt(t){0>Os||(t.current=Cd[Os],Cd[Os]=null,Os--)}function ft(t,e){Os++,Cd[Os]=t.current,t.current=e}var Cr={},rn=Dr(Cr),xn=Dr(!1),ss=Cr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Rc(){pt(xn),pt(rn)}function Vg(t,e,n){if(rn.current!==Cr)throw Error(ie(168));ft(rn,e),ft(xn,n)}function Xx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,QE(t)||"Unknown",r));return yt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ss=rn.current,ft(rn,t),ft(xn,xn.current),!0}function zg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Xx(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,pt(xn),pt(rn),ft(rn,t)):pt(xn),ft(xn,n)}var Fi=null,uu=!1,$u=!1;function jx(t){Fi===null?Fi=[t]:Fi.push(t)}function mT(t){uu=!0,jx(t)}function Lr(){if(!$u&&Fi!==null){$u=!0;var t=0,e=rt;try{var n=Fi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,uu=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),vx(Sp,Lr),r}finally{rt=e,$u=!1}}return null}var Bs=[],ks=0,Pc=null,Dc=0,Fn=[],Un=0,os=null,Oi=1,Bi="";function Gr(t,e){Bs[ks++]=Dc,Bs[ks++]=Pc,Pc=t,Dc=e}function Yx(t,e,n){Fn[Un++]=Oi,Fn[Un++]=Bi,Fn[Un++]=os,os=t;var i=Oi;t=Bi;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ri(e)+r|n<<r|i,Bi=s+t}else Oi=1<<s|n<<r|i,Bi=t}function Pp(t){t.return!==null&&(Gr(t,1),Yx(t,1,0))}function Dp(t){for(;t===Pc;)Pc=Bs[--ks],Bs[ks]=null,Dc=Bs[--ks],Bs[ks]=null;for(;t===os;)os=Fn[--Un],Fn[Un]=null,Bi=Fn[--Un],Fn[Un]=null,Oi=Fn[--Un],Fn[Un]=null}var bn=null,Cn=null,mt=!1,ti=null;function $x(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Cn=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Oi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Cn=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bd(t){if(mt){var e=Cn;if(e){var n=e;if(!Hg(t,e)){if(Rd(t))throw Error(ie(418));e=Sr(n.nextSibling);var i=bn;e&&Hg(t,e)?$x(i,n):(t.flags=t.flags&-4097|2,mt=!1,bn=t)}}else{if(Rd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,mt=!1,bn=t}}}function Gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function fl(t){if(t!==bn)return!1;if(!mt)return Gg(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Td(t.type,t.memoizedProps)),e&&(e=Cn)){if(Rd(t))throw qx(),Error(ie(418));for(;e;)$x(t,e),e=Sr(e.nextSibling)}if(Gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=bn?Sr(t.stateNode.nextSibling):null;return!0}function qx(){for(var t=Cn;t;)t=Sr(t.nextSibling)}function so(){Cn=bn=null,mt=!1}function Lp(t){ti===null?ti=[t]:ti.push(t)}var gT=Zi.ReactCurrentBatchConfig;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wg(t){var e=t._init;return e(t._payload)}function Kx(t){function e(d,m){if(t){var _=d.deletions;_===null?(d.deletions=[m],d.flags|=16):_.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=wr(d,m),d.index=0,d.sibling=null,d}function s(d,m,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<m?(d.flags|=2,m):_):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,_,S){return m===null||m.tag!==6?(m=tf(_,d.mode,S),m.return=d,m):(m=r(m,_),m.return=d,m)}function l(d,m,_,S){var E=_.type;return E===Ls?f(d,m,_.props.children,S,_.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cr&&Wg(E)===m.type)?(S=r(m,_.props),S.ref=Io(d,m,_),S.return=d,S):(S=oc(_.type,_.key,_.props,null,d.mode,S),S.ref=Io(d,m,_),S.return=d,S)}function c(d,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=nf(_,d.mode,S),m.return=d,m):(m=r(m,_.children||[]),m.return=d,m)}function f(d,m,_,S,E){return m===null||m.tag!==7?(m=is(_,d.mode,S,E),m.return=d,m):(m=r(m,_),m.return=d,m)}function h(d,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=tf(""+m,d.mode,_),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case tl:return _=oc(m.type,m.key,m.props,null,d.mode,_),_.ref=Io(d,null,m),_.return=d,_;case Ds:return m=nf(m,d.mode,_),m.return=d,m;case cr:var S=m._init;return h(d,S(m._payload),_)}if(Yo(m)||Ro(m))return m=is(m,d.mode,_,null),m.return=d,m;dl(d,m)}return null}function u(d,m,_,S){var E=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(d,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return _.key===E?l(d,m,_,S):null;case Ds:return _.key===E?c(d,m,_,S):null;case cr:return E=_._init,u(d,m,E(_._payload),S)}if(Yo(_)||Ro(_))return E!==null?null:f(d,m,_,S,null);dl(d,_)}return null}function p(d,m,_,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,a(m,d,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:return d=d.get(S.key===null?_:S.key)||null,l(m,d,S,E);case Ds:return d=d.get(S.key===null?_:S.key)||null,c(m,d,S,E);case cr:var A=S._init;return p(d,m,_,A(S._payload),E)}if(Yo(S)||Ro(S))return d=d.get(_)||null,f(m,d,S,E,null);dl(m,S)}return null}function g(d,m,_,S){for(var E=null,A=null,C=m,x=m=0,T=null;C!==null&&x<_.length;x++){C.index>x?(T=C,C=null):T=C.sibling;var L=u(d,C,_[x],S);if(L===null){C===null&&(C=T);break}t&&C&&L.alternate===null&&e(d,C),m=s(L,m,x),A===null?E=L:A.sibling=L,A=L,C=T}if(x===_.length)return n(d,C),mt&&Gr(d,x),E;if(C===null){for(;x<_.length;x++)C=h(d,_[x],S),C!==null&&(m=s(C,m,x),A===null?E=C:A.sibling=C,A=C);return mt&&Gr(d,x),E}for(C=i(d,C);x<_.length;x++)T=p(C,d,x,_[x],S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?x:T.key),m=s(T,m,x),A===null?E=T:A.sibling=T,A=T);return t&&C.forEach(function(b){return e(d,b)}),mt&&Gr(d,x),E}function y(d,m,_,S){var E=Ro(_);if(typeof E!="function")throw Error(ie(150));if(_=E.call(_),_==null)throw Error(ie(151));for(var A=E=null,C=m,x=m=0,T=null,L=_.next();C!==null&&!L.done;x++,L=_.next()){C.index>x?(T=C,C=null):T=C.sibling;var b=u(d,C,L.value,S);if(b===null){C===null&&(C=T);break}t&&C&&b.alternate===null&&e(d,C),m=s(b,m,x),A===null?E=b:A.sibling=b,A=b,C=T}if(L.done)return n(d,C),mt&&Gr(d,x),E;if(C===null){for(;!L.done;x++,L=_.next())L=h(d,L.value,S),L!==null&&(m=s(L,m,x),A===null?E=L:A.sibling=L,A=L);return mt&&Gr(d,x),E}for(C=i(d,C);!L.done;x++,L=_.next())L=p(C,d,x,L.value,S),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?x:L.key),m=s(L,m,x),A===null?E=L:A.sibling=L,A=L);return t&&C.forEach(function(k){return e(d,k)}),mt&&Gr(d,x),E}function v(d,m,_,S){if(typeof _=="object"&&_!==null&&_.type===Ls&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:e:{for(var E=_.key,A=m;A!==null;){if(A.key===E){if(E=_.type,E===Ls){if(A.tag===7){n(d,A.sibling),m=r(A,_.props.children),m.return=d,d=m;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cr&&Wg(E)===A.type){n(d,A.sibling),m=r(A,_.props),m.ref=Io(d,A,_),m.return=d,d=m;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===Ls?(m=is(_.props.children,d.mode,S,_.key),m.return=d,d=m):(S=oc(_.type,_.key,_.props,null,d.mode,S),S.ref=Io(d,m,_),S.return=d,d=S)}return o(d);case Ds:e:{for(A=_.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(d,m.sibling),m=r(m,_.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=nf(_,d.mode,S),m.return=d,d=m}return o(d);case cr:return A=_._init,v(d,m,A(_._payload),S)}if(Yo(_))return g(d,m,_,S);if(Ro(_))return y(d,m,_,S);dl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,_),m.return=d,d=m):(n(d,m),m=tf(_,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return v}var oo=Kx(!0),Zx=Kx(!1),Lc=Dr(null),Ic=null,Vs=null,Ip=null;function Np(){Ip=Vs=Ic=null}function Fp(t){var e=Lc.current;pt(Lc),t._currentValue=e}function Pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Ic=t,Ip=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Ic===null)throw Error(ie(308));Vs=t,Ic.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Kr=null;function Up(t){Kr===null?Kr=[t]:Kr.push(t)}function Qx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Up(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Up(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mp(t,n)}}function Xg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;ur=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(u=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,u);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,u=typeof g=="function"?g.call(p,h,u):g,u==null)break e;h=yt({},h,u);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=h}}function jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ga={},Si=Dr(Ga),wa=Dr(Ga),Aa=Dr(Ga);function Zr(t){if(t===Ga)throw Error(ie(174));return t}function Bp(t,e){switch(ft(Aa,e),ft(wa,t),ft(Si,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}pt(Si),ft(Si,e)}function ao(){pt(Si),pt(wa),pt(Aa)}function ey(t){Zr(Aa.current);var e=Zr(Si.current),n=ud(e,t.type);e!==n&&(ft(wa,t),ft(Si,n))}function kp(t){wa.current===t&&(pt(Si),pt(wa))}var vt=Dr(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Vp(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var tc=Zi.ReactCurrentDispatcher,Ku=Zi.ReactCurrentBatchConfig,as=0,xt=null,Nt=null,zt=null,Uc=!1,ra=!1,Ca=0,vT=0;function Kt(){throw Error(ie(321))}function zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Hp(t,e,n,i,r,s){if(as=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tc.current=t===null||t.memoizedState===null?ST:MT,t=n(i,r),ra){s=0;do{if(ra=!1,Ca=0,25<=s)throw Error(ie(301));s+=1,zt=Nt=null,e.updateQueue=null,tc.current=ET,t=n(i,r)}while(ra)}if(tc.current=Oc,e=Nt!==null&&Nt.next!==null,as=0,zt=Nt=xt=null,Uc=!1,e)throw Error(ie(300));return t}function Gp(){var t=Ca!==0;return Ca=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?xt.memoizedState=zt=t:zt=zt.next=t,zt}function Xn(){if(Nt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=zt===null?xt.memoizedState:zt.next;if(e!==null)zt=e,Nt=t;else{if(t===null)throw Error(ie(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?xt.memoizedState=zt=t:zt=zt.next=t}return zt}function Ra(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,xt.lanes|=f,ls|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ty(){}function ny(t,e){var n=xt,i=Xn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Wp(sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,ba(9,ry.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ie(349));as&30||iy(n,e,r)}return r}function iy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ry(t,e,n,i){e.value=n,e.getSnapshot=i,oy(e)&&ay(t)}function sy(t,e,n){return n(function(){oy(e)&&ay(t)})}function oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function ay(t){var e=Xi(t,1);e!==null&&si(e,t,1,-1)}function Yg(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=yT.bind(null,xt,t),[e.memoizedState,t]}function ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ly(){return Xn().memoizedState}function nc(t,e,n,i){var r=pi();xt.flags|=t,r.memoizedState=ba(1|e,n,void 0,i===void 0?null:i)}function fu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&zp(i,o.deps)){r.memoizedState=ba(e,n,s,i);return}}xt.flags|=t,r.memoizedState=ba(1|e,n,s,i)}function $g(t,e){return nc(8390656,8,t,e)}function Wp(t,e){return fu(2048,8,t,e)}function cy(t,e){return fu(4,2,t,e)}function uy(t,e){return fu(4,4,t,e)}function fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dy(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,fy.bind(null,e,t),n)}function Xp(){}function hy(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function py(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function my(t,e,n){return as&21?(li(n,e)||(n=yx(),xt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function _T(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Ku.transition;Ku.transition={};try{t(!1),e()}finally{rt=n,Ku.transition=i}}function gy(){return Xn().memoizedState}function xT(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vy(t))_y(e,n);else if(n=Qx(t,e,n,i),n!==null){var r=fn();si(n,t,i,r),xy(n,e,i)}}function yT(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vy(t))_y(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,Up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qx(t,e,r,i),n!==null&&(r=fn(),si(n,t,i,r),xy(n,e,i))}}function vy(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function _y(t,e){ra=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mp(t,n)}}var Oc={readContext:Wn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},ST={readContext:Wn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nc(4194308,4,fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return nc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xT.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:Xp,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=_T.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=pi();if(mt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ht===null)throw Error(ie(349));as&30||iy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$g(sy.bind(null,i,s,t),[t]),i.flags|=2048,ba(9,ry.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Ht.identifierPrefix;if(mt){var n=Bi,i=Oi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:Wn,useCallback:hy,useContext:Wn,useEffect:Wp,useImperativeHandle:dy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:Zu,useRef:ly,useState:function(){return Zu(Ra)},useDebugValue:Xp,useDeferredValue:function(t){var e=Xn();return my(e,Nt.memoizedState,t)},useTransition:function(){var t=Zu(Ra)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1},ET={readContext:Wn,useCallback:hy,useContext:Wn,useEffect:Wp,useImperativeHandle:dy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:Qu,useRef:ly,useState:function(){return Qu(Ra)},useDebugValue:Xp,useDeferredValue:function(t){var e=Xn();return Nt===null?e.memoizedState=t:my(e,Nt.memoizedState,t)},useTransition:function(){var t=Qu(Ra)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Tr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(si(e,t,r,i),ec(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Tr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(si(e,t,r,i),ec(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Tr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(si(e,t,i,n),ec(e,t,i))}};function qg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function yy(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=yn(e)?ss:rn.current,i=e.contextTypes,s=(i=i!=null)?ro(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Op(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=yn(e)?ss:rn.current,r.context=ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&du.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",i=e;do n+=ZE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TT=typeof WeakMap=="function"?WeakMap:Map;function Sy(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kc||(kc=!0,Gd=i),Id(t,e)},n}function My(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BT.bind(null,t,e,n),e.then(t,t))}function Qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var wT=Zi.ReactCurrentOwner,_n=!1;function an(t,e,n,i){e.child=t===null?Zx(e,null,n,i):oo(e,t.child,n,i)}function e0(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Hp(t,e,n,i,s,r),n=Gp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(mt&&n&&Pp(e),e.flags|=1,an(t,e,i,r),e.child)}function t0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ey(t,e,s,i,r)):(t=oc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ey(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Nd(t,e,n,i,r)}function Ty(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Hs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Hs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Hs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Hs,An),An|=i;return an(t,e,r,n),e.child}function wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nd(t,e,n,i,r){var s=yn(n)?ss:rn.current;return s=ro(e,s),Qs(e,r),n=Hp(t,e,n,i,s,r),i=Gp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(mt&&i&&Pp(e),e.flags|=1,an(t,e,n,r),e.child)}function n0(t,e,n,i,r){if(yn(n)){var s=!0;bc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)ic(t,e),yy(e,n,i),Ld(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=yn(n)?ss:rn.current,c=ro(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kg(e,o,i,c),ur=!1;var u=e.memoizedState;o.state=u,Nc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||xn.current||ur?(typeof f=="function"&&(Dd(e,n,f,i),l=e.memoizedState),(a=ur||qg(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=yn(n)?ss:rn.current,l=ro(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&Kg(e,o,i,l),ur=!1,u=e.memoizedState,o.state=u,Nc(e,i,o,r);var g=e.memoizedState;a!==h||u!==g||xn.current||ur?(typeof p=="function"&&(Dd(e,n,p,i),g=e.memoizedState),(c=ur||qg(e,n,c,i,u,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Fd(t,e,n,i,s,r)}function Fd(t,e,n,i,r,s){wy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zg(e,n,!1),ji(t,e,s);i=e.stateNode,wT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&zg(e,n,!0),e.child}function Ay(t){var e=t.stateNode;e.pendingContext?Vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vg(t,e.context,!1),Bp(t,e.containerInfo)}function i0(t,e,n,i,r){return so(),Lp(r),e.flags|=256,an(t,e,n,i),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cy(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(vt,r&1),t===null)return bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Od(n),e.memoizedState=Ud,t):jp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ud,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jp(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&Lp(i),oo(e,t.child,null,n),t=jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ju(Error(ie(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Od(o),e.memoizedState=Ud,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Ju(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),si(i,t,r,-1))}return Qp(),i=Ju(Error(ie(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=Sr(r.nextSibling),bn=e,mt=!0,ti=null,t!==null&&(Fn[Un++]=Oi,Fn[Un++]=Bi,Fn[Un++]=os,Oi=t.id,Bi=t.overflow,os=e),e=jp(e,i.children),e.flags|=4096,e)}function r0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pd(t.return,e,n)}function ef(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ry(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ef(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ef(e,!0,n,null,s);break;case"together":ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CT(t,e,n){switch(e.tag){case 3:Ay(e),so();break;case 5:ey(e);break;case 1:yn(e.type)&&bc(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Cy(t,e,n):(ft(vt,vt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);ft(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ry(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ty(t,e,n)}return ji(t,e,n)}var by,Bd,Py,Dy;by=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};Py=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(Si.current);var s=null;switch(n){case"input":r=od(t,r),i=od(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(t,r),i=cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cc)}fd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dy=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RT(t,e,n){var i=e.pendingProps;switch(Dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return yn(e.type)&&Rc(),Zt(e),null;case 3:return i=e.stateNode,ao(),pt(xn),pt(rn),Vp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(jd(ti),ti=null))),Bd(t,e),Zt(e),null;case 5:kp(e);var r=Zr(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)Py(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Zt(e),null}if(t=Zr(Si.current),fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)ht(qo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":hg(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":mg(i,s),ht("invalid",i)}fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",""+a]):pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":nl(i),pg(i,s,!0);break;case"textarea":nl(i),gg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Ta]=i,by(t,e,!1,!1),e.stateNode=t;e:{switch(o=dd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)ht(qo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":hg(t,i),r=od(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":mg(t,i),r=cd(t,i),ht("invalid",t);break;default:r=i}fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ox(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ma(t,l):typeof l=="number"&&ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&gp(t,s,l,o))}switch(n){case"input":nl(t),pg(t,i,!1);break;case"textarea":nl(t),gg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)Dy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Zr(Aa.current),Zr(Si.current),fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return Zt(e),null;case 13:if(pt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Cn!==null&&e.mode&1&&!(e.flags&128))qx(),so(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[vi]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ti!==null&&(jd(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Ft===0&&(Ft=3):Qp())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return ao(),Bd(t,e),t===null&&Ma(e.stateNode.containerInfo),Zt(e),null;case 10:return Fp(e.type._context),Zt(e),null;case 17:return yn(e.type)&&Rc(),Zt(e),null;case 19:if(pt(vt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>co&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Zt(e),null}else 2*Ct()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=vt.current,ft(vt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Zp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function bT(t,e){switch(Dp(e),e.tag){case 1:return yn(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),pt(xn),pt(rn),Vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(pt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(vt),null;case 4:return ao(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return Zp(),null;case 24:return null;default:return null}}var pl=!1,en=!1,PT=typeof WeakSet=="function"?WeakSet:Set,_e=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function kd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var s0=!1;function DT(t,e){if(Md=Tc,t=Ux(),bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:t,selectionRange:n},Tc=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Jn(e.type,y),v);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=s0,s0=!1,g}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kd(e,n,s)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ly(t){var e=t.alternate;e!==null&&(t.alternate=null,Ly(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Ta],delete e[Ad],delete e[hT],delete e[pT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iy(t){return t.tag===5||t.tag===3||t.tag===4}function o0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(i!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var Wt=null,ei=!1;function er(t,e,n){for(n=n.child;n!==null;)Ny(t,e,n),n=n.sibling}function Ny(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:en||zs(n,e);case 6:var i=Wt,r=ei;Wt=null,er(t,e,n),Wt=i,ei=r,Wt!==null&&(ei?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(ei?(t=Wt,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),xa(t)):Yu(Wt,n.stateNode));break;case 4:i=Wt,r=ei,Wt=n.stateNode.containerInfo,ei=!0,er(t,e,n),Wt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!en&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,er(t,e,n),en=i):er(t,e,n);break;default:er(t,e,n)}}function a0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PT),e.forEach(function(i){var r=VT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ei=!1;break e;case 3:Wt=a.stateNode.containerInfo,ei=!0;break e;case 4:Wt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(Wt===null)throw Error(ie(160));Ny(s,o,r),Wt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fy(e,t),e=e.sibling}function Fy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),fi(t),i&4){try{sa(3,t,t.return),hu(3,t)}catch(y){Mt(t,t.return,y)}try{sa(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Yn(e,t),fi(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(Yn(e,t),fi(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{ma(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ix(r,s),dd(a,o);var c=dd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?lx(r,h):f==="dangerouslySetInnerHTML"?ox(r,h):f==="children"?ma(r,h):gp(r,f,h,c)}switch(a){case"input":ad(r,s);break;case"textarea":rx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$s(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(Yn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(Yn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Yn(e,t),fi(t);break;case 13:Yn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qp=Ct())),i&4&&a0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||f,Yn(e,t),en=c):Yn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(h=_e=f;_e!==null;){switch(u=_e,p=u.child,u.tag){case 0:case 11:case 14:case 15:sa(4,u,u.return);break;case 1:zs(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:zs(u,u.return);break;case 22:if(u.memoizedState!==null){c0(h);continue}}p!==null?(p.return=u,_e=p):c0(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ax("display",o))}catch(y){Mt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),fi(t),i&4&&a0(t);break;case 21:break;default:Yn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ma(r,""),i.flags&=-33);var s=o0(t);Hd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=o0(t);zd(t,a,o);break;default:throw Error(ie(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LT(t,e,n){_e=t,Uy(t)}function Uy(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=pl;var c=en;if(pl=o,(en=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?u0(r):l!==null?(l.return=o,_e=l):u0(r);for(;s!==null;)_e=s,Uy(s),s=s.sibling;_e=r,pl=a,en=c}l0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):l0(t)}}function l0(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}en||e.flags&512&&Vd(e)}catch(u){Mt(e,e.return,u)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function c0(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function u0(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Vd(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Vd(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var IT=Math.ceil,Bc=Zi.ReactCurrentDispatcher,Yp=Zi.ReactCurrentOwner,zn=Zi.ReactCurrentBatchConfig,Ke=0,Ht=null,Lt=null,Yt=0,An=0,Hs=Dr(0),Ft=0,Pa=null,ls=0,pu=0,$p=0,oa=null,vn=null,qp=0,co=1/0,Ni=null,kc=!1,Gd=null,Er=null,ml=!1,mr=null,Vc=0,aa=0,Wd=null,rc=-1,sc=0;function fn(){return Ke&6?Ct():rc!==-1?rc:rc=Ct()}function Tr(t){return t.mode&1?Ke&2&&Yt!==0?Yt&-Yt:gT.transition!==null?(sc===0&&(sc=yx()),sc):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Cx(t.type)),t):1}function si(t,e,n,i){if(50<aa)throw aa=0,Wd=null,Error(ie(185));Va(t,n,i),(!(Ke&2)||t!==Ht)&&(t===Ht&&(!(Ke&2)&&(pu|=n),Ft===4&&dr(t,Yt)),Sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(co=Ct()+500,uu&&Lr()))}function Sn(t,e){var n=t.callbackNode;g1(t,e);var i=Ec(t,t===Ht?Yt:0);if(i===0)n!==null&&xg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xg(n),e===1)t.tag===0?mT(f0.bind(null,t)):jx(f0.bind(null,t)),fT(function(){!(Ke&6)&&Lr()}),n=null;else{switch(Sx(i)){case 1:n=Sp;break;case 4:n=_x;break;case 16:n=Mc;break;case 536870912:n=xx;break;default:n=Mc}n=Wy(n,Oy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Oy(t,e){if(rc=-1,sc=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=Ec(t,t===Ht?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zc(t,i);else{e=i;var r=Ke;Ke|=2;var s=ky();(Ht!==t||Yt!==e)&&(Ni=null,co=Ct()+500,ns(t,e));do try{UT();break}catch(a){By(t,a)}while(!0);Np(),Bc.current=s,Ke=r,Lt!==null?e=0:(Ht=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=vd(t),r!==0&&(i=r,e=Xd(t,r))),e===1)throw n=Pa,ns(t,0),dr(t,i),Sn(t,Ct()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!NT(r)&&(e=zc(t,i),e===2&&(s=vd(t),s!==0&&(i=s,e=Xd(t,s))),e===1))throw n=Pa,ns(t,0),dr(t,i),Sn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Wr(t,vn,Ni);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=qp+500-Ct(),10<e)){if(Ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wd(Wr.bind(null,t,vn,Ni),e);break}Wr(t,vn,Ni);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IT(i/1960))-i,10<i){t.timeoutHandle=wd(Wr.bind(null,t,vn,Ni),i);break}Wr(t,vn,Ni);break;case 5:Wr(t,vn,Ni);break;default:throw Error(ie(329))}}}return Sn(t,Ct()),t.callbackNode===n?Oy.bind(null,t):null}function Xd(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=zc(t,e),t!==2&&(e=vn,vn=n,e!==null&&jd(e)),t}function jd(t){vn===null?vn=t:vn.push.apply(vn,t)}function NT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~$p,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function f0(t){if(Ke&6)throw Error(ie(327));Js();var e=Ec(t,0);if(!(e&1))return Sn(t,Ct()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var i=vd(t);i!==0&&(e=i,n=Xd(t,i))}if(n===1)throw n=Pa,ns(t,0),dr(t,e),Sn(t,Ct()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,vn,Ni),Sn(t,Ct()),null}function Kp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(co=Ct()+500,uu&&Lr())}}function cs(t){mr!==null&&mr.tag===0&&!(Ke&6)&&Js();var e=Ke;Ke|=1;var n=zn.transition,i=rt;try{if(zn.transition=null,rt=1,t)return t()}finally{rt=i,zn.transition=n,Ke=e,!(Ke&6)&&Lr()}}function Zp(){An=Hs.current,pt(Hs)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uT(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Dp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rc();break;case 3:ao(),pt(xn),pt(rn),Vp();break;case 5:kp(i);break;case 4:ao();break;case 13:pt(vt);break;case 19:pt(vt);break;case 10:Fp(i.type._context);break;case 22:case 23:Zp()}n=n.return}if(Ht=t,Lt=t=wr(t.current,null),Yt=An=e,Ft=0,Pa=null,$p=pu=ls=0,vn=oa=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Kr=null}return t}function By(t,e){do{var n=Lt;try{if(Np(),tc.current=Oc,Uc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(as=0,zt=Nt=xt=null,ra=!1,Ca=0,Yp.current=null,n===null||n.return===null){Ft=1,Pa=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Qg(o);if(p!==null){p.flags&=-257,Jg(p,o,a,s,e),p.mode&1&&Zg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Zg(s,c,e),Qp();break e}l=Error(ie(426))}}else if(mt&&a.mode&1){var v=Qg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Jg(v,o,a,s,e),Lp(lo(l,a));break e}}s=l=lo(l,a),Ft!==4&&(Ft=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Sy(s,l,e);Xg(s,d);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Er===null||!Er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=My(s,a,e);Xg(s,S);break e}}s=s.return}while(s!==null)}zy(n)}catch(E){e=E,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function ky(){var t=Bc.current;return Bc.current=Oc,t===null?Oc:t}function Qp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(ls&268435455)&&!(pu&268435455)||dr(Ht,Yt)}function zc(t,e){var n=Ke;Ke|=2;var i=ky();(Ht!==t||Yt!==e)&&(Ni=null,ns(t,e));do try{FT();break}catch(r){By(t,r)}while(!0);if(Np(),Ke=n,Bc.current=i,Lt!==null)throw Error(ie(261));return Ht=null,Yt=0,Ft}function FT(){for(;Lt!==null;)Vy(Lt)}function UT(){for(;Lt!==null&&!a1();)Vy(Lt)}function Vy(t){var e=Gy(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?zy(t):Lt=e,Yp.current=null}function zy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bT(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=RT(n,e,An),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Wr(t,e,n){var i=rt,r=zn.transition;try{zn.transition=null,rt=1,OT(t,e,n,i)}finally{zn.transition=r,rt=i}return null}function OT(t,e,n,i){do Js();while(mr!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v1(t,s),t===Ht&&(Lt=Ht=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Wy(Mc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=rt;rt=1;var a=Ke;Ke|=4,Yp.current=null,DT(t,n),Fy(n,t),iT(Ed),Tc=!!Md,Ed=Md=null,t.current=n,LT(n),l1(),Ke=a,rt=o,zn.transition=s}else t.current=n;if(ml&&(ml=!1,mr=t,Vc=r),s=t.pendingLanes,s===0&&(Er=null),f1(n.stateNode),Sn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kc)throw kc=!1,t=Gd,Gd=null,t;return Vc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Wd?aa++:(aa=0,Wd=t):aa=0,Lr(),null}function Js(){if(mr!==null){var t=Sx(Vc),e=zn.transition,n=rt;try{if(zn.transition=null,rt=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Vc=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:sa(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var u=f.sibling,p=f.return;if(Ly(f),f===c){_e=null;break}if(u!==null){u.return=p,_e=u;break}_e=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var m=t.current;for(_e=m;_e!==null;){o=_e;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,_e=_;else e:for(o=m;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(E){Mt(a,a.return,E)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Ke=r,Lr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(su,t)}catch{}i=!0}return i}finally{rt=n,zn.transition=e}}return!1}function d0(t,e,n){e=lo(n,e),e=Sy(t,e,1),t=Mr(t,e,1),e=fn(),t!==null&&(Va(t,1,e),Sn(t,e))}function Mt(t,e,n){if(t.tag===3)d0(t,t,n);else for(;e!==null;){if(e.tag===3){d0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=lo(n,t),t=My(e,t,1),e=Mr(e,t,1),t=fn(),e!==null&&(Va(e,1,t),Sn(e,t));break}}e=e.return}}function BT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>Ct()-qp?ns(t,0):$p|=n),Sn(t,e)}function Hy(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=fn();t=Xi(t,e),t!==null&&(Va(t,e,n),Sn(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hy(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Hy(t,n)}var Gy;Gy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,CT(t,e,n);_n=!!(t.flags&131072)}else _n=!1,mt&&e.flags&1048576&&Yx(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ic(t,e),t=e.pendingProps;var r=ro(e,rn.current);Qs(e,n),r=Hp(null,e,i,t,r,n);var s=Gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Op(e),r.updater=du,e.stateNode=r,r._reactInternals=e,Ld(e,i,t,n),e=Fd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Pp(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HT(i),t=Jn(i,t),r){case 0:e=Nd(null,e,i,t,n);break e;case 1:e=n0(null,e,i,t,n);break e;case 11:e=e0(null,e,i,t,n);break e;case 14:e=t0(null,e,i,Jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),n0(t,e,i,r,n);case 3:e:{if(Ay(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jx(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=lo(Error(ie(423)),e),e=i0(t,e,i,n,r);break e}else if(i!==r){r=lo(Error(ie(424)),e),e=i0(t,e,i,n,r);break e}else for(Cn=Sr(e.stateNode.containerInfo.firstChild),bn=e,mt=!0,ti=null,n=Zx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),i===r){e=ji(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return ey(e),t===null&&bd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Td(i,r)?o=null:s!==null&&Td(i,s)&&(e.flags|=32),wy(t,e),an(t,e,o,n),e.child;case 6:return t===null&&bd(e),null;case 13:return Cy(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oo(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),e0(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Lc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!xn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Wn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),t0(t,e,i,r,n);case 15:return Ey(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),ic(t,e),e.tag=1,yn(i)?(t=!0,bc(e)):t=!1,Qs(e,n),yy(e,i,r),Ld(e,i,r,n),Fd(null,e,i,!0,t,n);case 19:return Ry(t,e,n);case 22:return Ty(t,e,n)}throw Error(ie(156,e.tag))};function Wy(t,e){return vx(t,e)}function zT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new zT(t,e,n,i)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HT(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_p)return 11;if(t===xp)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return is(n.children,r,s,e);case vp:o=8,r|=8;break;case nd:return t=kn(12,n,e,r|2),t.elementType=nd,t.lanes=s,t;case id:return t=kn(13,n,e,r),t.elementType=id,t.lanes=s,t;case rd:return t=kn(19,n,e,r),t.elementType=rd,t.lanes=s,t;case ex:return mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q_:o=10;break e;case J_:o=9;break e;case _p:o=11;break e;case xp:o=14;break e;case cr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=kn(22,t,i,e),t.elementType=ex,t.lanes=n,t.stateNode={isHidden:!1},t}function tf(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function nf(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function em(t,e,n,i,r,s,o,a,l){return t=new GT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(s),t}function WT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xy(t){if(!t)return Cr;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(yn(n))return Xx(t,n,e)}return e}function jy(t,e,n,i,r,s,o,a,l){return t=em(n,i,!0,t,r,s,o,a,l),t.context=Xy(null),n=t.current,i=fn(),r=Tr(n),s=Vi(i,r),s.callback=e??null,Mr(n,s,r),t.current.lanes=r,Va(t,r,i),Sn(t,i),t}function gu(t,e,n,i){var r=e.current,s=fn(),o=Tr(r);return n=Xy(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,o),t!==null&&(si(t,r,o,s),ec(t,r,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function h0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tm(t,e){h0(t,e),(t=t.alternate)&&h0(t,e)}function XT(){return null}var Yy=typeof reportError=="function"?reportError:function(t){console.error(t)};function nm(t){this._internalRoot=t}vu.prototype.render=nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));gu(t,e,null,null)};vu.prototype.unmount=nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){gu(null,t,null,null)}),e[Wi]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Ax(t)}};function im(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function p0(){}function jT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(o);s.call(c)}}var o=jy(e,i,t,0,null,!1,!1,"",p0);return t._reactRootContainer=o,t[Wi]=o.current,Ma(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hc(l);a.call(c)}}var l=em(t,0,!1,null,null,!1,!1,"",p0);return t._reactRootContainer=l,t[Wi]=l.current,Ma(t.nodeType===8?t.parentNode:t),cs(function(){gu(e,l,n,i)}),l}function xu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hc(o);a.call(l)}}gu(e,o,t,r)}else o=jT(n,e,t,r,i);return Hc(o)}Mx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(Mp(e,n|1),Sn(e,Ct()),!(Ke&6)&&(co=Ct()+500,Lr()))}break;case 13:cs(function(){var i=Xi(t,1);if(i!==null){var r=fn();si(i,t,1,r)}}),tm(t,1)}};Ep=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=fn();si(e,t,134217728,n)}tm(t,134217728)}};Ex=function(t){if(t.tag===13){var e=Tr(t),n=Xi(t,e);if(n!==null){var i=fn();si(n,t,e,i)}tm(t,e)}};Tx=function(){return rt};wx=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};pd=function(t,e,n){switch(e){case"input":if(ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(ie(90));nx(i),ad(i,r)}}}break;case"textarea":rx(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};fx=Kp;dx=cs;var YT={usingClientEntryPoint:!1,Events:[Ha,Us,cu,cx,ux,Kp]},Fo={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$T={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mx(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||XT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{su=gl.inject($T),yi=gl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!im(e))throw Error(ie(200));return WT(t,e,null,n)};Dn.createRoot=function(t,e){if(!im(t))throw Error(ie(299));var n=!1,i="",r=Yy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=em(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,Ma(t.nodeType===8?t.parentNode:t),new nm(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=mx(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return cs(t)};Dn.hydrate=function(t,e,n){if(!_u(e))throw Error(ie(200));return xu(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!im(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Yy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jy(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};Dn.render=function(t,e,n){if(!_u(e))throw Error(ie(200));return xu(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!_u(t))throw Error(ie(40));return t._reactRootContainer?(cs(function(){xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Kp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return xu(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function $y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y)}catch(t){console.error(t)}}$y(),$_.exports=Dn;var qT=$_.exports,qy,m0=qT;qy=m0.createRoot,m0.hydrateRoot;const rm=Q.createContext({});function sm(t){const e=Q.useRef(null);return e.current===null&&(e.current=t()),e.current}const Ky=typeof window<"u",Zy=Ky?Q.useLayoutEffect:Q.useEffect,yu=Q.createContext(null);function om(t,e){t.indexOf(e)===-1&&t.push(e)}function Gc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const wi=(t,e,n)=>n>e?e:n<t?t:n;let Su=()=>{},uo=()=>{};const Yi={},Qy=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Jy(t){return typeof t=="object"&&t!==null}const eS=t=>/^0[^.\s]+$/u.test(t);function tS(t){let e;return()=>(e===void 0&&(e=t()),e)}const Hn=t=>t,KT=(t,e)=>n=>e(t(n)),Wa=(...t)=>t.reduce(KT),Da=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class am{constructor(){this.subscriptions=[]}add(e){return om(this.subscriptions,e),()=>Gc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gn=t=>t*1e3,Vn=t=>t/1e3;function nS(t,e){return e?t*(1e3/e):0}const iS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,ZT=1e-7,QT=12;function JT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=iS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>ZT&&++a<QT);return o}function Xa(t,e,n,i){if(t===e&&n===i)return Hn;const r=s=>JT(s,0,1,t,n);return s=>s===0||s===1?s:iS(r(s),e,i)}const rS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,sS=t=>e=>1-t(1-e),oS=Xa(.33,1.53,.69,.99),lm=sS(oS),aS=rS(lm),lS=t=>(t*=2)<1?.5*lm(t):.5*(2-Math.pow(2,-10*(t-1))),cm=t=>1-Math.sin(Math.acos(t)),cS=sS(cm),uS=rS(cm),ew=Xa(.42,0,1,1),tw=Xa(0,0,.58,1),fS=Xa(.42,0,.58,1),nw=t=>Array.isArray(t)&&typeof t[0]!="number",dS=t=>Array.isArray(t)&&typeof t[0]=="number",g0={linear:Hn,easeIn:ew,easeInOut:fS,easeOut:tw,circIn:cm,circInOut:uS,circOut:cS,backIn:lm,backInOut:aS,backOut:oS,anticipate:lS},iw=t=>typeof t=="string",v0=t=>{if(dS(t)){uo(t.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[e,n,i,r]=t;return Xa(e,n,i,r)}else if(iw(t))return uo(g0[t]!==void 0,`Invalid easing type '${t}'`,"invalid-easing-type"),g0[t];return t},vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],_0={value:null,addProjectionMetrics:null};function rw(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(h){o.has(h)&&(f.schedule(h),t()),l++,h(a)}const f={schedule:(h,u=!1,p=!1)=>{const y=p&&r?n:i;return u&&o.add(h),y.has(h)||y.add(h),h},cancel:h=>{i.delete(h),o.delete(h)},process:h=>{if(a=h,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(c),e&&_0.value&&_0.value.frameloop[e].push(l),l=0,n.clear(),r=!1,s&&(s=!1,f.process(h))}};return f}const sw=40;function hS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=vl.reduce((_,S)=>(_[S]=rw(s,e?S:void 0),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:h,preRender:u,render:p,postRender:g}=o,y=()=>{const _=Yi.useManualTiming?r.timestamp:performance.now();n=!1,Yi.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,sw),1)),r.timestamp=_,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),h.process(r),u.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},v=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:vl.reduce((_,S)=>{const E=o[S];return _[S]=(A,C=!1,x=!1)=>(n||v(),E.schedule(A,C,x)),_},{}),cancel:_=>{for(let S=0;S<vl.length;S++)o[vl[S]].cancel(_)},state:r,steps:o}}const{schedule:dt,cancel:Rr,state:Xt,steps:rf}=hS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Hn,!0);let ac;function ow(){ac=void 0}const cn={now:()=>(ac===void 0&&cn.set(Xt.isProcessing||Yi.useManualTiming?Xt.timestamp:performance.now()),ac),set:t=>{ac=t,queueMicrotask(ow)}},pS=t=>e=>typeof e=="string"&&e.startsWith(t),mS=pS("--"),aw=pS("var(--"),um=t=>aw(t)?lw.test(t.split("/*")[0].trim()):!1,lw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function x0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const So={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},La={...So,transform:t=>wi(0,1,t)},_l={...So,default:1},la=t=>Math.round(t*1e5)/1e5,fm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function cw(t){return t==null}const uw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,dm=(t,e)=>n=>!!(typeof n=="string"&&uw.test(n)&&n.startsWith(t)||e&&!cw(n)&&Object.prototype.hasOwnProperty.call(n,e)),gS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(fm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},fw=t=>wi(0,255,t),sf={...So,transform:t=>Math.round(fw(t))},Qr={test:dm("rgb","red"),parse:gS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+sf.transform(t)+", "+sf.transform(e)+", "+sf.transform(n)+", "+la(La.transform(i))+")"};function dw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yd={test:dm("#"),parse:dw,transform:Qr.transform},ja=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ar=ja("deg"),Mi=ja("%"),ye=ja("px"),hw=ja("vh"),pw=ja("vw"),y0={...Mi,parse:t=>Mi.parse(t)/100,transform:t=>Mi.transform(t*100)},Gs={test:dm("hsl","hue"),parse:gS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Mi.transform(la(e))+", "+Mi.transform(la(n))+", "+la(La.transform(i))+")"},Dt={test:t=>Qr.test(t)||Yd.test(t)||Gs.test(t),parse:t=>Qr.test(t)?Qr.parse(t):Gs.test(t)?Gs.parse(t):Yd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Qr.transform(t):Gs.transform(t),getAnimatableNone:t=>{const e=Dt.parse(t);return e.alpha=0,Dt.transform(e)}},mw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(fm))==null?void 0:e.length)||0)+(((n=t.match(mw))==null?void 0:n.length)||0)>0}const vS="number",_S="color",vw="var",_w="var(",S0="${}",xw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ia(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(xw,l=>(Dt.test(l)?(i.color.push(s),r.push(_S),n.push(Dt.parse(l))):l.startsWith(_w)?(i.var.push(s),r.push(vw),n.push(l)):(i.number.push(s),r.push(vS),n.push(parseFloat(l))),++s,S0)).split(S0);return{values:n,split:a,indexes:i,types:r}}function xS(t){return Ia(t).values}function yS(t){const{split:e,types:n}=Ia(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===vS?s+=la(r[o]):a===_S?s+=Dt.transform(r[o]):s+=r[o]}return s}}const yw=t=>typeof t=="number"?0:Dt.test(t)?Dt.getAnimatableNone(t):t;function Sw(t){const e=xS(t);return yS(t)(e.map(yw))}const oi={test:gw,parse:xS,createTransformer:yS,getAnimatableNone:Sw};function of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Mw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=of(l,a,t+1/3),s=of(l,a,t),o=of(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Wc(t,e){return n=>n>0?e:t}const _t=(t,e,n)=>t+(e-t)*n,af=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Ew=[Yd,Qr,Gs],Tw=t=>Ew.find(e=>e.test(t));function M0(t){const e=Tw(t);if(Su(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let n=e.parse(t);return e===Gs&&(n=Mw(n)),n}const E0=(t,e)=>{const n=M0(t),i=M0(e);if(!n||!i)return Wc(t,e);const r={...n};return s=>(r.red=af(n.red,i.red,s),r.green=af(n.green,i.green,s),r.blue=af(n.blue,i.blue,s),r.alpha=_t(n.alpha,i.alpha,s),Qr.transform(r))},$d=new Set(["none","hidden"]);function ww(t,e){return $d.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Aw(t,e){return n=>_t(t,e,n)}function hm(t){return typeof t=="number"?Aw:typeof t=="string"?um(t)?Wc:Dt.test(t)?E0:bw:Array.isArray(t)?SS:typeof t=="object"?Dt.test(t)?E0:Cw:Wc}function SS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>hm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function Cw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=hm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function Rw(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const bw=(t,e)=>{const n=oi.createTransformer(e),i=Ia(t),r=Ia(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?$d.has(t)&&!r.values.length||$d.has(e)&&!i.values.length?ww(t,e):Wa(SS(Rw(i,r),r.values),n):(Su(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),Wc(t,e))};function MS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?_t(t,e,n):hm(t)(t,e)}const Pw=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>dt.update(e,n),stop:()=>Rr(e),now:()=>Xt.isProcessing?Xt.timestamp:cn.now()}},ES=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Xc=2e4;function pm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Xc;)e+=n,i=t.next(e);return e>=Xc?1/0:e}function Dw(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(pm(i),Xc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Vn(r)}}const Lw=5;function TS(t,e,n){const i=Math.max(e-Lw,0);return nS(n-t(i),e-i)}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},lf=.001;function Iw({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let r,s;Su(t<=Gn(gt.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-e;o=wi(gt.minDamping,gt.maxDamping,o),t=wi(gt.minDuration,gt.maxDuration,Vn(t)),o<1?(r=c=>{const f=c*o,h=f*t,u=f-n,p=qd(c,o),g=Math.exp(-h);return lf-u/p*g},s=c=>{const h=c*o*t,u=h*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-h),y=qd(Math.pow(c,2),o);return(-r(c)+lf>0?-1:1)*((u-p)*g)/y}):(r=c=>{const f=Math.exp(-c*t),h=(c-n)*t+1;return-lf+f*h},s=c=>{const f=Math.exp(-c*t),h=(n-c)*(t*t);return f*h});const a=5/t,l=Fw(r,s,a);if(t=Gn(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Nw=12;function Fw(t,e,n){let i=n;for(let r=1;r<Nw;r++)i=i-t(i)/e(i);return i}function qd(t,e){return t*Math.sqrt(1-e*e)}const Uw=["duration","bounce"],Ow=["stiffness","damping","mass"];function T0(t,e){return e.some(n=>t[n]!==void 0)}function Bw(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!T0(t,Ow)&&T0(t,Uw))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*wi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:gt.mass,stiffness:r,damping:s}}else{const n=Iw({...t,velocity:0});e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function jc(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:h,velocity:u,isResolvedFromDuration:p}=Bw({...n,velocity:-Vn(n.velocity||0)}),g=u||0,y=c/(2*Math.sqrt(l*f)),v=o-s,d=Vn(Math.sqrt(l/f)),m=Math.abs(v)<5;i||(i=m?gt.restSpeed.granular:gt.restSpeed.default),r||(r=m?gt.restDelta.granular:gt.restDelta.default);let _;if(y<1){const E=qd(d,y);_=A=>{const C=Math.exp(-y*d*A);return o-C*((g+y*d*v)/E*Math.sin(E*A)+v*Math.cos(E*A))}}else if(y===1)_=E=>o-Math.exp(-d*E)*(v+(g+d*v)*E);else{const E=d*Math.sqrt(y*y-1);_=A=>{const C=Math.exp(-y*d*A),x=Math.min(E*A,300);return o-C*((g+y*d*v)*Math.sinh(x)+E*v*Math.cosh(x))/E}}const S={calculatedDuration:p&&h||null,next:E=>{const A=_(E);if(p)a.done=E>=h;else{let C=E===0?g:0;y<1&&(C=E===0?Gn(g):TS(_,E,A));const x=Math.abs(C)<=i,T=Math.abs(o-A)<=r;a.done=x&&T}return a.value=a.done?o:A,a},toString:()=>{const E=Math.min(pm(S),Xc),A=ES(C=>S.next(E*C).value,E,30);return E+"ms "+A},toTransition:()=>{}};return S}jc.applyToOptions=t=>{const e=Dw(t,100,jc);return t.ease=e.ease,t.duration=Gn(e.duration),t.type="keyframes",t};function Kd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const h=t[0],u={done:!1,value:h},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,g=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const v=h+y,d=o===void 0?v:o(v);d!==v&&(y=d-h);const m=x=>-y*Math.exp(-x/i),_=x=>d+m(x),S=x=>{const T=m(x),L=_(x);u.done=Math.abs(T)<=c,u.value=u.done?d:L};let E,A;const C=x=>{p(u.value)&&(E=x,A=jc({keyframes:[u.value,g(u.value)],velocity:TS(_,x,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return C(0),{calculatedDuration:null,next:x=>{let T=!1;return!A&&E===void 0&&(T=!0,S(x),C(x)),E!==void 0&&x>=E?A.next(x-E):(!T&&S(x),u)}}}function kw(t,e,n){const i=[],r=n||Yi.mix||MS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Hn:e;a=Wa(l,a)}i.push(a)}return i}function Vw(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(uo(s===e.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=kw(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(f<t[h+1]);h++);const u=Da(t[h],t[h+1],f);return a[h](u)};return n?f=>c(wi(t[0],t[s-1],f)):c}function zw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Da(0,e,i);t.push(_t(n,1,r))}}function Hw(t){const e=[0];return zw(e,t.length-1),e}function Gw(t,e){return t.map(n=>n*e)}function Ww(t,e){return t.map(()=>e||fS).splice(0,t.length-1)}function ca({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=nw(i)?i.map(v0):v0(i),s={done:!1,value:e[0]},o=Gw(n&&n.length===e.length?n:Hw(e),t),a=Vw(o,e,{ease:Array.isArray(r)?r:Ww(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Xw=t=>t!==null;function mm(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Xw),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const jw={decay:Kd,inertia:Kd,tween:ca,keyframes:ca,spring:jc};function wS(t){typeof t.type=="string"&&(t.type=jw[t.type])}class gm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Yw=t=>t/100;class vm extends gm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==cn.now()&&this.tick(cn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;wS(e);const{type:n=ca,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||ca;l!==ca&&typeof a[0]!="number"&&(this.mixKeyframes=Wa(Yw,MS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=pm(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:h,repeatType:u,repeatDelay:p,type:g,onUpdate:y,finalKeyframe:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const d=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,S=i;if(h){const x=Math.min(this.currentTime,r)/a;let T=Math.floor(x),L=x%1;!L&&x>=1&&(L=1),L===1&&T--,T=Math.min(T,h+1),!!(T%2)&&(u==="reverse"?(L=1-L,p&&(L-=p/a)):u==="mirror"&&(S=o)),_=wi(0,1,L)*a}const E=m?{done:!1,value:f[0]}:S.next(_);s&&(E.value=s(E.value));let{done:A}=E;!m&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&g!==Kd&&(E.value=mm(f,this.options,v,this.speed)),y&&y(E.value),C&&this.finish(),E}then(e,n){return this.finished.then(e,n)}get duration(){return Vn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(this.currentTime)}set time(e){var n;e=Gn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(cn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Vn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=Pw,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(cn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function $w(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Jr=t=>t*180/Math.PI,Zd=t=>{const e=Jr(Math.atan2(t[1],t[0]));return Qd(e)},qw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Zd,rotateZ:Zd,skewX:t=>Jr(Math.atan(t[1])),skewY:t=>Jr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Qd=t=>(t=t%360,t<0&&(t+=360),t),w0=Zd,A0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),C0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Kw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:A0,scaleY:C0,scale:t=>(A0(t)+C0(t))/2,rotateX:t=>Qd(Jr(Math.atan2(t[6],t[5]))),rotateY:t=>Qd(Jr(Math.atan2(-t[2],t[0]))),rotateZ:w0,rotate:w0,skewX:t=>Jr(Math.atan(t[4])),skewY:t=>Jr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Jd(t){return t.includes("scale")?1:0}function eh(t,e){if(!t||t==="none")return Jd(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Kw,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=qw,r=a}if(!r)return Jd(e);const s=i[e],o=r[1].split(",").map(Qw);return typeof s=="function"?s(o):o[s]}const Zw=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return eh(n,e)};function Qw(t){return parseFloat(t.trim())}const Mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=new Set(Mo),R0=t=>t===So||t===ye,Jw=new Set(["x","y","z"]),eA=Mo.filter(t=>!Jw.has(t));function tA(t){const e=[];return eA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const gr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>eh(e,"x"),y:(t,{transform:e})=>eh(e,"y")};gr.translateX=gr.x;gr.translateY=gr.y;const rs=new Set;let th=!1,nh=!1,ih=!1;function AS(){if(nh){const t=Array.from(rs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=tA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}nh=!1,th=!1,rs.forEach(t=>t.complete(ih)),rs.clear()}function CS(){rs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(nh=!0)})}function nA(){ih=!0,CS(),AS(),ih=!1}class _m{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(rs.add(this),th||(th=!0,dt.read(CS),dt.resolveKeyframes(AS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}$w(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),rs.delete(this)}cancel(){this.state==="scheduled"&&(rs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const iA=t=>t.startsWith("--");function rA(t,e,n){iA(e)?t.style.setProperty(e,n):t.style[e]=n}const sA={};function RS(t,e){const n=tS(t);return()=>sA[e]??n()}const oA=RS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),bS=RS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ko=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,b0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ko([0,.65,.55,1]),circOut:Ko([.55,0,1,.45]),backIn:Ko([.31,.01,.66,-.59]),backOut:Ko([.33,1.53,.69,.99])};function PS(t,e){if(t)return typeof t=="function"?bS()?ES(t,e):"ease-out":dS(t)?Ko(t):Array.isArray(t)?t.map(n=>PS(n,e)||b0.easeOut):b0[t]}function aA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const h=PS(a,r);Array.isArray(h)&&(f.easing=h);const u={delay:i,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(f,u)}function DS(t){return typeof t=="function"&&"applyToOptions"in t}function lA({type:t,...e}){return DS(t)&&bS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class LS extends gm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,uo(typeof e.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const c=lA(e);this.animation=aA(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=mm(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(f):rA(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Vn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Gn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&oA()?(this.animation.timeline=e,Hn):n(this)}}const IS={anticipate:lS,backInOut:aS,circInOut:uS};function cA(t){return t in IS}function uA(t){typeof t.ease=="string"&&cA(t.ease)&&(t.ease=IS[t.ease])}const cf=10;class fA extends LS{constructor(e){uA(e),wS(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new vm({...o,autoplay:!1}),l=Math.max(cf,cn.now()-this.startTime),c=wi(0,cf,l-cf);n.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const P0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(oi.test(t)||t==="0")&&!t.startsWith("url("));function dA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function hA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=P0(r,e),a=P0(s,e);return Su(o===a,`You are trying to animate ${e} from "${r}" to "${s}". "${o?s:r}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:dA(t)||(n==="spring"||DS(n))&&i}function rh(t){t.duration=0,t.type="keyframes"}const pA=new Set(["opacity","clipPath","filter","transform"]),mA=tS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gA(t){var f;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((f=e==null?void 0:e.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return mA()&&n&&pA.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const vA=40;class _A extends gm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:f,...h}){var g;super(),this.stop=()=>{var y,v;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(v=this.keyframeResolver)==null||v.cancel()},this.createdAt=cn.now();const u={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:f,...h},p=(f==null?void 0:f.KeyframeResolver)||_m;this.keyframeResolver=new p(a,(y,v,d)=>this.onKeyframesResolved(y,v,u,!d),l,c,f),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,n,i,r){var v,d;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=cn.now(),hA(e,s,o,a)||((Yi.instantAnimations||!l)&&(f==null||f(mm(e,i,n))),e[0]=e[e.length-1],rh(i),i.repeat=0);const u={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>vA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&gA(u),g=(d=(v=u.motionValue)==null?void 0:v.owner)==null?void 0:d.current,y=p?new fA({...u,element:g}):new vm(u);y.finished.then(()=>{this.notifyFinished()}).catch(Hn),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),nA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function NS(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const xA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yA(t){const e=xA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}const SA=4;function FS(t,e,n=1){uo(n<=SA,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[i,r]=yA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Qy(o)?parseFloat(o):o}return um(r)?FS(r,e,n+1):r}const MA={type:"spring",stiffness:500,damping:25,restSpeed:10},EA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),TA={type:"keyframes",duration:.8},wA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AA=(t,{keyframes:e})=>e.length>2?TA:Eo.has(t)?t.startsWith("scale")?EA(e[1]):MA:wA,CA=t=>t!==null;function RA(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(CA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}function US(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function xm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?US(n,t):n}function bA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...f}){return!!Object.keys(f).length}const ym=(t,e,n,i={},r,s)=>o=>{const a=xm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Gn(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};bA(a)||Object.assign(f,AA(t,f)),f.duration&&(f.duration=Gn(f.duration)),f.repeatDelay&&(f.repeatDelay=Gn(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let h=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(rh(f),f.delay===0&&(h=!0)),(Yi.instantAnimations||Yi.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(h=!0,rh(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,h&&!s&&e.get()!==void 0){const u=RA(f.keyframes,a);if(u!==void 0){dt.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new vm(f):new _A(f)};function D0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Sm(t,e,n,i){if(typeof e=="function"){const[r,s]=D0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=D0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function eo(t,e,n){const i=t.getProps();return Sm(i,e,n!==void 0?n:i.custom,t)}const OS=new Set(["width","height","top","left","right","bottom",...Mo]),L0=30,PA=t=>!isNaN(parseFloat(t));class DA{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=cn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=cn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=PA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new am);const i=this.events[e].add(n);return e==="change"?()=>{i(),dt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>L0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,L0);return nS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fo(t,e){return new DA(t,e)}const sh=t=>Array.isArray(t);function LA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,fo(n))}function IA(t){return sh(t)?t[t.length-1]||0:t}function NA(t,e){const n=eo(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=IA(s[o]);LA(t,o,a)}}const tn=t=>!!(t&&t.getVelocity);function FA(t){return!!(tn(t)&&t.add)}function oh(t,e){const n=t.getValue("willChange");if(FA(n))return n.add(e);if(!n&&Yi.WillChange){const i=new Yi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Mm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const UA="framerAppearId",BS="data-"+Mm(UA);function kS(t){return t.props[BS]}function OA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function VS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?US(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const f=[],h=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const p=t.getValue(u,t.latestValues[u]??null),g=a[u];if(g===void 0||h&&OA(h,u))continue;const y={delay:n,...xm(s||{},u)},v=p.get();if(v!==void 0&&!p.isAnimating&&!Array.isArray(g)&&g===v&&!y.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const S=kS(t);if(S){const E=window.MotionHandoffAnimation(S,u,dt);E!==null&&(y.startTime=E,d=!0)}}oh(t,u);const m=c??t.shouldReduceMotion;p.start(ym(u,p,g,m&&OS.has(u)?{type:!1}:y,t,d));const _=p.animation;_&&f.push(_)}if(o){const u=()=>dt.update(()=>{o&&NA(t,o)});f.length?Promise.all(f).then(u):u()}return f}function ah(t,e,n={}){var l;const i=eo(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(VS(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:h,staggerDirection:u}=r;return BA(t,e,c,f,h,u,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,f]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function BA(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(ah(l,e,{...o,delay:n+(typeof i=="function"?0:i)+NS(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function kA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>ah(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=ah(t,e,n);else{const r=typeof e=="function"?eo(t,e,n.custom):e;i=Promise.all(VS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const VA={test:t=>t==="auto",parse:t=>t},zS=t=>e=>e.test(t),HS=[So,ye,Mi,ar,pw,hw,VA],I0=t=>HS.find(zS(t));function zA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||eS(t):!0}const HA=new Set(["brightness","contrast","saturate","opacity"]);function GA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(fm)||[];if(!i)return t;const r=n.replace(i,"");let s=HA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const WA=/\b([a-z-]*)\(.*?\)/gu,lh={...oi,getAnimatableNone:t=>{const e=t.match(WA);return e?e.map(GA).join(" "):t}},ch={...oi,getAnimatableNone:t=>{const e=oi.parse(t);return oi.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},N0={...So,transform:Math.round},XA={rotate:ar,rotateX:ar,rotateY:ar,rotateZ:ar,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:ar,skewX:ar,skewY:ar,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:La,originX:y0,originY:y0,originZ:ye},Em={borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,top:ye,right:ye,bottom:ye,left:ye,inset:ye,insetBlock:ye,insetBlockStart:ye,insetBlockEnd:ye,insetInline:ye,insetInlineStart:ye,insetInlineEnd:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,paddingBlock:ye,paddingBlockStart:ye,paddingBlockEnd:ye,paddingInline:ye,paddingInlineStart:ye,paddingInlineEnd:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,marginBlock:ye,marginBlockStart:ye,marginBlockEnd:ye,marginInline:ye,marginInlineStart:ye,marginInlineEnd:ye,fontSize:ye,backgroundPositionX:ye,backgroundPositionY:ye,...XA,zIndex:N0,fillOpacity:La,strokeOpacity:La,numOctaves:N0},jA={...Em,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:lh,WebkitFilter:lh,mask:ch,WebkitMask:ch},GS=t=>jA[t],YA=new Set([lh,ch]);function WS(t,e){let n=GS(t);return YA.has(n)||(n=oi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $A=new Set(["auto","none","0"]);function qA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!$A.has(s)&&Ia(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=WS(n,r)}class KA extends _m{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),um(h))){const u=FS(h,n.current);u!==void 0&&(e[f]=u),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!OS.has(i)||e.length!==2)return;const[r,s]=e,o=I0(r),a=I0(s),l=x0(r),c=x0(s);if(l!==c&&gr[i]){this.needsMeasurement=!0;return}if(o!==a)if(R0(o)&&R0(a))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else gr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||zA(e[r]))&&i.push(r);i.length&&qA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=gr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ZA=new Set(["opacity","clipPath","filter","transform"]);function Tm(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const XS=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function uh(t){return Jy(t)&&"offsetHeight"in t}const{schedule:wm,cancel:CN}=hS(queueMicrotask,!1),Qn={x:!1,y:!1};function jS(){return Qn.x||Qn.y}function QA(t){return t==="x"||t==="y"?Qn[t]?null:(Qn[t]=!0,()=>{Qn[t]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}function YS(t,e){const n=Tm(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function JA(t){return!(t.pointerType==="touch"||jS())}function eC(t,e,n={}){const[i,r,s]=YS(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",g)},h=v=>{c&&(c(v),c=void 0),f()},u=v=>{a=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,h(v))},p=()=>{a=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},g=v=>{if(v.pointerType!=="touch"){if(a){l=!0;return}h(v)}},y=v=>{if(!JA(v))return;l=!1;const d=e(o,v);typeof d=="function"&&(c=d,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const $S=(t,e)=>e?t===e?!0:$S(t,e.parentElement):!1,Am=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,tC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function nC(t){return tC.has(t.tagName)||t.isContentEditable===!0}const iC=new Set(["INPUT","SELECT","TEXTAREA"]);function rC(t){return iC.has(t.tagName)||t.isContentEditable===!0}const lc=new WeakSet;function F0(t){return e=>{e.key==="Enter"&&t(e)}}function uf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const sC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=F0(()=>{if(lc.has(n))return;uf(n,"down");const r=F0(()=>{uf(n,"up")}),s=()=>uf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function U0(t){return Am(t)&&!jS()}const O0=new WeakSet;function oC(t,e,n={}){const[i,r,s]=YS(t,n),o=a=>{const l=a.currentTarget;if(!U0(a)||O0.has(a))return;lc.add(l),n.stopPropagation&&O0.add(a);const c=e(l,a),f=(p,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",u),lc.has(l)&&lc.delete(l),U0(p)&&typeof c=="function"&&c(p,{success:g})},h=p=>{f(p,l===window||l===document||n.useGlobalTarget||$S(l,p.target))},u=p=>{f(p,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",u,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),uh(a)&&(a.addEventListener("focus",c=>sC(c,r)),!nC(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Cm(t){return Jy(t)&&"ownerSVGElement"in t}const cc=new WeakMap;let lr;const qS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Cm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],aC=qS("inline","width","offsetWidth"),lC=qS("block","height","offsetHeight");function cC({target:t,borderBoxSize:e}){var n;(n=cc.get(t))==null||n.forEach(i=>{i(t,{get width(){return aC(t,e)},get height(){return lC(t,e)}})})}function uC(t){t.forEach(cC)}function fC(){typeof ResizeObserver>"u"||(lr=new ResizeObserver(uC))}function dC(t,e){lr||fC();const n=Tm(t);return n.forEach(i=>{let r=cc.get(i);r||(r=new Set,cc.set(i,r)),r.add(e),lr==null||lr.observe(i)}),()=>{n.forEach(i=>{const r=cc.get(i);r==null||r.delete(e),r!=null&&r.size||lr==null||lr.unobserve(i)})}}const uc=new Set;let Ws;function hC(){Ws=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};uc.forEach(e=>e(t))},window.addEventListener("resize",Ws)}function pC(t){return uc.add(t),Ws||hC(),()=>{uc.delete(t),!uc.size&&typeof Ws=="function"&&(window.removeEventListener("resize",Ws),Ws=void 0)}}function B0(t,e){return typeof t=="function"?pC(t):dC(t,e)}function mC(t){return Cm(t)&&t.tagName==="svg"}const gC=[...HS,Dt,oi],vC=t=>gC.find(zS(t)),k0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xs=()=>({x:k0(),y:k0()}),V0=()=>({min:0,max:0}),It=()=>({x:V0(),y:V0()}),_C=new WeakMap;function Mu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Na(t){return typeof t=="string"||Array.isArray(t)}const Rm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bm=["initial",...Rm];function Eu(t){return Mu(t.animate)||bm.some(e=>Na(t[e]))}function KS(t){return!!(Eu(t)||t.variants)}function xC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(tn(r))t.addValue(i,r);else if(tn(s))t.addValue(i,fo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,fo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const fh={current:null},ZS={current:!1},yC=typeof window<"u";function SC(){if(ZS.current=!0,!!yC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>fh.current=t.matches;t.addEventListener("change",e),e()}else fh.current=!1}const z0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Yc={};function QS(t){Yc=t}function MC(){return Yc}class EC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=_m,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=cn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,dt.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Eu(n),this.isVariantNode=KS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const g=u[p];c[p]!==void 0&&tn(g)&&g.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,_C.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ZS.current||SC(),this.shouldReduceMotion=fh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&ZA.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,h=new LS({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Gn(f)}),u=o(h);this.valueSubscriptions.set(e,()=>{u(),h.cancel()});return}const i=Eo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&dt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Yc){const n=Yc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):It()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<z0.length;i++){const r=z0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=xC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=fo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Qy(i)||eS(i))?i=parseFloat(i):!vC(i)&&oi.test(n)&&(i=WS(e,n)),this.setBaseTarget(e,tn(i)?i.get():i)),tn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Sm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!tn(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new am),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){wm.render(this.render)}}class JS extends EC{constructor(){super(...arguments),this.KeyframeResolver=KA}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ir{constructor(e){this.isMounted=!1,this.node=e}update(){}}function eM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function TC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function wC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ff(t){return t===void 0||t===1}function dh({scale:t,scaleX:e,scaleY:n}){return!ff(t)||!ff(e)||!ff(n)}function Xr(t){return dh(t)||tM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function tM(t){return H0(t.x)||H0(t.y)}function H0(t){return t&&t!=="0%"}function $c(t,e,n){const i=t-n,r=e*i;return n+r}function G0(t,e,n,i,r){return r!==void 0&&(t=$c(t,r,i)),$c(t,n,i)+e}function hh(t,e=0,n=1,i,r){t.min=G0(t.min,e,n,i,r),t.max=G0(t.max,e,n,i,r)}function nM(t,{x:e,y:n}){hh(t.x,e.translate,e.scale,e.originPoint),hh(t.y,n.translate,n.scale,n.originPoint)}const W0=.999999999999,X0=1.0000000000001;function AC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ys(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,nM(t,o)),i&&Xr(s.latestValues)&&Ys(t,s.latestValues))}e.x<X0&&e.x>W0&&(e.x=1),e.y<X0&&e.y>W0&&(e.y=1)}function js(t,e){t.min=t.min+e,t.max=t.max+e}function j0(t,e,n,i,r=.5){const s=_t(t.min,t.max,r);hh(t,e,n,s,i)}function Ys(t,e){j0(t.x,e.x,e.scaleX,e.scale,e.originX),j0(t.y,e.y,e.scaleY,e.scale,e.originY)}function iM(t,e){return eM(wC(t.getBoundingClientRect(),e))}function CC(t,e,n){const i=iM(t,n),{scroll:r}=e;return r&&(js(i.x,r.offset.x),js(i.y,r.offset.y)),i}const RC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bC=Mo.length;function PC(t,e,n){let i="",r=!0;for(let s=0;s<bC;s++){const o=Mo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=XS(a,Em[o]);if(!l){r=!1;const f=RC[o]||o;i+=`${f}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Pm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Eo.has(l)){o=!0;continue}else if(mS(l)){r[l]=c;continue}else{const f=XS(c,Em[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=PC(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}function rM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Y0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Uo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ye.test(t))t=parseFloat(t);else return t;const n=Y0(t,e.target.x),i=Y0(t,e.target.y);return`${n}% ${i}%`}},DC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=oi.parse(t);if(r.length>5)return i;const s=oi.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=_t(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},ph={borderRadius:{...Uo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Uo,borderTopRightRadius:Uo,borderBottomLeftRadius:Uo,borderBottomRightRadius:Uo,boxShadow:DC};function sM(t,{layout:e,layoutId:n}){return Eo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ph[t]||t==="opacity")}function Dm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(tn(i[a])||r&&tn(r[a])||sM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function LC(t){return window.getComputedStyle(t)}class IC extends JS{constructor(){super(...arguments),this.type="html",this.renderInstance=rM}readValueFromInstance(e,n){var i;if(Eo.has(n))return(i=this.projection)!=null&&i.isProjecting?Jd(n):Zw(e,n);{const r=LC(e),s=(mS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return iM(e,n)}build(e,n,i){Pm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Dm(e,n,i)}}const NC={offset:"stroke-dashoffset",array:"stroke-dasharray"},FC={offset:"strokeDashoffset",array:"strokeDasharray"};function UC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?NC:FC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const OC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function oM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Pm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:u}=t;h.transform&&(u.transform=h.transform,delete h.transform),(u.transform||h.transformOrigin)&&(u.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete h.transformBox);for(const p of OC)h[p]!==void 0&&(u[p]=h[p],delete h[p]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),r!==void 0&&UC(h,r,s,o,!1)}const aM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),lM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function BC(t,e,n,i){rM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(aM.has(r)?r:Mm(r),e.attrs[r])}function cM(t,e,n){const i=Dm(t,e,n);for(const r in t)if(tn(t[r])||tn(e[r])){const s=Mo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class kC extends JS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=It}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Eo.has(n)){const i=GS(n);return i&&i.default||0}return n=aM.has(n)?n:Mm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return cM(e,n,i)}build(e,n,i){oM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){BC(e,n,i,r)}mount(e){this.isSVGTag=lM(e.tagName),super.mount(e)}}const VC=bm.length;function uM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?uM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<VC;n++){const i=bm[n],r=t.props[i];(Na(r)||r===!1)&&(e[i]=r)}return e}function fM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const zC=[...Rm].reverse(),HC=Rm.length;function GC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>kA(t,n,i)))}function WC(t){let e=GC(t),n=$0(),i=!0;const r=l=>(c,f)=>{var u;const h=eo(t,f,l==="exit"?(u=t.presenceContext)==null?void 0:u.custom:void 0);if(h){const{transition:p,transitionEnd:g,...y}=h;c={...c,...y,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,f=uM(t.parent)||{},h=[],u=new Set;let p={},g=1/0;for(let v=0;v<HC;v++){const d=zC[v],m=n[d],_=c[d]!==void 0?c[d]:f[d],S=Na(_),E=d===l?m.isActive:null;E===!1&&(g=v);let A=_===f[d]&&_!==c[d]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),m.protectedKeys={...p},!m.isActive&&E===null||!_&&!m.prevProp||Mu(_)||typeof _=="boolean")continue;if(d==="exit"&&m.isActive&&E!==!0){m.prevResolvedValues&&(p={...p,...m.prevResolvedValues});continue}const C=XC(m.prevProp,_);let x=C||d===l&&m.isActive&&!A&&S||v>g&&S,T=!1;const L=Array.isArray(_)?_:[_];let b=L.reduce(r(d),{});E===!1&&(b={});const{prevResolvedValues:k={}}=m,V={...k,...b},Y=D=>{x=!0,u.has(D)&&(T=!0,u.delete(D)),m.needsAnimating[D]=!0;const U=t.getValue(D);U&&(U.liveStyle=!1)};for(const D in V){const U=b[D],G=k[D];if(p.hasOwnProperty(D))continue;let $=!1;sh(U)&&sh(G)?$=!fM(U,G):$=U!==G,$?U!=null?Y(D):u.add(D):U!==void 0&&u.has(D)?Y(D):m.protectedKeys[D]=!0}m.prevProp=_,m.prevResolvedValues=b,m.isActive&&(p={...p,...b}),i&&t.blockInitialAnimation&&(x=!1);const H=A&&C;x&&(!H||T)&&h.push(...L.map(D=>{const U={type:d};if(typeof D=="string"&&i&&!H&&t.manuallyAnimateOnMount&&t.parent){const{parent:G}=t,$=eo(G,D);if(G.enteringChildren&&$){const{delayChildren:te}=$.transition||{};U.delay=NS(G.enteringChildren,t,te)}}return{animation:D,options:U}}))}if(u.size){const v={};if(typeof c.initial!="boolean"){const d=eo(t,Array.isArray(c.initial)?c.initial[0]:c.initial);d&&d.transition&&(v.transition=d.transition)}u.forEach(d=>{const m=t.getBaseTarget(d),_=t.getValue(d);_&&(_.liveStyle=!0),v[d]=m??null}),h.push({animation:v})}let y=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(h):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)==null||h.forEach(u=>{var p;return(p=u.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const u in n)n[u].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=$0()}}}function XC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!fM(e,t):!1}function Ur(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $0(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}function q0(t,e){t.min=e.min,t.max=e.max}function $n(t,e){q0(t.x,e.x),q0(t.y,e.y)}function K0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const dM=1e-4,jC=1-dM,YC=1+dM,hM=.01,$C=0-hM,qC=0+hM;function un(t){return t.max-t.min}function KC(t,e,n){return Math.abs(t-e)<=n}function Z0(t,e,n,i=.5){t.origin=i,t.originPoint=_t(e.min,e.max,t.origin),t.scale=un(n)/un(e),t.translate=_t(n.min,n.max,t.origin)-t.originPoint,(t.scale>=jC&&t.scale<=YC||isNaN(t.scale))&&(t.scale=1),(t.translate>=$C&&t.translate<=qC||isNaN(t.translate))&&(t.translate=0)}function ua(t,e,n,i){Z0(t.x,e.x,n.x,i?i.originX:void 0),Z0(t.y,e.y,n.y,i?i.originY:void 0)}function Q0(t,e,n){t.min=n.min+e.min,t.max=t.min+un(e)}function ZC(t,e,n){Q0(t.x,e.x,n.x),Q0(t.y,e.y,n.y)}function J0(t,e,n){t.min=e.min-n.min,t.max=t.min+un(e)}function qc(t,e,n){J0(t.x,e.x,n.x),J0(t.y,e.y,n.y)}function ev(t,e,n,i,r){return t-=e,t=$c(t,1/n,i),r!==void 0&&(t=$c(t,1/r,i)),t}function QC(t,e=0,n=1,i=.5,r,s=t,o=t){if(Mi.test(e)&&(e=parseFloat(e),e=_t(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=_t(s.min,s.max,i);t===s&&(a-=e),t.min=ev(t.min,e,n,a,r),t.max=ev(t.max,e,n,a,r)}function tv(t,e,[n,i,r],s,o){QC(t,e[n],e[i],e[r],e.scale,s,o)}const JC=["x","scaleX","originX"],eR=["y","scaleY","originY"];function nv(t,e,n,i){tv(t.x,e,JC,n?n.x:void 0,i?i.x:void 0),tv(t.y,e,eR,n?n.y:void 0,i?i.y:void 0)}function iv(t){return t.translate===0&&t.scale===1}function pM(t){return iv(t.x)&&iv(t.y)}function rv(t,e){return t.min===e.min&&t.max===e.max}function tR(t,e){return rv(t.x,e.x)&&rv(t.y,e.y)}function sv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function mM(t,e){return sv(t.x,e.x)&&sv(t.y,e.y)}function ov(t){return un(t.x)/un(t.y)}function av(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function mi(t){return[t("x"),t("y")]}function nR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,rotateX:h,rotateY:u,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),h&&(i+=`rotateX(${h}deg) `),u&&(i+=`rotateY(${u}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const gM=["TopLeft","TopRight","BottomLeft","BottomRight"],iR=gM.length,lv=t=>typeof t=="string"?parseFloat(t):t,cv=t=>typeof t=="number"||ye.test(t);function rR(t,e,n,i,r,s){r?(t.opacity=_t(0,n.opacity??1,sR(i)),t.opacityExit=_t(e.opacity??1,0,oR(i))):s&&(t.opacity=_t(e.opacity??1,n.opacity??1,i));for(let o=0;o<iR;o++){const a=`border${gM[o]}Radius`;let l=uv(e,a),c=uv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||cv(l)===cv(c)?(t[a]=Math.max(_t(lv(l),lv(c),i),0),(Mi.test(c)||Mi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=_t(e.rotate||0,n.rotate||0,i))}function uv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const sR=vM(0,.5,cS),oR=vM(.5,.95,Hn);function vM(t,e,n){return i=>i<t?0:i>e?1:n(Da(t,e,i))}function aR(t,e,n){const i=tn(t)?t:fo(t);return i.start(ym("",i,e,n)),i.animation}function Fa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const lR=(t,e)=>t.depth-e.depth;class cR{constructor(){this.children=[],this.isDirty=!1}add(e){om(this.children,e),this.isDirty=!0}remove(e){Gc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lR),this.isDirty=!1,this.children.forEach(e)}}function uR(t,e){const n=cn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Rr(i),t(s-e))};return dt.setup(i,!0),()=>Rr(i)}function fc(t){return tn(t)?t.get():t}class fR{constructor(){this.members=[]}add(e){om(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;r&&r.isConnected===!1&&i.isPresent!==!1&&!i.snapshot&&Gc(this.members,i)}e.scheduleRender()}remove(e){if(Gc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r],o=s.instance;if(s.isPresent!==!1&&(!o||o.isConnected!==!1)){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender();const r=i.options.layoutDependency,s=e.options.layoutDependency;if(!(r!==void 0&&s!==void 0&&r===s)){const l=i.instance;l&&l.isConnected===!1&&!i.snapshot||(e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:a}=e.options;a===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},df=["","X","Y","Z"],dR=1e3;let hR=0;function hf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function _M(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=kS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",dt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&_M(i)}function xM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=hR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gR),this.nodes.forEach(yR),this.nodes.forEach(SR),this.nodes.forEach(vR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new cR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new am),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Cm(o)&&!mC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,h=0;const u=()=>this.root.updateBlockedByResize=!1;dt.read(()=>{h=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,f&&f(),f=uR(u,250),dc.hasAnimatedSinceResize&&(dc.hasAnimatedSinceResize=!1,this.nodes.forEach(hv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||AR,{onLayoutAnimationStart:y,onLayoutAnimationComplete:v}=c.getProps(),d=!this.targetLayout||!mM(this.targetLayout,p),m=!h&&u;if(this.options.layoutRoot||this.resumeFrom||m||h&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...xm(g,"layout"),onPlay:y,onComplete:v};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(f,m)}else h||hv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_M(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(fv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xR),this.nodes.forEach(pR),this.nodes.forEach(mR)):this.nodes.forEach(dv),this.clearAllSnapshots();const a=cn.now();Xt.delta=wi(0,1e3/60,a-Xt.timestamp),Xt.timestamp=a,Xt.isProcessing=!0,rf.update.process(Xt),rf.preRender.process(Xt),rf.render.process(Xt),Xt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_R),this.sharedNodes.forEach(ER)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!un(this.snapshot.measuredBox.x)&&!un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=It(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!pM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Xr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),CR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return It();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(RR))){const{scroll:f}=this.root;f&&(js(a.x,f.offset.x),js(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=It();if($n(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:h,options:u}=f;f!==this.root&&h&&u.layoutScroll&&(h.wasRoot&&$n(a,o),js(a.x,h.offset.x),js(a.y,h.offset.y))}return a}applyTransform(o,a=!1){const l=It();$n(l,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ys(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Xr(f.latestValues)&&Ys(l,f.latestValues)}return Xr(this.latestValues)&&Ys(l,this.latestValues),l}removeTransform(o){const a=It();$n(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Xr(c.latestValues))continue;dh(c.latestValues)&&c.updateSnapshot();const f=It(),h=c.measurePageBox();$n(f,h),nv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Xr(this.latestValues)&&nv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!this.layout||!(f||h))return;this.resolvedRelativeTargetAt=Xt.timestamp;const u=this.getClosestProjectingParent();u&&this.linkedParentVersion!==u.layoutVersion&&!u.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=It(),this.targetWithTransforms=It()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ZC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):$n(this.target,this.layout.layoutBox),nM(this.target,this.targetDelta)):$n(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||dh(this.parent.latestValues)||tM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),qc(this.relativeTargetOrigin,a,l),$n(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Xt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;$n(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,u=this.treeScale.y;AC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=It());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(K0(this.prevProjectionDelta.x,this.projectionDelta.x),K0(this.prevProjectionDelta.y,this.projectionDelta.y)),ua(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==u||!av(this.projectionDelta.x,this.prevProjectionDelta.x)||!av(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xs(),this.projectionDelta=Xs(),this.projectionDeltaWithTransform=Xs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},h=Xs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=It(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,v=this.getStack(),d=!v||v.members.length<=1,m=!!(y&&!d&&this.options.crossfade===!0&&!this.path.some(wR));this.animationProgress=0;let _;this.mixTargetDelta=S=>{const E=S/1e3;pv(h.x,o.x,E),pv(h.y,o.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qc(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TR(this.relativeTarget,this.relativeTargetOrigin,u,E),_&&tR(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=It()),$n(_,this.relativeTarget)),y&&(this.animationValues=f,rR(f,c,this.latestValues,E,m,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=dt.update(()=>{dc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fo(0)),this.motionValue.jump(0,!1),this.currentAnimation=aR(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(dR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&yM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||It();const h=un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const u=un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}$n(a,l),Ys(a,f),ua(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new fR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&hf("z",o,c,this.animationValues);for(let f=0;f<df.length;f++)hf(`rotate${df[f]}`,o,c,this.animationValues),hf(`skew${df[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=fc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=fc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Xr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=nR(this.projectionDeltaWithTransform,this.treeScale,f);l&&(h=l(f,h)),o.transform=h;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in ph){if(f[g]===void 0)continue;const{correct:y,applyTo:v,isCSSVariable:d}=ph[g],m=h==="none"?f[g]:y(f[g],c);if(v){const _=v.length;for(let S=0;S<_;S++)o[v[S]]=m}else d?this.options.visualElement.renderState.vars[g]=m:o[g]=m}this.options.layoutId&&(o.pointerEvents=c===this?fc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(fv),this.root.sharedNodes.clear()}}}function pR(t){t.updateLayout()}function mR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?mi(h=>{const u=o?e.measuredBox[h]:e.layoutBox[h],p=un(u);u.min=i[h].min,u.max=u.min+p}):yM(s,e.layoutBox,i)&&mi(h=>{const u=o?e.measuredBox[h]:e.layoutBox[h],p=un(i[h]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const a=Xs();ua(a,i,e.layoutBox);const l=Xs();o?ua(l,t.applyTransform(r,!0),e.measuredBox):ua(l,i,e.layoutBox);const c=!pM(a);let f=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:u,layout:p}=h;if(u&&p){const g=It();qc(g,e.layoutBox,u.layoutBox);const y=It();qc(y,i,p.layoutBox),mM(g,y)||(f=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function gR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function vR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function _R(t){t.clearSnapshot()}function fv(t){t.clearMeasurements()}function dv(t){t.isLayoutDirty=!1}function xR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function hv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yR(t){t.resolveTargetDelta()}function SR(t){t.calcProjection()}function MR(t){t.resetSkewAndRotation()}function ER(t){t.removeLeadSnapshot()}function pv(t,e,n){t.translate=_t(e.translate,0,n),t.scale=_t(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function mv(t,e,n,i){t.min=_t(e.min,n.min,i),t.max=_t(e.max,n.max,i)}function TR(t,e,n,i){mv(t.x,e.x,n.x,i),mv(t.y,e.y,n.y,i)}function wR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const AR={duration:.45,ease:[.4,0,.1,1]},gv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),vv=gv("applewebkit/")&&!gv("chrome/")?Math.round:Hn;function _v(t){t.min=vv(t.min),t.max=vv(t.max)}function CR(t){_v(t.x),_v(t.y)}function yM(t,e,n){return t==="position"||t==="preserve-aspect"&&!KC(ov(e),ov(n),.2)}function RR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const bR=xM({attachResizeListener:(t,e)=>Fa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),pf={current:void 0},SM=xM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!pf.current){const t=new bR({});t.mount(window),t.setOptions({layoutScroll:!0}),pf.current=t}return pf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Lm=Q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function xv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function PR(...t){return e=>{let n=!1;const i=t.map(r=>{const s=xv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():xv(t[r],null)}}}}function DR(...t){return Q.useCallback(PR(...t),t)}class LR extends Q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=uh(i)&&i.offsetWidth||0,s=uh(i)&&i.offsetHeight||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=r-o.width-o.left,o.bottom=s-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function IR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var u;const o=Q.useId(),a=Q.useRef(null),l=Q.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=Q.useContext(Lm),f=((u=t.props)==null?void 0:u.ref)??(t==null?void 0:t.ref),h=DR(a,f);return Q.useInsertionEffect(()=>{const{width:p,height:g,top:y,left:v,right:d,bottom:m}=l.current;if(e||s===!1||!a.current||!p||!g)return;const _=n==="left"?`left: ${v}`:`right: ${d}`,S=i==="bottom"?`bottom: ${m}`:`top: ${y}`;a.current.dataset.motionPopId=o;const E=document.createElement("style");c&&(E.nonce=c);const A=r??document.head;return A.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${_}px !important;
            ${S}px !important;
          }
        `),()=>{A.contains(E)&&A.removeChild(E)}},[e]),j.jsx(LR,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:Q.cloneElement(t,{ref:h})})}const NR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const f=sm(FR),h=Q.useId();let u=!0,p=Q.useMemo(()=>(u=!1,{id:h,initial:e,isPresent:n,custom:r,onExitComplete:g=>{f.set(g,!0);for(const y of f.values())if(!y)return;i&&i()},register:g=>(f.set(g,!1),()=>f.delete(g))}),[n,f,i]);return s&&u&&(p={...p}),Q.useMemo(()=>{f.forEach((g,y)=>f.set(y,!1))},[n]),Q.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=j.jsx(IR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),j.jsx(yu.Provider,{value:p,children:t})};function FR(){return new Map}function MM(t=!0){const e=Q.useContext(yu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Q.useId();Q.useEffect(()=>{if(t)return r(s)},[t]);const o=Q.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const xl=t=>t.key||"";function yv(t){const e=[];return Q.Children.forEach(t,n=>{Q.isValidElement(n)&&e.push(n)}),e}const UR=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[f,h]=MM(o),u=Q.useMemo(()=>yv(t),[t]),p=o&&!f?[]:u.map(xl),g=Q.useRef(!0),y=Q.useRef(u),v=sm(()=>new Map),d=Q.useRef(new Set),[m,_]=Q.useState(u),[S,E]=Q.useState(u);Zy(()=>{g.current=!1,y.current=u;for(let x=0;x<S.length;x++){const T=xl(S[x]);p.includes(T)?(v.delete(T),d.current.delete(T)):v.get(T)!==!0&&v.set(T,!1)}},[S,p.length,p.join("-")]);const A=[];if(u!==m){let x=[...u];for(let T=0;T<S.length;T++){const L=S[T],b=xl(L);p.includes(b)||(x.splice(T,0,L),A.push(L))}return s==="wait"&&A.length&&(x=A),E(yv(x)),_(u),null}const{forceRender:C}=Q.useContext(rm);return j.jsx(j.Fragment,{children:S.map(x=>{const T=xl(x),L=o&&!f?!1:u===S||p.includes(T),b=()=>{if(d.current.has(T))return;if(d.current.add(T),v.has(T))v.set(T,!0);else return;let k=!0;v.forEach(V=>{V||(k=!1)}),k&&(C==null||C(),E(y.current),o&&(h==null||h()),i&&i())};return j.jsx(NR,{isPresent:L,initial:!g.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:L?void 0:b,anchorX:a,anchorY:l,children:x},T)})})},EM=Q.createContext({strict:!1}),Sv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Mv=!1;function OR(){if(Mv)return;const t={};for(const e in Sv)t[e]={isEnabled:n=>Sv[e].some(i=>!!n[i])};QS(t),Mv=!0}function TM(){return OR(),MC()}function BR(t){const e=TM();for(const n in t)e[n]={...e[n],...t[n]};QS(e)}const kR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Kc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||kR.has(t)}let wM=t=>!Kc(t);function VR(t){typeof t=="function"&&(wM=e=>e.startsWith("on")?!Kc(e):t(e))}try{VR(require("@emotion/is-prop-valid").default)}catch{}function zR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(wM(r)||n===!0&&Kc(r)||!e&&!Kc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Tu=Q.createContext({});function HR(t,e){if(Eu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Na(n)?n:void 0,animate:Na(i)?i:void 0}}return t.inherit!==!1?e:{}}function GR(t){const{initial:e,animate:n}=HR(t,Q.useContext(Tu));return Q.useMemo(()=>({initial:e,animate:n}),[Ev(e),Ev(n)])}function Ev(t){return Array.isArray(t)?t.join(" "):t}const Im=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function AM(t,e,n){for(const i in e)!tn(e[i])&&!sM(i,n)&&(t[i]=e[i])}function WR({transformTemplate:t},e){return Q.useMemo(()=>{const n=Im();return Pm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function XR(t,e){const n=t.style||{},i={};return AM(i,n,t),Object.assign(i,WR(t,e)),i}function jR(t,e){const n={},i=XR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const CM=()=>({...Im(),attrs:{}});function YR(t,e,n,i){const r=Q.useMemo(()=>{const s=CM();return oM(s,e,lM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};AM(s,t.style,t),r.style={...s,...r.style}}return r}const $R=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Nm(t){return typeof t!="string"||t.includes("-")?!1:!!($R.indexOf(t)>-1||/[A-Z]/u.test(t))}function qR(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Nm(t)?YR:jR)(e,i,r,t),c=zR(e,typeof t=="string",s),f=t!==Q.Fragment?{...c,...l,ref:n}:{},{children:h}=e,u=Q.useMemo(()=>tn(h)?h.get():h,[h]);return Q.createElement(t,{...f,children:u})}function KR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:ZR(n,i,r,t),renderState:e()}}function ZR(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=fc(s[u]);let{initial:o,animate:a}=t;const l=Eu(t),c=KS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const h=f?a:o;if(h&&typeof h!="boolean"&&!Mu(h)){const u=Array.isArray(h)?h:[h];for(let p=0;p<u.length;p++){const g=Sm(t,u[p]);if(g){const{transitionEnd:y,transition:v,...d}=g;for(const m in d){let _=d[m];if(Array.isArray(_)){const S=f?_.length-1:0;_=_[S]}_!==null&&(r[m]=_)}for(const m in y)r[m]=y[m]}}}return r}const RM=t=>(e,n)=>{const i=Q.useContext(Tu),r=Q.useContext(yu),s=()=>KR(t,e,i,r);return n?s():sm(s)},QR=RM({scrapeMotionValuesFromProps:Dm,createRenderState:Im}),JR=RM({scrapeMotionValuesFromProps:cM,createRenderState:CM}),eb=Symbol.for("motionComponentSymbol");function tb(t,e,n){const i=Q.useRef(n);Q.useInsertionEffect(()=>{i.current=n});const r=Q.useRef(null);return Q.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const bM=Q.createContext({});function Ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function nb(t,e,n,i,r,s){var _,S;const{visualElement:o}=Q.useContext(Tu),a=Q.useContext(EM),l=Q.useContext(yu),c=Q.useContext(Lm),f=c.reducedMotion,h=c.skipAnimations,u=Q.useRef(null),p=Q.useRef(!1);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:h,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const g=u.current,y=Q.useContext(bM);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&ib(u.current,n,r,y);const v=Q.useRef(!1);Q.useInsertionEffect(()=>{g&&v.current&&g.update(n,l)});const d=n[BS],m=Q.useRef(!!d&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,d))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,d)));return Zy(()=>{p.current=!0,g&&(v.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),m.current&&g.animationState&&g.animationState.animateChanges())}),Q.useEffect(()=>{g&&(!m.current&&g.animationState&&g.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,d)}),m.current=!1),g.enteringChildren=void 0)}),g}function ib(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:PM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ps(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c})}function PM(t){if(t)return t.options.allowProjection!==!1?t.projection:PM(t.parent)}function mf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&BR(i);const s=n?n==="svg":Nm(t),o=s?JR:QR;function a(c,f){let h;const u={...Q.useContext(Lm),...c,layoutId:rb(c)},{isStatic:p}=u,g=GR(c),y=o(c,p);if(!p&&Ky){sb();const v=ob(u);h=v.MeasureLayout,g.visualElement=nb(t,y,u,r,v.ProjectionNode,s)}return j.jsxs(Tu.Provider,{value:g,children:[h&&g.visualElement?j.jsx(h,{visualElement:g.visualElement,...u}):null,qR(t,c,tb(y,g.visualElement,f),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=Q.forwardRef(a);return l[eb]=t,l}function rb({layoutId:t}){const e=Q.useContext(rm).id;return e&&t!==void 0?e+"-"+t:t}function sb(t,e){Q.useContext(EM).strict}function ob(t){const e=TM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ab(t,e){if(typeof Proxy>"u")return mf;const n=new Map,i=(s,o)=>mf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,mf(o,void 0,t,e)),n.get(o))})}const lb=(t,e)=>e.isSVG??Nm(t)?new kC(e):new IC(e,{allowProjection:t!==Q.Fragment});class cb extends Ir{constructor(e){super(e),e.animationState||(e.animationState=WC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Mu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let ub=0;class fb extends Ir{constructor(){super(...arguments),this.id=ub++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const db={animation:{Feature:cb},exit:{Feature:fb}};function Ya(t){return{point:{x:t.pageX,y:t.pageY}}}const hb=t=>e=>Am(e)&&t(e,Ya(e));function fa(t,e,n,i){return Fa(t,e,hb(n),i)}const DM=({current:t})=>t?t.ownerDocument.defaultView:null,Tv=(t,e)=>Math.abs(t-e);function pb(t,e){const n=Tv(t.x,e.x),i=Tv(t.y,e.y);return Math.sqrt(n**2+i**2)}const wv=new Set(["auto","scroll"]);class LM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=vf(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=pb(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!y)return;const{point:v}=p,{timestamp:d}=Xt;this.history.push({...v,timestamp:d});const{onStart:m,onMove:_}=this.handlers;g||(m&&m(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=gf(g,this.transformPagePoint),dt.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:d}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&d&&d(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=vf(p.type==="pointercancel"?this.lastMoveEventInfo:gf(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,m),v&&v(p,m)},!Am(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Ya(e),c=gf(l,this.transformPagePoint),{point:f}=c,{timestamp:h}=Xt;this.history=[{...f,timestamp:h}];const{onSessionStart:u}=n;u&&u(e,vf(c,this.history)),this.removeListeners=Wa(fa(this.contextWindow,"pointermove",this.handlePointerMove),fa(this.contextWindow,"pointerup",this.handlePointerUp),fa(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(wv.has(i.overflowX)||wv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),dt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Rr(this.updatePoint)}}function gf(t,e){return e?{point:e(t.point)}:t}function Av(t,e){return{x:t.x-e.x,y:t.y-e.y}}function vf({point:t},e){return{point:t,delta:Av(t,IM(e)),offset:Av(t,mb(e)),velocity:gb(e,.1)}}function mb(t){return t[0]}function IM(t){return t[t.length-1]}function gb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=IM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Gn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Gn(e)*2&&(i=t[1]);const s=Vn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function vb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?_t(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?_t(n,t,i.max):Math.min(t,n)),t}function Cv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function _b(t,{top:e,left:n,bottom:i,right:r}){return{x:Cv(t.x,n,r),y:Cv(t.y,e,i)}}function Rv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function xb(t,e){return{x:Rv(t.x,e.x),y:Rv(t.y,e.y)}}function yb(t,e){let n=.5;const i=un(t),r=un(e);return r>i?n=Da(e.min,e.max-i,t.min):i>r&&(n=Da(t.min,t.max-r,e.min)),wi(0,1,n)}function Sb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const mh=.35;function Mb(t=mh){return t===!1?t=0:t===!0&&(t=mh),{x:bv(t,"left","right"),y:bv(t,"top","bottom")}}function bv(t,e,n){return{min:Pv(t,e),max:Pv(t,n)}}function Pv(t,e){return typeof t=="number"?t:t[e]||0}const Eb=new WeakMap;class Tb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=It(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=h=>{n&&this.snapToCursor(Ya(h).point),this.stopAnimation()},o=(h,u)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=QA(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mi(d=>{let m=this.getAxisMotionValue(d).get()||0;if(Mi.test(m)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[d];S&&(m=un(S)*(parseFloat(m)/100))}}this.originPoint[d]=m}),y&&dt.update(()=>y(h,u),!1,!0),oh(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},a=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:d}=u;if(g&&this.currentDirection===null){this.currentDirection=Ab(d),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",u.point,d),this.updateAxis("y",u.point,d),this.visualElement.render(),v&&dt.update(()=>v(h,u),!1,!0)},l=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u,this.stop(h,u),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new LM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:DM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&dt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!yl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=vb(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Ps(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=_b(i.layoutBox,e):this.constraints=!1,this.elastic=Mb(n),r!==this.constraints&&!Ps(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&mi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Sb(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ps(e))return!1;const i=e.current;uo(i!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=CC(i,r.root,this.visualElement.getTransformPagePoint());let o=xb(r.layout.layoutBox,s);if(n){const a=n(TC(o));this.hasMutatedConstraints=!!a,a&&(o=eM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=mi(f=>{if(!yl(f,n,this.currentDirection))return;let h=l&&l[f]||{};o&&(h={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(f,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return oh(this.visualElement,e),i.start(ym(e,i,0,n,this.visualElement,!1))}stopAnimation(){mi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){mi(n=>{const{drag:i}=this.getProps();if(!yl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-_t(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ps(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};mi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=yb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),mi(o=>{if(!yl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(_t(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Eb.set(this.visualElement,this);const e=this.visualElement.current,n=fa(e,"pointerdown",c=>{const{drag:f,dragListener:h=!0}=this.getProps(),u=c.target,p=u!==e&&rC(u);f&&h&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Ps(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=wb(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),dt.read(r);const a=Fa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(mi(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=c[h].translate,u.set(u.get()+c[h].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=mh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Dv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function wb(t,e,n){const i=B0(t,Dv(n)),r=B0(e,Dv(n));return()=>{i(),r()}}function yl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ab(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Cb extends Ir{constructor(e){super(e),this.removeGroupControls=Hn,this.removeListeners=Hn,this.controls=new Tb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Hn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _f=t=>(e,n)=>{t&&dt.update(()=>t(e,n),!1,!0)};class Rb extends Ir{constructor(){super(...arguments),this.removePointerDownListener=Hn}onPointerDown(e){this.session=new LM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:DM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:_f(e),onStart:_f(n),onMove:_f(i),onEnd:(s,o)=>{delete this.session,r&&dt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=fa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let xf=!1;class bb extends Q.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),xf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),xf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||dt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),wm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;xf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function NM(t){const[e,n]=MM(),i=Q.useContext(rm);return j.jsx(bb,{...t,layoutGroup:i,switchLayoutGroup:Q.useContext(bM),isPresent:e,safeToRemove:n})}const Pb={pan:{Feature:Rb},drag:{Feature:Cb,ProjectionNode:SM,MeasureLayout:NM}};function Lv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&dt.postRender(()=>s(e,Ya(e)))}class Db extends Ir{mount(){const{current:e}=this.node;e&&(this.unmount=eC(e,(n,i)=>(Lv(this.node,i,"Start"),r=>Lv(this.node,r,"End"))))}unmount(){}}class Lb extends Ir{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wa(Fa(this.node.current,"focus",()=>this.onFocus()),Fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Iv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&dt.postRender(()=>s(e,Ya(e)))}class Ib extends Ir{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=oC(e,(r,s)=>(Iv(this.node,s,"Start"),(o,{success:a})=>Iv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const gh=new WeakMap,yf=new WeakMap,Nb=t=>{const e=gh.get(t.target);e&&e(t)},Fb=t=>{t.forEach(Nb)};function Ub({root:t,...e}){const n=t||document;yf.has(n)||yf.set(n,{});const i=yf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Fb,{root:t,...e})),i[r]}function Ob(t,e,n){const i=Ub(e);return gh.set(t,n),i.observe(t),()=>{gh.delete(t),i.unobserve(t)}}const Bb={some:0,all:1};class kb extends Ir{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Bb[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:h}=this.node.getProps(),u=c?f:h;u&&u(l)};return Ob(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Vb(e,n))&&this.startObserver()}unmount(){}}function Vb({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zb={inView:{Feature:kb},tap:{Feature:Ib},focus:{Feature:Lb},hover:{Feature:Db}},Hb={layout:{ProjectionNode:SM,MeasureLayout:NM}},Gb={...db,...zb,...Pb,...Hb},ln=ab(Gb,lb),Wb={some:0,all:1};function Xb(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Tm(t),o=new WeakMap,a=c=>{c.forEach(f=>{const h=o.get(f.target);if(f.isIntersecting!==!!h)if(f.isIntersecting){const u=e(f.target,f);typeof u=="function"?o.set(f.target,u):l.unobserve(f.target)}else typeof h=="function"&&(h(f),o.delete(f.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:Wb[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function FM(t,{root:e,margin:n,amount:i,once:r=!1,initial:s=!1}={}){const[o,a]=Q.useState(s);return Q.useEffect(()=>{if(!t.current||r&&o)return;const l=()=>(a(!0),r?void 0:()=>a(!1)),c={root:e&&e.current||void 0,margin:n,amount:i};return Xb(t.current,l,c)},[e,t,n,r,i]),o}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fm=(t,e)=>{const n=Q.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>Q.createElement("svg",{ref:f,...jb,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Yb(t)}`,a].join(" "),...c},[...e.map(([h,u])=>Q.createElement(h,u)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=Fm("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=Fm("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Fm("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Zb=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Qb=`
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float n = mix(
    mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
            dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), f.x),
        mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
            dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), f.x), f.y),
    mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
            dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), f.x),
        mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
            dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), f.x), f.y), f.z);

  return 0.5 + 0.5 * n;
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for(int i = 0; i < 5; i++) {
    value += amplitude * noise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
    p += vec3(1.7, 9.2, 3.4);
  }

  return value;
}

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);

  vec3 coord = vec3(p * 1.5, uTime * 0.12);

  coord += vec3(fbm(coord + vec3(fbm(coord))));
  float f = fbm(coord);

  vec2 mousePos = (uMouse * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
  float mouseDist = length(p - mousePos);
  f += smoothstep(0.6, 0.0, mouseDist) * 0.15;

  vec3 color = vec3(0.0);
  color = mix(vec3(0.0, 0.02, 0.04), vec3(0.0, 0.08, 0.18), smoothstep(0.0, 0.4, f));
  color = mix(color, vec3(0.05, 0.03, 0.15), smoothstep(0.3, 0.6, f));
  color = mix(color, vec3(0.0, 0.52, 1.0) * 0.3, smoothstep(0.55, 0.75, f));

  float vignette = smoothstep(1.2, 0.3, length(p));
  color *= vignette;

  float energyLines = pow(sin((p.x - p.y * 0.5) * 40.0 + uTime * 3.0), 12.0) * 0.03;
  color += energyLines;

  gl_FragColor = vec4(color, 1.0);
}
`;function Jb(){const t=Q.useRef(null),e=Q.useRef({x:0,y:0});return Q.useEffect(()=>{const n=t.current;if(!n)return;const i=n.getContext("webgl");if(!i)return;const r=.5,s=()=>{n.width=window.innerWidth*r,n.height=window.innerHeight*r,i.viewport(0,0,n.width,n.height)};s(),window.addEventListener("resize",s);const o=(_,S)=>{const E=i.createShader(_);return E?(i.shaderSource(E,S),i.compileShader(E),E):null},a=o(i.VERTEX_SHADER,Zb),l=o(i.FRAGMENT_SHADER,Qb);if(!a||!l)return;const c=i.createProgram();if(!c)return;i.attachShader(c,a),i.attachShader(c,l),i.linkProgram(c),i.useProgram(c);const f=new Float32Array([-1,-1,1,-1,-1,1,1,1]),h=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,h),i.bufferData(i.ARRAY_BUFFER,f,i.STATIC_DRAW);const u=i.getAttribLocation(c,"position");i.enableVertexAttribArray(u),i.vertexAttribPointer(u,2,i.FLOAT,!1,0,0);const p=i.getUniformLocation(c,"uResolution"),g=i.getUniformLocation(c,"uTime"),y=i.getUniformLocation(c,"uMouse"),v=_=>{e.current={x:_.clientX,y:window.innerHeight-_.clientY}};window.addEventListener("mousemove",v);let d=Date.now();const m=()=>{const _=(Date.now()-d)*.001;i.uniform2f(p,n.width,n.height),i.uniform1f(g,_),i.uniform2f(y,e.current.x*r,e.current.y*r),i.drawArrays(i.TRIANGLE_STRIP,0,4),requestAnimationFrame(m)};return m(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",v)}},[]),j.jsx("canvas",{ref:t,className:"fixed inset-0 w-full h-full",style:{imageRendering:"auto"}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Um="183",eP=0,Nv=1,tP=2,hc=1,nP=2,Zo=3,br=0,Mn=1,Ui=2,zi=0,to=1,da=2,Fv=3,Uv=4,iP=5,Yr=100,rP=101,sP=102,oP=103,aP=104,lP=200,cP=201,uP=202,fP=203,vh=204,_h=205,dP=206,hP=207,pP=208,mP=209,gP=210,vP=211,_P=212,xP=213,yP=214,xh=0,yh=1,Sh=2,ho=3,Mh=4,Eh=5,Th=6,wh=7,UM=0,SP=1,MP=2,Ei=0,OM=1,BM=2,kM=3,Om=4,VM=5,zM=6,HM=7,GM=300,us=301,po=302,Sf=303,Mf=304,wu=306,Ah=1e3,ki=1001,Ch=1002,jt=1003,EP=1004,Sl=1005,nn=1006,Ef=1007,es=1008,Bn=1009,WM=1010,XM=1011,Ua=1012,Bm=1013,Ai=1014,_i=1015,$i=1016,km=1017,Vm=1018,Oa=1020,jM=35902,YM=35899,$M=1021,qM=1022,ii=1023,qi=1026,ts=1027,KM=1028,zm=1029,mo=1030,Hm=1031,Gm=1033,pc=33776,mc=33777,gc=33778,vc=33779,Rh=35840,bh=35841,Ph=35842,Dh=35843,Lh=36196,Ih=37492,Nh=37496,Fh=37488,Uh=37489,Oh=37490,Bh=37491,kh=37808,Vh=37809,zh=37810,Hh=37811,Gh=37812,Wh=37813,Xh=37814,jh=37815,Yh=37816,$h=37817,qh=37818,Kh=37819,Zh=37820,Qh=37821,Jh=36492,ep=36494,tp=36495,np=36283,ip=36284,rp=36285,sp=36286,TP=3200,wP=0,AP=1,hr="",Nn="srgb",go="srgb-linear",Zc="linear",it="srgb",gs=7680,Ov=519,CP=512,RP=513,bP=514,Wm=515,PP=516,DP=517,Xm=518,LP=519,Bv=35044,kv="300 es",xi=2e3,Qc=2001;function IP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NP(){const t=Jc("canvas");return t.style.display="block",t}const Vv={};function zv(...t){const e="THREE."+t.shift();console.log(e,...t)}function ZM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=ZM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=ZM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function eu(...t){const e=t.join(" ");e in Vv||(Vv[e]=!0,Ie(...t))}function FP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const UP={[xh]:yh,[Sh]:Th,[Mh]:wh,[ho]:Eh,[yh]:xh,[Th]:Sh,[wh]:Mh,[Eh]:ho};class To{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=Math.PI/180,op=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function OP(t,e){return(t%e+e)%e}function wf(t,e,n){return(1-n)*t+n*e}function Oo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(h!==y||l!==u||c!==p||f!==g){let v=l*u+c*p+f*g+h*y;v<0&&(u=-u,p=-p,g=-g,y=-y,v=-v);let d=1-a;if(v<.9995){const m=Math.acos(v),_=Math.sin(m);d=Math.sin(d*m)/_,a=Math.sin(a*m)/_,l=l*d+u*a,c=c*d+p*a,f=f*d+g*a,h=h*d+y*a}else{l=l*d+u*a,c=c*d+p*a,f=f*d+g*a,h=h*d+y*a;const m=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=m,c*=m,f*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*h+l*p-c*u,e[n+1]=l*g+f*u+c*h-a*p,e[n+2]=c*g+f*p+a*u-l*h,e[n+3]=f*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"YXZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"ZXY":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"ZYX":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"YZX":this._x=u*f*h+c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h-u*p*g;break;case"XZY":this._x=u*f*h-c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h+u*p*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Af.copy(this).projectOnVector(e),this.sub(Af)}reflect(e){return this.sub(Af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Af=new O,Hv=new wo;class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],g=i[8],y=r[0],v=r[3],d=r[6],m=r[1],_=r[4],S=r[7],E=r[2],A=r[5],C=r[8];return s[0]=o*y+a*m+l*E,s[3]=o*v+a*_+l*A,s[6]=o*d+a*S+l*C,s[1]=c*y+f*m+h*E,s[4]=c*v+f*_+h*A,s[7]=c*d+f*S+h*C,s[2]=u*y+p*m+g*E,s[5]=u*v+p*_+g*A,s[8]=u*d+p*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,p=c*s-o*l,g=n*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cf.makeScale(e,n)),this}rotate(e){return this.premultiply(Cf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new Be,Gv=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wv=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BP(){const t={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[go]:{primaries:e,whitePoint:i,transfer:Zc,toXYZ:Gv,fromXYZ:Wv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Gv,fromXYZ:Wv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const $e=BP();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function no(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class kP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Jc("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VP=0;class jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VP++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rf(r[o].image)):s.push(Rf(r[o]))}else s=Rf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let zP=0;const bf=new O;class dn extends To{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=ki,r=ki,s=nn,o=es,a=ii,l=Bn,c=dn.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zP++}),this.uuid=$a(),this.name="",this.source=new jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=GM;dn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],g=l[9],y=l[2],v=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,E=(d+1)/2,A=(f+u)/4,C=(h+y)/4,x=(g+v)/4;return _>S&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=C/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-y)/m,this.z=(u-f)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HP extends To{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new jm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends HP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class QM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GP extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,n,i,r,s,o,a,l,c,f,h,u,p,g,y,v){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,f,h,u,p,g,y,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=g,d[11]=y,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*h,g=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*h,g=c*f,y=c*h;n[0]=u+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*h,g=c*f,y=c*h;n[0]=u-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*h,g=a*f,y=a*h;n[0]=l*f,n[4]=g*c-p,n[8]=u*c+y,n[1]=l*h,n[5]=y*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*f,n[4]=y-u*h,n[8]=g*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+g,n[10]=u-y*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+y,n[5]=o*f,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*f,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WP,e,XP)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),tr.crossVectors(i,Tn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),tr.crossVectors(i,Tn)),tr.normalize(),Ml.crossVectors(Tn,tr),r[0]=tr.x,r[4]=Ml.x,r[8]=Tn.x,r[1]=tr.y,r[5]=Ml.y,r[9]=Tn.y,r[2]=tr.z,r[6]=Ml.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],g=i[2],y=i[6],v=i[10],d=i[14],m=i[3],_=i[7],S=i[11],E=i[15],A=r[0],C=r[4],x=r[8],T=r[12],L=r[1],b=r[5],k=r[9],V=r[13],Y=r[2],H=r[6],B=r[10],D=r[14],U=r[3],G=r[7],$=r[11],te=r[15];return s[0]=o*A+a*L+l*Y+c*U,s[4]=o*C+a*b+l*H+c*G,s[8]=o*x+a*k+l*B+c*$,s[12]=o*T+a*V+l*D+c*te,s[1]=f*A+h*L+u*Y+p*U,s[5]=f*C+h*b+u*H+p*G,s[9]=f*x+h*k+u*B+p*$,s[13]=f*T+h*V+u*D+p*te,s[2]=g*A+y*L+v*Y+d*U,s[6]=g*C+y*b+v*H+d*G,s[10]=g*x+y*k+v*B+d*$,s[14]=g*T+y*V+v*D+d*te,s[3]=m*A+_*L+S*Y+E*U,s[7]=m*C+_*b+S*H+E*G,s[11]=m*x+_*k+S*B+E*$,s[15]=m*T+_*V+S*D+E*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],g=e[3],y=e[7],v=e[11],d=e[15],m=l*p-c*u,_=a*p-c*h,S=a*u-l*h,E=o*p-c*f,A=o*u-l*f,C=o*h-a*f;return n*(y*m-v*_+d*S)-i*(g*m-v*E+d*A)+r*(g*_-y*E+d*C)-s*(g*S-y*A+v*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],g=e[12],y=e[13],v=e[14],d=e[15],m=n*a-i*o,_=n*l-r*o,S=n*c-s*o,E=i*l-r*a,A=i*c-s*a,C=r*c-s*l,x=f*y-h*g,T=f*v-u*g,L=f*d-p*g,b=h*v-u*y,k=h*d-p*y,V=u*d-p*v,Y=m*V-_*k+S*b+E*L-A*T+C*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/Y;return e[0]=(a*V-l*k+c*b)*H,e[1]=(r*k-i*V-s*b)*H,e[2]=(y*C-v*A+d*E)*H,e[3]=(u*A-h*C-p*E)*H,e[4]=(l*L-o*V-c*T)*H,e[5]=(n*V-r*L+s*T)*H,e[6]=(v*S-g*C-d*_)*H,e[7]=(f*C-u*S+p*_)*H,e[8]=(o*k-a*L+c*x)*H,e[9]=(i*L-n*k-s*x)*H,e[10]=(g*A-y*S+d*m)*H,e[11]=(h*S-f*A-p*m)*H,e[12]=(a*T-o*b-l*x)*H,e[13]=(n*b-i*T+r*x)*H,e[14]=(y*_-g*E-v*m)*H,e[15]=(f*E-h*_+u*m)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,p=s*f,g=s*h,y=o*f,v=o*h,d=a*h,m=l*c,_=l*f,S=l*h,E=i.x,A=i.y,C=i.z;return r[0]=(1-(y+d))*E,r[1]=(p+S)*E,r[2]=(g-_)*E,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(u+d))*A,r[6]=(v+m)*A,r[7]=0,r[8]=(g+_)*C,r[9]=(v-m)*C,r[10]=(1-(u+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,f=1/a,h=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=f,qn.elements[5]*=f,qn.elements[6]*=f,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=xi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===xi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Qc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===xi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Qc)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _s=new O,qn=new Et,WP=new O(0,0,0),XP=new O(1,1,1),tr=new O,Ml=new O,Tn=new O,Xv=new Et,jv=new wo;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jv.setFromEuler(this),this.setFromQuaternion(jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class JM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jP=0;const Yv=new O,xs=new wo,bi=new Et,El=new O,Bo=new O,YP=new O,$P=new wo,$v=new O(1,0,0),qv=new O(0,1,0),Kv=new O(0,0,1),Zv={type:"added"},qP={type:"removed"},ys={type:"childadded",child:null},Pf={type:"childremoved",child:null};class hn extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jP++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new O,n=new Ki,i=new wo,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Be}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis($v,e)}rotateY(e){return this.rotateOnAxis(qv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,n){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($v,e)}translateY(e){return this.translateOnAxis(qv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Bo,El,this.up):bi.lookAt(El,Bo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(bi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),ys.child=e,this.dispatchEvent(ys),ys.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qP),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,YP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,$P,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KP={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),d=this._getHandJoint(c,y);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=OP(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lf(o,s,e+1/3),this.g=Lf(o,s,e),this.b=Lf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=eE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return $e.workingToColorSpace(Jt.copy(this),e),Math.round(je(Jt.r*255,0,255))*65536+Math.round(je(Jt.g*255,0,255))*256+Math.round(je(Jt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Nn){$e.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(wl);const i=wf(nr.h,wl.h,n),r=wf(nr.s,wl.s,n),s=wf(nr.l,wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new qe;qe.NAMES=eE;class Ym{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new Ym(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ZP extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new O,Pi=new O,If=new O,Di=new O,Ss=new O,Ms=new O,Qv=new O,Nf=new O,Ff=new O,Uf=new O,Of=new Rt,Bf=new Rt,kf=new Rt;class ni{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Pi.subVectors(i,n),If.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Pi),l=Kn.dot(If),c=Pi.dot(Pi),f=Pi.dot(If),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*f)*u,g=(o*f-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Of.setScalar(0),Bf.setScalar(0),kf.setScalar(0),Of.fromBufferAttribute(e,n),Bf.fromBufferAttribute(e,i),kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Of,s.x),o.addScaledVector(Bf,s.y),o.addScaledVector(kf,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Pi.subVectors(e,n),Kn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Kn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Ms.subVectors(s,i),Nf.subVectors(e,i);const l=Ss.dot(Nf),c=Ms.dot(Nf);if(l<=0&&c<=0)return n.copy(i);Ff.subVectors(e,r);const f=Ss.dot(Ff),h=Ms.dot(Ff);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ss,o);Uf.subVectors(e,s);const p=Ss.dot(Uf),g=Ms.dot(Uf);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ms,a);const v=f*g-p*h;if(v<=0&&h-f>=0&&p-g>=0)return Qv.subVectors(s,r),a=(h-f)/(h-f+(p-g)),n.copy(r).addScaledVector(Qv,a);const d=1/(v+y+u);return o=y*d,a=u*d,n.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Cl.subVectors(this.max,ko),Es.subVectors(e.a,ko),Ts.subVectors(e.b,ko),ws.subVectors(e.c,ko),ir.subVectors(Ts,Es),rr.subVectors(ws,Ts),Or.subVectors(Es,ws);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Or.z,Or.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Or.z,0,-Or.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Or.y,Or.x,0];return!Vf(n,Es,Ts,ws,Cl)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Es,Ts,ws,Cl))?!1:(Rl.crossVectors(ir,rr),n=[Rl.x,Rl.y,Rl.z],Vf(n,Es,Ts,ws,Cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,Al=new qa,Es=new O,Ts=new O,ws=new O,ir=new O,rr=new O,Or=new O,ko=new O,Cl=new O,Rl=new O,Br=new O;function Vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Br.fromArray(t,s);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),f=i.dot(Br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Pt=new O,bl=new Je;let QP=0;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bv,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bl.fromBufferAttribute(this,n),bl.applyMatrix3(e),this.setXY(n,bl.x,bl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bv&&(e.usage=this.usage),e}}class tE extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nE extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}const JP=new qa,Vo=new O,zf=new O;class Ka{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(zf)),this.expandByPoint(Vo.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e3=0;const In=new Et,Hf=new hn,As=new O,wn=new qa,zo=new qa,Vt=new O;class sn extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IP(e)?nE:tE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Hf.lookAt(e),Hf.updateMatrix(),this.applyMatrix4(Hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(wn.min,zo.min),wn.expandByPoint(Vt),Vt.addVectors(wn.max,zo.max),wn.expandByPoint(Vt)):(wn.expandByPoint(zo.min),wn.expandByPoint(zo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Vt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Vt.add(As)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;const c=new O,f=new O,h=new O,u=new Je,p=new Je,g=new Je,y=new O,v=new O;function d(x,T,L){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,L),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),f.sub(c),h.sub(c),p.sub(u),g.sub(u);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(b),v.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(b),a[x].add(y),a[T].add(y),a[L].add(y),l[x].add(v),l[T].add(v),l[L].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,T=m.length;x<T;++x){const L=m[x],b=L.start,k=L.count;for(let V=b,Y=b+k;V<Y;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new O,S=new O,E=new O,A=new O;function C(x){E.fromBufferAttribute(r,x),A.copy(E);const T=a[x];_.copy(T),_.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(A,T);const b=S.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,b)}for(let x=0,T=m.length;x<T;++x){const L=m[x],b=L.start,k=L.count;for(let V=b,Y=b+k;V<Y;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,h=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),v=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let d=0;d<f;d++)u[g++]=c[p++]}return new ai(u,f,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let t3=0;class Ao extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=to,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=_h,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ii=new O,Gf=new O,Pl=new O,sr=new O,Wf=new O,Dl=new O,Xf=new O;class $m{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pl),a=sr.dot(this.direction),l=-sr.dot(Pl),c=sr.lengthSq(),f=Math.abs(1-o*o);let h,u,p,g;if(f>0)if(h=o*l-a,u=o*a-l,g=s*f,h>=0)if(u>=-g)if(u<=g){const y=1/f;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gf).addScaledVector(Pl,u),p}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,s){Wf.subVectors(n,e),Dl.subVectors(i,e),Xf.crossVectors(Wf,Dl);let o=this.direction.dot(Xf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(sr,Dl));if(l<0)return null;const c=a*this.direction.dot(Wf.cross(sr));if(c<0||l+c>o)return null;const f=-a*sr.dot(Xf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ha extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=UM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jv=new Et,kr=new $m,Ll=new Ka,e_=new O,Il=new O,Nl=new O,Fl=new O,jf=new O,Ul=new O,t_=new O,Ol=new O;class Rn extends hn{constructor(e=new sn,n=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(jf.fromBufferAttribute(h,e),o?Ul.addScaledVector(jf,f):Ul.addScaledVector(jf.sub(n),f))}n.add(Ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Ll.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Ll,e_)===null||kr.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(Jv.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Jv),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const v=u[g],d=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,E=_;S<E;S+=3){const A=a.getX(S),C=a.getX(S+1),x=a.getX(S+2);r=Bl(this,d,e,i,c,f,h,A,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,d=y;v<d;v+=3){const m=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);r=Bl(this,o,e,i,c,f,h,m,_,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const v=u[g],d=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,E=_;S<E;S+=3){const A=S,C=S+1,x=S+2;r=Bl(this,d,e,i,c,f,h,A,C,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,d=y;v<d;v+=3){const m=v,_=v+1,S=v+2;r=Bl(this,o,e,i,c,f,h,m,_,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function n3(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Bl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Il),t.getVertexPosition(l,Nl),t.getVertexPosition(c,Fl);const f=n3(t,e,n,i,Il,Nl,Fl,t_);if(f){const h=new O;ni.getBarycoord(t_,Il,Nl,Fl,h),r&&(f.uv=ni.getInterpolatedAttribute(r,a,l,c,h,new Je)),s&&(f.uv1=ni.getInterpolatedAttribute(s,a,l,c,h,new Je)),o&&(f.normal=ni.getInterpolatedAttribute(o,a,l,c,h,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};ni.getNormal(Il,Nl,Fl,u.normal),f.face=u,f.barycoord=h}return f}class i3 extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=jt,f=jt,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new O,r3=new O,s3=new Be;class jr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yf.subVectors(i,n).cross(r3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||s3.getNormalMatrix(e),r=this.coplanarPoint(Yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Ka,o3=new Je(.5,.5),kl=new O;class iE{constructor(e=new jr,n=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],p=s[7],g=s[8],y=s[9],v=s[10],d=s[11],m=s[12],_=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,d-g,E-m).normalize(),r[1].setComponents(c+o,p+f,d+g,E+m).normalize(),r[2].setComponents(c+a,p+h,d+y,E+_).normalize(),r[3].setComponents(c-a,p-h,d-y,E-_).normalize(),i)r[4].setComponents(l,u,v,S).normalize(),r[5].setComponents(c-l,p-u,d-v,E-S).normalize();else if(r[4].setComponents(c-l,p-u,d-v,E-S).normalize(),n===xi)r[5].setComponents(c+l,p+u,d+v,E+S).normalize();else if(n===Qc)r[5].setComponents(l,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const n=o3.distanceTo(e.center);return Vr.radius=.7071067811865476+n,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rE extends Ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new O,nu=new O,n_=new Et,Ho=new $m,Vl=new Ka,$f=new O,i_=new O;class a3 extends hn{constructor(e=new sn,n=new rE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tu.fromBufferAttribute(n,r-1),nu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(r),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;n_.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(n_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const d=f.getX(y),m=f.getX(y+1),_=zl(this,e,Ho,l,d,m,y);_&&n.push(_)}if(this.isLineLoop){const y=f.getX(g-1),v=f.getX(p),d=zl(this,e,Ho,l,y,v,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const d=zl(this,e,Ho,l,y,y+1,y);d&&n.push(d)}if(this.isLineLoop){const y=zl(this,e,Ho,l,g-1,p,g-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(tu.fromBufferAttribute(a,r),nu.fromBufferAttribute(a,s),n.distanceSqToSegment(tu,nu,$f,i_)>i)return;$f.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo($f);if(!(c<e.near||c>e.far))return{distance:c,point:i_.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const r_=new O,s_=new O;class l3 extends a3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)r_.fromBufferAttribute(n,r),s_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+r_.distanceTo(s_);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sE extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o_=new Et,ap=new $m,Hl=new Ka,Gl=new O;class c3 extends hn{constructor(e=new sn,n=new sE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;o_.copy(r).invert(),ap.copy(e.ray).applyMatrix4(o_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,y=p;g<y;g++){const v=c.getX(g);Gl.fromBufferAttribute(h,v),a_(Gl,v,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,y=p;g<y;g++)Gl.fromBufferAttribute(h,g),a_(Gl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function a_(t,e,n,i,r,s,o){const a=ap.distanceSqToPoint(t);if(a<n){const l=new O;ap.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class oE extends dn{constructor(e=[],n=us,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ba extends dn{constructor(e,n,i=Ai,r,s,o,a=jt,l=jt,c,f=qi,h=1){if(f!==qi&&f!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class u3 extends Ba{constructor(e,n=Ai,i=us,r,s,o=jt,a=jt,l,c=qi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class aE extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(h,2));function g(y,v,d,m,_,S,E,A,C,x,T){const L=S/C,b=E/x,k=S/2,V=E/2,Y=A/2,H=C+1,B=x+1;let D=0,U=0;const G=new O;for(let $=0;$<B;$++){const te=$*b-V;for(let ne=0;ne<H;ne++){const ge=ne*L-k;G[y]=ge*m,G[v]=te*_,G[d]=Y,c.push(G.x,G.y,G.z),G[y]=0,G[v]=0,G[d]=A>0?1:-1,f.push(G.x,G.y,G.z),h.push(ne/C),h.push(1-$/x),D+=1}}for(let $=0;$<x;$++)for(let te=0;te<C;te++){const ne=u+te+H*$,ge=u+te+H*($+1),Ve=u+(te+1)+H*($+1),We=u+(te+1)+H*$;l.push(ne,ge,We),l.push(ge,Ve,We),U+=6}a.addGroup(p,U,T),p+=U,u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qm extends sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new O,S=new O,E=new O;for(let A=0;A<n.length;A+=3)p(n[A+0],_),p(n[A+1],S),p(n[A+2],E),l(_,S,E,m)}function l(m,_,S,E){const A=E+1,C=[];for(let x=0;x<=A;x++){C[x]=[];const T=m.clone().lerp(S,x/A),L=_.clone().lerp(S,x/A),b=A-x;for(let k=0;k<=b;k++)k===0&&x===A?C[x][k]=T:C[x][k]=T.clone().lerp(L,k/b)}for(let x=0;x<A;x++)for(let T=0;T<2*(A-x)-1;T++){const L=Math.floor(T/2);T%2===0?(u(C[x][L+1]),u(C[x+1][L]),u(C[x][L])):(u(C[x][L+1]),u(C[x+1][L+1]),u(C[x+1][L]))}}function c(m){const _=new O;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function f(){const m=new O;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=v(m)/2/Math.PI+.5,E=d(m)/Math.PI+.5;o.push(S,1-E)}g(),h()}function h(){for(let m=0;m<o.length;m+=6){const _=o[m+0],S=o[m+2],E=o[m+4],A=Math.max(_,S,E),C=Math.min(_,S,E);A>.9&&C<.1&&(_<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),E<.2&&(o[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const S=m*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){const m=new O,_=new O,S=new O,E=new O,A=new Je,C=new Je,x=new Je;for(let T=0,L=0;T<s.length;T+=9,L+=6){m.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),A.set(o[L+0],o[L+1]),C.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),E.copy(m).add(_).add(S).divideScalar(3);const b=v(E);y(A,L+0,m,b),y(C,L+2,_,b),y(x,L+4,S,b)}}function y(m,_,S,E){E<0&&m.x===1&&(o[_]=m.x-1),S.x===0&&S.z===0&&(o[_]=E/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qm(e.vertices,e.indices,e.radius,e.detail)}}class iu extends qm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new iu(e.radius,e.detail)}}class Au extends sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,p=[],g=[],y=[],v=[];for(let d=0;d<f;d++){const m=d*u-o;for(let _=0;_<c;_++){const S=_*h-s;g.push(S,-m,0),y.push(0,0,1),v.push(_/a),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const _=m+c*d,S=m+c*(d+1),E=m+1+c*(d+1),A=m+1+c*d;p.push(_,S,A),p.push(S,E,A)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Km extends sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new O,u=new O,p=[],g=[],y=[],v=[];for(let d=0;d<=i;d++){const m=[],_=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let E=0;E<=n;E++){const A=E/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),v.push(A+S,1-_),m.push(c++)}f.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const _=f[d][m+1],S=f[d][m],E=f[d+1][m],A=f[d+1][m+1];(d!==0||o>0)&&p.push(_,S,A),(d!==i-1||l<Math.PI)&&p.push(S,E,A)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Km(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zm extends sn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],u=new O,p=new O,g=new O;for(let y=0;y<=i;y++){const v=o+y/i*a;for(let d=0;d<=r;d++){const m=d/r*s;p.x=(e+n*Math.cos(v))*Math.cos(m),p.y=(e+n*Math.cos(v))*Math.sin(m),p.z=n*Math.sin(v),c.push(p.x,p.y,p.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),g.subVectors(p,u).normalize(),f.push(g.x,g.y,g.z),h.push(d/r),h.push(y/i)}}for(let y=1;y<=i;y++)for(let v=1;v<=r;v++){const d=(r+1)*y+v-1,m=(r+1)*(y-1)+v-1,_=(r+1)*(y-1)+v,S=(r+1)*y+v;l.push(d,m,S),l.push(m,_,S)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function f3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const d3={clone:vo,merge:on};var h3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h3,this.fragmentShader=p3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=f3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class m3 extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g3 extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v3 extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wl=new O,Xl=new wo,di=new O;class cE extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Wl,Xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new O,l_=new Je,c_=new Je;class On extends cE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,l_,c_),n.subVectors(c_,l_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class uE extends cE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=-90,Rs=1;class _3 extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new On(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new On(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new On(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new On(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new On(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class x3 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function u_(t,e,n,i){const r=y3(i);switch(n){case $M:return t*e;case KM:return t*e/r.components*r.byteLength;case zm:return t*e/r.components*r.byteLength;case mo:return t*e*2/r.components*r.byteLength;case Hm:return t*e*2/r.components*r.byteLength;case qM:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Gm:return t*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:case Dh:return Math.max(t,16)*Math.max(e,8)/4;case Rh:case Ph:return Math.max(t,8)*Math.max(e,8)/2;case Lh:case Ih:case Fh:case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nh:case Oh:case Bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jh:case ep:case tp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y3(t){switch(t){case Bn:case WM:return{byteLength:1,components:1};case Ua:case XM:case $i:return{byteLength:2,components:1};case km:case Vm:return{byteLength:2,components:4};case Ai:case Bm:case _i:return{byteLength:4,components:1};case jM:case YM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S3(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var M3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,D3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q3="gl_FragColor = linearToOutputTexel( gl_FragColor );",J3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ND=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$D=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:M3,alphahash_pars_fragment:E3,alphamap_fragment:T3,alphamap_pars_fragment:w3,alphatest_fragment:A3,alphatest_pars_fragment:C3,aomap_fragment:R3,aomap_pars_fragment:b3,batching_pars_vertex:P3,batching_vertex:D3,begin_vertex:L3,beginnormal_vertex:I3,bsdfs:N3,iridescence_fragment:F3,bumpmap_pars_fragment:U3,clipping_planes_fragment:O3,clipping_planes_pars_fragment:B3,clipping_planes_pars_vertex:k3,clipping_planes_vertex:V3,color_fragment:z3,color_pars_fragment:H3,color_pars_vertex:G3,color_vertex:W3,common:X3,cube_uv_reflection_fragment:j3,defaultnormal_vertex:Y3,displacementmap_pars_vertex:$3,displacementmap_vertex:q3,emissivemap_fragment:K3,emissivemap_pars_fragment:Z3,colorspace_fragment:Q3,colorspace_pars_fragment:J3,envmap_fragment:e2,envmap_common_pars_fragment:t2,envmap_pars_fragment:n2,envmap_pars_vertex:i2,envmap_physical_pars_fragment:p2,envmap_vertex:r2,fog_vertex:s2,fog_pars_vertex:o2,fog_fragment:a2,fog_pars_fragment:l2,gradientmap_pars_fragment:c2,lightmap_pars_fragment:u2,lights_lambert_fragment:f2,lights_lambert_pars_fragment:d2,lights_pars_begin:h2,lights_toon_fragment:m2,lights_toon_pars_fragment:g2,lights_phong_fragment:v2,lights_phong_pars_fragment:_2,lights_physical_fragment:x2,lights_physical_pars_fragment:y2,lights_fragment_begin:S2,lights_fragment_maps:M2,lights_fragment_end:E2,logdepthbuf_fragment:T2,logdepthbuf_pars_fragment:w2,logdepthbuf_pars_vertex:A2,logdepthbuf_vertex:C2,map_fragment:R2,map_pars_fragment:b2,map_particle_fragment:P2,map_particle_pars_fragment:D2,metalnessmap_fragment:L2,metalnessmap_pars_fragment:I2,morphinstance_vertex:N2,morphcolor_vertex:F2,morphnormal_vertex:U2,morphtarget_pars_vertex:O2,morphtarget_vertex:B2,normal_fragment_begin:k2,normal_fragment_maps:V2,normal_pars_fragment:z2,normal_pars_vertex:H2,normal_vertex:G2,normalmap_pars_fragment:W2,clearcoat_normal_fragment_begin:X2,clearcoat_normal_fragment_maps:j2,clearcoat_pars_fragment:Y2,iridescence_pars_fragment:$2,opaque_fragment:q2,packing:K2,premultiplied_alpha_fragment:Z2,project_vertex:Q2,dithering_fragment:J2,dithering_pars_fragment:eD,roughnessmap_fragment:tD,roughnessmap_pars_fragment:nD,shadowmap_pars_fragment:iD,shadowmap_pars_vertex:rD,shadowmap_vertex:sD,shadowmask_pars_fragment:oD,skinbase_vertex:aD,skinning_pars_vertex:lD,skinning_vertex:cD,skinnormal_vertex:uD,specularmap_fragment:fD,specularmap_pars_fragment:dD,tonemapping_fragment:hD,tonemapping_pars_fragment:pD,transmission_fragment:mD,transmission_pars_fragment:gD,uv_pars_fragment:vD,uv_pars_vertex:_D,uv_vertex:xD,worldpos_vertex:yD,background_vert:SD,background_frag:MD,backgroundCube_vert:ED,backgroundCube_frag:TD,cube_vert:wD,cube_frag:AD,depth_vert:CD,depth_frag:RD,distance_vert:bD,distance_frag:PD,equirect_vert:DD,equirect_frag:LD,linedashed_vert:ID,linedashed_frag:ND,meshbasic_vert:FD,meshbasic_frag:UD,meshlambert_vert:OD,meshlambert_frag:BD,meshmatcap_vert:kD,meshmatcap_frag:VD,meshnormal_vert:zD,meshnormal_frag:HD,meshphong_vert:GD,meshphong_frag:WD,meshphysical_vert:XD,meshphysical_frag:jD,meshtoon_vert:YD,meshtoon_frag:$D,points_vert:qD,points_frag:KD,shadow_vert:ZD,shadow_frag:QD,sprite_vert:JD,sprite_frag:eL},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gi={basic:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:on([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:on([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:on([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:on([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:on([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:on([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:on([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:on([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};gi.physical={uniforms:on([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const jl={r:0,b:0,g:0},zr=new Ki,tL=new Et;function nL(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const S=m.backgroundBlurriness>0;_=e.get(_,S)}return _}function g(m){let _=!1;const S=p(m);S===null?v(o,a):S&&S.isColor&&(v(S,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===wu)?(c===void 0&&(c=new Rn(new Za(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:vo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),zr.copy(_.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tL.makeRotationFromEuler(zr)),c.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,(f!==S||h!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Rn(new Au(2,2),new ci({name:"BackgroundMaterial",uniforms:vo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,_){m.getRGB(jl,lE(t)),n.buffers.color.setClear(jl.r,jl.g,jl.b,_,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g,addToRenderList:y,dispose:d}}function iL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(b,k,V,Y,H){let B=!1;const D=h(b,Y,V,k);s!==D&&(s=D,c(s.object)),B=p(b,Y,V,H),B&&g(b,Y,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(b,k,V,Y),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function f(b){return t.deleteVertexArray(b)}function h(b,k,V,Y){const H=Y.wireframe===!0;let B=i[k.id];B===void 0&&(B={},i[k.id]=B);const D=b.isInstancedMesh===!0?b.id:0;let U=B[D];U===void 0&&(U={},B[D]=U);let G=U[V.id];G===void 0&&(G={},U[V.id]=G);let $=G[H];return $===void 0&&($=u(l()),G[H]=$),$}function u(b){const k=[],V=[],Y=[];for(let H=0;H<n;H++)k[H]=0,V[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:Y,object:b,attributes:{},index:null}}function p(b,k,V,Y){const H=s.attributes,B=k.attributes;let D=0;const U=V.getAttributes();for(const G in U)if(U[G].location>=0){const te=H[G];let ne=B[G];if(ne===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;D++}return s.attributesNum!==D||s.index!==Y}function g(b,k,V,Y){const H={},B=k.attributes;let D=0;const U=V.getAttributes();for(const G in U)if(U[G].location>=0){let te=B[G];te===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),H[G]=ne,D++}s.attributes=H,s.attributesNum=D,s.index=Y}function y(){const b=s.newAttributes;for(let k=0,V=b.length;k<V;k++)b[k]=0}function v(b){d(b,0)}function d(b,k){const V=s.newAttributes,Y=s.enabledAttributes,H=s.attributeDivisors;V[b]=1,Y[b]===0&&(t.enableVertexAttribArray(b),Y[b]=1),H[b]!==k&&(t.vertexAttribDivisor(b,k),H[b]=k)}function m(){const b=s.newAttributes,k=s.enabledAttributes;for(let V=0,Y=k.length;V<Y;V++)k[V]!==b[V]&&(t.disableVertexAttribArray(V),k[V]=0)}function _(b,k,V,Y,H,B,D){D===!0?t.vertexAttribIPointer(b,k,V,H,B):t.vertexAttribPointer(b,k,V,Y,H,B)}function S(b,k,V,Y){y();const H=Y.attributes,B=V.getAttributes(),D=k.defaultAttributeValues;for(const U in B){const G=B[U];if(G.location>=0){let $=H[U];if($===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){const te=$.normalized,ne=$.itemSize,ge=e.get($);if(ge===void 0)continue;const Ve=ge.buffer,We=ge.type,Z=ge.bytesPerElement,oe=We===t.INT||We===t.UNSIGNED_INT||$.gpuType===Bm;if($.isInterleavedBufferAttribute){const fe=$.data,Oe=fe.stride,De=$.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)d(G.location+Ne,fe.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)v(G.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Ne=0;Ne<G.locationSize;Ne++)_(G.location+Ne,ne/G.locationSize,We,te,Oe*Z,(De+ne/G.locationSize*Ne)*Z,oe)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)d(G.location+fe,$.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<G.locationSize;fe++)v(G.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let fe=0;fe<G.locationSize;fe++)_(G.location+fe,ne/G.locationSize,We,te,ne*Z,ne/G.locationSize*fe*Z,oe)}}else if(D!==void 0){const te=D[U];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(G.location,te);break;case 3:t.vertexAttrib3fv(G.location,te);break;case 4:t.vertexAttrib4fv(G.location,te);break;default:t.vertexAttrib1fv(G.location,te)}}}}m()}function E(){T();for(const b in i){const k=i[b];for(const V in k){const Y=k[V];for(const H in Y){const B=Y[H];for(const D in B)f(B[D].object),delete B[D];delete Y[H]}}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const V in k){const Y=k[V];for(const H in Y){const B=Y[H];for(const D in B)f(B[D].object),delete B[D];delete Y[H]}}delete i[b.id]}function C(b){for(const k in i){const V=i[k];for(const Y in V){const H=V[Y];if(H[b.id]===void 0)continue;const B=H[b.id];for(const D in B)f(B[D].object),delete B[D];delete H[b.id]}}}function x(b){for(const k in i){const V=i[k],Y=b.isInstancedMesh===!0?b.id:0,H=V[Y];if(H!==void 0){for(const B in H){const D=H[B];for(const U in D)f(D[U].object),delete D[U];delete H[B]}delete V[Y],Object.keys(V).length===0&&delete i[k]}}}function T(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function rL(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];n.update(p,i,1)}function l(c,f,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y]*u[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ii&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:E,samples:A}}function oL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new jr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!v)s?f(null):c();else{const m=s?0:i,_=m*4;let S=d.clippingState||null;l.value=S,S=f(g,u,_,p);for(let E=0;E!==_;++E)S[E]=n[E];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,p,g){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const d=p+y*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<d)&&(v=new Float32Array(d));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(h[_]).applyMatrix4(m,a),o.normal.toArray(v,S),v[S+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const vr=4,f_=[.125,.215,.35,.446,.526,.582],$r=20,aL=256,Go=new uE,d_=new qe;let qf=null,Kf=0,Zf=0,Qf=!1;const lL=new O;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=lL}=s;qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:$i,format:ii,colorSpace:go,depthBuffer:!1},r=p_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cL(s)),this._blurMaterial=fL(s,e,n),this._ggxMaterial=uL(s,e,n)}return r}_compileMaterial(e){const n=new Rn(new sn,e);this._renderer.compile(n,Go)}_sceneToCubeUV(e,n,i,r,s){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(d_),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new Za,new ha({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let d=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,d=!0):(v.color.copy(d_),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const E=this._cubeSize;bs(r,S*E,_>2?E:0,E,E),h.setRenderTarget(r),d&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Go)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,p=h*u,{_lodMax:g}=this,y=this._sizeLods[i],v=3*y*(i>g-vr?i-g+vr:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,bs(s,v,d,3*y,2*y),r.setRenderTarget(s),r.render(a,Go),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,bs(e,v,d,3*y,2*y),r.setRenderTarget(e),r.render(a,Go)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),y=s/g,v=isFinite(s)?1+Math.floor(f*y):$r;v>$r&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${$r}`);const d=[];let m=0;for(let C=0;C<$r;++C){const x=C/y,T=Math.exp(-x*x/2);d.push(T),C===0?m+=T:C<v&&(m+=2*T)}for(let C=0;C<d.length;C++)d[C]=d[C]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const S=this._sizeLods[r],E=3*S*(r>_-vr?r-_+vr:0),A=4*(this._cubeSize-S);bs(n,E,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Go)}}function cL(t){const e=[],n=[],i=[];let r=t;const s=t-vr+1+f_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-vr?l=f_[o-t+vr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,y=3,v=2,d=1,m=new Float32Array(y*g*p),_=new Float32Array(v*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,x=A>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];m.set(T,y*g*A),_.set(u,v*g*A);const L=[A,A,A,A,A,A];S.set(L,d*g*A)}const E=new sn;E.setAttribute("position",new ai(m,y)),E.setAttribute("uv",new ai(_,v)),E.setAttribute("faceIndex",new ai(S,d)),i.push(new Rn(E,null)),r>vr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function p_(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uL(t,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function fL(t,e,n){const i=new Float32Array($r),r=new O(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function m_(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function g_(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dE extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new oE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:zi});s.uniforms.tEquirect.value=n;const o=new Rn(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=nn),new _3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function dL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Sf||p===Mf)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new dE(g.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===Sf||p===Mf,y=p===us||p===po;if(g||y){let v=n.get(u);const d=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new h_(t)),v=g?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const m=u.image;return g&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new h_(t)),v=g?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",f),v.texture):null}}}return u}function a(u,p){return p===Sf?u.mapping=us:p===Mf&&(u.mapping=po),u}function l(u){let p=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&eu("WebGLRenderer: "+i+" extension not supported."),r}}}function pL(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let _=0,S=m.length;_<S;_+=3){const E=m[_+0],A=m[_+1],C=m[_+2];u.push(E,A,A,C,C,E)}}else{const m=g.array;y=g.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const E=_+0,A=_+1,C=_+2;u.push(E,A,A,C,C,E)}}const v=new(g.count>=65535?nE:tE)(u,1);v.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,v)}function f(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function mL(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*o),n.update(p,i,1)}function c(u,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,u*o,g),n.update(p,i,g))}function f(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let v=0;for(let d=0;d<g;d++)v+=p[d];n.update(v,i,1)}function h(u,p,g,y){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],y[d]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,y,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m]*y[m];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function gL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vL(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),v===!0&&(S=3);let E=a.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*A*4*h),x=new QM(C,E,A,h);x.type=_i,x.needsUpdate=!0;const T=S*4;for(let b=0;b<h;b++){const k=d[b],V=m[b],Y=_[b],H=E*A*4*b;for(let B=0;B<k.count;B++){const D=B*T;g===!0&&(r.fromBufferAttribute(k,B),C[H+D+0]=r.x,C[H+D+1]=r.y,C[H+D+2]=r.z,C[H+D+3]=0),y===!0&&(r.fromBufferAttribute(V,B),C[H+D+4]=r.x,C[H+D+5]=r.y,C[H+D+6]=r.z,C[H+D+7]=0),v===!0&&(r.fromBufferAttribute(Y,B),C[H+D+8]=r.x,C[H+D+9]=r.y,C[H+D+10]=r.z,C[H+D+11]=Y.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new Je(E,A)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function _L(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const xL={[OM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[kM]:"CINEON_TONE_MAPPING",[Om]:"ACES_FILMIC_TONE_MAPPING",[zM]:"AGX_TONE_MAPPING",[HM]:"NEUTRAL_TONE_MAPPING",[VM]:"CUSTOM_TONE_MAPPING"};function yL(t,e,n,i,r){const s=new Ti(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Ti(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),a=new sn;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new m3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Rn(a,l),f=new uE(-1,1,1,-1,0,1);let h=null,u=null,p=!1,g,y=null,v=[],d=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let S=0;S<v.length;S++){const E=v[S];E.setSize&&E.setSize(m,_)}},this.setEffects=function(m){v=m,d=v.length>0&&v[0].isRenderPass===!0;const _=s.width,S=s.height;for(let E=0;E<v.length;E++){const A=v[E];A.setSize&&A.setSize(_,S)}},this.begin=function(m,_){if(p||m.toneMapping===Ei&&v.length===0)return!1;if(y=_,_!==null){const S=_.width,E=_.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return d===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Ei,!0},this.hasRenderPass=function(){return d},this.end=function(m,_){m.toneMapping=g,p=!0;let S=s,E=o;for(let A=0;A<v.length;A++){const C=v[A];if(C.enabled!==!1&&(C.render(m,E,S,_),C.needsSwap!==!1)){const x=S;S=E,E=x}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},$e.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const A=xL[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(y),m.render(c,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const hE=new dn,lp=new Ba(1,1),pE=new QM,mE=new GP,gE=new oE,v_=[],__=[],x_=new Float32Array(16),y_=new Float32Array(9),S_=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=v_[r];if(s===void 0&&(s=new Float32Array(r),v_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=__[e];n===void 0&&(n=new Int32Array(e),__[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ML(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function EL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function TL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function wL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;S_.set(i),t.uniformMatrix2fv(this.addr,!1,S_),Ot(n,i)}}function AL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;y_.set(i),t.uniformMatrix3fv(this.addr,!1,y_),Ot(n,i)}}function CL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;x_.set(i),t.uniformMatrix4fv(this.addr,!1,x_),Ot(n,i)}}function RL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function PL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function DL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function LL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function FL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function UL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lp.compareFunction=n.isReversedDepthBuffer()?Xm:Wm,s=lp):s=hE,n.setTexture2D(e||s,r)}function OL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mE,r)}function BL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gE,r)}function kL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pE,r)}function VL(t){switch(t){case 5126:return SL;case 35664:return ML;case 35665:return EL;case 35666:return TL;case 35674:return wL;case 35675:return AL;case 35676:return CL;case 5124:case 35670:return RL;case 35667:case 35671:return bL;case 35668:case 35672:return PL;case 35669:case 35673:return DL;case 5125:return LL;case 36294:return IL;case 36295:return NL;case 36296:return FL;case 35678:case 36198:case 36298:case 36306:case 35682:return UL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return BL;case 36289:case 36303:case 36311:case 36292:return kL}}function zL(t,e){t.uniform1fv(this.addr,e)}function HL(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function GL(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function WL(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function XL(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jL(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YL(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $L(t,e){t.uniform1iv(this.addr,e)}function qL(t,e){t.uniform2iv(this.addr,e)}function KL(t,e){t.uniform3iv(this.addr,e)}function ZL(t,e){t.uniform4iv(this.addr,e)}function QL(t,e){t.uniform1uiv(this.addr,e)}function JL(t,e){t.uniform2uiv(this.addr,e)}function eI(t,e){t.uniform3uiv(this.addr,e)}function tI(t,e){t.uniform4uiv(this.addr,e)}function nI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=lp:o=hE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function iI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||mE,s[o])}function rI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||gE,s[o])}function sI(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||pE,s[o])}function oI(t){switch(t){case 5126:return zL;case 35664:return HL;case 35665:return GL;case 35666:return WL;case 35674:return XL;case 35675:return jL;case 35676:return YL;case 5124:case 35670:return $L;case 35667:case 35671:return qL;case 35668:case 35672:return KL;case 35669:case 35673:return ZL;case 5125:return QL;case 36294:return JL;case 36295:return eI;case 36296:return tI;case 35678:case 36198:case 36298:case 36306:case 35682:return nI;case 35679:case 36299:case 36307:return iI;case 35680:case 36300:case 36308:case 36293:return rI;case 36289:case 36303:case 36311:case 36292:return sI}}class aI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VL(n.type)}}class lI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oI(n.type)}}class cI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function M_(t,e){t.seq.push(e),t.map[e.id]=e}function uI(t,e,n){const i=t.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),o=Jf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){M_(n,c===void 0?new aI(a,t,e):new lI(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new cI(a),M_(n,h)),n=h}}}class _c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);uI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function E_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fI=37297;let dI=0;function hI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const T_=new Be;function pI(t){$e._getMatrix(T_,$e.workingColorSpace,t);const e=`mat3( ${T_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Zc:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function w_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+hI(t.getShaderSource(e),a)}else return s}function mI(t,e){const n=pI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gI={[OM]:"Linear",[BM]:"Reinhard",[kM]:"Cineon",[Om]:"ACESFilmic",[zM]:"AgX",[HM]:"Neutral",[VM]:"Custom"};function vI(t,e){const n=gI[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new O;function _I(){$e.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function yI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function A_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MI=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(t){return t.replace(MI,TI)}const EI=new Map;function TI(t,e){let n=ke[e];if(n===void 0){const i=EI.get(e);if(i!==void 0)n=ke[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cp(n)}const wI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(t){return t.replace(wI,AI)}function AI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function b_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CI={[hc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function RI(t){return CI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bI={[us]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function PI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":bI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const DI={[po]:"ENVMAP_MODE_REFRACTION"};function LI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":DI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const II={[UM]:"ENVMAP_BLENDING_MULTIPLY",[SP]:"ENVMAP_BLENDING_MIX",[MP]:"ENVMAP_BLENDING_ADD"};function NI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":II[t.combine]||"ENVMAP_BLENDING_NONE"}function FI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=RI(n),c=PI(n),f=LI(n),h=NI(n),u=FI(n),p=xI(n),g=yI(s),y=r.createProgram();let v,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),d.length>0&&(d+=`
`)):(v=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),d=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ei?vI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,mI("linearToOutputTexel",n.outputColorSpace),_I(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=cp(o),o=A_(o,n),o=C_(o,n),a=cp(a),a=A_(a,n),a=C_(a,n),o=R_(o),a=R_(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=m+v+o,S=m+d+a,E=E_(r,r.VERTEX_SHADER,_),A=E_(r,r.FRAGMENT_SHADER,S);r.attachShader(y,E),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(b){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(E)||"",Y=r.getShaderInfoLog(A)||"",H=k.trim(),B=V.trim(),D=Y.trim();let U=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,A);else{const $=w_(r,E,"vertex"),te=w_(r,A,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+$+`
`+te)}else H!==""?Ie("WebGLProgram: Program Info Log:",H):(B===""||D==="")&&(G=!1);G&&(b.diagnostics={runnable:U,programLog:H,vertexShader:{log:B,prefix:v},fragmentShader:{log:D,prefix:d}})}r.deleteShader(E),r.deleteShader(A),x=new _c(r,y),T=SI(r,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,fI)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}let OI=0;class BI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kI(e),n.set(e,i)),i}}class kI{constructor(e){this.id=OI++,this.code=e,this.usedTimes=0}}function VI(t,e,n,i,r,s){const o=new JM,a=new BI,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,L,b,k){const V=b.fog,Y=k.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||H,B),U=D&&D.mapping===wu?D.image.height:null,G=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const $=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,te=$!==void 0?$.length:0;let ne=0;Y.morphAttributes.position!==void 0&&(ne=1),Y.morphAttributes.normal!==void 0&&(ne=2),Y.morphAttributes.color!==void 0&&(ne=3);let ge,Ve,We,Z;if(G){const nt=gi[G];ge=nt.vertexShader,Ve=nt.fragmentShader}else ge=x.vertexShader,Ve=x.fragmentShader,a.update(x),We=a.getVertexShaderID(x),Z=a.getFragmentShaderID(x);const oe=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,Ne=!!x.map,Bt=!!x.matcap,Ye=!!D,tt=!!x.aoMap,at=!!x.lightMap,ze=!!x.bumpMap,wt=!!x.normalMap,P=!!x.displacementMap,bt=!!x.emissiveMap,et=!!x.metalnessMap,ct=!!x.roughnessMap,Ae=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,N=x.iridescence>0,J=x.sheen>0,ee=x.transmission>0,K=Ae&&!!x.anisotropyMap,Se=R&&!!x.clearcoatMap,ce=R&&!!x.clearcoatNormalMap,Pe=R&&!!x.clearcoatRoughnessMap,Le=N&&!!x.iridescenceMap,re=N&&!!x.iridescenceThicknessMap,ae=J&&!!x.sheenColorMap,Me=J&&!!x.sheenRoughnessMap,Te=!!x.specularMap,me=!!x.specularColorMap,He=!!x.specularIntensityMap,I=ee&&!!x.transmissionMap,ue=ee&&!!x.thicknessMap,le=!!x.gradientMap,xe=!!x.alphaMap,se=x.alphaTest>0,q=!!x.alphaHash,Ee=!!x.extensions;let Fe=Ei;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const ut={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:Ve,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:go,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:Bt,envMap:Ye,envMapMode:Ye&&D.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:at,bumpMap:ze,normalMap:wt,displacementMap:P,emissiveMap:bt,normalMapObjectSpace:wt&&x.normalMapType===AP,normalMapTangentSpace:wt&&x.normalMapType===wP,metalnessMap:et,roughnessMap:ct,anisotropy:Ae,anisotropyMap:K,clearcoat:R,clearcoatMap:Se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:N,iridescenceMap:Le,iridescenceThicknessMap:re,sheen:J,sheenColorMap:ae,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:me,specularIntensityMap:He,transmission:ee,transmissionMap:I,thicknessMap:ue,gradientMap:le,opaque:x.transparent===!1&&x.blending===to&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:se,alphaHash:q,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:tt&&g(x.aoMap.channel),lightMapUv:at&&g(x.lightMap.channel),bumpMapUv:ze&&g(x.bumpMap.channel),normalMapUv:wt&&g(x.normalMap.channel),displacementMapUv:P&&g(x.displacementMap.channel),emissiveMapUv:bt&&g(x.emissiveMap.channel),metalnessMapUv:et&&g(x.metalnessMap.channel),roughnessMapUv:ct&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:Se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:Te&&g(x.specularMap.channel),specularColorMapUv:me&&g(x.specularColorMap.channel),specularIntensityMapUv:He&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:ue&&g(x.thicknessMap.channel),alphaMapUv:xe&&g(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(wt||Ae),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Ne||xe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Y.attributes.normal===void 0&&wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function v(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(d(T,x),m(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function m(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const T=p[x.type];let L;if(T){const b=gi[T];L=d3.clone(b.uniforms)}else L=x.uniforms;return L}function S(x,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new UI(t,T,x,r),c.push(L),f.set(T,L)),L}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:C}}function zI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function P_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function D_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,y,v,d){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:v,group:d},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=g,m.materialVariant=o(u),m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=v,m.group=d),e++,m}function l(u,p,g,y,v,d){const m=a(u,p,g,y,v,d);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function c(u,p,g,y,v,d){const m=a(u,p,g,y,v,d);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function f(u,p){n.length>1&&n.sort(u||HI),i.length>1&&i.sort(p||P_),r.length>1&&r.sort(p||P_)}function h(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function GI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new D_,t.set(i,[o])):r>=s.length?(o=new D_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new qe};break;case"SpotLight":n={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function XI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jI=0;function YI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $I(t){const e=new WI,n=XI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Et,o=new Et;function a(c){let f=0,h=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,y=0,v=0,d=0,m=0,_=0,S=0,E=0,A=0,C=0;c.sort(YI);for(let T=0,L=c.length;T<L;T++){const b=c[T],k=b.color,V=b.intensity,Y=b.distance;let H=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===mo?H=b.shadow.map.texture:H=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)f+=k.r*V,h+=k.g*V,u+=k.b*V;else if(b.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(b.sh.coefficients[B],V);C++}else if(b.isDirectionalLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const D=b.shadow,U=n.get(b);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=b.shadow.matrix,m++}i.directional[p]=B,p++}else if(b.isSpotLight){const B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(k).multiplyScalar(V),B.distance=Y,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,i.spot[y]=B;const D=b.shadow;if(b.map&&(i.spotLightMap[E]=b.map,E++,D.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[y]=D.matrix,b.castShadow){const U=n.get(b);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=H,S++}y++}else if(b.isRectAreaLight){const B=e.get(b);B.color.copy(k).multiplyScalar(V),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),i.rectArea[v]=B,v++}else if(b.isPointLight){const B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const D=b.shadow,U=n.get(b);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,U.shadowCameraNear=D.camera.near,U.shadowCameraFar=D.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=b.shadow.matrix,_++}i.point[g]=B,g++}else if(b.isHemisphereLight){const B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(V),B.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[d]=B,d++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==v||x.hemiLength!==d||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==E||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,x.directionalLength=p,x.pointLength=g,x.spotLength=y,x.rectAreaLength=v,x.hemiLength=d,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=E,x.numLightProbes=C,i.version=jI++)}function l(c,f){let h=0,u=0,p=0,g=0,y=0;const v=f.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){const _=c[d];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(_.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(v),u++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function L_(t){const e=new $I(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new L_(t),e.set(r,[a])):s>=o.length?(a=new L_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const KI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QI=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],JI=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],I_=new Et,Wo=new O,ed=new O;function eN(t,e,n){let i=new iE;const r=new Je,s=new Je,o=new Rt,a=new g3,l=new v3,c={},f=n.maxTextureSize,h={[br]:Mn,[Mn]:br,[Ui]:Ui},u=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:KI,fragmentShader:ZI}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rn(g,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let d=this.type;this.render=function(A,C,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===nP&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const T=t.getRenderTarget(),L=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=d!==this.type;V&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(H=>H.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,H=A.length;Y<H;Y++){const B=A[Y],D=B.shadow;if(D===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const U=D.getFrameExtents();r.multiply(U),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/U.y),r.y=s.y*U.y,D.mapSize.y=s.y));const G=t.state.buffers.depth.getReversed();if(D.camera._reversedDepth=G,D.map===null||V===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Zo){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Ti(r.x,r.y,{format:mo,type:$i,minFilter:nn,magFilter:nn,generateMipmaps:!1}),D.map.texture.name=B.name+".shadowMap",D.map.depthTexture=new Ba(r.x,r.y,_i),D.map.depthTexture.name=B.name+".shadowMapDepth",D.map.depthTexture.format=qi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=jt,D.map.depthTexture.magFilter=jt}else B.isPointLight?(D.map=new dE(r.x),D.map.depthTexture=new u3(r.x,Ai)):(D.map=new Ti(r.x,r.y),D.map.depthTexture=new Ba(r.x,r.y,Ai)),D.map.depthTexture.name=B.name+".shadowMap",D.map.depthTexture.format=qi,this.type===hc?(D.map.depthTexture.compareFunction=G?Xm:Wm,D.map.depthTexture.minFilter=nn,D.map.depthTexture.magFilter=nn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=jt,D.map.depthTexture.magFilter=jt);D.camera.updateProjectionMatrix()}const $=D.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<$;te++){if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,te),t.clear();else{te===0&&(t.setRenderTarget(D.map),t.clear());const ne=D.getViewport(te);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(o)}if(B.isPointLight){const ne=D.camera,ge=D.matrix,Ve=B.distance||ne.far;Ve!==ne.far&&(ne.far=Ve,ne.updateProjectionMatrix()),Wo.setFromMatrixPosition(B.matrixWorld),ne.position.copy(Wo),ed.copy(ne.position),ed.add(QI[te]),ne.up.copy(JI[te]),ne.lookAt(ed),ne.updateMatrixWorld(),ge.makeTranslation(-Wo.x,-Wo.y,-Wo.z),I_.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),D._frustum.setFromProjectionMatrix(I_,ne.coordinateSystem,ne.reversedDepth)}else D.updateMatrices(B);i=D.getFrustum(),S(C,x,D.camera,B,this.type)}D.isPointLightShadow!==!0&&this.type===Zo&&m(D,x),D.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(T,L,b)};function m(A,C){const x=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ti(r.x,r.y,{format:mo,type:$i})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,x,p,y,null)}function _(A,C,x,T){let L=null;const b=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)L=b;else if(L=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=L.uuid,V=C.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let H=Y[V];H===void 0&&(H=L.clone(),Y[V]=H,C.addEventListener("dispose",E)),L=H}if(L.visible=C.visible,L.wireframe=C.wireframe,T===Zo?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:h[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=t.properties.get(L);k.light=x}return L}function S(A,C,x,T,L){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Zo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const V=e.update(A),Y=A.material;if(Array.isArray(Y)){const H=V.groups;for(let B=0,D=H.length;B<D;B++){const U=H[B],G=Y[U.materialIndex];if(G&&G.visible){const $=_(A,G,T,L);A.onBeforeShadow(t,A,C,x,V,$,U),t.renderBufferDirect(x,null,V,$,A,U),A.onAfterShadow(t,A,C,x,V,$,U)}}}else if(Y.visible){const H=_(A,Y,T,L);A.onBeforeShadow(t,A,C,x,V,H,null),t.renderBufferDirect(x,null,V,H,A,null),A.onAfterShadow(t,A,C,x,V,H,null)}}const k=A.children;for(let V=0,Y=k.length;V<Y;V++)S(k[V],C,x,T,L)}function E(A){A.target.removeEventListener("dispose",E);for(const x in c){const T=c[x],L=A.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function tN(t,e){function n(){let I=!1;const ue=new Rt;let le=null;const xe=new Rt(0,0,0,0);return{setMask:function(se){le!==se&&!I&&(t.colorMask(se,se,se,se),le=se)},setLocked:function(se){I=se},setClear:function(se,q,Ee,Fe,ut){ut===!0&&(se*=Fe,q*=Fe,Ee*=Fe),ue.set(se,q,Ee,Fe),xe.equals(ue)===!1&&(t.clearColor(se,q,Ee,Fe),xe.copy(ue))},reset:function(){I=!1,le=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,le=null,xe=null,se=null;return{setReversed:function(q){if(ue!==q){const Ee=e.get("EXT_clip_control");q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=q;const Fe=se;se=null,this.setClear(Fe)}},getReversed:function(){return ue},setTest:function(q){q?oe(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(q){le!==q&&!I&&(t.depthMask(q),le=q)},setFunc:function(q){if(ue&&(q=UP[q]),xe!==q){switch(q){case xh:t.depthFunc(t.NEVER);break;case yh:t.depthFunc(t.ALWAYS);break;case Sh:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case Mh:t.depthFunc(t.EQUAL);break;case Eh:t.depthFunc(t.GEQUAL);break;case Th:t.depthFunc(t.GREATER);break;case wh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=q}},setLocked:function(q){I=q},setClear:function(q){se!==q&&(se=q,ue&&(q=1-q),t.clearDepth(q))},reset:function(){I=!1,le=null,xe=null,se=null,ue=!1}}}function r(){let I=!1,ue=null,le=null,xe=null,se=null,q=null,Ee=null,Fe=null,ut=null;return{setTest:function(nt){I||(nt?oe(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!I&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,Ci,Ri){(le!==nt||xe!==Ci||se!==Ri)&&(t.stencilFunc(nt,Ci,Ri),le=nt,xe=Ci,se=Ri)},setOp:function(nt,Ci,Ri){(q!==nt||Ee!==Ci||Fe!==Ri)&&(t.stencilOp(nt,Ci,Ri),q=nt,Ee=Ci,Fe=Ri)},setLocked:function(nt){I=nt},setClear:function(nt){ut!==nt&&(t.clearStencil(nt),ut=nt)},reset:function(){I=!1,ue=null,le=null,xe=null,se=null,q=null,Ee=null,Fe=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,p=[],g=null,y=!1,v=null,d=null,m=null,_=null,S=null,E=null,A=null,C=new qe(0,0,0),x=0,T=!1,L=null,b=null,k=null,V=null,Y=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,D=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=D>=2);let G=null,$={};const te=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ge=new Rt().fromArray(te),Ve=new Rt().fromArray(ne);function We(I,ue,le,xe){const se=new Uint8Array(4),q=t.createTexture();t.bindTexture(I,q),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<le;Ee++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(ue+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return q}const Z={};Z[t.TEXTURE_2D]=We(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=We(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=We(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=We(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(ho),ze(!1),wt(Nv),oe(t.CULL_FACE),tt(zi);function oe(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function fe(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Oe(I,ue){return h[I]!==ue?(t.bindFramebuffer(I,ue),h[I]=ue,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(I,ue){let le=p,xe=!1;if(I){le=u.get(ue),le===void 0&&(le=[],u.set(ue,le));const se=I.textures;if(le.length!==se.length||le[0]!==t.COLOR_ATTACHMENT0){for(let q=0,Ee=se.length;q<Ee;q++)le[q]=t.COLOR_ATTACHMENT0+q;le.length=se.length,xe=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,xe=!0);xe&&t.drawBuffers(le)}function Ne(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Bt={[Yr]:t.FUNC_ADD,[rP]:t.FUNC_SUBTRACT,[sP]:t.FUNC_REVERSE_SUBTRACT};Bt[oP]=t.MIN,Bt[aP]=t.MAX;const Ye={[lP]:t.ZERO,[cP]:t.ONE,[uP]:t.SRC_COLOR,[vh]:t.SRC_ALPHA,[gP]:t.SRC_ALPHA_SATURATE,[pP]:t.DST_COLOR,[dP]:t.DST_ALPHA,[fP]:t.ONE_MINUS_SRC_COLOR,[_h]:t.ONE_MINUS_SRC_ALPHA,[mP]:t.ONE_MINUS_DST_COLOR,[hP]:t.ONE_MINUS_DST_ALPHA,[vP]:t.CONSTANT_COLOR,[_P]:t.ONE_MINUS_CONSTANT_COLOR,[xP]:t.CONSTANT_ALPHA,[yP]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ue,le,xe,se,q,Ee,Fe,ut,nt){if(I===zi){y===!0&&(fe(t.BLEND),y=!1);return}if(y===!1&&(oe(t.BLEND),y=!0),I!==iP){if(I!==v||nt!==T){if((d!==Yr||S!==Yr)&&(t.blendEquation(t.FUNC_ADD),d=Yr,S=Yr),nt)switch(I){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case da:t.blendFunc(t.ONE,t.ONE);break;case Fv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",I);break}else switch(I){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case da:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Fv:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uv:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",I);break}m=null,_=null,E=null,A=null,C.set(0,0,0),x=0,v=I,T=nt}return}se=se||ue,q=q||le,Ee=Ee||xe,(ue!==d||se!==S)&&(t.blendEquationSeparate(Bt[ue],Bt[se]),d=ue,S=se),(le!==m||xe!==_||q!==E||Ee!==A)&&(t.blendFuncSeparate(Ye[le],Ye[xe],Ye[q],Ye[Ee]),m=le,_=xe,E=q,A=Ee),(Fe.equals(C)===!1||ut!==x)&&(t.blendColor(Fe.r,Fe.g,Fe.b,ut),C.copy(Fe),x=ut),v=I,T=!1}function at(I,ue){I.side===Ui?fe(t.CULL_FACE):oe(t.CULL_FACE);let le=I.side===Mn;ue&&(le=!le),ze(le),I.blending===to&&I.transparent===!1?tt(zi):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){L!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),L=I)}function wt(I){I!==eP?(oe(t.CULL_FACE),I!==b&&(I===Nv?t.cullFace(t.BACK):I===tP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),b=I}function P(I){I!==k&&(B&&t.lineWidth(I),k=I)}function bt(I,ue,le){I?(oe(t.POLYGON_OFFSET_FILL),(V!==ue||Y!==le)&&(V=ue,Y=le,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,le))):fe(t.POLYGON_OFFSET_FILL)}function et(I){I?oe(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function ct(I){I===void 0&&(I=t.TEXTURE0+H-1),G!==I&&(t.activeTexture(I),G=I)}function Ae(I,ue,le){le===void 0&&(G===null?le=t.TEXTURE0+H-1:le=G);let xe=$[le];xe===void 0&&(xe={type:void 0,texture:void 0},$[le]=xe),(xe.type!==I||xe.texture!==ue)&&(G!==le&&(t.activeTexture(le),G=le),t.bindTexture(I,ue||Z[I]),xe.type=I,xe.texture=ue)}function R(){const I=$[G];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function J(){try{t.texSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ee(){try{t.texSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ce(){try{t.texStorage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Pe(){try{t.texStorage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function Le(){try{t.texImage2D(...arguments)}catch(I){Qe("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){Qe("WebGLState:",I)}}function ae(I){ge.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ge.copy(I))}function Me(I){Ve.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function Te(I,ue){let le=c.get(ue);le===void 0&&(le=new WeakMap,c.set(ue,le));let xe=le.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(ue,I.name),le.set(I,xe))}function me(I,ue){const xe=c.get(ue).get(I);l.get(ue)!==xe&&(t.uniformBlockBinding(ue,xe,I.__bindingPointIndex),l.set(ue,xe))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},G=null,$={},h={},u=new WeakMap,p=[],g=null,y=!1,v=null,d=null,m=null,_=null,S=null,E=null,A=null,C=new qe(0,0,0),x=0,T=!1,L=null,b=null,k=null,V=null,Y=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:fe,bindFramebuffer:Oe,drawBuffers:De,useProgram:Ne,setBlending:tt,setMaterial:at,setFlipSided:ze,setCullFace:wt,setLineWidth:P,setPolygonOffset:bt,setScissorTest:et,activeTexture:ct,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:N,texImage2D:Le,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:ae,viewport:Me,reset:He}}function nN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Jc("canvas")}function y(R,M,N){let J=1;const ee=Ae(R);if((ee.width>N||ee.height>N)&&(J=N/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(J*ee.width),Se=Math.floor(J*ee.height);h===void 0&&(h=g(K,Se));const ce=M?g(K,Se):h;return ce.width=K,ce.height=Se,ce.getContext("2d").drawImage(R,0,0,K,Se),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Se+")."),ce}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function v(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function m(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,N,J,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===t.RED&&(N===t.FLOAT&&(K=t.R32F),N===t.HALF_FLOAT&&(K=t.R16F),N===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.R8UI),N===t.UNSIGNED_SHORT&&(K=t.R16UI),N===t.UNSIGNED_INT&&(K=t.R32UI),N===t.BYTE&&(K=t.R8I),N===t.SHORT&&(K=t.R16I),N===t.INT&&(K=t.R32I)),M===t.RG&&(N===t.FLOAT&&(K=t.RG32F),N===t.HALF_FLOAT&&(K=t.RG16F),N===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RG8UI),N===t.UNSIGNED_SHORT&&(K=t.RG16UI),N===t.UNSIGNED_INT&&(K=t.RG32UI),N===t.BYTE&&(K=t.RG8I),N===t.SHORT&&(K=t.RG16I),N===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGB8UI),N===t.UNSIGNED_SHORT&&(K=t.RGB16UI),N===t.UNSIGNED_INT&&(K=t.RGB32UI),N===t.BYTE&&(K=t.RGB8I),N===t.SHORT&&(K=t.RGB16I),N===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),N===t.UNSIGNED_INT&&(K=t.RGBA32UI),N===t.BYTE&&(K=t.RGBA8I),N===t.SHORT&&(K=t.RGBA16I),N===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const Se=ee?Zc:$e.getTransfer(J);N===t.FLOAT&&(K=t.RGBA32F),N===t.HALF_FLOAT&&(K=t.RGBA16F),N===t.UNSIGNED_BYTE&&(K=Se===it?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,M){let N;return R?M===null||M===Ai||M===Oa?N=t.DEPTH24_STENCIL8:M===_i?N=t.DEPTH32F_STENCIL8:M===Ua&&(N=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===Oa?N=t.DEPTH_COMPONENT24:M===_i?N=t.DEPTH_COMPONENT32F:M===Ua&&(N=t.DEPTH_COMPONENT16),N}function E(R,M){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),x(M),M.isVideoTexture&&f.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),L(M)}function x(R){const M=i.get(R);if(M.__webglInit===void 0)return;const N=R.source,J=u.get(N);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(J).length===0&&u.delete(N)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const N=R.source,J=u.get(N);delete J[M.__cacheKey],o.memory.textures--}function L(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ee=0;ee<M.__webglFramebuffer[J].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[J][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=R.textures;for(let J=0,ee=N.length;J<ee;J++){const K=i.get(N[J]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(N[J])}i.remove(R)}let b=0;function k(){b=0}function V(){const R=b;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function Y(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function H(R,M){const N=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const J=R.image;if(J===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,R,M);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+M)}function B(R,M){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Z(N,R,M);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+M)}function D(R,M){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Z(N,R,M);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+M)}function U(R,M){const N=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){oe(N,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+M)}const G={[Ah]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[Ch]:t.MIRRORED_REPEAT},$={[jt]:t.NEAREST,[EP]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Ef]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},te={[CP]:t.NEVER,[LP]:t.ALWAYS,[RP]:t.LESS,[Wm]:t.LEQUAL,[bP]:t.EQUAL,[Xm]:t.GEQUAL,[PP]:t.GREATER,[DP]:t.NOTEQUAL};function ne(R,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===Ef||M.magFilter===Sl||M.magFilter===es||M.minFilter===nn||M.minFilter===Ef||M.minFilter===Sl||M.minFilter===es)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,G[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Sl&&M.minFilter!==es||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(R,M){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const J=M.source;let ee=u.get(J);ee===void 0&&(ee={},u.set(J,ee));const K=Y(M);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[K].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&T(M)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return N}function Ve(R,M,N){return Math.floor(Math.floor(R/N)/M)}function We(R,M,N,J){const K=R.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,N,J,M.data);else{K.sort((re,ae)=>re.start-ae.start);let Se=0;for(let re=1;re<K.length;re++){const ae=K[Se],Me=K[re],Te=ae.start+ae.count,me=Ve(Me.start,M.width,4),He=Ve(ae.start,M.width,4);Me.start<=Te+1&&me===He&&Ve(Me.start+Me.count-1,M.width,4)===me?ae.count=Math.max(ae.count,Me.start+Me.count-ae.start):(++Se,K[Se]=Me)}K.length=Se+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),Le=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let re=0,ae=K.length;re<ae;re++){const Me=K[re],Te=Math.floor(Me.start/4),me=Math.ceil(Me.count/4),He=Te%M.width,I=Math.floor(Te/M.width),ue=me,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,He,I,ue,le,N,J,M.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function Z(R,M,N){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ee=ge(R,M),K=M.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+N);const Se=i.get(K);if(K.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+N);const ce=$e.getPrimaries($e.workingColorSpace),Pe=M.colorSpace===hr?null:$e.getPrimaries(M.colorSpace),Le=M.colorSpace===hr||ce===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let re=y(M.image,!1,r.maxTextureSize);re=ct(M,re);const ae=s.convert(M.format,M.colorSpace),Me=s.convert(M.type);let Te=_(M.internalFormat,ae,Me,M.colorSpace,M.isVideoTexture);ne(J,M);let me;const He=M.mipmaps,I=M.isVideoTexture!==!0,ue=Se.__version===void 0||ee===!0,le=K.dataReady,xe=E(M,re);if(M.isDepthTexture)Te=S(M.format===ts,M.type),ue&&(I?n.texStorage2D(t.TEXTURE_2D,1,Te,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,ae,Me,null));else if(M.isDataTexture)if(He.length>0){I&&ue&&n.texStorage2D(t.TEXTURE_2D,xe,Te,He[0].width,He[0].height);for(let se=0,q=He.length;se<q;se++)me=He[se],I?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ae,Me,me.data):n.texImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,ae,Me,me.data);M.generateMipmaps=!1}else I?(ue&&n.texStorage2D(t.TEXTURE_2D,xe,Te,re.width,re.height),le&&We(M,re,ae,Me)):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,ae,Me,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Te,He[0].width,He[0].height,re.depth);for(let se=0,q=He.length;se<q;se++)if(me=He[se],M.format!==ii)if(ae!==null)if(I){if(le)if(M.layerUpdates.size>0){const Ee=u_(me.width,me.height,M.format,M.type);for(const Fe of M.layerUpdates){const ut=me.data.subarray(Fe*Ee/me.data.BYTES_PER_ELEMENT,(Fe+1)*Ee/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Fe,me.width,me.height,1,ae,ut)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,ae,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Te,me.width,me.height,re.depth,0,me.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,ae,Me,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Te,me.width,me.height,re.depth,0,ae,Me,me.data)}else{I&&ue&&n.texStorage2D(t.TEXTURE_2D,xe,Te,He[0].width,He[0].height);for(let se=0,q=He.length;se<q;se++)me=He[se],M.format!==ii?ae!==null?I?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ae,me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ae,Me,me.data):n.texImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,ae,Me,me.data)}else if(M.isDataArrayTexture)if(I){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Te,re.width,re.height,re.depth),le)if(M.layerUpdates.size>0){const se=u_(re.width,re.height,M.format,M.type);for(const q of M.layerUpdates){const Ee=re.data.subarray(q*se/re.data.BYTES_PER_ELEMENT,(q+1)*se/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,re.width,re.height,1,ae,Me,Ee)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,Me,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,ae,Me,re.data);else if(M.isData3DTexture)I?(ue&&n.texStorage3D(t.TEXTURE_3D,xe,Te,re.width,re.height,re.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,Me,re.data)):n.texImage3D(t.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,ae,Me,re.data);else if(M.isFramebufferTexture){if(ue)if(I)n.texStorage2D(t.TEXTURE_2D,xe,Te,re.width,re.height);else{let se=re.width,q=re.height;for(let Ee=0;Ee<xe;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Te,se,q,0,ae,Me,null),se>>=1,q>>=1}}else if(He.length>0){if(I&&ue){const se=Ae(He[0]);n.texStorage2D(t.TEXTURE_2D,xe,Te,se.width,se.height)}for(let se=0,q=He.length;se<q;se++)me=He[se],I?le&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ae,Me,me):n.texImage2D(t.TEXTURE_2D,se,Te,ae,Me,me);M.generateMipmaps=!1}else if(I){if(ue){const se=Ae(re);n.texStorage2D(t.TEXTURE_2D,xe,Te,se.width,se.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Me,re)}else n.texImage2D(t.TEXTURE_2D,0,Te,ae,Me,re);v(M)&&d(J),Se.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function oe(R,M,N){if(M.image.length!==6)return;const J=ge(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const K=i.get(ee);if(ee.version!==K.__version||J===!0){n.activeTexture(t.TEXTURE0+N);const Se=$e.getPrimaries($e.workingColorSpace),ce=M.colorSpace===hr?null:$e.getPrimaries(M.colorSpace),Pe=M.colorSpace===hr||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let q=0;q<6;q++)!Le&&!re?ae[q]=y(M.image[q],!0,r.maxCubemapSize):ae[q]=re?M.image[q].image:M.image[q],ae[q]=ct(M,ae[q]);const Me=ae[0],Te=s.convert(M.format,M.colorSpace),me=s.convert(M.type),He=_(M.internalFormat,Te,me,M.colorSpace),I=M.isVideoTexture!==!0,ue=K.__version===void 0||J===!0,le=ee.dataReady;let xe=E(M,Me);ne(t.TEXTURE_CUBE_MAP,M);let se;if(Le){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,Me.width,Me.height);for(let q=0;q<6;q++){se=ae[q].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const Fe=se[Ee];M.format!==ii?Te!==null?I?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,0,0,Fe.width,Fe.height,Te,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,He,Fe.width,Fe.height,0,Fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,0,0,Fe.width,Fe.height,Te,me,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,He,Fe.width,Fe.height,0,Te,me,Fe.data)}}}else{if(se=M.mipmaps,I&&ue){se.length>0&&xe++;const q=Ae(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,q.width,q.height)}for(let q=0;q<6;q++)if(re){I?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ae[q].width,ae[q].height,Te,me,ae[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,ae[q].width,ae[q].height,0,Te,me,ae[q].data);for(let Ee=0;Ee<se.length;Ee++){const ut=se[Ee].image[q].image;I?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,0,0,ut.width,ut.height,Te,me,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,He,ut.width,ut.height,0,Te,me,ut.data)}}else{I?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Te,me,ae[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,Te,me,ae[q]);for(let Ee=0;Ee<se.length;Ee++){const Fe=se[Ee];I?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,0,0,Te,me,Fe.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,He,Te,me,Fe.image[q])}}}v(M)&&d(t.TEXTURE_CUBE_MAP),K.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function fe(R,M,N,J,ee,K){const Se=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),Pe=_(N.internalFormat,Se,ce,N.colorSpace),Le=i.get(M),re=i.get(N);if(re.__renderTarget=M,!Le.__hasExternalTextures){const ae=Math.max(1,M.width>>K),Me=Math.max(1,M.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,Pe,ae,Me,M.depth,0,Se,ce,null):n.texImage2D(ee,K,Pe,ae,Me,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,re.__webglTexture,0,P(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,re.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,M,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,ee=J&&J.isDepthTexture?J.type:null,K=S(M.stencilBuffer,ee),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(M),K,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(M),K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const J=M.textures;for(let ee=0;ee<J.length;ee++){const K=J[ee],Se=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),Pe=_(K.internalFormat,Se,ce,K.colorSpace);bt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(M),Pe,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(M),Pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(R,M,N){const J=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M.depthTexture);const Le=s.convert(M.depthTexture.format),re=s.convert(M.depthTexture.type);let ae;M.depthTexture.format===qi?ae=t.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(ae=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ae,M.width,M.height,0,Le,re,null)}}else H(M.depthTexture,0);const K=ee.__webglTexture,Se=P(M),ce=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Pe=M.depthTexture.format===ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===qi)bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,ce,K,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,ce,K,0);else if(M.depthTexture.format===ts)bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,ce,K,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,ce,K,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const M=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let J=0;J<6;J++)De(M.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?De(M.__webglFramebuffer[0],R,0):De(M.__webglFramebuffer,R,0)}else if(N){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),Oe(M.__webglDepthbuffer[J],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Oe(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Bt(R,M,N){const J=i.get(R);M!==void 0&&fe(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ne(R)}function Ye(R){const M=R.texture,N=i.get(R),J=i.get(M);R.addEventListener("dispose",C);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)N.__webglFramebuffer[ce][Pe]=t.createFramebuffer()}else N.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)N.__webglFramebuffer[ce]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,Pe=ee.length;ce<Pe;ce++){const Le=i.get(ee[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Pe=ee[ce];N.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Le=s.convert(Pe.format,Pe.colorSpace),re=s.convert(Pe.type),ae=_(Pe.internalFormat,Le,re,Pe.colorSpace,R.isXRRenderTarget===!0),Me=P(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ae,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)fe(N.__webglFramebuffer[ce][Pe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe);else fe(N.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,Pe=ee.length;ce<Pe;ce++){const Le=ee[ce],re=i.get(Le);let ae=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,re.__webglTexture),ne(ae,Le),fe(N.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+ce,ae,0),v(Le)&&d(ae)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,J.__webglTexture),ne(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)fe(N.__webglFramebuffer[Pe],R,M,t.COLOR_ATTACHMENT0,ce,Pe);else fe(N.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);v(M)&&d(ce),n.unbindTexture()}R.depthBuffer&&Ne(R)}function tt(R){const M=R.textures;for(let N=0,J=M.length;N<J;N++){const ee=M[N];if(v(ee)){const K=m(R),Se=i.get(ee).__webglTexture;n.bindTexture(K,Se),d(K),n.unbindTexture()}}}const at=[],ze=[];function wt(R){if(R.samples>0){if(bt(R)===!1){const M=R.textures,N=R.width,J=R.height;let ee=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ce=M.length>1;if(ce)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const re=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,N,J,0,0,N,J,ee,t.NEAREST),l===!0&&(at.length=0,ze.length=0,at.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(K),ze.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const re=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function P(R){return Math.min(r.maxSamples,R.samples)}function bt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function ct(R,M){const N=R.colorSpace,J=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==go&&N!==hr&&($e.getTransfer(N)===it?(J!==ii||ee!==Bn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",N)),M}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=Bt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iN(t,e){function n(i,r=hr){let s;const o=$e.getTransfer(r);if(i===Bn)return t.UNSIGNED_BYTE;if(i===km)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===YM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===WM)return t.BYTE;if(i===XM)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===Bm)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===$M)return t.ALPHA;if(i===qM)return t.RGB;if(i===ii)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===ts)return t.DEPTH_STENCIL;if(i===KM)return t.RED;if(i===zm)return t.RED_INTEGER;if(i===mo)return t.RG;if(i===Hm)return t.RG_INTEGER;if(i===Gm)return t.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===vc)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===bh||i===Ph||i===Dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lh||i===Ih||i===Nh||i===Fh||i===Uh||i===Oh||i===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lh||i===Ih)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fh)return s.COMPRESSED_R11_EAC;if(i===Uh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Oh)return s.COMPRESSED_RG11_EAC;if(i===Bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kh||i===Vh||i===zh||i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$h)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jh||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jh)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===np||i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===np)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new aE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:rN,fragmentShader:sN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rn(new Au(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aN extends To{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",v=new oN,d={},m=n.getContextAttributes();let _=null,S=null;const E=[],A=[],C=new Je;let x=null;const T=new On;T.viewport=new Rt;const L=new On;L.viewport=new Rt;const b=[T,L],k=new x3;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=E[Z];return oe===void 0&&(oe=new Df,E[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=E[Z];return oe===void 0&&(oe=new Df,E[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=E[Z];return oe===void 0&&(oe=new Df,E[Z]=oe),oe.getHandSpace()};function H(Z){const oe=A.indexOf(Z.inputSource);if(oe===-1)return;const fe=E[oe];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||o),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",D);for(let Z=0;Z<E.length;Z++){const oe=A[Z];oe!==null&&(A[Z]=null,E[Z].disconnect(oe))}V=null,Y=null,v.reset();for(const Z in d)delete d[Z];e.setRenderTarget(_),p=null,u=null,h=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Oe=null,De=null;m.depth&&(De=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=m.stencil?ts:qi,Oe=m.stencil?Oa:Ai);const Ne={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ti(u.textureWidth,u.textureHeight,{format:ii,type:Bn,depthTexture:new Ba(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(Z){for(let oe=0;oe<Z.removed.length;oe++){const fe=Z.removed[oe],Oe=A.indexOf(fe);Oe>=0&&(A[Oe]=null,E[Oe].disconnect(fe))}for(let oe=0;oe<Z.added.length;oe++){const fe=Z.added[oe];let Oe=A.indexOf(fe);if(Oe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=A.length){A.push(fe),Oe=Ne;break}else if(A[Ne]===null){A[Ne]=fe,Oe=Ne;break}if(Oe===-1)break}const De=E[Oe];De&&De.connect(fe)}}const U=new O,G=new O;function $(Z,oe,fe){U.setFromMatrixPosition(oe.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);const Oe=U.distanceTo(G),De=oe.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,Bt=De[14]/(De[10]-1),Ye=De[14]/(De[10]+1),tt=(De[9]+1)/De[5],at=(De[9]-1)/De[5],ze=(De[8]-1)/De[0],wt=(Ne[8]+1)/Ne[0],P=Bt*ze,bt=Bt*wt,et=Oe/(-ze+wt),ct=et*-ze;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ct),Z.translateZ(et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ae=Bt+et,R=Ye+et,M=P-ct,N=bt+(Oe-ct),J=tt*Ye/R*Ae,ee=at*Ye/R*Ae;Z.projectionMatrix.makePerspective(M,N,J,ee,Ae,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,fe=Z.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),k.near=L.near=T.near=oe,k.far=L.far=T.far=fe,(V!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,Y=k.far),k.layers.mask=Z.layers.mask|6,T.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Oe=Z.parent,De=k.cameras;te(k,Oe);for(let Ne=0;Ne<De.length;Ne++)te(De[Ne],Oe);De.length===2?$(k,T,L):k.projectionMatrix.copy(T.projectionMatrix),ne(Z,k,Oe)};function ne(Z,oe,fe){fe===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=op*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(k)},this.getCameraTexture=function(Z){return d[Z]};let ge=null;function Ve(Z,oe){if(f=oe.getViewerPose(c||o),g=oe,f!==null){const fe=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Oe=!1;fe.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let Ye=0;Ye<fe.length;Ye++){const tt=fe[Ye];let at=null;if(p!==null)at=p.getViewport(tt);else{const wt=h.getViewSubImage(u,tt);at=wt.viewport,Ye===0&&(e.setRenderTargetTextures(S,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(S))}let ze=b[Ye];ze===void 0&&(ze=new On,ze.layers.enable(Ye),ze.viewport=new Rt,b[Ye]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(at.x,at.y,at.width,at.height),Ye===0&&(k.matrix.copy(ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(ze)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ye=h.getDepthInformation(fe[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(Ye,r.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<fe.length;Ye++){const tt=fe[Ye].camera;if(tt){let at=d[tt];at||(at=new aE,d[tt]=at);const ze=h.getCameraImage(tt);at.sourceTexture=ze}}}}for(let fe=0;fe<E.length;fe++){const Oe=A[fe],De=E[fe];Oe!==null&&De!==void 0&&De.update(Oe,oe,c||o)}ge&&ge(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const We=new fE;We.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){ge=Z},this.dispose=function(){}}}const Hr=new Ki,lN=new Et;function cN(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,lE(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,m,_,S){d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),h(v,d)):d.isMeshPhongMaterial?(s(v,d),f(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),u(v,d),d.isMeshPhysicalMaterial&&p(v,d,S)):d.isMeshMatcapMaterial?(s(v,d),g(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),y(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&a(v,d)):d.isPointsMaterial?l(v,d,m,_):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Mn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Mn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const m=e.get(d),_=m.envMap,S=m.envMapRotation;_&&(v.envMap.value=_,Hr.copy(S),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.envMapRotation.value.setFromMatrix4(lN.makeRotationFromEuler(Hr)),v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function a(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,m,_){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*m,v.scale.value=_*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function f(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function u(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function p(v,d,m){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,d){d.matcap&&(v.matcap.value=d.matcap)}function y(v,d){const m=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=r[m.id];S===void 0&&(g(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",v));const E=_.program;i.updateUBOMapping(m,E);const A=e.render.frame;s[m.id]!==A&&(u(m),s[m.id]=A)}function f(m){const _=h();m.__bindingPointIndex=_;const S=t.createBuffer(),E=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=r[m.id],S=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,C=S.length;A<C;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,L=x.length;T<L;T++){const b=x[T];if(p(b,A,T,E)===!0){const k=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let H=0;H<V.length;H++){const B=V[H],D=y(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,Y),Y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,S,E){const A=m.value,C=_+"_"+S;if(E[C]===void 0)return typeof A=="number"||typeof A=="boolean"?E[C]=A:E[C]=A.clone(),!0;{const x=E[C];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return E[C]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function g(m){const _=m.uniforms;let S=0;const E=16;for(let C=0,x=_.length;C<x;C++){const T=Array.isArray(_[C])?_[C]:[_[C]];for(let L=0,b=T.length;L<b;L++){const k=T[L],V=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,H=V.length;Y<H;Y++){const B=V[Y],D=y(B),U=S%E,G=U%D.boundary,$=U+G;S+=G,$!==0&&E-$<D.storage&&(S+=E-$),k.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=D.storage}}}const A=S%E;return A>0&&(S+=E-A),m.__size=S,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",m),_}function v(m){const _=m.target;_.removeEventListener("dispose",v);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const fN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function dN(){return hi===null&&(hi=new i3(fN,16,16,mo,$i),hi.name="DFG_LUT",hi.minFilter=nn,hi.magFilter=nn,hi.wrapS=ki,hi.wrapT=ki,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class hN{constructor(e={}){const{canvas:n=NP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,v=new Set([Gm,Hm,zm]),d=new Set([Bn,Ai,Ua,Oa,km,Vm]),m=new Uint32Array(4),_=new Int32Array(4);let S=null,E=null;const A=[],C=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=Nn;let b=0,k=0,V=null,Y=-1,H=null;const B=new Rt,D=new Rt;let U=null;const G=new qe(0);let $=0,te=n.width,ne=n.height,ge=1,Ve=null,We=null;const Z=new Rt(0,0,te,ne),oe=new Rt(0,0,te,ne);let fe=!1;const Oe=new iE;let De=!1,Ne=!1;const Bt=new Et,Ye=new O,tt=new Rt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function wt(){return V===null?ge:1}let P=i;function bt(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Um}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",ut,!1),P===null){const F="webgl2";if(P=bt(F,w),P===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Qe("WebGLRenderer: "+w.message),w}let et,ct,Ae,R,M,N,J,ee,K,Se,ce,Pe,Le,re,ae,Me,Te,me,He,I,ue,le,xe;function se(){et=new hL(P),et.init(),ue=new iN(P,et),ct=new sL(P,et,e,ue),Ae=new tN(P,et),ct.reversedDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),R=new gL(P),M=new zI,N=new nN(P,et,Ae,M,ct,ue,R),J=new dL(T),ee=new S3(P),le=new iL(P,ee),K=new pL(P,ee,R,le),Se=new _L(P,K,ee,le,R),me=new vL(P,ct,N),ae=new oL(M),ce=new VI(T,J,et,ct,le,ae),Pe=new cN(T,M),Le=new GI,re=new qI(et),Te=new nL(T,J,Ae,Se,g,l),Me=new eN(T,Se,ct),xe=new uN(P,R,ct,Ae),He=new rL(P,et,R),I=new mL(P,et,R),R.programs=ce.programs,T.capabilities=ct,T.extensions=et,T.properties=M,T.renderLists=Le,T.shadowMap=Me,T.state=Ae,T.info=R}se(),y!==Bn&&(x=new yL(y,n.width,n.height,r,s));const q=new aN(T,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(te,ne,!1))},this.getSize=function(w){return w.set(te,ne)},this.setSize=function(w,F,X=!0){if(q.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,ne=F,n.width=Math.floor(w*ge),n.height=Math.floor(F*ge),X===!0&&(n.style.width=w+"px",n.style.height=F+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(te*ge,ne*ge).floor()},this.setDrawingBufferSize=function(w,F,X){te=w,ne=F,ge=X,n.width=Math.floor(w*X),n.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(y===Bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,X,W){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,X,W),Ae.viewport(B.copy(Z).multiplyScalar(ge).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,F,X,W){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,F,X,W),Ae.scissor(D.copy(oe).multiplyScalar(ge).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Ae.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Ve=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let W=0;if(w){let z=!1;if(V!==null){const he=V.texture.format;z=v.has(he)}if(z){const he=V.texture.type,ve=d.has(he),pe=Te.getClearColor(),we=Te.getClearAlpha(),Re=pe.r,Ue=pe.g,Ge=pe.b;ve?(m[0]=Re,m[1]=Ue,m[2]=Ge,m[3]=we,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Re,_[1]=Ue,_[2]=Ge,_[3]=we,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),X&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",ut,!1),Te.dispose(),Le.dispose(),re.dispose(),M.dispose(),J.dispose(),Se.dispose(),le.dispose(),xe.dispose(),ce.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jm),q.removeEventListener("sessionend",eg),Nr.stop()};function Ee(w){w.preventDefault(),zv("WebGLRenderer: Context Lost."),L=!0}function Fe(){zv("WebGLRenderer: Context Restored."),L=!1;const w=R.autoReset,F=Me.enabled,X=Me.autoUpdate,W=Me.needsUpdate,z=Me.type;se(),R.autoReset=w,Me.enabled=F,Me.autoUpdate=X,Me.needsUpdate=W,Me.type=z}function ut(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const F=w.target;F.removeEventListener("dispose",nt),Ci(F)}function Ci(w){Ri(w),M.remove(w)}function Ri(w){const F=M.get(w).programs;F!==void 0&&(F.forEach(function(X){ce.releaseProgram(X)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,W,z,he){F===null&&(F=at);const ve=z.isMesh&&z.matrixWorld.determinant()<0,pe=_E(w,F,X,W,z);Ae.setMaterial(W,ve);let we=X.index,Re=1;if(W.wireframe===!0){if(we=K.getWireframeAttribute(X),we===void 0)return;Re=2}const Ue=X.drawRange,Ge=X.attributes.position;let be=Ue.start*Re,st=(Ue.start+Ue.count)*Re;he!==null&&(be=Math.max(be,he.start*Re),st=Math.min(st,(he.start+he.count)*Re)),we!==null?(be=Math.max(be,0),st=Math.min(st,we.count)):Ge!=null&&(be=Math.max(be,0),st=Math.min(st,Ge.count));const At=st-be;if(At<0||At===1/0)return;le.setup(z,W,pe,X,we);let St,ot=He;if(we!==null&&(St=ee.get(we),ot=I,ot.setIndex(St)),z.isMesh)W.wireframe===!0?(Ae.setLineWidth(W.wireframeLinewidth*wt()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(z.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),Ae.setLineWidth(qt*wt()),z.isLineSegments?ot.setMode(P.LINES):z.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else z.isPoints?ot.setMode(P.POINTS):z.isSprite&&ot.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qt=z._multiDrawStarts,Ce=z._multiDrawCounts,En=z._multiDrawCount,Ze=we?ee.get(we).bytesPerElement:1,jn=M.get(W).currentProgram.getUniforms();for(let ui=0;ui<En;ui++)jn.setValue(P,"_gl_DrawID",ui),ot.render(qt[ui]/Ze,Ce[ui])}else if(z.isInstancedMesh)ot.renderInstances(be,At,z.count);else if(X.isInstancedBufferGeometry){const qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ce=Math.min(X.instanceCount,qt);ot.renderInstances(be,At,Ce)}else ot.render(be,At)};function Qm(w,F,X){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=Mn,w.needsUpdate=!0,Ja(w,F,X),w.side=br,w.needsUpdate=!0,Ja(w,F,X),w.side=Ui):Ja(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),E=re.get(X),E.init(F),C.push(E),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const W=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const pe=he[ve];Qm(pe,X,z),W.add(pe)}else Qm(he,X,z),W.add(he)}),E=C.pop(),W},this.compileAsync=function(w,F,X=null){const W=this.compile(w,F,X);return new Promise(z=>{function he(){if(W.forEach(function(ve){M.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){z(w);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let bu=null;function vE(w){bu&&bu(w)}function Jm(){Nr.stop()}function eg(){Nr.start()}const Nr=new fE;Nr.setAnimationLoop(vE),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(w){bu=w,q.setAnimationLoop(w),w===null?Nr.stop():Nr.start()},q.addEventListener("sessionstart",Jm),q.addEventListener("sessionend",eg),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,W=x!==null&&(V===null||X)&&x.begin(T,V);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,F,V),E=re.get(w,C.length),E.init(F),C.push(E),Bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(Bt,xi,F.reversedDepth),Ne=this.localClippingEnabled,De=ae.init(this.clippingPlanes,Ne),S=Le.get(w,A.length),S.init(),A.push(S),q.enabled===!0&&q.isPresenting===!0){const ve=T.xr.getDepthSensingMesh();ve!==null&&Pu(ve,F,-1/0,T.sortObjects)}Pu(w,F,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(Ve,We),ze=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ze&&Te.addToRenderList(S,w),this.info.render.frame++,De===!0&&ae.beginShadows();const z=E.state.shadowsArray;if(Me.render(z,w,F),De===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const ve=S.opaque,pe=S.transmissive;if(E.setupLights(),F.isArrayCamera){const we=F.cameras;if(pe.length>0)for(let Re=0,Ue=we.length;Re<Ue;Re++){const Ge=we[Re];ng(ve,pe,w,Ge)}ze&&Te.render(w);for(let Re=0,Ue=we.length;Re<Ue;Re++){const Ge=we[Re];tg(S,w,Ge,Ge.viewport)}}else pe.length>0&&ng(ve,pe,w,F),ze&&Te.render(w),tg(S,w,F)}V!==null&&k===0&&(N.updateMultisampleRenderTarget(V),N.updateRenderTargetMipmap(V)),W&&x.end(T),w.isScene===!0&&w.onAfterRender(T,w,F),le.resetDefaultState(),Y=-1,H=null,C.pop(),C.length>0?(E=C[C.length-1],De===!0&&ae.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Pu(w,F,X,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){W&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Bt);const ve=Se.update(w),pe=w.material;pe.visible&&S.push(w,ve,pe,X,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const ve=Se.update(w),pe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),tt.copy(ve.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(Bt)),Array.isArray(pe)){const we=ve.groups;for(let Re=0,Ue=we.length;Re<Ue;Re++){const Ge=we[Re],be=pe[Ge.materialIndex];be&&be.visible&&S.push(w,ve,be,X,tt.z,Ge)}}else pe.visible&&S.push(w,ve,pe,X,tt.z,null)}}const he=w.children;for(let ve=0,pe=he.length;ve<pe;ve++)Pu(he[ve],F,X,W)}function tg(w,F,X,W){const{opaque:z,transmissive:he,transparent:ve}=w;E.setupLightsView(X),De===!0&&ae.setGlobalState(T.clippingPlanes,X),W&&Ae.viewport(B.copy(W)),z.length>0&&Qa(z,F,X),he.length>0&&Qa(he,F,X),ve.length>0&&Qa(ve,F,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ng(w,F,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const be=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ti(1,1,{generateMipmaps:!0,type:be?$i:Bn,minFilter:es,samples:ct.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const he=E.state.transmissionRenderTarget[W.id],ve=W.viewport||B;he.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);const pe=T.getRenderTarget(),we=T.getActiveCubeFace(),Re=T.getActiveMipmapLevel();T.setRenderTarget(he),T.getClearColor(G),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),ze&&Te.render(X);const Ue=T.toneMapping;T.toneMapping=Ei;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),De===!0&&ae.setGlobalState(T.clippingPlanes,W),Qa(w,X,W),N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let st=0,At=F.length;st<At;st++){const St=F[st],{object:ot,geometry:qt,material:Ce,group:En}=St;if(Ce.side===Ui&&ot.layers.test(W.layers)){const Ze=Ce.side;Ce.side=Mn,Ce.needsUpdate=!0,ig(ot,X,W,qt,Ce,En),Ce.side=Ze,Ce.needsUpdate=!0,be=!0}}be===!0&&(N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he))}T.setRenderTarget(pe,we,Re),T.setClearColor(G,$),Ge!==void 0&&(W.viewport=Ge),T.toneMapping=Ue}function Qa(w,F,X){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,he=w.length;z<he;z++){const ve=w[z],{object:pe,geometry:we,group:Re}=ve;let Ue=ve.material;Ue.allowOverride===!0&&W!==null&&(Ue=W),pe.layers.test(X.layers)&&ig(pe,F,X,we,Ue,Re)}}function ig(w,F,X,W,z,he){w.onBeforeRender(T,F,X,W,z,he),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(T,F,X,W,w,he),z.transparent===!0&&z.side===Ui&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,T.renderBufferDirect(X,F,W,z,w,he),z.side=br,z.needsUpdate=!0,T.renderBufferDirect(X,F,W,z,w,he),z.side=Ui):T.renderBufferDirect(X,F,W,z,w,he),w.onAfterRender(T,F,X,W,z,he)}function Ja(w,F,X){F.isScene!==!0&&(F=at);const W=M.get(w),z=E.state.lights,he=E.state.shadowsArray,ve=z.state.version,pe=ce.getParameters(w,z.state,he,F,X),we=ce.getProgramCacheKey(pe);let Re=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=J.get(w.envMap||W.environment,Ue),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",nt),Re=new Map,W.programs=Re);let Ge=Re.get(we);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ve)return sg(w,pe),Ge}else pe.uniforms=ce.getUniforms(w),w.onBeforeCompile(pe,T),Ge=ce.acquireProgram(pe,we),Re.set(we,Ge),W.uniforms=pe.uniforms;const be=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=ae.uniform),sg(w,pe),W.needsLights=yE(w),W.lightsStateVersion=ve,W.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function rg(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function sg(w,F){const X=M.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function _E(w,F,X,W,z){F.isScene!==!0&&(F=at),N.resetTextureUnits();const he=F.fog,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,pe=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:go,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=J.get(W.envMap||ve,we),Ue=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,At=!!X.morphAttributes.color;let St=Ei;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=T.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=ot!==void 0?ot.length:0,Ce=M.get(W),En=E.state.lights;if(De===!0&&(Ne===!0||w!==H)){const kt=w===H&&W.id===Y;ae.setState(W,w,kt)}let Ze=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==En.state.version||Ce.outputColorSpace!==pe||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Re||W.fog===!0&&Ce.fog!==he||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Ge||Ce.morphTargets!==be||Ce.morphNormals!==st||Ce.morphColors!==At||Ce.toneMapping!==St||Ce.morphTargetsCount!==qt)&&(Ze=!0):(Ze=!0,Ce.__version=W.version);let jn=Ce.currentProgram;Ze===!0&&(jn=Ja(W,F,z));let ui=!1,Fr=!1,hs=!1;const lt=jn.getUniforms(),Gt=Ce.uniforms;if(Ae.useProgram(jn.program)&&(ui=!0,Fr=!0,hs=!0),W.id!==Y&&(Y=W.id,Fr=!0),ui||H!==w){Ae.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",w.projectionMatrix),lt.setValue(P,"viewMatrix",w.matrixWorldInverse);const Ji=lt.map.cameraPosition;Ji!==void 0&&Ji.setValue(P,Ye.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Fr=!0,hs=!0)}if(Ce.needsLights&&(En.state.directionalShadowMap.length>0&&lt.setValue(P,"directionalShadowMap",En.state.directionalShadowMap,N),En.state.spotShadowMap.length>0&&lt.setValue(P,"spotShadowMap",En.state.spotShadowMap,N),En.state.pointShadowMap.length>0&&lt.setValue(P,"pointShadowMap",En.state.pointShadowMap,N)),z.isSkinnedMesh){lt.setOptional(P,z,"bindMatrix"),lt.setOptional(P,z,"bindMatrixInverse");const kt=z.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),lt.setValue(P,"boneTexture",kt.boneTexture,N))}z.isBatchedMesh&&(lt.setOptional(P,z,"batchingTexture"),lt.setValue(P,"batchingTexture",z._matricesTexture,N),lt.setOptional(P,z,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",z._indirectTexture,N),lt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",z._colorsTexture,N));const Qi=X.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&me.update(z,X,jn),(Fr||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,lt.setValue(P,"receiveShadow",z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Gt.envMapIntensity.value=F.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=dN()),Fr&&(lt.setValue(P,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&xE(Gt,hs),he&&W.fog===!0&&Pe.refreshFogUniforms(Gt,he),Pe.refreshMaterialUniforms(Gt,W,ge,ne,E.state.transmissionRenderTarget[w.id]),_c.upload(P,rg(Ce),Gt,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_c.upload(P,rg(Ce),Gt,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(P,"center",z.center),lt.setValue(P,"modelViewMatrix",z.modelViewMatrix),lt.setValue(P,"normalMatrix",z.normalMatrix),lt.setValue(P,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let Ji=0,ps=kt.length;Ji<ps;Ji++){const og=kt[Ji];xe.update(og,jn),xe.bind(og,jn)}}return jn}function xE(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function yE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,F,X){const W=M.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=F,M.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=M.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const SE=P.createFramebuffer();this.setRenderTarget=function(w,F=0,X=0){V=w,b=F,k=X;let W=null,z=!1,he=!1;if(w){const pe=M.get(w);if(pe.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),B.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest,Ae.viewport(B),Ae.scissor(D),Ae.setScissorTest(U),Y=-1;return}else if(pe.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(pe.__hasExternalTextures)N.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(pe.__boundDepthTexture!==Ue){if(Ue!==null&&M.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(he=!0);const Re=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?W=Re[F][X]:W=Re[F],z=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?W=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[X]:W=Re,B.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else B.copy(Z).multiplyScalar(ge).floor(),D.copy(oe).multiplyScalar(ge).floor(),U=fe;if(X!==0&&(W=SE),Ae.bindFramebuffer(P.FRAMEBUFFER,W)&&Ae.drawBuffers(w,W),Ae.viewport(B),Ae.scissor(D),Ae.setScissorTest(U),z){const pe=M.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,X)}else if(he){const pe=F;for(let we=0;we<w.textures.length;we++){const Re=M.get(w.textures[we]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+we,Re.__webglTexture,X,pe)}}else if(w!==null&&X!==0){const pe=M.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,X)}Y=-1},this.readRenderTargetPixels=function(w,F,X,W,z,he,ve,pe=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Ae.bindFramebuffer(P.FRAMEBUFFER,we);try{const Re=w.textures[pe],Ue=Re.format,Ge=Re.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ct.textureFormatReadable(Ue)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ge)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&X>=0&&X<=w.height-z&&P.readPixels(F,X,W,z,ue.convert(Ue),ue.convert(Ge),he)}finally{const Re=V!==null?M.get(V).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,W,z,he,ve,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we)if(F>=0&&F<=w.width-W&&X>=0&&X<=w.height-z){Ae.bindFramebuffer(P.FRAMEBUFFER,we);const Re=w.textures[pe],Ue=Re.format,Ge=Re.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ct.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(F,X,W,z,ue.convert(Ue),ue.convert(Ge),0);const st=V!==null?M.get(V).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,st);const At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await FP(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(be),P.deleteSync(At),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const W=Math.pow(2,-X),z=Math.floor(w.image.width*W),he=Math.floor(w.image.height*W),ve=F!==null?F.x:0,pe=F!==null?F.y:0;N.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,ve,pe,z,he),Ae.unbindTexture()};const ME=P.createFramebuffer(),EE=P.createFramebuffer();this.copyTextureToTexture=function(w,F,X=null,W=null,z=0,he=0){let ve,pe,we,Re,Ue,Ge,be,st,At;const St=w.isCompressedTexture?w.mipmaps[he]:w.image;if(X!==null)ve=X.max.x-X.min.x,pe=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Ue=X.min.y,Ge=X.isBox3?X.min.z:0;else{const Gt=Math.pow(2,-z);ve=Math.floor(St.width*Gt),pe=Math.floor(St.height*Gt),w.isDataArrayTexture?we=St.depth:w.isData3DTexture?we=Math.floor(St.depth*Gt):we=1,Re=0,Ue=0,Ge=0}W!==null?(be=W.x,st=W.y,At=W.z):(be=0,st=0,At=0);const ot=ue.convert(F.format),qt=ue.convert(F.type);let Ce;F.isData3DTexture?(N.setTexture3D(F,0),Ce=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(N.setTexture2DArray(F,0),Ce=P.TEXTURE_2D_ARRAY):(N.setTexture2D(F,0),Ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const En=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),jn=P.getParameter(P.UNPACK_SKIP_PIXELS),ui=P.getParameter(P.UNPACK_SKIP_ROWS),Fr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const hs=w.isDataArrayTexture||w.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Gt=M.get(w),Qi=M.get(F),kt=M.get(Gt.__renderTarget),Ji=M.get(Qi.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,kt.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ps=0;ps<we;ps++)hs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(w).__webglTexture,z,Ge+ps),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(F).__webglTexture,he,At+ps)),P.blitFramebuffer(Re,Ue,ve,pe,be,st,ve,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||M.has(w)){const Gt=M.get(w),Qi=M.get(F);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,ME),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,EE);for(let kt=0;kt<we;kt++)hs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,z,Ge+kt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,z),lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qi.__webglTexture,he,At+kt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qi.__webglTexture,he),z!==0?P.blitFramebuffer(Re,Ue,ve,pe,be,st,ve,pe,P.COLOR_BUFFER_BIT,P.NEAREST):lt?P.copyTexSubImage3D(Ce,he,be,st,At+kt,Re,Ue,ve,pe):P.copyTexSubImage2D(Ce,he,be,st,Re,Ue,ve,pe);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ce,he,be,st,At,ve,pe,we,ot,qt,St.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ce,he,be,st,At,ve,pe,we,ot,St.data):P.texSubImage3D(Ce,he,be,st,At,ve,pe,we,ot,qt,St):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,be,st,ve,pe,ot,qt,St.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,be,st,St.width,St.height,ot,St.data):P.texSubImage2D(P.TEXTURE_2D,he,be,st,ve,pe,ot,qt,St);P.pixelStorei(P.UNPACK_ROW_LENGTH,En),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ui),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fr),he===0&&F.generateMipmaps&&P.generateMipmap(Ce),Ae.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){b=0,k=0,V=null,Ae.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const Xo=navigator.hardwareConcurrency<=4||/Mobi/i.test(navigator.userAgent),pN=`
uniform float uTime;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec3 pos = position;
  float displacement = sin(pos.x * 3.0 + uTime) * sin(pos.y * 3.0 + uTime * 1.3) * 0.12;
  pos += normal * displacement;
  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,mN=`
varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 uColorBase;
uniform vec3 uColorFresnel;

void main() {
  vec3 viewDirection = normalize(cameraPosition - vPosition);
  float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.5);

  vec3 color = mix(uColorBase, uColorFresnel, fresnel);
  float alpha = 0.15 + fresnel * 0.5;

  gl_FragColor = vec4(color, alpha);
}
`;function gN({scrollRef:t}){const e=Q.useRef(null),n=Q.useRef({x:0,y:0});return Q.useEffect(()=>{if(!e.current)return;const i=new ZP;i.fog=new Ym(0,.012);const r=new On(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=35;const s=new hN({antialias:!Xo,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,Xo?1:1.5)),s.setSize(window.innerWidth,window.innerHeight),s.toneMapping=Om,s.toneMappingExposure=1.2,e.current.appendChild(s.domElement);const o=Xo?60:120,a=[],l=[];for(let B=0;B<o;B++){const D=8+Math.random()*16,U=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1),$=D*Math.sin(G)*Math.cos(U),te=D*Math.sin(G)*Math.sin(U),ne=D*Math.cos(G),ge=new Km(.1+Math.random()*.1,6,6),Ve=new ha({color:Math.random()>.3?54527:8086015,transparent:!0,opacity:.7}),We=new Rn(ge,Ve);We.position.set($,te,ne),We.userData.phase=Math.random()*Math.PI*2,i.add(We),a.push(We),l.push(new O((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.02))}const c=new iu(2.5,2),f=new ci({vertexShader:pN,fragmentShader:mN,uniforms:{uTime:{value:0},uColorBase:{value:new qe(35801)},uColorFresnel:{value:new qe(8086015)}},transparent:!0,blending:da,depthWrite:!1}),h=new Rn(c,f);i.add(h);const u=new iu(2.6,2),p=new ha({color:8086015,wireframe:!0,transparent:!0,opacity:.08}),g=new Rn(u,p);i.add(g);const y=new Zm(12,.04,4,80),v=new ha({color:8086015,transparent:!0,opacity:.12}),d=new Rn(y,v);d.rotation.x=Math.PI/3,i.add(d);const m=Xo?200:500,_=new sn,S=new Float32Array(m*3);for(let B=0;B<m*3;B+=3)S[B]=(Math.random()-.5)*80,S[B+1]=(Math.random()-.5)*80,S[B+2]=(Math.random()-.5)*80;_.setAttribute("position",new ai(S,3));const E=new sE({color:8086015,size:.07,transparent:!0,opacity:.35,blending:da}),A=new c3(_,E);i.add(A);let C=null;const x=Xo?9:7;let T=0;const L=()=>{C&&i.remove(C);const B=[],D=[];for(let $=0;$<a.length;$++)for(let te=$+1;te<a.length;te++){const ne=a[$].position.distanceTo(a[te].position);if(ne<x){B.push(a[$].position.x,a[$].position.y,a[$].position.z,a[te].position.x,a[te].position.y,a[te].position.z);const ge=.1*(1-ne/x);D.push(0,.831,1,ge),D.push(0,.831,1,ge)}}const U=new sn;U.setAttribute("position",new Tt(B,3)),U.setAttribute("color",new Tt(D,4));const G=new rE({vertexColors:!0,transparent:!0,blending:da});C=new l3(U,G),i.add(C)},b=B=>{n.current.x=B.clientX/window.innerWidth*2-1,n.current.y=-(B.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",b);const k=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",k);const V={x:0,y:0,z:35};let Y=0;const H=()=>{Y+=.016,T++,f.uniforms.uTime.value=Y,a.forEach((ge,Ve)=>{ge.position.add(l[Ve]),Math.abs(ge.position.x)>25&&(l[Ve].x*=-1),Math.abs(ge.position.y)>20&&(l[Ve].y*=-1),Math.abs(ge.position.z)>20&&(l[Ve].z*=-1);const We=.5+.5*Math.sin(Y*1.5+ge.userData.phase);ge.material.opacity=.4+.6*We,ge.scale.setScalar(.85+.3*We)}),T%4===0&&L(),d.rotation.z+=.004;const B=_.attributes.position.array;for(let ge=1;ge<B.length;ge+=3)B[ge]+=.0015;for(let ge=0;ge<B.length;ge+=3)B[ge]+=4e-4;_.attributes.position.needsUpdate=!0;const D=t.current,U=35-D*20,G=D*8,$=Math.sin(D*Math.PI)*5,te=n.current.x*3,ne=n.current.y*2;V.x+=($+te-V.x)*.04,V.y+=(G+ne-V.y)*.04,V.z+=(U-V.z)*.04,r.position.set(V.x,V.y,V.z),r.lookAt(0,G*.3,0),s.render(i,r),requestAnimationFrame(H)};return H(),()=>{var B;window.removeEventListener("mousemove",b),window.removeEventListener("resize",k),(B=e.current)==null||B.removeChild(s.domElement),s.dispose()}},[t]),j.jsx("div",{ref:e,className:"fixed inset-0 z-[1]"})}function vN(){const t=Q.useRef(null),e=Q.useRef(null),n=Q.useRef({x:0,y:0}),i=Q.useRef({x:0,y:0});return Q.useEffect(()=>{const r=o=>{i.current={x:o.clientX,y:o.clientY},t.current&&(t.current.style.transform=`translate(${o.clientX-3}px, ${o.clientY-3}px)`)},s=()=>{n.current.x+=(i.current.x-n.current.x)*.12,n.current.y+=(i.current.y-n.current.y)*.12,e.current&&(e.current.style.transform=`translate(${n.current.x-16}px, ${n.current.y-16}px)`),requestAnimationFrame(s)};return window.addEventListener("mousemove",r),s(),()=>{window.removeEventListener("mousemove",r)}},[]),j.jsxs(j.Fragment,{children:[j.jsx("div",{ref:t,className:"fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] mix-blend-difference",style:{backgroundColor:"#00D4FF",willChange:"transform"}}),j.jsx("div",{ref:e,className:"fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-[rgba(0,212,255,0.4)]",style:{willChange:"transform"}})]})}const N_=["Engineer","Systems Architect","Game Developer"];function _N(){const[t,e]=Q.useState(0),[n,i]=Q.useState(""),[r,s]=Q.useState(!1);return Q.useEffect(()=>{const o=N_[t],a=setTimeout(()=>{r?n.length>0?i(n.slice(0,-1)):(s(!1),e(l=>(l+1)%N_.length)):n.length<o.length?i(o.slice(0,n.length+1)):setTimeout(()=>s(!0),2200)},r?35:75);return()=>clearTimeout(a)},[n,r,t]),j.jsxs("div",{className:"flex items-center gap-1",children:[j.jsx("span",{className:"text-gray-400",children:n}),j.jsx(ln.span,{animate:{opacity:[1,0,1]},transition:{duration:.7,repeat:1/0},className:"w-0.5 h-6 bg-[#00D4FF] inline-block"})]})}const F_=[{id:"home",label:"Home"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"terminal",label:"Terminal"},{id:"contact",label:"Contact"}];function xN(){const[t,e]=Q.useState("home"),[n,i]=Q.useState(!1);Q.useEffect(()=>{setTimeout(()=>i(!0),500);const s=F_.map(o=>{const a=document.getElementById(o.id);if(!a)return null;const l=new IntersectionObserver(([c])=>{c.isIntersecting&&e(o.id)},{threshold:.4});return l.observe(a),l});return()=>{s.forEach(o=>o==null?void 0:o.disconnect())}},[]);const r=s=>{const o=document.getElementById(s);o==null||o.scrollIntoView({behavior:"smooth"})};return j.jsx(ln.nav,{initial:{y:-20,opacity:0},animate:n?{y:0,opacity:1}:{},className:"fixed top-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[20px] rounded-full px-6 py-3",style:{backgroundColor:"rgba(5,5,8,0.85)"},children:j.jsx("ul",{className:"flex items-center gap-2",children:F_.map(s=>j.jsxs("li",{className:"relative",children:[j.jsx("button",{onMouseDown:o=>o.preventDefault(),onClick:()=>r(s.id),className:`relative z-10 px-4 py-2 text-sm font-medium transition-colors ${t===s.id?"text-white":"text-gray-400 hover:text-gray-200"}`,children:s.label}),t===s.id&&j.jsx(ln.div,{layoutId:"navpill",className:"absolute inset-0 rounded-full",style:{backgroundColor:"rgba(0,212,255,0.15)"},transition:{type:"spring",stiffness:300,damping:30}})]},s.id))})})}function yN({children:t,className:e="",style:n,disableTilt:i=!1}){const r=Q.useRef(null),s=Q.useRef(0),o=Q.useRef(0),a=Q.useRef(0),l=Q.useRef(0),[c,f]=Q.useState(!1),h=p=>{if(i||!r.current)return;const g=r.current.getBoundingClientRect(),y=(p.clientX-g.left)/g.width-.5,v=(p.clientY-g.top)/g.height-.5;if(l.current=y*12,a.current=-v*12,!c){f(!0);const d=()=>{s.current+=(a.current-s.current)*.1,o.current+=(l.current-o.current)*.1,r.current&&(r.current.style.transform=`perspective(1000px) rotateX(${s.current}deg) rotateY(${o.current}deg)`),Math.abs(a.current-s.current)>.1||Math.abs(l.current-o.current)>.1?requestAnimationFrame(d):f(!1)};d()}},u=()=>{if(i)return;a.current=0,l.current=0;const p=()=>{s.current*=.85,o.current*=.85,r.current&&(r.current.style.transform=`perspective(1000px) rotateX(${s.current}deg) rotateY(${o.current}deg)`),(Math.abs(s.current)>.01||Math.abs(o.current)>.01)&&requestAnimationFrame(p)};p()};return j.jsx("div",{ref:r,onMouseMove:h,onMouseLeave:u,className:e,style:{...n,transition:i?"transform 0.3s ease":"none"},children:t})}function SN({title:t,description:e,tech:n,index:i,videoId:r}){console.log(r);const s=Q.useRef(null),o=FM(s,{once:!0,margin:"-60px"});return j.jsx(ln.div,{ref:s,initial:{opacity:0,y:50},animate:o?{opacity:1,y:0}:{},transition:{duration:.6,delay:i*.12},children:j.jsxs(yN,{disableTilt:!!r,className:"group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-500 hover:border-[#00D4FF]/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(0,212,255,0.06)]",style:{boxShadow:"0 8px 30px rgba(0,0,0,0.3)"},children:[j.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#00D4FF]/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-5"}),r&&j.jsx("div",{className:"aspect-video w-full overflow-hidden",children:j.jsx("iframe",{className:"w-full h-full",src:`https://www.youtube.com/embed/${r}`,title:"Project video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),j.jsxs("div",{className:"p-8",children:[j.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:t}),j.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:e}),j.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(a=>j.jsx("span",{className:"px-3 py-1 text-xs font-mono rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF]/50 transition-colors duration-300 group-hover:text-[#00D4FF]/90",children:a},a))})]})]})})}const U_={help:()=>[{type:"output",content:"Available commands:"},{type:"output",content:"  help                  - Show this help message"},{type:"output",content:"  whoami                - Display user info"},{type:"output",content:"  terminal destroyers   - Initiate destruction protocol"},{type:"output",content:"  clear                 - Clear terminal"}],whoami:()=>[{type:"output",content:"ekrot@system-core"},{type:"output",content:"Roblox Systems Engineer"}],"terminal destroyers":()=>[{type:"output",content:"Initializing destruction protocol..."},{type:"output",content:"Bypassing neural safeguards..."},{type:"output",content:"Overriding system constraints..."},{type:"output",content:"Terminal override complete."},{type:"output",content:"You are now the destroyer."}]};function MN(){const[t,e]=Q.useState([{type:"system",content:"System Console v1.0 - Click to activate"}]),[n,i]=Q.useState(""),[r,s]=Q.useState([]),[o,a]=Q.useState(-1),[l,c]=Q.useState(!1),[f,h]=Q.useState(!1),u=Q.useRef(null),p=Q.useRef(null),g=Q.useRef(null);Q.useEffect(()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)},[t]),Q.useEffect(()=>{const d=m=>{var _;u.current&&!u.current.contains(m.target)&&(h(!1),(_=g.current)==null||_.blur())};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),Q.useEffect(()=>{if(!u.current)return;const d=new IntersectionObserver(([m])=>{var _;m.isIntersecting||(h(!1),(_=g.current)==null||_.blur())},{threshold:.2});return d.observe(u.current),()=>d.disconnect()},[]);const y=async d=>{const m=d.trim().toLowerCase();m&&(e(_=>[..._,{type:"user",content:d}]),s(_=>[..._,d]),i(""),a(-1),c(!0),await new Promise(_=>setTimeout(_,400)),m==="clear"?e([{type:"system",content:"Terminal cleared."}]):U_[m]?e(_=>[..._,...U_[m]()]):e(_=>[..._,{type:"error",content:`Command not found: ${d}`}]),c(!1))},v=d=>{if(f){if(d.key==="Enter")y(n);else if(d.key==="ArrowUp"){if(d.preventDefault(),r.length>0){const m=o<r.length-1?o+1:o;a(m),i(r[r.length-1-m])}}else if(d.key==="ArrowDown")if(d.preventDefault(),o>0){const m=o-1;a(m),i(r[r.length-1-m])}else a(-1),i("")}};return j.jsxs("div",{ref:u,className:"bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden",onClick:()=>{var d;h(!0),(d=g.current)==null||d.focus()},children:[j.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10",children:[j.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),j.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),j.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),j.jsx("span",{className:"ml-2 text-xs text-gray-400 font-mono",children:"system-console"})]}),j.jsxs("div",{ref:p,className:"p-4 h-96 overflow-y-auto font-mono text-sm space-y-1",children:[j.jsx(UR,{children:t.map((d,m)=>j.jsxs(ln.div,{initial:{opacity:0,x:-4},animate:{opacity:1,x:0},transition:{duration:.2},className:d.type==="system"?"text-gray-600":d.type==="user"?"text-white":d.type==="error"?"text-red-400":"text-[#7B61FF]",children:[d.type==="user"&&j.jsx("span",{className:"text-[#00D4FF]",children:"> "}),d.content]},m))}),!l&&j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("span",{className:"text-[#00D4FF]",children:">"}),j.jsx("input",{ref:g,type:"text",value:n,onChange:d=>i(d.target.value),onKeyDown:v,className:"flex-1 bg-transparent outline-none text-white",tabIndex:-1}),f&&j.jsx(ln.span,{animate:{opacity:[1,0,1]},transition:{duration:.7,repeat:1/0},className:"w-2 h-4 bg-[#00D4FF]"})]})]})]})}function $l({children:t,className:e="",as:n="button",href:i,onClick:r}){const s=Q.useRef(null),o=Q.useRef(0),a=Q.useRef(0),[l,c]=Q.useState(!1),u={ref:s,className:e,onMouseMove:p=>{if(!s.current)return;const g=s.current.getBoundingClientRect(),y=g.left+g.width/2,v=g.top+g.height/2,d=p.clientX-y,m=p.clientY-v,_=Math.sqrt(d*d+m*m),S=d/_*Math.min(_,50)*.2,E=m/_*Math.min(_,50)*.2;if(!l){c(!0);const A=()=>{o.current+=(S-o.current)*.12,a.current+=(E-a.current)*.12,s.current&&(s.current.style.transform=`translate(${o.current}px, ${a.current}px)`),Math.abs(S-o.current)>.5||Math.abs(E-a.current)>.5?requestAnimationFrame(A):c(!1)};A()}},onMouseLeave:()=>{const p=()=>{o.current*=.8,a.current*=.8,s.current&&(s.current.style.transform=`translate(${o.current}px, ${a.current}px)`),(Math.abs(o.current)>.1||Math.abs(a.current)>.1)&&requestAnimationFrame(p)};p()},style:{willChange:"transform"}};return n==="a"?j.jsx("a",{...u,href:i,children:t}):j.jsx("button",{...u,onClick:r,children:t})}function EN(){return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"fixed inset-0 z-[2] pointer-events-none opacity-[0.022]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`}}),j.jsx("div",{className:"fixed inset-0 z-[2] pointer-events-none opacity-[0.04]",style:{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)"}}),j.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[j.jsx("div",{className:"absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 animate-[breath_8s_ease-in-out_infinite]",style:{background:"radial-gradient(circle, #00D4FF 0%, transparent 70%)",animationDelay:"0s"}}),j.jsx("div",{className:"absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 animate-[breath_10s_ease-in-out_infinite]",style:{background:"radial-gradient(circle, #7B61FF 0%, transparent 70%)",animationDelay:"2s"}})]}),j.jsx("style",{children:`
        @keyframes breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `})]})}const TN=[{title:"Neural Rendering Engine",description:"Real-time volumetric rendering system using custom GLSL shaders and compute pipelines for procedural world generation.",tech:["WebGL","GLSL","Three.js","TypeScript"],videoId:"Ejbkd6h4Pss"},{title:"Distributed Task Orchestrator",description:"Microservices architecture handling 10M+ daily operations with event-driven design and advanced caching strategies.",tech:["Node.js","Redis","PostgreSQL","Docker"],videoId:"undefined"},{title:"Quantum State Visualizer",description:"Interactive data visualization platform for quantum computing simulations with real-time WebGL particle systems.",tech:["React","WebGL","D3.js","Python"],videoId:"undefined"},{title:"AI-Powered Code Assistant",description:"Machine learning model integration for intelligent code completion and refactoring suggestions in real-time.",tech:["Python","TensorFlow","FastAPI","WebSockets"],videoId:"undefined"}],wN=[{category:"Frontend",items:["React","TypeScript","Three.js","WebGL","Tailwind"]},{category:"Backend",items:["Node.js","Python","PostgreSQL","Redis","Docker"]},{category:"Graphics",items:["GLSL","Shaders","Blender","Unity","Unreal"]},{category:"Tools",items:["Git","CI/CD","AWS","Linux","Figma"]}];function AN(){const t=Q.useRef(0),e=Q.useRef(null),n=FM(e,{once:!0,margin:"-80px"});return Q.useEffect(()=>{const i=()=>{console.log("SCROLL Y:",window.scrollY)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),Q.useEffect(()=>{window.scrollTo(0,0)},[]),Q.useEffect(()=>{const i=()=>{const r=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);t.current=Math.min(Math.max(r,0),1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),Q.useEffect(()=>(document.body.style.cursor="none",()=>{document.body.style.cursor="auto"}),[]),j.jsx(j.Fragment,{children:j.jsxs(j.Fragment,{children:[j.jsx(vN,{}),j.jsxs("div",{className:"relative bg-[#030306] text-white overflow-x-hidden",children:[j.jsx(Jb,{}),j.jsx(gN,{scrollRef:t}),j.jsx(EN,{}),j.jsx(xN,{}),j.jsxs("div",{className:"relative z-10",children:[j.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center px-8",children:j.jsxs(ln.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.2},className:"max-w-4xl text-center",children:[j.jsxs(ln.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.4},className:"mb-6",children:[j.jsx("h1",{className:"text-7xl md:text-8xl font-bold mb-4 text-white",children:"Ekrots"}),j.jsx("div",{className:"text-2xl md:text-3xl",children:j.jsx(_N,{})})]}),j.jsx(ln.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.8},className:"text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed",children:"Building immersive digital experiences at the intersection of code and cutting-edge technology. Specializing in programming.                  "})]})}),j.jsx("section",{id:"projects",className:"py-36 px-8",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs(ln.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"mb-16",children:[j.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[j.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]"}),j.jsx("span",{className:"text-[#00D4FF] text-sm font-mono tracking-wider",children:"SELECTED WORK"})]}),j.jsx("h2",{className:"text-5xl font-bold",children:"Featured Projects"})]}),j.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:TN.map((i,r)=>j.jsx(SN,{...i,index:r},r))})," //print"]})}),j.jsx("section",{id:"skills",className:"py-36 px-8",ref:e,children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs(ln.div,{initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{},transition:{duration:.6},className:"mb-16",children:[j.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[j.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]"}),j.jsx("span",{className:"text-[#00D4FF] text-sm font-mono tracking-wider",children:"EXPERTISE"})]}),j.jsx("h2",{className:"text-5xl font-bold",children:"Technical Skills"})]}),j.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:wN.map((i,r)=>j.jsxs(ln.div,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.5,delay:r*.1},className:"p-6 rounded-lg border border-white/5 bg-white/[0.02]",children:[j.jsx("h3",{className:"text-xl font-bold mb-4 text-[#00D4FF]",children:i.category}),j.jsx("ul",{className:"space-y-2",children:i.items.map((s,o)=>j.jsxs("li",{className:"text-gray-400 flex items-center gap-2",children:[j.jsx("span",{className:"w-1.5 h-1.5 bg-[#00D4FF] rounded-full"}),s]},o))})]},r))})]})}),j.jsx("section",{id:"terminal",className:"py-36 px-8",children:j.jsxs("div",{className:"max-w-4xl mx-auto",children:[j.jsxs(ln.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"mb-16",children:[j.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[j.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]"}),j.jsx("span",{className:"text-[#00D4FF] text-sm font-mono tracking-wider",children:"INTERACTIVE"})]}),j.jsx("h2",{className:"text-5xl font-bold mb-4",children:"Neural Terminal"}),j.jsxs("p",{className:"text-gray-500",children:["Try out commands like ",j.jsx("code",{className:"text-[#00D4FF] font-mono",children:"help"}),","," ",j.jsx("code",{className:"text-[#00D4FF] font-mono",children:"whoami"}),", or"," ",j.jsx("code",{className:"text-[#00D4FF] font-mono",children:"clear"})]})]}),j.jsx(ln.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:.2},children:j.jsx(MN,{})})]})}),j.jsx("section",{id:"contact",className:"py-36 px-8",children:j.jsx("div",{className:"max-w-2xl mx-auto text-center",children:j.jsxs(ln.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},children:[j.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[j.jsx("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#00D4FF]"}),j.jsx("span",{className:"text-[#00D4FF] text-sm font-mono tracking-wider",children:"GET IN TOUCH"}),j.jsx("div",{className:"h-px flex-1 bg-gradient-to-l from-transparent to-[#00D4FF]"})]}),j.jsx("h2",{className:"text-5xl font-bold mb-6",children:"Let's Build Something"}),j.jsx("p",{className:"text-gray-500 text-lg mb-12",children:"Open to collaboration on innovative projects. Whether it's cutting-edge web experiences, real-time graphics, or scalable systems architecture."}),j.jsxs("div",{className:"flex items-center justify-center gap-6 mb-12",children:[j.jsx($l,{as:"a",href:"https://github.com",className:"p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors",children:j.jsx($b,{size:24})}),j.jsx($l,{as:"a",href:"https://linkedin.com",className:"p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors",children:j.jsx(qb,{size:24})}),j.jsx($l,{as:"a",href:"mailto:alex@example.com",className:"p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00D4FF]/30 transition-colors",children:j.jsx(Kb,{size:24})})]}),j.jsx($l,{as:"a",href:"mailto:alex@example.com",className:"inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#0099cc] to-[#00D4FF] text-white font-semibold hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-shadow",children:"Start a Conversation"})]})})}),j.jsx("footer",{className:"py-8 px-8 border-t border-white/5",children:j.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[j.jsx("p",{className:"text-gray-600 text-sm font-mono",children:"Crafted with React, Three.js & GLSL"}),j.jsx("p",{className:"text-gray-700 text-sm"})]})})]})]})]})})}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");qy(document.getElementById("root")).render(j.jsx(Q.StrictMode,{children:j.jsx(AN,{})}));
