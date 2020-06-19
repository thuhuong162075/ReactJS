import React, { useState, useRef }from 'react';
import './component/css/App.css';
import cat from './image/cat.svg'
import ListItem from './component/ListItem';
import grinning from './image/grinning.svg'
import smile from './image/smile.svg'
import smiley from './image/smiley.svg'
import cry from './image/cry.svg'
import laughing from './image/Laughing.svg'
import angry from './image/angry.svg'
import hug from './image/hug.svg'
import expressionless from './image/expressionless.svg'
import flushed from './image/flushed.svg'
import thinking from './image/thinking.svg'
import blow_kiss from './image/blow-kiss.svg'
import screaming from './image/screaming.svg'

const iconlist = [
  {
    srcImg: grinning,
    content: "Grinning" 
  },
  {
    srcImg: smile,
    content: "Smile" 
  },
  {
    srcImg: smiley,
    content: "Smiley" 
  },
  {
    srcImg: laughing,
    content: "Laughing" 
  },
  {
    srcImg: angry,
    content: "Angry" 
  },
  {
    srcImg: cry,
    content: "Cry" 
  },
  {
    srcImg: hug,
    content: "Hug" 
  },
  {
    srcImg: expressionless,
    content: "Expressionless" 
  },
  {
    srcImg: flushed,
    content: "Flushed" 
  },
  {
    srcImg: thinking,
    content: "Thinking" 
  },
  {
    srcImg: blow_kiss,
    content: "Blow kiss" 
  },
  {
    srcImg: screaming,
    content: "Screaming" 
  },
]
function App() { 
  const [searchItem, setSearchItem] = useState('')
  const [filters, setFilters] = useState([])
  const typingTimeoutRef = useRef(null);
  function handleSearchTermChange(e){
    const value = e.target.value;
    setSearchItem(e.target.value);
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(()=> {
      const formValues = {
        searchItem: value
      };
      // console.log(formValues['searchItem'])
    }, 300)  
  }
  React.useEffect(() => {
    const results = iconlist.filter(item =>
      item.content.toLowerCase().includes(searchItem)
    );
    setFilters(results);
  }, [searchItem]);
  return (
    <div className="App">
      <div className="Header">
        <img src={cat} width={30} height={30}/>
          Emoji Search
        <img src={cat} width={30} height={30}/>
      </div>
      <input 
        type="text" 
        placeholder="Search Icons" 
        value={searchItem}
        onChange={handleSearchTermChange}
      />
      <div className="listIcon">
        {filters.map((item, index) => 
          <ListItem srcImg={item.srcImg} content={item.content} key={index}/>
        )}
      </div>
    </div>
  );
}

export default App;
