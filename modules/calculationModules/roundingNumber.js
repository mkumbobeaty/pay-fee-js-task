

//roud number to upper bond
const roundingNumber = (number) => {
    return (Math.ceil(number * 100) / 100).toFixed(2)
}

module.exports = roundingNumber