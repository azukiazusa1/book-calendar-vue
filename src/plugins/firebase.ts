import firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: process.env.VUE_APP_APIKEY,
      authDomain: process.env.VUE_APP_AUTHDOMAIN,
      databaseURL: process.env.VUE_APP_DATABASEURL,
      projectId: process.env.VUE_APP_PROJECTID,
      storageBucket: process.env.VUE_APP_STORAGEBUCKET,
      messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
      appId: process.env.VUE_APP_APPID
    }
  )
}

export default firebase
