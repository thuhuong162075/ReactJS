import React , {useState} from 'react';
import "../assets/css/InputSearch.css"


function InputSearch(props) {
  const [searchItem, setSearchItem] = useState('')
  const [filters, setFilters] = useState('')
  const {nation} = props
  function handleSearchTermChange(e) {
    setSearchItem(e.target.value);
  }
  const onClickSearch = () => {
    props.onSearch(searchItem, filters)
  }
  const onClickReset = () => {
    props.onClickReset()
  }

  React.useEffect(() => {
    const results = nation.filter(item =>
      item.country.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilters(results);
  }, [searchItem]);

  return (
    <div className="dropdown-content">
      <input placeholder="Search country" 
              type="text"
              value={searchItem}
              onChange={handleSearchTermChange}
              />
      <div className="search">
        <button className="button btn-search" onClick={onClickSearch}>Search</button>
        <button className="button btn-reset"  onClick={onClickReset}>Reset</button>
      </div>
    </div>
  );
}

export default InputSearch;
