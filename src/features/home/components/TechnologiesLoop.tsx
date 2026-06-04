import { useEffect, useState } from "react";
import LogoLoop, { type LogoItem } from "./LogoLoop";
import type { Skill } from "../types/iSkill";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/components/ui/tooltip";
import { loadSkills } from "../stores/skillStore";

export function TechnologiesLoop() {
    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        loadSkills().then((data) => {
            const skillsData = data?.skills
            setSkills(skillsData!)
        })
    }, [])

    const renderItem = (item:LogoItem) => {
        const src = "src" in item ? item.src : undefined
        const title = item.title

        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <img 
                    src={src}
                    alt={title}
                    className="h-[var(--logoloop-logoHeight)] w-auto object-contain"/>
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
            
            logos={skills
                .map(s => (
                { src: s.imageUrl, alt: s.name, title: s.name }
            ))
            .sort(() => Math.random() - 0.5)
        }

            direction="left"
            width={'100%'}
            logoHeight={80}
            speed={70}
            scaleOnHover
            renderItem={renderItem}/>
        </TooltipProvider>
    )
}