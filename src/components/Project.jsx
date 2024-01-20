import { projects } from '../data'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <section className="py-20" id="projects">
      <h1 className=" p-4 duration-200 rounded-lg text-3xl font-medium tracking-wide   mb-10 text-center     hover:shadow-md ">
        Web Creations
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Project
