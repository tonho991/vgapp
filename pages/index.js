import { getVideos } from "@/libs/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";


const Video = ({ nome_v, thumb, id }) => (
  <Link className="box-items flex items-center gap-4 mb-4 p-2 rounded-lg" href={{pathname: "video", query: {id: id}}}>
    <img src={thumb} width='150' height='50' className="rounded"/>
    <h2 className="text-1xl font-bold"> {nome_v} </h2>
  </Link>
);


export default function Home() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const data = await getVideos();
      setVideos(data);
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
    }
  };

  useEffect(()=> {
    fetchVideos();
  })

  return (
    <div className="mt-20 p-4">
      <h1 className="mb-4 text-2xl font-bold text-center">Vídeos do Canal</h1>
      {videos.map((video) => (
        <Video key={video.id} {...video} />
      ))}
    </div>
  );
}

