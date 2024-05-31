const players = ["🐘", "🐯", "🐒", "🕊️️"]

getEmojiForPlayerNumber = (num) => {
if (5 > num) {
    return players[num-1]}
else {
    return "Player " + num
}
}

console.log(getEmojiForPlayerNumber(1), "expected: 🐘")
console.log(getEmojiForPlayerNumber(2), "expected: 🐯")
console.log(getEmojiForPlayerNumber(3), "expected: 🐒")
console.log(getEmojiForPlayerNumber(4), "expected: 🕊️")
console.log(getEmojiForPlayerNumber(5), "expected: Player 5")