import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [value, setValue] = useState('');
  const handleClick = (val) => {
    if (
      (/[0-9]/.test(val) && (value !== '' || val !== '0')) ||
      (/[+\-*/%]/.test(val) && value && /[0-9]$/.test(value))
    ) {
      setValue((prevValue) => prevValue + val);
    }
  };
  const handleDelete = () => {
    if (value) {
      setValue(value.slice(0, -1));
    } else {
      setValue('');
    }
  };
  const handle00Click = () => {
    if (/[0-9]/.test(value[value.length - 1])) {
      setValue(value + '00');
    }
  };
  const handlePercentage = () => {
    if (value === '') return;
    if (/[0-9]$/.test(value)) {
      setValue(value + '%'); 
    }
  };
  const handleEvaluate = () => {
    try {
      let evaluatedValue = value;
      if (evaluatedValue.includes('%')) {
        evaluatedValue = evaluatedValue.replace(/(\d+)%(\d+)/g, (match, number1, number2) => {
          return `(${number1} * ${number2}) / 100`; 
        });
        evaluatedValue = evaluatedValue.replace(/(\d+)%/g, (match, number1) => {
          return `(${number1} / 100)`;
        });
      }
      let result = eval(evaluatedValue);
      result = parseFloat(result.toFixed(5));

      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };
  return (
    <div>
      <form action="">
        <div className="container">
          <div className="h1">
            <h1>React Calculator</h1>
          </div>

          <div className="calculator">
            <div className="number-box">
              <input type="text" value={value} readOnly />
            </div>

            <div>
              <input
                type="button"
                className="AC"
                value="AC"
                onClick={() => setValue('')}
              />
              <input
                type="button"
                className="DE"
                value="DE"
                onClick={handleDelete}
              />
              <input
                type="button"
                value="%"
                onClick={handlePercentage}
              />
              <input
                type="button"
                value="/"
                onClick={() => handleClick('/')}
              />
            </div>

            <div>
              <input
                type="button"
                value="7"
                onClick={() => handleClick('7')}
              />
              <input
                type="button"
                value="8"
                onClick={() => handleClick('8')}
              />
              <input
                type="button"
                value="9"
                onClick={() => handleClick('9')}
              />
              <input
                type="button"
                value="*"
                onClick={() => handleClick('*')}
              />
            </div>

            <div>
              <input
                type="button"
                value="4"
                onClick={() => handleClick('4')}
              />
              <input
                type="button"
                value="5"
                onClick={() => handleClick('5')}
              />
              <input
                type="button"
                value="6"
                onClick={() => handleClick('6')}
              />
              <input
                type="button"
                value="+"
                onClick={() => handleClick('+')}
              />
            </div>

            <div>
              <input
                type="button"
                value="1"
                onClick={() => handleClick('1')}
              />
              <input
                type="button"
                value="2"
                onClick={() => handleClick('2')}
              />
              <input
                type="button"
                value="3"
                onClick={() => handleClick('3')}
              />
              <input
                type="button"
                value="-"
                onClick={() => handleClick('-')}
              />
            </div>

            <div>
              <input
                type="button"
                value="00"
               onClick={handle00Click}
              />
              <input
                type="button"
                value="0"
                onClick={() => handleClick('0')}
              />
              <input
                type="button"
                value="."
                onClick={() => handleClick('.')}
              />
              <input
                type="button"
                className="equal"
                value="="
                onClick={handleEvaluate}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
