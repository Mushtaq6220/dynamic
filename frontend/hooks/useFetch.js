"use client";

import { useEffect, useState } from "react";

export default function useFetch(fetcher, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!immediate || !fetcher) {
      return;
    }

    let active = true;

    const run = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetcher();
        if (active) {
          setData(result);
        }
      } catch (fetchError) {
        if (active) {
          setError(fetchError);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      active = false;
    };
  }, [fetcher, immediate]);

  return { data, loading, error };
}
