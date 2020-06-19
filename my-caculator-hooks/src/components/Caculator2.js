import React, { useState } from 'react';
import './css/Caculator.css'
import Button from './Button'
import Input from './Input'

function Caculator2() {
    const [input, setInput] = useState('0')
    const [number, setNumber] = useState('')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState(0)
    const [flat, setFlat] = useState(0)
    function mathOperations(val, num1, num2) {
        // console.log("số 1", num1);
        // console.log("toán tử", val);
        // console.log(" số 2", num2);
        switch(val) {
            case '/': return num1/num2;
            case '*': return num1*num2;
            case '+': return num1+num2;
            default: return num1-num2;
        }
    }
    function addtoDigit(val) {
        return () => {
            if(!operator && result === 0) {
                setInput(input === '0' ? val : input + val)       
            }else {
                setInput(flat === 1 ? val : input + val)
                setFlat(0)
                setResult(0)
            }  
        }
    }
    function addtoDot() {
        return () => {
            if(input.indexOf('.') === -1) {
                setInput(input+'.')
            }
        }
    }
    function onPercent() {
        return () => {
            const value = parseFloat(input)/100;
            setInput(`${value}`)
        }
    }
    function onToggleSign(){
        return ()=> {
            const value = input === '0' ? '' : input;
            setInput(input.charAt(0) === '-' ? input.substring(1) : '-' + value)
        }
    }
    function onClearDisplay(val){
        return () => {
            setInput('0')
            setNumber('')
            setOperator('')
            setResult(0)
        }
    }
    function addtoOperator(val){
        return () => {

            if(!operator) {
                setNumber(input)
                setOperator(val)
                setFlat(1)
            } else {
                setNumber(`${mathOperations(operator, parseFloat(number), parseFloat(input))}`)
                setOperator(val)
                setInput(`${mathOperations(operator, parseFloat(number), parseFloat(input))}`)
                setFlat(1)
            }
        }
    }
    function inputReturn() {
        return () => {
            setInput(`${mathOperations(operator, parseFloat(number), parseFloat(input))}`)
            setNumber('')
            setOperator('')
            setResult(1)
            setFlat(1)
        } 
    }
  return (
    <div className="Caculator">
        <div className="info-show">
            <div className="operator-show">
                {input===number ? (input+operator) : (number+operator+input)}
            </div>
            <Input>{input.length < 17 ? input : input.slice(0,17)}</Input>
        </div>
        <div className="Info">
            <div className="row">
                <Button onClick={onClearDisplay()}>AC</Button>
                <Button onClick={onToggleSign()}>+/-</Button>
                <Button onClick={onPercent()}>%</Button>
                <Button onClick={addtoOperator('/')}  classItem="operator">/</Button>
            </div>
            <div className="row">
                <Button onClick={addtoDigit('7')}>7</Button>
                <Button onClick={addtoDigit('8')}>8</Button>
                <Button onClick={addtoDigit('9')}>9</Button>
                <Button onClick={addtoOperator('*')} classItem="operator">*</Button>
            </div>
            <div className="row">
                <Button onClick={addtoDigit('4')}>4</Button>
                <Button onClick={addtoDigit('5')}>5</Button>
                <Button onClick={addtoDigit('6')}>6</Button>
                <Button onClick={addtoOperator('-')} classItem="operator">-</Button>
            </div>
            <div className="row">
                <Button onClick={addtoDigit('1')}>1</Button>
                <Button onClick={addtoDigit('2')}>2</Button>
                <Button onClick={addtoDigit('3')}>3</Button>
                <Button onClick={addtoOperator('+')}  classItem="operator">+</Button>
            </div>
            <div className="row">
                <Button onClick={addtoDigit('0')} classItem="zero">0</Button>
                <Button onClick={addtoDot()}>.</Button>
                <Button onClick={inputReturn()} classItem="operator">=</Button>
            </div>
        </div>
    </div>
  );
}
export default Caculator2