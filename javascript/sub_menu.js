$(function() {
    let screenWidth = screen.width;
    console.log("解析度:", screenWidth);

    // 桌機板
    if (screenWidth > 1200) {
        // 次選單容器
        $('.main-menu').hover(function() {
            $('.mobile-dropDown-menu-wrap').slideDown();
        })
        $('.dropdown-menu-close').click(function() {
            $('.mobile-dropDown-menu-wrap').slideUp();
        })
    }

    // ipad Pro 1024
    if (screenWidth > 992 && screenWidth < 1200) {
        // 次選單容器
        $('.main-menu').click(function() {
            $('.mobile-dropDown-menu-wrap').slideDown();
        })
        $('.dropdown-menu-close').click(function() {
            $('.mobile-dropDown-menu-wrap').slideUp();
        })
    }

    // 手機+平板
    if (screenWidth < 992) {
        $('.main_mobile').click(function() {
            $('.rwd_phone').slideToggle();
            $('.rwd_pc').slideUp();
            $('.rwd_component').slideUp();
        })
        $('.main_pc').click(function() {
            $('.rwd_pc').slideToggle();
            $('.rwd_phone').slideUp();
            $('.rwd_component').slideUp();
        })
        $('.main_component').click(function() {
            $('.rwd_component').slideToggle();
            $('.rwd_pc').slideUp();
            $('.rwd_phone').slideUp();
        })
        $('.rwd-nav-hb').click(function() {
            $('.rwd_phone').hide();
            $('.rwd_pc').hide();
            $('.rwd_component').hide();
        })

        // 欄位2+欄位3
        $('.rwd_itemType').click(function() {
            $('.mobile-dropDown-menu-wrap').animate({ left: '0%' })
        })
        $('.bi-arrow-left').click(function() {
            $('.mobile-dropDown-menu-wrap').animate({ left: '2000px' })
        })
        $('.rwd-nav-hb').click(function() {
            $('.mobile-dropDown-menu-wrap').animate({ left: '2000px' })
        })
    }
})




window.addEventListener("load", function() {

    // 欄位1選項
    let col1 = document.getElementsByClassName("itemType");
    let col1Arrow = document.getElementsByClassName("sub-menu-arrow");

    // 欄位2選項
    let col2 = this.document.getElementsByClassName("dropDown-menu-column-series");

    // 欄位3選項
    let col3 = document.getElementsByClassName("dropDown-menu-column-hot");

    let deviceWidth = screen.width;

    // 桌機
    if (deviceWidth > 1200) {
        for (let i = 0; i < col1.length; i++) {
            col1[0].style.backgroundColor = "grey";
            col1[0].style.borderRadius = "30px";
            col1Arrow[0].style.display = "block";
            col2[i].style.display = "none";
            col2[0].style.display = "block";
            col3[0].style.display = "block";

            col1[i].addEventListener("mouseover", function() {
                col1[i].style.backgroundColor = "grey";
                col1[i].style.borderRadius = "30px";
                col1[i].style.transition = "0.1s";
                col1Arrow[i].style.display = "block";
                col2[i].style.display = "block";
                col3[i].style.display = "block";

                for (let j = 0; j < col1.length; j++) {
                    if (i != j) {
                        col1[j].style.backgroundColor = "transparent";
                        col1Arrow[j].style.display = "none";
                        col2[j].style.display = "none";
                        col3[j].style.display = "none";
                    }
                }
            })
        }
    }

    if (deviceWidth > 992 && deviceWidth < 1200) {
        for (let i = 0; i < col1.length; i++) {
            col1Arrow[0].style.display = "block";
            col2[i].style.display = "none";
            col2[0].style.display = "block";
            col3[0].style.display = "block";

            col1[i].addEventListener("click", function() {
                col1Arrow[i].style.display = "block";
                col2[i].style.display = "block";
                col3[i].style.display = "block";

                for (let j = 0; j < col1.length; j++) {
                    if (i != j) {
                        col1Arrow[j].style.display = "none";
                        col2[j].style.display = "none";
                        col3[j].style.display = "none";
                    }
                }
            })
        }
    }

    let rwdCol1 = document.getElementsByClassName("rwd_itemType");

    if (deviceWidth < 992) {
        for (let i = 0; i < col1.length; i++) {
            col1Arrow[0].style.display = "block";
            col2[i].style.display = "none";
            col2[0].style.display = "block";
            col3[0].style.display = "block";

            rwdCol1[i].addEventListener("click", function() {
                col1Arrow[i].style.display = "block";
                col2[i].style.display = "block";
                col3[i].style.display = "block";

                for (let j = 0; j < col1.length; j++) {
                    if (i != j) {
                        col1Arrow[j].style.display = "none";
                        col2[j].style.display = "none";
                        col3[j].style.display = "none";
                    }
                }
            })
        }
    }
})