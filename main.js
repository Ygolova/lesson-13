var myNum = 10
var myStr = 'строка'
var myBool = true
var myArr = [1, 2, 3, 4, 5]
var myObj = {first: 'First Name', last: 'Last Name'}

var decimal2 = (myNum.toFixed(2))

var i = 100

var myTest = 20
var myPi = Math.PI
var myRound = Math.round(89.279)
var myRandom = (Math.random()*10)
var myPow = (Math.pow(3,5))

var strObj = {str: "Мама мила раму, рама мила маму"}
strObj.length = strObj.str.length

var isRamaPos = strObj.str.indexOf("рама")

var x = strObj.str.replace('мила', 'моет');
var strReplace = x.replace('рама мила', 'Рама держит');

var up = strReplace.toUpperCase()
var down = up.toLowerCase()


console.log(myStr)
console.log(myBool)
console.log(myArr)
console.log(myObj)

console.log(decimal2)

console.log(++i)
console.log(i++)
console.log(--i)
console.log(i--)

console.log(myTest /= 10)
console.log(myTest += 10)
console.log(myTest -= 10)
console.log(myTest *= 10)
console.log(myTest %= 10)

console.log(myPi)
console.log(myRound)
console.log(myRandom)
console.log(myPow)

console.log(strObj)
console.log(strObj.str.length);
console.log(isRamaPos)
console.log(strReplace)

console.log(up)
console.log(down)