(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3KKX":function(e,t,n){"use strict";n.r(t);var c=n("RG8h"),s=n("HIGM"),l=n("hosL"),u=n("QRet"),a=n("Hrl7");const b=e=>{const t=Object(l.createRef)(),[n,c]=Object(u.k)(e.code);return Object(l.h)("div",{ref:t},Object(l.h)("textarea",{class:"alert alert-dark w-100",onInput:()=>{c(n);const t=e.parseSequence(n);e.setSequence(t)}},n))};t.default=()=>{const e=Object(l.createRef)(),[t,n]=Object(u.k)(new s.BeepSequence([])),[o,h]=Object(u.k)("Loading...");return Object(l.h)("section",{class:"container py-5",ref:e},Object(l.h)(a.a,null,Object(l.h)("title",null,"Beep Editor")),Object(l.h)("h1",null,"Beep Editor"),Object(l.h)("h2",null,"GRUB Init Tune"),Object(l.h)(b,{code:t.toGRUBInitTune(),parseSequence:c.parseGRUBInitTune,setSequence:n,setStatus:h}),Object(l.h)("h2",null,"Beep Command"),Object(l.h)(b,{code:t.toBeepCommand(),parseSequence:c.parseBeepCommand,setSequence:n,setStatus:h}),Object(l.h)("button",{type:"button",class:"btn btn-success float-end"},"Play"),Object(l.h)("h2",null,"Status"),Object(l.h)("p",null,o),Object(l.h)("h2",null,"Metrics"),Object(l.h)("ul",null,Object(l.h)("li",null,"Beeps: ",t.beeps.length),Object(l.h)("li",null,"Play time: ",t.lengthInSeconds()," seconds")))}}}]);
//# sourceMappingURL=route-editor.chunk.b1777.esm.js.map