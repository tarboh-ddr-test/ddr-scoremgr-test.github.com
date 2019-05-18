/*テーブルを取得*/
var tbl=document.getElementById('data_tbl').getElementsByTagName('tr');



/*ループで回す*/
for(var i=1;i<=50;i++){
	var dif;
	switch(tbl.item(i).getElementsByTagName('a').item(0).href.slice(-1)){
		case '0':dif='bSP';break;
		case '1':dif='BSP';break;
		case '2':dif='DSP';break;
		case '3':dif='ESP';break;
		case '4':dif='CSP';break;
		case '5':dif='BDP';break;
		case '6':dif='DDP';break;
		case '7':dif='EDP';break;
		case '8':dif='CDP';break;
	}
	tbl.item(i).getElementsByClassName('diff').item(0).innerText=dif;

}