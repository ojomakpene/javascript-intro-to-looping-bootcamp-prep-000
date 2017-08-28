function forLoop(array) {
const j = []
for (var i = 0; i <25; i++) {
if (i ===1) {
  j.push('I am 1 strange loop.')
}
else {
  j.push(`I am ${i} strange loops.`)
}
}
return console.log(j)
}

