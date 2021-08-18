import { useState } from 'react';

import { Line } from "react-chartjs-2";

import './index.css';


function GoalDetail() {


  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbol: 'R$'
  }

  const currencyFormatter = (value: number) => {
    if (typeof value !== 'number') value = 0.0
    let options = defaultOptions

    let valueFormatted: string = value.toFixed(options.significantDigits)

    const [currency, decimal] = valueFormatted.split('.')
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
  }

  return (
    <div className="goal-container">
      <div className="overall-data">
        <span className="title">
          Aposentadoria
        </span>
        <div className="data">
          <div className="overall-content-data">

            <div className="total-saved">
              <span className="description">
                Valor aportado
              </span>
              <span className="value">
                {currencyFormatter(123)}
              </span>
            </div>

          </div>
          <div className="overall-content-data">
            <div className="total">
              <span className="description">
                Valor aportado
              </span>
              <span className="value">
                {currencyFormatter(123)}
              </span>
            </div>
          </div>
          <div className="overall-content-data">
            <div className="total">
              <span className="description">
                Porcentagem alocada
              </span>
              <span className="value">
                80%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div>
          <span className="title">Graficos</span>
          <div className="card chart-container">
            <Line type={Line} data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "First dataset",
                  data: [33, 43, 53, 63, 83, 93],
                  fill: true,
                  backgroundColor: "rgba(27, 141, 217,0.2)",
                  borderColor: "rgba(27, 141, 217,1)"
                },
                {
                  label: "Second dataset",
                  data: [33, 43, 53, 63, 84, 95],
                  fill: false,
                  borderColor: "#459638"
                }
              ]
            }}
              options={{
                plugins: {
                  legend: false,
                }
              }} />

          </div>
        </div>
        <div>
          <span className="title">Registros</span>
          <div className="card register-log">

            <div className="register-item">
              <span className="added-date">4 Jun. 2021</span>
              <div className="register-value">
                <span className="description">Aporte</span>
                <span className="value">R$ 15.826,00</span>
              </div>
            </div>
            <div className="register-item">
              <span className="added-date">4 Jun. 2021</span>
              <div className="register-value">
                <span className="description">Aporte</span>
                <span className="value">R$ 15.826,00</span>
              </div>
            </div>
            <div className="register-item">
              <span className="added-date">4 Jun. 2021</span>
              <div className="register-value">
                <span className="description">Aporte</span>
                <span className="value">R$ 15.826,00</span>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}

export default GoalDetail;
