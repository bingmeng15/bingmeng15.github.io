!function(n){n.fn.snow=function(o){var e=n('<div id="snowbox" />').css({position:"absolute","z-index":"9999",top:"-50px"}).html("&#10052;"),t=n(document).height(),i=n(document).width();o=n.extend({},{minSize:10,maxSize:20,newOn:1e3,flakeColor:"#FFFFFF"},o),setInterval((function(){var a=Math.random()*i-100,m=.5+Math.random(),d=o.minSize+Math.random()*o.maxSize,r=t-200,c=a-500+500*Math.random(),f=10*t+5e3*Math.random();e.clone().appendTo("body").css({left:a,opacity:m,"font-size":d,color:o.flakeColor}).animate({top:r,left:c,opacity:.2},f,"linear",(function(){n(this).remove()}))}),o.newOn)}}(jQuery),$((function(){$.fn.snow({minSize:5,maxSize:25,newOn:300})}));