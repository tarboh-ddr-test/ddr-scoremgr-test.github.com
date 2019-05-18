/*テーブルを取得*/
var tbl=document.getElementById('data_tbl').getElementsByTagName('tr');



/*ループで回す*/
for(var i=1;i<=50;i++){
	switch(tbl.item(i).getElementsByTagName('a').item(0).href.slice(-1)){
		case 0:alert('bSP');break;
		case 1:alert('BSP');break;
		case 2:alert('DSP');break;
		case 3:alert('ESP');break;
		case 4:alert('CSP');break;
		case 5:alert('BDP');break;
		case 6:alert('DDP');break;
		case 7:alert('EDP');break;
		case 8:alert('CDP');break;
	}
	
}
//item(i).getElementsByTagName('a').item(0).href.slice(-1)