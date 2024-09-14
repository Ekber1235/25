
        const userInput = prompt("Mətni daxil edin:");

        const hasDigit = userInput.replace(/[0-9]/gi,"")

        if (hasDigit) {
            alert("Mətndə rəqəm yoxdur.");

        } else {
            alert("Mətndə rəqəm var.");

        }