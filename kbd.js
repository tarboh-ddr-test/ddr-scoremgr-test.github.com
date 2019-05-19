/*テーブルを取得*/
var tbl=document.getElementById('data_tbl').getElementsByTagName('tr');

// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
    request.open('GET', 'https://script.google.com/macros/s/AKfycbxUdTytsCeVVB5xrS4nNE6Cmie28Sxl5zCGyQqgdpEHPyjGIKIy/exec', true);
    request.responseType = 'json';

    request.onload = function () {
      var data = this.response;
      console.log(data);
    };

    request.send();
    
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

/*
スプレッドシートのキー
10wIJ2UYZwmD6z8fQVZ1bVoJ97QfAgutqwleZfVdzAXI

シートのID
0

Google API?のアクセストークン
1/P4x8IwMH_mxBTf1cZlv5XhXzB3TehQhcUzFP6oW_jMvpz5QlSTfoDbEKB2ojTppt


list apiのURL
https://script.google.com/d/1yCVjq0IePq67a22HM4Fba0Z84wSiBvGyEY-Fr7WrwwkZ1RmSW5eMFCzR/edit?uiv=2&mid=ACjPJvFw3Q4QKD1o_FEiczAB8gdTkI169C4O1CUEOQTf4uNtpY39PayltEqQ-p0ROdzvf3ox6Xcrd3EAmXNhfm-aX9zTK62MjP_g_8sQkIOqAH2LRcGKLdvuI5DB_PIL5eHDxSejwvP_lHhe7mzYMqO4rMtBaJvl6hS3zN70AKZZ71TlNhFXGPhXFw&splash=yes

上記のwebアプリケーションとしてのurl
https://script.google.com/macros/s/AKfycbxUdTytsCeVVB5xrS4nNE6Cmie28Sxl5zCGyQqgdpEHPyjGIKIy/exec


楽曲の難易度一覧をJSONとして取得するAPI
https://script.google.com/macros/s/AKfycbxUdTytsCeVVB5xrS4nNE6Cmie28Sxl5zCGyQqgdpEHPyjGIKIy/exec

*/

