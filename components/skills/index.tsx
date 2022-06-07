import * as React from "react";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
        return (
                <div className="relative flex items-center justify-center flex-1 w-screen h-full text-white">
                        <div className={`flex flex-col space-y-2 sm:space-y-8`}>
                                <div className="flex flex-col-reverse sm:space-x-20 sm:flex-row">
                                        <div className="w-64 overflow-hidden rounded sm:w-full sm:max-w-sm sm:max-h-auto">
                                                <img alt="Kaine" src="/png/avatar.png" className="w-full h-full" />
                                        </div>
                                        <div className="flex flex-col items-start space-y-10 font-nier">
                                                <div>
                                                        <h1 className="text-4xl sm:text-6xl">Skill</h1>
                                                        <h2 className="text-xl sm:text-2 xl">The Full-Stack Developer</h2>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Skills;
