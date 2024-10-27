import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
