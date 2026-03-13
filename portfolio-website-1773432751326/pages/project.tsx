import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

function ProjectPage() {
  const project = {
    title: 'Project 1',
    description: 'This is the description of project 1',
    image: '/project1.png',
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-8">{project.description}</p>
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-800">Back to projects</a>
        </Link>
      </main>
    </div>
  );
}

export default ProjectPage;