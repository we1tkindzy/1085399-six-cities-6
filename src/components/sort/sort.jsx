import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortType} from '../../const';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const Sort = (props) => {
  const {activeSort, changeSort} = props;

  const [openSort, setOpenSort] = useState(false);

  const handelSortClick = () => {
    setOpenSort((prevState) => !prevState);
  };

  const handelSortChange = (evt) => {
    changeSort(evt.target.innerText);
    setOpenSort(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handelSortClick} className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openSort &&
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortType).map((sort, i) => (
          <li key={sort + i} onClick={handelSortChange} className={`places__option ${sort === activeSort ? `places__option--active` : ``}`} tabIndex="0">{sort}</li>
        ))}
      </ul>}
    </form>
  );
};

Sort.propTypes = {
  activeSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort(sort) {
    dispatch(ActionCreator.incrementSort(sort));
  }
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
