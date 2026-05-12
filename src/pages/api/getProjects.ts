import type { Project } from "@/features/projetos/types/Project"

export async function GET() {

    const projects: Project[] = [
        { 
            title: "Ordo Realitas",
            shortDescription: "Ordo Realitas é um bot de RPG de Ordem Paranormal dentro do discord.",
            description: "Ordo Realitas é um bot de RPG de Ordem Paranormal dentro do discord. voce pode fazer isso ali mkdkenwnejnwdksndkjsanknefknfna,nfenfenfenmfenen,mrewnnrwenqwenkjnjndnma,sd,m", 
            context: "Discord Bot", 
            technologies: [
                { name: "TypeScript", hexColor: "#3195FF" },
                { name: "React", hexColor: "#5396d5" },
                { name: "Astro.js", hexColor: "#C822FF" },
                { name: "Nest.js", hexColor: "#D41717" },

            ], 
            thumbnail: "https://i.pinimg.com/736x/b8/a9/b6/b8a9b64919c75ee60bfa2f73e9056459.jpg" 
        },
        { 
            title: "Site Ordo Realitas",
            shortDescription: "Landing Page interativa para meu bot Ordo Realitas",
            description: "Landing Page interativa e responsiva feita para meu bot do Discord Ordo Realitas.", 
            context: "Landing Page", 
            technologies: [
                { name: "TypeScript", hexColor: "#3195FF" },
                { name: "Next.js", hexColor: "#5396d5" },
            ], 
            thumbnail: "https://i.pinimg.com/736x/b8/a9/b6/b8a9b64919c75ee60bfa2f73e9056459.jpg",
            githubRepositoryUrl: "https://github.com/speedlightzx",
            productionUrl: "https://ordorealitas-site.vercel.app"
        }
    ]

    return Response.json({
        projects
    })
}