// 圖片變大
function showLarge(e) {
    document.getElementById("large").src = e.target.src;
    return;
}

// 圖片加邊框線
function highlight(e) {
    // let goodsPic = document.getElementById("first");
    // let goodsIn = window.getComputedStyle(goodsPic, "::after");
    // console.log(goodsIn.border);
    let goodsPic = e.target;
    goodsPic.style.border = "1px solid #3681FF";
    return;
}
// 圖片移除邊框線
function normal(e) {
    let goodsOut = e.target;
    goodsOut.style.border = "none";
    return;
}


// 愛心
function switchHeart() {
    let heart = document.getElementById("white");
    if (heart.title == "加入收藏") {
        heart.src = "../picture/heart-white.png";
        heart.title = "取消收藏";
    } else {
        heart.src = "../picture/heart-red.png";
        heart.title = "加入收藏";
    }
}

function init() {
    // 切換圖片
    let imgs = document.querySelectorAll(".s22-ultra-product-real-photo");
    for (let i = 0; i < imgs.length; i++) {
        // imgs[i].onclick = showLarge;
        imgs[i].onmouseover = showLarge;
    }
    // 添加邊框線
    let imgBorder = document.getElementsByClassName("goodsItem")
    for (let j = 0; j < imgBorder.length; j++) {
        imgBorder[j].onmouseover = highlight;
        imgBorder[j].onmouseout = normal;
    }
    document.getElementById("white").onclick = switchHeart;
}

window.addEventListener("load", init, false);




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