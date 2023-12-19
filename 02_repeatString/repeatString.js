const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let appendedString = "";
    for (let i = 0; i < num; i++) {
        appendedString += word;
    }
    return appendedString;
};

// Do not edit below this line
module.exports = repeatString;
