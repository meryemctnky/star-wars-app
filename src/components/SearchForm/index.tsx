import { useState } from 'react';
import { fetchStarshipsAsync } from '@/services';
import { useAppDispatch } from '@/store/index';
import { clearState, updateQuery } from '@/store/starships/StarshipSlice';
import { BiSearch } from 'react-icons/bi';
import debounce from 'lodash.debounce';

const SearchForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();

  const debouncedOnChange = debounce((value: string) => {
    setText(value);
    dispatch(clearState());
    dispatch(updateQuery(value));
    dispatch(fetchStarshipsAsync({ page: 1, query: value }));
  }, 500);

  const setQuery = (e: React.FormEvent<HTMLInputElement>): void => {
    debouncedOnChange(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form className='w-full max-w-md mx-auto mt-6' onSubmit={onSubmit}>
      <div className='relative'>
        <input
          type='text'
          name='search'
          className='block w-full p-4 pl-10 text-sm text-dark tracking-wide border-upsdell rounded-lg bg-white focus:ring-upsdell focus:border-dark'
          placeholder='Search...'
          onChange={setQuery}
          value={text}
        />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <BiSearch className='text-dark text-2xl' />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
