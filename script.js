console.log("n0mer 1");
let someNumb = "1357";
function checkNumb() {
    let splitss = someNumb.split("");
    for (const elem of splitss) {
        if (elem % 2 !== 0) {
            return true + " " + "числа цього масива непарні"
        }else{
            return false + " " + "числа цього масива парні"
        }
    }
}
console.log(checkNumb());
console.log(" ");

console.log("n0mer 2");
let txt = "adad dfshi ouuo qead aaadadad ljlj lsajdljas ataatdaflkjlkj, klkkdsa, aarrararfsaa";
function arrOfTxt() {
    const aArr = []
    let spllit = txt.split(" ");
     for (const elem of spllit) {
        if (elem[0] == "a") {
            aArr.push(elem) 
        }
    }
    return aArr;
}
console.log(arrOfTxt());
console.log(" ");

console.log("nomer 3");
const numbArr = [123, 10, 1238, 101, -30013, 9];
function arrOnlyZero() {
    for (const elem of numbArr) {
        if (elem !== 0) {
            numbArr.pop(elem);
        }
    }
    return numbArr;
}
console.log(arrOnlyZero());