import React from "react";
import FontTransfer from "../fontTransfer";

interface NavbarProps {
        setCurrentPage: Function;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ setCurrentPage }) => {
        return (
                <div>
                        <div className="z-20 flex items-center w-full h-16 px-4 space-x-56 sm:px-10">
                                <h1 className="text-xl text-gray-100 cursor-pointer sm:text-3xl font-nier" onClick={() => setCurrentPage(0)}>
                                        Kainé
                                </h1>

                                <div className="hidden space-x-20 sm:block">
                                        <button className="text-xl cursor-pointer group" onClick={() => setCurrentPage(1)}>
                                                <FontTransfer optionKey="work" label="Work" />
                                        </button>
                                        <button className="text-xl cursor-pointer group" onClick={() => setCurrentPage(2)}>
                                                <FontTransfer optionKey="skill" label="Skill" />
                                        </button>
                                        <button className="text-xl cursor-pointer group" onClick={() => setCurrentPage(3)}>
                                                <FontTransfer optionKey="contact" label="Contact" />
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default Navbar;
