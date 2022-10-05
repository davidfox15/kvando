import { useMemo } from 'react';
import { compare, includeString } from '../logic/filter';

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) return [...posts].sort((post1, post2) => compare(post1[sort], post2[sort]));
    else return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    if (search) return [...sortedPosts].filter(post => includeString(search, post.title, post.text));
    else return sortedPosts;
  }, [search, posts, sortedPosts]);

  return sortedAndSearchedPosts;
};
