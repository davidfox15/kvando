import { useState, useEffect } from 'react';
const useMount = (isPostLoading) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isPostLoading && !mounted) {
      setTimeout(() => {
        console.log('mounted');
        setMounted(true);
      }, 1100);
    } else if (isPostLoading && mounted) {
      setMounted(false);
    }
  }, [isPostLoading]);
  return {
    mounted,
  };
};

export default useMount;
