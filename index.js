const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "1234567890";
const symbols = "!£$%&^*()[]{};/|<>?";





function makePass(lenLets = 5, lenLetsUpp = 5, lenNums = 5, lenSymbols = 5) {
    let pass = "";

    const rand = (arr) => {
    return Math.floor(Math.random() * arr.length);
    }
    
    for(let i = 0; i < lenLets; i++){
        pass += letters[rand(letters)];
    }
    for(let i = 0; i < lenLetsUpp; i++){
        pass += lettersUpper[rand(lettersUpper)];
    }
    for(let i = 0; i < lenNums; i++){
        pass += nums[rand(nums)];
    }
    for(let i = 0; i < lenSymbols; i++){
        pass += symbols[rand(symbols)];
    }

    pass = pass.split("");

    for (let i = pass.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        pass.push(pass[randomIndex]);
        pass.splice(randomIndex, 1);
    }
    pass = pass.join("");
    return pass;
}

console.log(makePass());