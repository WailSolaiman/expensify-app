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

const expenses = [{
    description: 'Gas Bill',
    note: 'Gas Bill April 2018',
    amount: 4500,
    createdAt: 1000
},
{
    description: 'Rent',
    note: 'Rent April 2018',
    amount: 54500,
    createdAt: 2000
},
{
    description: 'Water Bill',
    note: 'Water Bill April 2018',
    amount: 7500,
    createdAt: 1000
}];

expenses.map((expense) => {
    database.ref('expenses').push(expense);
});



// database.ref().set({
//     name: 'Wail Solaiman',
//     age: 35,
//     job: {
//         title: 'Frontend Web Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Hamburg',
//         country: 'Germany'
//     }
// });

// const dataSubscribe = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is working as ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//     console.log('Error detected: ', error);
// });

// setTimeout(() => {
//     database.ref('job/company').set('Amazon');
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value', dataSubscribe);
// }, 5000);

// setTimeout(() => {
//     database.ref('location/city').set('Berlin');
// }, 8000);

// database.ref().update({
//     name: 'Wail O. Solaiman',
//     'job/company': 'Google'
// });

// database.ref('age')
//     .remove()
//     .then(() => {
//         console.log('Age removed.')
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//     });
