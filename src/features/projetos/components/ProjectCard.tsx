import { Badge } from "@/shared/components/ui/badge";
import type { Project } from "../types/Project";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectCard({ projectDetails }: { projectDetails:Project }) {

    return (
        <div className="w-92.5 h-113 border-2 border-purple-500 rounded-lg">
            <div className="relative h-[50%] overflow-hidden">       
                <div className="p-1 text-white absolute top-2 right-2 z-10 flex border border-[#00FF22] rounded-full">
                    <div className="projectCircleContext"/>
                    <h5 className="text-[12px] leading-none">{projectDetails.context}</h5>
                </div>
                <img 
                src={projectDetails.thumbnail} 
                className="h-full w-full backdrop-blur-md object-cover rounded-lg"
                />
            </div>
            <div className="p-2.5 flex flex-col w-full h-[50%] justify-between">
                <div className="flex flex-col justify-between h-[50%]">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-white font-bold text-[18px]">{projectDetails.title}</h1>
                    </div>
                    <div>
                        <p className="text-white text-center opacity-60 whitespace-pre-line wrap-break-word line-clamp-3 max-w-full">{projectDetails.shortDescription}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-y-1 mt-5">
                        <p className="text-white text-[10px] opacity-50 pl-1">Principais tecnologias:</p>
                        <div className="flex gap-x-2">
                            {projectDetails.technologies.slice(0, 3).map((t) => (
                                <Badge style={{ background: t.hexColor }} className='text-white'>{t.name}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                    <ProjectDetails project={projectDetails}>
                        <button className="w-[99%] text-white font-bold text-[14px] bg-[#1505FF] rounded-lg p-2 hover:cursor-pointer">Ver projeto</button>
                    </ProjectDetails>
                    </div>
                </div>
            </div>
        </div>
    )
}