(function(){'use strict';
function f(a){return function(){return a}}var g,l="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},m="object"===typeof l.global&&l.global?l.global:"object"===typeof global&&global&&global.Object===Object?global:this;l.global=m;var p="object"===typeof l.exportsNamespace&&l.exportsNamespace?l.exportsNamespace:m;l.exportsNamespace=p;m.Object.freeze(l);var aa={semantics:{asInstanceOfs:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1};m.Object.freeze(aa);m.Object.freeze(aa.semantics);
var r=m.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},ba=m.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},ca=0,da=m.WeakMap?new m.WeakMap:null;function s(a){return function(b,c){return!(!b||!b.a||b.a.L!==c||b.a.J!==a)}}function ea(a){for(var b in a)return b}
function fa(a,b,c){var d=new a.Ja(b[c]);if(c<b.length-1){a=a.O;c+=1;for(var e=d.Aa,h=0;h<e.length;h++)e[h]=fa(a,b,c)}return d}function ga(a){return void 0===a?"undefined":a.toString()}
function ha(a){switch(typeof a){case "string":return u(ia);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?u(ja):b<<16>>16===b&&1/b!==1/-0?u(ka):u(la):"number"===typeof a?u(ma):u(na);case "boolean":return u(oa);case "undefined":return u(pa);default:if(null===a)throw(new v).c();return qa(a)?u(ra):a&&a.a?u(a.a):null}}
function sa(a){switch(typeof a){case "string":return ta(w(),a);case "number":return ua(va(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.a||null===a?a.q():null===da?42:xa(a)}}function ya(a,b){for(var c=m.Object.getPrototypeOf,d=m.Object.getOwnPropertyDescriptor,e=c(a);null!==e;){var h=d(e,b);if(void 0!==h)return h;e=c(e)}}function za(a,b,c){a=ya(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}
function Aa(a,b,c,d){a=ya(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new m.TypeError("super has no setter '"+c+"'.");}
var xa=null!==da?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return sa(a);default:if(null===a)return 0;var b=da.get(a);void 0===b&&(ca=b=ca+1|0,da.set(a,b));return b}}:function(a){if(a&&a.a){var b=a.$idHashCode$0;if(void 0!==b)return b;if(m.Object.isSealed(a))return 42;ca=b=ca+1|0;return a.$idHashCode$0=b}return null===a?0:sa(a)};this.__ScalaJSExportsNamespace=p;
function x(){this.ha=this.Ja=void 0;this.J=this.O=this.m=null;this.L=0;this.Da=null;this.aa="";this.l=this.Y=this.Z=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function y(a,b,c){var d=new x;d.m={};d.O=null;d.Da=a;d.aa=b;d.l=f(!1);d.name=c;d.isPrimitive=!0;d.isInstance=f(!1);return d}
function z(a,b,c,d,e,h,n){var k=new x,t=ea(a);h=h||function(a){return!!(a&&a.a&&a.a.m[t])};n=n||function(a,b){return!!(a&&a.a&&a.a.L===b&&a.a.J.m[t])};k.ha=e;k.m=c;k.aa="L"+b+";";k.l=n;k.name=b;k.isInterface=!1;k.isRawJSType=!!d;k.isInstance=h;return k}
function Ba(a){function b(a){if("number"===typeof a){this.Aa=Array(a);for(var b=0;b<a;b++)this.Aa[b]=e}else this.Aa=a}var c=new x,d=a.Da,e="longZero"==d?A().s:d;b.prototype=new B;b.prototype.a=c;var d="["+a.aa,h=a.J||a,n=a.L+1;c.Ja=b;c.ha=Ca;c.m={b:1,Qa:1,d:1};c.O=a;c.J=h;c.L=n;c.Da=null;c.aa=d;c.Z=void 0;c.Y=void 0;c.l=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return h.l(a,n)};return c}function u(a){if(!a.Z){var b=new C;b.ba=a;a.Z=b}return a.Z}
x.prototype.getFakeInstance=function(){return this===ia?"some string":this===oa?!1:this===ja||this===ka||this===la||this===ma||this===na?0:this===ra?A().s:this===pa?void 0:{a:this}};x.prototype.getSuperclass=function(){return this.ha?u(this.ha):null};x.prototype.getComponentType=function(){return this.O?u(this.O):null};x.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.Y||(b.Y=Ba(b)),b=b.Y;return fa(b,a,0)};
var Da=y(!1,"Z","boolean"),Ea=y(0,"C","char"),Fa=y(0,"B","byte"),Ga=y(0,"S","short"),Ha=y(0,"I","int"),Ia=y("longZero","J","long"),Ja=y(0,"F","float"),Ka=y(0,"D","double");Da.l=s(Da);Ea.l=s(Ea);Fa.l=s(Fa);Ga.l=s(Ga);Ha.l=s(Ha);Ia.l=s(Ia);Ja.l=s(Ja);Ka.l=s(Ka);function D(){}function B(){}B.prototype=D.prototype;D.prototype.c=function(){return this};D.prototype.g=function(){var a=La(ha(this)),b=(+(this.q()>>>0)).toString(16);return a+"@"+b};D.prototype.q=function(){return xa(this)};D.prototype.toString=function(){return this.g()};var Ca=z({b:0},"java.lang.Object",{b:1},void 0,void 0,function(a){return null!==a},function(a,b){var c=a&&a.a;if(c){var d=c.L||0;return!(d<b)&&(d>b||!c.J.isPrimitive)}return!1});D.prototype.a=Ca;function C(){this.ba=null}
C.prototype=new B;C.prototype.constructor=C;function La(a){return a.ba.name}C.prototype.g=function(){return(this.ba.isInterface?"interface ":this.ba.isPrimitive?"":"class ")+La(this)};C.prototype.a=z({pb:0},"java.lang.Class",{pb:1,b:1});function Ma(){}Ma.prototype=new B;Ma.prototype.constructor=Ma;function Na(){}Na.prototype=Ma.prototype;function Oa(){}Oa.prototype=new B;Oa.prototype.constructor=Oa;function Pa(){}Pa.prototype=Oa.prototype;
function Qa(a,b){var c;c=r(-862048943,b);c=r(461845907,c<<15|c>>>-15|0);c^=a;return-430675100+r(5,c<<13|c>>>-13|0)|0}function Ra(a){a=r(-2048144789,a^(a>>>16|0));a^=a>>>13|0;a=r(-1028477387,a);return a^=a>>>16|0}function Sa(a){Ta();for(var b=-889275714,c=0;1>c;)b=Qa(b,Ua(Va(),a.va(c))),c=1+c|0;return Ra(b^1)}function Wa(a,b,c){var d=(new E).n(0);c=(new E).n(c);b.ca(Xa(function(a,b,c){return function(a){c.h=Qa(c.h,Ua(Va(),a));b.h=1+b.h|0}}(a,d,c)));return Ra(c.h^d.h)}
function Ya(a,b){for(var c=0,d=a.ea();c<d;)b.$(a.ma(c)),c=1+c|0}function F(){this.Ka=null}F.prototype=new B;F.prototype.constructor=F;F.prototype.c=function(){Za=this;this.Ka=(new G).c();return this};F.prototype.a=z({Xb:0},"scala.collection.Iterator$",{Xb:1,b:1});var Za=void 0;function $a(a,b,c,d,e){var h=ab();H(b.k,c);a.ca(Xa(function(a,b,c){return function(d){if(a.h)bb(b,d),a.h=!1;else return H(b.k,c),bb(b,d)}}(h,b,d)));H(b.k,e);return b}
function I(){this.D=!1;this.Na=this.jb=this.da=this.K=null;this.na=!1;this.Sa=this.Oa=0}I.prototype=new B;I.prototype.constructor=I;
I.prototype.c=function(){cb=this;this.K=(this.D=!!(m.ArrayBuffer&&m.Int32Array&&m.Float32Array&&m.Float64Array))?new m.ArrayBuffer(8):null;this.da=this.D?new m.Int32Array(this.K,0,2):null;this.jb=this.D?new m.Float32Array(this.K,0,2):null;this.Na=this.D?new m.Float64Array(this.K,0,1):null;if(this.D)this.da[0]=16909060,a=1===((new m.Int8Array(this.K,0,8))[0]|0);else var a=!0;this.Oa=(this.na=a)?0:1;this.Sa=this.na?1:0;return this};
function ua(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.D)a.Na[0]=b,c=db(eb((new J).n(a.da[a.Oa]|0)),fb((new J).j(-1,0),(new J).n(a.da[a.Sa]|0)));else{if(b!==b)var c=!1,d=2047,e=+m.Math.pow(2,51);else if(Infinity===b||-Infinity===b)c=0>b,d=2047,e=0;else if(0===b)c=-Infinity===1/b,e=d=0;else{var h=(c=0>b)?-b:b;if(h>=+m.Math.pow(2,-1022)){var d=+m.Math.pow(2,52),e=+m.Math.log(h)/0.6931471805599453,e=+m.Math.floor(e)|0,e=1023>e?e:1023,n=h/+m.Math.pow(2,e)*d,h=+m.Math.floor(n),n=n-h,h=0.5>
n?h:0.5<n?1+h:0!==h%2?1+h:h;2<=h/d&&(e=1+e|0,h=1);1023<e?(e=2047,h=0):(e=1023+e|0,h-=d);d=e;e=h}else d=h/+m.Math.pow(2,-1074),e=+m.Math.floor(d),h=d-e,d=0,e=0.5>h?e:0.5<h?1+e:0!==e%2?1+e:e}e=+e;h=e|0;c=db(eb((new J).n((c?-2147483648:0)|(d|0)<<20|e/4294967296|0)),fb((new J).j(-1,0),(new J).n(h)))}return c.f^c.i}I.prototype.a=z({vc:0},"scala.scalajs.runtime.Bits$",{vc:1,b:1});var cb=void 0;function va(){cb||(cb=(new I).c());return cb}function K(){this.Jc=null;this.Oc=!1}K.prototype=new B;
K.prototype.constructor=K;K.prototype.c=function(){return this};function gb(a){if(0===(-65536&a)){var b=m.String;return b.fromCharCode.apply(b,[a])}if(0>a||1114111<a)throw(new L).c();a=-65536+a|0;b=m.String;return b.fromCharCode.apply(b,[55296|a>>10,56320|1023&a])}function ta(a,b){for(var c=0,d=1,e=-1+(b.length|0)|0;0<=e;)c=c+r(65535&(b.charCodeAt(e)|0),d)|0,d=r(31,d),e=-1+e|0;return c}K.prototype.a=z({xc:0},"scala.scalajs.runtime.RuntimeString$",{xc:1,b:1});var hb=void 0;
function w(){hb||(hb=(new K).c());return hb}function ib(){}ib.prototype=new B;ib.prototype.constructor=ib;ib.prototype.c=function(){return this};function jb(a,b){return b&&b.a&&b.a.m.za?b.E:b}ib.prototype.a=z({yc:0},"scala.scalajs.runtime.package$",{yc:1,b:1});var kb=void 0;function lb(){kb||(kb=(new ib).c());return kb}var pa=z({Ac:0},"scala.runtime.BoxedUnit",{Ac:1,b:1},void 0,void 0,function(a){return void 0===a});function mb(){}mb.prototype=new B;mb.prototype.constructor=mb;mb.prototype.c=function(){return this};
mb.prototype.a=z({Bc:0},"scala.runtime.BoxesRunTime$",{Bc:1,b:1});var nb=void 0;function ob(){}ob.prototype=new B;ob.prototype.constructor=ob;ob.prototype.c=function(){return this};
function Ua(a,b){var c;if(null===b)c=0;else if(b&&b.a&&b.a.m.u||"number"===typeof b)if(nb||(nb=(new mb).c()),(b|0)===b&&1/b!==1/-0)c=b|0;else if(qa(b)){c=(null===b?A().s:b).f;var d=(new J).n(c),e=null===b?A().s:b;if(d.f!==e.f||d.i!==e.i)c=null===b?A().s:b,c=c.f^c.i}else if("number"===typeof b)if(d=2147483647<+b?2147483647:-2147483648>+b?-2147483648:+b|0,c=+b,d===c)c=d;else{var d=pb(A(),+b),e=d.f,h=d.i;c=(0>h?-(4294967296*+((0!==e?~h:-h|0)>>>0)+ +((-e|0)>>>0)):4294967296*h+ +(e>>>0))===c?d.f^d.i:ua(va(),
+b)}else c=sa(b);else c=sa(b);return c}ob.prototype.a=z({Dc:0},"scala.runtime.ScalaRunTime$",{Dc:1,b:1});var qb=void 0;function Va(){qb||(qb=(new ob).c());return qb}function M(){this.X=this.fa=this.S=null}M.prototype=new B;M.prototype.constructor=M;M.prototype.c=function(){rb=this;this.S=m.navigator;this.fa=m.document.createElement("div");m.document.body.appendChild(this.fa);this.X=null;return this};
M.prototype.v=function(){this.X=this.S.accelerometer.watchAcceleration(function(a){sb().fa.innerHTML=tb(ub(new N,O(["{x: ",", y: ",", z:",", timestamp: ","}"])),O([a.x,a.y,a.z,a.timestamp]))},function(a){sb().fa.innerHTML=tb(ub(new N,O(["watcher error: ",""])),O([a]))},{frequency:30})};M.prototype.r=function(){this.v()};M.prototype.main=function(){return this.r()};M.prototype.a=z({bb:0},"net.brachior.tests.AccelerometerScalaJSDOM$",{bb:1,b:1,ya:1});var rb=void 0;
function sb(){rb||(rb=(new M).c());return rb}p.net=p.net||{};p.net.brachior=p.net.brachior||{};p.net.brachior.tests=p.net.brachior.tests||{};p.net.brachior.tests.AccelerometerScalaJSDOM=sb;function P(){this.X=this.ga=this.oa=this.S=null}P.prototype=new B;P.prototype.constructor=P;P.prototype.c=function(){vb=this;this.S=m.navigator;this.oa=m.document;this.ga=this.oa.createElement("div");this.oa.body.appendChild(this.ga);this.X=null;return this};
P.prototype.v=function(){this.X=this.S.accelerometer.watchAcceleration(function(a){var b=wb().ga;a=tb(ub(new N,O(["{x: ",", y: ",", z:",", timestamp: ","}"])),O([a.x,a.y,a.z,a.timestamp]));b.innerHTML=a},function(a){var b=wb().ga;a=tb(ub(new N,O(["watcher error: ",""])),O([a]));b.innerHTML=a},{frequency:30})};P.prototype.r=function(){this.v()};P.prototype.main=function(){return this.r()};P.prototype.a=z({cb:0},"net.brachior.tests.AccelerometerScalaJSGlobal$",{cb:1,b:1,ya:1});var vb=void 0;
function wb(){vb||(vb=(new P).c());return vb}p.net=p.net||{};p.net.brachior=p.net.brachior||{};p.net.brachior.tests=p.net.brachior.tests||{};p.net.brachior.tests.AccelerometerScalaJSGlobal=wb;function Q(){this.W=this.N=this.w=this.T=null}Q.prototype=new B;Q.prototype.constructor=Q;g=Q.prototype;g.c=function(){xb=this;this.T=this.sa();this.w=this.ra();this.N=new m.THREE.OrbitControls(this.w);this.W=this.ta();return this};
g.ta=function(){var a=new m.THREE.Scene;a.fog=new m.THREE.Fog(+this.T.getClearColor().getHex(),0.2*+this.w.far,+this.w.far);var b=new m.THREE.AmbientLight(2236962),c=new m.THREE.DirectionalLight(16777215,1);c.position.set(500,300,100);a.add(b);a.add(c);var b=new m.THREE.BoxGeometry(20,20,20),c=m.THREE.ImageUtils.loadTexture("img/whynot.png"),d=new m.THREE.MeshPhongMaterial;d.map=c;b=new m.THREE.Mesh(b,d);a.add(b);return a};
g.sa=function(){var a=new m.THREE.WebGLRenderer;a.gammaInput=!0;a.gammaOutput=!0;a.setSize(m.window.innerWidth|0,m.window.innerHeight|0);a.setClearColor(new m.THREE.Color(2434341),1);return a};g.H=function(){m.window.requestAnimationFrame(function(){yb().H()});this.N.update();this.T.render(this.W,this.w)};
g.v=function(){m.document.body.appendChild(this.T.domElement);m.window.addEventListener("resize",function(){yb().w.aspect=(m.window.innerWidth|0)/(m.window.innerHeight|0)|0;yb().w.updateProjectionMatrix();yb().T.setSize(m.window.innerWidth|0,m.window.innerHeight|0)},!1);this.H()};g.ra=function(){var a=new m.THREE.PerspectiveCamera(60,(m.window.innerWidth|0)/(m.window.innerHeight|0)|0,1,1E3);a.position.z=70;return a};g.r=function(){this.v()};Q.prototype.main=function(){return this.r()};
Q.prototype.a=z({db:0},"net.brachior.tests.CubeScalaJSDOM$",{db:1,b:1,ya:1});var xb=void 0;function yb(){xb||(xb=(new Q).c());return xb}p.net=p.net||{};p.net.brachior=p.net.brachior||{};p.net.brachior.tests=p.net.brachior.tests||{};p.net.brachior.tests.CubeScalaJSDOM=yb;function R(){this.B=null;this.qa=this.Ca=0;this.W=this.N=this.A=this.U=null}R.prototype=new B;R.prototype.constructor=R;g=R.prototype;
g.c=function(){zb=this;this.B=m.window;this.Ca=this.B.innerWidth|0;this.qa=this.B.innerHeight|0;this.U=this.sa();this.A=this.ra();this.N=new m.THREE.OrbitControls(this.A);this.W=this.ta();return this};
g.ta=function(){var a=new m.THREE.Scene;a.fog=new m.THREE.Fog(+this.U.getClearColor().getHex(),0.2*+this.A.far,+this.A.far);var b=new m.THREE.AmbientLight(2236962),c=new m.THREE.DirectionalLight(16777215,1);c.position.set(500,300,100);a.add(b);a.add(c);var b=new m.THREE.BoxGeometry(20,20,20),c=m.THREE.ImageUtils.loadTexture("img/whynot.png"),d=new m.THREE.MeshPhongMaterial;d.map=c;b=new m.THREE.Mesh(b,d);a.add(b);return a};
g.H=function(){this.B.requestAnimationFrame(function(){S().H()});this.N.update();this.U.render(this.W,this.A)};g.sa=function(){var a=new m.THREE.WebGLRenderer;a.gammaInput=!0;a.gammaOutput=!0;a.setSize(this.Ca,this.qa);a.setClearColor(new m.THREE.Color(2434341),1);return a};g.v=function(){m.document.body.appendChild(this.U.domElement);this.B.addEventListener("resize",function(){var a=S().B.innerWidth|0,b=S().B.innerHeight|0;S().A.aspect=a/b;S().A.updateProjectionMatrix();S().U.setSize(a,b)},!1);this.H()};
g.ra=function(){var a=new m.THREE.PerspectiveCamera(60,this.Ca/this.qa,1,1E3);a.position.z=70;return a};g.r=function(){this.v()};R.prototype.main=function(){return this.r()};R.prototype.a=z({eb:0},"net.brachior.tests.CubeScalaJSGlobal$",{eb:1,b:1,ya:1});var zb=void 0;function S(){zb||(zb=(new R).c());return zb}p.net=p.net||{};p.net.brachior=p.net.brachior||{};p.net.brachior.tests=p.net.brachior.tests||{};p.net.brachior.tests.CubeScalaJSGlobal=S;
var oa=z({mb:0},"java.lang.Boolean",{mb:1,b:1,p:1},void 0,void 0,function(a){return"boolean"===typeof a});function T(){this.Ba=0}T.prototype=new B;T.prototype.constructor=T;T.prototype.g=function(){return m.String.fromCharCode(this.Ba)};function Ab(a){var b=new T;b.Ba=a;return b}T.prototype.q=function(){return this.Ba};T.prototype.a=z({ob:0},"java.lang.Character",{ob:1,b:1,p:1});function U(){this.gd=this.ib=this.Va=null}U.prototype=new B;U.prototype.constructor=U;function Bb(){}Bb.prototype=U.prototype;
U.prototype.Ma=function(){try{var a={}.undef()}catch(b){if(lb(),b&&b.a&&b.a.m.G?a=b:(a=new Cb,a.E=b,U.prototype.t.call(a,null,null)),a&&a.a&&a.a.m.za)a=a.E;else throw jb(lb(),a);}this.stackdata=a;return this};U.prototype.g=function(){var a=La(ha(this)),b=this.Va;return null===b?a:a+": "+b};U.prototype.t=function(a,b){this.Va=a;this.ib=b;this.Ma();return this};function Db(){this.sc=this.zb=this.xa=this.kd=this.id=this.Sc=this.hd=this.Nc=0}Db.prototype=new Pa;Db.prototype.constructor=Db;
Db.prototype.c=function(){Eb=this;this.xa=ta(w(),"Seq");this.zb=ta(w(),"Map");this.sc=ta(w(),"Set");return this};function Fb(a){var b=Ta(),c;if(a&&a.a&&a.a.m.Zc){c=0;for(var b=b.xa,d=a;!d.Qc();)a=d.Pc(),d=d.jd(),b=Qa(b,Ua(Va(),a)),c=1+c|0;c=Ra(b^c)}else c=Wa(b,a,b.xa);return c}Db.prototype.a=z({Hb:0},"scala.util.hashing.MurmurHash3$",{Hb:1,Uc:1,b:1});var Eb=void 0;function Ta(){Eb||(Eb=(new Db).c());return Eb}function Gb(){}Gb.prototype=new B;Gb.prototype.constructor=Gb;function Hb(){}
Hb.prototype=Gb.prototype;Gb.prototype.g=f("\x3cfunction1\x3e");function Ib(){this.h=!1}Ib.prototype=new B;Ib.prototype.constructor=Ib;Ib.prototype.g=function(){return""+this.h};function ab(){var a=new Ib;a.h=!0;return a}Ib.prototype.a=z({zc:0},"scala.runtime.BooleanRef",{zc:1,b:1,d:1});function E(){this.h=0}E.prototype=new B;E.prototype.constructor=E;E.prototype.g=function(){return""+this.h};E.prototype.n=function(a){this.h=a;return this};E.prototype.a=z({Cc:0},"scala.runtime.IntRef",{Cc:1,b:1,d:1});
var ja=z({nb:0},"java.lang.Byte",{nb:1,u:1,b:1,p:1},void 0,void 0,function(a){return a<<24>>24===a&&1/a!==1/-0}),na=z({qb:0},"java.lang.Double",{qb:1,u:1,b:1,p:1},void 0,void 0,function(a){return"number"===typeof a});function Jb(){U.call(this)}Jb.prototype=new Bb;Jb.prototype.constructor=Jb;function Kb(){}Kb.prototype=Jb.prototype;
var ma=z({rb:0},"java.lang.Float",{rb:1,u:1,b:1,p:1},void 0,void 0,function(a){return"number"===typeof a}),la=z({tb:0},"java.lang.Integer",{tb:1,u:1,b:1,p:1},void 0,void 0,function(a){return(a|0)===a&&1/a!==1/-0}),ra=z({ub:0},"java.lang.Long",{ub:1,u:1,b:1,p:1},void 0,void 0,function(a){return qa(a)}),ka=z({wb:0},"java.lang.Short",{wb:1,u:1,b:1,p:1},void 0,void 0,function(a){return a<<16>>16===a&&1/a!==1/-0});function Lb(){}Lb.prototype=new B;Lb.prototype.constructor=Lb;Lb.prototype.c=function(){return this};
function Mb(a,b){for(var c=null,c=null,d=0,d=0,e=b.length|0,h=0,n=h=0,k=0,k=0;k<e;)if(n=k,92===(65535&(b.charCodeAt(k)|0))){k=1+k|0;if(k>=e)throw Nb(b,n);if(48<=(65535&(b.charCodeAt(k)|0))&&55>=(65535&(b.charCodeAt(k)|0))){var t=65535&(b.charCodeAt(k)|0),q=-48+t|0,k=1+k|0;if(k<e&&48<=(65535&(b.charCodeAt(k)|0))&&55>=(65535&(b.charCodeAt(k)|0))){var wa=k,q=-48+(r(8,q)+(65535&(b.charCodeAt(wa)|0))|0)|0,k=1+k|0;k<e&&51>=t&&48<=(65535&(b.charCodeAt(k)|0))&&55>=(65535&(b.charCodeAt(k)|0))&&(t=k,q=-48+
(r(8,q)+(65535&(b.charCodeAt(t)|0))|0)|0,k=1+k|0)}q&=65535}else switch(q=65535&(b.charCodeAt(k)|0),k=1+k|0,q){case 98:q=8;break;case 116:q=9;break;case 110:q=10;break;case 102:q=12;break;case 114:q=13;break;case 34:q=34;break;case 39:q=39;break;case 92:q=92;break;default:throw Nb(b,n);}0===(1&d)&&0===(1&d)&&(c=(new V).c(),d|=1);t=c;Ob(t,b,h,n);0===(1&d)&&0===(1&d)&&(c=(new V).c(),d|=1);h=c;Pb(h,q);h=k}else k=1+k|0;if(0===h)return b;0===(1&d)&&0===(1&d)&&(c=(new V).c());return Ob(c,b,h,k).e}
Lb.prototype.a=z({Fb:0},"scala.StringContext$",{Fb:1,b:1,V:1,d:1});var Qb=void 0;function Rb(){Qb||(Qb=(new Lb).c());return Qb}function Sb(){this.La=null}Sb.prototype=new Hb;Sb.prototype.constructor=Sb;Sb.prototype.$=function(a){return(0,this.La)(a)};function Xa(a){var b=new Sb;b.La=a;return b}Sb.prototype.a=z({uc:0},"scala.scalajs.runtime.AnonFunction1",{uc:1,fd:1,b:1,Fa:1});function Tb(){this.Gc=this.Ic=this.Hc=this.Mc=this.Lc=this.Kc=0;this.Ga=this.Ha=this.fb=this.gb=this.s=null}Tb.prototype=new B;
Tb.prototype.constructor=Tb;Tb.prototype.c=function(){Ub=this;this.s=(new J).j(0,0);this.gb=(new J).j(1,0);this.fb=(new J).j(-1,-1);this.Ha=(new J).j(0,-2147483648);this.Ga=(new J).j(-1,2147483647);return this};function pb(a,b){if(b!==b)return a.s;if(-9223372036854775E3>b)return a.Ha;if(9223372036854775E3<=b)return a.Ga;var c=0>b,d=c?-b:b,e=d|0,d=d/4294967296|0;return c?(new J).j(-e|0,0!==e?~d:-d|0):(new J).j(e,d)}Tb.prototype.a=z({wc:0},"scala.scalajs.runtime.RuntimeLong$",{wc:1,b:1,V:1,d:1});
var Ub=void 0;function A(){Ub||(Ub=(new Tb).c());return Ub}var ia=z({hb:0},"java.lang.String",{hb:1,b:1,d:1,Pa:1,p:1},void 0,void 0,function(a){return"string"===typeof a});function Vb(){U.call(this)}Vb.prototype=new Kb;Vb.prototype.constructor=Vb;function Wb(){}Wb.prototype=Vb.prototype;function V(){this.e=null}V.prototype=new B;V.prototype.constructor=V;g=V.prototype;g.c=function(){V.prototype.o.call(this,"");return this};function H(a,b){a.e=""+a.e+(null===b?"null":b);return a}
g.$a=function(a,b){return this.e.substring(a,b)};g.g=function(){return this.e};g.n=function(){V.prototype.o.call(this,"");return this};function Ob(a,b,c,d){return null===b?Ob(a,"null",c,d):H(a,ga("string"===typeof b?b.substring(c,d):b.$a(c,d)))}function Pb(a,b){H(a,m.String.fromCharCode(b))}g.o=function(a){this.e=a;return this};g.a=z({xb:0},"java.lang.StringBuilder",{xb:1,b:1,Pa:1,Rc:1,d:1});function W(){}W.prototype=new B;W.prototype.constructor=W;function Xb(){}Xb.prototype=W.prototype;
W.prototype.g=function(){return(this.P()?"non-empty":"empty")+" iterator"};W.prototype.ca=function(a){for(;this.P();)a.$(this.C())};W.prototype.la=function(a,b,c,d){return $a(this,a,b,c,d)};function J(){this.i=this.f=0}J.prototype=new Na;J.prototype.constructor=J;function db(a,b){return(new J).j(a.f|b.f,a.i|b.i)}g=J.prototype;g.g=function(){var a=this.f,b=this.i;return b===a>>31?""+a:0>b?"-"+Yb(-a|0,0!==a?~b:-b|0):Yb(a,b)};g.j=function(a,b){this.f=a;this.i=b;return this};
function fb(a,b){return(new J).j(a.f&b.f,a.i&b.i)}function eb(a){return(new J).j(0,a.f<<32)}g.n=function(a){J.prototype.j.call(this,a,a>>31);return this};g.q=function(){return this.f^this.i};
function Yb(a,b){if(0===(-2097152&b))return""+(4294967296*b+ +(a>>>0));var c,d=(32+ba(1E9)|0)-(0!==b?ba(b):32+ba(a)|0)|0,e=d;0===e?(c=1E9,e=0):32>e?(c=1E9<<e,e=1E9>>>(-e|0)|0|0<<e):(c=0,e=1E9<<e);for(var h=c,n=e,k=a,t=b,e=c=0;0<=d&&0!==(-2097152&t);){var q=k,wa=t,nc=h,Zb=n;if(wa===Zb?(-2147483648^q)>=(-2147483648^nc):(-2147483648^wa)>=(-2147483648^Zb))q=k,k=q-h|0,t=(t-n|0)+((-2147483648^q)<(-2147483648^k)?-1:0)|0,32>d?c|=1<<d:e|=1<<d;d=-1+d|0;q=n>>>1|0;h=h>>>1|0|n<<-1;n=q}d=t;if(0===d?-1147483648<=
(-2147483648^k):-2147483648<=(-2147483648^d))d=4294967296*t+ +(k>>>0),h=d/1E9,k=c,c=t=k+(h|0)|0,e=(e+(h/4294967296|0)|0)+((-2147483648^t)<(-2147483648^k)?1:0)|0,d%=1E9,k=d|0,t=d/4294967296|0;c=[c,e,k,t];e=""+(c["2"]|0);return""+(4294967296*(c["1"]|0)+ +((c["0"]|0)>>>0))+"000000000".substring(e.length|0)+e}function qa(a){return!!(a&&a.a&&a.a.m.Ya)}g.a=z({Ya:0},"scala.scalajs.runtime.RuntimeLong",{Ya:1,u:1,b:1,d:1,p:1});function L(){U.call(this)}L.prototype=new Wb;L.prototype.constructor=L;
function $b(){}$b.prototype=L.prototype;L.prototype.c=function(){U.prototype.t.call(this,null,null);return this};L.prototype.o=function(a){U.prototype.t.call(this,a,null);return this};L.prototype.a=z({Ra:0},"java.lang.IllegalArgumentException",{Ra:1,R:1,Q:1,G:1,b:1,d:1});function X(){U.call(this)}X.prototype=new Wb;X.prototype.constructor=X;X.prototype.o=function(a){U.prototype.t.call(this,a,null);return this};X.prototype.a=z({sb:0},"java.lang.IndexOutOfBoundsException",{sb:1,R:1,Q:1,G:1,b:1,d:1});
function v(){U.call(this)}v.prototype=new Wb;v.prototype.constructor=v;v.prototype.c=function(){U.prototype.t.call(this,null,null);return this};v.prototype.a=z({vb:0},"java.lang.NullPointerException",{vb:1,R:1,Q:1,G:1,b:1,d:1});function ac(){U.call(this)}ac.prototype=new Wb;ac.prototype.constructor=ac;ac.prototype.o=function(a){U.prototype.t.call(this,a,null);return this};ac.prototype.a=z({yb:0},"java.util.NoSuchElementException",{yb:1,R:1,Q:1,G:1,b:1,d:1});function N(){this.ia=null}N.prototype=new B;
N.prototype.constructor=N;g=N.prototype;g.Ua=f("StringContext");g.va=function(a){switch(a){case 0:return this.ia;default:throw(new X).o(""+a);}};g.g=function(){Va();return this.Ta().la((new Y).c(),this.Ua()+"(",",",")").k.e};function tb(a,b){if(a.ia.ea()!==(1+b.ea()|0))throw(new L).o("wrong number of arguments for interpolated string");for(var c=a.ia.ua(),d=b.ua(),e=c.C(),e=(new V).o(Mb(Rb(),e));d.P();){var h=e,n=d.C();null===n?H(h,null):H(h,ga(n));h=c.C();H(e,Mb(Rb(),h))}return e.e}
function ub(a,b){a.ia=b;return a}g.q=function(){return Sa(this)};g.Ta=function(){return bc(this)};g.a=z({Eb:0},"scala.StringContext",{Eb:1,b:1,Db:1,wa:1,V:1,d:1});function G(){}G.prototype=new Xb;G.prototype.constructor=G;G.prototype.c=function(){return this};G.prototype.C=function(){throw(new ac).o("next on empty iterator");};G.prototype.P=f(!1);G.prototype.a=z({Yb:0},"scala.collection.Iterator$$anon$2",{Yb:1,Wa:1,b:1,Xa:1,ka:1,ja:1});function Z(){this.Ia=this.M=0;this.ab=null}Z.prototype=new Xb;
Z.prototype.constructor=Z;Z.prototype.C=function(){var a=this.ab.va(this.M);this.M=1+this.M|0;return a};function bc(a){var b=new Z;b.ab=a;b.M=0;b.Ia=1;return b}Z.prototype.P=function(){return this.M<this.Ia};Z.prototype.a=z({Ec:0},"scala.runtime.ScalaRunTime$$anon$1",{Ec:1,Wa:1,b:1,Xa:1,ka:1,ja:1});function cc(){U.call(this)}cc.prototype=new $b;cc.prototype.constructor=cc;function Nb(a,b){var c=new cc;U.prototype.t.call(c,"invalid escape character at index "+b+' in "'+a+'"',null);return c}
cc.prototype.a=z({Gb:0},"scala.StringContext$InvalidEscapeException",{Gb:1,Ra:1,R:1,Q:1,G:1,b:1,d:1});function $(){this.F=this.pa=this.Fc=0;this.Ea=null}$.prototype=new Xb;$.prototype.constructor=$;$.prototype.C=function(){this.F>=this.pa&&(Za||(Za=(new F).c()),Za.Ka.C());var a=this.Ea.ma(this.F);this.F=1+this.F|0;return a};function dc(a,b){var c=new $;c.Fc=0;c.pa=b;if(null===a)throw(new v).c();c.Ea=a;c.F=0;return c}$.prototype.P=function(){return this.F<this.pa};
$.prototype.a=z({Tb:0},"scala.collection.IndexedSeqLike$Elements",{Tb:1,Wa:1,b:1,Xa:1,ka:1,ja:1,Vc:1,V:1,d:1});function Cb(){U.call(this);this.E=null}Cb.prototype=new Wb;Cb.prototype.constructor=Cb;g=Cb.prototype;g.Ua=f("JavaScriptException");g.Ma=function(){this.stackdata=this.E;return this};g.va=function(a){switch(a){case 0:return this.E;default:throw(new X).o(""+a);}};g.g=function(){return ga(this.E)};g.q=function(){return Sa(this)};g.Ta=function(){return bc(this)};
g.a=z({za:0},"scala.scalajs.js.JavaScriptException",{za:1,R:1,Q:1,G:1,b:1,d:1,Db:1,wa:1,V:1});function ec(){}ec.prototype=new B;ec.prototype.constructor=ec;function fc(){}fc.prototype=ec.prototype;ec.prototype.la=function(a,b,c,d){return $a(this,a,b,c,d)};ec.prototype.Za=function(){var a=La(ha(this)),b;w();b=a;var c=gb(46);b=b.lastIndexOf(c)|0;-1!==b&&(a=a.substring(1+b|0));w();b=a;c=gb(36);b=b.indexOf(c)|0;-1!==b&&(a=a.substring(0,b));return a};function gc(){}gc.prototype=new fc;
gc.prototype.constructor=gc;function hc(){}hc.prototype=gc.prototype;function ic(){}ic.prototype=new hc;ic.prototype.constructor=ic;function jc(){}jc.prototype=ic.prototype;ic.prototype.g=function(){var a=this.Za()+"(";return this.la((new Y).c(),a,", ",")").k.e};function kc(){}kc.prototype=new jc;kc.prototype.constructor=kc;function lc(){}lc.prototype=kc.prototype;function mc(){}mc.prototype=new lc;mc.prototype.constructor=mc;function oc(){}oc.prototype=mc.prototype;function Y(){this.k=null}
Y.prototype=new lc;Y.prototype.constructor=Y;g=Y.prototype;g.c=function(){Y.prototype.kb.call(this,16,"");return this};g.ma=function(a){a=65535&(this.k.e.charCodeAt(a)|0);return Ab(a)};g.$=function(a){a=65535&(this.k.e.charCodeAt(a|0)|0);return Ab(a)};g.$a=function(a,b){return this.k.e.substring(a,b)};g.g=function(){return this.k.e};g.ca=function(a){Ya(this,a)};g.ua=function(){return dc(this,this.k.e.length|0)};g.kb=function(a,b){Y.prototype.lb.call(this,H((new V).n((b.length|0)+a|0),b));return this};
g.ea=function(){return this.k.e.length|0};g.lb=function(a){this.k=a;return this};function bb(a,b){var c=a.k;w();H(c,null===b?"null":ga(b));return a}g.q=function(){return Fb(this)};g.a=z({qc:0},"scala.collection.mutable.StringBuilder",{qc:1,ic:1,Jb:1,Ib:1,Kb:1,b:1,bc:1,cc:1,hc:1,ec:1,ka:1,ja:1,Qb:1,Zb:1,Pb:1,fc:1,Vb:1,Lb:1,Mb:1,Wb:1,wa:1,$b:1,Cb:1,Fa:1,Nb:1,Ob:1,ac:1,oc:1,nc:1,rc:1,Bb:1,pc:1,kc:1,Ab:1,Qa:1,Pa:1,lc:1,Rb:1,Sb:1,mc:1,$c:1,Ub:1,Tc:1,p:1,jc:1,gc:1,dc:1,V:1,d:1});
function pc(){this.I=null}pc.prototype=new oc;pc.prototype.constructor=pc;g=pc.prototype;g.ma=function(a){return this.I[a]};g.$=function(a){return this.I[a|0]};g.ca=function(a){Ya(this,a)};g.ua=function(){return dc(this,this.I.length|0)};g.ea=function(){return this.I.length|0};g.q=function(){return Fb(this)};function O(a){var b=new pc;b.I=a;return b}g.Za=f("WrappedArray");
g.a=z({tc:0},"scala.scalajs.js.WrappedArray",{tc:1,ad:1,ic:1,Jb:1,Ib:1,Kb:1,b:1,bc:1,cc:1,hc:1,ec:1,ka:1,ja:1,Qb:1,Zb:1,Pb:1,fc:1,Vb:1,Lb:1,Mb:1,Wb:1,wa:1,$b:1,Cb:1,Fa:1,Nb:1,Ob:1,ac:1,oc:1,nc:1,rc:1,Bb:1,pc:1,kc:1,Ab:1,Qa:1,cd:1,dd:1,gc:1,dc:1,Xc:1,Wc:1,Yc:1,lc:1,Rb:1,Sb:1,mc:1,bd:1,ed:1,Ub:1,jc:1});
}).call(this);
//# sourceMappingURL=app.js.map