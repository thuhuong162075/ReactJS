import React from 'react';

function Nation(props) {
  const {item, keySearch} = props
  //console.log(keySearch)
  if(keySearch !== '') {
    console.log(item)
  }
  return (
    <tr className="country">
        <td>{item.country}</td>
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
