import React from "react";
import { Button } from "./ui/moving-borders";

interface EducationItem {
    degree: string;
    institution: string;
    year: string;
    thumbnail?: string;
}

interface EducationProps {
    education: Record<string, EducationItem>;
}



const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <div className="w-full">

            <h2 className="heading mb-6 text-3xl font-semibold">Education</h2>


            <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
                {Object.entries(education).map(([key, card]) => (
                    <Button
                        key={key}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem * 0.96)`,
                        }}
                        className="flex-1 border-neutral-200 text-black dark:border-slate-800 dark:text-white"
                    >
                        <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                            <img
                                src={card.thumbnail || "https://img.icons8.com/emoji/96/graduation-cap-emoji.png"}
                                alt={card.degree}
                                className="w-16 md:w-20 lg:w-32"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl font-bold md:text-2xl">
                                    {card.degree}
                                </h1>
                                <p className="text-white-100 mt-3 text-start font-semibold">
                                    {card.institution}
                                </p>
                                <p className="text-white-100 mt-1 text-start text-sm">
                                    Graduated | {card.year}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Education;
