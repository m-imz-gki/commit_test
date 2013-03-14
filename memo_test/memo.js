// ページロード時にonWindowLoad関数を呼び出す -------------------------------------------------------------------------------------------
window.addEventListener ( "load", onWindowLoad, false );


// ページロード時にローカルストレージに保存されたデータがあれば読み込む -----------------------------------------------------------------
function onWindowLoad(){
	var dataArea	= localStorage.getItem("data_key");	// ローカルストレージからキー"data_key"でデータを取得
	var dispArea	= localStorage.getItem("disp_key");	// ローカルストレージからキー"disp_key"でデータを取得
			
	if(dataArea != null ){														// dataがnullじゃない、何か入ってるとき
		document.getElementById('disp').innerHTML = dataArea;					// 取得したデータを表示する
		
		if(dispArea != null){													// dispもnullじゃない、何か入ってるとき
			document.getElementById('disp').innerHTML = dataArea + dispArea;	// キー"data_key"のデータと合わせて表示する
		}
		
	}
	// else { disp.innerHTML = " " } は当たり前だからあえて書かないで大丈夫
}


// 保存ボタンを押した時にデータを書き込む -----------------------------------------------------------------------------------------------
function onSaveClick(){
	var dataform	= document.getElementById("data");		// テキストボックスに入力したデータを取得

	if(dataform.value != ""){											// テキストボックスにデータが入力されていた場合
		localStorage.setItem("data_key", dataform.value + "<br />");	// 入力されたデータをローカルストレージに登録（キーは"data_key"）
	}
	
	if(disp.innerHTML != ""){								// 表示部分にデータがある場合	
		localStorage.setItem("disp_key", disp.innerHTML);	// 表示されている内容をローカルストレージに登録（キーは"disp_key"）
	}
	
	if(dataform.value == ""){								// テキストボックスにデータ入力なしで保存ボタンを押した場合
		localStorage.setItem("data_key", "" + "<br />");	// 空白＋改行
	}

}


// 消去ボタンを押した時にデータを消去する -----------------------------------------------------------------------------------------------
function onDeleteClick(){
	localStorage.removeItem("data_key");	// ローカルストレージにキー"data_key"で登録されているデータを消去
	localStorage.removeItem("disp_key");	// ローカルストレージにキー"disp_key"で登録されているデータを消去
}