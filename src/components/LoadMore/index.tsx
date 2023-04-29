import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { getNextPage } from '@/store/starships/StarshipSlice';

const LoadMore: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAllLoaded } = useAppSelector((state: RootState) => state.starships);

  const handlegetNextPage = () => {
    dispatch(getNextPage());
  };

  return (
    <div className='flex justify-center my-4'>
      <button
        type='button'
        className={`text-fume bg-upsdell hover:bg-upsdell/80 focus:ring-4 focus:ring-upsdell/50 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-10 outline-none ${
          isAllLoaded && 'opacity-50 cursor-not-allowed'
        }`}
        onClick={handlegetNextPage}
        disabled={isAllLoaded}
      >
        {isAllLoaded ? 'All Loaded' : 'Load More'}
      </button>
    </div>
  );
};

export default LoadMore;
