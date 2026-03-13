import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-4">
      <Image src={project.image} width={200} height={100} />
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-lg">{project.description}</p>
      <Link href={project.link}>
        <a className="text-blue-600 hover:text-blue-800">View Project</a>
      </Link>
    </div>
  );
}

export default ProjectCard;