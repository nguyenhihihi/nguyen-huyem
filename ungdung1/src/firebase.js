import {initializeApp} from 'firebase';

const app = initializeApp({
	 apiKey: "AIzaSyBh17FyeY9MbnXWXbEWm7zuBGtPWQbn6Os",
		    authDomain: "datxe-ce3c3.firebaseapp.com",
		    databaseURL: "https://datxe-ce3c3.firebaseio.com",
		    projectId: "datxe-ce3c3",
		    storageBucket: "datxe-ce3c3.appspot.com",
		    messagingSenderId: "742408484121"
});

export const db = app.database();
export const req = db.ref('/reqDatXe'); 

//export const history = db.ref('/reqDatXe').orderByChild('sdt');