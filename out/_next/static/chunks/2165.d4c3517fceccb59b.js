"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2165],{2165:function(e,t,n){n.r(t),n.d(t,{shell:function(){return c}});var r={};function s(e,t){for(var n=0;n<t.length;n++)r[t[n]]=e}var i=["true","false"],o=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],u=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function a(e,t){var n="("==e?")":"{"==e?"}":e;return function(r,s){for(var i,o=!1;null!=(i=r.next());){if(i!==n||o){if("$"!==i||o||"'"===e||r.peek()==n){if(!o&&e!==n&&i===e)return s.tokens.unshift(a(e,t)),l(r,s);if(!o&&/['"]/.test(i)&&!/['"]/.test(e)){s.tokens.unshift(function(e,t){return function(n,r){return r.tokens[0]=a(e,t),n.next(),l(n,r)}}(i,"string")),r.backUp(1);break}}else{o=!0,r.backUp(1),s.tokens.unshift(f);break}}else{s.tokens.shift();break}o=!o&&"\\"===i}return t}}s("atom",i),s("keyword",o),s("builtin",u);var f=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=a(n,"("==n?"quote":"{"==n?"def":"string"),l(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};function l(e,t){return(t.tokens[0]||function(e,t){if(e.eatSpace())return null;var n=e.sol(),s=e.next();if("\\"===s)return e.next(),null;if("'"===s||'"'===s||"`"===s)return t.tokens.unshift(a(s,"`"===s?"quote":"string")),l(e,t);if("#"===s)return n&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if("$"===s)return t.tokens.unshift(f),l(e,t);if("+"===s||"="===s)return"operator";if("-"===s)return e.eat("-"),e.eatWhile(/\w/),"attribute";if("<"==s){if(e.match("<<"))return"operator";var i,o=e.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);if(o)return t.tokens.unshift((i=o[1]||o[2],function(e,t){return e.sol()&&e.string==i&&t.tokens.shift(),e.skipToEnd(),"string.special"})),"string.special"}if(/\d/.test(s)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var u=e.current();return"="===e.peek()&&/\w+/.test(u)?"def":r.hasOwnProperty(u)?r[u]:null})(e,t)}let c={name:"shell",startState:function(){return{tokens:[]}},token:function(e,t){return l(e,t)},languageData:{autocomplete:i.concat(o,u),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}}}}]);