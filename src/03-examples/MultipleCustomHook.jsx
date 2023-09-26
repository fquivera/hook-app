import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://dummyjson.com/quotes/${counter}/`
  );

  const { quote, author } = !!data && data;

  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}
      <button
        type="button"
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Próximo
      </button>
    </>
  );
};
