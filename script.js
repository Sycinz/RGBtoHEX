const rgbArr = [[243, 12, 85], [231, 43, 59], [92, 56, 37]] // Change this or remove to add dynamic RGB value

const main = (rgbArr) => {
    const hexString = '0123456789ABCDEF'
    var hexResult = '#'

    rgbArr.map(v => { 
        hexResult += hexString[v !== 0 ? Math.floor(v / 16) : 0] + hexString[v !== 0 ? v % 16 : 0] })

    return hexResult
}

console.log(main(rgbArr[0]))