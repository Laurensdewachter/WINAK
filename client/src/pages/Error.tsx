import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Onbestaande pagina</h1>
      <p>
        Het lijkt erop dat je op een onbestaande pagina terecht bent gekomen.
      </p>
    </div>
  );
}
