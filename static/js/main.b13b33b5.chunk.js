(this["webpackJsonppad-emoji"]=this["webpackJsonppad-emoji"]||[]).push([[0],{132:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),r=e(31),o=e.n(r),c=(e(60),e(2)),u=e(3),l=e(1),s=e(12);function d(){var n=Object(c.a)(["\n    color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n    height: 100%;\n    background-image: url(/bar-y.png);\n    background-size: auto 100%;\n    background-position: center right;\n    width: 100%;\n    position: relative;\n    transform: translateX(calc(-100% + ","%));\n    z-index: 0;\n"]);return f=function(){return n},n}function b(){var n=Object(c.a)(["\n    border: 2px solid #fff;\n    border-radius: 13px;\n    height: 26px;\n    background-color: #4180b5;\n    overflow: hidden;   \n    position: relative;\n"]);return b=function(){return n},n}var g=u.b.div(b()),m=u.b.div(f(),(function(n){return n.n})),h=u.b.span(d()),p=function(n){var t=n.n,e=n.onEnd,r=Object(a.useState)({percentage:0}),o=Object(l.a)(r,2),c=o[0],u=o[1];return Object(a.useEffect)((function(){Object(s.a)({targets:c,percentage:100,round:3,easing:"linear",autoplay:!0,duration:1e3*t,update:function(n){u({percentage:n.progress})}})}),[]),Object(a.useEffect)((function(){100===c.percentage&&e()}),[c.percentage]),i.a.createElement(g,null,i.a.createElement(h,null,c.percentage.toFixed(0),"%"),i.a.createElement(m,{n:c.percentage}))};function v(){var n=Object(c.a)(["\n        color: #fff;\n        text-shadow: 0 0 12px rgba(0,0,0,1);\n        font-size: 6vh;\n        max-width: 90%;\n    "]);return v=function(){return n},n}function j(){var n=Object(c.a)(["\n        color: #fff;\n        text-shadow: 0 0 12px rgba(0,0,0,1);\n        font-size: 4vh;\n        max-width: 90%;\n    "]);return j=function(){return n},n}var x=Object.assign({},{LG:u.b.span(j()),XL:u.b.span(v())}),w=e(53);function O(){var n=Object(c.a)(["\n    position: absolute;\n    width: 70%;\n    height: 70%;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    animation: bounce 1s linear infinite;\n    animation-delay: ","ms;\n    background-image: url(",");\n    background-size: 100% 100%;\n"]);return O=function(){return n},n}function y(){var n=Object(c.a)(["\n        top: ",";\n        left: ",";\n    "]);return y=function(){return n},n}function E(){var n=Object(c.a)(["\n    width: 25%;\n    position: absolute;\n    ","\n    &:after {\n        content: '';\n        display: block;\n        padding-bottom: 100%;\n    }\n    &:before {\n        content: '';\n        position: absolute;\n        display: block;\n        width: 75%;\n        height: 40px;\n        border-radius: 100%;\n        background-color: #3a5f96;\n        top: 80%;\n        left: 12.5%;\n    }\n"]);return E=function(){return n},n}var k=[{top:"10%",left:"7%"},{top:"30%",left:"42%"},{top:"16%",left:"74%"},{top:"48%",left:"22%"},{top:"52%",left:"64%"}],S=u.b.div(E(),(function(n){var t=n.coords;return Object(u.a)(y(),t.top,t.left)})),z=u.b.div(O(),(function(n){return 100*n.n}),(function(n){var t=n.name;return"/emoji/".concat(t,".png")})),C=function(n){var t=n.name,e=n.n;return i.a.createElement(S,{coords:k[e]},i.a.createElement(z,{name:t,n:e}))},R=e(4),T=Object(R.atom)({key:"layout/currentScreen",default:"loading"}),M=Object(R.atom)({key:"layout/showTutorial",default:!1}),N=Object(R.atom)({key:"layout/showTutorialSuccess",default:!1}),L=Object(R.atom)({key:"layout/gameStarted",default:!1}),D=Object(R.atom)({key:"layout/currentGameTimer",default:window.gameConfig.main.gameDuration||30}),G=Object(R.atom)({key:"layout/currentScore",default:0}),A=Object(R.atom)({key:"layout/tailingScoreInc",default:0}),F=Object(R.atom)({key:"layout/tailingScoreOffset",default:0}),I=Object(R.atom)({key:"layout/currentComboSize",default:0}),V=Object(R.atom)({key:"layout/isInAnim",default:!1});function H(){var n=Object(c.a)(["\n    height: 100vh;\n    height:  calc(var(--vh, 1vh) * 100);\n    overflow: hidden;\n    @media (min-width: 1281px){\n        width: calc(var(--vh, 1vh) * 52.65);\n    } \n    @media (max-width: 1281px) and (orientation: portrait) {\n        width: 100vw;\n    }\n    @media (max-width: 1281px) and (orientation: landscape) {\n        width: calc(var(--vh, 1vh) * 100);\n        height: 100vw;\n    }\n    background-image: url('/loading-bg.jpg');\n    position: relative;\n"]);return H=function(){return n},n}var B=u.b.div(H());function W(){var n=Object(c.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: url('/loading-bg.jpg');\n    background-position: center;\n    .content {\n        position: relative;\n        height: 100%;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n    &:before {\n        display: block;\n        position: absolute;\n        content: '';\n        background-color: rgba(0,0,0,.25);\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n    }\n"]);return W=function(){return n},n}var X=u.b.div(W());function P(){var n=Object(c.a)(["\n    display: block;\n    width: 60%;\n    height: auto;\n"]);return P=function(){return n},n}var J=u.b.img.attrs((function(){return{src:"/logo.png"}}))(P());function _(){var n=Object(c.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: url('/game-bg.jpg');\n    background-size: auto 100%;\n    animation: slidebg 40s linear infinite;\n    .content {\n        position: relative;\n        height: 100%;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n    &:before {\n        display: block;\n        position: absolute;\n        content: '';\n        background-color: rgba(0,0,0,.25);\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n    }\n"]);return _=function(){return n},n}var Y=u.b.div(_()),q=e(13),K=e.n(q),Q=e(22),U=e(16),Z=function(){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),e=t[0],i=t[1],r=Object(a.useState)(0),o=Object(l.a)(r,2),c=o[0],u=o[1],s=Object(a.useState)(-1),d=Object(l.a)(s,2),f=d[0],b=d[1];return{on:e,start:function(n,t){f&&clearTimeout(f),i(!0),u(t),b(setTimeout((function(){i(!1),n()}),t))},duration:c}},$=function(){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),e=t[0],i=t[1],r=Object(a.useState)(0),o=Object(l.a)(r,2),c=o[0],u=o[1],s=Object(a.useState)(-1),d=Object(l.a)(s,2),f=d[0],b=d[1];return{on:e,start:function(n,t){f&&clearTimeout(f),i(!0),u(t),b(setInterval((function(){i(!1),n()}),t))},stop:function(){return clearInterval(f)},duration:c}},nn=e(11),tn=e(55),en=e(15),an=e(14),rn=e.n(an),on=function(n){var t=n.src,e=(n.odd,n.ord),r=n.y,o=n.x,c=n.handleDrag,u=n.onAnimationEnd,d=n.showAnimation,f=n.showTutorial,b=n.draggable,g=n.setSwappingTail,m=n.showLayoutEffects,h=n.showAlt,p=n.setShowTutorial,v=n.currentlyHighlighted,j=Object(en.a)(n,["src","odd","ord","y","x","handleDrag","onAnimationEnd","showAnimation","showTutorial","draggable","setSwappingTail","showLayoutEffects","showAlt","setShowTutorial","currentlyHighlighted"]),x=Z(),w=Object(a.useState)({x:o,y:r}),O=Object(l.a)(w,2),y=O[0],E=O[1],k=Object(a.useState)(.4),S=Object(l.a)(k,2),z=S[0],C=S[1];Object(a.useEffect)((function(){f?C([17,24,31,38].includes(e)?1:.4):(E({x:o,y:r}),C(1))}),[f]),Object(a.useEffect)((function(){v?x.start((function(){C(0)}),300):C(1)}),[v]),Object(a.useEffect)((function(){d&&Object(s.a)({targets:y,x:o,round:3,easing:"linear",autoplay:!0,duration:500,delay:500,update:function(n){E({x:n.animations[0].currentValue,y:y.y})},complete:function(){48===e&&u()}})}),[o]),Object(a.useEffect)((function(){m&&Object(s.a)({targets:y,x:o,y:r,round:3,easing:"linear",autoplay:!0,duration:150,update:function(n){"d"!==window.inl&&E({x:n.animations[0].currentValue,y:n.animations[1].currentValue})}})}),[o,r]);var R=rn()("".concat(t,".svg")),T=Object(l.a)(R,1)[0],M=rn()("".concat(t,"-h.svg")),N=Object(l.a)(M,1)[0];return i.a.createElement(nn.Image,Object.assign({onDragMove:function(n){f&&(window.st="d",p(!1));var t=y,a="",i=n.target.attrs.x,r=n.target.attrs.y,o=Math.abs(t.x-i),u=Math.abs(t.y-r);(o>10||u>10)&&(o>u?(i<t.x&&(a="right"),i>t.x&&(a="left")):(r>t.y&&(a="bottom"),r<t.y&&(a="top")),c(a,e))},onDragEnd:function(n){var t=Object(tn.a)({},y),e=n.target.attrs.x,a=n.target.attrs.y,i=Math.abs(o-e),c=Math.abs(r-a);i>10||c>10||E({x:t.x,y:t.y})},image:h?N:T,draggable:b,onClick:function(){return g(e)},onTap:function(){return g(e)},opacity:z,dragBoundFunc:function(n){return{x:n.x,y:n.y}}},j,{x:y.x,y:y.y}))},cn=function(n){var t=n.width,e=n.height,r=n.x,o=n.y,c=Object(en.a)(n,["width","height","x","y"]),u=rn()("/circle.svg"),d=Object(l.a)(u,1)[0],f=Object(a.useState)({width:t,height:e,x:r,y:o,opacity:0}),b=Object(l.a)(f,2),g=b[0],m=b[1];return Object(a.useEffect)((function(){Object(s.a)({targets:g,opacity:[{value:0,duration:600},{value:0,duration:400},{value:1e3,duration:300},{value:100,duration:300},{value:0,duration:300},{value:0,duration:100}],width:[{value:t,duration:600},{value:t,duration:400},{value:1.5*t,duration:600},{value:t,duration:300},{value:t,duration:100}],height:[{value:e,duration:600},{value:e,duration:400},{value:1.5*e,duration:600},{value:e,duration:300},{value:e,duration:100}],x:[{value:r,duration:600},{value:r,duration:400},{value:r-.25*t,duration:600},{value:r,duration:300},{value:r,duration:100}],y:[{value:o,duration:600},{value:o,duration:400},{value:o-.25*e,duration:600},{value:o,duration:300},{value:o,duration:100}],easing:"linear",autoplay:!0,loop:!0,duration:600,update:function(n){m(n.animations.reduce((function(n,t){return n[t.property]=t.currentValue,n}),{}))}})}),[]),i.a.createElement(nn.Image,Object.assign({image:d},g,c,{opacity:g.opacity/1e3}))},un=function(n){var t=n.width,e=n.height,r=n.x,o=n.y,c=n.currentCombo,u=Object(en.a)(n,["width","height","x","y","currentCombo"]),d=rn()("/circle.svg"),f=Object(l.a)(d,1)[0],b=Object(a.useState)({width:t,height:e,x:r,y:o,opacity:0}),g=Object(l.a)(b,2),m=g[0],h=g[1];return Object(a.useEffect)((function(){Object(s.a)({targets:m,opacity:[{value:1e3,duration:300},{value:100,duration:300}],width:1.5*t,height:1.5*e,x:r-.25*t,y:o-.25*e,easing:"linear",autoplay:!0,loop:!0,duration:600,update:function(n){h(n.animations.reduce((function(n,t){return n[t.property]=t.currentValue,n}),{}))}})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(nn.Image,Object.assign({image:f},m,u,{opacity:m.opacity/1e3})),i.a.createElement(nn.Text,{x:r,y:o,width:t,height:e,align:"center",fontSize:.5*e,lineHeight:2.1,fontFamily:"arial",fill:"#fff",shadowColor:"rgba(0,0,0,.3)",shadowBlur:5,fontStyle:"bold",text:"".concat(50*(c+1)),opacity:(1e3-m.opacity)/1e3}))};function ln(){var n=Object(c.a)(["\n    position: absolute;\n    z-index: 10;\n    transform: translateX(-2px);\n    margin-top: 15px;\n"]);return ln=function(){return n},n}var sn=u.b.div(ln()),dn=function(n,t){return{x:n%7*t,y:Math.floor(n/7)*t}},fn=function(n){return new Promise((function(t){return setTimeout(t,n)}))},bn=function(n){if(n.every((function(t){return t.fig.fig===n[0].fig.fig})))return n;for(var t={},e=6;e>=3;e--){t[e]=[];for(var a=function(a){var i=n.slice(a,a+e);i.every((function(n){return n.fig.fig===i[0].fig.fig}))&&i.length===e&&t[e].push(i)},i=0;i<=6;i++)a(i)}return t[6].length?t[6]:t[5].length?t[5]:t[4].length?t[4]:t[3].length?t[3]:[]},gn=function(){return 100*Math.random()},mn=["simba","maik","maik","randall","simba","randall","simba","simba","dolan","randall","randall","dolan","simba","maik","maik","dolan","sima","simba","maik","dolan","sima","simba","sima","dolan","simba","dolan","sima","randall","simba","maik","maik","randall","dolan","dolan","simba","randall","dolan","dolan","simba","randall","sima","dolan","sima","simba","dolan","sima","maik","dolan","simba"].map((function(n){return{fig:n,k:gn()}})),hn=function(n){var t=n.w,e=t-15,r=e/7,o=Z(),c=Z(),u=Z(),s=Z(),d=Object(a.useState)(!0),f=Object(l.a)(d,2),b=f[0],g=f[1],m=Object(R.useRecoilState)(M),h=Object(l.a)(m,2),p=h[0],v=h[1],j=Object(a.useState)(!0),x=Object(l.a)(j,2),w=x[0],O=x[1],y=Object(a.useState)([]),E=Object(l.a)(y,2),k=E[0],S=E[1],z=Object(a.useState)(mn),C=Object(l.a)(z,2),T=C[0],L=C[1],D=Object(a.useState)(T.map((function(n,t){return dn(t,r)}))),H=Object(l.a)(D,2),B=H[0],W=H[1],X=Object(a.useState)(!0),P=Object(l.a)(X,2),J=P[0],_=P[1],Y=Object(a.useState)([]),q=Object(l.a)(Y,2),$=q[0],tn=q[1],en=Object(R.useSetRecoilState)(G),an=Object(R.useSetRecoilState)(A),rn=Object(R.useSetRecoilState)(I),ln=Object(R.useSetRecoilState)(F),hn=Object(R.useRecoilState)(V),pn=Object(l.a)(hn,2),vn=pn[0],jn=pn[1],xn=Object(R.useRecoilValue)(I),wn=Object(a.useMemo)((function(){return k.reduce((function(n,t){return n[t.idx]=!0,n}),{})}),[k]),On=function(n){n.filter((function(t){return n.filter((function(n){return Math.abs(n.x-t.x)<=15&&Math.abs(n.y-t.y)<=15})).length>1}));W(n)};Object(a.useEffect)((function(){window.inl="d",_(!1),On(T.map((function(n,t){return dn(t,r)}))),_(!0),window.inl=void 0}),[t,T]);var yn=function(){w&&(O(!1),v(!0))},En=Object(R.useRecoilState)(N),kn=Object(l.a)(En,2),Sn=kn[0],zn=kn[1],Cn=function(n){$[0]&&n!==$[0]?[n+1,n-1,n+7,n-7].includes($[0])&&tn((function(t){return[].concat(Object(U.a)(t),[n])})):tn([n])};Object(a.useEffect)((function(){2===$.length&&(Ln($[0],$[1]),tn([]))}),[$]);var Rn=function(n,t){g(!1),g(!0);var e=t;"bottom"===n&&(e=t+7),"top"===n&&(e=t-7),"left"===n&&(e=t+1),"right"===n&&(e=t-1),Ln(t,e)},Tn=function(){var n=Object(Q.a)(K.a.mark((function n(t,e,a){var i,r,o,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(jn(!0),S(t),t.length){n.next=6;break}return i=Object(U.a)(B),u.start((function(){On(i)}),160),n.abrupt("return");case 6:return r=Object(U.a)(T),o=a,t.find((function(n){return n.idx===a&&n.fig.fig===r[o].fig}))&&(o=e),c=o===e?a:e,t.forEach((function(n){var t=n.idx===e&&n.fig.fig===r[e].fig?a:n.idx===a?e:n.idx;r[t]={fig:mn[Math.floor(Math.random()*mn.length)].fig,k:gn()}})),r[c]=r[o],r[o]={fig:mn[Math.floor(Math.random()*mn.length)].fig,k:gn()},s.start((function(){S([]),L(r.map((function(n){return{fig:n.fig,k:n.k}})))}),600),n.next=16,fn(650);case 16:return jn(!1),n.abrupt("return",r);case 18:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}(),Mn=function(n,t){var e=[];return(t&&t.length?t:mn.map((function(n,t){return t}))).forEach((function(t){var a=bn(function(n,t){for(var e=[n%7],a=1;a<=6;a++)e[a]=e[a-1]+7;return e.map((function(n){return{fig:t[n],idx:n}}))}(t,n));a.length&&e.push(a);var i=bn(function(n,t){for(var e=[n-n%7],a=1;a<=6;a++)e[a]=e[a-1]+1;return e.map((function(n){return{fig:t[n],idx:n}}))}(t,n));i.length&&e.push(i)})),function(n){var t=[];return n.forEach((function(n){t.find((function(t){return t.idx===n.idx&&t.fig.fig===n.fig.fig}))||t.push(n)})),t}(e.flat(2))},Nn=function(){var n=Object(Q.a)(K.a.mark((function n(t,e,a){var i;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Tn(t,e,a);case 2:return i=n.sent,n.abrupt("return",i&&i.length?Mn(i):[]);case 4:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}(),Ln=function(){var n=Object(Q.a)(K.a.mark((function n(t,a){var i,r,u,l;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(i=Object(U.a)(T))[t]=T[a],i[a]=T[t],(r=Mn(i,[t,a])).length&&!Sn&&o.start((function(){zn(!0)}),900),(u=Object(U.a)(B))[t]=B[a],u[a]=B[t],On(u),r.length&&ln(B[r[0].idx].x/e),l=r;case 11:return n.next=13,Nn(l,t,a);case 13:l=n.sent,rn((function(n){return n+1})),en((function(n){return n+50*l.length})),an(50*l.length);case 17:if(0!==l.length){n.next=11;break}case 18:rn(0),c.start((function(){return g(!0)}),200);case 20:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Dn=Object(a.useMemo)((function(){return[dn(17,r),dn(24,r),dn(31,r)]}),[r]);return i.a.createElement(sn,null,i.a.createElement(nn.Stage,{width:e,height:t+10},i.a.createElement(nn.Layer,null,T.map((function(n,t){var e=dn(t,r);e.x,e.y;return i.a.createElement(on,{handleDrag:Rn,odd:t%2===1,ord:t,key:"".concat(t).concat(n.fig).concat(n.k),src:"/emoji/".concat(n.fig),showAlt:vn,width:r,height:r,onAnimationEnd:yn,showAnimation:w,showTutorial:p,y:B[t].y,x:B[t].x,showLayoutEffects:J,setSwappingTail:Cn,setShowTutorial:v,currentlyHighlighted:!!wn[t],draggable:b})})),p?i.a.createElement(i.a.Fragment,null,i.a.createElement(cn,{width:r,height:r,x:Dn[0].x,y:Dn[0].y}),i.a.createElement(cn,{width:r,height:r,x:Dn[1].x,y:Dn[1].y}),i.a.createElement(cn,{width:r,height:r,x:Dn[2].x,y:Dn[2].y})):null,k.map((function(n,t){var e=dn(n.idx,r),a=e.x,o=e.y;return i.a.createElement(un,{currentCombo:xn,key:t,width:r,height:r,x:a,y:o})})))))};function pn(){var n=Object(c.a)(["\n width: 90%;\n height: auto;  \n background-image: url(/game-field.png);\n transform: translate(0%, -3%);\n animation: fadeIn .3s ease-in;\n background-size: cover;\n position: relative;\n .content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n }\n &:after {\n    content: '';\n    display: block;\n    padding-bottom: 137%;\n }\n"]);return pn=function(){return n},n}var vn=u.b.div(pn());function jn(){var n=Object(c.a)(["\n    color: #fff;\n    position: absolute;\n    font-size: 42px;\n    left: 4%;\n    top: 2.9%;\n    display: block;\n    width: 10vh;\n    line-height: 10vh;\n    height: 10vh;\n    border-radius: 100%;\n    text-align: center;\n    text-shadow: 0 0 12px rgba(0,0,0,1);\n    background: #83CFF3;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    z-index: 10;\n"]);return jn=function(){return n},n}var xn=u.b.span(jn()),wn=function(n){var t=n.dimensions,e=t.width,r=(t.height,.9*e),o=.18*r,c=Object(a.useState)(!1),u=Object(l.a)(c,2),s=u[0],d=u[1],f=Object(R.useRecoilState)(D),b=Object(l.a)(f,2),g=b[0],m=b[1],h=Object(R.useRecoilValue)(L),p=$(),v=Object(R.useSetRecoilState)(T);return Object(a.useEffect)((function(){s&&p.start((function(){m((function(n){return n-1}))}),1e3)}),[s]),Object(a.useEffect)((function(){h&&d(!0)}),[h]),Object(a.useEffect)((function(){0===g&&(p.stop(),v("end"))}),[g]),s?i.a.createElement(xn,{style:{width:o,height:o,borderWidth:Math.max(Math.floor(.028846153*o),2),left:.05*r,fontSize:.6*o,lineHeight:"".concat(o,"px")}},g):null};function On(){var n=Object(c.a)(["\n    height: 100%;\n    width: ","%;\n    background: rgb(59,44,120);\n    background: linear-gradient(180deg, rgba(59,44,120,1) 0%, rgba(122,75,158,1) 50%, rgba(59,44,120,1) 100%);\n    transition: width 1s linear;\n"]);return On=function(){return n},n}function yn(){var n=Object(c.a)(["\n    position: absolute;\n    width: 70%;\n    border-radius: 15px;\n    box-sizing: border-box;\n    border: 4px solid #fff;\n    background-color: #105297;\n    left: 20%;\n    z-index: 4;\n    overflow: hidden;\n"]);return yn=function(){return n},n}var En=u.b.div(yn()),kn=u.b.div(On(),(function(n){return 100*n.width})),Sn=function(n){var t=n.dimensions,e=t.width,a=(t.height,Object(R.useRecoilState)(D)),r=Object(l.a)(a,2),o=r[0],c=(r[1],.9*e),u=15+(1.3699*c-c)/2,s=.3018*u;return i.a.createElement(En,{style:{height:s,top:u-s-4,borderWidth:Math.max(Math.floor(.12*s),1)}},i.a.createElement(kn,{style:{borderRadius:.5*s},width:(window.gameConfig.main.gameDuration-o)/window.gameConfig.main.gameDuration}))};function zn(){var n=Object(c.a)(["\n    height: 100%;\n    width: ","%;\n    background: url('/rainbow.jpg');\n    transition: width 1s linear;\n    background-size: auto 100%;\n    border-radius: 20px;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(c.a)(["\n        &:before {\n        position: absolute;\n        content: '';\n        display: block;\n        width: ","px;\n        height: ","px;\n        background-image: url(cloud.png);\n        background-size: contain;\n        background-repeat: no-repeat;\n        top: -","px;\n        left: -","px;\n    }\n    \n    "]);return Cn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n    position: absolute;\n    border: 4px solid #fff;\n    border-radius: 15px;\n    width: 65%;\n    left: 17.5%;\n    bottom: 4%;\n    background: #105297;\n    box-shadow: 0 4px 15px #b992c7, 0 0 15px #b992c7;\n    ","\n"]);return Rn=function(){return n},n}var Tn=u.b.div(Rn(),(function(n){var t=n.height;return Object(u.a)(Cn(),3*t,3*t,t,t)})),Mn=u.b.div(zn(),(function(n){return 100*n.width})),Nn=function(n){var t=n.dimensions,e=t.width,a=(t.height,Object(R.useRecoilState)(G)),r=Object(l.a)(a,2),o=r[0],c=(r[1],.6*window.gameConfig.main.gameDuration*150),u=.9*e,s=1.3699*u,d=15+(s-u)/2,f=.15*d,b=s-(d-f)/2-15;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Tn,{height:f,style:{height:f,top:b,borderWidth:Math.max(Math.floor(.18*f),1)}},i.a.createElement(Mn,{style:{borderRadius:f/2},width:o/c})))};function Ln(){var n=Object(c.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: url('/end-bg.jpg');\n    background-position: center;\n    .content {\n        position: relative;\n        height: 100%;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        padding: 6vh 0 5vh;\n        box-sizing: border-box;\n    }\n    &:before {\n        display: block;\n        position: absolute;\n        content: '';\n       background-image: linear-gradient(180deg, rgba(0,0,0,.15) 0%, transparent 100%);\n        width: 100%;\n        height: 45%;\n        z-index: 0;\n        top: 0;\n        left: 0;\n    } \n    &:after {\n        display: block;\n        position: absolute;\n        content: '';\n        background-image: linear-gradient(0deg, rgba(0,0,0,.15) 0%, transparent 100%);\n        width: 100%;\n        height: 45%;\n        z-index: 0;\n        bottom: 0;\n        left: 0;\n    }\n"]);return Ln=function(){return n},n}var Dn=u.b.div(Ln());function Gn(){var n=Object(c.a)(["\n    position: absolute;\n    z-index: 50;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;   \n    .filler {\n        position: absolute;\n        animation: disappear 2s linear infinite;\n        &:nth-of-type(1) {\n            width: 100%;\n            height: 39.3vh;\n            top: 0;\n            left: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            &._full {\n                width: 100%;\n                height: 100%;\n                animation: none;\n                flex-direction: column;\n                background-color: rgba(0,0,0,.75);\n            }\n        } \n        &:nth-of-type(2) {\n            height: 28.7vh;\n            top: 39.3vh;\n            left: 0;\n        } \n        &:nth-of-type(3) {\n            height: 28.7vh;\n            top: 39.3vh;\n            right: 0;\n        } \n        &:nth-of-type(4) {\n            width: 100%;\n            height: 32vh;\n            bottom: 0;\n            left: 0;\n        }\n    }\n"]);return Gn=function(){return n},n}var An=u.b.div(Gn()),Fn=function(){var n=Object(R.useRecoilState)(L),t=Object(l.a)(n,2),e=t[0],r=t[1],o=Object(a.useState)(window.gameConfig.main.gameStartDelay),c=Object(l.a)(o,2),u=c[0],s=c[1],d=$();return Object(a.useEffect)((function(){d.start((function(){s((function(n){return n-1}))}),1e3)}),[]),Object(a.useEffect)((function(){0===u&&(d.stop(),r(!0))}),[u]),e?null:i.a.createElement(An,null,i.a.createElement("div",{className:"filler _full"},i.a.createElement(x.LG,null,window.gameConfig.main.tutorialSuccessText),i.a.createElement(x.LG,null,window.gameConfig.main.gameStartingText),i.a.createElement("br",null),i.a.createElement(x.LG,null,0===u?"Now":u)))};function In(){var n=Object(c.a)(["\n        width: ","px;\n        height: ","px;\n    "]);return In=function(){return n},n}function Vn(){var n=Object(c.a)(["\n    position: absolute;\n    z-index: 51;\n    top: ","px;\n    left: 47%;\n    animation: fingerPress 2s linear infinite;]\n    ","\n"]);return Vn=function(){return n},n}var Hn=u.b.img.attrs((function(){return{src:"/finger.png"}}))(Vn(),(function(n){return n.top}),(function(n){var t=n.size;return Object(u.a)(In(),t,t)})),Bn=function(n){var t=n.dimensions,e=t.width,a=t.height,r=.9*e,o=(r-15)/7,c=1.3699*r,u=(a-c)/2+(15+(c-r)/2)+2*o;return i.a.createElement(An,null,i.a.createElement("div",{className:"filler",style:{height:"".concat(u-2*o,"px")}},i.a.createElement(x.LG,null,window.gameConfig.main.tutorialText)),i.a.createElement(Hn,{size:2*o,top:u+3*o}))};function Wn(){var n=Object(c.a)(["\n    position: fixed;\n    bottom: calc(var(--vh, 1vh) * 2);\n    font-size: calc(var(--vh, 1vh) * ",");\n    color: #fff;\n    text-shadow: 0 0 12px rgba(0,0,0,1);\n    width: 100%;\n    text-align: center;\n    pointer-events: none;\n    z-index: 5000;\n"]);return Wn=function(){return n},n}var Xn=u.b.div(Wn(),(function(n){var t=n.n;return Math.min(3+t,9)})),Pn=function(){var n=Object(R.useRecoilValue)(I);return 0!==n?i.a.createElement(Xn,{n:n}," Combo x ",n+1):null};function Jn(){var n=Object(c.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ",";\n    opacity ",";\n    transition: opacity .3s ease-in;\n    ",";\n\n"]);return Jn=function(){return n},n}function _n(){var n=Object(c.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 50;\n"]);return _n=function(){return n},n}function Yn(){var n=Object(c.a)(["\n    display: flex;\n    min-width: 100%;\n    justify-content: space-between;\n    padding: 0 1rem;\n    box-sizing: border-box;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(c.a)(["\n    width: 30%;\n    position: relative;\n    &:before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        background-image: url('/emoji/",".svg');\n        background-size: 100% 100%;\n        background-position: center;\n        transition: opacity .5s ease-in;\n        opacity: 0;\n    }\n    &:after {\n        content: '';\n        font-size: 36px;\n        text-align: center;\n        color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding-bottom: calc(100% - 10px);\n        line-height: 100%;\n        background-color: #3a5f96;\n        border: 5px solid #fff;\n        border-radius: 100%;\n        transition: opacity .5s ease-in;\n        box-sizing: border-box;\n    }\n    .sc {\n        position: absolute;\n        font-size: 72px;\n        color: #fff;\n        left: 50%;\n        top: 50%;\n        z-index: 10;\n        transform: translate(-50%, -50%);\n    }\n    &:hover {\n        &:before { opacity: 1}\n        &:after { opacity: 0}\n        .sc {\n            display: none;\n        }\n    }\n"]);return qn=function(){return n},n}function Kn(){var n=Object(c.a)(["\n    background-image: url('/btn.png');\n    display: inline-block;\n    font-size: 36px;\n    padding: 1rem;\n    background-size: 100% 100%;\n    width: 50%;\n    color: #fff;\n    margin-top: 1rem;\n    animation: pulse 1.5s ease-in infinite;\n    cursor: pointer;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(c.a)(["\n    min-width: 100%;\n    padding: 0 4rem;\n    box-sizing: border-box;\n    margin-top: 6rem;\n"]);return Qn=function(){return n},n}var Un=u.b.div(Qn()),Zn=u.b.span(Kn()),$n=u.b.div(qn(),(function(n){return n.name})),nt=u.b.div(Yn()),tt=function(){return i.a.createElement(nt,null,i.a.createElement($n,{name:"elsa"},i.a.createElement("div",{className:"sc"},"?")),i.a.createElement($n,{name:"simba-dad"},i.a.createElement("div",{className:"sc"},"?")),i.a.createElement($n,{name:"mandelorian"},i.a.createElement("div",{className:"sc"},"?")))},et=u.b.div(_n()),at=u.b.div(Jn(),(function(n){return 10-n.ord}),(function(n){return n.current?1:0}),(function(n){return n.current?"":"pointer-events: none"})),it=function(){var n=Object(R.useRecoilState)(T),t=Object(l.a)(n,2),e=t[0],a=t[1],r=i.a.useRef(null),o=Object(w.a)(r),c=Object(l.a)(o,2),u=c[0],s=c[1],d=Object(R.useRecoilState)(M),f=Object(l.a)(d,2),b=f[0],g=(f[1],Object(R.useRecoilState)(N)),m=Object(l.a)(g,2),h=m[0],v=(m[1],Object(R.useRecoilState)(G)),j=Object(l.a)(v,2),O=j[0];j[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{ref:r},i.a.createElement(et,null,i.a.createElement(at,{ord:1,current:"loading"===e},i.a.createElement(X,null,i.a.createElement("div",{className:"content"},i.a.createElement(J,null),i.a.createElement(x.LG,{className:"mt-8"},window.gameConfig.main.loadingText),i.a.createElement(Un,null,i.a.createElement(p,{n:window.gameConfig.main.loadDuration,onEnd:function(){return a("game")}})),i.a.createElement("div",{style:{minWidth:"100%",position:"relative",flexGrow:1,maxHeight:"33vh"}},i.a.createElement(C,{n:0,name:"maik"}),i.a.createElement(C,{n:1,name:"simba"}),i.a.createElement(C,{n:2,name:"mickey"}),i.a.createElement(C,{n:3,name:"sima"}),i.a.createElement(C,{n:4,name:"randall"}))))),i.a.createElement(at,{ord:2,current:"game"===e},"game"===e?i.a.createElement(Y,null,i.a.createElement("div",{className:"content"},i.a.createElement(hn,{w:.9*u}),i.a.createElement(vn,null,i.a.createElement("div",{className:"content"},i.a.createElement(wn,{dimensions:{width:u,height:s}}),i.a.createElement(Sn,{dimensions:{width:u,height:s}}),i.a.createElement(Nn,{dimensions:{width:u,height:s}}))),i.a.createElement(Pn,null))):null),i.a.createElement(at,{ord:3,current:"end"===e},i.a.createElement(Dn,null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"flex flex-col items-center text-center"},i.a.createElement(x.XL,{className:"my-4"},window.gameConfig.main.successTitle),i.a.createElement(x.LG,null,"Your score: ",O),i.a.createElement(x.LG,{className:"my-4"},window.gameConfig.main.successSubtitle)),i.a.createElement(tt,null),i.a.createElement("div",{className:"flex flex-col items-center text-center"},i.a.createElement(x.LG,{className:"my-4"},window.gameConfig.main.successCta),i.a.createElement(Zn,null,window.gameConfig.main.successCtaButton)))))),"game"===e&&b?i.a.createElement(Bn,{dimensions:{width:u,height:s}}):null,h?i.a.createElement(Fn,null):null))};function rt(){var n=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  @media (max-width: 1281px) and (orientation: landscape) {\n    width: calc(var(--vh, 1vh) * 100);\n    height: 100vw;\n  }\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n"]);return rt=function(){return n},n}var ot=u.b.div(rt());var ct=function(){return Object(a.useEffect)((function(){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px"))}),[]),i.a.createElement(R.RecoilRoot,null,i.a.createElement(ot,null,i.a.createElement(it,null)))};o.a.render(i.a.createElement(ct,null),document.getElementById("root"))},56:function(n,t,e){n.exports=e(132)},60:function(n,t,e){}},[[56,1,2]]]);