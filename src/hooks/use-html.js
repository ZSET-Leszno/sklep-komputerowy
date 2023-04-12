import { useState, useCallback } from "react";

const useHtml = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (requestConfig, callBack) => {
    setIsLoading(true);
    setError(true);

    try {
      const response = await fetch(requestConfig.url);

      if (!response.ok) {
        throw new Error("blad przez wiktora");
      }

      const data = await response.json();

      callBack(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHtml;
