import React, {useState} from 'react';
import "../assets/css/Header.css"
import coronaIcon from '../assets/image/corona.png'
function Header() {
  let newDate = new Date()
  const [date, setDate] = useState(new Date())
  function callMe(){
    setInterval(() => {
      setDate(new Date()) 
    }, 1000)
  }
  return (
    <div className="Header">
        <div className="title-img">
            <img src={coronaIcon} width={70} height={70}/>
        </div>
        <div className="title">
            <div className="logo">Virus corona</div>
            <div className="time">{date.toLocaleString()}</div>
            {callMe()}
        </div>
    </div>
  );
}

export default Header;
