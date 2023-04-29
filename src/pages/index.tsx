import React, { useEffect } from 'react';
import Head from 'next/head';
import { RootState, useAppDispatch, useAppSelector } from '../store/index';
import { fetchStarshipsAsync } from '@/services';
import Header from '@/components/Header';
import StarshipList from '@/components/Starship/List';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import LoadMore from '@/components/LoadMore';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, page, query, error } = useAppSelector(
    (state: RootState) => state.starships
  );

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchStarshipsAsync({ page, query }));
    }
  }, [page, dispatch]);

  return (
    <>
      <Head>
        <title>Star Wars App</title>
        <meta
          name='description'
          content='List starships by using Star Wars API'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/icon.ico' />
      </Head>
      <Header />
      {error ? (
        <Error message={error} />
      ) : (
        <>
          <StarshipList />
          {isLoading ? <Loading /> : <LoadMore />}
        </>
      )}
    </>
  );
};

export default HomePage;
