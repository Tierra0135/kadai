const profile = {
    '名前': ' 川広涼葉',
    '年齢':'20歳',
    '趣味': '音楽',
    '専攻': '日本文化情報学',
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('私の ' + key + ' は ' + value + ' です。')
}