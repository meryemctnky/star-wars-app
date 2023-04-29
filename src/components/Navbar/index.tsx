import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full bg-dark'>
      <div className='container mx-auto py-1 flex justify-start'>
        <div className='flex flex-col justify-start sm:flex-row'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Star Wars Logo'
              width={100}
              height={50}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
