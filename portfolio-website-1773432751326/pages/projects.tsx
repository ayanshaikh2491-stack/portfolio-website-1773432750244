import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
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
    <div className="container mx-auto p-4">
      <Head>
        <title>Projects</title>
        <meta name="description" content="A list of projects I've worked on." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg mb-8">I've worked on a wide range of projects, from web applications to devops tools.</p>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;