"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5824],{5824:function(e,t,n){n.r(t),n.d(t,{solr:function(){return a}});var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,o=/[\|\!\+\-\*\?\~\^\&]/,u=/^(OR|AND|NOT|TO)$/;function i(e,t){var n,a=e.next();return'"'==a?t.tokenize=function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=a||r);)r=!r&&"\\"==n;return r||(t.tokenize=i),"string"}:o.test(a)?t.tokenize=function(e,t){return"|"==a?e.eat(/\|/):"&"==a&&e.eat(/\&/),t.tokenize=i,"operator"}:r.test(a)&&(t.tokenize=(n=a,function(e,t){for(var o,a=n;(n=e.peek())&&null!=n.match(r);)a+=e.next();return(t.tokenize=i,u.test(a))?"operator":parseFloat(o=a).toString()===o?"number":":"==e.peek()?"propertyName":"string"})),t.tokenize!=i?t.tokenize(e,t):null}let a={name:"solr",startState:function(){return{tokenize:i}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);