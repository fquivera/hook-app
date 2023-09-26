import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { name, origin } = !!data && data;

  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={name} author={origin} />}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Próximo
      </button>
    </>
  );
};
