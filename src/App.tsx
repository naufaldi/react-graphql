import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './graphql/query/pokemons';
import { Pokemon } from './__generated__/graphql';

const App = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.pokemons.results.map((pokemon: Pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default App;
