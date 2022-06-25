import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Evento() {
    const { slug } = useParams<{ slug: string; }>();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug} /> :
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div className=" flex-col flex items-center justify-center rounded bg-green-500 border border-gray-500 p-8">
                            <span className=" font-bold text-2xl">Que tal aprender mais sobre React?</span>
                            <span className="text-sm text-gray-500">Escolha uma das aulas ao lado e começe agora mesmo</span>
                        </div>
                    </div>
                }
                <Sidebar />
            </main>
        </div>
    );
}