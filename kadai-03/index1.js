// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたは活発な性格です')
} else if (day % 3 === 1) {
    console.log('あなたは神経質な性格です')
} else {
    console.log('あなたは陽気な性格です')
}