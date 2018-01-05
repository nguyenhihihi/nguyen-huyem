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
export const req = db.ref('/reqDatXe')
export const DsDaCoXeNhan =  req.orderByChild('tinhTrang').equalTo('da co xe nhan');
export const DsDaDinhVi =  req.orderByChild('tinhTrang').equalTo('da dinh vi');
export const DsChuaDinhVi =  req.orderByChild('tinhTrang').equalTo('chua dinh vi');
export const DsDangDiChuyen =  req.orderByChild('tinhTrang').equalTo('dang di chuyen');
export const DsDaHoanThanh =  req.orderByChild('tinhTrang').equalTo('da hoan thanh');

