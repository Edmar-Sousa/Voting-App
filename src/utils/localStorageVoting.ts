export function saveVotingLocalStorage(id: string) {
    const votingsString = window.localStorage.getItem('votingId')
    let votingArray = []

    if (votingsString)
        votingArray = JSON.parse(votingsString)

    votingArray.push(id)
    window.localStorage.setItem('votingId', JSON.stringify(votingArray))
}

export function checkIsVotingInLocalStorage(id: string) {
    const votingsString = window.localStorage.getItem('votingId')

    if (!votingsString)
        return false

    const votingArray = JSON.parse(votingsString) as Array<string>
    return votingArray.includes(id)
}