!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){},r={},i=[],a=[];function s(e,t){var n,s,l,d,u=a;for(d=arguments.length;d-- >2;)i.push(arguments[d]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((s=i.pop())&&void 0!==s.pop)for(d=s.length;d--;)i.push(s[d]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&n?u[u.length-1]+=s:u===a?u=[s]:u.push(s),n=l;var c=new o;return c.nodeName=e,c.children=u,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(c),c}function l(e,t){for(var n in t)e[n]=t[n];return e}function d(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(r.debounceRendering||u)(h)}function h(){for(var e;e=p.pop();)e._dirty&&B(e)}function v(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&m(e,t.nodeName):n||e._componentConstructor===t.nodeName}function m(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function y(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)d(n,null),d(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===c.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function b(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var C=[],x=0,S=!1,w=!1;function N(){for(var e;e=C.shift();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){x++||(S=null!=r&&void 0!==r.ownerSVGElement,w=null!=e&&!("__preactattr_"in e));var a=O(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--x||(w=!1,i||N()),a}function O(e,t,n,o,r){var i=e,a=S;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var s,l,d=t.nodeName;if("function"==typeof d)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,l=s,d=y(t);for(;r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;r&&l&&(!o||r._component)?(U(r,d,3,n,o),e=r.base):(i&&!s&&(L(i),e=a=null),r=T(t.nodeName,d,n),e&&!r.nextBase&&(r.nextBase=e,a=null),U(r,d,1,n,o),e=r.base,a&&e!==a&&(a._component=null,P(a,!1)));return e}(e,t,n,o);if(S="svg"===d||"foreignObject"!==d&&S,d=String(d),(!e||!m(e,d))&&(s=d,(l=S?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var u=i.firstChild,c=i.__preactattr_,p=t.children;if(null==c){c=i.__preactattr_={};for(var f=i.attributes,h=f.length;h--;)c[f[h].name]=f[h].value}return!w&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&function(e,t,n,o,r){var i,a,s,l,d,u=e.childNodes,c=[],p={},f=0,h=0,m=u.length,y=0,g=t?t.length:0;if(0!==m)for(var b=0;b<m;b++){var C=u[b],x=C.__preactattr_,S=g&&x?C._component?C._component.__key:x.key:null;null!=S?(f++,p[S]=C):(x||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(c[y++]=C)}if(0!==g)for(var b=0;b<g;b++){l=t[b],d=null;var S=l.key;if(null!=S)f&&void 0!==p[S]&&(d=p[S],p[S]=void 0,f--);else if(h<y)for(i=h;i<y;i++)if(void 0!==c[i]&&v(a=c[i],l,r)){d=a,c[i]=void 0,i===y-1&&y--,i===h&&h++;break}d=O(d,l,n,o),s=u[b],d&&d!==e&&d!==s&&(null==s?e.appendChild(d):d===s.nextSibling?_(s):e.insertBefore(d,s))}if(f)for(var b in p)void 0!==p[b]&&P(p[b],!1);for(;h<=y;)void 0!==(d=c[y--])&&P(d,!1)}(i,p,n,o,w||null!=c.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||g(e,o,n[o],n[o]=void 0,S);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,n[o],n[o]=t[o],S)}(i,t.attributes,c),S=a,i}function P(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&d(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||_(e),A(e))}function A(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var M=[];function T(e,t,n){var o,r=M.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),D.call(o,t,n)):((o=new D(t,n)).constructor=e,o.render=j);r--;)if(M[r].constructor===e)return o.nextBase=M[r].nextBase,M.splice(r,1),o;return o}function j(e,t,n){return this.constructor(e,n)}function U(e,t,n,o,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):B(e,1,i)),d(e.__ref,e))}function B(e,t,n,o){if(!e._disable){var i,a,s,d=e.props,u=e.state,c=e.context,p=e.prevProps||d,f=e.prevState||u,h=e.prevContext||c,v=e.base,m=e.nextBase,_=v||m,g=e._component,b=!1,S=h;if(e.constructor.getDerivedStateFromProps&&(u=l(l({},u),e.constructor.getDerivedStateFromProps(d,u)),e.state=u),v&&(e.props=p,e.state=f,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(d,u,c)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(d,u,c),e.props=d,e.state=u,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){i=e.render(d,u,c),e.getChildContext&&(c=l(l({},c),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(p,f));var w,O,A=i&&i.nodeName;if("function"==typeof A){var M=y(i);(a=g)&&a.constructor===A&&M.key==a.__key?U(a,M,1,c,!1):(w=a,e._component=a=T(A,M,c),a.nextBase=a.nextBase||m,a._parentComponent=e,U(a,M,0,c,!1),B(a,1,n,!0)),O=a.base}else s=_,(w=g)&&(s=e._component=null),(_||1===t)&&(s&&(s._component=null),O=k(s,i,c,n||!v,_&&_.parentNode,!0));if(_&&O!==_&&a!==g){var j=_.parentNode;j&&O!==j&&(j.replaceChild(O,_),w||(_._component=null,P(_,!1)))}if(w&&L(w),e.base=O,O&&!o){for(var D=e,F=e;F=F._parentComponent;)(D=F).base=O;O._component=D,O._componentConstructor=D.constructor}}for(!v||n?C.push(e):b||(e.componentDidUpdate&&e.componentDidUpdate(p,f,S),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||o||N()}}function L(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(null!=t.__preactattr_&&d(t.__preactattr_.ref,null),e.nextBase=t,_(t),M.push(e),A(t)),d(e.__ref,null)}function D(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function F(e,t,n){return k(n,e,{},!1,t,!1)}l(D.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),f(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,2)},render:function(){}});const W="https://antserver-blocjgjbpw.now.sh/graphql?query={%20ants%20{%20name%20length%20color%20weight%20}%20}";var z=function(){return fetch(W).then(e=>e.json())};var H=function(){var e=7e3+7e3*Math.random(),t=Math.random();return function(n){setTimeout(function(){n(t)},e)}};const E={fontSize:32,fontFamily:"Helvetica, sans-serif",display:"flex",flexDirection:"column",alignItems:"center"};var V=function(){return s("header",{style:E},s("h1",null,"Ant Goods"),s("div",{style:{fontSize:200}},"🐜"))};const R={marginBottom:50},q={fontSize:20,fontFamily:"Helvetica, sans-serif"},I={fontSize:18,fontFamily:"Helvetica, sans-serif"},$={fontFamily:"Helvetica, sans-serif"};var G=function({name:e,weight:t,length:n,color:o,odds:r}){return s("div",{style:R},s("p",{style:q},e),s("p",{style:I},"Weight: ",t,", Length: ",n),s("div",{style:{borderRadius:"50%",height:50,width:50,backgroundColor:o}}),s("marquee",{style:$},r))};const J={color:"#fff",background:"#131313",height:100,width:"100%",cursor:"pointer",fontSize:24,borderRadius:10,textTransform:"uppercase"};var K=function({onClick:e,children:t}){return s("button",{style:J,onClick:e},t)};function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Y="not-started",Z="starting",ee="finished";const te={display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},ne={maxWidth:500,width:"100%"},oe={margin:"20px 0",fontSize:30,fontFamily:"Helvetica, sans-serif"};var re=class extends D{constructor(e){super(e),X(this,"handleCalculateOddsClick",()=>{if(this.areOddsCalculated)return;const{ants:e}=this.state;if(0===e.length)return;this.areOddsCalculated=!0;const t=e.map(e=>{const t={...e,odds:"pending"};return H()(this.updateAntOdds(t)),t});this.setState({ants:t})}),X(this,"updateAntOdds",e=>t=>{const n=this.state.ants.map(n=>e.name===n.name?{...n,odds:t}:n);n.sort((e,t)=>(t.odds||0)-(e.odds||0)),this.setState({ants:n})}),X(this,"formatAntOdds",e=>(100*e).toFixed(2)),X(this,"renderAnts",()=>this.state.ants.map(e=>s("li",null,s(G,Q({},e,{odds:this.renderAntOdds(e)}))))),X(this,"renderAntOdds",e=>void 0===e.odds?"no odds calculated":"pending"===e.odds?"calculating odds...":`${this.formatAntOdds(e.odds)}%`),X(this,"getAntOddsCalculatingState",()=>{const{ants:e}=this.state;let t=Y,n=0;return e.forEach(e=>{"pending"===e.odds?t=Z:"number"==typeof e.odds&&n++}),0!==e.length&&n===e.length&&(t=ee),t}),X(this,"renderTotalAntOddsCalculatingState",()=>{const e=this.getAntOddsCalculatingState();let t="";return e===Y?t="Not started":e===Z?t="Calculating odds":e===ee&&(t="Finished calculating odds"),s("marquee",{style:oe},t)}),this.state={ants:[]},this.areOddsCalculated=!1}componentDidMount(){z().then(e=>{this.setState({ants:e.data.ants})})}render(){return s("div",{style:te},s("div",{style:ne},s(V,null),s(K,{onClick:this.handleCalculateOddsClick},"Calculate odds"),this.renderTotalAntOddsCalculatingState(),s("ul",null,this.renderAnts())))}};F(s(re,null),document.body)}]);