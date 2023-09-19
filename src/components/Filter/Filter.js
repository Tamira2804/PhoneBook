import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilterHandler = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div className="Filter__container">
      <label htmlFor="filterId" className="Filter__label">
        {' '}
        Find contacts by name{' '}
      </label>
      <input
        type="text"
        value={filter}
        id="filterId"
        onChange={changeFilterHandler}
        className="Filter__input"
      />
    </div>
  );
};

export default Filter;
