import React from "react";
import FontTransfer from "../fontTransfer";

interface FooterProps {
        setCurrentPage: Function;
        currentPage: number;
}

const Footer: React.FunctionComponent<FooterProps> = ({ setCurrentPage, currentPage }) => {
        return (
                <div>
                        <div className="z-20 flex items-center justify-between w-screen h-16 px-2 transform sm:px-10">
                                <button
                                        className={`${
                                                currentPage === 0 ? "opacity-0" : "opacity-100"
                                        } duration-300 flex items-center justify-between px-8 py-1 space-x-2 text-xl cursor-pointer sm:w-full sm:max-w-xs font-nier group sm:bg-amber-100/60 hover:bg-zinc-200`}
                                        onClick={() => setCurrentPage(currentPage - 1 <= 0 ? 0 : currentPage - 1)}
                                >
                                        <span className="w-3 h-3 duration-300 rotate-45 bg-white rounded-sm group-hover:bg-red-500"></span>
                                        <p className="duration-300 text-zinc-100 group-hover:text-red-600">BACK</p>
                                </button>
                                <button
                                        className={`${
                                                currentPage === 3 ? "opacity-0" : "opacity-100"
                                        } duration-300 flex items-center justify-between px-8 py-1 space-x-2 text-xl cursor-pointer sm:w-full sm:max-w-xs font-nier group sm:bg-amber-100/60 hover:bg-zinc-200`}
                                        onClick={() => setCurrentPage(currentPage + 1 >= 3 ? 3 : currentPage + 1)}
                                >
                                        <p className="duration-300 text-zinc-100 group-hover:text-red-600">NEXT</p>
                                        <span className="w-3 h-3 duration-300 rotate-45 bg-white rounded-sm group-hover:bg-red-500"></span>
                                </button>
                        </div>
                </div>
        );
};

export default Footer;
