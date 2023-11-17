document.addEventListener("DOMContentLoaded", function () {
    const die = document.getElementById("die");
    const rollButton = document.getElementById("rollButton");

    function rollDice() {
        const randomValue1 = Math.floor(Math.random() * 6) + 1;
        die.innerText = randomValue1;
    }

    rollButton.addEventListener("click", rollDice);
});
