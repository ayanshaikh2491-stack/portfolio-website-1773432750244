import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Projects from '../components/Projects';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Professional Portfolio Website</title>
        <meta name="description" content="A professional portfolio website for frontend, security, and devops professionals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
        <p className="text-lg mb-8">I'm a passionate frontend, security, and devops professional with a strong focus on delivering high-quality solutions.</p>
        <Projects />
      </main>
    </div>
  );
}

export default HomePage;