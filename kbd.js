/*テーブルを取得*/
var tbl=document.getElementById('data_tbl').getElementsByTagName('tr');



/*ループで回す*/
for(var i=1;i<=51;i++){
	alert(tbl.item(i).getElementsByTagName('a').item(0).href.slice(-1));
	
}
//item(i).getElementsByTagName('a').item(0).href.slice(-1)
