(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,o){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=o(1),i=o(7),d=i.get,h=(i.deepValue,i.isArray),s=function(){function e(t,o){var a=o.location,n=void 0===a?0:a,r=o.distance,i=void 0===r?100:r,h=o.threshold,s=void 0===h?.6:h,l=o.maxPatternLength,c=void 0===l?32:l,u=o.caseSensitive,p=void 0!==u&&u,f=o.tokenSeparator,v=void 0===f?/ +/g:f,g=o.findAllMatches,b=void 0!==g&&g,m=o.minMatchCharLength,y=void 0===m?1:m,w=o.id,k=void 0===w?null:w,S=o.keys,x=void 0===S?[]:S,M=o.shouldSort,C=void 0===M||M,T=o.getFn,_=void 0===T?d:T,A=o.sortFn,O=void 0===A?function(e,t){return e.score-t.score}:A,I=o.tokenize,D=void 0!==I&&I,W=o.matchAllTokens,j=void 0!==W&&W,z=o.includeMatches,H=void 0!==z&&z,F=o.includeScore,L=void 0!==F&&F,P=o.verbose,E=void 0!==P&&P;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:i,threshold:s,maxPatternLength:c,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,minMatchCharLength:y,id:k,keys:x,includeMatches:H,includeScore:L,shouldSort:C,getFn:_,sortFn:O,verbose:E,tokenize:D,matchAllTokens:j},this.setCollection(t),this._processKeys(x)}var t,o;return t=e,(o=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,o=e.length;t<o;t+=1){var a=e[t];this._keyWeights[a]=1,this._keyNames.push(a)}else{for(var n=null,r=null,i=0,d=0,h=e.length;d<h;d+=1){var s=e[d];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=s.name;if(this._keyNames.push(l),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var c=s.weight;if(c<0||c>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?c:Math.max(r,c),n=null==n?c:Math.min(n,c),this._keyWeights[l]=c,i+=c}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var o=this._prepareSearchers(e),a=o.tokenSearchers,n=o.fullSearcher,r=this._search(a,n);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var o=e.split(this.options.tokenSeparator),a=0,n=o.length;a<n;a+=1)t.push(new r(o[a],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,o=this.list,a={},n=[];if("string"==typeof o[0]){for(var r=0,i=o.length;r<i;r+=1)this._analyze({key:"",value:o[r],record:r,index:r},{resultMap:a,results:n,tokenSearchers:e,fullSearcher:t});return n}for(var d=0,h=o.length;d<h;d+=1)for(var s=o[d],l=0,c=this._keyNames.length;l<c;l+=1){var u=this._keyNames[l];this._analyze({key:u,value:this.options.getFn(s,u),record:s,index:d},{resultMap:a,results:n,tokenSearchers:e,fullSearcher:t})}return n}},{key:"_analyze",value:function(e,t){var o=this,a=e.key,n=e.arrayIndex,r=void 0===n?-1:n,i=e.value,d=e.record,s=e.index,l=t.tokenSearchers,c=void 0===l?[]:l,u=t.fullSearcher,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;!function e(t,n,r,i){if(null!=n)if("string"==typeof n){var d=!1,s=-1,l=0;o._log("\nKey: ".concat(""===a?"--":a));var p=u.search(n);if(o._log('Full text: "'.concat(n,'", score: ').concat(p.score)),o.options.tokenize){for(var v=n.split(o.options.tokenSeparator),b=v.length,m=[],y=0,w=c.length;y<w;y+=1){var k=c[y];o._log('\nPattern: "'.concat(k.pattern,'"'));for(var S=!1,x=0;x<b;x+=1){var M=v[x],C=k.search(M),T={};C.isMatch?(T[M]=C.score,d=!0,S=!0,m.push(C.score)):(T[M]=1,o.options.matchAllTokens||m.push(1)),o._log('Token: "'.concat(M,'", score: ').concat(T[M]))}S&&(l+=1)}s=m[0];for(var _=m.length,A=1;A<_;A+=1)s+=m[A];s/=_,o._log("Token score average:",s)}var O=p.score;s>-1&&(O=(O+s)/2),o._log("Score average:",O);var I=!o.options.tokenize||!o.options.matchAllTokens||l>=c.length;if(o._log("\nCheck Matches: ".concat(I)),(d||p.isMatch)&&I){var D={key:a,arrayIndex:t,value:n,score:O};o.options.includeMatches&&(D.matchedIndices=p.matchedIndices);var W=f[i];W?W.output.push(D):(f[i]={item:r,output:[D]},g.push(f[i]))}}else if(h(n))for(var j=0,z=n.length;j<z;j+=1)e(j,n[j],r,i)}(r,i,d,s)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,o=!!Object.keys(t).length,a=0,n=e.length;a<n;a+=1){for(var r=e[a],i=r.output,d=i.length,h=1,s=0;s<d;s+=1){var l=i[s],c=l.key,u=o?t[c]:1,p=0===l.score&&t&&t[c]>0?Number.EPSILON:l.score;h*=Math.pow(p,u)}r.score=h,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var o=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==o.indexOf(t))return;o.push(t)}return t}),2)),o=null}var n=[];this.options.includeMatches&&n.push((function(e,t){var o=e.output;t.matches=[];for(var a=0,n=o.length;a<n;a+=1){var r=o[a];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&n.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var d=e[r];if(this.options.id&&(d.item=this.options.getFn(d.item,this.options.id)[0]),n.length){for(var h={item:d.item},s=0,l=n.length;s<l;s+=1)n[s](d,h);t.push(h)}else t.push(d.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&n(t.prototype,o),e}();e.exports=s},function(e,t,o){function a(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=o(2),r=o(3),i=o(6),d=function(){function e(t,o){var a=o.location,n=void 0===a?0:a,r=o.distance,d=void 0===r?100:r,h=o.threshold,s=void 0===h?.6:h,l=o.maxPatternLength,c=void 0===l?32:l,u=o.isCaseSensitive,p=void 0!==u&&u,f=o.tokenSeparator,v=void 0===f?/ +/g:f,g=o.findAllMatches,b=void 0!==g&&g,m=o.minMatchCharLength,y=void 0===m?1:m,w=o.includeMatches,k=void 0!==w&&w;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:d,threshold:s,maxPatternLength:c,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,includeMatches:k,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=c&&(this.patternAlphabet=i(this.pattern))}var t,o;return t=e,(o=[{key:"search",value:function(e){var t=this.options,o=t.isCaseSensitive,a=t.includeMatches;if(o||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return a&&(i.matchedIndices=[[0,e.length-1]]),i}var d=this.options,h=d.maxPatternLength,s=d.tokenSeparator;if(this.pattern.length>h)return n(e,this.pattern,s);var l=this.options,c=l.location,u=l.distance,p=l.threshold,f=l.findAllMatches,v=l.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:c,distance:u,threshold:p,findAllMatches:f,minMatchCharLength:v,includeMatches:a})}}])&&a(t.prototype,o),e}();e.exports=d},function(e,t){var o=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(o,"\\$&").replace(a,"|")),r=e.match(n),i=!!r,d=[];if(i)for(var h=0,s=r.length;h<s;h+=1){var l=r[h];d.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:d}}},function(e,t,o){var a=o(4),n=o(5);e.exports=function(e,t,o,r){for(var i=r.location,d=void 0===i?0:i,h=r.distance,s=void 0===h?100:h,l=r.threshold,c=void 0===l?.6:l,u=r.findAllMatches,p=void 0!==u&&u,f=r.minMatchCharLength,v=void 0===f?1:f,g=r.includeMatches,b=void 0!==g&&g,m=d,y=e.length,w=c,k=e.indexOf(t,m),S=t.length,x=[],M=0;M<y;M+=1)x[M]=0;if(-1!==k){var C=a(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});if(w=Math.min(C,w),-1!==(k=e.lastIndexOf(t,m+S))){var T=a(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});w=Math.min(T,w)}}k=-1;for(var _=[],A=1,O=S+y,I=1<<(S<=31?S-1:30),D=0;D<S;D+=1){for(var W=0,j=O;W<j;)a(t,{errors:D,currentLocation:m+j,expectedLocation:m,distance:s})<=w?W=j:O=j,j=Math.floor((O-W)/2+W);O=j;var z=Math.max(1,m-j+1),H=p?y:Math.min(m+j,y)+S,F=Array(H+2);F[H+1]=(1<<D)-1;for(var L=H;L>=z;L-=1){var P=L-1,E=o[e.charAt(P)];if(E&&(x[P]=1),F[L]=(F[L+1]<<1|1)&E,0!==D&&(F[L]|=(_[L+1]|_[L])<<1|1|_[L+1]),F[L]&I&&(A=a(t,{errors:D,currentLocation:P,expectedLocation:m,distance:s}))<=w){if(w=A,(k=P)<=m)break;z=Math.max(1,2*m-k)}}if(a(t,{errors:D+1,currentLocation:m,expectedLocation:m,distance:s})>w)break;_=F}var N={isMatch:k>=0,score:0===A?.001:A};return b&&(N.matchedIndices=n(x,v)),N}},function(e,t){e.exports=function(e,t){var o=t.errors,a=void 0===o?0:o,n=t.currentLocation,r=void 0===n?0:n,i=t.expectedLocation,d=void 0===i?0:i,h=t.distance,s=void 0===h?100:h,l=a/e.length,c=Math.abs(d-r);return s?l+c/s:c?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=[],a=-1,n=-1,r=0,i=e.length;r<i;r+=1){var d=e[r];d&&-1===a?a=r:d||-1===a||((n=r-1)-a+1>=t&&o.push([a,n]),a=-1)}return e[r-1]&&r-a>=t&&o.push([a,r-1]),o}},function(e,t){e.exports=function(e){for(var t={},o=e.length,a=0;a<o;a+=1)t[e.charAt(a)]=0;for(var n=0;n<o;n+=1)t[e.charAt(n)]|=1<<o-n-1;return t}},function(e,t){var o=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},a=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},n=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,d){if(d){var h=d.indexOf("."),s=d,l=null;-1!==h&&(s=d.slice(0,h),l=d.slice(h+1));var c=t[s];if(null!=c)if(l||!n(c)&&!r(c))if(o(c))for(var u=0,p=c.length;u<p;u+=1)e(c[u],l);else l&&e(c,l);else i.push(a(c))}else i.push(t)}(e,t),i},isArray:o,isString:n,isNum:r,toString:a}}])},GKVU:function(e,t,o){"use strict";var a=o("I+eb"),n=o("hXpO");a({target:"String",proto:!0,forced:o("rwPt")("anchor")},{anchor:function(e){return n(this,"a","name",e)}})},wQbG:function(e,t,o){"use strict";o.r(t);o("QWBl"),o("2B1R"),o("+2oP"),o("rB9j"),o("hByQ"),o("GKVU"),o("FZtP");var a=o("VTBJ"),n=o("/+cc"),r=o.n(n),i=o("CjXH"),d={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(o){e.push(Object(a.a)(Object(a.a)({},o),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},h=o("KHd+"),s=o("Kw5r"),l=s.a.config.optionMergeStrategies.computed,c={allMarkdownPage:{edges:[{node:{id:"ffc73ec625b7dc839df8ba0a0ad83eea",path:"/docs/zeroci/img/readme/",title:"",headings:[]}},{node:{id:"9f5324fef2420ad6fba5c3f41c9601c0",path:"/docs/wiki-publisher/img/readme/",title:"",headings:[]}},{node:{id:"c337a9ec045e10973cb5562d7ef4248e",path:"/docs/virtual-spaces/img/readme/",title:"",headings:[]}},{node:{id:"31bbae45d4bd15b9459d4d31864464cd",path:"/docs/video-sharing/img/readme/",title:"",headings:[]}},{node:{id:"88ff8e8b12269f44b557e9e5ead0c050",path:"/docs/video-conf/img/readme/",title:"",headings:[]}},{node:{id:"37f5bf02284941e29a91dbd845f3085d",path:"/docs/tomochain/img/readme/",title:"",headings:[]}},{node:{id:"30ecda009e1e5fbc8834ff3a2d2ad72f",path:"/docs/tfgrid/img/readme/",title:"",headings:[]}},{node:{id:"35119380ad86153e9676367e7f0baa01",path:"/docs/serverless/img/readme/",title:"",headings:[]}},{node:{id:"82a02f186b83895dbae12f29eabc922d",path:"/docs/publishing-tool/img/readme/",title:"",headings:[]}},{node:{id:"f23e4fe26e68024afc26956a814bb34f",path:"/docs/index/img/readme/",title:"",headings:[]}},{node:{id:"9f96b199d07a8c10bf8aeb68f103506e",path:"/docs/harmony/img/readme/",title:"",headings:[]}},{node:{id:"1970b306a481a1088077c6c3b0d1ba70",path:"/docs/gridsome/img/readme/",title:"",headings:[]}},{node:{id:"4f7cc9c8659717f39e5d7bf95edac043",path:"/docs/gitea/img/readme/",title:"",headings:[]}},{node:{id:"01dbe3967310f6ed05652e8d93139116",path:"/docs/dmcustomers/img/readme/",title:"",headings:[]}},{node:{id:"a6ab280727a86e102f27f1d8f332bac9",path:"/docs/dmcollab/img/readme/",title:"",headings:[]}},{node:{id:"776ba9e54c45a751c7d3022ca2904b89",path:"/docs/dmcircles/img/readme/",title:"",headings:[]}},{node:{id:"993a9ab882d70c0cce70ce79d0439d77",path:"/docs/digitalme/img/readme/",title:"",headings:[]}},{node:{id:"19dbd6e6b7705668f94f13d782b6f984",path:"/docs/decentralized-office-intro/img/readme/",title:"",headings:[]}},{node:{id:"efb1d193a8442420790ed00729c68c3b",path:"/docs/digibyte/img/readme/",title:"",headings:[]}},{node:{id:"9fff3bfabf2015fbb1da1d6755a97857",path:"/docs/dash/img/readme/",title:"",headings:[]}},{node:{id:"08193b648915a4e0b7b54c3c01e4fb8f",path:"/docs/crystaltwin/img/readme/",title:"",headings:[]}},{node:{id:"a453efabaa19c1d3137f1d10823477c2",path:"/docs/commento/img/readme/",title:"",headings:[]}},{node:{id:"181de75bffb8a49ec0661eb296de04dc",path:"/docs/blog-publisher/img/readme/",title:"",headings:[]}},{node:{id:"b5928a0e261f26575203fb432484bc05",path:"/docs/zeroci/",title:"Continuous Integration Tool",headings:[{depth:1,value:"Continuous Integration Tool",anchor:"#continuous-integration-tool"},{depth:2,value:"What is ZeroCI?",anchor:"#what-is-zeroci"},{depth:2,value:"Why use ZeroCI?",anchor:"#why-use-zeroci"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"453ae698914fa78c86a3068f69c114ab",path:"/docs/wiki-publisher/",title:"Wiki Publisher",headings:[{depth:1,value:"Wiki Publisher",anchor:"#wiki-publisher"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"What do you need to do?",anchor:"#what-do-you-need-to-do"}]}},{node:{id:"ea591aaf32035d8625f97a9bae992bbc",path:"/docs/why-threefold-now/",title:"Why ThreeFold Now?",headings:[{depth:1,value:"Why ThreeFold Now?",anchor:"#why-threefold-now"},{depth:2,value:"Features & Benefit",anchor:"#features--benefit"}]}},{node:{id:"a35c5cfd5a6331ea3441adc1666db943",path:"/docs/waykichain/",title:"WaykiChain",headings:[{depth:1,value:"WaykiChain",anchor:"#waykichain"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About WayKiChain",anchor:"#about-waykichain"},{depth:2,value:"WaykiChain and ThreeFold",anchor:"#waykichain-and-threefold"},{depth:2,value:"Get started",anchor:"#get-started"}]}},{node:{id:"6d665a675a80017621dac59edfcef4d7",path:"/docs/virtual-spaces/",title:"Virtual Spaces",headings:[{depth:1,value:"Virtual Spaces",anchor:"#virtual-spaces"},{depth:2,value:"Open Source Solution: Mozilla Hubs",anchor:"#open-source-solution-mozilla-hubs"},{depth:2,value:"A few use cases for Hubs",anchor:"#a-few-use-cases-for-hubs"},{depth:2,value:"Hubs on the ThreeFold Grid",anchor:"#hubs-on-the-threefold-grid"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"2c615a4706ffdd246a21f457a022f81d",path:"/docs/video-sharing/",title:"Video Sharing",headings:[{depth:1,value:"Video Sharing",anchor:"#video-sharing"},{depth:2,value:"What is a video sharing platform?",anchor:"#what-is-a-video-sharing-platform"},{depth:2,value:"Why is video sharing getting popular?",anchor:"#why-is-video-sharing-getting-popular"},{depth:2,value:"What makes our solution different?",anchor:"#what-makes-our-solution-different"},{depth:2,value:"Open Source Solution: PeerTube",anchor:"#open-source-solution-peertube"},{depth:2,value:"PeerTube - Want to join now?",anchor:"#peertube---want-to-join-now"},{depth:2,value:"Deploy your own YouTube, super powerful & decentralized",anchor:"#deploy-your-own-youtube-super-powerful--decentralized"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"dcef1acef0d4f6e1acf70f9c131ce37f",path:"/docs/video-conf/",title:"Video Chat",headings:[{depth:1,value:"Video Chat",anchor:"#video-chat"},{depth:2,value:"How do other solutions work?",anchor:"#how-do-other-solutions-work"},{depth:2,value:"Example of the current solution",anchor:"#example-of-the-current-solution"},{depth:2,value:"How our solution works and what makes it different",anchor:"#how-our-solution-works-and-what-makes-it-different"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"1bcac4487c441dd67a63b9f4ce7c4209",path:"/docs/upcoming-projects/",title:"Coming Up!",headings:[{depth:1,value:"Coming Up!",anchor:"#coming-up"},{depth:2,value:"Presearch",anchor:"#presearch"},{depth:2,value:"Origin",anchor:"#origin"},{depth:2,value:"Polkadot",anchor:"#polkadot"},{depth:2,value:"Near",anchor:"#near"},{depth:2,value:"Ethereum",anchor:"#ethereum"},{depth:2,value:"Stellar",anchor:"#stellar"},{depth:2,value:"Chainlink",anchor:"#chainlink"},{depth:2,value:"Oasis Labs",anchor:"#oasis-labs"}]}},{node:{id:"1598c69024e549e695c9c956bb03713d",path:"/docs/tomochain/",title:"TomoChain",headings:[{depth:1,value:"TomoChain",anchor:"#tomochain"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About TomoChain",anchor:"#about-tomochain"},{depth:2,value:"TomoChain and ThreeFold",anchor:"#tomochain-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"629f2ff0944c019064380c6bbc8de838",path:"/docs/tfgrid/",title:"The ThreeFold Grid",headings:[{depth:1,value:"The ThreeFold Grid",anchor:"#the-threefold-grid"},{depth:2,value:"The Internet's Origins & Centralized Cloud",anchor:"#the-internets-origins--centralized-cloud"},{depth:2,value:"Decentralized Cloud",anchor:"#decentralized-cloud"},{depth:2,value:"The ThreeFold Grid",anchor:"#the-threefold-grid-1"}]}},{node:{id:"f1d1af59ac475eb26df0343bd79ecd70",path:"/docs/stellar/",title:"Stellar",headings:[{depth:1,value:"Stellar",anchor:"#stellar"}]}},{node:{id:"7e0abe47312453d071d6344900a4d11f",path:"/docs/serverless/",title:"Serverless App Framework",headings:[{depth:1,value:"Serverless App Framework",anchor:"#serverless-app-framework"},{depth:2,value:"Open Source Solution: Serverless",anchor:"#open-source-solution-serverless"},{depth:2,value:"Why use Serverless?",anchor:"#why-use-serverless"},{depth:2,value:"How is it related to our grid?",anchor:"#how-is-it-related-to-our-grid"},{depth:2,value:"Serverless Apps that can run on the grid",anchor:"#serverless-apps-that-can-run-on-the-grid"}]}},{node:{id:"5280fbee8a7c8ebe4ff1b91ea02cef06",path:"/docs/skalelabs/",title:"SKALE Network",headings:[{depth:1,value:"SKALE Network",anchor:"#skale-network"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About SKALE Labs",anchor:"#about-skale-labs"},{depth:2,value:"SKALE Labs and ThreeFold",anchor:"#skale-labs-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"86a56b095d5af75b56d50f6c79809d4e",path:"/docs/publishing-tool/",title:"Publishing Tools",headings:[{depth:1,value:"Publishing Tools",anchor:"#publishing-tools"},{depth:2,value:"Why use these solutions?",anchor:"#why-use-these-solutions"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"},{depth:2,value:"Repository Examples",anchor:"#repository-examples"},{depth:2,value:"Live Examples",anchor:"#live-examples"}]}},{node:{id:"7cfc396287f06b22b65f59ea6837ba23",path:"/docs/neo/",title:"NEO",headings:[{depth:1,value:"NEO",anchor:"#neo"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About NEO",anchor:"#about-neo"},{depth:2,value:"NEO and ThreeFold",anchor:"#neo-and-threefold"},{depth:2,value:"Get Started with NEO",anchor:"#get-started-with-neo"}]}},{node:{id:"64be92bbc2b341e8fdadd74aafccdbb4",path:"/docs/mattermost/",title:"Team Collaboration",headings:[{depth:1,value:"Team Collaboration",anchor:"#team-collaboration"},{depth:2,value:"Open Source Solution: Mattermost",anchor:"#open-source-solution-mattermost"},{depth:2,value:"Why use Mattermost?",anchor:"#why-use-mattermost"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"68ce2e0b556cf215a3070671695b2708",path:"/docs/matic/",title:"Matic Network",headings:[{depth:1,value:"Matic Network",anchor:"#matic-network"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Matic Network",anchor:"#about-matic-network"},{depth:2,value:"Matic Network and ThreeFold",anchor:"#matic-network-and-threefold"},{depth:2,value:"Get started with Matic",anchor:"#get-started-with-matic"}]}},{node:{id:"b52680dc2ce3c499939cf64cff77672f",path:"/docs/knowledge-base/",title:"Knowledge Base",headings:[{depth:1,value:"Knowledge Base",anchor:"#knowledge-base"},{depth:2,value:"Open Source Solution: BookStack",anchor:"#open-source-solution-bookstack"},{depth:2,value:"Why use BookStack?",anchor:"#why-use-bookstack"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"af61344729ec8c01571d4145b0e48d78",path:"/docs/how-threefold-now/",title:"How to use ThreeFold Now",headings:[{depth:1,value:"How to use ThreeFold Now",anchor:"#how-to-use-threefold-now"},{depth:2,value:"First, visit the ",anchor:"https://marketplace.threefold.io"},{depth:2,value:"Next, use the guided setup to create your solution",anchor:"#next-use-the-guided-setup-to-create-your-solution"}]}},{node:{id:"45b37496b420988860daea28d67ada28",path:"/docs/harmony/",title:"Harmony",headings:[{depth:1,value:"Harmony",anchor:"#harmony"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Harmony",anchor:"#about-harmony"},{depth:2,value:"Harmony and ThreeFold",anchor:"#harmony-and-threefold"},{depth:2,value:"Get started with Harmony",anchor:"#get-started-with-harmony"}]}},{node:{id:"cf5bd4f173011f4c239d0a05ce48e2b2",path:"/docs/gridsome/",title:"Modern Site Generator",headings:[{depth:1,value:"Modern Site Generator",anchor:"#modern-site-generator"},{depth:2,value:"Open Source Solution: Gridsome",anchor:"#open-source-solution-gridsome"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"Why use Gridsome?",anchor:"#why-use-gridsome"},{depth:2,value:"How is it related to our grid?",anchor:"#how-is-it-related-to-our-grid"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"4ee6f96a38bcd9c1331d3d58446b5d72",path:"/docs/gitea/",title:"Git Service",headings:[{depth:1,value:"Git Service",anchor:"#git-service"},{depth:2,value:"Open Source Solution: Gitea",anchor:"#open-source-solution-gitea"},{depth:3,value:"How it all started",anchor:"#how-it-all-started"},{depth:3,value:"Naming",anchor:"#naming"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"7e6a2437ce9ccd186e2452e27e9e561b",path:"/docs/elrond/",title:"Elrond",headings:[{depth:1,value:"Elrond",anchor:"#elrond"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Elrond",anchor:"#about-elrond"},{depth:2,value:"Elrond and ThreeFold",anchor:"#elrond-and-threefold"},{depth:2,value:"Get Started with Elrond",anchor:"#get-started-with-elrond"}]}},{node:{id:"a0ae2ffe7d41c2354a4dc427955e7388",path:"/docs/dmcustomers/",title:"CRM",headings:[{depth:1,value:"CRM",anchor:"#crm"},{depth:2,value:"Open Source Solution: OroCRM",anchor:"#open-source-solution-orocrm"},{depth:2,value:"Why OroCRM?",anchor:"#why-orocrm"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"a5d307463fe72ce9f0b5ae3edf6c8a6a",path:"/docs/dmcollab/",title:"Office Tools",headings:[{depth:1,value:"Office Tools",anchor:"#office-tools"},{depth:2,value:"Open Source Solution: CryptPad",anchor:"#open-source-solution-cryptpad"},{depth:2,value:"Why Cryptpad?",anchor:"#why-cryptpad"},{depth:2,value:"A rich text editor",anchor:"#a-rich-text-editor"},{depth:2,value:"A code editor",anchor:"#a-code-editor"},{depth:2,value:"A presentation creation tool",anchor:"#a-presentation-creation-tool"},{depth:2,value:"A spreadsheet creator and editor",anchor:"#a-spreadsheet-creator-and-editor"},{depth:2,value:"A poll creation tool",anchor:"#a-poll-creation-tool"},{depth:2,value:"A Kanban project management tool",anchor:"#a-kanban-project-management-tool"},{depth:2,value:"A Whiteboard tool",anchor:"#a-whiteboard-tool"},{depth:2,value:"An encrypted drive to store files",anchor:"#an-encrypted-drive-to-store-files"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"f2713ac69b5551164f741bb7ece9e8f3",path:"/docs/dmcircles/",title:"Project Management",headings:[{depth:1,value:"Project Management",anchor:"#project-management"},{depth:2,value:"Open Source Solution: Taiga",anchor:"#open-source-solution-taiga"},{depth:2,value:"Why Taiga?",anchor:"#why-taiga"},{depth:2,value:"Want to learn more about Agile?",anchor:"#want-to-learn-more-about-agile"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"6b3972f507676502c9ef1aae0af3cdeb",path:"/docs/discourse/",title:"Community Forum",headings:[{depth:1,value:"Community Forum",anchor:"#community-forum"},{depth:2,value:"Open Source Solution: Discourse",anchor:"#open-source-solution-discourse"},{depth:2,value:"Why Discourse?",anchor:"#why-discourse"},{depth:2,value:"Tutorial: How to Deploy",anchor:"#tutorial-how-to-deploy"}]}},{node:{id:"3ba9f1de6a7a340bd6fcdd71777b397f",path:"/docs/digitalme-id/",title:"DigitalMe ID",headings:[{depth:1,value:"DigitalMe ID",anchor:"#digitalme-id"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"}]}},{node:{id:"7e3c520af0a95044fa9391a9431c6462",path:"/docs/digitalme/",title:"Intro (DigitalMe)",headings:[{depth:1,value:"Intro (DigitalMe)",anchor:"#intro-digitalme"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"}]}},{node:{id:"81b82663b17d32e9abc583cdadef346e",path:"/docs/digibyte/",title:"DigiByte",headings:[{depth:1,value:"DigiByte",anchor:"#digibyte"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About DigiByte",anchor:"#about-digibyte"},{depth:2,value:"DigiByte and ThreeFold",anchor:"#digibyte-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"2113288c9ef12961f2e7416a1f550317",path:"/docs/decentralized-we-intro/",title:"Intro",headings:[{depth:1,value:"Intro",anchor:"#intro"},{depth:2,value:"Let's decentralize what's around \"us\"",anchor:"#lets-decentralize-whats-around-us"}]}},{node:{id:"d1810cfb97fb84abc820c71ec29c516b",path:"/docs/decentralized-office-intro/",title:"Intro",headings:[{depth:1,value:"Intro",anchor:"#intro"},{depth:2,value:"Decentralized Office brings safe & secure collaboration with teams",anchor:"#decentralized-office-brings-safe--secure-collaboration-with-teams"}]}},{node:{id:"179dc29441f1259e2b0775dee3a67a8f",path:"/docs/dash/",title:"Dash",headings:[{depth:1,value:"Dash",anchor:"#dash"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Dash ",anchor:"#about-dash"},{depth:2,value:"Dash and ThreeFold",anchor:"#dash-and-threefold"},{depth:2,value:"Get started with Dash",anchor:"#get-started-with-dash"}]}},{node:{id:"f5e1a895f646f65880ba56c0606a9d39",path:"/docs/decentralized-dev-intro/",title:"Intro",headings:[{depth:1,value:"Intro",anchor:"#intro"},{depth:2,value:"Decentralized Developer solutions support developers looking to build in a decentralized way",anchor:"#decentralized-developer-solutions-support-developers-looking-to-build-in-a-decentralized-way"}]}},{node:{id:"a53b30027bb583574c1609c09bbfaf29",path:"/docs/crystaltwin/",title:"Crystal Twin",headings:[{depth:1,value:"Crystal Twin",anchor:"#crystal-twin"},{depth:2,value:"What is happening today?",anchor:"#what-is-happening-today"},{depth:2,value:"What should be done and How are we solving the problem?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem"},{depth:2,value:"Why is Crystal Twin important?",anchor:"#why-is-crystal-twin-important"}]}},{node:{id:"71f2d6bb180b95781023f0826ca988a3",path:"/docs/commento/",title:"Comments Widget",headings:[{depth:1,value:"Comments Widget",anchor:"#comments-widget"},{depth:2,value:"Open Source Solution: Commento",anchor:"#open-source-solution-commento"},{depth:2,value:"Why Commento?",anchor:"#why-commento"},{depth:2,value:"How to Deploy",anchor:"#how-to-deploy"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"5e5cc1a5b5d6213519e46d4cd10d0bab",path:"/docs/blog-publisher/",title:"Blog Publisher",headings:[{depth:1,value:"Blog Publisher",anchor:"#blog-publisher"},{depth:2,value:"How does it work?",anchor:"#how-does-it-work"},{depth:2,value:"What do you need to do?",anchor:"#what-do-you-need-to-do"}]}},{node:{id:"4a5e05ff05f6f703eb4e457cc2ba741b",path:"/docs/blockchain-solutions-intro/",title:"Intro",headings:[{depth:1,value:"Intro",anchor:"#intro"},{depth:2,value:"These Blockchain Solutions bring a new alternative to centralized cloud providers",anchor:"#these-blockchain-solutions-bring-a-new-alternative-to-centralized-cloud-providers"},{depth:2,value:"This is just the beginning",anchor:"#this-is-just-the-beginning"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"What Is ThreeFold Now?",headings:[{depth:1,value:"What Is ThreeFold Now?",anchor:"#what-is-threefold-now"}]}}]}},u=function(e){var t=e.options;t.__staticData?t.__staticData.data=c:(t.__staticData=s.a.observable({data:c}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(h.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[o("label",{staticClass:"relative block"},[o("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),o("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[o("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),o("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?o("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[o("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?o("li",{staticClass:"px-2"},[e._v("\n        No results for "),o("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,a){return o("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[o("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:t.path+t.anchor}},[t.value===t.title?o("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):o("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),o("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),o("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports}}]);