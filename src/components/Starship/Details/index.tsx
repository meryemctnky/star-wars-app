import Image from 'next/image';
import Link from 'next/link';
import { StarshipCardProps } from '@/types/types';
import { BsArrowLeft } from 'react-icons/bs';

const StarshipDetails: React.FC<StarshipCardProps> = ({ starship }) => {
  return (
    <div className='bg-gunmetal text-fume rounded-md shadow-md flex flex-col md:flex-row mx-2 mb-14 md:m-0'>
      <Image
        src={`/images/${starship.name}.jpg` ?? '/default.jpg'}
        alt={starship.name}
        width={800}
        height={800}
        className='h-96 w-96 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg'
        priority
      />
      <div className='py-4 px-8 flex flex-col justify-start w-full md:w-2/3'>
        <h2 className='text-xl font-bold mb-6 text-upsdell'>{starship.name}</h2>
        <div className='flex flex-col space-y-4'>
          <p>
            <span className='text-md font-medium'>Model:</span> {starship.model}
          </p>
          <p>
            <span className='text-md font-medium'>Manufacturer:</span>{' '}
            {starship.manufacturer}
          </p>
          <p>
            <span className='text-md font-medium'>Length:</span>{' '}
            {starship.length}m
          </p>
          <p>
            <span className='text-md font-medium'>Crew:</span> {starship.crew}
          </p>
          <p>
            <span className='text-md font-medium'>Hyperdrive Rating:</span>{' '}
            {starship.hyperdrive_rating}
          </p>
          <p>
            <span className='text-md font-medium'>Starship Class:</span>{' '}
            {starship.starship_class}
          </p>
          <div className='flex justify-end'>
            <Link href='/'>
              <div className='flex items-center text-md font-medium text-upsdell hover:text-upsdell/90'>
                <BsArrowLeft className='mr-2 icon hover:text-upsdell/90' />
                <span>Back to Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
