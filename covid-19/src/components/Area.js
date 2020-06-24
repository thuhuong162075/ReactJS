import React from 'react';
import "../assets/css/Area.css"
function Area(props) {
    const {area} = props
  return (
    <div className="Area">
        <h2 className="title">Covid-19 theo khu vực</h2>
        <div className="detail">
            {area.map((item, index) => (
                <div className="area North-America" key={index}>
                    <span>{item.country}</span>
                    <div className="item confirmed">
                        <i>Nhiễm : </i> 
                        <strong className="total">{item.total_cases}</strong>
                        <span className="new">{item.new_cases}</span>
                    </div>
                    <div className="item death">
                        <i>Tử vong : </i>
                        <strong className="total">{item.total_deaths}</strong>
                        <span className="new">{item.new_deaths}</span>
                    </div>
                    <div className="item recovered">
                        <i>Đã khỏi : </i>
                        <strong className="total">{item.total_recovered}</strong>
                    </div>
                </div>
            )
            )}
        </div>
    </div>
  );
}

export default Area;
