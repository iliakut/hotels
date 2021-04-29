import { useEffect, useState } from "react";


const useFetch = <T>(fetchFromService: () => Promise<T>) => {
  const [response, setResponse] = useState<T | null>(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchFromService();
        setResponse(res);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFromService]);

  return { response, isError, isLoading };
};

export default useFetch;