/* eslint-disable react/no-unescaped-entities */
import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function Hero() {
  return (
    <div className="bg-blue-950 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-x-6 ">
        <article>
          <h1 className="font-bold tracking-wide text-white text-5xl  ">
            I'm AJDE
          </h1>
          <p className="mt-6 text-2xl text-yellow-50 tracking-wide ">
            Front End Developer
          </p>
          <p className="mt-6 text-2xl text-white  ">
            Turning Ideas Into Interactive Reality
          </p>
          <div className="flex mt-4 gap-x-2">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 hover:text-blue-200  duration-200 " />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 hover:text-blue-200 duration-200 " />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 hover:text-blue-200 duration-200 " />
            </a>
          </div>
        </article>
        <hr className="my-10 md:hidden   " />
        <article>
          <img src={heroImg} alt="resim bulunamadı" />
        </article>
      </div>
    </div>
  )
}

export default Hero
