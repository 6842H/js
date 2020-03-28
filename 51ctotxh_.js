
function fake(e){var a=0,n=8;function t(e){return s(r(i(e),e.length*n))}function r(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,i=-271733879,a=-1732584194,n=271733878,s=0;s<e.length;s+=16){var o=r,l=i,u=a,d=n;i=p(i=p(i=p(i=p(i=f(i=f(i=f(i=f(i=h(i=h(i=h(i=h(i=c(i=c(i=c(i=c(i,a=c(a,n=c(n,r=c(r,i,a,n,e[s+0],7,-680876936),i,a,e[s+1],12,-389564586),r,i,e[s+2],17,606105819),n,r,e[s+3],22,-1044525330),a=c(a,n=c(n,r=c(r,i,a,n,e[s+4],7,-176418897),i,a,e[s+5],12,1200080426),r,i,e[s+6],17,-1473231341),n,r,e[s+7],22,-45705983),a=c(a,n=c(n,r=c(r,i,a,n,e[s+8],7,1770035416),i,a,e[s+9],12,-1958414417),r,i,e[s+10],17,-42063),n,r,e[s+11],22,-1990404162),a=c(a,n=c(n,r=c(r,i,a,n,e[s+12],7,1804603682),i,a,e[s+13],12,-40341101),r,i,e[s+14],17,-1502002290),n,r,e[s+15],22,1236535329),a=h(a,n=h(n,r=h(r,i,a,n,e[s+1],5,-165796510),i,a,e[s+6],9,-1069501632),r,i,e[s+11],14,643717713),n,r,e[s+0],20,-373897302),a=h(a,n=h(n,r=h(r,i,a,n,e[s+5],5,-701558691),i,a,e[s+10],9,38016083),r,i,e[s+15],14,-660478335),n,r,e[s+4],20,-405537848),a=h(a,n=h(n,r=h(r,i,a,n,e[s+9],5,568446438),i,a,e[s+14],9,-1019803690),r,i,e[s+3],14,-187363961),n,r,e[s+8],20,1163531501),a=h(a,n=h(n,r=h(r,i,a,n,e[s+13],5,-1444681467),i,a,e[s+2],9,-51403784),r,i,e[s+7],14,1735328473),n,r,e[s+12],20,-1926607734),a=f(a,n=f(n,r=f(r,i,a,n,e[s+5],4,-378558),i,a,e[s+8],11,-2022574463),r,i,e[s+11],16,1839030562),n,r,e[s+14],23,-35309556),a=f(a,n=f(n,r=f(r,i,a,n,e[s+1],4,-1530992060),i,a,e[s+4],11,1272893353),r,i,e[s+7],16,-155497632),n,r,e[s+10],23,-1094730640),a=f(a,n=f(n,r=f(r,i,a,n,e[s+13],4,681279174),i,a,e[s+0],11,-358537222),r,i,e[s+3],16,-722521979),n,r,e[s+6],23,76029189),a=f(a,n=f(n,r=f(r,i,a,n,e[s+9],4,-640364487),i,a,e[s+12],11,-421815835),r,i,e[s+15],16,530742520),n,r,e[s+2],23,-995338651),a=p(a,n=p(n,r=p(r,i,a,n,e[s+0],6,-198630844),i,a,e[s+7],10,1126891415),r,i,e[s+14],15,-1416354905),n,r,e[s+5],21,-57434055),a=p(a,n=p(n,r=p(r,i,a,n,e[s+12],6,1700485571),i,a,e[s+3],10,-1894986606),r,i,e[s+10],15,-1051523),n,r,e[s+1],21,-2054922799),a=p(a,n=p(n,r=p(r,i,a,n,e[s+8],6,1873313359),i,a,e[s+15],10,-30611744),r,i,e[s+6],15,-1560198380),n,r,e[s+13],21,1309151649),a=p(a,n=p(n,r=p(r,i,a,n,e[s+4],6,-145523070),i,a,e[s+11],10,-1120210379),r,i,e[s+2],15,718787259),n,r,e[s+9],21,-343485551),r=g(r,o),i=g(i,l),a=g(a,u),n=g(n,d)}return Array(r,i,a,n)}function o(e,t,r,i,a,n){return g(function(e,t){return e<<t|e>>>32-t}(g(g(t,e),g(i,n)),a),r)}function c(e,t,r,i,a,n,s){return o(t&r|~t&i,e,t,a,n,s)}function h(e,t,r,i,a,n,s){return o(t&i|r&~i,e,t,a,n,s)}function f(e,t,r,i,a,n,s){return o(t^r^i,e,t,a,n,s)}function p(e,t,r,i,a,n,s){return o(r^(t|~i),e,t,a,n,s)}function g(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e){for(var t=Array(),r=(1<<n)-1,i=0;i<e.length*n;i+=n)t[i>>5]|=(e.charCodeAt(i/n)&r)<<i%32;return t}function s(e){for(var t=a?'0123456789ABCDEF':'0123456789abcdef',r='',i=0;i<4*e.length;i++)r+=t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15);return r}return t(e)};

document.body.insertAdjacentHTML('afterEnd',"<div style='padding:20px;width:200px;height:250px;z-index:99; position:fixed; right:5%; top:20%;background:pink;'><span>发送请求：<font size='4' color='blue' id='__rq'>0</font></span><br><span>请求成功：<font size='4' color='green' id='__rs'>0</font></span><br><span>请求失败：<font size='4' color='red' id='__rf'>0</font></span><br><br><span><font size='3' color='blue' id='__msg'></font></span></div>");
var url_stat='https://b.edu.51cto.com/unicom/video/play/log-wejob';
var url_auth='https://b.edu.51cto.com/unicom/video/play/api-wejob';
var url_course_list='https://b.edu.51cto.com/unicom/wejob/ajax-get-wejob-course-list';
var url_course_detail='https://b.edu.51cto.com/unicom/wejob/ajax-get-wejob-course-detail';
var url_prepare='https://b.edu.51cto.com/unicom/course/wejob-video';
var r = window.navigator.userAgent;
var br=(-1 < r.indexOf('Opera') ? 'Opera' : -1 < r.indexOf('Firefox') ? 'FF' : -1 < r.indexOf('Chrome') ? 'Chrome' : -1 < r.indexOf('Safari') ? 'Safari' : -1 < r.indexOf('compatible') && -1 < r.indexOf('MSIE') && !isOpera ? 'IE' : void 0);
var os=r.indexOf('Windows') ? 'Windows' : 'other';
var i = {
	f: null,
	m: 'time',
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


function get_course_list(wejob_id){
	var course_list=[];
	parent.$.ajax({  
		async : false,  
		type : 'post',  
		url : url_course_list,  
		data : {
			'wejob_id':wejob_id
		}, 
		dataType: 'json',		
		success : function(e){
			if(e.message=='success'){
				var data=e.data.data;
				for(var i=0; i<data.length; i++){
					if(data[i].study_progress_info.study_progress!=100){
						course_list.push({
							wejob_id:data[i].train_id, 
							train_course_id:data[i].train_course_id,
							lesson_num:data[i].lesson_num,
							course_name:data[i].course_name
						});
					}					
				}
			}		
		}  
	});  
	return course_list;
};


function get_course_detail_cell(C){
	var course_detail=[];
	var pre_course_detail=[];
	var temp=[];

	current_page = 1;
	count_page = 5;
	err = 2;

	while(current_page<=count_page){
		if(err<0){break;};
		parent.$.ajax({  
			async : false,  
			type : 'post',  
			url : url_course_detail,  
			data : {
				'wejob_id':C.wejob_id,
				'module_id':C.train_course_id,
				'page': current_page,
				'page_size':20
			}, 
			dataType: 'json',	
			error : function(e){err-=1;},	
			success : function(e){
				current_page +=1;
				count_page = e.data.pagination.count_page;
				if(e.data.data[0].hasOwnProperty('list')){
					var data=e.data.data;
					for(var i=0; i<data.length; i++){
						var list=data[i].list;
						if(!(Object.prototype.toString.call(list) === "[object Array]")){list=Object.values(list);}
						for(var j=0; j<list.length; j++){
							if(list[j].study_progress_info.study_progress!=100 && list[j].hasOwnProperty('duration')){
								course_detail.push({
									chapter_id:list[j].chapter_id, 
									lesson_id:list[j].lesson_id,
									duration:list[j].duration
								});
							}
						}				
					}
					pre_course_detail.push({
						chapter_id:data.chapter_id, 
						lesson_id:list[0].lesson_id,
						duration:list[0].duration
					});
				}else{
					var list=e.data.data;
					for(var i=0; i<list.length; i++){
						if(list[i].study_progress_info.study_progress!=100  && list[j].hasOwnProperty('duration')){
							course_detail.push({
								chapter_id:list[i].chapter_id, 
								lesson_id:list[i].lesson_id,
								duration:list[i].duration
							});
						}			
					}
					pre_course_detail.push({
						chapter_id:list[0].chapter_id, 
						lesson_id:list[0].lesson_id,
						duration:list[0].duration
					});
				}
			}  
		}); 
	}	 
	temp[0]=course_detail;
	temp[1]=pre_course_detail;
	return temp;
};


function get_course_detail(course_list){
	var course_detail=[];
	var pre_course_detail=[];
	var temp=[];
	for(var k=0;k<course_list.length; k++){
		var t = get_course_detail_cell(course_list[k]);
		course_detail = course_detail.concat(t[0]);
		pre_course_detail = pre_course_detail.concat(t[1]);
	}
	temp[0]=course_detail;
	temp[1]=pre_course_detail;
	return temp;
}

function prepare(wejob_id, lesson_id){
	var temp=null;
	parent.$.ajax({  
		async : true,  
		type : 'get',  
		url : url_prepare,  
		data : {
			'wejob_id':wejob_id,
			'lesson_id':lesson_id
		}, 				
		success : function(e){
			temp=1;	
		}  
	});  
	return temp;
};



function get_uid(lessonId){
	var uid=null;
	parent.$.ajax({  
		async : false,  
		type : 'get',  
		url : url_auth,  
		data : {
			sign: parent.fake(lessonId + 'eDu_51Cto_siyuanTlw').toString(),
			lesson_id: lessonId
		}, 
		dataType: 'json',		
		success : function(e){  
			uid=e.uid;
		}  
	});  
	return uid;
};

function check_clc(){	
	if(window.clc<1){
		parent.__msg.innerHTML='所有请求已发出，请勿刷新页面';
	}else{setTimeout(function(){check_clc();}, 1000);};
};

function check_steps(){
	if(window.steps<1 && parent.__msg.innerHTML=='所有请求已发出，请勿刷新页面') {		
		parent.__msg.innerHTML='刷课完成，如仍有未结课程，请重新运行脚本<br>[手动刷新查看进度]';
	}else{
		setTimeout(function(){check_steps();}, 1000);}
};


function get_wejob_id(){
	var src=parent.$('#mainiframe').prop('src').split('/');
	return src[src.length-2];
};


function heart_beat3(uid, uuid, lessonId, dt, interval=50, step_now=0, step=10){
	
	if(isNaN(dt)){window.steps -=step;window.clc -=step;return;};
	window._clc+=1;
	parent.__rq.innerHTML = window._clc;
	var ht=Math.ceil(step_now/step*dt);
	var T=(new Date).getTime()+ht*1000;
	var ext={
		id: lessonId,
		uid: uid,
		uuid: uuid,
		dt: dt,
		htime: ht,
		pt: ht,
		t: T,
		sgin: parent.fake('' + T + ht + dt + ht + 'eDu_51Cto_siyuanTlw').toString()
	};
	try{
		parent.$.ajax({  
			async : 1,  
			type : 'get',  
			url : url_stat,  
			data : parent.$.extend({}, i, ext),
			success: function(e){window.steps -=1;window._steps+=1; parent.__rs.innerHTML = window._steps;},
			error:function(e){window.steps -=1;window.__steps+=1;parent.__rf.innerHTML = window.__steps;}
		});  
	}catch(err){
	};
	if(step_now<=step){setTimeout(function(){heart_beat3(uid, uuid, lessonId, dt, interval, step_now+1, step);}, interval);}
	else{window.clc -= 1;};
};


function widt3(interval=200, step=10){
	var wejob_id=get_wejob_id();
	if(!wejob_id){alert('未获取到课程参数，请从我的课程>>体系化课程进入课程');return;}
	
	var course_list=get_course_list(wejob_id);
	if(course_list.length==0){alert('无未结课程');return;};
	
	var temp=get_course_detail(course_list);
	if(temp[0].length==0 || temp[1].length==0){alert('获取未完课程列表为空');return;};
	var course_detail=temp[0];
	var pre_course_detail=temp[1];
	
	var uid=get_uid(pre_course_detail[0].lesson_id);
	if(!uid){alert('获取uid失败');return;};
	
	window.steps=step*course_detail.length;
	window.clc=course_detail.length;
	window._clc=0;
	window._steps=0;
	window.__steps=0;
	
	
	for(var i=0;i<pre_course_detail.length; i++){
		prepare(wejob_id, pre_course_detail[i].lesson_id);
	};
	for(var i=0;i<course_detail.length;i++){
		var uuid=parent.fake('' + (new Date).getTime() + uid + Math.random()).toString();
		heart_beat3(uid, uuid, course_detail[i].lesson_id, course_detail[i].duration, interval, 0, step);
	};
	check_clc();
	check_steps();
};widt3();

var tdiv=$('#mainiframe').contents().find("button:contains('进入学习')").closest('div');
var ass=$('#mainiframe').contents().find("button:contains('进入学习')").closest('a');
tdiv[0].innerHTML=ass[0].innerHTML.replace('进入学习', '一键结课').replace('button ', "button onclick='parent.widt3();'");
for(var i=1;i<ass.length;i++){		
tdiv[i].innerHTML=ass[i].innerHTML.replace('进入学习', '禁止点击').replace('button ', "button onclick=''");
}


