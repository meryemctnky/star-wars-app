import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='w-full bg-dark'>
      <div className='container mx-auto py-1 flex justify-start'>
        <div className='flex flex-col justify-start sm:flex-row'>
          <Image
            src='/Star_Wars_Logo.png'
            alt='Star Wars Logo'
            width={100}
            height={50}
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
