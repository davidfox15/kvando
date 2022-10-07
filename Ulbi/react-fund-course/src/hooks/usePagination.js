import { useEffect, useState } from 'react';

const usePagination = (limit, totalCount) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(new Array(totalCount / limit).fill(null).map((value, index) => index+1));
  }, []);

  return pages;
};

export default usePagination;
