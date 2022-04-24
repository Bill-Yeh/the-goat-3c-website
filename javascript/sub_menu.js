window.addEventListener("load", function() {

    // 欄位1選項
    let col1 = document.getElementsByClassName("itemType");

    // 欄位2選項
    let col2 = this.document.getElementsByClassName("dropDown-menu-column-series");

    // 欄位3選項
    let col3 = document.getElementsByClassName("dropDown-menu-column-hot");

    for (let i = 0; i < col1.length; i++) {
        col1[0].style.backgroundColor = "grey";
        col1[0].style.borderRadius = "30px";
        col2[i].style.display = "none";
        col2[0].style.display = "block";
        col3[0].style.display = "block";

        col1[i].addEventListener("mouseover", function() {
            col1[i].style.backgroundColor = "grey";
            col1[i].style.borderRadius = "30px";
            col1[i].style.transition = "0.3s";
            col2[i].style.display = "block";
            col3[i].style.display = "block";

            for (let j = 0; j < col1.length; j++) {
                if (i != j) {
                    col1[j].style.backgroundColor = "transparent";
                    col2[j].style.display = "none";
                    col3[j].style.display = "none";
                }
            }
        })
    }


})