const { initializeApp, getApps, getApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require("firebase/database")

const firebaseConfig = {
    authDomain: process.env["FIREBASE_CONFIG_DOMAIN"],
    databaseURL: process.env["FIREBASE_CONFIG_DB"],
    projectId: process.env["FIREBASE_CONFIG_ID"],
    storageBucket: process.env["FIREBASE_CONFIG_STORAGE"],
    messagingSenderId: process.env["FIREBASE_CONFIG_MESSAGING"],
    appId: process.env["FIREBASE_CONFIG_APP"],
    measurementId: process.env["FIREBASE_CONFIG_MEASUREMENT"]
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

async function getVideoInfo(id) {
    if (!id) {
        console.error("ID inválido");
        return {
            error: true,
            code: 404,
            message: "ID não fornecido.",
        };
    }

    try {
        const dbRef = ref(db);
        const videoSnapshot = await get(child(dbRef, `videos/${id}`));

        if (!videoSnapshot.exists()) {
            console.error(`Vídeo com ID ${id} não encontrado.`);
            return {
                error: true,
                code: 404,
                message: "Vídeo não encontrado.",
            };
        }

        const data = videoSnapshot.val();
        data.id = videoSnapshot.key;
        data.thumb = `https://i3.ytimg.com/vi/${data.id}/mqdefault.jpg`;
        data.archives = await getArchives(data.id);

        console.log("Dados do Firebase:", data);
        return data;
    } catch (error) {
        console.error("Erro ao buscar vídeo:", error);
        return {
            error: true,
            code: 500,
            message: "Erro ao acessar o banco de dados.",
        };
    }
}
async function getVideos() {
    const dbRef = ref(db);
    const videos = await get(child(dbRef, `videos`));
    const list = [];

    videos.forEach(video => {
        const info = video.val();
        info.id = video.key;
        info.thumb = `https://i3.ytimg.com/vi/${info.id}/mqdefault.jpg`
        list.push(info);
    });

    return list;
}

async function getArchives(id) {
    const dbRef = ref(db);
    const archives = await get(child(dbRef, `archives/${id}`));
    const list = [];

    archives.forEach(archive => {
        list.push(archive.val());
    });

    return list;
}


module.exports = {
    getArchives,
    getVideoInfo,
    getVideos
}