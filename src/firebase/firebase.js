import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBIXF_giKJbs1xSIErSpZmRaw33WUORC5Y",
    authDomain: "expensify-274b1.firebaseapp.com",
    databaseURL: "https://expensify-274b1.firebaseio.com",
    projectId: "expensify-274b1",
    storageBucket: "expensify-274b1.appspot.com",
    messagingSenderId: "259767268937"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Wail Solaiman'
});