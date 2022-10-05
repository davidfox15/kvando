import React from 'react';
import CustomInput from './UI/input/CustomInput';
import CustomSelect from './UI/select/CustomSelect';

const PostFilter = ({ filter, setFilter }) => {
  function searchInputHandler(search) {
    setFilter(prev => ({
      ...prev,
      search,
    }));
  }

  function selectInputHandler(sort) {
    setFilter(prev => ({
      ...prev,
      sort,
    }));
  }

  return (
    <div>
      <CustomInput type="text" value={filter.search} onChange={inputValue => searchInputHandler(inputValue)} />
      <CustomSelect
        defaultValue={'Сортировка по'}
        options={[
          { value: 'id', name: 'По id' },
          { value: 'title', name: 'По заголовку' },
          { value: 'text', name: 'По тексту' },
        ]}
        value={filter.sort}
        onChange={selectValue => selectInputHandler(selectValue)}
      />
    </div>
  );
};

export default PostFilter;
