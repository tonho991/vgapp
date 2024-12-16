import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, child } from 'firebase/database'

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
    const exists = await checkIfExists(key)

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

async function checkIfExists (key) {
  const keyRef = ref(db, `forms/${key}`)
  const snapshot = await get(keyRef)
  return snapshot.exists()
}
