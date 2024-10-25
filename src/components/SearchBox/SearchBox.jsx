import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
