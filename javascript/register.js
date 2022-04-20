function $id(id){
    return document.getElementById(id);
} 

function registerForm(e){
    let newAccount = $id("user-register");
    let newPassword = $id("password-register");
    let confirmPassword = $id("password-confirm");

    // 檢查帳號和密碼欄位是否空白
    if(newAccount.value=="" || newPassword.value == "" || confirmPassword.value == ""){
        alert("帳號、密碼與確認密碼欄位不得空白");
        e.preventDefault();
        return;
    }

    let accountReg = /(^09\d{8}$)|(^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$)/; //email或手機號碼的正規表達式
    let passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;  //密碼的正規表達式
    let AccountValid = accountReg.test(newAccount.value); //帳號過
    let PasswordValid = passwordReg.test(newPassword.value); //密碼過
    let confirmId = newPassword.value; //確認密碼

    console.log("帳號",AccountValid);
    console.log("密碼",PasswordValid);
    console.log("確認密碼",confirmId);

    // 帳號驗證
    if (newAccount.value.search(accountReg)==-1){
        document.getElementById("register-account-tips").innerText = "帳號格式錯誤";
        document.getElementById("register-account-tips").style.color ="red";
        newAccount.value ="";
        newAccount.focus();
        e.preventDefault();
    }else{
        document.getElementById("register-account-tips").style.display = "none";
    }

    // 密碼驗證
    if (newPassword.value.search(passwordReg)==-1){
        document.getElementById("register-password-tips").innerText = "密碼長度為8~25字元且包含英文大小寫及數字";
        document.getElementById("register-password-tips").style.color ="red";
        newPassword.value ="";
        newPassword.select();
        e.preventDefault();
    }else{
        document.getElementById("register-password-tips").style.display = "none";
    }

    // 確認密碼驗證
    if(confirmPassword.value != newPassword.value){
        document.getElementById("confirm-id").innerText = "確認密碼錯誤";
        document.getElementById("confirm-id").style.color = "red";
        confirmPassword.value = "";
        confirmPassword.select();
        e.preventDefault();
    }else{
        document.getElementById("confirm-id").style.display = "none";
    }

    
    // 隱私條款打勾驗證
    let privacyTick = $id("privacy");
    // privacyTick.type == "checkbox";
    if(privacyTick.checked ==false){
        console.log(privacyTick.checked);
        alert("請勾選同意隱私條款");
    }



    // 如果帳號、密碼、確認密碼和隱私條款都驗證通過，就跳轉到首頁
    if (AccountValid && PasswordValid && confirmPassword.value == newPassword.value && privacyTick.checked == true) return window.location.replace('/index.html');
}





window.addEventListener( "load" , function (){
    document.getElementById("memRegister").onsubmit = registerForm;
});