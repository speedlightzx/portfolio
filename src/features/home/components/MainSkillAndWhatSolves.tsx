import { useEffect, useState } from "react"
import type { MainSkill } from "../types/iMainSkill"
import { getSkills } from "@/shared/lib/getSkills"

export function MainSkillAndWhatSolves() {
    const { mainSkills } = getSkills()

    useEffect(() => {
        let interval: NodeJS.Timeout
        let skillIndex = 1

        const mainSkillsText = async() => {
            setCurrentSkill({ name: "TypeScript", whatSolves: "desenvolver sistemas confiáveis e robustos", hexColor: "#3195FF" })
            
            interval = setInterval(() => {
                if(skillIndex >= mainSkills.length) {
                    skillIndex = 0
                    return
                }

                setCurrentSkill(mainSkills[skillIndex])
                skillIndex++
            }, 8000)
        }

        mainSkillsText()
        return () => clearInterval(interval)
    }, [])

    const [currentSkill, setCurrentSkill] = useState<MainSkill>()
    
    return (
        <div>
            <h3 className="text-white text-[18px] sm:text-[24px]">
                Desenvolvedor especializado em <span className="font-bold" style={{ color: currentSkill?.hexColor }}>{currentSkill?.name}</span>
            </h3>
            <h3 className="text-white text-[18px] sm:text-[24px]">
                Para <span className="font-bold" style={{ color: currentSkill?.hexColor }}>{currentSkill?.whatSolves}</span>
            </h3>
        </div>
    )
}