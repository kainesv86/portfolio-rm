import * as React from "react";

interface PageNumberProps {
        currentPage: number;
}

const PageNumber: React.FunctionComponent<PageNumberProps> = ({ currentPage }) => {
        return (
                <div className={`absolute ${currentPage !== 0 ? "bottom-2 left-4 " : "bottom-[85%] left-1/4"} duration-500 transform -z-10 `}>
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
        );
};

export default PageNumber;
