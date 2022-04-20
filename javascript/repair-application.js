function $id(id){
    return document.getElementById(id);
} 

function applicationForm(e){

    // 確認產品序號是否填入
    let serialNum = $id("serial-number");
    if(serialNum.value == ""){
        alert("請輸入產品序號");
        e.preventDefault();
        return;
    }

    // 檢查產品序號是否符合格式
    let serialCheck = /^[A-Z]\d{5}/; //第一個字須為大寫英文，後面為6個數字
    let serialValid = serialCheck.test(serialNum.value); //序號過
    console.log("序號",serialValid);

    if(serialNum.value.search(serialCheck) == -1){
        alert("產品序號格式錯誤");
        e.preventDefault();
        return;
    }

    // 確認門市據點是否選擇
    let store = $id("physical-store");
    if(store.selectedIndex == 0){
        alert("請選擇門市據點");
        e.preventDefault();
        return;
    }

    // 確認預約日期是否選擇

}

window.addEventListener( "load" , function (){
    document.getElementById("applicationSend").onclick = applicationForm;
});