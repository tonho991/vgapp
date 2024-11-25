import { useEffect, useState } from "react";
import { getVideoInfo } from "@/libs/firebase";
import CodeView from "@/components/CodeView";
import NotFound from "@/pages/404"

const Video = (query) => {
    const id = query.id
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    const fetchInfo = async () => {
        try {
            const response = await getVideoInfo(id);

            if (response.error) {
                setError(response);
                return;
            }

            setInfo(response);
        } catch (e) {
            console.error("Erro na busca do vídeo:", e);
            setError({ error: true, code: 500, message: "Erro inesperado." });
        }
    };

    const getLangType = () => {
        return info.code.includes("<") ? "xml" : "java";
    }

    useEffect(() => {
        fetchInfo();
    }, [id]);

    if (error) {
        if(error.code == 404){
            return <NotFound />
        }

        return (
            <div className="mt-20">
                <h1>Erro {error.code}</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    if (!info) {
        return <p className="mt-20">Carregando...</p>;
    }

    return (
        <div className="mt-20 p-4 text-center">
            <div className="flex justify-center relative items-center">
                <img src={info.thumb} alt={info.nome_v} className="mb-5 rounded-md text-center opacity-55" width='400' height='150' />
                <a href={info.url_v} target="_blank" className="absolute">
                    <div className="play-icon"></div>
                </a>

            </div>
            <h1 className="text-2xl font-bold">{info.nome_v}</h1>

            <CodeView
                code={info.code || info.code_v}
                language={getLangType()} />
        </div>
    );
}

Video.getInitialProps = async ({ query }) => {
    return query;
};

export default Video;
