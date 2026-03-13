import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-3xl font-bold">Portfolio</a>
        </Link>
        <nav className="flex gap-4">
          <Link href="/projects">
            <a className="text-gray-300 hover:text-white">Projects</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-300 hover:text-white">About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;