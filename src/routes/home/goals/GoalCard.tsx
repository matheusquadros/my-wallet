import React, { FC } from 'react';
import IGoal from '../../../types/IGoal'
import './GoalCard.css';

/* http://recharts.org/en-US/examples/CustomActiveShapePieChart */

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

interface IProps {
  goal: IGoal
}


const GoalCard : FC<IProps > = ({ goal }: IProps) => {
  return (
        <div className="goal">
          <div className="goal-header">
            <span>{goal.description}</span>
          </div>
          <div className="goal-body">
            <div className="total-saved">
              <span className="description">
                Valor aportado
              </span>
              <span className="value">
                {currencyFormatter(goal.addedAmount)}
              </span>
            </div>
            <div className="total">
              <span className="description">
                Valor atual
              </span>
              <span className="value">
                {currencyFormatter(goal.currentAmount)}
              </span>
            </div>
          </div>
          <div className="goal-footer">
            <div className="total-applied">
              <span className="description">
                Recursos alocados
              </span>
              <span className="value">
                {currencyFormatter(goal.allocatedAmount)}
              </span>
            </div>
            <div className="not-applied">
              <span className="description">
                Não alocado
              </span>
              <span className="value">
                {currencyFormatter(goal.nonAllocatedAmount)}
              </span>
            </div>
          </div>
        </div>);
}

export default GoalCard;
