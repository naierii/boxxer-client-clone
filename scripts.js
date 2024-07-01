/*! lazysizes - v5.2.2 */

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,n,i){"use strict";var l,o,d={};function u(e,t){var a,r;d[e]||(a=n.createElement(t?"link":"script"),r=n.getElementsByTagName("script")[0],t?(a.rel="stylesheet",a.href=e):a.src=e,d[e]=!0,d[a.src||a.href]=!0,r.parentNode.insertBefore(a,r))}n.addEventListener&&(l=function(e,t){var a=n.createElement("img");a.onload=function(){a.onload=null,a.onerror=null,a=null,t()},a.onerror=a.onload,a.src=e,a&&a.complete&&a.onload&&a.onload()},addEventListener("lazybeforeunveil",function(e){var t,a,r;if(e.detail.instance==i&&!e.defaultPrevented){var n=e.target;if("none"==n.preload&&(n.preload=n.getAttribute("data-preload")||"auto"),null!=n.getAttribute("data-autoplay"))if(n.getAttribute("data-expand")&&!n.autoplay)try{n.play()}catch(e){}else requestAnimationFrame(function(){n.setAttribute("data-expand","-10"),i.aC(n,i.cfg.lazyClass)});(t=n.getAttribute("data-link"))&&u(t,!0),(t=n.getAttribute("data-script"))&&u(t),(t=n.getAttribute("data-require"))&&(i.cfg.requireJs?i.cfg.requireJs([t]):u(t)),(a=n.getAttribute("data-bg"))&&(e.detail.firesLoad=!0,l(a,function(){n.style.backgroundImage="url("+(o.test(a)?JSON.stringify(a):a)+")",e.detail.firesLoad=!1,i.fire(n,"_lazyloaded",{},!0,!0)})),(r=n.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,l(r,function(){n.poster=r,e.detail.firesLoad=!1,i.fire(n,"_lazyloaded",{},!0,!0)}))}},!(o=/\(|\)|\s|'/)))});
;/*! lazysizes - v5.2.2 */

!function(t,e){var r=function(){e(t.lazySizes),t.removeEventListener("lazyunveilread",r,!0)};e=e.bind(null,t,t.document),"object"==typeof module&&module.exports?e(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],e):t.lazySizes?r():t.addEventListener("lazyunveilread",r,!0)}(window,function(l,u,g){"use strict";var b,m,i=g.cfg,d={string:1,number:1},o=/^\-*\+*\d+\.*\d*$/,c=/^picture$/i,v=/\s*\{\s*width\s*\}\s*/i,f=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,y=/^\[.*\]|\{.*\}$/,z=/^(?:auto|\d+(px)?)$/,h=u.createElement("a"),t=u.createElement("img"),A="srcset"in t&&!("sizes"in t),w=!!l.HTMLPictureElement&&!A;function P(a,t){function r(t,e){var r,i=a.getAttribute("data-"+t);if(i||(r=s.getPropertyValue("--ls-"+t))&&(i=r.trim()),i){if("true"==i)i=!0;else if("false"==i)i=!1;else if(o.test(i))i=parseFloat(i);else if("function"==typeof m[t])i=m[t](a,i);else if(y.test(i))try{i=JSON.parse(i)}catch(t){}n[t]=i}else t in m&&"function"!=typeof m[t]?n[t]=m[t]:e&&"function"==typeof m[t]&&(n[t]=m[t](a,i))}var e,s=l.getComputedStyle(a),i=a.parentNode,n={isPicture:!(!i||!c.test(i.nodeName||""))};for(e in m)r(e);return t.replace(p,function(t,e){e in n||r(e,!0)}),n}function E(t,e,r){var s,n,o,i=0,a=0,c=r;if(t){if("container"===e.ratio){for(i=c.scrollWidth,a=c.scrollHeight;!(i&&a||c===u);)i=(c=c.parentNode).scrollWidth,a=c.scrollHeight;i&&a&&(e.ratio=e.traditionalRatio?a/i:i/a)}s=t,n=e,(o=[]).srcset=[],n.absUrl&&(h.setAttribute("href",s),s=h.href),s=((n.prefix||"")+s+(n.postfix||"")).replace(p,function(t,e){return d[typeof n[e]]?n[e]:t}),n.widths.forEach(function(t){var e=n.widthmap[t]||t,r=n.aspectratio||n.ratio,i=!n.aspectratio&&m.traditionalRatio,a={u:s.replace(v,e).replace(f,r?i?Math.round(t*r):Math.round(t/r):""),w:t};o.push(a),o.srcset.push(a.c=a.u+" "+t+"w")}),(t=o).isPicture=e.isPicture,A&&"IMG"==r.nodeName.toUpperCase()?r.removeAttribute(b.srcsetAttr):r.setAttribute(b.srcsetAttr,t.srcset.join(", ")),Object.defineProperty(r,"_lazyrias",{value:t,writable:!0})}}function N(t){return t.getAttribute(t.getAttribute("data-srcattr")||m.srcAttr)||t.getAttribute(b.srcsetAttr)||t.getAttribute(b.srcAttr)||t.getAttribute("data-pfsrcset")||""}!function(){var t,e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:function(){},widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};for(t in(b=g&&g.cfg).supportsType||(b.supportsType=function(t){return!t}),b.rias||(b.rias={}),"widths"in(m=b.rias)||(m.widths=[],function(t){for(var e,r=0;!e||e<3e3;)30<(r+=5)&&(r+=1),e=36*r,t.push(e)}(m.widths)),e)t in m||(m[t]=e[t])}(),addEventListener("lazybeforesizes",function(t){if(t.detail.instance==g){var e,r,i,a,s,n,o,c,u,d,l,f=t.target;if(t.detail.dataAttr&&!t.defaultPrevented&&!m.disabled&&(o=f.getAttribute(b.sizesAttr)||f.getAttribute("sizes"))&&z.test(o)){var p,y,h=N(f);if(y=P(p=f,h),m.modifyOptions.call(p,{target:p,details:y,detail:y}),g.fire(p,"lazyriasmodifyoptions",y),e=y,u=v.test(e.prefix)||v.test(e.postfix),e.isPicture&&(r=f.parentNode))for(a=0,s=(i=r.getElementsByTagName("source")).length;a<s;a++)(u||v.test(n=N(i[a])))&&(E(n,e,i[a]),d=!0);u||v.test(h)?(E(h,e,f),d=!0):d&&((l=[]).srcset=[],l.isPicture=!0,Object.defineProperty(f,"_lazyrias",{value:l,writable:!0})),d&&(w?f.removeAttribute(b.srcAttr):"auto"!=o&&(c={width:parseInt(o,10)},_({target:f,detail:c})))}}},!0);var a,_=(a=function(t){var e,r;t.detail.instance==g&&(r=t.target,A||!(l.respimage||l.picturefill||i.pf)?("_lazyrias"in r||t.detail.dataAttr&&M(r,!0))&&(e=s(r,t.detail.width))&&e.u&&r._lazyrias.cur!=e.u&&(r._lazyrias.cur=e.u,e.cached=!0,g.rAF(function(){r.setAttribute(b.srcAttr,e.u),r.setAttribute("src",e.u)})):u.removeEventListener("lazybeforesizes",a))},w?a=function(){}:addEventListener("lazybeforesizes",a),a);function x(t,e){return t.w-e.w}function M(t,e){var r;return!t._lazyrias&&g.pWS&&(r=g.pWS(t.getAttribute(b.srcsetAttr||""))).length&&(Object.defineProperty(t,"_lazyrias",{value:r,writable:!0}),e&&t.parentNode&&(r.isPicture="PICTURE"==t.parentNode.nodeName.toUpperCase())),t._lazyrias}function s(t,e){var r,i,a,s,n,o,c,u,d=t._lazyrias;if(d.isPicture&&l.matchMedia)for(i=0,a=(r=t.parentNode.getElementsByTagName("source")).length;i<a;i++)if(M(r[i])&&!r[i].getAttribute("type")&&(!(s=r[i].getAttribute("media"))||(matchMedia(s)||{}).matches)){d=r[i]._lazyrias;break}return(!d.w||d.w<e)&&(d.w=e,d.d=(o=t,c=l.devicePixelRatio||1,u=g.getX&&g.getX(o),Math.min(u||c,2.4,c)),n=function(t){for(var e,r,i=t.length,a=t[i-1],s=0;s<i;s++)if((a=t[s]).d=a.w/t.w,a.d>=t.d){!a.cached&&(e=t[s-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(r=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*r),e.d+(a.d-t.d)*r>t.d&&(a=e));break}return a}(d.sort(x))),n}});
;/*! lazysizes - v5.2.2 */

!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,z,g){"use strict";var c,y,b,f,i,s,n,v,m;e.addEventListener&&(c=g.cfg,y=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,i=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,s=/\(|\)|'/,n={contain:1,cover:1},v=function(e,t){var a;t&&((a=t.match(i))&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",c.customMedia[t]||t))},m=function(e){var t,a,i,r;e.target._lazybgset&&(a=(t=e.target)._lazybgset,(i=t.currentSrc||t.src)&&((r=g.fire(a,"bgsetproxy",{src:i,useSrc:s.test(i)?JSON.stringify(i):i})).defaultPrevented||(a.style.backgroundImage="url("+r.detail.useSrc+")")),t._lazybgsetLoading&&(g.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading))},addEventListener("lazybeforeunveil",function(e){var t,a,i,r,s,n,l,d,o,u;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(o=e.target,(u=z.createElement("img")).alt="",u._lazybgsetLoading=!0,e.detail.firesLoad=!0,a=t,i=o,r=u,s=z.createElement("picture"),n=i.getAttribute(c.sizesAttr),l=i.getAttribute("data-ratio"),d=i.getAttribute("data-optimumx"),i._lazybgset&&i._lazybgset.parentNode==i&&i.removeChild(i._lazybgset),Object.defineProperty(r,"_lazybgset",{value:i,writable:!0}),Object.defineProperty(i,"_lazybgset",{value:s,writable:!0}),a=a.replace(y," ").split(b),s.style.display="none",r.className=c.lazyClass,1!=a.length||n||(n="auto"),a.forEach(function(e){var t,a=z.createElement("source");n&&"auto"!=n&&a.setAttribute("sizes",n),(t=e.match(f))?(a.setAttribute(c.srcsetAttr,t[1]),v(a,t[2]),v(a,t[3])):a.setAttribute(c.srcsetAttr,e),s.appendChild(a)}),n&&(r.setAttribute(c.sizesAttr,n),i.removeAttribute(c.sizesAttr),i.removeAttribute("sizes")),d&&r.setAttribute("data-optimumx",d),l&&r.setAttribute("data-ratio",l),s.appendChild(r),i.appendChild(s),setTimeout(function(){g.loader.unveil(u),g.rAF(function(){g.fire(u,"_lazyloaded",{},!0,!0),u.complete&&m({target:u})})}))}),z.addEventListener("load",m,!0),e.addEventListener("lazybeforesizes",function(e){var t,a,i,r;e.detail.instance==g&&e.target._lazybgset&&e.detail.dataAttr&&(t=e.target._lazybgset,i=t,r=(getComputedStyle(i)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!n[r]&&n[i.style.backgroundSize]&&(r=i.style.backgroundSize),n[a=r]&&(e.target._lazysizesParentFit=a,g.rAF(function(){e.target.setAttribute("data-parent-fit",a),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit})))},!0),z.documentElement.addEventListener("lazybeforesizes",function(e){var t,a;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==g&&(e.detail.width=(t=e.target._lazybgset,a=g.gW(t,t.parentNode),(!t._lazysizesWidth||a>t._lazysizesWidth)&&(t._lazysizesWidth=a),t._lazysizesWidth))}))});
;/*! lazysizes - v5.2.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
;