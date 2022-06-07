import type { NextPage } from "next";
import { useMemo, useState } from "react";
import useWindowDimensions from "../common/hooks/useWindowDimensions";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Bar from "../public/svg/bar";

const Home: NextPage = () => {
        const [currentPage, setCurrentPage] = useState<number>(0);
        const { width } = useWindowDimensions();

        const translateSwinger = useMemo(() => {
                return `translateX(-${width * currentPage}px)`;
        }, [currentPage, width]);

        return (
                <div className="relative flex flex-col justify-between w-screen h-screen overflow-hidden transform font-nier text-zinc-50">
                        <div className="absolute top-0 left-0 w-full h-full -z-10">
                                <div className="relative flex-1 w-full h-full overflow-hidden">
                                        <video
                                                playsInline={true}
                                                autoPlay={true}
                                                muted={true}
                                                loop={true}
                                                className="object-cover object-left-top w-full h-full"
                                        >
                                                <source src="/bg.webm" type="video/webm" />
                                                <source
                                                        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/601220/654fa1daf88611e1503e73cda1ef597cd5603b6c.webm"
                                                        type="video/webm"
                                                />
                                        </video>
                                </div>
                        </div>
                        <div className="flex flex-col">
                                <Navbar setCurrentPage={setCurrentPage} />
                                <div className="relative z-10">
                                        <div className="top-0 left-0">
                                                <Bar />
                                        </div>
                                </div>
                        </div>
                        <div className={`flex h-full w-fit duration-300`} style={{ transform: translateSwinger }} translate="yes">
                                <div className="relative flex items-center justify-center flex-1 w-screen h-full text-white">
                                        <div
                                                className={`absolute ${
                                                        currentPage !== 0 ? "bottom-2 left-4 " : "bottom-[85%] left-1/4"
                                                } duration-500 transform -z-10 `}
                                        >
                                                <div className="sticky">
                                                        <div className="relative flex flex-col space-y-1 sm:space-y-4">
                                                                <p
                                                                        className={`${
                                                                                currentPage !== 0 ? "text-2xl" : "text-xs sm:text-base"
                                                                        }       font-medium text-zinc-50 font-nier`}
                                                                >
                                                                        0{currentPage + 1} /04 Pages
                                                                </p>
                                                                <div>
                                                                        <span className="absolute bottom-0 left-0 inline-block w-screen sm:h-0.5 h-px bg-zinc-50"></span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={`flex flex-col space-y-2 sm:space-y-8`}>
                                                <div className="flex flex-col-reverse sm:space-x-20 sm:flex-row">
                                                        <div className="w-64 overflow-hidden rounded sm:w-full sm:max-w-sm sm:max-h-auto">
                                                                <img alt="Kaine" src="/png/avatar.png" className="w-full h-full" />
                                                        </div>
                                                        <div className="flex flex-col items-start space-y-10 font-nier">
                                                                <div>
                                                                        <h1 className="text-4xl sm:text-6xl">Pham Vinh Tai</h1>
                                                                        <h2 className="text-xl sm:text-2 xl">The Full-Stack Developer</h2>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="relative flex items-center justify-center flex-1 w-screen h-full text-white">
                                        <div
                                                className={`absolute ${
                                                        currentPage !== 0 ? "bottom-2 left-4 " : "bottom-[85%] left-1/4"
                                                } duration-500 transform -z-10 `}
                                        >
                                                <div className="sticky">
                                                        <div className="relative flex flex-col space-y-1 sm:space-y-4">
                                                                <p
                                                                        className={`${
                                                                                currentPage !== 0 ? "text-2xl" : "text-xs sm:text-base"
                                                                        }       font-medium text-zinc-50 font-nier`}
                                                                >
                                                                        0{currentPage + 1} /04 Pages
                                                                </p>
                                                                <div>
                                                                        <span className="absolute bottom-0 left-0 inline-block w-screen sm:h-0.5 h-px bg-zinc-50"></span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={`flex flex-col space-y-2 sm:space-y-8`}>
                                                <div className="flex flex-col-reverse sm:space-x-20 sm:flex-row">
                                                        <div className="w-64 overflow-hidden rounded sm:w-full sm:max-w-sm sm:max-h-auto">
                                                                <img alt="Kaine" src="/png/avatar.png" className="w-full h-full" />
                                                        </div>
                                                        <div className="flex flex-col items-start space-y-10 font-nier">
                                                                <div>
                                                                        <h1 className="text-4xl sm:text-6xl">Pham Vinh Tai 2</h1>
                                                                        <h2 className="text-xl sm:text-2 xl">The Full-Stack Developer</h2>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <Skills />
                                <Skills />
                        </div>

                        <div className="flex flex-col ">
                                <div className="relative z-10">
                                        <div className="top-0 left-0">
                                                <Bar />
                                        </div>
                                </div>
                                <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        </div>
                </div>
        );
};

export default Home;
