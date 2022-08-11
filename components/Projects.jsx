import Image from "next/image";
const projects = require("../data/projects.json");
import Link from "next/link";

function Projects() {
  return (
    <div className="mx-5 dark:text-indigo-200 text-gray-900">
      <div className="font-bold text-xl lg:text-3xl lg:text-center tracking-wide">
        {projects.projectsTitle}
      </div>

      <div className="lg:mx-20 lg:mt-10">
        {projects.projectList.map((project, id) => {
          return (
            <Link href={project.projectLink} key={id}>
              <div className="flex mt-5 hover:translate-x-1">
                <div className="w-2/5 h-24 lg:w-3/6 lg:h-[180px] rounded-md dark:bg-indigo-200 bg-gray-900  overflow-hidden relative">
                  <Image
                    src={project.imageLink}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-3/5 h-24 lg:h-full pl-4 lg:ml-6 overflow-hidden text-ellipsis lg:text-2xl">
                  <div className="font-bold tracking-wide">
                    {project.title},{" "}
                    <span className="dark:text-indigo-300 text-gray-600">
                      {project.year}
                    </span>
                  </div>
                  <div className="mt-2 text-sm lg:text-lg">{project.text}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
