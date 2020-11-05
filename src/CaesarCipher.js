const caesar = (str) => {
    const arr = str.split('').map(x => {
        if (/[A-Ma-m]/.test(x)) {
            let shifted = x.charCodeAt(0) + 13
            return String.fromCharCode(shifted)
        } else if (/[N-Zn-z]/.test(x)) {
            let shifted = x.charCodeAt(0) - 13
            return String.fromCharCode(shifted)
        } else {
            return x
        }
    })
    return arr.join('')
}

module.exports = caesar;
