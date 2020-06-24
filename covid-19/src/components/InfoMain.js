import React from 'react';
import "../assets/css/InfoMain.css"


function InfoMain(props) {
    const {chart} = props
    // const month = new Date().getMonth()+1 < 10 ? '0'+ (new Date().getMonth()+1) : new Date().getMonth()+1;
    // const myDateString = new Date().getFullYear()+'-'+ month +'-'+new Date().getDate()
    const cases = chart.total_cases
    const total_cases = cases.data.reduce((a, b) => a + b, 0)
    const new_cases = cases.data[cases.data.length-1]

    const currently_infected = chart.total_currently_infected
    const total_currently_infected = currently_infected.data.reduce((a, b) => a + b, 0)
    const new_infected = currently_infected.data[cases.data.length-1]

    const deaths = chart.total_deaths
    const total_deaths = deaths.data.reduce((a, b) => a + b, 0)
    const new_deaths = deaths.data[cases.data.length-1]
    return (
        <div className="InfoMain">
            <h2 className="title">
                Covid-19 trên thế giới
            </h2>

            <div className="detail">
                <div className="item confirmed">
                    <label>Nhiễm</label>
                    <strong>{total_cases}</strong>
                    <p>+ {new_cases} (mới nhiễm)</p>
                </div>
                <div className="item deaths">
                    <label>Tử vong</label>
                    <strong>{total_deaths}</strong>
                    <p>+ {new_deaths} (mới chết)</p>
                </div>
                <div className="item recovered">
                    <label>Khỏi</label>
                    <strong>
                        {total_currently_infected}
                    </strong>
                    <p>+ {new_infected} (mới khỏi)</p>
                </div>
            </div>
        </div>
  );
}

export default InfoMain;
