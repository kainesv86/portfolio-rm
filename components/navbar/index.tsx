import React from "react";
import FontTransfer from "../fontTransfer";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
        return (
                <div>
                        <div className="z-20 flex items-center w-full h-16 px-4 space-x-56 sm:px-10">
                                <h1 className="text-xl text-gray-100 cursor-pointer sm:text-3xl font-nier">Kainé</h1>
                                <div className="space-x-20">
                                        <button className="text-xl cursor-pointer group">
                                                <FontTransfer optionKey="work" label="Work" />
                                        </button>
                                        <button className="text-xl cursor-pointer group">
                                                <FontTransfer optionKey="skill" label="Skill" />
                                        </button>
                                        <button className="text-xl cursor-pointer group">
                                                <FontTransfer optionKey="contact" label="Contact" />
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default Navbar;
