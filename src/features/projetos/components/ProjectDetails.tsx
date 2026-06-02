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
            <DialogContent className="lg:max-w-[50%] sm:max-w-[80%] max-w-[95%] w-full">
                <DialogHeader>
                    <DialogTitle>{project.title}</  DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-2 overflow-y-auto! overflow-x-hidden no-scrollbar! h-100 md:h-auto">
                    <div className="flex flex-col gap-y-8">
                        {project.showcaseImagesUrl &&
                        <Carousel className="w-[90%] self-center">
                            <CarouselContent>
                                {project.showcaseImagesUrl?.map((imgUrl, i) => (
                                    <CarouselItem key={i} className="basis-full sm:basis-1/2 xl:basis-1/3">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <img className="w-full h-50 aspect-video object-cover rounded-md" src={imgUrl} alt={`Imagem de exibição do projeto ${i}`}/>
                                            </DialogTrigger>
                                            <DialogContent className="md:max-w-[55%]! max-w-[95%]! max-h-[60%] w-full h-full flex items-center justify-center">
                                                <img className="w-full h-full max-w-full max-h-[85vh] object-contain" src={imgUrl} alt={`Imagem de exibição do projeto ${i}`}/>
                                            </DialogContent>
                                        </Dialog>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-5 md:-left-8.5"/>
                            <CarouselNext className="-right-5 md:-right-8.5" />
                        </Carousel>              
                        }
                        <div className="prose white break-words">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {project.description}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-3">
                        <p className="text-[10px]">Todas as tecnologias usadas no projeto:</p>
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.map((t) => (
                                <Badge 
                                key={t.name}
                                style={{ background: `#${t.hexColor}` }} 
                                className='text-white'>
                                    {t.name}
                                </Badge>
                            ))}
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