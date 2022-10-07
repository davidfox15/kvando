import { useState } from 'react';

const useFetching = callback => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError('message');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
