import React , {useState, useRef,useEffect} from 'react';
import "../assets/css/InputSearch.css"

function InputSearch(props) {
  const {nation} = props
  const node = useRef();
  const [searchItem, setSearchItem] = useState('')
  const [filters, setFilters] = useState([])
  const [display, setDisplay] = useState(false)
  function handleSearchTermChange(e) {
    e.target.value === '' ? setDisplay(false) : setDisplay(true)
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
      
      <input 
        className="input"
        placeholder="Search country" 
        type="text"
        value={searchItem}
        onChange={handleSearchTermChange}
        />
        {display && (
          <div className="autoContainer">
            {filters.map((value, i) => 
              <div
                className="option"
                key={i}
                tabIndex="0"
              >
                <span>{value.country}</span>
              </div>
            )}
          </div>
        )}
        <div className="search">
          <button className="button btn-search" onClick={onClickSearch}>Search</button>
          <button className="button btn-reset"  onClick={onClickReset}>Reset</button>
        </div>

    </div>
    
  );
}

export default InputSearch;
