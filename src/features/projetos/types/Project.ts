import type { Techonology } from "./Technology"

export interface Project {
    id:number
    title:string
    description:string
    shortDescription:string
    technologies:Techonology[]
    context:string
    thumbnailUrl:string
    showcaseImagesUrl?:string[]
    githubRepositoryUrl?:string
    productionUrl?:string
}