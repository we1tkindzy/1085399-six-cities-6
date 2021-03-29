import React, {useRef} from 'react';
import {SortType} from '../../const';
import {incrementSort} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';

const Sort = () => {
  const {activeSort} = useSelector((state) => state.OFFERS);

  const dispatch = useDispatch();

  const selectRef = useRef();

  const handelSortClick = () => {
    selectRef.current.classList.toggle(`places__options--opened`);
  };

  const handelSortChange = (evt) => {
    dispatch(incrementSort(evt.target.innerText));
    selectRef.current.classList.remove(`places__options--opened`);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handelSortClick} className="places__sorting-type" data-testid="sort-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul data-testid="sort-list" className="places__options places__options--custom" ref={selectRef}>
        {Object.values(SortType).map((sort, i) => (
          <li key={sort + i} onClick={handelSortChange} data-testid={sort} className={`places__option ${sort === activeSort ? `places__option--active` : ``}`} tabIndex="0">{sort}</li>
        ))}
      </ul>
    </form>
  );
};

export default React.memo(Sort);
