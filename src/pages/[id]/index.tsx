import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getStarshipById, fetchStarships } from '@/services';
import { Starship, StarshipCardProps } from '@/types/types';
import StarshipDetails from '@/components/Starship/Details';
import Loading from '@/components/Loading';

const StarshipDetailsPage: React.FC<StarshipCardProps> = ({ starship }) => {
  if (!starship) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Star Wars App | {starship.name}</title>
        <meta
          name='description'
          content='View details of a Starship using the Star Wars API'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/icon.ico' />
      </Head>
      <div className='container mx-auto my-8'>
        <StarshipDetails starship={starship} />
      </div>
    </>
  );
};
export default StarshipDetailsPage;

export const getStaticProps: GetStaticProps<StarshipCardProps> = async (
  context
) => {
  const id = context.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  try {
    const starship = await getStarshipById(Number(id));
    return {
      props: {
        starship,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const starships = await fetchStarships(1);
  const paths = starships.map((starship: Starship) => ({
    params: {
      id: starship.url.split('/').slice(-2, -1)[0],
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
