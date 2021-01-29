import {key} from '../app/conf/key';
import {endpoint} from '../app/conf/firebase.config';

export const environment = {
  production: false,
  firebase: {
    apiKey: key.apikey,
    authDomain: endpoint.APP_AUTH_DOMAIN,
    databaseURL: endpoint.APP_DATABASE_URL,
    projectId: endpoint.APP_PROJECT_ID,
    storageBucket: endpoint.APP_STORAGE_BUCKET,
    messagingSenderId: endpoint.APP_MESSAGING_SENDER_ID,
    appId: endpoint.APP_APP_ID,
    measurementId: endpoint.APP_MEASUREMENT_ID
  }
};