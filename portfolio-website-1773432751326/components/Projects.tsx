import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description of project 1',
      image: '/project1.png',
      link: '/project1',
    },
    {
      title: 'Project 2',
      description: 'This is the description of project 2',
      image: '/project2.png',
      link: '/project2',
    },
    {
      title: 'Project 3',
      description: 'This is the description of project 3',
      image: '/project3.png',
      link: '/project3',
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;