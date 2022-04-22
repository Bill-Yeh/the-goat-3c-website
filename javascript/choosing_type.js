//點擊按鈕切換手機圖片和顏色名稱

window.addEventListener("load",function(){
    let colorBtn = document.getElementsByClassName("colorMenu");
    let phonePicture = document.getElementsByClassName("smartPhone");
    let colorText = this.document.getElementsByClassName("color-txt");
   

    for(let i = 0; i<colorBtn.length; i++){
        // 顏色名稱
        colorText[i].style.display = "none";
        colorText[0].style.display = "block";

        // 手機圖片
        phonePicture[i].style.display = "none";
        phonePicture[0].style.display = "block";

        colorBtn[i].addEventListener("click",function(){
            colorText[i].style.display = "block";
            phonePicture[i].style.display = "block";
            for(let j=0; j<colorBtn.length; j++){
                if(i != j){
                    phonePicture[j].style.display = "none";
                    colorText[j].style.display = "none";
                }
            }
        });
    };
});
