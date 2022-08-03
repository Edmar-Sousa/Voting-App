import realTimeDatabase from '../services/database'
import { ref, set, onValue, remove, update } from 'firebase/database'

import { v4 as UUID } from 'uuid'

import { VotingType } from '../types/voting'


export async function createVoting(userUid: string, votingData: VotingType) {
    try {
        const uid = UUID()    

        await set(ref(realTimeDatabase, `voting/${ userUid }/${ uid }`), {
            ...votingData,
            isOpen: true,
            person: 0
        })

        return uid
    }

    catch (e) {
        return null
    }
}

export function getVotings(userUid: string, callback: Function) {
    const votings = ref(realTimeDatabase, `voting/${ userUid }`)

    onValue(votings, snapshot => {
        const data = snapshot.val()
        callback(data)
    })
}

export async function changeStatusVoting(userUid: string, id: string, value: boolean) {
    const voting = ref(realTimeDatabase, `voting/${ userUid }/${ id }`)

    try {
        update(voting, { isOpen: value } )
        return true
    }
    catch (e) {
        return false
    }
}

export async function deleteVoting(userUid: string, id: string) {
    const voting = ref(realTimeDatabase, `voting/${ userUid }/${ id }`)
    
    try {
        await remove(voting)
        return true
    }

    catch (e) {
        return false
    }
}
