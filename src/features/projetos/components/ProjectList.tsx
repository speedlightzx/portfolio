import { useEffect, useState } from "react"
import type { Project } from "../types/Project"
import { ProjectCard } from "./ProjectCard"

export function ProjectList() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const getProjects = async() => {
            await fetch('/api/getProjects')
            .then(res => res.json())
            .then(data => setProjects(data.projects as Project[]))
        }

        getProjects()
    }, [])

    return (
        <div className="flex flex-wrap justify-center w-full h-full gap-x-8 gap-y-5">
            {projects.map((p, i) => (
                <ProjectCard
                projectDetails={p}
                />
            ))}
        </div>
    )
}