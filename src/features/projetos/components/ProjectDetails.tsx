import type { ReactNode } from "react";
import type { Project } from "../types/Project";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectDetails({ project, children }: { project:Project, children:ReactNode })  {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[50%]! w-full">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-8">
                        <section>
                            { /* carrossel de imagens do projeto */ }
                        </section>
                        <p>{project.description}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col gap-x-1">
                            <p className="text-[10px]">Tecnologias usadas:</p>
                            <div className="flex gap-x-2">
                                {project.technologies.map((t) => (
                                    <Badge style={{ background: t.hexColor }} className='text-black'>{t.name}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter className="flex justify-end">
                    <Button
                    className={`${project.githubRepositoryUrl ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'}`} 
                    disabled={project.githubRepositoryUrl ? false : true}
                    onClick={() => window.open(project.githubRepositoryUrl, '_blank', 'noopener, noreferrer')}
                    variant='default'
                    >
                        <img src="/github.svg" alt="" className="w-5 h-5 invert" />
                        {project.githubRepositoryUrl ? 'Ver repositório' : 'Repositório privado ou indisponível' }
                    </Button>
                    <Button
                    className={`${project.githubRepositoryUrl ? 'hover:cursor-pointer bg-green-600' : 'hover:cursor-not-allowed'} `} 
                    variant='default'
                    disabled={project.productionUrl ? false : true}
                    onClick={() => window.open(project.productionUrl, '_blank', 'noopener, noreferrer')}
                    >
                        <ExternalLink />
                        {project.productionUrl ? 'Acessar' : 'Não é possível acessar' }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}