// 愛心
function switchHeart() {
    let heart = document.getElementById("white_like_img");
    if (heart.title == "加入收藏") {
        heart.src = "./picture/heart-red.png";
        heart.title = "取消收藏";
    } else {
        heart.src = "./picture/heart-white.png";
        heart.title = "加入收藏";
    }
}

// 圖片變大
function showLarge(e) {
    document.getElementById("large").src = e.target.src;
}


function init() {
    document.getElementById("white_like_img").onclick = switchHeart;

    // 切換圖片
    let imgs = document.querySelectorAll(".s22-ultra-product-real-photo");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
        // imgs[i].onmouseover = showLarge;
        // imgs[i].onmouseout = sameSize;
    }
    // 添加邊框線
    // let imgBorder = document.getElementsByClassName("goodsItem")
    // for (let j = 0; j < imgBorder.length; j++) {
    //     imgBorder[j].onmouseover = highlight;
    //     imgBorder[j].onmouseout = normal;
    // }
}

window.addEventListener("load", init, false);


// function sameSize(e) {
//     document.getElementById("large").src = e.target.src;
// }

// 圖片加邊框線
// function highlight(e) {
//     // let goodsPic = document.getElementById("first");
//     // let goodsIn = window.getComputedStyle(goodsPic, "::after");
//     // console.log(goodsIn.border);
//     let goodsPic = e.target;
//     goodsPic.style.border = "1px solid #3681FF";
//     return;
// }
// // 圖片移除邊框線
// function normal(e) {
//     let goodsOut = e.target;
//     goodsOut.style.border = "none";
//     return;
// }


$(document).ready(function() {

    $(".s22-list-title-1").click(function() {
        $(".product-all-feature").slideToggle();
    })

    $(".s22-list-title-2").click(function() {
        $(".product-size-demonstrate").slideToggle();
    })

    $(".s22-list-title-3").click(function() {
        $(".box-content").slideToggle();
    })

    $(".s22-list-title-4").click(function() {
        $(".shopping-faq").slideToggle();
    })
})