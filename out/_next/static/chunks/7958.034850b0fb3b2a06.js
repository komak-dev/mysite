"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7958],{7958:function(e,t,n){function r(e,t,n){return t(n),n(e,t)}n.r(t),n.d(t,{elm:function(){return g}});var i=/[a-z]/,a=/[A-Z]/,o=/[a-zA-Z0-9_]/,u=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,l=/[(),[\]{}]/,c=/[ \v\f]/;function k(){return function(e,t){if(e.eatWhile(c))return null;var n=e.next();if(l.test(n))return"{"===n&&e.eat("-")?r(e,t,function e(t){return 0==t?k():function(n,r){for(;!n.eol();){var i=n.next();if("{"==i&&n.eat("-"))++t;else if("-"==i&&n.eat("}")&&0==--t)return r(k()),"comment"}return r(e(t)),"comment"}}(1)):"["===n&&e.match("glsl|")?r(e,t,x):"builtin";if("'"===n)return r(e,t,h);if('"'===n)return e.eat('"')?e.eat('"')?r(e,t,p):"string":r(e,t,m);if(a.test(n))return e.eatWhile(o),"type";if(i.test(n)){var d=1===e.pos;return e.eatWhile(o),d?"def":"variable"}if(u.test(n)){if("0"===n){if(e.eat(/[xX]/))return e.eatWhile(f),"number"}else e.eatWhile(u);return e.eat(".")&&e.eatWhile(u),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(u)),"number"}return s.test(n)?"-"===n&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===n?"keyword":"error"}}function p(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"')){t(k());break}return"string"}function m(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(k()),"string"):(e.skipToEnd(),t(k()),"error")}function h(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(k()),"string"):(e.skipToEnd(),t(k()),"error")}function x(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]")){t(k());break}return"string"}var d={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};let g={name:"elm",startState:function(){return{f:k()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,function(e){t.f=e}),r=e.current();return d.hasOwnProperty(r)?"keyword":n},languageData:{commentTokens:{line:"--"}}}}}]);