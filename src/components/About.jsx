import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Lekuba.
            <br className="hidden lg:inline-block" />I love to build smart Apps, powered by data and pixels.
          </h1>
          <p className="mb-8 leading-relaxed">
          My fingers dance across the keyboard, not just weaving lines of code but crafting intelligent experiences. I'm a full-stack Software Developer with a passion for 
          bringing ideas to life through technology. Specializing in full-stack web projects, I thrive on creating seamless, data-driven solutions that not only meet functional requirements 
          but elevate the user experience to new heights. From designing intuitive interfaces to implementing robust backend systems, I ensure that every aspect of the applications 
          I build reflects precision and innovation. My work also takes me into the domains of Machine Learning and Data Science, where I leverage my analytical skills 
          to extract meaningful insights and drive informed decision-making.
          <br /><br />
          With a passion for cutting-edge technologies and a drive for innovation, I aim to utilize my skills and knowledge to make impactful contributions 
          in the realm of technology and its advancements.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Latest Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-3/4 md:w-1/3 w-2/3">
          <img
            className="bg-trasparent object-cover object-center rounded"
            alt="Lekuba Ntoane"
            src="./Lekuba.png"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
