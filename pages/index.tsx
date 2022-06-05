import type { NextPage } from "next";
import FontTransfer from "../components/fontTransfer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Bar from "../public/svg/bar";

const Home: NextPage = () => {
        return (
                <div className="relative flex w-screen h-screen overflow-hidden">
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
                                        </video>
                                </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-auto text-white ">
                                <div className="absolute top-0 left-0 flex flex-col">
                                        <Navbar />
                                        <div className="z-10">
                                                <Bar />
                                        </div>
                                </div>
                                <div className="flex flex-col-reverse space-y-10 sm:space-x-20 sm:flex-row">
                                        <div className="w-64 h-64 overflow-hidden rounded sm:h-96 sm:w-96">
                                                <img alt="Kaine" src="/png/avatar.png" className="w-full h-full" />
                                        </div>
                                        <div className="flex flex-col items-start block">
                                                <h1 className="text-4xl font-nier sm:text-8xl">Pham Vinh Tai</h1>
                                                <h2 className="text-xl font-nier sm:text-4xl">The Full-Stack Developer</h2>
                                        </div>
                                </div>
                                <div className="absolute bottom-0 left-0 flex flex-col">
                                        <div className="z-10">
                                                <Bar />
                                        </div>
                                        <Footer />
                                </div>
                        </div>
                </div>
        );
};

export default Home;
