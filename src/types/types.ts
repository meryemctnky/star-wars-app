export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type StarshipListProps = {
  starships: Starship[];
  className?: string;
};

export type StarshipCardProps = {
  starship: Starship;
};

export type StarshipState = {
  starships: Starship[];
  queryResult: Starship[];
  isLoading: boolean;
  page: number;
  query: string;
  total: number;
  isAllLoaded: boolean;
  error?: string | null;
};

export type FetchStarshipsResponse = {
  starships: Starship[];
  total: number;
  next: string;
};

export type FetchStarshipsProps = {
  page: number;
  query: string;
};

export type Props = {
  initialStarships: Array<Starship>;
};
