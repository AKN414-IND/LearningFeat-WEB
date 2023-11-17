document.addEventListener("DOMContentLoaded", function () {
    const a = document.getElementById("loanAmount");
    const b = document.getElementById("interestRate");
    const c = document.getElementById("loanTenure");
    const Button = document.getElementById("Button");
    const r = document.getElementById("result");

    Button.addEventListener("click", function () {
        const loanAmount = parseFloat(a.value);
        const interestRate = parseFloat(b.value);
        const loanTenure = parseFloat(c.value);

        if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTenure)) {
            const monthlyInterestRate = (interestRate / 100) / 12;
            const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) /
                (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

            r.innerText = `EMI: ₹${emi.toFixed(2)}`;
        } else {
            r.innerText = "Please enter valid numbers.";
        }
    });
});