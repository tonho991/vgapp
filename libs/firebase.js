const { initializeApp, getApps, getApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require("firebase/database")

const firebaseConfig = {
    apiKey: "AIzaSyCRrypgeFaPgqPUCypc1NzAu4zlaEzzmsU",
    authDomain: "vgapp-9cc66.firebaseapp.com",
    databaseURL: "https://vgapp-9cc66-default-rtdb.firebaseio.com",
    projectId: "vgapp-9cc66",
    storageBucket: "vgapp-9cc66.appspot.com",
    messagingSenderId: "119617741588",
    appId: "1:119617741588:web:9ebc96ccaf249321545801",
    measurementId: "G-XJ7E3K3LTE"
  };
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