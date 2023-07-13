import { useEffect } from "react";

export default function useFetch(fn, path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await fn(...path);
        setData(response);

      } catch (error) {
        setError(error);

      } finally {
        setLoading(false);
      }
    }

    request();
  })

  return { data, error, loading };
}