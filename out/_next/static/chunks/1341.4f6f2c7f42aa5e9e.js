"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1341],{1341:function(_,I,R){R.r(I),R.d(I,{ntriples:function(){return e}});var n={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function t(_,I){var R,t=_.location;R=t==n.PRE_SUBJECT&&"<"==I?n.WRITING_SUB_URI:t==n.PRE_SUBJECT&&"_"==I?n.WRITING_BNODE_URI:t==n.PRE_PRED&&"<"==I?n.WRITING_PRED_URI:t==n.PRE_OBJ&&"<"==I?n.WRITING_OBJ_URI:t==n.PRE_OBJ&&"_"==I?n.WRITING_OBJ_BNODE:t==n.PRE_OBJ&&'"'==I?n.WRITING_OBJ_LITERAL:t==n.WRITING_SUB_URI&&">"==I?n.PRE_PRED:t==n.WRITING_BNODE_URI&&" "==I?n.PRE_PRED:t==n.WRITING_PRED_URI&&">"==I?n.PRE_OBJ:t==n.WRITING_OBJ_URI&&">"==I?n.POST_OBJ:t==n.WRITING_OBJ_BNODE&&" "==I?n.POST_OBJ:t==n.WRITING_OBJ_LITERAL&&'"'==I?n.POST_OBJ:t==n.WRITING_LIT_LANG&&" "==I?n.POST_OBJ:t==n.WRITING_LIT_TYPE&&">"==I?n.POST_OBJ:t==n.WRITING_OBJ_LITERAL&&"@"==I?n.WRITING_LIT_LANG:t==n.WRITING_OBJ_LITERAL&&"^"==I?n.WRITING_LIT_TYPE:" "==I&&(t==n.PRE_SUBJECT||t==n.PRE_PRED||t==n.PRE_OBJ||t==n.POST_OBJ)?t:t==n.POST_OBJ&&"."==I?n.PRE_SUBJECT:n.ERROR,_.location=R}let e={name:"ntriples",startState:function(){return{location:n.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(_,I){var R=_.next();if("<"==R){t(I,R);var n="";return _.eatWhile(function(_){return"#"!=_&&">"!=_&&(n+=_,!0)}),I.uris.push(n),_.match("#",!1)||(_.next(),t(I,">")),"variable"}if("#"==R){var e="";return _.eatWhile(function(_){return">"!=_&&" "!=_&&(e+=_,!0)}),I.anchors.push(e),"url"}if(">"==R)return t(I,">"),"variable";if("_"==R){t(I,R);var T="";return _.eatWhile(function(_){return" "!=_&&(T+=_,!0)}),I.bnodes.push(T),_.next(),t(I," "),"builtin"}if('"'==R)return t(I,R),_.eatWhile(function(_){return'"'!=_}),_.next(),"@"!=_.peek()&&"^"!=_.peek()&&t(I,'"'),"string";if("@"==R){t(I,"@");var r="";return _.eatWhile(function(_){return" "!=_&&(r+=_,!0)}),I.langs.push(r),_.next(),t(I," "),"string.special"}if("^"==R){_.next(),t(I,"^");var E="";return _.eatWhile(function(_){return">"!=_&&(E+=_,!0)}),I.types.push(E),_.next(),t(I,">"),"variable"}" "==R&&t(I,R),"."==R&&t(I,R)}}}}]);