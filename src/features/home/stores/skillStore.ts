import { atom } from 'nanostores'
import type { Skill } from '../types/iSkill'
import type { MainSkill } from '../types/iMainSkill'
import { getSkillsService } from '../services/getSkills'

export const skillStore = atom<{ skills: Skill[], mainSkills: MainSkill[] } | null>(null)

export function setStoredSkills(skills:Skill[], mainSkills:MainSkill[]) {
    skillStore.set({
        skills,
        mainSkills
    })
}

let loadingSkills: Promise<any> | null = null

export async function loadSkills() {
    const storedSkills = skillStore.get()
    if(storedSkills) return storedSkills
    if(loadingSkills) return loadingSkills

    loadingSkills = getSkillsService()
    .then((data) => {
        setStoredSkills(data.skills, data.mainSkills)
        return data
    })
    .finally(() => {
        loadingSkills = null
    })

    return loadingSkills
}