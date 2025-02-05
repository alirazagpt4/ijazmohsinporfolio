import { projects } from "../constants"


const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4" >
      <h2 className="my-20 text-center text-4xl" >Projects</h2>
      <div className="mb-8 flex flex-wrap justify-center gap-6">
  {projects.map((project, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-6">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center">{project.name}</h3>
        <p className="text-gray-300 mb-4 text-center">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mt-2 mb-2 rounded bg-purple-700 px-3 py-1 text-sm font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Projects
