import React from 'react'
import './css/Caculator.css'
import Button from './Button'
import Input from './Input'
class Caculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '0',
            number: '',
            operator: '',
            result: 0
        }
    }
    mathOperations(val, num1, num2){
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
    addtoDigit(val) {
        //console.log(this.state.result)
        if(!this.state.operator && this.state.result === 0) {
            this.setState({
                input: this.state.input === '0' ? val : this.state.input + val
            })       
        }else {
            this.setState({
                input: val,
                result: 0
            })  
        }           
    }
    addtoOperator(val) {
        if(!this.state.operator) {
            this.setState({
                number: this.state.input,
                operator: val,
            })
        } else {
            this.setState({
                number: `${this.mathOperations(this.state.operator, parseFloat(this.state.number), parseFloat(this.state.input))}`,
                operator: val,
                // result: this.mathOperations(this.state.operator, parseInt(this.state.number), parseInt(this.state.input)),
                input: `${this.mathOperations(this.state.operator, parseFloat(this.state.number), parseFloat(this.state.input))}`,
            })
        }
    }
    addtoDot() {
        const {input} = this.state;
        if(input.indexOf('.') === -1) {
            this.setState({
                input: this.state.input + '.'
            })
        }
    }
    onToggleSign(){
        const {input} = this.state;
        const value = input === '0' ? '' : input;
        this.setState({
            input: input.charAt(0) === '-' ? input.substring(1) : '-' + value
        })
    }
    onPercent() {
        const {input} = this.state;
        const value = parseFloat(input)/100;
        this.setState({
            input: `${value}`
        })
    }
    onClearDisplay(){
        this.setState({
            input: '0',
            number: '',
            operator: '',
            result: 0
        })
    }
    inputReturn() {
        this.setState({
            input: `${this.mathOperations(this.state.operator, parseFloat(this.state.number), parseFloat(this.state.input))}`,
            number: '',
            operator: '',
            result: 1,
        })
    }
    render(){
        const {input, number, operator, result} = this.state
        console.log('input: ', typeof input, input ,'number: ',  typeof number, number, 'operator: ',typeof operator, operator,'result: ',typeof result, result)
        
        return (
            <div className="Caculator">
                <Input>{input.length < 17 ? input : input.slice(0,17)}</Input>
                <div className="Info">
                    <div className="row">
                        <Button onClick={()=> this.onClearDisplay()}>AC</Button>
                        <Button onClick={()=> this.onToggleSign()}>+/-</Button>
                        <Button onClick={()=> this.onPercent()}>%</Button>
                        <Button onClick={()=> this.addtoOperator('/')}  classItem="operator">/</Button>
                    </div>
                    <div className="row">
                        <Button onClick={()=> this.addtoDigit('7')}>7</Button>
                        <Button onClick={()=> this.addtoDigit('8')}>8</Button>
                        <Button onClick={()=> this.addtoDigit('9')}>9</Button>
                        <Button onClick={()=> this.addtoOperator('*')} classItem="operator">*</Button>
                    </div>
                    <div className="row">
                        <Button onClick={()=> this.addtoDigit('4')}>4</Button>
                        <Button onClick={()=> this.addtoDigit('5')}>5</Button>
                        <Button onClick={()=> this.addtoDigit('6')}>6</Button>
                        <Button onClick={()=> this.addtoOperator('-')} classItem="operator">-</Button>
                    </div>
                    <div className="row">
                        <Button onClick={()=> this.addtoDigit('1')}>1</Button>
                        <Button onClick={()=> this.addtoDigit('2')}>2</Button>
                        <Button onClick={()=> this.addtoDigit('3')}>3</Button>
                        <Button onClick={()=> this.addtoOperator('+')}  classItem="operator">+</Button>
                    </div>
                    <div className="row">
                        <Button onClick={()=> this.addtoDigit('0')} classItem="zero">0</Button>
                        <Button onClick={()=> this.addtoDot()}>.</Button>
                        <Button onClick={()=> this.inputReturn()} classItem="operator">=</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Caculator;