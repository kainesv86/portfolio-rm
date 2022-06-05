import React from "react";
import FontTransfer from "../fontTransfer";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
        return (
                <div>
                        <div className="z-20 flex items-center justify-between w-screen h-16 space-x-56 sm:px-10">
                                <button className="flex items-center justify-between w-full max-w-xs px-8 py-1 text-xl cursor-pointer font-nier group bg-gray-200/40">
                                        <span className="w-3 h-3 rotate-45 bg-white rounded-sm"></span>
                                        <p>BACK</p>
                                </button>
                                <button className="flex items-center justify-between w-full max-w-xs px-8 py-1 text-xl cursor-pointer font-nier group bg-gray-200/40">
                                        <p>NEXT</p>
                                        <span className="w-3 h-3 rotate-45 bg-white rounded-sm "></span>
                                </button>
                        </div>
                </div>
        );
};

export default Footer;
