export const makeRandomHex = (size = 20) => {
    var text = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < size; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
}

export const firstNotEmptyLine = (content = '') => {
    const parts = content.split(/\r\n|\r|\n/)

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length) {
            return parts[i]
        }
    }

    return ''
}