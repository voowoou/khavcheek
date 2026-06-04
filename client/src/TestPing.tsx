import { pingServer } from './ping';

export const TestPing = () => {
  const { data, error, isLoading } = pingServer();

  return (
    <>
      {isLoading && <span>LOADING</span>}
      {data && <span>{data.message}</span>}
      {error && <p>{error.message}</p>}
    </>
  );
};
