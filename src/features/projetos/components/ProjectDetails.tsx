import type { ReactNode } from "react";
import type { Project } from "../types/Project";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export function ProjectDetails({ project, children }: { project:Project, children:ReactNode })  {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="lg:max-w-[50%] sm:max-w-[80%] max-w-[90%] w-full">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-8">
                        {project.showcaseImages &&
                        <Carousel className="w-52 sm:w-[90%] self-center">
                            <CarouselContent>
                                {project.showcaseImages?.map((imgUrl, i) => (
                                    <CarouselItem className="basis-1/1 sm:basis-1/2 xl:basis-1/3">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <img className="rounded-md w-52 h-52" src={imgUrl} alt={`Imagem de exibição do projeto ${i}`}/>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-full max-h-[50%] w-full h-full flex items-center justify-center">
                                                <img className="w-[90%] h-[90%] object-cover rounded-md" src={imgUrl} alt={`Imagem de exibição do projeto ${i}`}/>
                                            </DialogContent>
                                        </Dialog>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-8.5"/>
                            <CarouselNext className="-right-8.5" />
                        </Carousel>              
                        }
                        <p className="prose whitespace-pre-line break-all">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {project.description}
                            </ReactMarkdown>
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col gap-y-1">
                            <p className="text-[10px]">Todas as tecnologias usadas no projeto:</p>
                            <div className="flex gap-x-2">
                                {project.technologies.map((t) => (
                                    <Badge style={{ background: t.hexColor }} className='text-white'>{t.name}</Badge>
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
                    className={`${project.productionUrl ? 'hover:cursor-pointer bg-green-600' : 'hover:cursor-not-allowed'} `} 
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