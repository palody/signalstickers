(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{"./.linaria-cache/src/components/pack/Sticker.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Tag.linaria.css":function(e,t,a){},"./src/components/pack/Sticker.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),c=a.n(n),s=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),o=a.n(s),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/linaria/react.js"),k=a("./node_modules/use-async-effect/index.js"),p=a.n(k),f=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=Object(m.styled)("div")({name:"Sticker",class:"sahlm9h"}),v=function(e){var t=e.packId,a=e.packKey,r=e.stickerId,n=Object(d.useState)(""),s=i()(n,2),l=s[0],m=s[1],k=Object(d.useState)(""),b=i()(k,2),v=b[0],y=b[1];return p()(o()(c.a.mark((function e(){var n,s,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(f.c)(t,a,r),Object(f.b)(t,a,r)]);case 2:n=e.sent,s=i()(n,2),o=s[0],l=s[1],m(o),y(l);case 8:case"end":return e.stop()}}),e)}))),[]),l&&v?u.a.createElement(g,{className:"shadow-sm m-3 p-4"},u.a.createElement("div",{className:"emoji"},l),u.a.createElement("img",{src:v,alt:"Sticker"})):null};b(v,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",(function(){return[p.a]}));var y,h,E=v;t.a=E,a("./.linaria-cache/src/components/pack/Sticker.linaria.css"),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),y.register(v,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),y.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackDetail.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),c=a.n(n),s=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),o=a.n(s),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/react-router/esm/react-router.js"),k=a("./node_modules/react-router-dom/esm/react-router-dom.js"),p=a("./node_modules/react-linkify/dist/index.js"),f=a.n(p),b=a("./node_modules/linaria/react.js"),g=a("./node_modules/react-octicon/lib/index.js"),v=a.n(g),y=a("./node_modules/use-async-effect/index.js"),h=a.n(y),E=a("./src/hooks/use-query.ts"),x=a("./src/lib/stickers.ts"),S=a("./src/components/pack/Sticker.tsx"),L=a("./src/components/pack/StickerPackError.tsx"),j=a("./src/components/pack/Tag.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},G=Object(b.styled)("div")({name:"StickerPackDetail",class:"s11r72gg"});function w(e,t,a){return u.a.createElement("a",{href:e,key:a,target:"_blank",rel:"noreferrer"},t)}var _=function(){var e=Object(m.g)().packId,t=Object(E.a)().get("key")||void 0,a=Object(d.useState)(),r=i()(a,2),n=r[0],s=r[1],l=Object(d.useState)(""),p=i()(l,2),b=p[0],g=p[1];if(h()(o()(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=3;break}return a.abrupt("return");case 3:return a.t0=s,a.next=6,Object(x.d)(e,t);case 6:a.t1=a.sent,(0,a.t0)(a.t1),a.next=13;break;case 10:a.prev=10,a.t2=a.catch(0),a.t2.code&&g(a.t2.code);case 13:case"end":return a.stop()}}),a,null,[[0,10]])}))),[]),!e||!n){if(b)switch(b){case"NO_KEY_PROVIDED":return u.a.createElement(L.a,null,u.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",u.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",u.a.createElement("code",null,"key")," parameter in the URL."),u.a.createElement("p",null,"For example: ",u.a.createElement("code",null,"/pack/".concat(e,"?key=sticker-pack-key"))));case"MANIFEST_DECRYPT":return u.a.createElement(L.a,null,u.a.createElement("p",null,"The provided key is invalid."));default:return u.a.createElement(L.a,null,u.a.createElement("p",null,"An unknown error occurred (",b,")."))}return null}var y=n.meta.source||"N/A",H=n.manifest.stickers.length,_=n.manifest.author.trim()?n.manifest.author:"Anonymous",N=n.meta.tags||[],P="https://signal.art/addstickers/#pack_id=".concat(e,"&pack_key=").concat(n.meta.key);return u.a.createElement(G,{className:"px-1 px-sm-4 py-4 mt-0 mt-sm-5 mb-5"},u.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},u.a.createElement("div",{className:"col-12 col-lg-8 mt-4 mt-lg-0"},u.a.createElement("div",{className:"title"},n.manifest.title),u.a.createElement("div",{className:"author"},_)),u.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right"},n.meta?u.a.createElement(k.b,{to:"/"},u.a.createElement("button",{type:"button",className:"btn btn-link mr-2"},"Home")):null,u.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer",title:"Add to Signal"},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement(v.a,{name:"plus"})," Add to Signal")))),n.meta?u.a.createElement("div",{className:"row mb-4"},u.a.createElement("div",{className:"col-12 col-lg-6"},u.a.createElement("ul",{className:"list-group"},u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(v.a,{name:"globe",title:"Source"}),u.a.createElement("div",null,u.a.createElement(f.a,{componentDecorator:w},y))),u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(v.a,{name:"file-directory",title:"Sticker Count"}),H),n.meta.nsfw?u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(v.a,{name:"alert",title:"NSFW"})," ",u.a.createElement("strong",null,"NSFW")):null,u.a.createElement("li",{className:"list-group-item"},u.a.createElement(v.a,{name:"tag",title:"Tags"}),u.a.createElement("div",{className:"text-wrap text-break"},0===N.length?"None":N.map((function(e){return u.a.createElement(j.a,{key:e},e)}))))))):null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},n.manifest.stickers.map((function(t){return u.a.createElement(S.a,{packId:e,packKey:n.meta.key,stickerId:t.id,key:t.id})}))))))};H(_,"useParams{{\n    packId\n  }}\nuseQuery{}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseAsyncEffect{}",(function(){return[m.g,E.a,h.a]}));var N,P,T=_;t.default=T,a("./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css"),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(G,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),N.register(w,"LinkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),N.register(_,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),N.register(T,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&P(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackError.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),c=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,o,l=function(e){return c.a.createElement("div",{className:"p-4 my-4"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},c.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children)))},i=l;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(l,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),s.register(i,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Tag.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),c=a.n(n),s=a("./node_modules/linaria/react.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,l,i=Object(s.styled)("span")({name:"Tag",class:"t1fwmllz"}),d=function(e){return c.a.createElement(i,null,e.children)},u=d;t.a=u,a("./.linaria-cache/src/components/pack/Tag.linaria.css"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(i,"Tag","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),o.register(d,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),o.register(u,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return o}));var r,n,c,s=a("./node_modules/react-router/esm/react-router.js");function o(){return new URLSearchParams(Object(s.f)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(o,"useLocation{}",(function(){return[s.f]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(o,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=155-f4e5ed7cd2d39e6fd111.js.map