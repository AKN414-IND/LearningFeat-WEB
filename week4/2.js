document.addEventListener("DOMContentLoaded", function () {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const button = document.getElementById("button");
    const p = document.getElementById("result");

    function add() {
        const result = parseFloat(a.value) + parseFloat(b.value) ;
        if (isNaN(result)) {
            p.innerText = "enter valid numbers";
            return;
        }
        p.innerText = result;
    }

    button.addEventListener("click", add);
});
