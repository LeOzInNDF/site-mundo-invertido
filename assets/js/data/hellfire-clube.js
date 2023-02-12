import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHellfireClube(subscribe) {
    debugger
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscribe)
    return docRef.id
}
