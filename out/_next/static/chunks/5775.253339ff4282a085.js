"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5775],{5775:function(t,e,n){function r(t){return RegExp("^(?:"+t.join("|")+")$","i")}n.r(e),n.d(e,{sparql:function(){return F}});var u,a=r(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),o=r(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load","into"]),i=/[*+\-<>=&|\^\/!\?]/,c="[A-Za-z_\\-0-9]",s=/[A-Za-z]/,l=RegExp("(("+c+"|\\.)*("+c+"))?:");function f(t,e){var n=t.next();if(u=null,"$"==n||"?"==n)return"?"==n&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variableName.local");if("<"==n&&!t.match(/^[\s\u00a0=]/,!1))return t.match(/^[^\s\u00a0>]*>?/),"atom";if('"'==n||"'"==n)return e.tokenize=function(t,e){for(var r,u=!1;null!=(r=t.next());){if(r==n&&!u){e.tokenize=f;break}u=!u&&"\\"==r}return"string"},e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(n))return u=n,"bracket";if("#"==n)return t.skipToEnd(),"comment";if(i.test(n))return"operator";if(":"==n)return d(t),"atom";else if("@"==n)return t.eatWhile(/[a-z\d\-]/i),"meta";else if(s.test(n)&&t.match(l))return d(t),"atom";t.eatWhile(/[_\w\d]/);var r=t.current();return a.test(r)?"builtin":o.test(r)?"keyword":"variable"}function d(t){t.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function p(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function m(t){t.indent=t.context.indent,t.context=t.context.prev}let F={name:"sparql",startState:function(){return{tokenize:f,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==u)p(e,")",t.column());else if("["==u)p(e,"]",t.column());else if("{"==u)p(e,"}",t.column());else if(/[\]\}\)]/.test(u)){for(;e.context&&"pattern"==e.context.type;)m(e);e.context&&u==e.context.type&&(m(e),"}"==u&&e.context&&"pattern"==e.context.type&&m(e))}else"."==u&&e.context&&"pattern"==e.context.type?m(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?p(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var r=e&&e.charAt(0),u=t.context;if(/[\]\}]/.test(r))for(;u&&"pattern"==u.type;)u=u.prev;var a=u&&r==u.type;return u?"pattern"==u.type?u.col:u.align?u.col+(a?0:1):u.indent+(a?0:n.unit):0},languageData:{commentTokens:{line:"#"}}}}}]);