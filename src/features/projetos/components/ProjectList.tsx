import { useEffect, useState } from "react"
import type { Project } from "../types/Project"
import { ProjectCard } from "./ProjectCard"

export function ProjectList() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const getProjects = async() => {
            await fetch(`${import.meta.env.PUBLIC_API_URL}/projects`)
            .then(res => res.json())
            .then(data => setProjects(data as Project[]))
        }

        getProjects()
    }, [])

    return (
        <div className="flex flex-wrap justify-center shrink-0 w-full h-full gap-x-8 gap-y-5 p-5 sm:p-0">
            {projects.map((p) => (
                <ProjectCard
                key={p.id}
                projectDetails={p}
                />
            ))}
        </div>
    )
}