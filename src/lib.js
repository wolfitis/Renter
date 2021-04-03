

export const getRandomStr = (length = 8) => {
    let generatedStr = ''
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
    while (generatedStr.length < length) {
        let idx = Math.floor(Math.random() * charSet.length)
        generatedStr += charSet[idx]
    }
    return generatedStr
}