/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

function ProjectCard({ img, title, url, text, github }) {
  return (
    <div className=" px-10 ">
      <div className=" rounded-lg shadow-lg hover:shadow-2xl duration-300">
        <img
          src={img}
          alt={title}
          className="rounded-t-lg object-cover w-full h-64 "
        />
        <div className="p-7">
          <h1 className="pb-4  text-2xl capitalize font-medium tracking-wide ">
            {title}
          </h1>
          <p className="leading-7 tracking-wide text-gray-600 "> {text}</p>
          <div className="flex items-center gap-x-5 mt-5 ">
            <a href={url} target="_blank">
              <TbWorldWww className="w-6 h-6 text-blue-950 hover:text-gray-600 duration-200 cursor-pointer " />
            </a>
            <a href={github} target="_blank">
              <FaGithubSquare className="w-6 h-6 text-blue-950 hover:text-gray-600 duration-200 cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
