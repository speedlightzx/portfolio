import { Badge } from "@/shared/components/ui/badge";
import type { Project } from "../types/Project";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectCard({ projectDetails }: { projectDetails:Project }) {

    return (
        <div className="min-w-[25%] max-w-[25%] max-h-[30%] h-full border-2 border-purple-500 rounded-lg p-2">
            <div className="flex w-full h-[10%] justify-between items-center">
                <h1 className="text-white font-bold">{projectDetails.title}</h1>
                <div className="p-1 text-white relative flex items-center justify-center border border-[#00FF22] rounded-full">
                    <div className="projectCircleContext"/>
                    <h5 className="text-[10px] leading-none">{projectDetails.context}</h5>
                </div>
            </div>
            <div className="mt-3">
                <p className="text-white text-center teste opacity-60">{projectDetails.shortDescription}</p>
            </div>
            <div className="flex flex-col gap-y-1 mt-2">
                <p className="text-white text-[10px] opacity-50">Tecnologias usadas:</p>
                <div className="flex gap-x-2">
                    {projectDetails.technologies.map((t) => (
                        <Badge style={{ background: t.hexColor }} className='text-black'>{t.name}</Badge>
                    ))}
                </div>
            </div>
            <div className="mt-2 flex justify-center">
                <ProjectDetails project={projectDetails}>
                    <button className="w-[99%] text-white font-bold text-[14px] bg-[#1505FF] rounded-lg p-2 hover:cursor-pointer">Ver projeto</button>
                </ProjectDetails>
            </div>
        </div>
    )
}