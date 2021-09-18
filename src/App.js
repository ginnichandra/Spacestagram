import React, { useState, useEffect } from "react";

import Card from "./components/UI/Card/Card";
import "./App.css";

const App = () => {
  const [nasaData, setNasaData] = useState([]);

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  // errors
  const [httpError, setHttpError] = useState();

  const key = "R3Wva5oKWvxHqsstXT9qrI26IvsG8WYFQSeEBeN3";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);

      setNasaData(data);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [url]);

  if (isLoading) {
    return (
      <section className='loadingState'>
        <p> Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p> {httpError} </p>
      </section>
    );
  }

  // to make sure that movies fectch as soon as component executes

  return (
    <React.Fragment>
      <Card
        explanation={nasaData.explanation}
        date={nasaData.date}
        hdurl={nasaData.hdurl}
        title={nasaData.title}
        url={nasaData.url}
      />

      <Card
        explanation={nasaData.explanation}
        date={nasaData.date}
        hdurl={nasaData.hdurl}
        title={nasaData.title}
        url={nasaData.url}
      />

    </React.Fragment>
  );
};

export default App;
