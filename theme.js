jQuery(function(t){function i(){if(~document.cookie.indexOf("gravatar=")){var t=e("gravatar");return r(t),!0}return!1}function n(t,i,n){var e,r;n?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*n),r="; expires="+e.toGMTString()):r="",document.cookie=t+"="+i+r+"; path=/"}function e(t){var i,n,e,r=t+"=";for(e=document.cookie.split(";"),i=0;e.length>i;i++){for(n=e[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(r))return n.substring(r.length,n.length)}return""}function r(i){var n=t("<img>").attr({src:i}).css({height:"32px",width:"32px","-webkit-border-radius":"3px","-moz-border-radius":"3px","-border-radius":"3px","margin-top":"5px"});t("#login-field").after(n.fadeIn(300))}t("#footer").closest("table").css("border-spacing",0);var o=t("#login-field .model-link.inside").attr("href");if(o&&!i()){var s=location.protocol+"//"+location.host,a="/pluginManager/plugin/gravatar/thirdPartyLicenses",h=s+a;t.ajax({type:"GET",url:h,success:function(){var i="https://www.gravatar.com/avatar/",e="/api/json?pretty=true",s=o+e;t.getJSON(s,function(t){for(var e=t.property,o=0;e.length>o;o++){var s=e[o];if(s.address){var a=i+l(s.address);return n("gravatar",a,3),r(a),void 0}}})}})}var l=function(t){function i(t,i){return t<<i|t>>>32-i}function n(t,i){var n,e,r,o,s;return r=2147483648&t,o=2147483648&i,n=1073741824&t,e=1073741824&i,s=(1073741823&t)+(1073741823&i),n&e?2147483648^s^r^o:n|e?1073741824&s?3221225472^s^r^o:1073741824^s^r^o:s^r^o}function e(t,i,n){return t&i|~t&n}function r(t,i,n){return t&n|i&~n}function o(t,i,n){return t^i^n}function s(t,i,n){return i^(t|~n)}function a(t,r,o,s,a,h,l){return t=n(t,n(n(e(r,o,s),a),l)),n(i(t,h),r)}function h(t,e,o,s,a,h,l){return t=n(t,n(n(r(e,o,s),a),l)),n(i(t,h),e)}function l(t,e,r,s,a,h,l){return t=n(t,n(n(o(e,r,s),a),l)),n(i(t,h),e)}function c(t,e,r,o,a,h,l){return t=n(t,n(n(s(e,r,o),a),l)),n(i(t,h),e)}function u(t){for(var i,n=t.length,e=n+8,r=(e-e%64)/64,o=16*(r+1),s=Array(o-1),a=0,h=0;n>h;)i=(h-h%4)/4,a=8*(h%4),s[i]=s[i]|t.charCodeAt(h)<<a,h++;return i=(h-h%4)/4,a=8*(h%4),s[i]=s[i]|128<<a,s[o-2]=n<<3,s[o-1]=n>>>29,s}function f(t){var i,n,e="",r="";for(n=0;3>=n;n++)i=255&t>>>8*n,r="0"+i.toString(16),e+=r.substr(r.length-2,2);return e}function d(t){t=t.replace(/\r\n/g,"\n");for(var i="",n=0;t.length>n;n++){var e=t.charCodeAt(n);128>e?i+=String.fromCharCode(e):e>127&&2048>e?(i+=String.fromCharCode(192|e>>6),i+=String.fromCharCode(128|63&e)):(i+=String.fromCharCode(224|e>>12),i+=String.fromCharCode(128|63&e>>6),i+=String.fromCharCode(128|63&e))}return i}var g,m,v,p,L,b,w,y,x,C=[],A=7,S=12,B=17,k=22,N=5,T=9,j=14,M=20,X=4,Y=11,_=16,R=23,E=6,I=10,P=15,O=21;for(t=d(t),C=u(t),b=1732584193,w=4023233417,y=2562383102,x=271733878,g=0;C.length>g;g+=16)m=b,v=w,p=y,L=x,b=a(b,w,y,x,C[g+0],A,3614090360),x=a(x,b,w,y,C[g+1],S,3905402710),y=a(y,x,b,w,C[g+2],B,606105819),w=a(w,y,x,b,C[g+3],k,3250441966),b=a(b,w,y,x,C[g+4],A,4118548399),x=a(x,b,w,y,C[g+5],S,1200080426),y=a(y,x,b,w,C[g+6],B,2821735955),w=a(w,y,x,b,C[g+7],k,4249261313),b=a(b,w,y,x,C[g+8],A,1770035416),x=a(x,b,w,y,C[g+9],S,2336552879),y=a(y,x,b,w,C[g+10],B,4294925233),w=a(w,y,x,b,C[g+11],k,2304563134),b=a(b,w,y,x,C[g+12],A,1804603682),x=a(x,b,w,y,C[g+13],S,4254626195),y=a(y,x,b,w,C[g+14],B,2792965006),w=a(w,y,x,b,C[g+15],k,1236535329),b=h(b,w,y,x,C[g+1],N,4129170786),x=h(x,b,w,y,C[g+6],T,3225465664),y=h(y,x,b,w,C[g+11],j,643717713),w=h(w,y,x,b,C[g+0],M,3921069994),b=h(b,w,y,x,C[g+5],N,3593408605),x=h(x,b,w,y,C[g+10],T,38016083),y=h(y,x,b,w,C[g+15],j,3634488961),w=h(w,y,x,b,C[g+4],M,3889429448),b=h(b,w,y,x,C[g+9],N,568446438),x=h(x,b,w,y,C[g+14],T,3275163606),y=h(y,x,b,w,C[g+3],j,4107603335),w=h(w,y,x,b,C[g+8],M,1163531501),b=h(b,w,y,x,C[g+13],N,2850285829),x=h(x,b,w,y,C[g+2],T,4243563512),y=h(y,x,b,w,C[g+7],j,1735328473),w=h(w,y,x,b,C[g+12],M,2368359562),b=l(b,w,y,x,C[g+5],X,4294588738),x=l(x,b,w,y,C[g+8],Y,2272392833),y=l(y,x,b,w,C[g+11],_,1839030562),w=l(w,y,x,b,C[g+14],R,4259657740),b=l(b,w,y,x,C[g+1],X,2763975236),x=l(x,b,w,y,C[g+4],Y,1272893353),y=l(y,x,b,w,C[g+7],_,4139469664),w=l(w,y,x,b,C[g+10],R,3200236656),b=l(b,w,y,x,C[g+13],X,681279174),x=l(x,b,w,y,C[g+0],Y,3936430074),y=l(y,x,b,w,C[g+3],_,3572445317),w=l(w,y,x,b,C[g+6],R,76029189),b=l(b,w,y,x,C[g+9],X,3654602809),x=l(x,b,w,y,C[g+12],Y,3873151461),y=l(y,x,b,w,C[g+15],_,530742520),w=l(w,y,x,b,C[g+2],R,3299628645),b=c(b,w,y,x,C[g+0],E,4096336452),x=c(x,b,w,y,C[g+7],I,1126891415),y=c(y,x,b,w,C[g+14],P,2878612391),w=c(w,y,x,b,C[g+5],O,4237533241),b=c(b,w,y,x,C[g+12],E,1700485571),x=c(x,b,w,y,C[g+3],I,2399980690),y=c(y,x,b,w,C[g+10],P,4293915773),w=c(w,y,x,b,C[g+1],O,2240044497),b=c(b,w,y,x,C[g+8],E,1873313359),x=c(x,b,w,y,C[g+15],I,4264355552),y=c(y,x,b,w,C[g+6],P,2734768916),w=c(w,y,x,b,C[g+13],O,1309151649),b=c(b,w,y,x,C[g+4],E,4149444226),x=c(x,b,w,y,C[g+11],I,3174756917),y=c(y,x,b,w,C[g+2],P,718787259),w=c(w,y,x,b,C[g+9],O,3951481745),b=n(b,m),w=n(w,v),y=n(y,p),x=n(x,L);var W=f(b)+f(w)+f(y)+f(x);return W.toLowerCase()}}),jQuery(function(t){function i(){t("body.yui-skin-sam").height();var i=t(window).height(),n=45,e=t("#header").height();t("#main-table").css("min-height",i-n-e)}i(),t(window).resize(function(){i()}),t(document).scroll(function(){i()})}),function(t,i){var n=function(t){var i,n;if(i=n=0,t.offsetParent)do i+=t.offsetLeft,n+=t.offsetTop;while(null!==(t=t.offsetParent));return[i,n]},e=function(t){this.canvas=t.canvas,this.minRadius=t.minRadius||15,this.arcWidth=t.arcWidth||5,this.gapWidth=t.gapWidth||3,this.centerX=t.centerX||this.canvas.width/2,this.centerY=t.centerY||this.canvas.height/2,this.infoLineLength=t.infoLineLength||60,this.horizLineLength=t.horizLineLength||10,this.infoLineAngleInterval=t.infoLineAngleInterval||Math.PI/8,this.infoLineBaseAngle=t.infoLineBaseAngle||Math.PI/6,this.context=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.circles=[],this.runningCount=0};e.prototype={constructor:e,addEntry:function(t){return this.circles.push(new r({canvas:this.canvas,context:this.context,centerX:this.centerX,centerY:this.centerY,innerRadius:this.minRadius+this.circles.length*(this.gapWidth+this.arcWidth),arcWidth:this.arcWidth,infoLineLength:this.infoLineLength,horizLineLength:this.horizLineLength,id:this.circles.length,fillColor:t.fillColor,outlineColor:t.outlineColor,progressListener:t.progressListener,infoListener:t.infoListener,infoLineAngle:this.infoLineBaseAngle+this.circles.length*this.infoLineAngleInterval})),this},start:function(t){var i=this;return this.timer=setInterval(function(){i._update()},t||33),this},stop:function(){clearTimeout(this.timer)},_update:function(){return this._clear(),this.circles.forEach(function(t){t.update()}),this},_clear:function(){return this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this}};var r=function(t){if(this.id=t.id,this.canvas=t.canvas,this.context=t.context,this.centerX=t.centerX,this.centerY=t.centerY,this.arcWidth=t.arcWidth,this.innerRadius=t.innerRadius||0,this.fillColor=t.fillColor||"#fff",this.outlineColor=t.outlineColor||this.fillColor,this.progressListener=t.progressListener,this.infoLineLength=t.infoLineLength||250,this.horizLineLength=t.horizLineLength||50,this.infoListener=t.infoListener,this.infoLineAngle=t.infoLineAngle,this.outerRadius=this.innerRadius+this.arcWidth,this.infoListener){var e=this.infoLineAngle,r=(this.innerRadius+this.outerRadius)/2,o=Math.sin(e),s=Math.cos(e);this.infoLineStartX=this.centerX+o*r,this.infoLineStartY=this.centerY-s*r,this.infoLineMidX=this.centerX+o*this.infoLineLength,this.infoLineMidY=this.centerY-s*this.infoLineLength,this.infoLineEndX=this.infoLineMidX+(0>o?-this.horizLineLength:this.horizLineLength),this.infoLineEndY=this.infoLineMidY;var a=i.createElement("div"),h=a.style;h.color=this.fillColor,h.position="absolute",h.left=this.infoLineEndX+n(this.canvas)[0]+"px",a.className="ProgressCircleInfo",a.id="progress_circle_info_"+this.id,i.body.appendChild(a),this.infoText=a}};r.prototype={constructor:r,update:function(){this.progress=this.progressListener(),this._draw(),this.infoListener&&(this.info=this.infoListener(),this._drawInfo())},_draw:function(){var t=this.context,i=-Math.PI/2,n=0+i,e=n+2*this.progress*Math.PI,r=this.centerX,o=this.centerY,s=this.innerRadius,a=this.outerRadius;return t.fillStyle=this.fillColor,t.strokeStyle=this.outlineColor,t.beginPath(),t.arc(r,o,s,n,e,!1),t.arc(r,o,a,e,n,!0),t.closePath(),t.stroke(),t.fill(),this},_drawInfo:function(){var t,i;return t=[[this.infoLineStartX,this.infoLineStartY],[this.infoLineMidX,this.infoLineMidY],[this.infoLineEndX,this.infoLineEndY]],this._drawSegments(t,!1),this.infoText.innerHTML=this.info,i=this.infoText.offsetHeight,this.infoText.style.top=this.infoLineEndY+n(this.canvas)[1]-i/2+"px",this},_drawSegments:function(t,i){var n=this.context;n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(var e=1;t.length>e;++e)n.lineTo(t[e][0],t[e][1]);i&&n.closePath(),n.stroke()}},t.ProgressCircle=e}(window,document),jQuery(function(t){var i=function(t){return null!==t.match(/^\/job\/.*?\//)},n=function(t){return null!==t.match(/^\/job\/.*?\/(.*?=.*?\/)?$/)},e=function(t){return null!==t.match(/^\/job\/.*?\/$/)},r=function(t){return t.match(/^\/job\/.*?\//)[0]},o=function(t){return t.match(/^\/job\/.*?\/(.*?=.*?\/)?/)[0]},s=function(i,n){t.getJSON(i+"api/json?tree=builds[number]",function(t){for(var e=0;t.builds.length>e;e++){var r=t.builds[e];r.number===n&&(window.location.href=i+n+"/consoleFull")}setTimeout(function(){s(i,n)},1e3)})},a=function(i,n){return e(i)?(t.getJSON(i+"api/json?tree=activeConfigurations[name]",function(t){if("{}"!==JSON.stringify(t)&&"activeConfigurations"in t){var e=i+t.activeConfigurations[0].name+"/";return s(e,n)}return s(i,n)}),void 0):s(i,n)},h=function(i){var n=document.createElement("div");n.className="alert alert-warning doony-alert",n.innerHTML=i,t("#main-panel").prepend(n)},l=function(t,i){return"<div class='doony-callout doony-callout-info'><a "+(null===i?"":"href='"+i+"'")+">"+t+"</a></div>"},c=function(i,n){t.getJSON(i+n+"api/json?tree=lastBuild[number]",function(e){null!==e.lastBuild&&"number"in e.lastBuild&&t("#matrix .model-link").each(function(r,o){if(o.getAttribute("href")===n){var s=i+n+e.lastBuild.number+"/consoleFull";t(o).next(".doony-callout").children("a").attr("href",s)}})})};t("#matrix").length&&setInterval(function(){var i=o(window.location.pathname);t("#matrix .doony-downstream-link").length||(t("#matrix .model-link").wrap("<div class='doony-downstream-link'>"),t("#matrix .model-link").each(function(i,n){var e="View console output for the latest build";t(n).after(l(e,null))}),t.getJSON(i+"api/json?tree=activeConfigurations[name]",function(t){for(var n=0;t.activeConfigurations.length>n;n++){var e=t.activeConfigurations[n];c(i,e.name+"/")}}))},50);var u=function(i,n){t(i).each(function(){var i=document.createElement("div");i.className="doony-circle doony-circle-"+n,i.style.display="inline-block";var e;"48"===this.getAttribute("width")||"24"===this.getAttribute("width")?(e=.5*this.getAttribute("width")+8,i.style.marginRight="15px",i.style.verticalAlign="middle"):this.classList.contains("icon32x32")?(e=24,i.style.marginTop="4px",i.style.marginLeft="4px"):e=this.getAttribute("width")||12,t(i).css("width",e),t(i).css("height",e),t(this).after(i).remove()})},f=function(i,n){t(i).each(function(){if(!t(this).next(".doony-canvas").length){var i=document.createElement("canvas");i.className="doony-canvas";var e;"48"===this.getAttribute("width")||"24"===this.getAttribute("width")?(e=.5*this.getAttribute("width")+8,i.style.marginRight="15px",i.style.verticalAlign="middle"):this.classList.contains("icon32x32")?(e=24,i.style.marginTop="4px",i.style.marginLeft="4px"):e=this.getAttribute("width")||12,i.setAttribute("width",e),i.setAttribute("height",e);var r=new ProgressCircle({canvas:i,minRadius:3*e/8-2,arcWidth:e/8+1}),o=0;r.addEntry({fillColor:n,progressListener:function(){return o>=1&&(o=0),o+=.005}}),r.start(24),t(this).after(i).css("display","none")}})},d="#4f9f4f";if(setInterval(function(){f("img[src*='red_anime.gif']","#d9534f"),f("img[src*='blue_anime.gif']",d),f("img[src*='grey_anime.gif']","#999"),f("img[src*='yellow_anime.gif']","#f0ad4e")},10),setInterval(function(){u("img[src*='/grey.png']","aborted"),u("img[src*='/blue.png']","success"),u("img[src*='/red.png']","failure"),u("img[src*='/yellow.png']","warning")},10),n(window.location.pathname)){var g=o(window.location.pathname);t.getJSON(g+"api/json?tree=lastBuild[number]",function(i){if("lastBuild"in i&&null!==i.lastBuild&&"number"in i.lastBuild){var n="View console output for the latest build",e=g+i.lastBuild.number+"/consoleFull",r=t("h2:contains('Permalinks')");r.after(l(n,e))}})}if(i(window.location.pathname)){var m=document.createElement("button");m.className="btn btn-primary doony-build",m.innerHTML="Build Now",t(m).click(function(){var i=r(window.location.pathname);t.getJSON(i+"api/json?depth=1&tree=nextBuildNumber,lastBuild[building]",function(n){t.post(i+"build",function(){var t="Build #"+n.nextBuildNumber+" created, you will be redirected when it is ready.";"{}"!==JSON.stringify(n)&&"lastBuild"in n&&null!==n.lastBuild&&n.lastBuild.building&&(t+=" <a href='#' id='doony-clear-build'>Cancel the current build</a>"),h(t),a(o(window.location.pathname),n.nextBuildNumber)})})}),t(document).on("click","#doony-clear-build",function(i){i.preventDefault();var n=r(window.location.pathname);t.getJSON(n+"api/json?tree=lastBuild[number]",function(i){t.post(n+i.lastBuild.number+"/stop")})});var v=t("#main-panel h1").first();v.children("div").length?v.append(m):(v.css("display","inline-block"),v.after(m))}});