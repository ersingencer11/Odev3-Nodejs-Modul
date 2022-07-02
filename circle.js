const daireAlan = (yaricap) => {
    const pi = 3
    let alan = pi * yaricap * yaricap
    return alan
}

const daireCevre = (yaricap) => {
    const pi = 3
    let cevre = 2 * pi * yaricap
    return cevre
}

module.exports = {
    daireAlan,
    daireCevre
}