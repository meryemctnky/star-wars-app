import { Teko } from 'next/font/google';
import SearchForm from '../SearchForm';

const teko = Teko({
  subsets: ['latin'],
  weight: '300',
});

const Header: React.FC = () => {
  return (
    <header className={`bg-cover bg-center ${teko.className}`}>
      <div className='bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-dark/80 w-full h-full'>
        <div className='py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-12 z-10 relative'>
          <h1 className='mb-4 text-2xl font-extrabold tracking-wide leading-none text-fume md:text-4xl lg:text-5xl '>
            A galaxy of starships at your fingertips
          </h1>

          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
