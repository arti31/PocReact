var React = require('react');


const CalculatorComponent = (props) => {
    const {handleClick,performOperation,clearDisplay } = props;
    return (
        <div className = "parentClass">
            <div className="result">
            {props.displayValue}
            </div>
            <div className="calculatorParent">
                <div id="7" className="numberClass" onClick = {(e) => {handleClick(7)}}>7</div>
                <div id="8" className="numberClass" onClick = {(e) => {handleClick(8)}}>8</div>
                <div id="9" className="numberClass" onClick = {(e) => {handleClick(9)}}>9</div>
                <div id="mul" className="numberClass" onClick = {(e) => {performOperation('*')}}>*</div>
            </div>
            <div className="calculatorParent">
                <div id="4" className="numberClass" onClick = {(e) => {handleClick(4)}}>4</div>
                <div id="5" className="numberClass" onClick = {(e) => {handleClick(5)}}>5</div>
                <div id="6" className="numberClass" onClick = {(e) => {handleClick(6)}}>6</div>
                <div id="sub" className="numberClass" onClick = {(e) => {performOperation('-')}}>-</div>
            </div>
            <div className="calculatorParent">
                <div id="1" className="numberClass" onClick = {(e) => {handleClick(1)}}>1</div>
                <div id="2" className="numberClass" onClick = {(e) => {handleClick(2)}}>2</div>
                <div id="3" className="numberClass" onClick = {(e) => {handleClick(3)}}>3</div>
                <div id="add" className="numberClass" onClick = {(e) => {performOperation('+')}}>+</div>
            </div>
            <div className="calculatorParent">
                <div id="0" className="numberClass" onClick = {(e) => {handleClick(0)}}>0</div>
                <div id="xyz" className="numberClass">&nbsp; </div>
                <div id="AC" className="numberClass" onClick = {(e) => {clearDisplay()}}>AC</div>
                <div id="equals" className="numberClass" onClick = {(e) => {performOperation('=')}}>=</div>
            </div>
        </div>
    )
}


export default CalculatorComponent;