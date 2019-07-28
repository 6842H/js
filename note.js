/*格式化填充字符串*/
String.prototype.format= function(){
    /*将arguments转化为数组（ES5中并非严格的数组）*/
    var args = Array.prototype.slice.call(arguments);
    var count=0;
    /*通过正则替换%s*/
    return this.replace(/\$/g,function(s,i){
        return args[count++];
    });
};

/*还原post参数*/
var basic_params = {
	lesson_id: _lid,
	course_id: course_id,
	is_me: 1,
	size: 20
};
/*延时展开*/
var mtimeout = 1500;

var notes_panel_html = '' + 
	"<div id='notes_panel' style='position:fixed; z-index:999; width:50%; height:70%; left:15%; top:10%; background:pink; border-radius:15px; opacity:0.85;'>" +
	"<button style='float:right; border-radius:2px; background:red; color:white;' onclick='closeExportNotePanel()'>关闭X</button>" +
	"<textarea style='padding:2%; width:96%;height:96%; background:#eff; color:green;'>$</textarea>" +
	"</div>";

/*展开或收起笔记*/
function expandNoteCtrl(e){
	if(!e || !e.innerText)
		return;
	var t = (e.innerText=='展开↓') ? '收起↑' : '展开↓';
	e.innerText=t;
	e.title='点击'+ t +'每条笔记';
	/*点击尾巴*/
	Array.prototype.forEach.apply($("span.lookAll"),[(current,index) => {
		console.debug('innerText=', current.innerText, 't=', t);
		if(current.innerText != t){
			current.click();
		}
	}]);
};

/*调用接口获取笔记*/
function getNotes(size=100, is_me=1, lesson_id=null){
	NoteList.resetParm({
		'page': 1, 
		'size': size, 
		'is_me': is_me, 
		'lesson_id': lesson_id || window.M.mlesson_id, 	/*小课id*/
		'course_id': window.course_id	/*大课,原js已经设有该变量*/
	});
	NoteList.loadNext();
	NoteList.resetParm(basic_params);
	setTimeout(function(){document.getElementById('mexpand').click();}, mtimeout);
};

/*从标签中提取笔记*/
function collectNotes(){
	var items = $("ul#NoteList li.item");
	var notes = '';
	if(items && items.length>0){
		console.debug('items.length=',items.length);
		for(var i=0; i<items.length; i++){
			if(!items[i].getElementsByClassName)
				continue;
			var author = items[i].getElementsByClassName('blue')[0].innerText;
			var data = items[i].getElementsByClassName('date')[0].innerText;
			var content = items[i].getElementsByClassName('content')[0].textContent.replace(/收起↑|展开↓/g, '');
			notes += data+' by '+author+'\n'+content+'\n\n\n\n';
		}
	}
	console.debug('notes=', notes);
	return notes;
};

/*关闭笔记内容导出面板*/
function closeExportNotePanel(){
	var t = document.getElementById('notes_panel');
	if(t){t.parentNode.removeChild(t);t=null;}
};

/*导出笔记到面板*/
function openExportNote(){
	document.body.insertAdjacentHTML("afterBegin",notes_panel_html.format(collectNotes()));
};

/*变色*/
function changeColor(e){
	Array.prototype.forEach.apply($("#con_toolstab_2 .listTitle p"),[(current,index) => {
		current.className = 'fl';
	}]);
	e.className = 'fl cur';
	$("div.listList").css('margin-top', '50px');
	var export_p = document.getElementById('export_p');
	if(export_p){
		export_p.parentNode.removeChild(export_p);
	}/*else{*/
		export_p = null;
		export_p=document.createElement('p');
		export_p.id='export_p';
		export_p.addEventListener('click', openExportNote);
		export_p.innerText="导出";
		export_p.title='导出当前笔记内容';	
	/*}*/
	e.appendChild(export_p);
};


/*加载显示本人当前正在观看的课程笔记*/
function showMyNotesInLesson(e){
	getNotes(size=100, is_me=1, lesson_id=null);
	changeColor(e);
};

/*加载显示当前正在观看的所有课程笔记*/
function showAllNotesInLesson(e){
	getNotes(size=1000, is_me=0);
	changeColor(e);
};

/*加载显示本人所有课程笔记*/
function showMyNotesInCourse(e){
	getNotes(size=500, is_me=1, lesson_id=window.M.mlesson_ids);
	changeColor(e);
};

/*加载显示所有人的所有课程笔记*/
function showAllNotesInCourse(e){
	getNotes(size=1000, is_me=0, lesson_id=window.M.mlesson_ids);
	changeColor(e);
};

/*获取当前观看的课程id*/
function getPresentLessonId(){
	return parseInt(window.location.search.split('lessonId=')[1]);
};

/*获取所有课程id*/
function getLessonIds(){
	window.M.mlesson_ids = []; /*set无序，用列表*/
	Array.prototype.forEach.apply($("a.active"),[(current,index) => {
		window.M.mlesson_ids.push(parseInt(current.href.split('lessonId=')[1]));
	}]);
	window.M.mlesson_ids.unshift(getPresentLessonId());
	window.M.mlesson_ids = Array.from(new Set(window.M.mlesson_ids));
	return window.M.mlesson_ids;
};


/*替换笔记模块*/
function replaceNotePanel(){
	var html = ''+
	'<p onclick="showMyNotesInLesson(this)" class="fl cur" type="mine" title="我的单元笔记，原我的笔记">我的</p><!--我的笔记-->' +
	'<p onclick="showMyNotesInCourse(this)" class="fl" type="mine2" title="我的课程笔记">我的s</p>' +
	'<p onclick="showAllNotesInLesson(this)" class="fl" type="all" title="全部单元笔记，原全部笔记">全部</p><!--全部笔记-->' +
	'<p onclick="showAllNotesInCourse(this)" class="fl" type="all2" title="全部课程笔记">全部s</p>' +
	'<pp id="mexpand" onclick="expandNoteCtrl(this)" class="fl" style="cursor:pointer;" type="self_def" title="点击展开↓笔记">展开↓</pp>' +
	/*'<br>' +
	'<p onclick="showMyNotesInLesson()" class="fl cur" type="mine" title="导出 我的单元笔记，原我的笔记">导出</p><!--我的笔记-->' +
	'<p onclick="showMyNotesInCourse()" class="fl" type="mine2" title="导出s 我的课程笔记">导出s</p>' +
	'<p onclick="showAllNotesInLesson()" class="fl" type="all" title="导出 全部单元笔记，原全部笔记">导出</p><!--全部笔记-->' +
	'<p onclick="showAllNotesInCourse()" class="fl" type="all2" title="导出s 全部课程笔记">导出s</p>' +
	*/
	'';
	$("#con_toolstab_2 .listTitle").html(html);
};


function init(){
	window.M = {};/*私域*/
	window.M.mlesson_id = getPresentLessonId();
	window.M.mlesson_ids = getLessonIds();
	replaceNotePanel();
	console.debug('笔记模块已重置');
	$("#con_toolstab_2 .listTitle p")[0].click();
};
window.onload=init();
