"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3447],{3447:function(e,n,t){t.r(n),t.d(n,{mbox:function(){return p}});var r=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],a=["Date","Subject","Comments","Keywords","Resent-Date"],i=/^[ \t]/,o=/^From /,d=RegExp("^("+r.join("|")+"): "),s=RegExp("^("+a.join("|")+"): "),c=/^[^:]+:/,m=/^[^ ]+@[^ ]+/,u=/^.*?(?=[^ ]+?@[^ ]+)/,l=/^<.*?>/,h=/^.*?(?=<.*>)/;let p={name:"mbox",startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:function(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(i))return null;if(n.inHeader=!1,n.header=null,e.match(o))return n.inHeaders=!0,n.inSeparator=!0,"atom";var t,r=!1;return(t=e.match(s))||(r=!0,t=e.match(d))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=r,n.header=t[1],"atom"):n.inHeaders&&(t=e.match(c))?(n.inHeader=!0,n.emailPermitted=!0,n.header=t[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(m)?"link":(e.match(u)||e.skipToEnd(),"atom");if(n.inHeader){var a="Subject"===n.header?"header":"string";if(n.emailPermitted){if(e.match(l))return a+" link";if(e.match(h))return a}return e.skipToEnd(),a}return e.skipToEnd(),null},blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:r.concat(a)}}}}]);