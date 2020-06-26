import React , {useState, useRef,useEffect} from 'react';
import "../assets/css/InputSearch.css"


function InputSearch(props) {
  const node = useRef();
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

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    props.onClickShow()
    
  };

  return (
    <div className="dropdown-content" ref={node}>
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
