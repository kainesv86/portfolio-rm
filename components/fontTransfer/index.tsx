import React from "react";

interface FontTransferProps {
        label: string;
        optionKey: string;
        debugMode?: boolean;
}

const FontTransfer: React.FunctionComponent<FontTransferProps> = ({ label, debugMode = false, optionKey }) => {
        const arrayString = label.split(" ");

        return (
                <div className="relative">
                        <div className="flex nier-encode">
                                {arrayString.map((string, index) =>
                                        string.split("").map((char, index) => (
                                                <p
                                                        key={`encode-${optionKey}-${char}-${string}-${index}`}
                                                        className={`group-hover:opacity-0 w-fit group-focus:opacity-0 ${
                                                                !debugMode ? "opacity-100" : "opacity-0"
                                                        } duration-[500ms]`}
                                                >
                                                        {char}
                                                </p>
                                        ))
                                )}
                        </div>
                        <div className="absolute top-0 left-0 flex space-x-3 font-nier">
                                {arrayString.map((string, index) => (
                                        <div key={`${optionKey}-${string}-${index}`} className="flex">
                                                {string.split("").map((char, index) => (
                                                        <p
                                                                key={`decode-${optionKey}-${char}-${string}-${index}`}
                                                                className={`group-hover:opacity-100 w-fit group-focus:opacity-100 ${
                                                                        !debugMode ? "opacity-0" : "opacity-100"
                                                                } duration-[700ms]`}
                                                        >
                                                                {char}
                                                        </p>
                                                ))}
                                        </div>
                                ))}
                        </div>
                </div>
        );
};

export default FontTransfer;
