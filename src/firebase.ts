import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDHZ6XhDURSAOVqLc6u95hNnXJ-AZirPSg',
	authDomain: 'oooo-dc135.firebaseapp.com',
	projectId: 'oooo-dc135',
	storageBucket: 'oooo-dc135.appspot.com',
	messagingSenderId: '806553487098',
	appId: '1:806553487098:web:50e13990c26cd7f68dab43'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
