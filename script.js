var generate = document.getElementById("generate")
function passwordGenerator() {
    
    var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var spcChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
    
    var password = ""
    var x = 0
    var numSelect = 0
    var passwordChar = []
    var passwordTrans = document.getElementById("password");
    
    function pullCharArr(num, arr) {
        for (var i = 0; i < num; i++) {
            passwordChar.push(arr[Math.floor(Math.random() * (arr.length))])
        }
    }
    
    while (x < 1) {
        var totalChar = parseInt(prompt("How many characters long do you want your password to be?(chose a number between 8 and 128"))
        if ((totalChar >= 8) && (totalChar <= 128)) {
            x = 1
        } else {
            alert("Chosen number is outside of the acceptable range, hit ok to try again!")
        }
    }
    
    while (numSelect === 0) {
        alert("If you do not select at least 1 character type you will be forced to go back through the choices until you select at least 1")
        var lower = confirm("Do you want to include lower case characters?")
        if (lower === true) {
            numSelect++
        }
        var upper = confirm("Do you want to include upper case characters?")
        if (upper === true) {
            numSelect++
        }
        var num = confirm("Do you want to include number characters?")
        if (num === true) {
            numSelect++
        }
        var spc = confirm("Do you want to include special characters?")
        if (spc === true) {
            numSelect++
        }
    }
    
    var midNum = totalChar / numSelect
    var remainder = totalChar % numSelect
    var minExtra = (totalChar - remainder) / numSelect
    
    
    var numLower = minExtra
    var numUpper = minExtra
    var numSpc = minExtra
    var numNum = minExtra
    
    if (lower === true && upper === true && num === true && spc === true) {
        if (remainder === 1) {
            numLower++
        } else if (remainder === 2) {
            numLower++
            numUpper++
        } else if (remainder === 3) {
            numLower++
            numUpper++
            numSpc++
        } else { }
    } else if (upper === true && num === true && spc === true) {
        if (remainder === 1) {
            numNum++
            numLower = 0
        } else if (remainder === 2) {
            numNum++
            numUpper++
            numLower = 0
        } else {
            numLower = 0
        }
    } else if (lower === true && num === true && spc === true) {
        if (remainder === 1) {
            numLower++
            numUpper = 0
        } else if (remainder === 2) {
            numLower++
            numNum++
            numUpper = 0
        } else {
            numUpper = 0
        }
    } else if (lower === true && upper === true && spc === true) {
        if (remainder === 1) {
            numLower++
            numNum = 0
        } else if (remainder === 2) {
            numLower++
            numUpper++
            numNum = 0
        } else {
            numNum = 0
        }
    } else if (lower === true && upper === true && num === true) {
        if (remainder === 1) {
            numLower++
            numSpc = 0
        } else if (remainder === 2) {
            numLower++
            numUpper++
            numSpc = 0
        } else {
            numSpc = 0
        }
    } else if (num === true && spc === true) {
        if (remainder === 1) {
            numNum++
            numLower = 0
            numUpper = 0
        } else {
            numLower = 0
            numUpper = 0
        }
    } else if (lower === true && upper === true) {
        if (remainder === 1) {
            numLower++
            numNum = 0
            numSpc = 0
        } else {
            numNum = 0
            numSpc = 0
        }
    } else if (upper === true && num === true) {
        if (remainder === 1) {
            numUpper++
            numLower = 0
            numSpc = 0
        } else {
            numLower = 0
            numSpc = 0
        }
    } else if (lower === true && num === true) {
        if (remainder === 1) {
            numLower++
            numUpper = 0
            numSpc = 0
        } else {
            numUpper = 0
            numSpc = 0
        }
    } else if (lower === true && spc === true) {
        if (remainder === 1) {
            numLower++
            numUpper = 0
            numNum = 0
        } else {
            numUpper = 0
            numNum = 0
        }
    } else if (upper === true && spc === true) {
        if (remainder === 1) {
            numUpper++
            numLower = 0
            numNum = 0
        } else {
            numLower = 0
            numNum = 0
        }
    } else if (lower === true) {
        numUpper = 0
        numNum = 0
        numSpc = 0
    } else if (upper === true) {
        numLower = 0
        numNum = 0
        numSpc = 0
    } else if (num === true) {
        numLower = 0
        numUpper = 0
        numSpc = 0
    } else if (spc === true) {
        numLower = 0
        numUpper = 0
        numNum = 0
    } else { }
    
    
    pullCharArr(numLower, lowerChar)
    pullCharArr(numUpper, upperChar)
    pullCharArr(numNum, numChar)
    pullCharArr(numSpc, spcChar)
    
    for (let i = (passwordChar.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = passwordChar[i]
        passwordChar[i] = passwordChar[j]
        passwordChar[j] = temp
    }
    
    for (var i = 0; i < passwordChar.length; i++) {
        password = password + passwordChar[i]
    }

    passwordTrans.textContent = password;
    //add print out to html for final password!!!
    
    // alert("Your password is: " + password + "    Password length: " + passwordChar.length)
}


generate.addEventListener("click", passwordGenerator);