import Tour from "./Tour";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("USE EFFECT...");
    setLoading(true);
    fetchTours().then(
      (toursData) => {
        setTours(toursData);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, []);

  function removeTour(id) {
    setTours(tours.filter((t) => t.id !== id));
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!loading) {
    return (
      <section>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
  }
}

function fetchTours() {
  return fetch("https://course-api.com/react-tours-project")
    .then((r) => r.json())
    .then((response) => response);
}
