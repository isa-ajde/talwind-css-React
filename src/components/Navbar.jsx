import { links } from '../data'

function Navbar() {
  return (
    <nav className="bg-blue-950 sticky top-0  z-10 " id="home">
      <div className=" align-element  py-4 flex flex-col      sm:flex-row sm:gap-x-16 sm:py-8 sm:items-center ">
        <h2 className="font-bold text-center text-4xl mb-6 sm:mb-0 text-blue-200 sm:text-right ">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex justify-around sm:justify-normal gap-x-4">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-blue-300 text-lg tracking-wide font-bold  hover:text-emerald-600 duration-300 "
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
      <hr className=" hidden md:block   " />
    </nav>
  )
}

export default Navbar
