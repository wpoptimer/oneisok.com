export const environment = {
  production: false,
  serverUrl: 'https://admin.oneisok.com/api',
  appUrl: 'https://oneisok.com',
  appImageUrl: 'https://oneisok.com/assets/img/oneisok.png',
  appId: 'VxQTL8eC6EZz3NV0ys8jPCGwafcH7CiTZOq7gtKStssuAHdnZPClLFiL48Cw2bnHWY8VyYD4MLaAzKQQcoD6v7JHeSWxkumJ0yg6',
  fbId: '2814685038750204',
  googleMapsApiKey: 'AIzaSyBSIVUTMRVcw1W1Yl4F3iGhjRvglUa9LYA',
  androidHeaderColor: '#3880ff',
  defaultUnit: 'mi',
  defaultLang: 'en',
  googleClientId: '843316314827-gcs7m3nitogse7sr9jf6id785fo77p31.apps.googleusercontent.com',
  stripePublicKey: 'YOUR_STRIPE_PUBLIC_KEY',
  oneSignal: {
    appId: 'YOUR_ONESIGNAL_APP_ID',
    googleProjectNumber: 'YOUR_GOOGLE_PROJECT_NUMBER'
  },
  currency: {
    code: 'INR',
    display: 'symbol',
    digitsInfo: '1.2-2',
  },
 admob: {
    banner: {
      android: 'ca-app-pub-10001626946445555',
      ios: 'ca-app-pub-10001626946545555',
    },
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.