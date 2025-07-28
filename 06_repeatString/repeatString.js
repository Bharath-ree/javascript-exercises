const repeatString = function(string, num) {
let result = '';
for (let i = 0; i < num; i++) {
    result += string;

}
    repeatString('hey', 3) 
};
// arrow function method( mulitple lines therfore {} meeded)
const repeatString = (string, num) =>  {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
}





// Do not edit below this line
module.exports = repeatString;
