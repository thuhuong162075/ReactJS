import React from 'react';
import './css/ListItem.css'

function ListItem(props) {
  return (
    <div className="ListItem">
      <img src={props.srcImg} width={30} height={30}/>
      <p>{props.content}</p>
    </div>
  );
}

export default ListItem;
