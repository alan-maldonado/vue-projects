import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3z0TMQoN9unDaA8sKXIbzjvOZD3BpFuo',
  authDomain: 'turnout-a917c.firebaseapp.com',
  databaseURL: 'https://turnout-a917c.firebaseio.com',
  projectId: 'turnout-a917c',
  storageBucket: 'turnout-a917c.appspot.com',
  messagingSenderId: '969273059523'
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebase
  .database()
  .ref()
  .child('events');
