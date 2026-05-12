import type { MainSkill } from "@/features/home/types/iMainSkill"
import type { Skill } from "@/features/home/types/iSkill"

export async function GET() {

    const mainSkills: MainSkill[] = [
        { name: "TypeScript", whatSolves: "desenvolver sistemas confiáveis e robustos", hexColor: "#3195FF" },
        { name: "React.js", whatSolves: "criar interfaces modernas e dinâmicas", hexColor: "#5396d5" },
        { name: "Astro.js", whatSolves: "criar sites performáticos e ultra rápidos", hexColor: "#C822FF" },
        { name: "Nest.js", whatSolves: "desenvolver backends seguros e escaláveis", hexColor: "#D41717" },
        { name: "MongoDB", whatSolves: "armazenar dados flexíveis com segurança", hexColor: "#58AA50" },
        { name: "MySQL", whatSolves: "armazenar dados estruturados com eficiência", hexColor: "#007ccf" },
    ]
    
    const allSkills: Skill[] = [
        { name: "JavaScript", imageUrl: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
        { name: "React", imageUrl: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
        { name: "Next.js", imageUrl: "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" },
        { name: "TypeScript", imageUrl: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
        { name: "MySQL", imageUrl: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000" },
        { name: "MongoDB", imageUrl: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" },
        { name: "PostgreSQL", imageUrl: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
        { name: "Node.js", imageUrl: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
        { name: "Nest.js", imageUrl: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000" },
        { name: "Prisma", imageUrl: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=FFFFFF" },
        { name: "Astro.js", imageUrl: "https://img.icons8.com/?size=100&id=kXuRhjMIeKhk&format=png&color=000000" },
        { name: "Git", imageUrl: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
        { name: "Express.js", imageUrl: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF" }
    ]

    return Response.json({
        mainSkills,
        allSkills
    })
}