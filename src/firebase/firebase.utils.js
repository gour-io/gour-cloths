import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9FDbzlEAoWxzofiRIeBDIR23NMpQCQIs",
    authDomain: "gour-db.firebaseapp.com",
    databaseURL: "https://gour-db.firebaseio.com",
    projectId: "gour-db",
    storageBucket: "gour-db.appspot.com",
    messagingSenderId: "529626762301",
    appId: "1:529626762301:web:7a11f520a7a1e378596e54",
    measurementId: "G-XXD3YFHYN2"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;