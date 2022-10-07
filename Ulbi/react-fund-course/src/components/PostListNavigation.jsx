import React from 'react';
import CustomNavButton from './UI/button/CustomNavButton';

const PostListNavigation = ({ nav }) => {
  const { pages, setChosenPage } = nav;

  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 15, marginBottom: 15 }}>
      {pages.map(item => {
        return (
          <CustomNavButton key={item} onClick={() => setChosenPage(item)}>
            {item}
          </CustomNavButton>
        );
      })}
    </div>
  );
};

export default PostListNavigation;
