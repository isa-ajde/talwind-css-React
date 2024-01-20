import img from '../assets/about.svg'

function About() {
  return (
    <section className="py-20  bg-blue-950  " id="about">
      <div className="align-element grid md:grid-cols-2 items-center  ">
        <img src={img} alt="resim bulunamadı" className="w-full h-64" />
        <article className="py-20">
          <h1 className="text-3xl font-bold border-b pb-5 tracking-wide text-white border-gray-400  ">
            Code and Coffee
          </h1>
          <p className="mt-8 leading-8  text-gray-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            voluptatibus, praesentium totam iste quod voluptatum repudiandae
            esse animi exercitationem assumenda impedit veritatis voluptas
            perspiciatis rem alias, repellendus sapiente, asperiores veniam.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
