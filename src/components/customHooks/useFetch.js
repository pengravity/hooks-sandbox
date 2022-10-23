import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();

      setData(responseData);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
