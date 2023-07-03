import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="error-page">
      <h1>{`Error ${status} ${statusText}`}</h1>
    </div>
  );
};

export default ErrorPage;
