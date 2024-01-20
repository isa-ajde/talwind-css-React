import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkilllsCard from './SkilllsCard'

function Skills() {
  return (
    <div className="align-element py-20   " id="skills">
      <SectionTitle text="Tech Stack" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 ">
        {skills.map((skill) => {
          return <SkilllsCard key={skill.id} {...skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
