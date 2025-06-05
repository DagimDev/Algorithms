const booleanToString = (bool) => {
    const isString = bool.toString()
    console.log(typeof isString)
    return bool.toString()
}

console.log(booleanToString(true))