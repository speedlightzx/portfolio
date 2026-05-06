import { useEffect, useState } from "react"
import type { MainSkill } from "../types/iMainSkill"

export function MainSkillAndWhatSolves() {

    useEffect(() => {
        let interval: NodeJS.Timeout
        let skillIndex = 1

        const getMainSkills = async() => {
            const res = await fetch('/api/skills')
            const data = await res.json()
            const mainSkills = data.mainSkills
            
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

        getMainSkills()
        return () => clearInterval(interval)
    }, [])

    const [currentSkill, setCurrentSkill] = useState<MainSkill>()
    
    return (
        <div>
            <h3 className="text-white">
                Desenvolvedor especializado em <span className="font-bold" style={{ color: currentSkill?.hexColor }}>{currentSkill?.name}</span>
            </h3>
            <h3 className="text-white">
                Para <span className="font-bold" style={{ color: currentSkill?.hexColor }}>{currentSkill?.whatSolves}</span>
            </h3>
        </div>
    )
}