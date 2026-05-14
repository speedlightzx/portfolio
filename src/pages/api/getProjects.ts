import type { Project } from "@/features/projetos/types/Project"

export async function GET() {

    const projects: Project[] = [
        { 
            title: "Ordo Realitas",
            shortDescription: "Ordo Realitas é um bot de RPG de Ordem Paranormal dentro do discord.",
            description: "### Ordo Realitas é um bot de RPG de Ordem Paranormal dentro do discord.\n**voce** __pode__ _fazer_ isso - ali aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccccccccccccc", 
            context: "Discord Bot", 
            technologies: [
                { name: "TypeScript", hexColor: "#3195FF" },
                { name: "React", hexColor: "#5396d5" },
                { name: "Astro.js", hexColor: "#C822FF" },
                { name: "Nest.js", hexColor: "#D41717" },

            ], 
            thumbnail: "https://images-ext-1.discordapp.net/external/MMhs1LYWTc1dEDRGw5ha-nXrlwid60CTdga6YpCeE-o/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1042204545012473926/e92e3b26a4b04c9de9d3320e9084c5bb.png?format=webp&quality=lossless&width=788&height=788",
            showcaseImages: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZAU7FrCN5f14WzOj3lyy78mcbisyCijlpg&s',
                'https://static.wikia.nocookie.net/4079f6e1-fd04-466c-8f0d-08178ce131e6/scale-to-width/755',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5rTbSVzNitT3tKlGynaq66I358zPE8Sbmg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8a7TTHNnL4tu-93C1D_brlC7ZIzePyYDVg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzK2SMaJnMfqxciIWU8H4vj2G73l4UjDNfhQ&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YORhGTNssGVSM1nYOUgC9afqWrZ5DaWfqQ&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Xf7BbnAPmPctDde26hon-eJtnCoWgz2VAQ&s',
            ]
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
            thumbnail: "https://media.discordapp.net/attachments/864326864931782686/1504615755218685982/image.png?ex=6a07a21e&is=6a06509e&hm=485e211b3912b8224ad72d9833412c329e188a099eb380d83356c608735af70b&=&format=webp&quality=lossless&width=1273&height=695",
            githubRepositoryUrl: "https://github.com/speedlightzx/ordorealitas-site",
            productionUrl: "https://ordorealitas-site.vercel.app"
        }
    ]

    return Response.json({
        projects
    })
}