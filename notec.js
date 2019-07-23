
/*还原post参数*/
var basic_params = {
	lesson_id: _lid,
	course_id: course_id,
	is_me: 1,
	size: 20
};
/*延时展开*/
var mtimeout = 1500;

/*展开或收起笔记*/
function expandNoteCtrl(e){
	if(!e.innerText)
		return;
	var t = e.innerText=='展开' ? '收起' : '展开';
	e.innerText=t;
	e.title='点击'+ t +'每一条笔记';
	/*点击尾巴*/
	Array.prototype.forEach.apply($("span.lookAll"),[(current,index) => {
		current.click();
	}]);
};

/*获取笔记*/
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
	setTimeout(expandNoteCtrl, mtimeout);
};

/*变色*/
function changeColor(e){
	Array.prototype.forEach.apply($("#con_toolstab_2 .listTitle p"),[(current,index) => {
		current.className = 'fl';
	}]);
	e.className = 'fl cur';
}


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
	'<pp id="mexpand" onclick="expandNoteCtrl(this)" class="fl" type="self_def" title="点击展开笔记">展开</pp>' +
	/*'<br>' +
	'<p onclick="showMyNotesInLesson()" class="fl cur" type="mine" title="导出 我的单元笔记，原我的笔记">导出</p><!--我的笔记-->' +
	'<p onclick="showMyNotesInCourse()" class="fl" type="mine2" title="导出 我的课程笔记">导出</p>' +
	'<p onclick="showAllNotesInLesson()" class="fl" type="all" title="导出 全部单元笔记，原全部笔记">导出</p><!--全部笔记-->' +
	'<p onclick="showAllNotesInCourse()" class="fl" type="all2" title="导出 全部课程笔记">导出</p>' +
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
};
init();







