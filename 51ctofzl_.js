

function fake(e){var a=0,n=8;function t(e){return s(r(i(e),e.length*n))}function r(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,i=-271733879,a=-1732584194,n=271733878,s=0;s<e.length;s+=16){var o=r,l=i,u=a,d=n;i=p(i=p(i=p(i=p(i=f(i=f(i=f(i=f(i=h(i=h(i=h(i=h(i=c(i=c(i=c(i=c(i,a=c(a,n=c(n,r=c(r,i,a,n,e[s+0],7,-680876936),i,a,e[s+1],12,-389564586),r,i,e[s+2],17,606105819),n,r,e[s+3],22,-1044525330),a=c(a,n=c(n,r=c(r,i,a,n,e[s+4],7,-176418897),i,a,e[s+5],12,1200080426),r,i,e[s+6],17,-1473231341),n,r,e[s+7],22,-45705983),a=c(a,n=c(n,r=c(r,i,a,n,e[s+8],7,1770035416),i,a,e[s+9],12,-1958414417),r,i,e[s+10],17,-42063),n,r,e[s+11],22,-1990404162),a=c(a,n=c(n,r=c(r,i,a,n,e[s+12],7,1804603682),i,a,e[s+13],12,-40341101),r,i,e[s+14],17,-1502002290),n,r,e[s+15],22,1236535329),a=h(a,n=h(n,r=h(r,i,a,n,e[s+1],5,-165796510),i,a,e[s+6],9,-1069501632),r,i,e[s+11],14,643717713),n,r,e[s+0],20,-373897302),a=h(a,n=h(n,r=h(r,i,a,n,e[s+5],5,-701558691),i,a,e[s+10],9,38016083),r,i,e[s+15],14,-660478335),n,r,e[s+4],20,-405537848),a=h(a,n=h(n,r=h(r,i,a,n,e[s+9],5,568446438),i,a,e[s+14],9,-1019803690),r,i,e[s+3],14,-187363961),n,r,e[s+8],20,1163531501),a=h(a,n=h(n,r=h(r,i,a,n,e[s+13],5,-1444681467),i,a,e[s+2],9,-51403784),r,i,e[s+7],14,1735328473),n,r,e[s+12],20,-1926607734),a=f(a,n=f(n,r=f(r,i,a,n,e[s+5],4,-378558),i,a,e[s+8],11,-2022574463),r,i,e[s+11],16,1839030562),n,r,e[s+14],23,-35309556),a=f(a,n=f(n,r=f(r,i,a,n,e[s+1],4,-1530992060),i,a,e[s+4],11,1272893353),r,i,e[s+7],16,-155497632),n,r,e[s+10],23,-1094730640),a=f(a,n=f(n,r=f(r,i,a,n,e[s+13],4,681279174),i,a,e[s+0],11,-358537222),r,i,e[s+3],16,-722521979),n,r,e[s+6],23,76029189),a=f(a,n=f(n,r=f(r,i,a,n,e[s+9],4,-640364487),i,a,e[s+12],11,-421815835),r,i,e[s+15],16,530742520),n,r,e[s+2],23,-995338651),a=p(a,n=p(n,r=p(r,i,a,n,e[s+0],6,-198630844),i,a,e[s+7],10,1126891415),r,i,e[s+14],15,-1416354905),n,r,e[s+5],21,-57434055),a=p(a,n=p(n,r=p(r,i,a,n,e[s+12],6,1700485571),i,a,e[s+3],10,-1894986606),r,i,e[s+10],15,-1051523),n,r,e[s+1],21,-2054922799),a=p(a,n=p(n,r=p(r,i,a,n,e[s+8],6,1873313359),i,a,e[s+15],10,-30611744),r,i,e[s+6],15,-1560198380),n,r,e[s+13],21,1309151649),a=p(a,n=p(n,r=p(r,i,a,n,e[s+4],6,-145523070),i,a,e[s+11],10,-1120210379),r,i,e[s+2],15,718787259),n,r,e[s+9],21,-343485551),r=g(r,o),i=g(i,l),a=g(a,u),n=g(n,d)}return Array(r,i,a,n)}function o(e,t,r,i,a,n){return g(function(e,t){return e<<t|e>>>32-t}(g(g(t,e),g(i,n)),a),r)}function c(e,t,r,i,a,n,s){return o(t&r|~t&i,e,t,a,n,s)}function h(e,t,r,i,a,n,s){return o(t&i|r&~i,e,t,a,n,s)}function f(e,t,r,i,a,n,s){return o(t^r^i,e,t,a,n,s)}function p(e,t,r,i,a,n,s){return o(r^(t|~i),e,t,a,n,s)}function g(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e){for(var t=Array(),r=(1<<n)-1,i=0;i<e.length*n;i+=n)t[i>>5]|=(e.charCodeAt(i/n)&r)<<i%32;return t}function s(e){for(var t=a?'0123456789ABCDEF':'0123456789abcdef',r='',i=0;i<4*e.length;i++)r+=t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15);return r}return t(e)};
function time_to_sec(time) {
    if (time.length < 3) {
        return Number(time)
    } else if (time.length == 5) {
        var temp = time.split(':');
        return Number(temp[0] * 60) + Number(temp[1])
    } else if (time.length > 5) {
        var temp = time.split(':');
        return Number(temp[0] * 3600) + Number(temp[1] * 60) + Number(temp[2] * 60)
    } else {
        return null
    }
};

document.body.insertAdjacentHTML('afterEnd',"<div style='padding:20px;width:200px;opacity:0.5; height:250px;z-index:99; position:fixed; right:5%; top:20%;background:pink;'><span>发送请求：<font size='4' color='blue' id='__rq'>0</font></span><br><span>请求成功：<font size='4' color='green' id='__rs'>0</font></span><br><span>请求失败：<font size='4' color='red' id='__rf'>0</font></span><br><br><span><font size='3' color='blue' id='__msg'></font></span></div>");
var url_stat = 'https://b.edu.51cto.com/unicom/video/play/log';
var url_auth = 'https://b.edu.51cto.com/unicom/video/play/api';
var r = window.navigator.userAgent;
var br = (-1 < r.indexOf("Opera") ? "Opera" : -1 < r.indexOf("Firefox") ? "FF" : -1 < r.indexOf("Chrome") ? "Chrome" : -1 < r.indexOf("Safari") ? "Safari" : -1 < r.indexOf("compatible") && -1 < r.indexOf("MSIE") && !isOpera ? "IE" : void 0);
var os = r.indexOf("Windows") ? "Windows" : "other";
var m_step = 10;
var i = {
    m: "time",
    ref: location.href,
    os: os,
    br: br,
    fp: 0,
    cdn: 'auto',
    def: 'auto',
    switchDef: 'auto',
    ver: 'v2.1.0-20190709',
    platform: 4,
};


function heart_beat(uid, uuid, lessonId, dt, interval=20, step_now=0, step=10) {
    if(isNaN(dt)){return;}
    window._clc+=1;
    parent.__rq.innerHTML = window._clc;
    var ht=Math.ceil(step_now/step*dt);
    var T=(new Date).getTime()+ht*1000;
    var ext = {
        id: lessonId,
        uid: uid,
        uuid: uuid,
        dt: dt,
        htime: ht,
        pt: ht,
        t: T,
        sgin: parent.fake("" + T + ht + dt + ht + "eDu_51Cto_siyuanTlw").toString()
    }
    try {
        $.ajax({
            async: true,
            type: 'get',
            url: url_stat,
            data: parent.$.extend({}, i, ext),
            success: function(e){window.steps -=1;window._steps+=1; parent.__rs.innerHTML = window._steps;},
            error:function(e){window.steps -=1;window.__steps+=1;parent.__rf.innerHTML = window.__steps;}
        });
    } catch (err) {
    }
    if(step_now>step){window.clc -= 1;}
    else{setTimeout(function(){heart_beat(uid, uuid, lessonId, dt, interval, step_now+1, step);}, interval);}
}

function get_uid(lessonId) {
    var uid = null;
    $.ajax({
        async: false,
        type: 'get',
        url: url_auth,
        data: {
            sign: fake(lessonId + 'eDu_51Cto_siyuanTlw').toString(),
            lesson_id: lessonId
        },
        dataType: "json",
        success: function(e) {
            uid = e.uid;
        }
    });

    return uid;
}

function check_clc(){   
    if(window.clc<1){
        parent.__msg.innerHTML='所有请求已发出，请勿刷新页面';
    }else{setTimeout(function(){check_clc();}, 500);};
};

function check_steps(){
    if(window.steps<1 && parent.__msg.innerHTML=='所有请求已发出，请勿刷新页面'){     
        parent.__msg.innerHTML='刷课完成，如仍有未结课程，请重新运行脚本<br>[手动刷新查看进度]';
    }else{
        setTimeout(function(){check_steps();}, 500);}
};


function widt(interval=200, step=15) {
    var lis = $("li.lesson");

    if (lis.length < 1) {
        alert('获取课程列表为空');
        return;
    };
    var items = [];
    for (var i = 0; i < lis.length; i++) {
        var temp = $(lis[i]);
        var lesson_id = temp.attr('id');
        var progress = temp.find('div.pe.fl').text().trim();
        var time = time_to_sec(temp.find('span.time').text().trim());
        if (progress.indexOf('100%') == -1) {
            items.push([lesson_id, progress, time]);
        }
    }
    
    if (items.length < 1) {
        alert('获取未完成课程列表为空2');
        return;
    }
    window.clc = items.length;
    window._clc=0;
    window.steps = window.clc*step;
    window._steps = 0;
    window.__steps = 0;

    var uid = get_uid(items[0][0]);

    check_clc();
    check_steps();
    for (var i = 0; i < items.length; i++) {
        var uuid = fake("" + (new Date).getTime() + uid + Math.random()).toString();
        heart_beat(uid, uuid, items[i][0], items[i][2], interval, 0, step);
    }

}


$("li:contains('课程目录')").click();
$("button:contains('开始学习')").text('一键结课');
$("button:contains('一键结课')").closest('a').replaceWith($("button:contains('一键结课')").prop("outerHTML").replace('button ', 'button onclick="widt();"'));