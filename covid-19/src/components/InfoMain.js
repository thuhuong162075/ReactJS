import React from 'react';
import "../assets/css/InfoMain.css";
import { Line } from "react-chartjs-2";

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function InfoMain(props) {
    const {chart} = props
    const cases = chart.total_cases
    const total_cases = formatNumber(cases.data[cases.data.length-1])
    const new_cases = formatNumber(cases.data[cases.data.length-1] - cases.data[cases.data.length-2])

    const currently_infected = chart.total_currently_infected
    const total_currently_infected = formatNumber(currently_infected.data[cases.data.length-1])
    const new_infected = formatNumber(currently_infected.data[cases.data.length-1]-currently_infected.data[cases.data.length-2])

    const deaths = chart.total_deaths
    const total_deaths = formatNumber(deaths.data[cases.data.length-1])
    const new_deaths = formatNumber(deaths.data[cases.data.length-1]-deaths.data[cases.data.length-2])
    return (
        <div className="InfoMain">
            <h2 className="title">
                Covid-19 trên thế giới
            </h2>
                <Line
                    data={{
                    labels: chart.total_cases.days,
                    datasets: [
                        {
                            data: chart.total_cases.data,
                            label: "Total cases",
                            borderColor: "#ff4d4f",
                            fill: false
                        },
                        {
                            data: chart.total_currently_infected.data,
                            label: "Total Cyrently infected",
                            borderColor: "#222",
                            fill: false
                        },
                        {
                            data: chart.total_deaths.data,
                            label: "Total Deaths",
                            borderColor: "#8cf2cd",
                            fill: false
                        },
                    ]
                    }}
                    options={{
                    title: {
                        display: true,
                        text: "Biểu đồ Covid-19 trên thế giới"
                    },
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                    }}
                />
            
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
