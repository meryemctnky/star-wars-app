import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { StarshipCardProps } from '../../../types/types';

const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => {
  const id = String(starship.url.split('/')[5]);
  return (
    <div className='relative m-2 p-4 bg-gunmetal text-fume select-none overflow-hidden w-300 h-400 rounded-lg shadow-lg group'>
      <Image
        src={`/images/${starship.name}.jpg` ?? '/default.jpg'}
        className='w-full h-72 object-fill border-3 border-solid border-gunmetal rounded-md transition duration-500 ease-in-out transform group-hover:scale-110'
        alt='starship-img'
        width={500}
        height={500}
        priority
      />
      <h2 className='text-xl font-bold text-center leading-8 py-2'>
        {starship.name}
      </h2>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-gunmetal  text-fume opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out'>
        <div className='flex flex-col justify-around h-full p-6'>
          <h2 className='text-xl font-bold mb-2 text-upsdell'>
            {starship.name}
          </h2>
          <p className='text-md text-justify'>
            <span className='font-bold'>Model: </span> {starship.model}
          </p>
          <p className='text-md text-justify'>
            <span className='font-bold'>Hyperdrive Rating: </span>
            {starship.hyperdrive_rating}
          </p>
          <div className='flex justify-end'>
            <Link href={`/${id}`}>
              <div className='flex items-center text-md font-medium text-upsdell hover:text-upsdell/90'>
                <span>See More Details</span>
                <BsArrowRight className='ml-2 icon hover:text-upsdell/90' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipCard;
