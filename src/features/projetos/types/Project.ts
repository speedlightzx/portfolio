import type { Techonology } from "./Technologies"

export interface Project {
    title:string
    description:string
    shortDescription:string
    technologies:Techonology[]
    context:string
    thumbnail:string
    showcaseImages?:string[]
    githubRepositoryUrl?:string
    productionUrl?:string
}