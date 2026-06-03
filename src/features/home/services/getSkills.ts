import type { MainSkill } from "../types/iMainSkill"
import type { Skill } from "../types/iSkill"

export async function getSkillsService() {
    const data = await fetch(`${import.meta.env.PUBLIC_API_URL}/skills`)
    .then(res => res.json())

    if(!data) throw new Error("Algum erro aconteceu ao buscar dados da API.")

    return {
        skills: data.skills as Skill[],
        mainSkills: data.mainSkills as MainSkill[]
    }
}