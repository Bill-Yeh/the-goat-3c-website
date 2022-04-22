//點擊按鈕切換手機圖片和顏色名稱

window.addEventListener("load", function() {
    // 按鈕
    let colorBtn = document.getElementsByClassName("colorMenu");
    let colorBtn2 = document.getElementsByClassName("colorMenu2");

    // 圖片
    let phonePicture = document.getElementsByClassName("smartPhone");
    let phonePicture2 = document.getElementsByClassName("smartPhone2");
    // 文字
    let colorText = this.document.getElementsByClassName("color-txt");
    let colorText2 = this.document.getElementsByClassName("color-txt2");

    // 圖卡1
    for (let i = 0; i < colorBtn.length; i++) {
        // 顏色名稱
        colorText[i].style.display = "none";
        colorText[0].style.display = "block";

        // 手機圖片
        phonePicture[i].style.display = "none";
        phonePicture[0].style.display = "block";

        colorBtn[i].addEventListener("click", function() {
            colorText[i].style.display = "block";
            phonePicture[i].style.display = "block";
            for (let j = 0; j < colorBtn.length; j++) {
                if (i != j) {
                    phonePicture[j].style.display = "none";
                    colorText[j].style.display = "none";
                }
            }
        });
    };

    // 圖卡2
    for (let i = 0; i < colorBtn2.length; i++) {
        // 顏色名稱
        colorText2[i].style.display = "none";
        colorText2[0].style.display = "block";

        // 手機圖片
        phonePicture2[i].style.display = "none";
        phonePicture2[0].style.display = "block";

        colorBtn2[i].addEventListener("click", function() {
            colorText2[i].style.display = "block";
            phonePicture2[i].style.display = "block";
            for (let j = 0; j < colorBtn2.length; j++) {
                if (i != j) {
                    phonePicture2[j].style.display = "none";
                    colorText2[j].style.display = "none";
                }
            }
        });
    };
});