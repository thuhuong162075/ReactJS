import React from 'react'; 
import ReactHtmlParser from 'react-html-parser';

function Nation(props) {
  const {item, keySearch} = props
  let myRe = new RegExp("("+keySearch+")", "gi");
  let country=keySearch !== '' ? item.country.replace(myRe,('<span style="color:red; background: yellow">$1</span>')):item.country;
  
  return (
    <tr className="country">
        <td>
          {keySearch !== '' ? ReactHtmlParser (country) : item.country}
        </td>
        <td>{item.total_cases}</td>
        <td >
            <button className={item.new_cases==="" ? "button" : "new-cases"}>
                {item.new_cases}
            </button>
        </td>
        <td>{item.total_deaths}</td>
        <td>
            <button className={item.new_deaths==="" ? "button" : "new_deaths"}>
            {item.new_deaths}
            </button>
        </td>
        <td>{item.total_recovered}</td>
    </tr>
              
  );
}

export default Nation;
