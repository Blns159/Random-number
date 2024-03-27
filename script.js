document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    let hasGenerated = false;

    generateBtn.addEventListener("click", function() {
        if (!hasGenerated) {
            const randomNumber = getRandomNumber(1, 200);
            resultDiv.innerText = "Your Number: " + randomNumber;
            hasGenerated = true;
            generateBtn.disabled = true;
        }
    });

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});