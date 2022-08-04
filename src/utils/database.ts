import realTimeDatabase from '../services/database'
import { ref, set, onValue, remove, update, increment } from 'firebase/database'

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

export function getOneVoting(userUid: string, id: string, callback: Function) {
    const voting = ref(realTimeDatabase, `voting/${ userUid }/${ id }`)

    onValue(voting, snapshot => {
        callback(snapshot.val())
    })
}

export function getVotings(userUid: string, callback: Function) {
    const votings = ref(realTimeDatabase, `voting/${ userUid }`)

    onValue(votings, snapshot => {
        const data = snapshot.val()
        
        if (data)
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

export async function updateVotingOption(userUid: string, id: string, key: string, options: Object) {
    const voting = ref(realTimeDatabase, `voting/${ userUid }/${ id }`)

    const updateObject: any = {
        person: increment(1),
        options: { ...options }
    }
    
    updateObject.options[key]= increment(1)

    try {
        update(voting, updateObject)
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
