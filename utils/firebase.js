import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, child, increment, update } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

export const app = initializeApp(firebaseConfig)
export const db = getDatabase()

export async function saveForm(form, app) {
  try {
    const key = (form.email.substring(0, form.email.indexOf('@')) + '-' + app).replace(/\./g, "-");
    const exists = await checkIfPathExists(`forms/${key}`)

    if (exists) {
      return {
        success: false,
        message: 'Email já cadastrado!'
      }
    }

    form.key = key

    set(ref(db, `forms/${key}`), form)

    return {
      success: true,
      message: 'Formulário enviado com sucesso!'
    }
  } catch (error) {
    return {
        success: false,
        message: 'Erro ao salvar no banco de dados. \n' + error
      }
  }
}

export async function saveAnalyticsReferer(data){
  const time = new Date().getTime();
  const refRefererAnalytics = ref(db, `analytics/referers/${data.from}/accesses/${generateRandomKey()}`)
  data.time = time;
  set(refRefererAnalytics, data)
}

function generateRandomKey(){
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

async function checkIfPathExists (path) {
  const keyRef = ref(db, path)
  const snapshot = await get(keyRef)
  return snapshot.exists()
}
