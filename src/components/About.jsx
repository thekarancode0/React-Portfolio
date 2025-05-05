import React from "react";

const skills = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Vite",
    logo: "https://vitejs.dev/logo.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="px-4 py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600">
        About Me
      </h2>
      <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
        <p>
          I'm a Front-End Developer who loves building responsive, user-friendly
          web applications. I specialize in <strong>React</strong>,{" "}
          <strong>Tailwind CSS</strong>, and <strong>Vite</strong>, turning
          ideas into elegant and functional designs.
        </p>
        <p>
          My journey started with self-learning and small projects that grew
          into a passion for web development. I enjoy crafting clean UI,
          optimizing performance, and learning new tools and frameworks.
        </p>
        <p>
          Outside of coding, I like sketching UI concepts, exploring
          open-source projects, and staying updated on tech trends.
        </p>
      </div>

      <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mt-8">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.logo}
            alt={skill.name}
            title={skill.name}
            className="h-10 sm:h-12 md:h-14 hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </section>
  );
};

export default About;