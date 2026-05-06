import { useEffect, useState } from "react";
import LogoLoop, { type LogoItem } from "./LogoLoop";
import type { Skill } from "../types/iSkill";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function TechnologiesLoop() {

    useEffect(() => {
        fetch('/api/skills')
        .then(res => res.json())
        .then(res => setSkills(res.allSkills))
    }, [])

    const [skills, setSkills] = useState<Skill[]>([])

    const renderItem = (item:LogoItem) => {
        const src = "src" in item ? item.src : undefined
        const title = item.title

        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <img 
                    src={src}
                    alt={title}
                    className="h-[var(--logoloop-logoHeight)] w-auto object-contain cursor-pointer"/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{title}</p>
                </TooltipContent>
            </Tooltip>
        )
    }

    return (
        <TooltipProvider>
            <LogoLoop
            
            logos={skills.map(s => (
                { src: s.imageUrl, alt: s.name, title: s.name }
            ))}

            direction="left"
            width={'100%'}
            logoHeight={80}
            speed={65}
            scaleOnHover
            renderItem={renderItem}/>
        </TooltipProvider>
    )
}