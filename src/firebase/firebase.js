import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expenses = [{
//     description: 'Gas Bill',
//     note: 'Gas Bill April 2018',
//     amount: 4500,
//     createdAt: 1000
// },
// {
//     description: 'Rent',
//     note: 'Rent April 2018',
//     amount: 54500,
//     createdAt: 2000
// },
// {
//     description: 'Water Bill',
//     note: 'Water Bill April 2018',
//     amount: 7500,
//     createdAt: 1000
// }];

// expenses.map((expense) => {
//     database.ref('expenses').push(expense);
// });



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
//#############################################################

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });
