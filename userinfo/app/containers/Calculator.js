var React = require('react');
import CalculatorComponent from '../components/CalculatorComponent';
const mathsOperations = {
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue
  }

class Calculator extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            value: null,
            displayValue: '0',
            operator: null,
            waiting: false
          };
    }
    handleClick = (digit) => {
        const { displayValue, waiting } = this.state
        
        if (waiting) {
          this.setState({
            displayValue: String(digit),
            waiting: false
          })
        } else {
          this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + digit
          })
        }
      }
      
      performOperation = (nextOperator) => {    
        const { value, displayValue, operator } = this.state
        const inputValue = parseFloat(displayValue)
        if (value == null) {
          this.setState({
            value: inputValue
          })
        } else if (operator) {
          const currentValue = value || 0
          const newValue = mathsOperations[operator](currentValue, inputValue)
          
          this.setState({
            value: newValue,
            displayValue: String(newValue)
          })
        }
        
        this.setState({
          waiting: true,
          operator: nextOperator
        })
      }
      
      clearDisplay = () => {
        this.setState({
          displayValue: '0'
        })
      }
    
    render() {
        const { displayValue } = this.state
        return <CalculatorComponent 
        handleClick = {this.handleClick}
        displayValue = {displayValue}
        clearDisplay = {this.clearDisplay}      
        performOperation = {this.performOperation}
     />; 
    }
}

export default Calculator;

