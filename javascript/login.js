function $id(id){
    return document.getElementById(id);
} 

function loginForm(e){
    let memAccount = $id("user-account");
    let memPassword = $id("user-password");
    // 檢查帳號和密碼欄位是否空白
    if(memAccount.value=="" || memPassword.value == ""){
        alert("帳號、密碼不得空白");
        e.preventDefault();
        return;
    }


    let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; //email的正規表達式
    let accountCheck = /(^09\d{8}$)|(^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$)/; //email或手機號碼的正規表達式
    let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;  //密碼的正規表達式
    let accountValid = accountCheck.test(memAccount.value); //帳號過
    let passwordValid = passwordCheck.test(memPassword.value); //密碼過

    console.log("帳號",accountValid);
    console.log("密碼",passwordValid);

    
    // 帳號驗證
    if (memAccount.value.search(accountCheck)==-1){
            document.getElementById("accountTips").innerText = "帳號格式錯誤";
            document.getElementById("accountTips").style.color ="red";
            memAccount.value ="";
            memAccount.focus();
            e.preventDefault();
    }else{
        document.getElementById("accountTips").style.display = "none";
    }

    // 密碼驗證
    if (memPassword.value.search(passwordCheck)==-1){
        document.getElementById("passwordTips").innerText = "密碼長度為8~25字元且包含英文大小寫及數字";
        document.getElementById("passwordTips").style.color ="red";
        memPassword.value ="";
        memPassword.select();
        e.preventDefault();
    }else{
        document.getElementById("passwordTips").style.display = "none";
    }

    // 如果帳號和密碼都驗證通過，就跳轉到首頁
    if (accountValid && passwordValid) return window.location.replace('/index.html');

    
}


window.addEventListener( "load" , function (){
    document.getElementById("memLogin").onsubmit = loginForm;
  });