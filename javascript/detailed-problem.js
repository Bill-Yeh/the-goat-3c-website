function $id(id) {
    return document.getElementById(id);
}

function problemForm(e) {
    let problemType = $id("problem");

    if (problemType.selectedIndex == 0) {
        alert("請選擇問題類型");
        return;
    }

    if (problemType.selectedIndex != 0) return window.location.replace('online-repair-appointment-finish.html');
}

window.addEventListener("load", function() {
    document.getElementById("problem-submit").onsubmit = problemForm;
});