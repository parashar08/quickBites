import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="text-center mt-[28vh] xl:mt-[40vh]">
      <div>
        <h1 className="font-bold text-[1.3rem] mb-4 xl:text-2xl">{err.data}</h1>
        <h2 className="font-medium text-[1rem] xl:text-[1.2rem]">
          {err.status} - {err.statusText}
        </h2>
      </div>
    </div>
  );
};

export default ErrorPage;
