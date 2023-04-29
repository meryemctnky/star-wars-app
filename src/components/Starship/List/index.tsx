import { useEffect } from 'react';
import { fetchStarshipsAsync } from '../../../services';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { Starship } from '../../../types/types';
import StarshipCard from '../Card';

const StarshipList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { starships, total } = useAppSelector((store) => store.starships);

  useEffect(() => {
    if (total === 0) {
      dispatch(fetchStarshipsAsync({ page: 1, query: '' }));
    }
  }, [dispatch]);

  return (
    <div className='container mx-auto my-8'>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        {starships.map((starship: Starship, index: number) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default StarshipList;
