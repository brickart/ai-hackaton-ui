import { useCallback, useState } from "react";
import { mock } from "./mock";
import { APIResponse } from "./response";

export const useGenerateApiDoc = () => {
  const [data, setData] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback((url: string) => () => {
    setLoading(true);

    // fetch(`localhost:3001`, {method: 'POST', body: JSON.stringify({ url })})
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setData(mock);
      setLoading(false);
    }, 3000);
  }, [data, setData, loading, setLoading]);
  

  return { data, loading, loadData };
};

