/* eslint-disable react/prop-types */
function SkilllsCard({ title, icon, text }) {
  return (
    <article className="grid gap-4 hover:scale-105 duration-200 hover:text-gray-500  z-0 ">
      <span>{icon}</span>
      <h1 className="font-bold tracking-wide shadow-md px-2 py-2 ">{title}</h1>
      <p className="text-gray-400 leading-7   ">{text}</p>
    </article>
  )
}

export default SkilllsCard
